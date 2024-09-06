try {
    require(["tslib"], function(tslib) {
        require(["@outsystems/runtime-core-js", "DerivLogger.appDefinition"], function(OSRuntimeCore, DerivLoggerAppDefinition) {
            var OS = OSRuntimeCore;
            OS.ErrorScreen.initializeErrorPage(DerivLoggerAppDefinition, OS.Application.default);
        });
    });
} catch (ex) {
    console.error(ex);
}