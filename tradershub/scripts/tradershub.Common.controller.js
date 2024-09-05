define("tradershub.Common.controller", ["exports", "@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.clientVariables"], function(exports, OSRuntimeCore, tradershubModel, tradershubController, tradershubClientVariables) {
    var OS = OSRuntimeCore;
    var tradershub_CommonController = exports;
    class Controller extends
    OS.Controller.BaseController {
        getDefaultTimeout() {
            return tradershubController.default.defaultTimeout;
        }

        get handleError() {
            if (!(this.hasOwnProperty("_handleError"))) {
                this._handleError = function(ex, callContext) {
                    var controller = this.controller;
                    return OS.Logger.startActiveSpan("OnException", function(span) {
                        if (span) {
                            span.setAttribute("code.function", "OnException");
                            span.setAttribute("outsystems.function.key", "1a118907-e7fa-4938-90a2-703c8abe0fca.#FlowExceptionHandler");
                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                            span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                        }

                        try {
                            var securityExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                            var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                            var dataBaseExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                            var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
                            OS.Logger.debug("Common.OnException", OS.Exceptions.getMessage(ex));
                            if (OS.ErrorHandling.ignoreError(ex, callContext)) {
                                return OS.ErrorHandling.IGNORED_ERROR_RESULT;
                            }

                            try {
                                OS.Logger.debug("Common.OnException", OS.Exceptions.getMessage(ex));
                                // Handle Error: SecurityException
                                if (OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.SecurityException)) {
                                    securityExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                                    return OS.Logger.startActiveSpan("SecurityException", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "SecurityException");
                                            span.setAttribute("outsystems.function.key", "1db0d2fa-26aa-479a-9520-99a3a5d75a3a");
                                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                            span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                                        }

                                        try { // Logged User?
                                            if (((((OS.BuiltinFunctions.getUserId()).toString()) !== (OS.BuiltinFunctions.nullTextIdentifier())))) {
                                                // Destination: /tradershub/InvalidPermissions
                                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "InvalidPermissions", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                                            } else {
                                                // LastRequest
                                                // LastURL = GetBookmarkableURL
                                                tradershubClientVariables.setLastURL(OS.BuiltinFunctions.getBookmarkableURL());
                                                // Destination: /tradershub/Login
                                                return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("tradershub", "CommonLogin", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
                                            }

                                        } finally {
                                            if (span) {
                                                span.end();
                                            }

                                        }

                                    }, 1);
                                }

                                // Handle Error: DataBaseException
                                if (OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.DataBaseException)) {
                                    OS.Logger.error(null, ex, null, null, 1);
                                    dataBaseExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                                    return OS.Logger.startActiveSpan("DataBaseException", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "DataBaseException");
                                            span.setAttribute("outsystems.function.key", "44c56eca-8792-4354-8872-391470dce2a3");
                                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                            span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                                        }

                                        try {
                                            OS.FeedbackMessageService.showFeedbackMessage("There was a problem with the database request. Please contact the administrator", /*Error*/ 3);
                                            return;

                                        } finally {
                                            if (span) {
                                                span.end();
                                            }

                                        }

                                    }, 1);
                                }

                                // Handle Error: CommunicationException
                                if (OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.CommunicationException)) {
                                    OS.Logger.error(null, ex, null, null, 1);
                                    communicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                                    return OS.Logger.startActiveSpan("CommunicationException", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "CommunicationException");
                                            span.setAttribute("outsystems.function.key", "9f3a4c50-96da-4e7b-99b9-25a7b45412e3");
                                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                            span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                                        }

                                        try {
                                            OS.FeedbackMessageService.showFeedbackMessage("There was a problem communicating with the server. Please try again or contact your administrator", /*Error*/ 3);
                                            return;

                                        } finally {
                                            if (span) {
                                                span.end();
                                            }

                                        }

                                    }, 1);
                                }

                                // Handle Error: AllExceptions
                                if (!(OS.Exceptions.isSystem(ex))) {
                                    OS.Logger.error(null, ex, null, null, 1);
                                    allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
                                    return OS.Logger.startActiveSpan("AllExceptions", function(span) {
                                        if (span) {
                                            span.setAttribute("code.function", "AllExceptions");
                                            span.setAttribute("outsystems.function.key", "22e99060-a32a-4cfa-acb6-7bd2cacb7ce1");
                                            span.setAttribute("outsystems.function.owner.name", "tradershub");
                                            span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
                                            span.setAttribute("outsystems.function.type", "CLIENT_EXCEPTION_HANDLER");
                                        }

                                        try {
                                            OS.FeedbackMessageService.showFeedbackMessage("There was a problem. Please contact the administrator", /*Error*/ 3);
                                            return;

                                        } finally {
                                            if (span) {
                                                span.end();
                                            }

                                        }

                                    }, 1);
                                }

                                throw ex;
                            } catch (unhandledEx) {
                                OS.Logger.debug("Common.OnException", OS.Exceptions.getMessage(ex));
                                return OS.ErrorHandling.defaultErrorHandler(unhandledEx, callContext);
                            }

                        } finally {
                            if (span) {
                                span.end();
                            }

                        }

                    }, 1);


                };
            }

            return this._handleError;
        }
        set handleError(value) {
            this._handleError = value;
        }

    }



    tradershub_CommonController.default = new Controller();
});