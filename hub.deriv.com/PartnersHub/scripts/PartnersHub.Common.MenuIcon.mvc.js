define("PartnersHub.Common.MenuIcon.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$SetMenuIconListeners", "OutSystemsUI.controller$ToggleSideMenu"], function(OSRuntimeCore, PartnersHubModel, OutSystemsUIModel, OutSystemsUIController) {
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
            return false;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.Common.MenuIcon.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.Common.MenuIcon.mvc$model", "PartnersHub.Common.MenuIcon.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$SetMenuIconListeners", "OutSystemsUI.controller$ToggleSideMenu"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, OutSystemsUIModel, OutSystemsUIController, React, OSView, PartnersHub_Common_MenuIcon_mvc_model, PartnersHub_Common_MenuIcon_mvc_controller, PartnersHubClientVariables, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "Common.MenuIcon";
        }

        static getAttributes() {
            return {
                codeFunction: "MenuIcon",
                functionKey: "96fa937f-c17f-436d-845d-6f1a6c743802",
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
            return PartnersHub_Common_MenuIcon_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_Common_MenuIcon_mvc_controller;
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
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return controller.onClick$Action(controller.callContext(eventHandlerContext));
                        });;
                    }
                },
                extendedProperties: {
                    "aria-label": "Toggle the Menu",
                    role: "button",
                    tabIndex: "0",
                    "aria-haspopup": "true"
                },
                style: "menu-icon",
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
                    "aria-hidden": "true"
                },
                style: "menu-icon-line",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    "aria-hidden": "true"
                },
                style: "menu-icon-line",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    "aria-hidden": "true"
                },
                style: "menu-icon-line",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })));
        }
    }

    return View;
});
define("PartnersHub.Common.MenuIcon.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.Common.MenuIcon.mvc$translationsResources", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$SetMenuIconListeners", "OutSystemsUI.controller$ToggleSideMenu"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, OutSystemsUIModel, OutSystemsUIController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_Common_MenuIcon_mvc_TranslationsResources) {
    var OS = OSRuntimeCore;
    {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_Common_MenuIcon_mvc_TranslationsResources);
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
                                span.setAttribute("outsystems.function.key", "4f2b7015-1940-48bb-959d-b100250e3f20");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                var setMenuIconListenersVar = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Execute Action: SetMenuIconListeners
                                    model.flush();
                                    return OutSystemsUIController.default.setMenuIconListeners$Action(callContext).then(function(value) {
                                        setMenuIconListenersVar.value = value;
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

            get _onClick$Action() {
                if (!(this.hasOwnProperty("__onClick$Action"))) {
                    this.__onClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClick");
                                span.setAttribute("outsystems.function.key", "f374e41d-b8b1-43e6-9e4c-97174295b7b0");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnClick");
                                callContext = controller.callContext(callContext);
                                var toggleSideMenuVar = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Execute Action: ToggleSideMenu
                                    model.flush();
                                    return OutSystemsUIController.default.toggleSideMenu$Action(callContext).then(function(value) {
                                        toggleSideMenuVar.value = value;
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

                return this.__onClick$Action;
            }
            set _onClick$Action(value) {
                this.__onClick$Action = value;
            }


            onReady$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnReady__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnReady");
                        span.setAttribute("outsystems.function.key", "4f2b7015-1940-48bb-959d-b100250e3f20");
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

            onClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClick");
                        span.setAttribute("outsystems.function.key", "f374e41d-b8b1-43e6-9e4c-97174295b7b0");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._onClick$Action, callContext);
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

    }
    return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});


define("PartnersHub.Common.MenuIcon.mvc$translationsResources", ["exports"], function(exports) {
    return {};
});