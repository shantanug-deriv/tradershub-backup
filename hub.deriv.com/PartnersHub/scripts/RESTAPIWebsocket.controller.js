define("RESTAPIWebsocket.controller$Authorize", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "RESTAPIWebsocket.controller$Authorize.FetchAuthorizeJS", "RESTAPIWebsocket.model$ST_450f06937a42e6bd68832beac9fd4297Structure", "RESTAPIWebsocket.model$ST_f502318fbe2f943e6cfbba125766780aStructure", "RESTAPIWebsocket.controller$ServerAction.PostAuthorize"], function(exports, OSRuntimeCore, RESTAPIWebsocketModel, RESTAPIWebsocketController, RESTAPIWebsocket_controller_Authorize_FetchAuthorizeJS) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketController.default.authorize$Action = function(appIdIn, languageIn, authorizeRequestIn, hostIn, callContext) {
        return OS.Logger.startActiveSpan("Authorize", function(span) {
            if (span) {
                span.setAttribute("code.function", "Authorize");
                span.setAttribute("outsystems.function.key", "ca75e3f6-bdd2-4188-9963-d3e5b700ea32");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocket");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocket.Authorize$vars"))());
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                vars.value.authorizeRequestInLocal = authorizeRequestIn.clone();
                vars.value.hostInLocal = hostIn;
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var postAuthorizeVar = new OS.DataTypes.VariableHolder();
                var fetchAuthorizeJSResult = new OS.DataTypes.VariableHolder();
                var requestSerializeVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketModel.ST_f502318fbe2f943e6cfbba125766780aStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocket.Authorize$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // host check
                    return OS.Flow.executeSequence(function() {
                        if (((((vars.value.hostInLocal === "green.derivws.com")) ? (true) : (false)))) {
                            // Execute Action: PostAuthorize
                            return controller.postAuthorize$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, vars.value.authorizeRequestInLocal, callContext).then(function(value) {
                                postAuthorizeVar.value = value;
                            }).then(function() {
                                // Response = PostAuthorize.Response
                                outVars.value.responseOut = postAuthorizeVar.value.responseOut;
                            });
                        } else {
                            // JSON Serialize: RequestSerialize
                            requestSerializeVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.authorizeRequestInLocal, false, false);
                            fetchAuthorizeJSResult.value = OS.Logger.startActiveSpan("FetchAuthorize", function(span) {
                                if (span) {
                                    span.setAttribute("code.function", "FetchAuthorize");
                                    span.setAttribute("outsystems.function.key", "384e0f02-dc50-492b-a14a-aa1fc7f6dc75");
                                    span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocket");
                                    span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                    span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                }

                                try {
                                    return controller.safeExecuteJSNode(RESTAPIWebsocket_controller_Authorize_FetchAuthorizeJS, "FetchAuthorize", "Authorize", {
                                        language: OS.DataConversion.JSNodeParamConverter.to(vars.value.languageInLocal, OS.DataTypes.DataTypes.Text),
                                        host: OS.DataConversion.JSNodeParamConverter.to(vars.value.hostInLocal, OS.DataTypes.DataTypes.Text),
                                        appId: OS.DataConversion.JSNodeParamConverter.to(vars.value.appIdInLocal, OS.DataTypes.DataTypes.Text),
                                        AuthorizeRequest: OS.DataConversion.JSNodeParamConverter.to(requestSerializeVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                        Response: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                    }, function($parameters) {
                                        var jsNodeResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocket.Authorize$fetchAuthorizeJSResult"))();
                                        jsNodeResult.responseOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Response, OS.DataTypes.DataTypes.Text);
                                        return jsNodeResult;
                                    }, {}, {});
                                } finally {
                                    if (span) {
                                        span.end();
                                    }

                                }

                            }, 1);
                            // JSON Deserialize: ResponseDeserialize
                            responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchAuthorizeJSResult.value.responseOut, RESTAPIWebsocketModel.ST_f502318fbe2f943e6cfbba125766780aStructure, false);
                            // Response = ResponseDeserialize.Data
                            outVars.value.responseOut = responseDeserializeVar.value.dataOut;
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("Authorize.Authorize", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "d80958c6-7d1d-4277-b4e0-6ab8428a6d24");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocket");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // isNetworkError = True
                                    outVars.value.isNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketController.default;
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket.Authorize$vars", [{
        name: "appId",
        attrName: "appIdInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "language",
        attrName: "languageInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "AuthorizeRequest",
        attrName: "authorizeRequestInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketModel.ST_450f06937a42e6bd68832beac9fd4297Structure();
        },
        complexType: RESTAPIWebsocketModel.ST_450f06937a42e6bd68832beac9fd4297Structure
    }, {
        name: "host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket.Authorize$fetchAuthorizeJSResult", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket.Authorize$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketModel.ST_f502318fbe2f943e6cfbba125766780aStructure();
        },
        complexType: RESTAPIWebsocketModel.ST_f502318fbe2f943e6cfbba125766780aStructure
    }, {
        name: "isNetworkError",
        attrName: "isNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketController.default.clientActionProxies.authorize$Action = function(appIdIn, languageIn, authorizeRequestIn, hostIn) {
        appIdIn = (appIdIn === undefined) ? "" : appIdIn;
        languageIn = (languageIn === undefined) ? "" : languageIn;
        authorizeRequestIn = (authorizeRequestIn === undefined) ? new RESTAPIWebsocketModel.ST_450f06937a42e6bd68832beac9fd4297Structure() : authorizeRequestIn;
        hostIn = (hostIn === undefined) ? "" : hostIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketController.default.authorize$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text), authorizeRequestIn, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                isNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.isNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});

define("RESTAPIWebsocket.controller$Authorize.FetchAuthorizeJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        async function fetchHandler(url, options = {}) {
            try {
                const response = await fetch(url, options);
                // Check if the response status is 2xx (successful)
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                // Try to parse the response as JSON
                const data = await response.json();
                // Here you can handle the parsed data as needed
                return data;
            } catch (error) {
                // Handle network errors or any other errors that occur during the fetch
                console.error('Fetch error:', error.message);
                // You can return a custom error object, log it, or rethrow the error
                return {
                    error: error.message
                };
            }
        }
        // Example usage
        const fetchData = async () => {
            const host = $parameters.host;
            const appId = $parameters.appId;
            const language = $parameters.language;
            const url = `https://${host}/websockets/authorize?app_id=${appId}&l=${language}&brand=deriv`;

            const options = {
                method: 'POST', // or 'POST', 'PUT', etc.
                headers: {
                    'Content-Type': 'application/json',
                    // Add any other headers you need
                },
                body: $parameters.AuthorizeRequest
            };
            const result = await fetchHandler(url, options);

            $parameters.Response = JSON.stringify(result)
        };
        fetchData();
    };
});


