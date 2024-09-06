try {
    require(["tslib"], function(tslib) {
        require(["@outsystems/runtime-core-js", "SleepClientSide.appDefinition"], function(OSRuntimeCore, SleepClientSideAppDefinition) {
            var OS = OSRuntimeCore;
            OS.ErrorScreen.initializeErrorPage(SleepClientSideAppDefinition, OS.Application.default);
        });
    });
} catch (ex) {
    console.error(ex);
}