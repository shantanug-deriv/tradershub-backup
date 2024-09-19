define("PartnersHub.RealAccountCreationFlow.PersonalDetailsBlock.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "OutSystemsUI.model", "PartnersHub.controller", "OutSystemsUI.model$ST_bc4abb4233d9ce894e855c520a20c76fStructure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "PartnersHub.model$ST_b5010cf570b4e39f4aa14db0ae11cfbfStructure", "PartnersHub.model$ST_24f25c56883af3fb98f750bd4c11bbdcStructure", "PartnersHub.controller$UseDevice", "PartnersHub.controller$NextStepReal"], function(OSRuntimeCore, PartnersHubModel, OutSystemsUIModel, PartnersHubController) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
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
                FirstName2: OS.Model.ValidationWidgetRecord,
                LastName2: OS.Model.ValidationWidgetRecord,
                Form2: OS.Model.ValidationWidgetRecord,
                FirstName3: OS.Model.ValidationWidgetRecord,
                LastName3: OS.Model.ValidationWidgetRecord,
                Input_DateOfBirth: OS.Model.ValidationWidgetRecord
            };
        }

    }

    class Model extends
    OS.Model.VariablelessViewModel {
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

define("PartnersHub.RealAccountCreationFlow.PersonalDetailsBlock.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "OutSystemsUI.model", "react", "@outsystems/runtime-view-js", "PartnersHub.RealAccountCreationFlow.PersonalDetailsBlock.mvc$model", "PartnersHub.RealAccountCreationFlow.PersonalDetailsBlock.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "OutSystemsUI.Interaction.DatePicker.mvc$view", "PartnersHub.RealAccountCreationFlow.DateOfBirthContainer.mvc$view", "OutSystemsUI.model$ST_bc4abb4233d9ce894e855c520a20c76fStructure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "PartnersHub.model$ST_b5010cf570b4e39f4aa14db0ae11cfbfStructure", "PartnersHub.model$ST_24f25c56883af3fb98f750bd4c11bbdcStructure", "PartnersHub.controller$UseDevice", "PartnersHub.controller$NextStepReal"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, OutSystemsUIModel, React, OSView, PartnersHub_RealAccountCreationFlow_PersonalDetailsBlock_mvc_model, PartnersHub_RealAccountCreationFlow_PersonalDetailsBlock_mvc_controller, PartnersHubClientVariables, OSWidgets, OutSystemsUI_Interaction_DatePicker_mvc_view, PartnersHub_RealAccountCreationFlow_DateOfBirthContainer_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "RealAccountCreationFlow.PersonalDetailsBlock";
        }

        static getAttributes() {
            return {
                codeFunction: "PersonalDetailsBlock",
                functionKey: "f15ae0ac-0ed6-4a11-9aee-54274e8dd27a",
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
            return [OutSystemsUI_Interaction_DatePicker_mvc_view, PartnersHub_RealAccountCreationFlow_DateOfBirthContainer_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_RealAccountCreationFlow_PersonalDetailsBlock_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_RealAccountCreationFlow_PersonalDetailsBlock_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), $if(PartnersHubClientVariables.getIsMobile(), false, this, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: true,
                    visible: (PartnersHubClientVariables.getisDateOfBirthVisible() === false),
                    _idProps: {
                        service: idService,
                        uuid: "0"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Form, {
                    _validationProps: {
                        validationService: validationService
                    },
                    extendedProperties: {
                        style: "display: flex; flex-direction: column; gap: 16px;"
                    },
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    style: "",
                    _idProps: {
                        service: idService,
                        name: "Form1"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "display: flex; flex-direction: column; gap: 4px;"
                    },
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "2"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Label, {
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    _idProps: {
                        service: idService,
                        uuid: "3"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, $text(getTranslation("0T3Wi9jMUEaxXFsiJf7cxQ#Value", "First (and middle) name"))), React.createElement(OSWidgets.Input, {
                    _validationProps: {
                        validationService: validationService,
                        validationParentId: idService.getId("Form1")
                    },
                    enabled: true,
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    inputType: /*Text*/ 0,
                    mandatory: true,
                    maxLength: 50,
                    prompt: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("hBJlxfgynUmzZ9AhSwOZXw#ValueExpression.1197690936.1", "First (and middle) name"),
                    style: "form-control",
                    variable: model.createVariable(OS.DataTypes.DataTypes.Text, PartnersHubClientVariables.getRealSignupFirstName(), function(value) {
                        PartnersHubClientVariables.setRealSignupFirstName(value);
                    }),
                    _idProps: {
                        service: idService,
                        name: "FirstName2"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })), React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "display: flex; flex-direction: column; gap: 4px;"
                    },
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "5"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Label, {
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    _idProps: {
                        service: idService,
                        uuid: "6"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, $text(getTranslation("zjJ1q5jYdkymqdJ0Ew8BAg#Value", "Last name"))), React.createElement(OSWidgets.Input, {
                    _validationProps: {
                        validationService: validationService,
                        validationParentId: idService.getId("Form1")
                    },
                    enabled: true,
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    inputType: /*Text*/ 0,
                    mandatory: true,
                    maxLength: 50,
                    prompt: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("16HlsEFl20aowcu+AUX2nQ#ValueExpression.1572233360.1", "Enter your last name"),
                    style: "form-control",
                    variable: model.createVariable(OS.DataTypes.DataTypes.Text, PartnersHubClientVariables.getRealSignupLastName(), function(value) {
                        PartnersHubClientVariables.setRealSignupLastName(value);
                    }),
                    _idProps: {
                        service: idService,
                        name: "LastName2"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })), React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "align-items: center; align-self: stretch; background: var(--Semantic-Info-Light, #E5F5FC); border-radius: 4px; display: flex; gap: 8px; padding: 16px;"
                    },
                    gridProperties: {
                        classes: "OSInline"
                    },
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "8"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Image, {
                    extendedProperties: {
                        style: "font-size: 8px;"
                    },
                    gridProperties: {
                        width: "20px"
                    },
                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.info_black.svg"),
                    type: /*Static*/ 0,
                    _idProps: {
                        service: idService,
                        uuid: "9"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }), React.createElement(OSWidgets.Label, {
                    extendedProperties: {
                        style: "font-size: 12px;"
                    },
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    _idProps: {
                        service: idService,
                        uuid: "10"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Text, {
                    extendedProperties: {
                        style: "margin-right: 4px;"
                    },
                    text: [$text(getTranslation("4_2LZ2b5xEyZNd4uy9iZww#Value", "Enter your"))],
                    _idProps: {
                        service: idService,
                        uuid: "11"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }), React.createElement(OSWidgets.Text, {
                    extendedProperties: {
                        style: "font-weight: bold; margin-right: 4px;"
                    },
                    text: [$text(getTranslation("J0V3L+sIAEqTue6JXMGP3A#Value", "name"))],
                    _idProps: {
                        service: idService,
                        uuid: "12"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }), $text(getTranslation("aP1vS54I5k2xlwZGB0k6Hw#Value", "exactly as it appears on your identity document.")))), React.createElement(OSWidgets.Image, {
                    gridProperties: {
                        classes: "OSFillParent",
                        marginLeft: "0"
                    },
                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.identitycardname.svg"),
                    type: /*Static*/ 0,
                    _idProps: {
                        service: idService,
                        uuid: "13"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }), React.createElement(OSWidgets.Button, {
                    enabled: true,
                    extendedProperties: {
                        style: "align-items: center; align-self: stretch; background: var(--core-color-solid-coral-700, #FF444F); border: none; border-radius: 100px; cursor: pointer; display: flex; gap: 8px; height: 48px; justify-content: center; padding: 0px 16px;"
                    },
                    isDefault: false,
                    onClick: function() {
                        controller.validationService.validateWidget(idService.getId("Form1"));
                        var eventHandlerContext = callContext.clone();
                        controller.openDateOfBirthContainer$Action(controller.callContext(eventHandlerContext));


                        ;
                    },
                    style: "\"btn\"",
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "14"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Text, {
                    extendedProperties: {
                        style: "color: #f3f6f8; font-size: 16px; font-weight: bold;"
                    },
                    text: [$text(getTranslation("RG70PEg8yEyXExOyPJcC6w#Value", "Next"))],
                    _idProps: {
                        service: idService,
                        uuid: "15"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }))))];
            }, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "display: flex; flex-direction: column; gap: 24px;"
                    },
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "16"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "align-items: center; align-self: stretch; background: var(--Semantic-Info-Light, #E5F5FC); border-radius: 4px; display: flex; gap: 8px; padding: 16px;"
                    },
                    gridProperties: {
                        classes: "OSInline"
                    },
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "17"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Image, {
                    extendedProperties: {
                        style: "font-size: 8px;"
                    },
                    gridProperties: {
                        width: "20px"
                    },
                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.info_black.svg"),
                    type: /*Static*/ 0,
                    _idProps: {
                        service: idService,
                        uuid: "18"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }), React.createElement(OSWidgets.Label, {
                    extendedProperties: {
                        style: "font-size: 12px;"
                    },
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    _idProps: {
                        service: idService,
                        uuid: "19"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Text, {
                    extendedProperties: {
                        style: "margin-right: 4px;"
                    },
                    text: [$text(getTranslation("bjOi2lIQ_EqD3rHVXQZfsg#Value", "Enter your"))],
                    _idProps: {
                        service: idService,
                        uuid: "20"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }), React.createElement(OSWidgets.Text, {
                    extendedProperties: {
                        style: "font-weight: bold; margin-right: 4px;"
                    },
                    text: [$text(getTranslation("BH4xaTTRpkCbML18NugkfA#Value", "name"))],
                    _idProps: {
                        service: idService,
                        uuid: "21"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }), React.createElement(OSWidgets.Text, {
                    extendedProperties: {
                        style: "font-weight: normal; margin-right: 4px;"
                    },
                    text: [$text(getTranslation("jjo7zQDjKEOzEB8rpTtC5Q#Value", "and"))],
                    _idProps: {
                        service: idService,
                        uuid: "22"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }), React.createElement(OSWidgets.Text, {
                    extendedProperties: {
                        style: "font-weight: bold; margin-right: 4px;"
                    },
                    text: [$text(getTranslation("bfHfU4sxB0uZYsBvXwcV0g#Value", "date of birth"))],
                    _idProps: {
                        service: idService,
                        uuid: "23"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }), $text(getTranslation("WGq0RVZ5r0yEEwsOsR4JlA#Value", "exactly as it appears on your identity document.")))), React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "display: flex; gap: 24px;"
                    },
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "24"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Form, {
                    _validationProps: {
                        validationService: validationService
                    },
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    style: "",
                    _idProps: {
                        service: idService,
                        name: "Form2"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "display: flex; flex-direction: column; gap: 16px;"
                    },
                    gridProperties: {
                        classes: "OSInline",
                        width: "100%"
                    },
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "26"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "display: flex; flex-direction: column; gap: 4px;"
                    },
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "27"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Label, {
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    _idProps: {
                        service: idService,
                        uuid: "28"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, $text(getTranslation("2mZm2HFVgEyXiVPF5ncAMA#Value", "First (and middle) name"))), React.createElement(OSWidgets.Input, {
                    _validationProps: {
                        validationService: validationService,
                        validationParentId: idService.getId("Form2")
                    },
                    enabled: true,
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    inputType: /*Text*/ 0,
                    mandatory: true,
                    maxLength: 50,
                    prompt: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("8wPzweYOjEW2uxdLwdFzSA#ValueExpression.1197690936.1", "First (and middle) name"),
                    style: "form-control",
                    variable: model.createVariable(OS.DataTypes.DataTypes.Text, PartnersHubClientVariables.getRealSignupFirstName(), function(value) {
                        PartnersHubClientVariables.setRealSignupFirstName(value);
                    }),
                    _idProps: {
                        service: idService,
                        name: "FirstName3"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })), React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "display: flex; flex-direction: column; gap: 4px;"
                    },
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "30"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Label, {
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    _idProps: {
                        service: idService,
                        uuid: "31"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, $text(getTranslation("DsD3zjGmQU2YmaZO__txJA#Value", "Last name"))), React.createElement(OSWidgets.Input, {
                    _validationProps: {
                        validationService: validationService,
                        validationParentId: idService.getId("Form2")
                    },
                    enabled: true,
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    inputType: /*Text*/ 0,
                    mandatory: true,
                    maxLength: 50,
                    prompt: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("BNQBIV97LkG9yYb3KpfMtQ#ValueExpression.1572233360.1", "Enter your last name"),
                    style: "form-control",
                    variable: model.createVariable(OS.DataTypes.DataTypes.Text, PartnersHubClientVariables.getRealSignupLastName(), function(value) {
                        PartnersHubClientVariables.setRealSignupLastName(value);
                    }),
                    _idProps: {
                        service: idService,
                        name: "LastName3"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })), React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "display: flex; flex-direction: column; gap: 4px;"
                    },
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "33"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Label, {
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    _idProps: {
                        service: idService,
                        uuid: "34"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, $text(getTranslation("s_eGbmNoT06cMKSVqx3Zrw#Value", "Date of birth"))), React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "display: flex; flex-direction: column; gap: 4px;"
                    },
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "35"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OutSystemsUI_Interaction_DatePicker_mvc_view, {
                    getOwnerSpan: function() {
                        return _this.getChildSpan("render");
                    },
                    getOwnerDisposeSpan: function() {
                        return _this.getChildSpan("destroy");
                    },
                    inputs: {
                        OptionalConfigs: model.getCachedValue(idService.getId("DatePicker.OptionalConfigs"), function() {
                            return function() {
                                var rec = new OutSystemsUIModel.ST_bc4abb4233d9ce894e855c520a20c76fStructure();
                                rec.maxDateAttr = OS.BuiltinFunctions.currDate();
                                return rec;
                            }();
                        }),
                        DateFormat: "DD-MM-YYYY",
                        ShowTodayButton: true
                    },
                    events: {
                        _handleError: function(ex) {
                            controller.handleError(ex);
                        },
                        onSelected$Action: function(datePickerIdIn, selectedDateTimeIn) {
                            var eventHandlerContext = callContext.clone();
                            controller.datePickerOnSelected$Action(selectedDateTimeIn, controller.callContext(eventHandlerContext));

                            ;
                        }
                    },
                    _validationProps: {
                        validationService: validationService,
                        validationParentId: idService.getId("Form2")
                    },
                    _idProps: {
                        service: idService,
                        name: "DatePicker",
                        alias: "1"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    placeholders: {
                        datepicker: new PlaceholderContent(function() {
                            return [React.createElement(OSWidgets.Input, {
                                _validationProps: {
                                    validationService: validationService,
                                    validationParentId: idService.getId("Form2")
                                },
                                enabled: true,
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                inputType: /*Date*/ 4,
                                mandatory: true,
                                maxLength: 0,
                                prompt: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("lOBAHtZQGUmW9zPBauhtIg#ValueExpression.-1399232832.1", "dd/mm/yyyy"),
                                style: "form-control",
                                variable: model.createVariable(OS.DataTypes.DataTypes.Date, PartnersHubClientVariables.getRealSignupDateofBirth(), function(value) {
                                    PartnersHubClientVariables.setRealSignupDateofBirth(value);
                                }),
                                _idProps: {
                                    service: idService,
                                    name: "Input_DateOfBirth"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })];
                        }),
                        placeholder_SSPreview: PlaceholderContent.Empty
                    },
                    _dependencies: [asPrimitiveValue(PartnersHubClientVariables.getRealSignupDateofBirth())]
                }))))), React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "38"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Image, {
                    extendedProperties: {
                        style: "height: 220px;"
                    },
                    gridProperties: {
                        width: "1000px",
                        marginLeft: "0"
                    },
                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.namedob.svg"),
                    type: /*Static*/ 0,
                    _idProps: {
                        service: idService,
                        uuid: "39"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }))), React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "display: flex; justify-content: flex-end; text-align: right;"
                    },
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "40"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Button, {
                    enabled: true,
                    extendedProperties: {
                        style: "align-items: center; background: var(--Brand-Primary-Base, #FF444F); border: none; border-radius: 100px; cursor: pointer; display: flex; gap: 8px; height: 40px; justify-content: center; padding: 0px 16px;"
                    },
                    gridProperties: {
                        width: "100px"
                    },
                    isDefault: false,
                    onClick: function() {
                        controller.validationService.validateWidget("");
                        var eventHandlerContext = callContext.clone();
                        controller.buttonOnClick$Action(controller.callContext(eventHandlerContext));


                        ;
                    },
                    style: "",
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "41"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Text, {
                    extendedProperties: {
                        style: "color: #f3f6f8; font-weight: bold;"
                    },
                    text: [$text(getTranslation("j_EPQ_tMEkOIVLHUSf5bHQ#Value", "Next"))],
                    _idProps: {
                        service: idService,
                        uuid: "42"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }))))];
            }), $if((PartnersHubClientVariables.getisDateOfBirthVisible() && (PartnersHubClientVariables.getIsDesktop() === false)), false, this, function() {
                return [React.createElement(PartnersHub_RealAccountCreationFlow_DateOfBirthContainer_mvc_view, {
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
                        uuid: "43",
                        alias: "2"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    _dependencies: []
                })];
            }, function() {
                return [];
            }));
        }
    }

    return View;
});
define("PartnersHub.RealAccountCreationFlow.PersonalDetailsBlock.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "OutSystemsUI.model", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.RealAccountCreationFlow.PersonalDetailsBlock.mvc$translationsResources", "PartnersHub.RealAccountCreationFlow.PersonalDetailsBlock.mvc$controller.OpenDateOfBirthContainer.ValidateFirstandLastNameJS", "PartnersHub.RealAccountCreationFlow.PersonalDetailsBlock.mvc$controller.ButtonOnClick.ValidateJS", "OutSystemsUI.model$ST_bc4abb4233d9ce894e855c520a20c76fStructure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "PartnersHub.model$ST_b5010cf570b4e39f4aa14db0ae11cfbfStructure", "PartnersHub.model$ST_24f25c56883af3fb98f750bd4c11bbdcStructure", "PartnersHub.controller$UseDevice", "PartnersHub.controller$NextStepReal"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, OutSystemsUIModel, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_RealAccountCreationFlow_PersonalDetailsBlock_mvc_TranslationsResources, PartnersHub_RealAccountCreationFlow_PersonalDetailsBlock_mvc_controller_OpenDateOfBirthContainer_ValidateFirstandLastNameJS, PartnersHub_RealAccountCreationFlow_PersonalDetailsBlock_mvc_controller_ButtonOnClick_ValidateJS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_RealAccountCreationFlow_PersonalDetailsBlock_mvc_TranslationsResources);
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
            get _datePickerOnSelected$Action() {
                if (!(this.hasOwnProperty("__datePickerOnSelected$Action"))) {
                    this.__datePickerOnSelected$Action = function(selectedDateTimeIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("DatePickerOnSelected", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "DatePickerOnSelected");
                                span.setAttribute("outsystems.function.key", "51ee525a-c510-4669-b2bb-e96c215260a0");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("DatePickerOnSelected");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.RealAccountCreationFlow.PersonalDetailsBlock.DatePickerOnSelected$vars"))());
                                vars.value.selectedDateTimeInLocal = selectedDateTimeIn;
                                // RealSignupDateofBirth = SelectedDateTime
                                PartnersHubClientVariables.setRealSignupDateofBirth(OS.BuiltinFunctions.dateTimeToDate(vars.value.selectedDateTimeInLocal));
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__datePickerOnSelected$Action;
            }
            set _datePickerOnSelected$Action(value) {
                this.__datePickerOnSelected$Action = value;
            }

            get _openDateOfBirthContainer$Action() {
                if (!(this.hasOwnProperty("__openDateOfBirthContainer$Action"))) {
                    this.__openDateOfBirthContainer$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OpenDateOfBirthContainer", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OpenDateOfBirthContainer");
                                span.setAttribute("outsystems.function.key", "5763204d-3080-4ddc-bffc-f7e6555c5dc8");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OpenDateOfBirthContainer");
                                callContext = controller.callContext(callContext);
                                var validateFirstandLastNameJSResult = new OS.DataTypes.VariableHolder();
                                var jSONDeserializePersonalDetailsValidFieldsVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(PartnersHubModel.ST_b5010cf570b4e39f4aa14db0ae11cfbfStructure))());
                                var jSONDeserializePersonalDetailsValidationErrorVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(PartnersHubModel.ST_24f25c56883af3fb98f750bd4c11bbdcStructure))());
                                validateFirstandLastNameJSResult.value = OS.Logger.startActiveSpan("ValidateFirstandLastName", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "ValidateFirstandLastName");
                                        span.setAttribute("outsystems.function.key", "b78ca941-0583-44a1-b0d8-be1e1f292e6d");
                                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(PartnersHub_RealAccountCreationFlow_PersonalDetailsBlock_mvc_controller_OpenDateOfBirthContainer_ValidateFirstandLastNameJS, "ValidateFirstandLastName", "OpenDateOfBirthContainer", {
                                            FirstName: OS.DataConversion.JSNodeParamConverter.to(PartnersHubClientVariables.getRealSignupFirstName(), OS.DataTypes.DataTypes.Text),
                                            LastName: OS.DataConversion.JSNodeParamConverter.to(PartnersHubClientVariables.getRealSignupLastName(), OS.DataTypes.DataTypes.Text),
                                            ValidationErrors: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                            ValidFields: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                        }, function($parameters) {
                                            var jsNodeResult = new(controller.constructor.getVariableGroupType("PartnersHub.RealAccountCreationFlow.PersonalDetailsBlock.OpenDateOfBirthContainer$validateFirstandLastNameJSResult"))();
                                            jsNodeResult.validationErrorsOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ValidationErrors, OS.DataTypes.DataTypes.Text);
                                            jsNodeResult.validFieldsOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ValidFields, OS.DataTypes.DataTypes.Text);
                                            return jsNodeResult;
                                        }, {}, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
                                // JSON Deserialize: JSONDeserializePersonalDetailsValidationError
                                jSONDeserializePersonalDetailsValidationErrorVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(validateFirstandLastNameJSResult.value.validationErrorsOut, PartnersHubModel.ST_24f25c56883af3fb98f750bd4c11bbdcStructure, false);
                                // JSON Deserialize: JSONDeserializePersonalDetailsValidFields
                                jSONDeserializePersonalDetailsValidFieldsVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(validateFirstandLastNameJSResult.value.validFieldsOut, PartnersHubModel.ST_b5010cf570b4e39f4aa14db0ae11cfbfStructure, false);
                                // FirstName2.Valid = JSONDeserializePersonalDetailsValidFields.Data.FirstName
                                model.widgets.get(idService.getId("FirstName2")).validAttr = jSONDeserializePersonalDetailsValidFieldsVar.value.dataOut.firstNameAttr;
                                // FirstName2.ValidationMessage = JSONDeserializePersonalDetailsValidationError.Data.FirstName
                                model.widgets.get(idService.getId("FirstName2")).validationMessageAttr = jSONDeserializePersonalDetailsValidationErrorVar.value.dataOut.firstNameAttr;
                                // LastName2.Valid = JSONDeserializePersonalDetailsValidFields.Data.LastName
                                model.widgets.get(idService.getId("LastName2")).validAttr = jSONDeserializePersonalDetailsValidFieldsVar.value.dataOut.lastNameAttr;
                                // LastName2.ValidationMessage = JSONDeserializePersonalDetailsValidationError.Data.LastName
                                model.widgets.get(idService.getId("LastName2")).validationMessageAttr = jSONDeserializePersonalDetailsValidationErrorVar.value.dataOut.lastNameAttr;
                                if ((model.widgets.get(idService.getId("Form1")).validAttr)) {
                                    // isDateOfBirthVisible = True
                                    PartnersHubClientVariables.setisDateOfBirthVisible(true);
                                }

                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__openDateOfBirthContainer$Action;
            }
            set _openDateOfBirthContainer$Action(value) {
                this.__openDateOfBirthContainer$Action = value;
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
                                span.setAttribute("outsystems.function.key", "acccb235-9e4b-4829-bbdd-db97c3f98c4b");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnInitialize");
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

                return this.__onInitialize$Action;
            }
            set _onInitialize$Action(value) {
                this.__onInitialize$Action = value;
            }

            get _buttonOnClick$Action() {
                if (!(this.hasOwnProperty("__buttonOnClick$Action"))) {
                    this.__buttonOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("ButtonOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "ButtonOnClick");
                                span.setAttribute("outsystems.function.key", "e3c5b69e-8eef-4b9f-80be-7ac826e15ca4");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("ButtonOnClick");
                                callContext = controller.callContext(callContext);
                                var validateJSResult = new OS.DataTypes.VariableHolder();
                                var jSONDeserializePersonalDetailsValidationErrorVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(PartnersHubModel.ST_24f25c56883af3fb98f750bd4c11bbdcStructure))());
                                var jSONDeserializePersonalDetailsValidFieldsVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(PartnersHubModel.ST_b5010cf570b4e39f4aa14db0ae11cfbfStructure))());
                                validateJSResult.value = OS.Logger.startActiveSpan("Validate", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "Validate");
                                        span.setAttribute("outsystems.function.key", "8fe2fa63-fb61-49c9-aa8b-38929d403d81");
                                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(PartnersHub_RealAccountCreationFlow_PersonalDetailsBlock_mvc_controller_ButtonOnClick_ValidateJS, "Validate", "ButtonOnClick", {
                                            DateOfBirth: OS.DataConversion.JSNodeParamConverter.to(OS.BuiltinFunctions.dateToText(PartnersHubClientVariables.getRealSignupDateofBirth()), OS.DataTypes.DataTypes.Text),
                                            FirstName: OS.DataConversion.JSNodeParamConverter.to(PartnersHubClientVariables.getRealSignupFirstName(), OS.DataTypes.DataTypes.Text),
                                            LastName: OS.DataConversion.JSNodeParamConverter.to(PartnersHubClientVariables.getRealSignupLastName(), OS.DataTypes.DataTypes.Text),
                                            ValidationErrors: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                            ValidFields: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                        }, function($parameters) {
                                            var jsNodeResult = new(controller.constructor.getVariableGroupType("PartnersHub.RealAccountCreationFlow.PersonalDetailsBlock.ButtonOnClick$validateJSResult"))();
                                            jsNodeResult.validationErrorsOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ValidationErrors, OS.DataTypes.DataTypes.Text);
                                            jsNodeResult.validFieldsOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ValidFields, OS.DataTypes.DataTypes.Text);
                                            return jsNodeResult;
                                        }, {}, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
                                // JSON Deserialize: JSONDeserializePersonalDetailsValidationError
                                jSONDeserializePersonalDetailsValidationErrorVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(validateJSResult.value.validationErrorsOut, PartnersHubModel.ST_24f25c56883af3fb98f750bd4c11bbdcStructure, false);
                                // JSON Deserialize: JSONDeserializePersonalDetailsValidFields
                                jSONDeserializePersonalDetailsValidFieldsVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(validateJSResult.value.validFieldsOut, PartnersHubModel.ST_b5010cf570b4e39f4aa14db0ae11cfbfStructure, false);
                                // FirstName3.Valid = JSONDeserializePersonalDetailsValidFields.Data.FirstName
                                model.widgets.get(idService.getId("FirstName3")).validAttr = jSONDeserializePersonalDetailsValidFieldsVar.value.dataOut.firstNameAttr;
                                // LastName3.Valid = JSONDeserializePersonalDetailsValidFields.Data.LastName
                                model.widgets.get(idService.getId("LastName3")).validAttr = jSONDeserializePersonalDetailsValidFieldsVar.value.dataOut.lastNameAttr;
                                // Input_DateOfBirth.Valid = JSONDeserializePersonalDetailsValidFields.Data.DateOfBirth
                                model.widgets.get(idService.getId("Input_DateOfBirth")).validAttr = jSONDeserializePersonalDetailsValidFieldsVar.value.dataOut.dateOfBirthAttr;
                                // FirstName3.ValidationMessage = JSONDeserializePersonalDetailsValidationError.Data.FirstName
                                model.widgets.get(idService.getId("FirstName3")).validationMessageAttr = jSONDeserializePersonalDetailsValidationErrorVar.value.dataOut.firstNameAttr;
                                // LastName3.ValidationMessage = JSONDeserializePersonalDetailsValidationError.Data.LastName
                                model.widgets.get(idService.getId("LastName3")).validationMessageAttr = jSONDeserializePersonalDetailsValidationErrorVar.value.dataOut.lastNameAttr;
                                // Input_DateOfBirth.ValidationMessage = JSONDeserializePersonalDetailsValidationError.Data.DateOfBirth
                                model.widgets.get(idService.getId("Input_DateOfBirth")).validationMessageAttr = jSONDeserializePersonalDetailsValidationErrorVar.value.dataOut.dateOfBirthAttr;
                                if ((model.widgets.get(idService.getId("Form2")).validAttr)) {
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

                return this.__buttonOnClick$Action;
            }
            set _buttonOnClick$Action(value) {
                this.__buttonOnClick$Action = value;
            }


            datePickerOnSelected$Action(selectedDateTimeIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("DatePickerOnSelected__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "DatePickerOnSelected");
                        span.setAttribute("outsystems.function.key", "51ee525a-c510-4669-b2bb-e96c215260a0");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._datePickerOnSelected$Action, callContext, selectedDateTimeIn);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            openDateOfBirthContainer$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OpenDateOfBirthContainer__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OpenDateOfBirthContainer");
                        span.setAttribute("outsystems.function.key", "5763204d-3080-4ddc-bffc-f7e6555c5dc8");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._openDateOfBirthContainer$Action, callContext);
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
                        span.setAttribute("outsystems.function.key", "acccb235-9e4b-4829-bbdd-db97c3f98c4b");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
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

            buttonOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("ButtonOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "ButtonOnClick");
                        span.setAttribute("outsystems.function.key", "e3c5b69e-8eef-4b9f-80be-7ac826e15ca4");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._buttonOnClick$Action, callContext);
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
                return PartnersHubController.default.defaultTimeout;
            }

        }

        var Controller = ControllerInner;
        // Server Actions - Variables

        // Client Actions - Variables
        Controller.registerVariableGroupType("PartnersHub.RealAccountCreationFlow.PersonalDetailsBlock.DatePickerOnSelected$vars", [{
            name: "SelectedDateTime",
            attrName: "selectedDateTimeInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.DateTime,
            defaultValue: function() {
                return OS.DataTypes.DateTime.defaultValue;
            }
        }]);
        Controller.registerVariableGroupType("PartnersHub.RealAccountCreationFlow.PersonalDetailsBlock.OpenDateOfBirthContainer$validateFirstandLastNameJSResult", [{
            name: "ValidationErrors",
            attrName: "validationErrorsOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "ValidFields",
            attrName: "validFieldsOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("PartnersHub.RealAccountCreationFlow.PersonalDetailsBlock.ButtonOnClick$validateJSResult", [{
            name: "ValidationErrors",
            attrName: "validationErrorsOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "ValidFields",
            attrName: "validFieldsOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});

define("PartnersHub.RealAccountCreationFlow.PersonalDetailsBlock.mvc$controller.OpenDateOfBirthContainer.ValidateFirstandLastNameJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const payload = {
            FirstName: $parameters.FirstName,
            LastName: $parameters.LastName,
        }

        const validationSchema = yup.object().shape({
            FirstName: yup.string()
                .noConsecutiveSpaces('First name must not contain consecutive spaces.')
                .validCharacters('First name can only include letters, spaces, apostrophes, periods, and hyphens.')
                .max(50, 'First name must be at most 50 characters long.')
                .required('First (and middle) name is required.'),
            LastName: yup.string()
                .noConsecutiveSpaces('Last name must not contain consecutive spaces.')
                .validCharacters('Last name can only include letters, spaces, apostrophes, periods, and hyphens.')
                .max(50, 'Last name must be at most 50 characters long.')
                .required('Last name is required.')
        });

        const {
            errors,
            validFields
        } = validate(validationSchema, payload)


        $parameters.ValidationErrors = JSON.stringify(errors)

        $parameters.ValidFields = JSON.stringify(validFields)
    };
});

