define("CommonPlugin.model$ST_e17c093645b6df840d3423fc6893e70fStructure", ["exports", "@outsystems/runtime-core-js", "CommonPlugin.model"], function(exports, OSRuntimeCore, CommonPluginModel) {
    var OS = OSRuntimeCore; {
        class ST_e17c093645b6df840d3423fc6893e70fStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ErrorCode", "errorCodeAttr", "ErrorCode", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ErrorMessage", "errorMessageAttr", "ErrorMessage", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        CommonPluginModel.ST_e17c093645b6df840d3423fc6893e70fStructure = ST_e17c093645b6df840d3423fc6893e70fStructureInner;

        var ST_e17c093645b6df840d3423fc6893e70fStructure = ST_e17c093645b6df840d3423fc6893e70fStructureInner;
        ST_e17c093645b6df840d3423fc6893e70fStructure.init();
    }
});

define("CommonPlugin.model$RC_10cf50ec45fc72816b85b8f216ccf5f5", ["exports", "@outsystems/runtime-core-js", "CommonPlugin.model", "CommonPlugin.model$ST_e17c093645b6df840d3423fc6893e70fStructure"], function(exports, OSRuntimeCore, CommonPluginModel) {
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

        CommonPluginModel.RC_10cf50ec45fc72816b85b8f216ccf5f5 = RC_10cf50ec45fc72816b85b8f216ccf5f5Inner;

        RC_10cf50ec45fc72816b85b8f216ccf5f5Inner._isAnonymousRecord = true;
        RC_10cf50ec45fc72816b85b8f216ccf5f5Inner.UniqueId = "10cf50ec-45fc-7281-6b85-b8f216ccf5f5";
        var RC_10cf50ec45fc72816b85b8f216ccf5f5 = RC_10cf50ec45fc72816b85b8f216ccf5f5Inner;
        RC_10cf50ec45fc72816b85b8f216ccf5f5.init();
    }
});

