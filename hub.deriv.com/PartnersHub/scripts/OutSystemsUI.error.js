try {
    require(["tslib"], function(tslib) {
        require(["@outsystems/runtime-core-js", "OutSystemsUI.appDefinition"], function(OSRuntimeCore, OutSystemsUIAppDefinition) {
            var OS = OSRuntimeCore;
            OS.ErrorScreen.initializeErrorPage(OutSystemsUIAppDefinition, OS.Application.default);
        });
    });
} catch (ex) {
    console.error(ex);
}