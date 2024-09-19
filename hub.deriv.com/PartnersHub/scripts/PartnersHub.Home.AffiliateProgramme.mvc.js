define("PartnersHub.Home.AffiliateProgramme.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "OutSystemsUI.model", "PartnersHub.controller", "OutSystemsUI.Interaction.Carousel.mvc$model", "OutSystemsUI.model$ST_660adb7a9db48bff1b12c6e03515b415Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "OutSystemsUI.model$ST_7d99fd1de65649f174aff6854b052539Structure", "PartnersHub.model$ST_23ff1d290ec4691b1c668ad437100cd0Structure", "PartnersHub.controller$RudderstackTrackEvent", "PartnersHub.model$EN_5a50b1207c66825bfc9e9688dde972baEntityRecord", "PartnersHub.model$RC_f096f7fd8261c816438bbe7b5d4454b4", "PartnersHub.model$RL_cb813e01813ea34c8f66a8be7f90e6b0"], function(OSRuntimeCore, PartnersHubModel, OutSystemsUIModel, PartnersHubController, OutSystemsUI_Interaction_Carousel_mvcModel) {
    var OS = OSRuntimeCore; {
        class GetAffiliateLinksAggrRecInner extends
        OS.Model.AggregateRecord {
            static attributesToDeclare() {
                return [].concat(OS.Model.AggregateRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new GetAffiliateLinksAggrRec(new GetAffiliateLinksAggrRec.RecordClass({
                    RecordListType: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        GetAffiliateLinksAggrRecInner.RecordListType = PartnersHubModel.RL_cb813e01813ea34c8f66a8be7f90e6b0;
        var GetAffiliateLinksAggrRec = GetAffiliateLinksAggrRecInner;
        GetAffiliateLinksAggrRec.init();
    }


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("GetAffiliateLinks", "getAffiliateLinksAggr", "GetAffiliateLinks", true, true, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new GetAffiliateLinksAggrRec());
                    }, true, GetAffiliateLinksAggrRec)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new VariablesRecord(new VariablesRecord.RecordClass({
                    getAffiliateLinksAggr: OS.DataTypes.ImmutableBase.getData(str)
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
                Model._hasValidationWidgetsValue = OutSystemsUI_Interaction_Carousel_mvcModel.hasValidationWidgets;
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.Home.AffiliateProgramme.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "OutSystemsUI.model", "react", "@outsystems/runtime-view-js", "PartnersHub.Home.AffiliateProgramme.mvc$model", "PartnersHub.Home.AffiliateProgramme.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "OutSystemsUI.Interaction.Carousel.mvc$view", "OutSystemsUI.model$ST_660adb7a9db48bff1b12c6e03515b415Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "OutSystemsUI.model$ST_7d99fd1de65649f174aff6854b052539Structure", "PartnersHub.model$ST_23ff1d290ec4691b1c668ad437100cd0Structure", "PartnersHub.controller$RudderstackTrackEvent", "PartnersHub.model$EN_5a50b1207c66825bfc9e9688dde972baEntityRecord", "PartnersHub.model$RC_f096f7fd8261c816438bbe7b5d4454b4", "PartnersHub.model$RL_cb813e01813ea34c8f66a8be7f90e6b0"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, OutSystemsUIModel, React, OSView, PartnersHub_Home_AffiliateProgramme_mvc_model, PartnersHub_Home_AffiliateProgramme_mvc_controller, PartnersHubClientVariables, OSWidgets, OutSystemsUI_Interaction_Carousel_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "Home.AffiliateProgramme";
        }

        static getAttributes() {
            return {
                codeFunction: "AffiliateProgramme",
                functionKey: "c7d7a8dc-e9ee-4d86-8c08-2e3ffd919b34",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Home.AffiliateProgramme.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [OutSystemsUI_Interaction_Carousel_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_Home_AffiliateProgramme_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_Home_AffiliateProgramme_mvc_controller;
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
                style: "affiliates-programme",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "AffiliatesProgrammeContainer"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Label, {
                extendedProperties: {
                    style: "font-weight: bold;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "color: #222; font-size: 20px;"
                },
                text: [$text(getTranslation("T7D85Ou3vE61yWtLCd1Qjw#Value", "Video library"))],
                _idProps: {
                    service: idService,
                    uuid: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OutSystemsUI_Interaction_Carousel_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    Navigation: PartnersHubModel.staticEntities.carouselNavigation.arrows,
                    ItemsPerSlide: model.getCachedValue(idService.getId("AffliliateProgrammeCarousel.ItemsPerSlide"), function() {
                        return function() {
                            var rec = new OutSystemsUIModel.ST_660adb7a9db48bff1b12c6e03515b415Structure();
                            rec.desktopAttr = 3;
                            rec.tabletAttr = 3;
                            rec.phoneAttr = 1;
                            return rec;
                        }();
                    }),
                    ExtendedClass: "affiliates-programme__carousel",
                    OptionalConfigs: model.getCachedValue(idService.getId("AffliliateProgrammeCarousel.OptionalConfigs"), function() {
                        return function() {
                            var rec = new OutSystemsUIModel.ST_7d99fd1de65649f174aff6854b052539Structure();
                            rec.autoPlayAttr = false;
                            return rec;
                        }();
                    })
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    onSlideMoved$Action: function(carouselIdIn, itemIndexIn) {
                        var eventHandlerContext = callContext.clone();
                        controller.onSlideMove$Action(carouselIdIn, controller.callContext(eventHandlerContext));

                        ;
                    }
                },
                _validationProps: {
                    validationService: validationService
                },
                _idProps: {
                    service: idService,
                    name: "AffliliateProgrammeCarousel",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    carouselItems: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.List, {
                            animateItems: false,
                            extendedProperties: {
                                "disable-virtualization": "True"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mode: /*Default*/ 0,
                            source: model.variables.getAffiliateLinksAggr.listOut,
                            style: "list list-group",
                            tag: "div",
                            _idProps: {
                                service: idService,
                                uuid: "5"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getAffiliateLinksAggr.dataFetchStatusAttr),
                            placeholders: {
                                content: new IteratorPlaceholderContent(function(idService, callContext) {
                                    return [React.createElement(OSWidgets.ListItem, {
                                        onClick: function() {
                                            var eventHandlerContext = callContext.clone();
                                            controller.onClickVideo$Action(model.variables.getAffiliateLinksAggr.listOut.getCurrent(callContext.iterationContext).affiliateLinksAttr, controller.callContext(eventHandlerContext));

                                            ;
                                        },
                                        style: "list-item",
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
                                                        "data-link": model.variables.getAffiliateLinksAggr.listOut.getCurrent(callContext.iterationContext).affiliateLinksAttr.linkAttr
                                                    },
                                                    gridProperties: {
                                                        classes: "OSInline"
                                                    },
                                                    style: "affiliates-programme-list__item",
                                                    visible: true,
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "7"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider
                                                }, React.createElement(OSWidgets.Image, {
                                                    style: "affiliates-programme-list__item-image",
                                                    type: /*External*/ 1,
                                                    url: model.variables.getAffiliateLinksAggr.listOut.getCurrent(callContext.iterationContext).affiliateLinksAttr.thumbnail3Attr,
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "8"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    url_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getAffiliateLinksAggr.dataFetchStatusAttr)
                                                }))];
                                            }),
                                            rightActions: PlaceholderContent.Empty
                                        },
                                        _dependencies: [asPrimitiveValue(model.variables.getAffiliateLinksAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getAffiliateLinksAggr.listOut.getCurrent(callContext.iterationContext).affiliateLinksAttr.thumbnail3Attr), asPrimitiveValue(model.variables.getAffiliateLinksAggr.listOut.getCurrent(callContext.iterationContext).affiliateLinksAttr.linkAttr)]
                                    })];
                                }, callContext, idService, "1")
                            },
                            _dependencies: [asPrimitiveValue(model.variables.getAffiliateLinksAggr.dataFetchStatusAttr)]
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.getAffiliateLinksAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getAffiliateLinksAggr.listOut)]
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: model.getCachedValue(idService.getId("KtcZzRXm8kOYY6oTOwYdMQ.Style"), function() {
                    return ((PartnersHubClientVariables.getIsDesktop()) ? ("affiliates-programme__footer--desktop") : ("affiliates-programme__footer--mobile"));
                }, function() {
                    return PartnersHubClientVariables.getIsDesktop();
                }),
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "9"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Button, {
                enabled: true,
                isDefault: false,
                onClick: function() {
                    var eventHandlerContext = callContext.clone();
                    controller.onClickSeeAllVideo$Action(controller.callContext(eventHandlerContext));

                    ;
                },
                style: model.getCachedValue(idService.getId("kuZ9VeU8zEieBtAXXXwrVQ.Style"), function() {
                    return ((PartnersHubClientVariables.getIsDesktop()) ? ("btn btn-primary affiliates-programme__button affiliates-programme__button--desktop") : ("btn btn-primary affiliates-programme__button affiliates-programme__button--mobile"));
                }, function() {
                    return PartnersHubClientVariables.getIsDesktop();
                }),
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
                    style: "align-items: center; display: flex; gap: 8px;"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "11"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Icon, {
                extendedProperties: {
                    style: "font-size: 18px; height: 18px; margin-right: 6px; width: 18px;"
                },
                gridProperties: {
                    marginLeft: "6px"
                },
                icon: "youtube-play",
                iconSize: /*Twotimes*/ 1,
                style: "icon",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "12"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), $text(getTranslation("hKoas_JkdUqaXBT9HahADw#Value", "See all videos")))))));
        }
    }

    return View;
});
define("PartnersHub.Home.AffiliateProgramme.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "OutSystemsUI.model", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.Home.AffiliateProgramme.mvc$translationsResources", "PartnersHub.Home.AffiliateProgramme.mvc$controller.OnClickSeeAllVideo.JavaScript1JS", "PartnersHub.Home.AffiliateProgramme.mvc$controller.OnSlideMove.AttachClickHandlersToCarouselClonesJS", "PartnersHub.Home.AffiliateProgramme.mvc$controller.OnClickVideo.JavaScript1JS", "OutSystemsUI.model$ST_660adb7a9db48bff1b12c6e03515b415Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "OutSystemsUI.model$ST_7d99fd1de65649f174aff6854b052539Structure", "PartnersHub.model$ST_23ff1d290ec4691b1c668ad437100cd0Structure", "PartnersHub.controller$RudderstackTrackEvent", "PartnersHub.model$EN_5a50b1207c66825bfc9e9688dde972baEntityRecord", "PartnersHub.model$RC_f096f7fd8261c816438bbe7b5d4454b4", "PartnersHub.model$RL_cb813e01813ea34c8f66a8be7f90e6b0"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, OutSystemsUIModel, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_Home_AffiliateProgramme_mvc_TranslationsResources, PartnersHub_Home_AffiliateProgramme_mvc_controller_OnClickSeeAllVideo_JavaScript1JS, PartnersHub_Home_AffiliateProgramme_mvc_controller_OnSlideMove_AttachClickHandlersToCarouselClonesJS, PartnersHub_Home_AffiliateProgramme_mvc_controller_OnClickVideo_JavaScript1JS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_Home_AffiliateProgramme_mvc_TranslationsResources);
                var controller = this.controller;
                this.clientActionProxies = {};
                this.dataFetchDependenciesOriginal = {
                    getAffiliateLinks$AggrRefresh: 0
                };
                this.dataFetchDependentsGraph = {
                    getAffiliateLinks$AggrRefresh: []
                };
                this.shouldSendClientVarsToDataSources = false;
            }

            // Server Actions - Methods

            // Aggregates and Data Actions
            get getAffiliateLinks$AggrRefresh() {
                if (!(this.hasOwnProperty("_getAffiliateLinks$AggrRefresh"))) {
                    this._getAffiliateLinks$AggrRefresh = function() {
                        var innerBody = function(maxRecords, startIndex, callContext) {
                            var model = this.model;
                            var controller = this.controller;
                            var callContext = controller.callContext(callContext);
                            return controller.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetAffiliateLinks", "screenservices/PartnersHub/Home/AffiliateProgramme/ScreenDataSetGetAffiliateLinks", "JMrcPRhoMR0hxr2x8YPJcA", maxRecords, startIndex, function(b) {
                                model.variables.getAffiliateLinksAggr.dataFetchStatusAttr = b;
                            }, function(json) {
                                model.variables.getAffiliateLinksAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getAffiliateLinksAggr.constructor));
                            }, undefined, undefined, undefined, callContext, undefined, true);
                        }.bind(this);
                        return OS.Logger.startActiveSpan("GetAffiliateLinks", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GetAffiliateLinks");
                                span.setAttribute("outsystems.function.key", "2edbd258-b25d-46e7-9056-5234ab10cd62");
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

                return this._getAffiliateLinks$AggrRefresh;
            }
            set getAffiliateLinks$AggrRefresh(value) {
                this._getAffiliateLinks$AggrRefresh = value;
            }


            get dataFetchActionNames() {
                if (!(this.hasOwnProperty("_dataFetchActionNames"))) {
                    this._dataFetchActionNames = ["getAffiliateLinks$AggrRefresh"];
                }

                return this._dataFetchActionNames;
            }
            set dataFetchActionNames(value) {
                this._dataFetchActionNames = value;
            }

            // Client Actions - Methods
            get _onClickSeeAllVideo$Action() {
                if (!(this.hasOwnProperty("__onClickSeeAllVideo$Action"))) {
                    this.__onClickSeeAllVideo$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickSeeAllVideo", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickSeeAllVideo");
                                span.setAttribute("outsystems.function.key", "5ec8c717-2ae8-4f70-ae06-253260196a65");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnClickSeeAllVideo");
                                callContext = controller.callContext(callContext);
                                // Execute Action: RudderstackTrackEvent
                                PartnersHubController.default.rudderstackTrackEvent$Action(function() {
                                    var rec = new PartnersHubModel.ST_23ff1d290ec4691b1c668ad437100cd0Structure();
                                    rec.actionAttr = "click_cta";
                                    rec.cta_nameAttr = "See all Videos";
                                    rec.cta_placementAttr = "affiliate programme youtube section";
                                    return rec;
                                }(), "ce_partnershub_form", callContext);
                                OS.Logger.startActiveSpan("JavaScript1", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "JavaScript1");
                                        span.setAttribute("outsystems.function.key", "10cafe4c-4a4e-4a78-98d4-1bbfc00fbd20");
                                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(PartnersHub_Home_AffiliateProgramme_mvc_controller_OnClickSeeAllVideo_JavaScript1JS, "JavaScript1", "OnClickSeeAllVideo", null, function($parameters) {}, {}, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onClickSeeAllVideo$Action;
            }
            set _onClickSeeAllVideo$Action(value) {
                this.__onClickSeeAllVideo$Action = value;
            }

            get _onSlideMove$Action() {
                if (!(this.hasOwnProperty("__onSlideMove$Action"))) {
                    this.__onSlideMove$Action = function(carouselIdIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnSlideMove", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnSlideMove");
                                span.setAttribute("outsystems.function.key", "c6921f1f-f2b9-44d5-afcf-92db69c87462");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnSlideMove");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.Home.AffiliateProgramme.OnSlideMove$vars"))());
                                vars.value.carouselIdInLocal = carouselIdIn;
                                OS.Logger.startActiveSpan("AttachClickHandlersToCarouselClones", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "AttachClickHandlersToCarouselClones");
                                        span.setAttribute("outsystems.function.key", "7321ab2f-c3a3-4ab8-8a41-4201a35dffc0");
                                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(PartnersHub_Home_AffiliateProgramme_mvc_controller_OnSlideMove_AttachClickHandlersToCarouselClonesJS, "AttachClickHandlersToCarouselClones", "OnSlideMove", {
                                            CarouselId: OS.DataConversion.JSNodeParamConverter.to(vars.value.carouselIdInLocal, OS.DataTypes.DataTypes.Text)
                                        }, function($parameters) {}, {}, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onSlideMove$Action;
            }
            set _onSlideMove$Action(value) {
                this.__onSlideMove$Action = value;
            }

            get _onClickVideo$Action() {
                if (!(this.hasOwnProperty("__onClickVideo$Action"))) {
                    this.__onClickVideo$Action = function(videoLinkIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickVideo", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickVideo");
                                span.setAttribute("outsystems.function.key", "d21b2024-3c64-4a1b-8bd7-316ab899ed6a");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnClickVideo");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.Home.AffiliateProgramme.OnClickVideo$vars"))());
                                vars.value.videoLinkInLocal = videoLinkIn.clone();
                                // Execute Action: RudderstackTrackEvent
                                PartnersHubController.default.rudderstackTrackEvent$Action(function() {
                                    var rec = new PartnersHubModel.ST_23ff1d290ec4691b1c668ad437100cd0Structure();
                                    rec.actionAttr = "click_cta";
                                    rec.cta_nameAttr = "Video click";
                                    rec.cta_placementAttr = vars.value.videoLinkInLocal.titleAttr;
                                    return rec;
                                }(), "ce_partnershub_form", callContext);
                                OS.Logger.startActiveSpan("JavaScript1", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "JavaScript1");
                                        span.setAttribute("outsystems.function.key", "3ebe742d-75db-4b77-8238-d446f8d94762");
                                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(PartnersHub_Home_AffiliateProgramme_mvc_controller_OnClickVideo_JavaScript1JS, "JavaScript1", "OnClickVideo", {
                                            VideoLink: OS.DataConversion.JSNodeParamConverter.to(vars.value.videoLinkInLocal.linkAttr, OS.DataTypes.DataTypes.Text)
                                        }, function($parameters) {}, {}, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onClickVideo$Action;
            }
            set _onClickVideo$Action(value) {
                this.__onClickVideo$Action = value;
            }


            onClickSeeAllVideo$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickSeeAllVideo__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickSeeAllVideo");
                        span.setAttribute("outsystems.function.key", "5ec8c717-2ae8-4f70-ae06-253260196a65");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onClickSeeAllVideo$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onSlideMove$Action(carouselIdIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnSlideMove__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnSlideMove");
                        span.setAttribute("outsystems.function.key", "c6921f1f-f2b9-44d5-afcf-92db69c87462");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onSlideMove$Action, callContext, carouselIdIn);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onClickVideo$Action(videoLinkIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickVideo__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickVideo");
                        span.setAttribute("outsystems.function.key", "d21b2024-3c64-4a1b-8bd7-316ab899ed6a");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onClickVideo$Action, callContext, videoLinkIn);
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
        Controller.registerVariableGroupType("PartnersHub.Home.AffiliateProgramme.OnSlideMove$vars", [{
            name: "CarouselId",
            attrName: "carouselIdInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("PartnersHub.Home.AffiliateProgramme.OnClickVideo$vars", [{
            name: "VideoLink",
            attrName: "videoLinkInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new PartnersHubModel.EN_5a50b1207c66825bfc9e9688dde972baEntityRecord();
            },
            complexType: PartnersHubModel.EN_5a50b1207c66825bfc9e9688dde972baEntityRecord
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});