define("RESTAPIWebsocket.controller$GetSettings", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "RESTAPIWebsocket.controller$GetSettings.FetchGetSettingsJS", "RESTAPIWebsocket.model$ST_5fc2e4a935064c1413d6e989e87decd2Structure", "RESTAPIWebsocket.controller$ServerAction.GetGetSettings"], function(exports, OSRuntimeCore, RESTAPIWebsocketModel, RESTAPIWebsocketController, RESTAPIWebsocket_controller_GetSettings_FetchGetSettingsJS) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketController.default.getSettings$Action = function(appIdIn, languageIn, hostIn, authTokenIn, callContext) {
        return OS.Logger.startActiveSpan("GetSettings", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetSettings");
                span.setAttribute("outsystems.function.key", "0fa4225e-5367-4fbf-b85e-87a5f0ca0e54");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocket");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocket.GetSettings$vars"))());
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                vars.value.hostInLocal = hostIn;
                vars.value.authTokenInLocal = authTokenIn;
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var getGetSettingsVar = new OS.DataTypes.VariableHolder();
                var fetchGetSettingsJSResult = new OS.DataTypes.VariableHolder();
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketModel.ST_5fc2e4a935064c1413d6e989e87decd2Structure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocket.GetSettings$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // host check
                    return OS.Flow.executeSequence(function() {
                        if (((((vars.value.hostInLocal === "green.derivws.com")) ? (true) : (false)))) {
                            // Execute Action: GetGetSettings
                            return controller.getGetSettings$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, vars.value.authTokenInLocal, callContext).then(function(value) {
                                getGetSettingsVar.value = value;
                            }).then(function() {
                                // Response = GetGetSettings.Response
                                outVars.value.responseOut = getGetSettingsVar.value.responseOut;
                            });
                        } else {
                            fetchGetSettingsJSResult.value = OS.Logger.startActiveSpan("FetchGetSettings", function(span) {
                                if (span) {
                                    span.setAttribute("code.function", "FetchGetSettings");
                                    span.setAttribute("outsystems.function.key", "21f4f9a2-f491-4439-b4c7-209c3101495b");
                                    span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocket");
                                    span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                    span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                }

                                try {
                                    return controller.safeExecuteJSNode(RESTAPIWebsocket_controller_GetSettings_FetchGetSettingsJS, "FetchGetSettings", "GetSettings", {
                                        host: OS.DataConversion.JSNodeParamConverter.to(vars.value.hostInLocal, OS.DataTypes.DataTypes.Text),
                                        authToken: OS.DataConversion.JSNodeParamConverter.to(vars.value.authTokenInLocal, OS.DataTypes.DataTypes.Text),
                                        appId: OS.DataConversion.JSNodeParamConverter.to(vars.value.appIdInLocal, OS.DataTypes.DataTypes.Text),
                                        language: OS.DataConversion.JSNodeParamConverter.to(vars.value.languageInLocal, OS.DataTypes.DataTypes.Text),
                                        Response: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                    }, function($parameters) {
                                        var jsNodeResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocket.GetSettings$fetchGetSettingsJSResult"))();
                                        jsNodeResult.responseOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Response, OS.DataTypes.DataTypes.Text);
                                        return jsNodeResult;
                                    }, {}, {});
                                } finally {
                                    if (span) {
                                        span.end();
                                    }

                                }

                            }, 1);
                            // JSON Deserialize: ResponseDeserialize
                            responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchGetSettingsJSResult.value.responseOut, RESTAPIWebsocketModel.ST_5fc2e4a935064c1413d6e989e87decd2Structure, false);
                            // Response = ResponseDeserialize.Data
                            outVars.value.responseOut = responseDeserializeVar.value.dataOut;
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("GetSettings.GetSettings", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "a0f43956-c791-4f0c-8b7b-3442bb6ca6c5");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocket");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // isNetworkError = True
                                    outVars.value.isNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketController.default;
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket.GetSettings$vars", [{
        name: "appId",
        attrName: "appIdInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "language",
        attrName: "languageInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "authToken",
        attrName: "authTokenInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket.GetSettings$fetchGetSettingsJSResult", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket.GetSettings$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketModel.ST_5fc2e4a935064c1413d6e989e87decd2Structure();
        },
        complexType: RESTAPIWebsocketModel.ST_5fc2e4a935064c1413d6e989e87decd2Structure
    }, {
        name: "isNetworkError",
        attrName: "isNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketController.default.clientActionProxies.getSettings$Action = function(appIdIn, languageIn, hostIn, authTokenIn) {
        appIdIn = (appIdIn === undefined) ? "" : appIdIn;
        languageIn = (languageIn === undefined) ? "" : languageIn;
        hostIn = (hostIn === undefined) ? "" : hostIn;
        authTokenIn = (authTokenIn === undefined) ? "" : authTokenIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketController.default.getSettings$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authTokenIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                isNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.isNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});

define("RESTAPIWebsocket.controller$GetSettings.FetchGetSettingsJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        async function fetchHandler(url, options = {}) {
            try {
                const response = await fetch(url, options);
                // Check if the response status is 2xx (successful)
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                // Try to parse the response as JSON
                const data = await response.json();
                // Here you can handle the parsed data as needed
                return data;
            } catch (error) {
                // Handle network errors or any other errors that occur during the fetch
                console.error('Fetch error:', error.message);
                // You can return a custom error object, log it, or rethrow the error
                return {
                    error: error.message
                };
            }
        }
        // Example usage
        const fetchData = async () => {
            const host = $parameters.host;
            const appId = $parameters.appId;
            const language = $parameters.language;
            const url = `https://${host}/websockets/get_settings?app_id=${appId}&l=${language}&brand=deriv`;

            const options = {
                method: 'GET', // or 'POST', 'PUT', etc.
                headers: {
                    'Content-Type': 'application/json',
                    'X-Token': $parameters.authToken
                    // Add any other headers you need
                }
            };
            const result = await fetchHandler(url, options);
            console.log(result)

            $parameters.Response = JSON.stringify(result)
        };
        fetchData();
    };
});


