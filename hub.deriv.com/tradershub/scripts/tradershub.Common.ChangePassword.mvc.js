define("tradershub.Common.ChangePassword.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "System_.model", "OutSystemsUI.model", "OutSystemsUI.controller", "System_.model$ChangePasswordResultRec", "tradershub.referencesHealth", "tradershub.referencesHealth$System_", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "tradershub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$ShowPassword", "tradershub.model$RC_ced013358a82a813f1d9a5108f17ce79", "tradershub.model$RL_8430333e95ceffc00def96d8abb01f75"], function(OSRuntimeCore, tradershubModel, System_Model, OutSystemsUIModel, OutSystemsUIController) {
    var OS = OSRuntimeCore; {
        class GetUserDetailAggrRecInner extends
        OS.Model.AggregateRecord {
            static attributesToDeclare() {
                return [].concat(OS.Model.AggregateRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new GetUserDetailAggrRec(new GetUserDetailAggrRec.RecordClass({
                    RecordListType: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        GetUserDetailAggrRecInner.RecordListType = tradershubModel.RL_8430333e95ceffc00def96d8abb01f75;
        var GetUserDetailAggrRec = GetUserDetailAggrRecInner;
        GetUserDetailAggrRec.init();
    }


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("OldPassword", "oldPasswordVar", "OldPassword", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("NewPassword", "newPasswordVar", "NewPassword", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("ConfirmPassword", "confirmPasswordVar", "ConfirmPassword", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("IsPasswordVisible", "isPasswordVisibleVar", "IsPasswordVisible", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("IsConfirmPasswordVisible", "isConfirmPasswordVisibleVar", "IsConfirmPasswordVisible", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("IsButtonEnabled", "isButtonEnabledVar", "IsButtonEnabled", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("IsExecuting", "isExecutingVar", "IsExecuting", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("IsNewPasswordCompliant", "isNewPasswordCompliantVar", "IsNewPasswordCompliant", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("GetUserDetail", "getUserDetailAggr", "GetUserDetail", true, true, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new GetUserDetailAggrRec());
                    }, true, GetUserDetailAggrRec)
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
                Input_OldPassword: OS.Model.ValidationWidgetRecord,
                Input_NewPassword: OS.Model.ValidationWidgetRecord,
                Input_ConfirmPassword: OS.Model.ValidationWidgetRecord
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

define("tradershub.Common.ChangePassword.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "System_.model", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "@outsystems/runtime-view-js", "tradershub.Common.ChangePassword.mvc$model", "tradershub.Common.ChangePassword.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.LayoutTopMenu.mvc$view", "@outsystems/runtime-widgets-js", "OutSystemsUI.Adaptive.Columns2.mvc$view", "OutSystemsUI.Interaction.AnimatedLabel.mvc$view", "OutSystemsUI.Interaction.InputWithIcon.mvc$view", "OutSystemsUI.Utilities.PasswordPolicy.mvc$view", "OutSystemsUI.Utilities.ButtonLoading.mvc$view", "System_.model$ChangePasswordResultRec", "tradershub.referencesHealth", "tradershub.referencesHealth$System_", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "tradershub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$ShowPassword", "tradershub.model$RC_ced013358a82a813f1d9a5108f17ce79", "tradershub.model$RL_8430333e95ceffc00def96d8abb01f75"], function(OSRuntimeCore, tradershubModel, tradershubController, System_Model, OutSystemsUIModel, OutSystemsUIController, React, OSView, tradershub_Common_ChangePassword_mvc_model, tradershub_Common_ChangePassword_mvc_controller, tradershubClientVariables, tradershub_Layouts_LayoutTopMenu_mvc_view, OSWidgets, OutSystemsUI_Adaptive_Columns2_mvc_view, OutSystemsUI_Interaction_AnimatedLabel_mvc_view, OutSystemsUI_Interaction_InputWithIcon_mvc_view, OutSystemsUI_Utilities_PasswordPolicy_mvc_view, OutSystemsUI_Utilities_ButtonLoading_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "Common.ChangePassword";
        }

        static getAttributes() {
            return {
                codeFunction: "ChangePassword",
                functionKey: "e3781629-a18d-40a3-a680-8c697e181700",
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
            return [tradershub_Layouts_LayoutTopMenu_mvc_view, OutSystemsUI_Adaptive_Columns2_mvc_view, OutSystemsUI_Interaction_AnimatedLabel_mvc_view, OutSystemsUI_Interaction_InputWithIcon_mvc_view, OutSystemsUI_Utilities_PasswordPolicy_mvc_view, OutSystemsUI_Utilities_ButtonLoading_mvc_view];
        }

        get modelFactory() {
            return tradershub_Common_ChangePassword_mvc_model;
        }

        get controllerFactory() {
            return tradershub_Common_ChangePassword_mvc_controller;
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


            return "Change password";
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
                    breadcrumbs: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Link, {
                            enabled: true,
                            transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                            url: OS.Navigation.generateScreenURL("tradershub", "UserProfile", {}),
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "1"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Icon, {
                            icon: "angle-left",
                            iconSize: /*FontSize*/ 0,
                            style: "icon",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "margin-left: 5px;"
                            },
                            text: ["Back to profile"],
                            _idProps: {
                                service: idService,
                                uuid: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))];
                    }),
                    title: new PlaceholderContent(function() {
                        return ["Change your password"];
                    }),
                    actions: PlaceholderContent.Empty,
                    mainContent: new PlaceholderContent(function() {
                        return [React.createElement(OutSystemsUI_Adaptive_Columns2_mvc_view, {
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
                                uuid: "4",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                column1: new PlaceholderContent(function() {
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
                                    }, React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "6"
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
                                            uuid: "7",
                                            alias: "3"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        placeholders: {
                                            label: new PlaceholderContent(function() {
                                                return [React.createElement(OSWidgets.Label, {
                                                    gridProperties: {
                                                        classes: "OSFillParent"
                                                    },
                                                    mandatory: true,
                                                    targetWidget: "Input_OldPassword",
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "8"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider
                                                }, "Current password")];
                                            }),
                                            input: new PlaceholderContent(function() {
                                                return [React.createElement(OSWidgets.Input, {
                                                    _validationProps: {
                                                        validationService: validationService,
                                                        validationParentId: idService.getId("Form")
                                                    },
                                                    enabled: true,
                                                    extendedProperties: {
                                                        autoComplete: "current-password",
                                                        tabIndex: "1"
                                                    },
                                                    gridProperties: {
                                                        classes: "OSFillParent"
                                                    },
                                                    inputType: /*Password*/ 1,
                                                    mandatory: true,
                                                    maxLength: 256,
                                                    onChange: function() {
                                                        var eventHandlerContext = callContext.clone();
                                                        controller.input_OldPasswordOnChange$Action(controller.callContext(eventHandlerContext));

                                                        ;
                                                    },
                                                    style: "form-control",
                                                    variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.oldPasswordVar, function(value) {
                                                        model.variables.oldPasswordVar = value;
                                                    }),
                                                    _idProps: {
                                                        service: idService,
                                                        name: "Input_OldPassword"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider
                                                })];
                                            })
                                        },
                                        _dependencies: [asPrimitiveValue(model.variables.oldPasswordVar)]
                                    })), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        style: "margin-top-base",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "10"
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
                                            uuid: "11",
                                            alias: "4"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        placeholders: {
                                            label: new PlaceholderContent(function() {
                                                return [React.createElement(OSWidgets.Label, {
                                                    gridProperties: {
                                                        classes: "OSFillParent"
                                                    },
                                                    mandatory: true,
                                                    targetWidget: "Input_NewPassword",
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "12"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider
                                                }, "New password")];
                                            }),
                                            input: new PlaceholderContent(function() {
                                                return [React.createElement(OutSystemsUI_Interaction_InputWithIcon_mvc_view, {
                                                    getOwnerSpan: function() {
                                                        return _this.getChildSpan("render");
                                                    },
                                                    getOwnerDisposeSpan: function() {
                                                        return _this.getChildSpan("destroy");
                                                    },
                                                    inputs: {
                                                        ExtendedClass: "padding-left-none",
                                                        AlignIconRight: true
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
                                                        uuid: "13",
                                                        alias: "5"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    placeholders: {
                                                        icon: new PlaceholderContent(function() {
                                                            return [React.createElement(OSWidgets.Link, {
                                                                enabled: true,
                                                                onClick: function() {
                                                                    var eventHandlerContext = callContext.clone();
                                                                    controller.onToggleNewPasswordVisibility$Action(controller.callContext(eventHandlerContext));

                                                                    ;
                                                                },
                                                                visible: true,
                                                                _idProps: {
                                                                    service: idService,
                                                                    uuid: "14"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider
                                                            }, $if(model.variables.isPasswordVisibleVar, false, this, function() {
                                                                return [React.createElement(OSWidgets.Icon, {
                                                                    icon: "eye-slash",
                                                                    iconSize: /*FontSize*/ 0,
                                                                    style: "icon",
                                                                    visible: true,
                                                                    _idProps: {
                                                                        service: idService,
                                                                        uuid: "15"
                                                                    },
                                                                    _widgetRecordProvider: widgetsRecordProvider
                                                                })];
                                                            }, function() {
                                                                return [React.createElement(OSWidgets.Icon, {
                                                                    icon: "eye",
                                                                    iconSize: /*FontSize*/ 0,
                                                                    style: "icon",
                                                                    visible: true,
                                                                    _idProps: {
                                                                        service: idService,
                                                                        uuid: "16"
                                                                    },
                                                                    _widgetRecordProvider: widgetsRecordProvider
                                                                })];
                                                            }))];
                                                        }),
                                                        input: new PlaceholderContent(function() {
                                                            return [React.createElement(OSWidgets.Input, {
                                                                _validationProps: {
                                                                    validationService: validationService,
                                                                    validationParentId: idService.getId("Form")
                                                                },
                                                                enabled: true,
                                                                extendedProperties: {
                                                                    autoComplete: "new-password",
                                                                    tabIndex: "2",
                                                                    style: "padding-bottom: 0px; padding-left: 0px; padding-right: var(--space-xl); padding-top: 0px;"
                                                                },
                                                                gridProperties: {
                                                                    classes: "OSFillParent"
                                                                },
                                                                inputType: /*Password*/ 1,
                                                                mandatory: true,
                                                                maxLength: 256,
                                                                style: "form-control login-password padding-left-none",
                                                                variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.newPasswordVar, function(value) {
                                                                    model.variables.newPasswordVar = value;
                                                                }),
                                                                _idProps: {
                                                                    service: idService,
                                                                    name: "Input_NewPassword"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider
                                                            })];
                                                        })
                                                    },
                                                    _dependencies: [asPrimitiveValue(model.variables.newPasswordVar), asPrimitiveValue(model.variables.isPasswordVisibleVar)]
                                                })];
                                            })
                                        },
                                        _dependencies: [asPrimitiveValue(model.variables.newPasswordVar), asPrimitiveValue(model.variables.isPasswordVisibleVar)]
                                    })), React.createElement(OutSystemsUI_Utilities_PasswordPolicy_mvc_view, {
                                        getOwnerSpan: function() {
                                            return _this.getChildSpan("render");
                                        },
                                        getOwnerDisposeSpan: function() {
                                            return _this.getChildSpan("destroy");
                                        },
                                        inputs: {
                                            Password: model.variables.newPasswordVar
                                        },
                                        events: {
                                            _handleError: function(ex) {
                                                controller.handleError(ex);
                                            },
                                            compliant$Action: function(isValidIn) {
                                                var eventHandlerContext = callContext.clone();
                                                controller.passwordPolicyCompliant$Action(isValidIn, controller.callContext(eventHandlerContext));

                                                ;
                                            }
                                        },
                                        _validationProps: {
                                            validationService: validationService,
                                            validationParentId: idService.getId("Form")
                                        },
                                        _idProps: {
                                            service: idService,
                                            uuid: "18",
                                            alias: "6"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    }), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        style: "margin-top-base",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "19"
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
                                            uuid: "20",
                                            alias: "7"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        placeholders: {
                                            label: new PlaceholderContent(function() {
                                                return [React.createElement(OSWidgets.Label, {
                                                    gridProperties: {
                                                        classes: "OSFillParent"
                                                    },
                                                    mandatory: true,
                                                    targetWidget: "Input_ConfirmPassword",
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "21"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider
                                                }, "Confirm password")];
                                            }),
                                            input: new PlaceholderContent(function() {
                                                return [React.createElement(OutSystemsUI_Interaction_InputWithIcon_mvc_view, {
                                                    getOwnerSpan: function() {
                                                        return _this.getChildSpan("render");
                                                    },
                                                    getOwnerDisposeSpan: function() {
                                                        return _this.getChildSpan("destroy");
                                                    },
                                                    inputs: {
                                                        ExtendedClass: "padding-left-none",
                                                        AlignIconRight: true
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
                                                        uuid: "22",
                                                        alias: "8"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    placeholders: {
                                                        icon: new PlaceholderContent(function() {
                                                            return [React.createElement(OSWidgets.Link, {
                                                                enabled: true,
                                                                onClick: function() {
                                                                    var eventHandlerContext = callContext.clone();
                                                                    controller.onToggleConfirmPasswordVisibility$Action(controller.callContext(eventHandlerContext));

                                                                    ;
                                                                },
                                                                visible: true,
                                                                _idProps: {
                                                                    service: idService,
                                                                    uuid: "23"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider
                                                            }, $if(model.variables.isPasswordVisibleVar, false, this, function() {
                                                                return [React.createElement(OSWidgets.Icon, {
                                                                    icon: "eye-slash",
                                                                    iconSize: /*FontSize*/ 0,
                                                                    style: "icon",
                                                                    visible: true,
                                                                    _idProps: {
                                                                        service: idService,
                                                                        uuid: "24"
                                                                    },
                                                                    _widgetRecordProvider: widgetsRecordProvider
                                                                })];
                                                            }, function() {
                                                                return [React.createElement(OSWidgets.Icon, {
                                                                    icon: "eye",
                                                                    iconSize: /*FontSize*/ 0,
                                                                    style: "icon",
                                                                    visible: true,
                                                                    _idProps: {
                                                                        service: idService,
                                                                        uuid: "25"
                                                                    },
                                                                    _widgetRecordProvider: widgetsRecordProvider
                                                                })];
                                                            }))];
                                                        }),
                                                        input: new PlaceholderContent(function() {
                                                            return [React.createElement(OSWidgets.Input, {
                                                                _validationProps: {
                                                                    validationService: validationService,
                                                                    validationParentId: idService.getId("Form")
                                                                },
                                                                enabled: true,
                                                                extendedProperties: {
                                                                    tabIndex: "3",
                                                                    style: "padding-bottom: 0px; padding-left: 0px; padding-right: var(--space-xl); padding-top: 0px;"
                                                                },
                                                                gridProperties: {
                                                                    classes: "OSFillParent"
                                                                },
                                                                inputType: /*Password*/ 1,
                                                                mandatory: true,
                                                                maxLength: 256,
                                                                onChange: function() {
                                                                    var eventHandlerContext = callContext.clone();
                                                                    controller.input_ConfirmPasswordOnChange$Action(controller.callContext(eventHandlerContext));

                                                                    ;
                                                                },
                                                                style: "form-control login-password padding-left-none",
                                                                variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.confirmPasswordVar, function(value) {
                                                                    model.variables.confirmPasswordVar = value;
                                                                }),
                                                                _idProps: {
                                                                    service: idService,
                                                                    name: "Input_ConfirmPassword"
                                                                },
                                                                _widgetRecordProvider: widgetsRecordProvider
                                                            })];
                                                        })
                                                    },
                                                    _dependencies: [asPrimitiveValue(model.variables.confirmPasswordVar), asPrimitiveValue(model.variables.isPasswordVisibleVar)]
                                                })];
                                            })
                                        },
                                        _dependencies: [asPrimitiveValue(model.variables.confirmPasswordVar), asPrimitiveValue(model.variables.isPasswordVisibleVar)]
                                    })), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "27"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OutSystemsUI_Utilities_ButtonLoading_mvc_view, {
                                        getOwnerSpan: function() {
                                            return _this.getChildSpan("render");
                                        },
                                        getOwnerDisposeSpan: function() {
                                            return _this.getChildSpan("destroy");
                                        },
                                        inputs: {
                                            ExtendedClass: "full-width",
                                            IsLoading: model.variables.isExecutingVar
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
                                            uuid: "28",
                                            alias: "9"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        placeholders: {
                                            button: new PlaceholderContent(function() {
                                                return [React.createElement(OSWidgets.Button, {
                                                    enabled: model.variables.isButtonEnabledVar,
                                                    extendedProperties: {
                                                        tabIndex: "4"
                                                    },
                                                    gridProperties: {
                                                        classes: "OSFillParent"
                                                    },
                                                    isDefault: true,
                                                    onClick: function() {
                                                        controller.validationService.validateWidget(idService.getId("Form"));
                                                        return Promise.resolve().then(function() {
                                                            var eventHandlerContext = callContext.clone();
                                                            return controller.setNewPasswordOnClick$Action(controller.callContext(eventHandlerContext));
                                                        });

                                                        ;
                                                    },
                                                    style: "btn btn-primary margin-top-l",
                                                    visible: true,
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "29"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider
                                                }, React.createElement(OSWidgets.Container, {
                                                    align: /*Default*/ 0,
                                                    animate: false,
                                                    style: "osui-btn-loading__spinner-animation",
                                                    visible: true,
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "30"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider
                                                }), "Set new password")];
                                            })
                                        },
                                        _dependencies: [asPrimitiveValue(model.variables.isButtonEnabledVar)]
                                    })))];
                                }),
                                column2: PlaceholderContent.Empty
                            },
                            _dependencies: [asPrimitiveValue(model.variables.isButtonEnabledVar), asPrimitiveValue(model.variables.isExecutingVar), asPrimitiveValue(model.variables.confirmPasswordVar), asPrimitiveValue(model.variables.newPasswordVar), asPrimitiveValue(model.variables.isPasswordVisibleVar), asPrimitiveValue(model.variables.oldPasswordVar)]
                        })];
                    }),
                    footer: PlaceholderContent.Empty
                },
                _dependencies: [asPrimitiveValue(model.variables.isButtonEnabledVar), asPrimitiveValue(model.variables.isExecutingVar), asPrimitiveValue(model.variables.confirmPasswordVar), asPrimitiveValue(model.variables.newPasswordVar), asPrimitiveValue(model.variables.isPasswordVisibleVar), asPrimitiveValue(model.variables.oldPasswordVar)]
            }));
        }
    }

    return View;
});
define("tradershub.Common.ChangePassword.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "System_.model", "OutSystemsUI.model", "OutSystemsUI.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.Common.controller", "System_.model$ChangePasswordResultRec", "tradershub.referencesHealth", "tradershub.referencesHealth$System_", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "tradershub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$ShowPassword", "tradershub.model$RC_ced013358a82a813f1d9a5108f17ce79", "tradershub.model$RL_8430333e95ceffc00def96d8abb01f75"], function(OSRuntimeCore, tradershubModel, tradershubController, System_Model, OutSystemsUIModel, OutSystemsUIController, tradershubLanguageResources, tradershubClientVariables, tradershub_CommonController) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService);
                var controller = this.controller;
                this.clientActionProxies = {};
                this.dataFetchDependenciesOriginal = {
                    getUserDetail$AggrRefresh: 0
                };
                this.dataFetchDependentsGraph = {
                    getUserDetail$AggrRefresh: []
                };
                this.shouldSendClientVarsToDataSources = false;
            }

            // Server Actions - Methods

            // Aggregates and Data Actions
            get getUserDetail$AggrRefresh() {
                if (!(this.hasOwnProperty("_getUserDetail$AggrRefresh"))) {
                    this._getUserDetail$AggrRefresh = function() {
                        var innerBody = function(maxRecords, startIndex, callContext) {
                            var model = this.model;
                            var controller = this.controller;
                            var callContext = controller.callContext(callContext);
                            return controller.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetUserDetail", "screenservices/tradershub/Common/ChangePassword/ScreenDataSetGetUserDetail", "lOVG8XYUtT1F4BnlmUbFQw", maxRecords, startIndex, function(b) {
                                model.variables.getUserDetailAggr.dataFetchStatusAttr = b;
                            }, function(json) {
                                model.variables.getUserDetailAggr.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getUserDetailAggr.constructor));
                            }, undefined, undefined, undefined, callContext, undefined, false);
                        }.bind(this);
                        return OS.Logger.startActiveSpan("GetUserDetail", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GetUserDetail");
                                span.setAttribute("outsystems.function.key", "99935c79-947f-49d9-a2bc-096c0afc7b20");
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

                return this._getUserDetail$AggrRefresh;
            }
            set getUserDetail$AggrRefresh(value) {
                this._getUserDetail$AggrRefresh = value;
            }


            get dataFetchActionNames() {
                if (!(this.hasOwnProperty("_dataFetchActionNames"))) {
                    this._dataFetchActionNames = ["getUserDetail$AggrRefresh"];
                }

                return this._dataFetchActionNames;
            }
            set dataFetchActionNames(value) {
                this._dataFetchActionNames = value;
            }

            // Client Actions - Methods
            get _passwordPolicyCompliant$Action() {
                if (!(this.hasOwnProperty("__passwordPolicyCompliant$Action"))) {
                    this.__passwordPolicyCompliant$Action = function(isValidIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("PasswordPolicyCompliant", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "PasswordPolicyCompliant");
                                span.setAttribute("outsystems.function.key", "07728f75-ef37-4ffd-849b-433e8232002e");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("PasswordPolicyCompliant");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.Common.ChangePassword.PasswordPolicyCompliant$vars"))());
                                vars.value.isValidInLocal = isValidIn;
                                // IsNewPasswordCompliant = IsValid
                                model.variables.isNewPasswordCompliantVar = vars.value.isValidInLocal;
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

                return this.__passwordPolicyCompliant$Action;
            }
            set _passwordPolicyCompliant$Action(value) {
                this.__passwordPolicyCompliant$Action = value;
            }

            get _input_OldPasswordOnChange$Action() {
                if (!(this.hasOwnProperty("__input_OldPasswordOnChange$Action"))) {
                    this.__input_OldPasswordOnChange$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("Input_OldPasswordOnChange", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "Input_OldPasswordOnChange");
                                span.setAttribute("outsystems.function.key", "63c4eaad-2473-4408-859f-e6820a94c7a3");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("Input_OldPasswordOnChange");
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

                return this.__input_OldPasswordOnChange$Action;
            }
            set _input_OldPasswordOnChange$Action(value) {
                this.__input_OldPasswordOnChange$Action = value;
            }

            get _setNewPasswordOnClick$Action() {
                if (!(this.hasOwnProperty("__setNewPasswordOnClick$Action"))) {
                    this.__setNewPasswordOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("SetNewPasswordOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "SetNewPasswordOnClick");
                                span.setAttribute("outsystems.function.key", "944ade75-c90e-4b11-8da9-58b8d75db121");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("SetNewPasswordOnClick");
                                callContext = controller.callContext(callContext);
                                var changePasswordVar = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    return OS.Flow.executeSequence(function() {
                                        if ((model.widgets.get(idService.getId("Form")).validAttr)) {
                                            // IsExecuting = true
                                            // IsExecuting = True
                                            model.variables.isExecutingVar = true;
                                            // Passwords matches?
                                            return OS.Flow.executeSequence(function() {
                                                if (((model.variables.newPasswordVar === model.variables.confirmPasswordVar))) {
                                                    // Execute Action: ChangePassword
                                                    model.flush();
                                                    return OS.SystemActions.changePassword(model.variables.getUserDetailAggr.listOut.getCurrent(callContext.iterationContext).userAttr.emailAttr, model.variables.newPasswordVar, model.variables.oldPasswordVar, callContext).then(function(value) {
                                                        changePasswordVar.value = value;
                                                    }).then(function() {
                                                        // Success?
                                                        if ((changePasswordVar.value.changePasswordResultOut.successAttr)) {
                                                            OS.FeedbackMessageService.showFeedbackMessage("Password successfully changed!", /*Success*/ 1);
                                                            // Destination: /tradershub/UserProfile
                                                            return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "UserProfile", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                                                        } else {
                                                            // IsExecuting = false
                                                            // IsExecuting = False
                                                            model.variables.isExecutingVar = false;
                                                            // Invalid Credentials?
                                                            if ((changePasswordVar.value.changePasswordResultOut.changePasswordFailureReasonAttr.invalidCredentialsAttr)) {
                                                                // Password invalid
                                                                // Input_OldPassword.Valid = False
                                                                model.widgets.get(idService.getId("Input_OldPassword")).validAttr = false;
                                                                // Input_OldPassword.ValidationMessage = "Incorrect password."
                                                                model.widgets.get(idService.getId("Input_OldPassword")).validationMessageAttr = "Incorrect password.";
                                                            } else {
                                                                // Password Complexity Failed?
                                                                if ((changePasswordVar.value.changePasswordResultOut.changePasswordFailureReasonAttr.passwordComplexityPolicyFailedAttr)) {
                                                                    // Complexity Failed
                                                                    // Input_NewPassword.Valid = False
                                                                    model.widgets.get(idService.getId("Input_NewPassword")).validAttr = false;
                                                                    // Input_NewPassword.ValidationMessage = "Password doesn't meet the requirements."
                                                                    model.widgets.get(idService.getId("Input_NewPassword")).validationMessageAttr = "Password doesn\'t meet the requirements.";
                                                                    // IsButtonEnabled = False
                                                                    model.variables.isButtonEnabledVar = false;
                                                                } else {
                                                                    // Number of Attempts Failed?
                                                                    if ((changePasswordVar.value.changePasswordResultOut.changePasswordFailureReasonAttr.tooManyFailedAttemptsAttr)) {
                                                                        OS.FeedbackMessageService.showFeedbackMessage("Too many failed attempts, please try again after some time.", /*Error*/ 3);
                                                                    } else {
                                                                        OS.FeedbackMessageService.showFeedbackMessage("An unknown error occurred. Please try again later.", /*Error*/ 3);
                                                                    }

                                                                }

                                                            }

                                                        }

                                                    });
                                                } else {
                                                    // Passwords don't match
                                                    // Input_ConfirmPassword.Valid = False
                                                    model.widgets.get(idService.getId("Input_ConfirmPassword")).validAttr = false;
                                                    // Input_ConfirmPassword.ValidationMessage = "Password and Confirm password don't match."
                                                    model.widgets.get(idService.getId("Input_ConfirmPassword")).validationMessageAttr = "Password and Confirm password don\'t match.";
                                                    // IsExecuting = false
                                                    // IsExecuting = False
                                                    model.variables.isExecutingVar = false;
                                                }

                                            });
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

                return this.__setNewPasswordOnClick$Action;
            }
            set _setNewPasswordOnClick$Action(value) {
                this.__setNewPasswordOnClick$Action = value;
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
                                span.setAttribute("outsystems.function.key", "98a42af6-fda1-4ebd-9c87-d5c7dee35c93");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("SetIsButtonEnabled");
                                callContext = controller.callContext(callContext);
                                // Is OldPassword empty?
                                if (((model.variables.oldPasswordVar === ""))) {
                                    // DisableButton
                                    // IsButtonEnabled = False
                                    model.variables.isButtonEnabledVar = false;
                                } else {
                                    // Is NewPassword empty?
                                    if (((model.variables.newPasswordVar === ""))) {
                                        // DisableButton
                                        // IsButtonEnabled = False
                                        model.variables.isButtonEnabledVar = false;
                                    } else {
                                        // Is NewPassword compliant?
                                        if ((model.variables.isNewPasswordCompliantVar)) {
                                            // Is ConfirmPassword empty?
                                            if (((model.variables.confirmPasswordVar === ""))) {
                                                // DisableButton
                                                // IsButtonEnabled = False
                                                model.variables.isButtonEnabledVar = false;
                                            } else {
                                                // EnableButton
                                                // IsButtonEnabled = True
                                                model.variables.isButtonEnabledVar = true;
                                            }

                                        } else {
                                            // DisableButton
                                            // IsButtonEnabled = False
                                            model.variables.isButtonEnabledVar = false;
                                        }

                                    }

                                }

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

            get _onToggleConfirmPasswordVisibility$Action() {
                if (!(this.hasOwnProperty("__onToggleConfirmPasswordVisibility$Action"))) {
                    this.__onToggleConfirmPasswordVisibility$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnToggleConfirmPasswordVisibility", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnToggleConfirmPasswordVisibility");
                                span.setAttribute("outsystems.function.key", "b8ed2f84-1636-4cb8-ba83-794fb7df506b");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnToggleConfirmPasswordVisibility");
                                callContext = controller.callContext(callContext);
                                var showPasswordVar = new OS.DataTypes.VariableHolder();
                                // IsConfirmPasswordVisible = notIsConfirmPasswordVisible
                                model.variables.isConfirmPasswordVisibleVar = !(model.variables.isConfirmPasswordVisibleVar);
                                // Execute Action: ShowPassword
                                showPasswordVar.value = OutSystemsUIController.default.showPassword$Action(idService.getId("Input_ConfirmPassword"), callContext);

                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onToggleConfirmPasswordVisibility$Action;
            }
            set _onToggleConfirmPasswordVisibility$Action(value) {
                this.__onToggleConfirmPasswordVisibility$Action = value;
            }

            get _onToggleNewPasswordVisibility$Action() {
                if (!(this.hasOwnProperty("__onToggleNewPasswordVisibility$Action"))) {
                    this.__onToggleNewPasswordVisibility$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnToggleNewPasswordVisibility", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnToggleNewPasswordVisibility");
                                span.setAttribute("outsystems.function.key", "bb2480a2-2568-4d6b-bd97-9e3a21650114");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnToggleNewPasswordVisibility");
                                callContext = controller.callContext(callContext);
                                var showPasswordVar = new OS.DataTypes.VariableHolder();
                                // IsPasswordVisible = notIsPasswordVisible
                                model.variables.isPasswordVisibleVar = !(model.variables.isPasswordVisibleVar);
                                // Execute Action: ShowPassword
                                showPasswordVar.value = OutSystemsUIController.default.showPassword$Action(idService.getId("Input_NewPassword"), callContext);

                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onToggleNewPasswordVisibility$Action;
            }
            set _onToggleNewPasswordVisibility$Action(value) {
                this.__onToggleNewPasswordVisibility$Action = value;
            }

            get _input_ConfirmPasswordOnChange$Action() {
                if (!(this.hasOwnProperty("__input_ConfirmPasswordOnChange$Action"))) {
                    this.__input_ConfirmPasswordOnChange$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("Input_ConfirmPasswordOnChange", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "Input_ConfirmPasswordOnChange");
                                span.setAttribute("outsystems.function.key", "da321b80-6d94-4e9d-916d-2c73bb41746a");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("Input_ConfirmPasswordOnChange");
                                callContext = controller.callContext(callContext);
                                // Execute Action: SetIsButtonEnabled
                                controller._setIsButtonEnabled$Action(callContext);
                                // IsEmpty
                                if (((model.variables.confirmPasswordVar === ""))) {
                                    // ClearErrors
                                    // Input_ConfirmPassword.Valid = True
                                    model.widgets.get(idService.getId("Input_ConfirmPassword")).validAttr = true;
                                    // Input_ConfirmPassword.ValidationMessage = ""
                                    model.widgets.get(idService.getId("Input_ConfirmPassword")).validationMessageAttr = "";
                                }

                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__input_ConfirmPasswordOnChange$Action;
            }
            set _input_ConfirmPasswordOnChange$Action(value) {
                this.__input_ConfirmPasswordOnChange$Action = value;
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
                                span.setAttribute("outsystems.function.key", "f3b60a7a-65ad-4ea9-97f6-9b913c5ba8d9");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnInitialize");
                                callContext = controller.callContext(callContext);
                                // IsExternalUser
                                if ((OS.SystemActions.isExternalUser(callContext).isExternalUserOut)) {
                                    // Destination: /tradershub/InvalidPermissions
                                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "InvalidPermissions", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                                }

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


            passwordPolicyCompliant$Action(isValidIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("PasswordPolicyCompliant__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "PasswordPolicyCompliant");
                        span.setAttribute("outsystems.function.key", "07728f75-ef37-4ffd-849b-433e8232002e");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._passwordPolicyCompliant$Action, callContext, isValidIn);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            input_OldPasswordOnChange$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("Input_OldPasswordOnChange__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "Input_OldPasswordOnChange");
                        span.setAttribute("outsystems.function.key", "63c4eaad-2473-4408-859f-e6820a94c7a3");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._input_OldPasswordOnChange$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            setNewPasswordOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("SetNewPasswordOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SetNewPasswordOnClick");
                        span.setAttribute("outsystems.function.key", "944ade75-c90e-4b11-8da9-58b8d75db121");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._setNewPasswordOnClick$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            setIsButtonEnabled$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("SetIsButtonEnabled__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SetIsButtonEnabled");
                        span.setAttribute("outsystems.function.key", "98a42af6-fda1-4ebd-9c87-d5c7dee35c93");
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

            onToggleConfirmPasswordVisibility$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnToggleConfirmPasswordVisibility__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnToggleConfirmPasswordVisibility");
                        span.setAttribute("outsystems.function.key", "b8ed2f84-1636-4cb8-ba83-794fb7df506b");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onToggleConfirmPasswordVisibility$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onToggleNewPasswordVisibility$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnToggleNewPasswordVisibility__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnToggleNewPasswordVisibility");
                        span.setAttribute("outsystems.function.key", "bb2480a2-2568-4d6b-bd97-9e3a21650114");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onToggleNewPasswordVisibility$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            input_ConfirmPasswordOnChange$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("Input_ConfirmPasswordOnChange__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "Input_ConfirmPasswordOnChange");
                        span.setAttribute("outsystems.function.key", "da321b80-6d94-4e9d-916d-2c73bb41746a");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._input_ConfirmPasswordOnChange$Action, callContext);
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
                        span.setAttribute("outsystems.function.key", "f3b60a7a-65ad-4ea9-97f6-9b913c5ba8d9");
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

        // Client Actions - Variables
        Controller.registerVariableGroupType("tradershub.Common.ChangePassword.PasswordPolicyCompliant$vars", [{
            name: "IsValid",
            attrName: "isValidInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});