define("PartnersHub.RealAccountCreationFlow.PersonalDetailsBlock.mvc$controller.ButtonOnClick.ValidateJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        function convertToDateOfBirthFormat(yyyy_mm_dd) {
            const [year, month, day] = yyyy_mm_dd.split("-").map(Number);
            return `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year}`;
        }



        const payload = {
            DateOfBirth: convertToDateOfBirthFormat($parameters.DateOfBirth),
            FirstName: $parameters.FirstName,
            LastName: $parameters.LastName,
        }


        // Calculate the date 18 years ago from today
        const today = new Date();
        const eighteenYearsAgo = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());

        const validationSchema = yup.object().shape({
            DateOfBirth: yup.string().required('Date of birth is required.')
                .trim()
                .matches(
                    /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/,
                    'Date of birth must be in the format dd-mm-yyyy.'
                )
                .test('is-18-years-old', 'You must be at least 18 years old.', function(value) {
                    if (!value) return false;
                    const [day, month, year] = value.split('-').map(Number); // Note that - is being used here

                    // Create the Date object from the split values
                    const date = new Date(year, month - 1, day);

                    // Validate that the date in the past and at least 18 years ago
                    return date <= eighteenYearsAgo;
                }),
            FirstName: yup.string()
                .noConsecutiveSpaces('First name must not contain consecutive spaces.')
                .validCharacters('First name can only include letters, spaces, apostrophes, periods, and hyphens.')
                .max(50, 'First name must be at most 50 characters long.')
                .required('First (and middle) name is required.'),
            LastName: yup.string()
                .noConsecutiveSpaces('Last name must not contain consecutive spaces.')
                .validCharacters('Last name can only include letters, spaces, apostrophes, periods, and hyphens.')
                .max(50, 'Last name must be at most 50 characters long.')
                .required('Last name is required.')
        });

        // Assuming validate is a function that validates
        const {
            errors,
            validFields
        } = validate(validationSchema, payload)

        $parameters.ValidationErrors = JSON.stringify(errors)
        $parameters.ValidFields = JSON.stringify(validFields)
    };
});


