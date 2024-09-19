define("PartnersHub.Home.CommissionPlans.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "OutSystemsUI.model", "OutSystemsUI.Utilities.Separator.mvc$model", "OutSystemsUI.Adaptive.DisplayOnDevice.mvc$model", "OutSystemsUI.Interaction.Carousel.mvc$model", "OutSystemsUI.model$ST_660adb7a9db48bff1b12c6e03515b415Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "OutSystemsUI.model$ST_7d99fd1de65649f174aff6854b052539Structure"], function(OSRuntimeCore, PartnersHubModel, OutSystemsUIModel, OutSystemsUI_Utilities_Separator_mvcModel, OutSystemsUI_Adaptive_DisplayOnDevice_mvcModel, OutSystemsUI_Interaction_Carousel_mvcModel) {
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
                Model._hasValidationWidgetsValue = ((OutSystemsUI_Utilities_Separator_mvcModel.hasValidationWidgets || OutSystemsUI_Adaptive_DisplayOnDevice_mvcModel.hasValidationWidgets) || OutSystemsUI_Interaction_Carousel_mvcModel.hasValidationWidgets);
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.Home.CommissionPlans.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "OutSystemsUI.model", "react", "@outsystems/runtime-view-js", "PartnersHub.Home.CommissionPlans.mvc$model", "PartnersHub.Home.CommissionPlans.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "OutSystemsUI.Utilities.Separator.mvc$view", "OutSystemsUI.Adaptive.DisplayOnDevice.mvc$view", "OutSystemsUI.Interaction.Carousel.mvc$view", "OutSystemsUI.model$ST_660adb7a9db48bff1b12c6e03515b415Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "OutSystemsUI.model$ST_7d99fd1de65649f174aff6854b052539Structure"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, OutSystemsUIModel, React, OSView, PartnersHub_Home_CommissionPlans_mvc_model, PartnersHub_Home_CommissionPlans_mvc_controller, PartnersHubClientVariables, OSWidgets, OutSystemsUI_Utilities_Separator_mvc_view, OutSystemsUI_Adaptive_DisplayOnDevice_mvc_view, OutSystemsUI_Interaction_Carousel_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "Home.CommissionPlans";
        }

        static getAttributes() {
            return {
                codeFunction: "CommissionPlans",
                functionKey: "5fa3ec0e-e03b-4ce3-90a7-e6d76785291b",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Home.CommissionPlans.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [OutSystemsUI_Utilities_Separator_mvc_view, OutSystemsUI_Adaptive_DisplayOnDevice_mvc_view, OutSystemsUI_Interaction_Carousel_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_Home_CommissionPlans_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_Home_CommissionPlans_mvc_controller;
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
                    style: "border: 1px solid #DEE2E6; border-radius: 8px; gap: 16px; padding: 16px;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "100%"
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
                    style: "display: flex; flex-direction: column; gap: 16px;"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.AdvancedHtml, {
                tag: "h5",
                _idProps: {
                    service: idService,
                    uuid: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    "OSTagName": "h5"
                },
                style: "container-title",
                text: [$text(getTranslation("yv0JmcsVO0iSMrOM9NG6XA#Value", "You can earn commissions from"))],
                _idProps: {
                    service: idService,
                    name: "Youcanearncommissionsfrom"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "cfd-container",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "4"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.AdvancedHtml, {
                extendedProperties: {
                    value: "CFDs"
                },
                tag: "h6",
                _idProps: {
                    service: idService,
                    uuid: "5"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                style: "section-subtitle",
                text: [$text(getTranslation("gFPe6yylxEaejJx_2HySgQ#Value", "CFDs"))],
                _idProps: {
                    service: idService,
                    uuid: "6"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Label, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                _idProps: {
                    service: idService,
                    uuid: "7"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                style: "description",
                text: [$text(getTranslation("GhDO2DQmRU+HH31OjhQMRQ#Value", "Earn with our instrument-based commission plan."))],
                _idProps: {
                    service: idService,
                    uuid: "8"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "color: #222; cursor: pointer; font-weight: bold; margin-left: 4px; text-decoration: underline;"
                },
                style: "learn-more",
                text: [$text(getTranslation("3Mst69ljQUSYkHB+A283Ig#Value", "Learn more"))],
                _idProps: {
                    service: idService,
                    uuid: "9"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))), React.createElement(OutSystemsUI_Utilities_Separator_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    Space: PartnersHubModel.staticEntities.space.small
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
                    uuid: "10",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "display: flex; flex-direction: column; gap: 8px;"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "11"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.AdvancedHtml, {
                tag: "h6",
                _idProps: {
                    service: idService,
                    uuid: "12"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                style: "section-subtitle",
                text: [$text(getTranslation("gk2KnLQCD0KeRtMYuvpOAw#Value", "Options trading"))],
                _idProps: {
                    service: idService,
                    uuid: "13"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OutSystemsUI_Adaptive_DisplayOnDevice_mvc_view, {
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
                    uuid: "14",
                    alias: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    onDesktop: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "display: flex; gap: 8px;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "15"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "border: 1px solid #DEE2E6; border-radius: 8px; display: flex; flex-direction: column; gap: 8px; padding: 16px;"
                            },
                            gridProperties: {
                                classes: "OSInline",
                                width: "100%"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "RevShare"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "padding: 0;"
                            },
                            style: "ph-card-title",
                            text: [$text(getTranslation("jLzVa2m9oEGnkW5OrULuCg#Value", "RevShare plan"))],
                            _idProps: {
                                service: idService,
                                uuid: "17"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "18"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Label, {
                            extendedProperties: {
                                style: "display: flex; flex-direction: column;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            _idProps: {
                                service: idService,
                                uuid: "19"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            style: "description",
                            text: [$text(getTranslation("jJ8nLPwM20+t2pixjceWoQ#Value", "Earn up to 40% commissions from client trades. "))],
                            _idProps: {
                                service: idService,
                                uuid: "20"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "color: #222; cursor: pointer; font-weight: bold; text-decoration: underline;"
                            },
                            style: "learn-more",
                            text: [$text(getTranslation("6hI64MVKEEuOSA17cteDQQ#Value", "Learn more"))],
                            _idProps: {
                                service: idService,
                                uuid: "21"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "border: 1px solid #DEE2E6; border-radius: 8px; display: flex; flex-direction: column; gap: 8px; padding: 16px;"
                            },
                            gridProperties: {
                                classes: "OSInline",
                                width: "100%"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "Turnover"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-weight: 700;"
                            },
                            style: "ph-card-title",
                            text: [$text(getTranslation("rCfVQRCOwUeOjLc5k9bK_g#Value", "Turnover plan"))],
                            _idProps: {
                                service: idService,
                                uuid: "23"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "24"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Label, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            _idProps: {
                                service: idService,
                                uuid: "25"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            style: "description",
                            text: [$text(getTranslation("JtPablj72ka6iT8yDu3afA#Value", "Earn based on each contract\'s payout probability. "))],
                            _idProps: {
                                service: idService,
                                uuid: "26"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedEvents: {
                                onClick: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.onClickToTurnoverPlan$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "27"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "color: #222; cursor: pointer; font-weight: bold; text-decoration: underline;"
                            },
                            style: "learn-more",
                            text: [$text(getTranslation("jb90e8yGVUK6svjpp0bwUg#Value", "Learn more"))],
                            _idProps: {
                                service: idService,
                                uuid: "28"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))))))];
                    }),
                    onTablet: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "display: flex; gap: 8px;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "29"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "border: 1px solid #DEE2E6; border-radius: 8px; display: flex; flex-direction: column; gap: 8px; padding: 16px;"
                            },
                            gridProperties: {
                                classes: "OSInline",
                                width: "100%"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "RevShare3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "padding: 0px;"
                            },
                            style: "ph-card-title",
                            text: [$text(getTranslation("MBxZcxTX8kCa_CS2kWFtRA#Value", "RevShare plan"))],
                            _idProps: {
                                service: idService,
                                uuid: "31"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "32"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Label, {
                            extendedProperties: {
                                style: "display: flex; flex-direction: column;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            _idProps: {
                                service: idService,
                                uuid: "33"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            style: "description",
                            text: [$text(getTranslation("AM3kjT8sL0W1zK3wc7lrOQ#Value", "Earn up to 40% commissions from client trades. "))],
                            _idProps: {
                                service: idService,
                                uuid: "34"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Text, {
                            style: "learn-more",
                            text: [$text(getTranslation("RyNtCxoVBE6ox+lPZrh0Qw#Value", "Learn more"))],
                            _idProps: {
                                service: idService,
                                uuid: "35"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "border: 1px solid #DEE2E6; border-radius: 8px; display: flex; flex-direction: column; gap: 8px; padding: 16px;"
                            },
                            gridProperties: {
                                classes: "OSInline",
                                width: "100%"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "Turnover3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "padding: 0px;"
                            },
                            style: "ph-card-title",
                            text: [$text(getTranslation("1eBXIyzyg0qx3nrHmQDNiQ#Value", "Turnover plan"))],
                            _idProps: {
                                service: idService,
                                uuid: "37"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "38"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Label, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            _idProps: {
                                service: idService,
                                uuid: "39"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            style: "description",
                            text: [$text(getTranslation("SepJyYaIZ0+8kxwRmo4Dbg#Value", "Earn based on each contract\'s payout probability. "))],
                            _idProps: {
                                service: idService,
                                uuid: "40"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedEvents: {
                                onClick: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.onClickToTurnoverPlan$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "41"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            style: "learn-more",
                            text: [$text(getTranslation("pb9_wp5IckGXwpbZJxsYcg#Value", "Learn more"))],
                            _idProps: {
                                service: idService,
                                uuid: "42"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))))))];
                    }),
                    onPhone: new PlaceholderContent(function() {
                        return [React.createElement(OutSystemsUI_Interaction_Carousel_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                OptionalConfigs: model.getCachedValue(idService.getId("+UgS1hIjN0K9wz4MCX1UUQ.OptionalConfigs"), function() {
                                    return function() {
                                        var rec = new OutSystemsUIModel.ST_7d99fd1de65649f174aff6854b052539Structure();
                                        rec.autoPlayAttr = false;
                                        rec.loopAttr = false;
                                        rec.itemsGapAttr = "8";
                                        return rec;
                                    }();
                                })
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
                                uuid: "43",
                                alias: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                carouselItems: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "border: 1px solid #DEE2E6; border-radius: 8px; display: flex; flex-direction: column; gap: 8px; padding: 16px;"
                                        },
                                        gridProperties: {
                                            classes: "OSInline",
                                            width: "228px"
                                        },
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            name: "RevShare2"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Text, {
                                        extendedProperties: {
                                            style: "padding: 0px;"
                                        },
                                        style: "ph-card-title",
                                        text: [$text(getTranslation("jSsy64RznE2cFM4wpU5ikg#Value", "RevShare plan"))],
                                        _idProps: {
                                            service: idService,
                                            uuid: "45"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "46"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.AdvancedHtml, {
                                        tag: "span",
                                        _idProps: {
                                            service: idService,
                                            uuid: "47"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Text, {
                                        style: "description",
                                        text: [$text(getTranslation("hFtAvU1qskuUiUzagzDUZw#Value", "Earn up to 40% commissions from client trades. "))],
                                        _idProps: {
                                            service: idService,
                                            uuid: "48"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), React.createElement(OSWidgets.Text, {
                                        style: "learn-more",
                                        text: [$text(getTranslation("DE9GtnXiZEe9f2PEuW9X7Q#Value", "Learn more"))],
                                        _idProps: {
                                            service: idService,
                                            uuid: "49"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })))), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "border: 1px solid #DEE2E6; border-radius: 8px; display: flex; flex-direction: column; gap: 8px; padding: 16px;"
                                        },
                                        gridProperties: {
                                            classes: "OSInline",
                                            width: "228px",
                                            marginLeft: "8px"
                                        },
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            name: "Turnover2"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Text, {
                                        extendedProperties: {
                                            style: "padding: 0px;"
                                        },
                                        style: "ph-card-title",
                                        text: [$text(getTranslation("cersVruy0EKVyA2R+lHM7g#Value", "Turnover plan"))],
                                        _idProps: {
                                            service: idService,
                                            uuid: "51"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "52"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.AdvancedHtml, {
                                        tag: "span",
                                        _idProps: {
                                            service: idService,
                                            uuid: "53"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Text, {
                                        style: "description",
                                        text: [$text(getTranslation("EKoSIPn3hkGdR0Difafweg#Value", "Earn based on each contract\'s payout probability. "))],
                                        _idProps: {
                                            service: idService,
                                            uuid: "54"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), React.createElement(OSWidgets.Text, {
                                        style: "learn-more",
                                        text: [$text(getTranslation("_aY_Z__0P02XRUdwjVWALg#Value", "Learn more"))],
                                        _idProps: {
                                            service: idService,
                                            uuid: "55"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }))))];
                                })
                            },
                            _dependencies: []
                        })];
                    })
                },
                _dependencies: []
            })))));
        }
    }

    return View;
});
define("PartnersHub.Home.CommissionPlans.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "OutSystemsUI.model", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.Home.CommissionPlans.mvc$translationsResources", "OutSystemsUI.model$ST_660adb7a9db48bff1b12c6e03515b415Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "OutSystemsUI.model$ST_7d99fd1de65649f174aff6854b052539Structure"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, OutSystemsUIModel, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_Home_CommissionPlans_mvc_TranslationsResources) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_Home_CommissionPlans_mvc_TranslationsResources);
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
            get _onClickToTurnoverPlan$Action() {
                if (!(this.hasOwnProperty("__onClickToTurnoverPlan$Action"))) {
                    this.__onClickToTurnoverPlan$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickToTurnoverPlan", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickToTurnoverPlan");
                                span.setAttribute("outsystems.function.key", "57fb401e-36c4-4e08-a29c-be8dbd1c9419");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnClickToTurnoverPlan");
                                callContext = controller.callContext(callContext);
                                // Destination: /PartnersHub/Turnover
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "Turnover", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onClickToTurnoverPlan$Action;
            }
            set _onClickToTurnoverPlan$Action(value) {
                this.__onClickToTurnoverPlan$Action = value;
            }


            onClickToTurnoverPlan$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickToTurnoverPlan__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickToTurnoverPlan");
                        span.setAttribute("outsystems.function.key", "57fb401e-36c4-4e08-a29c-be8dbd1c9419");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onClickToTurnoverPlan$Action, callContext);
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


