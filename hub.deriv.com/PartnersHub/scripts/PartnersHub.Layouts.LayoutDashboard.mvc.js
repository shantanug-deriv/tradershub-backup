define("PartnersHub.Layouts.LayoutDashboard.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model", "OutSystemsUI.model", "OutSystemsUI.controller", "PartnersHub.controller", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "CustomComponents.ButtonVariants.PrimaryButton.mvc$model", "CustomComponents.ButtonVariants.SecondaryButton.mvc$model", "OutSystemsUI.Adaptive.DisplayOnDevice.mvc$model", "OutSystemsUI.Content.Tooltip.mvc$model", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$MenuShow", "PartnersHub.model$ST_23ff1d290ec4691b1c668ad437100cd0Structure", "PartnersHub.controller$RudderstackTrackEvent", "OutSystemsUI.controller$AddFavicon", "PartnersHub.controller$MountDerivAPIClient", "PartnersHub.controller$UseDevice", "PartnersHub.controller$ShowLiveChat", "PartnersHub.controller$MountDatadogClient", "RESTAPIWebsocket.model$ST_bc9f0cd5cd952aeeadf59ee9a5dfb79aStructure", "PartnersHub.referencesHealth$RESTAPIWebsocket", "RESTAPIWebsocket.controller$WebsocketLogout", "PartnersHub.controller$RedirectToOauth"], function(OSRuntimeCore, PartnersHubModel, OutSystemsUIModel, OutSystemsUIController, PartnersHubController, RESTAPIWebsocketModel, RESTAPIWebsocketController, CustomComponents_ButtonVariants_PrimaryButton_mvcModel, CustomComponents_ButtonVariants_SecondaryButton_mvcModel, OutSystemsUI_Adaptive_DisplayOnDevice_mvcModel, OutSystemsUI_Content_Tooltip_mvcModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("IsLogoutModalOpen", "isLogoutModalOpenVar", "IsLogoutModalOpen", true, false, OS.DataTypes.DataTypes.Boolean, function() {
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
                Model._hasValidationWidgetsValue = (((CustomComponents_ButtonVariants_PrimaryButton_mvcModel.hasValidationWidgets || CustomComponents_ButtonVariants_SecondaryButton_mvcModel.hasValidationWidgets) || OutSystemsUI_Adaptive_DisplayOnDevice_mvcModel.hasValidationWidgets) || OutSystemsUI_Content_Tooltip_mvcModel.hasValidationWidgets);
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

define("PartnersHub.Layouts.LayoutDashboard.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.Layouts.LayoutDashboard.mvc$model", "PartnersHub.Layouts.LayoutDashboard.mvc$controller", "PartnersHub.clientVariables", "@outsystems/runtime-widgets-js", "CustomComponents.ButtonVariants.PrimaryButton.mvc$view", "CustomComponents.ButtonVariants.SecondaryButton.mvc$view", "OutSystemsUI.Adaptive.DisplayOnDevice.mvc$view", "OutSystemsUI.Content.Tooltip.mvc$view", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$MenuShow", "PartnersHub.model$ST_23ff1d290ec4691b1c668ad437100cd0Structure", "PartnersHub.controller$RudderstackTrackEvent", "OutSystemsUI.controller$AddFavicon", "PartnersHub.controller$MountDerivAPIClient", "PartnersHub.controller$UseDevice", "PartnersHub.controller$ShowLiveChat", "PartnersHub.controller$MountDatadogClient", "RESTAPIWebsocket.model$ST_bc9f0cd5cd952aeeadf59ee9a5dfb79aStructure", "PartnersHub.referencesHealth$RESTAPIWebsocket", "RESTAPIWebsocket.controller$WebsocketLogout", "PartnersHub.controller$RedirectToOauth"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, OutSystemsUIModel, OutSystemsUIController, RESTAPIWebsocketModel, RESTAPIWebsocketController, React, OSView, PartnersHub_Layouts_LayoutDashboard_mvc_model, PartnersHub_Layouts_LayoutDashboard_mvc_controller, PartnersHubClientVariables, OSWidgets, CustomComponents_ButtonVariants_PrimaryButton_mvc_view, CustomComponents_ButtonVariants_SecondaryButton_mvc_view, OutSystemsUI_Adaptive_DisplayOnDevice_mvc_view, OutSystemsUI_Content_Tooltip_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "Layouts.LayoutDashboard";
        }

        static getAttributes() {
            return {
                codeFunction: "LayoutDashboard",
                functionKey: "d0ab5454-87c4-4dc3-aaa0-69b46d50202f",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Layouts.LayoutDashboard.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [CustomComponents_ButtonVariants_PrimaryButton_mvc_view, CustomComponents_ButtonVariants_SecondaryButton_mvc_view, OutSystemsUI_Adaptive_DisplayOnDevice_mvc_view, OutSystemsUI_Content_Tooltip_mvc_view];
        }

        get modelFactory() {
            return PartnersHub_Layouts_LayoutDashboard_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_Layouts_LayoutDashboard_mvc_controller;
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
                text: [$text(getTranslation("u6D_wbxGcUC2hnueavwrUA#Value", "Are you sure you want to log out?"))],
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
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return controller.onClickLogout$Action(controller.callContext(eventHandlerContext));
                        });;
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
                    title: "Yes, log out",
                    height: "40px",
                    Width: "100%"
                },
                events: {
                    _handleError: function(ex) {
                        controller.handleError(ex);
                    },
                    onClick$Action: function() {
                        return Promise.resolve().then(function() {
                            var eventHandlerContext = callContext.clone();
                            return controller.onClickLogout$Action(controller.callContext(eventHandlerContext));
                        });;
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
                    height: "40px",
                    title: "Cancel",
                    borderRadius: "100px",
                    Width: "100%",
                    BorderColor: "#FF444F"
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
                    return ((("layout layout-blank" + ((model.variables.hasFixedHeaderIn) ? (" fixed-header") : (""))) + ((!(model.variables.enableAccessibilityFeaturesIn)) ? ("") : (" has-accessible-features"))) + (((model.variables.extendedClassIn === "")) ? ("") : ((" " + model.variables.extendedClassIn))));
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
                style: "main",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "11"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OutSystemsUI_Adaptive_DisplayOnDevice_mvc_view, {
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
                    alias: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    onDesktop: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.AdvancedHtml, {
                            extendedProperties: {
                                role: "banner",
                                className: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("L0LZ2weFB0i4vQ6cHwhS1Q#Value.-1221270899.1", "header")
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
                                style: "align-items: center; display: flex; flex-shrink: 0; height: 56px; justify-content: space-between; padding: 16px 40px;"
                            },
                            gridProperties: {
                                classes: "OSInline",
                                width: "100%"
                            },
                            style: "header-top",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "14"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "align-items: center; display: flex; gap: 16px; text-align: right;"
                            },
                            style: "left-header",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "15"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            extendedEvents: {
                                onClick: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.onClickRedirectToDerivCom$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            extendedProperties: {
                                style: "height: 24px;"
                            },
                            gridProperties: {
                                width: "130px",
                                marginLeft: "0"
                            },
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.DashboardPartnersLogo.svg"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "16"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "display: flex; gap: 32px; justify-content: center;"
                            },
                            style: "display-flex align-items-center",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "17"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OutSystemsUI_Content_Tooltip_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                ExtendedClass: "tooltip",
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
                                name: "LivechatTooltip",
                                alias: "4"
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
                                                controller.onClickOpenLiveChat$Action(controller.callContext(eventHandlerContext));

                                                ;
                                            }
                                        },
                                        extendedProperties: {
                                            "data-allow-event-propagation": "True",
                                            style: "cursor: pointer;"
                                        },
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "19"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Image, {
                                        extendedProperties: {
                                            "data-allow-event-propagation": "True"
                                        },
                                        gridProperties: {
                                            width: "28px"
                                        },
                                        image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.livechat2.svg"),
                                        type: /*Static*/ 0,
                                        _idProps: {
                                            service: idService,
                                            uuid: "20"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }))];
                                }),
                                tooltip: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            "data-allow-event-propagation": "True",
                                            style: "text-align: center;"
                                        },
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "21"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, $text(getTranslation("zOG2b5Vg8UWXy3rR7PzcOw#Value", "Live chat")))];
                                })
                            },
                            _dependencies: []
                        }), React.createElement(OutSystemsUI_Content_Tooltip_mvc_view, {
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
                                name: "LogoutTooltip",
                                alias: "5"
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
                                            uuid: "23"
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
                                            uuid: "24"
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
                                            uuid: "25"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, $text(getTranslation("jJ43ECPLvEeKFN3LPXcGug#Value", "Log out")))];
                                })
                            },
                            _dependencies: []
                        }))))];
                    }),
                    onTablet: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.AdvancedHtml, {
                            extendedProperties: {
                                role: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("ZGGeSbg7WUagZno4rBIW5w#Value.-1396342996.1", "banner"),
                                className: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("38XhKKe5LEW+A2zRRni8zQ#Value.-1221270899.1", "header")
                            },
                            tag: "header",
                            _idProps: {
                                service: idService,
                                name: "Header3"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "align-items: center; display: flex; flex-shrink: 0; height: 56px; justify-content: space-between; padding: 16px 40px;"
                            },
                            gridProperties: {
                                classes: "OSInline",
                                width: "100%"
                            },
                            style: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("rTuVkrGaBEOPnPSbtA3yVQ#ValueExpression.1976371733.1", "header-top"),
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
                                style: "align-items: center; display: flex; gap: 16px; text-align: right;"
                            },
                            style: "left-header",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "28"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            extendedEvents: {
                                onClick: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.onClickRedirectToDerivCom$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            extendedProperties: {
                                style: "height: 24px;"
                            },
                            gridProperties: {
                                width: "130px",
                                marginLeft: "0"
                            },
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.DashboardPartnersLogo.svg"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "29"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "display: flex; gap: 32px; justify-content: center;"
                            },
                            style: "display-flex align-items-center",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "30"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OutSystemsUI_Content_Tooltip_mvc_view, {
                            getOwnerSpan: function() {
                                return _this.getChildSpan("render");
                            },
                            getOwnerDisposeSpan: function() {
                                return _this.getChildSpan("destroy");
                            },
                            inputs: {
                                ExtendedClass: "tooltip",
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
                                name: "LivechatTooltip2",
                                alias: "6"
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
                                                controller.onClickOpenLiveChat$Action(controller.callContext(eventHandlerContext));

                                                ;
                                            }
                                        },
                                        extendedProperties: {
                                            "data-allow-event-propagation": "True",
                                            style: "cursor: pointer;"
                                        },
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "32"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, React.createElement(OSWidgets.Image, {
                                        extendedProperties: {
                                            "data-allow-event-propagation": "True"
                                        },
                                        gridProperties: {
                                            width: "28px"
                                        },
                                        image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.livechat2.svg"),
                                        type: /*Static*/ 0,
                                        _idProps: {
                                            service: idService,
                                            uuid: "33"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }))];
                                }),
                                tooltip: new PlaceholderContent(function() {
                                    return [React.createElement(OSWidgets.Container, {
                                        align: /*Default*/ 0,
                                        animate: false,
                                        extendedProperties: {
                                            "data-allow-event-propagation": "True",
                                            style: "text-align: center;"
                                        },
                                        visible: true,
                                        _idProps: {
                                            service: idService,
                                            uuid: "34"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, $text(getTranslation("y3I3z2tJB06xi0f6VYHYww#Value", "Live chat")))];
                                })
                            },
                            _dependencies: []
                        }), React.createElement(OutSystemsUI_Content_Tooltip_mvc_view, {
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
                                name: "LogoutTooltip2",
                                alias: "7"
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
                                            uuid: "36"
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
                                            uuid: "37"
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
                                            uuid: "38"
                                        },
                                        _widgetRecordProvider: widgetsRecordProvider
                                    }, $text(getTranslation("WuL5RxW2z0GzmUysFxZAVg#Value", "Log out")))];
                                })
                            },
                            _dependencies: []
                        }))))];
                    }),
                    onPhone: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedEvents: {
                                onClick: function() {
                                    return Promise.resolve().then(function() {
                                        var eventHandlerContext = callContext.clone();
                                        return controller.onClickOpenSideMenu$Action(controller.callContext(eventHandlerContext));
                                    });;
                                }
                            },
                            extendedProperties: {
                                style: "padding: 16px;"
                            },
                            style: "dashboard-mobile-header",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "39"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "align-items: center; display: flex;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "40"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            extendedEvents: {
                                onClick: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.onClickRedirectToDerivCom$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            extendedProperties: {
                                style: "height: 48px;"
                            },
                            gridProperties: {
                                width: "130px"
                            },
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.DashboardPartnersLogo.svg"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "41"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "display: flex; gap: 32px; justify-content: center;"
                            },
                            style: "display-flex align-items-center",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "42"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "cursor: pointer;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "43"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            extendedEvents: {
                                onClick: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.onClickOpenLiveChat$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.livechat2.svg"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "44"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        })), React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "cursor: pointer;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "45"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            extendedEvents: {
                                onClick: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.openLogoutModal$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            gridProperties: {
                                width: "22px"
                            },
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.logout.svg"),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "46"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }))))];
                    })
                },
                _dependencies: []
            }), React.createElement(OSWidgets.Container, {
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
                    role: "main",
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
                style: OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("PU7gknieWkOx_ByEMNdLqQ#Style.-1047860588.1", "dashboard"),
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
define("PartnersHub.Layouts.LayoutDashboard.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.Layouts.LayoutDashboard.mvc$translationsResources", "PartnersHub.Layouts.LayoutDashboard.mvc$controller.OnRender.JavaScript1JS", "PartnersHub.Layouts.LayoutDashboard.mvc$controller.OnClickLogout.HandleLogoutJS", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$MenuShow", "PartnersHub.model$ST_23ff1d290ec4691b1c668ad437100cd0Structure", "PartnersHub.controller$RudderstackTrackEvent", "OutSystemsUI.controller$AddFavicon", "PartnersHub.controller$MountDerivAPIClient", "PartnersHub.controller$UseDevice", "PartnersHub.controller$ShowLiveChat", "PartnersHub.controller$MountDatadogClient", "RESTAPIWebsocket.model$ST_bc9f0cd5cd952aeeadf59ee9a5dfb79aStructure", "PartnersHub.referencesHealth$RESTAPIWebsocket", "RESTAPIWebsocket.controller$WebsocketLogout", "PartnersHub.controller$RedirectToOauth"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, OutSystemsUIModel, OutSystemsUIController, RESTAPIWebsocketModel, RESTAPIWebsocketController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_Layouts_LayoutDashboard_mvc_TranslationsResources, PartnersHub_Layouts_LayoutDashboard_mvc_controller_OnRender_JavaScript1JS, PartnersHub_Layouts_LayoutDashboard_mvc_controller_OnClickLogout_HandleLogoutJS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_Layouts_LayoutDashboard_mvc_TranslationsResources);
                var controller = this.controller;
                this.clientActionProxies = {
                    closeLogoutModal$Action: function() {
                        return controller.executeActionInsideJSNode(controller._closeLogoutModal$Action.bind(controller), controller.callContext(), function(actionResults) {
                            return {};
                        }, function() {
                            return;
                        }, "CloseLogoutModal");
                    },
                    showLoader$Action: function() {
                        return controller.executeActionInsideJSNode(controller._showLoader$Action.bind(controller), controller.callContext(), function(actionResults) {
                            return {};
                        }, function() {
                            return;
                        }, "ShowLoader");
                    }
                };
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
            get _onClickOpenSideMenu$Action() {
                if (!(this.hasOwnProperty("__onClickOpenSideMenu$Action"))) {
                    this.__onClickOpenSideMenu$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickOpenSideMenu", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickOpenSideMenu");
                                span.setAttribute("outsystems.function.key", "0df74a61-dd44-40bf-8a43-911ec5a2f053");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnClickOpenSideMenu");
                                callContext = controller.callContext(callContext);
                                var menuShowVar = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Execute Action: MenuShow
                                    model.flush();
                                    return OutSystemsUIController.default.menuShow$Action(callContext).then(function(value) {
                                        menuShowVar.value = value;
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

                return this.__onClickOpenSideMenu$Action;
            }
            set _onClickOpenSideMenu$Action(value) {
                this.__onClickOpenSideMenu$Action = value;
            }

            get _onClickRedirectToDerivCom$Action() {
                if (!(this.hasOwnProperty("__onClickRedirectToDerivCom$Action"))) {
                    this.__onClickRedirectToDerivCom$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickRedirectToDerivCom", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickRedirectToDerivCom");
                                span.setAttribute("outsystems.function.key", "0ea82f85-1230-402e-bd21-939ea2d80771");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnClickRedirectToDerivCom");
                                callContext = controller.callContext(callContext);
                                // Execute Action: RudderstackTrackEvent
                                PartnersHubController.default.rudderstackTrackEvent$Action(function() {
                                    var rec = new PartnersHubModel.ST_23ff1d290ec4691b1c668ad437100cd0Structure();
                                    rec.actionAttr = "click_cta";
                                    rec.cta_nameAttr = "Partner logo";
                                    rec.cta_placementAttr = "header";
                                    return rec;
                                }(), "ce_partnershub_form", callContext);
                                // Destination: /PartnersHub/
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("https://deriv.com/partners/affiliate-ib/", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onClickRedirectToDerivCom$Action;
            }
            set _onClickRedirectToDerivCom$Action(value) {
                this.__onClickRedirectToDerivCom$Action = value;
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
                                span.setAttribute("outsystems.function.key", "23b8a9bb-b3e5-4834-8673-69e6a9e81dfa");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnInitialize");
                                callContext = controller.callContext(callContext);
                                var addFaviconVar = new OS.DataTypes.VariableHolder();
                                // Execute Action: UseDevice
                                PartnersHubController.default.useDevice$Action(callContext);
                                // Execute Action: MountDerivAPIClient
                                PartnersHubController.default.mountDerivAPIClient$Action(callContext);
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

            get _onRender$Action() {
                if (!(this.hasOwnProperty("__onRender$Action"))) {
                    this.__onRender$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnRender", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnRender");
                                span.setAttribute("outsystems.function.key", "2d38324d-804a-4938-9655-af29c669aa22");
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
                                        span.setAttribute("outsystems.function.key", "95908930-c311-453e-8dc5-b639ebff7e7b");
                                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(PartnersHub_Layouts_LayoutDashboard_mvc_controller_OnRender_JavaScript1JS, "JavaScript1", "OnRender", null, function($parameters) {}, {}, {});
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

            get _openLogoutModal$Action() {
                if (!(this.hasOwnProperty("__openLogoutModal$Action"))) {
                    this.__openLogoutModal$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OpenLogoutModal", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OpenLogoutModal");
                                span.setAttribute("outsystems.function.key", "58fd206f-de66-475f-9bbd-969cccd86c6a");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OpenLogoutModal");
                                callContext = controller.callContext(callContext);
                                // IsLogoutModalOpen = True
                                model.variables.isLogoutModalOpenVar = true;
                                // Execute Action: RudderstackTrackEvent
                                PartnersHubController.default.rudderstackTrackEvent$Action(function() {
                                    var rec = new PartnersHubModel.ST_23ff1d290ec4691b1c668ad437100cd0Structure();
                                    rec.actionAttr = "click_cta";
                                    rec.cta_nameAttr = "Open logout modal";
                                    rec.cta_placementAttr = "header";
                                    return rec;
                                }(), "ce_partnershub_form", callContext);
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

            get _closeLogoutModal$Action() {
                if (!(this.hasOwnProperty("__closeLogoutModal$Action"))) {
                    this.__closeLogoutModal$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("CloseLogoutModal", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "CloseLogoutModal");
                                span.setAttribute("outsystems.function.key", "7327fe11-bee7-4eb5-84f4-483903b03f17");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("CloseLogoutModal");
                                callContext = controller.callContext(callContext);
                                // IsLogoutModalOpen = False
                                model.variables.isLogoutModalOpenVar = false;
                                // Execute Action: RudderstackTrackEvent
                                PartnersHubController.default.rudderstackTrackEvent$Action(function() {
                                    var rec = new PartnersHubModel.ST_23ff1d290ec4691b1c668ad437100cd0Structure();
                                    rec.actionAttr = "click_cta";
                                    rec.cta_nameAttr = "Close logout modal";
                                    rec.cta_placementAttr = "header";
                                    return rec;
                                }(), "ce_partnershub_form", callContext);
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

            get _onClickOpenLiveChat$Action() {
                if (!(this.hasOwnProperty("__onClickOpenLiveChat$Action"))) {
                    this.__onClickOpenLiveChat$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickOpenLiveChat", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickOpenLiveChat");
                                span.setAttribute("outsystems.function.key", "7711aef7-f11f-4ea0-96a5-7455934c45fe");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnClickOpenLiveChat");
                                callContext = controller.callContext(callContext);
                                // Execute Action: ShowLiveChat
                                PartnersHubController.default.showLiveChat$Action(callContext);
                                // Execute Action: RudderstackTrackEvent
                                PartnersHubController.default.rudderstackTrackEvent$Action(function() {
                                    var rec = new PartnersHubModel.ST_23ff1d290ec4691b1c668ad437100cd0Structure();
                                    rec.actionAttr = "click_cta";
                                    rec.cta_nameAttr = "Open livechat";
                                    rec.cta_placementAttr = "header";
                                    return rec;
                                }(), "ce_partnershub_form", callContext);
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

            get _showLoader$Action() {
                if (!(this.hasOwnProperty("__showLoader$Action"))) {
                    this.__showLoader$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("ShowLoader", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "ShowLoader");
                                span.setAttribute("outsystems.function.key", "d801a908-0fd3-4783-81f3-a695bc3b31a2");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("ShowLoader");
                                callContext = controller.callContext(callContext);
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Trigger Event: showLoaderEvent
                                    return controller.showLoaderEvent$Action(callContext);
                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    };
                }

                return this.__showLoader$Action;
            }
            set _showLoader$Action(value) {
                this.__showLoader$Action = value;
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
                                span.setAttribute("outsystems.function.key", "e05a15ee-c900-4094-a72a-c5d260032d80");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                // Execute Action: MountDatadog
                                PartnersHubController.default.mountDatadogClient$Action(callContext);
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

            get _onClickLogout$Action() {
                if (!(this.hasOwnProperty("__onClickLogout$Action"))) {
                    this.__onClickLogout$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnClickLogout", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnClickLogout");
                                span.setAttribute("outsystems.function.key", "fbcb3df8-f3ed-452d-845e-b408682efe92");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnClickLogout");
                                callContext = controller.callContext(callContext);
                                return OS.Flow.executeAsyncFlow(function() {
                                    // IsLogoutModalOpen = True
                                    model.variables.isLogoutModalOpenVar = true;
                                    // Execute Action: RudderstackTrackEvent
                                    PartnersHubController.default.rudderstackTrackEvent$Action(function() {
                                        var rec = new PartnersHubModel.ST_23ff1d290ec4691b1c668ad437100cd0Structure();
                                        rec.actionAttr = "click_cta";
                                        rec.cta_nameAttr = "Logout";
                                        rec.cta_placementAttr = "header";
                                        return rec;
                                    }(), "ce_partnershub_form", callContext);
                                    return OS.Logger.startActiveSpan("HandleLogout", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "HandleLogout");
                                            span.setAttribute("outsystems.function.key", "e0270848-3f3a-4be7-bd42-11bc3f1e2c2e");
                                            span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                            span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                        }

                                        try {
                                            return controller.safeExecuteAsyncJSNode(PartnersHub_Layouts_LayoutDashboard_mvc_controller_OnClickLogout_HandleLogoutJS, "HandleLogout", "OnClickLogout", {
                                                CurrentAppId: OS.DataConversion.JSNodeParamConverter.to(PartnersHubClientVariables.getAppId(), OS.DataTypes.DataTypes.Text),
                                                ServerUrl: OS.DataConversion.JSNodeParamConverter.to(PartnersHubClientVariables.getServer(), OS.DataTypes.DataTypes.Text)
                                            }, function($parameters) {}, {
                                                CloseLogoutModal: controller.clientActionProxies.closeLogoutModal$Action,
                                                ShowLoader: controller.clientActionProxies.showLoader$Action,
                                                WebsocketLogout: RESTAPIWebsocketController.default.clientActionProxies.websocketLogout$Action,
                                                RedirectToOauth: PartnersHubController.default.clientActionProxies.redirectToOauth$Action
                                            }, {});
                                        } finally {
                                            if (span) {
                                                span.end();
                                            }

                                        }

                                    }, 1);
                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    };
                }

                return this.__onClickLogout$Action;
            }
            set _onClickLogout$Action(value) {
                this.__onClickLogout$Action = value;
            }


            onClickOpenSideMenu$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickOpenSideMenu__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickOpenSideMenu");
                        span.setAttribute("outsystems.function.key", "0df74a61-dd44-40bf-8a43-911ec5a2f053");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._onClickOpenSideMenu$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            onClickRedirectToDerivCom$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickRedirectToDerivCom__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickRedirectToDerivCom");
                        span.setAttribute("outsystems.function.key", "0ea82f85-1230-402e-bd21-939ea2d80771");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onClickRedirectToDerivCom$Action, callContext);
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
                        span.setAttribute("outsystems.function.key", "23b8a9bb-b3e5-4834-8673-69e6a9e81dfa");
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

            onRender$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnRender__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnRender");
                        span.setAttribute("outsystems.function.key", "2d38324d-804a-4938-9655-af29c669aa22");
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

            openLogoutModal$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OpenLogoutModal__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OpenLogoutModal");
                        span.setAttribute("outsystems.function.key", "58fd206f-de66-475f-9bbd-969cccd86c6a");
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

            closeLogoutModal$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("CloseLogoutModal__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "CloseLogoutModal");
                        span.setAttribute("outsystems.function.key", "7327fe11-bee7-4eb5-84f4-483903b03f17");
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

            onClickOpenLiveChat$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickOpenLiveChat__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickOpenLiveChat");
                        span.setAttribute("outsystems.function.key", "7711aef7-f11f-4ea0-96a5-7455934c45fe");
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

            showLoader$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("ShowLoader__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "ShowLoader");
                        span.setAttribute("outsystems.function.key", "d801a908-0fd3-4783-81f3-a695bc3b31a2");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._showLoader$Action, callContext);
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
                        span.setAttribute("outsystems.function.key", "e05a15ee-c900-4094-a72a-c5d260032d80");
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

            onClickLogout$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnClickLogout__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnClickLogout");
                        span.setAttribute("outsystems.function.key", "fbcb3df8-f3ed-452d-845e-b408682efe92");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._onClickLogout$Action, callContext);
                    }, function() {
                        if (span) {
                            span.end();
                        }

                    });
                }, 0);

            }

            get showLoaderEvent$Action() {
                if (!(this.hasOwnProperty("_showLoaderEvent$Action"))) {
                    this._showLoaderEvent$Action = function() {
                        return Promise.resolve();
                    };
                }

                return this._showLoaderEvent$Action;
            }
            set showLoaderEvent$Action(value) {
                this._showLoaderEvent$Action = value;
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

define("PartnersHub.Layouts.LayoutDashboard.mvc$controller.OnRender.JavaScript1JS", [], function() {
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

define("PartnersHub.Layouts.LayoutDashboard.mvc$controller.OnClickLogout.HandleLogoutJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        return new Promise(function($resolve, $reject) {
            const loginid = localStorage.getItem("loginId");
            const token = localStorage.getItem('token');
            const currentAppId = Number($parameters.CurrentAppId);
            const serverUrl = $parameters.ServerUrl

            const validServers = ['green.derivws.com', 'red.derivws.com', 'blue.derivws.com'];

            const isOAuthServer = validServers.includes(serverUrl);

            const oauthServer = isOAuthServer ? 'oauth.deriv.com' : serverUrl;

            function removeLocalStorage() {
                if (loginid && token) {
                    localStorage.removeItem("loginId");
                    localStorage.removeItem("token");
                    localStorage.removeItem("active_user_id");
                }
            }

            function performLogout() {
                $actions.CloseLogoutModal()
                $actions.ShowLoader()
                $actions.WebsocketLogout($parameters.ServerUrl, $parameters.CurrentAppId, "EN", token)

                try {
                    const featureValue = window.Analytics.Analytics.getFeatureValue("hydra_be");
                    if (!Array.isArray(featureValue) || !featureValue[1]?.enabled_for) {
                        throw new Error('Invalid feature value structure');
                    }

                    const enabledFor = featureValue[1].enabled_for;

                    const is_hydra_on = enabledFor.includes(currentAppId)

                    if (is_hydra_on) {
                        console.log('Using OAuth2')
                        let iframe = document.getElementById('logout-iframe');
                        if (!iframe) {
                            iframe = document.createElement('iframe');
                            iframe.id = 'logout-iframe';
                            iframe.style.display = 'none';
                            document.body.appendChild(iframe);
                            setTimeout(() => {
                                $resolve();

                                removeLocalStorage()
                                $actions.RedirectToOauth();
                            }, 10000)
                        }

                        iframe.src = `https://${oauthServer}/oauth2/sessions/logout`;

                        function onMessage(event) {
                            if (event.data === "logout_complete") {
                                console.log('Logout process completed.');
                                console.log('Redirecting to oauth...')
                                window.removeEventListener("message", onMessage);
                                $resolve();

                                removeLocalStorage()
                                $actions.RedirectToOauth();
                            }
                        }

                        window.addEventListener("message", onMessage);

                        iframe.onerror = (error) => {
                            console.error('There has been a problem with the iframe operation:', error);
                            window.removeEventListener("message", onMessage);
                            $reject(error);
                        };
                    } else {
                        $resolve();

                        removeLocalStorage()
                        $actions.RedirectToOauth();
                    }
                } catch (error) {
                    $resolve();

                    removeLocalStorage()
                    $actions.RedirectToOauth();
                }
            }

            performLogout();

        });
    };
});


define("PartnersHub.Layouts.LayoutDashboard.mvc$translationsResources.de-DE", [], function() {
    return {
        "PU7gknieWkOx_ByEMNdLqQ#Style.-1047860588.1": "Dashboard",
        "38XhKKe5LEW+A2zRRni8zQ#Value.-1221270899.1": "header",
        "ZGGeSbg7WUagZno4rBIW5w#Value.-1396342996.1": "banner",
        "WuL5RxW2z0GzmUysFxZAVg#Value": "Abmelden",
        "y3I3z2tJB06xi0f6VYHYww#Value": "Live-Chat",
        "rTuVkrGaBEOPnPSbtA3yVQ#ValueExpression.1976371733.1": "header-top",
        "L0LZ2weFB0i4vQ6cHwhS1Q#Value.-1221270899.1": "header",
        "jJ43ECPLvEeKFN3LPXcGug#Value": "Abmelden",
        "zOG2b5Vg8UWXy3rR7PzcOw#Value": "Live-Chat",
        "u6D_wbxGcUC2hnueavwrUA#Value": "Bist du dir sicher, dass du dich abmelden möchtest?"
    };
});

define("PartnersHub.Layouts.LayoutDashboard.mvc$translationsResources.es-ES", [], function() {
    return {
        "PU7gknieWkOx_ByEMNdLqQ#Style.-1047860588.1": "Panel",
        "38XhKKe5LEW+A2zRRni8zQ#Value.-1221270899.1": "header",
        "ZGGeSbg7WUagZno4rBIW5w#Value.-1396342996.1": "banner",
        "WuL5RxW2z0GzmUysFxZAVg#Value": "Cerrar sesión",
        "y3I3z2tJB06xi0f6VYHYww#Value": "Chat en vivo",
        "rTuVkrGaBEOPnPSbtA3yVQ#ValueExpression.1976371733.1": "header-top",
        "L0LZ2weFB0i4vQ6cHwhS1Q#Value.-1221270899.1": "header",
        "jJ43ECPLvEeKFN3LPXcGug#Value": "Cerrar sesión",
        "zOG2b5Vg8UWXy3rR7PzcOw#Value": "Chat en vivo",
        "u6D_wbxGcUC2hnueavwrUA#Value": "¿Estás seguro de que quieres cerrar sesión?"
    };
});

define("PartnersHub.Layouts.LayoutDashboard.mvc$translationsResources.fr-FR", [], function() {
    return {
        "PU7gknieWkOx_ByEMNdLqQ#Style.-1047860588.1": "Tableau de bord",
        "38XhKKe5LEW+A2zRRni8zQ#Value.-1221270899.1": "header",
        "ZGGeSbg7WUagZno4rBIW5w#Value.-1396342996.1": "banner",
        "WuL5RxW2z0GzmUysFxZAVg#Value": "Se déconnecter",
        "y3I3z2tJB06xi0f6VYHYww#Value": "Chat en direct",
        "rTuVkrGaBEOPnPSbtA3yVQ#ValueExpression.1976371733.1": "header-top",
        "L0LZ2weFB0i4vQ6cHwhS1Q#Value.-1221270899.1": "header",
        "jJ43ECPLvEeKFN3LPXcGug#Value": "Se déconnecter",
        "zOG2b5Vg8UWXy3rR7PzcOw#Value": "Chat en direct",
        "u6D_wbxGcUC2hnueavwrUA#Value": "Êtes-vous sûr de vouloir vous déconnecter ?"
    };
});

define("PartnersHub.Layouts.LayoutDashboard.mvc$translationsResources.it-IT", [], function() {
    return {
        "PU7gknieWkOx_ByEMNdLqQ#Style.-1047860588.1": "Cruscotto",
        "38XhKKe5LEW+A2zRRni8zQ#Value.-1221270899.1": "header",
        "ZGGeSbg7WUagZno4rBIW5w#Value.-1396342996.1": "banner",
        "WuL5RxW2z0GzmUysFxZAVg#Value": "Disconnettersi",
        "y3I3z2tJB06xi0f6VYHYww#Value": "Chat dal vivo",
        "rTuVkrGaBEOPnPSbtA3yVQ#ValueExpression.1976371733.1": "header-top",
        "L0LZ2weFB0i4vQ6cHwhS1Q#Value.-1221270899.1": "header",
        "jJ43ECPLvEeKFN3LPXcGug#Value": "Disconnettersi",
        "zOG2b5Vg8UWXy3rR7PzcOw#Value": "Chat dal vivo",
        "u6D_wbxGcUC2hnueavwrUA#Value": "Sei sicuro di voler effettuare il logout?"
    };
});

define("PartnersHub.Layouts.LayoutDashboard.mvc$translationsResources.pl-PL", [], function() {
    return {
        "PU7gknieWkOx_ByEMNdLqQ#Style.-1047860588.1": "Panel",
        "38XhKKe5LEW+A2zRRni8zQ#Value.-1221270899.1": "header",
        "ZGGeSbg7WUagZno4rBIW5w#Value.-1396342996.1": "banner",
        "WuL5RxW2z0GzmUysFxZAVg#Value": "Wyloguj się",
        "y3I3z2tJB06xi0f6VYHYww#Value": "Czat na żywo",
        "rTuVkrGaBEOPnPSbtA3yVQ#ValueExpression.1976371733.1": "header-top",
        "L0LZ2weFB0i4vQ6cHwhS1Q#Value.-1221270899.1": "header",
        "jJ43ECPLvEeKFN3LPXcGug#Value": "Wyloguj się",
        "zOG2b5Vg8UWXy3rR7PzcOw#Value": "Czat na żywo",
        "u6D_wbxGcUC2hnueavwrUA#Value": "Czy jesteś pewien, że chcesz się wylogować?"
    };
});

define("PartnersHub.Layouts.LayoutDashboard.mvc$translationsResources.pt-PT", [], function() {
    return {
        "PU7gknieWkOx_ByEMNdLqQ#Style.-1047860588.1": "Painel",
        "38XhKKe5LEW+A2zRRni8zQ#Value.-1221270899.1": "header",
        "ZGGeSbg7WUagZno4rBIW5w#Value.-1396342996.1": "banner",
        "WuL5RxW2z0GzmUysFxZAVg#Value": "Sair",
        "y3I3z2tJB06xi0f6VYHYww#Value": "Chat ao vivo",
        "rTuVkrGaBEOPnPSbtA3yVQ#ValueExpression.1976371733.1": "header-top",
        "L0LZ2weFB0i4vQ6cHwhS1Q#Value.-1221270899.1": "header",
        "jJ43ECPLvEeKFN3LPXcGug#Value": "Sair",
        "zOG2b5Vg8UWXy3rR7PzcOw#Value": "Chat ao vivo",
        "u6D_wbxGcUC2hnueavwrUA#Value": "Tem certeza de que deseja sair?"
    };
});

define("PartnersHub.Layouts.LayoutDashboard.mvc$translationsResources.ru-RU", [], function() {
    return {
        "PU7gknieWkOx_ByEMNdLqQ#Style.-1047860588.1": "Панель управления",
        "38XhKKe5LEW+A2zRRni8zQ#Value.-1221270899.1": "header",
        "ZGGeSbg7WUagZno4rBIW5w#Value.-1396342996.1": "banner",
        "WuL5RxW2z0GzmUysFxZAVg#Value": "Выйти",
        "y3I3z2tJB06xi0f6VYHYww#Value": "Оnлайн-чат",
        "rTuVkrGaBEOPnPSbtA3yVQ#ValueExpression.1976371733.1": "header-top",
        "L0LZ2weFB0i4vQ6cHwhS1Q#Value.-1221270899.1": "header",
        "jJ43ECPLvEeKFN3LPXcGug#Value": "Выйти",
        "zOG2b5Vg8UWXy3rR7PzcOw#Value": "Живой чат",
        "u6D_wbxGcUC2hnueavwrUA#Value": "Вы уверены, что хотите выйти?"
    };
});

define("PartnersHub.Layouts.LayoutDashboard.mvc$translationsResources", ["exports", "PartnersHub.Layouts.LayoutDashboard.mvc$translationsResources.de-DE", "PartnersHub.Layouts.LayoutDashboard.mvc$translationsResources.es-ES", "PartnersHub.Layouts.LayoutDashboard.mvc$translationsResources.fr-FR", "PartnersHub.Layouts.LayoutDashboard.mvc$translationsResources.it-IT", "PartnersHub.Layouts.LayoutDashboard.mvc$translationsResources.pl-PL", "PartnersHub.Layouts.LayoutDashboard.mvc$translationsResources.pt-PT", "PartnersHub.Layouts.LayoutDashboard.mvc$translationsResources.ru-RU"], function(exports, PartnersHub_Layouts_LayoutDashboard_mvc_translationsResources_deDE, PartnersHub_Layouts_LayoutDashboard_mvc_translationsResources_esES, PartnersHub_Layouts_LayoutDashboard_mvc_translationsResources_frFR, PartnersHub_Layouts_LayoutDashboard_mvc_translationsResources_itIT, PartnersHub_Layouts_LayoutDashboard_mvc_translationsResources_plPL, PartnersHub_Layouts_LayoutDashboard_mvc_translationsResources_ptPT, PartnersHub_Layouts_LayoutDashboard_mvc_translationsResources_ruRU) {
    return {
        "de-DE": {
            "translations": PartnersHub_Layouts_LayoutDashboard_mvc_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_Layouts_LayoutDashboard_mvc_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_Layouts_LayoutDashboard_mvc_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_Layouts_LayoutDashboard_mvc_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_Layouts_LayoutDashboard_mvc_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_Layouts_LayoutDashboard_mvc_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_Layouts_LayoutDashboard_mvc_translationsResources_ruRU,
            "isRTL": false
        }
    };
});