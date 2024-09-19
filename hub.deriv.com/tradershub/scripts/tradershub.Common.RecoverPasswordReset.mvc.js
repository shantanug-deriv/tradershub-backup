define("tradershub.Common.RecoverPasswordReset.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "OutSystemsUI.model", "OutSystemsUI.controller", "tradershub.controller", "System_.model", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$ShowPassword", "tradershub.controller$DoLogin", "System_.model$FinishResetPasswordResultRec", "tradershub.referencesHealth$System_"], function(OSRuntimeCore, tradershubModel, OutSystemsUIModel, OutSystemsUIController, tradershubController, System_Model) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
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
                    this.attr("Email", "emailIn", "Email", true, false, OS.DataTypes.DataTypes.Email, function() {
                        return "";
                    }, false),
                    this.attr("_emailInDataFetchStatus", "_emailInDataFetchStatus", "_emailInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("VerificationCode", "verificationCodeIn", "VerificationCode", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("_verificationCodeInDataFetchStatus", "_verificationCodeInDataFetchStatus", "_verificationCodeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
            return {
                PasswordResetForm: OS.Model.ValidationWidgetRecord,
                Input_Email: OS.Model.ValidationWidgetRecord,
                Input_Code: OS.Model.ValidationWidgetRecord,
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
        setInputs(inputs) {
            if ("Email" in inputs) {
                this.variables.emailIn = OS.DataConversion.ServerDataConverter.from(inputs.Email, OS.DataTypes.DataTypes.Email);
            }

            if ("VerificationCode" in inputs) {
                this.variables.verificationCodeIn = OS.DataConversion.ServerDataConverter.from(inputs.VerificationCode, OS.DataTypes.DataTypes.Text);
            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("tradershub.Common.RecoverPasswordReset.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "System_.model", "react", "@outsystems/runtime-view-js", "tradershub.Common.RecoverPasswordReset.mvc$model", "tradershub.Common.RecoverPasswordReset.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.LayoutBlank.mvc$view", "@outsystems/runtime-widgets-js", "OutSystemsUI.Interaction.AnimatedLabel.mvc$view", "OutSystemsUI.Interaction.InputWithIcon.mvc$view", "OutSystemsUI.Utilities.PasswordPolicy.mvc$view", "OutSystemsUI.Utilities.ButtonLoading.mvc$view", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$ShowPassword", "tradershub.controller$DoLogin", "System_.model$FinishResetPasswordResultRec", "tradershub.referencesHealth$System_"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIModel, OutSystemsUIController, System_Model, React, OSView, tradershub_Common_RecoverPasswordReset_mvc_model, tradershub_Common_RecoverPasswordReset_mvc_controller, tradershubClientVariables, tradershub_Layouts_LayoutBlank_mvc_view, OSWidgets, OutSystemsUI_Interaction_AnimatedLabel_mvc_view, OutSystemsUI_Interaction_InputWithIcon_mvc_view, OutSystemsUI_Utilities_PasswordPolicy_mvc_view, OutSystemsUI_Utilities_ButtonLoading_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "Common.RecoverPasswordReset";
        }

        static getAttributes() {
            return {
                codeFunction: "RecoverPasswordReset",
                functionKey: "0e04d04c-3857-48b3-b59d-04051d40722c",
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
            return [tradershub_Layouts_LayoutBlank_mvc_view, OutSystemsUI_Interaction_AnimatedLabel_mvc_view, OutSystemsUI_Interaction_InputWithIcon_mvc_view, OutSystemsUI_Utilities_PasswordPolicy_mvc_view, OutSystemsUI_Utilities_ButtonLoading_mvc_view];
        }

        get modelFactory() {
            return tradershub_Common_RecoverPasswordReset_mvc_model;
        }

        get controllerFactory() {
            return tradershub_Common_RecoverPasswordReset_mvc_controller;
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


            return "Set a new password";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(tradershub_Layouts_LayoutBlank_mvc_view, {
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
                    content: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "login-screen",
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
                            style: "login-form",
                            _idProps: {
                                service: idService,
                                name: "PasswordResetForm"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "text-align: center;"
                            },
                            style: "login-logo",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "text-align: center;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            extendedProperties: {
                                alt: "",
                                style: "height: 100px;"
                            },
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.Logo.png"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "5"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.AdvancedHtml, {
                            extendedProperties: {
                                className: "margin-top-base text-neutral-8"
                            },
                            tag: "h5",
                            _idProps: {
                                service: idService,
                                uuid: "6"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, "Reset password"), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "margin-top-s",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "7"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "8"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, "If the entered email is correct, we\'ll send a verification code to that email.", React.createElement("br"), "Please enter the code below to verify your identity.", React.createElement("br")))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "9"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "login-inputs margin-top-m",
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
                                validationParentId: idService.getId("PasswordResetForm")
                            },
                            _idProps: {
                                service: idService,
                                uuid: "11",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                label: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Label, {
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        mandatory: true,
                                        targetWidget: "Input_Email",
                                        _idProps: {
                                            service: idService,
                                            uuid: "12"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, "Email")];
                                }),
                                input: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Input, {
                                        _validationProps: {
                                            validationService: validationService,
                                            validationParentId: idService.getId("PasswordResetForm")
                                        },
                                        enabled: false,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        inputType: /*Email*/ 7,
                                        mandatory: true,
                                        maxLength: 250,
                                        prompt: "mary.smith@acme.com",
                                        style: "form-control",
                                        variable: model.createVariable(OS.DataTypes.DataTypes.Email, model.variables.emailIn, function(value) {
                                            model.variables.emailIn = value;
                                        }),
                                        _idProps: {
                                            service: idService,
                                            name: "Input_Email"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.emailIn)]
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "login-inputs margin-top-m",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "14"
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
                                validationParentId: idService.getId("PasswordResetForm")
                            },
                            _idProps: {
                                service: idService,
                                uuid: "15",
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
                                        targetWidget: "Input_Code",
                                        _idProps: {
                                            service: idService,
                                            uuid: "16"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, "Verification code")];
                                }),
                                input: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Input, {
                                        _validationProps: {
                                            validationService: validationService,
                                            validationParentId: idService.getId("PasswordResetForm")
                                        },
                                        enabled: true,
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
                                            controller.input_CodeOnChange$Action(controller.callContext(eventHandlerContext));

                                            ;
                                        },
                                        style: "form-control",
                                        variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.verificationCodeIn, function(value) {
                                            model.variables.verificationCodeIn = value;
                                        }),
                                        _idProps: {
                                            service: idService,
                                            name: "Input_Code"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.verificationCodeIn)]
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "margin-top-base password-input",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "18"
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
                                validationParentId: idService.getId("PasswordResetForm")
                            },
                            _idProps: {
                                service: idService,
                                uuid: "19",
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
                                            uuid: "20"
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
                                            AlignIconRight: true
                                        },
                                        events: {
                                            _handleError: function(ex) {
                                                controller.handleError(ex);
                                            }
                                        },
                                        _validationProps: {
                                            validationService: validationService,
                                            validationParentId: idService.getId("PasswordResetForm")
                                        },
                                        _idProps: {
                                            service: idService,
                                            uuid: "21",
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
                                                        uuid: "22"
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
                                                            uuid: "23"
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
                                                            uuid: "24"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider
                                                    })];
                                                }))];
                                            }),
                                            input: new PlaceholderContent(function() {
                                                return [React.createElement(OSWidgets.Input, {
                                                    _validationProps: {
                                                        validationService: validationService,
                                                        validationParentId: idService.getId("PasswordResetForm")
                                                    },
                                                    enabled: true,
                                                    extendedProperties: {
                                                        tabIndex: "2",
                                                        style: "padding-bottom: 0px; padding-left: 0px; padding-right: var(--space-xl); padding-top: 0px;"
                                                    },
                                                    gridProperties: {
                                                        classes: "OSFillParent"
                                                    },
                                                    inputType: /*Password*/ 1,
                                                    mandatory: true,
                                                    maxLength: 256,
                                                    style: "form-control login-password",
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
                                validationParentId: idService.getId("PasswordResetForm")
                            },
                            _idProps: {
                                service: idService,
                                uuid: "26",
                                alias: "6"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "margin-top-base password-input",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "27"
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
                                validationParentId: idService.getId("PasswordResetForm")
                            },
                            _idProps: {
                                service: idService,
                                uuid: "28",
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
                                            uuid: "29"
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
                                            AlignIconRight: true
                                        },
                                        events: {
                                            _handleError: function(ex) {
                                                controller.handleError(ex);
                                            }
                                        },
                                        _validationProps: {
                                            validationService: validationService,
                                            validationParentId: idService.getId("PasswordResetForm")
                                        },
                                        _idProps: {
                                            service: idService,
                                            uuid: "30",
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
                                                        uuid: "31"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider
                                                }, $if(model.variables.isConfirmPasswordVisibleVar, false, this, function() {
                                                    return [React.createElement(OSWidgets.Icon, {
                                                        icon: "eye-slash",
                                                        iconSize: /*FontSize*/ 0,
                                                        style: "icon",
                                                        visible: true,
                                                        _idProps: {
                                                            service: idService,
                                                            uuid: "32"
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
                                                            uuid: "33"
                                                        },
                                                        _widgetRecordProvider: widgetsRecordProvider
                                                    })];
                                                }))];
                                            }),
                                            input: new PlaceholderContent(function() {
                                                return [React.createElement(OSWidgets.Input, {
                                                    _validationProps: {
                                                        validationService: validationService,
                                                        validationParentId: idService.getId("PasswordResetForm")
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
                                                    style: "form-control login-password",
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
                                        _dependencies: [asPrimitiveValue(model.variables.confirmPasswordVar), asPrimitiveValue(model.variables.isConfirmPasswordVisibleVar)]
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.confirmPasswordVar), asPrimitiveValue(model.variables.isConfirmPasswordVisibleVar)]
                        }))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "login-button margin-top-l",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "35"
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
                                validationParentId: idService.getId("PasswordResetForm")
                            },
                            _idProps: {
                                service: idService,
                                uuid: "36",
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
                                            controller.validationService.validateWidget(idService.getId("PasswordResetForm"));
                                            return Promise.resolve().then(function() {
                                                var eventHandlerContext = callContext.clone();
                                                return controller.savePasswordOnClick$Action(controller.callContext(eventHandlerContext));
                                            });

                                            ;
                                        },
                                        style: "btn btn-primary",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "37"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        style: "osui-btn-loading__spinner-animation",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "38"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }), "Save password")];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.isButtonEnabledVar)]
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "text-align: center;"
                            },
                            style: "margin-top-m",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "39"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, "Not in the right place?", React.createElement(OSWidgets.Link, {
                            enabled: true,
                            extendedProperties: {
                                tabIndex: "5",
                                "aria-label": "Go to login page"
                            },
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                            url: OS.Navigation.generateScreenURL("tradershub", "CommonLogin", {}),
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "40"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, "Go to login."))))];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.isButtonEnabledVar), asPrimitiveValue(model.variables.isExecutingVar), asPrimitiveValue(model.variables.confirmPasswordVar), asPrimitiveValue(model.variables.isConfirmPasswordVisibleVar), asPrimitiveValue(model.variables.newPasswordVar), asPrimitiveValue(model.variables.isPasswordVisibleVar), asPrimitiveValue(model.variables.verificationCodeIn), asPrimitiveValue(model.variables.emailIn)]
            }));
        }
    }

    return View;
});
define("tradershub.Common.RecoverPasswordReset.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "System_.model", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.Common.controller", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$ShowPassword", "tradershub.controller$DoLogin", "System_.model$FinishResetPasswordResultRec", "tradershub.referencesHealth$System_"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIModel, OutSystemsUIController, System_Model, tradershubLanguageResources, tradershubClientVariables, tradershub_CommonController) {
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
            get _onToggleConfirmPasswordVisibility$Action() {
                if (!(this.hasOwnProperty("__onToggleConfirmPasswordVisibility$Action"))) {
                    this.__onToggleConfirmPasswordVisibility$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnToggleConfirmPasswordVisibility", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnToggleConfirmPasswordVisibility");
                                span.setAttribute("outsystems.function.key", "1d6f1416-e59d-4785-a0f6-447ea5c5c298");
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

            get _passwordPolicyCompliant$Action() {
                if (!(this.hasOwnProperty("__passwordPolicyCompliant$Action"))) {
                    this.__passwordPolicyCompliant$Action = function(isValidIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("PasswordPolicyCompliant", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "PasswordPolicyCompliant");
                                span.setAttribute("outsystems.function.key", "5daacc87-042d-496f-b2e5-ceeb36778e92");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("PasswordPolicyCompliant");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.Common.RecoverPasswordReset.PasswordPolicyCompliant$vars"))());
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

            get _input_ConfirmPasswordOnChange$Action() {
                if (!(this.hasOwnProperty("__input_ConfirmPasswordOnChange$Action"))) {
                    this.__input_ConfirmPasswordOnChange$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("Input_ConfirmPasswordOnChange", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "Input_ConfirmPasswordOnChange");
                                span.setAttribute("outsystems.function.key", "5eca7252-a4ae-44bb-af74-76a5230b6146");
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

            get _onToggleNewPasswordVisibility$Action() {
                if (!(this.hasOwnProperty("__onToggleNewPasswordVisibility$Action"))) {
                    this.__onToggleNewPasswordVisibility$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnToggleNewPasswordVisibility", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnToggleNewPasswordVisibility");
                                span.setAttribute("outsystems.function.key", "6b47eae9-6b58-4c2a-99b5-a23367bdea3a");
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

            get _savePasswordOnClick$Action() {
                if (!(this.hasOwnProperty("__savePasswordOnClick$Action"))) {
                    this.__savePasswordOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("SavePasswordOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "SavePasswordOnClick");
                                span.setAttribute("outsystems.function.key", "8ee08f37-32b0-43ca-87e0-c49da7dcae74");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("SavePasswordOnClick");
                                callContext = controller.callContext(callContext);
                                var doLoginVar = new OS.DataTypes.VariableHolder();
                                var finishResetPasswordVar = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    return OS.Flow.executeSequence(function() {
                                        if ((model.widgets.get(idService.getId("PasswordResetForm")).validAttr)) {
                                            return OS.Flow.executeSequence(function() {
                                                if ((model.variables.isButtonEnabledVar)) {
                                                    // IsExecuting = true
                                                    // IsExecuting = True
                                                    model.variables.isExecutingVar = true;
                                                    // Passwords match?
                                                    return OS.Flow.executeSequence(function() {
                                                        if (((model.variables.newPasswordVar === model.variables.confirmPasswordVar))) {
                                                            // Execute Action: FinishResetPassword
                                                            model.flush();
                                                            return OS.SystemActions.finishResetPassword(model.variables.emailIn, model.variables.verificationCodeIn, model.variables.newPasswordVar, callContext).then(function(value) {
                                                                finishResetPasswordVar.value = value;
                                                            }).then(function() {
                                                                // Reset successful?
                                                                return OS.Flow.executeSequence(function() {
                                                                    if ((finishResetPasswordVar.value.finishResetPasswordResultOut.successAttr)) {
                                                                        // Password changed successfully
                                                                        OS.FeedbackMessageService.showFeedbackMessage("Your password was changed successfully!", /*Success*/ 1);
                                                                        // Execute Action: DoLogin
                                                                        model.flush();
                                                                        return tradershubController.default.doLogin$Action(model.variables.emailIn, model.variables.newPasswordVar, callContext).then(function(value) {
                                                                            doLoginVar.value = value;
                                                                        }).then(function() {
                                                                            // Success?
                                                                            if ((doLoginVar.value.successOut)) {
                                                                                // Destination: /tradershub/
                                                                                return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(OS.BuiltinFunctions.getOwnerURLPath(), {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                                                                            } else {
                                                                                // Destination: /tradershub/Login
                                                                                return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "CommonLogin", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                                                                            }

                                                                        });
                                                                    } else {
                                                                        // IsExecuting = false
                                                                        // IsExecuting = False
                                                                        model.variables.isExecutingVar = false;
                                                                        // Password Complexity Failed?
                                                                        if ((finishResetPasswordVar.value.finishResetPasswordResultOut.finishResetPasswordFailureReasonAttr.passwordComplexityPolicyFailedAttr)) {
                                                                            // Password invalid
                                                                            // Input_NewPassword.Valid = False
                                                                            model.widgets.get(idService.getId("Input_NewPassword")).validAttr = false;
                                                                            // Input_NewPassword.ValidationMessage = "The password does not meet the requirements."
                                                                            model.widgets.get(idService.getId("Input_NewPassword")).validationMessageAttr = "The password does not meet the requirements.";
                                                                            // IsButtonEnabled = False
                                                                            model.variables.isButtonEnabledVar = false;
                                                                        } else {
                                                                            // Invalid Reset Token?
                                                                            if ((finishResetPasswordVar.value.finishResetPasswordResultOut.finishResetPasswordFailureReasonAttr.invalidVerificationCodeAttr)) {
                                                                                // Invalid code
                                                                                // Input_Code.Valid = False
                                                                                model.widgets.get(idService.getId("Input_Code")).validAttr = false;
                                                                                // Input_Code.ValidationMessage = "The code is invalid."
                                                                                model.widgets.get(idService.getId("Input_Code")).validationMessageAttr = "The code is invalid.";
                                                                            } else {
                                                                                // Unkown Error
                                                                                OS.FeedbackMessageService.showFeedbackMessage("An unknown error occured. Please try again later.", /*Error*/ 3);
                                                                            }

                                                                        }

                                                                    }

                                                                });
                                                            });
                                                        } else {
                                                            // Password doesn't match
                                                            // Input_ConfirmPassword.Valid = False
                                                            model.widgets.get(idService.getId("Input_ConfirmPassword")).validAttr = false;
                                                            // Input_ConfirmPassword.ValidationMessage = "Passwords doesn't match."
                                                            model.widgets.get(idService.getId("Input_ConfirmPassword")).validationMessageAttr = "Passwords doesn\'t match.";
                                                            // IsExecuting = false
                                                            // IsExecuting = False
                                                            model.variables.isExecutingVar = false;
                                                        }

                                                    });
                                                }

                                            });
                                        } else {
                                            // Disable Button
                                            // IsButtonEnabled = False
                                            model.variables.isButtonEnabledVar = false;
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

                return this.__savePasswordOnClick$Action;
            }
            set _savePasswordOnClick$Action(value) {
                this.__savePasswordOnClick$Action = value;
            }

            get _input_CodeOnChange$Action() {
                if (!(this.hasOwnProperty("__input_CodeOnChange$Action"))) {
                    this.__input_CodeOnChange$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("Input_CodeOnChange", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "Input_CodeOnChange");
                                span.setAttribute("outsystems.function.key", "d76a7e1a-9641-4607-8a3d-e1ae1c1ddb89");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("Input_CodeOnChange");
                                callContext = controller.callContext(callContext);
                                // Execute Action: SetIsButtonEnabled
                                controller._setIsButtonEnabled$Action(callContext);
                                // IsEmpty
                                if (((model.variables.verificationCodeIn === ""))) {
                                    // ClearErrors
                                    // Input_Code.Valid = True
                                    model.widgets.get(idService.getId("Input_Code")).validAttr = true;
                                    // Input_Code.ValidationMessage = ""
                                    model.widgets.get(idService.getId("Input_Code")).validationMessageAttr = "";
                                }

                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__input_CodeOnChange$Action;
            }
            set _input_CodeOnChange$Action(value) {
                this.__input_CodeOnChange$Action = value;
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
                                span.setAttribute("outsystems.function.key", "f0bf0d0f-6564-4593-957b-d6e4b44703ee");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("SetIsButtonEnabled");
                                callContext = controller.callContext(callContext);
                                // Is Code Empty?
                                if (((model.variables.verificationCodeIn === ""))) {
                                    // DisableButton
                                    // IsButtonEnabled = False
                                    model.variables.isButtonEnabledVar = false;
                                } else {
                                    // Is NewPassword Empty?
                                    if (((model.variables.newPasswordVar === ""))) {
                                        // DisableButton
                                        // IsButtonEnabled = False
                                        model.variables.isButtonEnabledVar = false;
                                    } else {
                                        // Is NewPassword Compliant?
                                        if ((model.variables.isNewPasswordCompliantVar)) {
                                            // Is ConfirmPassword Empty?
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


            onToggleConfirmPasswordVisibility$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnToggleConfirmPasswordVisibility__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnToggleConfirmPasswordVisibility");
                        span.setAttribute("outsystems.function.key", "1d6f1416-e59d-4785-a0f6-447ea5c5c298");
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

            passwordPolicyCompliant$Action(isValidIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("PasswordPolicyCompliant__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "PasswordPolicyCompliant");
                        span.setAttribute("outsystems.function.key", "5daacc87-042d-496f-b2e5-ceeb36778e92");
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

            input_ConfirmPasswordOnChange$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("Input_ConfirmPasswordOnChange__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "Input_ConfirmPasswordOnChange");
                        span.setAttribute("outsystems.function.key", "5eca7252-a4ae-44bb-af74-76a5230b6146");
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

            onToggleNewPasswordVisibility$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnToggleNewPasswordVisibility__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnToggleNewPasswordVisibility");
                        span.setAttribute("outsystems.function.key", "6b47eae9-6b58-4c2a-99b5-a23367bdea3a");
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

            savePasswordOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("SavePasswordOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SavePasswordOnClick");
                        span.setAttribute("outsystems.function.key", "8ee08f37-32b0-43ca-87e0-c49da7dcae74");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._savePasswordOnClick$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            input_CodeOnChange$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("Input_CodeOnChange__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "Input_CodeOnChange");
                        span.setAttribute("outsystems.function.key", "d76a7e1a-9641-4607-8a3d-e1ae1c1ddb89");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._input_CodeOnChange$Action, callContext);
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
                        span.setAttribute("outsystems.function.key", "f0bf0d0f-6564-4593-957b-d6e4b44703ee");
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
                        return tradershub_CommonController.default.handleError(ex, this.callContext());
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
        Controller.registerVariableGroupType("tradershub.Common.RecoverPasswordReset.PasswordPolicyCompliant$vars", [{
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