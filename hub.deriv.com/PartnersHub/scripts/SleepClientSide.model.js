define("SleepClientSide.model", ["exports", "@outsystems/runtime-core-js"], function(exports, OSRuntimeCore) {
    var OS = OSRuntimeCore;
    var SleepClientSideModel = exports;
    Object.defineProperty(SleepClientSideModel, "module", {
        get: function() {
            return OS.ApplicationInfo.getModules()["3d61746a-11af-4a48-8f6c-ad4a5143a923"];
        }
    });

    SleepClientSideModel.staticEntities = {};
});