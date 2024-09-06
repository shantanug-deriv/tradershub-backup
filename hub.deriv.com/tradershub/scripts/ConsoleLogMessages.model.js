define("ConsoleLogMessages.model$EN_a809c82b70eff26848bd265c09186079EntityRecord", ["exports", "@outsystems/runtime-core-js", "ConsoleLogMessages.model"], function(exports, OSRuntimeCore, ConsoleLogMessagesModel) {
    var OS = OSRuntimeCore;
    {
        class EN_a809c82b70eff26848bd265c09186079EntityRecordInner extends
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

        ConsoleLogMessagesModel.EN_a809c82b70eff26848bd265c09186079EntityRecord = EN_a809c82b70eff26848bd265c09186079EntityRecordInner;

        var EN_a809c82b70eff26848bd265c09186079EntityRecord = EN_a809c82b70eff26848bd265c09186079EntityRecordInner;
        EN_a809c82b70eff26848bd265c09186079EntityRecord.init();
    }
});

define("ConsoleLogMessages.model$RC_42f0b363d216e543faf0adcae54ce582", ["exports", "@outsystems/runtime-core-js", "ConsoleLogMessages.model", "ConsoleLogMessages.model$EN_a809c82b70eff26848bd265c09186079EntityRecord"], function(exports, OSRuntimeCore, ConsoleLogMessagesModel) {
    var OS = OSRuntimeCore;
    {
        class RC_42f0b363d216e543faf0adcae54ce582Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ConsoleErrorType", "consoleErrorTypeAttr", "ConsoleErrorType", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new ConsoleLogMessagesModel.EN_a809c82b70eff26848bd265c09186079EntityRecord());
                    }, true, ConsoleLogMessagesModel.EN_a809c82b70eff26848bd265c09186079EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_42f0b363d216e543faf0adcae54ce582(new RC_42f0b363d216e543faf0adcae54ce582.RecordClass({
                    consoleErrorTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        ConsoleLogMessagesModel.RC_42f0b363d216e543faf0adcae54ce582 = RC_42f0b363d216e543faf0adcae54ce582Inner;

        RC_42f0b363d216e543faf0adcae54ce582Inner._isAnonymousRecord = true;
        RC_42f0b363d216e543faf0adcae54ce582Inner.UniqueId = "42f0b363-d216-e543-faf0-adcae54ce582";
        var RC_42f0b363d216e543faf0adcae54ce582 = RC_42f0b363d216e543faf0adcae54ce582Inner;
        RC_42f0b363d216e543faf0adcae54ce582.init();
    }
});

define("ConsoleLogMessages.model$RL_6c066afd42802dd381ad037984fdb2cc", ["exports", "@outsystems/runtime-core-js", "ConsoleLogMessages.model", "ConsoleLogMessages.model$RC_42f0b363d216e543faf0adcae54ce582"], function(exports, OSRuntimeCore, ConsoleLogMessagesModel) {
    var OS = OSRuntimeCore;
    class RL_6c066afd42802dd381ad037984fdb2cc extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return ConsoleLogMessagesModel.RC_42f0b363d216e543faf0adcae54ce582;
        }

    }

    ConsoleLogMessagesModel.RL_6c066afd42802dd381ad037984fdb2cc = RL_6c066afd42802dd381ad037984fdb2cc;

});

define("ConsoleLogMessages.model$RL_7129c9cf248c4ac8062f257eb0964916", ["exports", "@outsystems/runtime-core-js", "ConsoleLogMessages.model", "ConsoleLogMessages.model$EN_a809c82b70eff26848bd265c09186079EntityRecord"], function(exports, OSRuntimeCore, ConsoleLogMessagesModel) {
    var OS = OSRuntimeCore;
    class RL_7129c9cf248c4ac8062f257eb0964916 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return ConsoleLogMessagesModel.EN_a809c82b70eff26848bd265c09186079EntityRecord;
        }

    }

    ConsoleLogMessagesModel.RL_7129c9cf248c4ac8062f257eb0964916 = RL_7129c9cf248c4ac8062f257eb0964916;

});

define("ConsoleLogMessages.model", ["exports", "@outsystems/runtime-core-js"], function(exports, OSRuntimeCore) {
    var OS = OSRuntimeCore;
    var ConsoleLogMessagesModel = exports;
    Object.defineProperty(ConsoleLogMessagesModel, "module", {
        get: function() {
            return OS.ApplicationInfo.getModules()["c9323f2b-8a7e-4637-a0c1-89fe796c535c"];
        }
    });

    ConsoleLogMessagesModel.staticEntities = {};
    ConsoleLogMessagesModel.staticEntities.consoleErrorType = {};
    var getConsoleErrorTypeRecord = function(record) {
        return ConsoleLogMessagesModel.module.staticEntities["9cfa8592-5ec8-4f6b-8f24-b3a6642497a2"][record];
    };
    Object.defineProperty(ConsoleLogMessagesModel.staticEntities.consoleErrorType, "error", {
        get: function() {
            return 3;
        }
    });

    Object.defineProperty(ConsoleLogMessagesModel.staticEntities.consoleErrorType, "information", {
        get: function() {
            return 1;
        }
    });

    Object.defineProperty(ConsoleLogMessagesModel.staticEntities.consoleErrorType, "warning", {
        get: function() {
            return 2;
        }
    });

});