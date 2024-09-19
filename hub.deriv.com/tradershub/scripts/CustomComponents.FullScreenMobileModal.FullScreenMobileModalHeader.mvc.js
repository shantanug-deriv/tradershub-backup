define("CustomComponents.FullScreenMobileModal.FullScreenMobileModalHeader.mvc$model", ["@outsystems/runtime-core-js", "CustomComponents.model"], function(OSRuntimeCore, CustomComponentsModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
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
                    this.attr("Title", "titleIn", "Title", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("HasSeparator", "hasSeparatorIn", "HasSeparator", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, false),
                    this.attr("_hasSeparatorInDataFetchStatus", "_hasSeparatorInDataFetchStatus", "_hasSeparatorInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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

            if ("Title" in inputs) {
                this.variables.titleIn = inputs.Title;
                if ("_titleInDataFetchStatus" in inputs) {
                    this.variables._titleInDataFetchStatus = inputs._titleInDataFetchStatus;
                }

            }

            if ("HasSeparator" in inputs) {
                this.variables.hasSeparatorIn = inputs.HasSeparator;
                if ("_hasSeparatorInDataFetchStatus" in inputs) {
                    this.variables._hasSeparatorInDataFetchStatus = inputs._hasSeparatorInDataFetchStatus;
                }

            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("CustomComponents.FullScreenMobileModal.FullScreenMobileModalHeader.mvc$view", ["@outsystems/runtime-core-js", "CustomComponents.model", "CustomComponents.controller", "react", "@outsystems/runtime-view-js", "CustomComponents.FullScreenMobileModal.FullScreenMobileModalHeader.mvc$model", "CustomComponents.FullScreenMobileModal.FullScreenMobileModalHeader.mvc$controller", "@outsystems/runtime-widgets-js"], function(OSRuntimeCore, CustomComponentsModel, CustomComponentsController, React, OSView, CustomComponents_FullScreenMobileModal_FullScreenMobileModalHeader_mvc_model, CustomComponents_FullScreenMobileModal_FullScreenMobileModalHeader_mvc_controller, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "FullScreenMobileModal.FullScreenMobileModalHeader";
        }

        static getAttributes() {
            return {
                codeFunction: "FullScreenMobileModalHeader",
                functionKey: "9dae0dfa-648a-441d-9b4f-851d7788ee4d",
                functionOwnerName: "CustomComponents",
                functionOwnerKey: "4ba8c4d5-5fe2-407e-a6bd-5a0385565b69",
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
            return CustomComponents_FullScreenMobileModal_FullScreenMobileModalHeader_mvc_model;
        }

        get controllerFactory() {
            return CustomComponents_FullScreenMobileModal_FullScreenMobileModalHeader_mvc_controller;
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
                    style: "align-items: center; border: none; display: flex; justify-content: flex-start; padding: 16px;"
                },
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
                    style: "align-items: center; display: flex;"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $if(model.variables.hasBackButtonIn, false, this, function() {
                return [React.createElement(OSWidgets.Image, {
                    extendedEvents: {
                        onClick: function() {
                            var eventHandlerContext = callContext.clone();
                            controller.onBack$Action(controller.callContext(eventHandlerContext));

                            ;
                        }
                    },
                    extendedProperties: {
                        style: "cursor: pointer; font-size: 18px; margin-right: 16px;"
                    },
                    gridProperties: {
                        width: "18px"
                    },
                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/CustomComponents.arrowleftsm.svg"),
                    type: /*Static*/ 0,
                    _idProps: {
                        service: idService,
                        uuid: "2"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })];
            }, function() {
                return [];
            }), React.createElement(OSWidgets.Expression, {
                extendedProperties: {
                    style: "font-size: 18px; font-weight: bold;"
                },
                value: model.variables.titleIn,
                _idProps: {
                    service: idService,
                    uuid: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._titleInDataFetchStatus)
            })), $if(model.variables.hasCloseIconIn, false, this, function() {
                return [React.createElement(OSWidgets.Image, {
                    extendedEvents: {
                        onClick: function() {
                            var eventHandlerContext = callContext.clone();
                            controller.onClose$Action(controller.callContext(eventHandlerContext));

                            ;
                        }
                    },
                    extendedProperties: {
                        style: "cursor: pointer; font-size: 16px;"
                    },
                    gridProperties: {
                        width: "16px"
                    },
                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/CustomComponents.xmarkmd.svg"),
                    type: /*Static*/ 0,
                    _idProps: {
                        service: idService,
                        uuid: "4"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })];
            }, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "5"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })];
            })), $if(model.variables.hasSeparatorIn, false, this, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "background-color: #F1F3F5; height: 2px;"
                    },
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "6"
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
define("CustomComponents.FullScreenMobileModal.FullScreenMobileModalHeader.mvc$controller", ["@outsystems/runtime-core-js", "CustomComponents.model", "CustomComponents.controller", "CustomComponents.languageResources"], function(OSRuntimeCore, CustomComponentsModel, CustomComponentsController, CustomComponentsLanguageResources) {
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