define("PartnersHub.RealAccountCreationFlow.PersonalDetailsBlock.mvc$translationsResources.de-DE", [], function() {
    return {
        "j_EPQ_tMEkOIVLHUSf5bHQ#Value": "Nächste",
        "lOBAHtZQGUmW9zPBauhtIg#ValueExpression.-1399232832.1": "dd.mm.jjjj",
        "s_eGbmNoT06cMKSVqx3Zrw#Value": "Geburtsdatum",
        "BNQBIV97LkG9yYb3KpfMtQ#ValueExpression.1572233360.1": "Geben Sie Ihren Nachnamen ein",
        "DsD3zjGmQU2YmaZO__txJA#Value": "Nachname",
        "8wPzweYOjEW2uxdLwdFzSA#ValueExpression.1197690936.1": "Vorname (und zweiter Vorname)",
        "2mZm2HFVgEyXiVPF5ncAMA#Value": "Vorname (und zweiter Vorname)",
        "WGq0RVZ5r0yEEwsOsR4JlA#Value": "genau wie auf Ihrem Ausweisdokument angegeben.",
        "bfHfU4sxB0uZYsBvXwcV0g#Value": "Geburtsdatum",
        "jjo7zQDjKEOzEB8rpTtC5Q#Value": "und",
        "BH4xaTTRpkCbML18NugkfA#Value": "Name",
        "bjOi2lIQ_EqD3rHVXQZfsg#Value": "Geben Sie Ihre",
        "RG70PEg8yEyXExOyPJcC6w#Value": "Nächste",
        "aP1vS54I5k2xlwZGB0k6Hw#Value": "genau wie es auf Ihrem Ausweis steht.",
        "J0V3L+sIAEqTue6JXMGP3A#Value": "Name",
        "4_2LZ2b5xEyZNd4uy9iZww#Value": "Geben Sie Ihr ein",
        "16HlsEFl20aowcu+AUX2nQ#ValueExpression.1572233360.1": "Geben Sie Ihren Nachnamen ein",
        "zjJ1q5jYdkymqdJ0Ew8BAg#Value": "Nachname",
        "hBJlxfgynUmzZ9AhSwOZXw#ValueExpression.1197690936.1": "Vorname (und zweiter Vorname)",
        "0T3Wi9jMUEaxXFsiJf7cxQ#Value": "Vorname (und zweiter Vorname)"
    };
});

