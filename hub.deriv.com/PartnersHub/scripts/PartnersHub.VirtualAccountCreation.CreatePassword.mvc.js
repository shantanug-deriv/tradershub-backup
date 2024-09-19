define("PartnersHub.VirtualAccountCreation.CreatePassword.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "PartnersHub.Layouts.LayoutSignup.mvc$model", "PartnersHub.Layouts.DeviceLayout.mvc$model", "PartnersHub.VirtualAccountCreation.CreatePasswordBlock.mvc$model", "CustomComponents.FullScreenMobileModal.FullScreenMobileModal.mvc$model", "RESTAPIWebsocket.model$ST_d4ed48681c55954edc02f19b0ed492e7Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocket", "RESTAPIWebsocket.model$ST_72900159fa859d96c9b5e8531e637a4cStructure", "RESTAPIWebsocket.controller$NewAccountVirtual", "RESTAPIWebsocket.model$ST_450f06937a42e6bd68832beac9fd4297Structure", "RESTAPIWebsocket.model$ST_f502318fbe2f943e6cfbba125766780aStructure", "RESTAPIWebsocket.controller$Authorize"], function(OSRuntimeCore, PartnersHubModel, RESTAPIWebsocketModel, RESTAPIWebsocketController, PartnersHub_Layouts_LayoutSignup_mvcModel, PartnersHub_Layouts_DeviceLayout_mvcModel, PartnersHub_VirtualAccountCreation_CreatePasswordBlock_mvcModel, CustomComponents_FullScreenMobileModal_FullScreenMobileModal_mvcModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("isLoading", "isLoadingVar", "isLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("Residence", "residenceIn", "Residence", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("_residenceInDataFetchStatus", "_residenceInDataFetchStatus", "_residenceInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("Citizenship", "citizenshipIn", "Citizenship", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("_citizenshipInDataFetchStatus", "_citizenshipInDataFetchStatus", "_citizenshipInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                Model._hasValidationWidgetsValue = (((PartnersHub_Layouts_LayoutSignup_mvcModel.hasValidationWidgets || PartnersHub_Layouts_DeviceLayout_mvcModel.hasValidationWidgets) || PartnersHub_VirtualAccountCreation_CreatePasswordBlock_mvcModel.hasValidationWidgets) || CustomComponents_FullScreenMobileModal_FullScreenMobileModal_mvcModel.hasValidationWidgets);
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {
            if ("Residence" in inputs) {
                this.variables.residenceIn = OS.DataConversion.ServerDataConverter.from(inputs.Residence, OS.DataTypes.DataTypes.Text);
            }

            if ("Citizenship" in inputs) {
                this.variables.citizenshipIn = OS.DataConversion.ServerDataConverter.from(inputs.Citizenship, OS.DataTypes.DataTypes.Text);
            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.VirtualAccountCreation.CreatePassword.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.VirtualAccountCreation.CreatePassword.mvc$model", "PartnersHub.VirtualAccountCreation.CreatePassword.mvc$controller", "PartnersHub.clientVariables", "PartnersHub.Layouts.LayoutSignup.mvc$view", "@outsystems/runtime-widgets-js", "PartnersHub.Layouts.DeviceLayout.mvc$view", "PartnersHub.VirtualAccountCreation.CreatePasswordBlock.mvc$view", "CustomComponents.FullScreenMobileModal.FullScreenMobileModal.mvc$view", "RESTAPIWebsocket.model$ST_d4ed48681c55954edc02f19b0ed492e7Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocket", "RESTAPIWebsocket.model$ST_72900159fa859d96c9b5e8531e637a4cStructure", "RESTAPIWebsocket.controller$NewAccountVirtual", "RESTAPIWebsocket.model$ST_450f06937a42e6bd68832beac9fd4297Structure", "RESTAPIWebsocket.model$ST_f502318fbe2f943e6cfbba125766780aStructure", "RESTAPIWebsocket.controller$Authorize"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, RESTAPIWebsocketModel, RESTAPIWebsocketController, React, OSView, PartnersHub_VirtualAccountCreation_CreatePassword_mvc_model, PartnersHub_VirtualAccountCreation_CreatePassword_mvc_controller, PartnersHubClientVariables, PartnersHub_Layouts_LayoutSignup_mvc_view, OSWidgets, PartnersHub_Layouts_DeviceLayout_mvc_view, PartnersHub_VirtualAccountCreation_CreatePasswordBlock_mvc_view, CustomComponents_FullScreenMobileModal_FullScreenMobileModal_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "VirtualAccountCreation.CreatePassword";
        }

        static getAttributes() {
            return {
                codeFunction: "CreatePassword",
                functionKey: "d269ebb2-ae02-4a08-bdd5-36804a29f409",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.VirtualAccountCreation.CreatePassword.css", "css/PartnersHub.PHubTest.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [PartnersHub_Layouts_LayoutSignup_mvc_view, PartnersHub_Layouts_DeviceLayout_mvc_view, PartnersHub_VirtualAccountCreation_CreatePasswordBlock_mvc_view, CustomComponents_FullScreenMobileModal_FullScreenMobileModal_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_VirtualAccountCreation_CreatePassword_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_VirtualAccountCreation_CreatePassword_mvc_controller;
        }

        get title() {


            return OSView.BaseView.BaseWebScreen.getTranslation("sutp0gKuCEq91TaASin0CQ#Title", "CreatePassword");
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
                    BackgroundColor: "white",
                    HasHeader: false
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
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            placeholders: {
                                desktopContent: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "display: flex;"
                                        },
                                        gridProperties: {
                                            classes: "OSInline"
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
                                        extendedProperties: {
                                            style: "align-items: center; display: flex; height: 100vh; justify-content: center;"
                                        },
                                        gridProperties: {
                                            classes: "OSInline",
                                            width: "50vw"
                                        },
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            name: "LogoContainer"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Image, {
                                        extendedProperties: {
                                            style: "height: 32px;"
                                        },
                                        gridProperties: {
                                            width: "286px"
                                        },
                                        image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.deriv25years.png"),
                                        type: /*Static*/ 0,
                                        _idProps: {
                                            service: idService,
                                            uuid: "4"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })), React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "align-items: center; background-color: #F8F9FA; display: flex; height: 100vh; justify-content: center;"
                                        },
                                        gridProperties: {
                                            classes: "OSInline",
                                            width: "50vw"
                                        },
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "5"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "display: flex;"
                                        },
                                        gridProperties: {
                                            classes: "OSInline",
                                            width: "392px"
                                        },
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "6"
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
                                            style: "cursor: pointer; height: 34px; margin-right: 16px; margin-top: 4px;"
                                        },
                                        gridProperties: {
                                            width: "14px"
                                        },
                                        image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.arrowleft.svg"),
                                        type: /*Static*/ 0,
                                        _idProps: {
                                            service: idService,
                                            uuid: "7"
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
                                        style: "country-of-residence-dropdown",
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            name: "MainContainer"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            style: "align-items: center; display: flex; gap: 8px; height: auto; margin-bottom: 0px;"
                                        },
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            name: "HeaderContainer"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Text, {
                                        extendedProperties: {
                                            style: "font-size: 28px; font-weight: bold; margin-top: 0px; width: ;"
                                        },
                                        text: [$text(getTranslation("yALQS6L4p0ikr4zVTXq2zw#Value", "Password"))],
                                        _idProps: {
                                            service: idService,
                                            uuid: "10"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    })), React.createElement(PartnersHub_VirtualAccountCreation_CreatePasswordBlock_mvc_view, {
                                        getOwnerSpan: function() {
                                            return _this.getChildSpan("render");
                                        },
                                        getOwnerDisposeSpan: function() {
                                            return _this.getChildSpan("destroy");
                                        },
                                        inputs: {
                                            isLoading: model.variables.isLoadingVar
                                        },
                                        events: {
                                            _handleError: function(ex) {
                                                controller.handleError(ex);
                                            },
                                            onSubmit$Action: function(passwordIn) {
                                                return Promise.resolve().then(function() {
                                                    var eventHandlerContext = callContext.clone();
                                                    return controller.onSubmit$Action(passwordIn, controller.callContext(eventHandlerContext));
                                                });;
                                            }
                                        },
                                        _validationProps: {
                                            validationService: validationService
                                        },
                                        _idProps: {
                                            service: idService,
                                            uuid: "11",
                                            alias: "3"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        _dependencies: []
                                    })))))];
                                }),
                                tabletContent: PlaceholderContent.Empty,
                                mobileContent: new PlaceholderContent(function() {
                                    return [React.createElement(CustomComponents_FullScreenMobileModal_FullScreenMobileModal_mvc_view, {
                                        getOwnerSpan: function() {
                                            return _this.getChildSpan("render");
                                        },
                                        getOwnerDisposeSpan: function() {
                                            return _this.getChildSpan("destroy");
                                        },
                                        inputs: {
                                            Title: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("PghFF2QVRE+U4U_KSD7QhA#Value.1281629883.1", "Password"),
                                            HasBackButton: true,
                                            HasCloseIcon: false
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
                                            uuid: "12",
                                            alias: "4"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider,
                                        placeholders: {
                                            content: new PlaceholderContent(function() {
                                                return [React.createElement(OSWidgets.Container, {
                                                    align: /*Default*/ 0,
                                                    animate: false,
                                                    extendedProperties: {
                                                        style: "background-color: white; border-radius: 8px; display: flex; flex-direction: column; height: 100dvh; padding: 16px;"
                                                    },
                                                    visible: true,
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "13"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider
                                                }, React.createElement(PartnersHub_VirtualAccountCreation_CreatePasswordBlock_mvc_view, {
                                                    getOwnerSpan: function() {
                                                        return _this.getChildSpan("render");
                                                    },
                                                    getOwnerDisposeSpan: function() {
                                                        return _this.getChildSpan("destroy");
                                                    },
                                                    inputs: {
                                                        isLoading: model.variables.isLoadingVar
                                                    },
                                                    events: {
                                                        _handleError: function(ex) {
                                                            controller.handleError(ex);
                                                        },
                                                        onSubmit$Action: function(passwordIn) {
                                                            return Promise.resolve().then(function() {
                                                                var eventHandlerContext = callContext.clone();
                                                                return controller.onSubmit$Action(passwordIn, controller.callContext(eventHandlerContext));
                                                            });;
                                                        }
                                                    },
                                                    _validationProps: {
                                                        validationService: validationService
                                                    },
                                                    _idProps: {
                                                        service: idService,
                                                        uuid: "14",
                                                        alias: "5"
                                                    },
                                                    _widgetRecordProvider: widgetsRecordProvider,
                                                    _dependencies: []
                                                }))];
                                            })
                                        },
                                        _dependencies: [asPrimitiveValue(model.variables.isLoadingVar)]
                                    })];
                                })
                            },
                            _dependencies: [asPrimitiveValue(model.variables.isLoadingVar)]
                        })];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables.isLoadingVar)]
            }));
        }
    }

    return View;
});
define("PartnersHub.VirtualAccountCreation.CreatePassword.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.VirtualAccountCreation.CreatePassword.mvc$translationsResources", "PartnersHub.VirtualAccountCreation.controller", "PartnersHub.VirtualAccountCreation.CreatePassword.mvc$controller.OnSubmit.SetLocalJS", "RESTAPIWebsocket.model$ST_d4ed48681c55954edc02f19b0ed492e7Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocket", "RESTAPIWebsocket.model$ST_72900159fa859d96c9b5e8531e637a4cStructure", "RESTAPIWebsocket.controller$NewAccountVirtual", "RESTAPIWebsocket.model$ST_450f06937a42e6bd68832beac9fd4297Structure", "RESTAPIWebsocket.model$ST_f502318fbe2f943e6cfbba125766780aStructure", "RESTAPIWebsocket.controller$Authorize"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, RESTAPIWebsocketModel, RESTAPIWebsocketController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_VirtualAccountCreation_CreatePassword_mvc_TranslationsResources, PartnersHub_VirtualAccountCreationController, PartnersHub_VirtualAccountCreation_CreatePassword_mvc_controller_OnSubmit_SetLocalJS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_VirtualAccountCreation_CreatePassword_mvc_TranslationsResources);
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
                                span.setAttribute("outsystems.function.key", "283d21a0-d312-4e29-8050-a05091d3baae");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                if ((!((((((model.variables.residenceIn) !== ("")) && ((model.variables.citizenshipIn) !== ("")))) ? (true) : (false))))) {
                                    // Destination: /PartnersHub/CountryOfResidence
                                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "CountryOfResidence", {
                                        Code: OS.DataConversion.ServerDataConverter.to(PartnersHubClientVariables.getCode(), OS.DataTypes.DataTypes.Text)
                                    }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                                }

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

            get _onClickBack$Action() {
                if (!(this.hasOwnProperty("__onClickBack$Action"))) {
                    this.__onClickBack$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickBack", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickBack");
                                span.setAttribute("outsystems.function.key", "6c72f681-51de-4429-8182-cf8884fd3fe4");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnClickBack");
                                callContext = controller.callContext(callContext);
                                // Destination: /PartnersHub/Citizenship
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "Citizenship", {
                                    CountryOfResidence: OS.DataConversion.ServerDataConverter.to(model.variables.residenceIn, OS.DataTypes.DataTypes.Text)
                                }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
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

            get _onSubmit$Action() {
                if (!(this.hasOwnProperty("__onSubmit$Action"))) {
                    this.__onSubmit$Action = function(passwordIn, callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnSubmit", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnSubmit");
                                span.setAttribute("outsystems.function.key", "8a45ccc9-bb2f-4fea-82d3-ec0c6342a839");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnSubmit");
                                callContext = controller.callContext(callContext);
                                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.VirtualAccountCreation.CreatePassword.OnSubmit$vars"))());
                                vars.value.passwordInLocal = passwordIn;
                                var newAccountVirtualVar = new OS.DataTypes.VariableHolder();
                                var authorizeVar = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    // isLoading = True
                                    model.variables.isLoadingVar = true;
                                    // Execute Action: NewAccountVirtual
                                    model.flush();
                                    return RESTAPIWebsocketController.default.newAccountVirtual$Action(function() {
                                        var rec = new RESTAPIWebsocketModel.ST_d4ed48681c55954edc02f19b0ed492e7Structure();
                                        rec.typeAttr = "trading";
                                        rec.client_passwordAttr = vars.value.passwordInLocal;
                                        rec.residenceAttr = model.variables.residenceIn;
                                        rec.verification_codeAttr = PartnersHubClientVariables.getCode();
                                        return rec;
                                    }(), PartnersHubClientVariables.getServer(), PartnersHubClientVariables.getAppId(), "EN", callContext).then(function(value) {
                                        newAccountVirtualVar.value = value;
                                    }).then(function() {
                                        // Execute Action: Authorize
                                        model.flush();
                                        return RESTAPIWebsocketController.default.authorize$Action(function() {
                                            var rec = new RESTAPIWebsocketModel.ST_450f06937a42e6bd68832beac9fd4297Structure();
                                            rec.authorizeAttr = newAccountVirtualVar.value.responseOut.new_account_virtualAttr.oauth_tokenAttr;
                                            return rec;
                                        }(), PartnersHubClientVariables.getServer(), PartnersHubClientVariables.getAppId(), "EN", callContext).then(function(value) {
                                            authorizeVar.value = value;
                                        });
                                    }).then(function() {
                                        OS.Logger.startActiveSpan("SetLocal", function(span) {
                                            if (span) {
                                                span.setAttribute("code.function", "SetLocal");
                                                span.setAttribute("outsystems.function.key", "77b05641-545a-4456-b765-2e76755bee34");
                                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                                span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                            }

                                            try {
                                                return controller.safeExecuteJSNode(PartnersHub_VirtualAccountCreation_CreatePassword_mvc_controller_OnSubmit_SetLocalJS, "SetLocal", "OnSubmit", {
                                                    loginId: OS.DataConversion.JSNodeParamConverter.to(authorizeVar.value.responseOut.authorizeAttr.loginidAttr, OS.DataTypes.DataTypes.Text),
                                                    token: OS.DataConversion.JSNodeParamConverter.to(newAccountVirtualVar.value.responseOut.new_account_virtualAttr.oauth_tokenAttr, OS.DataTypes.DataTypes.Text)
                                                }, function($parameters) {}, {}, {});
                                            } finally {
                                                if (span) {
                                                    span.end();
                                                }

                                            }

                                        }, 1);
                                        // Set isLoading
                                        // isLoading = False
                                        model.variables.isLoadingVar = false;
                                        // Destination: /PartnersHub/PartnersHubDashboard
                                        return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "PartnersHubDashboard", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
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

                return this.__onSubmit$Action;
            }
            set _onSubmit$Action(value) {
                this.__onSubmit$Action = value;
            }


            onReady$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnReady__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnReady");
                        span.setAttribute("outsystems.function.key", "283d21a0-d312-4e29-8050-a05091d3baae");
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

            onClickBack$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickBack__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickBack");
                        span.setAttribute("outsystems.function.key", "6c72f681-51de-4429-8182-cf8884fd3fe4");
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

            onSubmit$Action(passwordIn, callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnSubmit__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnSubmit");
                        span.setAttribute("outsystems.function.key", "8a45ccc9-bb2f-4fea-82d3-ec0c6342a839");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._onSubmit$Action, callContext, passwordIn);
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
                        return PartnersHub_VirtualAccountCreationController.default.handleError(ex, this.callContext());
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
        Controller.registerVariableGroupType("PartnersHub.VirtualAccountCreation.CreatePassword.OnSubmit$vars", [{
            name: "Password",
            attrName: "passwordInLocal",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});

define("PartnersHub.VirtualAccountCreation.CreatePassword.mvc$controller.OnSubmit.SetLocalJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        localStorage.setItem("loginId", $parameters.loginId)
        localStorage.setItem("token", $parameters.token)
    };
});


define("PartnersHub.VirtualAccountCreation.CreatePassword.mvc$translationsResources.de-DE", [], function() {
    return {
        "PghFF2QVRE+U4U_KSD7QhA#Value.1281629883.1": "Password",
        "yALQS6L4p0ikr4zVTXq2zw#Value": "Passwort"
    };
});

define("PartnersHub.VirtualAccountCreation.CreatePassword.mvc$translationsResources.es-ES", [], function() {
    return {
        "PghFF2QVRE+U4U_KSD7QhA#Value.1281629883.1": "Password",
        "yALQS6L4p0ikr4zVTXq2zw#Value": "Contraseña"
    };
});

define("PartnersHub.VirtualAccountCreation.CreatePassword.mvc$translationsResources.fr-FR", [], function() {
    return {
        "PghFF2QVRE+U4U_KSD7QhA#Value.1281629883.1": "Password",
        "yALQS6L4p0ikr4zVTXq2zw#Value": "Mot de passe"
    };
});

define("PartnersHub.VirtualAccountCreation.CreatePassword.mvc$translationsResources.it-IT", [], function() {
    return {
        "PghFF2QVRE+U4U_KSD7QhA#Value.1281629883.1": "Password",
        "yALQS6L4p0ikr4zVTXq2zw#Value": "Password"
    };
});

define("PartnersHub.VirtualAccountCreation.CreatePassword.mvc$translationsResources.pl-PL", [], function() {
    return {
        "PghFF2QVRE+U4U_KSD7QhA#Value.1281629883.1": "Password",
        "yALQS6L4p0ikr4zVTXq2zw#Value": "Hasło"
    };
});

define("PartnersHub.VirtualAccountCreation.CreatePassword.mvc$translationsResources.pt-PT", [], function() {
    return {
        "PghFF2QVRE+U4U_KSD7QhA#Value.1281629883.1": "Password",
        "yALQS6L4p0ikr4zVTXq2zw#Value": "Palavra-passe"
    };
});

define("PartnersHub.VirtualAccountCreation.CreatePassword.mvc$translationsResources.ru-RU", [], function() {
    return {
        "PghFF2QVRE+U4U_KSD7QhA#Value.1281629883.1": "Password",
        "yALQS6L4p0ikr4zVTXq2zw#Value": "Пароль"
    };
});

define("PartnersHub.VirtualAccountCreation.CreatePassword.mvc$translationsResources", ["exports", "PartnersHub.VirtualAccountCreation.CreatePassword.mvc$translationsResources.de-DE", "PartnersHub.VirtualAccountCreation.CreatePassword.mvc$translationsResources.es-ES", "PartnersHub.VirtualAccountCreation.CreatePassword.mvc$translationsResources.fr-FR", "PartnersHub.VirtualAccountCreation.CreatePassword.mvc$translationsResources.it-IT", "PartnersHub.VirtualAccountCreation.CreatePassword.mvc$translationsResources.pl-PL", "PartnersHub.VirtualAccountCreation.CreatePassword.mvc$translationsResources.pt-PT", "PartnersHub.VirtualAccountCreation.CreatePassword.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_VirtualAccountCreation_CreatePassword_mvc_translationsResources_deDE, PartnersHub_VirtualAccountCreation_CreatePassword_mvc_translationsResources_esES, PartnersHub_VirtualAccountCreation_CreatePassword_mvc_translationsResources_frFR, PartnersHub_VirtualAccountCreation_CreatePassword_mvc_translationsResources_itIT, PartnersHub_VirtualAccountCreation_CreatePassword_mvc_translationsResources_plPL, PartnersHub_VirtualAccountCreation_CreatePassword_mvc_translationsResources_ptPT, PartnersHub_VirtualAccountCreation_CreatePassword_mvc_translationsResources_ruRU) {
    return {
        "de-DE": {
            "translations": PartnersHub_VirtualAccountCreation_CreatePassword_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_VirtualAccountCreation_CreatePassword_mvc_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_VirtualAccountCreation_CreatePassword_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_VirtualAccountCreation_CreatePassword_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_VirtualAccountCreation_CreatePassword_mvc_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_VirtualAccountCreation_CreatePassword_mvc_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_VirtualAccountCreation_CreatePassword_mvc_translationsResources_ruRU,
            "isRTL": false
        }
    };
});