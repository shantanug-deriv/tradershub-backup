define("PartnersHub.Layouts.LayoutEndpointPage.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "CustomComponents.ButtonVariants.PrimaryButton.mvc$model", "CustomComponents.ButtonVariants.SecondaryButton.mvc$model", "OutSystemsUI.Content.Tooltip.mvc$model", "PartnersHub.controller$RedirectToOauth", "PartnersHub.controller$ShowLiveChat", "PartnersHub.controller$UseDevice", "PartnersHub.controller$IsUserLoggedIn", "PartnersHub.controller$MountDerivAPIClient", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$AddFavicon"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, OutSystemsUIModel, OutSystemsUIController, CustomComponents_ButtonVariants_PrimaryButton_mvcModel, CustomComponents_ButtonVariants_SecondaryButton_mvcModel, OutSystemsUI_Content_Tooltip_mvcModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("IsLogoutModalOpen", "isLogoutModalOpenVar", "IsLogoutModalOpen", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("isLoggedin", "isLoggedinVar", "isLoggedin", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("HasFixedHeader", "hasFixedHeaderIn", "HasFixedHeader", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, false),
                    this.attr("_hasFixedHeaderInDataFetchStatus", "_hasFixedHeaderInDataFetchStatus", "_hasFixedHeaderInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("EnableAccessibilityFeatures", "enableAccessibilityFeaturesIn", "EnableAccessibilityFeatures", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("_enableAccessibilityFeaturesInDataFetchStatus", "_enableAccessibilityFeaturesInDataFetchStatus", "_enableAccessibilityFeaturesInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, false),
                    this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                Model._hasValidationWidgetsValue = ((CustomComponents_ButtonVariants_PrimaryButton_mvcModel.hasValidationWidgets || CustomComponents_ButtonVariants_SecondaryButton_mvcModel.hasValidationWidgets) || OutSystemsUI_Content_Tooltip_mvcModel.hasValidationWidgets);
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {
            if ("HasFixedHeader" in inputs) {
                this.variables.hasFixedHeaderIn = inputs.HasFixedHeader;
                if ("_hasFixedHeaderInDataFetchStatus" in inputs) {
                    this.variables._hasFixedHeaderInDataFetchStatus = inputs._hasFixedHeaderInDataFetchStatus;
                }

            }

            if ("EnableAccessibilityFeatures" in inputs) {
                this.variables.enableAccessibilityFeaturesIn = inputs.EnableAccessibilityFeatures;
                if ("_enableAccessibilityFeaturesInDataFetchStatus" in inputs) {
                    this.variables._enableAccessibilityFeaturesInDataFetchStatus = inputs._enableAccessibilityFeaturesInDataFetchStatus;
                }

            }

            if ("ExtendedClass" in inputs) {
                this.variables.extendedClassIn = inputs.ExtendedClass;
                if ("_extendedClassInDataFetchStatus" in inputs) {
                    this.variables._extendedClassInDataFetchStatus = inputs._extendedClassInDataFetchStatus;
                }

            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.Layouts.LayoutEndpointPage.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.Layouts.LayoutEndpointPage.mvc$model", "PartnersHub.Layouts.LayoutEndpointPage.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "CustomComponents.ButtonVariants.PrimaryButton.mvc$view", "CustomComponents.ButtonVariants.SecondaryButton.mvc$view", "OutSystemsUI.Content.Tooltip.mvc$view", "PartnersHub.controller$RedirectToOauth", "PartnersHub.controller$ShowLiveChat", "PartnersHub.controller$UseDevice", "PartnersHub.controller$IsUserLoggedIn", "PartnersHub.controller$MountDerivAPIClient", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$AddFavicon"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, OutSystemsUIModel, OutSystemsUIController, React, OSView, PartnersHub_Layouts_LayoutEndpointPage_mvc_model, PartnersHub_Layouts_LayoutEndpointPage_mvc_controller, PartnersHubClientVariables, OSWidgets, CustomComponents_ButtonVariants_PrimaryButton_mvc_view, CustomComponents_ButtonVariants_SecondaryButton_mvc_view, OutSystemsUI_Content_Tooltip_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "Layouts.LayoutEndpointPage";
        }

        static getAttributes() {
            return {
                codeFunction: "LayoutEndpointPage",
                functionKey: "d0ec6690-14da-4144-a86a-1dd09537877f",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Layouts.LayoutEndpointPage.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [CustomComponents_ButtonVariants_PrimaryButton_mvc_view, CustomComponents_ButtonVariants_SecondaryButton_mvc_view, OutSystemsUI_Content_Tooltip_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_Layouts_LayoutEndpointPage_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_Layouts_LayoutEndpointPage_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Popup, {
                extendedProperties: {
                    style: "border-radius: 8px; padding: 20px; width: 400px;"
                },
                showPopup: model.variables.isLogoutModalOpenVar,
                style: "popup-dialog",
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "display: flex; flex-direction: column; gap: 20px;"
                },
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
                    style: "align-items: center; display: flex; justify-content: space-between;"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                extendedProperties: {
                    style: "font-size: 16px; font-weight: bold;"
                },
                text: [$text(getTranslation("RzfRPsfq0U+UE_D6UKErng#Value", "Are you sure you want to log out?"))],
                _idProps: {
                    service: idService,
                    uuid: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }), React.createElement(OSWidgets.Image, {
                extendedEvents: {
                    onClick: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.closeLogoutModal$Action(controller.callContext(eventHandlerContext));

                        ;
                    }
                },
                extendedProperties: {
                    style: "cursor: pointer;"
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.closenormal.png"),
                type: /*Static*/ 0,
                _idProps: {
                    service: idService,
                    uuid: "4"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedEvents: {
                    onClick: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.onClickLogout$Action(controller.callContext(eventHandlerContext));

                        ;
                    }
                },
                extendedProperties: {
                    style: "display: flex; flex-direction: column; gap: 8px;"
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
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "6"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(CustomComponents_ButtonVariants_PrimaryButton_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    Width: "100%",
                    height: "40px",
                    title: "Yes, log out"
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    onClick$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.onClickLogout$Action(controller.callContext(eventHandlerContext));

                        ;
                    }
                },
                _validationProps: {
                    validationService: validationService
                },
                _idProps: {
                    service: idService,
                    uuid: "7",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "8"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(CustomComponents_ButtonVariants_SecondaryButton_mvc_view, {
                getOwnerSpan: function() {
                    return _this.getChildSpan("render");
                },
                getOwnerDisposeSpan: function() {
                    return _this.getChildSpan("destroy");
                },
                inputs: {
                    BorderColor: "#FF444F",
                    title: "Cancel",
                    height: "40px",
                    Width: "100%",
                    borderRadius: "100px"
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    onClick$Action: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.closeLogoutModal$Action(controller.callContext(eventHandlerContext));

                        ;
                    }
                },
                _validationProps: {
                    validationService: validationService
                },
                _idProps: {
                    service: idService,
                    uuid: "9",
                    alias: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                _dependencies: []
            }))))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: model.getCachedValue(idService.getId("LayoutWrapper.Style"), function() {
                    return (((OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("dbxxueEmnEKv5372e5NktQ#ValueExpression.-1770855897.1", "layout layout-blank") + ((model.variables.hasFixedHeaderIn) ? (" fixed-header") : (""))) + ((!(model.variables.enableAccessibilityFeaturesIn)) ? ("") : (" has-accessible-features"))) + (((model.variables.extendedClassIn === "")) ? ("") : ((" " + model.variables.extendedClassIn))));
                }, function() {
                    return model.variables.hasFixedHeaderIn;
                }, function() {
                    return model.variables.enableAccessibilityFeaturesIn;
                }, function() {
                    return model.variables.extendedClassIn;
                }),
                visible: true,
                _idProps: {
                    service: idService,
                    name: "LayoutWrapper"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hasFixedHeaderInDataFetchStatus, model.variables._enableAccessibilityFeaturesInDataFetchStatus, model.variables._extendedClassInDataFetchStatus)
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("5tk6rybKDkWIIZMcBm5xRw#ValueExpression.3343801.1", "main"),
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "11"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.AdvancedHtml, {
                extendedProperties: {
                    role: "banner",
                    className: "header"
                },
                tag: "header",
                _idProps: {
                    service: idService,
                    name: "Header2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "align-items: center; display: flex; flex-shrink: 0; height: 48px; justify-content: space-between; padding: 16px;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "100%"
                },
                style: "header-top",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "13"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "align-items: center; cursor: pointer; display: flex; gap: 16px; text-align: right;"
                },
                style: "left-header",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "14"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Image, {
                extendedEvents: {
                    onClick: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.onClickRedirectToDashboard$Action(controller.callContext(eventHandlerContext));

                        ;
                    }
                },
                extendedProperties: {
                    style: "height: 18px;"
                },
                gridProperties: {
                    width: "130px",
                    marginLeft: "0"
                },
                image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.DashboardPartnersLogo.svg"),
                type: /*Static*/ 0,
                _idProps: {
                    service: idService,
                    uuid: "15"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), $if(model.variables.isLoggedinVar, false, this, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "display: flex; gap: 32px; justify-content: center; margin-right: 10px;"
                    },
                    style: "display-flex align-items-center",
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "16"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, $if(PartnersHubClientVariables.getIsDesktop(), false, this, function() {
                    return [React.createElement(OutSystemsUI_Content_Tooltip_mvc_view, {
                        getOwnerSpan: function() {
                            return _this.getChildSpan("render");
                        },
                        getOwnerDisposeSpan: function() {
                            return _this.getChildSpan("destroy");
                        },
                        inputs: {
                            Position: PartnersHubModel.staticEntities.position.bottom
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
                            uuid: "17",
                            alias: "3"
                        },
                        _widgetRecordProvider: widgetsRecordProvider,
                        placeholders: {
                            content: new PlaceholderContent(function() {
                                return [React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    extendedEvents: {
                                        onClick: function() {
                                            var eventHandlerContext = callContext.clone();
                                            controller.openLogoutModal$Action(controller.callContext(eventHandlerContext));

                                            ;
                                        }
                                    },
                                    extendedProperties: {
                                        style: "cursor: pointer;"
                                    },
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "18"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, React.createElement(OSWidgets.Image, {
                                    gridProperties: {
                                        width: "22px"
                                    },
                                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.logout.svg"),
                                    type: /*Static*/ 0,
                                    _idProps: {
                                        service: idService,
                                        uuid: "19"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }))];
                            }),
                            tooltip: new PlaceholderContent(function() {
                                return [React.createElement(OSWidgets.Container, {
                                    align: /*Default*/ 0,
                                    animate: false,
                                    extendedProperties: {
                                        style: "text-align: center;"
                                    },
                                    visible: true,
                                    _idProps: {
                                        service: idService,
                                        uuid: "20"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                }, $text(getTranslation("oiMnGVHyYUyzhvGIqB3aNQ#Value", "Log out")))];
                            })
                        },
                        _dependencies: []
                    })];
                }, function() {
                    return [React.createElement(OSWidgets.Container, {
                        align: /*Default*/ 0,
                        animate: false,
                        extendedEvents: {
                            onClick: function() {
                                var eventHandlerContext = callContext.clone();
                                controller.openLogoutModal$Action(controller.callContext(eventHandlerContext));

                                ;
                            }
                        },
                        extendedProperties: {
                            style: "cursor: pointer;"
                        },
                        visible: true,
                        _idProps: {
                            service: idService,
                            uuid: "21"
                        },
                        _widgetRecordProvider: widgetsRecordProvider
                    }, React.createElement(OSWidgets.Image, {
                        gridProperties: {
                            width: "22px"
                        },
                        image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.logout.svg"),
                        type: /*Static*/ 0,
                        _idProps: {
                            service: idService,
                            uuid: "22"
                        },
                        _widgetRecordProvider: widgetsRecordProvider
                    }))];
                }))];
            }, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "display: flex; gap: 32px; justify-content: center;"
                    },
                    style: "display-flex align-items-center",
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "23"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Button, {
                    enabled: true,
                    isDefault: false,
                    onClick: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.logInOnClick$Action(controller.callContext(eventHandlerContext));

                        ;
                    },
                    style: "login-button",
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "24"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Text, {
                    extendedProperties: {
                        style: "color: #FF444F; font-weight: bold;"
                    },
                    text: [$text(getTranslation("W7Kh4ThM_UWNlBaPdD6URg#Value", "Log in"))],
                    _idProps: {
                        service: idService,
                        uuid: "25"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })))];
            }))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "height: 100%;"
                },
                style: "",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "Content"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    role: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("GEy4JXgKwEmTE4e9nNrJBw#Value.3343801.1", "main"),
                    style: "height: 100%;"
                },
                style: "main-content",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "MainContentWrapper"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.mainContent,
                style: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("0EZftxQS8kG6pOMo6NM6Gg#Style.-1047860588.1", "dashboard"),
                _idProps: {
                    service: idService,
                    name: "MainContent"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))))));
        }
    }

    return View;
});
define("PartnersHub.Layouts.LayoutEndpointPage.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.Layouts.LayoutEndpointPage.mvc$translationsResources", "PartnersHub.Layouts.LayoutEndpointPage.mvc$controller.OnRender.JavaScript1JS", "PartnersHub.Layouts.LayoutEndpointPage.mvc$controller.OnClickLogout.JavaScript1JS", "PartnersHub.controller$RedirectToOauth", "PartnersHub.controller$ShowLiveChat", "PartnersHub.controller$UseDevice", "PartnersHub.controller$IsUserLoggedIn", "PartnersHub.controller$MountDerivAPIClient", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$AddFavicon"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, OutSystemsUIModel, OutSystemsUIController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_Layouts_LayoutEndpointPage_mvc_TranslationsResources, PartnersHub_Layouts_LayoutEndpointPage_mvc_controller_OnRender_JavaScript1JS, PartnersHub_Layouts_LayoutEndpointPage_mvc_controller_OnClickLogout_JavaScript1JS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_Layouts_LayoutEndpointPage_mvc_TranslationsResources);
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
            get _onClickRedirectToDashboard$Action() {
                if (!(this.hasOwnProperty("__onClickRedirectToDashboard$Action"))) {
                    this.__onClickRedirectToDashboard$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickRedirectToDashboard", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickRedirectToDashboard");
                                span.setAttribute("outsystems.function.key", "0e6a9c15-74ff-4986-8c3e-2ae56aa98475");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnClickRedirectToDashboard");
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

                return this.__onClickRedirectToDashboard$Action;
            }
            set _onClickRedirectToDashboard$Action(value) {
                this.__onClickRedirectToDashboard$Action = value;
            }

            get _openLogoutModal$Action() {
                if (!(this.hasOwnProperty("__openLogoutModal$Action"))) {
                    this.__openLogoutModal$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OpenLogoutModal", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OpenLogoutModal");
                                span.setAttribute("outsystems.function.key", "0ee17edd-2fdb-4b47-acdf-751c4ee0aa60");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OpenLogoutModal");
                                callContext = controller.callContext(callContext);
                                // IsLogoutModalOpen = True
                                model.variables.isLogoutModalOpenVar = true;
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__openLogoutModal$Action;
            }
            set _openLogoutModal$Action(value) {
                this.__openLogoutModal$Action = value;
            }

            get _onRender$Action() {
                if (!(this.hasOwnProperty("__onRender$Action"))) {
                    this.__onRender$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnRender", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnRender");
                                span.setAttribute("outsystems.function.key", "19bf3675-bf94-49e1-8aea-8342e36d2657");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnRender");
                                callContext = controller.callContext(callContext);
                                OS.Logger.startActiveSpan("JavaScript1", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "JavaScript1");
                                        span.setAttribute("outsystems.function.key", "f041a487-5049-48fd-82c4-af82bab66204");
                                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(PartnersHub_Layouts_LayoutEndpointPage_mvc_controller_OnRender_JavaScript1JS, "JavaScript1", "OnRender", null, function($parameters) {}, {}, {});
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

                return this.__onRender$Action;
            }
            set _onRender$Action(value) {
                this.__onRender$Action = value;
            }

            get _onClickLogout$Action() {
                if (!(this.hasOwnProperty("__onClickLogout$Action"))) {
                    this.__onClickLogout$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickLogout", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickLogout");
                                span.setAttribute("outsystems.function.key", "1ef51c0d-d64d-46a5-bcdc-9a0e9c38089e");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnClickLogout");
                                callContext = controller.callContext(callContext);
                                // IsLogoutModalOpen = True
                                model.variables.isLogoutModalOpenVar = true;
                                OS.Logger.startActiveSpan("JavaScript1", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "JavaScript1");
                                        span.setAttribute("outsystems.function.key", "48674e6e-9d3d-4779-aad6-d8be1bb8b699");
                                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(PartnersHub_Layouts_LayoutEndpointPage_mvc_controller_OnClickLogout_JavaScript1JS, "JavaScript1", "OnClickLogout", null, function($parameters) {}, {}, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
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

                return this.__onClickLogout$Action;
            }
            set _onClickLogout$Action(value) {
                this.__onClickLogout$Action = value;
            }

            get _onClickOpenLiveChat$Action() {
                if (!(this.hasOwnProperty("__onClickOpenLiveChat$Action"))) {
                    this.__onClickOpenLiveChat$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickOpenLiveChat", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickOpenLiveChat");
                                span.setAttribute("outsystems.function.key", "3f66a0ef-dff7-4214-95e5-14bead682412");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnClickOpenLiveChat");
                                callContext = controller.callContext(callContext);
                                // Execute Action: ShowLiveChat
                                PartnersHubController.default.showLiveChat$Action(callContext);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onClickOpenLiveChat$Action;
            }
            set _onClickOpenLiveChat$Action(value) {
                this.__onClickOpenLiveChat$Action = value;
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
                                span.setAttribute("outsystems.function.key", "4d236ec7-2646-43df-a4fb-6ae23a89583e");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnInitialize");
                                callContext = controller.callContext(callContext);
                                var isUserLoggedInVar = new OS.DataTypes.VariableHolder();
                                var addFaviconVar = new OS.DataTypes.VariableHolder();
                                // Execute Action: UseDevice
                                PartnersHubController.default.useDevice$Action(callContext);
                                // Execute Action: MountDerivAPIClient
                                PartnersHubController.default.mountDerivAPIClient$Action(callContext);
                                // Execute Action: IsUserLoggedIn
                                isUserLoggedInVar.value = PartnersHubController.default.isUserLoggedIn$Action(callContext);

                                // isLoggedin = IsUserLoggedIn.isLoggedIn
                                model.variables.isLoggedinVar = isUserLoggedInVar.value.isLoggedInOut;
                                // Execute Action: AddFavicon
                                addFaviconVar.value = OutSystemsUIController.default.addFavicon$Action("favicon.ico", callContext);

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

            get _logInOnClick$Action() {
                if (!(this.hasOwnProperty("__logInOnClick$Action"))) {
                    this.__logInOnClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("LogInOnClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "LogInOnClick");
                                span.setAttribute("outsystems.function.key", "a2a80b23-342d-4a0a-adb7-39bc291294de");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("LogInOnClick");
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

                return this.__logInOnClick$Action;
            }
            set _logInOnClick$Action(value) {
                this.__logInOnClick$Action = value;
            }

            get _closeLogoutModal$Action() {
                if (!(this.hasOwnProperty("__closeLogoutModal$Action"))) {
                    this.__closeLogoutModal$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("CloseLogoutModal", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "CloseLogoutModal");
                                span.setAttribute("outsystems.function.key", "a5afc795-3048-4c55-9271-2ba0c7d668f6");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("CloseLogoutModal");
                                callContext = controller.callContext(callContext);
                                // IsLogoutModalOpen = False
                                model.variables.isLogoutModalOpenVar = false;
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__closeLogoutModal$Action;
            }
            set _closeLogoutModal$Action(value) {
                this.__closeLogoutModal$Action = value;
            }


            onClickRedirectToDashboard$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickRedirectToDashboard__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickRedirectToDashboard");
                        span.setAttribute("outsystems.function.key", "0e6a9c15-74ff-4986-8c3e-2ae56aa98475");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onClickRedirectToDashboard$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            openLogoutModal$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OpenLogoutModal__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OpenLogoutModal");
                        span.setAttribute("outsystems.function.key", "0ee17edd-2fdb-4b47-acdf-751c4ee0aa60");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._openLogoutModal$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onRender$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnRender__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnRender");
                        span.setAttribute("outsystems.function.key", "19bf3675-bf94-49e1-8aea-8342e36d2657");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onRender$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onClickLogout$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickLogout__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickLogout");
                        span.setAttribute("outsystems.function.key", "1ef51c0d-d64d-46a5-bcdc-9a0e9c38089e");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onClickLogout$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onClickOpenLiveChat$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickOpenLiveChat__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickOpenLiveChat");
                        span.setAttribute("outsystems.function.key", "3f66a0ef-dff7-4214-95e5-14bead682412");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onClickOpenLiveChat$Action, callContext);
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
                        span.setAttribute("outsystems.function.key", "4d236ec7-2646-43df-a4fb-6ae23a89583e");
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

            logInOnClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("LogInOnClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "LogInOnClick");
                        span.setAttribute("outsystems.function.key", "a2a80b23-342d-4a0a-adb7-39bc291294de");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._logInOnClick$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            closeLogoutModal$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("CloseLogoutModal__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "CloseLogoutModal");
                        span.setAttribute("outsystems.function.key", "a5afc795-3048-4c55-9271-2ba0c7d668f6");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._closeLogoutModal$Action, callContext);
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
                    this._onRenderEventHandler = function(callContext) {
                        var controller = this.controller;
                        var model = this.model;
                        var idService = this.idService;

                        return controller.onRender$Action(callContext);

                    };
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

    }
    return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});

define("PartnersHub.Layouts.LayoutEndpointPage.mvc$controller.OnRender.JavaScript1JS", [], function() {
    return function($actions, $roles, $public) {
        function styleTitleOnPath() {
            // Define the element ID
            var elementId = 'b1-PartnershubTitle';

            // Define the target pathname
            var targetPathname = '/PartnersHub/PartnersHubDashboard';

            // Get the current pathname
            var currentPathname = window.location.pathname;

            // Check if the current pathname matches the target pathname
            if (currentPathname.includes(targetPathname)) {
                // Find the element by ID
                var element = document.getElementById(elementId);

                // Check if the element exists
                if (element) {
                    // Set the style to bold
                    element.style.fontWeight = 'bold';
                }
            }
        }

        // Call the function to apply styles based on the current path
        styleTitleOnPath();

    };
});

define("PartnersHub.Layouts.LayoutEndpointPage.mvc$controller.OnClickLogout.JavaScript1JS", [], function() {
    return function($actions, $roles, $public) {
        const loginid = localStorage.getItem("loginId");
        const token = localStorage.getItem('token');

        if (loginid && token) {
            localStorage.removeItem("loginid");
            localStorage.removeItem("token")
        }
    };
});


define("PartnersHub.Layouts.LayoutEndpointPage.mvc$translationsResources.de-DE", [], function() {
    return {
        "GEy4JXgKwEmTE4e9nNrJBw#Value.3343801.1": "main",
        "0EZftxQS8kG6pOMo6NM6Gg#Style.-1047860588.1": "Dashboard",
        "W7Kh4ThM_UWNlBaPdD6URg#Value": "Anmelden",
        "oiMnGVHyYUyzhvGIqB3aNQ#Value": "Abmelden",
        "5tk6rybKDkWIIZMcBm5xRw#ValueExpression.3343801.1": "main",
        "dbxxueEmnEKv5372e5NktQ#ValueExpression.-1770855897.1": "layout layout-blank",
        "RzfRPsfq0U+UE_D6UKErng#Value": "Bist du sicher, dass du dich abmelden möchtest?"
    };
});

define("PartnersHub.Layouts.LayoutEndpointPage.mvc$translationsResources.es-ES", [], function() {
    return {
        "GEy4JXgKwEmTE4e9nNrJBw#Value.3343801.1": "main",
        "0EZftxQS8kG6pOMo6NM6Gg#Style.-1047860588.1": "Panel de control",
        "W7Kh4ThM_UWNlBaPdD6URg#Value": "Iniciar sesión",
        "oiMnGVHyYUyzhvGIqB3aNQ#Value": "Cerrar sesión",
        "5tk6rybKDkWIIZMcBm5xRw#ValueExpression.3343801.1": "main",
        "dbxxueEmnEKv5372e5NktQ#ValueExpression.-1770855897.1": "layout layout-blank",
        "RzfRPsfq0U+UE_D6UKErng#Value": "¿Estás seguro de que quieres cerrar sesión?"
    };
});

define("PartnersHub.Layouts.LayoutEndpointPage.mvc$translationsResources.fr-FR", [], function() {
    return {
        "GEy4JXgKwEmTE4e9nNrJBw#Value.3343801.1": "main",
        "0EZftxQS8kG6pOMo6NM6Gg#Style.-1047860588.1": "Tableau de bord",
        "W7Kh4ThM_UWNlBaPdD6URg#Value": "Se connecter",
        "oiMnGVHyYUyzhvGIqB3aNQ#Value": "Se déconnecter",
        "5tk6rybKDkWIIZMcBm5xRw#ValueExpression.3343801.1": "main",
        "dbxxueEmnEKv5372e5NktQ#ValueExpression.-1770855897.1": "layout layout-blank",
        "RzfRPsfq0U+UE_D6UKErng#Value": "Êtes-vous sûr de vouloir vous déconnecter ?"
    };
});

define("PartnersHub.Layouts.LayoutEndpointPage.mvc$translationsResources.it-IT", [], function() {
    return {
        "GEy4JXgKwEmTE4e9nNrJBw#Value.3343801.1": "main",
        "0EZftxQS8kG6pOMo6NM6Gg#Style.-1047860588.1": "Cruscotto",
        "W7Kh4ThM_UWNlBaPdD6URg#Value": "Accedi",
        "oiMnGVHyYUyzhvGIqB3aNQ#Value": "Disconnettersi",
        "5tk6rybKDkWIIZMcBm5xRw#ValueExpression.3343801.1": "main",
        "dbxxueEmnEKv5372e5NktQ#ValueExpression.-1770855897.1": "layout layout-blank",
        "RzfRPsfq0U+UE_D6UKErng#Value": "Sei sicuro di voler disconnetterti?"
    };
});

define("PartnersHub.Layouts.LayoutEndpointPage.mvc$translationsResources.pl-PL", [], function() {
    return {
        "GEy4JXgKwEmTE4e9nNrJBw#Value.3343801.1": "main",
        "0EZftxQS8kG6pOMo6NM6Gg#Style.-1047860588.1": "Panel sterowania",
        "W7Kh4ThM_UWNlBaPdD6URg#Value": "Zaloguj się",
        "oiMnGVHyYUyzhvGIqB3aNQ#Value": "Wyloguj się",
        "5tk6rybKDkWIIZMcBm5xRw#ValueExpression.3343801.1": "main",
        "dbxxueEmnEKv5372e5NktQ#ValueExpression.-1770855897.1": "layout layout-blank",
        "RzfRPsfq0U+UE_D6UKErng#Value": "Czy na pewno chcesz się wylogować?"
    };
});

define("PartnersHub.Layouts.LayoutEndpointPage.mvc$translationsResources.pt-PT", [], function() {
    return {
        "GEy4JXgKwEmTE4e9nNrJBw#Value.3343801.1": "main",
        "0EZftxQS8kG6pOMo6NM6Gg#Style.-1047860588.1": "Painel de controle",
        "W7Kh4ThM_UWNlBaPdD6URg#Value": "Iniciar sessão",
        "oiMnGVHyYUyzhvGIqB3aNQ#Value": "Sair",
        "5tk6rybKDkWIIZMcBm5xRw#ValueExpression.3343801.1": "main",
        "dbxxueEmnEKv5372e5NktQ#ValueExpression.-1770855897.1": "layout layout-blank",
        "RzfRPsfq0U+UE_D6UKErng#Value": "Tem certeza de que deseja sair?"
    };
});

define("PartnersHub.Layouts.LayoutEndpointPage.mvc$translationsResources.ru-RU", [], function() {
    return {
        "GEy4JXgKwEmTE4e9nNrJBw#Value.3343801.1": "main",
        "0EZftxQS8kG6pOMo6NM6Gg#Style.-1047860588.1": "Панель управления",
        "W7Kh4ThM_UWNlBaPdD6URg#Value": "Войти",
        "oiMnGVHyYUyzhvGIqB3aNQ#Value": "Выйти",
        "5tk6rybKDkWIIZMcBm5xRw#ValueExpression.3343801.1": "main",
        "dbxxueEmnEKv5372e5NktQ#ValueExpression.-1770855897.1": "layout layout-blank",
        "RzfRPsfq0U+UE_D6UKErng#Value": "Вы уверены, что хотите выйти?"
    };
});

define("PartnersHub.Layouts.LayoutEndpointPage.mvc$translationsResources", ["exports", "PartnersHub.Layouts.LayoutEndpointPage.mvc$translationsResources.de-DE", "PartnersHub.Layouts.LayoutEndpointPage.mvc$translationsResources.es-ES", "PartnersHub.Layouts.LayoutEndpointPage.mvc$translationsResources.fr-FR", "PartnersHub.Layouts.LayoutEndpointPage.mvc$translationsResources.it-IT", "PartnersHub.Layouts.LayoutEndpointPage.mvc$translationsResources.pl-PL", "PartnersHub.Layouts.LayoutEndpointPage.mvc$translationsResources.pt-PT", "PartnersHub.Layouts.LayoutEndpointPage.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_Layouts_LayoutEndpointPage_mvc_translationsResources_deDE, PartnersHub_Layouts_LayoutEndpointPage_mvc_translationsResources_esES, PartnersHub_Layouts_LayoutEndpointPage_mvc_translationsResources_frFR, PartnersHub_Layouts_LayoutEndpointPage_mvc_translationsResources_itIT, PartnersHub_Layouts_LayoutEndpointPage_mvc_translationsResources_plPL, PartnersHub_Layouts_LayoutEndpointPage_mvc_translationsResources_ptPT, PartnersHub_Layouts_LayoutEndpointPage_mvc_translationsResources_ruRU) {
    return {
        "de-DE": {
            "translations": PartnersHub_Layouts_LayoutEndpointPage_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_Layouts_LayoutEndpointPage_mvc_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_Layouts_LayoutEndpointPage_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_Layouts_LayoutEndpointPage_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_Layouts_LayoutEndpointPage_mvc_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_Layouts_LayoutEndpointPage_mvc_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_Layouts_LayoutEndpointPage_mvc_translationsResources_ruRU,
            "isRTL": false
        }
    };
});