define("PartnersHub.Home.CommissionPlans.mvc$translationsResources.de-DE", [], function() {
    return {
        "_aY_Z__0P02XRUdwjVWALg#Value": "Mehr erfahren",
        "EKoSIPn3hkGdR0Difafweg#Value": "Verdienen Sie basierend auf der Auszahlungswahrscheinlichkeit jedes Vertrags.",
        "cersVruy0EKVyA2R+lHM7g#Value": "Umsatzplan",
        "DE9GtnXiZEe9f2PEuW9X7Q#Value": "Mehr erfahren",
        "hFtAvU1qskuUiUzagzDUZw#Value": "Verdienen Sie bis zu 40 % Provisionen aus den Handelsgeschäften Ihrer Kunden.",
        "jSsy64RznE2cFM4wpU5ikg#Value": "RevShare-Plan",
        "pb9_wp5IckGXwpbZJxsYcg#Value": "Mehr erfahren",
        "SepJyYaIZ0+8kxwRmo4Dbg#Value": "Verdienen Sie basierend auf der Auszahlungswahrscheinlichkeit jedes Vertrags.",
        "1eBXIyzyg0qx3nrHmQDNiQ#Value": "Umsatzplan",
        "RyNtCxoVBE6ox+lPZrh0Qw#Value": "Erfahren Sie mehr",
        "AM3kjT8sL0W1zK3wc7lrOQ#Value": "Verdienen Sie bis zu 40 % Provisionen aus den Trades von Kunden.",
        "MBxZcxTX8kCa_CS2kWFtRA#Value": "RevShare-Plan",
        "jb90e8yGVUK6svjpp0bwUg#Value": "Mehr erfahren",
        "JtPablj72ka6iT8yDu3afA#Value": "Verdienen Sie basierend auf der Auszahlungwahrscheinlichkeit jedes Vertrags.",
        "rCfVQRCOwUeOjLc5k9bK_g#Value": "Umsatzplan",
        "6hI64MVKEEuOSA17cteDQQ#Value": "Mehr erfahren",
        "jJ8nLPwM20+t2pixjceWoQ#Value": "Verdienen Sie bis zu 40 % Provisionen aus den Trades Ihrer Kunden.",
        "jLzVa2m9oEGnkW5OrULuCg#Value": "RevShare-Plan",
        "gk2KnLQCD0KeRtMYuvpOAw#Value": "Optionenhandel",
        "3Mst69ljQUSYkHB+A283Ig#Value": "Mehr erfahren",
        "GhDO2DQmRU+HH31OjhQMRQ#Value": "Verdienen Sie mit unserem instrumentenbasierten Provisionsplan.",
        "gFPe6yylxEaejJx_2HySgQ#Value": "CFDs",
        "yv0JmcsVO0iSMrOM9NG6XA#Value": "Sie können Provisionen von verdienen"
    };
});