define("PartnersHub.RealAccountCreationFlow.PersonalDetailsBlock.mvc$translationsResources.es-ES", [], function() {
    return {
        "j_EPQ_tMEkOIVLHUSf5bHQ#Value": "Siguiente",
        "lOBAHtZQGUmW9zPBauhtIg#ValueExpression.-1399232832.1": "dd/mm/yyyy",
        "s_eGbmNoT06cMKSVqx3Zrw#Value": "Fecha de nacimiento",
        "BNQBIV97LkG9yYb3KpfMtQ#ValueExpression.1572233360.1": "Introduzca su apellido",
        "DsD3zjGmQU2YmaZO__txJA#Value": "Apellido",
        "8wPzweYOjEW2uxdLwdFzSA#ValueExpression.1197690936.1": "Nombre (y segundo nombre)",
        "2mZm2HFVgEyXiVPF5ncAMA#Value": "Nombre (y segundo nombre)",
        "WGq0RVZ5r0yEEwsOsR4JlA#Value": "exactamente como aparece en su documento de identidad.",
        "bfHfU4sxB0uZYsBvXwcV0g#Value": "fecha de nacimiento",
        "jjo7zQDjKEOzEB8rpTtC5Q#Value": "y",
        "BH4xaTTRpkCbML18NugkfA#Value": "nombre",
        "bjOi2lIQ_EqD3rHVXQZfsg#Value": "Introduzca su",
        "RG70PEg8yEyXExOyPJcC6w#Value": "Siguiente",
        "aP1vS54I5k2xlwZGB0k6Hw#Value": "exactamente como aparece en su documento de identidad.",
        "J0V3L+sIAEqTue6JXMGP3A#Value": "nombre",
        "4_2LZ2b5xEyZNd4uy9iZww#Value": "Introduzca su",
        "16HlsEFl20aowcu+AUX2nQ#ValueExpression.1572233360.1": "Introduzca su apellido",
        "zjJ1q5jYdkymqdJ0Ew8BAg#Value": "Apellido",
        "hBJlxfgynUmzZ9AhSwOZXw#ValueExpression.1197690936.1": "Nombre (y segundo nombre)",
        "0T3Wi9jMUEaxXFsiJf7cxQ#Value": "Nombre (y segundo nombre)"
    };
});

