try {
    require(["tslib"], function(tslib) {
        require(["@outsystems/runtime-core-js", "OutSystemsMaps.appDefinition"], function(OSRuntimeCore, OutSystemsMapsAppDefinition) {
            var OS = OSRuntimeCore;
            OS.ErrorScreen.initializeErrorPage(OutSystemsMapsAppDefinition, OS.Application.default);
        });
    });
} catch (ex) {
    console.error(ex);
}