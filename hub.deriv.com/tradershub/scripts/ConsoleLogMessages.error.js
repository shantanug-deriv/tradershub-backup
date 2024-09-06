try {
    require(["tslib"], function(tslib) {
        require(["@outsystems/runtime-core-js", "ConsoleLogMessages.appDefinition"], function(OSRuntimeCore, ConsoleLogMessagesAppDefinition) {
            var OS = OSRuntimeCore;
            OS.ErrorScreen.initializeErrorPage(ConsoleLogMessagesAppDefinition, OS.Application.default);
        });
    });
} catch (ex) {
    console.error(ex);
}