define("PartnersHub.Home.CommissionPlans.mvc$translationsResources.es-ES", [], function() {
    return {
        "_aY_Z__0P02XRUdwjVWALg#Value": "Aprende más",
        "EKoSIPn3hkGdR0Difafweg#Value": "Gana según la probabilidad de pago de cada contrato.",
        "cersVruy0EKVyA2R+lHM7g#Value": "Plan de volumen",
        "DE9GtnXiZEe9f2PEuW9X7Q#Value": "Aprende más",
        "hFtAvU1qskuUiUzagzDUZw#Value": "Gane hasta un 40% de comisiones por las operaciones de los clientes.",
        "jSsy64RznE2cFM4wpU5ikg#Value": "Plan de RevShare",
        "pb9_wp5IckGXwpbZJxsYcg#Value": "Aprender más",
        "SepJyYaIZ0+8kxwRmo4Dbg#Value": "Gana según la probabilidad de pago de cada contrato.",
        "1eBXIyzyg0qx3nrHmQDNiQ#Value": "Plan de facturación",
        "RyNtCxoVBE6ox+lPZrh0Qw#Value": "Aprende más",
        "AM3kjT8sL0W1zK3wc7lrOQ#Value": "Gana hasta un 40 % de comisiones por las operaciones de los clientes.",
        "MBxZcxTX8kCa_CS2kWFtRA#Value": "Plan de RevShare",
        "jb90e8yGVUK6svjpp0bwUg#Value": "Aprende más",
        "JtPablj72ka6iT8yDu3afA#Value": "Gana según la probabilidad de pago de cada contrato.",
        "rCfVQRCOwUeOjLc5k9bK_g#Value": "Plan de facturación",
        "6hI64MVKEEuOSA17cteDQQ#Value": "Aprende más",
        "jJ8nLPwM20+t2pixjceWoQ#Value": "Gana hasta un 40% de comisiones por las operaciones de los clientes.",
        "jLzVa2m9oEGnkW5OrULuCg#Value": "Plan de RevShare",
        "gk2KnLQCD0KeRtMYuvpOAw#Value": "comercio de opciones",
        "3Mst69ljQUSYkHB+A283Ig#Value": "Aprende más",
        "GhDO2DQmRU+HH31OjhQMRQ#Value": "Gana con nuestro plan de comisiones basado en instrumentos.",
        "gFPe6yylxEaejJx_2HySgQ#Value": "CFDs",
        "yv0JmcsVO0iSMrOM9NG6XA#Value": "Puedes ganar comisiones de"
    };
});