define("PartnersHub.RealAccountCreationFlow.PersonalDetailsBlock.mvc$translationsResources.fr-FR", [], function() {
    return {
        "j_EPQ_tMEkOIVLHUSf5bHQ#Value": "Suivant",
        "lOBAHtZQGUmW9zPBauhtIg#ValueExpression.-1399232832.1": "jj/mm/aaaa",
        "s_eGbmNoT06cMKSVqx3Zrw#Value": "Date de naissance",
        "BNQBIV97LkG9yYb3KpfMtQ#ValueExpression.1572233360.1": "Entrez votre nom de famille",
        "DsD3zjGmQU2YmaZO__txJA#Value": "Nom de famille",
        "8wPzweYOjEW2uxdLwdFzSA#ValueExpression.1197690936.1": "Prénom (et deuxième prénom)",
        "2mZm2HFVgEyXiVPF5ncAMA#Value": "Prénom (et deuxième prénom)",
        "WGq0RVZ5r0yEEwsOsR4JlA#Value": "exactement comme indiqué sur votre document d\'identité.",
        "bfHfU4sxB0uZYsBvXwcV0g#Value": "date de naissance",
        "jjo7zQDjKEOzEB8rpTtC5Q#Value": "et",
        "BH4xaTTRpkCbML18NugkfA#Value": "nom",
        "bjOi2lIQ_EqD3rHVXQZfsg#Value": "Entrez votre",
        "RG70PEg8yEyXExOyPJcC6w#Value": "Suivant",
        "aP1vS54I5k2xlwZGB0k6Hw#Value": "exactement comme il apparaît sur votre document d\'identité.",
        "J0V3L+sIAEqTue6JXMGP3A#Value": "nom",
        "4_2LZ2b5xEyZNd4uy9iZww#Value": "Entrez votre",
        "16HlsEFl20aowcu+AUX2nQ#ValueExpression.1572233360.1": "Entrez votre nom de famille",
        "zjJ1q5jYdkymqdJ0Ew8BAg#Value": "Nom de famille",
        "hBJlxfgynUmzZ9AhSwOZXw#ValueExpression.1197690936.1": "Prénom (et deuxième prénom)",
        "0T3Wi9jMUEaxXFsiJf7cxQ#Value": "Prénom (et deuxième prénom)"
    };
});

