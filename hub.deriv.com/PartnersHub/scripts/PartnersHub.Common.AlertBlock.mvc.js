define("PartnersHub.Common.AlertBlock.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "CustomComponents.ButtonVariants.PrimaryButton.mvc$model", "PartnersHub.model$ST_6e5c732e48bd98c4d439ed63bb1fb9c4Structure"], function(OSRuntimeCore, PartnersHubModel, CustomComponents_ButtonVariants_PrimaryButton_mvcModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("type", "typeIn", "type", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new PartnersHubModel.ST_6e5c732e48bd98c4d439ed63bb1fb9c4Structure());
                    }, false, PartnersHubModel.ST_6e5c732e48bd98c4d439ed63bb1fb9c4Structure),
                    this.attr("_typeInDataFetchStatus", "_typeInDataFetchStatus", "_typeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("title", "titleIn", "title", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("description", "descriptionIn", "description", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("_descriptionInDataFetchStatus", "_descriptionInDataFetchStatus", "_descriptionInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("buttonTitle", "buttonTitleIn", "buttonTitle", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "Resend email";
                    }, false),
                    this.attr("_buttonTitleInDataFetchStatus", "_buttonTitleInDataFetchStatus", "_buttonTitleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                Model._hasValidationWidgetsValue = CustomComponents_ButtonVariants_PrimaryButton_mvcModel.hasValidationWidgets;
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {
            if ("type" in inputs) {
                this.variables.typeIn = inputs.type;
                if ("_typeInDataFetchStatus" in inputs) {
                    this.variables._typeInDataFetchStatus = inputs._typeInDataFetchStatus;
                }

            }

            if ("title" in inputs) {
                this.variables.titleIn = inputs.title;
                if ("_titleInDataFetchStatus" in inputs) {
                    this.variables._titleInDataFetchStatus = inputs._titleInDataFetchStatus;
                }

            }

            if ("description" in inputs) {
                this.variables.descriptionIn = inputs.description;
                if ("_descriptionInDataFetchStatus" in inputs) {
                    this.variables._descriptionInDataFetchStatus = inputs._descriptionInDataFetchStatus;
                }

            }

            if ("buttonTitle" in inputs) {
                this.variables.buttonTitleIn = inputs.buttonTitle;
                if ("_buttonTitleInDataFetchStatus" in inputs) {
                    this.variables._buttonTitleInDataFetchStatus = inputs._buttonTitleInDataFetchStatus;
                }

            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.Common.AlertBlock.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.Common.AlertBlock.mvc$model", "PartnersHub.Common.AlertBlock.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "CustomComponents.ButtonVariants.PrimaryButton.mvc$view", "PartnersHub.model$ST_6e5c732e48bd98c4d439ed63bb1fb9c4Structure"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_Common_AlertBlock_mvc_model, PartnersHub_Common_AlertBlock_mvc_controller, PartnersHubClientVariables, OSWidgets, CustomComponents_ButtonVariants_PrimaryButton_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "Common.AlertBlock";
        }

        static getAttributes() {
            return {
                codeFunction: "AlertBlock",
                functionKey: "7e170be8-7546-4413-887c-d41948a5742c",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
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
            return [CustomComponents_ButtonVariants_PrimaryButton_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_Common_AlertBlock_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_Common_AlertBlock_mvc_controller;
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
                    style: "display: flex; flex-direction: column;"
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
                    style: "align-items: center; display: flex; flex-direction: column;"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $if(model.variables.typeIn.isWarningAttr, false, this, function() {
                return [React.createElement(OSWidgets.Image, {
                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.warning.svg"),
                    type: /*Static*/ 0,
                    _idProps: {
                        service: idService,
                        uuid: "2"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })];
            }, function() {
                return [React.createElement(OSWidgets.Image, {
                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.success2.svg"),
                    type: /*Static*/ 0,
                    _idProps: {
                        service: idService,
                        uuid: "3"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })];
            }), React.createElement(OSWidgets.Expression, {
                extendedProperties: {
                    style: "color: #333; font-size: 24px; font-style: normal; font-weight: 700; line-height: normal; margin-top: 24px; text-align: center;"
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                value: model.variables.titleIn,
                _idProps: {
                    service: idService,
                    uuid: "4"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._titleInDataFetchStatus)
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "text-align: center;"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "5"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Expression, {
                extendedProperties: {
                    style: "color: #333; font-size: 14px; font-style: normal; font-weight: 400; line-height: 24px; margin-top: 8px;"
                },
                value: model.variables.descriptionIn,
                _idProps: {
                    service: idService,
                    uuid: "6"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._descriptionInDataFetchStatus)
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "margin-top: 24px;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "100%"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "7"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(CustomComponents_ButtonVariants_PrimaryButton_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    Width: "100%",
                    visible: true,
                    title: model.variables.buttonTitleIn,
                    _titleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._buttonTitleInDataFetchStatus),
                    enabled: true
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    onClick$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.actionHandler$Action(controller.callContext(eventHandlerContext));

                        ;
                    }
                },
                _validationProps: {
                    validationService: validationService
                },
                _idProps: {
                    service: idService,
                    name: "AlertButton",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            })))));
        }
    }

    return View;
});
define("PartnersHub.Common.AlertBlock.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.Common.AlertBlock.mvc$translationsResources", "PartnersHub.model$ST_6e5c732e48bd98c4d439ed63bb1fb9c4Structure"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_Common_AlertBlock_mvc_TranslationsResources) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_Common_AlertBlock_mvc_TranslationsResources);
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

            get actionHandler$Action() {
                if (!(this.hasOwnProperty("_actionHandler$Action"))) {
                    this._actionHandler$Action = function() {
                        return Promise.resolve();
                    };
                }

                return this._actionHandler$Action;
            }
            set actionHandler$Action(value) {
                this._actionHandler$Action = value;
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


define("PartnersHub.Common.AlertBlock.mvc$translationsResources", ["exports"], function(exports) {
    return {};
});