define("PartnersHub.Home.CommissionPlans.mvc$translationsResources.fr-FR", [], function() {
    return {
        "_aY_Z__0P02XRUdwjVWALg#Value": "En savoir plus",
        "EKoSIPn3hkGdR0Difafweg#Value": "Gagnez en fonction de la probabilité de paiement de chaque contrat.",
        "cersVruy0EKVyA2R+lHM7g#Value": "Plan de chiffre d\'affaires",
        "DE9GtnXiZEe9f2PEuW9X7Q#Value": "En savoir plus",
        "hFtAvU1qskuUiUzagzDUZw#Value": "Gagnez jusqu\'à 40 % de commissions sur les transactions des clients.",
        "jSsy64RznE2cFM4wpU5ikg#Value": "Plan RevShare",
        "pb9_wp5IckGXwpbZJxsYcg#Value": "En savoir plus",
        "SepJyYaIZ0+8kxwRmo4Dbg#Value": "Gagnez en fonction de la probabilité de paiement de chaque contrat.",
        "1eBXIyzyg0qx3nrHmQDNiQ#Value": "Plan de chiffre d\'affaires",
        "RyNtCxoVBE6ox+lPZrh0Qw#Value": "En savoir plus",
        "AM3kjT8sL0W1zK3wc7lrOQ#Value": "Gagnez jusqu\'à 40 % de commissions sur les transactions des clients.",
        "MBxZcxTX8kCa_CS2kWFtRA#Value": "Plan RevShare",
        "jb90e8yGVUK6svjpp0bwUg#Value": "En savoir plus",
        "JtPablj72ka6iT8yDu3afA#Value": "Gagnez en fonction de la probabilité de paiement de chaque contrat.",
        "rCfVQRCOwUeOjLc5k9bK_g#Value": "Plan de chiffre d\'affaires",
        "6hI64MVKEEuOSA17cteDQQ#Value": "En savoir plus",
        "jJ8nLPwM20+t2pixjceWoQ#Value": "Gagnez jusqu\'à 40 % de commissions sur les transactions des clients.",
        "jLzVa2m9oEGnkW5OrULuCg#Value": "Plan RevShare",
        "gk2KnLQCD0KeRtMYuvpOAw#Value": "trading d\'options",
        "3Mst69ljQUSYkHB+A283Ig#Value": "En savoir plus",
        "GhDO2DQmRU+HH31OjhQMRQ#Value": "Gagnez avec notre plan de commission basé sur les instruments.",
        "gFPe6yylxEaejJx_2HySgQ#Value": "CFDs",
        "yv0JmcsVO0iSMrOM9NG6XA#Value": "Vous pouvez gagner des commissions de"
    };
});

