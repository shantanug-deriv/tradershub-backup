define("tradershub.Layouts.SignupLayoutTopMenu.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "OutSystemsUI.controller", "tradershub.controller", "OutSystemsUI.model", "OutSystemsUI.Adaptive.DisplayOnDevice.mvc$model", "OutSystemsUI.controller$LayoutDestroy", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$ST_1eac13b44db3d2db577291973f4a7e96Structure", "tradershub.controller$SendResidenceList", "tradershub.controller$GetWebsiteStatus", "tradershub.controller$RudderstackIdentifyEvent", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "OutSystemsUI.controller$AddFavicon", "OutSystemsUI.controller$SetLang", "tradershub.controller$InitGrowthbookAndRudderStack", "OutSystemsUI.controller$LayoutReady", "tradershub.controller$InitizalizeDerivApi"], function(OSRuntimeCore, tradershubModel, OutSystemsUIController, tradershubController, OutSystemsUIModel, OutSystemsUI_Adaptive_DisplayOnDevice_mvcModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
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
                    }, false),
                    this.attr("NoContentMiddle", "noContentMiddleIn", "NoContentMiddle", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("_noContentMiddleInDataFetchStatus", "_noContentMiddleInDataFetchStatus", "_noContentMiddleInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("HasLink", "hasLinkIn", "HasLink", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("_hasLinkInDataFetchStatus", "_hasLinkInDataFetchStatus", "_hasLinkInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                Model._hasValidationWidgetsValue = OutSystemsUI_Adaptive_DisplayOnDevice_mvcModel.hasValidationWidgets;
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

            if ("NoContentMiddle" in inputs) {
                this.variables.noContentMiddleIn = inputs.NoContentMiddle;
                if ("_noContentMiddleInDataFetchStatus" in inputs) {
                    this.variables._noContentMiddleInDataFetchStatus = inputs._noContentMiddleInDataFetchStatus;
                }

            }

            if ("HasLink" in inputs) {
                this.variables.hasLinkIn = inputs.HasLink;
                if ("_hasLinkInDataFetchStatus" in inputs) {
                    this.variables._hasLinkInDataFetchStatus = inputs._hasLinkInDataFetchStatus;
                }

            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("tradershub.Layouts.SignupLayoutTopMenu.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "OutSystemsUI.model", "react", "@outsystems/runtime-view-js", "tradershub.Layouts.SignupLayoutTopMenu.mvc$model", "tradershub.Layouts.SignupLayoutTopMenu.mvc$controller", "tradershub.clientVariables", "@outsystems/runtime-widgets-js", "OutSystemsUI.Adaptive.DisplayOnDevice.mvc$view", "OutSystemsUI.controller$LayoutDestroy", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$ST_1eac13b44db3d2db577291973f4a7e96Structure", "tradershub.controller$SendResidenceList", "tradershub.controller$GetWebsiteStatus", "tradershub.controller$RudderstackIdentifyEvent", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "OutSystemsUI.controller$AddFavicon", "OutSystemsUI.controller$SetLang", "tradershub.controller$InitGrowthbookAndRudderStack", "OutSystemsUI.controller$LayoutReady", "tradershub.controller$InitizalizeDerivApi"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, OutSystemsUIModel, React, OSView, tradershub_Layouts_SignupLayoutTopMenu_mvc_model, tradershub_Layouts_SignupLayoutTopMenu_mvc_controller, tradershubClientVariables, OSWidgets, OutSystemsUI_Adaptive_DisplayOnDevice_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "Layouts.SignupLayoutTopMenu";
        }

        static getAttributes() {
            return {
                codeFunction: "SignupLayoutTopMenu",
                functionKey: "01086c7f-d882-4603-8f4c-fb6f48272f94",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.Layouts.SignupLayoutTopMenu.css"];
        }

        static getJsDependencies() {
            return ["scripts/tradershub.DerivUTM.js", "scripts/tradershub.JSCookie.js"];
        }

        static getBlocks() {
            return [OutSystemsUI_Adaptive_DisplayOnDevice_mvc_view];
        }

        get modelFactory() {
            return tradershub_Layouts_SignupLayoutTopMenu_mvc_model;
        }

        get controllerFactory() {
            return tradershub_Layouts_SignupLayoutTopMenu_mvc_controller;
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
                style: model.getCachedValue(idService.getId("LayoutWrapper.Style"), function() {
                    return ((("layout layout-top" + ((model.variables.hasFixedHeaderIn) ? (" fixed-header") : (""))) + ((!(model.variables.enableAccessibilityFeaturesIn)) ? ("") : (" has-accessible-features"))) + (((model.variables.extendedClassIn === "")) ? ("") : ((" " + model.variables.extendedClassIn))));
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
                extendedProperties: {
                    style: "background-color: #fff;"
                },
                style: "main",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.AdvancedHtml, {
                extendedProperties: {
                    role: "banner"
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
                    style: "margin-bottom: 16px; margin-top: 16px;"
                },
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "3"
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
                    uuid: "4",
                    alias: "1"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    onDesktop: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "text-align: center;"
                            },
                            style: "desktop-signup-layout-container",
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "5"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            extendedEvents: {
                                onClick: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.onLogoClick$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.deriv25years.svg"),
                            style: model.getCachedValue(idService.getId("n81waxLPr0uB25twmSJo5w.Style"), function() {
                                return ((model.variables.hasLinkIn) ? ("cursor-pointer") : (""));
                            }, function() {
                                return model.variables.hasLinkIn;
                            }),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "6"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hasLinkInDataFetchStatus)
                        }))];
                    }),
                    onTablet: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "text-align: center;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "7"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            extendedEvents: {
                                onClick: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.onLogoClick$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.deriv25yearsresponsive.svg"),
                            style: model.getCachedValue(idService.getId("UNBD65eZPUar2QzZj7SNmQ.Style"), function() {
                                return ((model.variables.hasLinkIn) ? ("cursor-pointer") : (""));
                            }, function() {
                                return model.variables.hasLinkIn;
                            }),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "8"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hasLinkInDataFetchStatus)
                        }))];
                    }),
                    onPhone: new PlaceholderContent(function() {
                        return [React.createElement(OSWidgets.Container, {
                            align: /*Default*/ 0,
                            animate: false,
                            extendedProperties: {
                                style: "text-align: center;"
                            },
                            visible: true,
                            _idProps: {
                                service: idService,
                                uuid: "9"
                            },
                            _widgetRecordProvider: widgetsRecordProvider
                        }, React.createElement(OSWidgets.Image, {
                            extendedEvents: {
                                onClick: function() {
                                    var eventHandlerContext = callContext.clone();
                                    controller.onLogoClick$Action(controller.callContext(eventHandlerContext));

                                    ;
                                }
                            },
                            image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.deriv25yearsresponsive.svg"),
                            style: model.getCachedValue(idService.getId("CHJ8CvjrvEenNG7AaWbimA.Style"), function() {
                                return ((model.variables.hasLinkIn) ? ("cursor-pointer") : (""));
                            }, function() {
                                return model.variables.hasLinkIn;
                            }),
                            type: /*Static*/ 0,
                            _idProps: {
                                service: idService,
                                uuid: "10"
                            },
                            _widgetRecordProvider: widgetsRecordProvider,
                            style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hasLinkInDataFetchStatus)
                        }))];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables._hasLinkInDataFetchStatus), asPrimitiveValue(model.variables.hasLinkIn)]
            }))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: (("content layout-main-content" + " ") + model.variables.extendedClassIn),
                visible: true,
                _idProps: {
                    service: idService,
                    name: "Content"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._extendedClassInDataFetchStatus)
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    role: "main",
                    style: "padding: 0px;"
                },
                style: "main-content ThemeGrid_Container",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "MainContentWrapper"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Placeholder, {
                align: /*Default*/ 0,
                content: _this.props.placeholders.mainContent,
                extendedProperties: {
                    style: "height: 100%;"
                },
                style: model.getCachedValue(idService.getId("MainContent.Style"), function() {
                    return (((model.variables.noContentMiddleIn) ? ("") : ("conent-middle")) + " signup-layout-content-container");
                }, function() {
                    return model.variables.noContentMiddleIn;
                }),
                _idProps: {
                    service: idService,
                    name: "MainContent"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._noContentMiddleInDataFetchStatus)
            }), " ")))));
        }
    }

    return View;
});
define("tradershub.Layouts.SignupLayoutTopMenu.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.controller", "OutSystemsUI.model", "tradershub.languageResources", "tradershub.clientVariables", "OutSystemsUI.controller$LayoutDestroy", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "tradershub.model$ST_1eac13b44db3d2db577291973f4a7e96Structure", "tradershub.controller$SendResidenceList", "tradershub.controller$GetWebsiteStatus", "tradershub.controller$RudderstackIdentifyEvent", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "OutSystemsUI.controller$AddFavicon", "OutSystemsUI.controller$SetLang", "tradershub.controller$InitGrowthbookAndRudderStack", "OutSystemsUI.controller$LayoutReady", "tradershub.controller$InitizalizeDerivApi"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIController, OutSystemsUIModel, tradershubLanguageResources, tradershubClientVariables) {
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
            get _onLogoClick$Action() {
                if (!(this.hasOwnProperty("__onLogoClick$Action"))) {
                    this.__onLogoClick$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnLogoClick", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnLogoClick");
                                span.setAttribute("outsystems.function.key", "49b8119d-aaa7-4369-811b-950faa5f175f");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnLogoClick");
                                callContext = controller.callContext(callContext);
                                if ((model.variables.hasLinkIn)) {
                                    // Destination: /tradershub/
                                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("https://deriv.com", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                                }

                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onLogoClick$Action;
            }
            set _onLogoClick$Action(value) {
                this.__onLogoClick$Action = value;
            }

            get _onDestroy$Action() {
                if (!(this.hasOwnProperty("__onDestroy$Action"))) {
                    this.__onDestroy$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnDestroy", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnDestroy");
                                span.setAttribute("outsystems.function.key", "8416e772-06fc-4f38-af2b-0c0e899244e0");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnDestroy");
                                callContext = controller.callContext(callContext);
                                // Execute Action: LayoutDestroy
                                OutSystemsUIController.default.layoutDestroy$Action(callContext);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__onDestroy$Action;
            }
            set _onDestroy$Action(value) {
                this.__onDestroy$Action = value;
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
                                span.setAttribute("outsystems.function.key", "87df9063-f523-4c5c-b7d7-bc6a799675ad");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnRender");
                                callContext = controller.callContext(callContext);
                                var sendResidenceListVar = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    return OS.Flow.executeSequence(function() {
                                        if (((OS.BuiltinFunctions.length(tradershubClientVariables.getRawResidenceListResponse()) === 0))) {
                                            // Execute Action: SendResidenceList
                                            model.flush();
                                            return tradershubController.default.sendResidenceList$Action(false, callContext).then(function(value) {
                                                sendResidenceListVar.value = value;
                                            });
                                        } else {
                                            return OS.Flow.executeSequence(function() {
                                                if (((OS.BuiltinFunctions.length(tradershubClientVariables.getRawWebsiteStatusResponse()) === 0))) {
                                                    // Execute Action: GetWebsiteStatus
                                                    model.flush();
                                                    return tradershubController.default.getWebsiteStatus$Action(callContext);
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

                return this.__onRender$Action;
            }
            set _onRender$Action(value) {
                this.__onRender$Action = value;
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
                                span.setAttribute("outsystems.function.key", "99ea1b15-137e-4f95-bcf5-42225ff61974");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                var addFaviconVar = new OS.DataTypes.VariableHolder();
                                var setLangVar = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Execute Action: LayoutReady
                                    model.flush();
                                    return OutSystemsUIController.default.layoutReady$Action(callContext).then(function() {
                                        // Execute Action: SetLang
                                        setLangVar.value = OutSystemsUIController.default.setLang$Action("", callContext);

                                        // Execute Action: AddFavicon
                                        addFaviconVar.value = OutSystemsUIController.default.addFavicon$Action("/tradershub/favicon.png", callContext);

                                        // Execute Action: InitGrowthbookAndRudderStack
                                        model.flush();
                                        return tradershubController.default.initGrowthbookAndRudderStack$Action(callContext);
                                    }).then(function() {
                                        // Execute Action: RudderstackIdentifyEvent
                                        tradershubController.default.rudderstackIdentifyEvent$Action(callContext);
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

            get _onInitialize$Action() {
                if (!(this.hasOwnProperty("__onInitialize$Action"))) {
                    this.__onInitialize$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("OnInitialize", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "OnInitialize");
                                span.setAttribute("outsystems.function.key", "f8321bbe-aaad-457c-bc67-a34b22bac864");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnInitialize");
                                callContext = controller.callContext(callContext);
                                // Execute Action: InitizalizeDerivApi
                                tradershubController.default.initizalizeDerivApi$Action(callContext);
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


            onLogoClick$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnLogoClick__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnLogoClick");
                        span.setAttribute("outsystems.function.key", "49b8119d-aaa7-4369-811b-950faa5f175f");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onLogoClick$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            onDestroy$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnDestroy__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnDestroy");
                        span.setAttribute("outsystems.function.key", "8416e772-06fc-4f38-af2b-0c0e899244e0");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);
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
                        span.setAttribute("outsystems.function.key", "87df9063-f523-4c5c-b7d7-bc6a799675ad");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    return OS.Flow.tryFinally(function() {
                        return controller.safeExecuteClientAction(controller._onRender$Action, callContext);
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
                        span.setAttribute("outsystems.function.key", "99ea1b15-137e-4f95-bcf5-42225ff61974");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
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

            onInitialize$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnInitialize__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnInitialize");
                        span.setAttribute("outsystems.function.key", "f8321bbe-aaad-457c-bc67-a34b22bac864");
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
                    this._onDestroyEventHandler = function(callContext) {
                        var controller = this.controller;
                        var model = this.model;
                        var idService = this.idService;

                        return controller.onDestroy$Action(callContext);

                    };
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
                return tradershubController.default.defaultTimeout;
            }

        }

        var Controller = ControllerInner;
        // Server Actions - Variables

        // Client Actions - Variables

    }
    return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});