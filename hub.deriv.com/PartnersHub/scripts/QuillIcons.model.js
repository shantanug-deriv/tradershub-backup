define("QuillIcons.model", ["exports", "@outsystems/runtime-core-js"], function(exports, OSRuntimeCore) {
    var OS = OSRuntimeCore;
    var QuillIconsModel = exports;
    Object.defineProperty(QuillIconsModel, "module", {
        get: function() {
            return OS.ApplicationInfo.getModules()["1bb28e51-8209-4c1b-a978-5f53cf4a47e8"];
        }
    });

    QuillIconsModel.staticEntities = {};
});