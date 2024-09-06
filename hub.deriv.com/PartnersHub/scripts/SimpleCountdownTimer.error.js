try {
    require(["tslib"], function(tslib) {
        require(["@outsystems/runtime-core-js", "SimpleCountdownTimer.appDefinition"], function(OSRuntimeCore, SimpleCountdownTimerAppDefinition) {
            var OS = OSRuntimeCore;
            OS.ErrorScreen.initializeErrorPage(SimpleCountdownTimerAppDefinition, OS.Application.default);
        });
    });
} catch (ex) {
    console.error(ex);
}