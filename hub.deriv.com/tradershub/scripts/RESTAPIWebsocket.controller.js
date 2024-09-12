define("RESTAPIWebsocket.controller$AccountList", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "RESTAPIWebsocket.controller$AccountList.FetchAccountListJS", "RESTAPIWebsocket.model$ST_42e091eee706086ba45ab77d0ef6821fStructure", "RESTAPIWebsocket.controller$ServerAction.PostAccountList"], function(exports, OSRuntimeCore, RESTAPIWebsocketModel, RESTAPIWebsocketController, RESTAPIWebsocket_controller_AccountList_FetchAccountListJS) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketController.default.accountList$Action = function(appIdIn, languageIn, authorizeTokenIn, hostIn, callContext) {
        return OS.Logger.startActiveSpan("AccountList", function(span) {
            if (span) {
                span.setAttribute("code.function", "AccountList");
                span.setAttribute("outsystems.function.key", "f56c9e06-ce5f-4221-81a4-40ffce3bb9b4");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocket");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocket.AccountList$vars"))());
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                vars.value.authorizeTokenInLocal = authorizeTokenIn;
                vars.value.hostInLocal = hostIn;
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var postAccountListVar = new OS.DataTypes.VariableHolder();
                var fetchAccountListJSResult = new OS.DataTypes.VariableHolder();
                var requestSerializeVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketModel.ST_42e091eee706086ba45ab77d0ef6821fStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocket.AccountList$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // host check
                    return OS.Flow.executeSequence(function() {
                        if (((((vars.value.hostInLocal === "green.derivws.com")) ? (true) : (false)))) {
                            // Execute Action: PostAccountList
                            return controller.postAccountList$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, vars.value.authorizeTokenInLocal, "account_list", callContext).then(function(value) {
                                postAccountListVar.value = value;
                            }).then(function() {
                                // Response = PostAccountList.Response
                                outVars.value.responseOut = postAccountListVar.value.responseOut;
                            });
                        } else {
                            // JSON Serialize: RequestSerialize
                            requestSerializeVar.value.jSONOut = OS.JSONUtils.serializeToJSON(outVars.value.responseOut, false, false);
                            fetchAccountListJSResult.value = OS.Logger.startActiveSpan("FetchAccountList", function(span) {
                                if (span) {
                                    span.setAttribute("code.function", "FetchAccountList");
                                    span.setAttribute("outsystems.function.key", "c3c596b3-2b6c-4de9-bf4b-1c7cee81d772");
                                    span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocket");
                                    span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                    span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                }

                                try {
                                    return controller.safeExecuteJSNode(RESTAPIWebsocket_controller_AccountList_FetchAccountListJS, "FetchAccountList", "AccountList", {
                                        AuthorizeRequest: OS.DataConversion.JSNodeParamConverter.to(requestSerializeVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
                                        language: OS.DataConversion.JSNodeParamConverter.to(vars.value.languageInLocal, OS.DataTypes.DataTypes.Text),
                                        host: OS.DataConversion.JSNodeParamConverter.to(vars.value.hostInLocal, OS.DataTypes.DataTypes.Text),
                                        appId: OS.DataConversion.JSNodeParamConverter.to(vars.value.appIdInLocal, OS.DataTypes.DataTypes.Text),
                                        Response: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                    }, function($parameters) {
                                        var jsNodeResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocket.AccountList$fetchAccountListJSResult"))();
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
                            responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchAccountListJSResult.value.responseOut, RESTAPIWebsocketModel.ST_42e091eee706086ba45ab77d0ef6821fStructure, false);
                            // Response = ResponseDeserialize.Data
                            outVars.value.responseOut = responseDeserializeVar.value.dataOut;
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("AccountList.AccountList", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "505a36b2-55a5-4204-af9b-e943a420e7a9");
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
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket.AccountList$vars", [{
        name: "appId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }, {
        name: "AuthorizeToken",
        attrName: "authorizeTokenInLocal",
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
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket.AccountList$fetchAccountListJSResult", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket.AccountList$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketModel.ST_42e091eee706086ba45ab77d0ef6821fStructure();
        },
        complexType: RESTAPIWebsocketModel.ST_42e091eee706086ba45ab77d0ef6821fStructure
    }, {
        name: "isNetworkError",
        attrName: "isNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketController.default.clientActionProxies.accountList$Action = function(appIdIn, languageIn, authorizeTokenIn, hostIn) {
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        authorizeTokenIn = (authorizeTokenIn === undefined) ? "" : authorizeTokenIn;
        hostIn = (hostIn === undefined) ? "" : hostIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketController.default.accountList$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authorizeTokenIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                isNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.isNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});

define("RESTAPIWebsocket.controller$AccountList.FetchAccountListJS", [], function() {
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
            const url = `https://${host}/websockets/${endpoint}?app_id=${appId}&l=${language}&brand=deriv`;

            const options = {
                method: 'POST', // or 'POST', 'PUT', etc.
                body: $parameters.AuthorizeRequest
            };
            const result = await fetchHandler(url, options);

            $parameters.Response = JSON.stringify(result)
        };
        fetchData();
    };
});


define("RESTAPIWebsocket.controller$AssetIndex", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "RESTAPIWebsocket.controller$AssetIndex.FetchJS", "RESTAPIWebsocket.model$ST_870defcbb5bf4a58a2a009971edc7d07Structure", "RESTAPIWebsocket.controller$ServerAction.GetAssetIndex"], function(exports, OSRuntimeCore, RESTAPIWebsocketModel, RESTAPIWebsocketController, RESTAPIWebsocket_controller_AssetIndex_FetchJS) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketController.default.assetIndex$Action = function(hostIn, appIdIn, languageIn, callContext) {
        return OS.Logger.startActiveSpan("AssetIndex", function(span) {
            if (span) {
                span.setAttribute("code.function", "AssetIndex");
                span.setAttribute("outsystems.function.key", "7c17fad8-1027-47f6-8f4c-72c039662d3b");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocket");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocket.AssetIndex$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var getAssetIndexVar = new OS.DataTypes.VariableHolder();
                var fetchJSResult = new OS.DataTypes.VariableHolder();
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketModel.ST_870defcbb5bf4a58a2a009971edc7d07Structure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocket.AssetIndex$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // host check
                    return OS.Flow.executeSequence(function() {
                        if (((((vars.value.hostInLocal === "green.derivws.com")) ? (true) : (false)))) {
                            // Execute Action: GetAssetIndex
                            return controller.getAssetIndex$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, callContext).then(function(value) {
                                getAssetIndexVar.value = value;
                            }).then(function() {
                                // Response = GetAssetIndex.Response
                                outVars.value.responseOut = getAssetIndexVar.value.responseOut;
                            });
                        } else {
                            fetchJSResult.value = OS.Logger.startActiveSpan("Fetch", function(span) {
                                if (span) {
                                    span.setAttribute("code.function", "Fetch");
                                    span.setAttribute("outsystems.function.key", "e5320424-7c0c-4acc-a174-f6639c69cbd0");
                                    span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocket");
                                    span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                    span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                }

                                try {
                                    return controller.safeExecuteJSNode(RESTAPIWebsocket_controller_AssetIndex_FetchJS, "Fetch", "AssetIndex", {
                                        language: OS.DataConversion.JSNodeParamConverter.to(vars.value.languageInLocal, OS.DataTypes.DataTypes.Text),
                                        host: OS.DataConversion.JSNodeParamConverter.to(vars.value.hostInLocal, OS.DataTypes.DataTypes.Text),
                                        appId: OS.DataConversion.JSNodeParamConverter.to(vars.value.appIdInLocal, OS.DataTypes.DataTypes.Text),
                                        Response: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                    }, function($parameters) {
                                        var jsNodeResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocket.AssetIndex$fetchJSResult"))();
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
                            responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchJSResult.value.responseOut, RESTAPIWebsocketModel.ST_870defcbb5bf4a58a2a009971edc7d07Structure, false);
                            // Response = ResponseDeserialize.Data
                            outVars.value.responseOut = responseDeserializeVar.value.dataOut;
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("AssetIndex.AssetIndex", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "571385a5-9f7b-478b-9204-9bdef995fb94");
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
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket.AssetIndex$vars", [{
        name: "host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "appId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }]);
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket.AssetIndex$fetchJSResult", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket.AssetIndex$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketModel.ST_870defcbb5bf4a58a2a009971edc7d07Structure();
        },
        complexType: RESTAPIWebsocketModel.ST_870defcbb5bf4a58a2a009971edc7d07Structure
    }, {
        name: "isNetworkError",
        attrName: "isNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketController.default.clientActionProxies.assetIndex$Action = function(hostIn, appIdIn, languageIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketController.default.assetIndex$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                isNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.isNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});

define("RESTAPIWebsocket.controller$AssetIndex.FetchJS", [], function() {
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


define("RESTAPIWebsocket.controller$Authorize", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "RESTAPIWebsocket.model$ST_450f06937a42e6bd68832beac9fd4297Structure", "RESTAPIWebsocket.model$ST_f502318fbe2f943e6cfbba125766780aStructure", "RESTAPIWebsocket.controller$ServerAction.PostAuthorize", "RESTAPIWebsocket.controller$CheckHost", "RESTAPIWebsocket.controller$FetchData"], function(exports, OSRuntimeCore, RESTAPIWebsocketModel, RESTAPIWebsocketController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketController.default.authorize$Action = function(requestIn, hostIn, appIdIn, languageIn, callContext) {
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
                vars.value.requestInLocal = requestIn.clone();
                vars.value.hostInLocal = hostIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var postAuthorizeVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var authorizeRequestBodyVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketModel.ST_f502318fbe2f943e6cfbba125766780aStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocket.Authorize$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: PostAuthorize
                            return controller.postAuthorize$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, vars.value.requestInLocal, callContext).then(function(value) {
                                postAuthorizeVar.value = value;
                            }).then(function() {
                                // Response = PostAuthorize.Response
                                outVars.value.responseOut = postAuthorizeVar.value.responseOut;
                            });
                        } else {
                            // JSON Serialize: AuthorizeRequestBody
                            authorizeRequestBodyVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.requestInLocal, false, false);
                            // Execute Action: FetchData
                            fetchDataVar.value = RESTAPIWebsocketController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, authorizeRequestBodyVar.value.jSONOut, vars.value.hostInLocal, "POST", "authorize", callContext);

                            // JSON Deserialize: ResponseDeserialize
                            responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketModel.ST_f502318fbe2f943e6cfbba125766780aStructure, false);
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
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
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
        name: "Request",
        attrName: "requestInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketModel.ST_450f06937a42e6bd68832beac9fd4297Structure();
        },
        complexType: RESTAPIWebsocketModel.ST_450f06937a42e6bd68832beac9fd4297Structure
    }, {
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "appId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
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
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketController.default.clientActionProxies.authorize$Action = function(requestIn, hostIn, appIdIn, languageIn) {
        requestIn = (requestIn === undefined) ? new RESTAPIWebsocketModel.ST_450f06937a42e6bd68832beac9fd4297Structure() : requestIn;
        hostIn = (hostIn === undefined) ? "" : hostIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketController.default.authorize$Action.bind(controller, requestIn, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("RESTAPIWebsocket.controller$CheckHost", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller"], function(exports, OSRuntimeCore, RESTAPIWebsocketModel, RESTAPIWebsocketController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketController.default.checkHost$Action = function(hostIn, callContext) {
        return OS.Logger.startActiveSpan("CheckHost", function(span) {
            if (span) {
                span.setAttribute("code.function", "CheckHost");
                span.setAttribute("outsystems.function.key", "00c7c9fc-93e6-4532-a9d6-a1fbe8c30ede");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocket");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocket.CheckHost$vars"))());
                vars.value.hostInLocal = hostIn;
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocket.CheckHost$outVars"))());
                // Check Host
                if (((((vars.value.hostInLocal === "green.derivws.com")) ? (true) : (false)))) {
                    // Set IsGreen
                    // IsGreen = True
                    outVars.value.isGreenOut = true;
                } else {
                    // Set IsGreen
                    // IsGreen = False
                    outVars.value.isGreenOut = false;
                }

                return outVars.value;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = RESTAPIWebsocketController.default;
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket.CheckHost$vars", [{
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket.CheckHost$outVars", [{
        name: "IsGreen",
        attrName: "isGreenOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketController.default.clientActionProxies.checkHost$Action = function(hostIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketController.default.checkHost$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                IsGreen: OS.DataConversion.JSNodeParamConverter.to(actionResults.isGreenOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("RESTAPIWebsocket.controller$FetchData", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "RESTAPIWebsocket.controller$FetchData.FetchJS"], function(exports, OSRuntimeCore, RESTAPIWebsocketModel, RESTAPIWebsocketController, RESTAPIWebsocket_controller_FetchData_FetchJS) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketController.default.fetchData$Action = function(appIdIn, languageIn, requestBodyIn, hostIn, methodIn, aPINameIn, callContext) {
        return OS.Logger.startActiveSpan("FetchData", function(span) {
            if (span) {
                span.setAttribute("code.function", "FetchData");
                span.setAttribute("outsystems.function.key", "609da849-9d35-475b-a2a5-a06f1c7be78c");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocket");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocket.FetchData$vars"))());
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                vars.value.requestBodyInLocal = requestBodyIn;
                vars.value.hostInLocal = hostIn;
                vars.value.methodInLocal = methodIn;
                vars.value.aPINameInLocal = aPINameIn;
                var fetchJSResult = new OS.DataTypes.VariableHolder();
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocket.FetchData$outVars"))());
                fetchJSResult.value = OS.Logger.startActiveSpan("Fetch", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "Fetch");
                        span.setAttribute("outsystems.function.key", "78a698e2-c952-415a-bb6d-d1198adb66b2");
                        span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocket");
                        span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(RESTAPIWebsocket_controller_FetchData_FetchJS, "Fetch", "FetchData", {
                            APIName: OS.DataConversion.JSNodeParamConverter.to(vars.value.aPINameInLocal, OS.DataTypes.DataTypes.Text),
                            Method: OS.DataConversion.JSNodeParamConverter.to(vars.value.methodInLocal, OS.DataTypes.DataTypes.Text),
                            RequestBody: OS.DataConversion.JSNodeParamConverter.to(vars.value.requestBodyInLocal, OS.DataTypes.DataTypes.Text),
                            Host: OS.DataConversion.JSNodeParamConverter.to(vars.value.hostInLocal, OS.DataTypes.DataTypes.Text),
                            Language: OS.DataConversion.JSNodeParamConverter.to(vars.value.languageInLocal, OS.DataTypes.DataTypes.Text),
                            AppId: OS.DataConversion.JSNodeParamConverter.to(vars.value.appIdInLocal, OS.DataTypes.DataTypes.Text),
                            Response: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                        }, function($parameters) {
                            var jsNodeResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocket.FetchData$fetchJSResult"))();
                            jsNodeResult.responseOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Response, OS.DataTypes.DataTypes.Text);
                            return jsNodeResult;
                        }, {}, {});
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 1);
                // Response = Fetch.Response
                outVars.value.responseOut = fetchJSResult.value.responseOut;
                return outVars.value;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = RESTAPIWebsocketController.default;
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket.FetchData$vars", [{
        name: "AppId",
        attrName: "appIdInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "Language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "EN";
        }
    }, {
        name: "RequestBody",
        attrName: "requestBodyInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "Method",
        attrName: "methodInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "APIName",
        attrName: "aPINameInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket.FetchData$fetchJSResult", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket.FetchData$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    RESTAPIWebsocketController.default.clientActionProxies.fetchData$Action = function(appIdIn, languageIn, requestBodyIn, hostIn, methodIn, aPINameIn) {
        appIdIn = (appIdIn === undefined) ? "" : appIdIn;
        languageIn = (languageIn === undefined) ? "EN" : languageIn;
        requestBodyIn = (requestBodyIn === undefined) ? "" : requestBodyIn;
        hostIn = (hostIn === undefined) ? "" : hostIn;
        methodIn = (methodIn === undefined) ? "" : methodIn;
        aPINameIn = (aPINameIn === undefined) ? "" : aPINameIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketController.default.fetchData$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(requestBodyIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(methodIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(aPINameIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: OS.DataConversion.JSNodeParamConverter.to(actionResults.responseOut, OS.DataTypes.DataTypes.Text)
            };
        });
    };
});

define("RESTAPIWebsocket.controller$FetchData.FetchJS", [], function() {
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
                throw new Error(`Fetch error: ${error}`);
            }
        }

        // Fetching the data
        const fetchData = async () => {
            const host = $parameters.Host;
            const appId = $parameters.AppId;
            const language = $parameters.Language;
            const apiName = $parameters.APIName;

            const url = `https://${host}/websockets/${apiName}?app_id=${appId}&l=${language}&brand=deriv`;

            const options = {
                method: $parameters.Method,
                body: $parameters.RequestBody
            };

            const result = await fetchHandler(url, options);
            $parameters.Response = JSON.stringify(result);
        };

        fetchData();
    };
});


define("RESTAPIWebsocket.controller$GetSettings", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "RESTAPIWebsocket.controller$GetSettings.FetchJS", "RESTAPIWebsocket.model$ST_5fc2e4a935064c1413d6e989e87decd2Structure", "RESTAPIWebsocket.controller$ServerAction.GetGetSettings"], function(exports, OSRuntimeCore, RESTAPIWebsocketModel, RESTAPIWebsocketController, RESTAPIWebsocket_controller_GetSettings_FetchJS) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketController.default.getSettings$Action = function(hostIn, authTokenIn, appIdIn, languageIn, callContext) {
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
                vars.value.hostInLocal = hostIn;
                vars.value.authTokenInLocal = authTokenIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var getGetSettingsVar = new OS.DataTypes.VariableHolder();
                var fetchJSResult = new OS.DataTypes.VariableHolder();
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
                            fetchJSResult.value = OS.Logger.startActiveSpan("Fetch", function(span) {
                                if (span) {
                                    span.setAttribute("code.function", "Fetch");
                                    span.setAttribute("outsystems.function.key", "21f4f9a2-f491-4439-b4c7-209c3101495b");
                                    span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocket");
                                    span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                    span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                                }

                                try {
                                    return controller.safeExecuteJSNode(RESTAPIWebsocket_controller_GetSettings_FetchJS, "Fetch", "GetSettings", {
                                        host: OS.DataConversion.JSNodeParamConverter.to(vars.value.hostInLocal, OS.DataTypes.DataTypes.Text),
                                        authToken: OS.DataConversion.JSNodeParamConverter.to(vars.value.authTokenInLocal, OS.DataTypes.DataTypes.Text),
                                        appId: OS.DataConversion.JSNodeParamConverter.to(vars.value.appIdInLocal, OS.DataTypes.DataTypes.Text),
                                        language: OS.DataConversion.JSNodeParamConverter.to(vars.value.languageInLocal, OS.DataTypes.DataTypes.Text),
                                        Response: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                                    }, function($parameters) {
                                        var jsNodeResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocket.GetSettings$fetchJSResult"))();
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
                            responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchJSResult.value.responseOut, RESTAPIWebsocketModel.ST_5fc2e4a935064c1413d6e989e87decd2Structure, false);
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
    }, {
        name: "appId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }]);
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket.GetSettings$fetchJSResult", [{
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
    RESTAPIWebsocketController.default.clientActionProxies.getSettings$Action = function(hostIn, authTokenIn, appIdIn, languageIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        authTokenIn = (authTokenIn === undefined) ? "" : authTokenIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketController.default.getSettings$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authTokenIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                isNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.isNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});

define("RESTAPIWebsocket.controller$GetSettings.FetchJS", [], function() {
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


define("RESTAPIWebsocket.controller$GetWebsiteStatus", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "RESTAPIWebsocket.controller$FetchData", "RESTAPIWebsocket.model$ST_c864353821feed79663806f3e445d40eStructure", "RESTAPIWebsocket.controller$ServerAction.GetWebsiteStatus", "RESTAPIWebsocket.controller$CheckHost"], function(exports, OSRuntimeCore, RESTAPIWebsocketModel, RESTAPIWebsocketController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketController.default.getWebsiteStatus$Action = function(hostIn, appIdIn, languageIn, callContext) {
        return OS.Logger.startActiveSpan("GetWebsiteStatus", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetWebsiteStatus");
                span.setAttribute("outsystems.function.key", "dd3cfa93-6782-4c32-ba93-15448b31f9f1");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocket");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocket.GetWebsiteStatus$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var getWebsiteStatusVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var jSONDeserializeResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketModel.ST_c864353821feed79663806f3e445d40eStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocket.GetWebsiteStatus$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: GetWebsiteStatus
                            return controller.getWebsiteStatus$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, callContext).then(function(value) {
                                getWebsiteStatusVar.value = value;
                            }).then(function() {
                                // Response = GetWebsiteStatus.Response
                                outVars.value.responseOut = getWebsiteStatusVar.value.responseOut;
                            });
                        } else {
                            // Execute Action: FetchData
                            fetchDataVar.value = RESTAPIWebsocketController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, "", vars.value.hostInLocal, "GET", "get_settings", callContext);

                            // JSON Deserialize: JSONDeserializeResponse
                            jSONDeserializeResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketModel.ST_c864353821feed79663806f3e445d40eStructure, false);
                            // Response = JSONDeserializeResponse.Data
                            outVars.value.responseOut = jSONDeserializeResponseVar.value.dataOut;
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("GetWebsiteStatus.GetWebsiteStatus", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "ca2e85d5-dec5-4248-8736-203fc102fb86");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocket");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
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
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket.GetWebsiteStatus$vars", [{
        name: "Host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "appId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }]);
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket.GetWebsiteStatus$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketModel.ST_c864353821feed79663806f3e445d40eStructure();
        },
        complexType: RESTAPIWebsocketModel.ST_c864353821feed79663806f3e445d40eStructure
    }, {
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketController.default.clientActionProxies.getWebsiteStatus$Action = function(hostIn, appIdIn, languageIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketController.default.getWebsiteStatus$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("RESTAPIWebsocket.controller$KYCAuthStatus", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "RESTAPIWebsocket.model$ST_b5731219a4e422dad77e0fd7d6ee0cdfStructure", "RESTAPIWebsocket.model$ST_4820561c523dc84c471446a46147a065Structure", "RESTAPIWebsocket.controller$ServerAction.GetKYCAuthStatus", "RESTAPIWebsocket.controller$CheckHost", "RESTAPIWebsocket.controller$FetchData"], function(exports, OSRuntimeCore, RESTAPIWebsocketModel, RESTAPIWebsocketController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketController.default.kYCAuthStatus$Action = function(hostIn, authTokenIn, appIdIn, languageIn, requestIn, callContext) {
        return OS.Logger.startActiveSpan("KYCAuthStatus", function(span) {
            if (span) {
                span.setAttribute("code.function", "KYCAuthStatus");
                span.setAttribute("outsystems.function.key", "8c350f3a-3893-4d71-b7de-fcdba5c439ce");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocket");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocket.KYCAuthStatus$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.authTokenInLocal = authTokenIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                vars.value.requestInLocal = requestIn.clone();
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var fetchKYCAuthStatusVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var generatePayloadVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketModel.ST_4820561c523dc84c471446a46147a065Structure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocket.KYCAuthStatus$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: FetchKYCAuthStatus
                            return controller.getKYCAuthStatus$ServerAction(vars.value.authTokenInLocal, vars.value.appIdInLocal, vars.value.languageInLocal, vars.value.requestInLocal, callContext).then(function(value) {
                                fetchKYCAuthStatusVar.value = value;
                            }).then(function() {
                                // Response = FetchKYCAuthStatus.Response
                                outVars.value.responseOut = fetchKYCAuthStatusVar.value.responseOut;
                            });
                        } else {
                            // JSON Serialize: GeneratePayload
                            generatePayloadVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.requestInLocal, false, false);
                            // Execute Action: FetchData
                            fetchDataVar.value = RESTAPIWebsocketController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, generatePayloadVar.value.jSONOut, vars.value.hostInLocal, "POST", "kyc_auth_status", callContext);

                            // JSON Deserialize: ResponseDeserialize
                            responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketModel.ST_4820561c523dc84c471446a46147a065Structure, false);
                            // Response = ResponseDeserialize.Data
                            outVars.value.responseOut = responseDeserializeVar.value.dataOut;
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("KYCAuthStatus.KYCAuthStatus", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "d604933a-e1fc-481c-9210-5b97482f9206");
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
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket.KYCAuthStatus$vars", [{
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
    }, {
        name: "appId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }, {
        name: "Request",
        attrName: "requestInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketModel.ST_b5731219a4e422dad77e0fd7d6ee0cdfStructure();
        },
        complexType: RESTAPIWebsocketModel.ST_b5731219a4e422dad77e0fd7d6ee0cdfStructure
    }]);
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket.KYCAuthStatus$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketModel.ST_4820561c523dc84c471446a46147a065Structure();
        },
        complexType: RESTAPIWebsocketModel.ST_4820561c523dc84c471446a46147a065Structure
    }, {
        name: "isNetworkError",
        attrName: "isNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketController.default.clientActionProxies.kYCAuthStatus$Action = function(hostIn, authTokenIn, appIdIn, languageIn, requestIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        authTokenIn = (authTokenIn === undefined) ? "" : authTokenIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        requestIn = (requestIn === undefined) ? new RESTAPIWebsocketModel.ST_b5731219a4e422dad77e0fd7d6ee0cdfStructure() : requestIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketController.default.kYCAuthStatus$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authTokenIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text), requestIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                isNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.isNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("RESTAPIWebsocket.controller$LandingCompany", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "RESTAPIWebsocket.controller$LandingCompany.FetchJS", "RESTAPIWebsocket.model$ST_2aa6b158772e078b381113da0ab825f8Structure", "RESTAPIWebsocket.model$ST_55477c48be760e041c4dbfa365f63009Structure", "RESTAPIWebsocket.controller$ServerAction.GetLandingCompany"], function(exports, OSRuntimeCore, RESTAPIWebsocketModel, RESTAPIWebsocketController, RESTAPIWebsocket_controller_LandingCompany_FetchJS) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketController.default.landingCompany$Action = function(landingCompanyRequestIn, hostIn, appIdIn, languageIn, callContext) {
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
                vars.value.landingCompanyRequestInLocal = landingCompanyRequestIn.clone();
                vars.value.hostInLocal = hostIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
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
    }, {
        name: "appId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
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
    RESTAPIWebsocketController.default.clientActionProxies.landingCompany$Action = function(landingCompanyRequestIn, hostIn, appIdIn, languageIn) {
        landingCompanyRequestIn = (landingCompanyRequestIn === undefined) ? new RESTAPIWebsocketModel.ST_2aa6b158772e078b381113da0ab825f8Structure() : landingCompanyRequestIn;
        hostIn = (hostIn === undefined) ? "" : hostIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketController.default.landingCompany$Action.bind(controller, landingCompanyRequestIn, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
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
                body: $parameters.Request
            };
            const result = await fetchHandler(url, options);

            $parameters.Response = JSON.stringify(result)
        };
        fetchData();
    };
});