define("PartnersHub.Home.CommissionPlans.mvc$translationsResources.it-IT", [], function() {
    return {
        "_aY_Z__0P02XRUdwjVWALg#Value": "Scopri di più",
        "EKoSIPn3hkGdR0Difafweg#Value": "Guadagna in base alla probabilità di pagamento di ciascun contratto.",
        "cersVruy0EKVyA2R+lHM7g#Value": "Piano di fatturato",
        "DE9GtnXiZEe9f2PEuW9X7Q#Value": "Scopri di più",
        "hFtAvU1qskuUiUzagzDUZw#Value": "Guadagna fino al 40% di commissioni dalle operazioni dei clienti.",
        "jSsy64RznE2cFM4wpU5ikg#Value": "Piano RevShare",
        "pb9_wp5IckGXwpbZJxsYcg#Value": "Scopri di più",
        "SepJyYaIZ0+8kxwRmo4Dbg#Value": "Guadagna in base alla probabilità di pagamento di ciascun contratto.",
        "1eBXIyzyg0qx3nrHmQDNiQ#Value": "Piano di fatturato",
        "RyNtCxoVBE6ox+lPZrh0Qw#Value": "Scopri di più",
        "AM3kjT8sL0W1zK3wc7lrOQ#Value": "Guadagna fino al 40% di commissioni dai trade dei clienti.",
        "MBxZcxTX8kCa_CS2kWFtRA#Value": "Piano RevShare",
        "jb90e8yGVUK6svjpp0bwUg#Value": "Scopri di più",
        "JtPablj72ka6iT8yDu3afA#Value": "Guadagna in base alla probabilità di pagamento di ciascun contratto.",
        "rCfVQRCOwUeOjLc5k9bK_g#Value": "Piano di fatturato",
        "6hI64MVKEEuOSA17cteDQQ#Value": "Scopri di più",
        "jJ8nLPwM20+t2pixjceWoQ#Value": "Guadagna fino al 40% di commissioni dai trade dei tuoi clienti.",
        "jLzVa2m9oEGnkW5OrULuCg#Value": "Piano RevShare",
        "gk2KnLQCD0KeRtMYuvpOAw#Value": "trading di opzioni",
        "3Mst69ljQUSYkHB+A283Ig#Value": "Scopri di più",
        "GhDO2DQmRU+HH31OjhQMRQ#Value": "Guadagna con il nostro piano commissionale basato sugli strumenti.",
        "gFPe6yylxEaejJx_2HySgQ#Value": "CFDs",
        "yv0JmcsVO0iSMrOM9NG6XA#Value": "Puoi guadagnare commissioni da"
    };
});

