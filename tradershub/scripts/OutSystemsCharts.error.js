try {
    require(["tslib"], function(tslib) {
        require(["@outsystems/runtime-core-js", "OutSystemsCharts.appDefinition"], function(OSRuntimeCore, OutSystemsChartsAppDefinition) {
            var OS = OSRuntimeCore;
            OS.ErrorScreen.initializeErrorPage(OutSystemsChartsAppDefinition, OS.Application.default);
        });
    });
} catch (ex) {
    console.error(ex);
}