define("PartnersHub.Home.AffiliateProgramme.mvc$controller.OnClickSeeAllVideo.JavaScript1JS", [], function() {
    return function($actions, $roles, $public) {
        window.open("https://www.youtube.com/@Deriv.partners")
    };
});

define("PartnersHub.Home.AffiliateProgramme.mvc$controller.OnSlideMove.AttachClickHandlersToCarouselClonesJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const carousel = document.getElementById($parameters.CarouselId)

        if (carousel) {
            const clones = carousel.getElementsByClassName("splide__slide--clone is-visible")

            if (clones.length) {
                Array.from(clones)?.forEach(cloneNode => {
                    const hasAttachedEl = cloneNode.getAttribute("data-is-attached-el")
                    if (!hasAttachedEl) {
                        cloneNode.setAttribute("data-is-attached-el", "true")
                        const cloneContentNode = cloneNode.getElementsByClassName("affiliates-programme-list__item")
                        if (cloneContentNode.length) {
                            const videoLink = cloneContentNode[0].getAttribute("data-link")
                            cloneNode.addEventListener('click', () => {
                                window.open(videoLink)
                            })
                        }
                    }
                })
            }
        }
    };
});

define("PartnersHub.Home.AffiliateProgramme.mvc$controller.OnClickVideo.JavaScript1JS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        window.open($parameters.VideoLink)
    };
});


