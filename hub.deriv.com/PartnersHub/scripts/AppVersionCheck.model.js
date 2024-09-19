define("AppVersionCheck.model$RC_10cf50ec45fc72816b85b8f216ccf5f5", ["exports", "@outsystems/runtime-core-js", "CommonPlugin.model", "AppVersionCheck.model", "CommonPlugin.model$ST_e17c093645b6df840d3423fc6893e70fStructure", "AppVersionCheck.referencesHealth", "AppVersionCheck.referencesHealth$CommonPlugin"], function(exports, OSRuntimeCore, CommonPluginModel, AppVersionCheckModel) {
    var OS = OSRuntimeCore; {
        class RC_10cf50ec45fc72816b85b8f216ccf5f5Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Error", "errorAttr", "Error", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new CommonPluginModel.ST_e17c093645b6df840d3423fc6893e70fStructure());
                    }, true, CommonPluginModel.ST_e17c093645b6df840d3423fc6893e70fStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_10cf50ec45fc72816b85b8f216ccf5f5(new RC_10cf50ec45fc72816b85b8f216ccf5f5.RecordClass({
                    errorAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        AppVersionCheckModel.RC_10cf50ec45fc72816b85b8f216ccf5f5 = RC_10cf50ec45fc72816b85b8f216ccf5f5Inner;

        RC_10cf50ec45fc72816b85b8f216ccf5f5Inner._isAnonymousRecord = true;
        RC_10cf50ec45fc72816b85b8f216ccf5f5Inner.UniqueId = "10cf50ec-45fc-7281-6b85-b8f216ccf5f5";
        var RC_10cf50ec45fc72816b85b8f216ccf5f5 = RC_10cf50ec45fc72816b85b8f216ccf5f5Inner;
        RC_10cf50ec45fc72816b85b8f216ccf5f5.init();
    }
});

define("AppVersionCheck.model$RL_6ab251fa7982343300d60d8656ef0279", ["exports", "@outsystems/runtime-core-js", "AppVersionCheck.model", "AppVersionCheck.model$RC_10cf50ec45fc72816b85b8f216ccf5f5"], function(exports, OSRuntimeCore, AppVersionCheckModel) {
    var OS = OSRuntimeCore;
    class RL_6ab251fa7982343300d60d8656ef0279 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return AppVersionCheckModel.RC_10cf50ec45fc72816b85b8f216ccf5f5;
        }

    }

    AppVersionCheckModel.RL_6ab251fa7982343300d60d8656ef0279 = RL_6ab251fa7982343300d60d8656ef0279;

});

define("AppVersionCheck.model$RL_818242b85443e5c7fa45b1c41378ddb5", ["exports", "@outsystems/runtime-core-js", "CommonPlugin.model", "AppVersionCheck.model", "CommonPlugin.model$ST_e17c093645b6df840d3423fc6893e70fStructure", "AppVersionCheck.referencesHealth", "AppVersionCheck.referencesHealth$CommonPlugin"], function(exports, OSRuntimeCore, CommonPluginModel, AppVersionCheckModel) {
    var OS = OSRuntimeCore;
    class RL_818242b85443e5c7fa45b1c41378ddb5 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return CommonPluginModel.ST_e17c093645b6df840d3423fc6893e70fStructure;
        }

    }

    AppVersionCheckModel.RL_818242b85443e5c7fa45b1c41378ddb5 = RL_818242b85443e5c7fa45b1c41378ddb5;

});

define("AppVersionCheck.model", ["exports", "@outsystems/runtime-core-js"], function(exports, OSRuntimeCore) {
    var OS = OSRuntimeCore;
    var AppVersionCheckModel = exports;
    Object.defineProperty(AppVersionCheckModel, "module", {
        get: function() {
            return OS.ApplicationInfo.getModules()["36906aa4-e5d6-405a-90a9-2bfa6f35ea1b"];
        }
    });

    AppVersionCheckModel.staticEntities = {};
});