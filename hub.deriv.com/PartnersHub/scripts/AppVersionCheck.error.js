try {
    require(["tslib"], function(tslib) {
        require(["@outsystems/runtime-core-js", "AppVersionCheck.appDefinition"], function(OSRuntimeCore, AppVersionCheckAppDefinition) {
            var OS = OSRuntimeCore;
            OS.ErrorScreen.initializeErrorPage(AppVersionCheckAppDefinition, OS.Application.default);
        });
    });
} catch (ex) {
    console.error(ex);
}