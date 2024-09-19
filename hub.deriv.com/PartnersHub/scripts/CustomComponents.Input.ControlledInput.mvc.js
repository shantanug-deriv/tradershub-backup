define("CustomComponents.Input.ControlledInput.mvc$model", ["@outsystems/runtime-core-js", "CustomComponents.model"], function(OSRuntimeCore, CustomComponentsModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Label", "labelIn", "Label", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("_labelInDataFetchStatus", "_labelInDataFetchStatus", "_labelInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
            if ("Label" in inputs) {
                this.variables.labelIn = inputs.Label;
                if ("_labelInDataFetchStatus" in inputs) {
                    this.variables._labelInDataFetchStatus = inputs._labelInDataFetchStatus;
                }

            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("CustomComponents.Input.ControlledInput.mvc$view", ["@outsystems/runtime-core-js", "CustomComponents.model", "CustomComponents.controller", "react", "@outsystems/runtime-view-js", "CustomComponents.Input.ControlledInput.mvc$model", "CustomComponents.Input.ControlledInput.mvc$controller", "@outsystems/runtime-widgets-js"], function(OSRuntimeCore, CustomComponentsModel, CustomComponentsController, React, OSView, CustomComponents_Input_ControlledInput_mvc_model, CustomComponents_Input_ControlledInput_mvc_controller, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "Input.ControlledInput";
        }

        static getAttributes() {
            return {
                codeFunction: "ControlledInput",
                functionKey: "f23889aa-7b9a-4633-baeb-95cd05b7c909",
                functionOwnerName: "CustomComponents",
                functionOwnerKey: "4ba8c4d5-5fe2-407e-a6bd-5a0385565b69",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/CustomComponents.Input.ControlledInput.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [];
        }

        get modelFactory() {
            return CustomComponents_Input_ControlledInput_mvc_model;
        }

        get controllerFactory() {
            return CustomComponents_Input_ControlledInput_mvc_controller;
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
                style: "form-control deriv-input",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $if((((model.variables.labelIn) !== (OS.BuiltinFunctions.nullTextIdentifier())) && ((model.variables.labelIn) !== (""))), false, this, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "margin-bottom: 16px;"
                    },
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "1"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Expression, {
                    value: model.variables.labelIn,
                    _idProps: {
                        service: idService,
                        uuid: "2"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._labelInDataFetchStatus)
                }))];
            }, function() {
                return [];
            }), React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.input,
                style: "deriv-input",
                _idProps: {
                    service: idService,
                    name: "Input"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })));
        }
    }

    return View;
});
define("CustomComponents.Input.ControlledInput.mvc$controller", ["@outsystems/runtime-core-js", "CustomComponents.model", "CustomComponents.controller", "CustomComponents.languageResources"], function(OSRuntimeCore, CustomComponentsModel, CustomComponentsController, CustomComponentsLanguageResources) {
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