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
    }]);
    RESTAPIWebsocketController.default.clientActionProxies.authorize$Action = function(appIdIn, languageIn, authorizeRequestIn, hostIn) {
        appIdIn = (appIdIn === undefined) ? "" : appIdIn;
        languageIn = (languageIn === undefined) ? "" : languageIn;
        authorizeRequestIn = (authorizeRequestIn === undefined) ? new RESTAPIWebsocketModel.ST_450f06937a42e6bd68832beac9fd4297Structure() : authorizeRequestIn;
        hostIn = (hostIn === undefined) ? "" : hostIn;
        return controller.executeActionInsideJSNode(RESTAPIWebsocketController.default.authorize$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(appIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(languageIn, OS.DataTypes.DataTypes.Text), authorizeRequestIn, OS.DataConversion.JSNodeParamConverter.from(hostIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Response: actionResults.responseOut
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
            console.log($parameters.AuthorizeRequest)
            const options = {
                method: 'POST', // or 'POST', 'PUT', etc.
                headers: {
                    'Content-Type': 'application/json',
                    // Add any other headers you need
                },
                body: $parameters.AuthorizeRequest
            };
            const result = await fetchHandler(url, options);
            console.log(result)

            $parameters.Response = JSON.stringify(result)
        };
        fetchData();
    };
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
                return controller.callServerAction("PostAuthorize", "screenservices/RESTAPIWebsocket/ActionPostAuthorize", "Sd5BUNBK30giKO36n_Ynyw", inputs, controller.callContext(callContext), undefined, undefined, false).then(function(outputs) {
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