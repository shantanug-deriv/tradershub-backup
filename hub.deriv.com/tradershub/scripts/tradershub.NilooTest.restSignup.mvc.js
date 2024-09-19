define("tradershub.NilooTest.restSignup.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "OutSystemsUI.controller", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "OutSystemsUI.controller$IsDesktop", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "RESTAPIWebsocket.model$ST_178833eaf81da5980f461500f3f98736Structure", "tradershub.referencesHealth$RESTAPIWebsocket", "RESTAPIWebsocket.model$ST_6e1c5ab117f6599aeb50c68a9a2fa65aStructure", "RESTAPIWebsocket.controller$VerifyEmail"], function(OSRuntimeCore, tradershubModel, OutSystemsUIController, RESTAPIWebsocketModel, RESTAPIWebsocketController) {
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
                Form: OS.Model.ValidationWidgetRecord,
                Input_Email: OS.Model.ValidationWidgetRecord
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

define("tradershub.NilooTest.restSignup.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "react", "@outsystems/runtime-view-js", "tradershub.NilooTest.restSignup.mvc$model", "tradershub.NilooTest.restSignup.mvc$controller", "tradershub.clientVariables", "tradershub.NilooTest.TestLayout.mvc$view", "@outsystems/runtime-widgets-js", "OutSystemsUI.Utilities.Separator.mvc$view", "tradershub.Signup.SocialLogin.mvc$view", "OutSystemsUI.controller$IsDesktop", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "RESTAPIWebsocket.model$ST_178833eaf81da5980f461500f3f98736Structure", "tradershub.referencesHealth$RESTAPIWebsocket", "RESTAPIWebsocket.model$ST_6e1c5ab117f6599aeb50c68a9a2fa65aStructure", "RESTAPIWebsocket.controller$VerifyEmail"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, RESTAPIWebsocketModel, RESTAPIWebsocketController, React, OSView, tradershub_NilooTest_restSignup_mvc_model, tradershub_NilooTest_restSignup_mvc_controller, tradershubClientVariables, tradershub_NilooTest_TestLayout_mvc_view, OSWidgets, OutSystemsUI_Utilities_Separator_mvc_view, tradershub_Signup_SocialLogin_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "NilooTest.restSignup";
        }

        static getAttributes() {
            return {
                codeFunction: "restSignup",
                functionKey: "259cab0f-2181-4140-842a-81548d054382",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.NilooTest.restSignup.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return ["scripts/tradershub.JSCookie.js"];
        }

        static getBlocks() {
            return [tradershub_NilooTest_TestLayout_mvc_view, OutSystemsUI_Utilities_Separator_mvc_view, tradershub_Signup_SocialLogin_mvc_view];
        }

        get modelFactory() {
            return tradershub_NilooTest_restSignup_mvc_model;
        }

        get controllerFactory() {
            return tradershub_NilooTest_restSignup_mvc_controller;
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


            return "Easy And Free Sign Up | Online Trading | Hub.Deriv.com";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(tradershub_NilooTest_TestLayout_mvc_view, {
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
                    mainContent: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "color: #414652; font-size: 14px; margin-bottom: 0px; margin-right: 0px; margin-top: 0px; padding: 16px; text-align: left;"
                            },
                            gridProperties: {
                                marginLeft: "0"
                            },
                            style: "main-container full-width",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "MainContainer"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: true,
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            gridProperties: {
                                classes: "OSInline",
                                width: "486px"
                            },
                            style: "content-container",
                            visible: model.getCachedValue(idService.getId("ContentContainer.Visible"), function() {
                                return OutSystemsUIController.default.isDesktop$Action(callContext).isDesktopOut;
                            }),
                            _idProps: {
                                service: idService,
                                name: "ContentContainer"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "display-flex flex-direction-column gap-base ",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "ContentWrapper"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-family: \'Ubuntu\'; font-size: 32px; font-weight: bold; margin-bottom: 0px;"
                            },
                            text: ["Trusted for 25 years"],
                            _idProps: {
                                service: idService,
                                uuid: "5"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "6"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-right: 0px; padding: 0px;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "IconListContainer2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            extendedProperties: {
                                style: "height: 16px; margin-right: 8px;"
                            },
                            gridProperties: {
                                width: "16px"
                            },
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.checkmark.svg"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "8"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            text: ["Unique trade types"],
                            _idProps: {
                                service: idService,
                                uuid: "9"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-right: 0px; padding: 0px;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "IconListContainer3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            extendedProperties: {
                                style: "height: 16px; margin-right: 8px;"
                            },
                            gridProperties: {
                                width: "16px"
                            },
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.checkmark.svg"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "11"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            text: ["Hundreds of instruments"],
                            _idProps: {
                                service: idService,
                                uuid: "12"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-right: 0px; padding: 0px;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "IconListContainer"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            extendedProperties: {
                                style: "height: 16px; margin-right: 8px;"
                            },
                            gridProperties: {
                                width: "16px"
                            },
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.checkmark.svg"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "14"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            text: ["Financial and derived markets"],
                            _idProps: {
                                service: idService,
                                uuid: "15"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "16"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 20px;"
                            },
                            text: ["Trade anywhere, anytime. ", React.createElement("br")],
                            _idProps: {
                                service: idService,
                                uuid: "17"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "font-size: 20px; font-weight: bold;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "18"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, "Get your free demo account today. "))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "text-align: left;"
                            },
                            gridProperties: {
                                classes: "OSInline",
                                width: "486px"
                            },
                            style: "sign-up-container",
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "SignUpContainer"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-weight: 700; margin-bottom: 0px;"
                            },
                            style: "sign-up-header",
                            text: ["Join over 2.5 million traders", React.createElement("br")],
                            _idProps: {
                                service: idService,
                                uuid: "20"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Form, {
                            _validationProps: {
                                validationService: validationService
                            },
                            extendedProperties: {
                                style: "margin-top: 16px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "\"form card\"",
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
                                uuid: "22"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Label, {
                            extendedProperties: {
                                style: "margin-bottom: 8px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: true,
                            targetWidget: "Input_Email",
                            _idProps: {
                                service: idService,
                                uuid: "23"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, "Email"), React.createElement(OSWidgets.Input, {
                            _validationProps: {
                                validationService: validationService,
                                validationParentId: idService.getId("Form")
                            },
                            enabled: true,
                            extendedEvents: {
                                onBlur: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.validate$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            extendedProperties: {
                                style: "height: 40px; padding: 0px 16px 0px 16px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: /*Email*/ 7,
                            mandatory: true,
                            maxLength: 50,
                            prompt: "Enter your email",
                            style: "form-control",
                            variable: model.createVariable(OS.DataTypes.DataTypes.Email, tradershubClientVariables.getEmail(), function(value) {
                                tradershubClientVariables.setEmail(value);
                            }),
                            _idProps: {
                                service: idService,
                                name: "Input_Email"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-top: 16px;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "25"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, "By pressing “Continue”, I agree to the", React.createElement(OSWidgets.Link, {
                            enabled: true,
                            extendedProperties: {
                                target: "_blank"
                            },
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                            url: OS.Navigation.generateScreenURL("https://deriv.com/terms-and-conditions/#clients", {}),
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "26"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "color: #272B30; font-weight: bold; text-decoration: underline;"
                            },
                            text: ["terms and conditions"],
                            _idProps: {
                                service: idService,
                                name: "ClientTncLink"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), "."), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "28"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Button, {
                            enabled: true,
                            extendedProperties: {
                                style: "border-radius: 100px; height: 40px; margin-top: 24px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            isDefault: true,
                            onClick: function() {
                                controller.validationService.validateWidget(idService.getId("Form"));
                                return Promise.resolve().then(function() {
                                    var eventHandlerContext = callContext.clone();
                                    return controller.submitOnClick$Action(controller.callContext(eventHandlerContext));
                                });

                                ;
                            },
                            style: "btn btn-primary",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "29"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 14px;"
                            },
                            text: ["Continue"],
                            _idProps: {
                                service: idService,
                                uuid: "30"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-right: 0px; margin-top: 24px; padding: 0px;"
                            },
                            style: "display-flex align-items-center",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "31"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "flex-1",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "32"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OutSystemsUI_Utilities_Separator_mvc_view, {
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
                                uuid: "33",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })), React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "font-size: 12px; margin-left: 16px; margin-right: 16px;"
                            },
                            text: ["Or sign up with"],
                            _idProps: {
                                service: idService,
                                uuid: "34"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            style: "flex-1",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "35"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OutSystemsUI_Utilities_Separator_mvc_view, {
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
                                uuid: "36",
                                alias: "3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        }))), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "margin-bottom: 24px; margin-top: 24px;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "37"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(tradershub_Signup_SocialLogin_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                showPasskey: false
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
                                uuid: "38",
                                alias: "4"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            _dependencies: []
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "text-align: center;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "39"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, "Already have an account?", React.createElement(OSWidgets.Link, {
                            enabled: true,
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                            url: OS.Navigation.generateScreenURL("https://oauth.deriv.com/oauth2/authorize?app_id=16929&l=en&brand=deriv&platform=", {}),
                            visible: true,
                            _idProps: {
                                service: idService,
                                name: "LoginLink"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Text, {
                            extendedProperties: {
                                style: "color: #101213; font-weight: bold; text-decoration: underline;"
                            },
                            text: ["Log in"],
                            _idProps: {
                                service: idService,
                                uuid: "41"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })))))];
                    })
                },
                _dependencies: [asPrimitiveValue(tradershubClientVariables.getEmail())]
            }));
        }
    }

    return View;
});
define("tradershub.NilooTest.restSignup.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.NilooTest.controller", "tradershub.NilooTest.restSignup.mvc$controller.OnReady.RudderStackJS", "tradershub.NilooTest.restSignup.mvc$controller.SendVerifyEmail.VerifyEmailPayloadJS", "tradershub.NilooTest.restSignup.mvc$controller.SendVerifyEmail.RudderStackJS", "tradershub.NilooTest.restSignup.mvc$controller.OnInitialize.CheckAuthURLParamJS", "tradershub.NilooTest.restSignup.mvc$controller.Validate.ValidateEmailJS", "tradershub.NilooTest.restSignup.mvc$controller.SubmitOnClick.RudderStackJS", "OutSystemsUI.controller$IsDesktop", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "RESTAPIWebsocket.model$ST_178833eaf81da5980f461500f3f98736Structure", "tradershub.referencesHealth$RESTAPIWebsocket", "RESTAPIWebsocket.model$ST_6e1c5ab117f6599aeb50c68a9a2fa65aStructure", "RESTAPIWebsocket.controller$VerifyEmail"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, RESTAPIWebsocketModel, RESTAPIWebsocketController, tradershubLanguageResources, tradershubClientVariables, tradershub_NilooTestController, tradershub_NilooTest_restSignup_mvc_controller_OnReady_RudderStackJS, tradershub_NilooTest_restSignup_mvc_controller_SendVerifyEmail_VerifyEmailPayloadJS, tradershub_NilooTest_restSignup_mvc_controller_SendVerifyEmail_RudderStackJS, tradershub_NilooTest_restSignup_mvc_controller_OnInitialize_CheckAuthURLParamJS, tradershub_NilooTest_restSignup_mvc_controller_Validate_ValidateEmailJS, tradershub_NilooTest_restSignup_mvc_controller_SubmitOnClick_RudderStackJS) {
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
            get _onReady$Action() {
                if (!(this.hasOwnProperty("__onReady$Action"))) {
                    this.__onReady$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnReady", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnReady");
                                span.setAttribute("outsystems.function.key", "03c8bfc8-9c5a-46fe-b846-abf5ab92f99d");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                OS.Logger.startActiveSpan("RudderStack", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "RudderStack");
                                        span.setAttribute("outsystems.function.key", "65b2d2da-b8ef-421b-aca7-51de7b84ad54");
                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(tradershub_NilooTest_restSignup_mvc_controller_OnReady_RudderStackJS, "RudderStack", "OnReady", null, function($parameters) {}, {}, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
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

            get _sendVerifyEmail$Action() {
                if (!(this.hasOwnProperty("__sendVerifyEmail$Action"))) {
                    this.__sendVerifyEmail$Action = function(userEmailIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("SendVerifyEmail", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "SendVerifyEmail");
                                span.setAttribute("outsystems.function.key", "4579914b-50ef-4b85-a0fb-4fb27d6ddcfb");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("SendVerifyEmail");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.NilooTest.restSignup.SendVerifyEmail$vars"))());
                                vars.value.userEmailInLocal = userEmailIn;
                                var verifyEmailVar = new OS.DataTypes.VariableHolder();
                                var verifyEmailPayloadJSResult = new OS.DataTypes.VariableHolder();
                                var jSONDeserializePostVerifyEmailRequestVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketModel.ST_178833eaf81da5980f461500f3f98736Structure))());
                                return OS.Flow.executeAsyncFlow(function() {
                                    verifyEmailPayloadJSResult.value = OS.Logger.startActiveSpan("VerifyEmailPayload", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "VerifyEmailPayload");
                                            span.setAttribute("outsystems.function.key", "88ca3b3c-9948-46eb-9fac-333c74e08d8f");
                                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                        }

                                        try {
                                            return controller.safeExecuteJSNode(tradershub_NilooTest_restSignup_mvc_controller_SendVerifyEmail_VerifyEmailPayloadJS, "VerifyEmailPayload", "SendVerifyEmail", {
                                                UserEmail: OS.DataConversion.JSNodeParamConverter.to(vars.value.userEmailInLocal, OS.DataTypes.DataTypes.Email),
                                                AppId: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getAppId(), OS.DataTypes.DataTypes.Text),
                                                URL: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getURL(), OS.DataTypes.DataTypes.Text),
                                                Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                                TestAppId: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                                TestHost: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                            }, function($parameters) {
                                                var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.NilooTest.restSignup.SendVerifyEmail$verifyEmailPayloadJSResult"))();
                                                jsNodeResult.payloadOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Payload, OS.DataTypes.DataTypes.Text);
                                                jsNodeResult.testAppIdOut = OS.DataConversion.JSNodeParamConverter.from($parameters.TestAppId, OS.DataTypes.DataTypes.Text);
                                                jsNodeResult.testHostOut = OS.DataConversion.JSNodeParamConverter.from($parameters.TestHost, OS.DataTypes.DataTypes.Text);
                                                return jsNodeResult;
                                            }, {}, {});
                                        } finally {
                                            if (span) {
                                                span.end();
                                            }

                                        }

                                    }, 1);
                                    // JSON Deserialize: JSONDeserializePostVerifyEmailRequest
                                    jSONDeserializePostVerifyEmailRequestVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(verifyEmailPayloadJSResult.value.payloadOut, RESTAPIWebsocketModel.ST_178833eaf81da5980f461500f3f98736Structure, false);
                                    // Execute Action: VerifyEmail
                                    model.flush();
                                    return RESTAPIWebsocketController.default.verifyEmail$Action(jSONDeserializePostVerifyEmailRequestVar.value.dataOut, verifyEmailPayloadJSResult.value.testHostOut, verifyEmailPayloadJSResult.value.testAppIdOut, "EN", callContext).then(function(value) {
                                        verifyEmailVar.value = value;
                                    }).then(function() {
                                        OS.Logger.startActiveSpan("RudderStack", function(span) {
                                            if (span) {
                                                span.setAttribute("code.function", "RudderStack");
                                                span.setAttribute("outsystems.function.key", "93cdba0c-ed00-4494-a879-d47a07827e51");
                                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                                span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                            }

                                            try {
                                                return controller.safeExecuteJSNode(tradershub_NilooTest_restSignup_mvc_controller_SendVerifyEmail_RudderStackJS, "RudderStack", "SendVerifyEmail", null, function($parameters) {}, {}, {});
                                            } finally {
                                                if (span) {
                                                    span.end();
                                                }

                                            }

                                        }, 1);
                                        // Destination: /tradershub/EmailSentScreen
                                        return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "email-verification", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
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

                return this.__sendVerifyEmail$Action;
            }
            set _sendVerifyEmail$Action(value) {
                this.__sendVerifyEmail$Action = value;
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
                                span.setAttribute("outsystems.function.key", "4b216d98-ad5e-4deb-a2a9-180aae37286a");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnInitialize");
                                callContext = controller.callContext(callContext);
                                var checkAuthURLParamJSResult = new OS.DataTypes.VariableHolder();
                                checkAuthURLParamJSResult.value = OS.Logger.startActiveSpan("CheckAuthURLParam", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "CheckAuthURLParam");
                                        span.setAttribute("outsystems.function.key", "4e854488-77b1-4c2b-9f03-9c2b3e0208b1");
                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(tradershub_NilooTest_restSignup_mvc_controller_OnInitialize_CheckAuthURLParamJS, "CheckAuthURLParam", "OnInitialize", {
                                            LoginID: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                            AuthToken: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                            LoginIDTokenPairs: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                        }, function($parameters) {
                                            var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.NilooTest.restSignup.OnInitialize$checkAuthURLParamJSResult"))();
                                            jsNodeResult.loginIDOut = OS.DataConversion.JSNodeParamConverter.from($parameters.LoginID, OS.DataTypes.DataTypes.Text);
                                            jsNodeResult.authTokenOut = OS.DataConversion.JSNodeParamConverter.from($parameters.AuthToken, OS.DataTypes.DataTypes.Text);
                                            jsNodeResult.loginIDTokenPairsOut = OS.DataConversion.JSNodeParamConverter.from($parameters.LoginIDTokenPairs, OS.DataTypes.DataTypes.Text);
                                            return jsNodeResult;
                                        }, {}, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
                                if ((((checkAuthURLParamJSResult.value.authTokenOut) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
                                    // ActiveLoginId = CheckAuthURLParam.LoginID
                                    tradershubClientVariables.setActiveLoginId(checkAuthURLParamJSResult.value.loginIDOut);
                                    // AuthToken = CheckAuthURLParam.AuthToken
                                    tradershubClientVariables.setAuthToken(checkAuthURLParamJSResult.value.authTokenOut);
                                    // Destination: /tradershub/Hub
                                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "Hub", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                                } else {
                                    // Email = ""
                                    tradershubClientVariables.setEmail("");
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

            get _validate$Action() {
                if (!(this.hasOwnProperty("__validate$Action"))) {
                    this.__validate$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("Validate", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "Validate");
                                span.setAttribute("outsystems.function.key", "55bf40a6-4fe8-4340-9017-cc79d83355ff");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("Validate");
                                callContext = controller.callContext(callContext);
                                var validateEmailJSResult = new OS.DataTypes.VariableHolder();
                                validateEmailJSResult.value = OS.Logger.startActiveSpan("ValidateEmail", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "ValidateEmail");
                                        span.setAttribute("outsystems.function.key", "4fa3f0e1-8cfc-4a13-b0bf-00ff970aaa90");
                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(tradershub_NilooTest_restSignup_mvc_controller_Validate_ValidateEmailJS, "ValidateEmail", "Validate", {
                                            Email: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getEmail(), OS.DataTypes.DataTypes.Email),
                                            IsEmailValid: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
                                            ValidationError: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                        }, function($parameters) {
                                            var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.NilooTest.restSignup.Validate$validateEmailJSResult"))();
                                            jsNodeResult.isEmailValidOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsEmailValid, OS.DataTypes.DataTypes.Boolean);
                                            jsNodeResult.validationErrorOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ValidationError, OS.DataTypes.DataTypes.Text);
                                            return jsNodeResult;
                                        }, {}, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
                                // Input_Email.Valid = ValidateEmail.IsEmailValid
                                model.widgets.get(idService.getId("Input_Email")).validAttr = validateEmailJSResult.value.isEmailValidOut;
                                // Input_Email.ValidationMessage = ValidateEmail.ValidationError
                                model.widgets.get(idService.getId("Input_Email")).validationMessageAttr = validateEmailJSResult.value.validationErrorOut;
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__validate$Action;
            }
            set _validate$Action(value) {
                this.__validate$Action = value;
            }

            get _submitOnClick$Action() {
                if (!(this.hasOwnProperty("__submitOnClick$Action"))) {
                    this.__submitOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("SubmitOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "SubmitOnClick");
                                span.setAttribute("outsystems.function.key", "941604bc-1e17-4462-972a-b98964a517da");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("SubmitOnClick");
                                callContext = controller.callContext(callContext);
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Execute Action: Validate
                                    controller._validate$Action(callContext);
                                    return OS.Flow.executeSequence(function() {
                                        if ((model.widgets.get(idService.getId("Form")).validAttr)) {
                                            // Execute Action: SendVerifyEmail
                                            return controller._sendVerifyEmail$Action(tradershubClientVariables.getEmail(), callContext);
                                        } else {
                                            OS.Logger.startActiveSpan("RudderStack", function(span) {
                                                if (span) {
                                                    span.setAttribute("code.function", "RudderStack");
                                                    span.setAttribute("outsystems.function.key", "f83f2232-c67c-4401-b416-6b99add18835");
                                                    span.setAttribute("outsystems.function.owner.name", "tradershub");
                                                    span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                                    span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                                }

                                                try {
                                                    return controller.safeExecuteJSNode(tradershub_NilooTest_restSignup_mvc_controller_SubmitOnClick_RudderStackJS, "RudderStack", "SubmitOnClick", null, function($parameters) {}, {}, {});
                                                } finally {
                                                    if (span) {
                                                        span.end();
                                                    }

                                                }

                                            }, 1);
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

                return this.__submitOnClick$Action;
            }
            set _submitOnClick$Action(value) {
                this.__submitOnClick$Action = value;
            }


            onReady$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnReady__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnReady");
                        span.setAttribute("outsystems.function.key", "03c8bfc8-9c5a-46fe-b846-abf5ab92f99d");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
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

            sendVerifyEmail$Action(userEmailIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("SendVerifyEmail__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SendVerifyEmail");
                        span.setAttribute("outsystems.function.key", "4579914b-50ef-4b85-a0fb-4fb27d6ddcfb");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._sendVerifyEmail$Action, callContext, userEmailIn);
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
                        span.setAttribute("outsystems.function.key", "4b216d98-ad5e-4deb-a2a9-180aae37286a");
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

            validate$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("Validate__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "Validate");
                        span.setAttribute("outsystems.function.key", "55bf40a6-4fe8-4340-9017-cc79d83355ff");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._validate$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            submitOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("SubmitOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SubmitOnClick");
                        span.setAttribute("outsystems.function.key", "941604bc-1e17-4462-972a-b98964a517da");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._submitOnClick$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
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
                        return tradershub_NilooTestController.default.handleError(ex, this.callContext());
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
        Controller.registerVariableGroupType("tradershub.NilooTest.restSignup.SendVerifyEmail$vars", [{
            name: "UserEmail",
            attrName: "userEmailInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Email,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("tradershub.NilooTest.restSignup.SendVerifyEmail$verifyEmailPayloadJSResult", [{
            name: "Payload",
            attrName: "payloadOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "TestAppId",
            attrName: "testAppIdOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "TestHost",
            attrName: "testHostOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("tradershub.NilooTest.restSignup.OnInitialize$checkAuthURLParamJSResult", [{
            name: "LoginID",
            attrName: "loginIDOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "AuthToken",
            attrName: "authTokenOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "LoginIDTokenPairs",
            attrName: "loginIDTokenPairsOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("tradershub.NilooTest.restSignup.Validate$validateEmailJSResult", [{
            name: "IsEmailValid",
            attrName: "isEmailValidOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Boolean,
            defaultValue: function() {
                return false;
            }
        }, {
            name: "ValidationError",
            attrName: "validationErrorOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});

define("tradershub.NilooTest.restSignup.mvc$controller.OnReady.RudderStackJS", [], function() {
    return function($actions, $roles, $public) {
        let rudderStackLoaded = false;

        function checkForRudderStack() {
            if (window?.rudderanalytics && !rudderStackLoaded) {
                window.rudderanalytics.ready(() => {
                    if (!rudderStackLoaded) {
                        Analytics.Analytics.trackEvent("ce_virtual_signup_form", {
                            action: "open",
                            form_name: "virtual_signup_form_outsystems"
                        });
                        rudderStackLoaded = true;
                    }
                    clearInterval(intervalId);
                });
            }
        }

        const intervalId = setInterval(() => {
            checkForRudderStack();
        }, 2000);
    };
});

define("tradershub.NilooTest.restSignup.mvc$controller.SendVerifyEmail.VerifyEmailPayloadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const cookies = getCookiesFields()
        const cookies_objects = getCookiesObject(cookies)
        const cookies_value = getDataObjFromCookies(cookies_objects, cookies)
        const affiliate_token = getCookieValue('affiliate_tracking')

        $parameters.Payload = JSON.stringify({
            verify_email: $parameters.UserEmail,
            type: 'account_opening',
            url_parameters: {
                ...cookies_value,
                affiliate_token,
            }
        })

        $parameters.TestAppId = localStorage.getItem('config.app_id') || $parameters.AppId;
        $parameters.TestHost = localStorage.getItem('config.server_url') || $parameters.URL;

    };
});

define("tradershub.NilooTest.restSignup.mvc$controller.SendVerifyEmail.RudderStackJS", [], function() {
    return function($actions, $roles, $public) {
        setTimeout(() => {
            Analytics.Analytics.trackEvent("ce_virtual_signup_form", {
                action: "started",
                signup_provider: "email",
                form_name: "virtual_signup_form_outsystems"
            })
        }, 100);
    };
});

define("tradershub.NilooTest.restSignup.mvc$controller.OnInitialize.CheckAuthURLParamJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const params = new URLSearchParams(window.location.search)

        if (params.has("token1") && params.has("acct1")) {
            const result = {};

            const accounts = {};
            const tokens = {};
            for (let param of params) {
                if (param[0].startsWith('acct')) {
                    accounts[param[0]] = param[1];
                } else if (param[0].startsWith('token')) {
                    tokens[param[0]] = param[1];
                }
            }
            // Match accounts with tokens
            Object.keys(accounts).forEach(key => {
                const tokenKey = 'token' + key.slice(4);
                result[accounts[key]] = {
                    token: tokens[tokenKey]
                };
            });


            localStorage.setItem("accountsList", JSON.stringify(result))
            $parameters.LoginIDTokenPairs = JSON.stringify(result)
            $parameters.LoginID = params.get("acct1");
            $parameters.AuthToken = params.get("token1")
        }
    };
});

define("tradershub.NilooTest.restSignup.mvc$controller.Validate.ValidateEmailJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/;

        const validationSchema = yup.object().shape({
            Email: yup.string().required("Email is required.").matches(emailRegex, "That doesn't look like an email address.")
        })

        const {
            errors,
            validFields
        } = validate(validationSchema, {
            Email: $parameters.Email
        })

        $parameters.IsEmailValid = validFields.Email;

        $parameters.ValidationError = errors.Email;
    };
});

define("tradershub.NilooTest.restSignup.mvc$controller.SubmitOnClick.RudderStackJS", [], function() {
    return function($actions, $roles, $public) {
        Analytics.Analytics.trackEvent("ce_virtual_signup_form", {
            action: "continue_attempt",
            signup_provider: "email",
            form_name: "virtual_signup_form_outsystems"
        })
    };
});