define("PartnersHub.RealAccountCreationFlow.PersonalDetailsBlock.mvc$translationsResources.it-IT", [], function() {
    return {
        "j_EPQ_tMEkOIVLHUSf5bHQ#Value": "Prossimo",
        "lOBAHtZQGUmW9zPBauhtIg#ValueExpression.-1399232832.1": "gg/mm/aaaa",
        "s_eGbmNoT06cMKSVqx3Zrw#Value": "Data di nascita",
        "BNQBIV97LkG9yYb3KpfMtQ#ValueExpression.1572233360.1": "Inserisci il tuo cognome",
        "DsD3zjGmQU2YmaZO__txJA#Value": "Cognome",
        "8wPzweYOjEW2uxdLwdFzSA#ValueExpression.1197690936.1": "Nome (e secondo nome)",
        "2mZm2HFVgEyXiVPF5ncAMA#Value": "Nome (e secondo nome)",
        "WGq0RVZ5r0yEEwsOsR4JlA#Value": "esattamente come appare sul tuo documento d\'identità.",
        "bfHfU4sxB0uZYsBvXwcV0g#Value": "data di nascita",
        "jjo7zQDjKEOzEB8rpTtC5Q#Value": "e",
        "BH4xaTTRpkCbML18NugkfA#Value": "nome",
        "bjOi2lIQ_EqD3rHVXQZfsg#Value": "Inserisci il tuo",
        "RG70PEg8yEyXExOyPJcC6w#Value": "Prossimo",
        "aP1vS54I5k2xlwZGB0k6Hw#Value": "esattamente come appare sul tuo documento d\'identità.",
        "J0V3L+sIAEqTue6JXMGP3A#Value": "nome",
        "4_2LZ2b5xEyZNd4uy9iZww#Value": "Inserisci il tuo",
        "16HlsEFl20aowcu+AUX2nQ#ValueExpression.1572233360.1": "Inserisci il tuo cognome",
        "zjJ1q5jYdkymqdJ0Ew8BAg#Value": "Cognome",
        "hBJlxfgynUmzZ9AhSwOZXw#ValueExpression.1197690936.1": "Nome (e secondo nome)",
        "0T3Wi9jMUEaxXFsiJf7cxQ#Value": "Nome (e secondo nome)"
    };
});

