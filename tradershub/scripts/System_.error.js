try {
    require(["tslib"], function(tslib) {
        require(["@outsystems/runtime-core-js", "System_.appDefinition"], function(OSRuntimeCore, System_AppDefinition) {
            var OS = OSRuntimeCore;
            OS.ErrorScreen.initializeErrorPage(System_AppDefinition, OS.Application.default);
        });
    });
} catch (ex) {
    console.error(ex);
}