define("RESTAPIWebsocket.controller$LandingCompany", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "RESTAPIWebsocket.controller$LandingCompany.FetchJS", "RESTAPIWebsocket.model$ST_2aa6b158772e078b381113da0ab825f8Structure", "RESTAPIWebsocket.model$ST_55477c48be760e041c4dbfa365f63009Structure", "RESTAPIWebsocket.controller$ServerAction.GetLandingCompany"], function(exports, OSRuntimeCore, RESTAPIWebsocketModel, RESTAPIWebsocketController, RESTAPIWebsocket_controller_LandingCompany_FetchJS) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketController.default.landingCompany$Action = function(appIdIn, languageIn, landingCompanyRequestIn, hostIn, callContext) {
        return OS.Logger.startActiveSpan("LandingCompany", function(span) {
            if (span) {
                span.setAttribute("code.function", "LandingCompany");
                span.setAttribute("outsystems.function.key", "c0d48f63-deca-48f5-bfe3-2cf8d70902dd");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocket");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocket.LandingCompany$vars"))());
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                vars.value.landingCompanyRequestInLocal = landingCompanyRequestIn.clone();
                vars.value.hostInLocal = hostIn;
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var getLandingCompanyVar = new OS.DataTypes.VariableHolder();
                var fetchJSResult = new OS.DataTypes.VariableHolder();
                var requestSerializeVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketModel.ST_55477c48be760e041c4dbfa365f63009Structure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocket.LandingCompany$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // host check
                    return OS.Flow.executeSequence(function() {
                        if (((((vars.value.hostInLocal === "green.derivws.com")) ? (true) : (false)))) {
                            // Execute Action: GetLandingCompany
                            return controller.getLandingCompany$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, vars.value.landingCompanyRequestInLocal, callContext).then(function(value) {
                                getLandingCompanyVar.value = value;
                            }).then(function() {
                                // Response = GetLandingCompany.Response
                                outVars.value.responseOut = getLandingCompanyVar.value.responseOut;
                            });
                        } else {
                            // JSON Serialize: RequestSerialize
                            requestSerializeVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.landingCompanyRequestInLocal, false, false);
                            fetchJSResult.value = OS.Logger.startActiveSpan("Fetch", function(span) {
                                if (span) {
                                    span.setAttribute("code.function", "Fetch");
                                    span.setAttribute("outsystems.function.key", "8f772183-5593-478b-8926-275509970e58");
                                    span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocket");
                                    span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                    span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                }

                                try {
                                    return controller.safeExecuteJSNode(RESTAPIWebsocket_controller_LandingCompany_FetchJS, "Fetch", "LandingCompany", {
                                        language: OS.DataConversion.JSNodeParamConverter.to(vars.value.languageInLocal, OS.DataTypes.DataTypes.Text),
                                        Request: OS.DataConversion.JSNodeParamConverter.to(requestSerializeVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                        appId: OS.DataConversion.JSNodeParamConverter.to(vars.value.appIdInLocal, OS.DataTypes.DataTypes.Text),
                                        host: OS.DataConversion.JSNodeParamConverter.to(vars.value.hostInLocal, OS.DataTypes.DataTypes.Text),
                                        Response: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                    }, function($parameters) {
                                        var jsNodeResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocket.LandingCompany$fetchJSResult"))();
                                        jsNodeResult.responseOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Response, OS.DataTypes.DataTypes.Text);
                                        return jsNodeResult;
                                    }, {}, {});
                                } finally {
                                    if (span) {
                                        span.end();
                                    }

                                }

                            }, 1);
                            // JSON Deserialize: ResponseDeserialize
                            responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchJSResult.value.responseOut, RESTAPIWebsocketModel.ST_55477c48be760e041c4dbfa365f63009Structure, false);
                            // Response = ResponseDeserialize.Data
                            outVars.value.responseOut = responseDeserializeVar.value.dataOut;
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("LandingCompany.LandingCompany", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "1a2aaafd-a2bf-4e13-9861-75c4282efc9b");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocket");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // isNetworkError = True
                                    outVars.value.isNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketController.default;
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket.LandingCompany$vars", [{
        name: "appId",
        attrName: "appIdInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "language",
        attrName: "languageInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "LandingCompanyRequest",
        attrName: "landingCompanyRequestInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketModel.ST_2aa6b158772e078b381113da0ab825f8Structure();
        },
        complexType: RESTAPIWebsocketModel.ST_2aa6b158772e078b381113da0ab825f8Structure
    }, {
        name: "host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket.LandingCompany$fetchJSResult", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket.LandingCompany$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketModel.ST_55477c48be760e041c4dbfa365f63009Structure();
        },
        complexType: RESTAPIWebsocketModel.ST_55477c48be760e041c4dbfa365f63009Structure
    }, {
        name: "isNetworkError",
        attrName: "isNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketController.default.clientActionProxies.landingCompany$Action = function(appIdIn, languageIn, landingCompanyRequestIn, hostIn) {
        appIdIn = (appIdIn === undefined) ? "" : appIdIn;
        languageIn = (languageIn === undefined) ? "" : languageIn;
        landingCompanyRequestIn = (landingCompanyRequestIn === undefined) ? new RESTAPIWebsocketModel.ST_2aa6b158772e078b381113da0ab825f8Structure() : landingCompanyRequestIn;
        hostIn = (hostIn === undefined) ? "" : hostIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketController.default.landingCompany$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text), landingCompanyRequestIn, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                isNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.isNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});

define("RESTAPIWebsocket.controller$LandingCompany.FetchJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        async function fetchHandler(url, options = {}) {
            try {
                const response = await fetch(url, options);
                // Check if the response status is 2xx (successful)
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                // Try to parse the response as JSON
                const data = await response.json();
                // Here you can handle the parsed data as needed
                return data;
            } catch (error) {
                // Handle network errors or any other errors that occur during the fetch
                console.error('Fetch error:', error.message);
                // You can return a custom error object, log it, or rethrow the error
                return {
                    error: error.message
                };
            }
        }
        // Example usage
        const fetchData = async () => {
            const host = $parameters.host;
            const appId = $parameters.appId;
            const language = $parameters.language;
            const url = `https://${host}/websockets/landing_company?app_id=${appId}&l=${language}&brand=deriv`;

            const options = {
                method: 'GET', // or 'POST', 'PUT', etc.
                headers: {
                    'Content-Type': 'application/json',
                    // Add any other headers you need
                },
                body: $parameters.Request
            };
            const result = await fetchHandler(url, options);

            $parameters.Response = JSON.stringify(result)
        };
        fetchData();
    };
});


define("RESTAPIWebsocket.controller$NewAccountVirtual", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "RESTAPIWebsocket.controller$NewAccountVirtual.FetchJS", "RESTAPIWebsocket.model$ST_d4ed48681c55954edc02f19b0ed492e7Structure", "RESTAPIWebsocket.model$ST_72900159fa859d96c9b5e8531e637a4cStructure", "RESTAPIWebsocket.controller$ServerAction.PostNewAccountVirtual"], function(exports, OSRuntimeCore, RESTAPIWebsocketModel, RESTAPIWebsocketController, RESTAPIWebsocket_controller_NewAccountVirtual_FetchJS) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketController.default.newAccountVirtual$Action = function(appIdIn, languageIn, newAccountVirtualRequestIn, hostIn, callContext) {
        return OS.Logger.startActiveSpan("NewAccountVirtual", function(span) {
            if (span) {
                span.setAttribute("code.function", "NewAccountVirtual");
                span.setAttribute("outsystems.function.key", "7ffbfda9-1620-414c-ae12-08510cf908ec");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocket");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocket.NewAccountVirtual$vars"))());
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                vars.value.newAccountVirtualRequestInLocal = newAccountVirtualRequestIn.clone();
                vars.value.hostInLocal = hostIn;
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var postNewAccountVirtualVar = new OS.DataTypes.VariableHolder();
                var fetchJSResult = new OS.DataTypes.VariableHolder();
                var requestSerializeVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketModel.ST_72900159fa859d96c9b5e8531e637a4cStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocket.NewAccountVirtual$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // host check
                    return OS.Flow.executeSequence(function() {
                        if (((((vars.value.hostInLocal === "green.derivws.com")) ? (true) : (false)))) {
                            // Execute Action: PostNewAccountVirtual
                            return controller.postNewAccountVirtual$ServerAction(vars.value.appIdInLocal, vars.value.newAccountVirtualRequestInLocal, vars.value.languageInLocal, callContext).then(function(value) {
                                postNewAccountVirtualVar.value = value;
                            }).then(function() {
                                // Response = PostNewAccountVirtual.Response
                                outVars.value.responseOut = postNewAccountVirtualVar.value.responseOut;
                            });
                        } else {
                            // JSON Serialize: RequestSerialize
                            requestSerializeVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.newAccountVirtualRequestInLocal, false, false);
                            fetchJSResult.value = OS.Logger.startActiveSpan("Fetch", function(span) {
                                if (span) {
                                    span.setAttribute("code.function", "Fetch");
                                    span.setAttribute("outsystems.function.key", "b50b0e30-383a-4e0d-b3af-8da6e4073750");
                                    span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocket");
                                    span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                    span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                }

                                try {
                                    return controller.safeExecuteJSNode(RESTAPIWebsocket_controller_NewAccountVirtual_FetchJS, "Fetch", "NewAccountVirtual", {
                                        Request: OS.DataConversion.JSNodeParamConverter.to(requestSerializeVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                        appId: OS.DataConversion.JSNodeParamConverter.to(vars.value.appIdInLocal, OS.DataTypes.DataTypes.Text),
                                        host: OS.DataConversion.JSNodeParamConverter.to(vars.value.hostInLocal, OS.DataTypes.DataTypes.Text),
                                        language: OS.DataConversion.JSNodeParamConverter.to(vars.value.languageInLocal, OS.DataTypes.DataTypes.Text),
                                        Response: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                    }, function($parameters) {
                                        var jsNodeResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocket.NewAccountVirtual$fetchJSResult"))();
                                        jsNodeResult.responseOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Response, OS.DataTypes.DataTypes.Text);
                                        return jsNodeResult;
                                    }, {}, {});
                                } finally {
                                    if (span) {
                                        span.end();
                                    }

                                }

                            }, 1);
                            // JSON Deserialize: ResponseDeserialize
                            responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchJSResult.value.responseOut, RESTAPIWebsocketModel.ST_72900159fa859d96c9b5e8531e637a4cStructure, false);
                            // Response = ResponseDeserialize.Data
                            outVars.value.responseOut = responseDeserializeVar.value.dataOut;
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("NewAccountVirtual.NewAccountVirtual", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "29458d22-ea3d-4c10-ad92-5bfd690d0db8");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocket");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // isNetworkError = True
                                    outVars.value.isNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketController.default;
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket.NewAccountVirtual$vars", [{
        name: "appId",
        attrName: "appIdInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "language",
        attrName: "languageInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "NewAccountVirtualRequest",
        attrName: "newAccountVirtualRequestInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketModel.ST_d4ed48681c55954edc02f19b0ed492e7Structure();
        },
        complexType: RESTAPIWebsocketModel.ST_d4ed48681c55954edc02f19b0ed492e7Structure
    }, {
        name: "host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket.NewAccountVirtual$fetchJSResult", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket.NewAccountVirtual$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketModel.ST_72900159fa859d96c9b5e8531e637a4cStructure();
        },
        complexType: RESTAPIWebsocketModel.ST_72900159fa859d96c9b5e8531e637a4cStructure
    }, {
        name: "isNetworkError",
        attrName: "isNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketController.default.clientActionProxies.newAccountVirtual$Action = function(appIdIn, languageIn, newAccountVirtualRequestIn, hostIn) {
        appIdIn = (appIdIn === undefined) ? "" : appIdIn;
        languageIn = (languageIn === undefined) ? "" : languageIn;
        newAccountVirtualRequestIn = (newAccountVirtualRequestIn === undefined) ? new RESTAPIWebsocketModel.ST_d4ed48681c55954edc02f19b0ed492e7Structure() : newAccountVirtualRequestIn;
        hostIn = (hostIn === undefined) ? "" : hostIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketController.default.newAccountVirtual$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text), newAccountVirtualRequestIn, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                isNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.isNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});

