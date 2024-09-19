define("BrowserConsoleLogging.model$EN_95096fd7ce0528eba549110f4ff009ffEntityRecord", ["exports", "@outsystems/runtime-core-js", "BrowserConsoleLogging.model"], function(exports, OSRuntimeCore, BrowserConsoleLoggingModel) {
    var OS = OSRuntimeCore; {
        class EN_95096fd7ce0528eba549110f4ff009ffEntityRecordInner extends
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

        BrowserConsoleLoggingModel.EN_95096fd7ce0528eba549110f4ff009ffEntityRecord = EN_95096fd7ce0528eba549110f4ff009ffEntityRecordInner;

        var EN_95096fd7ce0528eba549110f4ff009ffEntityRecord = EN_95096fd7ce0528eba549110f4ff009ffEntityRecordInner;
        EN_95096fd7ce0528eba549110f4ff009ffEntityRecord.init();
    }
});

define("BrowserConsoleLogging.model$RC_5e259c61591c72343b5887d8b4ce62b5", ["exports", "@outsystems/runtime-core-js", "BrowserConsoleLogging.model", "BrowserConsoleLogging.model$EN_95096fd7ce0528eba549110f4ff009ffEntityRecord"], function(exports, OSRuntimeCore, BrowserConsoleLoggingModel) {
    var OS = OSRuntimeCore; {
        class RC_5e259c61591c72343b5887d8b4ce62b5Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ConsoleErrorType", "consoleErrorTypeAttr", "ConsoleErrorType", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new BrowserConsoleLoggingModel.EN_95096fd7ce0528eba549110f4ff009ffEntityRecord());
                    }, true, BrowserConsoleLoggingModel.EN_95096fd7ce0528eba549110f4ff009ffEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_5e259c61591c72343b5887d8b4ce62b5(new RC_5e259c61591c72343b5887d8b4ce62b5.RecordClass({
                    consoleErrorTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        BrowserConsoleLoggingModel.RC_5e259c61591c72343b5887d8b4ce62b5 = RC_5e259c61591c72343b5887d8b4ce62b5Inner;

        RC_5e259c61591c72343b5887d8b4ce62b5Inner._isAnonymousRecord = true;
        RC_5e259c61591c72343b5887d8b4ce62b5Inner.UniqueId = "5e259c61-591c-7234-3b58-87d8b4ce62b5";
        var RC_5e259c61591c72343b5887d8b4ce62b5 = RC_5e259c61591c72343b5887d8b4ce62b5Inner;
        RC_5e259c61591c72343b5887d8b4ce62b5.init();
    }
});

define("BrowserConsoleLogging.model$RL_422c5cc1eb56f188f2e407af881395ae", ["exports", "@outsystems/runtime-core-js", "BrowserConsoleLogging.model", "BrowserConsoleLogging.model$RC_5e259c61591c72343b5887d8b4ce62b5"], function(exports, OSRuntimeCore, BrowserConsoleLoggingModel) {
    var OS = OSRuntimeCore;
    class RL_422c5cc1eb56f188f2e407af881395ae extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return BrowserConsoleLoggingModel.RC_5e259c61591c72343b5887d8b4ce62b5;
        }

    }

    BrowserConsoleLoggingModel.RL_422c5cc1eb56f188f2e407af881395ae = RL_422c5cc1eb56f188f2e407af881395ae;

});

define("BrowserConsoleLogging.model$RL_9cb00801b4a261afbddde8f0eaaf25f3", ["exports", "@outsystems/runtime-core-js", "BrowserConsoleLogging.model", "BrowserConsoleLogging.model$EN_95096fd7ce0528eba549110f4ff009ffEntityRecord"], function(exports, OSRuntimeCore, BrowserConsoleLoggingModel) {
    var OS = OSRuntimeCore;
    class RL_9cb00801b4a261afbddde8f0eaaf25f3 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return BrowserConsoleLoggingModel.EN_95096fd7ce0528eba549110f4ff009ffEntityRecord;
        }

    }

    BrowserConsoleLoggingModel.RL_9cb00801b4a261afbddde8f0eaaf25f3 = RL_9cb00801b4a261afbddde8f0eaaf25f3;

});

define("BrowserConsoleLogging.model", ["exports", "@outsystems/runtime-core-js"], function(exports, OSRuntimeCore) {
    var OS = OSRuntimeCore;
    var BrowserConsoleLoggingModel = exports;
    Object.defineProperty(BrowserConsoleLoggingModel, "module", {
        get: function() {
            return OS.ApplicationInfo.getModules()["7f7c3cd2-279d-4fb8-b978-c1ee91ff0d4f"];
        }
    });

    BrowserConsoleLoggingModel.staticEntities = {};
    BrowserConsoleLoggingModel.staticEntities.consoleErrorType = {};
    var getConsoleErrorTypeRecord = function(record) {
        return BrowserConsoleLoggingModel.module.staticEntities["18eef253-4376-4287-8f3a-dedb635f5e6d"][record];
    };
    Object.defineProperty(BrowserConsoleLoggingModel.staticEntities.consoleErrorType, "error", {
        get: function() {
            return 2;
        }
    });

    Object.defineProperty(BrowserConsoleLoggingModel.staticEntities.consoleErrorType, "warning", {
        get: function() {
            return 1;
        }
    });

    Object.defineProperty(BrowserConsoleLoggingModel.staticEntities.consoleErrorType, "information", {
        get: function() {
            return 0;
        }
    });

});