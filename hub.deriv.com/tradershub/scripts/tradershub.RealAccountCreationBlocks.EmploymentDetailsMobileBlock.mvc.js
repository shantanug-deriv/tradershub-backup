define("tradershub.RealAccountCreationBlocks.EmploymentDetailsMobileBlock.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.model$RC_36f2cdc7fc2c30db68dab6767886090d", "tradershub.model$RL_d05ad81e70a826256d161d2b9afc0f03"], function(OSRuntimeCore, tradershubModel) {
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

        GetEmploymentStatusesAggrRecInner.RecordListType = tradershubModel.RL_d05ad81e70a826256d161d2b9afc0f03;
        var GetEmploymentStatusesAggrRec = GetEmploymentStatusesAggrRecInner;
        GetEmploymentStatusesAggrRec.init();
    }


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ShowTaxConfirmationPopup", "showTaxConfirmationPopupVar", "ShowTaxConfirmationPopup", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
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
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("tradershub.RealAccountCreationBlocks.EmploymentDetailsMobileBlock.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "react", "@outsystems/runtime-view-js", "tradershub.RealAccountCreationBlocks.EmploymentDetailsMobileBlock.mvc$model", "tradershub.RealAccountCreationBlocks.EmploymentDetailsMobileBlock.mvc$controller", "tradershub.clientVariables", "@outsystems/runtime-widgets-js", "tradershub.model$RC_36f2cdc7fc2c30db68dab6767886090d", "tradershub.model$RL_d05ad81e70a826256d161d2b9afc0f03"], function(OSRuntimeCore, tradershubModel, tradershubController, React, OSView, tradershub_RealAccountCreationBlocks_EmploymentDetailsMobileBlock_mvc_model, tradershub_RealAccountCreationBlocks_EmploymentDetailsMobileBlock_mvc_controller, tradershubClientVariables, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "RealAccountCreationBlocks.EmploymentDetailsMobileBlock";
        }

        static getAttributes() {
            return {
                codeFunction: "EmploymentDetailsMobileBlock",
                functionKey: "240ce745-2028-4274-a608-b6558e6a2b29",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.RealAccountCreationBlocks.EmploymentDetailsMobileBlock.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [];
        }

        get modelFactory() {
            return tradershub_RealAccountCreationBlocks_EmploymentDetailsMobileBlock_mvc_model;
        }

        get controllerFactory() {
            return tradershub_RealAccountCreationBlocks_EmploymentDetailsMobileBlock_mvc_controller;
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
                style: "full-width",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "font-size: 16px; margin-bottom: 0px;"
                },
                text: ["Select your employment status"],
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.List, {
                animateItems: true,
                extendedProperties: {
                    style: "margin-top: 16px;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                mode: /*Default*/ 0,
                source: model.variables.getEmploymentStatusesAggr.listOut,
                style: "list list-group display-flex flex-direction-column gap-base",
                tag: "div",
                _idProps: {
                    service: idService,
                    uuid: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEmploymentStatusesAggr.dataFetchStatusAttr),
                placeholders: {
                    content: new IteratorPlaceholderContent(function(idService, callContext) {
                        return [React.createElement(OSWidgets.ListItem, {
                            extendedProperties: {
                                style: "background-color: #F8F9FA; border-color: #F1F3F5; border-radius: 4px; border-style: solid; border-width: 1px; cursor: pointer; padding: 16px;"
                            },
                            onClick: function() {
                                var eventHandlerContext = callContext.clone();
                                controller.listItemOnClick$Action(OS.BuiltinFunctions.identifierToText(model.variables.getEmploymentStatusesAggr.listOut.getCurrent(callContext.iterationContext).employmentStatusAttr.idAttr), controller.callContext(eventHandlerContext));

                                ;
                            },
                            style: "list-item",
                            triggerActionOnFullSwipeLeft: true,
                            triggerActionOnFullSwipeRight: true,
                            _idProps: {
                                service: idService,
                                name: "ListItem1"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                leftActions: PlaceholderContent.Empty,
                                content: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        style: "display-flex justify-content-space-between align-items-center ",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "4"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Expression, {
                                        extendedProperties: {
                                            style: "weight: 500;"
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        value: model.variables.getEmploymentStatusesAggr.listOut.getCurrent(callContext.iterationContext).employmentStatusAttr.labelAttr,
                                        _idProps: {
                                            service: idService,
                                            uuid: "5"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getEmploymentStatusesAggr.dataFetchStatusAttr)
                                    }), React.createElement(OSWidgets.Image, {
                                        image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.iconarrow.svg"),
                                        type: /*Static*/ 0,
                                        _idProps: {
                                            service: idService,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }))];
                                }),
                                rightActions: PlaceholderContent.Empty
                            },
                            _dependencies: [asPrimitiveValue(model.variables.getEmploymentStatusesAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getEmploymentStatusesAggr.listOut.getCurrent(callContext.iterationContext).employmentStatusAttr.labelAttr)]
                        })];
                    }, callContext, idService, "1")
                },
                _dependencies: [asPrimitiveValue(model.variables.getEmploymentStatusesAggr.dataFetchStatusAttr)]
            })), React.createElement(OSWidgets.Popup, {
                extendedProperties: {
                    style: "border-radius: 8px; padding: 16px; width: calc(100% - 32px);"
                },
                showPopup: model.variables.showTaxConfirmationPopupVar,
                style: "popup-dialog ",
                _idProps: {
                    service: idService,
                    uuid: "7"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "display-flex flex-direction-column gap-base",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "8"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "display-flex align-items-center justify-content-space-between",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "9"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "font-size: 16px; font-weight: bold;"
                },
                text: ["Tax information"],
                _idProps: {
                    service: idService,
                    uuid: "10"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Link, {
                enabled: true,
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                onClick: function() {
                    var eventHandlerContext = callContext.clone();
                    controller.linkOnClick$Action(controller.callContext(eventHandlerContext));

                    ;
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "11"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Image, {
                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.close.png"),
                style: "cursor-pointer",
                type: /*Static*/ 0,
                _idProps: {
                    service: idService,
                    uuid: "12"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))), "Do you have a tax identification number?", React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "display-flex flex-direction-column gap-s",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "13"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Button, {
                enabled: true,
                extendedProperties: {
                    style: "height: 32px;"
                },
                isDefault: false,
                onClick: function() {
                    var eventHandlerContext = callContext.clone();
                    controller.yesOnClick$Action(controller.callContext(eventHandlerContext));

                    ;
                },
                style: "btn btn-primary",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "14"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, "Yes"), React.createElement(OSWidgets.Button, {
                enabled: true,
                extendedProperties: {
                    style: "border-width: 1px; height: 32px;"
                },
                gridProperties: {
                    marginLeft: "0px"
                },
                isDefault: false,
                onClick: function() {
                    var eventHandlerContext = callContext.clone();
                    controller.noOnClick$Action(controller.callContext(eventHandlerContext));

                    ;
                },
                style: "btn full-width",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "15"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, "No")))));
        }
    }

    return View;
});
define("tradershub.RealAccountCreationBlocks.EmploymentDetailsMobileBlock.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.model$RC_36f2cdc7fc2c30db68dab6767886090d", "tradershub.model$RL_d05ad81e70a826256d161d2b9afc0f03"], function(OSRuntimeCore, tradershubModel, tradershubController, tradershubLanguageResources, tradershubClientVariables) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService);
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
                            return controller.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetEmploymentStatuses", "screenservices/tradershub/RealAccountCreationBlocks/EmploymentDetailsMobileBlock/ScreenDataSetGetEmploymentStatuses", "q_yCt7hT7woB7YmjOE0ilA", maxRecords, startIndex, function(b) {
                                model.variables.getEmploymentStatusesAggr.dataFetchStatusAttr = b;
                            }, function(json) {
                                model.variables.getEmploymentStatusesAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getEmploymentStatusesAggr.constructor));
                            }, undefined, undefined, undefined, callContext, undefined, false);
                        }.bind(this);
                        return OS.Logger.startActiveSpan("GetEmploymentStatuses", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GetEmploymentStatuses");
                                span.setAttribute("outsystems.function.key", "277b34b8-d67e-43e7-bd13-48534e3bb5a8");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
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
            get _noOnClick$Action() {
                if (!(this.hasOwnProperty("__noOnClick$Action"))) {
                    this.__noOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("NoOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "NoOnClick");
                                span.setAttribute("outsystems.function.key", "555d2383-12a3-4cb8-a51b-a675199148c6");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("NoOnClick");
                                callContext = controller.callContext(callContext);
                                // Assisgn Employement Status
                                // Destination: /tradershub/AddressDetails
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "address-details", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__noOnClick$Action;
            }
            set _noOnClick$Action(value) {
                this.__noOnClick$Action = value;
            }

            get _onInitialize$Action() {
                if (!(this.hasOwnProperty("__onInitialize$Action"))) {
                    this.__onInitialize$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnInitialize", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnInitialize");
                                span.setAttribute("outsystems.function.key", "638d5f52-6058-44e6-8dac-22dcd9a12ab1");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnInitialize");
                                callContext = controller.callContext(callContext);
                                // ShowTaxConfirmationPopup = False
                                model.variables.showTaxConfirmationPopupVar = false;
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onInitialize$Action;
            }
            set _onInitialize$Action(value) {
                this.__onInitialize$Action = value;
            }

            get _yesOnClick$Action() {
                if (!(this.hasOwnProperty("__yesOnClick$Action"))) {
                    this.__yesOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("YesOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "YesOnClick");
                                span.setAttribute("outsystems.function.key", "7b2de32b-8ad0-46e6-bd9b-90ce2631f6ec");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("YesOnClick");
                                callContext = controller.callContext(callContext);
                                // Destination: /tradershub/EmploymentDetailsForm
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "employment-details/form", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__yesOnClick$Action;
            }
            set _yesOnClick$Action(value) {
                this.__yesOnClick$Action = value;
            }

            get _listItemOnClick$Action() {
                if (!(this.hasOwnProperty("__listItemOnClick$Action"))) {
                    this.__listItemOnClick$Action = function(statusIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("ListItemOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "ListItemOnClick");
                                span.setAttribute("outsystems.function.key", "8fb9ca14-2de1-46ba-91d0-e47772d8e8a4");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("ListItemOnClick");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.RealAccountCreationBlocks.EmploymentDetailsMobileBlock.ListItemOnClick$vars"))());
                                vars.value.statusInLocal = statusIn;
                                // RealSignupEmployementStatus = TextToIdentifier
                                tradershubClientVariables.setRealSignupEmployementStatus(OS.BuiltinFunctions.textToIdentifier(vars.value.statusInLocal));
                                if ((((vars.value.statusInLocal === "student") || (vars.value.statusInLocal === "unemployed")))) {
                                    // ShowTaxConfirmationPopup = True
                                    model.variables.showTaxConfirmationPopupVar = true;
                                } else {
                                    // Destination: /tradershub/EmploymentDetailsForm
                                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "employment-details/form", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                                }

                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__listItemOnClick$Action;
            }
            set _listItemOnClick$Action(value) {
                this.__listItemOnClick$Action = value;
            }

            get _linkOnClick$Action() {
                if (!(this.hasOwnProperty("__linkOnClick$Action"))) {
                    this.__linkOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("LinkOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "LinkOnClick");
                                span.setAttribute("outsystems.function.key", "96c4a22f-ff21-43bd-a194-eb82e2eff670");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("LinkOnClick");
                                callContext = controller.callContext(callContext);
                                // RealSignupEmployementStatus = TextToIdentifier
                                tradershubClientVariables.setRealSignupEmployementStatus(OS.BuiltinFunctions.textToIdentifier(""));
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__linkOnClick$Action;
            }
            set _linkOnClick$Action(value) {
                this.__linkOnClick$Action = value;
            }


            noOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("NoOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "NoOnClick");
                        span.setAttribute("outsystems.function.key", "555d2383-12a3-4cb8-a51b-a675199148c6");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._noOnClick$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onInitialize$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnInitialize__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnInitialize");
                        span.setAttribute("outsystems.function.key", "638d5f52-6058-44e6-8dac-22dcd9a12ab1");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            yesOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("YesOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "YesOnClick");
                        span.setAttribute("outsystems.function.key", "7b2de32b-8ad0-46e6-bd9b-90ce2631f6ec");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._yesOnClick$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            listItemOnClick$Action(statusIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("ListItemOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "ListItemOnClick");
                        span.setAttribute("outsystems.function.key", "8fb9ca14-2de1-46ba-91d0-e47772d8e8a4");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._listItemOnClick$Action, callContext, statusIn);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            linkOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("LinkOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "LinkOnClick");
                        span.setAttribute("outsystems.function.key", "96c4a22f-ff21-43bd-a194-eb82e2eff670");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._linkOnClick$Action, callContext);
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
                    this._onInitializeEventHandler = function(callContext) {
                        var controller = this.controller;
                        var model = this.model;
                        var idService = this.idService;

                        return controller.onInitialize$Action(callContext);

                    };
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
        Controller.registerVariableGroupType("tradershub.RealAccountCreationBlocks.EmploymentDetailsMobileBlock.ListItemOnClick$vars", [{
            name: "Status",
            attrName: "statusInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});