try {
    require(["tslib"], function(tslib) {
        require(["@outsystems/runtime-core-js", "FEReleaseSlackIntegration.appDefinition"], function(OSRuntimeCore, FEReleaseSlackIntegrationAppDefinition) {
            var OS = OSRuntimeCore;
            OS.ErrorScreen.initializeErrorPage(FEReleaseSlackIntegrationAppDefinition, OS.Application.default);
        });
    });
} catch (ex) {
    console.error(ex);
}