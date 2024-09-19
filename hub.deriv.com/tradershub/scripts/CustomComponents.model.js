define("CustomComponents.model$RC_4d77cfdd567b208680377834fc8205a2", ["exports", "@outsystems/runtime-core-js", "System_.model", "CustomComponents.model", "System_.model$PasswordComplexityPolicyRec", "CustomComponents.referencesHealth", "CustomComponents.referencesHealth$System_"], function(exports, OSRuntimeCore, System_Model, CustomComponentsModel) {
    var OS = OSRuntimeCore; {
        class RC_4d77cfdd567b208680377834fc8205a2Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("PasswordComplexityPolicy", "passwordComplexityPolicyAttr", "PasswordComplexityPolicy", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.SystemStructures.PasswordComplexityPolicyRec());
                    }, true, OS.SystemStructures.PasswordComplexityPolicyRec)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_4d77cfdd567b208680377834fc8205a2(new RC_4d77cfdd567b208680377834fc8205a2.RecordClass({
                    passwordComplexityPolicyAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        CustomComponentsModel.RC_4d77cfdd567b208680377834fc8205a2 = RC_4d77cfdd567b208680377834fc8205a2Inner;

        RC_4d77cfdd567b208680377834fc8205a2Inner._isAnonymousRecord = true;
        RC_4d77cfdd567b208680377834fc8205a2Inner.UniqueId = "4d77cfdd-567b-2086-8037-7834fc8205a2";
        var RC_4d77cfdd567b208680377834fc8205a2 = RC_4d77cfdd567b208680377834fc8205a2Inner;
        RC_4d77cfdd567b208680377834fc8205a2.init();
    }
});

define("CustomComponents.model$RL_919d8bc896529858c8cc8f0f3e5cb019", ["exports", "@outsystems/runtime-core-js", "CustomComponents.model", "CustomComponents.model$RC_4d77cfdd567b208680377834fc8205a2"], function(exports, OSRuntimeCore, CustomComponentsModel) {
    var OS = OSRuntimeCore;
    class RL_919d8bc896529858c8cc8f0f3e5cb019 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return CustomComponentsModel.RC_4d77cfdd567b208680377834fc8205a2;
        }

    }

    CustomComponentsModel.RL_919d8bc896529858c8cc8f0f3e5cb019 = RL_919d8bc896529858c8cc8f0f3e5cb019;

});

define("CustomComponents.model$RC_b27f0b968b0f7cea61506ac9d6ee7c27", ["exports", "@outsystems/runtime-core-js", "System_.model", "CustomComponents.model", "System_.model$PasswordValidationResultRec", "CustomComponents.referencesHealth", "CustomComponents.referencesHealth$System_"], function(exports, OSRuntimeCore, System_Model, CustomComponentsModel) {
    var OS = OSRuntimeCore; {
        class RC_b27f0b968b0f7cea61506ac9d6ee7c27Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("PasswordValidationResult", "passwordValidationResultAttr", "PasswordValidationResult", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.SystemStructures.PasswordValidationResultRec());
                    }, true, OS.SystemStructures.PasswordValidationResultRec)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_b27f0b968b0f7cea61506ac9d6ee7c27(new RC_b27f0b968b0f7cea61506ac9d6ee7c27.RecordClass({
                    passwordValidationResultAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        CustomComponentsModel.RC_b27f0b968b0f7cea61506ac9d6ee7c27 = RC_b27f0b968b0f7cea61506ac9d6ee7c27Inner;

        RC_b27f0b968b0f7cea61506ac9d6ee7c27Inner._isAnonymousRecord = true;
        RC_b27f0b968b0f7cea61506ac9d6ee7c27Inner.UniqueId = "b27f0b96-8b0f-7cea-6150-6ac9d6ee7c27";
        var RC_b27f0b968b0f7cea61506ac9d6ee7c27 = RC_b27f0b968b0f7cea61506ac9d6ee7c27Inner;
        RC_b27f0b968b0f7cea61506ac9d6ee7c27.init();
    }
});

define("CustomComponents.model$RL_ca4befaa7d5de5d9bbcd4bf59c44b15c", ["exports", "@outsystems/runtime-core-js", "CustomComponents.model", "CustomComponents.model$RC_b27f0b968b0f7cea61506ac9d6ee7c27"], function(exports, OSRuntimeCore, CustomComponentsModel) {
    var OS = OSRuntimeCore;
    class RL_ca4befaa7d5de5d9bbcd4bf59c44b15c extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return CustomComponentsModel.RC_b27f0b968b0f7cea61506ac9d6ee7c27;
        }

    }

    CustomComponentsModel.RL_ca4befaa7d5de5d9bbcd4bf59c44b15c = RL_ca4befaa7d5de5d9bbcd4bf59c44b15c;

});

define("CustomComponents.model$RL_e57523dcca7e6d3766c4721a0ef109ee", ["exports", "@outsystems/runtime-core-js", "System_.model", "CustomComponents.model", "System_.model$PasswordValidationResultRec", "CustomComponents.referencesHealth", "CustomComponents.referencesHealth$System_"], function(exports, OSRuntimeCore, System_Model, CustomComponentsModel) {
    var OS = OSRuntimeCore;
    class RL_e57523dcca7e6d3766c4721a0ef109ee extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OS.SystemStructures.PasswordValidationResultRec;
        }

    }

    CustomComponentsModel.RL_e57523dcca7e6d3766c4721a0ef109ee = RL_e57523dcca7e6d3766c4721a0ef109ee;

});

define("CustomComponents.model$RL_f50879d0da007880fcd304f3378f0a9e", ["exports", "@outsystems/runtime-core-js", "System_.model", "CustomComponents.model", "System_.model$PasswordComplexityPolicyRec", "CustomComponents.referencesHealth", "CustomComponents.referencesHealth$System_"], function(exports, OSRuntimeCore, System_Model, CustomComponentsModel) {
    var OS = OSRuntimeCore;
    class RL_f50879d0da007880fcd304f3378f0a9e extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OS.SystemStructures.PasswordComplexityPolicyRec;
        }

    }

    CustomComponentsModel.RL_f50879d0da007880fcd304f3378f0a9e = RL_f50879d0da007880fcd304f3378f0a9e;

});

define("CustomComponents.model", ["exports", "@outsystems/runtime-core-js"], function(exports, OSRuntimeCore) {
    var OS = OSRuntimeCore;
    var CustomComponentsModel = exports;
    Object.defineProperty(CustomComponentsModel, "module", {
        get: function() {
            return OS.ApplicationInfo.getModules()["4ba8c4d5-5fe2-407e-a6bd-5a0385565b69"];
        }
    });

    CustomComponentsModel.staticEntities = {};
});