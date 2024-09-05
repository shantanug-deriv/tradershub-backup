try {
    require(["tslib"], function(tslib) {
        require(["@outsystems/runtime-core-js", "tradershub.appDefinition"], function(OSRuntimeCore, tradershubAppDefinition) {
            var OS = OSRuntimeCore;
            OS.ErrorScreen.initializeErrorPage(tradershubAppDefinition, OS.Application.default);
        });
    });
} catch (ex) {
    console.error(ex);
}