define("RESTAPIWebsocket.controller$NewAccountVirtual.FetchJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        async function fetchHandler(url, options = {}) {
            try {
                const response = await fetch(url, options);
                // Check if the response status is 2xx (successful)
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                // Try to parse the response as JSON
                const data = await response.json();
                // Here you can handle the parsed data as needed
                return data;
            } catch (error) {
                // Handle network errors or any other errors that occur during the fetch
                console.error('Fetch error:', error.message);
                // You can return a custom error object, log it, or rethrow the error
                return {
                    error: error.message
                };
            }
        }
        // Example usage
        const fetchData = async () => {
            const host = $parameters.host;
            const appId = $parameters.appId;
            const language = $parameters.language;
            const url = `https://${host}/websockets/new_account_virtual?app_id=${appId}&l=${language}&brand=deriv`;

            const options = {
                method: 'POST', // or 'POST', 'PUT', etc.
                headers: {
                    'Content-Type': 'application/json',
                    // Add any other headers you need
                },
                body: $parameters.Request
            };
            const result = await fetchHandler(url, options);

            $parameters.Response = JSON.stringify(result)
        };
        fetchData();
    };
});


define("RESTAPIWebsocket.controller$ResetPassword", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "RESTAPIWebsocket.controller$ResetPassword.FetchJS", "RESTAPIWebsocket.model$ST_24b97ac8060a9349e09da2d88e1dea00Structure", "RESTAPIWebsocket.model$ST_b8e1602bee02fb2422c9742384775a7bStructure", "RESTAPIWebsocket.controller$ServerAction.PostResetPassword"], function(exports, OSRuntimeCore, RESTAPIWebsocketModel, RESTAPIWebsocketController, RESTAPIWebsocket_controller_ResetPassword_FetchJS) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketController.default.resetPassword$Action = function(appIdIn, languageIn, requestIn, hostIn, callContext) {
        return OS.Logger.startActiveSpan("ResetPassword", function(span) {
            if (span) {
                span.setAttribute("code.function", "ResetPassword");
                span.setAttribute("outsystems.function.key", "7eb7952d-cd4f-4e4b-8862-07037e0acfb3");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocket");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocket.ResetPassword$vars"))());
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                vars.value.requestInLocal = requestIn.clone();
                vars.value.hostInLocal = hostIn;
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var postResetPasswordVar = new OS.DataTypes.VariableHolder();
                var fetchJSResult = new OS.DataTypes.VariableHolder();
                var requestSerializeVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketModel.ST_b8e1602bee02fb2422c9742384775a7bStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocket.ResetPassword$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // host check
                    return OS.Flow.executeSequence(function() {
                        if (((((vars.value.hostInLocal === "green.derivws.com")) ? (true) : (false)))) {
                            // Execute Action: PostResetPassword
                            return controller.postResetPassword$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, vars.value.requestInLocal, callContext).then(function(value) {
                                postResetPasswordVar.value = value;
                            }).then(function() {
                                // Response = PostResetPassword.Response
                                outVars.value.responseOut = postResetPasswordVar.value.responseOut;
                            });
                        } else {
                            // JSON Serialize: RequestSerialize
                            requestSerializeVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.requestInLocal, false, false);
                            fetchJSResult.value = OS.Logger.startActiveSpan("Fetch", function(span) {
                                if (span) {
                                    span.setAttribute("code.function", "Fetch");
                                    span.setAttribute("outsystems.function.key", "bd97fbed-a7ea-45b2-9539-9b5552522174");
                                    span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocket");
                                    span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                    span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                }

                                try {
                                    return controller.safeExecuteJSNode(RESTAPIWebsocket_controller_ResetPassword_FetchJS, "Fetch", "ResetPassword", {
                                        Request: OS.DataConversion.JSNodeParamConverter.to(requestSerializeVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                        appId: OS.DataConversion.JSNodeParamConverter.to(vars.value.appIdInLocal, OS.DataTypes.DataTypes.Text),
                                        host: OS.DataConversion.JSNodeParamConverter.to(vars.value.hostInLocal, OS.DataTypes.DataTypes.Text),
                                        language: OS.DataConversion.JSNodeParamConverter.to(vars.value.languageInLocal, OS.DataTypes.DataTypes.Text),
                                        Response: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                    }, function($parameters) {
                                        var jsNodeResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocket.ResetPassword$fetchJSResult"))();
                                        jsNodeResult.responseOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Response, OS.DataTypes.DataTypes.Text);
                                        return jsNodeResult;
                                    }, {}, {});
                                } finally {
                                    if (span) {
                                        span.end();
                                    }

                                }

                            }, 1);
                            // JSON Deserialize: ResponseDeserialize
                            responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchJSResult.value.responseOut, RESTAPIWebsocketModel.ST_b8e1602bee02fb2422c9742384775a7bStructure, false);
                            // Response = ResponseDeserialize.Data
                            outVars.value.responseOut = responseDeserializeVar.value.dataOut;
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("ResetPassword.ResetPassword", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "9e33b41d-1aa3-422e-9b5b-76578be5581d");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocket");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // isNetworkError = True
                                    outVars.value.isNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketController.default;
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket.ResetPassword$vars", [{
        name: "appId",
        attrName: "appIdInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "language",
        attrName: "languageInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "Request",
        attrName: "requestInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketModel.ST_24b97ac8060a9349e09da2d88e1dea00Structure();
        },
        complexType: RESTAPIWebsocketModel.ST_24b97ac8060a9349e09da2d88e1dea00Structure
    }, {
        name: "host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket.ResetPassword$fetchJSResult", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket.ResetPassword$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketModel.ST_b8e1602bee02fb2422c9742384775a7bStructure();
        },
        complexType: RESTAPIWebsocketModel.ST_b8e1602bee02fb2422c9742384775a7bStructure
    }, {
        name: "isNetworkError",
        attrName: "isNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketController.default.clientActionProxies.resetPassword$Action = function(appIdIn, languageIn, requestIn, hostIn) {
        appIdIn = (appIdIn === undefined) ? "" : appIdIn;
        languageIn = (languageIn === undefined) ? "" : languageIn;
        requestIn = (requestIn === undefined) ? new RESTAPIWebsocketModel.ST_24b97ac8060a9349e09da2d88e1dea00Structure() : requestIn;
        hostIn = (hostIn === undefined) ? "" : hostIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketController.default.resetPassword$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text), requestIn, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                isNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.isNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});

