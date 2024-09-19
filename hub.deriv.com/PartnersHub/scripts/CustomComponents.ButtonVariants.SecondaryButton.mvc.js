define("CustomComponents.ButtonVariants.SecondaryButton.mvc$model", ["@outsystems/runtime-core-js", "CustomComponents.model"], function(OSRuntimeCore, CustomComponentsModel) {
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
                    this.attr("BorderColor", "borderColorIn", "BorderColor", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("_borderColorInDataFetchStatus", "_borderColorInDataFetchStatus", "_borderColorInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("isTitleBold", "isTitleBoldIn", "isTitleBold", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("_isTitleBoldInDataFetchStatus", "_isTitleBoldInDataFetchStatus", "_isTitleBoldInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("height", "heightIn", "height", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "48px";
                    }, false),
                    this.attr("_heightInDataFetchStatus", "_heightInDataFetchStatus", "_heightInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("borderRadius", "borderRadiusIn", "borderRadius", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "16px";
                    }, false),
                    this.attr("_borderRadiusInDataFetchStatus", "_borderRadiusInDataFetchStatus", "_borderRadiusInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("TextColor", "textColorIn", "TextColor", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "#FF444F";
                    }, false),
                    this.attr("_textColorInDataFetchStatus", "_textColorInDataFetchStatus", "_textColorInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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

            if ("BorderColor" in inputs) {
                this.variables.borderColorIn = inputs.BorderColor;
                if ("_borderColorInDataFetchStatus" in inputs) {
                    this.variables._borderColorInDataFetchStatus = inputs._borderColorInDataFetchStatus;
                }

            }

            if ("isTitleBold" in inputs) {
                this.variables.isTitleBoldIn = inputs.isTitleBold;
                if ("_isTitleBoldInDataFetchStatus" in inputs) {
                    this.variables._isTitleBoldInDataFetchStatus = inputs._isTitleBoldInDataFetchStatus;
                }

            }

            if ("height" in inputs) {
                this.variables.heightIn = inputs.height;
                if ("_heightInDataFetchStatus" in inputs) {
                    this.variables._heightInDataFetchStatus = inputs._heightInDataFetchStatus;
                }

            }

            if ("borderRadius" in inputs) {
                this.variables.borderRadiusIn = inputs.borderRadius;
                if ("_borderRadiusInDataFetchStatus" in inputs) {
                    this.variables._borderRadiusInDataFetchStatus = inputs._borderRadiusInDataFetchStatus;
                }

            }

            if ("TextColor" in inputs) {
                this.variables.textColorIn = inputs.TextColor;
                if ("_textColorInDataFetchStatus" in inputs) {
                    this.variables._textColorInDataFetchStatus = inputs._textColorInDataFetchStatus;
                }

            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("CustomComponents.ButtonVariants.SecondaryButton.mvc$view", ["@outsystems/runtime-core-js", "CustomComponents.model", "CustomComponents.controller", "react", "@outsystems/runtime-view-js", "CustomComponents.ButtonVariants.SecondaryButton.mvc$model", "CustomComponents.ButtonVariants.SecondaryButton.mvc$controller", "@outsystems/runtime-widgets-js"], function(OSRuntimeCore, CustomComponentsModel, CustomComponentsController, React, OSView, CustomComponents_ButtonVariants_SecondaryButton_mvc_model, CustomComponents_ButtonVariants_SecondaryButton_mvc_controller, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "ButtonVariants.SecondaryButton";
        }

        static getAttributes() {
            return {
                codeFunction: "SecondaryButton",
                functionKey: "f07e1b9b-59dd-49fc-b89e-ea7edf36f009",
                functionOwnerName: "CustomComponents",
                functionOwnerKey: "4ba8c4d5-5fe2-407e-a6bd-5a0385565b69",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/CustomComponents.ButtonVariants.SecondaryButton.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [];
        }

        get modelFactory() {
            return CustomComponents_ButtonVariants_SecondaryButton_mvc_model;
        }

        get controllerFactory() {
            return CustomComponents_ButtonVariants_SecondaryButton_mvc_controller;
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
                enabled: true,
                extendedProperties: {
                    style: ((((((((((("width: " + model.variables.widthIn) + ";") + "height: ") + model.variables.heightIn) + ";") + "border-color: ") + model.variables.borderColorIn) + ";") + "border-radius: ") + model.variables.borderRadiusIn) + ";")
                },
                isDefault: false,
                onClick: function() {
                    return Promise.resolve().then(function() {
                        var eventHandlerContext = callContext.clone();
                        return controller.triggerOnClick$Action(controller.callContext(eventHandlerContext));
                    });;
                },
                style: "secondary-button",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Expression, {
                extendedProperties: {
                    style: model.getCachedValue(idService.getId("6TCHMVtfrUq7hGwmRj7NQA.style"), function() {
                        return ((((("font-weight: " + ((model.variables.isTitleBoldIn) ? ("bold") : ("normal"))) + ";") + "color: ") + model.variables.textColorIn) + ";");
                    }, function() {
                        return model.variables.isTitleBoldIn;
                    }, function() {
                        return model.variables.textColorIn;
                    })
                },
                style: "secondary-label",
                value: model.variables.titleIn,
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._titleInDataFetchStatus)
            })));
        }
    }

    return View;
});
define("CustomComponents.ButtonVariants.SecondaryButton.mvc$controller", ["@outsystems/runtime-core-js", "CustomComponents.model", "CustomComponents.controller", "CustomComponents.languageResources"], function(OSRuntimeCore, CustomComponentsModel, CustomComponentsController, CustomComponentsLanguageResources) {
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
                                span.setAttribute("outsystems.function.key", "16930f7a-957e-4228-98c3-4738d2d56bed");
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
                        span.setAttribute("outsystems.function.key", "16930f7a-957e-4228-98c3-4738d2d56bed");
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