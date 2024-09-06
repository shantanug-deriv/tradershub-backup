define("PartnersHub.Signup.Signup.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.model$ST_8ae1180ce44995afc567de3f72e5c712Structure", "PartnersHub.controller$SendVerifyEmail", "PartnersHub.controller$RedirectToOauth", "PartnersHub.controller$UseDevice"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("isCreateAccountLoading", "isCreateAccountLoadingVar", "isCreateAccountLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new VariablesRecord(new VariablesRecord.RecordClass({
                    isCreateAccountLoadingVar: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        var VariablesRecord = VariablesRecordInner;
        VariablesRecord.init();
    }
    class WidgetsRecord extends
    OS.Model.BaseWidgetRecordMap {
        static getWidgetsType() {
            return {
                Form3: OS.Model.ValidationWidgetRecord,
                Email3: OS.Model.ValidationWidgetRecord,
                Form2: OS.Model.ValidationWidgetRecord,
                Email2: OS.Model.ValidationWidgetRecord
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

define("PartnersHub.Signup.Signup.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.Signup.Signup.mvc$model", "PartnersHub.Signup.Signup.mvc$controller", "PartnersHub.clientVariables", "PartnersHub.Layouts.LayoutSignup.mvc$view", "@outsystems/runtime-widgets-js", "OutSystemsUI.Utilities.ButtonLoading.mvc$view", "CustomComponents.ButtonVariants.PrimaryButton.mvc$view", "PartnersHub.model$ST_8ae1180ce44995afc567de3f72e5c712Structure", "PartnersHub.controller$SendVerifyEmail", "PartnersHub.controller$RedirectToOauth", "PartnersHub.controller$UseDevice"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_Signup_Signup_mvc_model, PartnersHub_Signup_Signup_mvc_controller, PartnersHubClientVariables, PartnersHub_Layouts_LayoutSignup_mvc_view, OSWidgets, OutSystemsUI_Utilities_ButtonLoading_mvc_view, CustomComponents_ButtonVariants_PrimaryButton_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "Signup.Signup";
        }

        static getAttributes() {
            return {
                codeFunction: "Signup",
                functionKey: "7409996c-f250-4bc9-85ba-321f8f6c0516",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.Signup.Signup.css", "css/PartnersHub.PHubTest.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [PartnersHub_Layouts_LayoutSignup_mvc_view, OutSystemsUI_Utilities_ButtonLoading_mvc_view, CustomComponents_ButtonVariants_PrimaryButton_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_Signup_Signup_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_Signup_Signup_mvc_controller;
        }

        get title() {


            return OSView.BaseView.BaseWebScreen.getTranslation("bJkJdFDyyUuFujIfj2wFFg#Title", "Signup");
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(PartnersHub_Layouts_LayoutSignup_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    BackgroundColor: "white"
                },
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
                    mainContent: new PlaceholderContent(function() {
                        return [$if(PartnersHubClientVariables.getIsDesktop(), false, this, function() {
                            return [React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "margin-top: 0px;"
                                },
                                style: "login-screen",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "margin-right: 16px; max-width: 486px;"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "2"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "color: #414652; font-size: 32px; font-style: normal; font-weight: 700; line-height: 40px;"
                                },
                                text: ["Join a global network of over 60,000 partners today!"],
                                _idProps: {
                                    service: idService,
                                    uuid: "3"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "margin-bottom: 16px; margin-top: 16px;"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "4"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "5"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Image, {
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.checkmark.svg"),
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "6"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "color: #414652; font-size: 16px; margin-left: 8px;"
                                },
                                text: ["USD 47m+ paid out, withdraw anytime"],
                                _idProps: {
                                    service: idService,
                                    uuid: "7"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "8"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Image, {
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.checkmark.svg"),
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "9"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "color: #414652; font-size: 16px; margin-left: 8px;"
                                },
                                text: ["1m+ clients across 190 countries"],
                                _idProps: {
                                    service: idService,
                                    uuid: "10"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "11"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Image, {
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.checkmark.svg"),
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "12"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "color: #414652; font-size: 16px; margin-left: 8px;"
                                },
                                text: ["24/7 support, whenever you need it"],
                                _idProps: {
                                    service: idService,
                                    uuid: "13"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }))), React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "color: #414652; font-size: 20px; font-style: normal; font-weight: 700; line-height: 30px;"
                                },
                                text: ["Refer traders and earn up to 45% commissions."],
                                _idProps: {
                                    service: idService,
                                    uuid: "14"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "max-width: 486px;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "486px"
                                },
                                style: "signup",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "15"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Form, {
                                _validationProps: {
                                    validationService: validationService
                                },
                                extendedProperties: {
                                    style: "align-items: flex-start; display: flex; flex-direction: column; gap: 24px; padding: 16px;"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                style: "",
                                _idProps: {
                                    service: idService,
                                    name: "Form3"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "color: #414652; font-size: 24px; font-weight: bold;"
                                },
                                text: ["Become a Deriv partner"],
                                _idProps: {
                                    service: idService,
                                    uuid: "17"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "display: flex; flex-direction: column; gap: 8px;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "18"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "color: #4F575E;"
                                },
                                text: ["Email"],
                                _idProps: {
                                    service: idService,
                                    uuid: "19"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.Input, {
                                _validationProps: {
                                    validationService: validationService,
                                    validationParentId: idService.getId("Form3")
                                },
                                enabled: true,
                                extendedProperties: {
                                    style: "font-size: 16px; height: 48px;"
                                },
                                gridProperties: {
                                    width: "100%"
                                },
                                inputType: /*Text*/ 0,
                                mandatory: true,
                                maxLength: 50,
                                prompt: "Enter your email",
                                style: "form-control",
                                variable: model.createVariable(OS.DataTypes.DataTypes.Text, PartnersHubClientVariables.getSignupEmail(), function(value) {
                                    PartnersHubClientVariables.setSignupEmail(value);
                                }),
                                _idProps: {
                                    service: idService,
                                    name: "Email3"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "21"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "color: #414652;"
                                },
                                text: ["By pressing “Continue”, I agree to the"],
                                _idProps: {
                                    service: idService,
                                    uuid: "22"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.Link, {
                                enabled: true,
                                extendedProperties: {
                                    target: "_blank",
                                    rel: "noopener",
                                    style: "border: none; color: #000; font-weight: bold; text-decoration: underline;"
                                },
                                gridProperties: {
                                    classes: "ThemeGrid_MarginGutter"
                                },
                                transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                                url: OS.Navigation.generateScreenURL("https://deriv.com/terms-and-conditions#clients", {}),
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "23"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, "terms and conditions.")), React.createElement(OutSystemsUI_Utilities_ButtonLoading_mvc_view, {
                                getOwnerSpan: function() {
                                    return _this.getChildSpan("render");
                                },
                                getOwnerDisposeSpan: function() {
                                    return _this.getChildSpan("destroy");
                                },
                                inputs: {
                                    IsLoading: model.variables.isCreateAccountLoadingVar
                                },
                                events: {
                                    _handleError: function(ex) {
                                        controller.handleError(ex);
                                    }
                                },
                                _validationProps: {
                                    validationService: validationService,
                                    validationParentId: idService.getId("Form3")
                                },
                                _idProps: {
                                    service: idService,
                                    uuid: "24",
                                    alias: "2"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                placeholders: {
                                    button: new PlaceholderContent(function() {
                                        return [React.createElement(OSWidgets.Button, {
                                            enabled: true,
                                            extendedProperties: {
                                                style: "border-radius: 100px; height: 48px;"
                                            },
                                            gridProperties: {
                                                width: "100%"
                                            },
                                            isDefault: false,
                                            onClick: function() {
                                                controller.validationService.validateWidget(idService.getId("Form3"));
                                                return Promise.resolve().then(function() {
                                                    var eventHandlerContext = callContext.clone();
                                                    return controller.createPartnerAccountOnClick$Action(controller.callContext(eventHandlerContext));
                                                });

                                                ;
                                            },
                                            style: "btn btn-primary primary-button",
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "25"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            style: "osui-btn-loading__spinner-animation",
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                uuid: "26"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }), "Continue")];
                                    })
                                },
                                _dependencies: []
                            }), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "align-items: center; display: flex; justify-content: center;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "27"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "background: #6A7178; height: 1px;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "28"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "color: #6A7178; text-align: center; width: 100%;"
                                },
                                text: ["Or sign up with"],
                                _idProps: {
                                    service: idService,
                                    uuid: "29"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "background: #6A7178; height: 1px;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "30"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "align-items: center; display: flex; justify-content: center;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "31"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "align-items: center; border: 0.5px solid #414652; border-radius: 100px; display: flex; flex-shrink: 0; gap: 8px; height: 48px; justify-content: center; padding: 8px 16px;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "72px"
                                },
                                style: "social-btn",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "32"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Image, {
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.google_md.png"),
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "33"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "align-items: center; border: 0.5px solid #414652; border-radius: 100px; display: flex; flex-shrink: 0; gap: 8px; height: 48px; justify-content: center; margin-right: 16px; padding: 8px 16px;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "72px",
                                    marginLeft: "16px"
                                },
                                style: "social-btn",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "34"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Image, {
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.facebook_md.png"),
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "35"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "align-items: center; border: 0.5px solid #414652; border-radius: 100px; display: flex; flex-shrink: 0; gap: 8px; height: 48px; justify-content: center; padding: 8px 16px;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "72px"
                                },
                                style: "social-btn",
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "36"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Image, {
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.apple_md.png"),
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "37"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }))), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "text-align: center;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "38"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, "Already have an account?", React.createElement(OSWidgets.Link, {
                                enabled: true,
                                extendedProperties: {
                                    style: "border: none; color: #000; font-weight: bold; text-decoration: underline;"
                                },
                                gridProperties: {
                                    classes: "ThemeGrid_MarginGutter"
                                },
                                onClick: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.redirectOAuth$Action(controller.callContext(eventHandlerContext));

                                    ;
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "39"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, "Log in")))))];
                        }, function() {
                            return [React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "40"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Form, {
                                _validationProps: {
                                    validationService: validationService
                                },
                                extendedProperties: {
                                    style: "align-items: flex-start; display: flex; flex-direction: column; gap: 24px; padding: 16px;"
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
                            }, React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "color: #222; font-size: 20px; font-weight: bold; margin-top: -8px;"
                                },
                                text: ["Become a Deriv partner"],
                                _idProps: {
                                    service: idService,
                                    uuid: "42"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "display: flex; flex-direction: column;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "43"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "font-size: 16px; margin-bottom: 8px;"
                                },
                                text: ["Email"],
                                _idProps: {
                                    service: idService,
                                    uuid: "44"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.Input, {
                                _validationProps: {
                                    validationService: validationService,
                                    validationParentId: idService.getId("Form2")
                                },
                                enabled: true,
                                extendedProperties: {
                                    style: "font-size: 16px; height: 48px;"
                                },
                                gridProperties: {
                                    width: "100%"
                                },
                                inputType: /*Text*/ 0,
                                mandatory: true,
                                maxLength: 50,
                                prompt: "Enter your email",
                                style: "form-control",
                                variable: model.createVariable(OS.DataTypes.DataTypes.Text, PartnersHubClientVariables.getSignupEmail(), function(value) {
                                    PartnersHubClientVariables.setSignupEmail(value);
                                }),
                                _idProps: {
                                    service: idService,
                                    name: "Email2"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "46"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, "By pressing “Create account”, I agree to the", React.createElement(OSWidgets.Link, {
                                enabled: true,
                                extendedProperties: {
                                    target: "_blank",
                                    rel: "noopener",
                                    style: "border: none; color: #000; font-weight: bold; text-decoration: underline;"
                                },
                                gridProperties: {
                                    classes: "ThemeGrid_MarginGutter"
                                },
                                transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                                url: OS.Navigation.generateScreenURL("https://deriv.com/terms-and-conditions#clients", {}),
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "47"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, "terms and conditions.")), React.createElement(CustomComponents_ButtonVariants_PrimaryButton_mvc_view, {
                                getOwnerSpan: function() {
                                    return _this.getChildSpan("render");
                                },
                                getOwnerDisposeSpan: function() {
                                    return _this.getChildSpan("destroy");
                                },
                                inputs: {
                                    isLoading: model.variables.isCreateAccountLoadingVar,
                                    Width: "100%",
                                    title: "Create account"
                                },
                                events: {
                                    _handleError: function(ex) {
                                        controller.handleError(ex);
                                    },
                                    onClick$Action: function() {
                                        return Promise.resolve().then(function() {
                                            var eventHandlerContext = callContext.clone();
                                            return controller.createPartnerAccountOnClick$Action(controller.callContext(eventHandlerContext));
                                        });;
                                    }
                                },
                                _validationProps: {
                                    validationService: validationService,
                                    validationParentId: idService.getId("Form2")
                                },
                                _idProps: {
                                    service: idService,
                                    uuid: "48",
                                    alias: "3"
                                },
                                _widgetRecordProvider: widgetsRecordProvider,
                                _dependencies: []
                            }), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "align-items: center; display: flex; justify-content: center;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "49"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "background: #6A7178; height: 1px;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "50"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.Text, {
                                extendedProperties: {
                                    style: "color: #6A7178; text-align: center; width: 100%;"
                                },
                                text: ["Or sign up with"],
                                _idProps: {
                                    service: idService,
                                    uuid: "51"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "background: #6A7178; height: 1px;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "52"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "align-items: center; display: flex; justify-content: center;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "53"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "align-items: flex-start; border: 0.5px solid #414652; border-radius: 100px; display: flex; flex-shrink: 0; gap: 8px; justify-content: center; padding: 8px 16px;"
                                },
                                gridProperties: {
                                    classes: "OSInline"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "54"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Image, {
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.google_md.png"),
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "55"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "align-items: flex-start; border: 0.5px solid #414652; border-radius: 100px; display: flex; flex-shrink: 0; gap: 8px; justify-content: center; margin-right: 24px; padding: 8px 16px;"
                                },
                                gridProperties: {
                                    marginLeft: "24px"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "56"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Image, {
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.facebook_md.png"),
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "57"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "align-items: flex-start; border: 0.5px solid #414652; border-radius: 100px; display: flex; flex-shrink: 0; gap: 8px; justify-content: center; padding: 8px 16px;"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "58"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, React.createElement(OSWidgets.Image, {
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.apple_md.png"),
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "59"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }))), React.createElement(OSWidgets.Container, {
                                align: /*Default*/ 0,
                                animate: false,
                                extendedProperties: {
                                    style: "text-align: center;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "100%"
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "60"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, "Already have an account?", React.createElement(OSWidgets.Link, {
                                enabled: true,
                                extendedProperties: {
                                    style: "border: none; color: #000; font-weight: bold; text-decoration: underline;"
                                },
                                gridProperties: {
                                    classes: "ThemeGrid_MarginGutter"
                                },
                                onClick: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.redirectOAuth$Action(controller.callContext(eventHandlerContext));

                                    ;
                                },
                                visible: true,
                                _idProps: {
                                    service: idService,
                                    uuid: "61"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            }, "Log in"))))];
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.isCreateAccountLoadingVar), asPrimitiveValue(PartnersHubClientVariables.getSignupEmail()), asPrimitiveValue(PartnersHubClientVariables.getIsDesktop())]
            }));
        }
    }

    return View;
});
define("PartnersHub.Signup.Signup.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.Signup.Signup.mvc$translationsResources", "PartnersHub.Signup.controller", "PartnersHub.Signup.Signup.mvc$controller.CreatePartnerAccountOnClick.EmailCheckJS", "PartnersHub.model$ST_8ae1180ce44995afc567de3f72e5c712Structure", "PartnersHub.controller$SendVerifyEmail", "PartnersHub.controller$RedirectToOauth", "PartnersHub.controller$UseDevice"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_Signup_Signup_mvc_TranslationsResources, PartnersHub_SignupController, PartnersHub_Signup_Signup_mvc_controller_CreatePartnerAccountOnClick_EmailCheckJS) {
    var OS = OSRuntimeCore;
    {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_Signup_Signup_mvc_TranslationsResources);
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
            get _onInitialize$Action() {
                if (!(this.hasOwnProperty("__onInitialize$Action"))) {
                    this.__onInitialize$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnInitialize", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnInitialize");
                                span.setAttribute("outsystems.function.key", "1f7c4084-ee19-436f-bf5c-47e1e2337ea1");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnInitialize");
                                callContext = controller.callContext(callContext);
                                // SignupEmail = ""
                                PartnersHubClientVariables.setSignupEmail("");
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

            get _createPartnerAccountOnClick$Action() {
                if (!(this.hasOwnProperty("__createPartnerAccountOnClick$Action"))) {
                    this.__createPartnerAccountOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("CreatePartnerAccountOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "CreatePartnerAccountOnClick");
                                span.setAttribute("outsystems.function.key", "263c2f9e-5cd9-44cf-9cdc-14979d368907");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("CreatePartnerAccountOnClick");
                                callContext = controller.callContext(callContext);
                                var sendVerifyEmailVar = new OS.DataTypes.VariableHolder();
                                var emailCheckJSResult = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    // isCreateAccountLoading = True
                                    model.variables.isCreateAccountLoadingVar = true;
                                    return OS.Flow.executeSequence(function() {
                                        if ((((PartnersHubClientVariables.getSignupEmail()) !== ("")))) {
                                            emailCheckJSResult.value = OS.Logger.startActiveSpan("EmailCheck", function(span) {
                                                if (span) {
                                                    span.setAttribute("code.function", "EmailCheck");
                                                    span.setAttribute("outsystems.function.key", "8ca5ed4d-3f41-4754-a4d0-d7501df1f8aa");
                                                    span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                                    span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                                    span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                                }

                                                try {
                                                    return controller.safeExecuteJSNode(PartnersHub_Signup_Signup_mvc_controller_CreatePartnerAccountOnClick_EmailCheckJS, "EmailCheck", "CreatePartnerAccountOnClick", {
                                                        email: OS.DataConversion.JSNodeParamConverter.to(PartnersHubClientVariables.getSignupEmail(), OS.DataTypes.DataTypes.Text),
                                                        isValid: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                                                    }, function($parameters) {
                                                        var jsNodeResult = new(controller.constructor.getVariableGroupType("PartnersHub.Signup.Signup.CreatePartnerAccountOnClick$emailCheckJSResult"))();
                                                        jsNodeResult.isValidOut = OS.DataConversion.JSNodeParamConverter.from($parameters.isValid, OS.DataTypes.DataTypes.Boolean);
                                                        return jsNodeResult;
                                                    }, {}, {});
                                                } finally {
                                                    if (span) {
                                                        span.end();
                                                    }

                                                }

                                            }, 1);
                                            return OS.Flow.executeSequence(function() {
                                                if ((emailCheckJSResult.value.isValidOut)) {
                                                    // Execute Action: SendVerifyEmail
                                                    model.flush();
                                                    return PartnersHubController.default.sendVerifyEmail$Action(function() {
                                                        var rec = new PartnersHubModel.ST_8ae1180ce44995afc567de3f72e5c712Structure();
                                                        rec.verify_emailAttr = PartnersHubClientVariables.getSignupEmail();
                                                        rec.typeAttr = "account_opening";
                                                        return rec;
                                                    }(), callContext).then(function(value) {
                                                        sendVerifyEmailVar.value = value;
                                                    }).then(function() {
                                                        // isCreateAccountLoading = False
                                                        model.variables.isCreateAccountLoadingVar = false;
                                                        // Destination: /PartnersHub/EmailVerification
                                                        return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "EmailVerification", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
                                                    });
                                                } else {
                                                    // Email2.Valid = False
                                                    model.widgets.get(idService.getId("Email2")).validAttr = false;
                                                    // Email3.Valid = False
                                                    model.widgets.get(idService.getId("Email3")).validAttr = false;
                                                    // Email2.ValidationMessage = "That doesn't look like an email address"
                                                    model.widgets.get(idService.getId("Email2")).validationMessageAttr = "That doesn\'t look like an email address";
                                                    // Email3.ValidationMessage = "That doesn't look like an email address"
                                                    model.widgets.get(idService.getId("Email3")).validationMessageAttr = "That doesn\'t look like an email address";
                                                    // isCreateAccountLoading = False
                                                    model.variables.isCreateAccountLoadingVar = false;
                                                }

                                            });
                                        } else {
                                            // Set isCreateAccountLoading
                                            // isCreateAccountLoading = False
                                            model.variables.isCreateAccountLoadingVar = false;
                                            // Email2.Valid = False
                                            model.widgets.get(idService.getId("Email2")).validAttr = false;
                                            // Email3.Valid = False
                                            model.widgets.get(idService.getId("Email3")).validAttr = false;
                                            // Email2.ValidationMessage = "Email is required"
                                            model.widgets.get(idService.getId("Email2")).validationMessageAttr = "Email is required";
                                            // Email3.ValidationMessage = "Email is required"
                                            model.widgets.get(idService.getId("Email3")).validationMessageAttr = "Email is required";
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

                return this.__createPartnerAccountOnClick$Action;
            }
            set _createPartnerAccountOnClick$Action(value) {
                this.__createPartnerAccountOnClick$Action = value;
            }

            get _redirectOAuth$Action() {
                if (!(this.hasOwnProperty("__redirectOAuth$Action"))) {
                    this.__redirectOAuth$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("RedirectOAuth", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "RedirectOAuth");
                                span.setAttribute("outsystems.function.key", "3c2fce89-d091-4979-be81-7672e2fd2413");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("RedirectOAuth");
                                callContext = controller.callContext(callContext);
                                // Execute Action: RedirectToOauth
                                PartnersHubController.default.redirectToOauth$Action(callContext);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__redirectOAuth$Action;
            }
            set _redirectOAuth$Action(value) {
                this.__redirectOAuth$Action = value;
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
                                span.setAttribute("outsystems.function.key", "60672cab-1505-4dc9-af74-c1ff79516d5f");
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


            onInitialize$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnInitialize__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnInitialize");
                        span.setAttribute("outsystems.function.key", "1f7c4084-ee19-436f-bf5c-47e1e2337ea1");
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

            createPartnerAccountOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("CreatePartnerAccountOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "CreatePartnerAccountOnClick");
                        span.setAttribute("outsystems.function.key", "263c2f9e-5cd9-44cf-9cdc-14979d368907");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._createPartnerAccountOnClick$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            redirectOAuth$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("RedirectOAuth__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "RedirectOAuth");
                        span.setAttribute("outsystems.function.key", "3c2fce89-d091-4979-be81-7672e2fd2413");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._redirectOAuth$Action, callContext);
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
                        span.setAttribute("outsystems.function.key", "60672cab-1505-4dc9-af74-c1ff79516d5f");
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
                        return PartnersHub_SignupController.default.handleError(ex, this.callContext());
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
        Controller.registerVariableGroupType("PartnersHub.Signup.Signup.CreatePartnerAccountOnClick$emailCheckJSResult", [{
            name: "isValid",
            attrName: "isValidOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});

define("PartnersHub.Signup.Signup.mvc$controller.CreatePartnerAccountOnClick.EmailCheckJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.isValid = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/.test($parameters.email)
    };
});


define("PartnersHub.Signup.Signup.mvc$translationsResources", ["exports"], function(exports) {
    return {};
});