define("RESTAPIWebsocket.controller$ResetPassword.FetchJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        async function fetchHandler(url, options = {}) {
            try {
                const response = await fetch(url, options);
                // Check if the response status is 2xx (successful)
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                // Try to parse the response as JSON
                const data = await response.json();
                // Here you can handle the parsed data as needed
                return data;
            } catch (error) {
                // Handle network errors or any other errors that occur during the fetch
                console.error('Fetch error:', error.message);
                // You can return a custom error object, log it, or rethrow the error
                return {
                    error: error.message
                };
            }
        }
        // Example usage
        const fetchData = async () => {
            const host = $parameters.host;
            const appId = $parameters.appId;
            const language = $parameters.language;
            const url = `https://${host}/websockets/reset_password?app_id=${appId}&l=${language}&brand=deriv`;

            const options = {
                method: 'POST', // or 'POST', 'PUT', etc.
                headers: {
                    'Content-Type': 'application/json',
                    // Add any other headers you need
                },
                body: $parameters.Request
            };
            const result = await fetchHandler(url, options);

            $parameters.Response = JSON.stringify(result)
        };
        fetchData();
    };
});


define("RESTAPIWebsocket.controller$ResidenceList", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "RESTAPIWebsocket.controller$ResidenceList.FetchJS", "RESTAPIWebsocket.model$ST_63a473e932ef99f5271718b62399e682Structure", "RESTAPIWebsocket.controller$ServerAction.GetResidenceList"], function(exports, OSRuntimeCore, RESTAPIWebsocketModel, RESTAPIWebsocketController, RESTAPIWebsocket_controller_ResidenceList_FetchJS) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketController.default.residenceList$Action = function(appIdIn, languageIn, hostIn, callContext) {
        return OS.Logger.startActiveSpan("ResidenceList", function(span) {
            if (span) {
                span.setAttribute("code.function", "ResidenceList");
                span.setAttribute("outsystems.function.key", "c055e2ed-1519-4726-8d98-9d18058b0fbd");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocket");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocket.ResidenceList$vars"))());
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                vars.value.hostInLocal = hostIn;
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var getResidenceListVar = new OS.DataTypes.VariableHolder();
                var fetchJSResult = new OS.DataTypes.VariableHolder();
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketModel.ST_63a473e932ef99f5271718b62399e682Structure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocket.ResidenceList$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // host check
                    return OS.Flow.executeSequence(function() {
                        if (((((vars.value.hostInLocal === "green.derivws.com")) ? (true) : (false)))) {
                            // Execute Action: GetResidenceList
                            return controller.getResidenceList$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, callContext).then(function(value) {
                                getResidenceListVar.value = value;
                            }).then(function() {
                                // Response = GetResidenceList.Response
                                outVars.value.responseOut = getResidenceListVar.value.responseOut;
                            });
                        } else {
                            fetchJSResult.value = OS.Logger.startActiveSpan("Fetch", function(span) {
                                if (span) {
                                    span.setAttribute("code.function", "Fetch");
                                    span.setAttribute("outsystems.function.key", "2b851104-1990-4d92-a191-5db286b1950b");
                                    span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocket");
                                    span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                    span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                }

                                try {
                                    return controller.safeExecuteJSNode(RESTAPIWebsocket_controller_ResidenceList_FetchJS, "Fetch", "ResidenceList", {
                                        language: OS.DataConversion.JSNodeParamConverter.to(vars.value.languageInLocal, OS.DataTypes.DataTypes.Text),
                                        appId: OS.DataConversion.JSNodeParamConverter.to(vars.value.appIdInLocal, OS.DataTypes.DataTypes.Text),
                                        host: OS.DataConversion.JSNodeParamConverter.to(vars.value.hostInLocal, OS.DataTypes.DataTypes.Text),
                                        Response: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                    }, function($parameters) {
                                        var jsNodeResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocket.ResidenceList$fetchJSResult"))();
                                        jsNodeResult.responseOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Response, OS.DataTypes.DataTypes.Text);
                                        return jsNodeResult;
                                    }, {}, {});
                                } finally {
                                    if (span) {
                                        span.end();
                                    }

                                }

                            }, 1);
                            // JSON Deserialize: ResponseDeserialize
                            responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchJSResult.value.responseOut, RESTAPIWebsocketModel.ST_63a473e932ef99f5271718b62399e682Structure, false);
                            // Response = ResponseDeserialize.Data
                            outVars.value.responseOut = responseDeserializeVar.value.dataOut;
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("ResidenceList.ResidenceList", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "f53eb755-5870-4a99-a0b3-99f2880036b0");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocket");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // isNetworkError = True
                                    outVars.value.isNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketController.default;
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket.ResidenceList$vars", [{
        name: "appId",
        attrName: "appIdInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "language",
        attrName: "languageInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket.ResidenceList$fetchJSResult", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket.ResidenceList$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketModel.ST_63a473e932ef99f5271718b62399e682Structure();
        },
        complexType: RESTAPIWebsocketModel.ST_63a473e932ef99f5271718b62399e682Structure
    }, {
        name: "isNetworkError",
        attrName: "isNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketController.default.clientActionProxies.residenceList$Action = function(appIdIn, languageIn, hostIn) {
        appIdIn = (appIdIn === undefined) ? "" : appIdIn;
        languageIn = (languageIn === undefined) ? "" : languageIn;
        hostIn = (hostIn === undefined) ? "" : hostIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketController.default.residenceList$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                isNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.isNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});

define("RESTAPIWebsocket.controller$ResidenceList.FetchJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        async function fetchHandler(url, options = {}) {
            try {
                const response = await fetch(url, options);
                // Check if the response status is 2xx (successful)
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                // Try to parse the response as JSON
                const data = await response.json();
                // Here you can handle the parsed data as needed
                return data;
            } catch (error) {
                // Handle network errors or any other errors that occur during the fetch
                console.error('Fetch error:', error.message);
                // You can return a custom error object, log it, or rethrow the error
                return {
                    error: error.message
                };
            }
        }
        // Example usage
        const fetchData = async () => {
            const host = $parameters.host;
            const appId = $parameters.appId;
            const language = $parameters.language;
            const url = `https://${host}/websockets/residence_list?app_id=${appId}&l=${language}&brand=deriv`;

            const options = {
                method: 'GET', // or 'POST', 'PUT', etc.
                headers: {
                    'Content-Type': 'application/json',
                    // Add any other headers you need
                },
            };
            const result = await fetchHandler(url, options);

            $parameters.Response = JSON.stringify(result)
        };
        fetchData();
    };
});