define("PartnersHub.RealAccountCreationFlow.PersonalDetailsBlock.mvc$translationsResources.pl-PL", [], function() {
    return {
        "j_EPQ_tMEkOIVLHUSf5bHQ#Value": "Następny",
        "lOBAHtZQGUmW9zPBauhtIg#ValueExpression.-1399232832.1": "dd.mm.rrrr",
        "s_eGbmNoT06cMKSVqx3Zrw#Value": "Data urodzenia",
        "BNQBIV97LkG9yYb3KpfMtQ#ValueExpression.1572233360.1": "Wprowadź swoje nazwisko",
        "DsD3zjGmQU2YmaZO__txJA#Value": "Nazwisko",
        "8wPzweYOjEW2uxdLwdFzSA#ValueExpression.1197690936.1": "Imię (i drugie imię)",
        "2mZm2HFVgEyXiVPF5ncAMA#Value": "Imię (i drugie imię)",
        "WGq0RVZ5r0yEEwsOsR4JlA#Value": "dokładnie tak, jak jest to napisane w Twoim dokumencie tożsamości.",
        "bfHfU4sxB0uZYsBvXwcV0g#Value": "data urodzenia",
        "jjo7zQDjKEOzEB8rpTtC5Q#Value": "i",
        "BH4xaTTRpkCbML18NugkfA#Value": "nazwa",
        "bjOi2lIQ_EqD3rHVXQZfsg#Value": "Wprowadź swoje",
        "RG70PEg8yEyXExOyPJcC6w#Value": "Następny",
        "aP1vS54I5k2xlwZGB0k6Hw#Value": "dokładnie tak, jak widnieje w twoim dokumencie tożsamości.",
        "J0V3L+sIAEqTue6JXMGP3A#Value": "nazwa",
        "4_2LZ2b5xEyZNd4uy9iZww#Value": "Wprowadź swój",
        "16HlsEFl20aowcu+AUX2nQ#ValueExpression.1572233360.1": "Wprowadź swoje nazwisko",
        "zjJ1q5jYdkymqdJ0Ew8BAg#Value": "Nazwisko",
        "hBJlxfgynUmzZ9AhSwOZXw#ValueExpression.1197690936.1": "Imię (i drugie imię)",
        "0T3Wi9jMUEaxXFsiJf7cxQ#Value": "Imię (i drugie imię)"
    };
});

