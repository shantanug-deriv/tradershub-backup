define("PartnersHub.RealAccountCreationFlow.EmploymentDetailsBlock.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.model$ST_0be4704c381e15995202804b221a5e3aStructure", "PartnersHub.controller$NextStepReal", "PartnersHub.controller$RealSignupNextStep", "PartnersHub.controller$UseDevice", "PartnersHub.model$RC_4535b2a68fa04382d8868d60004b6438", "PartnersHub.model$RL_117c7b7da327962152f7a4113c25ca3f"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController) {
    var OS = OSRuntimeCore; {
        class GetEmploymentStatusesAggrRecInner extends
        OS.Model.AggregateRecord {
            static attributesToDeclare() {
                return [].concat(OS.Model.AggregateRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new GetEmploymentStatusesAggrRec(new GetEmploymentStatusesAggrRec.RecordClass({
                    RecordListType: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        GetEmploymentStatusesAggrRecInner.RecordListType = PartnersHubModel.RL_117c7b7da327962152f7a4113c25ca3f;
        var GetEmploymentStatusesAggrRec = GetEmploymentStatusesAggrRecInner;
        GetEmploymentStatusesAggrRec.init();
    }


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("NoTaxIdentificationNumber", "noTaxIdentificationNumberVar", "NoTaxIdentificationNumber", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("ConfirmTaxInformation", "confirmTaxInformationVar", "ConfirmTaxInformation", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("ResidenceListResponse", "residenceListResponseIn", "ResidenceListResponse", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new PartnersHubModel.ST_0be4704c381e15995202804b221a5e3aStructure());
                    }, false, PartnersHubModel.ST_0be4704c381e15995202804b221a5e3aStructure),
                    this.attr("_residenceListResponseInDataFetchStatus", "_residenceListResponseInDataFetchStatus", "_residenceListResponseInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("GetEmploymentStatuses", "getEmploymentStatusesAggr", "GetEmploymentStatuses", true, true, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new GetEmploymentStatusesAggrRec());
                    }, true, GetEmploymentStatusesAggrRec)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        var VariablesRecord = VariablesRecordInner;
        VariablesRecord.init();
    }
    class WidgetsRecord extends
    OS.Model.BaseWidgetRecordMap {
        static getWidgetsType() {
            return {
                Form1: OS.Model.ValidationWidgetRecord,
                Dropdown1: OS.Model.ValidationWidgetRecord,
                Checkbox1: OS.Model.ValidationWidgetRecord,
                TaxResidence: OS.Model.ValidationWidgetRecord,
                TaxIdentificationNumber: OS.Model.ValidationWidgetRecord,
                Checkbox2: OS.Model.ValidationWidgetRecord
            };
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
            return true;
        }
        setInputs(inputs) {
            if ("ResidenceListResponse" in inputs) {
                this.variables.residenceListResponseIn = inputs.ResidenceListResponse;
                if ("_residenceListResponseInDataFetchStatus" in inputs) {
                    this.variables._residenceListResponseInDataFetchStatus = inputs._residenceListResponseInDataFetchStatus;
                }

            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.RealAccountCreationFlow.EmploymentDetailsBlock.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.RealAccountCreationFlow.EmploymentDetailsBlock.mvc$model", "PartnersHub.RealAccountCreationFlow.EmploymentDetailsBlock.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "CustomComponents.ButtonVariants.PrimaryButton.mvc$view", "PartnersHub.model$ST_0be4704c381e15995202804b221a5e3aStructure", "PartnersHub.controller$NextStepReal", "PartnersHub.controller$RealSignupNextStep", "PartnersHub.controller$UseDevice", "PartnersHub.model$RC_4535b2a68fa04382d8868d60004b6438", "PartnersHub.model$RL_117c7b7da327962152f7a4113c25ca3f"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_RealAccountCreationFlow_EmploymentDetailsBlock_mvc_model, PartnersHub_RealAccountCreationFlow_EmploymentDetailsBlock_mvc_controller, PartnersHubClientVariables, OSWidgets, CustomComponents_ButtonVariants_PrimaryButton_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "RealAccountCreationFlow.EmploymentDetailsBlock";
        }

        static getAttributes() {
            return {
                codeFunction: "EmploymentDetailsBlock",
                functionKey: "00a872dc-ecef-4cf3-b520-d151a34dae86",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.RealAccountCreationFlow.EmploymentDetailsBlock.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [CustomComponents_ButtonVariants_PrimaryButton_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_RealAccountCreationFlow_EmploymentDetailsBlock_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_RealAccountCreationFlow_EmploymentDetailsBlock_mvc_controller;
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
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Form, {
                _validationProps: {
                    validationService: validationService
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                style: "display-flex flex-direction-column gap-m",
                _idProps: {
                    service: idService,
                    name: "Form1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Label, {
                extendedProperties: {
                    style: "margin-bottom: 8px;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                _idProps: {
                    service: idService,
                    uuid: "4"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $text(getTranslation("jat0lmSOJ0CcdjmPO_XKiQ#Value", "Employment status")), React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "color: #bf333a;"
                },
                text: [$text(getTranslation("8RdVEjSUWEudXmpxvtf81A#Value", "*"))],
                _idProps: {
                    service: idService,
                    uuid: "5"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Dropdown, {
                _validationProps: {
                    validationService: validationService,
                    validationParentId: idService.getId("Form1")
                },
                dropdownMode: /*Custom*/ 1,
                enabled: true,
                list: model.variables.getEmploymentStatusesAggr.listOut,
                mandatory: true,
                onChange: function() {
                    var eventHandlerContext = callContext.clone();
                    controller.dropdown1OnChange$Action(controller.callContext(eventHandlerContext));

                    ;
                },
                style: "dropdown",
                values: function(elem) {
                    return elem.employmentStatusAttr.statusAttr;
                },
                variable: model.createVariable(OS.DataTypes.DataTypes.Text, PartnersHubClientVariables.getRealSignupEmploymentStatus(), function(value) {
                    PartnersHubClientVariables.setRealSignupEmploymentStatus(value);
                }),
                _idProps: {
                    service: idService,
                    name: "Dropdown1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                list_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEmploymentStatusesAggr.dataFetchStatusAttr),
                placeholders: {
                    content: new IteratorPlaceholderContent(function(idService, callContext) {
                        return [React.createElement(OSWidgets.Expression, {
                            value: model.variables.getEmploymentStatusesAggr.listOut.getCurrent(callContext.iterationContext).employmentStatusAttr.statusAttr,
                            _idProps: {
                                service: idService,
                                uuid: "7"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEmploymentStatusesAggr.dataFetchStatusAttr),
                            _dependencies: []
                        })];
                    }, callContext, idService, "1")
                },
                _dependencies: [asPrimitiveValue(model.variables.getEmploymentStatusesAggr.dataFetchStatusAttr)]
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: true,
                style: "display-flex gap-s",
                visible: (PartnersHubClientVariables.getRealSignupEmploymentStatus() === "Student"),
                _idProps: {
                    service: idService,
                    uuid: "8"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Checkbox, {
                _validationProps: {
                    validationService: validationService,
                    validationParentId: idService.getId("Form1")
                },
                enabled: true,
                style: "checkbox",
                variable: model.createVariable(OS.DataTypes.DataTypes.Boolean, PartnersHubClientVariables.getRealSignupNoTaxIdentificationNumber(), function(value) {
                    PartnersHubClientVariables.setRealSignupNoTaxIdentificationNumber(value);
                }),
                _idProps: {
                    service: idService,
                    name: "Checkbox1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), $text(getTranslation("suBO6yoD+US09XOP81aFiA#Value", "I don\'t have my tax identification number"))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "10"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Label, {
                extendedProperties: {
                    style: "margin-bottom: 8px;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                _idProps: {
                    service: idService,
                    uuid: "11"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $text(getTranslation("RwmV_j30t0GAfjHeCrcPdQ#Value", "Tax residence"))), React.createElement(OSWidgets.Dropdown, {
                _validationProps: {
                    validationService: validationService,
                    validationParentId: idService.getId("Form1")
                },
                dropdownMode: /*Custom*/ 1,
                enabled: (model.variables.residenceListResponseIn.residence_listAttr.length > 0),
                list: model.variables.residenceListResponseIn.residence_listAttr,
                mandatory: false,
                style: "dropdown",
                values: function(elem) {
                    return elem.valueAttr;
                },
                variable: model.createVariable(OS.DataTypes.DataTypes.Text, PartnersHubClientVariables.getRealSignupTaxResidence(), function(value) {
                    PartnersHubClientVariables.setRealSignupTaxResidence(value);
                }),
                _idProps: {
                    service: idService,
                    name: "TaxResidence"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                enabled_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._residenceListResponseInDataFetchStatus),
                list_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._residenceListResponseInDataFetchStatus),
                placeholders: {
                    content: new IteratorPlaceholderContent(function(idService, callContext) {
                        return [React.createElement(OSWidgets.Expression, {
                            value: model.variables.residenceListResponseIn.residence_listAttr.getCurrent(callContext.iterationContext).textAttr,
                            _idProps: {
                                service: idService,
                                uuid: "13"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._residenceListResponseInDataFetchStatus),
                            _dependencies: []
                        })];
                    }, callContext, idService, "2")
                },
                _dependencies: [asPrimitiveValue(model.variables._residenceListResponseInDataFetchStatus)]
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "14"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Label, {
                extendedProperties: {
                    style: "margin-bottom: 6px;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                _idProps: {
                    service: idService,
                    uuid: "15"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $text(getTranslation("jLW6Mhv1M0GrE6j8JcbJrg#Value", "Tax identification number (optional)"))), React.createElement(OSWidgets.Input, {
                _validationProps: {
                    validationService: validationService,
                    validationParentId: idService.getId("Form1")
                },
                enabled: (PartnersHubClientVariables.getRealSignupNoTaxIdentificationNumber() === false),
                gridProperties: {
                    classes: "OSFillParent"
                },
                inputType: /*Text*/ 0,
                mandatory: false,
                maxLength: 50,
                onChange: function() {
                    var eventHandlerContext = callContext.clone();
                    controller.taxIdentificationNumberOnChange$Action(controller.callContext(eventHandlerContext));

                    ;
                },
                prompt: "Enter your tax identification number",
                style: "form-control",
                variable: model.createVariable(OS.DataTypes.DataTypes.Text, PartnersHubClientVariables.getRealSignupTaxIdentificationNumber(), function(value) {
                    PartnersHubClientVariables.setRealSignupTaxIdentificationNumber(value);
                }),
                _idProps: {
                    service: idService,
                    name: "TaxIdentificationNumber"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "17"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: true,
                extendedProperties: {
                    style: "align-items: center; display: flex; gap: 8px;"
                },
                visible: ((PartnersHubClientVariables.getRealSignupTaxIdentificationNumber()) !== ("")),
                _idProps: {
                    service: idService,
                    uuid: "18"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Checkbox, {
                _validationProps: {
                    validationService: validationService,
                    validationParentId: idService.getId("Form1")
                },
                enabled: true,
                onChange: function() {
                    var eventHandlerContext = callContext.clone();
                    controller.checkbox2OnChange$Action(controller.callContext(eventHandlerContext));

                    ;
                },
                style: model.getCachedValue(idService.getId("Checkbox2.Style"), function() {
                    return ((PartnersHubClientVariables.getRealSignupisCheckboxError()) ? ("error-checkbox") : ("checkbox"));
                }, function() {
                    return PartnersHubClientVariables.getRealSignupisCheckboxError();
                }),
                variable: model.createVariable(OS.DataTypes.DataTypes.Boolean, PartnersHubClientVariables.getRealSignupTINCheckbox(), function(value) {
                    PartnersHubClientVariables.setRealSignupTINCheckbox(value);
                }),
                _idProps: {
                    service: idService,
                    name: "Checkbox2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), $text(getTranslation("ylQm+QJmOUytDTkhdOfejA#Value", "I confirm that my tax information is accurate and complete. "))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: true,
                visible: ((PartnersHubClientVariables.getRealSignupisCheckboxError() === true) && (PartnersHubClientVariables.getRealSignupNoTaxIdentificationNumber() === false)),
                _idProps: {
                    service: idService,
                    uuid: "20"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "color: #DC2020;"
                },
                text: [$text(getTranslation("obB82i3wxEa4P8ktIoDE0g#Value", "This is required."))],
                _idProps: {
                    service: idService,
                    uuid: "21"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "margin-top: 24px; text-align: right;"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "22"
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
                    title: "Next",
                    Width: "100px",
                    borderRadius: "100px",
                    enabled: true
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    onClick$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.primaryButtononClick$Action(controller.callContext(eventHandlerContext));

                        ;
                    }
                },
                _validationProps: {
                    validationService: validationService,
                    validationParentId: idService.getId("Form1")
                },
                _idProps: {
                    service: idService,
                    uuid: "23",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }))))));
        }
    }

    return View;
});
define("PartnersHub.RealAccountCreationFlow.EmploymentDetailsBlock.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.RealAccountCreationFlow.EmploymentDetailsBlock.mvc$translationsResources", "PartnersHub.model$ST_0be4704c381e15995202804b221a5e3aStructure", "PartnersHub.controller$NextStepReal", "PartnersHub.controller$RealSignupNextStep", "PartnersHub.controller$UseDevice", "PartnersHub.model$RC_4535b2a68fa04382d8868d60004b6438", "PartnersHub.model$RL_117c7b7da327962152f7a4113c25ca3f"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_RealAccountCreationFlow_EmploymentDetailsBlock_mvc_TranslationsResources) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_RealAccountCreationFlow_EmploymentDetailsBlock_mvc_TranslationsResources);
                var controller = this.controller;
                this.clientActionProxies = {};
                this.dataFetchDependenciesOriginal = {
                    getEmploymentStatuses$AggrRefresh: 0
                };
                this.dataFetchDependentsGraph = {
                    getEmploymentStatuses$AggrRefresh: []
                };
                this.shouldSendClientVarsToDataSources = false;
            }

            // Server Actions - Methods

            // Aggregates and Data Actions
            get getEmploymentStatuses$AggrRefresh() {
                if (!(this.hasOwnProperty("_getEmploymentStatuses$AggrRefresh"))) {
                    this._getEmploymentStatuses$AggrRefresh = function() {
                        var innerBody = function(maxRecords, startIndex, callContext) {
                            var model = this.model;
                            var controller = this.controller;
                            var callContext = controller.callContext(callContext);
                            return controller.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetEmploymentStatuses", "screenservices/PartnersHub/RealAccountCreationFlow/EmploymentDetailsBlock/ScreenDataSetGetEmploymentStatuses", "OMyidYGqb_lsx3H6Y6vNEQ", maxRecords, startIndex, function(b) {
                                model.variables.getEmploymentStatusesAggr.dataFetchStatusAttr = b;
                            }, function(json) {
                                model.variables.getEmploymentStatusesAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getEmploymentStatusesAggr.constructor));
                            }, undefined, undefined, undefined, callContext, undefined, true);
                        }.bind(this);
                        return OS.Logger.startActiveSpan("GetEmploymentStatuses", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GetEmploymentStatuses");
                                span.setAttribute("outsystems.function.key", "b2347bde-52a7-4934-8f61-bcce65316053");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_AGGREGATE_CALL");
                            }

                            return OS.Flow.tryFinally(function() {
                                return innerBody();
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 0);

                    };
                }

                return this._getEmploymentStatuses$AggrRefresh;
            }
            set getEmploymentStatuses$AggrRefresh(value) {
                this._getEmploymentStatuses$AggrRefresh = value;
            }


            get dataFetchActionNames() {
                if (!(this.hasOwnProperty("_dataFetchActionNames"))) {
                    this._dataFetchActionNames = ["getEmploymentStatuses$AggrRefresh"];
                }

                return this._dataFetchActionNames;
            }
            set dataFetchActionNames(value) {
                this._dataFetchActionNames = value;
            }

            // Client Actions - Methods
            get _taxIdentificationNumberOnChange$Action() {
                if (!(this.hasOwnProperty("__taxIdentificationNumberOnChange$Action"))) {
                    this.__taxIdentificationNumberOnChange$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("TaxIdentificationNumberOnChange", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "TaxIdentificationNumberOnChange");
                                span.setAttribute("outsystems.function.key", "0eaf0af2-566d-4477-9881-d4d4737d277a");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("TaxIdentificationNumberOnChange");
                                callContext = controller.callContext(callContext);
                                if (((PartnersHubClientVariables.getRealSignupTaxIdentificationNumber() === ""))) {
                                    // RealSignupisCheckboxError = False
                                    PartnersHubClientVariables.setRealSignupisCheckboxError(false);
                                    // RealSignupTINCheckbox = False
                                    PartnersHubClientVariables.setRealSignupTINCheckbox(false);
                                }

                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__taxIdentificationNumberOnChange$Action;
            }
            set _taxIdentificationNumberOnChange$Action(value) {
                this.__taxIdentificationNumberOnChange$Action = value;
            }

            get _primaryButtononClick$Action() {
                if (!(this.hasOwnProperty("__primaryButtononClick$Action"))) {
                    this.__primaryButtononClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("PrimaryButtononClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "PrimaryButtononClick");
                                span.setAttribute("outsystems.function.key", "60445724-381c-4db4-a67c-a77bdf44d1c9");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("PrimaryButtononClick");
                                callContext = controller.callContext(callContext);
                                if ((((PartnersHubClientVariables.getRealSignupTINCheckbox() === false) && ((PartnersHubClientVariables.getRealSignupTaxIdentificationNumber()) !== (""))))) {
                                    // RealSignupisCheckboxError = True
                                    PartnersHubClientVariables.setRealSignupisCheckboxError(true);
                                } else {
                                    if ((!((((PartnersHubClientVariables.getRealSignupEmploymentStatus() === "Student") || (PartnersHubClientVariables.getRealSignupEmploymentStatus() === "Unemployed")) && (PartnersHubClientVariables.getRealSignupNoTaxIdentificationNumber() === true))))) {
                                        if ((!(((((((PartnersHubClientVariables.getRealSignupEmploymentStatus()) !== ("Unemployed")) || ((PartnersHubClientVariables.getRealSignupEmploymentStatus()) !== ("Student"))) && ((PartnersHubClientVariables.getRealSignupTaxResidence()) !== (""))) && ((PartnersHubClientVariables.getRealSignupTaxIdentificationNumber()) !== (""))) && (PartnersHubClientVariables.getRealSignupTINCheckbox() === true))))) {
                                            if ((!((((((PartnersHubClientVariables.getRealSignupEmploymentStatus()) !== ("Unemployed")) || ((PartnersHubClientVariables.getRealSignupEmploymentStatus()) !== ("Student"))) && ((PartnersHubClientVariables.getRealSignupTaxResidence()) !== (""))) && (PartnersHubClientVariables.getRealSignupTaxIdentificationNumber() === ""))))) {
                                                if (((((PartnersHubClientVariables.getRealSignupTaxIdentificationNumber()) !== ("")) && (model.variables.confirmTaxInformationVar === true)))) {
                                                    // Execute Action: RealSignupNextStep
                                                    PartnersHubController.default.realSignupNextStep$Action(1, callContext);
                                                    return;

                                                } else {
                                                    // Checkbox2.ValidationMessage = "This is required."
                                                    model.widgets.get(idService.getId("Checkbox2")).validationMessageAttr = "This is required.";
                                                    return;

                                                }

                                            }

                                        }

                                    }

                                    // Execute Action: NextStepReal
                                    PartnersHubController.default.nextStepReal$Action(1, 12, callContext);
                                }

                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__primaryButtononClick$Action;
            }
            set _primaryButtononClick$Action(value) {
                this.__primaryButtononClick$Action = value;
            }

            get _dropdown1OnChange$Action() {
                if (!(this.hasOwnProperty("__dropdown1OnChange$Action"))) {
                    this.__dropdown1OnChange$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("Dropdown1OnChange", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "Dropdown1OnChange");
                                span.setAttribute("outsystems.function.key", "85ea8303-af32-42a2-820f-e6b4915d4249");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("Dropdown1OnChange");
                                callContext = controller.callContext(callContext);
                                if ((((PartnersHubClientVariables.getRealSignupEmploymentStatus()) !== ("Student")))) {
                                    // NoTaxIdentificationNumber = False
                                    model.variables.noTaxIdentificationNumberVar = false;
                                }

                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__dropdown1OnChange$Action;
            }
            set _dropdown1OnChange$Action(value) {
                this.__dropdown1OnChange$Action = value;
            }

            get _onReady$Action() {
                if (!(this.hasOwnProperty("__onReady$Action"))) {
                    this.__onReady$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnReady", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnReady");
                                span.setAttribute("outsystems.function.key", "cadea4ff-121c-494e-b61a-cb067b7a0267");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                // Execute Action: UseDevice
                                PartnersHubController.default.useDevice$Action(callContext);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onReady$Action;
            }
            set _onReady$Action(value) {
                this.__onReady$Action = value;
            }

            get _checkbox2OnChange$Action() {
                if (!(this.hasOwnProperty("__checkbox2OnChange$Action"))) {
                    this.__checkbox2OnChange$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("Checkbox2OnChange", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "Checkbox2OnChange");
                                span.setAttribute("outsystems.function.key", "d629f547-e5a3-4466-991e-57e1d99150b3");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("Checkbox2OnChange");
                                callContext = controller.callContext(callContext);
                                if (((PartnersHubClientVariables.getRealSignupTINCheckbox() === true))) {
                                    // RealSignupisCheckboxError = False
                                    PartnersHubClientVariables.setRealSignupisCheckboxError(false);
                                }

                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__checkbox2OnChange$Action;
            }
            set _checkbox2OnChange$Action(value) {
                this.__checkbox2OnChange$Action = value;
            }


            taxIdentificationNumberOnChange$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("TaxIdentificationNumberOnChange__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "TaxIdentificationNumberOnChange");
                        span.setAttribute("outsystems.function.key", "0eaf0af2-566d-4477-9881-d4d4737d277a");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._taxIdentificationNumberOnChange$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            primaryButtononClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("PrimaryButtononClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "PrimaryButtononClick");
                        span.setAttribute("outsystems.function.key", "60445724-381c-4db4-a67c-a77bdf44d1c9");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._primaryButtononClick$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            dropdown1OnChange$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("Dropdown1OnChange__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "Dropdown1OnChange");
                        span.setAttribute("outsystems.function.key", "85ea8303-af32-42a2-820f-e6b4915d4249");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._dropdown1OnChange$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onReady$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnReady__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnReady");
                        span.setAttribute("outsystems.function.key", "cadea4ff-121c-494e-b61a-cb067b7a0267");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onReady$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            checkbox2OnChange$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("Checkbox2OnChange__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "Checkbox2OnChange");
                        span.setAttribute("outsystems.function.key", "d629f547-e5a3-4466-991e-57e1d99150b3");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._checkbox2OnChange$Action, callContext);
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

                        return controller.onReady$Action(callContext);

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


define("PartnersHub.RealAccountCreationFlow.EmploymentDetailsBlock.mvc$translationsResources.de-DE", [], function() {
    return {
        "obB82i3wxEa4P8ktIoDE0g#Value": "Dies ist erforderlich.",
        "ylQm+QJmOUytDTkhdOfejA#Value": "Ich bestätige, dass meine Steuerinformationen genau und vollständig sind.",
        "jLW6Mhv1M0GrE6j8JcbJrg#Value": "Steueridentifikationsnummer (optional)",
        "RwmV_j30t0GAfjHeCrcPdQ#Value": "Steueransässigkeit",
        "suBO6yoD+US09XOP81aFiA#Value": "Ich habe meine Steueridentifikationsnummer nicht.",
        "8RdVEjSUWEudXmpxvtf81A#Value": "*",
        "jat0lmSOJ0CcdjmPO_XKiQ#Value": "Beschäftigungsstatus"
    };
});

define("PartnersHub.RealAccountCreationFlow.EmploymentDetailsBlock.mvc$translationsResources.es-ES", [], function() {
    return {
        "obB82i3wxEa4P8ktIoDE0g#Value": "Esto es necesario.",
        "ylQm+QJmOUytDTkhdOfejA#Value": "Confirmo que mi información fiscal es precisa y completa.",
        "jLW6Mhv1M0GrE6j8JcbJrg#Value": "Número de identificación fiscal (opcional)",
        "RwmV_j30t0GAfjHeCrcPdQ#Value": "Residencia fiscal",
        "suBO6yoD+US09XOP81aFiA#Value": "No tengo mi número de identificación fiscal.",
        "8RdVEjSUWEudXmpxvtf81A#Value": "*",
        "jat0lmSOJ0CcdjmPO_XKiQ#Value": "Estado de empleo"
    };
});

define("PartnersHub.RealAccountCreationFlow.EmploymentDetailsBlock.mvc$translationsResources.fr-FR", [], function() {
    return {
        "obB82i3wxEa4P8ktIoDE0g#Value": "Ceci est requis.",
        "ylQm+QJmOUytDTkhdOfejA#Value": "Je confirme que mes informations fiscales sont exactes et complètes.",
        "jLW6Mhv1M0GrE6j8JcbJrg#Value": "Numéro d\'identification fiscale (facultatif)",
        "RwmV_j30t0GAfjHeCrcPdQ#Value": "Résidence fiscale",
        "suBO6yoD+US09XOP81aFiA#Value": "Je n\'ai pas mon numéro d\'identification fiscale.",
        "8RdVEjSUWEudXmpxvtf81A#Value": "*",
        "jat0lmSOJ0CcdjmPO_XKiQ#Value": "Statut d\'emploi"
    };
});

define("PartnersHub.RealAccountCreationFlow.EmploymentDetailsBlock.mvc$translationsResources.it-IT", [], function() {
    return {
        "obB82i3wxEa4P8ktIoDE0g#Value": "Questo è necessario.",
        "ylQm+QJmOUytDTkhdOfejA#Value": "Confermo che le mie informazioni fiscali sono accurate e complete.",
        "jLW6Mhv1M0GrE6j8JcbJrg#Value": "Numero di identificazione fiscale (opzionale)",
        "RwmV_j30t0GAfjHeCrcPdQ#Value": "Residenza fiscale",
        "suBO6yoD+US09XOP81aFiA#Value": "Non ho il mio numero di identificazione fiscale.",
        "8RdVEjSUWEudXmpxvtf81A#Value": "*",
        "jat0lmSOJ0CcdjmPO_XKiQ#Value": "Stato occupazionale"
    };
});

define("PartnersHub.RealAccountCreationFlow.EmploymentDetailsBlock.mvc$translationsResources.pl-PL", [], function() {
    return {
        "obB82i3wxEa4P8ktIoDE0g#Value": "To jest wymagane.",
        "ylQm+QJmOUytDTkhdOfejA#Value": "Potwierdzam, że moje informacje podatkowe są dokładne i pełne.",
        "jLW6Mhv1M0GrE6j8JcbJrg#Value": "Numer identyfikacji podatkowej (opcjonalnie)",
        "RwmV_j30t0GAfjHeCrcPdQ#Value": "Miejsce zamieszkania dla celów podatkowych",
        "suBO6yoD+US09XOP81aFiA#Value": "Nie mam mojego numeru identyfikacji podatkowej.",
        "8RdVEjSUWEudXmpxvtf81A#Value": "*",
        "jat0lmSOJ0CcdjmPO_XKiQ#Value": "Status zatrudnienia"
    };
});

define("PartnersHub.RealAccountCreationFlow.EmploymentDetailsBlock.mvc$translationsResources.pt-PT", [], function() {
    return {
        "obB82i3wxEa4P8ktIoDE0g#Value": "Isto é necessário.",
        "ylQm+QJmOUytDTkhdOfejA#Value": "Confirmo que a minha informação fiscal é precisa e completa.",
        "jLW6Mhv1M0GrE6j8JcbJrg#Value": "Número de identificação fiscal (opcional)",
        "RwmV_j30t0GAfjHeCrcPdQ#Value": "Residência fiscal",
        "suBO6yoD+US09XOP81aFiA#Value": "Não tenho o meu número de identificação fiscal.",
        "8RdVEjSUWEudXmpxvtf81A#Value": "*",
        "jat0lmSOJ0CcdjmPO_XKiQ#Value": "Estado de emprego"
    };
});

define("PartnersHub.RealAccountCreationFlow.EmploymentDetailsBlock.mvc$translationsResources.ru-RU", [], function() {
    return {
        "obB82i3wxEa4P8ktIoDE0g#Value": "Это необходимо.",
        "ylQm+QJmOUytDTkhdOfejA#Value": "Я подтверждаю, что моя налоговая информация точна и полна.",
        "jLW6Mhv1M0GrE6j8JcbJrg#Value": "Идентификационный номер налогоплательщика (по желанию)",
        "RwmV_j30t0GAfjHeCrcPdQ#Value": "Налоговое резидентство",
        "suBO6yoD+US09XOP81aFiA#Value": "У меня нет моего налогового идентификационного номера.",
        "8RdVEjSUWEudXmpxvtf81A#Value": "*",
        "jat0lmSOJ0CcdjmPO_XKiQ#Value": "Статус занятости"
    };
});

define("PartnersHub.RealAccountCreationFlow.EmploymentDetailsBlock.mvc$translationsResources", ["exports", "PartnersHub.RealAccountCreationFlow.EmploymentDetailsBlock.mvc$translationsResources.de-DE", "PartnersHub.RealAccountCreationFlow.EmploymentDetailsBlock.mvc$translationsResources.es-ES", "PartnersHub.RealAccountCreationFlow.EmploymentDetailsBlock.mvc$translationsResources.fr-FR", "PartnersHub.RealAccountCreationFlow.EmploymentDetailsBlock.mvc$translationsResources.it-IT", "PartnersHub.RealAccountCreationFlow.EmploymentDetailsBlock.mvc$translationsResources.pl-PL", "PartnersHub.RealAccountCreationFlow.EmploymentDetailsBlock.mvc$translationsResources.pt-PT", "PartnersHub.RealAccountCreationFlow.EmploymentDetailsBlock.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_RealAccountCreationFlow_EmploymentDetailsBlock_mvc_translationsResources_deDE, PartnersHub_RealAccountCreationFlow_EmploymentDetailsBlock_mvc_translationsResources_esES, PartnersHub_RealAccountCreationFlow_EmploymentDetailsBlock_mvc_translationsResources_frFR, PartnersHub_RealAccountCreationFlow_EmploymentDetailsBlock_mvc_translationsResources_itIT, PartnersHub_RealAccountCreationFlow_EmploymentDetailsBlock_mvc_translationsResources_plPL, PartnersHub_RealAccountCreationFlow_EmploymentDetailsBlock_mvc_translationsResources_ptPT, PartnersHub_RealAccountCreationFlow_EmploymentDetailsBlock_mvc_translationsResources_ruRU) {
    return {
        "de-DE": {
            "translations": PartnersHub_RealAccountCreationFlow_EmploymentDetailsBlock_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_RealAccountCreationFlow_EmploymentDetailsBlock_mvc_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_RealAccountCreationFlow_EmploymentDetailsBlock_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_RealAccountCreationFlow_EmploymentDetailsBlock_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_RealAccountCreationFlow_EmploymentDetailsBlock_mvc_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_RealAccountCreationFlow_EmploymentDetailsBlock_mvc_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_RealAccountCreationFlow_EmploymentDetailsBlock_mvc_translationsResources_ruRU,
            "isRTL": false
        }
    };
});