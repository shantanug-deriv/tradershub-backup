try {
    require(["tslib"], function(tslib) {
        require(["@outsystems/runtime-core-js", "BrowserConsoleLogging.appDefinition"], function(OSRuntimeCore, BrowserConsoleLoggingAppDefinition) {
            var OS = OSRuntimeCore;
            OS.ErrorScreen.initializeErrorPage(BrowserConsoleLoggingAppDefinition, OS.Application.default);
        });
    });
} catch (ex) {
    console.error(ex);
}