define("PartnersHub.Home.CommissionPlans.mvc$translationsResources.pl-PL", [], function() {
    return {
        "_aY_Z__0P02XRUdwjVWALg#Value": "Dowiedz się więcej",
        "EKoSIPn3hkGdR0Difafweg#Value": "Zarabiaj w oparciu o prawdopodobieństwo wypłaty każdego kontraktu.",
        "cersVruy0EKVyA2R+lHM7g#Value": "Plan obrotu",
        "DE9GtnXiZEe9f2PEuW9X7Q#Value": "Dowiedz się więcej",
        "hFtAvU1qskuUiUzagzDUZw#Value": "Zarabiaj do 40% prowizji od transakcji klientów.",
        "jSsy64RznE2cFM4wpU5ikg#Value": "Plan RevShare",
        "pb9_wp5IckGXwpbZJxsYcg#Value": "Dowiedz się więcej",
        "SepJyYaIZ0+8kxwRmo4Dbg#Value": "Zarabiaj na podstawie prawdopodobieństwa wypłaty każdego kontraktu.",
        "1eBXIyzyg0qx3nrHmQDNiQ#Value": "Plan obrotu",
        "RyNtCxoVBE6ox+lPZrh0Qw#Value": "Dowiedz się więcej",
        "AM3kjT8sL0W1zK3wc7lrOQ#Value": "Zarabiaj do 40% prowizji od transakcji klientów.",
        "MBxZcxTX8kCa_CS2kWFtRA#Value": "Plan RevShare",
        "jb90e8yGVUK6svjpp0bwUg#Value": "Dowiedz się więcej",
        "JtPablj72ka6iT8yDu3afA#Value": "Zarabiaj w oparciu o prawdopodobieństwo wypłaty każdego kontraktu.",
        "rCfVQRCOwUeOjLc5k9bK_g#Value": "Plan obrotu",
        "6hI64MVKEEuOSA17cteDQQ#Value": "Dowiedz się więcej",
        "jJ8nLPwM20+t2pixjceWoQ#Value": "Zarabiaj do 40% prowizji od transakcji klientów.",
        "jLzVa2m9oEGnkW5OrULuCg#Value": "Plan RevShare",
        "gk2KnLQCD0KeRtMYuvpOAw#Value": "handel opcjami",
        "3Mst69ljQUSYkHB+A283Ig#Value": "Dowiedz się więcej",
        "GhDO2DQmRU+HH31OjhQMRQ#Value": "Zarabiaj z naszym planem prowizyjnym opartym na instrumentach.",
        "gFPe6yylxEaejJx_2HySgQ#Value": "CFDs",
        "yv0JmcsVO0iSMrOM9NG6XA#Value": "Możesz zarabiać prowizje z"
    };
});

