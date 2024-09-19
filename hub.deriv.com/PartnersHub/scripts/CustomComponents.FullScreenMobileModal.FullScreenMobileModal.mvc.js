define("CustomComponents.FullScreenMobileModal.FullScreenMobileModal.mvc$model", ["@outsystems/runtime-core-js", "CustomComponents.model", "CustomComponents.FullScreenMobileModal.FullScreenMobileModalHeader.mvc$model"], function(OSRuntimeCore, CustomComponentsModel, CustomComponents_FullScreenMobileModal_FullScreenMobileModalHeader_mvcModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Title", "titleIn", "Title", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("HasBackButton", "hasBackButtonIn", "HasBackButton", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("_hasBackButtonInDataFetchStatus", "_hasBackButtonInDataFetchStatus", "_hasBackButtonInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("HasCloseIcon", "hasCloseIconIn", "HasCloseIcon", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("_hasCloseIconInDataFetchStatus", "_hasCloseIconInDataFetchStatus", "_hasCloseIconInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("IsHeaderVisible", "isHeaderVisibleIn", "IsHeaderVisible", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, false),
                    this.attr("_isHeaderVisibleInDataFetchStatus", "_isHeaderVisibleInDataFetchStatus", "_isHeaderVisibleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                Model._hasValidationWidgetsValue = CustomComponents_FullScreenMobileModal_FullScreenMobileModalHeader_mvcModel.hasValidationWidgets;
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

            if ("HasBackButton" in inputs) {
                this.variables.hasBackButtonIn = inputs.HasBackButton;
                if ("_hasBackButtonInDataFetchStatus" in inputs) {
                    this.variables._hasBackButtonInDataFetchStatus = inputs._hasBackButtonInDataFetchStatus;
                }

            }

            if ("HasCloseIcon" in inputs) {
                this.variables.hasCloseIconIn = inputs.HasCloseIcon;
                if ("_hasCloseIconInDataFetchStatus" in inputs) {
                    this.variables._hasCloseIconInDataFetchStatus = inputs._hasCloseIconInDataFetchStatus;
                }

            }

            if ("IsHeaderVisible" in inputs) {
                this.variables.isHeaderVisibleIn = inputs.IsHeaderVisible;
                if ("_isHeaderVisibleInDataFetchStatus" in inputs) {
                    this.variables._isHeaderVisibleInDataFetchStatus = inputs._isHeaderVisibleInDataFetchStatus;
                }

            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("CustomComponents.FullScreenMobileModal.FullScreenMobileModal.mvc$view", ["@outsystems/runtime-core-js", "CustomComponents.model", "CustomComponents.controller", "react", "@outsystems/runtime-view-js", "CustomComponents.FullScreenMobileModal.FullScreenMobileModal.mvc$model", "CustomComponents.FullScreenMobileModal.FullScreenMobileModal.mvc$controller", "@outsystems/runtime-widgets-js", "CustomComponents.FullScreenMobileModal.FullScreenMobileModalHeader.mvc$view"], function(OSRuntimeCore, CustomComponentsModel, CustomComponentsController, React, OSView, CustomComponents_FullScreenMobileModal_FullScreenMobileModal_mvc_model, CustomComponents_FullScreenMobileModal_FullScreenMobileModal_mvc_controller, OSWidgets, CustomComponents_FullScreenMobileModal_FullScreenMobileModalHeader_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "FullScreenMobileModal.FullScreenMobileModal";
        }

        static getAttributes() {
            return {
                codeFunction: "FullScreenMobileModal",
                functionKey: "15c6f3ef-f141-4271-b3f8-7efeb6fb0f57",
                functionOwnerName: "CustomComponents",
                functionOwnerKey: "4ba8c4d5-5fe2-407e-a6bd-5a0385565b69",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/CustomComponents.FullScreenMobileModal.FullScreenMobileModal.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [CustomComponents_FullScreenMobileModal_FullScreenMobileModalHeader_mvc_view];
        }

        get modelFactory() {
            return CustomComponents_FullScreenMobileModal_FullScreenMobileModal_mvc_model;
        }

        get controllerFactory() {
            return CustomComponents_FullScreenMobileModal_FullScreenMobileModal_mvc_controller;
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
                style: "deriv-full-screen-mobile-modal",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $if(model.variables.isHeaderVisibleIn, false, this, function() {
                return [React.createElement(CustomComponents_FullScreenMobileModal_FullScreenMobileModalHeader_mvc_view, {
                    getOwnerSpan: function() {
                        return _this.getChildSpan("render");
                    },
                    getOwnerDisposeSpan: function() {
                        return _this.getChildSpan("destroy");
                    },
                    inputs: {
                        Title: model.variables.titleIn,
                        _titleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._titleInDataFetchStatus),
                        HasBackButton: model.variables.hasBackButtonIn,
                        _hasBackButtonInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hasBackButtonInDataFetchStatus),
                        HasCloseIcon: model.variables.hasCloseIconIn,
                        _hasCloseIconInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hasCloseIconInDataFetchStatus)
                    },
                    events: {
                        _handleError: function(ex) {
                            controller.handleError(ex);
                        },
                        onClose$Action: function() {
                            var eventHandlerContext = callContext.clone();
                            controller.onClose$Action(controller.callContext(eventHandlerContext));

                            ;
                        },
                        onBack$Action: function() {
                            var eventHandlerContext = callContext.clone();
                            controller.onBack$Action(controller.callContext(eventHandlerContext));

                            ;
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
                    _dependencies: []
                })];
            }, function() {
                return [];
            }), React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.content,
                _idProps: {
                    service: idService,
                    name: "Content"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })));
        }
    }

    return View;
});
define("CustomComponents.FullScreenMobileModal.FullScreenMobileModal.mvc$controller", ["@outsystems/runtime-core-js", "CustomComponents.model", "CustomComponents.controller", "CustomComponents.languageResources"], function(OSRuntimeCore, CustomComponentsModel, CustomComponentsController, CustomComponentsLanguageResources) {
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

            get onClose$Action() {
                if (!(this.hasOwnProperty("_onClose$Action"))) {
                    this._onClose$Action = function() {
                        return Promise.resolve();
                    };
                }

                return this._onClose$Action;
            }
            set onClose$Action(value) {
                this._onClose$Action = value;
            }

            get onBack$Action() {
                if (!(this.hasOwnProperty("_onBack$Action"))) {
                    this._onBack$Action = function() {
                        return Promise.resolve();
                    };
                }

                return this._onBack$Action;
            }
            set onBack$Action(value) {
                this._onBack$Action = value;
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