define("CommonPlugin.model$ST_3695e3f105edfc9bb9d7bc5568b9b2f5Structure", ["exports", "@outsystems/runtime-core-js", "CommonPlugin.model"], function(exports, OSRuntimeCore, CommonPluginModel) {
    var OS = OSRuntimeCore; {
        class ST_3695e3f105edfc9bb9d7bc5568b9b2f5StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("PluginName", "pluginNameAttr", "PluginName", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("MobileOperatingSystemId", "mobileOperatingSystemIdAttr", "MobileOperatingSystemId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("License", "licenseAttr", "License", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("SubscriptionKey", "subscriptionKeyAttr", "SubscriptionKey", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("SubscriptionToken", "subscriptionTokenAttr", "SubscriptionToken", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("UpdatedBy", "updatedByAttr", "UpdatedBy", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("LastUpdate", "lastUpdateAttr", "LastUpdate", false, false, OS.DataTypes.DataTypes.DateTime, function() {
                        return OS.DataTypes.DateTime.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        CommonPluginModel.ST_3695e3f105edfc9bb9d7bc5568b9b2f5Structure = ST_3695e3f105edfc9bb9d7bc5568b9b2f5StructureInner;

        var ST_3695e3f105edfc9bb9d7bc5568b9b2f5Structure = ST_3695e3f105edfc9bb9d7bc5568b9b2f5StructureInner;
        ST_3695e3f105edfc9bb9d7bc5568b9b2f5Structure.init();
    }
});

define("CommonPlugin.model$RC_19291221730fdcdd004b1f53d5ed5e62", ["exports", "@outsystems/runtime-core-js", "CommonPlugin.model", "CommonPlugin.model$ST_3695e3f105edfc9bb9d7bc5568b9b2f5Structure"], function(exports, OSRuntimeCore, CommonPluginModel) {
    var OS = OSRuntimeCore; {
        class RC_19291221730fdcdd004b1f53d5ed5e62Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("PluginLicense", "pluginLicenseAttr", "PluginLicense", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new CommonPluginModel.ST_3695e3f105edfc9bb9d7bc5568b9b2f5Structure());
                    }, true, CommonPluginModel.ST_3695e3f105edfc9bb9d7bc5568b9b2f5Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_19291221730fdcdd004b1f53d5ed5e62(new RC_19291221730fdcdd004b1f53d5ed5e62.RecordClass({
                    pluginLicenseAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        CommonPluginModel.RC_19291221730fdcdd004b1f53d5ed5e62 = RC_19291221730fdcdd004b1f53d5ed5e62Inner;

        RC_19291221730fdcdd004b1f53d5ed5e62Inner._isAnonymousRecord = true;
        RC_19291221730fdcdd004b1f53d5ed5e62Inner.UniqueId = "19291221-730f-dcdd-004b-1f53d5ed5e62";
        var RC_19291221730fdcdd004b1f53d5ed5e62 = RC_19291221730fdcdd004b1f53d5ed5e62Inner;
        RC_19291221730fdcdd004b1f53d5ed5e62.init();
    }
});

define("CommonPlugin.model$EN_589575018eea7445e67437e5e372d5fbEntityRecord", ["exports", "@outsystems/runtime-core-js", "CommonPlugin.model"], function(exports, OSRuntimeCore, CommonPluginModel) {
    var OS = OSRuntimeCore; {
        class EN_589575018eea7445e67437e5e372d5fbEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        CommonPluginModel.EN_589575018eea7445e67437e5e372d5fbEntityRecord = EN_589575018eea7445e67437e5e372d5fbEntityRecordInner;

        var EN_589575018eea7445e67437e5e372d5fbEntityRecord = EN_589575018eea7445e67437e5e372d5fbEntityRecordInner;
        EN_589575018eea7445e67437e5e372d5fbEntityRecord.init();
    }
});

define("CommonPlugin.model$RC_ff0a3e3859d350c5c9b7f180c407c940", ["exports", "@outsystems/runtime-core-js", "CommonPlugin.model", "CommonPlugin.model$EN_589575018eea7445e67437e5e372d5fbEntityRecord"], function(exports, OSRuntimeCore, CommonPluginModel) {
    var OS = OSRuntimeCore; {
        class RC_ff0a3e3859d350c5c9b7f180c407c940Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Mobile_OperatingSystem", "mobile_OperatingSystemAttr", "Mobile_OperatingSystem", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new CommonPluginModel.EN_589575018eea7445e67437e5e372d5fbEntityRecord());
                    }, true, CommonPluginModel.EN_589575018eea7445e67437e5e372d5fbEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_ff0a3e3859d350c5c9b7f180c407c940(new RC_ff0a3e3859d350c5c9b7f180c407c940.RecordClass({
                    mobile_OperatingSystemAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        CommonPluginModel.RC_ff0a3e3859d350c5c9b7f180c407c940 = RC_ff0a3e3859d350c5c9b7f180c407c940Inner;

        RC_ff0a3e3859d350c5c9b7f180c407c940Inner._isAnonymousRecord = true;
        RC_ff0a3e3859d350c5c9b7f180c407c940Inner.UniqueId = "ff0a3e38-59d3-50c5-c9b7-f180c407c940";
        var RC_ff0a3e3859d350c5c9b7f180c407c940 = RC_ff0a3e3859d350c5c9b7f180c407c940Inner;
        RC_ff0a3e3859d350c5c9b7f180c407c940.init();
    }
});

define("CommonPlugin.model$RL_4934d4da3a140c3c63a27e5dda706dc0", ["exports", "@outsystems/runtime-core-js", "CommonPlugin.model", "CommonPlugin.model$RC_ff0a3e3859d350c5c9b7f180c407c940"], function(exports, OSRuntimeCore, CommonPluginModel) {
    var OS = OSRuntimeCore;
    class RL_4934d4da3a140c3c63a27e5dda706dc0 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return CommonPluginModel.RC_ff0a3e3859d350c5c9b7f180c407c940;
        }

    }

    CommonPluginModel.RL_4934d4da3a140c3c63a27e5dda706dc0 = RL_4934d4da3a140c3c63a27e5dda706dc0;

});

define("CommonPlugin.model$RL_6053399b72ae5331f9c7a36d3616ca59", ["exports", "@outsystems/runtime-core-js", "CommonPlugin.model", "CommonPlugin.model$ST_3695e3f105edfc9bb9d7bc5568b9b2f5Structure"], function(exports, OSRuntimeCore, CommonPluginModel) {
    var OS = OSRuntimeCore;
    class RL_6053399b72ae5331f9c7a36d3616ca59 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return CommonPluginModel.ST_3695e3f105edfc9bb9d7bc5568b9b2f5Structure;
        }

    }

    CommonPluginModel.RL_6053399b72ae5331f9c7a36d3616ca59 = RL_6053399b72ae5331f9c7a36d3616ca59;

});

define("CommonPlugin.model$RL_6ab251fa7982343300d60d8656ef0279", ["exports", "@outsystems/runtime-core-js", "CommonPlugin.model", "CommonPlugin.model$RC_10cf50ec45fc72816b85b8f216ccf5f5"], function(exports, OSRuntimeCore, CommonPluginModel) {
    var OS = OSRuntimeCore;
    class RL_6ab251fa7982343300d60d8656ef0279 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return CommonPluginModel.RC_10cf50ec45fc72816b85b8f216ccf5f5;
        }

    }

    CommonPluginModel.RL_6ab251fa7982343300d60d8656ef0279 = RL_6ab251fa7982343300d60d8656ef0279;

});

