define("PartnersHub.CommissionPlans.RevShare.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.Layouts.LayoutDashboard.mvc$model", "PartnersHub.model$RC_a67f16d1367e48674c0278c0312479e0", "PartnersHub.model$RL_ca06e5bf8b5ed2faf11935e078ed0bf5", "PartnersHub.model$RC_500d6affd752292b92c8cddd9b92f7b9", "PartnersHub.model$RL_232c89a2d5038d57a9042dc25af9b70b"], function(OSRuntimeCore, PartnersHubModel, PartnersHub_Layouts_LayoutDashboard_mvcModel) {
    var OS = OSRuntimeCore; {
        class GetDigitalOptionsAggrRecInner extends
        OS.Model.AggregateRecord {
            static attributesToDeclare() {
                return [].concat(OS.Model.AggregateRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new GetDigitalOptionsAggrRec(new GetDigitalOptionsAggrRec.RecordClass({
                    RecordListType: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        GetDigitalOptionsAggrRecInner.RecordListType = PartnersHubModel.RL_ca06e5bf8b5ed2faf11935e078ed0bf5;
        var GetDigitalOptionsAggrRec = GetDigitalOptionsAggrRecInner;
        GetDigitalOptionsAggrRec.init();
    } {
        class GetOptionsAggrRecInner extends
        OS.Model.AggregateRecord {
            static attributesToDeclare() {
                return [].concat(OS.Model.AggregateRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new GetOptionsAggrRec(new GetOptionsAggrRec.RecordClass({
                    RecordListType: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        GetOptionsAggrRecInner.RecordListType = PartnersHubModel.RL_232c89a2d5038d57a9042dc25af9b70b;
        var GetOptionsAggrRec = GetOptionsAggrRecInner;
        GetOptionsAggrRec.init();
    }


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("GetDigitalOptions", "getDigitalOptionsAggr", "GetDigitalOptions", true, true, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new GetDigitalOptionsAggrRec());
                    }, true, GetDigitalOptionsAggrRec),
                    this.attr("GetOptions", "getOptionsAggr", "GetOptions", true, true, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new GetOptionsAggrRec());
                    }, true, GetOptionsAggrRec)
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
            if ((Model._hasValidationWidgetsValue === undefined)) {
                Model._hasValidationWidgetsValue = PartnersHub_Layouts_LayoutDashboard_mvcModel.hasValidationWidgets;
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.CommissionPlans.RevShare.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.CommissionPlans.RevShare.mvc$model", "PartnersHub.CommissionPlans.RevShare.mvc$controller", "PartnersHub.clientVariables", "PartnersHub.Layouts.LayoutDashboard.mvc$view", "@outsystems/runtime-widgets-js", "PartnersHub.model$RC_a67f16d1367e48674c0278c0312479e0", "PartnersHub.model$RL_ca06e5bf8b5ed2faf11935e078ed0bf5", "PartnersHub.model$RC_500d6affd752292b92c8cddd9b92f7b9", "PartnersHub.model$RL_232c89a2d5038d57a9042dc25af9b70b"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_CommissionPlans_RevShare_mvc_model, PartnersHub_CommissionPlans_RevShare_mvc_controller, PartnersHubClientVariables, PartnersHub_Layouts_LayoutDashboard_mvc_view, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "CommissionPlans.RevShare";
        }

        static getAttributes() {
            return {
                codeFunction: "RevShare",
                functionKey: "a2764afc-e820-4bf9-bca5-c0c8db44f699",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.CommissionPlans.RevShare.css", "css/PartnersHub.PHubTest.extra.css"];
        }

        static getJsDependencies() {
            return ["scripts/PartnersHub.DerivAnalytics.js"];
        }

        static getBlocks() {
            return [PartnersHub_Layouts_LayoutDashboard_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_CommissionPlans_RevShare_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_CommissionPlans_RevShare_mvc_controller;
        }

        get title() {


            return OSView.BaseView.BaseWebScreen.getTranslation("_Ep2oiDo+Uu8pcDI20T2mQ#Title", "RevShare");
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(PartnersHub_Layouts_LayoutDashboard_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    HasFixedHeader: true
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
                    mainContent: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            gridProperties: {
                                classes: "OSInline"
                            },
                            style: "partners-hub-dashboard",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "1"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "partners-hub-title-container",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "TurnoverTitle"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "align-items: center; display: flex; gap: 24px;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            style: "cp-title",
                            text: [$text(getTranslation("eW2T_16R00yzwZRwI8SvCw#Value", "RevShare"))],
                            _idProps: {
                                service: idService,
                                uuid: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedEvents: {
                                onClick: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.onClick$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            extendedProperties: {
                                style: "cursor: pointer;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "5"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.closenormal.png"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "6"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            gridProperties: {
                                classes: "OSInline"
                            },
                            style: "notification-banner",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "7"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            extendedProperties: {
                                style: "color: #3c33bf; font-size: 8px;"
                            },
                            gridProperties: {
                                width: "20px"
                            },
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.info_black.svg"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "8"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Label, {
                            extendedProperties: {
                                style: "font-size: 12px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            _idProps: {
                                service: idService,
                                uuid: "9"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            style: "to-description",
                            text: [$text(getTranslation("dcf0bwLEWE6wKDSmHcGoRA#Value", "If your RevShare plan isn\'t activated, contact your account manager."))],
                            _idProps: {
                                service: idService,
                                uuid: "10"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "display: flex; flex-direction: column; gap: 6px;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "11"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-weight: 400; line-height: 22px;"
                            },
                            text: [$text(getTranslation("yMa7l9QfeUOT10dgiXYz6Q#Value", "Earn based on the monthly net revenue generated by your clients."))],
                            _idProps: {
                                service: idService,
                                uuid: "12"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "13"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.TableRecords, {
                            showHeader: true,
                            source: model.variables.getOptionsAggr.listOut,
                            style: "table",
                            styleHeader: "table-header",
                            styleRow: "table-row to-description",
                            _idProps: {
                                service: idService,
                                uuid: "14"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getOptionsAggr.dataFetchStatusAttr),
                            placeholders: {
                                headerRow: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.HeaderCell, {
                                        style: "header-color",
                                        _idProps: {
                                            service: idService,
                                            uuid: "15"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    }, React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "text-align: center;"
                                        },
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "16"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Text, {
                                        extendedProperties: {
                                            style: "color: #222;"
                                        },
                                        text: [$text(getTranslation("63K1Z5wjJEWOqIcQFy9o5A#Value", "Type of Option"))],
                                        _idProps: {
                                            service: idService,
                                            uuid: "17"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }))), React.createElement(OSWidgets.HeaderCell, {
                                        _idProps: {
                                            service: idService,
                                            uuid: "18"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    }, React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "text-align: center;"
                                        },
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "19"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Text, {
                                        extendedProperties: {
                                            style: "color: #222;"
                                        },
                                        text: [$text(getTranslation("ykcG0a7WC0agx68C7L_TTg#Value", "Commission"))],
                                        _idProps: {
                                            service: idService,
                                            uuid: "20"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })))];
                                }),
                                row: new IteratorPlaceholderContent(function(idService, callContext) {
                                    return [React.createElement(OSWidgets.RowCell, {
                                        style: "table-row-even",
                                        _idProps: {
                                            service: idService,
                                            uuid: "21"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: [asPrimitiveValue(model.variables.getOptionsAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getOptionsAggr.listOut.getCurrent(callContext.iterationContext).optionsAttr.typeoOptionAttr)]
                                    }, React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "text-align: center;"
                                        },
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "22"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Expression, {
                                        value: model.variables.getOptionsAggr.listOut.getCurrent(callContext.iterationContext).optionsAttr.typeoOptionAttr,
                                        _idProps: {
                                            service: idService,
                                            uuid: "23"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getOptionsAggr.dataFetchStatusAttr)
                                    }))), React.createElement(OSWidgets.RowCell, {
                                        style: "table-row",
                                        _idProps: {
                                            service: idService,
                                            uuid: "24"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: [asPrimitiveValue(model.variables.getOptionsAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getOptionsAggr.listOut.getCurrent(callContext.iterationContext).optionsAttr.commissionAttr)]
                                    }, React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "text-align: center;"
                                        },
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "25"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Expression, {
                                        value: model.variables.getOptionsAggr.listOut.getCurrent(callContext.iterationContext).optionsAttr.commissionAttr,
                                        _idProps: {
                                            service: idService,
                                            uuid: "26"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getOptionsAggr.dataFetchStatusAttr)
                                    })))];
                                }, callContext, idService, "1_0")
                            },
                            _dependencies: [asPrimitiveValue(model.variables.getOptionsAggr.dataFetchStatusAttr)]
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "display: flex; flex-direction: column;"
                            },
                            gridProperties: {
                                classes: "OSInline"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "27"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            style: "to-subtitle",
                            text: ["Disclaimer: "],
                            _idProps: {
                                service: idService,
                                uuid: "28"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.AdvancedHtml, {
                            extendedProperties: {
                                style: "padding-inline-start: 30px",
                                className: "disclaimer-container"
                            },
                            tag: "ul",
                            _idProps: {
                                service: idService,
                                uuid: "29"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.AdvancedHtml, {
                            tag: "li",
                            _idProps: {
                                service: idService,
                                uuid: "30"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, "Affiliates residing in the EU can sign up for the Revenue Share plan but can only refer clients residing outside the EU."), React.createElement(OSWidgets.AdvancedHtml, {
                            tag: "li",
                            _idProps: {
                                service: idService,
                                uuid: "31"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, "Affiliates will earn commission from clients who trade on both official Deriv platforms (Deriv Trader, SmartTrader, Deriv Bot, etc) and third-party platforms via Deriv API."), React.createElement(OSWidgets.AdvancedHtml, {
                            tag: "li",
                            _idProps: {
                                service: idService,
                                uuid: "32"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, "All products are entitled to generate commission except Multiplier Financials."))))];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.getOptionsAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getOptionsAggr.listOut)]
            }));
        }
    }

    return View;
});
define("PartnersHub.CommissionPlans.RevShare.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.CommissionPlans.RevShare.mvc$translationsResources", "PartnersHub.CommissionPlans.controller", "PartnersHub.model$RC_a67f16d1367e48674c0278c0312479e0", "PartnersHub.model$RL_ca06e5bf8b5ed2faf11935e078ed0bf5", "PartnersHub.model$RC_500d6affd752292b92c8cddd9b92f7b9", "PartnersHub.model$RL_232c89a2d5038d57a9042dc25af9b70b"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_CommissionPlans_RevShare_mvc_TranslationsResources, PartnersHub_CommissionPlansController) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_CommissionPlans_RevShare_mvc_TranslationsResources);
                var controller = this.controller;
                this.clientActionProxies = {};
                this.dataFetchDependenciesOriginal = {
                    getDigitalOptions$AggrRefresh: 0,
                    getOptions$AggrRefresh: 0
                };
                this.dataFetchDependentsGraph = {
                    getDigitalOptions$AggrRefresh: [],
                    getOptions$AggrRefresh: []
                };
                this.shouldSendClientVarsToDataSources = false;
            }

            // Server Actions - Methods

            // Aggregates and Data Actions
            get getDigitalOptions$AggrRefresh() {
                if (!(this.hasOwnProperty("_getDigitalOptions$AggrRefresh"))) {
                    this._getDigitalOptions$AggrRefresh = function() {
                        var innerBody = function(maxRecords, startIndex, callContext) {
                            var model = this.model;
                            var controller = this.controller;
                            var callContext = controller.callContext(callContext);
                            return controller.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetDigitalOptions", "screenservices/PartnersHub/CommissionPlans/RevShare/ScreenDataSetGetDigitalOptions", "8QcyFwVSF_ICq5+BXN_SGw", maxRecords, startIndex, function(b) {
                                model.variables.getDigitalOptionsAggr.dataFetchStatusAttr = b;
                            }, function(json) {
                                model.variables.getDigitalOptionsAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getDigitalOptionsAggr.constructor));
                            }, undefined, undefined, undefined, callContext, undefined, true);
                        }.bind(this);
                        return OS.Logger.startActiveSpan("GetDigitalOptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GetDigitalOptions");
                                span.setAttribute("outsystems.function.key", "5e2f6656-0a99-4673-bda1-dd2be1bcdd7e");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_AGGREGATE_CALL");
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

                return this._getDigitalOptions$AggrRefresh;
            }
            set getDigitalOptions$AggrRefresh(value) {
                this._getDigitalOptions$AggrRefresh = value;
            }

            get getOptions$AggrRefresh() {
                if (!(this.hasOwnProperty("_getOptions$AggrRefresh"))) {
                    this._getOptions$AggrRefresh = function() {
                        var innerBody = function(maxRecords, startIndex, callContext) {
                            var model = this.model;
                            var controller = this.controller;
                            var callContext = controller.callContext(callContext);
                            return controller.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetOptions", "screenservices/PartnersHub/CommissionPlans/RevShare/ScreenDataSetGetOptions", "x_JnGq+XhOCXJGW+pr9Skg", maxRecords, startIndex, function(b) {
                                model.variables.getOptionsAggr.dataFetchStatusAttr = b;
                            }, function(json) {
                                model.variables.getOptionsAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getOptionsAggr.constructor));
                            }, undefined, undefined, undefined, callContext, undefined, true);
                        }.bind(this);
                        return OS.Logger.startActiveSpan("GetOptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GetOptions");
                                span.setAttribute("outsystems.function.key", "bc0f4c3c-3ed7-4d8c-96ac-568f5942e8fa");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_AGGREGATE_CALL");
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

                return this._getOptions$AggrRefresh;
            }
            set getOptions$AggrRefresh(value) {
                this._getOptions$AggrRefresh = value;
            }


            get dataFetchActionNames() {
                if (!(this.hasOwnProperty("_dataFetchActionNames"))) {
                    this._dataFetchActionNames = ["getDigitalOptions$AggrRefresh", "getOptions$AggrRefresh"];
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
                                span.setAttribute("outsystems.function.key", "de2c2f41-0759-4393-8a14-5a7ecec4769a");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnClick");
                                callContext = controller.callContext(callContext);
                                // Destination: /PartnersHub/PartnersHubDashboard
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "PartnersHubDashboard", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

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
                        span.setAttribute("outsystems.function.key", "de2c2f41-0759-4393-8a14-5a7ecec4769a");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onClick$Action, callContext);
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
                        return PartnersHub_CommissionPlansController.default.handleError(ex, this.callContext());
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


define("PartnersHub.CommissionPlans.RevShare.mvc$translationsResources.de-DE", [], function() {
    return {
        "ykcG0a7WC0agx68C7L_TTg#Value": "Provision",
        "63K1Z5wjJEWOqIcQFy9o5A#Value": "Art der Option",
        "yMa7l9QfeUOT10dgiXYz6Q#Value": "Verdienen Sie basierend auf der Art der Option, die Ihre Kunden handeln.",
        "dcf0bwLEWE6wKDSmHcGoRA#Value": "Wenn Ihr Turnover-Plan nicht aktiviert ist, kontaktieren Sie Ihren Kontomanager.",
        "eW2T_16R00yzwZRwI8SvCw#Value": "Umsatz"
    };
});

define("PartnersHub.CommissionPlans.RevShare.mvc$translationsResources.es-ES", [], function() {
    return {
        "ykcG0a7WC0agx68C7L_TTg#Value": "Comisión",
        "63K1Z5wjJEWOqIcQFy9o5A#Value": "Tipo de Opción",
        "yMa7l9QfeUOT10dgiXYz6Q#Value": "Gane según el tipo de Opción que negocien sus clientes.",
        "dcf0bwLEWE6wKDSmHcGoRA#Value": "Si su plan de Turnover no está activado, contacte a su gerente de cuenta.",
        "eW2T_16R00yzwZRwI8SvCw#Value": "Volumen de negocios"
    };
});

define("PartnersHub.CommissionPlans.RevShare.mvc$translationsResources.fr-FR", [], function() {
    return {
        "ykcG0a7WC0agx68C7L_TTg#Value": "Commission",
        "63K1Z5wjJEWOqIcQFy9o5A#Value": "Type d\'Option",
        "yMa7l9QfeUOT10dgiXYz6Q#Value": "Gagnez en fonction du type d\'Option que négocient vos clients.",
        "dcf0bwLEWE6wKDSmHcGoRA#Value": "Si votre plan de Turnover n\'est pas activé, contactez votre gestionnaire de compte.",
        "eW2T_16R00yzwZRwI8SvCw#Value": "Chiffre d\'affaires"
    };
});

define("PartnersHub.CommissionPlans.RevShare.mvc$translationsResources.it-IT", [], function() {
    return {
        "ykcG0a7WC0agx68C7L_TTg#Value": "Commissione",
        "63K1Z5wjJEWOqIcQFy9o5A#Value": "Tipo di Opzione",
        "yMa7l9QfeUOT10dgiXYz6Q#Value": "Guadagna in base al tipo di Opzione che i tuoi clienti scambiano.",
        "dcf0bwLEWE6wKDSmHcGoRA#Value": "Se il tuo piano di Turnover non è attivato, contatta il tuo account manager.",
        "eW2T_16R00yzwZRwI8SvCw#Value": "Fatturato"
    };
});

define("PartnersHub.CommissionPlans.RevShare.mvc$translationsResources.pl-PL", [], function() {
    return {
        "ykcG0a7WC0agx68C7L_TTg#Value": "Prowizja",
        "63K1Z5wjJEWOqIcQFy9o5A#Value": "Rodzaj Opcji",
        "yMa7l9QfeUOT10dgiXYz6Q#Value": "Zarabiaj w zależności od rodzaju Opcji, którymi handlują Twoi klienci.",
        "dcf0bwLEWE6wKDSmHcGoRA#Value": "Jeśli Twój plan Turnover nie jest aktywowany, skontaktuj się ze swoim menedżerem konta.",
        "eW2T_16R00yzwZRwI8SvCw#Value": "Obrót"
    };
});

define("PartnersHub.CommissionPlans.RevShare.mvc$translationsResources.pt-PT", [], function() {
    return {
        "ykcG0a7WC0agx68C7L_TTg#Value": "Comissão",
        "63K1Z5wjJEWOqIcQFy9o5A#Value": "Tipo de Opção",
        "yMa7l9QfeUOT10dgiXYz6Q#Value": "Ganhe com base no tipo de Opção que os seus clientes negociam.",
        "dcf0bwLEWE6wKDSmHcGoRA#Value": "Se o seu plano de Turnover não estiver ativado, entre em contacto com o seu gestor de conta.",
        "eW2T_16R00yzwZRwI8SvCw#Value": "Volume de negócios"
    };
});

define("PartnersHub.CommissionPlans.RevShare.mvc$translationsResources.ru-RU", [], function() {
    return {
        "ykcG0a7WC0agx68C7L_TTg#Value": "Комиссия",
        "63K1Z5wjJEWOqIcQFy9o5A#Value": "Тип Опции",
        "yMa7l9QfeUOT10dgiXYz6Q#Value": "Зарабатывайте в зависимости от типа Опции, которую торгуют ваши клиенты.",
        "dcf0bwLEWE6wKDSmHcGoRA#Value": "Если ваш план Turnover не активирован, свяжитесь с вашим менеджером по аккаунту.",
        "eW2T_16R00yzwZRwI8SvCw#Value": "Оборот"
    };
});

define("PartnersHub.CommissionPlans.RevShare.mvc$translationsResources", ["exports", "PartnersHub.CommissionPlans.RevShare.mvc$translationsResources.de-DE", "PartnersHub.CommissionPlans.RevShare.mvc$translationsResources.es-ES", "PartnersHub.CommissionPlans.RevShare.mvc$translationsResources.fr-FR", "PartnersHub.CommissionPlans.RevShare.mvc$translationsResources.it-IT", "PartnersHub.CommissionPlans.RevShare.mvc$translationsResources.pl-PL", "PartnersHub.CommissionPlans.RevShare.mvc$translationsResources.pt-PT", "PartnersHub.CommissionPlans.RevShare.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_CommissionPlans_RevShare_mvc_translationsResources_deDE, PartnersHub_CommissionPlans_RevShare_mvc_translationsResources_esES, PartnersHub_CommissionPlans_RevShare_mvc_translationsResources_frFR, PartnersHub_CommissionPlans_RevShare_mvc_translationsResources_itIT, PartnersHub_CommissionPlans_RevShare_mvc_translationsResources_plPL, PartnersHub_CommissionPlans_RevShare_mvc_translationsResources_ptPT, PartnersHub_CommissionPlans_RevShare_mvc_translationsResources_ruRU) {
    return {
        "de-DE": {
            "translations": PartnersHub_CommissionPlans_RevShare_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_CommissionPlans_RevShare_mvc_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_CommissionPlans_RevShare_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_CommissionPlans_RevShare_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_CommissionPlans_RevShare_mvc_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_CommissionPlans_RevShare_mvc_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_CommissionPlans_RevShare_mvc_translationsResources_ruRU,
            "isRTL": false
        }
    };
});