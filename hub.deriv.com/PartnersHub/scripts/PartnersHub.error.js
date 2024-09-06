try {
    require(["tslib"], function(tslib) {
        require(["@outsystems/runtime-core-js", "PartnersHub.appDefinition"], function(OSRuntimeCore, PartnersHubAppDefinition) {
            var OS = OSRuntimeCore;
            OS.ErrorScreen.initializeErrorPage(PartnersHubAppDefinition, OS.Application.default);
        });
    });
} catch (ex) {
    console.error(ex);
}