try {
    require(["tslib"], function(tslib) {
        require(["@outsystems/runtime-core-js", "CustomComponents.appDefinition"], function(OSRuntimeCore, CustomComponentsAppDefinition) {
            var OS = OSRuntimeCore;
            OS.ErrorScreen.initializeErrorPage(CustomComponentsAppDefinition, OS.Application.default);
        });
    });
} catch (ex) {
    console.error(ex);
}