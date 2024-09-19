define("CustomComponents.ButtonVariants.PrimaryButton.mvc$model", ["@outsystems/runtime-core-js", "CustomComponents.model"], function(OSRuntimeCore, CustomComponentsModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("title", "titleIn", "title", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("Width", "widthIn", "Width", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "auto";
                    }, false),
                    this.attr("_widthInDataFetchStatus", "_widthInDataFetchStatus", "_widthInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("BackgroundColor", "backgroundColorIn", "BackgroundColor", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "#FF444F";
                    }, false),
                    this.attr("_backgroundColorInDataFetchStatus", "_backgroundColorInDataFetchStatus", "_backgroundColorInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("isLoading", "isLoadingIn", "isLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("class", "classIn", "class", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("_classInDataFetchStatus", "_classInDataFetchStatus", "_classInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("enabled", "enabledIn", "enabled", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, false),
                    this.attr("_enabledInDataFetchStatus", "_enabledInDataFetchStatus", "_enabledInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("visible", "visibleIn", "visible", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, false),
                    this.attr("_visibleInDataFetchStatus", "_visibleInDataFetchStatus", "_visibleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("borderRadius", "borderRadiusIn", "borderRadius", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "16px";
                    }, false),
                    this.attr("_borderRadiusInDataFetchStatus", "_borderRadiusInDataFetchStatus", "_borderRadiusInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("height", "heightIn", "height", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "48px";
                    }, false),
                    this.attr("_heightInDataFetchStatus", "_heightInDataFetchStatus", "_heightInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("buttonType", "buttonTypeIn", "buttonType", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "button";
                    }, false),
                    this.attr("_buttonTypeInDataFetchStatus", "_buttonTypeInDataFetchStatus", "_buttonTypeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("builtInValidation", "builtInValidationIn", "builtInValidation", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("_builtInValidationInDataFetchStatus", "_builtInValidationInDataFetchStatus", "_builtInValidationInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
            if ("title" in inputs) {
                this.variables.titleIn = inputs.title;
                if ("_titleInDataFetchStatus" in inputs) {
                    this.variables._titleInDataFetchStatus = inputs._titleInDataFetchStatus;
                }

            }

            if ("Width" in inputs) {
                this.variables.widthIn = inputs.Width;
                if ("_widthInDataFetchStatus" in inputs) {
                    this.variables._widthInDataFetchStatus = inputs._widthInDataFetchStatus;
                }

            }

            if ("BackgroundColor" in inputs) {
                this.variables.backgroundColorIn = inputs.BackgroundColor;
                if ("_backgroundColorInDataFetchStatus" in inputs) {
                    this.variables._backgroundColorInDataFetchStatus = inputs._backgroundColorInDataFetchStatus;
                }

            }

            if ("isLoading" in inputs) {
                this.variables.isLoadingIn = inputs.isLoading;
                if ("_isLoadingInDataFetchStatus" in inputs) {
                    this.variables._isLoadingInDataFetchStatus = inputs._isLoadingInDataFetchStatus;
                }

            }

            if ("class" in inputs) {
                this.variables.classIn = inputs.class;
                if ("_classInDataFetchStatus" in inputs) {
                    this.variables._classInDataFetchStatus = inputs._classInDataFetchStatus;
                }

            }

            if ("enabled" in inputs) {
                this.variables.enabledIn = inputs.enabled;
                if ("_enabledInDataFetchStatus" in inputs) {
                    this.variables._enabledInDataFetchStatus = inputs._enabledInDataFetchStatus;
                }

            }

            if ("visible" in inputs) {
                this.variables.visibleIn = inputs.visible;
                if ("_visibleInDataFetchStatus" in inputs) {
                    this.variables._visibleInDataFetchStatus = inputs._visibleInDataFetchStatus;
                }

            }

            if ("borderRadius" in inputs) {
                this.variables.borderRadiusIn = inputs.borderRadius;
                if ("_borderRadiusInDataFetchStatus" in inputs) {
                    this.variables._borderRadiusInDataFetchStatus = inputs._borderRadiusInDataFetchStatus;
                }

            }

            if ("height" in inputs) {
                this.variables.heightIn = inputs.height;
                if ("_heightInDataFetchStatus" in inputs) {
                    this.variables._heightInDataFetchStatus = inputs._heightInDataFetchStatus;
                }

            }

            if ("buttonType" in inputs) {
                this.variables.buttonTypeIn = inputs.buttonType;
                if ("_buttonTypeInDataFetchStatus" in inputs) {
                    this.variables._buttonTypeInDataFetchStatus = inputs._buttonTypeInDataFetchStatus;
                }

            }

            if ("builtInValidation" in inputs) {
                this.variables.builtInValidationIn = inputs.builtInValidation;
                if ("_builtInValidationInDataFetchStatus" in inputs) {
                    this.variables._builtInValidationInDataFetchStatus = inputs._builtInValidationInDataFetchStatus;
                }

            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("CustomComponents.ButtonVariants.PrimaryButton.mvc$view", ["@outsystems/runtime-core-js", "CustomComponents.model", "CustomComponents.controller", "react", "@outsystems/runtime-view-js", "CustomComponents.ButtonVariants.PrimaryButton.mvc$model", "CustomComponents.ButtonVariants.PrimaryButton.mvc$controller", "@outsystems/runtime-widgets-js"], function(OSRuntimeCore, CustomComponentsModel, CustomComponentsController, React, OSView, CustomComponents_ButtonVariants_PrimaryButton_mvc_model, CustomComponents_ButtonVariants_PrimaryButton_mvc_controller, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "ButtonVariants.PrimaryButton";
        }

        static getAttributes() {
            return {
                codeFunction: "PrimaryButton",
                functionKey: "dbee8560-5f72-4b2c-8726-d7e24c09e061",
                functionOwnerName: "CustomComponents",
                functionOwnerKey: "4ba8c4d5-5fe2-407e-a6bd-5a0385565b69",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/CustomComponents.ButtonVariants.PrimaryButton.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [];
        }

        get modelFactory() {
            return CustomComponents_ButtonVariants_PrimaryButton_mvc_model;
        }

        get controllerFactory() {
            return CustomComponents_ButtonVariants_PrimaryButton_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Button, {
                enabled: model.variables.enabledIn,
                extendedProperties: {
                    style: ((((((((((("width: " + model.variables.widthIn) + ";") + "height: ") + model.variables.heightIn) + ";") + "background: ") + model.variables.backgroundColorIn) + ";") + "border-radius: ") + model.variables.borderRadiusIn) + ";"),
                    type: model.variables.buttonTypeIn,
                    "data-button": (model.variables.builtInValidationIn ? "True" : "False")
                },
                isDefault: false,
                onClick: function() {
                    return Promise.resolve().then(function() {
                        var eventHandlerContext = callContext.clone();
                        return controller.triggerOnClick$Action(controller.callContext(eventHandlerContext));
                    });;
                },
                style: ("primary-button " + model.variables.classIn),
                visible: model.variables.visibleIn,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                enabled_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._enabledInDataFetchStatus),
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._classInDataFetchStatus),
                visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._visibleInDataFetchStatus)
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "primary-label",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: true,
                style: "primary-button-loading",
                visible: model.variables.isLoadingIn,
                _idProps: {
                    service: idService,
                    name: "LoadingContainer"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isLoadingInDataFetchStatus)
            }), React.createElement(OSWidgets.Expression, {
                value: model.variables.titleIn,
                _idProps: {
                    service: idService,
                    uuid: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._titleInDataFetchStatus)
            }))));
        }
    }

    return View;
});
define("CustomComponents.ButtonVariants.PrimaryButton.mvc$controller", ["@outsystems/runtime-core-js", "CustomComponents.model", "CustomComponents.controller", "CustomComponents.languageResources"], function(OSRuntimeCore, CustomComponentsModel, CustomComponentsController, CustomComponentsLanguageResources) {
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
            get _triggerOnClick$Action() {
                if (!(this.hasOwnProperty("__triggerOnClick$Action"))) {
                    this.__triggerOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("TriggerOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "TriggerOnClick");
                                span.setAttribute("outsystems.function.key", "6fdf31f4-58ea-4197-a3b9-bfee6f8f557d");
                                span.setAttribute("outsystems.function.owner.name", "CustomComponents");
                                span.setAttribute("outsystems.function.owner.key", "4ba8c4d5-5fe2-407e-a6bd-5a0385565b69");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("TriggerOnClick");
                                callContext = controller.callContext(callContext);
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Trigger Event: onClick
                                    return controller.onClick$Action(callContext);
                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    };
                }

                return this.__triggerOnClick$Action;
            }
            set _triggerOnClick$Action(value) {
                this.__triggerOnClick$Action = value;
            }


            triggerOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("TriggerOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "TriggerOnClick");
                        span.setAttribute("outsystems.function.key", "6fdf31f4-58ea-4197-a3b9-bfee6f8f557d");
                        span.setAttribute("outsystems.function.owner.name", "CustomComponents");
                        span.setAttribute("outsystems.function.owner.key", "4ba8c4d5-5fe2-407e-a6bd-5a0385565b69");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._triggerOnClick$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            get onClick$Action() {
                if (!(this.hasOwnProperty("_onClick$Action"))) {
                    this._onClick$Action = function() {
                        return Promise.resolve();
                    };
                }

                return this._onClick$Action;
            }
            set onClick$Action(value) {
                this._onClick$Action = value;
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
                return CustomComponentsController.default.defaultTimeout;
            }

        }

        var Controller = ControllerInner;
        // Server Actions - Variables

        // Client Actions - Variables

    }
    return new OS.Controller.ControllerFactory(Controller, CustomComponentsLanguageResources);
});