define("RESTAPIWebsocket.controller$Mt5LoginList", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "RESTAPIWebsocket.controller$FetchData", "RESTAPIWebsocket.controller$CheckHost", "RESTAPIWebsocket.model$ST_2f457e0a5b13526850516eea23ae0e9aStructure", "RESTAPIWebsocket.controller$ServerAction.GetMT5LoginList", "RESTAPIWebsocket.model$ST_f502318fbe2f943e6cfbba125766780aStructure", "RESTAPIWebsocket.model$ST_2361699202fda01d7c8ade7cab583650Structure", "RESTAPIWebsocket.model$RL_d214456dc511920f517885542ecb318a"], function(exports, OSRuntimeCore, RESTAPIWebsocketModel, RESTAPIWebsocketController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketController.default.mt5LoginList$Action = function(hostIn, authTokenIn, appIdIn, languageIn, callContext) {
        return OS.Logger.startActiveSpan("Mt5LoginList", function(span) {
            if (span) {
                span.setAttribute("code.function", "Mt5LoginList");
                span.setAttribute("outsystems.function.key", "117b3aa6-4772-4586-8615-7354e8063167");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocket");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocket.Mt5LoginList$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.authTokenInLocal = authTokenIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var postMt5LoginListVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketModel.ST_f502318fbe2f943e6cfbba125766780aStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocket.Mt5LoginList$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: PostMt5LoginList
                            return controller.getMT5LoginList$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, vars.value.authTokenInLocal, callContext).then(function(value) {
                                postMt5LoginListVar.value = value;
                            }).then(function() {
                                // Response = PostMt5LoginList.Response
                                outVars.value.responseOut = postMt5LoginListVar.value.responseOut;
                            });
                        } else {
                            // Execute Action: FetchData
                            fetchDataVar.value = RESTAPIWebsocketController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, "", vars.value.hostInLocal, "GET", "mt5_login_list", callContext);

                            // JSON Deserialize: ResponseDeserialize
                            responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketModel.ST_f502318fbe2f943e6cfbba125766780aStructure, false);
                            // Response = ResponseDeserialize.Data
                            outVars.value.responseOut = OS.DataConversion.JSConversions.typeConvertRecord(responseDeserializeVar.value.dataOut, new RESTAPIWebsocketModel.ST_2f457e0a5b13526850516eea23ae0e9aStructure(), function(source, target) {
                                target.msg_typeAttr = source.msg_typeAttr;
                                return target;
                            });
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("Mt5LoginList.Mt5LoginList", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "481ebedc-ca57-4c8a-8a01-e6c1527985e5");
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
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket.Mt5LoginList$vars", [{
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
    }, {
        name: "appId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }]);
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket.Mt5LoginList$outVars", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketModel.ST_2f457e0a5b13526850516eea23ae0e9aStructure();
        },
        complexType: RESTAPIWebsocketModel.ST_2f457e0a5b13526850516eea23ae0e9aStructure
    }, {
        name: "isNetworkError",
        attrName: "isNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    RESTAPIWebsocketController.default.clientActionProxies.mt5LoginList$Action = function(hostIn, authTokenIn, appIdIn, languageIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        authTokenIn = (authTokenIn === undefined) ? "" : authTokenIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketController.default.mt5LoginList$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authTokenIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                isNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.isNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("RESTAPIWebsocket.controller$NewAccountVirtual", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "RESTAPIWebsocket.controller$NewAccountVirtual.FetchJS", "RESTAPIWebsocket.model$ST_d4ed48681c55954edc02f19b0ed492e7Structure", "RESTAPIWebsocket.model$ST_72900159fa859d96c9b5e8531e637a4cStructure", "RESTAPIWebsocket.controller$ServerAction.PostNewAccountVirtual"], function(exports, OSRuntimeCore, RESTAPIWebsocketModel, RESTAPIWebsocketController, RESTAPIWebsocket_controller_NewAccountVirtual_FetchJS) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketController.default.newAccountVirtual$Action = function(newAccountVirtualRequestIn, hostIn, appIdIn, languageIn, callContext) {
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
                vars.value.newAccountVirtualRequestInLocal = newAccountVirtualRequestIn.clone();
                vars.value.hostInLocal = hostIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
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
    }, {
        name: "appId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
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
    RESTAPIWebsocketController.default.clientActionProxies.newAccountVirtual$Action = function(newAccountVirtualRequestIn, hostIn, appIdIn, languageIn) {
        newAccountVirtualRequestIn = (newAccountVirtualRequestIn === undefined) ? new RESTAPIWebsocketModel.ST_d4ed48681c55954edc02f19b0ed492e7Structure() : newAccountVirtualRequestIn;
        hostIn = (hostIn === undefined) ? "" : hostIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketController.default.newAccountVirtual$Action.bind(controller, newAccountVirtualRequestIn, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
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
    RESTAPIWebsocketController.default.resetPassword$Action = function(requestIn, hostIn, appIdIn, languageIn, callContext) {
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
                vars.value.requestInLocal = requestIn.clone();
                vars.value.hostInLocal = hostIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
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
    }, {
        name: "appId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
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
    RESTAPIWebsocketController.default.clientActionProxies.resetPassword$Action = function(requestIn, hostIn, appIdIn, languageIn) {
        requestIn = (requestIn === undefined) ? new RESTAPIWebsocketModel.ST_24b97ac8060a9349e09da2d88e1dea00Structure() : requestIn;
        hostIn = (hostIn === undefined) ? "" : hostIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketController.default.resetPassword$Action.bind(controller, requestIn, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
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
    RESTAPIWebsocketController.default.residenceList$Action = function(hostIn, appIdIn, languageIn, callContext) {
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
                vars.value.hostInLocal = hostIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
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
        name: "host",
        attrName: "hostInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "appId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
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
    RESTAPIWebsocketController.default.clientActionProxies.residenceList$Action = function(hostIn, appIdIn, languageIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketController.default.residenceList$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
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
            };
            const result = await fetchHandler(url, options);

            $parameters.Response = JSON.stringify(result)
        };
        fetchData();
    };
});


define("RESTAPIWebsocket.controller$TradingPlatformPasswordChange", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "RESTAPIWebsocket.controller$CheckHost", "RESTAPIWebsocket.model$ST_d1246d83c419f598cf8e4e18d5276097Structure", "RESTAPIWebsocket.model$ST_e184b5e893ff6633d3c7357dd29941faStructure", "RESTAPIWebsocket.controller$ServerAction.PostTradingPlatformPasswordChange", "RESTAPIWebsocket.controller$FetchData"], function(exports, OSRuntimeCore, RESTAPIWebsocketModel, RESTAPIWebsocketController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketController.default.tradingPlatformPasswordChange$Action = function(hostIn, requestIn, authTokenIn, appIdIn, languageIn, callContext) {
        return OS.Logger.startActiveSpan("TradingPlatformPasswordChange", function(span) {
            if (span) {
                span.setAttribute("code.function", "TradingPlatformPasswordChange");
                span.setAttribute("outsystems.function.key", "6804ba22-7664-40fe-9b1b-993020605e3f");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocket");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocket.TradingPlatformPasswordChange$vars"))());
                vars.value.hostInLocal = hostIn;
                vars.value.requestInLocal = requestIn.clone();
                vars.value.authTokenInLocal = authTokenIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var postTradingPlatformPasswordChangeVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var authorizeRequestBodyVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var responseDeserializeVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketModel.ST_e184b5e893ff6633d3c7357dd29941faStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocket.TradingPlatformPasswordChange$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: PostTradingPlatformPasswordChange
                            return controller.postTradingPlatformPasswordChange$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, vars.value.authTokenInLocal, vars.value.requestInLocal, callContext).then(function(value) {
                                postTradingPlatformPasswordChangeVar.value = value;
                            }).then(function() {
                                // Response = PostTradingPlatformPasswordChange.Response
                                outVars.value.responseOut = postTradingPlatformPasswordChangeVar.value.responseOut;
                            });
                        } else {
                            // JSON Serialize: AuthorizeRequestBody
                            authorizeRequestBodyVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.requestInLocal, false, false);
                            // Execute Action: FetchData
                            fetchDataVar.value = RESTAPIWebsocketController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, authorizeRequestBodyVar.value.jSONOut, vars.value.hostInLocal, "POST", "trading_platform_password_change", callContext);

                            // JSON Deserialize: ResponseDeserialize
                            responseDeserializeVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketModel.ST_e184b5e893ff6633d3c7357dd29941faStructure, false);
                            // Response = ResponseDeserialize.Data
                            outVars.value.responseOut = responseDeserializeVar.value.dataOut;
                        }

                    });
                }).catch(function(ex) {
                    OS.Logger.debug("TradingPlatformPasswordChange.TradingPlatformPasswordChange", OS.Exceptions.getMessage(ex));
                    // Handle Error: AllExceptions
                    if (!(OS.Exceptions.isSystem(ex))) {
                        OS.Logger.error(null, ex, null, null, 1);
                        allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                        return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                            if (span) {
                                span.setAttribute("code.function", "AllExceptions");
                                span.setAttribute("outsystems.function.key", "07aac954-855e-45aa-959d-2b496fad2468");
                                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocket");
                                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                                span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                            }

                            return OS.Flow.tryFinally(function() {
                                return OS.Flow.executeAsyncFlow(function() {
                                    // HasNetworkError = True
                                    outVars.value.hasNetworkErrorOut = true;
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
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket.TradingPlatformPasswordChange$vars", [{
        name: "Host",
        attrName: "hostInLocal",
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
            return new RESTAPIWebsocketModel.ST_d1246d83c419f598cf8e4e18d5276097Structure();
        },
        complexType: RESTAPIWebsocketModel.ST_d1246d83c419f598cf8e4e18d5276097Structure
    }, {
        name: "authToken",
        attrName: "authTokenInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "appId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
        }
    }]);
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket.TradingPlatformPasswordChange$outVars", [{
        name: "HasNetworkError",
        attrName: "hasNetworkErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }, {
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketModel.ST_e184b5e893ff6633d3c7357dd29941faStructure();
        },
        complexType: RESTAPIWebsocketModel.ST_e184b5e893ff6633d3c7357dd29941faStructure
    }]);
    RESTAPIWebsocketController.default.clientActionProxies.tradingPlatformPasswordChange$Action = function(hostIn, requestIn, authTokenIn, appIdIn, languageIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        requestIn = (requestIn === undefined) ? new RESTAPIWebsocketModel.ST_d1246d83c419f598cf8e4e18d5276097Structure() : requestIn;
        authTokenIn = (authTokenIn === undefined) ? "" : authTokenIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketController.default.tradingPlatformPasswordChange$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), requestIn, OS.DataConversion.JSNodeParamConverter.from(authTokenIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                HasNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.hasNetworkErrorOut, OS.DataTypes.DataTypes.Boolean),
                Response: actionResults.responseOut
            };
        });
    };
});


