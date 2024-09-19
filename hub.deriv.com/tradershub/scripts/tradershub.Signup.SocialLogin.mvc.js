define("tradershub.Signup.SocialLogin.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$GetSocialLoginRedirectURL"], function(OSRuntimeCore, tradershubModel, tradershubController) {
    var OS = OSRuntimeCore;


    {
        class VariablesRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("showPasskey", "showPasskeyIn", "showPasskey", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, false),
                    this.attr("_showPasskeyInDataFetchStatus", "_showPasskeyInDataFetchStatus", "_showPasskeyInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function() {
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
            if ("showPasskey" in inputs) {
                this.variables.showPasskeyIn = inputs.showPasskey;
                if ("_showPasskeyInDataFetchStatus" in inputs) {
                    this.variables._showPasskeyInDataFetchStatus = inputs._showPasskeyInDataFetchStatus;
                }

            }

        }

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("tradershub.Signup.SocialLogin.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "react", "@outsystems/runtime-view-js", "tradershub.Signup.SocialLogin.mvc$model", "tradershub.Signup.SocialLogin.mvc$controller", "tradershub.clientVariables", "@outsystems/runtime-widgets-js", "tradershub.controller$GetSocialLoginRedirectURL"], function(OSRuntimeCore, tradershubModel, tradershubController, React, OSView, tradershub_Signup_SocialLogin_mvc_model, tradershub_Signup_SocialLogin_mvc_controller, tradershubClientVariables, OSWidgets) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() {
            return "Signup.SocialLogin";
        }

        static getAttributes() {
            return {
                codeFunction: "SocialLogin",
                functionKey: "80519e2b-b912-469b-a3d8-aeaefbd3dd29",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.Signup.SocialLogin.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [];
        }

        get modelFactory() {
            return tradershub_Signup_SocialLogin_mvc_model;
        }

        get controllerFactory() {
            return tradershub_Signup_SocialLogin_mvc_controller;
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
                style: "social-login-container display-flex justify-content-center margin-top-s gap-base",
                visible: true,
                _idProps: {
                    service: idService,
                    uuid: "0"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, $if(model.variables.showPasskeyIn, false, this, function() {
                return [React.createElement(OSWidgets.Container, {
                    align: /*Default*/ 0,
                    animate: false,
                    visible: true,
                    _idProps: {
                        service: idService,
                        uuid: "1"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }, React.createElement(OSWidgets.Image, {
                    image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.passkey.svg"),
                    type: /*Static*/ 0,
                    _idProps: {
                        service: idService,
                        uuid: "2"
                    },
                    _widgetRecordProvider: widgetsRecordProvider
                }))];
            }, function() {
                return [];
            }), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedEvents: {
                    onClick: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.googleAction$Action(controller.callContext(eventHandlerContext));

                        ;
                    }
                },
                visible: true,
                _idProps: {
                    service: idService,
                    name: "Google"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Image, {
                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.google.svg"),
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
                        controller.facebookAction$Action(controller.callContext(eventHandlerContext));

                        ;
                    }
                },
                visible: true,
                _idProps: {
                    service: idService,
                    name: "Facebook"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Image, {
                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.facebook.svg"),
                type: /*Static*/ 0,
                _idProps: {
                    service: idService,
                    uuid: "6"
                },
                _widgetRecordProvider: widgetsRecordProvider
            })), React.createElement(OSWidgets.Container, {
                align: /*Default*/ 0,
                animate: false,
                extendedEvents: {
                    onClick: function() {
                        var eventHandlerContext = callContext.clone();
                        controller.appleAction$Action(controller.callContext(eventHandlerContext));

                        ;
                    }
                },
                visible: true,
                _idProps: {
                    service: idService,
                    name: "Apple"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }, React.createElement(OSWidgets.Image, {
                image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.apple.svg"),
                type: /*Static*/ 0,
                _idProps: {
                    service: idService,
                    uuid: "8"
                },
                _widgetRecordProvider: widgetsRecordProvider
            }))));
        }
    }

    return View;
});
define("tradershub.Signup.SocialLogin.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.Signup.SocialLogin.mvc$controller.AppleAction.RudderStackJS", "tradershub.Signup.SocialLogin.mvc$controller.GoogleAction.RudderStackJS", "tradershub.Signup.SocialLogin.mvc$controller.FacebookAction.RudderStackJS", "tradershub.Signup.SocialLogin.mvc$controller.OnReady.InitGooglePlatformJS", "tradershub.controller$GetSocialLoginRedirectURL"], function(OSRuntimeCore, tradershubModel, tradershubController, tradershubLanguageResources, tradershubClientVariables, tradershub_Signup_SocialLogin_mvc_controller_AppleAction_RudderStackJS, tradershub_Signup_SocialLogin_mvc_controller_GoogleAction_RudderStackJS, tradershub_Signup_SocialLogin_mvc_controller_FacebookAction_RudderStackJS, tradershub_Signup_SocialLogin_mvc_controller_OnReady_InitGooglePlatformJS) {
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
            get _appleAction$Action() {
                if (!(this.hasOwnProperty("__appleAction$Action"))) {
                    this.__appleAction$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("AppleAction", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AppleAction");
                                span.setAttribute("outsystems.function.key", "2dd54d7a-30d0-4515-b090-183550a20291");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("AppleAction");
                                callContext = controller.callContext(callContext);
                                var getSocialLoginRedirectURLVar = new OS.DataTypes.VariableHolder();
                                OS.Logger.startActiveSpan("RudderStack", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "RudderStack");
                                        span.setAttribute("outsystems.function.key", "2d14c35b-6c82-4a80-9b3d-0038abd40cca");
                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(tradershub_Signup_SocialLogin_mvc_controller_AppleAction_RudderStackJS, "RudderStack", "AppleAction", null, function($parameters) {}, {}, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
                                // Execute Action: GetSocialLoginRedirectURL
                                getSocialLoginRedirectURLVar.value = tradershubController.default.getSocialLoginRedirectURL$Action("apple", callContext);

                                // Destination: /tradershub/
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(getSocialLoginRedirectURLVar.value.redirectURLOut, {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__appleAction$Action;
            }
            set _appleAction$Action(value) {
                this.__appleAction$Action = value;
            }

            get _googleAction$Action() {
                if (!(this.hasOwnProperty("__googleAction$Action"))) {
                    this.__googleAction$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("GoogleAction", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GoogleAction");
                                span.setAttribute("outsystems.function.key", "57ae182b-ab7c-4c97-a6ad-5b96ebe8acf7");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("GoogleAction");
                                callContext = controller.callContext(callContext);
                                var getSocialLoginRedirectURLVar = new OS.DataTypes.VariableHolder();
                                OS.Logger.startActiveSpan("RudderStack", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "RudderStack");
                                        span.setAttribute("outsystems.function.key", "e2cd2e58-c94e-40f7-a4fe-543fea4d06e7");
                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(tradershub_Signup_SocialLogin_mvc_controller_GoogleAction_RudderStackJS, "RudderStack", "GoogleAction", null, function($parameters) {}, {}, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
                                // Execute Action: GetSocialLoginRedirectURL
                                getSocialLoginRedirectURLVar.value = tradershubController.default.getSocialLoginRedirectURL$Action("google", callContext);

                                // Destination: /tradershub/
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(getSocialLoginRedirectURLVar.value.redirectURLOut, {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__googleAction$Action;
            }
            set _googleAction$Action(value) {
                this.__googleAction$Action = value;
            }

            get _facebookAction$Action() {
                if (!(this.hasOwnProperty("__facebookAction$Action"))) {
                    this.__facebookAction$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("FacebookAction", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "FacebookAction");
                                span.setAttribute("outsystems.function.key", "6ced6578-235d-4f37-9d37-f5cc55a5beae");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("FacebookAction");
                                callContext = controller.callContext(callContext);
                                var getSocialLoginRedirectURLVar = new OS.DataTypes.VariableHolder();
                                OS.Logger.startActiveSpan("RudderStack", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "RudderStack");
                                        span.setAttribute("outsystems.function.key", "f692dda7-2978-43b0-b47b-b0ae32873175");
                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(tradershub_Signup_SocialLogin_mvc_controller_FacebookAction_RudderStackJS, "RudderStack", "FacebookAction", null, function($parameters) {}, {}, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
                                // Execute Action: GetSocialLoginRedirectURL
                                getSocialLoginRedirectURLVar.value = tradershubController.default.getSocialLoginRedirectURL$Action("facebook", callContext);

                                // Destination: /tradershub/
                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(getSocialLoginRedirectURLVar.value.redirectURLOut, {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__facebookAction$Action;
            }
            set _facebookAction$Action(value) {
                this.__facebookAction$Action = value;
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
                                span.setAttribute("outsystems.function.key", "fd6d9568-4f63-4ffa-a54e-25f1435375c4");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnReady");
                                callContext = controller.callContext(callContext);
                                OS.Logger.startActiveSpan("InitGooglePlatform", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "InitGooglePlatform");
                                        span.setAttribute("outsystems.function.key", "5eabdef3-12c0-4f2e-8d98-f511a8a51c43");
                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(tradershub_Signup_SocialLogin_mvc_controller_OnReady_InitGooglePlatformJS, "InitGooglePlatform", "OnReady", null, function($parameters) {}, {}, {});
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


            appleAction$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("AppleAction__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "AppleAction");
                        span.setAttribute("outsystems.function.key", "2dd54d7a-30d0-4515-b090-183550a20291");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._appleAction$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            googleAction$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("GoogleAction__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "GoogleAction");
                        span.setAttribute("outsystems.function.key", "57ae182b-ab7c-4c97-a6ad-5b96ebe8acf7");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._googleAction$Action, callContext);
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 0);

            }

            facebookAction$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("FacebookAction__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "FacebookAction");
                        span.setAttribute("outsystems.function.key", "6ced6578-235d-4f37-9d37-f5cc55a5beae");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._facebookAction$Action, callContext);
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
                        span.setAttribute("outsystems.function.key", "fd6d9568-4f63-4ffa-a54e-25f1435375c4");
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

define("tradershub.Signup.SocialLogin.mvc$controller.AppleAction.RudderStackJS", [], function() {
    return function($actions, $roles, $public) {
        Analytics.Analytics.trackEvent("ce_virtual_signup_form", {
            action: "started",
            signup_provider: "apple",
            form_name: "virtual_signup_form_outsystems"
        })
    };
});

define("tradershub.Signup.SocialLogin.mvc$controller.GoogleAction.RudderStackJS", [], function() {
    return function($actions, $roles, $public) {
        Analytics.Analytics.trackEvent("ce_virtual_signup_form", {
            action: "started",
            signup_provider: "google",
            form_name: "virtual_signup_form_outsystems"
        })
    };
});

define("tradershub.Signup.SocialLogin.mvc$controller.FacebookAction.RudderStackJS", [], function() {
    return function($actions, $roles, $public) {
        Analytics.Analytics.trackEvent("ce_virtual_signup_form", {
            action: "started",
            signup_provider: "facebook",
            form_name: "virtual_signup_form_outsystems"
        })
    };
});

define("tradershub.Signup.SocialLogin.mvc$controller.OnReady.InitGooglePlatformJS", [], function() {
    return function($actions, $roles, $public) {
        // Create a new meta element
        const metaTag = document.createElement('meta');

        // Set the name and content attributes of the meta tag
        metaTag.setAttribute('name', 'google-signin-client_id');
        metaTag.setAttribute('content', '946366519426-7b697p8590q1a53pmc727iigp1gmbgit.apps.googleusercontent.com');

        // Append the meta tag to the head of the document
        document.head.appendChild(metaTag);

        // Create a new script element
        const script = document.createElement('script');

        // Set the src attribute
        script.src = 'https://apis.google.com/js/platform.js';

        // Set async and defer attributes
        script.async = true;
        script.defer = true;

        // Append the script to the head of the document
        document.head.appendChild(script);


    };
});