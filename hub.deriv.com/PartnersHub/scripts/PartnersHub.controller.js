define("PartnersHub.controller$DatadogSetUser", ["exports", "@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.controller$DatadogSetUser.JavaScript1JS", "PartnersHub.clientVariables"], function(exports, OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHub_controller_DatadogSetUser_JavaScript1JS, PartnersHubClientVariables) {
    var OS = OSRuntimeCore;
    PartnersHubController.default.datadogSetUser$Action = function(loginIdIn, userIdIn, emailIn, callContext) {
        return OS.Logger.startActiveSpan("DatadogSetUser", function(span) {
            if (span) {
                span.setAttribute("code.function", "DatadogSetUser");
                span.setAttribute("outsystems.function.key", "24ebbe59-ed16-40e6-ba0c-f2bbe0a19ed3");
                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.DatadogSetUser$vars"))());
                vars.value.loginIdInLocal = loginIdIn;
                vars.value.userIdInLocal = userIdIn;
                vars.value.emailInLocal = emailIn;
                OS.Logger.startActiveSpan("JavaScript1", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "JavaScript1");
                        span.setAttribute("outsystems.function.key", "d23aa6eb-c501-4dc4-a2b0-8fb30f617f58");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(PartnersHub_controller_DatadogSetUser_JavaScript1JS, "JavaScript1", "DatadogSetUser", {
                            email: OS.DataConversion.JSNodeParamConverter.to(vars.value.emailInLocal, OS.DataTypes.DataTypes.Text),
                            userId: OS.DataConversion.JSNodeParamConverter.to(vars.value.userIdInLocal, OS.DataTypes.DataTypes.Text),
                            loginid: OS.DataConversion.JSNodeParamConverter.to(vars.value.loginIdInLocal, OS.DataTypes.DataTypes.Text)
                        }, function($parameters) {}, {}, {});
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 1);
                return;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = PartnersHubController.default;
    PartnersHubController.default.constructor.registerVariableGroupType("PartnersHub.DatadogSetUser$vars", [{
        name: "loginId",
        attrName: "loginIdInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "userId",
        attrName: "userIdInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "email",
        attrName: "emailInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    PartnersHubController.default.clientActionProxies.datadogSetUser$Action = function(loginIdIn, userIdIn, emailIn) {
        loginIdIn = (loginIdIn === undefined) ? "" : loginIdIn;
        userIdIn = (userIdIn === undefined) ? "" : userIdIn;
        emailIn = (emailIn === undefined) ? "" : emailIn;
        return controller.executeActionInsideJSNode(PartnersHubController.default.datadogSetUser$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(loginIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(userIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(emailIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});

define("PartnersHub.controller$DatadogSetUser.JavaScript1JS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        try {
            if (window.DD_RUM && window.DD_RUM.onReady) {
                window.DD_RUM.onReady(function() {
                    window.DD_RUM.setUser({
                        id: $parameters.userId,
                        name: $parameters.loginid,
                        email: $parameters.email,
                    });
                });
            } else {
                throw new Error("Datadog RUM is not defined");
            }
        } catch (error) {
            console.error("An error occurred while initializing Datadog RUM:", error);
        }

    };
});


define("PartnersHub.controller$DerivApiClientSendMessage", ["exports", "@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.controller$DerivApiClientSendMessage.JavaScript1JS", "PartnersHub.clientVariables", "PartnersHub.model$ST_ce3665169ee165087a4fa593347f539dStructure"], function(exports, OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHub_controller_DerivApiClientSendMessage_JavaScript1JS, PartnersHubClientVariables) {
    var OS = OSRuntimeCore;
    PartnersHubController.default.derivApiClientSendMessage$Action = function(endpointIn, payloadIn, callContext) {
        return OS.Logger.startActiveSpan("DerivApiClientSendMessage", function(span) {
            if (span) {
                span.setAttribute("code.function", "DerivApiClientSendMessage");
                span.setAttribute("outsystems.function.key", "b6729fca-810d-432a-be13-0b4733282138");
                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.DerivApiClientSendMessage$vars"))());
                vars.value.endpointInLocal = endpointIn;
                vars.value.payloadInLocal = payloadIn;
                var javaScript1JSResult = new OS.DataTypes.VariableHolder();
                var jSONDeserializeerrorVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(PartnersHubModel.ST_ce3665169ee165087a4fa593347f539dStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.DerivApiClientSendMessage$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    return OS.Logger.startActiveSpan("JavaScript1", function(span) {
                        if (span) {
                            span.setAttribute("code.function", "JavaScript1");
                            span.setAttribute("outsystems.function.key", "b6a382c3-246a-43fa-a210-5c8866a589fd");
                            span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                            span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                        }

                        try {
                            return controller.safeExecuteAsyncJSNode(PartnersHub_controller_DerivApiClientSendMessage_JavaScript1JS, "JavaScript1", "DerivApiClientSendMessage", {
                                Name: OS.DataConversion.JSNodeParamConverter.to(vars.value.endpointInLocal, OS.DataTypes.DataTypes.Text),
                                Payload: OS.DataConversion.JSNodeParamConverter.to(vars.value.payloadInLocal, OS.DataTypes.DataTypes.Text),
                                Response: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                IsError: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                            }, function($parameters) {
                                var jsNodeResult = new(controller.constructor.getVariableGroupType("PartnersHub.DerivApiClientSendMessage$javaScript1JSResult"))();
                                jsNodeResult.responseOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Response, OS.DataTypes.DataTypes.Text);
                                jsNodeResult.isErrorOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsError, OS.DataTypes.DataTypes.Boolean);
                                return jsNodeResult;
                            }, {}, {});
                        } finally {
                            if (span) {
                                span.end();
                            }

                        }

                    }, 1).then(function(results) {
                        javaScript1JSResult.value = results;
                    }).then(function() {
                        if ((javaScript1JSResult.value.isErrorOut)) {
                            // JSON Deserialize: JSONDeserializeerror
                            jSONDeserializeerrorVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(javaScript1JSResult.value.responseOut, PartnersHubModel.ST_ce3665169ee165087a4fa593347f539dStructure, false);
                            // Error = JSONDeserializeerror.Data
                            outVars.value.errorOut = jSONDeserializeerrorVar.value.dataOut;
                            // IsError = True
                            outVars.value.isErrorOut = true;
                        } else {
                            // RawResponse = JavaScript1.Response
                            outVars.value.rawResponseOut = javaScript1JSResult.value.responseOut;
                            // IsError = False
                            outVars.value.isErrorOut = false;
                        }

                    });
                }).then(function() {
                    return outVars.value;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 1);
    };
    var controller = PartnersHubController.default;
    PartnersHubController.default.constructor.registerVariableGroupType("PartnersHub.DerivApiClientSendMessage$vars", [{
        name: "Endpoint",
        attrName: "endpointInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "Payload",
        attrName: "payloadInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    PartnersHubController.default.constructor.registerVariableGroupType("PartnersHub.DerivApiClientSendMessage$javaScript1JSResult", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "IsError",
        attrName: "isErrorOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    PartnersHubController.default.constructor.registerVariableGroupType("PartnersHub.DerivApiClientSendMessage$outVars", [{
        name: "RawResponse",
        attrName: "rawResponseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "Error",
        attrName: "errorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new PartnersHubModel.ST_ce3665169ee165087a4fa593347f539dStructure();
        },
        complexType: PartnersHubModel.ST_ce3665169ee165087a4fa593347f539dStructure
    }, {
        name: "IsError",
        attrName: "isErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    PartnersHubController.default.clientActionProxies.derivApiClientSendMessage$Action = function(endpointIn, payloadIn) {
        endpointIn = (endpointIn === undefined) ? "" : endpointIn;
        payloadIn = (payloadIn === undefined) ? "" : payloadIn;
        return controller.executeActionInsideJSNode(PartnersHubController.default.derivApiClientSendMessage$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(endpointIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(payloadIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                RawResponse: OS.DataConversion.JSNodeParamConverter.to(actionResults.rawResponseOut, OS.DataTypes.DataTypes.Text),
                Error: actionResults.errorOut,
                IsError: OS.DataConversion.JSNodeParamConverter.to(actionResults.isErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});

define("PartnersHub.controller$DerivApiClientSendMessage.JavaScript1JS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        return new Promise(function($resolve, $reject) {
            function getRequest(name, payload) {
                if (name.length && payload.length) {
                    return {
                        name,
                        payload: JSON.parse(payload)
                    }
                }
                return {
                    name
                }
            }


            if (window.DerivAPIClient) {
                const request = getRequest($parameters.Name, $parameters.Payload)

                window.DerivAPIClient.send(request).then(res => {
                    $parameters.Response = JSON.stringify(res)
                    $parameters.IsError = false
                    $resolve()
                }).catch(err => {
                    console.log('error', err)
                    $parameters.Response = JSON.stringify(err)
                    $parameters.IsError = true
                    $resolve()
                })
            }
        });
    };
});


define("PartnersHub.controller$GetDefaultAppId", ["exports", "@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.controller$GetDefaultAppId.JavaScript1JS", "PartnersHub.clientVariables"], function(exports, OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHub_controller_GetDefaultAppId_JavaScript1JS, PartnersHubClientVariables) {
    var OS = OSRuntimeCore;
    PartnersHubController.default.getDefaultAppId$Action = function(callContext) {
        return OS.Logger.startActiveSpan("GetDefaultAppId", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetDefaultAppId");
                span.setAttribute("outsystems.function.key", "ac6b1ff4-b659-4c7e-8777-ce329bb770ac");
                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var javaScript1JSResult = new OS.DataTypes.VariableHolder();
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.GetDefaultAppId$outVars"))());
                javaScript1JSResult.value = OS.Logger.startActiveSpan("JavaScript1", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "JavaScript1");
                        span.setAttribute("outsystems.function.key", "48218b5a-a0d9-45cc-b834-71214fd97d97");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(PartnersHub_controller_GetDefaultAppId_JavaScript1JS, "JavaScript1", "GetDefaultAppId", {
                            CurrentAppId: OS.DataConversion.JSNodeParamConverter.to(PartnersHubClientVariables.getAppId(), OS.DataTypes.DataTypes.Text),
                            ProductionHostName: OS.DataConversion.JSNodeParamConverter.to(PartnersHubClientVariables.getProductionHostName(), OS.DataTypes.DataTypes.Text),
                            isReset: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
                            CurrentWebsocketURL: OS.DataConversion.JSNodeParamConverter.to(PartnersHubClientVariables.getWebsocketURL(), OS.DataTypes.DataTypes.Text),
                            DefaultAppId: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                        }, function($parameters) {
                            var jsNodeResult = new(controller.constructor.getVariableGroupType("PartnersHub.GetDefaultAppId$javaScript1JSResult"))();
                            jsNodeResult.defaultAppIdOut = OS.DataConversion.JSNodeParamConverter.from($parameters.DefaultAppId, OS.DataTypes.DataTypes.Text);
                            return jsNodeResult;
                        }, {}, {});
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 1);
                // DefaultAppId = JavaScript1.DefaultAppId
                outVars.value.defaultAppIdOut = javaScript1JSResult.value.defaultAppIdOut;
                return outVars.value;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = PartnersHubController.default;
    PartnersHubController.default.constructor.registerVariableGroupType("PartnersHub.GetDefaultAppId$javaScript1JSResult", [{
        name: "DefaultAppId",
        attrName: "defaultAppIdOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    PartnersHubController.default.constructor.registerVariableGroupType("PartnersHub.GetDefaultAppId$outVars", [{
        name: "DefaultAppId",
        attrName: "defaultAppIdOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    PartnersHubController.default.clientActionProxies.getDefaultAppId$Action = function() {
        return controller.executeActionInsideJSNode(PartnersHubController.default.getDefaultAppId$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                DefaultAppId: OS.DataConversion.JSNodeParamConverter.to(actionResults.defaultAppIdOut, OS.DataTypes.DataTypes.Text)
            };
        });
    };
});

define("PartnersHub.controller$GetDefaultAppId.JavaScript1JS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const host = window.location.host
        const params = new URLSearchParams($parameters.CurrentWebsocketURL)

        if (!$parameters.CurrentAppId || $parameters.isReset) {
            if (host === $parameters.ProductionHostName) {
                // TODO: Create production App ID
                $parameters.DefaultAppId = '62837'
            } else {
                $parameters.DefaultAppId = '62537'
            }
        }
    };
});


define("PartnersHub.controller$GetHeaderTitle", ["exports", "@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.clientVariables"], function(exports, OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubClientVariables) {
    var OS = OSRuntimeCore;
    PartnersHubController.default.getHeaderTitle$Action = function(callContext) {
        return OS.Logger.startActiveSpan("GetHeaderTitle", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetHeaderTitle");
                span.setAttribute("outsystems.function.key", "e8a6778c-526c-4c86-ab9f-466f41c4e1ee");
                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                if (((PartnersHubClientVariables.getRealSignupCurrentStep() === 1))) {
                    // CurrentStepTitle = "Account type"
                    PartnersHubClientVariables.setCurrentStepTitle(OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("g6RyjU85_kW76lKmE2UduQ#Value.1197579629.1", "Account type"));
                } else {
                    if ((PartnersHubClientVariables.getRealSignupCurrentStep() === 2)) {
                        // CurrentStepTitle = "Account currency"
                        PartnersHubClientVariables.setCurrentStepTitle(OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("G0E_DDTyZUmmTxt82bI0YA#Value.-1542542140.1", "Account currency"));
                    } else {
                        if ((PartnersHubClientVariables.getRealSignupCurrentStep() === 3)) {
                            // CurrentStepTitle = "Personal details"
                            PartnersHubClientVariables.setCurrentStepTitle(OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("Vx25sFpQR0CS+7jYjF7gPg#Value.1891809410.1", "Personal details"));
                        } else {
                            if ((PartnersHubClientVariables.getRealSignupCurrentStep() === 4)) {
                                if ((PartnersHubClientVariables.getRealSignupIsIDVSupported())) {
                                    // CurrentStepTitle = "Identity verification"
                                    PartnersHubClientVariables.setCurrentStepTitle(OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("8mccxYPg10+4EWfXSVsKvg#Value.-1330566627.1", "Identity verification"));
                                } else {
                                    // CurrentStepTitle = "Employment details"
                                    PartnersHubClientVariables.setCurrentStepTitle("Employment details");
                                }

                            } else {
                                if ((PartnersHubClientVariables.getRealSignupCurrentStep() === 5)) {
                                    if ((PartnersHubClientVariables.getRealSignupIsIDVSupported())) {
                                        // CurrentStepTitle = "Employment details"
                                        PartnersHubClientVariables.setCurrentStepTitle(OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("gW5sw77zM0WqI59oUGioIw#Value.462242350.1", "Employment details"));
                                    } else {
                                        // CurrentStepTitle = "Address details"
                                        PartnersHubClientVariables.setCurrentStepTitle("Address details");
                                    }

                                } else {
                                    if ((PartnersHubClientVariables.getRealSignupCurrentStep() === 6)) {
                                        if ((PartnersHubClientVariables.getRealSignupIsIDVSupported())) {
                                            // CurrentStepTitle = "Address details"
                                            PartnersHubClientVariables.setCurrentStepTitle(OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("WMCZZueyQ0eFYYOfdWTRww#Value.311930358.1", "Address details"));
                                        } else {
                                            // CurrentStepTitle = If
                                            PartnersHubClientVariables.setCurrentStepTitle((((PartnersHubClientVariables.getSelectedAccountType() === "Individual")) ? ("Promotional platforms") : ("Company details")));
                                        }

                                    } else {
                                        if ((PartnersHubClientVariables.getRealSignupCurrentStep() === 7)) {
                                            if ((PartnersHubClientVariables.getRealSignupIsIDVSupported())) {
                                                // CurrentStepTitle = If
                                                PartnersHubClientVariables.setCurrentStepTitle((((PartnersHubClientVariables.getSelectedAccountType() === "Individual")) ? ("Promotional platforms") : ("Company details")));
                                            } else {
                                                // CurrentStepTitle = "Terms of use"
                                                PartnersHubClientVariables.setCurrentStepTitle("Terms of use");
                                            }

                                        } else {
                                            if ((PartnersHubClientVariables.getRealSignupCurrentStep() === 8)) {
                                                // CurrentStepTitle = "Terms of use"
                                                PartnersHubClientVariables.setCurrentStepTitle(OS.Injector.resolve(OS.ServiceNames.TranslationsService).getMessage("b9DYMWKLTUeRIaswOIabwQ#Value.945985687.1", "Terms of use"));
                                            }

                                        }

                                    }

                                }

                            }

                        }

                    }

                }

                return;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = PartnersHubController.default;
    PartnersHubController.default.clientActionProxies.getHeaderTitle$Action = function() {
        return controller.executeActionInsideJSNode(PartnersHubController.default.getHeaderTitle$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});


define("PartnersHub.controller$GetToken", ["exports", "@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.controller$GetToken.JavaScript1JS", "PartnersHub.clientVariables"], function(exports, OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHub_controller_GetToken_JavaScript1JS, PartnersHubClientVariables) {
    var OS = OSRuntimeCore;
    PartnersHubController.default.getToken$Action = function(callContext) {
        return OS.Logger.startActiveSpan("GetToken", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetToken");
                span.setAttribute("outsystems.function.key", "df45e1e2-5b8e-443f-a040-b3af308d0c58");
                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var javaScript1JSResult = new OS.DataTypes.VariableHolder();
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.GetToken$outVars"))());
                javaScript1JSResult.value = OS.Logger.startActiveSpan("JavaScript1", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "JavaScript1");
                        span.setAttribute("outsystems.function.key", "98942e2b-7b4d-48cc-9394-2de819b6bbe8");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(PartnersHub_controller_GetToken_JavaScript1JS, "JavaScript1", "GetToken", {
                            authToken: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                        }, function($parameters) {
                            var jsNodeResult = new(controller.constructor.getVariableGroupType("PartnersHub.GetToken$javaScript1JSResult"))();
                            jsNodeResult.authTokenOut = OS.DataConversion.JSNodeParamConverter.from($parameters.authToken, OS.DataTypes.DataTypes.Text);
                            return jsNodeResult;
                        }, {}, {});
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 1);
                // token = JavaScript1.authToken
                outVars.value.tokenOut = javaScript1JSResult.value.authTokenOut;
                return outVars.value;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = PartnersHubController.default;
    PartnersHubController.default.constructor.registerVariableGroupType("PartnersHub.GetToken$javaScript1JSResult", [{
        name: "authToken",
        attrName: "authTokenOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    PartnersHubController.default.constructor.registerVariableGroupType("PartnersHub.GetToken$outVars", [{
        name: "token",
        attrName: "tokenOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    PartnersHubController.default.clientActionProxies.getToken$Action = function() {
        return controller.executeActionInsideJSNode(PartnersHubController.default.getToken$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                token: OS.DataConversion.JSNodeParamConverter.to(actionResults.tokenOut, OS.DataTypes.DataTypes.Text)
            };
        });
    };
});

define("PartnersHub.controller$GetToken.JavaScript1JS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const token = localStorage.getItem('token')
        $parameters.authToken = token
    };
});


define("PartnersHub.controller$GTMPushDataLayer", ["exports", "@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.controller$GTMPushDataLayer.PushDataLayerJS", "PartnersHub.clientVariables"], function(exports, OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHub_controller_GTMPushDataLayer_PushDataLayerJS, PartnersHubClientVariables) {
    var OS = OSRuntimeCore;
    PartnersHubController.default.gTMPushDataLayer$Action = function(eventNameIn, callContext) {
        return OS.Logger.startActiveSpan("GTMPushDataLayer", function(span) {
            if (span) {
                span.setAttribute("code.function", "GTMPushDataLayer");
                span.setAttribute("outsystems.function.key", "8845cc47-983a-4374-b8ec-4d5e41e7fad0");
                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.GTMPushDataLayer$vars"))());
                vars.value.eventNameInLocal = eventNameIn;
                OS.Logger.startActiveSpan("PushDataLayer", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "PushDataLayer");
                        span.setAttribute("outsystems.function.key", "c75690ca-352d-4176-b0dd-f06024d0ef67");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(PartnersHub_controller_GTMPushDataLayer_PushDataLayerJS, "PushDataLayer", "GTMPushDataLayer", {
                            EventName: OS.DataConversion.JSNodeParamConverter.to(vars.value.eventNameInLocal, OS.DataTypes.DataTypes.Text)
                        }, function($parameters) {}, {}, {});
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 1);
                return;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = PartnersHubController.default;
    PartnersHubController.default.constructor.registerVariableGroupType("PartnersHub.GTMPushDataLayer$vars", [{
        name: "EventName",
        attrName: "eventNameInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    PartnersHubController.default.clientActionProxies.gTMPushDataLayer$Action = function(eventNameIn) {
        eventNameIn = (eventNameIn === undefined) ? "" : eventNameIn;
        return controller.executeActionInsideJSNode(PartnersHubController.default.gTMPushDataLayer$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(eventNameIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});

define("PartnersHub.controller$GTMPushDataLayer.PushDataLayerJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        if (window?.dataLayer) {
            window.dataLayer.push({
                event: $parameters.EventName,
                platform: "Partnershub",
                loggedIn: true
            })
        }
    };
});


define("PartnersHub.controller$HandleRedirectOnLogin", ["exports", "@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "RESTAPIWebsocket.model", "PartnersHub.controller$HandleRedirectOnLogin.CheckAndStoreRedirectParamsJS", "PartnersHub.controller$HandleRedirectOnLogin.SetuseridJS", "PartnersHub.controller$HandleRedirectOnLogin.ClearParamsJS", "PartnersHub.clientVariables", "PartnersHub.controller$DatadogSetUser", "PartnersHub.model$ST_e00c986a2a7690520557f1ea58ae1d82Structure", "RESTAPIWebsocket.model$ST_f502318fbe2f943e6cfbba125766780aStructure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocket", "PartnersHub.controller$SendAuthorize"], function(exports, OSRuntimeCore, PartnersHubModel, PartnersHubController, RESTAPIWebsocketModel, PartnersHub_controller_HandleRedirectOnLogin_CheckAndStoreRedirectParamsJS, PartnersHub_controller_HandleRedirectOnLogin_SetuseridJS, PartnersHub_controller_HandleRedirectOnLogin_ClearParamsJS, PartnersHubClientVariables) {
    var OS = OSRuntimeCore;
    PartnersHubController.default.handleRedirectOnLogin$Action = function(callContext) {
        return OS.Logger.startActiveSpan("HandleRedirectOnLogin", function(span) {
            if (span) {
                span.setAttribute("code.function", "HandleRedirectOnLogin");
                span.setAttribute("outsystems.function.key", "6aee93d5-bfcc-48da-b137-119a36c8989e");
                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var sendAuthorizeVar = new OS.DataTypes.VariableHolder();
                var checkAndStoreRedirectParamsJSResult = new OS.DataTypes.VariableHolder();
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.HandleRedirectOnLogin$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    checkAndStoreRedirectParamsJSResult.value = OS.Logger.startActiveSpan("CheckAndStoreRedirectParams", function(span) {
                        if (span) {
                            span.setAttribute("code.function", "CheckAndStoreRedirectParams");
                            span.setAttribute("outsystems.function.key", "26dcdb0c-4195-4bb2-a736-6f0a6d0cece1");
                            span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                            span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                        }

                        try {
                            return controller.safeExecuteJSNode(PartnersHub_controller_HandleRedirectOnLogin_CheckAndStoreRedirectParamsJS, "CheckAndStoreRedirectParams", "HandleRedirectOnLogin", {
                                HasToken: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
                                Token: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                LoginId: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                            }, function($parameters) {
                                var jsNodeResult = new(controller.constructor.getVariableGroupType("PartnersHub.HandleRedirectOnLogin$checkAndStoreRedirectParamsJSResult"))();
                                jsNodeResult.hasTokenOut = OS.DataConversion.JSNodeParamConverter.from($parameters.HasToken, OS.DataTypes.DataTypes.Boolean);
                                jsNodeResult.tokenOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Token, OS.DataTypes.DataTypes.Text);
                                jsNodeResult.loginIdOut = OS.DataConversion.JSNodeParamConverter.from($parameters.LoginId, OS.DataTypes.DataTypes.Text);
                                return jsNodeResult;
                            }, {}, {});
                        } finally {
                            if (span) {
                                span.end();
                            }

                        }

                    }, 1);
                    // HasRedirectToken
                    return OS.Flow.executeSequence(function() {
                        if ((checkAndStoreRedirectParamsJSResult.value.hasTokenOut)) {
                            // Execute Action: SendAuthorize
                            return PartnersHubController.default.sendAuthorize$Action(function() {
                                var rec = new PartnersHubModel.ST_e00c986a2a7690520557f1ea58ae1d82Structure();
                                rec.authorizeAttr = checkAndStoreRedirectParamsJSResult.value.tokenOut;
                                return rec;
                            }(), callContext).then(function(value) {
                                sendAuthorizeVar.value = value;
                            }).then(function() {
                                if ((!(sendAuthorizeVar.value.isErrorOut))) {
                                    // IsLoggedIn = True
                                    outVars.value.isLoggedInOut = true;
                                    OS.Logger.startActiveSpan("Setuserid", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "Setuserid");
                                            span.setAttribute("outsystems.function.key", "33e0d4df-02a1-4742-b3a4-5120c58286ae");
                                            span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                            span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                        }

                                        try {
                                            return controller.safeExecuteJSNode(PartnersHub_controller_HandleRedirectOnLogin_SetuseridJS, "Setuserid", "HandleRedirectOnLogin", {
                                                userid: OS.DataConversion.JSNodeParamConverter.to(OS.BuiltinFunctions.longIntegerToText(sendAuthorizeVar.value.authorizeResponseOut.authorizeAttr.user_idAttr), OS.DataTypes.DataTypes.Text)
                                            }, function($parameters) {}, {}, {});
                                        } finally {
                                            if (span) {
                                                span.end();
                                            }

                                        }

                                    }, 1);
                                    // Execute Action: DatadogSetUser
                                    PartnersHubController.default.datadogSetUser$Action(sendAuthorizeVar.value.authorizeResponseOut.authorizeAttr.loginidAttr, OS.BuiltinFunctions.longIntegerToText(sendAuthorizeVar.value.authorizeResponseOut.authorizeAttr.user_idAttr), sendAuthorizeVar.value.authorizeResponseOut.authorizeAttr.emailAttr, callContext);
                                    OS.Logger.startActiveSpan("ClearParams", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "ClearParams");
                                            span.setAttribute("outsystems.function.key", "f38d9fc4-e296-4e47-9546-a98c63409e7d");
                                            span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                                            span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                        }

                                        try {
                                            return controller.safeExecuteJSNode(PartnersHub_controller_HandleRedirectOnLogin_ClearParamsJS, "ClearParams", "HandleRedirectOnLogin", null, function($parameters) {}, {}, {});
                                        } finally {
                                            if (span) {
                                                span.end();
                                            }

                                        }

                                    }, 1);
                                    return OS.Flow.returnAsync(outVars.value);

                                }

                            });
                        }

                    }).then(function() {
                        // IsLoggedIn = False
                        outVars.value.isLoggedInOut = false;
                    });
                }).then(function() {
                    return outVars.value;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 1);
    };
    var controller = PartnersHubController.default;
    PartnersHubController.default.constructor.registerVariableGroupType("PartnersHub.HandleRedirectOnLogin$checkAndStoreRedirectParamsJSResult", [{
        name: "HasToken",
        attrName: "hasTokenOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }, {
        name: "Token",
        attrName: "tokenOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "LoginId",
        attrName: "loginIdOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    PartnersHubController.default.constructor.registerVariableGroupType("PartnersHub.HandleRedirectOnLogin$outVars", [{
        name: "IsLoggedIn",
        attrName: "isLoggedInOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    PartnersHubController.default.clientActionProxies.handleRedirectOnLogin$Action = function() {
        return controller.executeActionInsideJSNode(PartnersHubController.default.handleRedirectOnLogin$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                IsLoggedIn: OS.DataConversion.JSNodeParamConverter.to(actionResults.isLoggedInOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});

define("PartnersHub.controller$HandleRedirectOnLogin.CheckAndStoreRedirectParamsJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const params = new URLSearchParams(window.location.search)

        if (params.has("token1") && params.has("acct1")) {
            const loginId = params.get("acct1");
            const token = params.get("token1")

            const localLoginId = localStorage.getItem("loginid")
            const localToken = localStorage.getItem("token")

            if (localLoginId !== loginId && localToken !== token) {
                // invalidate the local storage with the new token and loginid
                localStorage.setItem("loginId", loginId)
                localStorage.setItem("token", token)

                $parameters.Token = token
                $parameters.LoginId = loginId
            }
            $parameters.HasToken = true
        } else {
            if (localStorage.getItem("token") && localStorage.getItem("loginId")) {
                $parameters.Token = localStorage.getItem("token")
                $parameters.LoginId = localStorage.getItem("loginId")
                $parameters.HasToken = true
            } else {
                $parameters.HasToken = false
            }
        }
    };
});

define("PartnersHub.controller$HandleRedirectOnLogin.SetuseridJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const userId = localStorage.getItem("active_user_id")

        if (!userId) {
            localStorage.setItem("active_user_id", $parameters.userid)
        }

    };
});

define("PartnersHub.controller$HandleRedirectOnLogin.ClearParamsJS", [], function() {
    return function($actions, $roles, $public) {
        window.history.replaceState(null, '', window.location.pathname);
    };
});


define("PartnersHub.controller$HandleUTM", ["exports", "@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.clientVariables"], function(exports, OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubClientVariables) {
    var OS = OSRuntimeCore;
    PartnersHubController.default.handleUTM$Action = function(callContext) {
        return OS.Logger.startActiveSpan("HandleUTM", function(span) {
            if (span) {
                span.setAttribute("code.function", "HandleUTM");
                span.setAttribute("outsystems.function.key", "ed8bc29b-a24e-495a-bed1-fdd2e4a5ad3d");
                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                return;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = PartnersHubController.default;
    PartnersHubController.default.clientActionProxies.handleUTM$Action = function() {
        return controller.executeActionInsideJSNode(PartnersHubController.default.handleUTM$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});


define("PartnersHub.controller$IFrameLogout", ["exports", "@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "PartnersHub.controller$IFrameLogout.IframeLogoutJSJS", "PartnersHub.clientVariables", "RESTAPIWebsocket.model$ST_bc9f0cd5cd952aeeadf59ee9a5dfb79aStructure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocket", "RESTAPIWebsocket.controller$WebsocketLogout", "PartnersHub.controller$RedirectToOauth"], function(exports, OSRuntimeCore, PartnersHubModel, PartnersHubController, RESTAPIWebsocketModel, RESTAPIWebsocketController, PartnersHub_controller_IFrameLogout_IframeLogoutJSJS, PartnersHubClientVariables) {
    var OS = OSRuntimeCore;
    PartnersHubController.default.iFrameLogout$Action = function(callContext) {
        return OS.Logger.startActiveSpan("IFrameLogout", function(span) {
            if (span) {
                span.setAttribute("code.function", "IFrameLogout");
                span.setAttribute("outsystems.function.key", "05ceb0eb-e8d1-4784-8c33-29308e97919c");
                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                return OS.Flow.executeAsyncFlow(function() {
                    return OS.Logger.startActiveSpan("IframeLogoutJS", function(span) {
                        if (span) {
                            span.setAttribute("code.function", "IframeLogoutJS");
                            span.setAttribute("outsystems.function.key", "c53880c1-f003-4b4c-ac67-67c14c873cb8");
                            span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                            span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                        }

                        try {
                            return controller.safeExecuteAsyncJSNode(PartnersHub_controller_IFrameLogout_IframeLogoutJSJS, "IframeLogoutJS", "IFrameLogout", {
                                ServerUrl: OS.DataConversion.JSNodeParamConverter.to(PartnersHubClientVariables.getServer(), OS.DataTypes.DataTypes.Text),
                                CurrentAppId: OS.DataConversion.JSNodeParamConverter.to(PartnersHubClientVariables.getAppId(), OS.DataTypes.DataTypes.Text)
                            }, function($parameters) {}, {
                                WebsocketLogout: RESTAPIWebsocketController.default.clientActionProxies.websocketLogout$Action,
                                RedirectToOauth: PartnersHubController.default.clientActionProxies.redirectToOauth$Action
                            }, {});
                        } finally {
                            if (span) {
                                span.end();
                            }

                        }

                    }, 1);
                }).then(function() {
                    return;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 1);
    };
    var controller = PartnersHubController.default;
    PartnersHubController.default.clientActionProxies.iFrameLogout$Action = function() {
        return controller.executeActionInsideJSNode(PartnersHubController.default.iFrameLogout$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});

define("PartnersHub.controller$IFrameLogout.IframeLogoutJSJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        return new Promise(function($resolve, $reject) {
            const loginid = localStorage.getItem("loginId") ?? '';
            const token = localStorage.getItem('token') ?? '';
            const currentAppId = Number($parameters.CurrentAppId) ?? '';
            const serverUrl = $parameters.ServerUrl ?? '';

            const validServers = ['green.derivws.com', 'red.derivws.com', 'blue.derivws.com'];

            const isOAuthServer = validServers.includes(serverUrl);

            const oauthServer = isOAuthServer ? 'oauth.deriv.com' : serverUrl;


            if (loginid && token) {
                localStorage.removeItem("loginId");
                localStorage.removeItem("token");
                localStorage.removeItem("active_user_id");
            }

            function performLogout() {
                console.log('Starting logout process...');
                $actions.WebsocketLogout($parameters.ServerUrl, $parameters.CurrentAppId, "EN", token)

                try {
                    const featureValue = window.Analytics.Analytics.getFeatureValue("hydra_be");
                    if (!Array.isArray(featureValue) || !featureValue[1]?.enabled_for) {
                        throw new Error('Invalid feature value structure');
                    }

                    const enabledFor = featureValue[1].enabled_for;

                    const is_hydra_on = enabledFor.includes(currentAppId)

                    if (is_hydra_on) {
                        console.log('Creating iframe for oauth2/sessions/logout')
                        let iframe = document.getElementById('logout-iframe');
                        if (!iframe) {
                            iframe = document.createElement('iframe');
                            iframe.id = 'logout-iframe';
                            iframe.style.display = 'none';
                            document.body.appendChild(iframe);
                            setTimeout(() => {
                                $resolve();
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
                        console.warn('oauth2/sessions/logout is not enabled')
                        console.log('Redirecting to oauth...')
                        $resolve();
                        $actions.RedirectToOauth();
                    }
                } catch (error) {
                    $resolve();
                    $actions.RedirectToOauth();
                }
            }

            performLogout();

        });
    };
});


define("PartnersHub.controller$InitGrowthbook", ["exports", "@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.controller$InitGrowthbook.JavaScript1JS", "PartnersHub.clientVariables", "PartnersHub.controller$GetDefaultAppId"], function(exports, OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHub_controller_InitGrowthbook_JavaScript1JS, PartnersHubClientVariables) {
    var OS = OSRuntimeCore;
    PartnersHubController.default.initGrowthbook$Action = function(countryIn, isMobileIn, callContext) {
        return OS.Logger.startActiveSpan("InitGrowthbook", function(span) {
            if (span) {
                span.setAttribute("code.function", "InitGrowthbook");
                span.setAttribute("outsystems.function.key", "6425e84a-6dc3-4184-9a9d-81e2d022c6b9");
                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.InitGrowthbook$vars"))());
                vars.value.countryInLocal = countryIn;
                vars.value.isMobileInLocal = isMobileIn;
                var getDefaultAppIdVar = new OS.DataTypes.VariableHolder();
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: GetDefaultAppId
                    getDefaultAppIdVar.value = PartnersHubController.default.getDefaultAppId$Action(callContext);

                    return OS.Logger.startActiveSpan("JavaScript1", function(span) {
                        if (span) {
                            span.setAttribute("code.function", "JavaScript1");
                            span.setAttribute("outsystems.function.key", "b41c0dea-0f49-4a8e-97ff-758a58fb09d2");
                            span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                            span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                        }

                        try {
                            return controller.safeExecuteAsyncJSNode(PartnersHub_controller_InitGrowthbook_JavaScript1JS, "JavaScript1", "InitGrowthbook", {
                                GROWTHBOOK_DEVELOPMENT_DECRYPTION_KEY: OS.DataConversion.JSNodeParamConverter.to("KJ7mk9CjXdOjHV9xWX9W1A==", OS.DataTypes.DataTypes.Text),
                                GROWTHBOOK_DEVELOPMENT_CLIENT_KEY: OS.DataConversion.JSNodeParamConverter.to("sdk-EuOiRoxczSfyQ5e", OS.DataTypes.DataTypes.Text),
                                country: OS.DataConversion.JSNodeParamConverter.to(vars.value.countryInLocal, OS.DataTypes.DataTypes.Text),
                                GROWTHBOOK_STAGING_CLIENT_KEY: OS.DataConversion.JSNodeParamConverter.to("sdk-FfwcFQrFGv0JeZJj", OS.DataTypes.DataTypes.Text),
                                GROWTHBOOK_PRODUCTION_CLIENT_KEY: OS.DataConversion.JSNodeParamConverter.to("sdk-7QDKZJZPpLgA4x1r", OS.DataTypes.DataTypes.Text),
                                RUDDERSTACK_PRODUCTION_KEY: OS.DataConversion.JSNodeParamConverter.to("2kjVE5gjQovlVpalPGqTiNahxxY", OS.DataTypes.DataTypes.Text),
                                GROWTHBOOK_STAGING_DECRYPTION_KEY: OS.DataConversion.JSNodeParamConverter.to("lNbwvULAUxjXQuofGCQUnA==", OS.DataTypes.DataTypes.Text),
                                GROWTHBOOK_PRODUCTION_DECRYPTION_KEY: OS.DataConversion.JSNodeParamConverter.to("P4khnL+uolAuViKx8G2+6g==", OS.DataTypes.DataTypes.Text),
                                STAGING_HOSTNAME: OS.DataConversion.JSNodeParamConverter.to(PartnersHubClientVariables.getStagingHostName(), OS.DataTypes.DataTypes.Text),
                                PRODUCTION_HOSTNAME: OS.DataConversion.JSNodeParamConverter.to(PartnersHubClientVariables.getProductionHostName(), OS.DataTypes.DataTypes.Text),
                                appId: OS.DataConversion.JSNodeParamConverter.to(getDefaultAppIdVar.value.defaultAppIdOut, OS.DataTypes.DataTypes.Text),
                                isMobile: OS.DataConversion.JSNodeParamConverter.to(vars.value.isMobileInLocal, OS.DataTypes.DataTypes.Boolean),
                                RUDDERSTACK_STAGING_KEY: OS.DataConversion.JSNodeParamConverter.to("2l04KkH68bwVyj4obQzw8GBifhv", OS.DataTypes.DataTypes.Text)
                            }, function($parameters) {}, {}, {});
                        } finally {
                            if (span) {
                                span.end();
                            }

                        }

                    }, 1);
                }).then(function() {
                    return;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 1);
    };
    var controller = PartnersHubController.default;
    PartnersHubController.default.constructor.registerVariableGroupType("PartnersHub.InitGrowthbook$vars", [{
        name: "country",
        attrName: "countryInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "isMobile",
        attrName: "isMobileInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    PartnersHubController.default.clientActionProxies.initGrowthbook$Action = function(countryIn, isMobileIn) {
        countryIn = (countryIn === undefined) ? "" : countryIn;
        isMobileIn = (isMobileIn === undefined) ? false : isMobileIn;
        return controller.executeActionInsideJSNode(PartnersHubController.default.initGrowthbook$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(countryIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(isMobileIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});

define("PartnersHub.controller$InitGrowthbook.JavaScript1JS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        return new Promise(function($resolve, $reject) {
            const isProduction = window.location.hostname === $parameters.PRODUCTION_HOSTNAME
            const isStaging = window.location.hostname === $parameters.STAGING_HOSTNAME

            const initAnalytics = () => new Promise((resolve, reject) => {
                const Analytics = window?.Analytics?.Analytics
                if (Analytics) {
                    let credentials = {};
                    let attributes = {};

                    if (isProduction) {
                        credentials = {
                            growthbookKey: $parameters.GROWTHBOOK_PRODUCTION_CLIENT_KEY,
                            growthbookDecryptionKey: $parameters.GROWTHBOOK_PRODUCTION_DECRYPTION_KEY,
                            rudderstackKey: $parameters.RUDDERSTACK_PRODUCTION_KEY
                        }
                    } else if (isStaging) {
                        credentials = {
                            growthbookKey: $parameters.GROWTHBOOK_STAGING_CLIENT_KEY,
                            growthbookDecryptionKey: $parameters.GROWTHBOOK_STAGING_DECRYPTION_KEY,
                            rudderstackKey: $parameters.RUDDERSTACK_STAGING_KEY
                        }
                    } else {
                        credentials = {
                            growthbookKey: $parameters.GROWTHBOOK_DEVELOPMENT_CLIENT_KEY,
                            growthbookDecryptionKey: $parameters.GROWTHBOOK_DEVELOPMENT_DECRYPTION_KEY,
                            rudderstackKey: $parameters.RUDDERSTACK_STAGING_KEY
                        }
                    }

                    const initialiseConfig = {
                        ...credentials,
                        growthbookOptions: {
                            navigate: (url) => console.log(`Navigating to ${url}`),
                            antiFlicker: false,
                            navigateDelay: 0,
                            disableCache: !isProduction,
                            attributes: {
                                country: $parameters.country,
                                app_id: $parameters.appId,
                                domain: window.location.hostname,
                                device_type: $parameters.isMobile ? 'mobile' : 'desktop'
                            }
                        },
                    };




                    try {
                        Analytics.initialise(initialiseConfig);
                        resolve()
                    } catch (error) {
                        console.error('Error during initialisation:', error);
                        reject()
                    }
                }
            })

            initAnalytics().then(() => $resolve()).catch((error) => {
                console.error(error)
                $resolve()
            })

        });
    };
});


define("PartnersHub.controller$InitGTM", ["exports", "@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.controller$InitGTM.InitialiseGTMJS", "PartnersHub.clientVariables"], function(exports, OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHub_controller_InitGTM_InitialiseGTMJS, PartnersHubClientVariables) {
    var OS = OSRuntimeCore;
    PartnersHubController.default.initGTM$Action = function(callContext) {
        return OS.Logger.startActiveSpan("InitGTM", function(span) {
            if (span) {
                span.setAttribute("code.function", "InitGTM");
                span.setAttribute("outsystems.function.key", "38c3aa3a-b0d4-4010-ae5c-9ae65347bdac");
                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                OS.Logger.startActiveSpan("InitialiseGTM", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "InitialiseGTM");
                        span.setAttribute("outsystems.function.key", "35de470b-a21c-42c2-92b5-a7b91df07af8");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(PartnersHub_controller_InitGTM_InitialiseGTMJS, "InitialiseGTM", "InitGTM", {
                            PRODUCTION_HOSTNAME: OS.DataConversion.JSNodeParamConverter.to(PartnersHubClientVariables.getProductionHostName(), OS.DataTypes.DataTypes.Text)
                        }, function($parameters) {}, {}, {});
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 1);
                return;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = PartnersHubController.default;
    PartnersHubController.default.clientActionProxies.initGTM$Action = function() {
        return controller.executeActionInsideJSNode(PartnersHubController.default.initGTM$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});

define("PartnersHub.controller$InitGTM.InitialiseGTMJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        try {
            var gtm_id = 'GTM-NF7884S';
            if (window.location.hostname !== $parameters.PRODUCTION_HOSTNAME) gtm_id = 'GTM-NF7884S';
            (function(w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({
                    'gtm.start': new Date().getTime(),
                    event: 'gtm.js'
                });
                var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s),
                    dl = l != 'dataLayer' ? '&l=' + l : '';
                j.defer = true;
                j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', gtm_id);
        } catch (err) {
            console.log('Error inserting GTM script 1 ====>', err);
        }
    };
});


define("PartnersHub.controller$IsUserLoggedIn", ["exports", "@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.controller$IsUserLoggedIn.JavaScript1JS", "PartnersHub.clientVariables"], function(exports, OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHub_controller_IsUserLoggedIn_JavaScript1JS, PartnersHubClientVariables) {
    var OS = OSRuntimeCore;
    PartnersHubController.default.isUserLoggedIn$Action = function(callContext) {
        return OS.Logger.startActiveSpan("IsUserLoggedIn", function(span) {
            if (span) {
                span.setAttribute("code.function", "IsUserLoggedIn");
                span.setAttribute("outsystems.function.key", "80aea954-736e-4387-8093-5ab5532f3854");
                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var javaScript1JSResult = new OS.DataTypes.VariableHolder();
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.IsUserLoggedIn$outVars"))());
                javaScript1JSResult.value = OS.Logger.startActiveSpan("JavaScript1", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "JavaScript1");
                        span.setAttribute("outsystems.function.key", "30792613-f9b3-45c4-831a-fe5d2267aff7");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(PartnersHub_controller_IsUserLoggedIn_JavaScript1JS, "JavaScript1", "IsUserLoggedIn", {
                            isLoggedIn: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                        }, function($parameters) {
                            var jsNodeResult = new(controller.constructor.getVariableGroupType("PartnersHub.IsUserLoggedIn$javaScript1JSResult"))();
                            jsNodeResult.isLoggedInOut = OS.DataConversion.JSNodeParamConverter.from($parameters.isLoggedIn, OS.DataTypes.DataTypes.Boolean);
                            return jsNodeResult;
                        }, {}, {});
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 1);
                // isLoggedIn = JavaScript1.isLoggedIn
                outVars.value.isLoggedInOut = javaScript1JSResult.value.isLoggedInOut;
                return outVars.value;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = PartnersHubController.default;
    PartnersHubController.default.constructor.registerVariableGroupType("PartnersHub.IsUserLoggedIn$javaScript1JSResult", [{
        name: "isLoggedIn",
        attrName: "isLoggedInOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    PartnersHubController.default.constructor.registerVariableGroupType("PartnersHub.IsUserLoggedIn$outVars", [{
        name: "isLoggedIn",
        attrName: "isLoggedInOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    PartnersHubController.default.clientActionProxies.isUserLoggedIn$Action = function() {
        return controller.executeActionInsideJSNode(PartnersHubController.default.isUserLoggedIn$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                isLoggedIn: OS.DataConversion.JSNodeParamConverter.to(actionResults.isLoggedInOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});

define("PartnersHub.controller$IsUserLoggedIn.JavaScript1JS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const token = localStorage.getItem("token");


        $parameters.isLoggedIn = token ? true : false;

    };
});


define("PartnersHub.controller$MountDatadogClient", ["exports", "@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.controller$MountDatadogClient.DatadogScriptJS", "PartnersHub.clientVariables"], function(exports, OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHub_controller_MountDatadogClient_DatadogScriptJS, PartnersHubClientVariables) {
    var OS = OSRuntimeCore;
    PartnersHubController.default.mountDatadogClient$Action = function(callContext) {
        return OS.Logger.startActiveSpan("MountDatadogClient", function(span) {
            if (span) {
                span.setAttribute("code.function", "MountDatadogClient");
                span.setAttribute("outsystems.function.key", "ee445c5c-8318-45b1-9a29-f3b1c36110ce");
                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                OS.Logger.startActiveSpan("DatadogScript", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "DatadogScript");
                        span.setAttribute("outsystems.function.key", "57113530-2fac-4b53-b7b8-f574c80beb3c");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(PartnersHub_controller_MountDatadogClient_DatadogScriptJS, "DatadogScript", "MountDatadogClient", {
                            PRODUCTION_HOSTNAME: OS.DataConversion.JSNodeParamConverter.to(PartnersHubClientVariables.getProductionHostName(), OS.DataTypes.DataTypes.Text),
                            APP_ID: OS.DataConversion.JSNodeParamConverter.to("5c8975a3-ec86-4a64-8a3a-e6888fdde082", OS.DataTypes.DataTypes.Text),
                            CLIENT_TOKEN: OS.DataConversion.JSNodeParamConverter.to("pub08554ab30284600af157441bfb0fa923", OS.DataTypes.DataTypes.Text)
                        }, function($parameters) {}, {}, {});
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 1);
                return;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = PartnersHubController.default;
    PartnersHubController.default.clientActionProxies.mountDatadogClient$Action = function() {
        return controller.executeActionInsideJSNode(PartnersHubController.default.mountDatadogClient$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});

define("PartnersHub.controller$MountDatadogClient.DatadogScriptJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const isProduction = window.location.hostname === $parameters.PRODUCTION_HOSTNAME
        const environment = isProduction ? 'production' : 'staging'
        const version = '1.0.0'


        function loadScript(url, callback) {
            var script = document.createElement('script')
            script.onload = function() {
                if (callback) callback()
            }
            script.src = url
            document.body.appendChild(script)
        }

        // Usage to load the data-dog script
        loadScript("https://www.datadoghq-browser-agent.com/us1/v5/datadog-rum.js", function() {
            window.DD_RUM && window.DD_RUM.init({
                clientToken: $parameters.CLIENT_TOKEN,
                applicationId: $parameters.APP_ID,
                site: 'datadoghq.com',
                service: 'partnershub-os',
                env: environment,
                version: version,
                sessionSampleRate: 100,
                trackUserInteractions: true,
                trackResources: true,
                trackLongTasks: true,
                defaultPrivacyLevel: 'mask-user-input',
            });
        })
    };
});


define("PartnersHub.controller$MountDerivAPIClient", ["exports", "@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.controller$MountDerivAPIClient.JavaScript1JS", "PartnersHub.clientVariables", "PartnersHub.controller$SetDefaultAppId"], function(exports, OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHub_controller_MountDerivAPIClient_JavaScript1JS, PartnersHubClientVariables) {
    var OS = OSRuntimeCore;
    PartnersHubController.default.mountDerivAPIClient$Action = function(callContext) {
        return OS.Logger.startActiveSpan("MountDerivAPIClient", function(span) {
            if (span) {
                span.setAttribute("code.function", "MountDerivAPIClient");
                span.setAttribute("outsystems.function.key", "6f07f858-b9bd-41f1-a94c-eece6553c7ca");
                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                // Execute Action: SetDefaultAppId
                PartnersHubController.default.setDefaultAppId$Action(false, callContext);
                OS.Logger.startActiveSpan("JavaScript1", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "JavaScript1");
                        span.setAttribute("outsystems.function.key", "e9d24500-0bbb-4e3c-b11a-936c5b46bc81");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(PartnersHub_controller_MountDerivAPIClient_JavaScript1JS, "JavaScript1", "MountDerivAPIClient", {
                            WebsocketURL: OS.DataConversion.JSNodeParamConverter.to(PartnersHubClientVariables.getWebsocketURL(), OS.DataTypes.DataTypes.Text)
                        }, function($parameters) {}, {}, {});
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 1);
                return;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = PartnersHubController.default;
    PartnersHubController.default.clientActionProxies.mountDerivAPIClient$Action = function() {
        return controller.executeActionInsideJSNode(PartnersHubController.default.mountDerivAPIClient$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});

define("PartnersHub.controller$MountDerivAPIClient.JavaScript1JS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        var __defProp = Object.defineProperty;
        var __defNormalProp = (obj, key, value) =>
            key in obj ?
            __defProp(obj, key, {
                enumerable: true,
                configurable: true,
                writable: true,
                value
            }) :
            (obj[key] = value);
        var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== 'symbol' ? key + '' : key, value);
        const h = 'deriv.com',
            N = 'deriv.me',
            C = 'deriv.be',
            U = [h, C, N],
            A = typeof window < 'u' && window.location.hostname.split('app.')[1];
        U.includes(A) ? A : h;
        const K = e =>
            Object.keys(e)
            .sort()
            .reduce((t, n) => ((t[n] = e[n]), t), {}),
            be = async e => {
                    const t = new TextEncoder().encode(JSON.stringify(K(e))),
                        n = await crypto.subtle.digest('SHA-256', t);
                    return Array.from(new Uint8Array(n))
                        .map(c => ('00' + c.toString(16)).slice(-2))
                        .join('');
                },
                Ye = /* @__PURE__ */ Object.freeze(
                    /* @__PURE__ */
                    Object.defineProperty({
                            __proto__: null,
                            hashObject: be,
                            sortObjectByKeys: K,
                        },
                        Symbol.toStringTag, {
                            value: 'Module'
                        }
                    )
                );

        function Pe() {
            let e, t;
            return {
                promise: new Promise((r, o) => {
                    (e = r), (t = o);
                }),
                resolve: e,
                reject: t,
            };
        }
        const xe = /* @__PURE__ */ Object.freeze(
            /* @__PURE__ */
            Object.defineProperty({
                    __proto__: null,
                    createPromise: Pe,
                },
                Symbol.toStringTag, {
                    value: 'Module'
                }
            )
        );
        class DerivAPIClient {
            constructor(endpoint, options) {
                __publicField(this, 'websocket');
                __publicField(this, 'requestHandler');
                __publicField(this, 'subscribeHandler');
                __publicField(this, 'req_id');
                __publicField(this, 'waitForWebSocketOpen');
                __publicField(this, 'keepAliveIntervalId', null);
                this.websocket = new WebSocket(endpoint);
                this.req_id = 0;
                this.requestHandler = /* @__PURE__ */ new Map();
                this.subscribeHandler = /* @__PURE__ */ new Map();
                this.waitForWebSocketOpen = xe.createPromise();
                this.websocket.addEventListener('open', e => {
                    if (typeof(options == null ? void 0 : options.onOpen) === 'function') options.onOpen(e);
                    const {
                        resolve
                    } = this.waitForWebSocketOpen;
                    resolve({});
                });
                this.websocket.addEventListener('close', e => {
                    if (typeof(options == null ? void 0 : options.onClose) === 'function') options.onClose(e);
                });
                this.websocket.addEventListener('message', async response => {
                    var _a, _b, _c, _d;
                    const parsedData = JSON.parse(response.data);
                    if (parsedData.subscription || ((_a = parsedData.echo_req) == null ? void 0 : _a.subscribe)) {
                        const {
                            req_id,
                            ...payload
                        } = parsedData.echo_req;
                        const subscribeHash = await Ye.hashObject({
                            ...payload
                        });
                        const matchingHandler = this.subscribeHandler.get(subscribeHash);
                        if (!matchingHandler) return;
                        if (parsedData.error && typeof matchingHandler.onError === 'function') {
                            this.subscribeHandler.delete(subscribeHash);
                            matchingHandler.onError(parsedData.error);
                            return;
                        }
                        matchingHandler.data = parsedData;
                        if ((_b = matchingHandler.subscriptions) == null ? void 0 : _b.size) {
                            matchingHandler.subscriptions.forEach(onData => onData(parsedData));
                        }
                        matchingHandler.subscription_id =
                            ((_c = parsedData == null ? void 0 : parsedData.subscription) == null ? void 0 : _c.id) ?? '';
                    } else if (parsedData) {
                        const id = (_d = parsedData.req_id) == null ? void 0 : _d.toString();
                        const matchingHandler = this.requestHandler.get(id);
                        if (!matchingHandler) return;
                        if (parsedData.error) {
                            matchingHandler.onError(parsedData.error);
                        } else {
                            matchingHandler.onData(parsedData);
                        }
                        this.requestHandler.delete(id);
                    }
                });
                this.keepAlive();
            }
            async send({
                name,
                payload
            }) {
                var _a;
                this.req_id = this.req_id + 1;
                const requestPayload = {
                    [name]: 1,
                    ...(payload ?? {}),
                    req_id: this.req_id
                };
                const matchingRequest = this.requestHandler.get(this.req_id.toString());
                if (matchingRequest) return matchingRequest.promise;
                const {
                    promise,
                    resolve,
                    reject
                } = xe.createPromise();
                const newRequestHandler = {
                    name,
                    onData: data => resolve(data),
                    onError: error => reject(error),
                    promise,
                };
                this.requestHandler.set(this.req_id.toString(), newRequestHandler);
                await ((_a = this.waitForWebSocketOpen) == null ? void 0 : _a.promise);
                try {
                    this.websocket.send(JSON.stringify(requestPayload));
                } catch (error) {
                    if (this.isSocketClosingOrClosed()) {
                        initializeDerivAPIClient(); // Reinitialize WebSocket
                    } else {
                        throw error;
                    }
                }
                return promise;
            }
            async subscribe({
                name,
                payload,
                onData,
                onError
            }) {
                var _a;
                const subscriptionPayload = {
                    [name]: 1,
                    ...(payload ?? {}),
                    subscribe: 1
                };
                const subscriptionHash = await Ye.hashObject(subscriptionPayload);
                const matchingSubscription = this.subscribeHandler.get(subscriptionHash);
                if (!matchingSubscription) {
                    this.req_id = this.req_id + 1;
                    const newSubscriptionHandler = {
                        name,
                        status: 'idle',
                        onError,
                        subscriptions: /* @__PURE__ */ new Map(),
                        subscription_id: '',
                        counter: 1,
                    };
                    newSubscriptionHandler.subscriptions.set(newSubscriptionHandler.counter, onData);
                    this.subscribeHandler.set(subscriptionHash, newSubscriptionHandler);
                    await ((_a = this.waitForWebSocketOpen) == null ? void 0 : _a.promise);
                    try {
                        this.websocket.send(JSON.stringify({
                            ...subscriptionPayload,
                            req_id: this.req_id
                        }));
                    } catch (error) {
                        if (this.isSocketClosingOrClosed()) {
                            initializeDerivAPIClient(); // Reinitialize WebSocket
                        } else {
                            throw error;
                        }
                    }
                    return {
                        id: newSubscriptionHandler.counter,
                        hash: subscriptionHash
                    };
                } else {
                    const currentCounter = matchingSubscription.counter + 1;
                    matchingSubscription.subscriptions.set(currentCounter, onData);
                    matchingSubscription.counter = currentCounter;
                    const matchingHandler = matchingSubscription.subscriptions.get(currentCounter);
                    if (typeof matchingHandler === 'function' && matchingSubscription.data) {
                        matchingHandler(matchingSubscription.data);
                    }
                    return {
                        id: matchingSubscription.counter,
                        hash: subscriptionHash
                    };
                }
            }
            async unsubscribe({
                hash,
                id
            }) {
                var _a;
                const matchingSubscription = this.subscribeHandler.get(hash);
                if (!matchingSubscription) return;
                matchingSubscription.subscriptions.delete(id);
                if (matchingSubscription.subscriptions.size > 0) return;
                const {
                    subscription_id
                } = matchingSubscription;
                await ((_a = this.waitForWebSocketOpen) == null ? void 0 : _a.promise);
                const response = await this.send({
                    name: 'forget',
                    payload: {
                        forget: subscription_id
                    }
                });
                if (response && !response.error) {
                    matchingSubscription.subscriptions.clear();
                    this.subscribeHandler.delete(hash);
                }
            }
            switchConnection() {}
            isSocketClosingOrClosed() {
                return [2, 3].includes(this.websocket.readyState);
            }
            disconnect() {
                if (!this.isSocketClosingOrClosed()) {
                    this.websocket.close();
                }
            }
            cleanup() {
                this.requestHandler.clear();
                this.subscribeHandler.clear();
                this.disconnect();
            }
            keepAlive(interval = 30000) {
                if (this.keepAliveIntervalId) {
                    clearInterval(this.keepAliveIntervalId);
                }
                this.keepAliveIntervalId = setInterval(async () => {
                    await this.send({
                        name: 'ping'
                    });
                }, interval);
            }
        }

        (function initializeDerivAPIClient() {
            if (!window.DerivAPIClient) {
                window.DerivAPIClient = new DerivAPIClient($parameters.WebsocketURL);
            }
        })();

        // Trigger point to reload the page if WebSocket is closed
        function triggerWebSocketInitialization() {
            if (window.DerivAPIClient.isSocketClosingOrClosed()) {
                window.location.reload();
            }
        }

        // Setting a periodic check every 10 seconds
        setInterval(triggerWebSocketInitialization, 10000);

    };
});


define("PartnersHub.controller$MountLiveChat", ["exports", "@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "RESTAPIWebsocket.model", "PartnersHub.controller$MountLiveChat.JavaScript1JS", "PartnersHub.clientVariables", "RESTAPIWebsocket.model$ST_5fc2e4a935064c1413d6e989e87decd2Structure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocket"], function(exports, OSRuntimeCore, PartnersHubModel, PartnersHubController, RESTAPIWebsocketModel, PartnersHub_controller_MountLiveChat_JavaScript1JS, PartnersHubClientVariables) {
    var OS = OSRuntimeCore;
    PartnersHubController.default.mountLiveChat$Action = function(getSettingsResponseIn, callContext) {
        return OS.Logger.startActiveSpan("MountLiveChat", function(span) {
            if (span) {
                span.setAttribute("code.function", "MountLiveChat");
                span.setAttribute("outsystems.function.key", "3ff25a2a-8f76-454d-8ec6-062d4d807c87");
                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.MountLiveChat$vars"))());
                vars.value.getSettingsResponseInLocal = getSettingsResponseIn.clone();
                OS.Logger.startActiveSpan("JavaScript1", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "JavaScript1");
                        span.setAttribute("outsystems.function.key", "2d7dc4fe-b269-4192-b977-06aa9ab914a1");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(PartnersHub_controller_MountLiveChat_JavaScript1JS, "JavaScript1", "MountLiveChat", {
                            FullName: OS.DataConversion.JSNodeParamConverter.to(((vars.value.getSettingsResponseInLocal.get_settingsAttr.first_nameAttr + " ") + vars.value.getSettingsResponseInLocal.get_settingsAttr.last_nameAttr), OS.DataTypes.DataTypes.Text),
                            Email: OS.DataConversion.JSNodeParamConverter.to(vars.value.getSettingsResponseInLocal.get_settingsAttr.emailAttr, OS.DataTypes.DataTypes.Text)
                        }, function($parameters) {}, {}, {});
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 1);
                return;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = PartnersHubController.default;
    PartnersHubController.default.constructor.registerVariableGroupType("PartnersHub.MountLiveChat$vars", [{
        name: "GetSettingsResponse",
        attrName: "getSettingsResponseInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketModel.ST_5fc2e4a935064c1413d6e989e87decd2Structure();
        },
        complexType: RESTAPIWebsocketModel.ST_5fc2e4a935064c1413d6e989e87decd2Structure
    }]);
    PartnersHubController.default.clientActionProxies.mountLiveChat$Action = function(getSettingsResponseIn) {
        getSettingsResponseIn = (getSettingsResponseIn === undefined) ? new RESTAPIWebsocketModel.ST_5fc2e4a935064c1413d6e989e87decd2Structure() : getSettingsResponseIn;
        return controller.executeActionInsideJSNode(PartnersHubController.default.mountLiveChat$Action.bind(controller, getSettingsResponseIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});

define("PartnersHub.controller$MountLiveChat.JavaScript1JS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        if (!window.LiveChatWidget) {
            window.__lc = window.__lc || {};
            window.__lc.license = 12049137;
            window.__lc.asyncInit = true;
            (function(n, t, c) {
                function i(n) {
                    return e._h ? e._h.apply(null, n) : e._q.push(n);
                }
                var e = {
                    _q: [],
                    _h: null,
                    _v: '2.0',
                    on: function() {
                        i(['on', c.call(arguments)]);
                    },
                    once: function() {
                        i(['once', c.call(arguments)]);
                    },
                    off: function() {
                        i(['off', c.call(arguments)]);
                    },
                    get: function() {
                        if (!e._h) throw new Error('[LiveChatWidget] You can’t use getters before load.');
                        return i(['get', c.call(arguments)]);
                    },
                    call: function() {
                        i(['call', c.call(arguments)]);
                    },
                    init: function() {
                        var n = t.createElement('script');
                        n.async = true;
                        n.type = 'text/javascript';
                        n.src = 'https://cdn.livechatinc.com/tracking.js';
                        t.head.appendChild(n);
                    },
                };
                !n.__lc.asyncInit && e.init();
                n.LiveChatWidget = n.LiveChatWidget || e;
            })(window, document, [].slice);

            window.LiveChatWidget.init();
            window.LiveChatWidget.on('ready', function() {
                if (window.LiveChatWidget && typeof window.LiveChatWidget.call === 'function') {
                    window.LiveChatWidget.call('set_customer_email', $parameters.Email);
                    window.LiveChatWidget.call('set_customer_name', $parameters.FullName);
                }
            });
        }

    };
});


define("PartnersHub.controller$NextStepReal", ["exports", "@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.clientVariables", "PartnersHub.controller$GetHeaderTitle", "PartnersHub.controller$RealSignupNextStepProgressBar", "PartnersHub.controller$RealSignupNextStep"], function(exports, OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubClientVariables) {
    var OS = OSRuntimeCore;
    PartnersHubController.default.nextStepReal$Action = function(stepCountIn, progressCountIn, callContext) {
        return OS.Logger.startActiveSpan("NextStepReal", function(span) {
            if (span) {
                span.setAttribute("code.function", "NextStepReal");
                span.setAttribute("outsystems.function.key", "52a7bc5b-6e01-4764-b2bf-3e030cc9ef38");
                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.NextStepReal$vars"))());
                vars.value.stepCountInLocal = stepCountIn;
                vars.value.progressCountInLocal = progressCountIn;
                // Execute Action: RealSignupNextStep
                PartnersHubController.default.realSignupNextStep$Action(vars.value.stepCountInLocal, callContext);
                // Execute Action: RealSignupNextStepProgressBar
                PartnersHubController.default.realSignupNextStepProgressBar$Action(vars.value.progressCountInLocal, callContext);
                // Execute Action: GetHeaderTitle
                PartnersHubController.default.getHeaderTitle$Action(callContext);
                return;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = PartnersHubController.default;
    PartnersHubController.default.constructor.registerVariableGroupType("PartnersHub.NextStepReal$vars", [{
        name: "StepCount",
        attrName: "stepCountInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Integer,
        defaultValue: function() {
            return 1;
        }
    }, {
        name: "ProgressCount",
        attrName: "progressCountInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Integer,
        defaultValue: function() {
            return OS.BuiltinFunctions.decimalToInteger(OS.BuiltinFunctions.trunc((new OS.DataTypes.Decimal("12.5"))));
        }
    }]);
    PartnersHubController.default.clientActionProxies.nextStepReal$Action = function(stepCountIn, progressCountIn) {
        stepCountIn = (stepCountIn === undefined) ? 1 : stepCountIn;
        progressCountIn = (progressCountIn === undefined) ? (new OS.DataTypes.Decimal("12.5")) : progressCountIn;
        return controller.executeActionInsideJSNode(PartnersHubController.default.nextStepReal$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(stepCountIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(progressCountIn, OS.DataTypes.DataTypes.Integer)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});


define("PartnersHub.controller$RealSignupNextStep", ["exports", "@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.clientVariables", "PartnersHub.controller$GetHeaderTitle"], function(exports, OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubClientVariables) {
    var OS = OSRuntimeCore;
    PartnersHubController.default.realSignupNextStep$Action = function(stepCountIn, callContext) {
        return OS.Logger.startActiveSpan("RealSignupNextStep", function(span) {
            if (span) {
                span.setAttribute("code.function", "RealSignupNextStep");
                span.setAttribute("outsystems.function.key", "a5e18e4d-cb4f-4acb-bbe0-eeb52532cf71");
                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.RealSignupNextStep$vars"))());
                vars.value.stepCountInLocal = stepCountIn;
                // RealSignupCurrentStep = If
                PartnersHubClientVariables.setRealSignupCurrentStep((((PartnersHubClientVariables.getRealSignupCurrentStep() === 7)) ? (7) : ((PartnersHubClientVariables.getRealSignupCurrentStep() + vars.value.stepCountInLocal))));
                // Execute Action: GetHeaderTitle
                PartnersHubController.default.getHeaderTitle$Action(callContext);
                return;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = PartnersHubController.default;
    PartnersHubController.default.constructor.registerVariableGroupType("PartnersHub.RealSignupNextStep$vars", [{
        name: "StepCount",
        attrName: "stepCountInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Integer,
        defaultValue: function() {
            return 1;
        }
    }]);
    PartnersHubController.default.clientActionProxies.realSignupNextStep$Action = function(stepCountIn) {
        stepCountIn = (stepCountIn === undefined) ? 1 : stepCountIn;
        return controller.executeActionInsideJSNode(PartnersHubController.default.realSignupNextStep$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(stepCountIn, OS.DataTypes.DataTypes.Integer)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});


define("PartnersHub.controller$RealSignupNextStepProgressBar", ["exports", "@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.clientVariables"], function(exports, OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubClientVariables) {
    var OS = OSRuntimeCore;
    PartnersHubController.default.realSignupNextStepProgressBar$Action = function(countIn, callContext) {
        return OS.Logger.startActiveSpan("RealSignupNextStepProgressBar", function(span) {
            if (span) {
                span.setAttribute("code.function", "RealSignupNextStepProgressBar");
                span.setAttribute("outsystems.function.key", "34ec0af5-7237-475e-bcc5-2ab5c7a1097c");
                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.RealSignupNextStepProgressBar$vars"))());
                vars.value.countInLocal = countIn;
                // Count = If
                vars.value.countInLocal = ((PartnersHubClientVariables.getRealSignupIsIDVSupported()) ? (13) : (15));
                // ProgressBarLength = If
                PartnersHubClientVariables.setProgressBarLength((((PartnersHubClientVariables.getProgressBarLength() < vars.value.maxCountVar)) ? ((PartnersHubClientVariables.getProgressBarLength() + (((PartnersHubClientVariables.getRealSignupIsIDVSupported() === false)) ? (15) : (vars.value.countInLocal)))) : (vars.value.maxCountVar)));
                return;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = PartnersHubController.default;
    PartnersHubController.default.constructor.registerVariableGroupType("PartnersHub.RealSignupNextStepProgressBar$vars", [{
        name: "Count",
        attrName: "countInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Integer,
        defaultValue: function() {
            return OS.BuiltinFunctions.decimalToInteger(OS.BuiltinFunctions.trunc((new OS.DataTypes.Decimal("12.5"))));
        }
    }, {
        name: "MaxCount",
        attrName: "maxCountVar",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Integer,
        defaultValue: function() {
            return 100;
        }
    }]);
    PartnersHubController.default.clientActionProxies.realSignupNextStepProgressBar$Action = function(countIn) {
        countIn = (countIn === undefined) ? (new OS.DataTypes.Decimal("12.5")) : countIn;
        return controller.executeActionInsideJSNode(PartnersHubController.default.realSignupNextStepProgressBar$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(countIn, OS.DataTypes.DataTypes.Integer)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});


define("PartnersHub.controller$RealSignupPreviousStep", ["exports", "@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.clientVariables"], function(exports, OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubClientVariables) {
    var OS = OSRuntimeCore;
    PartnersHubController.default.realSignupPreviousStep$Action = function(stepCountIn, callContext) {
        return OS.Logger.startActiveSpan("RealSignupPreviousStep", function(span) {
            if (span) {
                span.setAttribute("code.function", "RealSignupPreviousStep");
                span.setAttribute("outsystems.function.key", "90ec090f-b8a5-4ead-997d-c9a6995e1bc8");
                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.RealSignupPreviousStep$vars"))());
                vars.value.stepCountInLocal = stepCountIn;
                // RealSignupCurrentStep = If
                PartnersHubClientVariables.setRealSignupCurrentStep((((PartnersHubClientVariables.getRealSignupCurrentStep() === 0)) ? (0) : ((PartnersHubClientVariables.getRealSignupCurrentStep() - vars.value.stepCountInLocal))));
                return;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = PartnersHubController.default;
    PartnersHubController.default.constructor.registerVariableGroupType("PartnersHub.RealSignupPreviousStep$vars", [{
        name: "StepCount",
        attrName: "stepCountInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Integer,
        defaultValue: function() {
            return 1;
        }
    }]);
    PartnersHubController.default.clientActionProxies.realSignupPreviousStep$Action = function(stepCountIn) {
        stepCountIn = (stepCountIn === undefined) ? 1 : stepCountIn;
        return controller.executeActionInsideJSNode(PartnersHubController.default.realSignupPreviousStep$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(stepCountIn, OS.DataTypes.DataTypes.Integer)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});


define("PartnersHub.controller$RealSignupPreviousStepProgressBar", ["exports", "@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.clientVariables"], function(exports, OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubClientVariables) {
    var OS = OSRuntimeCore;
    PartnersHubController.default.realSignupPreviousStepProgressBar$Action = function(countIn, callContext) {
        return OS.Logger.startActiveSpan("RealSignupPreviousStepProgressBar", function(span) {
            if (span) {
                span.setAttribute("code.function", "RealSignupPreviousStepProgressBar");
                span.setAttribute("outsystems.function.key", "0f4d57e5-e876-428d-b17e-9f2fed4ac6a0");
                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.RealSignupPreviousStepProgressBar$vars"))());
                vars.value.countInLocal = countIn;
                // ProgressBarLength = If
                PartnersHubClientVariables.setProgressBarLength((((PartnersHubClientVariables.getProgressBarLength() > vars.value.minCountVar)) ? ((PartnersHubClientVariables.getProgressBarLength() - (((PartnersHubClientVariables.getRealSignupIsIDVSupported() === false)) ? (15) : (vars.value.countInLocal)))) : (vars.value.minCountVar)));
                return;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = PartnersHubController.default;
    PartnersHubController.default.constructor.registerVariableGroupType("PartnersHub.RealSignupPreviousStepProgressBar$vars", [{
        name: "Count",
        attrName: "countInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Integer,
        defaultValue: function() {
            return OS.BuiltinFunctions.decimalToInteger(OS.BuiltinFunctions.trunc((new OS.DataTypes.Decimal("12.5"))));
        }
    }, {
        name: "MinCount",
        attrName: "minCountVar",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Integer,
        defaultValue: function() {
            return 0;
        }
    }]);
    PartnersHubController.default.clientActionProxies.realSignupPreviousStepProgressBar$Action = function(countIn) {
        countIn = (countIn === undefined) ? (new OS.DataTypes.Decimal("12.5")) : countIn;
        return controller.executeActionInsideJSNode(PartnersHubController.default.realSignupPreviousStepProgressBar$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(countIn, OS.DataTypes.DataTypes.Integer)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});


define("PartnersHub.controller$RealSignupResetStep", ["exports", "@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.clientVariables"], function(exports, OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubClientVariables) {
    var OS = OSRuntimeCore;
    PartnersHubController.default.realSignupResetStep$Action = function(callContext) {
        return OS.Logger.startActiveSpan("RealSignupResetStep", function(span) {
            if (span) {
                span.setAttribute("code.function", "RealSignupResetStep");
                span.setAttribute("outsystems.function.key", "76634bca-a7b9-42fc-93ec-390aa3cc18de");
                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                // RealSignupCurrentStep = 0
                PartnersHubClientVariables.setRealSignupCurrentStep(0);
                return;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = PartnersHubController.default;
    PartnersHubController.default.clientActionProxies.realSignupResetStep$Action = function() {
        return controller.executeActionInsideJSNode(PartnersHubController.default.realSignupResetStep$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});


define("PartnersHub.controller$RedirectToOauth", ["exports", "@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.controller$RedirectToOauth.JavaScript1JS", "PartnersHub.clientVariables"], function(exports, OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHub_controller_RedirectToOauth_JavaScript1JS, PartnersHubClientVariables) {
    var OS = OSRuntimeCore;
    PartnersHubController.default.redirectToOauth$Action = function(callContext) {
        return OS.Logger.startActiveSpan("RedirectToOauth", function(span) {
            if (span) {
                span.setAttribute("code.function", "RedirectToOauth");
                span.setAttribute("outsystems.function.key", "0da61810-c8b5-4f65-aa6b-1bbc4ffcf6f9");
                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                OS.Logger.startActiveSpan("JavaScript1", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "JavaScript1");
                        span.setAttribute("outsystems.function.key", "34f9e75e-2b47-4a9b-bb66-62ca8f4a2097");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(PartnersHub_controller_RedirectToOauth_JavaScript1JS, "JavaScript1", "RedirectToOauth", {
                            CurrentServer: OS.DataConversion.JSNodeParamConverter.to(PartnersHubClientVariables.getServer(), OS.DataTypes.DataTypes.Text),
                            CurrentAppId: OS.DataConversion.JSNodeParamConverter.to(PartnersHubClientVariables.getAppId(), OS.DataTypes.DataTypes.Text)
                        }, function($parameters) {}, {}, {});
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 1);
                return;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = PartnersHubController.default;
    PartnersHubController.default.clientActionProxies.redirectToOauth$Action = function() {
        return controller.executeActionInsideJSNode(PartnersHubController.default.redirectToOauth$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});

define("PartnersHub.controller$RedirectToOauth.JavaScript1JS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const validServers = ['green.derivws.com', 'red.derivws.com', 'blue.derivws.com'];

        const isOAuthServer = validServers.includes($parameters.CurrentServer);

        const oauthServer = isOAuthServer ? 'oauth.deriv.com' : $parameters.CurrentServer;

        window.location.href = `https://${oauthServer}/oauth2/authorize?app_id=${$parameters.CurrentAppId}&l=EN&brand=deriv`;

    };
});


define("PartnersHub.controller$RudderstackIdentifyEvent", ["exports", "@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.controller$RudderstackIdentifyEvent.JavaScript1JS", "PartnersHub.clientVariables"], function(exports, OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHub_controller_RudderstackIdentifyEvent_JavaScript1JS, PartnersHubClientVariables) {
    var OS = OSRuntimeCore;
    PartnersHubController.default.rudderstackIdentifyEvent$Action = function(callContext) {
        return OS.Logger.startActiveSpan("RudderstackIdentifyEvent", function(span) {
            if (span) {
                span.setAttribute("code.function", "RudderstackIdentifyEvent");
                span.setAttribute("outsystems.function.key", "b77a8b1f-9e23-4b04-9e5a-3c2a47943a74");
                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                OS.Logger.startActiveSpan("JavaScript1", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "JavaScript1");
                        span.setAttribute("outsystems.function.key", "0be5af17-c8f0-47e8-9c9d-4c5dff2988ac");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(PartnersHub_controller_RudderstackIdentifyEvent_JavaScript1JS, "JavaScript1", "RudderstackIdentifyEvent", null, function($parameters) {}, {}, {});
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 1);
                return;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = PartnersHubController.default;
    PartnersHubController.default.clientActionProxies.rudderstackIdentifyEvent$Action = function() {
        return controller.executeActionInsideJSNode(PartnersHubController.default.rudderstackIdentifyEvent$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});

define("PartnersHub.controller$RudderstackIdentifyEvent.JavaScript1JS", [], function() {
    return function($actions, $roles, $public) {
        const Analytics = window?.Analytics?.Analytics
        const userId = localStorage.getItem('active_user_id')

        if (Analytics) {
            Analytics.identifyEvent(userId)
        }
    };
});


define("PartnersHub.controller$RudderstackTrackEvent", ["exports", "@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.controller$RudderstackTrackEvent.JavaScript1JS", "PartnersHub.clientVariables", "PartnersHub.model$ST_23ff1d290ec4691b1c668ad437100cd0Structure"], function(exports, OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHub_controller_RudderstackTrackEvent_JavaScript1JS, PartnersHubClientVariables) {
    var OS = OSRuntimeCore;
    PartnersHubController.default.rudderstackTrackEvent$Action = function(payloadIn, eventNameIn, callContext) {
        return OS.Logger.startActiveSpan("RudderstackTrackEvent", function(span) {
            if (span) {
                span.setAttribute("code.function", "RudderstackTrackEvent");
                span.setAttribute("outsystems.function.key", "92df8169-4a12-4059-a54c-91967541005d");
                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.RudderstackTrackEvent$vars"))());
                vars.value.payloadInLocal = payloadIn.clone();
                vars.value.eventNameInLocal = eventNameIn;
                var jSONSerialize1Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                // JSON Serialize: JSONSerialize1
                jSONSerialize1Var.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.payloadInLocal, false, false);
                OS.Logger.startActiveSpan("JavaScript1", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "JavaScript1");
                        span.setAttribute("outsystems.function.key", "c0f6183a-2ac0-4ccf-8234-9a6347f7695a");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(PartnersHub_controller_RudderstackTrackEvent_JavaScript1JS, "JavaScript1", "RudderstackTrackEvent", {
                            eventName: OS.DataConversion.JSNodeParamConverter.to(vars.value.eventNameInLocal, OS.DataTypes.DataTypes.Text),
                            isMobile: OS.DataConversion.JSNodeParamConverter.to(PartnersHubClientVariables.getIsMobile(), OS.DataTypes.DataTypes.Boolean),
                            payload: OS.DataConversion.JSNodeParamConverter.to(jSONSerialize1Var.value.jSONOut, OS.DataTypes.DataTypes.Text)
                        }, function($parameters) {}, {}, {});
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 1);
                return;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = PartnersHubController.default;
    PartnersHubController.default.constructor.registerVariableGroupType("PartnersHub.RudderstackTrackEvent$vars", [{
        name: "Payload",
        attrName: "payloadInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new PartnersHubModel.ST_23ff1d290ec4691b1c668ad437100cd0Structure();
        },
        complexType: PartnersHubModel.ST_23ff1d290ec4691b1c668ad437100cd0Structure
    }, {
        name: "EventName",
        attrName: "eventNameInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    PartnersHubController.default.clientActionProxies.rudderstackTrackEvent$Action = function(payloadIn, eventNameIn) {
        payloadIn = (payloadIn === undefined) ? new PartnersHubModel.ST_23ff1d290ec4691b1c668ad437100cd0Structure() : payloadIn;
        eventNameIn = (eventNameIn === undefined) ? "" : eventNameIn;
        return controller.executeActionInsideJSNode(PartnersHubController.default.rudderstackTrackEvent$Action.bind(controller, payloadIn, OS.DataConversion.JSNodeParamConverter.from(eventNameIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});

define("PartnersHub.controller$RudderstackTrackEvent.JavaScript1JS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const Analytics = window?.Analytics?.Analytics
        const userId = localStorage.getItem('active_user_id')
        const deviceType = $parameters.isMobile ? 'mobile' : 'desktop'
        const loginId = localStorage.getItem('loginId') || ''

        const matchesLoginId = loginId.match(/[a-zA-Z]+(?=\d)/)
        const accountType = matchesLoginId ? matchesLoginId[0] : null
        const payload = $parameters.payload ? JSON.parse($parameters.payload) : {};

        if (Analytics) {
            Analytics.trackEvent($parameters.eventName, {
                deviceType,
                accountType,
                ...payload
            })
        }
    };
});


define("PartnersHub.controller$SendAuthorize", ["exports", "@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "RESTAPIWebsocket.model", "PartnersHub.clientVariables", "PartnersHub.model$ST_ce3665169ee165087a4fa593347f539dStructure", "PartnersHub.controller$DerivApiClientSendMessage", "PartnersHub.model$ST_e00c986a2a7690520557f1ea58ae1d82Structure", "RESTAPIWebsocket.model$ST_f502318fbe2f943e6cfbba125766780aStructure", "PartnersHub.referencesHealth", "PartnersHub.referencesHealth$RESTAPIWebsocket", "PartnersHub.model$ST_0a849d490938e0e6be2b66ff11091523Structure"], function(exports, OSRuntimeCore, PartnersHubModel, PartnersHubController, RESTAPIWebsocketModel, PartnersHubClientVariables) {
    var OS = OSRuntimeCore;
    PartnersHubController.default.sendAuthorize$Action = function(payloadIn, callContext) {
        return OS.Logger.startActiveSpan("SendAuthorize", function(span) {
            if (span) {
                span.setAttribute("code.function", "SendAuthorize");
                span.setAttribute("outsystems.function.key", "c229fbad-0572-4a61-b4d1-0aeeb25f067e");
                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.SendAuthorize$vars"))());
                vars.value.payloadInLocal = payloadIn.clone();
                var derivApiClientSendMessageVar = new OS.DataTypes.VariableHolder();
                var jSONSerialize1Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var jSONDeserializeGenericResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(PartnersHubModel.ST_0a849d490938e0e6be2b66ff11091523Structure))());
                var jSONDeserializePostAuthorizeResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketModel.ST_f502318fbe2f943e6cfbba125766780aStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.SendAuthorize$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // JSON Serialize: JSONSerialize1
                    jSONSerialize1Var.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.payloadInLocal, false, false);
                    // Execute Action: DerivApiClientSendMessage
                    return PartnersHubController.default.derivApiClientSendMessage$Action("authorize", jSONSerialize1Var.value.jSONOut, callContext).then(function(value) {
                        derivApiClientSendMessageVar.value = value;
                    }).then(function() {
                        if ((derivApiClientSendMessageVar.value.isErrorOut)) {
                            // IsError = True
                            outVars.value.isErrorOut = true;
                        } else {
                            // JSON Deserialize: JSONDeserializeGenericResponse
                            jSONDeserializeGenericResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(derivApiClientSendMessageVar.value.rawResponseOut, PartnersHubModel.ST_0a849d490938e0e6be2b66ff11091523Structure, false);
                            // IsError = False
                            outVars.value.isErrorOut = false;
                            // JSON Deserialize: JSONDeserializePostAuthorizeResponse
                            jSONDeserializePostAuthorizeResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(derivApiClientSendMessageVar.value.rawResponseOut, RESTAPIWebsocketModel.ST_f502318fbe2f943e6cfbba125766780aStructure, false);
                            // AuthorizeResponse = JSONDeserializePostAuthorizeResponse.Data
                            outVars.value.authorizeResponseOut = jSONDeserializePostAuthorizeResponseVar.value.dataOut;
                        }

                    });
                }).then(function() {
                    return outVars.value;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 1);
    };
    var controller = PartnersHubController.default;
    PartnersHubController.default.constructor.registerVariableGroupType("PartnersHub.SendAuthorize$vars", [{
        name: "Payload",
        attrName: "payloadInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new PartnersHubModel.ST_e00c986a2a7690520557f1ea58ae1d82Structure();
        },
        complexType: PartnersHubModel.ST_e00c986a2a7690520557f1ea58ae1d82Structure
    }]);
    PartnersHubController.default.constructor.registerVariableGroupType("PartnersHub.SendAuthorize$outVars", [{
        name: "AuthorizeResponse",
        attrName: "authorizeResponseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketModel.ST_f502318fbe2f943e6cfbba125766780aStructure();
        },
        complexType: RESTAPIWebsocketModel.ST_f502318fbe2f943e6cfbba125766780aStructure
    }, {
        name: "IsError",
        attrName: "isErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    PartnersHubController.default.clientActionProxies.sendAuthorize$Action = function(payloadIn) {
        payloadIn = (payloadIn === undefined) ? new PartnersHubModel.ST_e00c986a2a7690520557f1ea58ae1d82Structure() : payloadIn;
        return controller.executeActionInsideJSNode(PartnersHubController.default.sendAuthorize$Action.bind(controller, payloadIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                AuthorizeResponse: actionResults.authorizeResponseOut,
                IsError: OS.DataConversion.JSNodeParamConverter.to(actionResults.isErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("PartnersHub.controller$SendPhoneNumberChallenge", ["exports", "@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.clientVariables", "PartnersHub.model$ST_ce3665169ee165087a4fa593347f539dStructure", "PartnersHub.controller$DerivApiClientSendMessage", "PartnersHub.model$ST_b04713a56316d52deeb5eab31f0fde62Structure"], function(exports, OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubClientVariables) {
    var OS = OSRuntimeCore;
    PartnersHubController.default.sendPhoneNumberChallenge$Action = function(phoneNumberChallengePayloadIn, callContext) {
        return OS.Logger.startActiveSpan("SendPhoneNumberChallenge", function(span) {
            if (span) {
                span.setAttribute("code.function", "SendPhoneNumberChallenge");
                span.setAttribute("outsystems.function.key", "b4516a84-1e26-4c10-9092-572e4d3d21ae");
                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.SendPhoneNumberChallenge$vars"))());
                vars.value.phoneNumberChallengePayloadInLocal = phoneNumberChallengePayloadIn.clone();
                var derivApiClientSendMessageVar = new OS.DataTypes.VariableHolder();
                var jSONSerialize1Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.SendPhoneNumberChallenge$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // JSON Serialize: JSONSerialize1
                    jSONSerialize1Var.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.phoneNumberChallengePayloadInLocal, false, false);
                    // Execute Action: DerivApiClientSendMessage
                    return PartnersHubController.default.derivApiClientSendMessage$Action("phone_number_challenge", jSONSerialize1Var.value.jSONOut, callContext).then(function(value) {
                        derivApiClientSendMessageVar.value = value;
                    }).then(function() {
                        // ErrorCode = DerivApiClientSendMessage.Error.code
                        outVars.value.errorCodeOut = derivApiClientSendMessageVar.value.errorOut.codeAttr;
                        // ErrorMessage = DerivApiClientSendMessage.Error.message
                        outVars.value.errorMessageOut = derivApiClientSendMessageVar.value.errorOut.messageAttr;
                        // IsError = DerivApiClientSendMessage.IsError
                        outVars.value.isErrorOut = derivApiClientSendMessageVar.value.isErrorOut;
                    });
                }).then(function() {
                    return outVars.value;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 1);
    };
    var controller = PartnersHubController.default;
    PartnersHubController.default.constructor.registerVariableGroupType("PartnersHub.SendPhoneNumberChallenge$vars", [{
        name: "PhoneNumberChallengePayload",
        attrName: "phoneNumberChallengePayloadInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new PartnersHubModel.ST_b04713a56316d52deeb5eab31f0fde62Structure();
        },
        complexType: PartnersHubModel.ST_b04713a56316d52deeb5eab31f0fde62Structure
    }]);
    PartnersHubController.default.constructor.registerVariableGroupType("PartnersHub.SendPhoneNumberChallenge$outVars", [{
        name: "ErrorCode",
        attrName: "errorCodeOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "ErrorMessage",
        attrName: "errorMessageOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "IsError",
        attrName: "isErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    PartnersHubController.default.clientActionProxies.sendPhoneNumberChallenge$Action = function(phoneNumberChallengePayloadIn) {
        phoneNumberChallengePayloadIn = (phoneNumberChallengePayloadIn === undefined) ? new PartnersHubModel.ST_b04713a56316d52deeb5eab31f0fde62Structure() : phoneNumberChallengePayloadIn;
        return controller.executeActionInsideJSNode(PartnersHubController.default.sendPhoneNumberChallenge$Action.bind(controller, phoneNumberChallengePayloadIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                ErrorCode: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorCodeOut, OS.DataTypes.DataTypes.Text),
                ErrorMessage: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorMessageOut, OS.DataTypes.DataTypes.Text),
                IsError: OS.DataConversion.JSNodeParamConverter.to(actionResults.isErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("PartnersHub.controller$SendPhoneNumberVerify", ["exports", "@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.clientVariables", "PartnersHub.model$ST_ce3665169ee165087a4fa593347f539dStructure", "PartnersHub.controller$DerivApiClientSendMessage", "PartnersHub.model$ST_1b66e77b43cfa957e304643e93df7a64Structure"], function(exports, OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubClientVariables) {
    var OS = OSRuntimeCore;
    PartnersHubController.default.sendPhoneNumberVerify$Action = function(phoneNumberVerifyPayloadIn, callContext) {
        return OS.Logger.startActiveSpan("SendPhoneNumberVerify", function(span) {
            if (span) {
                span.setAttribute("code.function", "SendPhoneNumberVerify");
                span.setAttribute("outsystems.function.key", "a0cf7ca0-865e-495f-b947-1fb0bbb9ccdd");
                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.SendPhoneNumberVerify$vars"))());
                vars.value.phoneNumberVerifyPayloadInLocal = phoneNumberVerifyPayloadIn.clone();
                var derivApiClientSendMessageVar = new OS.DataTypes.VariableHolder();
                var jSONSerialize1Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.SendPhoneNumberVerify$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // JSON Serialize: JSONSerialize1
                    jSONSerialize1Var.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.phoneNumberVerifyPayloadInLocal, false, false);
                    // Execute Action: DerivApiClientSendMessage
                    return PartnersHubController.default.derivApiClientSendMessage$Action("phone_number_verify", jSONSerialize1Var.value.jSONOut, callContext).then(function(value) {
                        derivApiClientSendMessageVar.value = value;
                    }).then(function() {
                        // ErrorCode = DerivApiClientSendMessage.Error.code
                        outVars.value.errorCodeOut = derivApiClientSendMessageVar.value.errorOut.codeAttr;
                        // ErrorMessage = DerivApiClientSendMessage.Error.message
                        outVars.value.errorMessageOut = derivApiClientSendMessageVar.value.errorOut.messageAttr;
                        // IsError = DerivApiClientSendMessage.IsError
                        outVars.value.isErrorOut = derivApiClientSendMessageVar.value.isErrorOut;
                    });
                }).then(function() {
                    return outVars.value;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 1);
    };
    var controller = PartnersHubController.default;
    PartnersHubController.default.constructor.registerVariableGroupType("PartnersHub.SendPhoneNumberVerify$vars", [{
        name: "PhoneNumberVerifyPayload",
        attrName: "phoneNumberVerifyPayloadInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new PartnersHubModel.ST_1b66e77b43cfa957e304643e93df7a64Structure();
        },
        complexType: PartnersHubModel.ST_1b66e77b43cfa957e304643e93df7a64Structure
    }]);
    PartnersHubController.default.constructor.registerVariableGroupType("PartnersHub.SendPhoneNumberVerify$outVars", [{
        name: "ErrorCode",
        attrName: "errorCodeOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "ErrorMessage",
        attrName: "errorMessageOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "IsError",
        attrName: "isErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    PartnersHubController.default.clientActionProxies.sendPhoneNumberVerify$Action = function(phoneNumberVerifyPayloadIn) {
        phoneNumberVerifyPayloadIn = (phoneNumberVerifyPayloadIn === undefined) ? new PartnersHubModel.ST_1b66e77b43cfa957e304643e93df7a64Structure() : phoneNumberVerifyPayloadIn;
        return controller.executeActionInsideJSNode(PartnersHubController.default.sendPhoneNumberVerify$Action.bind(controller, phoneNumberVerifyPayloadIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                ErrorCode: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorCodeOut, OS.DataTypes.DataTypes.Text),
                ErrorMessage: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorMessageOut, OS.DataTypes.DataTypes.Text),
                IsError: OS.DataConversion.JSNodeParamConverter.to(actionResults.isErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("PartnersHub.controller$SendResetPassword", ["exports", "@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.clientVariables", "PartnersHub.model$ST_ce3665169ee165087a4fa593347f539dStructure", "PartnersHub.controller$DerivApiClientSendMessage", "PartnersHub.model$ST_589441840ccb78b5cd4edd1d387aefc9Structure"], function(exports, OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubClientVariables) {
    var OS = OSRuntimeCore;
    PartnersHubController.default.sendResetPassword$Action = function(resetPasswordPayloadIn, callContext) {
        return OS.Logger.startActiveSpan("SendResetPassword", function(span) {
            if (span) {
                span.setAttribute("code.function", "SendResetPassword");
                span.setAttribute("outsystems.function.key", "8fb8d664-42a1-406f-89a7-3c1ebad2f0b5");
                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.SendResetPassword$vars"))());
                vars.value.resetPasswordPayloadInLocal = resetPasswordPayloadIn.clone();
                var derivApiClientSendMessageVar = new OS.DataTypes.VariableHolder();
                var jSONSerialize1Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.SendResetPassword$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // JSON Serialize: JSONSerialize1
                    jSONSerialize1Var.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.resetPasswordPayloadInLocal, false, false);
                    // Execute Action: DerivApiClientSendMessage
                    return PartnersHubController.default.derivApiClientSendMessage$Action("reset_password", jSONSerialize1Var.value.jSONOut, callContext).then(function(value) {
                        derivApiClientSendMessageVar.value = value;
                    }).then(function() {
                        // ErrorCode = DerivApiClientSendMessage.Error.code
                        outVars.value.errorCodeOut = derivApiClientSendMessageVar.value.errorOut.codeAttr;
                        // ErrorMessage = DerivApiClientSendMessage.Error.message
                        outVars.value.errorMessageOut = derivApiClientSendMessageVar.value.errorOut.messageAttr;
                        // IsError = DerivApiClientSendMessage.IsError
                        outVars.value.isErrorOut = derivApiClientSendMessageVar.value.isErrorOut;
                    });
                }).then(function() {
                    return outVars.value;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 1);
    };
    var controller = PartnersHubController.default;
    PartnersHubController.default.constructor.registerVariableGroupType("PartnersHub.SendResetPassword$vars", [{
        name: "ResetPasswordPayload",
        attrName: "resetPasswordPayloadInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new PartnersHubModel.ST_589441840ccb78b5cd4edd1d387aefc9Structure();
        },
        complexType: PartnersHubModel.ST_589441840ccb78b5cd4edd1d387aefc9Structure
    }]);
    PartnersHubController.default.constructor.registerVariableGroupType("PartnersHub.SendResetPassword$outVars", [{
        name: "ErrorCode",
        attrName: "errorCodeOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "ErrorMessage",
        attrName: "errorMessageOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "IsError",
        attrName: "isErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    PartnersHubController.default.clientActionProxies.sendResetPassword$Action = function(resetPasswordPayloadIn) {
        resetPasswordPayloadIn = (resetPasswordPayloadIn === undefined) ? new PartnersHubModel.ST_589441840ccb78b5cd4edd1d387aefc9Structure() : resetPasswordPayloadIn;
        return controller.executeActionInsideJSNode(PartnersHubController.default.sendResetPassword$Action.bind(controller, resetPasswordPayloadIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                ErrorCode: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorCodeOut, OS.DataTypes.DataTypes.Text),
                ErrorMessage: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorMessageOut, OS.DataTypes.DataTypes.Text),
                IsError: OS.DataConversion.JSNodeParamConverter.to(actionResults.isErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("PartnersHub.controller$SendResidenceList", ["exports", "@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.clientVariables", "PartnersHub.model$ST_ce3665169ee165087a4fa593347f539dStructure", "PartnersHub.controller$DerivApiClientSendMessage", "PartnersHub.model$ST_0be4704c381e15995202804b221a5e3aStructure"], function(exports, OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubClientVariables) {
    var OS = OSRuntimeCore;
    PartnersHubController.default.sendResidenceList$Action = function(callContext) {
        return OS.Logger.startActiveSpan("SendResidenceList", function(span) {
            if (span) {
                span.setAttribute("code.function", "SendResidenceList");
                span.setAttribute("outsystems.function.key", "e85334ce-a9df-40da-82b0-ce4597fa9c78");
                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var derivApiClientSendMessageVar = new OS.DataTypes.VariableHolder();
                var jSONDeserializeResidenceListResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(PartnersHubModel.ST_0be4704c381e15995202804b221a5e3aStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.SendResidenceList$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: DerivApiClientSendMessage
                    return PartnersHubController.default.derivApiClientSendMessage$Action("residence_list", "", callContext).then(function(value) {
                        derivApiClientSendMessageVar.value = value;
                    }).then(function() {
                        // JSON Deserialize: JSONDeserializeResidenceListResponse
                        jSONDeserializeResidenceListResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(derivApiClientSendMessageVar.value.rawResponseOut, PartnersHubModel.ST_0be4704c381e15995202804b221a5e3aStructure, false);
                        // ResidenceListResponse = JSONDeserializeResidenceListResponse.Data
                        outVars.value.residenceListResponseOut = jSONDeserializeResidenceListResponseVar.value.dataOut;
                    });
                }).then(function() {
                    return outVars.value;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 1);
    };
    var controller = PartnersHubController.default;
    PartnersHubController.default.constructor.registerVariableGroupType("PartnersHub.SendResidenceList$outVars", [{
        name: "ResidenceListResponse",
        attrName: "residenceListResponseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new PartnersHubModel.ST_0be4704c381e15995202804b221a5e3aStructure();
        },
        complexType: PartnersHubModel.ST_0be4704c381e15995202804b221a5e3aStructure
    }]);
    PartnersHubController.default.clientActionProxies.sendResidenceList$Action = function() {
        return controller.executeActionInsideJSNode(PartnersHubController.default.sendResidenceList$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                ResidenceListResponse: actionResults.residenceListResponseOut
            };
        });
    };
});


define("PartnersHub.controller$SendSetSettings", ["exports", "@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.clientVariables", "PartnersHub.model$ST_ce3665169ee165087a4fa593347f539dStructure", "PartnersHub.controller$DerivApiClientSendMessage", "PartnersHub.model$ST_7ceca022f8a0e753c145701ba5d76f4eStructure"], function(exports, OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubClientVariables) {
    var OS = OSRuntimeCore;
    PartnersHubController.default.sendSetSettings$Action = function(setSettingsPayloadIn, callContext) {
        return OS.Logger.startActiveSpan("SendSetSettings", function(span) {
            if (span) {
                span.setAttribute("code.function", "SendSetSettings");
                span.setAttribute("outsystems.function.key", "d4f596ba-93c8-4c41-844c-d27e284c1a1b");
                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.SendSetSettings$vars"))());
                vars.value.setSettingsPayloadInLocal = setSettingsPayloadIn.clone();
                var derivApiClientSendMessageVar = new OS.DataTypes.VariableHolder();
                var jSONSerialize1Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.SendSetSettings$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // JSON Serialize: JSONSerialize1
                    jSONSerialize1Var.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.setSettingsPayloadInLocal, false, false);
                    // Execute Action: DerivApiClientSendMessage
                    return PartnersHubController.default.derivApiClientSendMessage$Action("set_settings", jSONSerialize1Var.value.jSONOut, callContext).then(function(value) {
                        derivApiClientSendMessageVar.value = value;
                    }).then(function() {
                        if ((derivApiClientSendMessageVar.value.isErrorOut)) {
                            // ErrorCode = DerivApiClientSendMessage.Error.code
                            outVars.value.errorCodeOut = derivApiClientSendMessageVar.value.errorOut.codeAttr;
                            // ErrorMessage = DerivApiClientSendMessage.Error.message
                            outVars.value.errorMessageOut = derivApiClientSendMessageVar.value.errorOut.messageAttr;
                            // IsError = DerivApiClientSendMessage.IsError
                            outVars.value.isErrorOut = derivApiClientSendMessageVar.value.isErrorOut;
                        }

                    });
                }).then(function() {
                    return outVars.value;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 1);
    };
    var controller = PartnersHubController.default;
    PartnersHubController.default.constructor.registerVariableGroupType("PartnersHub.SendSetSettings$vars", [{
        name: "SetSettingsPayload",
        attrName: "setSettingsPayloadInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new PartnersHubModel.ST_7ceca022f8a0e753c145701ba5d76f4eStructure();
        },
        complexType: PartnersHubModel.ST_7ceca022f8a0e753c145701ba5d76f4eStructure
    }]);
    PartnersHubController.default.constructor.registerVariableGroupType("PartnersHub.SendSetSettings$outVars", [{
        name: "ErrorCode",
        attrName: "errorCodeOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "ErrorMessage",
        attrName: "errorMessageOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "IsError",
        attrName: "isErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    PartnersHubController.default.clientActionProxies.sendSetSettings$Action = function(setSettingsPayloadIn) {
        setSettingsPayloadIn = (setSettingsPayloadIn === undefined) ? new PartnersHubModel.ST_7ceca022f8a0e753c145701ba5d76f4eStructure() : setSettingsPayloadIn;
        return controller.executeActionInsideJSNode(PartnersHubController.default.sendSetSettings$Action.bind(controller, setSettingsPayloadIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                ErrorCode: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorCodeOut, OS.DataTypes.DataTypes.Text),
                ErrorMessage: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorMessageOut, OS.DataTypes.DataTypes.Text),
                IsError: OS.DataConversion.JSNodeParamConverter.to(actionResults.isErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("PartnersHub.controller$SendStatesList", ["exports", "@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.clientVariables", "PartnersHub.model$ST_ce3665169ee165087a4fa593347f539dStructure", "PartnersHub.controller$DerivApiClientSendMessage", "PartnersHub.model$ST_61bad0fb94df4b9f1aa86c41ddff5f0aStructure", "PartnersHub.model$ST_8401e8b399f219fdd97b12284d97703eStructure"], function(exports, OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubClientVariables) {
    var OS = OSRuntimeCore;
    PartnersHubController.default.sendStatesList$Action = function(statesListPayloadIn, callContext) {
        return OS.Logger.startActiveSpan("SendStatesList", function(span) {
            if (span) {
                span.setAttribute("code.function", "SendStatesList");
                span.setAttribute("outsystems.function.key", "c2d3b535-7524-4288-a37a-06c7a96a25bd");
                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.SendStatesList$vars"))());
                vars.value.statesListPayloadInLocal = statesListPayloadIn.clone();
                var derivApiClientSendMessageVar = new OS.DataTypes.VariableHolder();
                var jSONSerialize1Var = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var jSONDeserializeStatesListResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(PartnersHubModel.ST_61bad0fb94df4b9f1aa86c41ddff5f0aStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.SendStatesList$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // JSON Serialize: JSONSerialize1
                    jSONSerialize1Var.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.statesListPayloadInLocal, false, false);
                    // Execute Action: DerivApiClientSendMessage
                    return PartnersHubController.default.derivApiClientSendMessage$Action("states_list", jSONSerialize1Var.value.jSONOut, callContext).then(function(value) {
                        derivApiClientSendMessageVar.value = value;
                    }).then(function() {
                        if ((derivApiClientSendMessageVar.value.isErrorOut)) {
                            // ErrorCode = DerivApiClientSendMessage.Error.code
                            outVars.value.errorCodeOut = derivApiClientSendMessageVar.value.errorOut.codeAttr;
                            // ErrorMessage = DerivApiClientSendMessage.Error.message
                            outVars.value.errorMessageOut = derivApiClientSendMessageVar.value.errorOut.messageAttr;
                            // IsError = DerivApiClientSendMessage.IsError
                            outVars.value.isErrorOut = derivApiClientSendMessageVar.value.isErrorOut;
                        } else {
                            // JSON Deserialize: JSONDeserializeStatesListResponse
                            jSONDeserializeStatesListResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(derivApiClientSendMessageVar.value.rawResponseOut, PartnersHubModel.ST_61bad0fb94df4b9f1aa86c41ddff5f0aStructure, false);
                            // StatesListResponse = JSONDeserializeStatesListResponse.Data
                            outVars.value.statesListResponseOut = jSONDeserializeStatesListResponseVar.value.dataOut;
                        }

                    });
                }).then(function() {
                    return outVars.value;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 1);
    };
    var controller = PartnersHubController.default;
    PartnersHubController.default.constructor.registerVariableGroupType("PartnersHub.SendStatesList$vars", [{
        name: "StatesListPayload",
        attrName: "statesListPayloadInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new PartnersHubModel.ST_8401e8b399f219fdd97b12284d97703eStructure();
        },
        complexType: PartnersHubModel.ST_8401e8b399f219fdd97b12284d97703eStructure
    }]);
    PartnersHubController.default.constructor.registerVariableGroupType("PartnersHub.SendStatesList$outVars", [{
        name: "ErrorCode",
        attrName: "errorCodeOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "ErrorMessage",
        attrName: "errorMessageOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "IsError",
        attrName: "isErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }, {
        name: "StatesListResponse",
        attrName: "statesListResponseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new PartnersHubModel.ST_61bad0fb94df4b9f1aa86c41ddff5f0aStructure();
        },
        complexType: PartnersHubModel.ST_61bad0fb94df4b9f1aa86c41ddff5f0aStructure
    }]);
    PartnersHubController.default.clientActionProxies.sendStatesList$Action = function(statesListPayloadIn) {
        statesListPayloadIn = (statesListPayloadIn === undefined) ? new PartnersHubModel.ST_8401e8b399f219fdd97b12284d97703eStructure() : statesListPayloadIn;
        return controller.executeActionInsideJSNode(PartnersHubController.default.sendStatesList$Action.bind(controller, statesListPayloadIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                ErrorCode: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorCodeOut, OS.DataTypes.DataTypes.Text),
                ErrorMessage: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorMessageOut, OS.DataTypes.DataTypes.Text),
                IsError: OS.DataConversion.JSNodeParamConverter.to(actionResults.isErrorOut, OS.DataTypes.DataTypes.Boolean),
                StatesListResponse: actionResults.statesListResponseOut
            };
        });
    };
});


define("PartnersHub.controller$SendTncApproval", ["exports", "@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.clientVariables", "PartnersHub.model$ST_ce3665169ee165087a4fa593347f539dStructure", "PartnersHub.controller$DerivApiClientSendMessage", "PartnersHub.model$ST_c68ca2b5352eede25365718c29283667Structure"], function(exports, OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubClientVariables) {
    var OS = OSRuntimeCore;
    PartnersHubController.default.sendTncApproval$Action = function(callContext) {
        return OS.Logger.startActiveSpan("SendTncApproval", function(span) {
            if (span) {
                span.setAttribute("code.function", "SendTncApproval");
                span.setAttribute("outsystems.function.key", "dd7c4a21-f18b-4544-ab23-255fb50857a5");
                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var derivApiClientSendMessageVar = new OS.DataTypes.VariableHolder();
                var jSONDeserializeTncApprovalResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(PartnersHubModel.ST_c68ca2b5352eede25365718c29283667Structure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.SendTncApproval$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: DerivApiClientSendMessage
                    return PartnersHubController.default.derivApiClientSendMessage$Action("tnc_approval", "", callContext).then(function(value) {
                        derivApiClientSendMessageVar.value = value;
                    }).then(function() {
                        // JSON Deserialize: JSONDeserializeTncApprovalResponse
                        jSONDeserializeTncApprovalResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(derivApiClientSendMessageVar.value.rawResponseOut, PartnersHubModel.ST_c68ca2b5352eede25365718c29283667Structure, false);
                        // TncApprovalResponse = JSONDeserializeTncApprovalResponse.Data
                        outVars.value.tncApprovalResponseOut = jSONDeserializeTncApprovalResponseVar.value.dataOut;
                    });
                }).then(function() {
                    return outVars.value;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 1);
    };
    var controller = PartnersHubController.default;
    PartnersHubController.default.constructor.registerVariableGroupType("PartnersHub.SendTncApproval$outVars", [{
        name: "TncApprovalResponse",
        attrName: "tncApprovalResponseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new PartnersHubModel.ST_c68ca2b5352eede25365718c29283667Structure();
        },
        complexType: PartnersHubModel.ST_c68ca2b5352eede25365718c29283667Structure
    }]);
    PartnersHubController.default.clientActionProxies.sendTncApproval$Action = function() {
        return controller.executeActionInsideJSNode(PartnersHubController.default.sendTncApproval$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                TncApprovalResponse: actionResults.tncApprovalResponseOut
            };
        });
    };
});


define("PartnersHub.controller$SendVerifyEmail", ["exports", "@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.clientVariables", "PartnersHub.model$ST_ce3665169ee165087a4fa593347f539dStructure", "PartnersHub.controller$DerivApiClientSendMessage", "PartnersHub.model$ST_8ae1180ce44995afc567de3f72e5c712Structure"], function(exports, OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubClientVariables) {
    var OS = OSRuntimeCore;
    PartnersHubController.default.sendVerifyEmail$Action = function(payloadIn, callContext) {
        return OS.Logger.startActiveSpan("SendVerifyEmail", function(span) {
            if (span) {
                span.setAttribute("code.function", "SendVerifyEmail");
                span.setAttribute("outsystems.function.key", "5b59fd65-0a8b-42dc-96c0-86b58a6b3b6b");
                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.SendVerifyEmail$vars"))());
                vars.value.payloadInLocal = payloadIn.clone();
                var derivApiClientSendMessageVar = new OS.DataTypes.VariableHolder();
                var verifyEmailSerializedPayloadVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.SendVerifyEmail$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // JSON Serialize: VerifyEmailSerializedPayload
                    verifyEmailSerializedPayloadVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.payloadInLocal, false, false);
                    // Execute Action: DerivApiClientSendMessage
                    return PartnersHubController.default.derivApiClientSendMessage$Action("verify_email", verifyEmailSerializedPayloadVar.value.jSONOut, callContext).then(function(value) {
                        derivApiClientSendMessageVar.value = value;
                    }).then(function() {
                        // IsError = DerivApiClientSendMessage.IsError
                        outVars.value.isErrorOut = derivApiClientSendMessageVar.value.isErrorOut;
                        // ErrorCode = DerivApiClientSendMessage.Error.code
                        outVars.value.errorCodeOut = derivApiClientSendMessageVar.value.errorOut.codeAttr;
                        // ErrorMessage = DerivApiClientSendMessage.Error.message
                        outVars.value.errorMessageOut = derivApiClientSendMessageVar.value.errorOut.messageAttr;
                    });
                }).then(function() {
                    return outVars.value;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 1);
    };
    var controller = PartnersHubController.default;
    PartnersHubController.default.constructor.registerVariableGroupType("PartnersHub.SendVerifyEmail$vars", [{
        name: "Payload",
        attrName: "payloadInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new PartnersHubModel.ST_8ae1180ce44995afc567de3f72e5c712Structure();
        },
        complexType: PartnersHubModel.ST_8ae1180ce44995afc567de3f72e5c712Structure
    }]);
    PartnersHubController.default.constructor.registerVariableGroupType("PartnersHub.SendVerifyEmail$outVars", [{
        name: "ErrorCode",
        attrName: "errorCodeOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "ErrorMessage",
        attrName: "errorMessageOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "IsError",
        attrName: "isErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    PartnersHubController.default.clientActionProxies.sendVerifyEmail$Action = function(payloadIn) {
        payloadIn = (payloadIn === undefined) ? new PartnersHubModel.ST_8ae1180ce44995afc567de3f72e5c712Structure() : payloadIn;
        return controller.executeActionInsideJSNode(PartnersHubController.default.sendVerifyEmail$Action.bind(controller, payloadIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                ErrorCode: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorCodeOut, OS.DataTypes.DataTypes.Text),
                ErrorMessage: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorMessageOut, OS.DataTypes.DataTypes.Text),
                IsError: OS.DataConversion.JSNodeParamConverter.to(actionResults.isErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("PartnersHub.controller$SendWebsiteStatus", ["exports", "@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.clientVariables", "PartnersHub.model$ST_ce3665169ee165087a4fa593347f539dStructure", "PartnersHub.controller$DerivApiClientSendMessage", "PartnersHub.model$ST_e61d85f6aadd57329cc664ba1d0e64c1Structure"], function(exports, OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubClientVariables) {
    var OS = OSRuntimeCore;
    PartnersHubController.default.sendWebsiteStatus$Action = function(callContext) {
        return OS.Logger.startActiveSpan("SendWebsiteStatus", function(span) {
            if (span) {
                span.setAttribute("code.function", "SendWebsiteStatus");
                span.setAttribute("outsystems.function.key", "df884782-17d7-4aa5-aabb-ed52acf39bf6");
                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var derivApiClientSendMessageVar = new OS.DataTypes.VariableHolder();
                var jSONDeserializeWebsiteStatusResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(PartnersHubModel.ST_e61d85f6aadd57329cc664ba1d0e64c1Structure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.SendWebsiteStatus$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: DerivApiClientSendMessage
                    return PartnersHubController.default.derivApiClientSendMessage$Action("website_status", "", callContext).then(function(value) {
                        derivApiClientSendMessageVar.value = value;
                    }).then(function() {
                        // JSON Deserialize: JSONDeserializeWebsiteStatusResponse
                        jSONDeserializeWebsiteStatusResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(derivApiClientSendMessageVar.value.rawResponseOut, PartnersHubModel.ST_e61d85f6aadd57329cc664ba1d0e64c1Structure, false);
                        // WebsiteStatusResponse = JSONDeserializeWebsiteStatusResponse.Data
                        outVars.value.websiteStatusResponseOut = jSONDeserializeWebsiteStatusResponseVar.value.dataOut;
                    });
                }).then(function() {
                    return outVars.value;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 1);
    };
    var controller = PartnersHubController.default;
    PartnersHubController.default.constructor.registerVariableGroupType("PartnersHub.SendWebsiteStatus$outVars", [{
        name: "WebsiteStatusResponse",
        attrName: "websiteStatusResponseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new PartnersHubModel.ST_e61d85f6aadd57329cc664ba1d0e64c1Structure();
        },
        complexType: PartnersHubModel.ST_e61d85f6aadd57329cc664ba1d0e64c1Structure
    }]);
    PartnersHubController.default.clientActionProxies.sendWebsiteStatus$Action = function() {
        return controller.executeActionInsideJSNode(PartnersHubController.default.sendWebsiteStatus$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                WebsiteStatusResponse: actionResults.websiteStatusResponseOut
            };
        });
    };
});


define("PartnersHub.controller$SetAppId", ["exports", "@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.controller$SetAppId.JavaScript1JS", "PartnersHub.clientVariables", "PartnersHub.controller$SetWebsocketURL"], function(exports, OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHub_controller_SetAppId_JavaScript1JS, PartnersHubClientVariables) {
    var OS = OSRuntimeCore;
    PartnersHubController.default.setAppId$Action = function(appIdIn, callContext) {
        return OS.Logger.startActiveSpan("SetAppId", function(span) {
            if (span) {
                span.setAttribute("code.function", "SetAppId");
                span.setAttribute("outsystems.function.key", "1822d1a0-e2d3-46a3-a907-fddbacdcbc2e");
                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.SetAppId$vars"))());
                vars.value.appIdInLocal = appIdIn;
                // AppId = AppId
                PartnersHubClientVariables.setAppId(vars.value.appIdInLocal);
                OS.Logger.startActiveSpan("JavaScript1", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "JavaScript1");
                        span.setAttribute("outsystems.function.key", "fffefe00-e50f-4935-a146-38990b393c86");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(PartnersHub_controller_SetAppId_JavaScript1JS, "JavaScript1", "SetAppId", {
                            CurrentWebsocketURL: OS.DataConversion.JSNodeParamConverter.to(PartnersHubClientVariables.getWebsocketURL(), OS.DataTypes.DataTypes.Text),
                            AppId: OS.DataConversion.JSNodeParamConverter.to(PartnersHubClientVariables.getAppId(), OS.DataTypes.DataTypes.Text)
                        }, function($parameters) {}, {
                            SetWebsocketURL: PartnersHubController.default.clientActionProxies.setWebsocketURL$Action
                        }, {});
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 1);
                return;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = PartnersHubController.default;
    PartnersHubController.default.constructor.registerVariableGroupType("PartnersHub.SetAppId$vars", [{
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    PartnersHubController.default.clientActionProxies.setAppId$Action = function(appIdIn) {
        appIdIn = (appIdIn === undefined) ? "" : appIdIn;
        return controller.executeActionInsideJSNode(PartnersHubController.default.setAppId$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});

define("PartnersHub.controller$SetAppId.JavaScript1JS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const wsURL = new URL($parameters.CurrentWebsocketURL)
        const params = new URLSearchParams(wsURL)

        params.set("app_id", $parameters.AppId)
        $actions.SetWebsocketURL(wsURL.origin + wsURL.pathname + "?" + params.toString())
    };
});


define("PartnersHub.controller$SetDefaultAppId", ["exports", "@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.controller$SetDefaultAppId.JavaScript1JS", "PartnersHub.clientVariables", "PartnersHub.controller$SetAppId"], function(exports, OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHub_controller_SetDefaultAppId_JavaScript1JS, PartnersHubClientVariables) {
    var OS = OSRuntimeCore;
    PartnersHubController.default.setDefaultAppId$Action = function(isResetDefaultIn, callContext) {
        return OS.Logger.startActiveSpan("SetDefaultAppId", function(span) {
            if (span) {
                span.setAttribute("code.function", "SetDefaultAppId");
                span.setAttribute("outsystems.function.key", "1a53147c-fb59-4b51-b643-9f00a96d1fd7");
                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.SetDefaultAppId$vars"))());
                vars.value.isResetDefaultInLocal = isResetDefaultIn;
                OS.Logger.startActiveSpan("JavaScript1", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "JavaScript1");
                        span.setAttribute("outsystems.function.key", "af55ca9a-2ef3-4ef1-b3cb-1a7d76bbfee6");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(PartnersHub_controller_SetDefaultAppId_JavaScript1JS, "JavaScript1", "SetDefaultAppId", {
                            ProductionHostName: OS.DataConversion.JSNodeParamConverter.to(PartnersHubClientVariables.getProductionHostName(), OS.DataTypes.DataTypes.Text),
                            DefaultStagingAppid: OS.DataConversion.JSNodeParamConverter.to(PartnersHubClientVariables.getStagingAppId(), OS.DataTypes.DataTypes.Text),
                            CurrentAppId: OS.DataConversion.JSNodeParamConverter.to(PartnersHubClientVariables.getAppId(), OS.DataTypes.DataTypes.Text),
                            isReset: OS.DataConversion.JSNodeParamConverter.to(vars.value.isResetDefaultInLocal, OS.DataTypes.DataTypes.Boolean),
                            DefaultProductionAppId: OS.DataConversion.JSNodeParamConverter.to(PartnersHubClientVariables.getProductionAppId(), OS.DataTypes.DataTypes.Text),
                            CurrentWebsocketURL: OS.DataConversion.JSNodeParamConverter.to(PartnersHubClientVariables.getWebsocketURL(), OS.DataTypes.DataTypes.Text)
                        }, function($parameters) {}, {
                            SetAppId: PartnersHubController.default.clientActionProxies.setAppId$Action
                        }, {});
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 1);
                return;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = PartnersHubController.default;
    PartnersHubController.default.constructor.registerVariableGroupType("PartnersHub.SetDefaultAppId$vars", [{
        name: "isResetDefault",
        attrName: "isResetDefaultInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    PartnersHubController.default.clientActionProxies.setDefaultAppId$Action = function(isResetDefaultIn) {
        isResetDefaultIn = (isResetDefaultIn === undefined) ? false : isResetDefaultIn;
        return controller.executeActionInsideJSNode(PartnersHubController.default.setDefaultAppId$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(isResetDefaultIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});

define("PartnersHub.controller$SetDefaultAppId.JavaScript1JS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const host = window.location.host
        const params = new URLSearchParams($parameters.CurrentWebsocketURL)

        if (!$parameters.CurrentAppId || $parameters.isReset) {
            if (host === $parameters.ProductionHostName) {
                // TODO: Create production App ID
                $actions.SetAppId($parameters.DefaultProductionAppId)
            } else {
                $actions.SetAppId($parameters.DefaultStagingAppid)
            }
        }
    };
});


define("PartnersHub.controller$SetIsDesktop", ["exports", "@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.clientVariables"], function(exports, OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubClientVariables) {
    var OS = OSRuntimeCore;
    PartnersHubController.default.setIsDesktop$Action = function(newIsDesktopIn, callContext) {
        return OS.Logger.startActiveSpan("SetIsDesktop", function(span) {
            if (span) {
                span.setAttribute("code.function", "SetIsDesktop");
                span.setAttribute("outsystems.function.key", "1ffce9fa-2626-4fdc-9e83-7e9cdc4972f8");
                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.SetIsDesktop$vars"))());
                vars.value.newIsDesktopInLocal = newIsDesktopIn;
                // IsDesktop = NewIsDesktop
                PartnersHubClientVariables.setIsDesktop(vars.value.newIsDesktopInLocal);
                return;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = PartnersHubController.default;
    PartnersHubController.default.constructor.registerVariableGroupType("PartnersHub.SetIsDesktop$vars", [{
        name: "NewIsDesktop",
        attrName: "newIsDesktopInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    PartnersHubController.default.clientActionProxies.setIsDesktop$Action = function(newIsDesktopIn) {
        newIsDesktopIn = (newIsDesktopIn === undefined) ? false : newIsDesktopIn;
        return controller.executeActionInsideJSNode(PartnersHubController.default.setIsDesktop$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(newIsDesktopIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});


define("PartnersHub.controller$SetIsMobile", ["exports", "@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.clientVariables"], function(exports, OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubClientVariables) {
    var OS = OSRuntimeCore;
    PartnersHubController.default.setIsMobile$Action = function(newIsMobileIn, callContext) {
        return OS.Logger.startActiveSpan("SetIsMobile", function(span) {
            if (span) {
                span.setAttribute("code.function", "SetIsMobile");
                span.setAttribute("outsystems.function.key", "22cc9140-85db-41d8-9437-8b058056f5b7");
                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.SetIsMobile$vars"))());
                vars.value.newIsMobileInLocal = newIsMobileIn;
                // IsMobile = NewIsMobile
                PartnersHubClientVariables.setIsMobile(vars.value.newIsMobileInLocal);
                return;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = PartnersHubController.default;
    PartnersHubController.default.constructor.registerVariableGroupType("PartnersHub.SetIsMobile$vars", [{
        name: "NewIsMobile",
        attrName: "newIsMobileInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    PartnersHubController.default.clientActionProxies.setIsMobile$Action = function(newIsMobileIn) {
        newIsMobileIn = (newIsMobileIn === undefined) ? false : newIsMobileIn;
        return controller.executeActionInsideJSNode(PartnersHubController.default.setIsMobile$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(newIsMobileIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});


define("PartnersHub.controller$SetServer", ["exports", "@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.controller$SetServer.JavaScript1JS", "PartnersHub.clientVariables", "PartnersHub.controller$SetWebsocketURL"], function(exports, OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHub_controller_SetServer_JavaScript1JS, PartnersHubClientVariables) {
    var OS = OSRuntimeCore;
    PartnersHubController.default.setServer$Action = function(serverIn, callContext) {
        return OS.Logger.startActiveSpan("SetServer", function(span) {
            if (span) {
                span.setAttribute("code.function", "SetServer");
                span.setAttribute("outsystems.function.key", "8f04b00b-6a68-4e84-b461-9c7947e2893f");
                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.SetServer$vars"))());
                vars.value.serverInLocal = serverIn;
                // Server = Server
                PartnersHubClientVariables.setServer(vars.value.serverInLocal);
                OS.Logger.startActiveSpan("JavaScript1", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "JavaScript1");
                        span.setAttribute("outsystems.function.key", "45cbedd1-c01f-453f-b526-e539a3d9b969");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(PartnersHub_controller_SetServer_JavaScript1JS, "JavaScript1", "SetServer", {
                            CurrentWebsocketURL: OS.DataConversion.JSNodeParamConverter.to(PartnersHubClientVariables.getWebsocketURL(), OS.DataTypes.DataTypes.Text),
                            Server: OS.DataConversion.JSNodeParamConverter.to(vars.value.serverInLocal, OS.DataTypes.DataTypes.Text)
                        }, function($parameters) {}, {
                            SetWebsocketURL: PartnersHubController.default.clientActionProxies.setWebsocketURL$Action
                        }, {});
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 1);
                return;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = PartnersHubController.default;
    PartnersHubController.default.constructor.registerVariableGroupType("PartnersHub.SetServer$vars", [{
        name: "Server",
        attrName: "serverInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    PartnersHubController.default.clientActionProxies.setServer$Action = function(serverIn) {
        serverIn = (serverIn === undefined) ? "" : serverIn;
        return controller.executeActionInsideJSNode(PartnersHubController.default.setServer$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(serverIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});

define("PartnersHub.controller$SetServer.JavaScript1JS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const wsURL = new URL($parameters.CurrentWebsocketURL)
        wsURL.hostname = $parameters.Server
        wsURL.host = $parameters.Server

        $actions.SetWebsocketURL(wsURL.toString())
    };
});


define("PartnersHub.controller$SetWebsocketURL", ["exports", "@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.clientVariables"], function(exports, OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHubClientVariables) {
    var OS = OSRuntimeCore;
    PartnersHubController.default.setWebsocketURL$Action = function(newWebsocketURLIn, callContext) {
        return OS.Logger.startActiveSpan("SetWebsocketURL", function(span) {
            if (span) {
                span.setAttribute("code.function", "SetWebsocketURL");
                span.setAttribute("outsystems.function.key", "f1ceabd9-3763-4c1a-bcb7-9663b962d24c");
                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("PartnersHub.SetWebsocketURL$vars"))());
                vars.value.newWebsocketURLInLocal = newWebsocketURLIn;
                // WebsocketURL = NewWebsocketURL
                PartnersHubClientVariables.setWebsocketURL(vars.value.newWebsocketURLInLocal);
                return;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = PartnersHubController.default;
    PartnersHubController.default.constructor.registerVariableGroupType("PartnersHub.SetWebsocketURL$vars", [{
        name: "NewWebsocketURL",
        attrName: "newWebsocketURLInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    PartnersHubController.default.clientActionProxies.setWebsocketURL$Action = function(newWebsocketURLIn) {
        newWebsocketURLIn = (newWebsocketURLIn === undefined) ? "" : newWebsocketURLIn;
        return controller.executeActionInsideJSNode(PartnersHubController.default.setWebsocketURL$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(newWebsocketURLIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});


define("PartnersHub.controller$ShowLiveChat", ["exports", "@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.controller$ShowLiveChat.JavaScript1JS", "PartnersHub.clientVariables"], function(exports, OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHub_controller_ShowLiveChat_JavaScript1JS, PartnersHubClientVariables) {
    var OS = OSRuntimeCore;
    PartnersHubController.default.showLiveChat$Action = function(callContext) {
        return OS.Logger.startActiveSpan("ShowLiveChat", function(span) {
            if (span) {
                span.setAttribute("code.function", "ShowLiveChat");
                span.setAttribute("outsystems.function.key", "383d173d-f7e5-4d07-b184-0bce9b3e49f4");
                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                OS.Logger.startActiveSpan("JavaScript1", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "JavaScript1");
                        span.setAttribute("outsystems.function.key", "5e57f7ad-4ea7-41ba-a254-dbb780f42668");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(PartnersHub_controller_ShowLiveChat_JavaScript1JS, "JavaScript1", "ShowLiveChat", null, function($parameters) {}, {}, {});
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 1);
                return;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = PartnersHubController.default;
    PartnersHubController.default.clientActionProxies.showLiveChat$Action = function() {
        return controller.executeActionInsideJSNode(PartnersHubController.default.showLiveChat$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});

define("PartnersHub.controller$ShowLiveChat.JavaScript1JS", [], function() {
    return function($actions, $roles, $public) {
        if (window.LiveChatWidget && typeof window.LiveChatWidget.call === 'function') {
            window.LiveChatWidget.call('maximize');
        }

    };
});


define("PartnersHub.controller$UseDevice", ["exports", "@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller", "PartnersHub.controller$UseDevice.CheckViewportJS", "PartnersHub.controller$UseDevice.SyncIsDesktopMobileJS", "PartnersHub.clientVariables", "PartnersHub.controller$SetIsDesktop", "PartnersHub.controller$SetIsMobile"], function(exports, OSRuntimeCore, PartnersHubModel, PartnersHubController, PartnersHub_controller_UseDevice_CheckViewportJS, PartnersHub_controller_UseDevice_SyncIsDesktopMobileJS, PartnersHubClientVariables) {
    var OS = OSRuntimeCore;
    PartnersHubController.default.useDevice$Action = function(callContext) {
        return OS.Logger.startActiveSpan("UseDevice", function(span) {
            if (span) {
                span.setAttribute("code.function", "UseDevice");
                span.setAttribute("outsystems.function.key", "156013e3-fe1a-4e06-8c95-e1596abee167");
                span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                OS.Logger.startActiveSpan("SyncIsDesktopMobile", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SyncIsDesktopMobile");
                        span.setAttribute("outsystems.function.key", "38e0ce39-a3ef-4f8c-a84a-f0cad38a5458");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(PartnersHub_controller_UseDevice_SyncIsDesktopMobileJS, "SyncIsDesktopMobile", "UseDevice", null, function($parameters) {}, {
                            SetIsDesktop: PartnersHubController.default.clientActionProxies.setIsDesktop$Action,
                            SetIsMobile: PartnersHubController.default.clientActionProxies.setIsMobile$Action
                        }, {});
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 1);
                OS.Logger.startActiveSpan("CheckViewport", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "CheckViewport");
                        span.setAttribute("outsystems.function.key", "1358bf73-35c8-4d44-9d40-7d330f352a44");
                        span.setAttribute("outsystems.function.owner.name", "PartnersHub");
                        span.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(PartnersHub_controller_UseDevice_CheckViewportJS, "CheckViewport", "UseDevice", null, function($parameters) {}, {
                            SetIsDesktop: PartnersHubController.default.clientActionProxies.setIsDesktop$Action,
                            SetIsMobile: PartnersHubController.default.clientActionProxies.setIsMobile$Action
                        }, {});
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 1);
                return;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = PartnersHubController.default;
    PartnersHubController.default.clientActionProxies.useDevice$Action = function() {
        return controller.executeActionInsideJSNode(PartnersHubController.default.useDevice$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});

define("PartnersHub.controller$UseDevice.CheckViewportJS", [], function() {
    return function($actions, $roles, $public) {
        const DESKTOP_QUERY = '(min-width: 1280px)'

        const matchDesktopQuery = window.matchMedia(DESKTOP_QUERY)
        if (matchDesktopQuery.addEventListener) {
            matchDesktopQuery.addEventListener('change', (e) => {
                if (matchDesktopQuery.matches) {
                    $actions.SetIsDesktop(true)
                    $actions.SetIsMobile(false)
                } else {
                    $actions.SetIsDesktop(false)
                    $actions.SetIsMobile(true)
                }

            })
        }

    };
});

define("PartnersHub.controller$UseDevice.SyncIsDesktopMobileJS", [], function() {
    return function($actions, $roles, $public) {
        if (window.innerWidth > 1280) {
            $actions.SetIsDesktop(true);
            $actions.SetIsMobile(false);
        } else {
            $actions.SetIsMobile(true);
            $actions.SetIsDesktop(false);
        }
    };
});


define("PartnersHub.controller", ["exports", "@outsystems/runtime-core-js", "PartnersHub.model", "PartnersHub.controller$translationsResources"], function(exports, OSRuntimeCore, PartnersHubModel, PartnersHub_Controller_translationsResources) {
    var OS = OSRuntimeCore;
    var PartnersHubController = exports;
    class Controller extends
    OS.Controller.BaseModuleController {
        constructor(model, messagesProvider, idService, translationResources) {
            super(model, messagesProvider, idService, translationResources);
        }

        get clientActionProxies() {
            if (!(this.hasOwnProperty("_clientActionProxies"))) {
                this._clientActionProxies = {};
            }

            return this._clientActionProxies;
        }
        set clientActionProxies(value) {
            this._clientActionProxies = value;
        }

        checkPartnersHubRole$Action(callContext) {
            var outVars = new OS.SystemStructures.HasRoleResultRec();
            outVars.hasRoleOut = OS.Authorization.hasRole({
                roleKey: this.roles.PartnersHub.roleKey
            });
            return outVars;

        }


        get roles() {
            if (!(this.hasOwnProperty("_roles"))) {
                this._roles = {
                    PartnersHub: {
                        roleKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc.ab2a6b39-1f30-4f20-a069-cf5d18b076f4",
                        roleException: new OS.Exceptions.Exceptions.NotRegisteredException("PartnersHub.NotPartnersHub", "PartnersHub role required")
                    }
                };
            }

            return this._roles;
        }
        set roles(value) {
            this._roles = value;
        }

        get defaultTimeout() {
            if (!(this.hasOwnProperty("_defaultTimeout"))) {
                this._defaultTimeout = 60;
            }

            return this._defaultTimeout;
        }
        set defaultTimeout(value) {
            this._defaultTimeout = value;
        }

        getDefaultTimeout() {
            return PartnersHubController.default.defaultTimeout;
        }

    }

    PartnersHubController.default = new Controller(PartnersHub_Controller_translationsResources);
});

define("PartnersHub.controller$translationsResources.de-DE", [], function() {
    return {
        "b9DYMWKLTUeRIaswOIabwQ#Value.945985687.1": "Nutzungsbedingungen",
        "gW5sw77zM0WqI59oUGioIw#Value.462242350.1": "Beschäftigungsdetails",
        "WMCZZueyQ0eFYYOfdWTRww#Value.311930358.1": "Adressdetails",
        "G0E_DDTyZUmmTxt82bI0YA#Value.-1542542140.1": "Kontowährung",
        "g6RyjU85_kW76lKmE2UduQ#Value.1197579629.1": "Kontotyp",
        "Vx25sFpQR0CS+7jYjF7gPg#Value.1891809410.1": "Persönliche Daten",
        "8mccxYPg10+4EWfXSVsKvg#Value.-1330566627.1": "Identitätsverifizierung"
    };
});

define("PartnersHub.controller$translationsResources.es-ES", [], function() {
    return {
        "b9DYMWKLTUeRIaswOIabwQ#Value.945985687.1": "Términos de uso",
        "gW5sw77zM0WqI59oUGioIw#Value.462242350.1": "Detalles de empleo",
        "WMCZZueyQ0eFYYOfdWTRww#Value.311930358.1": "Detalles de dirección",
        "G0E_DDTyZUmmTxt82bI0YA#Value.-1542542140.1": "Moneda de la cuenta",
        "g6RyjU85_kW76lKmE2UduQ#Value.1197579629.1": "Tipo de cuenta",
        "Vx25sFpQR0CS+7jYjF7gPg#Value.1891809410.1": "Detalles personales",
        "8mccxYPg10+4EWfXSVsKvg#Value.-1330566627.1": "Verificación de identidad"
    };
});

define("PartnersHub.controller$translationsResources.fr-FR", [], function() {
    return {
        "b9DYMWKLTUeRIaswOIabwQ#Value.945985687.1": "Conditions d\'utilisation",
        "gW5sw77zM0WqI59oUGioIw#Value.462242350.1": "Détails de l\'emploi",
        "WMCZZueyQ0eFYYOfdWTRww#Value.311930358.1": "Détails de l\'adresse",
        "G0E_DDTyZUmmTxt82bI0YA#Value.-1542542140.1": "Devise du compte",
        "g6RyjU85_kW76lKmE2UduQ#Value.1197579629.1": "Type de compte",
        "Vx25sFpQR0CS+7jYjF7gPg#Value.1891809410.1": "Détails personnels",
        "8mccxYPg10+4EWfXSVsKvg#Value.-1330566627.1": "Vérification d\'identité"
    };
});

define("PartnersHub.controller$translationsResources.it-IT", [], function() {
    return {
        "b9DYMWKLTUeRIaswOIabwQ#Value.945985687.1": "Termini di utilizzo",
        "gW5sw77zM0WqI59oUGioIw#Value.462242350.1": "Dettagli sull\'occupazione",
        "WMCZZueyQ0eFYYOfdWTRww#Value.311930358.1": "Dettagli dell\'indirizzo",
        "G0E_DDTyZUmmTxt82bI0YA#Value.-1542542140.1": "Valuta del conto",
        "g6RyjU85_kW76lKmE2UduQ#Value.1197579629.1": "Tipo di conto",
        "Vx25sFpQR0CS+7jYjF7gPg#Value.1891809410.1": "Dati personali",
        "8mccxYPg10+4EWfXSVsKvg#Value.-1330566627.1": "Verifica dell\'identità"
    };
});

define("PartnersHub.controller$translationsResources.pl-PL", [], function() {
    return {
        "b9DYMWKLTUeRIaswOIabwQ#Value.945985687.1": "Warunki użytkowania",
        "gW5sw77zM0WqI59oUGioIw#Value.462242350.1": "Szczegóły zatrudnienia",
        "WMCZZueyQ0eFYYOfdWTRww#Value.311930358.1": "Szczegóły adresu",
        "G0E_DDTyZUmmTxt82bI0YA#Value.-1542542140.1": "Waluta konta",
        "g6RyjU85_kW76lKmE2UduQ#Value.1197579629.1": "Typ konta",
        "Vx25sFpQR0CS+7jYjF7gPg#Value.1891809410.1": "Dane osobowe",
        "8mccxYPg10+4EWfXSVsKvg#Value.-1330566627.1": "Weryfikacja tożsamości"
    };
});

define("PartnersHub.controller$translationsResources.pt-PT", [], function() {
    return {
        "b9DYMWKLTUeRIaswOIabwQ#Value.945985687.1": "Termos de uso",
        "gW5sw77zM0WqI59oUGioIw#Value.462242350.1": "Detalhes de emprego",
        "WMCZZueyQ0eFYYOfdWTRww#Value.311930358.1": "Detalhes do endereço",
        "G0E_DDTyZUmmTxt82bI0YA#Value.-1542542140.1": "Moeda da conta",
        "g6RyjU85_kW76lKmE2UduQ#Value.1197579629.1": "Tipo de conta",
        "Vx25sFpQR0CS+7jYjF7gPg#Value.1891809410.1": "Dados pessoais",
        "8mccxYPg10+4EWfXSVsKvg#Value.-1330566627.1": "Verificação de identidade"
    };
});

define("PartnersHub.controller$translationsResources.ru-RU", [], function() {
    return {
        "b9DYMWKLTUeRIaswOIabwQ#Value.945985687.1": "Условия использования",
        "gW5sw77zM0WqI59oUGioIw#Value.462242350.1": "Подробности о трудоустройстве",
        "WMCZZueyQ0eFYYOfdWTRww#Value.311930358.1": "Детали адреса",
        "G0E_DDTyZUmmTxt82bI0YA#Value.-1542542140.1": "Валюта счета",
        "g6RyjU85_kW76lKmE2UduQ#Value.1197579629.1": "Тип аккаунта",
        "Vx25sFpQR0CS+7jYjF7gPg#Value.1891809410.1": "Личные данные",
        "8mccxYPg10+4EWfXSVsKvg#Value.-1330566627.1": "Проверка личности"
    };
});

define("PartnersHub.controller$translationsResources", ["exports", "PartnersHub.controller$translationsResources.de-DE", "PartnersHub.controller$translationsResources.es-ES", "PartnersHub.controller$translationsResources.fr-FR", "PartnersHub.controller$translationsResources.it-IT", "PartnersHub.controller$translationsResources.pl-PL", "PartnersHub.controller$translationsResources.pt-PT", "PartnersHub.controller$translationsResources.ru-RU"], function(exports, PartnersHub_controller_translationsResources_deDE, PartnersHub_controller_translationsResources_esES, PartnersHub_controller_translationsResources_frFR, PartnersHub_controller_translationsResources_itIT, PartnersHub_controller_translationsResources_plPL, PartnersHub_controller_translationsResources_ptPT, PartnersHub_controller_translationsResources_ruRU) {
    return {
        "de-DE": {
            "translations": PartnersHub_controller_translationsResources_deDE,
            "isRTL": false
        },
        "es-ES": {
            "translations": PartnersHub_controller_translationsResources_esES,
            "isRTL": false
        },
        "fr-FR": {
            "translations": PartnersHub_controller_translationsResources_frFR,
            "isRTL": false
        },
        "it-IT": {
            "translations": PartnersHub_controller_translationsResources_itIT,
            "isRTL": false
        },
        "pl-PL": {
            "translations": PartnersHub_controller_translationsResources_plPL,
            "isRTL": false
        },
        "pt-PT": {
            "translations": PartnersHub_controller_translationsResources_ptPT,
            "isRTL": false
        },
        "ru-RU": {
            "translations": PartnersHub_controller_translationsResources_ruRU,
            "isRTL": false
        }
    };
});