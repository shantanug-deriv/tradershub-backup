define("SimpleCountdownTimer.model", ["exports", "@outsystems/runtime-core-js"], function(exports, OSRuntimeCore) {
    var OS = OSRuntimeCore;
    var SimpleCountdownTimerModel = exports;
    Object.defineProperty(SimpleCountdownTimerModel, "module", {
        get: function() {
            return OS.ApplicationInfo.getModules()["7c686586-be98-4be4-b619-24e0e0505e97"];
        }
    });

    SimpleCountdownTimerModel.staticEntities = {};
});