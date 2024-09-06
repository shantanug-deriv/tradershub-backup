define("PartnersHub.PhoneNumberVerification.PhoneNumberVerification.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "OutSystemsUI.model", "PartnersHub.controller", "RESTAPIWebsocket.model", "PartnersHub.Layouts.LayoutDashboard.mvc$model", "PartnersHub.Layouts.DeviceLayout.mvc$model", "PartnersHub.PhoneNumberVerification.PhoneNumberVerificationBlock.mvc$model", "PartnersHub.Common.AlertBlock.mvc$model", "PartnersHub.PhoneNumberVerification.OTPVerificationBlock.mvc$model", "PartnersHub.PhoneNumberVerification.VerifyEmailPhoneNumberVerification.mvc$model", "OutSystemsUI.model$ST_60f22bd2e9b10a22278b8afe6d7f601aStructure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "PartnersHub.model$RL_c0f17d75c546075264f5d075e00ba65b", "PartnersHub.model$ST_e61d85f6aadd57329cc664ba1d0e64c1Structure", "PartnersHub.model$ST_4286a56d180b6bb5649e20efadd675fdStructure", "PartnersHub.model$ST_6e5c732e48bd98c4d439ed63bb1fb9c4Structure", "PartnersHub.model$ST_b04713a56316d52deeb5eab31f0fde62Structure", "PartnersHub.controller$SendPhoneNumberChallenge", "PartnersHub.model$ST_e00c986a2a7690520557f1ea58ae1d82Structure", "RESTAPIWebsocket.model$ST_f502318fbe2f943e6cfbba125766780aStructure", "PartnersHub.referencesHealth$RESTAPIWebsocket", "PartnersHub.controller$SendAuthorize", "PartnersHub.controller$UseDevice", "PartnersHub.controller$SendWebsiteStatus", "PartnersHub.model$ST_0be4704c381e15995202804b221a5e3aStructure", "PartnersHub.controller$SendResidenceList", "PartnersHub.model$ST_cd720662d62c87faf4dd5ea5ef8052cbStructure", "PartnersHub.controller$SendGetSettings", "PartnersHub.model$ST_9f80c4e8dbd08377be883c073be1c044Structure", "PartnersHub.model$ST_31dbcfc5cd9ae02da0ba12249f6ccfcdStructure", "PartnersHub.model$RL_ad0d7e810e49e61265e2d337c04416fc"], function(OSRuntimeCore, PartnersHubModel, OutSystemsUIModel, PartnersHubController, RESTAPIWebsocketModel, PartnersHub_Layouts_LayoutDashboard_mvcModel, PartnersHub_Layouts_DeviceLayout_mvcModel, PartnersHub_PhoneNumberVerification_PhoneNumberVerificationBlock_mvcModel, PartnersHub_Common_AlertBlock_mvcModel, PartnersHub_PhoneNumberVerification_OTPVerificationBlock_mvcModel, PartnersHub_PhoneNumberVerification_VerifyEmailPhoneNumberVerification_mvcModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("PhoneNumberList", "phoneNumberListVar", "PhoneNumberList", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new PartnersHubModel.RL_c0f17d75c546075264f5d075e00ba65b());
                    }, false, PartnersHubModel.RL_c0f17d75c546075264f5d075e00ba65b),
                    this.attr("WebsiteStatusResponse", "websiteStatusResponseVar", "WebsiteStatusResponse", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new PartnersHubModel.ST_e61d85f6aadd57329cc664ba1d0e64c1Structure());
                    }, false, PartnersHubModel.ST_e61d85f6aadd57329cc664ba1d0e64c1Structure),
                    this.attr("SelectedCarrier", "selectedCarrierVar", "SelectedCarrier", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("CurrentBlock", "currentBlockVar", "CurrentBlock", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "EmailVerificationBlock";
                    }, false),
                    this.attr("GetSettingsResponse", "getSettingsResponseVar", "GetSettingsResponse", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new PartnersHubModel.ST_4286a56d180b6bb5649e20efadd675fdStructure());
                    }, false, PartnersHubModel.ST_4286a56d180b6bb5649e20efadd675fdStructure),
                    this.attr("IsResendCodePopupOpen", "isResendCodePopupOpenVar", "IsResendCodePopupOpen", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("PhoneNumberChallengeErrorMessage", "phoneNumberChallengeErrorMessageVar", "PhoneNumberChallengeErrorMessage", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("UserEmailCode", "userEmailCodeVar", "UserEmailCode", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("Code", "codeIn", "Code", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("_codeInDataFetchStatus", "_codeInDataFetchStatus", "_codeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                Model._hasValidationWidgetsValue = (((((PartnersHub_Layouts_LayoutDashboard_mvcModel.hasValidationWidgets || PartnersHub_Layouts_DeviceLayout_mvcModel.hasValidationWidgets) || PartnersHub_PhoneNumberVerification_PhoneNumberVerificationBlock_mvcModel.hasValidationWidgets) || PartnersHub_Common_AlertBlock_mvcModel.hasValidationWidgets) || PartnersHub_PhoneNumberVerification_OTPVerificationBlock_mvcModel.hasValidationWidgets) || PartnersHub_PhoneNumberVerification_VerifyEmailPhoneNumberVerification_mvcModel.hasValidationWidgets);
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {
            if ("Code" in inputs) {
                this.variables.codeIn = OS.DataConversion.ServerDataConverter.from(inputs.Code, OS.DataTypes.DataTypes.Text);
            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.PhoneNumberVerification.PhoneNumberVerification.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "OutSystemsUI.model", "RESTAPIWebsocket.model", "react", "@outsystems/runtime-view-js", "PartnersHub.PhoneNumberVerification.PhoneNumberVerification.mvc$model", "PartnersHub.PhoneNumberVerification.PhoneNumberVerification.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "PartnersHub.Layouts.LayoutDashboard.mvc$view", "PartnersHub.Layouts.DeviceLayout.mvc$view", "PartnersHub.PhoneNumberVerification.PhoneNumberVerificationBlock.mvc$view", "PartnersHub.Common.AlertBlock.mvc$view", "PartnersHub.PhoneNumberVerification.OTPVerificationBlock.mvc$view", "PartnersHub.PhoneNumberVerification.VerifyEmailPhoneNumberVerification.mvc$view", "OutSystemsUI.model$ST_60f22bd2e9b10a22278b8afe6d7f601aStructure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "PartnersHub.model$RL_c0f17d75c546075264f5d075e00ba65b", "PartnersHub.model$ST_e61d85f6aadd57329cc664ba1d0e64c1Structure", "PartnersHub.model$ST_4286a56d180b6bb5649e20efadd675fdStructure", "PartnersHub.model$ST_6e5c732e48bd98c4d439ed63bb1fb9c4Structure", "PartnersHub.model$ST_b04713a56316d52deeb5eab31f0fde62Structure", "PartnersHub.controller$SendPhoneNumberChallenge", "PartnersHub.model$ST_e00c986a2a7690520557f1ea58ae1d82Structure", "RESTAPIWebsocket.model$ST_f502318fbe2f943e6cfbba125766780aStructure", "PartnersHub.referencesHealth$RESTAPIWebsocket", "PartnersHub.controller$SendAuthorize", "PartnersHub.controller$UseDevice", "PartnersHub.controller$SendWebsiteStatus", "PartnersHub.model$ST_0be4704c381e15995202804b221a5e3aStructure", "PartnersHub.controller$SendResidenceList", "PartnersHub.model$ST_cd720662d62c87faf4dd5ea5ef8052cbStructure", "PartnersHub.controller$SendGetSettings", "PartnersHub.model$ST_9f80c4e8dbd08377be883c073be1c044Structure", "PartnersHub.model$ST_31dbcfc5cd9ae02da0ba12249f6ccfcdStructure", "PartnersHub.model$RL_ad0d7e810e49e61265e2d337c04416fc"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, OutSystemsUIModel, RESTAPIWebsocketModel, React, OSView, PartnersHub_PhoneNumberVerification_PhoneNumberVerification_mvc_model, PartnersHub_PhoneNumberVerification_PhoneNumberVerification_mvc_controller, PartnersHubClientVariables, OSWidgets, PartnersHub_Layouts_LayoutDashboard_mvc_view, PartnersHub_Layouts_DeviceLayout_mvc_view, PartnersHub_PhoneNumberVerification_PhoneNumberVerificationBlock_mvc_view, PartnersHub_Common_AlertBlock_mvc_view, PartnersHub_PhoneNumberVerification_OTPVerificationBlock_mvc_view, PartnersHub_PhoneNumberVerification_VerifyEmailPhoneNumberVerification_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "PhoneNumberVerification.PhoneNumberVerification";
        }

        static getAttributes() {
            return {
                codeFunction: "PhoneNumberVerification",
                functionKey: "f5d5399f-783f-4d4a-85d7-af42f0daba54",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.PhoneNumberVerification.PhoneNumberVerification.css", "css/PartnersHub.PHubTest.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [PartnersHub_Layouts_LayoutDashboard_mvc_view, PartnersHub_Layouts_DeviceLayout_mvc_view, PartnersHub_PhoneNumberVerification_PhoneNumberVerificationBlock_mvc_view, PartnersHub_Common_AlertBlock_mvc_view, PartnersHub_PhoneNumberVerification_OTPVerificationBlock_mvc_view, PartnersHub_PhoneNumberVerification_VerifyEmailPhoneNumberVerification_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_PhoneNumberVerification_PhoneNumberVerification_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_PhoneNumberVerification_PhoneNumberVerification_mvc_controller;
        }

        get title() {


            return OSView.BaseView.BaseWebScreen.getTranslation("nznV9T94Sk2F169C8Nq6VA#Title", "PhoneNumberVerification");
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Popup, {
                showPopup: model.variables.isResendCodePopupOpenVar,
                style: "popup-dialog",
                _idProps: {
                    service: idService,
                    name: "ResendCodePopup"
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
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "align-items: center; display: flex; justify-content: space-between; margin-bottom: 16px;"
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
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "color: #222; font-size: 20px; font-weight: bold;"
                },
                text: ["Didn\'t get the code?"],
                _idProps: {
                    service: idService,
                    uuid: "4"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Image, {
                extendedEvents: {
                    onClick: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.hideResendCodePopup$Action(controller.callContext(eventHandlerContext));

                        ;
                    }
                },
                extendedProperties: {
                    style: "cursor: pointer;"
                },
                image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.closenormal.png"),
                type: /*Static*/ 0,
                _idProps: {
                    service: idService,
                    uuid: "5"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "display: flex; flex-direction: column; gap: 16px; margin-bottom: 16px;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "100%"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "6"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Button, {
                enabled: true,
                extendedProperties: {
                    style: "border-radius: 100px;"
                },
                isDefault: false,
                onClick: function() {
                    controller.validationService.validateWidget("");
                    return Promise.resolve().then(function() {
                        var eventHandlerContext = callContext.clone();
                        return controller.onClickCarrier$Action(model.variables.selectedCarrierVar, controller.callContext(eventHandlerContext));
                    });

                    ;
                },
                style: "btn btn-primary",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "7"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, "Resend code"), React.createElement(OSWidgets.Button, {
                enabled: true,
                extendedProperties: {
                    style: "border-radius: 100px;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                isDefault: false,
                onClick: function() {
                    controller.validationService.validateWidget("");
                    return Promise.resolve().then(function() {
                        var eventHandlerContext = callContext.clone();
                        return controller.onClickCarrier$Action((((model.variables.selectedCarrierVar === "whatsapp")) ? ("sms") : ("whatsapp")), controller.callContext(eventHandlerContext));
                    });

                    ;
                },
                style: "btn",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "8"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Expression, {
                value: model.getCachedValue(idService.getId("fQb5VGrlS0iiclA0OrI7vQ.Value"), function() {
                    return ("Send via " + (((model.variables.selectedCarrierVar === "whatsapp")) ? ("SMS") : ("Whatsapp")));
                }, function() {
                    return model.variables.selectedCarrierVar;
                }),
                _idProps: {
                    service: idService,
                    uuid: "9"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))), React.createElement(OSWidgets.Label, {
                extendedEvents: {
                    onClick: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.onClickChangePhoneNumber$Action(controller.callContext(eventHandlerContext));

                        ;
                    }
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
                    style: "color: #222; cursor: pointer; font-weight: bold; text-decoration: underline;"
                },
                text: ["Change phone number"],
                _idProps: {
                    service: idService,
                    uuid: "11"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })))), React.createElement(PartnersHub_Layouts_LayoutDashboard_mvc_view, {
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
                    uuid: "12",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    mainContent: new PlaceholderContent(function() {
                        return [React.createElement(PartnersHub_Layouts_DeviceLayout_mvc_view, {
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
                                uuid: "13",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                desktopContent: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        style: "phone-number-verification__container",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "14"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, $if(((model.variables.currentBlockVar) !== ("PhoneNumberVerificationSuccessBlock")), false, this, function() {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            style: "display-flex align-items-center",
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                name: "Title2"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Image, {
                                            extendedEvents: {
                                                onClick: function() {
                                                    var eventHandlerContext = callContext.clone();
                                                    controller.onClickBack$Action(controller.callContext(eventHandlerContext));

                                                    ;
                                                }
                                            },
                                            extendedProperties: {
                                                style: "cursor: pointer;"
                                            },
                                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.arrowleft.svg"),
                                            type: /*Static*/ 0,
                                            _idProps: {
                                                service: idService,
                                                uuid: "16"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }), React.createElement(OSWidgets.Text, {
                                            style: "font-bold margin-left-m font-size-h6",
                                            text: ["Phone number verification"],
                                            _idProps: {
                                                service: idService,
                                                uuid: "17"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }))];
                                    }, function() {
                                        return [];
                                    }), $if((model.variables.currentBlockVar === "PhoneNumberVerificationBlock"), false, this, function() {
                                        return [React.createElement(PartnersHub_PhoneNumberVerification_PhoneNumberVerificationBlock_mvc_view, {
                                            getOwnerSpan: function() {
                                                return _this.getChildSpan("render");
                                            },
                                            getOwnerDisposeSpan: function() {
                                                return _this.getChildSpan("destroy");
                                            },
                                            inputs: {
                                                ErrorMessage: model.variables.phoneNumberChallengeErrorMessageVar,
                                                PhoneNumber2: model.variables.getSettingsResponseVar.get_settingsAttr.phoneAttr
                                            },
                                            events: {
                                                _handleError: function(ex) {
                                                    controller.handleError(ex);
                                                },
                                                onClickCarrier$Action: function(carrierIn) {
                                                    return Promise.resolve().then(function() {
                                                        var eventHandlerContext = callContext.clone();
                                                        return controller.onClickCarrier$Action(carrierIn, controller.callContext(eventHandlerContext));
                                                    });;
                                                }
                                            },
                                            _validationProps: {
                                                validationService: validationService
                                            },
                                            _idProps: {
                                                service: idService,
                                                uuid: "18",
                                                alias: "3"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            _dependencies: []
                                        })];
                                    }, function() {
                                        return [];
                                    }), $if((model.variables.currentBlockVar === "PhoneNumberVerificationSuccessBlock"), false, this, function() {
                                        return [React.createElement(PartnersHub_Common_AlertBlock_mvc_view, {
                                            getOwnerSpan: function() {
                                                return _this.getChildSpan("render");
                                            },
                                            getOwnerDisposeSpan: function() {
                                                return _this.getChildSpan("destroy");
                                            },
                                            inputs: {
                                                title: "Success",
                                                type: model.getCachedValue(idService.getId("6utIKH3ri0uX88NpjROoXw.type"), function() {
                                                    return function() {
                                                        var rec = new PartnersHubModel.ST_6e5c732e48bd98c4d439ed63bb1fb9c4Structure();
                                                        rec.isSuccessAttr = true;
                                                        return rec;
                                                    }();
                                                }),
                                                description: "Phone number verified. Your account manager will contact you shortly.",
                                                buttonTitle: "Ok"
                                            },
                                            events: {
                                                _handleError: function(ex) {
                                                    controller.handleError(ex);
                                                },
                                                actionHandler$Action: function() {
                                                    var eventHandlerContext = callContext.clone();
                                                    controller.onClickSuccess$Action(controller.callContext(eventHandlerContext));

                                                    ;
                                                }
                                            },
                                            _validationProps: {
                                                validationService: validationService
                                            },
                                            _idProps: {
                                                service: idService,
                                                uuid: "19",
                                                alias: "4"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            _dependencies: []
                                        })];
                                    }, function() {
                                        return [];
                                    }), $if((model.variables.currentBlockVar === "OTPVerificationBlock"), false, this, function() {
                                        return [React.createElement(PartnersHub_PhoneNumberVerification_OTPVerificationBlock_mvc_view, {
                                            getOwnerSpan: function() {
                                                return _this.getChildSpan("render");
                                            },
                                            getOwnerDisposeSpan: function() {
                                                return _this.getChildSpan("destroy");
                                            },
                                            inputs: {
                                                PhoneNumber: model.variables.getSettingsResponseVar.get_settingsAttr.phoneAttr,
                                                Carrier: model.variables.selectedCarrierVar
                                            },
                                            events: {
                                                _handleError: function(ex) {
                                                    controller.handleError(ex);
                                                },
                                                onClickResendCode$Action: function() {
                                                    var eventHandlerContext = callContext.clone();
                                                    controller.onClickResendCodeLink$Action(controller.callContext(eventHandlerContext));

                                                    ;
                                                },
                                                onClickNextStep$Action: function() {
                                                    var eventHandlerContext = callContext.clone();
                                                    controller.onClickNextStep$Action(controller.callContext(eventHandlerContext));

                                                    ;
                                                }
                                            },
                                            _validationProps: {
                                                validationService: validationService
                                            },
                                            _idProps: {
                                                service: idService,
                                                uuid: "20",
                                                alias: "5"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            _dependencies: []
                                        })];
                                    }, function() {
                                        return [];
                                    }), $if((model.variables.currentBlockVar === "EmailVerificationBlock"), false, this, function() {
                                        return [React.createElement(PartnersHub_PhoneNumberVerification_VerifyEmailPhoneNumberVerification_mvc_view, {
                                            getOwnerSpan: function() {
                                                return _this.getChildSpan("render");
                                            },
                                            getOwnerDisposeSpan: function() {
                                                return _this.getChildSpan("destroy");
                                            },
                                            inputs: {
                                                email: model.variables.getSettingsResponseVar.get_settingsAttr.emailAttr
                                            },
                                            events: {
                                                _handleError: function(ex) {
                                                    controller.handleError(ex);
                                                },
                                                onClickVerify$Action: function(emailCodeValueIn) {
                                                    return Promise.resolve().then(function() {
                                                        var eventHandlerContext = callContext.clone();
                                                        return controller.onChallengeEmail$Action(emailCodeValueIn, controller.callContext(eventHandlerContext));
                                                    });;
                                                }
                                            },
                                            _validationProps: {
                                                validationService: validationService
                                            },
                                            _idProps: {
                                                service: idService,
                                                uuid: "21",
                                                alias: "6"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            _dependencies: []
                                        })];
                                    }, function() {
                                        return [];
                                    }))];
                                }),
                                tabletContent: PlaceholderContent.Empty,
                                mobileContent: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "background-color: #fff; height: 100dvh;"
                                        },
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "22"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, $if((((model.variables.currentBlockVar) !== ("PhoneNumberVerificationSuccessBlock")) && ((model.variables.currentBlockVar) !== ("EmailVerificationBlock"))), false, this, function() {
                                        return [React.createElement(OSWidgets.Container, {
                                            align: /*Default*/ 0,
                                            animate: false,
                                            extendedProperties: {
                                                style: "margin-bottom: 16px;"
                                            },
                                            style: "display-flex align-items-center",
                                            visible: true,
                                            _idProps: {
                                                service: idService,
                                                name: "Title3"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }, React.createElement(OSWidgets.Image, {
                                            extendedEvents: {
                                                onClick: function() {
                                                    var eventHandlerContext = callContext.clone();
                                                    controller.onClickBack$Action(controller.callContext(eventHandlerContext));

                                                    ;
                                                }
                                            },
                                            extendedProperties: {
                                                style: "cursor: pointer;"
                                            },
                                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.arrowleft.svg"),
                                            type: /*Static*/ 0,
                                            _idProps: {
                                                service: idService,
                                                uuid: "24"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }), React.createElement(OSWidgets.Text, {
                                            style: "font-bold margin-left-m font-size-h6",
                                            text: ["Phone number verification"],
                                            _idProps: {
                                                service: idService,
                                                uuid: "25"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider
                                        }))];
                                    }, function() {
                                        return [];
                                    }), $if((model.variables.currentBlockVar === "PhoneNumberVerificationBlock"), false, this, function() {
                                        return [React.createElement(PartnersHub_PhoneNumberVerification_PhoneNumberVerificationBlock_mvc_view, {
                                            getOwnerSpan: function() {
                                                return _this.getChildSpan("render");
                                            },
                                            getOwnerDisposeSpan: function() {
                                                return _this.getChildSpan("destroy");
                                            },
                                            inputs: {
                                                PhoneNumber2: model.variables.getSettingsResponseVar.get_settingsAttr.phoneAttr,
                                                ErrorMessage: model.variables.phoneNumberChallengeErrorMessageVar
                                            },
                                            events: {
                                                _handleError: function(ex) {
                                                    controller.handleError(ex);
                                                },
                                                onClickCarrier$Action: function(carrierIn) {
                                                    return Promise.resolve().then(function() {
                                                        var eventHandlerContext = callContext.clone();
                                                        return controller.onClickCarrier$Action(carrierIn, controller.callContext(eventHandlerContext));
                                                    });;
                                                }
                                            },
                                            _validationProps: {
                                                validationService: validationService
                                            },
                                            _idProps: {
                                                service: idService,
                                                uuid: "26",
                                                alias: "7"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            _dependencies: []
                                        })];
                                    }, function() {
                                        return [];
                                    }), $if((model.variables.currentBlockVar === "PhoneNumberVerificationSuccessBlock"), false, this, function() {
                                        return [React.createElement(PartnersHub_Common_AlertBlock_mvc_view, {
                                            getOwnerSpan: function() {
                                                return _this.getChildSpan("render");
                                            },
                                            getOwnerDisposeSpan: function() {
                                                return _this.getChildSpan("destroy");
                                            },
                                            inputs: {
                                                type: model.getCachedValue(idService.getId("eybZ+U1Rp0iRdPjr0Ti7XQ.type"), function() {
                                                    return function() {
                                                        var rec = new PartnersHubModel.ST_6e5c732e48bd98c4d439ed63bb1fb9c4Structure();
                                                        rec.isSuccessAttr = true;
                                                        return rec;
                                                    }();
                                                }),
                                                buttonTitle: "Ok",
                                                description: "Phone number verified. Your account manager will contact you shortly.",
                                                title: "Success"
                                            },
                                            events: {
                                                _handleError: function(ex) {
                                                    controller.handleError(ex);
                                                },
                                                actionHandler$Action: function() {
                                                    var eventHandlerContext = callContext.clone();
                                                    controller.onClickSuccess$Action(controller.callContext(eventHandlerContext));

                                                    ;
                                                }
                                            },
                                            _validationProps: {
                                                validationService: validationService
                                            },
                                            _idProps: {
                                                service: idService,
                                                uuid: "27",
                                                alias: "8"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            _dependencies: []
                                        })];
                                    }, function() {
                                        return [];
                                    }), $if((model.variables.currentBlockVar === "OTPVerificationBlock"), false, this, function() {
                                        return [React.createElement(PartnersHub_PhoneNumberVerification_OTPVerificationBlock_mvc_view, {
                                            getOwnerSpan: function() {
                                                return _this.getChildSpan("render");
                                            },
                                            getOwnerDisposeSpan: function() {
                                                return _this.getChildSpan("destroy");
                                            },
                                            inputs: {
                                                PhoneNumber: model.variables.getSettingsResponseVar.get_settingsAttr.phoneAttr,
                                                Carrier: model.variables.selectedCarrierVar
                                            },
                                            events: {
                                                _handleError: function(ex) {
                                                    controller.handleError(ex);
                                                },
                                                onClickNextStep$Action: function() {
                                                    var eventHandlerContext = callContext.clone();
                                                    controller.onClickNextStep$Action(controller.callContext(eventHandlerContext));

                                                    ;
                                                },
                                                onClickResendCode$Action: function() {
                                                    var eventHandlerContext = callContext.clone();
                                                    controller.onClickResendCodeLink$Action(controller.callContext(eventHandlerContext));

                                                    ;
                                                }
                                            },
                                            _validationProps: {
                                                validationService: validationService
                                            },
                                            _idProps: {
                                                service: idService,
                                                uuid: "28",
                                                alias: "9"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            _dependencies: []
                                        })];
                                    }, function() {
                                        return [];
                                    }), $if((model.variables.currentBlockVar === "EmailVerificationBlock"), false, this, function() {
                                        return [React.createElement(PartnersHub_PhoneNumberVerification_VerifyEmailPhoneNumberVerification_mvc_view, {
                                            getOwnerSpan: function() {
                                                return _this.getChildSpan("render");
                                            },
                                            getOwnerDisposeSpan: function() {
                                                return _this.getChildSpan("destroy");
                                            },
                                            inputs: {
                                                email: model.variables.getSettingsResponseVar.get_settingsAttr.emailAttr
                                            },
                                            events: {
                                                _handleError: function(ex) {
                                                    controller.handleError(ex);
                                                },
                                                onClickVerify$Action: function(emailCodeValueIn) {
                                                    return Promise.resolve().then(function() {
                                                        var eventHandlerContext = callContext.clone();
                                                        return controller.onChallengeEmail$Action(emailCodeValueIn, controller.callContext(eventHandlerContext));
                                                    });;
                                                }
                                            },
                                            _validationProps: {
                                                validationService: validationService
                                            },
                                            _idProps: {
                                                service: idService,
                                                uuid: "29",
                                                alias: "10"
                                            },
                                            _widgetRecordProvider: widgetsRecordProvider,
                                            _dependencies: []
                                        })];
                                    }, function() {
                                        return [];
                                    }))];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.selectedCarrierVar), asPrimitiveValue(model.variables.getSettingsResponseVar.get_settingsAttr.emailAttr), asPrimitiveValue(model.variables.getSettingsResponseVar.get_settingsAttr.phoneAttr), asPrimitiveValue(model.variables.phoneNumberChallengeErrorMessageVar), asPrimitiveValue(model.variables.currentBlockVar)]
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.selectedCarrierVar), asPrimitiveValue(model.variables.getSettingsResponseVar.get_settingsAttr.emailAttr), asPrimitiveValue(model.variables.getSettingsResponseVar.get_settingsAttr.phoneAttr), asPrimitiveValue(model.variables.phoneNumberChallengeErrorMessageVar), asPrimitiveValue(model.variables.currentBlockVar)]
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "30"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Expression, {
                value: model.variables.codeIn,
                _idProps: {
                    service: idService,
                    uuid: "31"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })));
        }
    }

    return View;
});
define("PartnersHub.PhoneNumberVerification.PhoneNumberVerification.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "OutSystemsUI.model", "RESTAPIWebsocket.model", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.PhoneNumberVerification.PhoneNumberVerification.mvc$translationsResources", "PartnersHub.PhoneNumberVerification.controller", "PartnersHub.PhoneNumberVerification.PhoneNumberVerification.mvc$controller.OnReady.CheckQueryParamJS", "PartnersHub.PhoneNumberVerification.PhoneNumberVerification.mvc$controller.OnReady.JavaScript1JS", "OutSystemsUI.model$ST_60f22bd2e9b10a22278b8afe6d7f601aStructure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "PartnersHub.model$RL_c0f17d75c546075264f5d075e00ba65b", "PartnersHub.model$ST_e61d85f6aadd57329cc664ba1d0e64c1Structure", "PartnersHub.model$ST_4286a56d180b6bb5649e20efadd675fdStructure", "PartnersHub.model$ST_6e5c732e48bd98c4d439ed63bb1fb9c4Structure", "PartnersHub.model$ST_b04713a56316d52deeb5eab31f0fde62Structure", "PartnersHub.controller$SendPhoneNumberChallenge", "PartnersHub.model$ST_e00c986a2a7690520557f1ea58ae1d82Structure", "RESTAPIWebsocket.model$ST_f502318fbe2f943e6cfbba125766780aStructure", "PartnersHub.referencesHealth$RESTAPIWebsocket", "PartnersHub.controller$SendAuthorize", "PartnersHub.controller$UseDevice", "PartnersHub.controller$SendWebsiteStatus", "PartnersHub.model$ST_0be4704c381e15995202804b221a5e3aStructure", "PartnersHub.controller$SendResidenceList", "PartnersHub.model$ST_cd720662d62c87faf4dd5ea5ef8052cbStructure", "PartnersHub.controller$SendGetSettings", "PartnersHub.model$ST_9f80c4e8dbd08377be883c073be1c044Structure", "PartnersHub.model$ST_31dbcfc5cd9ae02da0ba12249f6ccfcdStructure", "PartnersHub.model$RL_ad0d7e810e49e61265e2d337c04416fc"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, OutSystemsUIModel, RESTAPIWebsocketModel, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_PhoneNumberVerification_PhoneNumberVerification_mvc_TranslationsResources, PartnersHub_PhoneNumberVerificationController, PartnersHub_PhoneNumberVerification_PhoneNumberVerification_mvc_controller_OnReady_CheckQueryParamJS, PartnersHub_PhoneNumberVerification_PhoneNumberVerification_mvc_controller_OnReady_JavaScript1JS) {
    var OS = OSRuntimeCore;
    {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_PhoneNumberVerification_PhoneNumberVerification_mvc_TranslationsResources);
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
            get _onClickCarrier$Action() {
                if (!(this.hasOwnProperty("__onClickCarrier$Action"))) {
                    this.__onClickCarrier$Action = function(carrierIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickCarrier", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickCarrier");
                                span.setAttribute("outsystems.function.key", "1fe1bec5-78a0-439b-a5cd-149de9dca3bc");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnClickCarrier");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.PhoneNumberVerification.PhoneNumberVerification.OnClickCarrier$vars"))());
                                vars.value.carrierInLocal = carrierIn;
                                var sendPhoneNumberChallengeVar = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    // SelectedCarrier = Carrier
                                    model.variables.selectedCarrierVar = vars.value.carrierInLocal;
                                    // Execute Action: SendPhoneNumberChallenge
                                    model.flush();
                                    return PartnersHubController.default.sendPhoneNumberChallenge$Action(function() {
                                        var rec = new PartnersHubModel.ST_b04713a56316d52deeb5eab31f0fde62Structure();
                                        rec.phone_number_challengeAttr = 1;
                                        rec.carrierAttr = vars.value.carrierInLocal;
                                        rec.email_codeAttr = model.variables.userEmailCodeVar;
                                        return rec;
                                    }(), callContext).then(function(value) {
                                        sendPhoneNumberChallengeVar.value = value;
                                    }).then(function() {
                                        if ((sendPhoneNumberChallengeVar.value.isErrorOut)) {
                                            // PhoneNumberChallengeErrorMessage = SendPhoneNumberChallenge.ErrorMessage
                                            model.variables.phoneNumberChallengeErrorMessageVar = sendPhoneNumberChallengeVar.value.errorMessageOut;
                                        } else {
                                            // CurrentBlock = "OTPVerificationBlock"
                                            model.variables.currentBlockVar = "OTPVerificationBlock";
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

                return this.__onClickCarrier$Action;
            }
            set _onClickCarrier$Action(value) {
                this.__onClickCarrier$Action = value;
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
                                span.setAttribute("outsystems.function.key", "6f09f580-2f97-4585-9ec6-fb03faed7adb");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                var sendPhoneNumberChallengeVar = new OS.DataTypes.VariableHolder();
                                var sendAuthorizeVar = new OS.DataTypes.VariableHolder();
                                var sendWebsiteStatusVar = new OS.DataTypes.VariableHolder();
                                var sendResidenceListVar = new OS.DataTypes.VariableHolder();
                                var sendGetSettingsVar = new OS.DataTypes.VariableHolder();
                                var checkQueryParamJSResult = new OS.DataTypes.VariableHolder();
                                var javaScript1JSResult = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    javaScript1JSResult.value = OS.Logger.startActiveSpan("JavaScript1", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "JavaScript1");
                                            span.setAttribute("outsystems.function.key", "8ad8c89a-5e8d-45d8-a827-7ab20b6a93e7");
                                            span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                            span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                        }

                                        try {
                                            return controller.safeExecuteJSNode(PartnersHub_PhoneNumberVerification_PhoneNumberVerification_mvc_controller_OnReady_JavaScript1JS, "JavaScript1", "OnReady", {
                                                token: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                            }, function($parameters) {
                                                var jsNodeResult = new(controller.constructor.getVariableGroupType("PartnersHub.PhoneNumberVerification.PhoneNumberVerification.OnReady$javaScript1JSResult"))();
                                                jsNodeResult.tokenOut = OS.DataConversion.JSNodeParamConverter.from($parameters.token, OS.DataTypes.DataTypes.Text);
                                                return jsNodeResult;
                                            }, {}, {});
                                        } finally {
                                            if (span) {
                                                span.end();
                                            }

                                        }

                                    }, 1);
                                    // Execute Action: SendAuthorize
                                    model.flush();
                                    return PartnersHubController.default.sendAuthorize$Action(function() {
                                        var rec = new PartnersHubModel.ST_e00c986a2a7690520557f1ea58ae1d82Structure();
                                        rec.authorizeAttr = javaScript1JSResult.value.tokenOut;
                                        return rec;
                                    }(), callContext).then(function(value) {
                                        sendAuthorizeVar.value = value;
                                    }).then(function() {
                                        // Execute Action: UseDevice
                                        PartnersHubController.default.useDevice$Action(callContext);
                                        // Execute Action: SendResidenceList
                                        model.flush();
                                        return PartnersHubController.default.sendResidenceList$Action(callContext).then(function(value) {
                                            sendResidenceListVar.value = value;
                                        });
                                    }).then(function() {
                                        // Execute Action: SendWebsiteStatus
                                        model.flush();
                                        return PartnersHubController.default.sendWebsiteStatus$Action(callContext).then(function(value) {
                                            sendWebsiteStatusVar.value = value;
                                        });
                                    }).then(function() {
                                        checkQueryParamJSResult.value = OS.Logger.startActiveSpan("CheckQueryParam", function(span) {
                                            if (span) {
                                                span.setAttribute("code.function", "CheckQueryParam");
                                                span.setAttribute("outsystems.function.key", "3ae7bdeb-5f43-487a-9b8d-940cc021afd5");
                                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                                span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                            }

                                            try {
                                                return controller.safeExecuteJSNode(PartnersHub_PhoneNumberVerification_PhoneNumberVerification_mvc_controller_OnReady_CheckQueryParamJS, "CheckQueryParam", "OnReady", {
                                                    EmailCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                                }, function($parameters) {
                                                    var jsNodeResult = new(controller.constructor.getVariableGroupType("PartnersHub.PhoneNumberVerification.PhoneNumberVerification.OnReady$checkQueryParamJSResult"))();
                                                    jsNodeResult.emailCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.EmailCode, OS.DataTypes.DataTypes.Text);
                                                    return jsNodeResult;
                                                }, {}, {});
                                            } finally {
                                                if (span) {
                                                    span.end();
                                                }

                                            }

                                        }, 1);
                                    }).then(function() {
                                        return OS.Flow.executeSequence(function() {
                                            if ((((checkQueryParamJSResult.value.emailCodeOut) !== ("")))) {
                                                // Execute Action: SendPhoneNumberChallenge
                                                model.flush();
                                                return PartnersHubController.default.sendPhoneNumberChallenge$Action(function() {
                                                    var rec = new PartnersHubModel.ST_b04713a56316d52deeb5eab31f0fde62Structure();
                                                    rec.phone_number_challengeAttr = 1;
                                                    rec.email_codeAttr = checkQueryParamJSResult.value.emailCodeOut;
                                                    return rec;
                                                }(), callContext).then(function(value) {
                                                    sendPhoneNumberChallengeVar.value = value;
                                                }).then(function() {
                                                    if ((sendPhoneNumberChallengeVar.value.isErrorOut)) {
                                                        OS.FeedbackMessageService.showFeedbackMessage(sendPhoneNumberChallengeVar.value.errorMessageOut, /*Error*/ 3);
                                                    } else {
                                                        // CurrentBlock = "PhoneNumberVerificationBlock"
                                                        model.variables.currentBlockVar = "PhoneNumberVerificationBlock";
                                                        OS.FeedbackMessageService.showFeedbackMessage("Your email is verified.", /*Success*/ 1);
                                                    }

                                                });
                                            }

                                        });
                                    }).then(function() {
                                        // Execute Action: SendGetSettings
                                        model.flush();
                                        return PartnersHubController.default.sendGetSettings$Action(callContext).then(function(value) {
                                            sendGetSettingsVar.value = value;
                                        }).then(function() {
                                            // PhoneNumberList = SendResidenceList.ResidenceListResponse.Residence_list
                                            model.variables.phoneNumberListVar = OS.DataConversion.JSConversions.typeConvertRecordList(sendResidenceListVar.value.residenceListResponseOut.residence_listAttr, new PartnersHubModel.RL_c0f17d75c546075264f5d075e00ba65b(), function(source, target) {
                                                target.valueAttr = source.phone_iddAttr;
                                                target.labelAttr = (((source.textAttr + " ") + "+") + source.phone_iddAttr);
                                                return target;
                                            });
                                            // WebsiteStatusResponse = SendWebsiteStatus.WebsiteStatusResponse
                                            model.variables.websiteStatusResponseVar = sendWebsiteStatusVar.value.websiteStatusResponseOut;
                                            // GetSettingsResponse = SendGetSettings.GetSettingsResponse
                                            model.variables.getSettingsResponseVar = OS.DataConversion.JSConversions.typeConvertRecord(sendGetSettingsVar.value.getSettingsResponseOut, new PartnersHubModel.ST_4286a56d180b6bb5649e20efadd675fdStructure(), function(source, target) {
                                                target.get_settingsAttr.account_opening_reasonAttr = source.account_opening_reasonAttr;
                                                target.get_settingsAttr.address_cityAttr = source.address_cityAttr;
                                                target.get_settingsAttr.address_line_1Attr = source.address_line_1Attr;
                                                target.get_settingsAttr.address_line_2Attr = source.address_line_2Attr;
                                                target.get_settingsAttr.address_postcodeAttr = source.address_postcodeAttr;
                                                target.get_settingsAttr.address_stateAttr = source.address_stateAttr;
                                                target.get_settingsAttr.allow_copiersAttr = source.allow_copiersAttr;
                                                target.get_settingsAttr.citizenAttr = source.citizenAttr;
                                                target.get_settingsAttr.client_tnc_statusAttr = source.client_tnc_statusAttr;
                                                target.get_settingsAttr.cooling_off_expiration_dateAttr = source.cooling_off_expiration_dateAttr;
                                                target.get_settingsAttr.countryAttr = source.countryAttr;
                                                target.get_settingsAttr.country_codeAttr = source.country_codeAttr;
                                                target.get_settingsAttr.date_of_birthAttr = source.date_of_birthAttr;
                                                target.get_settingsAttr.dxtrade_user_exceptionAttr = source.dxtrade_user_exceptionAttr;
                                                target.get_settingsAttr.emailAttr = source.emailAttr;
                                                target.get_settingsAttr.email_consentAttr = source.email_consentAttr;
                                                target.get_settingsAttr.employment_statusAttr = source.employment_statusAttr;
                                                target.get_settingsAttr.fatca_declarationAttr = source.fatca_declarationAttr;
                                                target.get_settingsAttr.first_nameAttr = source.first_nameAttr;
                                                target.get_settingsAttr.has_secret_answerAttr = source.has_secret_answerAttr;
                                                target.get_settingsAttr.immutable_fieldsAttr = source.immutable_fieldsAttr;
                                                target.get_settingsAttr.is_authenticated_payment_agentAttr = source.is_authenticated_payment_agentAttr;
                                                target.get_settingsAttr.last_nameAttr = source.last_nameAttr;
                                                target.get_settingsAttr.non_pep_declarationAttr = source.non_pep_declarationAttr;
                                                target.get_settingsAttr.phoneAttr = source.phoneAttr;
                                                target.get_settingsAttr.place_of_birthAttr = source.place_of_birthAttr;
                                                target.get_settingsAttr.preferred_languageAttr = source.preferred_languageAttr;
                                                target.get_settingsAttr.request_professional_statusAttr = source.request_professional_statusAttr;
                                                target.get_settingsAttr.residenceAttr = source.residenceAttr;
                                                target.get_settingsAttr.salutationAttr = source.salutationAttr;
                                                target.get_settingsAttr.tax_identification_numberAttr = source.tax_identification_numberAttr;
                                                target.get_settingsAttr.tax_residenceAttr = source.tax_residenceAttr;
                                                target.get_settingsAttr.trading_hubAttr = source.trading_hubAttr;
                                                target.get_settingsAttr.user_hashAttr = source.user_hashAttr;
                                                target.get_settingsAttr.phone_number_verificationAttr = source.phone_number_verificationAttr;
                                                return target;
                                            });
                                        });
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

                return this.__onReady$Action;
            }
            set _onReady$Action(value) {
                this.__onReady$Action = value;
            }

            get _onClickSuccess$Action() {
                if (!(this.hasOwnProperty("__onClickSuccess$Action"))) {
                    this.__onClickSuccess$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickSuccess", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickSuccess");
                                span.setAttribute("outsystems.function.key", "75a39c79-e038-4e41-b0a9-23c3b2d18f8d");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnClickSuccess");
                                callContext = controller.callContext(callContext);
                                // Destination: /PartnersHub/PartnersHubDashboard
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "PartnersHubDashboard", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onClickSuccess$Action;
            }
            set _onClickSuccess$Action(value) {
                this.__onClickSuccess$Action = value;
            }

            get _onClickResendCodeLink$Action() {
                if (!(this.hasOwnProperty("__onClickResendCodeLink$Action"))) {
                    this.__onClickResendCodeLink$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickResendCodeLink", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickResendCodeLink");
                                span.setAttribute("outsystems.function.key", "7b660018-efab-4fec-9e3a-1c8dc97dcab2");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnClickResendCodeLink");
                                callContext = controller.callContext(callContext);
                                // IsResendCodePopupOpen = True
                                model.variables.isResendCodePopupOpenVar = true;
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onClickResendCodeLink$Action;
            }
            set _onClickResendCodeLink$Action(value) {
                this.__onClickResendCodeLink$Action = value;
            }

            get _onClickChangePhoneNumber$Action() {
                if (!(this.hasOwnProperty("__onClickChangePhoneNumber$Action"))) {
                    this.__onClickChangePhoneNumber$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickChangePhoneNumber", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickChangePhoneNumber");
                                span.setAttribute("outsystems.function.key", "7e09d08b-952b-4b27-a99c-111d64cf5a79");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnClickChangePhoneNumber");
                                callContext = controller.callContext(callContext);
                                // CurrentBlock = "PhoneNumberVerificationBlock"
                                model.variables.currentBlockVar = "PhoneNumberVerificationBlock";
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onClickChangePhoneNumber$Action;
            }
            set _onClickChangePhoneNumber$Action(value) {
                this.__onClickChangePhoneNumber$Action = value;
            }

            get _onClickNextStep$Action() {
                if (!(this.hasOwnProperty("__onClickNextStep$Action"))) {
                    this.__onClickNextStep$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickNextStep", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickNextStep");
                                span.setAttribute("outsystems.function.key", "cb4c237b-42a1-4386-a21e-30b6d4f4d8d1");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnClickNextStep");
                                callContext = controller.callContext(callContext);
                                // CurrentBlock = "PhoneNumberVerificationSuccessBlock"
                                model.variables.currentBlockVar = "PhoneNumberVerificationSuccessBlock";
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onClickNextStep$Action;
            }
            set _onClickNextStep$Action(value) {
                this.__onClickNextStep$Action = value;
            }

            get _onChallengeEmail$Action() {
                if (!(this.hasOwnProperty("__onChallengeEmail$Action"))) {
                    this.__onChallengeEmail$Action = function(emailCodeArgIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnChallengeEmail", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnChallengeEmail");
                                span.setAttribute("outsystems.function.key", "cd09d939-86e2-4b6a-8b36-909c52543216");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnChallengeEmail");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.PhoneNumberVerification.PhoneNumberVerification.OnChallengeEmail$vars"))());
                                vars.value.emailCodeArgInLocal = emailCodeArgIn;
                                var sendGetSettingsVar = new OS.DataTypes.VariableHolder();
                                var sendPhoneNumberChallengeVar = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    // UserEmailCode = EmailCodeArg
                                    model.variables.userEmailCodeVar = vars.value.emailCodeArgInLocal;
                                    // Execute Action: SendPhoneNumberChallenge
                                    model.flush();
                                    return PartnersHubController.default.sendPhoneNumberChallenge$Action(function() {
                                        var rec = new PartnersHubModel.ST_b04713a56316d52deeb5eab31f0fde62Structure();
                                        rec.phone_number_challengeAttr = 1;
                                        rec.email_codeAttr = vars.value.emailCodeArgInLocal;
                                        return rec;
                                    }(), callContext).then(function(value) {
                                        sendPhoneNumberChallengeVar.value = value;
                                    }).then(function() {
                                        if ((sendPhoneNumberChallengeVar.value.isErrorOut)) {
                                            OS.FeedbackMessageService.showFeedbackMessage(sendPhoneNumberChallengeVar.value.errorMessageOut, /*Error*/ 3);
                                        } else {
                                            // CurrentBlock = "PhoneNumberVerificationBlock"
                                            model.variables.currentBlockVar = "PhoneNumberVerificationBlock";
                                            OS.FeedbackMessageService.showFeedbackMessage("Your email is verified.", /*Success*/ 1);
                                        }

                                        // Execute Action: SendGetSettings
                                        model.flush();
                                        return PartnersHubController.default.sendGetSettings$Action(callContext).then(function(value) {
                                            sendGetSettingsVar.value = value;
                                        });
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

                return this.__onChallengeEmail$Action;
            }
            set _onChallengeEmail$Action(value) {
                this.__onChallengeEmail$Action = value;
            }

            get _onClickBack$Action() {
                if (!(this.hasOwnProperty("__onClickBack$Action"))) {
                    this.__onClickBack$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickBack", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickBack");
                                span.setAttribute("outsystems.function.key", "dd9b4ca0-6547-461c-b90f-2590b160cdeb");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnClickBack");
                                callContext = controller.callContext(callContext);
                                if (((model.variables.currentBlockVar === "OTPVerificationBlock"))) {
                                    // Set CurrentBlock
                                    // CurrentBlock = "PhoneNumberVerificationBlock"
                                    model.variables.currentBlockVar = "PhoneNumberVerificationBlock";
                                } else {
                                    // Destination: /PartnersHub/PartnersHubDashboard
                                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "PartnersHubDashboard", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                                }

                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onClickBack$Action;
            }
            set _onClickBack$Action(value) {
                this.__onClickBack$Action = value;
            }

            get _hideResendCodePopup$Action() {
                if (!(this.hasOwnProperty("__hideResendCodePopup$Action"))) {
                    this.__hideResendCodePopup$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("HideResendCodePopup", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "HideResendCodePopup");
                                span.setAttribute("outsystems.function.key", "fe3d45fe-60a5-4e54-b11f-e1a14e0f02af");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("HideResendCodePopup");
                                callContext = controller.callContext(callContext);
                                // IsResendCodePopupOpen = False
                                model.variables.isResendCodePopupOpenVar = false;
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__hideResendCodePopup$Action;
            }
            set _hideResendCodePopup$Action(value) {
                this.__hideResendCodePopup$Action = value;
            }


            onClickCarrier$Action(carrierIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickCarrier__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickCarrier");
                        span.setAttribute("outsystems.function.key", "1fe1bec5-78a0-439b-a5cd-149de9dca3bc");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._onClickCarrier$Action, callContext, carrierIn);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            onReady$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnReady__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnReady");
                        span.setAttribute("outsystems.function.key", "6f09f580-2f97-4585-9ec6-fb03faed7adb");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._onReady$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            onClickSuccess$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickSuccess__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickSuccess");
                        span.setAttribute("outsystems.function.key", "75a39c79-e038-4e41-b0a9-23c3b2d18f8d");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onClickSuccess$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onClickResendCodeLink$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickResendCodeLink__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickResendCodeLink");
                        span.setAttribute("outsystems.function.key", "7b660018-efab-4fec-9e3a-1c8dc97dcab2");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onClickResendCodeLink$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onClickChangePhoneNumber$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickChangePhoneNumber__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickChangePhoneNumber");
                        span.setAttribute("outsystems.function.key", "7e09d08b-952b-4b27-a99c-111d64cf5a79");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onClickChangePhoneNumber$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onClickNextStep$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickNextStep__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickNextStep");
                        span.setAttribute("outsystems.function.key", "cb4c237b-42a1-4386-a21e-30b6d4f4d8d1");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onClickNextStep$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onChallengeEmail$Action(emailCodeArgIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnChallengeEmail__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnChallengeEmail");
                        span.setAttribute("outsystems.function.key", "cd09d939-86e2-4b6a-8b36-909c52543216");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._onChallengeEmail$Action, callContext, emailCodeArgIn);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            onClickBack$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickBack__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickBack");
                        span.setAttribute("outsystems.function.key", "dd9b4ca0-6547-461c-b90f-2590b160cdeb");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onClickBack$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            hideResendCodePopup$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("HideResendCodePopup__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "HideResendCodePopup");
                        span.setAttribute("outsystems.function.key", "fe3d45fe-60a5-4e54-b11f-e1a14e0f02af");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._hideResendCodePopup$Action, callContext);
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
                        return PartnersHub_PhoneNumberVerificationController.default.handleError(ex, this.callContext());
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
        Controller.registerVariableGroupType("PartnersHub.PhoneNumberVerification.PhoneNumberVerification.OnClickCarrier$vars", [{
            name: "Carrier",
            attrName: "carrierInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("PartnersHub.PhoneNumberVerification.PhoneNumberVerification.OnReady$checkQueryParamJSResult", [{
            name: "EmailCode",
            attrName: "emailCodeOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("PartnersHub.PhoneNumberVerification.PhoneNumberVerification.OnReady$javaScript1JSResult", [{
            name: "token",
            attrName: "tokenOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);
        Controller.registerVariableGroupType("PartnersHub.PhoneNumberVerification.PhoneNumberVerification.OnChallengeEmail$vars", [{
            name: "EmailCodeArg",
            attrName: "emailCodeArgInLocal",
            mandatory: false,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});

define("PartnersHub.PhoneNumberVerification.PhoneNumberVerification.mvc$controller.OnReady.CheckQueryParamJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const params = new URLSearchParams(window.location.search)

        if (params.has("Code")) {
            $parameters.EmailCode = params.get("Code")
        }
    };
});

define("PartnersHub.PhoneNumberVerification.PhoneNumberVerification.mvc$controller.OnReady.JavaScript1JS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const token = localStorage.getItem('token')
        $parameters.token = token;
    };
});


define("PartnersHub.PhoneNumberVerification.PhoneNumberVerification.mvc$translationsResources", ["exports"], function(exports) {
    return {};
});