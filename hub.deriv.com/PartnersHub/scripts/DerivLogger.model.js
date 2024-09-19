define("DerivLogger.model$EN_aff9922b432a86fca9eedb69e5493ac3EntityRecord", ["exports", "@outsystems/runtime-core-js", "DerivLogger.model"], function(exports, OSRuntimeCore, DerivLoggerModel) {
    var OS = OSRuntimeCore; {
        class EN_aff9922b432a86fca9eedb69e5493ac3EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
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

        DerivLoggerModel.EN_aff9922b432a86fca9eedb69e5493ac3EntityRecord = EN_aff9922b432a86fca9eedb69e5493ac3EntityRecordInner;

        var EN_aff9922b432a86fca9eedb69e5493ac3EntityRecord = EN_aff9922b432a86fca9eedb69e5493ac3EntityRecordInner;
        EN_aff9922b432a86fca9eedb69e5493ac3EntityRecord.init();
    }
});

define("DerivLogger.model$RL_389fedb389f062cabae44513c3a5330f", ["exports", "@outsystems/runtime-core-js", "DerivLogger.model", "DerivLogger.model$EN_aff9922b432a86fca9eedb69e5493ac3EntityRecord"], function(exports, OSRuntimeCore, DerivLoggerModel) {
    var OS = OSRuntimeCore;
    class RL_389fedb389f062cabae44513c3a5330f extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return DerivLoggerModel.EN_aff9922b432a86fca9eedb69e5493ac3EntityRecord;
        }

    }

    DerivLoggerModel.RL_389fedb389f062cabae44513c3a5330f = RL_389fedb389f062cabae44513c3a5330f;

});

define("DerivLogger.model$RC_f045d5e7dbbffce86c51999e90634954", ["exports", "@outsystems/runtime-core-js", "DerivLogger.model", "DerivLogger.model$EN_aff9922b432a86fca9eedb69e5493ac3EntityRecord"], function(exports, OSRuntimeCore, DerivLoggerModel) {
    var OS = OSRuntimeCore; {
        class RC_f045d5e7dbbffce86c51999e90634954Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ConsoleErrorType", "consoleErrorTypeAttr", "ConsoleErrorType", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new DerivLoggerModel.EN_aff9922b432a86fca9eedb69e5493ac3EntityRecord());
                    }, true, DerivLoggerModel.EN_aff9922b432a86fca9eedb69e5493ac3EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_f045d5e7dbbffce86c51999e90634954(new RC_f045d5e7dbbffce86c51999e90634954.RecordClass({
                    consoleErrorTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        DerivLoggerModel.RC_f045d5e7dbbffce86c51999e90634954 = RC_f045d5e7dbbffce86c51999e90634954Inner;

        RC_f045d5e7dbbffce86c51999e90634954Inner._isAnonymousRecord = true;
        RC_f045d5e7dbbffce86c51999e90634954Inner.UniqueId = "f045d5e7-dbbf-fce8-6c51-999e90634954";
        var RC_f045d5e7dbbffce86c51999e90634954 = RC_f045d5e7dbbffce86c51999e90634954Inner;
        RC_f045d5e7dbbffce86c51999e90634954.init();
    }
});

define("DerivLogger.model$RL_441c5b272aa90d830e05d5f4bd551e45", ["exports", "@outsystems/runtime-core-js", "DerivLogger.model", "DerivLogger.model$RC_f045d5e7dbbffce86c51999e90634954"], function(exports, OSRuntimeCore, DerivLoggerModel) {
    var OS = OSRuntimeCore;
    class RL_441c5b272aa90d830e05d5f4bd551e45 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return DerivLoggerModel.RC_f045d5e7dbbffce86c51999e90634954;
        }

    }

    DerivLoggerModel.RL_441c5b272aa90d830e05d5f4bd551e45 = RL_441c5b272aa90d830e05d5f4bd551e45;

});

define("DerivLogger.model", ["exports", "@outsystems/runtime-core-js"], function(exports, OSRuntimeCore) {
    var OS = OSRuntimeCore;
    var DerivLoggerModel = exports;
    Object.defineProperty(DerivLoggerModel, "module", {
        get: function() {
            return OS.ApplicationInfo.getModules()["f82f9453-1490-4d2f-af92-09c673f6ed5c"];
        }
    });

    DerivLoggerModel.staticEntities = {};
    DerivLoggerModel.staticEntities.consoleErrorType = {};
    var getConsoleErrorTypeRecord = function(record) {
        return DerivLoggerModel.module.staticEntities["18eef253-4376-4287-8f3a-dedb635f5e6d"][record];
    };
    Object.defineProperty(DerivLoggerModel.staticEntities.consoleErrorType, "error", {
        get: function() {
            return 2;
        }
    });

    Object.defineProperty(DerivLoggerModel.staticEntities.consoleErrorType, "warning", {
        get: function() {
            return 1;
        }
    });

    Object.defineProperty(DerivLoggerModel.staticEntities.consoleErrorType, "information", {
        get: function() {
            return 0;
        }
    });

});