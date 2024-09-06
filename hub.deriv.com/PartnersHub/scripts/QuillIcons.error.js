try {
    require(["tslib"], function(tslib) {
        require(["@outsystems/runtime-core-js", "QuillIcons.appDefinition"], function(OSRuntimeCore, QuillIconsAppDefinition) {
            var OS = OSRuntimeCore;
            OS.ErrorScreen.initializeErrorPage(QuillIconsAppDefinition, OS.Application.default);
        });
    });
} catch (ex) {
    console.error(ex);
}