define("RESTAPIWebsocket.controller$TradingPlatformStatus", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "RESTAPIWebsocket.controller$CheckHost", "RESTAPIWebsocket.controller$FetchData", "RESTAPIWebsocket.model$ST_e3b9823599cdef8012785f8875d8da38Structure", "RESTAPIWebsocket.controller$ServerAction.GetTradingPlatformStatus"], function(exports, OSRuntimeCore, RESTAPIWebsocketModel, RESTAPIWebsocketController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketController.default.tradingPlatformStatus$Action = function(hostIn, authTokenIn, appIdIn, languageIn, callContext) {
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
                vars.value.hostInLocal = hostIn;
                vars.value.authTokenInLocal = authTokenIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
                var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                var getTradingPlatformStatusVar = new OS.DataTypes.VariableHolder();
                var checkHostVar = new OS.DataTypes.VariableHolder();
                var fetchDataVar = new OS.DataTypes.VariableHolder();
                var jSONDeserializeResponseVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(RESTAPIWebsocketModel.ST_e3b9823599cdef8012785f8875d8da38Structure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("RESTAPIWebsocket.TradingPlatformStatus$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    // Execute Action: CheckHost
                    checkHostVar.value = RESTAPIWebsocketController.default.checkHost$Action(vars.value.hostInLocal, callContext);

                    return OS.Flow.executeSequence(function() {
                        if ((checkHostVar.value.isGreenOut)) {
                            // Execute Action: GetTradingPlatformStatus
                            return controller.getTradingPlatformStatus$ServerAction(vars.value.appIdInLocal, vars.value.languageInLocal, vars.value.authTokenInLocal, callContext).then(function(value) {
                                getTradingPlatformStatusVar.value = value;
                            }).then(function() {
                                // Response = GetTradingPlatformStatus.Response
                                outVars.value.responseOut = getTradingPlatformStatusVar.value.responseOut;
                            });
                        } else {
                            // Execute Action: FetchData
                            fetchDataVar.value = RESTAPIWebsocketController.default.fetchData$Action(vars.value.appIdInLocal, vars.value.languageInLocal, "", vars.value.hostInLocal, "GET", "trading_platform_status", callContext);

                            // JSON Deserialize: JSONDeserializeResponse
                            jSONDeserializeResponseVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(fetchDataVar.value.responseOut, RESTAPIWebsocketModel.ST_e3b9823599cdef8012785f8875d8da38Structure, false);
                            // Response = JSONDeserializeResponse.Data
                            outVars.value.responseOut = jSONDeserializeResponseVar.value.dataOut;
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
    }, {
        name: "appId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
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
    RESTAPIWebsocketController.default.clientActionProxies.tradingPlatformStatus$Action = function(hostIn, authTokenIn, appIdIn, languageIn) {
        hostIn = (hostIn === undefined) ? "" : hostIn;
        authTokenIn = (authTokenIn === undefined) ? "" : authTokenIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketController.default.tradingPlatformStatus$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(authTokenIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut,
                isNetworkError: OS.DataConversion.JSNodeParamConverter.to(actionResults.isNetworkErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});


define("RESTAPIWebsocket.controller$VerifyEmail", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "RESTAPIWebsocket.controller$VerifyEmail.FetchJS", "RESTAPIWebsocket.model$ST_178833eaf81da5980f461500f3f98736Structure", "RESTAPIWebsocket.model$ST_6e1c5ab117f6599aeb50c68a9a2fa65aStructure", "RESTAPIWebsocket.controller$ServerAction.PostVerifyEmail"], function(exports, OSRuntimeCore, RESTAPIWebsocketModel, RESTAPIWebsocketController, RESTAPIWebsocket_controller_VerifyEmail_FetchJS) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketController.default.verifyEmail$Action = function(requestIn, hostIn, appIdIn, languageIn, callContext) {
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
                vars.value.requestInLocal = requestIn.clone();
                vars.value.hostInLocal = hostIn;
                vars.value.appIdInLocal = appIdIn;
                vars.value.languageInLocal = languageIn;
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
    }, {
        name: "appId",
        attrName: "appIdInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return (1).toString();
        }
    }, {
        name: "language",
        attrName: "languageInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "en";
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
    RESTAPIWebsocketController.default.clientActionProxies.verifyEmail$Action = function(requestIn, hostIn, appIdIn, languageIn) {
        requestIn = (requestIn === undefined) ? new RESTAPIWebsocketModel.ST_178833eaf81da5980f461500f3f98736Structure() : requestIn;
        hostIn = (hostIn === undefined) ? "" : hostIn;
        appIdIn = (appIdIn === undefined) ? 1 : appIdIn;
        languageIn = (languageIn === undefined) ? "en" : languageIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketController.default.verifyEmail$Action.bind(controller, requestIn, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
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
                body: $parameters.Request
            };
            const result = await fetchHandler(url, options);

            $parameters.Response = JSON.stringify(result)
        };
        fetchData();
    };
});


define("RESTAPIWebsocket.controller$ServerAction.GetAssetIndex", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "RESTAPIWebsocket.model$ST_870defcbb5bf4a58a2a009971edc7d07Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketModel, RESTAPIWebsocketController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketController.default.getAssetIndex$ServerAction = function(appIdIn, languageIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("GetAssetIndex", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetAssetIndex");
                span.setAttribute("outsystems.function.key", "288c5241-f103-4a6d-ae56-6df8bf4176ac");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocket");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    appId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text)
                };
                return controller.callServerAction("GetAssetIndex", "screenservices/RESTAPIWebsocket/ActionGetAssetIndex", "b_roCn+_pdIXtJcKaiXNRw", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocket$ActionGetAssetIndex"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketModel.ST_870defcbb5bf4a58a2a009971edc7d07Structure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket$ActionGetAssetIndex", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketModel.ST_870defcbb5bf4a58a2a009971edc7d07Structure();
        },
        complexType: RESTAPIWebsocketModel.ST_870defcbb5bf4a58a2a009971edc7d07Structure
    }]);
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
                return controller.callServerAction("GetGetSettings", "screenservices/RESTAPIWebsocket/ActionGetGetSettings", "gxzw5TCsmNGYnZFymnT_DQ", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
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

define("RESTAPIWebsocket.controller$ServerAction.GetKYCAuthStatus", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "RESTAPIWebsocket.model$ST_4820561c523dc84c471446a46147a065Structure"], function(exports, OSRuntimeCore, RESTAPIWebsocketModel, RESTAPIWebsocketController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketController.default.getKYCAuthStatus$ServerAction = function(authTokenIn, appIdIn, languageIn, requestIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("GetKYCAuthStatus", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetKYCAuthStatus");
                span.setAttribute("outsystems.function.key", "e304136f-94fa-4111-b150-32708b9c5c8d");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocket");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    AuthToken: OS.DataConversion.ServerDataConverter.to(authTokenIn, OS.DataTypes.DataTypes.Text),
                    AppId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    Language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text),
                    Request: OS.DataConversion.ServerDataConverter.to(requestIn, OS.DataTypes.DataTypes.Record)
                };
                return controller.callServerAction("GetKYCAuthStatus", "screenservices/RESTAPIWebsocket/ActionGetKYCAuthStatus", "6hUAqQk4pcjNqFju0ZDeJg", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocket$ActionGetKYCAuthStatus"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketModel.ST_4820561c523dc84c471446a46147a065Structure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket$ActionGetKYCAuthStatus", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketModel.ST_4820561c523dc84c471446a46147a065Structure();
        },
        complexType: RESTAPIWebsocketModel.ST_4820561c523dc84c471446a46147a065Structure
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
                return controller.callServerAction("GetLandingCompany", "screenservices/RESTAPIWebsocket/ActionGetLandingCompany", "fpqdaVrNhz18ek+dc3_iaw", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
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

define("RESTAPIWebsocket.controller$ServerAction.GetMT5LoginList", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "RESTAPIWebsocket.model$ST_2f457e0a5b13526850516eea23ae0e9aStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketModel, RESTAPIWebsocketController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketController.default.getMT5LoginList$ServerAction = function(appIdIn, languageIn, xtokenIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("GetMT5LoginList", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetMT5LoginList");
                span.setAttribute("outsystems.function.key", "066791a7-277c-441b-b2c6-4e2f9a36e3a9");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocket");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    appId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text),
                    Xtoken: OS.DataConversion.ServerDataConverter.to(xtokenIn, OS.DataTypes.DataTypes.Text)
                };
                return controller.callServerAction("GetMT5LoginList", "screenservices/RESTAPIWebsocket/ActionGetMT5LoginList", "78dWErXrSe2AVI2GtV5Vow", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocket$ActionGetMT5LoginList"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketModel.ST_2f457e0a5b13526850516eea23ae0e9aStructure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket$ActionGetMT5LoginList", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketModel.ST_2f457e0a5b13526850516eea23ae0e9aStructure();
        },
        complexType: RESTAPIWebsocketModel.ST_2f457e0a5b13526850516eea23ae0e9aStructure
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
                return controller.callServerAction("GetResidenceList", "screenservices/RESTAPIWebsocket/ActionGetResidenceList", "v9YCF0+Z4TY7YuPboIsWVw", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
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
                return controller.callServerAction("GetTradingPlatformStatus", "screenservices/RESTAPIWebsocket/ActionGetTradingPlatformStatus", "3ORw0Fjb+jjHdauamRdItA", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
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

define("RESTAPIWebsocket.controller$ServerAction.GetWebsiteStatus", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "RESTAPIWebsocket.model$ST_c864353821feed79663806f3e445d40eStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketModel, RESTAPIWebsocketController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketController.default.getWebsiteStatus$ServerAction = function(appIdIn, languageIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("GetWebsiteStatus", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetWebsiteStatus");
                span.setAttribute("outsystems.function.key", "56cefcb5-f65e-4296-82bc-70df55499da4");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocket");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    appId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text)
                };
                return controller.callServerAction("GetWebsiteStatus", "screenservices/RESTAPIWebsocket/ActionGetWebsiteStatus", "NrP8NHrAwVCnxNcJeuZcrw", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocket$ActionGetWebsiteStatus"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketModel.ST_c864353821feed79663806f3e445d40eStructure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket$ActionGetWebsiteStatus", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketModel.ST_c864353821feed79663806f3e445d40eStructure();
        },
        complexType: RESTAPIWebsocketModel.ST_c864353821feed79663806f3e445d40eStructure
    }]);
});

