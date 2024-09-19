define("PartnersHub.Layouts.LayoutBlank.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$SetLang", "OutSystemsUI.controller$AddFavicon", "OutSystemsUI.controller$LayoutReady", "OutSystemsUI.controller$LayoutDestroy"], function(OSRuntimeCore, PartnersHubModel, OutSystemsUIModel, OutSystemsUIController) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("EnableAccessibilityFeatures", "enableAccessibilityFeaturesIn", "EnableAccessibilityFeatures", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("_enableAccessibilityFeaturesInDataFetchStatus", "_enableAccessibilityFeaturesInDataFetchStatus", "_enableAccessibilityFeaturesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
        setInputs(inputs) {
            if ("EnableAccessibilityFeatures" in inputs) {
                this.variables.enableAccessibilityFeaturesIn = inputs.EnableAccessibilityFeatures;
                if ("_enableAccessibilityFeaturesInDataFetchStatus" in inputs) {
                    this.variables._enableAccessibilityFeaturesInDataFetchStatus = inputs._enableAccessibilityFeaturesInDataFetchStatus;
                }

            }

            if ("ExtendedClass" in inputs) {
                this.variables.extendedClassIn = inputs.ExtendedClass;
                if ("_extendedClassInDataFetchStatus" in inputs) {
                    this.variables._extendedClassInDataFetchStatus = inputs._extendedClassInDataFetchStatus;
                }

            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.Layouts.LayoutBlank.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.Layouts.LayoutBlank.mvc$model", "PartnersHub.Layouts.LayoutBlank.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$SetLang", "OutSystemsUI.controller$AddFavicon", "OutSystemsUI.controller$LayoutReady", "OutSystemsUI.controller$LayoutDestroy"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, OutSystemsUIModel, OutSystemsUIController, React, OSView, PartnersHub_Layouts_LayoutBlank_mvc_model, PartnersHub_Layouts_LayoutBlank_mvc_controller, PartnersHubClientVariables, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "Layouts.LayoutBlank";
        }

        static getAttributes() {
            return {
                codeFunction: "LayoutBlank",
                functionKey: "d1f8fc2e-cccb-4a3a-8b10-6e9f5346d872",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
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
            return PartnersHub_Layouts_LayoutBlank_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_Layouts_LayoutBlank_mvc_controller;
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
                style: model.getCachedValue(idService.getId("8lEy+z8iXUqB3svMwRxbLw.Style"), function() {
                    return ((OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("NsVr+E+8uk+P2N5tsZQr_g#ValueExpression.409671902.1", "layout blank") + ((!(model.variables.enableAccessibilityFeaturesIn)) ? ("") : (" has-accessible-features"))) + (((model.variables.extendedClassIn === "")) ? ("") : ((" " + model.variables.extendedClassIn))));
                }, function() {
                    return model.variables.enableAccessibilityFeaturesIn;
                }, function() {
                    return model.variables.extendedClassIn;
                }),
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._enableAccessibilityFeaturesInDataFetchStatus, model.variables._extendedClassInDataFetchStatus)
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    role: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("WfwpZ3Adz0+5iD86897xeA#Value.3343801.1", "main")
                },
                style: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("Dq5agRlwxEqrLbJ9M0gHow#ValueExpression.951530617.1", "content"),
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.content,
                style: "main-content",
                _idProps: {
                    service: idService,
                    name: "Content"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))));
        }
    }

    return View;
});
define("PartnersHub.Layouts.LayoutBlank.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.Layouts.LayoutBlank.mvc$translationsResources", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$SetLang", "OutSystemsUI.controller$AddFavicon", "OutSystemsUI.controller$LayoutReady", "OutSystemsUI.controller$LayoutDestroy"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, OutSystemsUIModel, OutSystemsUIController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_Layouts_LayoutBlank_mvc_TranslationsResources) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_Layouts_LayoutBlank_mvc_TranslationsResources);
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
                                span.setAttribute("outsystems.function.key", "33212a96-82aa-4973-9d38-6b8189a7cc62");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                var setLangVar = new OS.DataTypes.VariableHolder();
                                var addFaviconVar = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Execute Action: LayoutReady
                                    model.flush();
                                    return OutSystemsUIController.default.layoutReady$Action(callContext).then(function() {
                                        // Execute Action: SetLang
                                        setLangVar.value = OutSystemsUIController.default.setLang$Action("", callContext);

                                        // Execute Action: AddFavicon
                                        addFaviconVar.value = OutSystemsUIController.default.addFavicon$Action("favicon.ico", callContext);

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

            get _onDestroy$Action() {
                if (!(this.hasOwnProperty("__onDestroy$Action"))) {
                    this.__onDestroy$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnDestroy", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnDestroy");
                                span.setAttribute("outsystems.function.key", "aff1aa24-f5a3-4c46-8433-88e29377f085");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnDestroy");
                                callContext = controller.callContext(callContext);
                                // Execute Action: LayoutDestroy
                                OutSystemsUIController.default.layoutDestroy$Action(callContext);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onDestroy$Action;
            }
            set _onDestroy$Action(value) {
                this.__onDestroy$Action = value;
            }


            onReady$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnReady__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnReady");
                        span.setAttribute("outsystems.function.key", "33212a96-82aa-4973-9d38-6b8189a7cc62");
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

            onDestroy$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnDestroy__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnDestroy");
                        span.setAttribute("outsystems.function.key", "aff1aa24-f5a3-4c46-8433-88e29377f085");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);
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
                    this._onDestroyEventHandler = function(callContext) {
                        var controller = this.controller;
                        var model = this.model;
                        var idService = this.idService;

                        return controller.onDestroy$Action(callContext);

                    };
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


define("PartnersHub.Layouts.LayoutBlank.mvc$translationsResources.de-DE", [], function() {
    return {
        "WfwpZ3Adz0+5iD86897xeA#Value.3343801.1": "main",
        "Dq5agRlwxEqrLbJ9M0gHow#ValueExpression.951530617.1": "content",
        "NsVr+E+8uk+P2N5tsZQr_g#ValueExpression.409671902.1": "layout blank"
    };
});

define("PartnersHub.Layouts.LayoutBlank.mvc$translationsResources.es-ES", [], function() {
    return {
        "WfwpZ3Adz0+5iD86897xeA#Value.3343801.1": "main",
        "Dq5agRlwxEqrLbJ9M0gHow#ValueExpression.951530617.1": "content",
        "NsVr+E+8uk+P2N5tsZQr_g#ValueExpression.409671902.1": "layout blank"
    };
});

define("PartnersHub.Layouts.LayoutBlank.mvc$translationsResources.fr-FR", [], function() {
    return {
        "WfwpZ3Adz0+5iD86897xeA#Value.3343801.1": "main",
        "Dq5agRlwxEqrLbJ9M0gHow#ValueExpression.951530617.1": "content",
        "NsVr+E+8uk+P2N5tsZQr_g#ValueExpression.409671902.1": "layout blank"
    };
});

define("PartnersHub.Layouts.LayoutBlank.mvc$translationsResources.it-IT", [], function() {
    return {
        "WfwpZ3Adz0+5iD86897xeA#Value.3343801.1": "main",
        "Dq5agRlwxEqrLbJ9M0gHow#ValueExpression.951530617.1": "content",
        "NsVr+E+8uk+P2N5tsZQr_g#ValueExpression.409671902.1": "layout blank"
    };
});

define("PartnersHub.Layouts.LayoutBlank.mvc$translationsResources.pl-PL", [], function() {
    return {
        "WfwpZ3Adz0+5iD86897xeA#Value.3343801.1": "main",
        "Dq5agRlwxEqrLbJ9M0gHow#ValueExpression.951530617.1": "content",
        "NsVr+E+8uk+P2N5tsZQr_g#ValueExpression.409671902.1": "layout blank"
    };
});

define("PartnersHub.Layouts.LayoutBlank.mvc$translationsResources.pt-PT", [], function() {
    return {
        "WfwpZ3Adz0+5iD86897xeA#Value.3343801.1": "main",
        "Dq5agRlwxEqrLbJ9M0gHow#ValueExpression.951530617.1": "content",
        "NsVr+E+8uk+P2N5tsZQr_g#ValueExpression.409671902.1": "layout blank"
    };
});

define("PartnersHub.Layouts.LayoutBlank.mvc$translationsResources.ru-RU", [], function() {
    return {
        "WfwpZ3Adz0+5iD86897xeA#Value.3343801.1": "main",
        "Dq5agRlwxEqrLbJ9M0gHow#ValueExpression.951530617.1": "content",
        "NsVr+E+8uk+P2N5tsZQr_g#ValueExpression.409671902.1": "layout blank"
    };
});

define("PartnersHub.Layouts.LayoutBlank.mvc$translationsResources", ["exports", "PartnersHub.Layouts.LayoutBlank.mvc$translationsResources.de-DE", "PartnersHub.Layouts.LayoutBlank.mvc$translationsResources.es-ES", "PartnersHub.Layouts.LayoutBlank.mvc$translationsResources.fr-FR", "PartnersHub.Layouts.LayoutBlank.mvc$translationsResources.it-IT", "PartnersHub.Layouts.LayoutBlank.mvc$translationsResources.pl-PL", "PartnersHub.Layouts.LayoutBlank.mvc$translationsResources.pt-PT", "PartnersHub.Layouts.LayoutBlank.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_Layouts_LayoutBlank_mvc_translationsResources_deDE, PartnersHub_Layouts_LayoutBlank_mvc_translationsResources_esES, PartnersHub_Layouts_LayoutBlank_mvc_translationsResources_frFR, PartnersHub_Layouts_LayoutBlank_mvc_translationsResources_itIT, PartnersHub_Layouts_LayoutBlank_mvc_translationsResources_plPL, PartnersHub_Layouts_LayoutBlank_mvc_translationsResources_ptPT, PartnersHub_Layouts_LayoutBlank_mvc_translationsResources_ruRU) {
    return {
        "de-DE": {
            "translations": PartnersHub_Layouts_LayoutBlank_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_Layouts_LayoutBlank_mvc_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_Layouts_LayoutBlank_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_Layouts_LayoutBlank_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_Layouts_LayoutBlank_mvc_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_Layouts_LayoutBlank_mvc_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_Layouts_LayoutBlank_mvc_translationsResources_ruRU,
            "isRTL": false
        }
    };
});