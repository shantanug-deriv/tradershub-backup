define("tradershub.Common.UserProfile.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "System_.model", "System_.model$UserUpdateInfoRec", "tradershub.referencesHealth", "tradershub.referencesHealth$System_", "System_.model$UpdateUserResultRec", "System_.model$ENUserEntityRecord", "tradershub.model$RC_ced013358a82a813f1d9a5108f17ce79", "tradershub.model$RL_8430333e95ceffc00def96d8abb01f75"], function(OSRuntimeCore, tradershubModel, System_Model) {
    var OS = OSRuntimeCore; {
        class GetUserByIdAggrRecInner extends
        OS.Model.AggregateRecord {
            static attributesToDeclare() {
                return [].concat(OS.Model.AggregateRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new GetUserByIdAggrRec(new GetUserByIdAggrRec.RecordClass({
                    RecordListType: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        GetUserByIdAggrRecInner.RecordListType = tradershubModel.RL_8430333e95ceffc00def96d8abb01f75;
        var GetUserByIdAggrRec = GetUserByIdAggrRecInner;
        GetUserByIdAggrRec.init();
    }


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("IsButtonEnabled", "isButtonEnabledVar", "IsButtonEnabled", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("IsExternal", "isExternalVar", "IsExternal", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("GetUserById", "getUserByIdAggr", "GetUserById", true, true, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new GetUserByIdAggrRec());
                    }, true, GetUserByIdAggrRec)
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
                Form: OS.Model.ValidationWidgetRecord,
                Input_Name: OS.Model.ValidationWidgetRecord
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
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("tradershub.Common.UserProfile.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "System_.model", "react", "@outsystems/runtime-view-js", "tradershub.Common.UserProfile.mvc$model", "tradershub.Common.UserProfile.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.LayoutTopMenu.mvc$view", "@outsystems/runtime-widgets-js", "OutSystemsUI.Adaptive.Columns2.mvc$view", "OutSystemsUI.Interaction.AnimatedLabel.mvc$view", "System_.model$UserUpdateInfoRec", "tradershub.referencesHealth", "tradershub.referencesHealth$System_", "System_.model$UpdateUserResultRec", "System_.model$ENUserEntityRecord", "tradershub.model$RC_ced013358a82a813f1d9a5108f17ce79", "tradershub.model$RL_8430333e95ceffc00def96d8abb01f75"], function(OSRuntimeCore, tradershubModel, tradershubController, System_Model, React, OSView, tradershub_Common_UserProfile_mvc_model, tradershub_Common_UserProfile_mvc_controller, tradershubClientVariables, tradershub_Layouts_LayoutTopMenu_mvc_view, OSWidgets, OutSystemsUI_Adaptive_Columns2_mvc_view, OutSystemsUI_Interaction_AnimatedLabel_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "Common.UserProfile";
        }

        static getAttributes() {
            return {
                codeFunction: "UserProfile",
                functionKey: "d1f92804-a4fa-4d9e-a9cd-6ae1223130e4",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [tradershub_Layouts_LayoutTopMenu_mvc_view, OutSystemsUI_Adaptive_Columns2_mvc_view, OutSystemsUI_Interaction_AnimatedLabel_mvc_view];
        }

        get modelFactory() {
            return tradershub_Common_UserProfile_mvc_model;
        }

        get controllerFactory() {
            return tradershub_Common_UserProfile_mvc_controller;
        }

        get title() {

            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            var validationService = controller.validationService;
            var callContext = controller.callContext();
            var asPrimitiveValue = View.asPrimitiveValue;
            var getTranslation = View.getTranslation;
            var _this = this;


            return "Your profile";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(tradershub_Layouts_LayoutTopMenu_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {},
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
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    breadcrumbs: PlaceholderContent.Empty,
                    title: new PlaceholderContent(function() {
                        return ["Your profile"];
                    }),
                    actions: new PlaceholderContent(function() {
                        return [$if(model.variables.isExternalVar, false, this, function() {
                            return [];
                        }, function() {
                            return [React.createElement(OSWidgets.Link, {
                                enabled: true,
                                transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                                url: OS.Navigation.generateScreenURL("tradershub", "ChangePassword", {}),
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, "Change your password")];
                        })];
                    }),
                    mainContent: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Form, {
                            _validationProps: {
                                validationService: validationService
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "form card",
                            _idProps: {
                                service: idService,
                                name: "Form"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OutSystemsUI_Adaptive_Columns2_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                PhoneBehavior: tradershubModel.staticEntities.breakColumns.all
                            },
                            events: {
                                _handleError: function(ex) {
                                    controller.handleError(ex);
                                }
                            },
                            _validationProps: {
                                validationService: validationService,
                                validationParentId: idService.getId("Form")
                            },
                            _idProps: {
                                service: idService,
                                uuid: "3",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                column1: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        style: "margin-bottom-m",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "4"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Label, {
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        _idProps: {
                                            service: idService,
                                            name: "EmailLabel"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, "Email"), React.createElement(OSWidgets.Expression, {
                                        value: model.variables.getUserByIdAggr.listOut.getCurrent(callContext.iterationContext).userAttr.emailAttr,
                                        _idProps: {
                                            service: idService,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getUserByIdAggr.dataFetchStatusAttr)
                                    })), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OutSystemsUI_Interaction_AnimatedLabel_mvc_view, {
                                        getOwnerSpan: function() {
                                            return _this.getChildSpan("render");
                                        },
                                        getOwnerDisposeSpan: function() {
                                            return _this.getChildSpan("destroy");
                                        },
                                        inputs: {},
                                        events: {
                                            _handleError: function(ex) {
                                                controller.handleError(ex);
                                            }
                                        },
                                        _validationProps: {
                                            validationService: validationService,
                                            validationParentId: idService.getId("Form")
                                        },
                                        _idProps: {
                                            service: idService,
                                            uuid: "8",
                                            alias: "3"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        placeholders: {
                                            label: new PlaceholderContent(function() {
                                                return [React.createElement(OSWidgets.Label, {
                                                    gridProperties: {
                                                        classes: "OSFillParent"
                                                    },
                                                    _idProps: {
                                                        service: idService,
                                                        name: "NameLabel"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider
                                                }, "Name")];
                                            }),
                                            input: new PlaceholderContent(function() {
                                                return [React.createElement(OSWidgets.Input, {
                                                    _validationProps: {
                                                        validationService: validationService,
                                                        validationParentId: idService.getId("Form")
                                                    },
                                                    enabled: !(model.variables.isExternalVar),
                                                    extendedProperties: {
                                                        tabIndex: "1"
                                                    },
                                                    gridProperties: {
                                                        classes: "OSFillParent"
                                                    },
                                                    inputType: /*Text*/ 0,
                                                    mandatory: true,
                                                    maxLength: 0,
                                                    onChange: function() {
                                                        var eventHandlerContext = callContext.clone();
                                                        controller.input_NameOnChange$Action(controller.callContext(eventHandlerContext));

                                                        ;
                                                    },
                                                    style: "form-control",
                                                    variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.getUserByIdAggr.listOut.getCurrent(callContext.iterationContext).userAttr.nameAttr, function(value) {
                                                        model.variables.getUserByIdAggr.listOut.getCurrent(callContext.iterationContext).userAttr.nameAttr = value;
                                                    }),
                                                    _idProps: {
                                                        service: idService,
                                                        name: "Input_Name"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    variable_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getUserByIdAggr.dataFetchStatusAttr)
                                                })];
                                            })
                                        },
                                        _dependencies: [asPrimitiveValue(model.variables.isExternalVar), asPrimitiveValue(model.variables.getUserByIdAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getUserByIdAggr.listOut.getCurrent(callContext.iterationContext).userAttr.nameAttr)]
                                    })), $if(model.variables.isExternalVar, false, this, function() {
                                        return [];
                                    }, function() {
                                        return [React.createElement(OSWidgets.Button, {
                                            enabled: model.variables.isButtonEnabledVar,
                                            extendedProperties: {
                                                tabIndex: "2"
                                            },
                                            isDefault: true,
                                            onClick: function() {
                                                controller.validationService.validateWidget(idService.getId("Form"));
                                                return Promise.resolve().then(function() {
                                                    var eventHandlerContext = callContext.clone();
                                                    return controller.saveChangesOnClick$Action(controller.callContext(eventHandlerContext));
                                                });

                                                ;
                                            },
                                            style: "btn btn-primary",
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                name: "SaveChangesButton"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, "Save changes")];
                                    })];
                                }),
                                column2: PlaceholderContent.Empty
                            },
                            _dependencies: [asPrimitiveValue(model.variables.isButtonEnabledVar), asPrimitiveValue(model.variables.isExternalVar), asPrimitiveValue(model.variables.getUserByIdAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getUserByIdAggr.listOut.getCurrent(callContext.iterationContext).userAttr.nameAttr), asPrimitiveValue(model.variables.getUserByIdAggr.listOut.getCurrent(callContext.iterationContext).userAttr.emailAttr)]
                        }))];
                    }),
                    footer: PlaceholderContent.Empty
                },
                _dependencies: [asPrimitiveValue(model.variables.isButtonEnabledVar), asPrimitiveValue(model.variables.getUserByIdAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getUserByIdAggr.listOut.getCurrent(callContext.iterationContext).userAttr.nameAttr), asPrimitiveValue(model.variables.getUserByIdAggr.listOut.getCurrent(callContext.iterationContext).userAttr.emailAttr), asPrimitiveValue(model.variables.isExternalVar)]
            }));
        }
    }

    return View;
});
define("tradershub.Common.UserProfile.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "System_.model", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.Common.controller", "System_.model$UserUpdateInfoRec", "tradershub.referencesHealth", "tradershub.referencesHealth$System_", "System_.model$UpdateUserResultRec", "System_.model$ENUserEntityRecord", "tradershub.model$RC_ced013358a82a813f1d9a5108f17ce79", "tradershub.model$RL_8430333e95ceffc00def96d8abb01f75"], function(OSRuntimeCore, tradershubModel, tradershubController, System_Model, tradershubLanguageResources, tradershubClientVariables, tradershub_CommonController) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService);
                var controller = this.controller;
                this.clientActionProxies = {};
                this.dataFetchDependenciesOriginal = {
                    getUserById$AggrRefresh: 0
                };
                this.dataFetchDependentsGraph = {
                    getUserById$AggrRefresh: []
                };
                this.shouldSendClientVarsToDataSources = false;
            }

            // Server Actions - Methods
            get updateUser$ServerAction() {
                if (!(this.hasOwnProperty("_updateUser$ServerAction"))) {
                    this._updateUser$ServerAction = function(userUpdateInfoIn, callContext) {
                        var controller = this.controller;
                        return OS.Logger.startActiveSpan("UpdateUser", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "UpdateUser");
                                span.setAttribute("outsystems.function.key", "07cdfda9-d775-4f13-8c33-3f2164d4abd6");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
                            }

                            return OS.Flow.tryFinally(function() {
                                var inputs = {
                                    UserUpdateInfo: OS.DataConversion.ServerDataConverter.to(userUpdateInfoIn, OS.DataTypes.DataTypes.Record)
                                };
                                return controller.callServerAction("UpdateUser", "screenservices/tradershub/Common/UserProfile/ActionUpdateUser", "f+w9TRZi1JqSKbln3hu0zw", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("tradershub.Common.UserProfile$ActionUpdateUser"))();
                                    executeServerActionResult.updateUserResultOut = OS.DataConversion.ServerDataConverter.from(outputs.UpdateUserResult, OS.SystemStructures.UpdateUserResultRec);
                                    return executeServerActionResult;
                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 0);
                    };
                }

                return this._updateUser$ServerAction;
            }
            set updateUser$ServerAction(value) {
                this._updateUser$ServerAction = value;
            }


            // Aggregates and Data Actions
            get getUserById$AggrRefresh() {
                if (!(this.hasOwnProperty("_getUserById$AggrRefresh"))) {
                    this._getUserById$AggrRefresh = function() {
                        var innerBody = function(maxRecords, startIndex, callContext) {
                            var model = this.model;
                            var controller = this.controller;
                            var callContext = controller.callContext(callContext);
                            return controller.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetUserById", "screenservices/tradershub/Common/UserProfile/ScreenDataSetGetUserById", "yxbZ3Gc_AyRfLt94vFYHKQ", maxRecords, startIndex, function(b) {
                                model.variables.getUserByIdAggr.dataFetchStatusAttr = b;
                            }, function(json) {
                                model.variables.getUserByIdAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getUserByIdAggr.constructor));
                            }, undefined, undefined, undefined, callContext, undefined, false).then(function() {
                                controller._setIsButtonEnabled$Action(controller.callContext(callContext));
                            });
                        }.bind(this);
                        return OS.Logger.startActiveSpan("GetUserById", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GetUserById");
                                span.setAttribute("outsystems.function.key", "b5d62b22-7653-488a-8b08-2eaa8da04970");
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

                return this._getUserById$AggrRefresh;
            }
            set getUserById$AggrRefresh(value) {
                this._getUserById$AggrRefresh = value;
            }


            get dataFetchActionNames() {
                if (!(this.hasOwnProperty("_dataFetchActionNames"))) {
                    this._dataFetchActionNames = ["getUserById$AggrRefresh"];
                }

                return this._dataFetchActionNames;
            }
            set dataFetchActionNames(value) {
                this._dataFetchActionNames = value;
            }

            // Client Actions - Methods
            get _saveChangesOnClick$Action() {
                if (!(this.hasOwnProperty("__saveChangesOnClick$Action"))) {
                    this.__saveChangesOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("SaveChangesOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "SaveChangesOnClick");
                                span.setAttribute("outsystems.function.key", "b52968ec-1930-4c88-82db-317164f104ad");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("SaveChangesOnClick");
                                callContext = controller.callContext(callContext);
                                var updateUserVar = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Execute Action: UpdateUser
                                    model.flush();
                                    return controller.updateUser$ServerAction(OS.DataConversion.JSConversions.typeConvertRecord(model.variables.getUserByIdAggr.listOut.getCurrent(callContext.iterationContext).userAttr, new OS.SystemStructures.UserUpdateInfoRec(), function(source, target) {
                                        target.nameAttr = source.nameAttr;
                                        target.photoURLAttr = source.photoUrlAttr;
                                        return target;
                                    }), callContext).then(function(value) {
                                        updateUserVar.value = value;
                                    }).then(function() {
                                        // Success?
                                        if ((updateUserVar.value.updateUserResultOut.successAttr)) {
                                            // Update client variables
                                            // UserName = GetUserById.List.Current.User.Name
                                            tradershubClientVariables.setUserName(model.variables.getUserByIdAggr.listOut.getCurrent(callContext.iterationContext).userAttr.nameAttr);
                                            // User updated successfully
                                            OS.FeedbackMessageService.showFeedbackMessage("Your profile has been successfully updated!", /*Success*/ 1);
                                        } else {
                                            // Invalid credentials?
                                            if ((updateUserVar.value.updateUserResultOut.updateUserFailureReasonAttr.invalidCredentialsAttr)) {
                                                // Invalid credentials.
                                                OS.FeedbackMessageService.showFeedbackMessage("Invalid credentials.", /*Error*/ 3);
                                            } else {
                                                // Invalid Name?
                                                if ((updateUserVar.value.updateUserResultOut.updateUserFailureReasonAttr.invalidNameAttr)) {
                                                    // Invalid Name
                                                    OS.FeedbackMessageService.showFeedbackMessage("Name invalid.", /*Error*/ 3);
                                                } else {
                                                    // Update user failed.
                                                    OS.FeedbackMessageService.showFeedbackMessage("Update user failed.", /*Error*/ 3);
                                                }

                                            }

                                        }

                                    });
                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    };
                }

                return this.__saveChangesOnClick$Action;
            }
            set _saveChangesOnClick$Action(value) {
                this.__saveChangesOnClick$Action = value;
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
                                span.setAttribute("outsystems.function.key", "ba77697d-581a-4cd7-9d59-ffbde89f3750");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnInitialize");
                                callContext = controller.callContext(callContext);
                                var isExternalUserVar = new OS.DataTypes.VariableHolder();
                                // Execute Action: IsExternalUser
                                isExternalUserVar.value = OS.SystemActions.isExternalUser(callContext);

                                // IsExternal = IsExternalUser.IsExternalUser
                                model.variables.isExternalVar = isExternalUserVar.value.isExternalUserOut;
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

            get _setIsButtonEnabled$Action() {
                if (!(this.hasOwnProperty("__setIsButtonEnabled$Action"))) {
                    this.__setIsButtonEnabled$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("SetIsButtonEnabled", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "SetIsButtonEnabled");
                                span.setAttribute("outsystems.function.key", "be2cab1a-a7ab-49c6-bb2b-2c38548d94a0");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("SetIsButtonEnabled");
                                callContext = controller.callContext(callContext);
                                // Set IsButtonEnabled
                                // IsButtonEnabled = notGetUserById.List.Current.User.Name = ""
                                model.variables.isButtonEnabledVar = !((model.variables.getUserByIdAggr.listOut.getCurrent(callContext.iterationContext).userAttr.nameAttr === ""));
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__setIsButtonEnabled$Action;
            }
            set _setIsButtonEnabled$Action(value) {
                this.__setIsButtonEnabled$Action = value;
            }

            get _input_NameOnChange$Action() {
                if (!(this.hasOwnProperty("__input_NameOnChange$Action"))) {
                    this.__input_NameOnChange$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("Input_NameOnChange", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "Input_NameOnChange");
                                span.setAttribute("outsystems.function.key", "c0800096-aab1-4b53-b787-66181cd4fb0d");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("Input_NameOnChange");
                                callContext = controller.callContext(callContext);
                                // Execute Action: SetIsButtonEnabled
                                controller._setIsButtonEnabled$Action(callContext);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__input_NameOnChange$Action;
            }
            set _input_NameOnChange$Action(value) {
                this.__input_NameOnChange$Action = value;
            }


            saveChangesOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("SaveChangesOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SaveChangesOnClick");
                        span.setAttribute("outsystems.function.key", "b52968ec-1930-4c88-82db-317164f104ad");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._saveChangesOnClick$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            onInitialize$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnInitialize__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnInitialize");
                        span.setAttribute("outsystems.function.key", "ba77697d-581a-4cd7-9d59-ffbde89f3750");
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

            setIsButtonEnabled$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("SetIsButtonEnabled__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SetIsButtonEnabled");
                        span.setAttribute("outsystems.function.key", "be2cab1a-a7ab-49c6-bb2b-2c38548d94a0");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._setIsButtonEnabled$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            input_NameOnChange$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("Input_NameOnChange__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "Input_NameOnChange");
                        span.setAttribute("outsystems.function.key", "c0800096-aab1-4b53-b787-66181cd4fb0d");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._input_NameOnChange$Action, callContext);
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
                        return tradershub_CommonController.default.handleError(ex, this.callContext());
                    };
                }

                return this._handleError;
            }
            set handleError(value) {
                this._handleError = value;
            }

            static checkPermissions() {
                OS.Authorization.ensureUserHasRole({
                    roles: [tradershubController.default.roles.tradershub]
                });
            }

            getDefaultTimeout() {
                return tradershubController.default.defaultTimeout;
            }

        }

        var Controller = ControllerInner;
        // Server Actions - Variables
        Controller.registerVariableGroupType("tradershub.Common.UserProfile$ActionUpdateUser", [{
            name: "UpdateUserResult",
            attrName: "updateUserResultOut",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Record,
            defaultValue: function() {
                return new OS.SystemStructures.UpdateUserResultRec();
            },
            complexType: OS.SystemStructures.UpdateUserResultRec
        }]);

        // Client Actions - Variables

    }
    return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});