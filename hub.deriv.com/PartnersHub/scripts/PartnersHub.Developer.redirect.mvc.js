define("PartnersHub.Developer.redirect.mvc$model", ["@outsystems/runtime-core-js", "PartnersHub.model"], function(OSRuntimeCore, PartnersHubModel) {
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
            return {};
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
            return false;
        }
        setInputs(inputs) {}

    }

    Model._hasValidationWidgetsValue = undefined;
    return new OS.Model.ModelFactory(Model);
});

define("PartnersHub.Developer.redirect.mvc$view", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "react", "@outsystems/runtime-view-js", "PartnersHub.Developer.redirect.mvc$model", "PartnersHub.Developer.redirect.mvc$controller", "PartnersHub.clientVariables"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, React, OSView, PartnersHub_Developer_redirect_mvc_model, PartnersHub_Developer_redirect_mvc_controller, PartnersHubClientVariables) {
    var OS = OSRuntimeCore;
    var PlaceholderContent = OSView.Widget.PlaceholderContent;
    var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() {
            return "Developer.redirect";
        }

        static getAttributes() {
            return {
                codeFunction: "redirect",
                functionKey: "9469bb6c-84c9-41e2-8780-7cb9ea8a128b",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            };
        }

        static getCssDependencies() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.PHubTest.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [];
        }

        get modelFactory() {
            return PartnersHub_Developer_redirect_mvc_model;
        }

        get controllerFactory() {
            return PartnersHub_Developer_redirect_mvc_controller;
        }

        get title() {


            return OSView.BaseView.BaseWebScreen.getTranslation("bLtplMmE4kGHgHy56ooSiw#Title", "redirect");
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

            return React.createElement("div", this.getRootNodeProperties());
        }
    }

    return View;
});
define("PartnersHub.Developer.redirect.mvc$controller", ["@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.languageResources", "PartnersHub.clientVariables", "PartnersHub.Developer.redirect.mvc$translationsResources", "PartnersHub.Developer.controller", "PartnersHub.Developer.redirect.mvc$controller.RedirectCheck.CheckRedirectTypeJS"], function(OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubLanguageResources, PartnersHubClientVariables, PartnersHub_Developer_redirect_mvc_TranslationsResources, PartnersHub_DeveloperController, PartnersHub_Developer_redirect_mvc_controller_RedirectCheck_CheckRedirectTypeJS) {
    var OS = OSRuntimeCore; {
        class ControllerInner extends
        OS.Controller.BaseViewController {
            constructor(model, messagesProvider, idService) {
                super(model, messagesProvider, idService, PartnersHub_Developer_redirect_mvc_TranslationsResources);
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
                                span.setAttribute("outsystems.function.key", "9f8a3f9a-e4e2-40dc-8fce-71a156de3bf3");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("OnInitialize");
                                callContext = controller.callContext(callContext);
                                // Execute Action: RedirectCheck
                                controller._redirectCheck$Action(callContext);
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

            get _redirectCheck$Action() {
                if (!(this.hasOwnProperty("__redirectCheck$Action"))) {
                    this.__redirectCheck$Action = function(callContext) {
                        var model = this.model;
                        var controller = this.controller;
                        var idService = this.idService;
                        return OS.Logger.startActiveSpan("RedirectCheck", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "RedirectCheck");
                                span.setAttribute("outsystems.function.key", "ec862031-d851-46a2-a6d3-26673edf9b76");
                                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                            }

                            try {
                                controller.ensureControllerAlive("RedirectCheck");
                                callContext = controller.callContext(callContext);
                                var checkRedirectTypeJSResult = new OS.DataTypes.VariableHolder();
                                checkRedirectTypeJSResult.value = OS.Logger.startActiveSpan("CheckRedirectType", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "CheckRedirectType");
                                        span.setAttribute("outsystems.function.key", "95fdcd9c-8108-4b67-882f-e96a5f140b48");
                                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(PartnersHub_Developer_redirect_mvc_controller_RedirectCheck_CheckRedirectTypeJS, "CheckRedirectType", "RedirectCheck", {
                                            Code: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                            RedirectTo: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                        }, function($parameters) {
                                            var jsNodeResult = new(controller.constructor.getVariableGroupType("PartnersHub.Developer.redirect.RedirectCheck$checkRedirectTypeJSResult"))();
                                            jsNodeResult.codeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Code, OS.DataTypes.DataTypes.Text);
                                            jsNodeResult.redirectToOut = OS.DataConversion.JSNodeParamConverter.from($parameters.RedirectTo, OS.DataTypes.DataTypes.Text);
                                            return jsNodeResult;
                                        }, {}, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
                                if (((checkRedirectTypeJSResult.value.redirectToOut === "reset_password"))) {
                                    // Destination: /PartnersHub/ResetPassword
                                    return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "ResetPassword", {
                                        Code: OS.DataConversion.ServerDataConverter.to(checkRedirectTypeJSResult.value.codeOut, OS.DataTypes.DataTypes.Text)
                                    }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                                } else {
                                    if ((checkRedirectTypeJSResult.value.redirectToOut === "phone_number_verification")) {
                                        // Destination: /PartnersHub/PhoneNumberVerification
                                        return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "PhoneNumberVerification", {
                                            Code: OS.DataConversion.ServerDataConverter.to(checkRedirectTypeJSResult.value.codeOut, OS.DataTypes.DataTypes.Text)
                                        }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                                    } else {
                                        if ((checkRedirectTypeJSResult.value.redirectToOut === "virtual_account_creation")) {
                                            // Destination: /PartnersHub/CountryOfResidence
                                            return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("PartnersHub", "CountryOfResidence", {
                                                Code: OS.DataConversion.ServerDataConverter.to(checkRedirectTypeJSResult.value.codeOut, OS.DataTypes.DataTypes.Text)
                                            }), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                                        }

                                    }

                                }

                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                    };
                }

                return this.__redirectCheck$Action;
            }
            set _redirectCheck$Action(value) {
                this.__redirectCheck$Action = value;
            }


            onInitialize$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("OnInitialize__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "OnInitialize");
                        span.setAttribute("outsystems.function.key", "9f8a3f9a-e4e2-40dc-8fce-71a156de3bf3");
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

            redirectCheck$Action(callContext) {
                var controller = this.controller;
                return OS.Logger.startActiveSpan("RedirectCheck__proxy", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "RedirectCheck");
                        span.setAttribute("outsystems.function.key", "ec862031-d851-46a2-a6d3-26673edf9b76");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
                    }

                    try {
                        return controller.safeExecuteClientAction(controller._redirectCheck$Action, callContext);
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
                        return PartnersHub_DeveloperController.default.handleError(ex, this.callContext());
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
        Controller.registerVariableGroupType("PartnersHub.Developer.redirect.RedirectCheck$checkRedirectTypeJSResult", [{
            name: "Code",
            attrName: "codeOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }, {
            name: "RedirectTo",
            attrName: "redirectToOut",
            mandatory: true,
            dataType: OS.DataTypes.DataTypes.Text,
            defaultValue: function() {
                return "";
            }
        }]);

    }
    return new OS.Controller.ControllerFactory(Controller, PartnersHubLanguageResources);
});

define("PartnersHub.Developer.redirect.mvc$controller.RedirectCheck.CheckRedirectTypeJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const params = new URLSearchParams(window.location.search)

        if (params.has("action")) {
            const redirectType = params.get("action")
            if (redirectType === "reset_password") {
                const code = params.get("code")
                $parameters.Code = code
                $parameters.RedirectTo = "reset_password"
            } else if (redirectType === "signup") {
                $parameters.Code = params.get("code")
                $parameters.RedirectTo = "virtual_account_creation"
            } else if (redirectType === "phone_number_verification") {
                const code = params.get("code")
                $parameters.Code = code
                $parameters.RedirectTo = "phone_number_verification"
            }
        }
    };
});


define("PartnersHub.Developer.redirect.mvc$translationsResources", ["exports"], function(exports) {
    return {};
});