define("CommonPlugin.model$RL_818242b85443e5c7fa45b1c41378ddb5", ["exports", "@outsystems/runtime-core-js", "CommonPlugin.model", "CommonPlugin.model$ST_e17c093645b6df840d3423fc6893e70fStructure"], function(exports, OSRuntimeCore, CommonPluginModel) {
    var OS = OSRuntimeCore;
    class RL_818242b85443e5c7fa45b1c41378ddb5 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return CommonPluginModel.ST_e17c093645b6df840d3423fc6893e70fStructure;
        }

    }

    CommonPluginModel.RL_818242b85443e5c7fa45b1c41378ddb5 = RL_818242b85443e5c7fa45b1c41378ddb5;

});

define("CommonPlugin.model$RL_b2ecc4bcc9c14c7ee8d2dcb6102a08e1", ["exports", "@outsystems/runtime-core-js", "CommonPlugin.model", "CommonPlugin.model$RC_19291221730fdcdd004b1f53d5ed5e62"], function(exports, OSRuntimeCore, CommonPluginModel) {
    var OS = OSRuntimeCore;
    class RL_b2ecc4bcc9c14c7ee8d2dcb6102a08e1 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return CommonPluginModel.RC_19291221730fdcdd004b1f53d5ed5e62;
        }

    }

    CommonPluginModel.RL_b2ecc4bcc9c14c7ee8d2dcb6102a08e1 = RL_b2ecc4bcc9c14c7ee8d2dcb6102a08e1;

});

define("CommonPlugin.model$RL_fee08e0b1effda868d70515cecb69aaa", ["exports", "@outsystems/runtime-core-js", "CommonPlugin.model", "CommonPlugin.model$EN_589575018eea7445e67437e5e372d5fbEntityRecord"], function(exports, OSRuntimeCore, CommonPluginModel) {
    var OS = OSRuntimeCore;
    class RL_fee08e0b1effda868d70515cecb69aaa extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return CommonPluginModel.EN_589575018eea7445e67437e5e372d5fbEntityRecord;
        }

    }

    CommonPluginModel.RL_fee08e0b1effda868d70515cecb69aaa = RL_fee08e0b1effda868d70515cecb69aaa;

});

define("CommonPlugin.model", ["exports", "@outsystems/runtime-core-js"], function(exports, OSRuntimeCore) {
    var OS = OSRuntimeCore;
    var CommonPluginModel = exports;
    Object.defineProperty(CommonPluginModel, "module", {
        get: function() {
            return OS.ApplicationInfo.getModules()["8b0ceaeb-05b8-4921-bf46-e0d6c66e8472"];
        }
    });

    CommonPluginModel.staticEntities = {};
    CommonPluginModel.staticEntities.mobile_OperatingSystem = {};
    var getMobile_OperatingSystemRecord = function(record) {
        return CommonPluginModel.module.staticEntities["10d81ae0-bc98-4498-b0ca-a0e8cd76087b"][record];
    };
    Object.defineProperty(CommonPluginModel.staticEntities.mobile_OperatingSystem, "other", {
        get: function() {
            return "Other";
        }
    });

    Object.defineProperty(CommonPluginModel.staticEntities.mobile_OperatingSystem, "windows", {
        get: function() {
            return "Windows";
        }
    });

    Object.defineProperty(CommonPluginModel.staticEntities.mobile_OperatingSystem, "iOS", {
        get: function() {
            return "iOS";
        }
    });

    Object.defineProperty(CommonPluginModel.staticEntities.mobile_OperatingSystem, "android", {
        get: function() {
            return "Android";
        }
    });

});