define("RESTAPIWebsocket.controller$ServerAction.PostAccountList", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "RESTAPIWebsocket.model$ST_42e091eee706086ba45ab77d0ef6821fStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketModel, RESTAPIWebsocketController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketController.default.postAccountList$ServerAction = function(appIdIn, langIn, xtokenIn, endpointIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("PostAccountList", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostAccountList");
                span.setAttribute("outsystems.function.key", "3cc84d5e-492a-4e65-98d6-d0d5a3c81037");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocket");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    appId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    lang: OS.DataConversion.ServerDataConverter.to(langIn, OS.DataTypes.DataTypes.Text),
                    Xtoken: OS.DataConversion.ServerDataConverter.to(xtokenIn, OS.DataTypes.DataTypes.Text),
                    endpoint: OS.DataConversion.ServerDataConverter.to(endpointIn, OS.DataTypes.DataTypes.Text)
                };
                return controller.callServerAction("PostAccountList", "screenservices/RESTAPIWebsocket/ActionPostAccountList", "VEXpfb6yfSxY5WgiA0XLfA", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocket$ActionPostAccountList"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketModel.ST_42e091eee706086ba45ab77d0ef6821fStructure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket$ActionPostAccountList", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketModel.ST_42e091eee706086ba45ab77d0ef6821fStructure();
        },
        complexType: RESTAPIWebsocketModel.ST_42e091eee706086ba45ab77d0ef6821fStructure
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
                return controller.callServerAction("PostAuthorize", "screenservices/RESTAPIWebsocket/ActionPostAuthorize", "l3kwfF28eT7F61ePAl4PFg", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
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
                return controller.callServerAction("PostNewAccountVirtual", "screenservices/RESTAPIWebsocket/ActionPostNewAccountVirtual", "hSSmVGbVcBtZMKUZKmAtiA", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
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
                return controller.callServerAction("PostResetPassword", "screenservices/RESTAPIWebsocket/ActionPostResetPassword", "EV1YWsCFxHRjfPcUr18BuA", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
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

define("RESTAPIWebsocket.controller$ServerAction.PostTradingPlatformPasswordChange", ["exports", "@outsystems/runtime-core-js", "RESTAPIWebsocket.model", "RESTAPIWebsocket.controller", "RESTAPIWebsocket.model$ST_e184b5e893ff6633d3c7357dd29941faStructure"], function(exports, OSRuntimeCore, RESTAPIWebsocketModel, RESTAPIWebsocketController) {
    var OS = OSRuntimeCore;
    RESTAPIWebsocketController.default.postTradingPlatformPasswordChange$ServerAction = function(appIdIn, languageIn, xtokenIn, requestIn, callContext) {
        var controller = this.controller;
        return OS.Logger.startActiveSpan("PostTradingPlatformPasswordChange", function(span) {
            if (span) {
                span.setAttribute("code.function", "PostTradingPlatformPasswordChange");
                span.setAttribute("outsystems.function.key", "025eb13d-dcd9-42bc-b20a-926aa7ca3a63");
                span.setAttribute("outsystems.function.owner.name", "RESTAPIWebsocket");
                span.setAttribute("outsystems.function.owner.key", "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017");
                span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
            }

            return OS.Flow.tryFinally(function() {
                var inputs = {
                    appId: OS.DataConversion.ServerDataConverter.to(appIdIn, OS.DataTypes.DataTypes.Text),
                    language: OS.DataConversion.ServerDataConverter.to(languageIn, OS.DataTypes.DataTypes.Text),
                    Xtoken: OS.DataConversion.ServerDataConverter.to(xtokenIn, OS.DataTypes.DataTypes.Text),
                    Request: OS.DataConversion.ServerDataConverter.to(requestIn, OS.DataTypes.DataTypes.Record)
                };
                return controller.callServerAction("PostTradingPlatformPasswordChange", "screenservices/RESTAPIWebsocket/ActionPostTradingPlatformPasswordChange", "1KUMc_tBT8Xs1jYr+hNj7A", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
                    var executeServerActionResult = new(controller.constructor.getVariableGroupType("RESTAPIWebsocket$ActionPostTradingPlatformPasswordChange"))();
                    executeServerActionResult.responseOut = OS.DataConversion.ServerDataConverter.from(outputs.Response, RESTAPIWebsocketModel.ST_e184b5e893ff6633d3c7357dd29941faStructure);
                    return executeServerActionResult;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 0);
    };
    RESTAPIWebsocketController.default.constructor.registerVariableGroupType("RESTAPIWebsocket$ActionPostTradingPlatformPasswordChange", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new RESTAPIWebsocketModel.ST_e184b5e893ff6633d3c7357dd29941faStructure();
        },
        complexType: RESTAPIWebsocketModel.ST_e184b5e893ff6633d3c7357dd29941faStructure
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
                return controller.callServerAction("PostVerifyEmail", "screenservices/RESTAPIWebsocket/ActionPostVerifyEmail", "drJumVB08vWE1_xDW5pHlg", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
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