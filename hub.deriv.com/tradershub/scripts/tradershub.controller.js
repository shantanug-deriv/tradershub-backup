define("tradershub.controller$CleanupAfterRealSignup", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.clientVariables"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.cleanupAfterRealSignup$Action = function(callContext) {
        return OS.Logger.startActiveSpan("CleanupAfterRealSignup", function(span) {
            if (span) {
                span.setAttribute("code.function", "CleanupAfterRealSignup");
                span.setAttribute("outsystems.function.key", "b78f35fb-90c4-4f04-8cff-cd956979b3e7");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                // RealSignupTaxResidence = NullTextIdentifier
                tradershubClientVariables.setRealSignupTaxResidence(OS.BuiltinFunctions.nullTextIdentifier());
                // RealSignupAddress = NullTextIdentifier
                tradershubClientVariables.setRealSignupAddress(OS.BuiltinFunctions.nullTextIdentifier());
                // RealSignupAddressPostCode = NullTextIdentifier
                tradershubClientVariables.setRealSignupAddressPostCode(OS.BuiltinFunctions.nullTextIdentifier());
                // RealSignupAddressState = NullTextIdentifier
                tradershubClientVariables.setRealSignupAddressState(OS.BuiltinFunctions.nullTextIdentifier());
                // RealSignupAddressTown = NullTextIdentifier
                tradershubClientVariables.setRealSignupAddressTown(OS.BuiltinFunctions.nullTextIdentifier());
                // RealSignupDateofBirth = NullTextIdentifier
                tradershubClientVariables.setRealSignupDateofBirth(OS.BuiltinFunctions.nullTextIdentifier());
                // RealSignupFatcaDeclaration = NullTextIdentifier
                tradershubClientVariables.setRealSignupFatcaDeclaration(OS.BuiltinFunctions.nullTextIdentifier());
                // RealSignupFirstName = NullTextIdentifier
                tradershubClientVariables.setRealSignupFirstName(OS.BuiltinFunctions.nullTextIdentifier());
                // RealSignupIDVDocumentName = NullTextIdentifier
                tradershubClientVariables.setRealSignupIDVDocumentName(OS.BuiltinFunctions.nullTextIdentifier());
                // RealSignupIDVDocumentNumber = NullTextIdentifier
                tradershubClientVariables.setRealSignupIDVDocumentNumber(OS.BuiltinFunctions.nullTextIdentifier());
                // RealSignupLastName = NullTextIdentifier
                tradershubClientVariables.setRealSignupLastName(OS.BuiltinFunctions.nullTextIdentifier());
                // SelectedCurrencyCode = NullTextIdentifier
                tradershubClientVariables.setSelectedCurrencyCode(OS.BuiltinFunctions.nullTextIdentifier());
                // RealSignupEmployementStatus = NullTextIdentifier
                tradershubClientVariables.setRealSignupEmployementStatus(OS.BuiltinFunctions.nullTextIdentifier());
                // RealSignupTIDNumber = NullTextIdentifier
                tradershubClientVariables.setRealSignupTIDNumber(OS.BuiltinFunctions.nullTextIdentifier());
                // RealSignupTaxIDConfirmation = False
                tradershubClientVariables.setRealSignupTaxIDConfirmation(false);
                // RealSignupTaxResidenceLabel = NullTextIdentifier
                tradershubClientVariables.setRealSignupTaxResidenceLabel(OS.BuiltinFunctions.nullTextIdentifier());
                // RealSignupIsIDVSupported = False
                tradershubClientVariables.setRealSignupIsIDVSupported(false);
                // RealSignupSkippedIDV = False
                tradershubClientVariables.setRealSignupSkippedIDV(false);
                // InitializeRealSignup = False
                tradershubClientVariables.setInitializeRealSignup(false);
                return;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = tradershubController.default;
    tradershubController.default.clientActionProxies.cleanupAfterRealSignup$Action = function() {
        return controller.executeActionInsideJSNode(tradershubController.default.cleanupAfterRealSignup$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});


define("tradershub.controller$CleanupAfterResetPassword", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.clientVariables"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.cleanupAfterResetPassword$Action = function(callContext) {
        return OS.Logger.startActiveSpan("CleanupAfterResetPassword", function(span) {
            if (span) {
                span.setAttribute("code.function", "CleanupAfterResetPassword");
                span.setAttribute("outsystems.function.key", "79c1592d-7563-4154-8a77-0f2e1d944bf3");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                // Action = NullTextIdentifier
                tradershubClientVariables.setAction(OS.BuiltinFunctions.nullTextIdentifier());
                // Code = NullTextIdentifier
                tradershubClientVariables.setCode(OS.BuiltinFunctions.nullTextIdentifier());
                // Lang = NullTextIdentifier
                tradershubClientVariables.setLang(OS.BuiltinFunctions.nullTextIdentifier());
                return;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = tradershubController.default;
    tradershubController.default.clientActionProxies.cleanupAfterResetPassword$Action = function() {
        return controller.executeActionInsideJSNode(tradershubController.default.cleanupAfterResetPassword$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});


define("tradershub.controller$CleanupAfterSignup", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.clientVariables"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.cleanupAfterSignup$Action = function(callContext) {
        return OS.Logger.startActiveSpan("CleanupAfterSignup", function(span) {
            if (span) {
                span.setAttribute("code.function", "CleanupAfterSignup");
                span.setAttribute("outsystems.function.key", "d79f7a78-9d51-4173-9cad-5e7e9870332d");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                // Action = ""
                tradershubClientVariables.setAction("");
                // Code = ""
                tradershubClientVariables.setCode("");
                return;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = tradershubController.default;
    tradershubController.default.clientActionProxies.cleanupAfterSignup$Action = function() {
        return controller.executeActionInsideJSNode(tradershubController.default.cleanupAfterSignup$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});


define("tradershub.controller$DerivApiSendMessage", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$DerivApiSendMessage.SendApiCallJS", "tradershub.clientVariables"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_DerivApiSendMessage_SendApiCallJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.derivApiSendMessage$Action = function(payloadIn, endpointIn, authorizeIn, callContext) {
        return OS.Logger.startActiveSpan("DerivApiSendMessage", function(span) {
            if (span) {
                span.setAttribute("code.function", "DerivApiSendMessage");
                span.setAttribute("outsystems.function.key", "c0dce4e6-a508-461d-b6bf-99ab076e4629");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.DerivApiSendMessage$vars"))());
                vars.value.payloadInLocal = payloadIn;
                vars.value.endpointInLocal = endpointIn;
                vars.value.authorizeInLocal = authorizeIn;
                var sendApiCallJSResult = new OS.DataTypes.VariableHolder();
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.DerivApiSendMessage$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    return OS.Logger.startActiveSpan("SendApiCall", function(span) {
                        if (span) {
                            span.setAttribute("code.function", "SendApiCall");
                            span.setAttribute("outsystems.function.key", "cc9421a5-0b57-4156-86f9-1ebe6391c2a1");
                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                        }

                        try {
                            return controller.safeExecuteAsyncJSNode(tradershub_controller_DerivApiSendMessage_SendApiCallJS, "SendApiCall", "DerivApiSendMessage", {
                                Endpoint: OS.DataConversion.JSNodeParamConverter.to(vars.value.endpointInLocal, OS.DataTypes.DataTypes.Text),
                                payload: OS.DataConversion.JSNodeParamConverter.to(vars.value.payloadInLocal, OS.DataTypes.DataTypes.Text),
                                Token: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getAuthToken(), OS.DataTypes.DataTypes.Text),
                                Authorize: OS.DataConversion.JSNodeParamConverter.to(vars.value.authorizeInLocal, OS.DataTypes.DataTypes.Boolean),
                                response: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                IsError: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
                                ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                            }, function($parameters) {
                                var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.DerivApiSendMessage$sendApiCallJSResult"))();
                                jsNodeResult.responseOut = OS.DataConversion.JSNodeParamConverter.from($parameters.response, OS.DataTypes.DataTypes.Text);
                                jsNodeResult.isErrorOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsError, OS.DataTypes.DataTypes.Boolean);
                                jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
                                jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
                                return jsNodeResult;
                            }, {}, {});
                        } finally {
                            if (span) {
                                span.end();
                            }

                        }

                    }, 1).then(function(results) {
                        sendApiCallJSResult.value = results;
                    }).then(function() {
                        // Response = SendApiCall.response
                        outVars.value.responseOut = sendApiCallJSResult.value.responseOut;
                        // ErrorMessage = SendApiCall.ErrorMessage
                        outVars.value.errorMessageOut = sendApiCallJSResult.value.errorMessageOut;
                        // ErrorCode = SendApiCall.ErrorCode
                        outVars.value.errorCodeOut = sendApiCallJSResult.value.errorCodeOut;
                        // IsError = SendApiCall.IsError
                        outVars.value.isErrorOut = sendApiCallJSResult.value.isErrorOut;
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
    var controller = tradershubController.default;
    tradershubController.default.constructor.registerVariableGroupType("tradershub.DerivApiSendMessage$vars", [{
        name: "Payload",
        attrName: "payloadInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "Endpoint",
        attrName: "endpointInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "Authorize",
        attrName: "authorizeInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.DerivApiSendMessage$sendApiCallJSResult", [{
        name: "response",
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
    }, {
        name: "ErrorMessage",
        attrName: "errorMessageOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "ErrorCode",
        attrName: "errorCodeOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.DerivApiSendMessage$outVars", [{
        name: "Response",
        attrName: "responseOut",
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
        name: "ErrorMessage",
        attrName: "errorMessageOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "ErrorCode",
        attrName: "errorCodeOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.clientActionProxies.derivApiSendMessage$Action = function(payloadIn, endpointIn, authorizeIn) {
        payloadIn = (payloadIn === undefined) ? "" : payloadIn;
        endpointIn = (endpointIn === undefined) ? "" : endpointIn;
        authorizeIn = (authorizeIn === undefined) ? false : authorizeIn;
        return controller.executeActionInsideJSNode(tradershubController.default.derivApiSendMessage$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(payloadIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(endpointIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authorizeIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: OS.DataConversion.JSNodeParamConverter.to(actionResults.responseOut, OS.DataTypes.DataTypes.Text),
                IsError: OS.DataConversion.JSNodeParamConverter.to(actionResults.isErrorOut, OS.DataTypes.DataTypes.Boolean),
                ErrorMessage: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorMessageOut, OS.DataTypes.DataTypes.Text),
                ErrorCode: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorCodeOut, OS.DataTypes.DataTypes.Text)
            };
        });
    };
});

define("tradershub.controller$DerivApiSendMessage.SendApiCallJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        return new Promise(function($resolve, $reject) {
            let request = {};

            if ($parameters.Endpoint) {
                request[$parameters.Endpoint] = 1;
            }

            if ($parameters.payload) {
                Object.assign(request, JSON.parse($parameters.payload))
            }

            function sendRequest() {
                DerivAPI.send(request).then(response => {
                    $parameters.response = JSON.stringify(response);
                    $parameters.IsError = false;
                    $resolve();
                }).catch(error => {
                    $parameters.IsError = true;
                    $parameters.response = JSON.stringify(error.error);

                    $parameters.ErrorMessage = error.error.message || "";
                    $parameters.ErrorCode = error.error.code || "";
                    $resolve();
                });
            }

            if (DerivAPI) {
                // $parameters.Authorize && $parameters.Token && (async () => await DerivAPI.send({ authorize: $parameters.Token }))()

                if ($parameters.Authorize && $parameters.Token) {
                    DerivAPI.send({
                        authorize: $parameters.Token
                    }).then(() => sendRequest())
                } else {
                    sendRequest();
                }

            }

            // if (DerivAPI) {
            //     $parameters.Authorize && $parameters.Token && (async () => await DerivAPI.send({ authorize: $parameters.Token }))()
            //     DerivAPI.send(request).then(response => {
            //         $parameters.response = JSON.stringify(response);
            //         $parameters.IsError = false;
            //         $resolve();
            //     }).catch(error => {
            //         $parameters.IsError = true;
            //         $parameters.response = JSON.stringify(error.error);

            //         $parameters.ErrorMessage = error.error.message || "";
            //         $parameters.ErrorCode = error.error.code || "";
            //         $resolve();
            //     });
            // }

        });
    };
});


define("tradershub.controller$DoLogin", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "System_.model", "tradershub.clientVariables", "System_.model$UserLoginResultRec", "tradershub.referencesHealth", "tradershub.referencesHealth$System_"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, System_Model, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.doLogin$Action = function(usernameIn, passwordIn, callContext) {
        return OS.Logger.startActiveSpan("DoLogin", function(span) {
            if (span) {
                span.setAttribute("code.function", "DoLogin");
                span.setAttribute("outsystems.function.key", "c45e4ea0-ddd3-4e73-abfc-ba43af7d5ab7");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.DoLogin$vars"))());
                vars.value.usernameInLocal = usernameIn;
                vars.value.passwordInLocal = passwordIn;
                var loginVar = new OS.DataTypes.VariableHolder();
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.DoLogin$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: Login
                    return OS.SystemActions.login(vars.value.usernameInLocal, vars.value.passwordInLocal, callContext).then(function(value) {
                        loginVar.value = value;
                    }).then(function() {
                        // Success?
                        if ((loginVar.value.userLoginResultOut.successAttr)) {
                            // Success = True
                            // Success = True
                            outVars.value.successOut = true;
                        } else {
                            // Invalid credentials?
                            if ((loginVar.value.userLoginResultOut.userLoginFailureReasonAttr.invalidCredentialsAttr)) {
                                // Set error message
                                // ErrorMessage = "Invalid credentials."
                                outVars.value.errorMessageOut = "Invalid credentials.";
                            } else {
                                // Too many failed login attempts?
                                if ((loginVar.value.userLoginResultOut.userLoginFailureReasonAttr.tooManyFailedLoginAttemptsAttr)) {
                                    // Set error message
                                    // ErrorMessage = "Too many failed login attempts. Please try again in " + Login.UserLoginResult.RetryAfterSeconds + " seconds."
                                    outVars.value.errorMessageOut = (("Too many failed login attempts. Please try again in " + (loginVar.value.userLoginResultOut.retryAfterSecondsAttr).toString()) + " seconds.");
                                } else {
                                    // Set error message
                                    // ErrorMessage = "Login operation failed."
                                    outVars.value.errorMessageOut = "Login operation failed.";
                                }

                            }

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
    var controller = tradershubController.default;
    tradershubController.default.constructor.registerVariableGroupType("tradershub.DoLogin$vars", [{
        name: "Username",
        attrName: "usernameInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "Password",
        attrName: "passwordInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.DoLogin$outVars", [{
        name: "Success",
        attrName: "successOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }, {
        name: "ErrorMessage",
        attrName: "errorMessageOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.clientActionProxies.doLogin$Action = function(usernameIn, passwordIn) {
        usernameIn = (usernameIn === undefined) ? "" : usernameIn;
        passwordIn = (passwordIn === undefined) ? "" : passwordIn;
        return controller.executeActionInsideJSNode(tradershubController.default.doLogin$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(usernameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(passwordIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
                ErrorMessage: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorMessageOut, OS.DataTypes.DataTypes.Text)
            };
        });
    };
});


define("tradershub.controller$FeatureFlagValueByName", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$FeatureFlagValueByName.GetFeatureFlagValueByNameJS", "tradershub.clientVariables"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_FeatureFlagValueByName_GetFeatureFlagValueByNameJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.featureFlagValueByName$Action = function(nameIn, callContext) {
        return OS.Logger.startActiveSpan("FeatureFlagValueByName", function(span) {
            if (span) {
                span.setAttribute("code.function", "FeatureFlagValueByName");
                span.setAttribute("outsystems.function.key", "0e4d40fb-5602-4513-bce4-8ab7d1fd80b2");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.FeatureFlagValueByName$vars"))());
                vars.value.nameInLocal = nameIn;
                var getFeatureFlagValueByNameJSResult = new OS.DataTypes.VariableHolder();
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.FeatureFlagValueByName$outVars"))());
                getFeatureFlagValueByNameJSResult.value = OS.Logger.startActiveSpan("GetFeatureFlagValueByName", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "GetFeatureFlagValueByName");
                        span.setAttribute("outsystems.function.key", "acef3fff-9694-4a07-9f1f-9a6295ba7e00");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(tradershub_controller_FeatureFlagValueByName_GetFeatureFlagValueByNameJS, "GetFeatureFlagValueByName", "FeatureFlagValueByName", {
                            Name: OS.DataConversion.JSNodeParamConverter.to(vars.value.nameInLocal, OS.DataTypes.DataTypes.Text),
                            IsEnabled: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                        }, function($parameters) {
                            var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.FeatureFlagValueByName$getFeatureFlagValueByNameJSResult"))();
                            jsNodeResult.isEnabledOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsEnabled, OS.DataTypes.DataTypes.Boolean);
                            return jsNodeResult;
                        }, {}, {});
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 1);
                // IsEnabled = GetFeatureFlagValueByName.IsEnabled
                outVars.value.isEnabledOut = getFeatureFlagValueByNameJSResult.value.isEnabledOut;
                return outVars.value;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = tradershubController.default;
    tradershubController.default.constructor.registerVariableGroupType("tradershub.FeatureFlagValueByName$vars", [{
        name: "Name",
        attrName: "nameInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.FeatureFlagValueByName$getFeatureFlagValueByNameJSResult", [{
        name: "IsEnabled",
        attrName: "isEnabledOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.FeatureFlagValueByName$outVars", [{
        name: "IsEnabled",
        attrName: "isEnabledOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    tradershubController.default.clientActionProxies.featureFlagValueByName$Action = function(nameIn) {
        nameIn = (nameIn === undefined) ? "" : nameIn;
        return controller.executeActionInsideJSNode(tradershubController.default.featureFlagValueByName$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(nameIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                IsEnabled: OS.DataConversion.JSNodeParamConverter.to(actionResults.isEnabledOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});

define("tradershub.controller$FeatureFlagValueByName.GetFeatureFlagValueByNameJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const featureFlags = localStorage.getItem("featureFlags");
        if (featureFlags) {
            const parsedFeatureFlags = JSON.parse(featureFlags);
            const flag = parsedFeatureFlags.find(flag => flag.name === $parameters.Name);
            if (flag) {
                $parameters.IsEnabled = flag.enabled;
            } else {
                $parameters.IsEnabled = false;
            }
        }
    };
});


define("tradershub.controller$GBFeatureFlagValue", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$GBFeatureFlagValue.GetFeatureFlagValueJS", "tradershub.clientVariables"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_GBFeatureFlagValue_GetFeatureFlagValueJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.gBFeatureFlagValue$Action = function(featureFlagNameIn, callContext) {
        return OS.Logger.startActiveSpan("GBFeatureFlagValue", function(span) {
            if (span) {
                span.setAttribute("code.function", "GBFeatureFlagValue");
                span.setAttribute("outsystems.function.key", "38df811d-05d9-4ee7-9c26-fb5975787628");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.GBFeatureFlagValue$vars"))());
                vars.value.featureFlagNameInLocal = featureFlagNameIn;
                var getFeatureFlagValueJSResult = new OS.DataTypes.VariableHolder();
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.GBFeatureFlagValue$outVars"))());
                getFeatureFlagValueJSResult.value = OS.Logger.startActiveSpan("GetFeatureFlagValue", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "GetFeatureFlagValue");
                        span.setAttribute("outsystems.function.key", "03e49048-d8cd-499d-9ff6-dd561d86ebba");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(tradershub_controller_GBFeatureFlagValue_GetFeatureFlagValueJS, "GetFeatureFlagValue", "GBFeatureFlagValue", {
                            FeatureFlagName: OS.DataConversion.JSNodeParamConverter.to(vars.value.featureFlagNameInLocal, OS.DataTypes.DataTypes.Text),
                            IsEnabled: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                        }, function($parameters) {
                            var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.GBFeatureFlagValue$getFeatureFlagValueJSResult"))();
                            jsNodeResult.isEnabledOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsEnabled, OS.DataTypes.DataTypes.Boolean);
                            return jsNodeResult;
                        }, {}, {});
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 1);
                // IsEnabled = GetFeatureFlagValue.IsEnabled
                outVars.value.isEnabledOut = getFeatureFlagValueJSResult.value.isEnabledOut;
                return outVars.value;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = tradershubController.default;
    tradershubController.default.constructor.registerVariableGroupType("tradershub.GBFeatureFlagValue$vars", [{
        name: "FeatureFlagName",
        attrName: "featureFlagNameInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.GBFeatureFlagValue$getFeatureFlagValueJSResult", [{
        name: "IsEnabled",
        attrName: "isEnabledOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.GBFeatureFlagValue$outVars", [{
        name: "IsEnabled",
        attrName: "isEnabledOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    tradershubController.default.clientActionProxies.gBFeatureFlagValue$Action = function(featureFlagNameIn) {
        featureFlagNameIn = (featureFlagNameIn === undefined) ? "" : featureFlagNameIn;
        return controller.executeActionInsideJSNode(tradershubController.default.gBFeatureFlagValue$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(featureFlagNameIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                IsEnabled: OS.DataConversion.JSNodeParamConverter.to(actionResults.isEnabledOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});

define("tradershub.controller$GBFeatureFlagValue.GetFeatureFlagValueJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        if (window.Analytics) {
            $parameters.IsEnabled = Analytics?.Analytics?.getFeatureValue($parameters.FeatureFlagName)
        }
    };
});


define("tradershub.controller$GetAccountByLoginId", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$GetAccountByLoginId.GetAccountJS", "tradershub.clientVariables", "tradershub.model$ST_52667a49e65b5175f66dacecb12f345fStructure"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_GetAccountByLoginId_GetAccountJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.getAccountByLoginId$Action = function(loginIdIn, callContext) {
        return OS.Logger.startActiveSpan("GetAccountByLoginId", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetAccountByLoginId");
                span.setAttribute("outsystems.function.key", "53b4b606-34d1-4f46-9cc9-e8784d97bd83");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.GetAccountByLoginId$vars"))());
                vars.value.loginIdInLocal = loginIdIn;
                var getAccountJSResult = new OS.DataTypes.VariableHolder();
                var jSONDeserializeAccount_listItemVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_52667a49e65b5175f66dacecb12f345fStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.GetAccountByLoginId$outVars"))());
                getAccountJSResult.value = OS.Logger.startActiveSpan("GetAccount", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "GetAccount");
                        span.setAttribute("outsystems.function.key", "6fba624e-1eb7-4ec1-8727-ac2f7d357432");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(tradershub_controller_GetAccountByLoginId_GetAccountJS, "GetAccount", "GetAccountByLoginId", {
                            LoginId: OS.DataConversion.JSNodeParamConverter.to(vars.value.loginIdInLocal, OS.DataTypes.DataTypes.Text),
                            AuthToken: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                            Account: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                        }, function($parameters) {
                            var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.GetAccountByLoginId$getAccountJSResult"))();
                            jsNodeResult.authTokenOut = OS.DataConversion.JSNodeParamConverter.from($parameters.AuthToken, OS.DataTypes.DataTypes.Text);
                            jsNodeResult.accountOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Account, OS.DataTypes.DataTypes.Text);
                            return jsNodeResult;
                        }, {}, {});
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 1);
                // JSON Deserialize: JSONDeserializeAccount_listItem
                jSONDeserializeAccount_listItemVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(getAccountJSResult.value.accountOut, tradershubModel.ST_52667a49e65b5175f66dacecb12f345fStructure, false);
                // Token = GetAccount.AuthToken
                outVars.value.tokenOut = getAccountJSResult.value.authTokenOut;
                // Account = JSONDeserializeAccount_listItem.Data
                outVars.value.accountOut = jSONDeserializeAccount_listItemVar.value.dataOut;
                return outVars.value;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = tradershubController.default;
    tradershubController.default.constructor.registerVariableGroupType("tradershub.GetAccountByLoginId$vars", [{
        name: "LoginId",
        attrName: "loginIdInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.GetAccountByLoginId$getAccountJSResult", [{
        name: "AuthToken",
        attrName: "authTokenOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "Account",
        attrName: "accountOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.GetAccountByLoginId$outVars", [{
        name: "Token",
        attrName: "tokenOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "Account",
        attrName: "accountOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new tradershubModel.ST_52667a49e65b5175f66dacecb12f345fStructure();
        },
        complexType: tradershubModel.ST_52667a49e65b5175f66dacecb12f345fStructure
    }]);
    tradershubController.default.clientActionProxies.getAccountByLoginId$Action = function(loginIdIn) {
        loginIdIn = (loginIdIn === undefined) ? "" : loginIdIn;
        return controller.executeActionInsideJSNode(tradershubController.default.getAccountByLoginId$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(loginIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Token: OS.DataConversion.JSNodeParamConverter.to(actionResults.tokenOut, OS.DataTypes.DataTypes.Text),
                Account: actionResults.accountOut
            };
        });
    };
});

define("tradershub.controller$GetAccountByLoginId.GetAccountJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const list = localStorage.getItem("accountsList")

        if (list) {
            const accountsList = JSON.parse(list)
            $parameters.AuthToken = accountsList[$parameters.LoginId]?.token
            $parameters.Account = JSON.stringify(accountsList[$parameters.LoginId])
        }
    };
});


define("tradershub.controller$GetAllAccountsBalance", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$GetAllAccountsBalance.PayloadJS", "tradershub.clientVariables", "tradershub.controller$DerivApiSendMessage"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_GetAllAccountsBalance_PayloadJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.getAllAccountsBalance$Action = function(callContext) {
        return OS.Logger.startActiveSpan("GetAllAccountsBalance", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetAllAccountsBalance");
                span.setAttribute("outsystems.function.key", "7d0e824c-fff7-4dc4-9306-391e1d97d3b0");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                var payloadJSResult = new OS.DataTypes.VariableHolder();
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.GetAllAccountsBalance$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    payloadJSResult.value = OS.Logger.startActiveSpan("Payload", function(span) {
                        if (span) {
                            span.setAttribute("code.function", "Payload");
                            span.setAttribute("outsystems.function.key", "e7c0b57e-8444-4bbd-837a-ca9d046b7813");
                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                        }

                        try {
                            return controller.safeExecuteJSNode(tradershub_controller_GetAllAccountsBalance_PayloadJS, "Payload", "GetAllAccountsBalance", {
                                Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                            }, function($parameters) {
                                var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.GetAllAccountsBalance$payloadJSResult"))();
                                jsNodeResult.payloadOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Payload, OS.DataTypes.DataTypes.Text);
                                return jsNodeResult;
                            }, {}, {});
                        } finally {
                            if (span) {
                                span.end();
                            }

                        }

                    }, 1);
                    // Execute Action: DerivApiSendMessage
                    return tradershubController.default.derivApiSendMessage$Action(payloadJSResult.value.payloadOut, "balance", false, callContext).then(function(value) {
                        derivApiSendMessageVar.value = value;
                    }).then(function() {
                        if ((!(derivApiSendMessageVar.value.isErrorOut))) {
                            // Response = DerivApiSendMessage.Response
                            outVars.value.responseOut = derivApiSendMessageVar.value.responseOut;
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
    var controller = tradershubController.default;
    tradershubController.default.constructor.registerVariableGroupType("tradershub.GetAllAccountsBalance$payloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.GetAllAccountsBalance$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.clientActionProxies.getAllAccountsBalance$Action = function() {
        return controller.executeActionInsideJSNode(tradershubController.default.getAllAccountsBalance$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: OS.DataConversion.JSNodeParamConverter.to(actionResults.responseOut, OS.DataTypes.DataTypes.Text)
            };
        });
    };
});

define("tradershub.controller$GetAllAccountsBalance.PayloadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.Payload = JSON.stringify({
            account: "all"
        });

    };
});


define("tradershub.controller$getCurrencyIcon", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$getCurrencyIcon.getCurrencyIconJS", "tradershub.clientVariables"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_getCurrencyIcon_getCurrencyIconJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.getCurrencyIcon$Action = function(codeIn, currenciesListIn, callContext) {
        return OS.Logger.startActiveSpan("getCurrencyIcon", function(span) {
            if (span) {
                span.setAttribute("code.function", "getCurrencyIcon");
                span.setAttribute("outsystems.function.key", "9f8a0d50-5700-4017-b4aa-c704f85d279d");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.getCurrencyIcon$vars"))());
                vars.value.codeInLocal = codeIn;
                vars.value.currenciesListInLocal = currenciesListIn;
                var getCurrencyIconJSResult = new OS.DataTypes.VariableHolder();
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.getCurrencyIcon$outVars"))());
                getCurrencyIconJSResult.value = OS.Logger.startActiveSpan("getCurrencyIcon", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "getCurrencyIcon");
                        span.setAttribute("outsystems.function.key", "ca963832-54f1-45a4-a0a3-c2de3cffb32a");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(tradershub_controller_getCurrencyIcon_getCurrencyIconJS, "getCurrencyIcon", "getCurrencyIcon", {
                            Code: OS.DataConversion.JSNodeParamConverter.to(vars.value.codeInLocal, OS.DataTypes.DataTypes.Text),
                            CurrenciesList: OS.DataConversion.JSNodeParamConverter.to(vars.value.currenciesListInLocal, OS.DataTypes.DataTypes.Text),
                            Icon: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                        }, function($parameters) {
                            var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.getCurrencyIcon$getCurrencyIconJSResult"))();
                            jsNodeResult.iconOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Icon, OS.DataTypes.DataTypes.Text);
                            return jsNodeResult;
                        }, {}, {});
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 1);
                // CurrencyIcon = getCurrencyIcon.Icon
                outVars.value.currencyIconOut = getCurrencyIconJSResult.value.iconOut;
                return outVars.value;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = tradershubController.default;
    tradershubController.default.constructor.registerVariableGroupType("tradershub.getCurrencyIcon$vars", [{
        name: "Code",
        attrName: "codeInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "CurrenciesList",
        attrName: "currenciesListInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.getCurrencyIcon$getCurrencyIconJSResult", [{
        name: "Icon",
        attrName: "iconOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.getCurrencyIcon$outVars", [{
        name: "CurrencyIcon",
        attrName: "currencyIconOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.clientActionProxies.getCurrencyIcon$Action = function(codeIn, currenciesListIn) {
        codeIn = (codeIn === undefined) ? "" : codeIn;
        currenciesListIn = (currenciesListIn === undefined) ? "" : currenciesListIn;
        return controller.executeActionInsideJSNode(tradershubController.default.getCurrencyIcon$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(codeIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(currenciesListIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                CurrencyIcon: OS.DataConversion.JSNodeParamConverter.to(actionResults.currencyIconOut, OS.DataTypes.DataTypes.Text)
            };
        });
    };
});

define("tradershub.controller$getCurrencyIcon.getCurrencyIconJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const currenciesList = JSON.parse($parameters.CurrenciesList);

        const getCurrencyIcon = (code) => {
            const currency = currenciesList?.find((currency) => currency.Code === code);
            return currency.Icon;
        }

        $parameters.Icon = getCurrencyIcon($parameters.Code);

    };
});


define("tradershub.controller$GetSocialLoginRedirectURL", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$GetSocialLoginRedirectURL.AffiliateUTMJS", "tradershub.clientVariables"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_GetSocialLoginRedirectURL_AffiliateUTMJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.getSocialLoginRedirectURL$Action = function(providerIn, callContext) {
        return OS.Logger.startActiveSpan("GetSocialLoginRedirectURL", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetSocialLoginRedirectURL");
                span.setAttribute("outsystems.function.key", "1d5c0f88-75f1-4fea-ac30-629b7e38d258");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.GetSocialLoginRedirectURL$vars"))());
                vars.value.providerInLocal = providerIn;
                var affiliateUTMJSResult = new OS.DataTypes.VariableHolder();
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.GetSocialLoginRedirectURL$outVars"))());
                affiliateUTMJSResult.value = OS.Logger.startActiveSpan("AffiliateUTM", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "AffiliateUTM");
                        span.setAttribute("outsystems.function.key", "499fe2f1-e396-471e-8d66-17eaeb41c84b");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(tradershub_controller_GetSocialLoginRedirectURL_AffiliateUTMJS, "AffiliateUTM", "GetSocialLoginRedirectURL", {
                            ServerURL: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getURL(), OS.DataTypes.DataTypes.Text),
                            Provider: OS.DataConversion.JSNodeParamConverter.to(vars.value.providerInLocal, OS.DataTypes.DataTypes.Text),
                            AppId: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getAppId(), OS.DataTypes.DataTypes.Text),
                            RedirectURL: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                        }, function($parameters) {
                            var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.GetSocialLoginRedirectURL$affiliateUTMJSResult"))();
                            jsNodeResult.redirectURLOut = OS.DataConversion.JSNodeParamConverter.from($parameters.RedirectURL, OS.DataTypes.DataTypes.Text);
                            return jsNodeResult;
                        }, {}, {});
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 1);
                // RedirectURL = AffiliateUTM.RedirectURL
                outVars.value.redirectURLOut = affiliateUTMJSResult.value.redirectURLOut;
                return outVars.value;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = tradershubController.default;
    tradershubController.default.constructor.registerVariableGroupType("tradershub.GetSocialLoginRedirectURL$vars", [{
        name: "Provider",
        attrName: "providerInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.GetSocialLoginRedirectURL$affiliateUTMJSResult", [{
        name: "RedirectURL",
        attrName: "redirectURLOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.GetSocialLoginRedirectURL$outVars", [{
        name: "RedirectURL",
        attrName: "redirectURLOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.clientActionProxies.getSocialLoginRedirectURL$Action = function(providerIn) {
        providerIn = (providerIn === undefined) ? "" : providerIn;
        return controller.executeActionInsideJSNode(tradershubController.default.getSocialLoginRedirectURL$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(providerIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                RedirectURL: OS.DataConversion.JSNodeParamConverter.to(actionResults.redirectURLOut, OS.DataTypes.DataTypes.Text)
            };
        });
    };
});

define("tradershub.controller$GetSocialLoginRedirectURL.AffiliateUTMJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const cookies = getCookiesFields()
        const cookiesObjects = getCookiesObject(cookies)

        const affiliateToken = getCookieValue('affiliate_tracking')

        const searchParams = getDataObjFromCookies(cookiesObjects, cookies)
        searchParams.affiliate_token = affiliateToken;

        searchParams.social_signup = $parameters.Provider

        let redirectURL;

        if (String($parameters.ServerURL).includes("green")) {
            redirectURL = "https://oauth.deriv.com/oauth2/authorize?"
            // AppID for app.deriv.com
            searchParams.app_id = "16929"
        } else {
            redirectURL = String("https://" + $parameters.ServerURL) + "/oauth2/authorize?"
            // AppID for app.deriv.com
            searchParams.app_id = $parameters.AppId
        }

        redirectURL = redirectURL + new URLSearchParams(searchParams).toString()

        $parameters.RedirectURL = redirectURL
    };
});


define("tradershub.controller$GetWebsiteStatus", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.clientVariables", "tradershub.controller$DerivApiSendMessage"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.getWebsiteStatus$Action = function(callContext) {
        return OS.Logger.startActiveSpan("GetWebsiteStatus", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetWebsiteStatus");
                span.setAttribute("outsystems.function.key", "39ad24ea-0783-4e1f-b60b-0bfe07b17421");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: DerivApiSendMessage
                    return tradershubController.default.derivApiSendMessage$Action("", "website_status", false, callContext).then(function(value) {
                        derivApiSendMessageVar.value = value;
                    }).then(function() {
                        if ((!(derivApiSendMessageVar.value.isErrorOut))) {
                            // RawWebsiteStatusResponse = DerivApiSendMessage.Response
                            tradershubClientVariables.setRawWebsiteStatusResponse(derivApiSendMessageVar.value.responseOut);
                        }

                    });
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
    var controller = tradershubController.default;
    tradershubController.default.clientActionProxies.getWebsiteStatus$Action = function() {
        return controller.executeActionInsideJSNode(tradershubController.default.getWebsiteStatus$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});


define("tradershub.controller$GTMPushDataLayer", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$GTMPushDataLayer.PushDataLayerJS", "tradershub.clientVariables"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_GTMPushDataLayer_PushDataLayerJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.gTMPushDataLayer$Action = function(eventNameIn, callContext) {
        return OS.Logger.startActiveSpan("GTMPushDataLayer", function(span) {
            if (span) {
                span.setAttribute("code.function", "GTMPushDataLayer");
                span.setAttribute("outsystems.function.key", "4bc4be95-b887-4529-9201-5080182d0c1c");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.GTMPushDataLayer$vars"))());
                vars.value.eventNameInLocal = eventNameIn;
                OS.Logger.startActiveSpan("PushDataLayer", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "PushDataLayer");
                        span.setAttribute("outsystems.function.key", "47bba4c5-14da-45b2-8f44-c42445220b9e");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(tradershub_controller_GTMPushDataLayer_PushDataLayerJS, "PushDataLayer", "GTMPushDataLayer", {
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
    var controller = tradershubController.default;
    tradershubController.default.constructor.registerVariableGroupType("tradershub.GTMPushDataLayer$vars", [{
        name: "EventName",
        attrName: "eventNameInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.clientActionProxies.gTMPushDataLayer$Action = function(eventNameIn) {
        eventNameIn = (eventNameIn === undefined) ? "" : eventNameIn;
        return controller.executeActionInsideJSNode(tradershubController.default.gTMPushDataLayer$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(eventNameIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});

define("tradershub.controller$GTMPushDataLayer.PushDataLayerJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        if (window?.dataLayer) {
            window.dataLayer.push({
                event: $parameters.EventName,
                platform: "Trader",
                loggedIn: false
            })
        }
    };
});


define("tradershub.controller$InitGrowthbookAndRudderStack", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$InitGrowthbookAndRudderStack.InitAnalyticsJS", "tradershub.clientVariables"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_InitGrowthbookAndRudderStack_InitAnalyticsJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.initGrowthbookAndRudderStack$Action = function(callContext) {
        return OS.Logger.startActiveSpan("InitGrowthbookAndRudderStack", function(span) {
            if (span) {
                span.setAttribute("code.function", "InitGrowthbookAndRudderStack");
                span.setAttribute("outsystems.function.key", "db966529-7a98-4ff2-98aa-4b6701575cdd");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                return OS.Flow.executeAsyncFlow(function() {
                    return OS.Logger.startActiveSpan("InitAnalytics", function(span) {
                        if (span) {
                            span.setAttribute("code.function", "InitAnalytics");
                            span.setAttribute("outsystems.function.key", "25b1b963-0c44-4b92-bfec-f05d8383344a");
                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                        }

                        try {
                            return controller.safeExecuteAsyncJSNode(tradershub_controller_InitGrowthbookAndRudderStack_InitAnalyticsJS, "InitAnalytics", "InitGrowthbookAndRudderStack", {
                                STAGING_HOSTNAME: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getStagingHostName(), OS.DataTypes.DataTypes.Text),
                                RUDDERSTACK_STAGING_KEY: OS.DataConversion.JSNodeParamConverter.to("2kxsAsC6mmbYhzD0dXAd9gIlvzC", OS.DataTypes.DataTypes.Text),
                                RUDDERSTACK_PRODUCTION_KEY: OS.DataConversion.JSNodeParamConverter.to("2kxJ1vuvgwx3jXTNURuk7IbxFoW", OS.DataTypes.DataTypes.Text),
                                GROWTHBOOK_DEVELOPMENT_DECRYPTION_KEY: OS.DataConversion.JSNodeParamConverter.to("vZhhadh108cXmYDuZ5dFJQ==", OS.DataTypes.DataTypes.Text),
                                PRODUCTION_HOSTNAME: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getProductionHostName(), OS.DataTypes.DataTypes.Text),
                                GROWTHBOOK_STAGING_CLIENT_KEY: OS.DataConversion.JSNodeParamConverter.to("sdk-WrcJdZQomk0uzatG", OS.DataTypes.DataTypes.Text),
                                GROWTHBOOK_PRODUCTION_CLIENT_KEY: OS.DataConversion.JSNodeParamConverter.to("sdk-0kY5GMkZT2BfvS1t", OS.DataTypes.DataTypes.Text),
                                GROWTHBOOK_DEVELOPMENT_CLIENT_KEY: OS.DataConversion.JSNodeParamConverter.to("sdk-ukdKPzIqjCEnbAv", OS.DataTypes.DataTypes.Text),
                                GROWTHBOOK_STAGING_DECRYPTION_KEY: OS.DataConversion.JSNodeParamConverter.to("+zayLeqj1tNv5ve/eTJIGQ==", OS.DataTypes.DataTypes.Text),
                                GROWTHBOOK_PRODUCTION_DECRYPTION_KEY: OS.DataConversion.JSNodeParamConverter.to("iQ9jnBWrCocmt/5LPogGfw==", OS.DataTypes.DataTypes.Text)
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
    var controller = tradershubController.default;
    tradershubController.default.clientActionProxies.initGrowthbookAndRudderStack$Action = function() {
        return controller.executeActionInsideJSNode(tradershubController.default.initGrowthbookAndRudderStack$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});

define("tradershub.controller$InitGrowthbookAndRudderStack.InitAnalyticsJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        return new Promise(function($resolve, $reject) {
            const isProduction = window.location.hostname === $parameters.PRODUCTION_HOSTNAME
            const isStaging = window.location.hostname === $parameters.STAGING_HOSTNAME

            const country = JSON.parse(Cookies.get("website_status") ?? '{}')?.clients_country ?? null

            const initAnalytics = () => new Promise((resolve, reject) => {
                const Analytics = window?.Analytics?.Analytics
                if (Analytics) {
                    let credentials = {};

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
                            attributes: {
                                country
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


define("tradershub.controller$InitializeGTM", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$InitializeGTM.InitialiseGTMJS", "tradershub.clientVariables"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_InitializeGTM_InitialiseGTMJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.initializeGTM$Action = function(callContext) {
        return OS.Logger.startActiveSpan("InitializeGTM", function(span) {
            if (span) {
                span.setAttribute("code.function", "InitializeGTM");
                span.setAttribute("outsystems.function.key", "6f4a1f74-0532-4d39-be16-0e4cdfba48da");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                OS.Logger.startActiveSpan("InitialiseGTM", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "InitialiseGTM");
                        span.setAttribute("outsystems.function.key", "1a66c2ea-c4c8-4c2d-b616-3c7e750472e2");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(tradershub_controller_InitializeGTM_InitialiseGTMJS, "InitialiseGTM", "InitializeGTM", {
                            PRODUCTION_HOSTNAME: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getProductionHostName(), OS.DataTypes.DataTypes.Text)
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
    var controller = tradershubController.default;
    tradershubController.default.clientActionProxies.initializeGTM$Action = function() {
        return controller.executeActionInsideJSNode(tradershubController.default.initializeGTM$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});

define("tradershub.controller$InitializeGTM.InitialiseGTMJS", [], function() {
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

        // (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        // new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        // j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        // 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        // })(window,document,'script','dataLayer','GTM-NF7884S');
    };
});


define("tradershub.controller$InitizalizeDerivApi", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$InitizalizeDerivApi.InitializeDerivApiJS", "tradershub.clientVariables"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_InitizalizeDerivApi_InitializeDerivApiJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.initizalizeDerivApi$Action = function(callContext) {
        return OS.Logger.startActiveSpan("InitizalizeDerivApi", function(span) {
            if (span) {
                span.setAttribute("code.function", "InitizalizeDerivApi");
                span.setAttribute("outsystems.function.key", "d74abbbb-8450-4f49-b362-dd2e8c1e7c50");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                OS.Logger.startActiveSpan("InitializeDerivApi", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "InitializeDerivApi");
                        span.setAttribute("outsystems.function.key", "b0c52184-c6a5-4064-840e-3ed8f885b369");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(tradershub_controller_InitizalizeDerivApi_InitializeDerivApiJS, "InitializeDerivApi", "InitizalizeDerivApi", {
                            WebsocketURL: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getWebsocketURL(), OS.DataTypes.DataTypes.Text)
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
    var controller = tradershubController.default;
    tradershubController.default.clientActionProxies.initizalizeDerivApi$Action = function() {
        return controller.executeActionInsideJSNode(tradershubController.default.initizalizeDerivApi$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});

define("tradershub.controller$InitizalizeDerivApi.InitializeDerivApiJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        var keepConnectionAliveInterval;

        (function initializeDerivAPIBasic() {
            if (!window.DerivAPI) {
                const socketUrl = window.location.host == "hub.deriv.com" || window.location.host.includes("dev-hub") ? String($parameters.WebsocketURL).replace("53503", "61554") : $parameters.WebsocketURL;
                // const socket = new WebSocket(localStorage.getItem('ws-url') || socketUrl);
                const socket = new ReconnectingWebSocket(localStorage.getItem('ws-url') || socketUrl);
                socket.reconnectInterval = 1000;
                socket.timeoutInterval = 15000;
                socket.maxReconnectAttempts = 10
                window.DerivAPI = new DerivAPIBasic({
                    connection: socket
                });
            }
        })();

        function startInterval(callback, delay) {
            return setInterval(callback, delay);
        }

        function stopInterval(intervalId) {
            clearInterval(intervalId);
        }

        function keepConnectionAlive() {
            DerivAPI.send({
                ping: 1
            });
        }

        keepConnectionAliveInterval = startInterval(keepConnectionAlive, 30000);

        $public.StopInterval = function() {
            stopInterval(keepConnectionAliveInterval);
        }

    };
});


define("tradershub.controller$NewAccountReal", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$NewAccountReal.AuthorizePayloadJS", "tradershub.controller$NewAccountReal.SyncLocalStorageJS", "tradershub.controller$NewAccountReal.NewAccountRealPayloadJS", "tradershub.clientVariables", "tradershub.controller$DerivApiSendMessage", "tradershub.controller$CleanupAfterRealSignup", "tradershub.controller$SendIDVDocumentDetails", "tradershub.model$ST_bd2236af041a218c8fde06ca0065cfd9Structure", "tradershub.controller$SendGetSetting", "tradershub.model$ST_1a99e1302699632bd3158595a2dd8d57Structure"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_NewAccountReal_AuthorizePayloadJS, tradershub_controller_NewAccountReal_SyncLocalStorageJS, tradershub_controller_NewAccountReal_NewAccountRealPayloadJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.newAccountReal$Action = function(callContext) {
        return OS.Logger.startActiveSpan("NewAccountReal", function(span) {
            if (span) {
                span.setAttribute("code.function", "NewAccountReal");
                span.setAttribute("outsystems.function.key", "4d379ae3-5e33-48c0-8ef3-d0d8ff724c2e");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var derivApiSendAuthorizeVar = new OS.DataTypes.VariableHolder();
                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                var sendGetSettingVar = new OS.DataTypes.VariableHolder();
                var authorizePayloadJSResult = new OS.DataTypes.VariableHolder();
                var newAccountRealPayloadJSResult = new OS.DataTypes.VariableHolder();
                var jSONDeserializeNewAccountRealResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_1a99e1302699632bd3158595a2dd8d57Structure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.NewAccountReal$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: SendGetSetting
                    return tradershubController.default.sendGetSetting$Action(callContext).then(function(value) {
                        sendGetSettingVar.value = value;
                    }).then(function() {
                        newAccountRealPayloadJSResult.value = OS.Logger.startActiveSpan("NewAccountRealPayload", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "NewAccountRealPayload");
                                span.setAttribute("outsystems.function.key", "f4571a52-e724-40ee-a1c0-dacba9c4c4a8");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                            }

                            try {
                                return controller.safeExecuteJSNode(tradershub_controller_NewAccountReal_NewAccountRealPayloadJS, "NewAccountRealPayload", "NewAccountReal", {
                                    FirstName: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupFirstName(), OS.DataTypes.DataTypes.Text),
                                    FatcaDeclaration: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupFatcaDeclaration(), OS.DataTypes.DataTypes.Text),
                                    TIN: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupTIDNumber(), OS.DataTypes.DataTypes.Text),
                                    Residence: OS.DataConversion.JSNodeParamConverter.to(sendGetSettingVar.value.getSettingResponseOut.country_codeAttr, OS.DataTypes.DataTypes.Text),
                                    City: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupAddressTown(), OS.DataTypes.DataTypes.Text),
                                    Address: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupAddress(), OS.DataTypes.DataTypes.Text),
                                    SkippedEmploymentDetails: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupSkippedEmploymentTaxDetails(), OS.DataTypes.DataTypes.Boolean),
                                    State: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupAddressState(), OS.DataTypes.DataTypes.Text),
                                    Citizen: OS.DataConversion.JSNodeParamConverter.to(sendGetSettingVar.value.getSettingResponseOut.citizenAttr, OS.DataTypes.DataTypes.Text),
                                    Currency: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getSelectedCurrencyCode(), OS.DataTypes.DataTypes.Text),
                                    TaxResidence: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupTaxResidence(), OS.DataTypes.DataTypes.Text),
                                    DateOfBirth: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupDateofBirth(), OS.DataTypes.DataTypes.Text),
                                    LastName: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupLastName(), OS.DataTypes.DataTypes.Text),
                                    PostCode: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupAddressPostCode(), OS.DataTypes.DataTypes.Text),
                                    Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                }, function($parameters) {
                                    var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.NewAccountReal$newAccountRealPayloadJSResult"))();
                                    jsNodeResult.payloadOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Payload, OS.DataTypes.DataTypes.Text);
                                    return jsNodeResult;
                                }, {}, {});
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                        // Execute Action: DerivApiSendMessage
                        return tradershubController.default.derivApiSendMessage$Action(newAccountRealPayloadJSResult.value.payloadOut, "", true, callContext).then(function(value) {
                            derivApiSendMessageVar.value = value;
                        });
                    }).then(function() {
                        return OS.Flow.executeSequence(function() {
                            if ((derivApiSendMessageVar.value.isErrorOut)) {
                                // ErrorCode = DerivApiSendMessage.ErrorCode
                                outVars.value.errorCodeOut = derivApiSendMessageVar.value.errorCodeOut;
                            } else {
                                OS.FeedbackMessageService.showFeedbackMessage("Account created successfully.", /*Success*/ 1);
                                // JSON Deserialize: JSONDeserializeNewAccountRealResponse
                                jSONDeserializeNewAccountRealResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(derivApiSendMessageVar.value.responseOut, tradershubModel.ST_1a99e1302699632bd3158595a2dd8d57Structure, false);
                                // AuthToken = JSONDeserializeNewAccountRealResponse.Data.New_account_real.Oauth_token
                                tradershubClientVariables.setAuthToken(jSONDeserializeNewAccountRealResponseVar.value.dataOut.new_account_realAttr.oauth_tokenAttr);
                                authorizePayloadJSResult.value = OS.Logger.startActiveSpan("AuthorizePayload", function(span) {
                                    if (span) {
                                        span.setAttribute("code.function", "AuthorizePayload");
                                        span.setAttribute("outsystems.function.key", "58b4974c-e331-48db-91e5-c6543dea54d7");
                                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                    }

                                    try {
                                        return controller.safeExecuteJSNode(tradershub_controller_NewAccountReal_AuthorizePayloadJS, "AuthorizePayload", "NewAccountReal", {
                                            AuthToken: OS.DataConversion.JSNodeParamConverter.to(jSONDeserializeNewAccountRealResponseVar.value.dataOut.new_account_realAttr.oauth_tokenAttr, OS.DataTypes.DataTypes.Text),
                                            Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                        }, function($parameters) {
                                            var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.NewAccountReal$authorizePayloadJSResult"))();
                                            jsNodeResult.payloadOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Payload, OS.DataTypes.DataTypes.Text);
                                            return jsNodeResult;
                                        }, {}, {});
                                    } finally {
                                        if (span) {
                                            span.end();
                                        }

                                    }

                                }, 1);
                                // Execute Action: DerivApiSendAuthorize
                                return tradershubController.default.derivApiSendMessage$Action(authorizePayloadJSResult.value.payloadOut, "", false, callContext).then(function(value) {
                                    derivApiSendAuthorizeVar.value = value;
                                }).then(function() {
                                    // Execute Action: SendIDVDocumentDetails
                                    return tradershubController.default.sendIDVDocumentDetails$Action(callContext);
                                }).then(function() {
                                    // Execute Action: CleanupAfterRealSignup
                                    tradershubController.default.cleanupAfterRealSignup$Action(callContext);
                                    // IsSuccess = True
                                    outVars.value.isSuccessOut = true;
                                    OS.Logger.startActiveSpan("SyncLocalStorage", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "SyncLocalStorage");
                                            span.setAttribute("outsystems.function.key", "7ec10959-2f71-4bea-b5d7-91a42e42d043");
                                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                        }

                                        try {
                                            return controller.safeExecuteJSNode(tradershub_controller_NewAccountReal_SyncLocalStorageJS, "SyncLocalStorage", "NewAccountReal", {
                                                Response: OS.DataConversion.JSNodeParamConverter.to(derivApiSendAuthorizeVar.value.responseOut, OS.DataTypes.DataTypes.Text),
                                                Token: OS.DataConversion.JSNodeParamConverter.to(jSONDeserializeNewAccountRealResponseVar.value.dataOut.new_account_realAttr.oauth_tokenAttr, OS.DataTypes.DataTypes.Text)
                                            }, function($parameters) {}, {}, {});
                                        } finally {
                                            if (span) {
                                                span.end();
                                            }

                                        }

                                    }, 1);
                                });
                            }

                        });
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
    var controller = tradershubController.default;
    tradershubController.default.constructor.registerVariableGroupType("tradershub.NewAccountReal$authorizePayloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.NewAccountReal$newAccountRealPayloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.NewAccountReal$outVars", [{
        name: "IsSuccess",
        attrName: "isSuccessOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }, {
        name: "ErrorCode",
        attrName: "errorCodeOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.clientActionProxies.newAccountReal$Action = function() {
        return controller.executeActionInsideJSNode(tradershubController.default.newAccountReal$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                IsSuccess: OS.DataConversion.JSNodeParamConverter.to(actionResults.isSuccessOut, OS.DataTypes.DataTypes.Boolean),
                ErrorCode: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorCodeOut, OS.DataTypes.DataTypes.Text)
            };
        });
    };
});

define("tradershub.controller$NewAccountReal.AuthorizePayloadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.Payload = JSON.stringify({
            authorize: $parameters.AuthToken
        })
    };
});

define("tradershub.controller$NewAccountReal.SyncLocalStorageJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const accountList = JSON.parse(localStorage.getItem('client.accounts') || JSON.stringify({}))
        const response = JSON.parse($parameters.Response)
        const newRealAccount = response.authorize.account_list.find(acc => acc.loginid === response.authorize.loginid)

        const accounts = {
            ...accountList,
            [response.authorize.loginid]: {
                ...newRealAccount,
                token: $parameters.Token,
                email: response.authorize.email,
                session_start: new Date().getTime(),
                excluded_until: "",
                landing_company_name: response.authorize.landing_company_name,
                residence: response.authorize.country,
                balance: response.authorize.balance,
                accepted_bch: 0
            }
        }
        const activeLoginId = response.authorize.loginid

        let origin = `https://app.deriv.com`

        if (window.location.hostname !== "hub.deriv.com") {
            origin = `https://staging-app.deriv.com`
        }

        localStorage.setItem('client.accounts', JSON.stringify(accounts));
        localStorage.setItem('accountsList', JSON.stringify(accounts));

        const iframe = document.getElementById('localstorage-sync');
        if (iframe) {
            iframe?.contentWindow.postMessage({
                    key: 'client.accounts',
                    value: JSON.stringify(accounts),
                },
                origin
            );

            iframe?.contentWindow.postMessage({
                    key: 'active_loginid',
                    value: activeLoginId,
                },
                origin
            );
        }


        if (window.JSCookies) {
            // expiry time in minutes
            const inOneMinute = new Date(new Date().getTime() + 1 * 60 * 1000);

            JSCookies.set('client.accounts', JSON.stringify(accounts), {
                domain: ".deriv.com",
                expires: inOneMinute,
                secure: true
            })
            JSCookies.set('active_loginid', activeLoginId, {
                domain: ".deriv.com",
                expires: inOneMinute,
                secure: true
            })
        }

        setTimeout(() => {
            const hostname = window.location.hostname;
            if (hostname === "hub.deriv.com") {
                return window.location.href = `https://app.deriv.com`
            }
            return window.location.href = `https://staging-app.deriv.com`
        }, 100)



    };
});

define("tradershub.controller$NewAccountReal.NewAccountRealPayloadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        function parseDateFromDDMMYYYY() {
            const [day, month, year] = String($parameters.DateOfBirth ?? "01/01/1999").split('/');

            // Return the date string in the format 'yyyy-mm-dd'
            return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
        }

        const payload = {
            "new_account_real": 1,
            "currency": $parameters.Currency,
            "first_name": String($parameters.FirstName).trim(),
            "last_name": String($parameters.LastName).trim(),
            "date_of_birth": parseDateFromDDMMYYYY(),
            "address_line_1": String($parameters.Address).trim(),
            "address_city": String($parameters.City).trim(),
            "address_state": $parameters.State,
            "address_postcode": String($parameters.PostCode).trim(),
            "fatca_declaration": Number($parameters.FatcaDeclaration),
            "residence": $parameters.Residence,
            "non_pep_declaration": 1,
            "citizen": $parameters.Citizen
        }

        if (!$parameters.SkippedEmploymentDetails) {
            payload.tax_residence = $parameters.TaxResidence;
            payload.tax_identification_number = $parameters.TIN;
        }

        console.log(payload, $parameters.SkippedEmploymentDetails, $parameters.TaxResidence, $parameters.TIN)

        Object.keys(payload).forEach(key => {
            if (payload[key] === "" || payload[key] === undefined) {
                delete payload[key];
            }
        });


        $parameters.Payload = JSON.stringify(payload)
    };
});


define("tradershub.controller$PostSignupActions", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$PostSignupActions.AuthorizePayloadJS", "tradershub.controller$PostSignupActions.SetAccountSettingsPayloadJS", "tradershub.controller$PostSignupActions.GetIDVCountryJS", "tradershub.controller$PostSignupActions.SyncLocalStorageJS", "tradershub.controller$PostSignupActions.CheckLandingCompanyJS", "tradershub.clientVariables", "tradershub.controller$SetAccountSettings", "tradershub.controller$DerivApiSendMessage", "tradershub.controller$CleanupAfterSignup", "tradershub.model$ST_2b68b61da9b8f6db8463a60cc48350faStructure"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_PostSignupActions_AuthorizePayloadJS, tradershub_controller_PostSignupActions_SetAccountSettingsPayloadJS, tradershub_controller_PostSignupActions_GetIDVCountryJS, tradershub_controller_PostSignupActions_SyncLocalStorageJS, tradershub_controller_PostSignupActions_CheckLandingCompanyJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.postSignupActions$Action = function(redirectToDerivAppIn, callContext) {
        return OS.Logger.startActiveSpan("PostSignupActions", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostSignupActions");
                span.setAttribute("outsystems.function.key", "3ad98d2f-6ab2-4c90-979b-0c5fd51945bf");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.PostSignupActions$vars"))());
                vars.value.redirectToDerivAppInLocal = redirectToDerivAppIn;
                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                var authorizePayloadJSResult = new OS.DataTypes.VariableHolder();
                var setAccountSettingsPayloadJSResult = new OS.DataTypes.VariableHolder();
                var getIDVCountryJSResult = new OS.DataTypes.VariableHolder();
                var checkLandingCompanyJSResult = new OS.DataTypes.VariableHolder();
                var jSONDeserializeAuthorizeResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_2b68b61da9b8f6db8463a60cc48350faStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.PostSignupActions$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CleanupAfterSignup
                    tradershubController.default.cleanupAfterSignup$Action(callContext);
                    authorizePayloadJSResult.value = OS.Logger.startActiveSpan("AuthorizePayload", function(span) {
                        if (span) {
                            span.setAttribute("code.function", "AuthorizePayload");
                            span.setAttribute("outsystems.function.key", "13afd588-1954-4224-b0e7-0027c8897db4");
                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                        }

                        try {
                            return controller.safeExecuteJSNode(tradershub_controller_PostSignupActions_AuthorizePayloadJS, "AuthorizePayload", "PostSignupActions", {
                                AuthToken: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getAuthToken(), OS.DataTypes.DataTypes.Text),
                                Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                            }, function($parameters) {
                                var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.PostSignupActions$authorizePayloadJSResult"))();
                                jsNodeResult.payloadOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Payload, OS.DataTypes.DataTypes.Text);
                                return jsNodeResult;
                            }, {}, {});
                        } finally {
                            if (span) {
                                span.end();
                            }

                        }

                    }, 1);
                    // Execute Action: DerivApiSendMessage
                    return tradershubController.default.derivApiSendMessage$Action(authorizePayloadJSResult.value.payloadOut, "", false, callContext).then(function(value) {
                        derivApiSendMessageVar.value = value;
                    }).then(function() {
                        // JSON Deserialize: JSONDeserializeAuthorizeResponse
                        jSONDeserializeAuthorizeResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(derivApiSendMessageVar.value.responseOut, tradershubModel.ST_2b68b61da9b8f6db8463a60cc48350faStructure, false);
                        checkLandingCompanyJSResult.value = OS.Logger.startActiveSpan("CheckLandingCompany", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "CheckLandingCompany");
                                span.setAttribute("outsystems.function.key", "ae4d93d6-d0d4-430c-9506-a777252df7d4");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                            }

                            try {
                                return controller.safeExecuteJSNode(tradershub_controller_PostSignupActions_CheckLandingCompanyJS, "CheckLandingCompany", "PostSignupActions", {
                                    Response: OS.DataConversion.JSNodeParamConverter.to(derivApiSendMessageVar.value.responseOut, OS.DataTypes.DataTypes.Text),
                                    IsEU: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                                }, function($parameters) {
                                    var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.PostSignupActions$checkLandingCompanyJSResult"))();
                                    jsNodeResult.isEUOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsEU, OS.DataTypes.DataTypes.Boolean);
                                    return jsNodeResult;
                                }, {}, {});
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                        // IsEuUser = CheckLandingCompany.IsEU
                        tradershubClientVariables.setIsEuUser(checkLandingCompanyJSResult.value.isEUOut);
                        setAccountSettingsPayloadJSResult.value = OS.Logger.startActiveSpan("SetAccountSettingsPayload", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "SetAccountSettingsPayload");
                                span.setAttribute("outsystems.function.key", "384afeea-b668-416a-9351-9223f20c1281");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                            }

                            try {
                                return controller.safeExecuteJSNode(tradershub_controller_PostSignupActions_SetAccountSettingsPayloadJS, "SetAccountSettingsPayload", "PostSignupActions", {
                                    Citizen: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getSelectedCitizenship(), OS.DataTypes.DataTypes.Text),
                                    Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                }, function($parameters) {
                                    var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.PostSignupActions$setAccountSettingsPayloadJSResult"))();
                                    jsNodeResult.payloadOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Payload, OS.DataTypes.DataTypes.Text);
                                    return jsNodeResult;
                                }, {}, {});
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                        // Execute Action: SetAccountSettings
                        return tradershubController.default.setAccountSettings$Action(setAccountSettingsPayloadJSResult.value.payloadOut, callContext);
                    }).then(function() {
                        OS.Logger.startActiveSpan("SyncLocalStorage", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "SyncLocalStorage");
                                span.setAttribute("outsystems.function.key", "a1df1b67-e680-436e-b1b2-02f91d1441d8");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                            }

                            try {
                                return controller.safeExecuteJSNode(tradershub_controller_PostSignupActions_SyncLocalStorageJS, "SyncLocalStorage", "PostSignupActions", {
                                    RedirectToDerivApp: OS.DataConversion.JSNodeParamConverter.to(vars.value.redirectToDerivAppInLocal, OS.DataTypes.DataTypes.Boolean),
                                    IsEU: OS.DataConversion.JSNodeParamConverter.to(checkLandingCompanyJSResult.value.isEUOut, OS.DataTypes.DataTypes.Boolean),
                                    Token: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getAuthToken(), OS.DataTypes.DataTypes.Text),
                                    Response: OS.DataConversion.JSNodeParamConverter.to(derivApiSendMessageVar.value.responseOut, OS.DataTypes.DataTypes.Text)
                                }, function($parameters) {}, {}, {});
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                        getIDVCountryJSResult.value = OS.Logger.startActiveSpan("GetIDVCountry", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "GetIDVCountry");
                                span.setAttribute("outsystems.function.key", "a11001ce-bb5f-42d5-929e-056986b91a65");
                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                            }

                            try {
                                return controller.safeExecuteJSNode(tradershub_controller_PostSignupActions_GetIDVCountryJS, "GetIDVCountry", "PostSignupActions", {
                                    ResidenceList: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRawResidenceListResponse(), OS.DataTypes.DataTypes.Text),
                                    Citizenship: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getSelectedCitizenship(), OS.DataTypes.DataTypes.Text),
                                    IsIDVSupported: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                                }, function($parameters) {
                                    var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.PostSignupActions$getIDVCountryJSResult"))();
                                    jsNodeResult.isIDVSupportedOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsIDVSupported, OS.DataTypes.DataTypes.Boolean);
                                    return jsNodeResult;
                                }, {}, {});
                            } finally {
                                if (span) {
                                    span.end();
                                }

                            }

                        }, 1);
                        // RealSignupIsIDVSupported = GetIDVCountry.IsIDVSupported
                        tradershubClientVariables.setRealSignupIsIDVSupported(getIDVCountryJSResult.value.isIDVSupportedOut);
                        // IsEU = CheckLandingCompany.IsEU
                        outVars.value.isEUOut = checkLandingCompanyJSResult.value.isEUOut;
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
    var controller = tradershubController.default;
    tradershubController.default.constructor.registerVariableGroupType("tradershub.PostSignupActions$vars", [{
        name: "RedirectToDerivApp",
        attrName: "redirectToDerivAppInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.PostSignupActions$authorizePayloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.PostSignupActions$setAccountSettingsPayloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.PostSignupActions$getIDVCountryJSResult", [{
        name: "IsIDVSupported",
        attrName: "isIDVSupportedOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.PostSignupActions$checkLandingCompanyJSResult", [{
        name: "IsEU",
        attrName: "isEUOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.PostSignupActions$outVars", [{
        name: "IsEU",
        attrName: "isEUOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    tradershubController.default.clientActionProxies.postSignupActions$Action = function(redirectToDerivAppIn) {
        redirectToDerivAppIn = (redirectToDerivAppIn === undefined) ? false : redirectToDerivAppIn;
        return controller.executeActionInsideJSNode(tradershubController.default.postSignupActions$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(redirectToDerivAppIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                IsEU: OS.DataConversion.JSNodeParamConverter.to(actionResults.isEUOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});

define("tradershub.controller$PostSignupActions.AuthorizePayloadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.Payload = JSON.stringify({
            authorize: $parameters.AuthToken
        })
    };
});

define("tradershub.controller$PostSignupActions.SetAccountSettingsPayloadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.Payload = JSON.stringify({
            citizen: $parameters.Citizen
        })
    };
});

define("tradershub.controller$PostSignupActions.GetIDVCountryJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const country = JSON.parse($parameters.ResidenceList || JSON.stringify([])).residence_list.find(c => c.value == $parameters.Citizenship)

        $parameters.IsIDVSupported = Boolean(country?.identity?.services?.idv?.is_country_supported)
    };
});

define("tradershub.controller$PostSignupActions.SyncLocalStorageJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const response = JSON.parse($parameters.Response)

        const activeLoginId = response.authorize.loginid
        const accounts = {
            [activeLoginId]: {
                ...response.authorize.account_list[0],
                token: $parameters.Token,
                email: response.authorize.email,
                session_start: new Date().getTime(),
                excluded_until: "",
                landing_company_name: response.authorize.landing_company_name,
                residence: response.authorize.country,
                balance: response.authorize.balance,
                accepted_bch: 0
            }
        }

        let origin = `https://app.deriv.com`

        if (window.location.hostname !== "hub.deriv.com") {
            origin = `https://staging-app.deriv.com`
        }

        localStorage.setItem('client.accounts', JSON.stringify(accounts));
        localStorage.setItem('accountsList', JSON.stringify(accounts));


        const iframe = document.getElementById('localstorage-sync');
        if (iframe) {
            iframe?.contentWindow.postMessage({
                    key: 'client.accounts',
                    value: JSON.stringify(accounts),
                },
                origin
            );

            iframe?.contentWindow.postMessage({
                    key: 'active_loginid',
                    value: activeLoginId,
                },
                origin
            );
        }




        if (window.JSCookies) {
            // expiry time in minutes
            const inOneMinute = new Date(new Date().getTime() + 1 * 60 * 1000);

            JSCookies.set('client.accounts', JSON.stringify(accounts), {
                domain: ".deriv.com",
                expires: inOneMinute,
                secure: true
            })
            JSCookies.set('active_loginid', activeLoginId, {
                domain: ".deriv.com",
                expires: inOneMinute,
                secure: true
            })
        }


        if ($parameters.RedirectToDerivApp || $parameters.IsEU) {
            setTimeout(() => {
                const hostname = window.location.hostname;
                if (hostname === "hub.deriv.com") {
                    if ($parameters.IsEU) {
                        return window.location.href = `https://app.deriv.com/redirect?action=add_account_multiplier&ext_platform_url=https%3A%2F%2F${hostname}%2Ftradershub`
                    } else {
                        return window.location.href = `https://app.deriv.com/redirect?action=add_account&ext_platform_url=https%3A%2F%2F${hostname}%2Ftradershub`
                    }
                }

                if ($parameters.IsEU) {
                    window.location.href = `https://staging-app.deriv.com/redirect?action=add_account_multiplier&ext_platform_url=https%3A%2F%2F${window.location.hostname}%2Ftradershub`
                } else {
                    window.location.href = `https://staging-app.deriv.com/redirect?action=add_account&ext_platform_url=https%3A%2F%2F${window.location.hostname}%2Ftradershub`
                }
            }, 100)
        }


    };
});

define("tradershub.controller$PostSignupActions.CheckLandingCompanyJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const authorizeResponse = JSON.parse($parameters.Response)

        $parameters.IsEU = authorizeResponse.authorize.upgradeable_landing_companies.includes("maltainvest") && authorizeResponse.authorize.upgradeable_landing_companies.length === 1
    };
});


define("tradershub.controller$RudderstackIdentifyEvent", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$RudderstackIdentifyEvent.JavaScript1JS", "tradershub.clientVariables"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_RudderstackIdentifyEvent_JavaScript1JS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.rudderstackIdentifyEvent$Action = function(callContext) {
        return OS.Logger.startActiveSpan("RudderstackIdentifyEvent", function(span) {
            if (span) {
                span.setAttribute("code.function", "RudderstackIdentifyEvent");
                span.setAttribute("outsystems.function.key", "fc638f56-ebf5-4d97-b98b-9c11fd8958b6");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                OS.Logger.startActiveSpan("JavaScript1", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "JavaScript1");
                        span.setAttribute("outsystems.function.key", "ba887a5d-7907-4a7f-8ec9-8f90c9fe5cda");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(tradershub_controller_RudderstackIdentifyEvent_JavaScript1JS, "JavaScript1", "RudderstackIdentifyEvent", null, function($parameters) {}, {}, {});
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
    var controller = tradershubController.default;
    tradershubController.default.clientActionProxies.rudderstackIdentifyEvent$Action = function() {
        return controller.executeActionInsideJSNode(tradershubController.default.rudderstackIdentifyEvent$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});

define("tradershub.controller$RudderstackIdentifyEvent.JavaScript1JS", [], function() {
    return function($actions, $roles, $public) {
        const Analytics = window?.Analytics?.Analytics

        if (Analytics) {
            Analytics.identifyEvent()
        }
    };
});


define("tradershub.controller$SendAuthorize", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$SendAuthorize.AuthorizePayloadJS", "tradershub.controller$SendAuthorize.SeAccountsListJS", "tradershub.clientVariables", "tradershub.controller$DerivApiSendMessage", "tradershub.model$ST_2b68b61da9b8f6db8463a60cc48350faStructure"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_SendAuthorize_AuthorizePayloadJS, tradershub_controller_SendAuthorize_SeAccountsListJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.sendAuthorize$Action = function(setAccountsListIn, callContext) {
        return OS.Logger.startActiveSpan("SendAuthorize", function(span) {
            if (span) {
                span.setAttribute("code.function", "SendAuthorize");
                span.setAttribute("outsystems.function.key", "455be5e4-1117-4d84-99cc-decf8bfb75aa");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.SendAuthorize$vars"))());
                vars.value.setAccountsListInLocal = setAccountsListIn;
                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                var authorizePayloadJSResult = new OS.DataTypes.VariableHolder();
                var jSONDeserializeAuthorizeResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_2b68b61da9b8f6db8463a60cc48350faStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.SendAuthorize$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    return OS.Flow.executeSequence(function() {
                        if ((!((tradershubClientVariables.getAuthToken() === OS.BuiltinFunctions.nullTextIdentifier())))) {
                            authorizePayloadJSResult.value = OS.Logger.startActiveSpan("AuthorizePayload", function(span) {
                                if (span) {
                                    span.setAttribute("code.function", "AuthorizePayload");
                                    span.setAttribute("outsystems.function.key", "595fd88c-7a31-4f7e-af15-bfcf1efff8ba");
                                    span.setAttribute("outsystems.function.owner.name", "tradershub");
                                    span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                    span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                }

                                try {
                                    return controller.safeExecuteJSNode(tradershub_controller_SendAuthorize_AuthorizePayloadJS, "AuthorizePayload", "SendAuthorize", {
                                        AuthToken: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getAuthToken(), OS.DataTypes.DataTypes.Text),
                                        Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                    }, function($parameters) {
                                        var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.SendAuthorize$authorizePayloadJSResult"))();
                                        jsNodeResult.payloadOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Payload, OS.DataTypes.DataTypes.Text);
                                        return jsNodeResult;
                                    }, {}, {});
                                } finally {
                                    if (span) {
                                        span.end();
                                    }

                                }

                            }, 1);
                            // Execute Action: DerivApiSendMessage
                            return tradershubController.default.derivApiSendMessage$Action(authorizePayloadJSResult.value.payloadOut, "authorize", false, callContext).then(function(value) {
                                derivApiSendMessageVar.value = value;
                            }).then(function() {
                                if ((derivApiSendMessageVar.value.isErrorOut)) {
                                    // IsError = DerivApiSendMessage.IsError
                                    outVars.value.isErrorOut = derivApiSendMessageVar.value.isErrorOut;
                                    // ErrorMessage = DerivApiSendMessage.ErrorMessage
                                    outVars.value.errorMessageOut = derivApiSendMessageVar.value.errorMessageOut;
                                    // AuthToken = NullTextIdentifier
                                    tradershubClientVariables.setAuthToken(OS.BuiltinFunctions.nullTextIdentifier());
                                    // ActiveLoginId = NullTextIdentifier
                                    tradershubClientVariables.setActiveLoginId(OS.BuiltinFunctions.nullTextIdentifier());
                                } else {
                                    // JSON Deserialize: JSONDeserializeAuthorizeResponse
                                    jSONDeserializeAuthorizeResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(derivApiSendMessageVar.value.responseOut, tradershubModel.ST_2b68b61da9b8f6db8463a60cc48350faStructure, false);
                                    // Response = JSONDeserializeAuthorizeResponse.Data
                                    outVars.value.responseOut = jSONDeserializeAuthorizeResponseVar.value.dataOut;
                                    if ((vars.value.setAccountsListInLocal)) {
                                        OS.Logger.startActiveSpan("SeAccountsList", function(span) {
                                            if (span) {
                                                span.setAttribute("code.function", "SeAccountsList");
                                                span.setAttribute("outsystems.function.key", "f3f9ef33-e1b1-4b3f-8b64-1740df2d2164");
                                                span.setAttribute("outsystems.function.owner.name", "tradershub");
                                                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                                span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                            }

                                            try {
                                                return controller.safeExecuteJSNode(tradershub_controller_SendAuthorize_SeAccountsListJS, "SeAccountsList", "SendAuthorize", {
                                                    AuthorizeResponse: OS.DataConversion.JSNodeParamConverter.to(derivApiSendMessageVar.value.responseOut, OS.DataTypes.DataTypes.Text)
                                                }, function($parameters) {}, {}, {});
                                            } finally {
                                                if (span) {
                                                    span.end();
                                                }

                                            }

                                        }, 1);
                                    }

                                }

                            });
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
    var controller = tradershubController.default;
    tradershubController.default.constructor.registerVariableGroupType("tradershub.SendAuthorize$vars", [{
        name: "SetAccountsList",
        attrName: "setAccountsListInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.SendAuthorize$authorizePayloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.SendAuthorize$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new tradershubModel.ST_2b68b61da9b8f6db8463a60cc48350faStructure();
        },
        complexType: tradershubModel.ST_2b68b61da9b8f6db8463a60cc48350faStructure
    }, {
        name: "IsError",
        attrName: "isErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }, {
        name: "ErrorMessage",
        attrName: "errorMessageOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.clientActionProxies.sendAuthorize$Action = function(setAccountsListIn) {
        setAccountsListIn = (setAccountsListIn === undefined) ? false : setAccountsListIn;
        return controller.executeActionInsideJSNode(tradershubController.default.sendAuthorize$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(setAccountsListIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                IsError: OS.DataConversion.JSNodeParamConverter.to(actionResults.isErrorOut, OS.DataTypes.DataTypes.Boolean),
                ErrorMessage: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorMessageOut, OS.DataTypes.DataTypes.Text)
            };
        });
    };
});

define("tradershub.controller$SendAuthorize.AuthorizePayloadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.Payload = JSON.stringify({
            authorize: $parameters.AuthToken
        })
    };
});

define("tradershub.controller$SendAuthorize.SeAccountsListJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const response = JSON.parse($parameters.AuthorizeResponse)
        const authAccountsList = response?.authorize?.account_list ?? []
        const accountTokens = JSON.parse(localStorage.getItem('accountsList'))

        const accountsList = {}

        authAccountsList.forEach(account => {
            accountsList[account.loginid] = Object.assign({}, account, {
                token: accountTokens[account.loginid].token
            })
        })
        localStorage.setItem('accountsList', JSON.stringify(accountsList))

    };
});


define("tradershub.controller$SendGetSetting", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.clientVariables", "tradershub.controller$DerivApiSendMessage", "tradershub.model$ST_34132650bf66478c56079f24e67e094cStructure", "tradershub.model$ST_bd2236af041a218c8fde06ca0065cfd9Structure"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.sendGetSetting$Action = function(callContext) {
        return OS.Logger.startActiveSpan("SendGetSetting", function(span) {
            if (span) {
                span.setAttribute("code.function", "SendGetSetting");
                span.setAttribute("outsystems.function.key", "5c009e7b-61f7-49d8-82fc-68203484a77c");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                var jSONDeserializeGetSettingsResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(tradershubModel.ST_34132650bf66478c56079f24e67e094cStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.SendGetSetting$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: DerivApiSendMessage
                    return tradershubController.default.derivApiSendMessage$Action("", "get_settings", true, callContext).then(function(value) {
                        derivApiSendMessageVar.value = value;
                    }).then(function() {
                        // JSON Deserialize: JSONDeserializeGetSettingsResponse
                        jSONDeserializeGetSettingsResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(derivApiSendMessageVar.value.responseOut, tradershubModel.ST_34132650bf66478c56079f24e67e094cStructure, false);
                        // GetSettingResponse = JSONDeserializeGetSettingsResponse.Data
                        outVars.value.getSettingResponseOut = OS.DataConversion.JSConversions.typeConvertRecord(jSONDeserializeGetSettingsResponseVar.value.dataOut, new tradershubModel.ST_bd2236af041a218c8fde06ca0065cfd9Structure(), function(source, target) {
                            target = source.get_settingsAttr;
                            return target;
                        });
                        // IsError = DerivApiSendMessage.IsError
                        outVars.value.isErrorOut = derivApiSendMessageVar.value.isErrorOut;
                        // ErrorCode = DerivApiSendMessage.ErrorCode
                        outVars.value.errorCodeOut = derivApiSendMessageVar.value.errorCodeOut;
                        // ErrorMessage = DerivApiSendMessage.ErrorMessage
                        outVars.value.errorMessageOut = derivApiSendMessageVar.value.errorMessageOut;
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
    var controller = tradershubController.default;
    tradershubController.default.constructor.registerVariableGroupType("tradershub.SendGetSetting$outVars", [{
        name: "GetSettingResponse",
        attrName: "getSettingResponseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new tradershubModel.ST_bd2236af041a218c8fde06ca0065cfd9Structure();
        },
        complexType: tradershubModel.ST_bd2236af041a218c8fde06ca0065cfd9Structure
    }, {
        name: "IsError",
        attrName: "isErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }, {
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
    }]);
    tradershubController.default.clientActionProxies.sendGetSetting$Action = function() {
        return controller.executeActionInsideJSNode(tradershubController.default.sendGetSetting$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                GetSettingResponse: actionResults.getSettingResponseOut,
                IsError: OS.DataConversion.JSNodeParamConverter.to(actionResults.isErrorOut, OS.DataTypes.DataTypes.Boolean),
                ErrorCode: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorCodeOut, OS.DataTypes.DataTypes.Text),
                ErrorMessage: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorMessageOut, OS.DataTypes.DataTypes.Text)
            };
        });
    };
});


define("tradershub.controller$SendIDVDocumentDetails", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$SendIDVDocumentDetails.IDVPayloadJS", "tradershub.clientVariables", "tradershub.controller$DerivApiSendMessage"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_SendIDVDocumentDetails_IDVPayloadJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.sendIDVDocumentDetails$Action = function(callContext) {
        return OS.Logger.startActiveSpan("SendIDVDocumentDetails", function(span) {
            if (span) {
                span.setAttribute("code.function", "SendIDVDocumentDetails");
                span.setAttribute("outsystems.function.key", "d6132fde-386e-457a-943b-1661a68800e3");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                var iDVPayloadJSResult = new OS.DataTypes.VariableHolder();
                return OS.Flow.executeAsyncFlow(function() {
                    return OS.Flow.executeSequence(function() {
                        if (((tradershubClientVariables.getRealSignupIsIDVSupported() && !(tradershubClientVariables.getRealSignupSkippedIDV())))) {
                            iDVPayloadJSResult.value = OS.Logger.startActiveSpan("IDVPayload", function(span) {
                                if (span) {
                                    span.setAttribute("code.function", "IDVPayload");
                                    span.setAttribute("outsystems.function.key", "297f9739-be7a-49c5-b1de-95740e4b26ae");
                                    span.setAttribute("outsystems.function.owner.name", "tradershub");
                                    span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                    span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                }

                                try {
                                    return controller.safeExecuteJSNode(tradershub_controller_SendIDVDocumentDetails_IDVPayloadJS, "IDVPayload", "SendIDVDocumentDetails", {
                                        DocumentName: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupIDVDocumentName(), OS.DataTypes.DataTypes.Text),
                                        DocumentNumber: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupIDVDocumentNumber(), OS.DataTypes.DataTypes.Text),
                                        AdditionalDocumentNumber: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRealSignupIDVAdditionalDocumentNumber(), OS.DataTypes.DataTypes.Text),
                                        Citizen: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getSelectedCitizenship(), OS.DataTypes.DataTypes.Text),
                                        ResidenceList: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRawResidenceListResponse(), OS.DataTypes.DataTypes.Text),
                                        Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                    }, function($parameters) {
                                        var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.SendIDVDocumentDetails$iDVPayloadJSResult"))();
                                        jsNodeResult.payloadOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Payload, OS.DataTypes.DataTypes.Text);
                                        return jsNodeResult;
                                    }, {}, {});
                                } finally {
                                    if (span) {
                                        span.end();
                                    }

                                }

                            }, 1);
                            // Execute Action: DerivApiSendMessage
                            return tradershubController.default.derivApiSendMessage$Action(iDVPayloadJSResult.value.payloadOut, "identity_verification_document_add", true, callContext).then(function(value) {
                                derivApiSendMessageVar.value = value;
                            });
                        }

                    });
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
    var controller = tradershubController.default;
    tradershubController.default.constructor.registerVariableGroupType("tradershub.SendIDVDocumentDetails$iDVPayloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.clientActionProxies.sendIDVDocumentDetails$Action = function() {
        return controller.executeActionInsideJSNode(tradershubController.default.sendIDVDocumentDetails$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});

define("tradershub.controller$SendIDVDocumentDetails.IDVPayloadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const supportedDocuments = JSON.parse($parameters.ResidenceList)?.residence_list?.find(c => c.value == $parameters.Citizen)?.identity?.services?.idv?.documents_supported ?? {}

        function findKeyByDisplayName(displayName) {
            for (const [key, value] of Object.entries(supportedDocuments)) {
                if (value.display_name === displayName ||
                    (value.additional && value.additional.display_name === displayName)) {
                    return key;
                }
            }
            return null; // Return null if no matching display_name is found
        }




        const payload = {
            "document_number": $parameters.DocumentNumber,
            "document_type": findKeyByDisplayName($parameters.DocumentName),
            "issuing_country": $parameters.Citizen,
        }

        if ($parameters.AdditionalDocumentNumber) {
            payload.document_additional = $parameters.AdditionalDocumentNumber
        }

        $parameters.Payload = JSON.stringify(payload)
    };
});


define("tradershub.controller$SendResidenceList", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.clientVariables", "tradershub.controller$DerivApiSendMessage", "tradershub.model$ST_1eac13b44db3d2db577291973f4a7e96Structure"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.sendResidenceList$Action = function(authorizeIn, callContext) {
        return OS.Logger.startActiveSpan("SendResidenceList", function(span) {
            if (span) {
                span.setAttribute("code.function", "SendResidenceList");
                span.setAttribute("outsystems.function.key", "4c696ebb-bc26-4609-9f8a-ba5b6dec9873");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.SendResidenceList$vars"))());
                vars.value.authorizeInLocal = authorizeIn;
                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.SendResidenceList$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: DerivApiSendMessage
                    return tradershubController.default.derivApiSendMessage$Action("", "residence_list", vars.value.authorizeInLocal, callContext).then(function(value) {
                        derivApiSendMessageVar.value = value;
                    }).then(function() {
                        if ((!(derivApiSendMessageVar.value.isErrorOut))) {
                            // RawResidenceListResponse = DerivApiSendMessage.Response
                            tradershubClientVariables.setRawResidenceListResponse(derivApiSendMessageVar.value.responseOut);
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
    var controller = tradershubController.default;
    tradershubController.default.constructor.registerVariableGroupType("tradershub.SendResidenceList$vars", [{
        name: "Authorize",
        attrName: "authorizeInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.SendResidenceList$outVars", [{
        name: "ResidentListResponse",
        attrName: "residentListResponseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new tradershubModel.ST_1eac13b44db3d2db577291973f4a7e96Structure();
        },
        complexType: tradershubModel.ST_1eac13b44db3d2db577291973f4a7e96Structure
    }]);
    tradershubController.default.clientActionProxies.sendResidenceList$Action = function(authorizeIn) {
        authorizeIn = (authorizeIn === undefined) ? false : authorizeIn;
        return controller.executeActionInsideJSNode(tradershubController.default.sendResidenceList$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(authorizeIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                ResidentListResponse: actionResults.residentListResponseOut
            };
        });
    };
});


define("tradershub.controller$SetAccountSettings", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.clientVariables", "tradershub.controller$DerivApiSendMessage"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.setAccountSettings$Action = function(payloadIn, callContext) {
        return OS.Logger.startActiveSpan("SetAccountSettings", function(span) {
            if (span) {
                span.setAttribute("code.function", "SetAccountSettings");
                span.setAttribute("outsystems.function.key", "003c208d-6036-4c7a-8bd8-03fe9b246835");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.SetAccountSettings$vars"))());
                vars.value.payloadInLocal = payloadIn;
                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: DerivApiSendMessage
                    return tradershubController.default.derivApiSendMessage$Action(vars.value.payloadInLocal, "set_settings", true, callContext).then(function(value) {
                        derivApiSendMessageVar.value = value;
                    });
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
    var controller = tradershubController.default;
    tradershubController.default.constructor.registerVariableGroupType("tradershub.SetAccountSettings$vars", [{
        name: "Payload",
        attrName: "payloadInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.clientActionProxies.setAccountSettings$Action = function(payloadIn) {
        payloadIn = (payloadIn === undefined) ? "" : payloadIn;
        return controller.executeActionInsideJSNode(tradershubController.default.setAccountSettings$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(payloadIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});


define("tradershub.controller$SyncAccountInfo", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$SyncAccountInfo.SyncLocalStorageJS", "tradershub.clientVariables"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_SyncAccountInfo_SyncLocalStorageJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.syncAccountInfo$Action = function(callContext) {
        return OS.Logger.startActiveSpan("SyncAccountInfo", function(span) {
            if (span) {
                span.setAttribute("code.function", "SyncAccountInfo");
                span.setAttribute("outsystems.function.key", "4f9700a2-fd8c-4f80-86d5-acfe5b6a40ec");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                OS.Logger.startActiveSpan("SyncLocalStorage", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SyncLocalStorage");
                        span.setAttribute("outsystems.function.key", "7703b8db-e711-48ef-a5ac-5582f694d3f4");
                        span.setAttribute("outsystems.function.owner.name", "tradershub");
                        span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(tradershub_controller_SyncAccountInfo_SyncLocalStorageJS, "SyncLocalStorage", "SyncAccountInfo", {
                            ActiveLoginId: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getActiveLoginId(), OS.DataTypes.DataTypes.Text)
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
    var controller = tradershubController.default;
    tradershubController.default.clientActionProxies.syncAccountInfo$Action = function() {
        return controller.executeActionInsideJSNode(tradershubController.default.syncAccountInfo$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});

define("tradershub.controller$SyncAccountInfo.SyncLocalStorageJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        let origin = `https://app.deriv.com`

        if (window.location.hostname !== "hub.deriv.com") {
            origin = `https://staging-app.deriv.com`
        }

        const iframe = document.getElementById('localstorage-sync');
        if (iframe) {
            iframe?.contentWindow.postMessage({
                    key: 'client.accounts',
                    value: localStorage.getItem('client.accounts'),
                },
                origin
            );

            iframe?.contentWindow.postMessage({
                    key: 'active_loginid',
                    value: $parameters.ActiveLoginId,
                },
                origin
            );
        }


        if (window.JSCookies) {
            // expiry time in minutes
            const inOneMinute = new Date(new Date().getTime() + 1 * 60 * 1000);

            JSCookies.set('client.accounts', localStorage.getItem('client.accounts'), {
                domain: ".deriv.com",
                expires: inOneMinute,
                secure: true
            })
            JSCookies.set('active_loginid', $parameters.ActiveLoginId, {
                domain: ".deriv.com",
                expires: inOneMinute,
                secure: true
            })
        }

        setTimeout(() => {
            const hostname = window.location.hostname;
            if (hostname === "hub.deriv.com") {
                return window.location.href = `https://app.deriv.com/redirect`
            }

            window.location.href = `https://staging-app.deriv.com/redirect`
        }, 100)


    };
});


define("tradershub.controller$TopupVirtualAccount", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.clientVariables", "tradershub.controller$DerivApiSendMessage"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.topupVirtualAccount$Action = function(callContext) {
        return OS.Logger.startActiveSpan("TopupVirtualAccount", function(span) {
            if (span) {
                span.setAttribute("code.function", "TopupVirtualAccount");
                span.setAttribute("outsystems.function.key", "3a19e4cc-4945-41e3-a476-eb239c4e6e99");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: DerivApiSendMessage
                    return tradershubController.default.derivApiSendMessage$Action("", "topup_virtual", false, callContext).then(function(value) {
                        derivApiSendMessageVar.value = value;
                    }).then(function() {
                        if ((derivApiSendMessageVar.value.isErrorOut)) {
                            OS.FeedbackMessageService.showFeedbackMessage("You\'ve reset your demo account balance to USD 10,000.", /*Success*/ 1);
                        }

                    });
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
    var controller = tradershubController.default;
    tradershubController.default.clientActionProxies.topupVirtualAccount$Action = function() {
        return controller.executeActionInsideJSNode(tradershubController.default.topupVirtualAccount$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});


define("tradershub.controller$TradingPlatformProductListing", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.controller$TradingPlatformProductListing.TradingPlatformPayloadJS", "tradershub.controller$TradingPlatformProductListing.ModifyDataJS", "tradershub.clientVariables", "tradershub.controller$DerivApiSendMessage"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershub_controller_TradingPlatformProductListing_TradingPlatformPayloadJS, tradershub_controller_TradingPlatformProductListing_ModifyDataJS, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    tradershubController.default.tradingPlatformProductListing$Action = function(callContext) {
        return OS.Logger.startActiveSpan("TradingPlatformProductListing", function(span) {
            if (span) {
                span.setAttribute("code.function", "TradingPlatformProductListing");
                span.setAttribute("outsystems.function.key", "7a57ee9e-a715-4b64-9e4e-14523f23e4e7");
                span.setAttribute("outsystems.function.owner.name", "tradershub");
                span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
                var tradingPlatformPayloadJSResult = new OS.DataTypes.VariableHolder();
                var modifyDataJSResult = new OS.DataTypes.VariableHolder();
                var jSONDeserializeTextListVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(OS.DataTypes.TextList))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("tradershub.TradingPlatformProductListing$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    tradingPlatformPayloadJSResult.value = OS.Logger.startActiveSpan("TradingPlatformPayload", function(span) {
                        if (span) {
                            span.setAttribute("code.function", "TradingPlatformPayload");
                            span.setAttribute("outsystems.function.key", "1dfe2961-e737-4b94-b007-6c107a5f4912");
                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                        }

                        try {
                            return controller.safeExecuteJSNode(tradershub_controller_TradingPlatformProductListing_TradingPlatformPayloadJS, "TradingPlatformPayload", "TradingPlatformProductListing", {
                                WebsiteData: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRawWebsiteStatusResponse(), OS.DataTypes.DataTypes.Text),
                                ClientCountry: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getClientCountry(), OS.DataTypes.DataTypes.Text),
                                Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                            }, function($parameters) {
                                var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.TradingPlatformProductListing$tradingPlatformPayloadJSResult"))();
                                jsNodeResult.payloadOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Payload, OS.DataTypes.DataTypes.Text);
                                return jsNodeResult;
                            }, {}, {});
                        } finally {
                            if (span) {
                                span.end();
                            }

                        }

                    }, 1);
                    // Execute Action: DerivApiSendMessage
                    return tradershubController.default.derivApiSendMessage$Action(tradingPlatformPayloadJSResult.value.payloadOut, "trading_platform_product_listing", false, callContext).then(function(value) {
                        derivApiSendMessageVar.value = value;
                    }).then(function() {
                        if ((!(derivApiSendMessageVar.value.isErrorOut))) {
                            modifyDataJSResult.value = OS.Logger.startActiveSpan("ModifyData", function(span) {
                                if (span) {
                                    span.setAttribute("code.function", "ModifyData");
                                    span.setAttribute("outsystems.function.key", "9c5be832-2cf3-4a33-996d-b3a8e2bf6ef3");
                                    span.setAttribute("outsystems.function.owner.name", "tradershub");
                                    span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                    span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                }

                                try {
                                    return controller.safeExecuteJSNode(tradershub_controller_TradingPlatformProductListing_ModifyDataJS, "ModifyData", "TradingPlatformProductListing", {
                                        Data: OS.DataConversion.JSNodeParamConverter.to(derivApiSendMessageVar.value.responseOut, OS.DataTypes.DataTypes.Text),
                                        DTraderAvailableTradeTypes: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                        ShouldShowDBot: OS.DataConversion.JSNodeParamConverter.to(true, OS.DataTypes.DataTypes.Boolean),
                                        ShouldShowSmartTrader: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
                                        ShouldShowDerivGo: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
                                        ShouldShowDTrader: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                                    }, function($parameters) {
                                        var jsNodeResult = new(controller.constructor.getVariableGroupType("tradershub.TradingPlatformProductListing$modifyDataJSResult"))();
                                        jsNodeResult.dTraderAvailableTradeTypesOut = OS.DataConversion.JSNodeParamConverter.from($parameters.DTraderAvailableTradeTypes, OS.DataTypes.DataTypes.Text);
                                        jsNodeResult.shouldShowDBotOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ShouldShowDBot, OS.DataTypes.DataTypes.Boolean);
                                        jsNodeResult.shouldShowSmartTraderOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ShouldShowSmartTrader, OS.DataTypes.DataTypes.Boolean);
                                        jsNodeResult.shouldShowDerivGoOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ShouldShowDerivGo, OS.DataTypes.DataTypes.Boolean);
                                        jsNodeResult.shouldShowDTraderOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ShouldShowDTrader, OS.DataTypes.DataTypes.Boolean);
                                        return jsNodeResult;
                                    }, {}, {});
                                } finally {
                                    if (span) {
                                        span.end();
                                    }

                                }

                            }, 1);
                            // JSON Deserialize: JSONDeserializeTextList
                            jSONDeserializeTextListVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(modifyDataJSResult.value.dTraderAvailableTradeTypesOut, OS.DataTypes.TextList, false);
                            // ShouldShowDBot = ModifyData.ShouldShowDBot
                            outVars.value.shouldShowDBotOut = modifyDataJSResult.value.shouldShowDBotOut;
                            // ShouldShowSmartTrader = ModifyData.ShouldShowSmartTrader
                            outVars.value.shouldShowSmartTraderOut = modifyDataJSResult.value.shouldShowSmartTraderOut;
                            // ShouldShowDerivGo = ModifyData.ShouldShowDerivGo
                            outVars.value.shouldShowDerivGoOut = modifyDataJSResult.value.shouldShowDerivGoOut;
                            // DTraderAvailableTradeTypes = JSONDeserializeTextList.Data
                            outVars.value.dTraderAvailableTradeTypesOut = jSONDeserializeTextListVar.value.dataOut;
                            // ShouldShowDTrader = ModifyData.ShouldShowDTrader
                            outVars.value.shouldShowDTraderOut = modifyDataJSResult.value.shouldShowDTraderOut;
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
    var controller = tradershubController.default;
    tradershubController.default.constructor.registerVariableGroupType("tradershub.TradingPlatformProductListing$tradingPlatformPayloadJSResult", [{
        name: "Payload",
        attrName: "payloadOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.TradingPlatformProductListing$modifyDataJSResult", [{
        name: "DTraderAvailableTradeTypes",
        attrName: "dTraderAvailableTradeTypesOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "ShouldShowDBot",
        attrName: "shouldShowDBotOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return true;
        }
    }, {
        name: "ShouldShowSmartTrader",
        attrName: "shouldShowSmartTraderOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }, {
        name: "ShouldShowDerivGo",
        attrName: "shouldShowDerivGoOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }, {
        name: "ShouldShowDTrader",
        attrName: "shouldShowDTraderOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    tradershubController.default.constructor.registerVariableGroupType("tradershub.TradingPlatformProductListing$outVars", [{
        name: "DTraderAvailableTradeTypes",
        attrName: "dTraderAvailableTradeTypesOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.RecordList,
        defaultValue: function() {
            return new OS.DataTypes.TextList();
        },
        complexType: OS.DataTypes.TextList
    }, {
        name: "ShouldShowDBot",
        attrName: "shouldShowDBotOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return true;
        }
    }, {
        name: "ShouldShowSmartTrader",
        attrName: "shouldShowSmartTraderOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return true;
        }
    }, {
        name: "ShouldShowDerivGo",
        attrName: "shouldShowDerivGoOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return true;
        }
    }, {
        name: "ShouldShowDTrader",
        attrName: "shouldShowDTraderOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    tradershubController.default.clientActionProxies.tradingPlatformProductListing$Action = function() {
        return controller.executeActionInsideJSNode(tradershubController.default.tradingPlatformProductListing$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                DTraderAvailableTradeTypes: actionResults.dTraderAvailableTradeTypesOut,
                ShouldShowDBot: OS.DataConversion.JSNodeParamConverter.to(actionResults.shouldShowDBotOut, OS.DataTypes.DataTypes.Boolean),
                ShouldShowSmartTrader: OS.DataConversion.JSNodeParamConverter.to(actionResults.shouldShowSmartTraderOut, OS.DataTypes.DataTypes.Boolean),
                ShouldShowDerivGo: OS.DataConversion.JSNodeParamConverter.to(actionResults.shouldShowDerivGoOut, OS.DataTypes.DataTypes.Boolean),
                ShouldShowDTrader: OS.DataConversion.JSNodeParamConverter.to(actionResults.shouldShowDTraderOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});

define("tradershub.controller$TradingPlatformProductListing.TradingPlatformPayloadJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const payload = {
            "country_code": $parameters.ClientCountry,
            "app_id": [30767, 19111, 22168, 23789],
            "query": ["name", "available_markets", "available_trade_types"]
        }

        $parameters.Payload = JSON.stringify(payload);
    };
});

define("tradershub.controller$TradingPlatformProductListing.ModifyDataJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        const data = JSON.parse($parameters.Data);
        const tradingPlatformProductListing = data?.trading_platform_product_listing;

        const DTraderData = tradingPlatformProductListing['30767'];
        const DBotData = tradingPlatformProductListing['19111'];
        const SmartTraderData = tradingPlatformProductListing['22168'];
        const DerivGoData = tradingPlatformProductListing['23789'];

        $parameters.DTraderAvailableTradeTypes = JSON.stringify(DTraderData.available_trade_types);
        $parameters.ShouldShowDBot = Boolean(DBotData?.name);
        $parameters.ShouldShowSmartTrader = Boolean(SmartTraderData?.name);
        $parameters.ShouldShowDerivGo = Boolean(DerivGoData?.name);
        $parameters.ShouldShowDTrader = Boolean(DTraderData?.name);

    };
});


define("tradershub.controller", ["exports", "@outsystems/runtime-core-js", "tradershub.model"], function(exports, OSRuntimeCore, tradershubModel) {
    var OS = OSRuntimeCore;
    var tradershubController = exports;
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

        checktradershubRole$Action(callContext) {
            var outVars = new OS.SystemStructures.HasRoleResultRec();
            outVars.hasRoleOut = OS.Authorization.hasRole({
                roleKey: this.roles.tradershub.roleKey
            });
            return outVars;

        }


        get roles() {
            if (!(this.hasOwnProperty("_roles"))) {
                this._roles = {
                    tradershub: {
                        roleKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc.ab2a6b39-1f30-4f20-a069-cf5d18b076f4",
                        roleException: new OS.Exceptions.Exceptions.NotRegisteredException("tradershub.Nottradershub", "tradershub role required")
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
                this._defaultTimeout = 10;
            }

            return this._defaultTimeout;
        }
        set defaultTimeout(value) {
            this._defaultTimeout = value;
        }

        getDefaultTimeout() {
            return tradershubController.default.defaultTimeout;
        }

    }

    tradershubController.default = new Controller();
});