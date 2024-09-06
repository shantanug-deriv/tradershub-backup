require(["tslib"], function(tslib) {
    require(["@outsystems/runtime-core-js", "ConsoleLogMessages.appDefinition", "@outsystems/runtime-core-js/debugger"], function(OSRuntimeCore, ConsoleLogMessagesAppDefinition, NullDebugger) {
        var OS = OSRuntimeCore;
        if (OS.Navigation.ensureRequestSecurity()) {
            return;
        }

        Promise.all([OS.Application.default.initialize(ConsoleLogMessagesAppDefinition, OS.Interfaces.Application.InitializationType.Full, new OS.Format.DateTimeFormatInfo("yyyy-MM-dd", "HH:mm:ss"), new OS.Format.NumberFormatInfo(".", "")).then(function(success) {
            if (success) {
                function initGlobalExceptionHandler() {
                    return new Promise(function(resolve) {
                        OS.Application.default.registerDefaultErrorHandler(function() {
                            return function(error, callContext) {
                                return OS.ErrorHandling.defaultErrorHandler(error, callContext);
                            };
                        });
                        resolve();
                    });
                }

                function initView() {
                    return OS.Flow.promise(function(resolve, reject) {
                        require(["@outsystems/runtime-view-js"], function(OSView) {
                            try {
                                OSView.Router.load(OS.Application.default);
                                resolve();
                            } catch (error) {
                                reject(error);
                            }

                        });
                    });
                }
                return initGlobalExceptionHandler().then(initView);
            }

        })]).catch(function(error) {
            OS.ErrorHandling.handleError(error);
        });
    });
});