define("RESTAPIWebsocket.controller$TradingPlatformStatus", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "RESTAPIWebsocket.controller$TradingPlatformStatus.FetchTradingPlatformStatusJS", "RESTAPIWebsocket.model$ST_e3b9823599cdef8012785f8875d8da38Structure", "RESTAPIWebsocket.controller$ServerAction.GetTradingPlatformStatus"], function(exports, OSRuntimeCore, RESTAPIWebsocketModel, RESTAPIWebsocketController, RESTAPIWebsocket_controller_TradingPlatformStatus_FetchTradingPlatformStatusJS) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketController.default.tradingPlatformStatus$Action = function(appIdIn, languageIn, hostIn, authTokenIn, callContext) {
        return OS.Logger.startActiveSpan("TradingPlatformStatus", function(span) {
            if (span) {
                span.setAttribute("code.function", "TradingPlatformStatus");
                span.setAttribute("outsystems.function.key", "f0e28096-fa5a-4c0c-b746-782cb78ec899");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocket");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocket.TradingPlatformStatus$vars"))());
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                vars.value.hostInLocal = hostIn;
                vars.value.authTokenInLocal = authTokenIn;
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var getTradingPlatformStatusVar = new OS.DataTypes.VariableHolder();
                var fetchTradingPlatformStatusJSResult = new OS.DataTypes.VariableHolder();
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketModel.ST_e3b9823599cdef8012785f8875d8da38Structure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocket.TradingPlatformStatus$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // host check
                    return OS.Flow.executeSequence(function() {
                        if (((((vars.value.hostInLocal === "green.derivws.com")) ? (true) : (false)))) {
                            // Execute Action: GetTradingPlatformStatus
                            return controller.getTradingPlatformStatus$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, vars.value.authTokenInLocal, callContext).then(function(value) {
                                getTradingPlatformStatusVar.value = value;
                            }).then(function() {
                                // Response = GetTradingPlatformStatus.Response
                                outVars.value.responseOut = getTradingPlatformStatusVar.value.responseOut;
                            });
                        } else {
                            fetchTradingPlatformStatusJSResult.value = OS.Logger.startActiveSpan("FetchTradingPlatformStatus", function(span) {
                                if (span) {
                                    span.setAttribute("code.function", "FetchTradingPlatformStatus");
                                    span.setAttribute("outsystems.function.key", "c69a9100-b010-40cc-b92b-d88d5b62db8e");
                                    span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocket");
                                    span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                    span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                }

                                try {
                                    return controller.safeExecuteJSNode(RESTAPIWebsocket_controller_TradingPlatformStatus_FetchTradingPlatformStatusJS, "FetchTradingPlatformStatus", "TradingPlatformStatus", {
                                        language: OS.DataConversion.JSNodeParamConverter.to(vars.value.languageInLocal, OS.DataTypes.DataTypes.Text),
                                        appId: OS.DataConversion.JSNodeParamConverter.to(vars.value.appIdInLocal, OS.DataTypes.DataTypes.Text),
                                        authToken: OS.DataConversion.JSNodeParamConverter.to(vars.value.authTokenInLocal, OS.DataTypes.DataTypes.Text),
                                        host: OS.DataConversion.JSNodeParamConverter.to(vars.value.hostInLocal, OS.DataTypes.DataTypes.Text),
                                        Response: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                    }, function($parameters) {
                                        var jsNodeResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocket.TradingPlatformStatus$fetchTradingPlatformStatusJSResult"))();
                                        jsNodeResult.responseOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Response, OS.DataTypes.DataTypes.Text);
                                        return jsNodeResult;
                                    }, {}, {});
                                } finally {
                                    if (span) {
                                        span.end();
                                    }

                                }

                            }, 1);
                            // JSON Deserialize: ResponseDeserialize
                            responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchTradingPlatformStatusJSResult.value.responseOut, RESTAPIWebsocketModel.ST_e3b9823599cdef8012785f8875d8da38Structure, false);
                            // Response = ResponseDeserialize.Data
                            outVars.value.responseOut = responseDeserializeVar.value.dataOut;
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("TradingPlatformStatus.TradingPlatformStatus", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "69eae721-72eb-4d0c-b2ec-e8a365fee6c4");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocket");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // isNetworkError = True
                                    outVars.value.isNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketController.default;
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket.TradingPlatformStatus$vars", [{
        name: "appId",
        attrName: "appIdInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "language",
        attrName: "languageInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "authToken",
        attrName: "authTokenInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket.TradingPlatformStatus$fetchTradingPlatformStatusJSResult", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket.TradingPlatformStatus$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketModel.ST_e3b9823599cdef8012785f8875d8da38Structure();
        },
        complexType: RESTAPIWebsocketModel.ST_e3b9823599cdef8012785f8875d8da38Structure
    }, {
        name: "isNetworkError",
        attrName: "isNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketController.default.clientActionProxies.tradingPlatformStatus$Action = function(appIdIn, languageIn, hostIn, authTokenIn) {
        appIdIn = (appIdIn === undefined) ? "" : appIdIn;
        languageIn = (languageIn === undefined) ? "" : languageIn;
        hostIn = (hostIn === undefined) ? "" : hostIn;
        authTokenIn = (authTokenIn === undefined) ? "" : authTokenIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketController.default.tradingPlatformStatus$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authTokenIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                isNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.isNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});

define("RESTAPIWebsocket.controller$TradingPlatformStatus.FetchTradingPlatformStatusJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        async function fetchHandler(url, options = {}) {
            try {
                const response = await fetch(url, options);
                // Check if the response status is 2xx (successful)
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                // Try to parse the response as JSON
                const data = await response.json();
                // Here you can handle the parsed data as needed
                return data;
            } catch (error) {
                // Handle network errors or any other errors that occur during the fetch
                console.error('Fetch error:', error.message);
                // You can return a custom error object, log it, or rethrow the error
                return {
                    error: error.message
                };
            }
        }
        // Example usage
        const fetchData = async () => {
            const host = $parameters.host;
            const appId = $parameters.appId;
            const language = $parameters.language;
            const url = `https://${host}/websockets/trading_platform_status?app_id=${appId}&l=${language}&brand=deriv`;

            const options = {
                method: 'GET', // or 'POST', 'PUT', etc.
                headers: {
                    'Content-Type': 'application/json',
                    'X-Token': $parameters.authToken
                    // Add any other headers you need
                }
            };
            const result = await fetchHandler(url, options);
            console.log(result)

            $parameters.Response = JSON.stringify(result)
        };
        fetchData();
    };
});


