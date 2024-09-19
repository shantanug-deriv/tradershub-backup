define("tradershub.Layouts.MainLayout.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "tradershub.Common.LoaderBlock.mvc$model", "OutSystemsUI.Navigation.BottomBarItem.mvc$model", "tradershub.model$ST_2b68b61da9b8f6db8463a60cc48350faStructure", "tradershub.controller$SendAuthorize", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$AddFavicon", "tradershub.controller$InitizalizeDerivApi"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIModel, OutSystemsUIController, tradershub_Common_LoaderBlock_mvcModel, OutSystemsUI_Navigation_BottomBarItem_mvcModel) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ActiveTab", "activeTabIn", "ActiveTab", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, false),
                    this.attr("_activeTabInDataFetchStatus", "_activeTabInDataFetchStatus", "_activeTabInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return /*Fetched*/ 1;
                    }, false),
                    this.attr("IsLoading", "isLoadingIn", "IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", "_isLoadingInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
                Model._hasValidationWidgetsValue = (tradershub_Common_LoaderBlock_mvcModel.hasValidationWidgets || OutSystemsUI_Navigation_BottomBarItem_mvcModel.hasValidationWidgets);
            }

            return Model._hasValidationWidgetsValue;
        }
        setInputs(inputs) {
            if ("ActiveTab" in inputs) {
                this.variables.activeTabIn = inputs.ActiveTab;
                if ("_activeTabInDataFetchStatus" in inputs) {
                    this.variables._activeTabInDataFetchStatus = inputs._activeTabInDataFetchStatus;
                }

            }

            if ("IsLoading" in inputs) {
                this.variables.isLoadingIn = inputs.IsLoading;
                if ("_isLoadingInDataFetchStatus" in inputs) {
                    this.variables._isLoadingInDataFetchStatus = inputs._isLoadingInDataFetchStatus;
                }

            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("tradershub.Layouts.MainLayout.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "@outsystems/runtime-view-js", "tradershub.Layouts.MainLayout.mvc$model", "tradershub.Layouts.MainLayout.mvc$controller", "tradershub.clientVariables", "@outsystems/runtime-widgets-js", "tradershub.Common.LoaderBlock.mvc$view", "OutSystemsUI.Navigation.BottomBarItem.mvc$view", "tradershub.model$ST_2b68b61da9b8f6db8463a60cc48350faStructure", "tradershub.controller$SendAuthorize", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$AddFavicon", "tradershub.controller$InitizalizeDerivApi"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIModel, OutSystemsUIController, React, OSView, tradershub_Layouts_MainLayout_mvc_model, tradershub_Layouts_MainLayout_mvc_controller, tradershubClientVariables, OSWidgets, tradershub_Common_LoaderBlock_mvc_view, OutSystemsUI_Navigation_BottomBarItem_mvc_view) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "Layouts.MainLayout";
        }

        static getAttributes() {
            return {
                codeFunction: "MainLayout",
                functionKey: "5bbb9b41-8e23-403f-8d60-0043ba3e67ab",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.Layouts.MainLayout.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [tradershub_Common_LoaderBlock_mvc_view, OutSystemsUI_Navigation_BottomBarItem_mvc_view];
        }

        get modelFactory() {
            return tradershub_Layouts_MainLayout_mvc_model;
        }

        get controllerFactory() {
            return tradershub_Layouts_MainLayout_mvc_controller;
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
                style: "header-wrapper",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "Header"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "display-flex align-items-center",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "LeftContainer"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Link, {
                enabled: true,
                extendedProperties: {
                    target: "_blank"
                },
                style: "display-flex align-items-center",
                transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                url: OS.Navigation.generateScreenURL("https://deriv.com/", {}),
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Image, {
                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.derivIcon.svg"),
                style: "logo",
                type: /*Static*/ 0,
                _idProps: {
                    service: idService,
                    uuid: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "tabs-wrapper",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "Tabs"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "height: 56px;"
                },
                style: "tab",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "Hub"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Link, {
                enabled: true,
                style: "tab-link",
                transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                url: OS.Navigation.generateScreenURL("tradershub", "Hub", {}),
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "6"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                style: "tab-text",
                text: ["Hub"],
                _idProps: {
                    service: idService,
                    uuid: "7"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "height: 56px; margin-right: 24px;"
                },
                gridProperties: {
                    marginLeft: "24px"
                },
                style: "tab",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "CFDs"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Link, {
                enabled: true,
                style: "tab-link",
                transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                url: OS.Navigation.generateScreenURL("tradershub", "CFDs", {}),
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "9"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                style: "tab-text",
                text: ["CFDs"],
                _idProps: {
                    service: idService,
                    uuid: "10"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "height: 56px;"
                },
                style: "tab",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "Options"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Link, {
                enabled: true,
                style: "tab-link",
                transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                url: OS.Navigation.generateScreenURL("tradershub", "options", {}),
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "12"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Text, {
                style: "tab-text",
                text: ["Options"],
                _idProps: {
                    service: idService,
                    uuid: "13"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))), $if(((tradershubClientVariables.getAuthToken()) !== (OS.BuiltinFunctions.nullTextIdentifier())), false, this, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    extendedProperties: {
                        style: "height: 56px;"
                    },
                    gridProperties: {
                        marginLeft: "24px"
                    },
                    style: "tab",
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "Wallets"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Link, {
                    enabled: true,
                    style: "tab-link",
                    transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                    url: OS.Navigation.generateScreenURL("tradershub", "Wallets", {}),
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "15"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Text, {
                    style: "tab-text",
                    text: ["Wallets"],
                    _idProps: {
                        service: idService,
                        uuid: "16"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })))];
            }, function() {
                return [];
            }))), $if(((tradershubClientVariables.getAuthToken()) !== (OS.BuiltinFunctions.nullTextIdentifier())), false, this, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    style: "display-flex align-items-center justify-content-flex-end",
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "17"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Image, {
                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.bellMd.svg"),
                    type: /*Static*/ 0,
                    _idProps: {
                        service: idService,
                        uuid: "18"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }), React.createElement(OSWidgets.Link, {
                    enabled: true,
                    gridProperties: {
                        marginLeft: "24px"
                    },
                    style: "account-link",
                    transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                    url: OS.Navigation.generateScreenURL("tradershub", "Account", {}),
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "19"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Image, {
                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.circleUserMd.svg"),
                    type: /*Static*/ 0,
                    _idProps: {
                        service: idService,
                        uuid: "20"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                })))];
            }, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    style: "display-flex align-items-center",
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "RightContainer"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Button, {
                    enabled: true,
                    isDefault: false,
                    onClick: function() {
                        try {
                            OS.Navigation.navigateTo(OS.Navigation.generateScreenURL((((OS.BuiltinFunctions.index(tradershubClientVariables.getURL(), "green", 0, false, false) > -1)) ? (("https://oauth.deriv.com/oauth2/authorize?app_id=" + tradershubClientVariables.getAppId())) : (((("https://" + tradershubClientVariables.getURL()) + "/oauth2/authorize?app_id=") + tradershubClientVariables.getAppId()))), {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), null, true);
                        } catch (ex) {
                            if (((ex.name) !== ("RedirectOccurredException"))) {
                                throw ex;
                            }

                        };
                    },
                    style: "btn",
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "Login"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, "Log in"), React.createElement(OSWidgets.Button, {
                    enabled: true,
                    gridProperties: {
                        marginLeft: "8px"
                    },
                    isDefault: false,
                    onClick: function() {
                        try {
                            OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "signup", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), null, true);
                        } catch (ex) {
                            if (((ex.name) !== ("RedirectOccurredException"))) {
                                throw ex;
                            }

                        };
                    },
                    style: "btn btn-primary",
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "Signup"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, "Sign up"))];
            })), $if(model.variables.isLoadingIn, false, this, function() {
                return [React.createElement(tradershub_Common_LoaderBlock_mvc_view, {
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
                        uuid: "24",
                        alias: "1"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    _dependencies: []
                })];
            }, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    style: "content-wrapper",
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "contentContainer"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Placeholder, {
                    align: /*Default*/ 0,
                    content: _this.props.placeholders.content,
                    extendedProperties: {
                        style: "margin: 0;"
                    },
                    gridProperties: {
                        classes: "ThemeGrid_Width10"
                    },
                    style: "content",
                    _idProps: {
                        service: idService,
                        name: "Content"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }))];
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedProperties: {
                    style: "background-color: #FFF;"
                },
                style: "bottom-navigation",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "BottomNavigation"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "bottom-navigation-item",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "HubContainer"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Link, {
                enabled: true,
                gridProperties: {
                    classes: "OSFillParent"
                },
                transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                url: OS.Navigation.generateScreenURL("tradershub", "Hub", {}),
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "29"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OutSystemsUI_Navigation_BottomBarItem_mvc_view, {
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
                    uuid: "30",
                    alias: "2"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    icon: new PlaceholderContent(function() {
                        return [$if((model.variables.activeTabIn === 0), false, this, function() {
                            return [React.createElement(OSWidgets.Image, {
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.HubActiveSm.svg"),
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "31"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })];
                        }, function() {
                            return [React.createElement(OSWidgets.Image, {
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.HubSm.svg"),
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "32"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })];
                        })];
                    }),
                    text: new PlaceholderContent(function() {
                        return ["Hub"];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables._activeTabInDataFetchStatus), asPrimitiveValue(model.variables.activeTabIn)]
            }))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "bottom-navigation-item",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "CFDsContainer"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Link, {
                enabled: true,
                gridProperties: {
                    classes: "OSFillParent"
                },
                transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                url: OS.Navigation.generateScreenURL("tradershub", "CFDs", {}),
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "34"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OutSystemsUI_Navigation_BottomBarItem_mvc_view, {
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
                    uuid: "35",
                    alias: "3"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    icon: new PlaceholderContent(function() {
                        return [$if((model.variables.activeTabIn === 1), false, this, function() {
                            return [React.createElement(OSWidgets.Image, {
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.CfdActiveSm.svg"),
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "36"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })];
                        }, function() {
                            return [React.createElement(OSWidgets.Image, {
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.CfdSm.svg"),
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "37"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })];
                        })];
                    }),
                    text: new PlaceholderContent(function() {
                        return ["CFDs"];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables._activeTabInDataFetchStatus), asPrimitiveValue(model.variables.activeTabIn)]
            }))), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                style: "bottom-navigation-item",
                visible: true,
                _idProps: {
                    service: idService,
                    name: "OptionsContainer"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Link, {
                enabled: true,
                gridProperties: {
                    classes: "OSFillParent"
                },
                transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                url: OS.Navigation.generateScreenURL("tradershub", "options", {}),
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "39"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OutSystemsUI_Navigation_BottomBarItem_mvc_view, {
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
                    uuid: "40",
                    alias: "4"
                },
                _widgetRecordProvider: widgetsRecordProvider,
                placeholders: {
                    icon: new PlaceholderContent(function() {
                        return [$if((model.variables.activeTabIn === 2), false, this, function() {
                            return [React.createElement(OSWidgets.Image, {
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.OptionsActiveSm.svg"),
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "41"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })];
                        }, function() {
                            return [React.createElement(OSWidgets.Image, {
                                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.OptionsSm.svg"),
                                type: /*Static*/ 0,
                                _idProps: {
                                    service: idService,
                                    uuid: "42"
                                },
                                _widgetRecordProvider: widgetsRecordProvider
                            })];
                        })];
                    }),
                    text: new PlaceholderContent(function() {
                        return ["Options"];
                    })
                },
                _dependencies: [asPrimitiveValue(model.variables._activeTabInDataFetchStatus), asPrimitiveValue(model.variables.activeTabIn)]
            }))), $if(((tradershubClientVariables.getAuthToken()) !== (OS.BuiltinFunctions.nullTextIdentifier())), false, this, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    style: "bottom-navigation-item",
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "WalletsContainer"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Link, {
                    enabled: true,
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                    url: OS.Navigation.generateScreenURL("tradershub", "Wallets", {}),
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "44"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OutSystemsUI_Navigation_BottomBarItem_mvc_view, {
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
                        uuid: "45",
                        alias: "5"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    placeholders: {
                        icon: new PlaceholderContent(function() {
                            return [$if((model.variables.activeTabIn === 3), false, this, function() {
                                return [React.createElement(OSWidgets.Image, {
                                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.WalletsActiveSm.svg"),
                                    type: /*Static*/ 0,
                                    _idProps: {
                                        service: idService,
                                        uuid: "46"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                })];
                            }, function() {
                                return [React.createElement(OSWidgets.Image, {
                                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.WalletsSm.svg"),
                                    type: /*Static*/ 0,
                                    _idProps: {
                                        service: idService,
                                        uuid: "47"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                })];
                            })];
                        }),
                        text: new PlaceholderContent(function() {
                            return ["Wallets"];
                        })
                    },
                    _dependencies: [asPrimitiveValue(model.variables._activeTabInDataFetchStatus), asPrimitiveValue(model.variables.activeTabIn)]
                }))), React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    style: "bottom-navigation-item",
                    visible: true,
                    _idProps: {
                        service: idService,
                        name: "AccountContainer"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Link, {
                    enabled: true,
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
                    url: OS.Navigation.generateScreenURL("tradershub", "Account", {}),
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "49"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OutSystemsUI_Navigation_BottomBarItem_mvc_view, {
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
                        uuid: "50",
                        alias: "6"
                    },
                    _widgetRecordProvider: widgetsRecordProvider,
                    placeholders: {
                        icon: new PlaceholderContent(function() {
                            return [$if((model.variables.activeTabIn === 4), false, this, function() {
                                return [React.createElement(OSWidgets.Image, {
                                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.AccountActiveSm.svg"),
                                    type: /*Static*/ 0,
                                    _idProps: {
                                        service: idService,
                                        uuid: "51"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                })];
                            }, function() {
                                return [React.createElement(OSWidgets.Image, {
                                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.AccountSm.svg"),
                                    type: /*Static*/ 0,
                                    _idProps: {
                                        service: idService,
                                        uuid: "52"
                                    },
                                    _widgetRecordProvider: widgetsRecordProvider
                                })];
                            })];
                        }),
                        text: new PlaceholderContent(function() {
                            return ["Account"];
                        })
                    },
                    _dependencies: [asPrimitiveValue(model.variables._activeTabInDataFetchStatus), asPrimitiveValue(model.variables.activeTabIn)]
                })))];
            }, function() {
                return [];
            })));
        }
    }

    return View;
});
define("tradershub.Layouts.MainLayout.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "OutSystemsUI.model", "OutSystemsUI.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.Layouts.MainLayout.mvc$controller.OnReady.AddActiveTabJS", "tradershub.model$ST_2b68b61da9b8f6db8463a60cc48350faStructure", "tradershub.controller$SendAuthorize", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", "tradershub.referencesHealth", "tradershub.referencesHealth$OutSystemsUI", "OutSystemsUI.controller$AddFavicon", "tradershub.controller$InitizalizeDerivApi"], function(OSRuntimeCore, tradershubModel, tradershubController, OutSystemsUIModel, OutSystemsUIController, tradershubLanguageResources, tradershubClientVariables, tradershub_Layouts_MainLayout_mvc_controller_OnReady_AddActiveTabJS) {
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
                                span.setAttribute("outsystems.function.key", "325a6041-9f39-4310-97ac-7308d7823b03");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            return OS.Flow.tryFinally(function() {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                var sendAuthorizeVar = new OS.DataTypes.VariableHolder();
                                return OS.Flow.executeAsyncFlow(function() {
                                    // Execute Action: SendAuthorize
                                    model.flush();
                                    return tradershubController.default.sendAuthorize$Action(true, callContext).then(function(value) {
                                        sendAuthorizeVar.value = value;
                                    }).then(function() {
                                        OS.Logger.startActiveSpan("AddActiveTab", function(span) {
                                            if (span) {
                                                span.setAttribute("code.function", "AddActiveTab");
                                                span.setAttribute("outsystems.function.key", "2e50b9a3-6bd0-4482-b4a4-80eb6a95ec91");
                                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                                span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                            }

                                            try {
                                                return controller.safeExecuteJSNode(tradershub_Layouts_MainLayout_mvc_controller_OnReady_AddActiveTabJS, "AddActiveTab", "OnReady", {
                                                    Active: OS.DataConversion.JSNodeParamConverter.to(model.variables.activeTabIn, OS.DataTypes.DataTypes.Integer)
                                                }, function($parameters) {}, {}, {});
                                            } finally {
                                                if (span) {
                                                    span.end();
                                                }

                                            }

                                        }, 1);
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
                                span.setAttribute("outsystems.function.key", "56d44608-19eb-40f6-8188-f9fea9ffad9e");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnInitialize");
                                callContext = controller.callContext(callContext);
                                var addFaviconVar = new OS.DataTypes.VariableHolder();
                                // Execute Action: AddFavicon
                                addFaviconVar.value = OutSystemsUIController.default.addFavicon$Action("/tradershub/favicon.png", callContext);

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


            onReady$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnReady__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnReady");
                        span.setAttribute("outsystems.function.key", "325a6041-9f39-4310-97ac-7308d7823b03");
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
                        span.setAttribute("outsystems.function.key", "56d44608-19eb-40f6-8188-f9fea9ffad9e");
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
                return tradershubController.default.defaultTimeout;
            }

        }

        var Controller = ControllerInner;
        // Server Actions - Variables

        // Client Actions - Variables

    }
    return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});

define("tradershub.Layouts.MainLayout.mvc$controller.OnReady.AddActiveTabJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const activeIndex = $parameters.Active;
        const tabs = document.querySelectorAll('.tab');
        const bottomTab = document.querySelectorAll('.bottom-navigation-item');

        if (tabs.length > 0 && activeIndex < tabs.length) {
            const activeTab = tabs[activeIndex];
            const tabText = activeTab.querySelector('.tab-text');

            activeTab.classList.add('tab-active');
            tabText.classList.add('tab-text-active')
        }

        if (bottomTab.length > 0 && activeIndex < bottomTab.length) {
            const activeButtomTab = bottomTab[activeIndex];
            const bottomTabText = activeButtomTab.querySelector('.bottom-bar-item-text');

            bottomTabText.classList.add('bottom-bar-item-text-active');
        }

    };
});