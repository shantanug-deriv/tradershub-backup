define("OutSystemsUI.Content.Alert.mvc$model", ["@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "OutSystemsUI.controller$SetFocus"], function(OSRuntimeCore, OutSystemsUIModel, OutSystemsUIController) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("AlertType", "alertTypeIn", "AlertType", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.alert.info;
                    }, false),
                    this.attr("_alertTypeInDataFetchStatus", "_alertTypeInDataFetchStatus", "_alertTypeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
            if ("AlertType" in inputs) {
                this.variables.alertTypeIn = inputs.AlertType;
                if ("_alertTypeInDataFetchStatus" in inputs) {
                    this.variables._alertTypeInDataFetchStatus = inputs._alertTypeInDataFetchStatus;
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

define("OutSystemsUI.Content.Alert.mvc$view", ["@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "@outsystems/runtime-view-js", "OutSystemsUI.Content.Alert.mvc$model", "OutSystemsUI.Content.Alert.mvc$controller", "@outsystems/runtime-widgets-js", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "OutSystemsUI.controller$SetFocus"], function(OSRuntimeCore, OutSystemsUIModel, OutSystemsUIController, React, OSView, OutSystemsUI_Content_Alert_mvc_model, OutSystemsUI_Content_Alert_mvc_controller, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "Content.Alert";
        }

        static getAttributes() {
            return {
                codeFunction: "Alert",
                functionKey: "3f398694-7451-4ab4-ad1d-b27e38ed9490",
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
            return OutSystemsUI_Content_Alert_mvc_model;
        }

        get controllerFactory() {
            return OutSystemsUI_Content_Alert_mvc_controller;
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
                    role: model.getCachedValue(idService.getId("Alert.role"), function() {
                        return ((((model.variables.alertTypeIn === OutSystemsUIModel.staticEntities.alert.error) || (model.variables.alertTypeIn === OutSystemsUIModel.staticEntities.alert.warning))) ? ("alert") : ("status"));
                    }, function() {
                        return model.variables.alertTypeIn;
                    }),
                    "aria-live": "polite",
                    "aria-atomic": "true",
                    tabIndex: "0"
                },
                style: (((("alert" + " ") + model.variables.alertTypeIn) + " ") + model.variables.extendedClassIn),
                visible: true,
                _idProps: {
                    service: idService,
                    name: "Alert"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._alertTypeInDataFetchStatus, model.variables._extendedClassInDataFetchStatus)
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    "aria-hidden": "true"
                },
                gridProperties: {
                    classes: "OSInline"
                },
                style: "alert-icon",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $if((model.variables.alertTypeIn === OutSystemsUIModel.staticEntities.alert.success), false, this, function() {
                return [React.createElement(OSWidgets.Icon, {
                    icon: "check-circle",
                    iconSize: /*FontSize*/ 0,
                    style: "icon",
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "Icon1"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })];
            }, function() {
                return [$if((model.variables.alertTypeIn === OutSystemsUIModel.staticEntities.alert.info), false, this, function() {
                    return [React.createElement(OSWidgets.Icon, {
                        icon: "info-circle",
                        iconSize: /*FontSize*/ 0,
                        style: "icon",
                        visible: true,
                        _idProps: {
                            service: idService,
                            name: "Icon2"
                        },
                        _widgetRecordProvider: widgetsRecordProvider
                    })];
                }, function() {
                    return [$if((model.variables.alertTypeIn === OutSystemsUIModel.staticEntities.alert.error), false, this, function() {
                        return [React.createElement(OSWidgets.Icon, {
                            icon: "times-circle",
                            iconSize: /*FontSize*/ 0,
                            style: "icon",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "Icon3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    }, function() {
                        return [React.createElement(OSWidgets.Icon, {
                            icon: "warning",
                            iconSize: /*FontSize*/ 0,
                            style: "icon",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "Icon4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    })];
                })];
            })), React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.messageText,
                style: "alert-message",
                _idProps: {
                    service: idService,
                    name: "MessageText"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })));
        }
    }

    return View;
});
define("OutSystemsUI.Content.Alert.mvc$controller", ["@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.languageResources", "OutSystemsUI.Content.Alert.mvc$translationsResources", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "OutSystemsUI.controller$SetFocus"], function(OSRuntimeCore, OutSystemsUIModel, OutSystemsUIController, OutSystemsUILanguageResources, OutSystemsUI_Content_Alert_mvc_TranslationsResources) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, OutSystemsUI_Content_Alert_mvc_TranslationsResources);
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
            get _focusAlert$Action() {
                if (!(this.hasOwnProperty("__focusAlert$Action"))) {
                    this.__focusAlert$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("FocusAlert", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "FocusAlert");
                                span.setAttribute("outsystems.function.key", "f9dc6163-e83e-4fe7-966e-bc4791c5fcc7");
                                span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                                span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("FocusAlert");
                                callContext = controller.callContext(callContext);
                                var setFocusVar = new OS.DataTypes.VariableHolder();
                                // Focus Disabled?
                                if ((!(((OS.BuiltinFunctions.index(OS.BuiltinFunctions.toLower(model.variables.extendedClassIn), "disable-alert-focus", 0, false, false)) !== (-1))))) {
                                    // Execute Action: SetFocus
                                    setFocusVar.value = OutSystemsUIController.default.setFocus$Action(idService.getId("Alert"), callContext);

                                }

                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__focusAlert$Action;
            }
            set _focusAlert$Action(value) {
                this.__focusAlert$Action = value;
            }


            focusAlert$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("FocusAlert__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "FocusAlert");
                        span.setAttribute("outsystems.function.key", "f9dc6163-e83e-4fe7-966e-bc4791c5fcc7");
                        span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
                        span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._focusAlert$Action, callContext);
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

                        return controller.focusAlert$Action(callContext);

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

                        return controller.focusAlert$Action(callContext);

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
                return OutSystemsUIController.default.defaultTimeout;
            }

        }

        var Controller = ControllerInner;
        // Server Actions - Variables

        // Client Actions - Variables

    }
    return new OS.Controller.ControllerFactory(Controller, OutSystemsUILanguageResources);
});


define("OutSystemsUI.Content.Alert.mvc$translationsResources", ["exports"], function(exports) {
    return {};
});