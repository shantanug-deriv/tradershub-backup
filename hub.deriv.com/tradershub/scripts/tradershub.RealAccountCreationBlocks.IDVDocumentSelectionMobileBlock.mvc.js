define("tradershub.RealAccountCreationBlocks.IDVDocumentSelectionMobileBlock.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$ST_81244dbb8e72a05a708e9a449198444eStructure", "tradershub.model$RL_9103c933715345647d34a3ebfe5f38fd"], function(OSRuntimeCore, tradershubModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("SupportedDocuments", "supportedDocumentsVar", "SupportedDocuments", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new tradershubModel.RL_9103c933715345647d34a3ebfe5f38fd());
                    }, false, tradershubModel.RL_9103c933715345647d34a3ebfe5f38fd)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new VariablesRecord(new VariablesRecord.RecordClass({
                    supportedDocumentsVar: OS.DataTypes.ImmutableBase.getData(str)
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
            return false;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("tradershub.RealAccountCreationBlocks.IDVDocumentSelectionMobileBlock.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "react", "@outsystems/runtime-view-js", "tradershub.RealAccountCreationBlocks.IDVDocumentSelectionMobileBlock.mvc$model", "tradershub.RealAccountCreationBlocks.IDVDocumentSelectionMobileBlock.mvc$controller", "tradershub.clientVariables", "@outsystems/runtime-widgets-js", "tradershub.model$ST_81244dbb8e72a05a708e9a449198444eStructure", "tradershub.model$RL_9103c933715345647d34a3ebfe5f38fd"], function(OSRuntimeCore, tradershubModel, tradershubController, React, OSView, tradershub_RealAccountCreationBlocks_IDVDocumentSelectionMobileBlock_mvc_model, tradershub_RealAccountCreationBlocks_IDVDocumentSelectionMobileBlock_mvc_controller, tradershubClientVariables, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "RealAccountCreationBlocks.IDVDocumentSelectionMobileBlock";
        }

        static getAttributes() {
            return {
                codeFunction: "IDVDocumentSelectionMobileBlock",
                functionKey: "134d5383-5297-4ee2-b181-e144168be0c2",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
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
            return tradershub_RealAccountCreationBlocks_IDVDocumentSelectionMobileBlock_mvc_model;
        }

        get controllerFactory() {
            return tradershub_RealAccountCreationBlocks_IDVDocumentSelectionMobileBlock_mvc_controller;
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
                    style: "margin-bottom: 8px; text-align: left;"
                },
                style: "display-flex align-items-center justify-content-space-between",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "font-size: 18px; font-weight: bold;"
                },
                text: ["Identity verification"],
                _idProps: {
                    service: idService,
                    uuid: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Link, {
                enabled: true,
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                onClick: function() {
                    var eventHandlerContext = callContext.clone();
                    controller.skipOnClick$Action(controller.callContext(eventHandlerContext));

                    ;
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "color: #222; font-style: normal; font-weight: bold; margin-bottom: 8px; text-decoration: underline;"
                },
                text: ["Skip"],
                _idProps: {
                    service: idService,
                    uuid: "4"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))), React.createElement(OSWidgets.List, {
                animateItems: true,
                gridProperties: {
                    classes: "OSFillParent"
                },
                mode: /*Default*/ 0,
                source: model.variables.supportedDocumentsVar,
                style: "list list-group display-flex flex-direction-column gap-base",
                tag: "div",
                _idProps: {
                    service: idService,
                    uuid: "5"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    content: new IteratorPlaceholderContent(function(idService, callContext) {
                        return [React.createElement(OSWidgets.ListItem, {
                            extendedProperties: {
                                style: "background-color: #F8F9FA; border-color: #F1F3F5; border-radius: 4px; border-style: solid; border-width: 1px; padding: 16px;"
                            },
                            onClick: function() {
                                return Promise.resolve().then(function() {
                                    var eventHandlerContext = callContext.clone();
                                    return controller.listItemOnClick$Action(model.variables.supportedDocumentsVar.getCurrent(callContext.iterationContext).display_nameAttr, controller.callContext(eventHandlerContext));
                                });;
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
                                        style: "display-flex justify-content-space-between align-items-center ",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Expression, {
                                        extendedProperties: {
                                            style: "weight: 500;"
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        value: model.variables.supportedDocumentsVar.getCurrent(callContext.iterationContext).display_nameAttr,
                                        _idProps: {
                                            service: idService,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), React.createElement(OSWidgets.Image, {
                                        image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.iconarrow.svg"),
                                        type: /*Static*/ 0,
                                        _idProps: {
                                            service: idService,
                                            uuid: "9"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }))];
                                }),
                                rightActions: PlaceholderContent.Empty
                            },
                            _dependencies: [asPrimitiveValue(model.variables.supportedDocumentsVar.getCurrent(callContext.iterationContext).display_nameAttr)]
                        })];
                    }, callContext, idService, "1")
                },
                _dependencies: []
            })));
        }
    }

    return View;
});
define("tradershub.RealAccountCreationBlocks.IDVDocumentSelectionMobileBlock.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.RealAccountCreationBlocks.IDVDocumentSelectionMobileBlock.mvc$controller.OnReady.GetIDVCountryJS", "tradershub.RealAccountCreationBlocks.IDVDocumentSelectionMobileBlock.mvc$controller.ListItemOnClick.RudderStackJS", "tradershub.RealAccountCreationBlocks.IDVDocumentSelectionMobileBlock.mvc$controller.ListItemOnClick.JavaScript1JS", "tradershub.model$ST_81244dbb8e72a05a708e9a449198444eStructure", "tradershub.model$RL_9103c933715345647d34a3ebfe5f38fd"], function(OSRuntimeCore, tradershubModel, tradershubController, tradershubLanguageResources, tradershubClientVariables, tradershub_RealAccountCreationBlocks_IDVDocumentSelectionMobileBlock_mvc_controller_OnReady_GetIDVCountryJS, tradershub_RealAccountCreationBlocks_IDVDocumentSelectionMobileBlock_mvc_controller_ListItemOnClick_RudderStackJS, tradershub_RealAccountCreationBlocks_IDVDocumentSelectionMobileBlock_mvc_controller_ListItemOnClick_JavaScript1JS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService);
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
            get _onReady$Action() {
                if (!(this.hasOwnProperty("__onReady$Action"))) {
                    this.__onReady$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnReady", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnReady");
                                span.setAttribute("outsystems.function.key", "6e9dafa6-2ff3-4e53-a310-f21aef09815b");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                var getIDVCountryJSResult = new OS.DataTypes.VariableHolder();
                                var jSONDeserializeResidenceVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.RL_9103c933715345647d34a3ebfe5f38fd))());
                                getIDVCountryJSResult.value = OS.Logger.startActiveSpan("GetIDVCountry", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "GetIDVCountry");
                                        span.setAttribute("outsystems.function.key", "69eda138-5ae5-47aa-905d-1cf21cb37cdc");
                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(tradershub_RealAccountCreationBlocks_IDVDocumentSelectionMobileBlock_mvc_controller_OnReady_GetIDVCountryJS, "GetIDVCountry", "OnReady", {
                                            Response: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRawResidenceListResponse(), OS.DataTypes.DataTypes.Text),
                                            Citizenship: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getSelectedCitizenship(), OS.DataTypes.DataTypes.Text),
                                            SupportedDocuments: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                        }, function($parameters) {
                                            var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.RealAccountCreationBlocks.IDVDocumentSelectionMobileBlock.OnReady$getIDVCountryJSResult"))();
                                            jsNodeResult.supportedDocumentsOut = OS.DataConversion.JSNodeParamConverter.from($parameters.SupportedDocuments, OS.DataTypes.DataTypes.Text);
                                            return jsNodeResult;
                                        }, {}, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
                                // JSON Deserialize: JSONDeserializeResidence
                                jSONDeserializeResidenceVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(getIDVCountryJSResult.value.supportedDocumentsOut, tradershubModel.RL_9103c933715345647d34a3ebfe5f38fd, false);
                                // SupportedDocuments = JSONDeserializeResidence.Data
                                model.variables.supportedDocumentsVar = jSONDeserializeResidenceVar.value.dataOut;
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

            get _skipOnClick$Action() {
                if (!(this.hasOwnProperty("__skipOnClick$Action"))) {
                    this.__skipOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("SkipOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "SkipOnClick");
                                span.setAttribute("outsystems.function.key", "7b4605d0-b749-4afa-9a7f-ccc851a1a84f");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("SkipOnClick");
                                callContext = controller.callContext(callContext);
                                // RealSignupSkippedIDV = True
                                tradershubClientVariables.setRealSignupSkippedIDV(true);
                                // Destination: /tradershub/EmploymentDetails
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "employment-details", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__skipOnClick$Action;
            }
            set _skipOnClick$Action(value) {
                this.__skipOnClick$Action = value;
            }

            get _listItemOnClick$Action() {
                if (!(this.hasOwnProperty("__listItemOnClick$Action"))) {
                    this.__listItemOnClick$Action = function(documentNameIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("ListItemOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "ListItemOnClick");
                                span.setAttribute("outsystems.function.key", "9a00aef2-14a7-42a5-a74f-a54a56d83a11");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("ListItemOnClick");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.RealAccountCreationBlocks.IDVDocumentSelectionMobileBlock.ListItemOnClick$vars"))());
                                vars.value.documentNameInLocal = documentNameIn;
                                var javaScript1JSResult = new OS.DataTypes.VariableHolder();
                                var jSONSerialize1Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                return OS.Flow.executeAsyncFlow(function() {
                                    OS.Logger.startActiveSpan("RudderStack", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "RudderStack");
                                            span.setAttribute("outsystems.function.key", "da3c673a-2f9a-4f88-a022-a8a6e529eb8d");
                                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                        }

                                        try {
                                            return controller.safeExecuteJSNode(tradershub_RealAccountCreationBlocks_IDVDocumentSelectionMobileBlock_mvc_controller_ListItemOnClick_RudderStackJS, "RudderStack", "ListItemOnClick", null, function($parameters) {}, {}, {});
                                        } finally {
                                            if (span) {
                                                span.end();
                                            }

                                        }

                                    }, 1);
                                    // RealSignupIDVDocumentName = DocumentName
                                    tradershubClientVariables.setRealSignupIDVDocumentName(vars.value.documentNameInLocal);
                                    // RealSignupIDVDocumentNumber = NullTextIdentifier
                                    tradershubClientVariables.setRealSignupIDVDocumentNumber(OS.BuiltinFunctions.nullTextIdentifier());
                                    // RealSignupIDVAdditionalDocumentNumber = NullTextIdentifier
                                    tradershubClientVariables.setRealSignupIDVAdditionalDocumentNumber(OS.BuiltinFunctions.nullTextIdentifier());
                                    // JSON Serialize: JSONSerialize1
                                    jSONSerialize1Var.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.supportedDocumentsVar, false, false);
                                    return OS.Logger.startActiveSpan("JavaScript1", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "JavaScript1");
                                            span.setAttribute("outsystems.function.key", "ebd6ef6b-bb68-4ab1-a4b9-85a952754dc7");
                                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                        }

                                        try {
                                            return controller.safeExecuteAsyncJSNode(tradershub_RealAccountCreationBlocks_IDVDocumentSelectionMobileBlock_mvc_controller_ListItemOnClick_JavaScript1JS, "JavaScript1", "ListItemOnClick", {
                                                SelectedDocument: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupIDVDocumentName(), OS.DataTypes.DataTypes.Text),
                                                DocumentsList: OS.DataConversion.JSNodeParamConverter.to(jSONSerialize1Var.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                                AdditionalDocumentLabel: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                                AdditionalDocumentFormat: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                            }, function($parameters) {
                                                var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.RealAccountCreationBlocks.IDVDocumentSelectionMobileBlock.ListItemOnClick$javaScript1JSResult"))();
                                                jsNodeResult.additionalDocumentLabelOut = OS.DataConversion.JSNodeParamConverter.from($parameters.AdditionalDocumentLabel, OS.DataTypes.DataTypes.Text);
                                                jsNodeResult.additionalDocumentFormatOut = OS.DataConversion.JSNodeParamConverter.from($parameters.AdditionalDocumentFormat, OS.DataTypes.DataTypes.Text);
                                                return jsNodeResult;
                                            }, {}, {});
                                        } finally {
                                            if (span) {
                                                span.end();
                                            }

                                        }

                                    }, 1).then(function(results) {
                                        javaScript1JSResult.value = results;
                                    }).then(function() {
                                        // RealSignupIDVAdditionalDocumentNumberLabel = JavaScript1.AdditionalDocumentLabel
                                        tradershubClientVariables.setRealSignupIDVAdditionalDocumentNumberLabel(javaScript1JSResult.value.additionalDocumentLabelOut);
                                        // Destination: /tradershub/IDVMobileDocumentDetails
                                        return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "identity-verification/document-details", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
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

                return this.__listItemOnClick$Action;
            }
            set _listItemOnClick$Action(value) {
                this.__listItemOnClick$Action = value;
            }


            onReady$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnReady__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnReady");
                        span.setAttribute("outsystems.function.key", "6e9dafa6-2ff3-4e53-a310-f21aef09815b");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
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

            skipOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("SkipOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SkipOnClick");
                        span.setAttribute("outsystems.function.key", "7b4605d0-b749-4afa-9a7f-ccc851a1a84f");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._skipOnClick$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            listItemOnClick$Action(documentNameIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("ListItemOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "ListItemOnClick");
                        span.setAttribute("outsystems.function.key", "9a00aef2-14a7-42a5-a74f-a54a56d83a11");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._listItemOnClick$Action, callContext, documentNameIn);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
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
                return tradershubController.default.defaultTimeout;
            }

        }

        var Controller = ControllerInner;
        // Server Actions - Variables

        // Client Actions - Variables
        Controller.registerVariableGroupType("tradershub.RealAccountCreationBlocks.IDVDocumentSelectionMobileBlock.OnReady$getIDVCountryJSResult", [{
            name: "SupportedDocuments",
            attrName: "supportedDocumentsOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("tradershub.RealAccountCreationBlocks.IDVDocumentSelectionMobileBlock.ListItemOnClick$vars", [{
            name: "DocumentName",
            attrName: "documentNameInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("tradershub.RealAccountCreationBlocks.IDVDocumentSelectionMobileBlock.ListItemOnClick$javaScript1JSResult", [{
            name: "AdditionalDocumentLabel",
            attrName: "additionalDocumentLabelOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "AdditionalDocumentFormat",
            attrName: "additionalDocumentFormatOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});

define("tradershub.RealAccountCreationBlocks.IDVDocumentSelectionMobileBlock.mvc$controller.OnReady.GetIDVCountryJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const country = JSON.parse($parameters.Response).residence_list.find(c => c.value == $parameters.Citizenship)

        const supportedDocuments = Object.values(country.identity.services.idv.documents_supported)

        $parameters.SupportedDocuments = JSON.stringify(supportedDocuments)
    };
});

define("tradershub.RealAccountCreationBlocks.IDVDocumentSelectionMobileBlock.mvc$controller.ListItemOnClick.RudderStackJS", [], function() {
    return function($actions, $roles, $public) {
        Analytics.Analytics.trackEvent({
            action: "signup_modal_next_button_os",
        })
    };
});

define("tradershub.RealAccountCreationBlocks.IDVDocumentSelectionMobileBlock.mvc$controller.ListItemOnClick.JavaScript1JS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        return new Promise(function($resolve, $reject) {
            const document = JSON.parse($parameters.DocumentsList ?? JSON.stringify([])).find(doc => doc.display_name === $parameters.SelectedDocument)
            $parameters.AdditionalDocumentLabel = document?.additional?.display_name ?? ""
            $parameters.AdditionalDocumentFormat = document?.additional?.format ?? ""



            $resolve()
        });
    };
});