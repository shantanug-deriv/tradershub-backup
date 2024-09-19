define("OutSystemsUI.Adaptive.DisplayOnDevice.mvc$model", ["@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.controller$GetDeviceType"], function(OSRuntimeCore, OutSystemsUIModel, OutSystemsUIController) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Device", "deviceVar", "Device", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("ObserverObj", "observerObjVar", "ObserverObj", true, false, OS.DataTypes.DataTypes.Object, function() {
                        return null;
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
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("OutSystemsUI.Adaptive.DisplayOnDevice.mvc$view", ["@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "@outsystems/runtime-view-js", "OutSystemsUI.Adaptive.DisplayOnDevice.mvc$model", "OutSystemsUI.Adaptive.DisplayOnDevice.mvc$controller", "@outsystems/runtime-widgets-js", "OutSystemsUI.controller$GetDeviceType"], function(OSRuntimeCore, OutSystemsUIModel, OutSystemsUIController, React, OSView, OutSystemsUI_Adaptive_DisplayOnDevice_mvc_model, OutSystemsUI_Adaptive_DisplayOnDevice_mvc_controller, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "Adaptive.DisplayOnDevice";
        }

        static getAttributes() {
            return {
                codeFunction: "DisplayOnDevice",
                functionKey: "558f2ce5-0350-4196-8060-44e236bc40af",
                functionOwnerName: "OutSystemsUI",
                functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
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
            return OutSystemsUI_Adaptive_DisplayOnDevice_mvc_model;
        }

        get controllerFactory() {
            return OutSystemsUI_Adaptive_DisplayOnDevice_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), $if((model.variables.deviceVar === "desktop"), false, this, function() {
                return [React.createElement(OSWidgets.Placeholder, {
                    align: /*Default*/ 0,
                    content: _this.props.placeholders.onDesktop,
                    style: "display-on-device-desktop",
                    _idProps: {
                        service: idService,
                        name: "OnDesktop"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })];
            }, function() {
                return [];
            }), $if((model.variables.deviceVar === "tablet"), false, this, function() {
                return [React.createElement(OSWidgets.Placeholder, {
                    align: /*Default*/ 0,
                    content: _this.props.placeholders.onTablet,
                    style: "display-on-device-tablet",
                    _idProps: {
                        service: idService,
                        name: "OnTablet"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })];
            }, function() {
                return [];
            }), $if((model.variables.deviceVar === "phone"), false, this, function() {
                return [React.createElement(OSWidgets.Placeholder, {
                    align: /*Default*/ 0,
                    content: _this.props.placeholders.onPhone,
                    style: "display-on-device-phone",
                    _idProps: {
                        service: idService,
                        name: "OnPhone"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })];
            }, function() {
                return [];
            }));
        }
    }

    return View;
});
define("OutSystemsUI.Adaptive.DisplayOnDevice.mvc$controller", ["@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.languageResources", "OutSystemsUI.Adaptive.DisplayOnDevice.mvc$translationsResources", "OutSystemsUI.Adaptive.DisplayOnDevice.mvc$controller.OnReady.SetMutationObserverJS", "OutSystemsUI.Adaptive.DisplayOnDevice.mvc$controller.OnDestroy.StopObserverJS", "OutSystemsUI.controller$GetDeviceType"], function(OSRuntimeCore, OutSystemsUIModel, OutSystemsUIController, OutSystemsUILanguageResources, OutSystemsUI_Adaptive_DisplayOnDevice_mvc_TranslationsResources, OutSystemsUI_Adaptive_DisplayOnDevice_mvc_controller_OnReady_SetMutationObserverJS, OutSystemsUI_Adaptive_DisplayOnDevice_mvc_controller_OnDestroy_StopObserverJS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, OutSystemsUI_Adaptive_DisplayOnDevice_mvc_TranslationsResources);
                var controller = this.controller;
                this.clientActionProxies = {
                    onInitialize$Action: function() {
                        return controller.executeActionInsideJSNode(controller._onInitialize$Action.bind(controller), controller.callContext(), function(actionResults) {
                            return {};
                        }, function() {
                            return;
                        }, "OnInitialize");
                    }
                };
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
                                span.setAttribute("outsystems.function.key", "3a59998d-3d1e-438e-aa1d-db0acfb7eac0");
                                span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                                span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                var setMutationObserverJSResult = new OS.DataTypes.VariableHolder();
                                // Set Observer on Body class attribute.
                                setMutationObserverJSResult.value = OS.Logger.startActiveSpan("SetMutationObserver", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "SetMutationObserver");
                                        span.setAttribute("outsystems.function.key", "17fc1e21-6f89-445f-826c-66b3f0e037e1");
                                        span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                                        span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(OutSystemsUI_Adaptive_DisplayOnDevice_mvc_controller_OnReady_SetMutationObserverJS, "SetMutationObserver", "OnReady", {
                                            ObserverObject: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
                                        }, function($parameters) {
                                            var jsNodeResult = new(controller.constructor.getVariableGroupType("OutSystemsUI.Adaptive.DisplayOnDevice.OnReady$setMutationObserverJSResult"))();
                                            jsNodeResult.observerObjectOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ObserverObject, OS.DataTypes.DataTypes.Object);
                                            return jsNodeResult;
                                        }, {
                                            OnInitialize: controller.clientActionProxies.onInitialize$Action
                                        }, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
                                // ObserverObj = SetMutationObserver.ObserverObject
                                model.variables.observerObjVar = setMutationObserverJSResult.value.observerObjectOut;
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

            get _onInitialize$Action() {
                if (!(this.hasOwnProperty("__onInitialize$Action"))) {
                    this.__onInitialize$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnInitialize", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnInitialize");
                                span.setAttribute("outsystems.function.key", "aa6965a4-a4bb-450f-81b9-b30965be2c54");
                                span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                                span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnInitialize");
                                callContext = controller.callContext(callContext);
                                var getDeviceTypeVar = new OS.DataTypes.VariableHolder();
                                // Execute Action: GetDeviceType
                                getDeviceTypeVar.value = OutSystemsUIController.default.getDeviceType$Action(callContext);

                                // Device = GetDeviceType.Device
                                model.variables.deviceVar = getDeviceTypeVar.value.deviceOut;
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

            get _onDestroy$Action() {
                if (!(this.hasOwnProperty("__onDestroy$Action"))) {
                    this.__onDestroy$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnDestroy", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnDestroy");
                                span.setAttribute("outsystems.function.key", "ab246169-3e95-4086-a1d3-3ba8a82eb2dc");
                                span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                                span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnDestroy");
                                callContext = controller.callContext(callContext);
                                // Stop the MutationOberver
                                OS.Logger.startActiveSpan("StopObserver", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "StopObserver");
                                        span.setAttribute("outsystems.function.key", "02e1979d-774c-4d7f-b036-c14402c6d16a");
                                        span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                                        span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(OutSystemsUI_Adaptive_DisplayOnDevice_mvc_controller_OnDestroy_StopObserverJS, "StopObserver", "OnDestroy", {
                                            ObserverObj: OS.DataConversion.JSNodeParamConverter.to(model.variables.observerObjVar, OS.DataTypes.DataTypes.Object)
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
                        span.setAttribute("outsystems.function.key", "3a59998d-3d1e-438e-aa1d-db0acfb7eac0");
                        span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                        span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
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

            onInitialize$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnInitialize__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnInitialize");
                        span.setAttribute("outsystems.function.key", "aa6965a4-a4bb-450f-81b9-b30965be2c54");
                        span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                        span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
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

            onDestroy$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnDestroy__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnDestroy");
                        span.setAttribute("outsystems.function.key", "ab246169-3e95-4086-a1d3-3ba8a82eb2dc");
                        span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                        span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
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
                return OutSystemsUIController.default.defaultTimeout;
            }

        }

        var Controller = ControllerInner;
        // Server Actions - Variables

        // Client Actions - Variables
        Controller.registerVariableGroupType("OutSystemsUI.Adaptive.DisplayOnDevice.OnReady$setMutationObserverJSResult", [{
            name: "ObserverObject",
            attrName: "observerObjectOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Object,
            defaultValue: function() {
                return null;
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, OutSystemsUILanguageResources);
});

define("OutSystemsUI.Adaptive.DisplayOnDevice.mvc$controller.OnReady.SetMutationObserverJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        var targetNode = document.body;

        // Options for the observer (which mutations to observe)
        var config = {
            attributes: true
        };

        // On mutation, run OnInitialize to update Device variable
        var callback = function() {
            $actions.OnInitialize();
        };

        // Create an observer instance linked to the callback function
        var observer = new MutationObserver(callback);

        // Start observing the target node for configured mutations
        observer.observe(targetNode, config);


        $parameters.ObserverObject = observer;
    };
});

define("OutSystemsUI.Adaptive.DisplayOnDevice.mvc$controller.OnDestroy.StopObserverJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.ObserverObj.disconnect();

    };
});


define("OutSystemsUI.Adaptive.DisplayOnDevice.mvc$translationsResources", ["exports"], function(exports) {
    return {};
});