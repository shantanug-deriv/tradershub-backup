define("tradershub.FinancialAssessmentFlow.AssessmentBlock.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model"], function(OSRuntimeCore, tradershubModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("IsRequired", "isRequiredIn", "IsRequired", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("_isRequiredInDataFetchStatus", "_isRequiredInDataFetchStatus", "_isRequiredInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("Page", "pageIn", "Page", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("_pageInDataFetchStatus", "_pageInDataFetchStatus", "_pageInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("QuestionText", "questionTextIn", "QuestionText", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("_questionTextInDataFetchStatus", "_questionTextInDataFetchStatus", "_questionTextInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("HideQuestion", "hideQuestionIn", "HideQuestion", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("_hideQuestionInDataFetchStatus", "_hideQuestionInDataFetchStatus", "_hideQuestionInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
            if ("IsRequired" in inputs) {
                this.variables.isRequiredIn = inputs.IsRequired;
                if ("_isRequiredInDataFetchStatus" in inputs) {
                    this.variables._isRequiredInDataFetchStatus = inputs._isRequiredInDataFetchStatus;
                }

            }

            if ("Page" in inputs) {
                this.variables.pageIn = inputs.Page;
                if ("_pageInDataFetchStatus" in inputs) {
                    this.variables._pageInDataFetchStatus = inputs._pageInDataFetchStatus;
                }

            }

            if ("QuestionText" in inputs) {
                this.variables.questionTextIn = inputs.QuestionText;
                if ("_questionTextInDataFetchStatus" in inputs) {
                    this.variables._questionTextInDataFetchStatus = inputs._questionTextInDataFetchStatus;
                }

            }

            if ("HideQuestion" in inputs) {
                this.variables.hideQuestionIn = inputs.HideQuestion;
                if ("_hideQuestionInDataFetchStatus" in inputs) {
                    this.variables._hideQuestionInDataFetchStatus = inputs._hideQuestionInDataFetchStatus;
                }

            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("tradershub.FinancialAssessmentFlow.AssessmentBlock.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "react", "@outsystems/runtime-view-js", "tradershub.FinancialAssessmentFlow.AssessmentBlock.mvc$model", "tradershub.FinancialAssessmentFlow.AssessmentBlock.mvc$controller", "tradershub.clientVariables", "@outsystems/runtime-widgets-js"], function(OSRuntimeCore, tradershubModel, tradershubController, React, OSView, tradershub_FinancialAssessmentFlow_AssessmentBlock_mvc_model, tradershub_FinancialAssessmentFlow_AssessmentBlock_mvc_controller, tradershubClientVariables, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "FinancialAssessmentFlow.AssessmentBlock";
        }

        static getAttributes() {
            return {
                codeFunction: "AssessmentBlock",
                functionKey: "eb7317af-0205-4115-bb9f-cb95f1ef94b2",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.FinancialAssessmentFlow.AssessmentBlock.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [];
        }

        get modelFactory() {
            return tradershub_FinancialAssessmentFlow_AssessmentBlock_mvc_model;
        }

        get controllerFactory() {
            return tradershub_FinancialAssessmentFlow_AssessmentBlock_mvc_controller;
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
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "display-flex align-items-center justify-content-space-between",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "PageNumber"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "financial-assessment-header",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "FinancialAssessmentHeader"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "color: #000000; font-size: 18px; font-weight: bold;"
                },
                text: ["Financial assessment"],
                _idProps: {
                    service: idService,
                    uuid: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Expression, {
                style: "page-number",
                value: model.variables.pageIn,
                _idProps: {
                    service: idService,
                    uuid: "4"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._pageInDataFetchStatus)
            })), $if(model.variables.hideQuestionIn, false, this, function() {
                return [];
            }, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    style: "question-container",
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "Question"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, $if(model.variables.isRequiredIn, false, this, function() {
                    return [React.createElement(OSWidgets.Container, {
                        align: /*Default*/ 0,
                        animate: false,
                        style: "required-container",
                        visible: true,
                        _idProps: {
                            service: idService,
                            name: "Required"
                        },
                        _widgetRecordProvider: widgetsRecordProvider
                    }, React.createElement(OSWidgets.Text, {
                        extendedProperties: {
                            style: "color: #EC3F3F;"
                        },
                        text: ["* This is required."],
                        _idProps: {
                            service: idService,
                            uuid: "7"
                        },
                        _widgetRecordProvider: widgetsRecordProvider
                    }))];
                }, function() {
                    return [];
                }), React.createElement(OSWidgets.Expression, {
                    style: "question",
                    value: model.variables.questionTextIn,
                    _idProps: {
                        service: idService,
                        uuid: "8"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._questionTextInDataFetchStatus)
                }))];
            }), React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.content,
                _idProps: {
                    service: idService,
                    name: "content"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })));
        }
    }

    return View;
});
define("tradershub.FinancialAssessmentFlow.AssessmentBlock.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.languageResources", "tradershub.clientVariables"], function(OSRuntimeCore, tradershubModel, tradershubController, tradershubLanguageResources, tradershubClientVariables) {
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
                return tradershubController.default.defaultTimeout;
            }

        }

        var Controller = ControllerInner;
        // Server Actions - Variables

        // Client Actions - Variables

    }
    return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});