define("PartnersHub.Home.CommissionPlans.mvc$translationsResources.pt-PT", [], function() {
    return {
        "_aY_Z__0P02XRUdwjVWALg#Value": "Saiba mais",
        "EKoSIPn3hkGdR0Difafweg#Value": "Ganhe com base na probabilidade de pagamento de cada contrato.",
        "cersVruy0EKVyA2R+lHM7g#Value": "Plano de faturamento",
        "DE9GtnXiZEe9f2PEuW9X7Q#Value": "Saiba mais",
        "hFtAvU1qskuUiUzagzDUZw#Value": "Ganhe até 40% de comissões nas operações dos clientes.",
        "jSsy64RznE2cFM4wpU5ikg#Value": "Plano RevShare",
        "pb9_wp5IckGXwpbZJxsYcg#Value": "Saber mais",
        "SepJyYaIZ0+8kxwRmo4Dbg#Value": "Ganhe com base na probabilidade de pagamento de cada contrato.",
        "1eBXIyzyg0qx3nrHmQDNiQ#Value": "Plano de faturamento",
        "RyNtCxoVBE6ox+lPZrh0Qw#Value": "Saiba mais",
        "AM3kjT8sL0W1zK3wc7lrOQ#Value": "Ganhe até 40% de comissões com as operações dos clientes.",
        "MBxZcxTX8kCa_CS2kWFtRA#Value": "Plano RevShare",
        "jb90e8yGVUK6svjpp0bwUg#Value": "Saiba mais",
        "JtPablj72ka6iT8yDu3afA#Value": "Ganhe com base na probabilidade de pagamento de cada contrato.",
        "rCfVQRCOwUeOjLc5k9bK_g#Value": "Plano de faturamento",
        "6hI64MVKEEuOSA17cteDQQ#Value": "Saiba mais",
        "jJ8nLPwM20+t2pixjceWoQ#Value": "Ganhe até 40% de comissões com as operações dos clientes.",
        "jLzVa2m9oEGnkW5OrULuCg#Value": "Plano RevShare",
        "gk2KnLQCD0KeRtMYuvpOAw#Value": "negociação de opções",
        "3Mst69ljQUSYkHB+A283Ig#Value": "Saiba mais",
        "GhDO2DQmRU+HH31OjhQMRQ#Value": "Ganhe com o nosso plano de comissões baseado em instrumentos.",
        "gFPe6yylxEaejJx_2HySgQ#Value": "CFDs",
        "yv0JmcsVO0iSMrOM9NG6XA#Value": "Você pode ganhar comissões de"
    };
});

