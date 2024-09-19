define("OutSystemsUI.Content.BlankSlate.mvc$model", ["@outsystems/runtime-core-js", "OutSystemsUI.model"], function(OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("FullHeight", "fullHeightIn", "FullHeight", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, false),
                    this.attr("_fullHeightInDataFetchStatus", "_fullHeightInDataFetchStatus", "_fullHeightInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
            if ("FullHeight" in inputs) {
                this.variables.fullHeightIn = inputs.FullHeight;
                if ("_fullHeightInDataFetchStatus" in inputs) {
                    this.variables._fullHeightInDataFetchStatus = inputs._fullHeightInDataFetchStatus;
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

define("OutSystemsUI.Content.BlankSlate.mvc$view", ["@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "@outsystems/runtime-view-js", "OutSystemsUI.Content.BlankSlate.mvc$model", "OutSystemsUI.Content.BlankSlate.mvc$controller", "@outsystems/runtime-widgets-js"], function(OSRuntimeCore, OutSystemsUIModel, OutSystemsUIController, React, OSView, OutSystemsUI_Content_BlankSlate_mvc_model, OutSystemsUI_Content_BlankSlate_mvc_controller, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "Content.BlankSlate";
        }

        static getAttributes() {
            return {
                codeFunction: "BlankSlate",
                functionKey: "7dafe718-172c-4583-aefa-0c9bd4823126",
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
            return OutSystemsUI_Content_BlankSlate_mvc_model;
        }

        get controllerFactory() {
            return OutSystemsUI_Content_BlankSlate_mvc_controller;
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
                style: model.getCachedValue(idService.getId("BlankState.Style"), function() {
                    return ((("blank-slate" + ((!(model.variables.fullHeightIn)) ? ("") : (" large"))) + " ") + model.variables.extendedClassIn);
                }, function() {
                    return model.variables.fullHeightIn;
                }, function() {
                    return model.variables.extendedClassIn;
                }),
                visible: true,
                _idProps: {
                    service: idService,
                    name: "BlankState"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._fullHeightInDataFetchStatus, model.variables._extendedClassInDataFetchStatus)
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.icon,
                style: "ph blank-slate-icon",
                _idProps: {
                    service: idService,
                    name: "Icon"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.content,
                style: "ph blank-slate-description",
                _idProps: {
                    service: idService,
                    name: "Content"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.actions,
                style: "ph blank-slate-actions",
                _idProps: {
                    service: idService,
                    name: "Actions"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))));
        }
    }

    return View;
});
define("OutSystemsUI.Content.BlankSlate.mvc$controller", ["@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.languageResources", "OutSystemsUI.Content.BlankSlate.mvc$translationsResources"], function(OSRuntimeCore, OutSystemsUIModel, OutSystemsUIController, OutSystemsUILanguageResources, OutSystemsUI_Content_BlankSlate_mvc_TranslationsResources) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, OutSystemsUI_Content_BlankSlate_mvc_TranslationsResources);
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
                return OutSystemsUIController.default.defaultTimeout;
            }

        }

        var Controller = ControllerInner;
        // Server Actions - Variables

        // Client Actions - Variables

    }
    return new OS.Controller.ControllerFactory(Controller, OutSystemsUILanguageResources);
});


define("OutSystemsUI.Content.BlankSlate.mvc$translationsResources", ["exports"], function(exports) {
    return {};
});