define("PartnersHub.Home.AffiliateProgramme.mvc$translationsResources.de-DE", [], function() {
    return {
        "hKoas_JkdUqaXBT9HahADw#Value": "Alle Videos ansehen",
        "T7D85Ou3vE61yWtLCd1Qjw#Value": "Videobibliothek"
    };
});

define("PartnersHub.Home.AffiliateProgramme.mvc$translationsResources.es-ES", [], function() {
    return {
        "hKoas_JkdUqaXBT9HahADw#Value": "Ver todos los videos",
        "T7D85Ou3vE61yWtLCd1Qjw#Value": "Biblioteca de videos"
    };
});

define("PartnersHub.Home.AffiliateProgramme.mvc$translationsResources.fr-FR", [], function() {
    return {
        "hKoas_JkdUqaXBT9HahADw#Value": "Voir toutes les vidéos",
        "T7D85Ou3vE61yWtLCd1Qjw#Value": "Bibliothèque vidéo"
    };
});

define("PartnersHub.Home.AffiliateProgramme.mvc$translationsResources.it-IT", [], function() {
    return {
        "hKoas_JkdUqaXBT9HahADw#Value": "Vedi tutti i video",
        "T7D85Ou3vE61yWtLCd1Qjw#Value": "Biblioteca video"
    };
});

