define("tradershub.Common.PasswordPolicy.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "System_.model", "System_.model$PasswordValidationResultRec", "tradershub.referencesHealth", "tradershub.referencesHealth$System_", "System_.model$PasswordComplexityPolicyRec"], function(OSRuntimeCore, tradershubModel, System_Model) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("PasswordValidationResult", "passwordValidationResultVar", "PasswordValidationResult", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.SystemStructures.PasswordValidationResultRec());
                    }, false, OS.SystemStructures.PasswordValidationResultRec),
                    this.attr("PasswordComplexityPolicy", "passwordComplexityPolicyVar", "PasswordComplexityPolicy", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.SystemStructures.PasswordComplexityPolicyRec());
                    }, false, OS.SystemStructures.PasswordComplexityPolicyRec),
                    this.attr("IsPasswordEmpty", "isPasswordEmptyVar", "IsPasswordEmpty", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, false),
                    this.attr("MaxLength", "maxLengthVar", "MaxLength", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 25;
                    }, false),
                    this.attr("Password", "passwordIn", "Password", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("_passwordInDataFetchStatus", "_passwordInDataFetchStatus", "_passwordInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("Length", "lengthIn", "Length", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, false),
                    this.attr("_lengthInDataFetchStatus", "_lengthInDataFetchStatus", "_lengthInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("HasAtLeastUppercaseAndLowercase", "hasAtLeastUppercaseAndLowercaseIn", "HasAtLeastUppercaseAndLowercase", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, false),
                    this.attr("_hasAtLeastUppercaseAndLowercaseInDataFetchStatus", "_hasAtLeastUppercaseAndLowercaseInDataFetchStatus", "_hasAtLeastUppercaseAndLowercaseInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("HasAtLeastOneNumber", "hasAtLeastOneNumberIn", "HasAtLeastOneNumber", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, false),
                    this.attr("_hasAtLeastOneNumberInDataFetchStatus", "_hasAtLeastOneNumberInDataFetchStatus", "_hasAtLeastOneNumberInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("HasAtLeastOneSpecialCharacter", "hasAtLeastOneSpecialCharacterIn", "HasAtLeastOneSpecialCharacter", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, false),
                    this.attr("_hasAtLeastOneSpecialCharacterInDataFetchStatus", "_hasAtLeastOneSpecialCharacterInDataFetchStatus", "_hasAtLeastOneSpecialCharacterInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("Type", "typeIn", "Type", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("_typeInDataFetchStatus", "_typeInDataFetchStatus", "_typeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
            if ("Password" in inputs) {
                this.variables.passwordIn = inputs.Password;
                if ("_passwordInDataFetchStatus" in inputs) {
                    this.variables._passwordInDataFetchStatus = inputs._passwordInDataFetchStatus;
                }

            }

            if ("Length" in inputs) {
                this.variables.lengthIn = inputs.Length;
                if ("_lengthInDataFetchStatus" in inputs) {
                    this.variables._lengthInDataFetchStatus = inputs._lengthInDataFetchStatus;
                }

            }

            if ("HasAtLeastUppercaseAndLowercase" in inputs) {
                this.variables.hasAtLeastUppercaseAndLowercaseIn = inputs.HasAtLeastUppercaseAndLowercase;
                if ("_hasAtLeastUppercaseAndLowercaseInDataFetchStatus" in inputs) {
                    this.variables._hasAtLeastUppercaseAndLowercaseInDataFetchStatus = inputs._hasAtLeastUppercaseAndLowercaseInDataFetchStatus;
                }

            }

            if ("HasAtLeastOneNumber" in inputs) {
                this.variables.hasAtLeastOneNumberIn = inputs.HasAtLeastOneNumber;
                if ("_hasAtLeastOneNumberInDataFetchStatus" in inputs) {
                    this.variables._hasAtLeastOneNumberInDataFetchStatus = inputs._hasAtLeastOneNumberInDataFetchStatus;
                }

            }

            if ("HasAtLeastOneSpecialCharacter" in inputs) {
                this.variables.hasAtLeastOneSpecialCharacterIn = inputs.HasAtLeastOneSpecialCharacter;
                if ("_hasAtLeastOneSpecialCharacterInDataFetchStatus" in inputs) {
                    this.variables._hasAtLeastOneSpecialCharacterInDataFetchStatus = inputs._hasAtLeastOneSpecialCharacterInDataFetchStatus;
                }

            }

            if ("Type" in inputs) {
                this.variables.typeIn = inputs.Type;
                if ("_typeInDataFetchStatus" in inputs) {
                    this.variables._typeInDataFetchStatus = inputs._typeInDataFetchStatus;
                }

            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("tradershub.Common.PasswordPolicy.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "System_.model", "react", "@outsystems/runtime-view-js", "tradershub.Common.PasswordPolicy.mvc$model", "tradershub.Common.PasswordPolicy.mvc$controller", "tradershub.clientVariables", "@outsystems/runtime-widgets-js", "System_.model$PasswordValidationResultRec", "tradershub.referencesHealth", "tradershub.referencesHealth$System_", "System_.model$PasswordComplexityPolicyRec"], function(OSRuntimeCore, tradershubModel, tradershubController, System_Model, React, OSView, tradershub_Common_PasswordPolicy_mvc_model, tradershub_Common_PasswordPolicy_mvc_controller, tradershubClientVariables, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "Common.PasswordPolicy";
        }

        static getAttributes() {
            return {
                codeFunction: "PasswordPolicy",
                functionKey: "76c7b8fa-a131-48fb-bdf4-11fbe43c11c5",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.Common.PasswordPolicy.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [];
        }

        get modelFactory() {
            return tradershub_Common_PasswordPolicy_mvc_model;
        }

        get controllerFactory() {
            return tradershub_Common_PasswordPolicy_mvc_controller;
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
                style: "font-size-xs",
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
                    style: "display: flex; flex-direction: column; gap: 6px;"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $if(model.variables.passwordComplexityPolicyVar.numberRequiredAttr, false, this, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "align-items: center; display: flex; gap: 8px; text-align: left;"
                    },
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "2"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    gridProperties: {
                        classes: "OSInline",
                        marginLeft: "0"
                    },
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "3"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, $if(model.variables.isPasswordEmptyVar, false, this, function() {
                    return [React.createElement(OSWidgets.Icon, {
                        extendedProperties: {
                            style: "color: #6A7178; font-size: 15px; height: 15px; padding: 0px; width: 15px;"
                        },
                        icon: "circle-thin",
                        iconSize: /*FontSize*/ 0,
                        style: "icon",
                        visible: true,
                        _idProps: {
                            service: idService,
                            uuid: "4"
                        },
                        _widgetRecordProvider: widgetsRecordProvider
                    })];
                }, function() {
                    return [$if(model.variables.passwordValidationResultVar.missingMinimumLengthAttr, false, this, function() {
                        return [React.createElement(OSWidgets.Icon, {
                            extendedProperties: {
                                style: "color: #dc2020; font-size: 15px; height: 15px; width: 15px;"
                            },
                            gridProperties: {
                                marginLeft: "0"
                            },
                            icon: "times-circle",
                            iconSize: /*FontSize*/ 0,
                            style: "icon",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "5"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    }, function() {
                        return [React.createElement(OSWidgets.Icon, {
                            extendedProperties: {
                                style: "color: #29823b; font-size: 15px; height: 15px; width: 15px;"
                            },
                            gridProperties: {
                                marginLeft: "0"
                            },
                            icon: "check-circle",
                            iconSize: /*FontSize*/ 0,
                            style: "icon",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "6"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    })];
                })), React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    gridProperties: {
                        classes: "OSInline",
                        marginLeft: "0"
                    },
                    style: model.getCachedValue(idService.getId("0Ro2y1Tbmk6XRemruVNrrg.Style"), function() {
                        return ((!(model.variables.isPasswordEmptyVar)) ? (((model.variables.passwordValidationResultVar.missingMinimumLengthAttr) ? ("password-policy__rule--error") : ("password-policy__rule--success"))) : (""));
                    }, function() {
                        return model.variables.isPasswordEmptyVar;
                    }, function() {
                        return model.variables.passwordValidationResultVar.missingMinimumLengthAttr;
                    }),
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "7"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Expression, {
                    extendedProperties: {
                        style: "color: #6A7178; font-size: 12px;"
                    },
                    gridProperties: {
                        marginLeft: "0"
                    },
                    value: (model.variables.passwordComplexityPolicyVar.minimumLengthAttr).toString(),
                    _idProps: {
                        service: idService,
                        uuid: "8"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }), React.createElement(OSWidgets.Text, {
                    extendedProperties: {
                        style: "color: #6A7178; font-size: 12px;"
                    },
                    text: ["-25 characters long"],
                    _idProps: {
                        service: idService,
                        uuid: "9"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })))];
            }, function() {
                return [];
            }), $if((model.variables.passwordComplexityPolicyVar.upperCaseLetterRequiredAttr && model.variables.passwordComplexityPolicyVar.lowerCaseLetterRequiredAttr), false, this, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "align-items: center; display: flex; gap: 8px; text-align: left;"
                    },
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "10"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    gridProperties: {
                        classes: "OSInline",
                        marginLeft: "0"
                    },
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "11"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, $if(model.variables.isPasswordEmptyVar, false, this, function() {
                    return [React.createElement(OSWidgets.Icon, {
                        extendedProperties: {
                            style: "color: #6A7178; font-size: 15px; height: 15px; padding: 0px; width: 15px;"
                        },
                        icon: "circle-thin",
                        iconSize: /*FontSize*/ 0,
                        style: "icon",
                        visible: true,
                        _idProps: {
                            service: idService,
                            uuid: "12"
                        },
                        _widgetRecordProvider: widgetsRecordProvider
                    })];
                }, function() {
                    return [$if((model.variables.passwordValidationResultVar.missingUpperCaseLetterAttr || model.variables.passwordValidationResultVar.missingLowerCaseLetterAttr), false, this, function() {
                        return [React.createElement(OSWidgets.Icon, {
                            extendedProperties: {
                                style: "color: #dc2020; font-size: 15px; width: 15px;"
                            },
                            gridProperties: {
                                marginLeft: "0"
                            },
                            icon: "times-circle",
                            iconSize: /*FontSize*/ 0,
                            style: "icon",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "13"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    }, function() {
                        return [React.createElement(OSWidgets.Icon, {
                            extendedProperties: {
                                style: "color: #29823b; font-size: 15px; height: 15px; width: 15px;"
                            },
                            gridProperties: {
                                marginLeft: "0"
                            },
                            icon: "check-circle",
                            iconSize: /*FontSize*/ 0,
                            style: "icon",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "14"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    })];
                })), React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: model.getCachedValue(idService.getId("b9pK35IyIkCFb0Ji72U39Q.Style"), function() {
                        return ((!(model.variables.isPasswordEmptyVar)) ? ((((model.variables.passwordValidationResultVar.missingLowerCaseLetterAttr || model.variables.passwordValidationResultVar.missingUpperCaseLetterAttr)) ? ("password-policy__rule--error") : ("password-policy__rule--success"))) : (""));
                    }, function() {
                        return model.variables.isPasswordEmptyVar;
                    }, function() {
                        return model.variables.passwordValidationResultVar.missingLowerCaseLetterAttr;
                    }, function() {
                        return model.variables.passwordValidationResultVar.missingUpperCaseLetterAttr;
                    }),
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "15"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Text, {
                    extendedProperties: {
                        style: "color: #6A7178; font-size: 12px;"
                    },
                    text: ["At least one uppercase letter and one lowercase letter"],
                    _idProps: {
                        service: idService,
                        uuid: "16"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })))];
            }, function() {
                return [];
            }), $if(model.variables.passwordComplexityPolicyVar.numberRequiredAttr, false, this, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "align-items: center; display: flex; gap: 8px; text-align: left;"
                    },
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "17"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    gridProperties: {
                        classes: "OSInline",
                        marginLeft: "0"
                    },
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "18"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, $if(model.variables.isPasswordEmptyVar, false, this, function() {
                    return [React.createElement(OSWidgets.Icon, {
                        extendedProperties: {
                            style: "color: #6A7178; font-size: 15px; height: 15px; padding: 0px; width: 15px;"
                        },
                        icon: "circle-thin",
                        iconSize: /*FontSize*/ 0,
                        style: "icon",
                        visible: true,
                        _idProps: {
                            service: idService,
                            uuid: "19"
                        },
                        _widgetRecordProvider: widgetsRecordProvider
                    })];
                }, function() {
                    return [$if(model.variables.passwordValidationResultVar.missingNumberAttr, false, this, function() {
                        return [React.createElement(OSWidgets.Icon, {
                            extendedProperties: {
                                style: "color: #dc2020; font-size: 15px; width: 15px;"
                            },
                            gridProperties: {
                                marginLeft: "0"
                            },
                            icon: "times-circle",
                            iconSize: /*FontSize*/ 0,
                            style: "icon",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "20"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    }, function() {
                        return [React.createElement(OSWidgets.Icon, {
                            extendedProperties: {
                                style: "color: #29823b; font-size: 15px; height: 15px; width: 15px;"
                            },
                            gridProperties: {
                                marginLeft: "0"
                            },
                            icon: "check-circle",
                            iconSize: /*FontSize*/ 0,
                            style: "icon",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "21"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })];
                    })];
                })), React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    gridProperties: {
                        classes: "OSInline"
                    },
                    style: model.getCachedValue(idService.getId("A9hrM8EHI02iy4ZeUKPZtw.Style"), function() {
                        return ((!(model.variables.isPasswordEmptyVar)) ? (((model.variables.passwordValidationResultVar.missingNumberAttr) ? ("password-policy__rule--error") : ("password-policy__rule--success"))) : (""));
                    }, function() {
                        return model.variables.isPasswordEmptyVar;
                    }, function() {
                        return model.variables.passwordValidationResultVar.missingNumberAttr;
                    }),
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "22"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Text, {
                    extendedProperties: {
                        style: "color: #6A7178; font-size: 12px;"
                    },
                    text: ["At least one number"],
                    _idProps: {
                        service: idService,
                        uuid: "23"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })))];
            }, function() {
                return [];
            }))));
        }
    }

    return View;
});
define("tradershub.Common.PasswordPolicy.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "System_.model", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.Common.PasswordPolicy.mvc$controller.OnParametersChanged.checkValidJS", "System_.model$PasswordValidationResultRec", "tradershub.referencesHealth", "tradershub.referencesHealth$System_", "System_.model$PasswordComplexityPolicyRec"], function(OSRuntimeCore, tradershubModel, tradershubController, System_Model, tradershubLanguageResources, tradershubClientVariables, tradershub_Common_PasswordPolicy_mvc_controller_OnParametersChanged_checkValidJS) {
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
            get _onParametersChanged$Action() {
                if (!(this.hasOwnProperty("__onParametersChanged$Action"))) {
                    this.__onParametersChanged$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnParametersChanged", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnParametersChanged");
                                span.setAttribute("outsystems.function.key", "4aa89cbb-07b2-47bc-ab2a-73d36caea85a");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnParametersChanged");
                                callContext = controller.callContext(callContext);
                                var checkValidJSResult = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    // IsPasswordEmpty = Length = 0
                                    model.variables.isPasswordEmptyVar = (OS.BuiltinFunctions.length(model.variables.passwordIn) === 0);
                                    checkValidJSResult.value = OS.Logger.startActiveSpan("checkValid", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "checkValid");
                                            span.setAttribute("outsystems.function.key", "672caa3e-132a-49ff-b3f4-612d58c03a34");
                                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                        }

                                        try {
                                            return controller.safeExecuteJSNode(tradershub_Common_PasswordPolicy_mvc_controller_OnParametersChanged_checkValidJS, "checkValid", "OnParametersChanged", {
                                                RequiresLowerCaseAndUpperCase: OS.DataConversion.JSNodeParamConverter.to(model.variables.hasAtLeastUppercaseAndLowercaseIn, OS.DataTypes.DataTypes.Boolean),
                                                RequiresNumber: OS.DataConversion.JSNodeParamConverter.to(model.variables.hasAtLeastOneNumberIn, OS.DataTypes.DataTypes.Boolean),
                                                String: OS.DataConversion.JSNodeParamConverter.to(model.variables.passwordIn, OS.DataTypes.DataTypes.Text),
                                                RequiresSpecialChar: OS.DataConversion.JSNodeParamConverter.to(model.variables.hasAtLeastOneSpecialCharacterIn, OS.DataTypes.DataTypes.Boolean),
                                                MaxLength: OS.DataConversion.JSNodeParamConverter.to(model.variables.maxLengthVar, OS.DataTypes.DataTypes.Integer),
                                                Length: OS.DataConversion.JSNodeParamConverter.to(model.variables.lengthIn, OS.DataTypes.DataTypes.Integer),
                                                HasLowerCase: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
                                                HasUpperCase: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
                                                HasNumber: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
                                                hasGoodLength: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
                                                hasSpecialChar: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                                            }, function($parameters) {
                                                var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.Common.PasswordPolicy.OnParametersChanged$checkValidJSResult"))();
                                                jsNodeResult.hasLowerCaseOut = OS.DataConversion.JSNodeParamConverter.from($parameters.HasLowerCase, OS.DataTypes.DataTypes.Boolean);
                                                jsNodeResult.hasUpperCaseOut = OS.DataConversion.JSNodeParamConverter.from($parameters.HasUpperCase, OS.DataTypes.DataTypes.Boolean);
                                                jsNodeResult.hasNumberOut = OS.DataConversion.JSNodeParamConverter.from($parameters.HasNumber, OS.DataTypes.DataTypes.Boolean);
                                                jsNodeResult.hasGoodLengthOut = OS.DataConversion.JSNodeParamConverter.from($parameters.hasGoodLength, OS.DataTypes.DataTypes.Boolean);
                                                jsNodeResult.hasSpecialCharOut = OS.DataConversion.JSNodeParamConverter.from($parameters.hasSpecialChar, OS.DataTypes.DataTypes.Boolean);
                                                return jsNodeResult;
                                            }, {}, {});
                                        } finally {
                                            if (span) {
                                                span.end();
                                            }

                                        }

                                    }, 1);
                                    // PasswordValidationResult
                                    // PasswordValidationResult.IsValid = checkValid.HasLowerCase and checkValid.HasUpperCase and checkValid.HasNumber and checkValid.hasGoodLength
                                    model.variables.passwordValidationResultVar.isValidAttr = (((checkValidJSResult.value.hasLowerCaseOut && checkValidJSResult.value.hasUpperCaseOut) && checkValidJSResult.value.hasNumberOut) && checkValidJSResult.value.hasGoodLengthOut);
                                    // PasswordValidationResult.MissingLowerCaseLetter = notcheckValid.HasLowerCase
                                    model.variables.passwordValidationResultVar.missingLowerCaseLetterAttr = !(checkValidJSResult.value.hasLowerCaseOut);
                                    // PasswordValidationResult.MissingMinimumLength = notcheckValid.hasGoodLength
                                    model.variables.passwordValidationResultVar.missingMinimumLengthAttr = !(checkValidJSResult.value.hasGoodLengthOut);
                                    // PasswordValidationResult.MissingUpperCaseLetter = notcheckValid.HasUpperCase
                                    model.variables.passwordValidationResultVar.missingUpperCaseLetterAttr = !(checkValidJSResult.value.hasUpperCaseOut);
                                    // PasswordValidationResult.MissingNumber = notcheckValid.HasNumber
                                    model.variables.passwordValidationResultVar.missingNumberAttr = !(checkValidJSResult.value.hasNumberOut);
                                    // PasswordValidationResult.MissingSpecialCharacter = notcheckValid.hasSpecialChar
                                    model.variables.passwordValidationResultVar.missingSpecialCharacterAttr = !(checkValidJSResult.value.hasSpecialCharOut);
                                    // Trigger Event: Compliant
                                    return controller.compliant$Action(model.variables.passwordValidationResultVar.isValidAttr, callContext).then(function() {
                                        if (((model.variables.typeIn === "RESET"))) {
                                            // IsResetPasswordValid = PasswordValidationResult.IsValid
                                            tradershubClientVariables.setIsResetPasswordValid(model.variables.passwordValidationResultVar.isValidAttr);
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

                return this.__onParametersChanged$Action;
            }
            set _onParametersChanged$Action(value) {
                this.__onParametersChanged$Action = value;
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
                                span.setAttribute("outsystems.function.key", "f86df108-c127-48f6-9f30-028b52b1a3d0");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnInitialize");
                                callContext = controller.callContext(callContext);
                                // PasswordComplexityPolicy
                                // PasswordComplexityPolicy.MinimumLength = Length
                                model.variables.passwordComplexityPolicyVar.minimumLengthAttr = model.variables.lengthIn;
                                // PasswordComplexityPolicy.UpperCaseLetterRequired = HasAtLeastUppercaseAndLowercase
                                model.variables.passwordComplexityPolicyVar.upperCaseLetterRequiredAttr = model.variables.hasAtLeastUppercaseAndLowercaseIn;
                                // PasswordComplexityPolicy.LowerCaseLetterRequired = HasAtLeastUppercaseAndLowercase
                                model.variables.passwordComplexityPolicyVar.lowerCaseLetterRequiredAttr = model.variables.hasAtLeastUppercaseAndLowercaseIn;
                                // PasswordComplexityPolicy.NumberRequired = HasAtLeastOneNumber
                                model.variables.passwordComplexityPolicyVar.numberRequiredAttr = model.variables.hasAtLeastOneNumberIn;
                                // PasswordComplexityPolicy.SpecialCharacterRequired = HasAtLeastOneSpecialCharacter
                                model.variables.passwordComplexityPolicyVar.specialCharacterRequiredAttr = model.variables.hasAtLeastOneSpecialCharacterIn;
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


            onParametersChanged$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnParametersChanged__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnParametersChanged");
                        span.setAttribute("outsystems.function.key", "4aa89cbb-07b2-47bc-ab2a-73d36caea85a");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);
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
                        span.setAttribute("outsystems.function.key", "f86df108-c127-48f6-9f30-028b52b1a3d0");
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

            get compliant$Action() {
                if (!(this.hasOwnProperty("_compliant$Action"))) {
                    this._compliant$Action = function() {
                        return Promise.resolve();
                    };
                }

                return this._compliant$Action;
            }
            set compliant$Action(value) {
                this._compliant$Action = value;
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
                    this._onParametersChangedEventHandler = function(callContext) {
                        var controller = this.controller;
                        var model = this.model;
                        var idService = this.idService;

                        return controller.onParametersChanged$Action(callContext);

                    };
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
        Controller.registerVariableGroupType("tradershub.Common.PasswordPolicy.OnParametersChanged$checkValidJSResult", [{
            name: "HasLowerCase",
            attrName: "hasLowerCaseOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }, {
            name: "HasUpperCase",
            attrName: "hasUpperCaseOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }, {
            name: "HasNumber",
            attrName: "hasNumberOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }, {
            name: "hasGoodLength",
            attrName: "hasGoodLengthOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }, {
            name: "hasSpecialChar",
            attrName: "hasSpecialCharOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});

define("tradershub.Common.PasswordPolicy.mvc$controller.OnParametersChanged.checkValidJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        function hasLowerCase(str) {
            return str.toUpperCase() != str;
        }

        function containsUppercase(str) {
            return /[A-Z]/.test(str);
        }

        function hasNumber(str) {
            return /\d/.test(str);
        }

        function hasGoodLength(str) {
            return str.length >= $parameters.Length && str.length <= $parameters.MaxLength;
        }

        function hasSpecialChar(str) {
            var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
            return format.test(str);
        }


        $parameters.HasLowerCase = $parameters.RequiresLowerCaseAndUpperCase ? hasLowerCase($parameters.String) : true;
        $parameters.HasUpperCase = $parameters.RequiresLowerCaseAndUpperCase ? containsUppercase($parameters.String) : true;
        $parameters.HasNumber = $parameters.RequiresNumber ? hasNumber($parameters.String) : true;
        $parameters.hasGoodLength = $parameters.RequiresNumber ? hasGoodLength($parameters.String) : true;
        $parameters.hasSpecialChar = $parameters.RequiresSpecialChar ? hasSpecialChar($parameters.String) : true;

    };
});