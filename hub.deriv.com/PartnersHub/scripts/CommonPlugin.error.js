try {
    require(["tslib"], function(tslib) {
        require(["@outsystems/runtime-core-js", "CommonPlugin.appDefinition"], function(OSRuntimeCore, CommonPluginAppDefinition) {
            var OS = OSRuntimeCore;
            OS.ErrorScreen.initializeErrorPage(CommonPluginAppDefinition, OS.Application.default);
        });
    });
} catch (ex) {
    console.error(ex);
}