define("PartnersHub.Home.CommissionPlans.mvc$translationsResources.ru-RU", [], function() {
    return {
        "_aY_Z__0P02XRUdwjVWALg#Value": "Узнать больше",
        "EKoSIPn3hkGdR0Difafweg#Value": "Зарабатывайте в зависимости от вероятности выплаты по каждому контракту.",
        "cersVruy0EKVyA2R+lHM7g#Value": "План оборота",
        "DE9GtnXiZEe9f2PEuW9X7Q#Value": "Узнать больше",
        "hFtAvU1qskuUiUzagzDUZw#Value": "Зарабатывайте до 40% комиссий от сделок клиентов.",
        "jSsy64RznE2cFM4wpU5ikg#Value": "План RevShare",
        "pb9_wp5IckGXwpbZJxsYcg#Value": "Узнать больше",
        "SepJyYaIZ0+8kxwRmo4Dbg#Value": "Зарабатывайте в зависимости от вероятности выплаты по каждому контракту.",
        "1eBXIyzyg0qx3nrHmQDNiQ#Value": "План оборота",
        "RyNtCxoVBE6ox+lPZrh0Qw#Value": "Узнать больше",
        "AM3kjT8sL0W1zK3wc7lrOQ#Value": "Зарабатывайте до 40% комиссий с торгов клиентов.",
        "MBxZcxTX8kCa_CS2kWFtRA#Value": "План RevShare",
        "jb90e8yGVUK6svjpp0bwUg#Value": "Узнать больше",
        "JtPablj72ka6iT8yDu3afA#Value": "Зарабатывайте на основе вероятности выплаты по каждому контракту.",
        "rCfVQRCOwUeOjLc5k9bK_g#Value": "План оборота",
        "6hI64MVKEEuOSA17cteDQQ#Value": "Узнать больше",
        "jJ8nLPwM20+t2pixjceWoQ#Value": "Зарабатывайте до 40% комиссий с торгов клиентов.",
        "jLzVa2m9oEGnkW5OrULuCg#Value": "План RevShare",
        "gk2KnLQCD0KeRtMYuvpOAw#Value": "торговля опционами",
        "3Mst69ljQUSYkHB+A283Ig#Value": "Узнать больше",
        "GhDO2DQmRU+HH31OjhQMRQ#Value": "Зарабатывайте с нашим комиссионным планом, основанным на инструментах.",
        "gFPe6yylxEaejJx_2HySgQ#Value": "CFDs",
        "yv0JmcsVO0iSMrOM9NG6XA#Value": "Вы можете зарабатывать комиссионные от"
    };
});

define("PartnersHub.Home.CommissionPlans.mvc$translationsResources", ["exports", "PartnersHub.Home.CommissionPlans.mvc$translationsResources.de-DE", "PartnersHub.Home.CommissionPlans.mvc$translationsResources.es-ES", "PartnersHub.Home.CommissionPlans.mvc$translationsResources.fr-FR", "PartnersHub.Home.CommissionPlans.mvc$translationsResources.it-IT", "PartnersHub.Home.CommissionPlans.mvc$translationsResources.pl-PL", "PartnersHub.Home.CommissionPlans.mvc$translationsResources.pt-PT", "PartnersHub.Home.CommissionPlans.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_Home_CommissionPlans_mvc_translationsResources_deDE, PartnersHub_Home_CommissionPlans_mvc_translationsResources_esES, PartnersHub_Home_CommissionPlans_mvc_translationsResources_frFR, PartnersHub_Home_CommissionPlans_mvc_translationsResources_itIT, PartnersHub_Home_CommissionPlans_mvc_translationsResources_plPL, PartnersHub_Home_CommissionPlans_mvc_translationsResources_ptPT, PartnersHub_Home_CommissionPlans_mvc_translationsResources_ruRU) {
    return {
        "de-DE": {
            "translations": PartnersHub_Home_CommissionPlans_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_Home_CommissionPlans_mvc_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_Home_CommissionPlans_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_Home_CommissionPlans_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_Home_CommissionPlans_mvc_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_Home_CommissionPlans_mvc_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_Home_CommissionPlans_mvc_translationsResources_ruRU,
            "isRTL": false
        }
    };
});