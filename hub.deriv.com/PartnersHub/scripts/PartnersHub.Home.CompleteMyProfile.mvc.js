define("PartnersHub.Home.CompleteMyProfile.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "OutSystemsUI.model", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "PartnersHub.controller", "OutSystemsUI.Numbers.ProgressBar.mvc$model", "PartnersHub.model$ST_0be4704c381e15995202804b221a5e3aStructure", "OutSystemsUI.model$ST_8391f9d0c6b78f74493c47987669deecStructure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "RESTAPIWebsocket.model$ST_5fc2e4a935064c1413d6e989e87decd2Structure", "PartnersHub.referencesHealth$RESTAPIWebsocket", "RESTAPIWebsocket.controller$GetSettings", "PartnersHub.controller$SendResidenceList"], function(OSRuntimeCore, PartnersHubModel, OutSystemsUIModel, RESTAPIWebsocketModel, RESTAPIWebsocketController, PartnersHubController, OutSystemsUI_Numbers_ProgressBar_mvcModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ResidenceListResponse", "residenceListResponseVar", "ResidenceListResponse", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new PartnersHubModel.ST_0be4704c381e15995202804b221a5e3aStructure());
                    }, false, PartnersHubModel.ST_0be4704c381e15995202804b221a5e3aStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new VariablesRecord(new VariablesRecord.RecordClass({
                    residenceListResponseVar: OS.DataTypes.ImmutableBase.getData(str)
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
                Model._hasValidationWidgetsValue = OutSystemsUI_Numbers_ProgressBar_mvcModel.hasValidationWidgets;
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.Home.CompleteMyProfile.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "OutSystemsUI.model", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.Home.CompleteMyProfile.mvc$model", "PartnersHub.Home.CompleteMyProfile.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "OutSystemsUI.Numbers.ProgressBar.mvc$view", "PartnersHub.model$ST_0be4704c381e15995202804b221a5e3aStructure", "OutSystemsUI.model$ST_8391f9d0c6b78f74493c47987669deecStructure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "RESTAPIWebsocket.model$ST_5fc2e4a935064c1413d6e989e87decd2Structure", "PartnersHub.referencesHealth$RESTAPIWebsocket", "RESTAPIWebsocket.controller$GetSettings", "PartnersHub.controller$SendResidenceList"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, OutSystemsUIModel, RESTAPIWebsocketModel, RESTAPIWebsocketController, React, OSView, PartnersHub_Home_CompleteMyProfile_mvc_model, PartnersHub_Home_CompleteMyProfile_mvc_controller, PartnersHubClientVariables, OSWidgets, OutSystemsUI_Numbers_ProgressBar_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "Home.CompleteMyProfile";
        }

        static getAttributes() {
            return {
                codeFunction: "CompleteMyProfile",
                functionKey: "77fd153f-1428-463d-ab51-f305d3b0dfae",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Home.CompleteMyProfile.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [OutSystemsUI_Numbers_ProgressBar_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_Home_CompleteMyProfile_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_Home_CompleteMyProfile_mvc_controller;
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
                extendedEvents: {
                    onClick: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.onClick$Action(controller.callContext(eventHandlerContext));

                        ;
                    }
                },
                gridProperties: {
                    classes: "OSInline"
                },
                style: "complete-my-profile",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "display-flex justify-content-space-between align-items-center",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "font-size: 16px; font-weight: bold;"
                },
                text: [$text(getTranslation("V_f6UFrIQkCuMDCeq35TIQ#Value", "Complete my profile"))],
                _idProps: {
                    service: idService,
                    uuid: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Image, {
                gridProperties: {
                    marginLeft: "0"
                },
                image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.rightIcon.png"),
                type: /*Static*/ 0,
                _idProps: {
                    service: idService,
                    uuid: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "margin-top: 0px;"
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
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "5"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Label, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                _idProps: {
                    service: idService,
                    uuid: "6"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $text(getTranslation("zkE0A_QNHUO3f5+rZyPegQ#Value", "Step ")), React.createElement(OSWidgets.Expression, {
                gridProperties: {
                    marginLeft: "0"
                },
                value: model.getCachedValue(idService.getId("5lO5Y__sL0CwhX2+9HxxdQ.Value"), function() {
                    return ((((PartnersHubClientVariables.getRealSignupCurrentStep()).toString() + "/") + (((PartnersHubClientVariables.getRealSignupIsIDVSupported()) ? (8) : (7))).toString()) + ":");
                }, function() {
                    return PartnersHubClientVariables.getRealSignupCurrentStep();
                }, function() {
                    return PartnersHubClientVariables.getRealSignupIsIDVSupported();
                }),
                _idProps: {
                    service: idService,
                    uuid: "7"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Expression, {
                gridProperties: {
                    marginLeft: "5px"
                },
                value: PartnersHubClientVariables.getCurrentStepTitle(),
                _idProps: {
                    service: idService,
                    uuid: "8"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "9"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OutSystemsUI_Numbers_ProgressBar_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    Progress: PartnersHubClientVariables.getProgressBarLength(),
                    ProgressColor: PartnersHubModel.staticEntities.color.primary,
                    Thickness: 10
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
                placeholders: {
                    content: PlaceholderContent.Empty
                },
                _dependencies: []
            }))));
        }
    }

    return View;
});
define("PartnersHub.Home.CompleteMyProfile.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "OutSystemsUI.model", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.Home.CompleteMyProfile.mvc$translationsResources", "PartnersHub.Home.CompleteMyProfile.mvc$controller.OnReady.CheckIfIDVIsSupportedJSJS", "PartnersHub.Home.CompleteMyProfile.mvc$controller.OnReady.GetAuthTokenJS", "PartnersHub.model$ST_0be4704c381e15995202804b221a5e3aStructure", "OutSystemsUI.model$ST_8391f9d0c6b78f74493c47987669deecStructure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "RESTAPIWebsocket.model$ST_5fc2e4a935064c1413d6e989e87decd2Structure", "PartnersHub.referencesHealth$RESTAPIWebsocket", "RESTAPIWebsocket.controller$GetSettings", "PartnersHub.controller$SendResidenceList"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, OutSystemsUIModel, RESTAPIWebsocketModel, RESTAPIWebsocketController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_Home_CompleteMyProfile_mvc_TranslationsResources, PartnersHub_Home_CompleteMyProfile_mvc_controller_OnReady_CheckIfIDVIsSupportedJSJS, PartnersHub_Home_CompleteMyProfile_mvc_controller_OnReady_GetAuthTokenJS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_Home_CompleteMyProfile_mvc_TranslationsResources);
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
                                span.setAttribute("outsystems.function.key", "7d66109f-ce4d-4eb3-8707-7b6b5fc8a588");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnClick");
                                callContext = controller.callContext(callContext);
                                // Destination: /PartnersHub/RealAccountCreation
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "RealAccountCreation", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
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

            get _onReady$Action() {
                if (!(this.hasOwnProperty("__onReady$Action"))) {
                    this.__onReady$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnReady", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnReady");
                                span.setAttribute("outsystems.function.key", "9a5b194f-d2cb-43ce-80c6-390c7eeebaa3");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                var getSettingsVar = new OS.DataTypes.VariableHolder();
                                var sendResidenceListVar = new OS.DataTypes.VariableHolder();
                                var checkIfIDVIsSupportedJSJSResult = new OS.DataTypes.VariableHolder();
                                var getAuthTokenJSResult = new OS.DataTypes.VariableHolder();
                                var serializeResidenceListVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                                return OS.Flow.executeAsyncFlow(function() {
                                    getAuthTokenJSResult.value = OS.Logger.startActiveSpan("GetAuthToken", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "GetAuthToken");
                                            span.setAttribute("outsystems.function.key", "a90a2d60-98b8-48c2-8c6d-aad580e7b181");
                                            span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                            span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                        }

                                        try {
                                            return controller.safeExecuteJSNode(PartnersHub_Home_CompleteMyProfile_mvc_controller_OnReady_GetAuthTokenJS, "GetAuthToken", "OnReady", {
                                                Token: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                            }, function($parameters) {
                                                var jsNodeResult = new(controller.constructor.getVariableGroupType("PartnersHub.Home.CompleteMyProfile.OnReady$getAuthTokenJSResult"))();
                                                jsNodeResult.tokenOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Token, OS.DataTypes.DataTypes.Text);
                                                return jsNodeResult;
                                            }, {}, {});
                                        } finally {
                                            if (span) {
                                                span.end();
                                            }

                                        }

                                    }, 1);
                                    // Execute Action: SendResidenceList
                                    model.flush();
                                    return PartnersHubController.default.sendResidenceList$Action(callContext).then(function(value) {
                                        sendResidenceListVar.value = value;
                                    }).then(function() {
                                        // Execute Action: GetSettings
                                        model.flush();
                                        return RESTAPIWebsocketController.default.getSettings$Action(PartnersHubClientVariables.getServer(), getAuthTokenJSResult.value.tokenOut, PartnersHubClientVariables.getAppId(), "EN", callContext).then(function(value) {
                                            getSettingsVar.value = value;
                                        });
                                    }).then(function() {
                                        // ResidenceListResponse = SendResidenceList.ResidenceListResponse
                                        model.variables.residenceListResponseVar = sendResidenceListVar.value.residenceListResponseOut;
                                        // JSON Serialize: SerializeResidenceList
                                        serializeResidenceListVar.value.jSONOut = OS.JSONUtils.serializeToJSON(sendResidenceListVar.value.residenceListResponseOut, false, false);
                                        checkIfIDVIsSupportedJSJSResult.value = OS.Logger.startActiveSpan("CheckIfIDVIsSupportedJS", function(span) {
                                            if (span) {
                                                span.setAttribute("code.function", "CheckIfIDVIsSupportedJS");
                                                span.setAttribute("outsystems.function.key", "33193da3-481b-4435-9672-2e26c0b62d9e");
                                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                                span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                            }

                                            try {
                                                return controller.safeExecuteJSNode(PartnersHub_Home_CompleteMyProfile_mvc_controller_OnReady_CheckIfIDVIsSupportedJSJS, "CheckIfIDVIsSupportedJS", "OnReady", {
                                                    ResidenceList: OS.DataConversion.JSNodeParamConverter.to(serializeResidenceListVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                                    SelectedCitizenship: OS.DataConversion.JSNodeParamConverter.to(getSettingsVar.value.responseOut.get_settingsAttr.citizenAttr, OS.DataTypes.DataTypes.Text),
                                                    isIDVSupported: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                                                }, function($parameters) {
                                                    var jsNodeResult = new(controller.constructor.getVariableGroupType("PartnersHub.Home.CompleteMyProfile.OnReady$checkIfIDVIsSupportedJSJSResult"))();
                                                    jsNodeResult.isIDVSupportedOut = OS.DataConversion.JSNodeParamConverter.from($parameters.isIDVSupported, OS.DataTypes.DataTypes.Boolean);
                                                    return jsNodeResult;
                                                }, {}, {});
                                            } finally {
                                                if (span) {
                                                    span.end();
                                                }

                                            }

                                        }, 1);
                                        // RealSignupIsIDVSupported = CheckIfIDVIsSupportedJS.isIDVSupported
                                        PartnersHubClientVariables.setRealSignupIsIDVSupported(checkIfIDVIsSupportedJSJSResult.value.isIDVSupportedOut);
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


            onClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClick");
                        span.setAttribute("outsystems.function.key", "7d66109f-ce4d-4eb3-8707-7b6b5fc8a588");
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

            onReady$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnReady__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnReady");
                        span.setAttribute("outsystems.function.key", "9a5b194f-d2cb-43ce-80c6-390c7eeebaa3");
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


            // Event Handler Actions
            get onInitializeEventHandler() {
                if (!(this.hasOwnProperty("_onInitializeEventHandler"))) {
                    this._onInitializeEventHandler = function(callContext) {
                        var controller = this.controller;
                        var model = this.model;
                        var idService = this.idService;

                        return controller.onReady$Action(callContext);

                    };
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
        Controller.registerVariableGroupType("PartnersHub.Home.CompleteMyProfile.OnReady$checkIfIDVIsSupportedJSJSResult", [{
            name: "isIDVSupported",
            attrName: "isIDVSupportedOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);
        Controller.registerVariableGroupType("PartnersHub.Home.CompleteMyProfile.OnReady$getAuthTokenJSResult", [{
            name: "Token",
            attrName: "tokenOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});

define("PartnersHub.Home.CompleteMyProfile.mvc$controller.OnReady.CheckIfIDVIsSupportedJSJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const country = JSON.parse($parameters.ResidenceList || JSON.stringify([])).residence_list.find(c => c.value == $parameters.SelectedCitizenship)

        $parameters.isIDVSupported = Boolean(country?.identity?.services?.idv?.is_country_supported)


    };
});

define("PartnersHub.Home.CompleteMyProfile.mvc$controller.OnReady.GetAuthTokenJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.Token = localStorage.getItem("token")
    };
});


define("PartnersHub.Home.CompleteMyProfile.mvc$translationsResources.de-DE", [], function() {
    return {
        "zkE0A_QNHUO3f5+rZyPegQ#Value": "Schritt",
        "V_f6UFrIQkCuMDCeq35TIQ#Value": "Mein Profil vervollständigen"
    };
});

define("PartnersHub.Home.CompleteMyProfile.mvc$translationsResources.es-ES", [], function() {
    return {
        "zkE0A_QNHUO3f5+rZyPegQ#Value": "Paso",
        "V_f6UFrIQkCuMDCeq35TIQ#Value": "Completar mi perfil"
    };
});

define("PartnersHub.Home.CompleteMyProfile.mvc$translationsResources.fr-FR", [], function() {
    return {
        "zkE0A_QNHUO3f5+rZyPegQ#Value": "Étape",
        "V_f6UFrIQkCuMDCeq35TIQ#Value": "Compléter mon profil"
    };
});

define("PartnersHub.Home.CompleteMyProfile.mvc$translationsResources.it-IT", [], function() {
    return {
        "zkE0A_QNHUO3f5+rZyPegQ#Value": "Passo",
        "V_f6UFrIQkCuMDCeq35TIQ#Value": "Completa il mio profilo"
    };
});

define("PartnersHub.Home.CompleteMyProfile.mvc$translationsResources.pl-PL", [], function() {
    return {
        "zkE0A_QNHUO3f5+rZyPegQ#Value": "Krok",
        "V_f6UFrIQkCuMDCeq35TIQ#Value": "Uzupełnij mój profil"
    };
});

define("PartnersHub.Home.CompleteMyProfile.mvc$translationsResources.pt-PT", [], function() {
    return {
        "zkE0A_QNHUO3f5+rZyPegQ#Value": "Passo",
        "V_f6UFrIQkCuMDCeq35TIQ#Value": "Completar o meu perfil"
    };
});

define("PartnersHub.Home.CompleteMyProfile.mvc$translationsResources.ru-RU", [], function() {
    return {
        "zkE0A_QNHUO3f5+rZyPegQ#Value": "Шаг",
        "V_f6UFrIQkCuMDCeq35TIQ#Value": "Завершить мой профиль"
    };
});

define("PartnersHub.Home.CompleteMyProfile.mvc$translationsResources", ["exports", "PartnersHub.Home.CompleteMyProfile.mvc$translationsResources.de-DE", "PartnersHub.Home.CompleteMyProfile.mvc$translationsResources.es-ES", "PartnersHub.Home.CompleteMyProfile.mvc$translationsResources.fr-FR", "PartnersHub.Home.CompleteMyProfile.mvc$translationsResources.it-IT", "PartnersHub.Home.CompleteMyProfile.mvc$translationsResources.pl-PL", "PartnersHub.Home.CompleteMyProfile.mvc$translationsResources.pt-PT", "PartnersHub.Home.CompleteMyProfile.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_Home_CompleteMyProfile_mvc_translationsResources_deDE, PartnersHub_Home_CompleteMyProfile_mvc_translationsResources_esES, PartnersHub_Home_CompleteMyProfile_mvc_translationsResources_frFR, PartnersHub_Home_CompleteMyProfile_mvc_translationsResources_itIT, PartnersHub_Home_CompleteMyProfile_mvc_translationsResources_plPL, PartnersHub_Home_CompleteMyProfile_mvc_translationsResources_ptPT, PartnersHub_Home_CompleteMyProfile_mvc_translationsResources_ruRU) {
    return {
        "de-DE": {
            "translations": PartnersHub_Home_CompleteMyProfile_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_Home_CompleteMyProfile_mvc_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_Home_CompleteMyProfile_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_Home_CompleteMyProfile_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_Home_CompleteMyProfile_mvc_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_Home_CompleteMyProfile_mvc_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_Home_CompleteMyProfile_mvc_translationsResources_ruRU,
            "isRTL": false
        }
    };
});