define("RESTAPIWebsocket.controller$VerifyEmail", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "RESTAPIWebsocket.controller$VerifyEmail.FetchJS", "RESTAPIWebsocket.model$ST_178833eaf81da5980f461500f3f98736Structure", "RESTAPIWebsocket.model$ST_6e1c5ab117f6599aeb50c68a9a2fa65aStructure", "RESTAPIWebsocket.controller$ServerAction.PostVerifyEmail"], function(exports, OSRuntimeCore, RESTAPIWebsocketModel, RESTAPIWebsocketController, RESTAPIWebsocket_controller_VerifyEmail_FetchJS) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketController.default.verifyEmail$Action = function(appIdIn, languageIn, requestIn, hostIn, callContext) {
        return OS.Logger.startActiveSpan("VerifyEmail", function(span) {
            if (span) {
                span.setAttribute("code.function", "VerifyEmail");
                span.setAttribute("outsystems.function.key", "67863067-9852-4e97-82d7-5cc48f4c431f");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocket");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocket.VerifyEmail$vars"))());
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                vars.value.requestInLocal = requestIn.clone();
                vars.value.hostInLocal = hostIn;
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var postVerifyEmailVar = new OS.DataTypes.VariableHolder();
                var fetchJSResult = new OS.DataTypes.VariableHolder();
                var requestSerializeVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketModel.ST_6e1c5ab117f6599aeb50c68a9a2fa65aStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocket.VerifyEmail$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // host check
                    return OS.Flow.executeSequence(function() {
                        if (((((vars.value.hostInLocal === "green.derivws.com")) ? (true) : (false)))) {
                            // Execute Action: PostVerifyEmail
                            return controller.postVerifyEmail$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, vars.value.requestInLocal, callContext).then(function(value) {
                                postVerifyEmailVar.value = value;
                            }).then(function() {
                                // Response = PostVerifyEmail.Response
                                outVars.value.responseOut = postVerifyEmailVar.value.responseOut;
                            });
                        } else {
                            // JSON Serialize: RequestSerialize
                            requestSerializeVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.requestInLocal, false, false);
                            fetchJSResult.value = OS.Logger.startActiveSpan("Fetch", function(span) {
                                if (span) {
                                    span.setAttribute("code.function", "Fetch");
                                    span.setAttribute("outsystems.function.key", "666fda50-0c75-4984-a932-7961222eaa91");
                                    span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocket");
                                    span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                    span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                }

                                try {
                                    return controller.safeExecuteJSNode(RESTAPIWebsocket_controller_VerifyEmail_FetchJS, "Fetch", "VerifyEmail", {
                                        host: OS.DataConversion.JSNodeParamConverter.to(vars.value.hostInLocal, OS.DataTypes.DataTypes.Text),
                                        language: OS.DataConversion.JSNodeParamConverter.to(vars.value.languageInLocal, OS.DataTypes.DataTypes.Text),
                                        Request: OS.DataConversion.JSNodeParamConverter.to(requestSerializeVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                        appId: OS.DataConversion.JSNodeParamConverter.to(vars.value.appIdInLocal, OS.DataTypes.DataTypes.Text),
                                        Response: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                    }, function($parameters) {
                                        var jsNodeResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocket.VerifyEmail$fetchJSResult"))();
                                        jsNodeResult.responseOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Response, OS.DataTypes.DataTypes.Text);
                                        return jsNodeResult;
                                    }, {}, {});
                                } finally {
                                    if (span) {
                                        span.end();
                                    }

                                }

                            }, 1);
                            // JSON Deserialize: ResponseDeserialize
                            responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchJSResult.value.responseOut, RESTAPIWebsocketModel.ST_6e1c5ab117f6599aeb50c68a9a2fa65aStructure, false);
                            // Response = ResponseDeserialize.Data
                            outVars.value.responseOut = responseDeserializeVar.value.dataOut;
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("VerifyEmail.VerifyEmail", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "7fa613b8-396a-4cd1-b63e-c4218e64c94a");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocket");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // isNetworkError = True
                                    outVars.value.isNetworkErrorOut = true;
                                    return OS.Flow.returnAsync(outVars.value);

                                });
                            }, function() {
                                if (span) {
                                    span.end();
                                }

                            });
                        }, 1);
                    }

                    throw ex;
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
    var controller = RESTAPIWebsocketController.default;
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket.VerifyEmail$vars", [{
        name: "appId",
        attrName: "appIdInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "language",
        attrName: "languageInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "Request",
        attrName: "requestInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketModel.ST_178833eaf81da5980f461500f3f98736Structure();
        },
        complexType: RESTAPIWebsocketModel.ST_178833eaf81da5980f461500f3f98736Structure
    }, {
        name: "host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket.VerifyEmail$fetchJSResult", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket.VerifyEmail$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketModel.ST_6e1c5ab117f6599aeb50c68a9a2fa65aStructure();
        },
        complexType: RESTAPIWebsocketModel.ST_6e1c5ab117f6599aeb50c68a9a2fa65aStructure
    }, {
        name: "isNetworkError",
        attrName: "isNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketController.default.clientActionProxies.verifyEmail$Action = function(appIdIn, languageIn, requestIn, hostIn) {
        appIdIn = (appIdIn === undefined) ? "" : appIdIn;
        languageIn = (languageIn === undefined) ? "" : languageIn;
        requestIn = (requestIn === undefined) ? new RESTAPIWebsocketModel.ST_178833eaf81da5980f461500f3f98736Structure() : requestIn;
        hostIn = (hostIn === undefined) ? "" : hostIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketController.default.verifyEmail$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text), requestIn, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                isNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.isNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});

define("RESTAPIWebsocket.controller$VerifyEmail.FetchJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        async function fetchHandler(url, options = {}) {
            try {
                const response = await fetch(url, options);
                // Check if the response status is 2xx (successful)
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                // Try to parse the response as JSON
                const data = await response.json();
                // Here you can handle the parsed data as needed
                return data;
            } catch (error) {
                // Handle network errors or any other errors that occur during the fetch
                console.error('Fetch error:', error.message);
                // You can return a custom error object, log it, or rethrow the error
                return {
                    error: error.message
                };
            }
        }
        // Example usage
        const fetchData = async () => {
            const host = $parameters.host;
            const appId = $parameters.appId;
            const language = $parameters.language;
            const url = `https://${host}/websockets/verify_email?app_id=${appId}&l=${language}&brand=deriv`;

            const options = {
                method: 'POST', // or 'POST', 'PUT', etc.
                headers: {
                    'Content-Type': 'application/json',
                    // Add any other headers you need
                },
                body: $parameters.Request
            };
            const result = await fetchHandler(url, options);

            $parameters.Response = JSON.stringify(result)
        };
        fetchData();
    };
});


define("RESTAPIWebsocket.controller$ServerAction.GetGetSettings", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "RESTAPIWebsocket.model$ST_5fc2e4a935064c1413d6e989e87decd2Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketModel, RESTAPIWebsocketController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketController.default.getGetSettings$ServerAction = function(appIdIn, languageIn, authTokenIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("GetGetSettings", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetGetSettings");
                span.setAttribute("outsystems.function.key", "d3c3562b-a290-4955-b11a-ab55f12a7304");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocket");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    appId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text),
                    authToken: OS.DataConversion.ServerDataConverter.to(authTokenIn, OS.DataTypes.DataTypes.Text)
                };
                return controller.callServerAction("GetGetSettings", "screenservices/RESTAPIWebsocket/ActionGetGetSettings", "PfwofAttFrv64bkJmYPhpQ", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocket$ActionGetGetSettings"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketModel.ST_5fc2e4a935064c1413d6e989e87decd2Structure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket$ActionGetGetSettings", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketModel.ST_5fc2e4a935064c1413d6e989e87decd2Structure();
        },
        complexType: RESTAPIWebsocketModel.ST_5fc2e4a935064c1413d6e989e87decd2Structure
    }]);
});

define("RESTAPIWebsocket.controller$ServerAction.GetLandingCompany", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "RESTAPIWebsocket.model$ST_55477c48be760e041c4dbfa365f63009Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketModel, RESTAPIWebsocketController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketController.default.getLandingCompany$ServerAction = function(appIdIn, languageIn, requestIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("GetLandingCompany", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetLandingCompany");
                span.setAttribute("outsystems.function.key", "2afa81a6-9312-47c9-8f1f-024e35c0121d");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocket");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    appId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text),
                    Request: OS.DataConversion.ServerDataConverter.to(requestIn, OS.DataTypes.DataTypes.Record)
                };
                return controller.callServerAction("GetLandingCompany", "screenservices/RESTAPIWebsocket/ActionGetLandingCompany", "_D8FFCR1wznZwLNeuitZRA", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocket$ActionGetLandingCompany"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketModel.ST_55477c48be760e041c4dbfa365f63009Structure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket$ActionGetLandingCompany", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketModel.ST_55477c48be760e041c4dbfa365f63009Structure();
        },
        complexType: RESTAPIWebsocketModel.ST_55477c48be760e041c4dbfa365f63009Structure
    }]);
});

