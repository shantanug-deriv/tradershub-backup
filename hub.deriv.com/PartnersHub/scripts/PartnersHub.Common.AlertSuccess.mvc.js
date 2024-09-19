define("PartnersHub.Common.AlertSuccess.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "OutSystemsUI.Interaction.Animate.mvc$model", "OutSystemsUI.Content.Alert.mvc$model"], function(OSRuntimeCore, PartnersHubModel, OutSystemsUI_Interaction_Animate_mvcModel, OutSystemsUI_Content_Alert_mvcModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("IsVisible", "isVisibleVar", "IsVisible", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, false),
                    this.attr("Title", "titleIn", "Title", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
            if ((Model._hasValidationWidgetsValue === undefined)) {
                Model._hasValidationWidgetsValue = (OutSystemsUI_Interaction_Animate_mvcModel.hasValidationWidgets || OutSystemsUI_Content_Alert_mvcModel.hasValidationWidgets);
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {
            if ("Title" in inputs) {
                this.variables.titleIn = inputs.Title;
                if ("_titleInDataFetchStatus" in inputs) {
                    this.variables._titleInDataFetchStatus = inputs._titleInDataFetchStatus;
                }

            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.Common.AlertSuccess.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.Common.AlertSuccess.mvc$model", "PartnersHub.Common.AlertSuccess.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "OutSystemsUI.Interaction.Animate.mvc$view", "OutSystemsUI.Content.Alert.mvc$view"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_Common_AlertSuccess_mvc_model, PartnersHub_Common_AlertSuccess_mvc_controller, PartnersHubClientVariables, OSWidgets, OutSystemsUI_Interaction_Animate_mvc_view, OutSystemsUI_Content_Alert_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "Common.AlertSuccess";
        }

        static getAttributes() {
            return {
                codeFunction: "AlertSuccess",
                functionKey: "259516fe-a39c-4b24-8c9d-77e904861197",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Common.AlertSuccess.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [OutSystemsUI_Interaction_Animate_mvc_view, OutSystemsUI_Content_Alert_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_Common_AlertSuccess_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_Common_AlertSuccess_mvc_controller;
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
                style: "snackbar",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OutSystemsUI_Interaction_Animate_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    AnimationType: PartnersHubModel.staticEntities.animationType.topToBottom
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
                    uuid: "1",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    content: new PlaceholderContent(function() {
                        return [$if(model.variables.isVisibleVar, false, this, function() {
                            return [React.createElement(OutSystemsUI_Content_Alert_mvc_view, {
                                getOwnerSpan: function() {
                                    return _this.getChildSpan("render");
                                },
                                getOwnerDisposeSpan: function() {
                                    return _this.getChildSpan("destroy");
                                },
                                inputs: {
                                    AlertType: PartnersHubModel.staticEntities.alert.success,
                                    ExtendedClass: "snackbar--success"
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
                                    uuid: "2",
                                    alias: "2"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    messageText: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            gridProperties: {
                                                classes: "OSInline",
                                                width: "100%"
                                            },
                                            style: "snackbar--success",
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "3"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Label, {
                                            gridProperties: {
                                                classes: "OSFillParent"
                                            },
                                            _idProps: {
                                                service: idService,
                                                uuid: "4"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Expression, {
                                            extendedProperties: {
                                                style: "color: #fff; font-weight: bold;"
                                            },
                                            value: model.variables.titleIn,
                                            _idProps: {
                                                service: idService,
                                                uuid: "5"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._titleInDataFetchStatus)
                                        })), React.createElement(OSWidgets.Image, {
                                            extendedEvents: {
                                                onClick: function() {
                                                    var eventHandlerContext = callContext.clone();
                                                    controller.onClickCloseButton$Action(controller.callContext(eventHandlerContext));

                                                    ;
                                                }
                                            },
                                            extendedProperties: {
                                                style: "cursor: pointer;"
                                            },
                                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.crosswhite.svg"),
                                            type: /*Static*/ 0,
                                            _idProps: {
                                                service: idService,
                                                uuid: "6"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }))];
                                    })
                                },
                                _dependencies: [asPrimitiveValue(model.variables._titleInDataFetchStatus), asPrimitiveValue(model.variables.titleIn)]
                            })];
                        }, function() {
                            return [];
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables._titleInDataFetchStatus), asPrimitiveValue(model.variables.titleIn), asPrimitiveValue(model.variables.isVisibleVar)]
            })));
        }
    }

    return View;
});
define("PartnersHub.Common.AlertSuccess.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.Common.AlertSuccess.mvc$translationsResources"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_Common_AlertSuccess_mvc_TranslationsResources) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_Common_AlertSuccess_mvc_TranslationsResources);
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
            get _onClickCloseButton$Action() {
                if (!(this.hasOwnProperty("__onClickCloseButton$Action"))) {
                    this.__onClickCloseButton$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickCloseButton", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickCloseButton");
                                span.setAttribute("outsystems.function.key", "9c0cab0e-ce60-4432-8d44-02e9dd24691d");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnClickCloseButton");
                                callContext = controller.callContext(callContext);
                                // IsVisible = False
                                model.variables.isVisibleVar = false;
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onClickCloseButton$Action;
            }
            set _onClickCloseButton$Action(value) {
                this.__onClickCloseButton$Action = value;
            }


            onClickCloseButton$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickCloseButton__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickCloseButton");
                        span.setAttribute("outsystems.function.key", "9c0cab0e-ce60-4432-8d44-02e9dd24691d");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onClickCloseButton$Action, callContext);
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

    }
    return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});


define("PartnersHub.Common.AlertSuccess.mvc$translationsResources", ["exports"], function(exports) {
    return {};
});