define("PartnersHub.Home.AffiliateProgramme.mvc$translationsResources.pl-PL", [], function() {
    return {
        "hKoas_JkdUqaXBT9HahADw#Value": "Zobacz wszystkie filmy",
        "T7D85Ou3vE61yWtLCd1Qjw#Value": "Biblioteka wideo"
    };
});

define("PartnersHub.Home.AffiliateProgramme.mvc$translationsResources.pt-PT", [], function() {
    return {
        "hKoas_JkdUqaXBT9HahADw#Value": "Ver todos os vídeos",
        "T7D85Ou3vE61yWtLCd1Qjw#Value": "Biblioteca de vídeos"
    };
});

define("PartnersHub.Home.AffiliateProgramme.mvc$translationsResources.ru-RU", [], function() {
    return {
        "hKoas_JkdUqaXBT9HahADw#Value": "Посмотреть все видео",
        "T7D85Ou3vE61yWtLCd1Qjw#Value": "Видеотека"
    };
});

define("PartnersHub.Home.AffiliateProgramme.mvc$translationsResources", ["exports", "PartnersHub.Home.AffiliateProgramme.mvc$translationsResources.de-DE", "PartnersHub.Home.AffiliateProgramme.mvc$translationsResources.es-ES", "PartnersHub.Home.AffiliateProgramme.mvc$translationsResources.fr-FR", "PartnersHub.Home.AffiliateProgramme.mvc$translationsResources.it-IT", "PartnersHub.Home.AffiliateProgramme.mvc$translationsResources.pl-PL", "PartnersHub.Home.AffiliateProgramme.mvc$translationsResources.pt-PT", "PartnersHub.Home.AffiliateProgramme.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_Home_AffiliateProgramme_mvc_translationsResources_deDE, PartnersHub_Home_AffiliateProgramme_mvc_translationsResources_esES, PartnersHub_Home_AffiliateProgramme_mvc_translationsResources_frFR, PartnersHub_Home_AffiliateProgramme_mvc_translationsResources_itIT, PartnersHub_Home_AffiliateProgramme_mvc_translationsResources_plPL, PartnersHub_Home_AffiliateProgramme_mvc_translationsResources_ptPT, PartnersHub_Home_AffiliateProgramme_mvc_translationsResources_ruRU) {
    return {
        "de-DE": {
            "translations": PartnersHub_Home_AffiliateProgramme_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_Home_AffiliateProgramme_mvc_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_Home_AffiliateProgramme_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_Home_AffiliateProgramme_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_Home_AffiliateProgramme_mvc_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_Home_AffiliateProgramme_mvc_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_Home_AffiliateProgramme_mvc_translationsResources_ruRU,
            "isRTL": false
        }
    };
});