define("RESTAPIWebsocket.controller$ServerAction.GetResidenceList", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "RESTAPIWebsocket.model$ST_63a473e932ef99f5271718b62399e682Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketModel, RESTAPIWebsocketController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketController.default.getResidenceList$ServerAction = function(appIdIn, languageIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("GetResidenceList", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetResidenceList");
                span.setAttribute("outsystems.function.key", "8c19c48f-d810-43dd-9ec4-ffb170bba99a");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocket");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    appId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text)
                };
                return controller.callServerAction("GetResidenceList", "screenservices/RESTAPIWebsocket/ActionGetResidenceList", "Wj6SKHQBcKAr6ejHaOaskw", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocket$ActionGetResidenceList"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketModel.ST_63a473e932ef99f5271718b62399e682Structure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket$ActionGetResidenceList", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketModel.ST_63a473e932ef99f5271718b62399e682Structure();
        },
        complexType: RESTAPIWebsocketModel.ST_63a473e932ef99f5271718b62399e682Structure
    }]);
});

define("RESTAPIWebsocket.controller$ServerAction.GetTradingPlatformStatus", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "RESTAPIWebsocket.model$ST_e3b9823599cdef8012785f8875d8da38Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketModel, RESTAPIWebsocketController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketController.default.getTradingPlatformStatus$ServerAction = function(appIdIn, langIn, xtokenIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("GetTradingPlatformStatus", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetTradingPlatformStatus");
                span.setAttribute("outsystems.function.key", "6792e1ab-e429-4d13-9a5f-c08bed222ad6");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocket");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    appId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    lang: OS.DataConversion.ServerDataConverter.to(langIn, OS.DataTypes.DataTypes.Text),
                    Xtoken: OS.DataConversion.ServerDataConverter.to(xtokenIn, OS.DataTypes.DataTypes.Text)
                };
                return controller.callServerAction("GetTradingPlatformStatus", "screenservices/RESTAPIWebsocket/ActionGetTradingPlatformStatus", "n00DacVTt5f_MmKPP64NCQ", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocket$ActionGetTradingPlatformStatus"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketModel.ST_e3b9823599cdef8012785f8875d8da38Structure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket$ActionGetTradingPlatformStatus", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketModel.ST_e3b9823599cdef8012785f8875d8da38Structure();
        },
        complexType: RESTAPIWebsocketModel.ST_e3b9823599cdef8012785f8875d8da38Structure
    }]);
});

define("RESTAPIWebsocket.controller$ServerAction.PostAuthorize", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "RESTAPIWebsocket.model$ST_f502318fbe2f943e6cfbba125766780aStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketModel, RESTAPIWebsocketController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketController.default.postAuthorize$ServerAction = function(appIdIn, languageIn, requestIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("PostAuthorize", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostAuthorize");
                span.setAttribute("outsystems.function.key", "38948098-d82e-4eae-b849-1fe8b216fcf8");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocket");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    appId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text),
                    Request: OS.DataConversion.ServerDataConverter.to(requestIn, OS.DataTypes.DataTypes.Record)
                };
                return controller.callServerAction("PostAuthorize", "screenservices/RESTAPIWebsocket/ActionPostAuthorize", "ix57WUHtqO6kVgs6TRIVew", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocket$ActionPostAuthorize"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketModel.ST_f502318fbe2f943e6cfbba125766780aStructure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket$ActionPostAuthorize", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketModel.ST_f502318fbe2f943e6cfbba125766780aStructure();
        },
        complexType: RESTAPIWebsocketModel.ST_f502318fbe2f943e6cfbba125766780aStructure
    }]);
});

define("RESTAPIWebsocket.controller$ServerAction.PostNewAccountVirtual", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "RESTAPIWebsocket.model$ST_72900159fa859d96c9b5e8531e637a4cStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketModel, RESTAPIWebsocketController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketController.default.postNewAccountVirtual$ServerAction = function(appIdIn, requestIn, languageIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("PostNewAccountVirtual", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostNewAccountVirtual");
                span.setAttribute("outsystems.function.key", "51842f76-c323-4e2e-b4a4-38f1dc1e0842");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocket");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    appId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Request: OS.DataConversion.ServerDataConverter.to(requestIn, OS.DataTypes.DataTypes.Record),
                    language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text)
                };
                return controller.callServerAction("PostNewAccountVirtual", "screenservices/RESTAPIWebsocket/ActionPostNewAccountVirtual", "+s8PFOCV2uCZuKMo8k939Q", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocket$ActionPostNewAccountVirtual"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketModel.ST_72900159fa859d96c9b5e8531e637a4cStructure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket$ActionPostNewAccountVirtual", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketModel.ST_72900159fa859d96c9b5e8531e637a4cStructure();
        },
        complexType: RESTAPIWebsocketModel.ST_72900159fa859d96c9b5e8531e637a4cStructure
    }]);
});

define("RESTAPIWebsocket.controller$ServerAction.PostResetPassword", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "RESTAPIWebsocket.model$ST_b8e1602bee02fb2422c9742384775a7bStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketModel, RESTAPIWebsocketController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketController.default.postResetPassword$ServerAction = function(appIdIn, languageIn, requestIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("PostResetPassword", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostResetPassword");
                span.setAttribute("outsystems.function.key", "c22736a7-1e6e-49bd-bfbf-bf68e02c715f");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocket");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    appId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text),
                    Request: OS.DataConversion.ServerDataConverter.to(requestIn, OS.DataTypes.DataTypes.Record)
                };
                return controller.callServerAction("PostResetPassword", "screenservices/RESTAPIWebsocket/ActionPostResetPassword", "oGyLJEr5jvBRIeAr6+NKzQ", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocket$ActionPostResetPassword"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketModel.ST_b8e1602bee02fb2422c9742384775a7bStructure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket$ActionPostResetPassword", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketModel.ST_b8e1602bee02fb2422c9742384775a7bStructure();
        },
        complexType: RESTAPIWebsocketModel.ST_b8e1602bee02fb2422c9742384775a7bStructure
    }]);
});

define("RESTAPIWebsocket.controller$ServerAction.PostVerifyEmail", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "RESTAPIWebsocket.model$ST_6e1c5ab117f6599aeb50c68a9a2fa65aStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketModel, RESTAPIWebsocketController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketController.default.postVerifyEmail$ServerAction = function(appIdIn, languageIn, requestIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("PostVerifyEmail", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostVerifyEmail");
                span.setAttribute("outsystems.function.key", "4c523cd8-e365-499f-bc5e-772443b8bc28");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocket");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    appId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text),
                    Request: OS.DataConversion.ServerDataConverter.to(requestIn, OS.DataTypes.DataTypes.Record)
                };
                return controller.callServerAction("PostVerifyEmail", "screenservices/RESTAPIWebsocket/ActionPostVerifyEmail", "5Ale9f3+R3PBVdV7AjME7w", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocket$ActionPostVerifyEmail"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketModel.ST_6e1c5ab117f6599aeb50c68a9a2fa65aStructure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket$ActionPostVerifyEmail", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketModel.ST_6e1c5ab117f6599aeb50c68a9a2fa65aStructure();
        },
        complexType: RESTAPIWebsocketModel.ST_6e1c5ab117f6599aeb50c68a9a2fa65aStructure
    }]);
});

define("RESTAPIWebsocket.controller", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model"], function(exports, OSRuntimeCore, RESTAPIWebsocketModel) {
    var OS = OSRuntimeCore;
    var RESTAPIWebsocketController = exports;
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


        get roles() {
            if (!(this.hasOwnProperty("_roles"))) {
                this._roles = {};
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
            return RESTAPIWebsocketController.default.defaultTimeout;
        }

    }

    RESTAPIWebsocketController.default = new Controller();
});