define("PartnersHub.RealAccountCreationFlow.PersonalDetailsBlock.mvc$translationsResources.pt-PT", [], function() {
    return {
        "j_EPQ_tMEkOIVLHUSf5bHQ#Value": "Próximo",
        "lOBAHtZQGUmW9zPBauhtIg#ValueExpression.-1399232832.1": "dd/mm/aaaa",
        "s_eGbmNoT06cMKSVqx3Zrw#Value": "Data de nascimento",
        "BNQBIV97LkG9yYb3KpfMtQ#ValueExpression.1572233360.1": "Insira o seu sobrenome",
        "DsD3zjGmQU2YmaZO__txJA#Value": "Sobrenome",
        "8wPzweYOjEW2uxdLwdFzSA#ValueExpression.1197690936.1": "Primeiro nome (e segundo nome)",
        "2mZm2HFVgEyXiVPF5ncAMA#Value": "Primeiro nome (e nome do meio)",
        "WGq0RVZ5r0yEEwsOsR4JlA#Value": "exatamente como aparece no seu documento de identidade.",
        "bfHfU4sxB0uZYsBvXwcV0g#Value": "data de nascimento",
        "jjo7zQDjKEOzEB8rpTtC5Q#Value": "e",
        "BH4xaTTRpkCbML18NugkfA#Value": "nome",
        "bjOi2lIQ_EqD3rHVXQZfsg#Value": "Insira o seu",
        "RG70PEg8yEyXExOyPJcC6w#Value": "Próximo",
        "aP1vS54I5k2xlwZGB0k6Hw#Value": "exatamente como aparece no seu documento de identidade.",
        "J0V3L+sIAEqTue6JXMGP3A#Value": "nome",
        "4_2LZ2b5xEyZNd4uy9iZww#Value": "Insira o seu",
        "16HlsEFl20aowcu+AUX2nQ#ValueExpression.1572233360.1": "Insira o seu apelido",
        "zjJ1q5jYdkymqdJ0Ew8BAg#Value": "Sobrenome",
        "hBJlxfgynUmzZ9AhSwOZXw#ValueExpression.1197690936.1": "Primeiro nome (e nome do meio)",
        "0T3Wi9jMUEaxXFsiJf7cxQ#Value": "Primeiro nome (e nome do meio)"
    };
});

define("PartnersHub.RealAccountCreationFlow.PersonalDetailsBlock.mvc$translationsResources.ru-RU", [], function() {
    return {
        "j_EPQ_tMEkOIVLHUSf5bHQ#Value": "Следующий",
        "lOBAHtZQGUmW9zPBauhtIg#ValueExpression.-1399232832.1": "дд.мм.гггг",
        "s_eGbmNoT06cMKSVqx3Zrw#Value": "Дата рождения",
        "BNQBIV97LkG9yYb3KpfMtQ#ValueExpression.1572233360.1": "Введите вашу фамилию",
        "DsD3zjGmQU2YmaZO__txJA#Value": "Фамилия",
        "8wPzweYOjEW2uxdLwdFzSA#ValueExpression.1197690936.1": "Имя (и отчество)",
        "2mZm2HFVgEyXiVPF5ncAMA#Value": "Имя (и отчество)",
        "WGq0RVZ5r0yEEwsOsR4JlA#Value": "точно так, как указано в вашем удостоверении личности.",
        "bfHfU4sxB0uZYsBvXwcV0g#Value": "дата рождения",
        "jjo7zQDjKEOzEB8rpTtC5Q#Value": "и",
        "BH4xaTTRpkCbML18NugkfA#Value": "имя",
        "bjOi2lIQ_EqD3rHVXQZfsg#Value": "Введите ваш",
        "RG70PEg8yEyXExOyPJcC6w#Value": "Следующий",
        "aP1vS54I5k2xlwZGB0k6Hw#Value": "точно так, как указано в вашем удостоверении личности.",
        "J0V3L+sIAEqTue6JXMGP3A#Value": "имя",
        "4_2LZ2b5xEyZNd4uy9iZww#Value": "Введите ваш",
        "16HlsEFl20aowcu+AUX2nQ#ValueExpression.1572233360.1": "Введите вашу фамилию",
        "zjJ1q5jYdkymqdJ0Ew8BAg#Value": "Фамилия",
        "hBJlxfgynUmzZ9AhSwOZXw#ValueExpression.1197690936.1": "Имя (и второе имя)",
        "0T3Wi9jMUEaxXFsiJf7cxQ#Value": "Имя (и второе имя)"
    };
});

define("PartnersHub.RealAccountCreationFlow.PersonalDetailsBlock.mvc$translationsResources", ["exports", "PartnersHub.RealAccountCreationFlow.PersonalDetailsBlock.mvc$translationsResources.de-DE", "PartnersHub.RealAccountCreationFlow.PersonalDetailsBlock.mvc$translationsResources.es-ES", "PartnersHub.RealAccountCreationFlow.PersonalDetailsBlock.mvc$translationsResources.fr-FR", "PartnersHub.RealAccountCreationFlow.PersonalDetailsBlock.mvc$translationsResources.it-IT", "PartnersHub.RealAccountCreationFlow.PersonalDetailsBlock.mvc$translationsResources.pl-PL", "PartnersHub.RealAccountCreationFlow.PersonalDetailsBlock.mvc$translationsResources.pt-PT", "PartnersHub.RealAccountCreationFlow.PersonalDetailsBlock.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_RealAccountCreationFlow_PersonalDetailsBlock_mvc_translationsResources_deDE, PartnersHub_RealAccountCreationFlow_PersonalDetailsBlock_mvc_translationsResources_esES, PartnersHub_RealAccountCreationFlow_PersonalDetailsBlock_mvc_translationsResources_frFR, PartnersHub_RealAccountCreationFlow_PersonalDetailsBlock_mvc_translationsResources_itIT, PartnersHub_RealAccountCreationFlow_PersonalDetailsBlock_mvc_translationsResources_plPL, PartnersHub_RealAccountCreationFlow_PersonalDetailsBlock_mvc_translationsResources_ptPT, PartnersHub_RealAccountCreationFlow_PersonalDetailsBlock_mvc_translationsResources_ruRU) {
    return {
        "de-DE": {
            "translations": PartnersHub_RealAccountCreationFlow_PersonalDetailsBlock_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_RealAccountCreationFlow_PersonalDetailsBlock_mvc_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_RealAccountCreationFlow_PersonalDetailsBlock_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_RealAccountCreationFlow_PersonalDetailsBlock_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_RealAccountCreationFlow_PersonalDetailsBlock_mvc_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_RealAccountCreationFlow_PersonalDetailsBlock_mvc_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_RealAccountCreationFlow_PersonalDetailsBlock_mvc_translationsResources_ruRU,
            "isRTL": false
        }
    };
});