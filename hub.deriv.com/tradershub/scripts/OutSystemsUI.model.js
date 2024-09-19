define("OutSystemsUI.model$EN_bc915b2fa9297a72fb4d1b227ebe2573EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class EN_bc915b2fa9297a72fb4d1b227ebe2573EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Space", "spaceAttr", "Space", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.EN_bc915b2fa9297a72fb4d1b227ebe2573EntityRecord = EN_bc915b2fa9297a72fb4d1b227ebe2573EntityRecordInner;

        var EN_bc915b2fa9297a72fb4d1b227ebe2573EntityRecord = EN_bc915b2fa9297a72fb4d1b227ebe2573EntityRecordInner;
        EN_bc915b2fa9297a72fb4d1b227ebe2573EntityRecord.init();
    }
});

define("OutSystemsUI.model$RC_9589ecc0629788c2aca6b47bcbae782c", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_bc915b2fa9297a72fb4d1b227ebe2573EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_9589ecc0629788c2aca6b47bcbae782cInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Space", "spaceAttr", "Space", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_bc915b2fa9297a72fb4d1b227ebe2573EntityRecord());
                    }, true, OutSystemsUIModel.EN_bc915b2fa9297a72fb4d1b227ebe2573EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_9589ecc0629788c2aca6b47bcbae782c(new RC_9589ecc0629788c2aca6b47bcbae782c.RecordClass({
                    spaceAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_9589ecc0629788c2aca6b47bcbae782c = RC_9589ecc0629788c2aca6b47bcbae782cInner;

        RC_9589ecc0629788c2aca6b47bcbae782cInner._isAnonymousRecord = true;
        RC_9589ecc0629788c2aca6b47bcbae782cInner.UniqueId = "9589ecc0-6297-88c2-aca6-b47bcbae782c";
        var RC_9589ecc0629788c2aca6b47bcbae782c = RC_9589ecc0629788c2aca6b47bcbae782cInner;
        RC_9589ecc0629788c2aca6b47bcbae782c.init();
    }
});

define("OutSystemsUI.model$RL_021cf4e3f37562560ed722ed4a5446c1", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_9589ecc0629788c2aca6b47bcbae782c"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_021cf4e3f37562560ed722ed4a5446c1 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_9589ecc0629788c2aca6b47bcbae782c;
        }

    }

    OutSystemsUIModel.RL_021cf4e3f37562560ed722ed4a5446c1 = RL_021cf4e3f37562560ed722ed4a5446c1;

});

define("OutSystemsUI.model$EN_1e2af88601c0491260411e1369eb104cEntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class EN_1e2af88601c0491260411e1369eb104cEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.EN_1e2af88601c0491260411e1369eb104cEntityRecord = EN_1e2af88601c0491260411e1369eb104cEntityRecordInner;

        var EN_1e2af88601c0491260411e1369eb104cEntityRecord = EN_1e2af88601c0491260411e1369eb104cEntityRecordInner;
        EN_1e2af88601c0491260411e1369eb104cEntityRecord.init();
    }
});

define("OutSystemsUI.model$RL_024c65775fda4a7c95336ab422a752c4", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_1e2af88601c0491260411e1369eb104cEntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_024c65775fda4a7c95336ab422a752c4 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.EN_1e2af88601c0491260411e1369eb104cEntityRecord;
        }

    }

    OutSystemsUIModel.RL_024c65775fda4a7c95336ab422a752c4 = RL_024c65775fda4a7c95336ab422a752c4;

});

define("OutSystemsUI.model$ST_0262e6910ebecc922f633b08db78d688Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_0262e6910ebecc922f633b08db78d688StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("PhoneWidth", "phoneWidthAttr", "PhoneWidth", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 767;
                    }, true),
                    this.attr("TabletWidth", "tabletWidthAttr", "TabletWidth", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 1024;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_0262e6910ebecc922f633b08db78d688Structure = ST_0262e6910ebecc922f633b08db78d688StructureInner;

        var ST_0262e6910ebecc922f633b08db78d688Structure = ST_0262e6910ebecc922f633b08db78d688StructureInner;
        ST_0262e6910ebecc922f633b08db78d688Structure.init();
    }
});

define("OutSystemsUI.model$ST_6af81a2c1989c9b6ed62295dfa4c4e65Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_6af81a2c1989c9b6ed62295dfa4c4e65StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ItemId", "itemIdAttr", "ItemId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("IsSelected", "isSelectedAttr", "IsSelected", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "1";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_6af81a2c1989c9b6ed62295dfa4c4e65Structure = ST_6af81a2c1989c9b6ed62295dfa4c4e65StructureInner;

        var ST_6af81a2c1989c9b6ed62295dfa4c4e65Structure = ST_6af81a2c1989c9b6ed62295dfa4c4e65StructureInner;
        ST_6af81a2c1989c9b6ed62295dfa4c4e65Structure.init();
    }
});

define("OutSystemsUI.model$RC_30bb0fd6be769d5d6630c4c9fbd19c43", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_6af81a2c1989c9b6ed62295dfa4c4e65Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_30bb0fd6be769d5d6630c4c9fbd19c43Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("DropdownServerSideItem_InternalConfigs", "dropdownServerSideItem_InternalConfigsAttr", "DropdownServerSideItem_InternalConfigs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_6af81a2c1989c9b6ed62295dfa4c4e65Structure());
                    }, true, OutSystemsUIModel.ST_6af81a2c1989c9b6ed62295dfa4c4e65Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_30bb0fd6be769d5d6630c4c9fbd19c43(new RC_30bb0fd6be769d5d6630c4c9fbd19c43.RecordClass({
                    dropdownServerSideItem_InternalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_30bb0fd6be769d5d6630c4c9fbd19c43 = RC_30bb0fd6be769d5d6630c4c9fbd19c43Inner;

        RC_30bb0fd6be769d5d6630c4c9fbd19c43Inner._isAnonymousRecord = true;
        RC_30bb0fd6be769d5d6630c4c9fbd19c43Inner.UniqueId = "30bb0fd6-be76-9d5d-6630-c4c9fbd19c43";
        var RC_30bb0fd6be769d5d6630c4c9fbd19c43 = RC_30bb0fd6be769d5d6630c4c9fbd19c43Inner;
        RC_30bb0fd6be769d5d6630c4c9fbd19c43.init();
    }
});

define("OutSystemsUI.model$RL_026daaa16d9a7c82ba45988292e548e6", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_30bb0fd6be769d5d6630c4c9fbd19c43"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_026daaa16d9a7c82ba45988292e548e6 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_30bb0fd6be769d5d6630c4c9fbd19c43;
        }

    }

    OutSystemsUIModel.RL_026daaa16d9a7c82ba45988292e548e6 = RL_026daaa16d9a7c82ba45988292e548e6;

});

define("OutSystemsUI.model$EN_8d4f783227026ce93d50126c7f028443EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class EN_8d4f783227026ce93d50126c7f028443EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Orientation", "orientationAttr", "Orientation", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_8d4f783227026ce93d50126c7f028443EntityRecord(new EN_8d4f783227026ce93d50126c7f028443EntityRecord.RecordClass({
                    orientationAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.EN_8d4f783227026ce93d50126c7f028443EntityRecord = EN_8d4f783227026ce93d50126c7f028443EntityRecordInner;

        var EN_8d4f783227026ce93d50126c7f028443EntityRecord = EN_8d4f783227026ce93d50126c7f028443EntityRecordInner;
        EN_8d4f783227026ce93d50126c7f028443EntityRecord.init();
    }
});

define("OutSystemsUI.model$RL_028be7f802152b5f25a868ed964b5ea2", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_8d4f783227026ce93d50126c7f028443EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_028be7f802152b5f25a868ed964b5ea2 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.EN_8d4f783227026ce93d50126c7f028443EntityRecord;
        }

    }

    OutSystemsUIModel.RL_028be7f802152b5f25a868ed964b5ea2 = RL_028be7f802152b5f25a868ed964b5ea2;

});

define("OutSystemsUI.model$EN_6b2a66e5a0a888e952c1a6f0d254d48aEntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class EN_6b2a66e5a0a888e952c1a6f0d254d48aEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Type", "typeAttr", "Type", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_6b2a66e5a0a888e952c1a6f0d254d48aEntityRecord(new EN_6b2a66e5a0a888e952c1a6f0d254d48aEntityRecord.RecordClass({
                    typeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.EN_6b2a66e5a0a888e952c1a6f0d254d48aEntityRecord = EN_6b2a66e5a0a888e952c1a6f0d254d48aEntityRecordInner;

        var EN_6b2a66e5a0a888e952c1a6f0d254d48aEntityRecord = EN_6b2a66e5a0a888e952c1a6f0d254d48aEntityRecordInner;
        EN_6b2a66e5a0a888e952c1a6f0d254d48aEntityRecord.init();
    }
});

define("OutSystemsUI.model$RC_fb5d22b1003cff234a588ab54b5367f0", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_6b2a66e5a0a888e952c1a6f0d254d48aEntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_fb5d22b1003cff234a588ab54b5367f0Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("CarouselDirection", "carouselDirectionAttr", "CarouselDirection", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_6b2a66e5a0a888e952c1a6f0d254d48aEntityRecord());
                    }, true, OutSystemsUIModel.EN_6b2a66e5a0a888e952c1a6f0d254d48aEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_fb5d22b1003cff234a588ab54b5367f0(new RC_fb5d22b1003cff234a588ab54b5367f0.RecordClass({
                    carouselDirectionAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_fb5d22b1003cff234a588ab54b5367f0 = RC_fb5d22b1003cff234a588ab54b5367f0Inner;

        RC_fb5d22b1003cff234a588ab54b5367f0Inner._isAnonymousRecord = true;
        RC_fb5d22b1003cff234a588ab54b5367f0Inner.UniqueId = "fb5d22b1-003c-ff23-4a58-8ab54b5367f0";
        var RC_fb5d22b1003cff234a588ab54b5367f0 = RC_fb5d22b1003cff234a588ab54b5367f0Inner;
        RC_fb5d22b1003cff234a588ab54b5367f0.init();
    }
});

define("OutSystemsUI.model$RL_02cff45c25b99caaf51dba44a0e0b754", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_fb5d22b1003cff234a588ab54b5367f0"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_02cff45c25b99caaf51dba44a0e0b754 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_fb5d22b1003cff234a588ab54b5367f0;
        }

    }

    OutSystemsUIModel.RL_02cff45c25b99caaf51dba44a0e0b754 = RL_02cff45c25b99caaf51dba44a0e0b754;

});

define("OutSystemsUI.model$EN_75c9c074bd528ecee8df4d2a3299b5a1EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class EN_75c9c074bd528ecee8df4d2a3299b5a1EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("State", "stateAttr", "State", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_75c9c074bd528ecee8df4d2a3299b5a1EntityRecord(new EN_75c9c074bd528ecee8df4d2a3299b5a1EntityRecord.RecordClass({
                    stateAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.EN_75c9c074bd528ecee8df4d2a3299b5a1EntityRecord = EN_75c9c074bd528ecee8df4d2a3299b5a1EntityRecordInner;

        var EN_75c9c074bd528ecee8df4d2a3299b5a1EntityRecord = EN_75c9c074bd528ecee8df4d2a3299b5a1EntityRecordInner;
        EN_75c9c074bd528ecee8df4d2a3299b5a1EntityRecord.init();
    }
});

define("OutSystemsUI.model$RC_03619642a06de09478f0b8f506c364eb", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_75c9c074bd528ecee8df4d2a3299b5a1EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_03619642a06de09478f0b8f506c364ebInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("VideoState", "videoStateAttr", "VideoState", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_75c9c074bd528ecee8df4d2a3299b5a1EntityRecord());
                    }, true, OutSystemsUIModel.EN_75c9c074bd528ecee8df4d2a3299b5a1EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_03619642a06de09478f0b8f506c364eb(new RC_03619642a06de09478f0b8f506c364eb.RecordClass({
                    videoStateAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_03619642a06de09478f0b8f506c364eb = RC_03619642a06de09478f0b8f506c364ebInner;

        RC_03619642a06de09478f0b8f506c364ebInner._isAnonymousRecord = true;
        RC_03619642a06de09478f0b8f506c364ebInner.UniqueId = "03619642-a06d-e094-78f0-b8f506c364eb";
        var RC_03619642a06de09478f0b8f506c364eb = RC_03619642a06de09478f0b8f506c364ebInner;
        RC_03619642a06de09478f0b8f506c364eb.init();
    }
});

define("OutSystemsUI.model$EN_50814454e481dd1773c2250bc248da5eEntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class EN_50814454e481dd1773c2250bc248da5eEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Direction", "directionAttr", "Direction", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.EN_50814454e481dd1773c2250bc248da5eEntityRecord = EN_50814454e481dd1773c2250bc248da5eEntityRecordInner;

        var EN_50814454e481dd1773c2250bc248da5eEntityRecord = EN_50814454e481dd1773c2250bc248da5eEntityRecordInner;
        EN_50814454e481dd1773c2250bc248da5eEntityRecord.init();
    }
});

define("OutSystemsUI.model$RC_070998dc6b3dc951b52d8108550fe380", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_50814454e481dd1773c2250bc248da5eEntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_070998dc6b3dc951b52d8108550fe380Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Direction", "directionAttr", "Direction", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_50814454e481dd1773c2250bc248da5eEntityRecord());
                    }, true, OutSystemsUIModel.EN_50814454e481dd1773c2250bc248da5eEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_070998dc6b3dc951b52d8108550fe380(new RC_070998dc6b3dc951b52d8108550fe380.RecordClass({
                    directionAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_070998dc6b3dc951b52d8108550fe380 = RC_070998dc6b3dc951b52d8108550fe380Inner;

        RC_070998dc6b3dc951b52d8108550fe380Inner._isAnonymousRecord = true;
        RC_070998dc6b3dc951b52d8108550fe380Inner.UniqueId = "070998dc-6b3d-c951-b52d-8108550fe380";
        var RC_070998dc6b3dc951b52d8108550fe380 = RC_070998dc6b3dc951b52d8108550fe380Inner;
        RC_070998dc6b3dc951b52d8108550fe380.init();
    }
});

define("OutSystemsUI.model$EN_1b42e9a925bffd384f525d6adac8fe8eEntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class EN_1b42e9a925bffd384f525d6adac8fe8eEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("WeekDay", "weekDayAttr", "WeekDay", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_1b42e9a925bffd384f525d6adac8fe8eEntityRecord(new EN_1b42e9a925bffd384f525d6adac8fe8eEntityRecord.RecordClass({
                    weekDayAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.EN_1b42e9a925bffd384f525d6adac8fe8eEntityRecord = EN_1b42e9a925bffd384f525d6adac8fe8eEntityRecordInner;

        var EN_1b42e9a925bffd384f525d6adac8fe8eEntityRecord = EN_1b42e9a925bffd384f525d6adac8fe8eEntityRecordInner;
        EN_1b42e9a925bffd384f525d6adac8fe8eEntityRecord.init();
    }
});

define("OutSystemsUI.model$RC_210f541f43ec6384ba59bfd8fe4b8837", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_1b42e9a925bffd384f525d6adac8fe8eEntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_210f541f43ec6384ba59bfd8fe4b8837Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("DatePickerWeekDay", "datePickerWeekDayAttr", "DatePickerWeekDay", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_1b42e9a925bffd384f525d6adac8fe8eEntityRecord());
                    }, true, OutSystemsUIModel.EN_1b42e9a925bffd384f525d6adac8fe8eEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_210f541f43ec6384ba59bfd8fe4b8837(new RC_210f541f43ec6384ba59bfd8fe4b8837.RecordClass({
                    datePickerWeekDayAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_210f541f43ec6384ba59bfd8fe4b8837 = RC_210f541f43ec6384ba59bfd8fe4b8837Inner;

        RC_210f541f43ec6384ba59bfd8fe4b8837Inner._isAnonymousRecord = true;
        RC_210f541f43ec6384ba59bfd8fe4b8837Inner.UniqueId = "210f541f-43ec-6384-ba59-bfd8fe4b8837";
        var RC_210f541f43ec6384ba59bfd8fe4b8837 = RC_210f541f43ec6384ba59bfd8fe4b8837Inner;
        RC_210f541f43ec6384ba59bfd8fe4b8837.init();
    }
});

define("OutSystemsUI.model$RL_073741b4a94a52714ff12683c5a2ca93", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_210f541f43ec6384ba59bfd8fe4b8837"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_073741b4a94a52714ff12683c5a2ca93 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_210f541f43ec6384ba59bfd8fe4b8837;
        }

    }

    OutSystemsUIModel.RL_073741b4a94a52714ff12683c5a2ca93 = RL_073741b4a94a52714ff12683c5a2ca93;

});

define("OutSystemsUI.model$ST_e373082a732833044c6d132d736b9a20Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_e373082a732833044c6d132d736b9a20StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_e373082a732833044c6d132d736b9a20Structure = ST_e373082a732833044c6d132d736b9a20StructureInner;

        var ST_e373082a732833044c6d132d736b9a20Structure = ST_e373082a732833044c6d132d736b9a20StructureInner;
        ST_e373082a732833044c6d132d736b9a20Structure.init();
    }
});

define("OutSystemsUI.model$RC_6806bcabed8c9a627c64e2f22fd43e7d", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_e373082a732833044c6d132d736b9a20Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_6806bcabed8c9a627c64e2f22fd43e7dInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Submenu_InternalConfig", "submenu_InternalConfigAttr", "Submenu_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_e373082a732833044c6d132d736b9a20Structure());
                    }, true, OutSystemsUIModel.ST_e373082a732833044c6d132d736b9a20Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_6806bcabed8c9a627c64e2f22fd43e7d(new RC_6806bcabed8c9a627c64e2f22fd43e7d.RecordClass({
                    submenu_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_6806bcabed8c9a627c64e2f22fd43e7d = RC_6806bcabed8c9a627c64e2f22fd43e7dInner;

        RC_6806bcabed8c9a627c64e2f22fd43e7dInner._isAnonymousRecord = true;
        RC_6806bcabed8c9a627c64e2f22fd43e7dInner.UniqueId = "6806bcab-ed8c-9a62-7c64-e2f22fd43e7d";
        var RC_6806bcabed8c9a627c64e2f22fd43e7d = RC_6806bcabed8c9a627c64e2f22fd43e7dInner;
        RC_6806bcabed8c9a627c64e2f22fd43e7d.init();
    }
});

define("OutSystemsUI.model$RL_078368f87c33aa8427e5634fd132a359", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_6806bcabed8c9a627c64e2f22fd43e7d"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_078368f87c33aa8427e5634fd132a359 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_6806bcabed8c9a627c64e2f22fd43e7d;
        }

    }

    OutSystemsUIModel.RL_078368f87c33aa8427e5634fd132a359 = RL_078368f87c33aa8427e5634fd132a359;

});

define("OutSystemsUI.model$EN_e168de2e23691f28c2b57a8300aa4d06EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class EN_e168de2e23691f28c2b57a8300aa4d06EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Type", "typeAttr", "Type", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_e168de2e23691f28c2b57a8300aa4d06EntityRecord(new EN_e168de2e23691f28c2b57a8300aa4d06EntityRecord.RecordClass({
                    typeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.EN_e168de2e23691f28c2b57a8300aa4d06EntityRecord = EN_e168de2e23691f28c2b57a8300aa4d06EntityRecordInner;

        var EN_e168de2e23691f28c2b57a8300aa4d06EntityRecord = EN_e168de2e23691f28c2b57a8300aa4d06EntityRecordInner;
        EN_e168de2e23691f28c2b57a8300aa4d06EntityRecord.init();
    }
});

define("OutSystemsUI.model$RC_0832b315fa435e0ff97aca2a0ca6bd44", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_e168de2e23691f28c2b57a8300aa4d06EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_0832b315fa435e0ff97aca2a0ca6bd44Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ProgressType", "progressTypeAttr", "ProgressType", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_e168de2e23691f28c2b57a8300aa4d06EntityRecord());
                    }, true, OutSystemsUIModel.EN_e168de2e23691f28c2b57a8300aa4d06EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_0832b315fa435e0ff97aca2a0ca6bd44(new RC_0832b315fa435e0ff97aca2a0ca6bd44.RecordClass({
                    progressTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_0832b315fa435e0ff97aca2a0ca6bd44 = RC_0832b315fa435e0ff97aca2a0ca6bd44Inner;

        RC_0832b315fa435e0ff97aca2a0ca6bd44Inner._isAnonymousRecord = true;
        RC_0832b315fa435e0ff97aca2a0ca6bd44Inner.UniqueId = "0832b315-fa43-5e0f-f97a-ca2a0ca6bd44";
        var RC_0832b315fa435e0ff97aca2a0ca6bd44 = RC_0832b315fa435e0ff97aca2a0ca6bd44Inner;
        RC_0832b315fa435e0ff97aca2a0ca6bd44.init();
    }
});

define("OutSystemsUI.model$ST_09173c1b0f41f719b9efd6430c2e737dStructure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_09173c1b0f41f719b9efd6430c2e737dStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("InteractToClose", "interactToCloseAttr", "InteractToClose", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, true),
                    this.attr("CloseAfterTime", "closeAfterTimeAttr", "CloseAfterTime", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_09173c1b0f41f719b9efd6430c2e737dStructure = ST_09173c1b0f41f719b9efd6430c2e737dStructureInner;

        var ST_09173c1b0f41f719b9efd6430c2e737dStructure = ST_09173c1b0f41f719b9efd6430c2e737dStructureInner;
        ST_09173c1b0f41f719b9efd6430c2e737dStructure.init();
    }
});

define("OutSystemsUI.model$ST_0f0a5319963cb5bf3b0eab53b2781088Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_0f0a5319963cb5bf3b0eab53b2781088StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("MultipleItems", "multipleItemsAttr", "MultipleItems", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_0f0a5319963cb5bf3b0eab53b2781088Structure = ST_0f0a5319963cb5bf3b0eab53b2781088StructureInner;

        var ST_0f0a5319963cb5bf3b0eab53b2781088Structure = ST_0f0a5319963cb5bf3b0eab53b2781088StructureInner;
        ST_0f0a5319963cb5bf3b0eab53b2781088Structure.init();
    }
});

define("OutSystemsUI.model$RC_34326cf8cbe6cf38d907603fa07c4c09", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_0f0a5319963cb5bf3b0eab53b2781088Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_34326cf8cbe6cf38d907603fa07c4c09Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Accordion_InternalConfigs", "accordion_InternalConfigsAttr", "Accordion_InternalConfigs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_0f0a5319963cb5bf3b0eab53b2781088Structure());
                    }, true, OutSystemsUIModel.ST_0f0a5319963cb5bf3b0eab53b2781088Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_34326cf8cbe6cf38d907603fa07c4c09(new RC_34326cf8cbe6cf38d907603fa07c4c09.RecordClass({
                    accordion_InternalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_34326cf8cbe6cf38d907603fa07c4c09 = RC_34326cf8cbe6cf38d907603fa07c4c09Inner;

        RC_34326cf8cbe6cf38d907603fa07c4c09Inner._isAnonymousRecord = true;
        RC_34326cf8cbe6cf38d907603fa07c4c09Inner.UniqueId = "34326cf8-cbe6-cf38-d907-603fa07c4c09";
        var RC_34326cf8cbe6cf38d907603fa07c4c09 = RC_34326cf8cbe6cf38d907603fa07c4c09Inner;
        RC_34326cf8cbe6cf38d907603fa07c4c09.init();
    }
});

define("OutSystemsUI.model$RL_092cda9d13f093285c4b5f836ca5d119", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_34326cf8cbe6cf38d907603fa07c4c09"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_092cda9d13f093285c4b5f836ca5d119 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_34326cf8cbe6cf38d907603fa07c4c09;
        }

    }

    OutSystemsUIModel.RL_092cda9d13f093285c4b5f836ca5d119 = RL_092cda9d13f093285c4b5f836ca5d119;

});

define("OutSystemsUI.model$ST_736a0a0e931f1e6cffc1de4b3ad94539Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_736a0a0e931f1e6cffc1de4b3ad94539StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Navigation", "navigationAttr", "Navigation", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Height", "heightAttr", "Height", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ItemsDesktop", "itemsDesktopAttr", "ItemsDesktop", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 1;
                    }, true),
                    this.attr("ItemsTablet", "itemsTabletAttr", "ItemsTablet", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 1;
                    }, true),
                    this.attr("ItemsPhone", "itemsPhoneAttr", "ItemsPhone", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 1;
                    }, true),
                    this.attr("AutoPlay", "autoPlayAttr", "AutoPlay", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, true),
                    this.attr("Loop", "loopAttr", "Loop", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, true),
                    this.attr("Padding", "paddingAttr", "Padding", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "0";
                    }, true),
                    this.attr("StartingPosition", "startingPositionAttr", "StartingPosition", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("ItemsGap", "itemsGapAttr", "ItemsGap", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "0";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_736a0a0e931f1e6cffc1de4b3ad94539Structure = ST_736a0a0e931f1e6cffc1de4b3ad94539StructureInner;

        var ST_736a0a0e931f1e6cffc1de4b3ad94539Structure = ST_736a0a0e931f1e6cffc1de4b3ad94539StructureInner;
        ST_736a0a0e931f1e6cffc1de4b3ad94539Structure.init();
    }
});

define("OutSystemsUI.model$RC_098ae17f520233165dd0526529ff8852", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_736a0a0e931f1e6cffc1de4b3ad94539Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_098ae17f520233165dd0526529ff8852Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Carousel_InternalConfig", "carousel_InternalConfigAttr", "Carousel_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_736a0a0e931f1e6cffc1de4b3ad94539Structure());
                    }, true, OutSystemsUIModel.ST_736a0a0e931f1e6cffc1de4b3ad94539Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_098ae17f520233165dd0526529ff8852(new RC_098ae17f520233165dd0526529ff8852.RecordClass({
                    carousel_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_098ae17f520233165dd0526529ff8852 = RC_098ae17f520233165dd0526529ff8852Inner;

        RC_098ae17f520233165dd0526529ff8852Inner._isAnonymousRecord = true;
        RC_098ae17f520233165dd0526529ff8852Inner.UniqueId = "098ae17f-5202-3316-5dd0-526529ff8852";
        var RC_098ae17f520233165dd0526529ff8852 = RC_098ae17f520233165dd0526529ff8852Inner;
        RC_098ae17f520233165dd0526529ff8852.init();
    }
});

define("OutSystemsUI.model$ST_0995bd60993005a912f016117c0f5fd9Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_0995bd60993005a912f016117c0f5fd9StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ProviderEventId", "providerEventIdAttr", "value", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("IsSuccess", "isSuccessAttr", "isSuccess", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Code", "codeAttr", "code", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Message", "messageAttr", "message", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_0995bd60993005a912f016117c0f5fd9Structure = ST_0995bd60993005a912f016117c0f5fd9StructureInner;

        var ST_0995bd60993005a912f016117c0f5fd9Structure = ST_0995bd60993005a912f016117c0f5fd9StructureInner;
        ST_0995bd60993005a912f016117c0f5fd9Structure.init();
    }
});

define("OutSystemsUI.model$ST_a783e375273068e4b8f9c122c1661a6aStructure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_a783e375273068e4b8f9c122c1661a6aStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ScrollToWidgetId", "scrollToWidgetIdAttr", "ScrollToWidgetId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_a783e375273068e4b8f9c122c1661a6aStructure = ST_a783e375273068e4b8f9c122c1661a6aStructureInner;

        var ST_a783e375273068e4b8f9c122c1661a6aStructure = ST_a783e375273068e4b8f9c122c1661a6aStructureInner;
        ST_a783e375273068e4b8f9c122c1661a6aStructure.init();
    }
});

define("OutSystemsUI.model$RC_5eb5daa2af512be51806b390378b7c9a", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_a783e375273068e4b8f9c122c1661a6aStructure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_5eb5daa2af512be51806b390378b7c9aInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("SectionIndexItem_InternalConfig", "sectionIndexItem_InternalConfigAttr", "SectionIndexItem_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_a783e375273068e4b8f9c122c1661a6aStructure());
                    }, true, OutSystemsUIModel.ST_a783e375273068e4b8f9c122c1661a6aStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_5eb5daa2af512be51806b390378b7c9a(new RC_5eb5daa2af512be51806b390378b7c9a.RecordClass({
                    sectionIndexItem_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_5eb5daa2af512be51806b390378b7c9a = RC_5eb5daa2af512be51806b390378b7c9aInner;

        RC_5eb5daa2af512be51806b390378b7c9aInner._isAnonymousRecord = true;
        RC_5eb5daa2af512be51806b390378b7c9aInner.UniqueId = "5eb5daa2-af51-2be5-1806-b390378b7c9a";
        var RC_5eb5daa2af512be51806b390378b7c9a = RC_5eb5daa2af512be51806b390378b7c9aInner;
        RC_5eb5daa2af512be51806b390378b7c9a.init();
    }
});

define("OutSystemsUI.model$RL_0a025b5603931b44884451ed1f6c9b3c", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_5eb5daa2af512be51806b390378b7c9a"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_0a025b5603931b44884451ed1f6c9b3c extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_5eb5daa2af512be51806b390378b7c9a;
        }

    }

    OutSystemsUIModel.RL_0a025b5603931b44884451ed1f6c9b3c = RL_0a025b5603931b44884451ed1f6c9b3c;

});

define("OutSystemsUI.model$ST_3b9304e9875ccc71ec31b003d76d44c7Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_3b9304e9875ccc71ec31b003d76d44c7StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("SmoothScrolling", "smoothScrollingAttr", "SmoothScrolling", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("IsFixed", "isFixedAttr", "IsFixed", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_3b9304e9875ccc71ec31b003d76d44c7Structure = ST_3b9304e9875ccc71ec31b003d76d44c7StructureInner;

        var ST_3b9304e9875ccc71ec31b003d76d44c7Structure = ST_3b9304e9875ccc71ec31b003d76d44c7StructureInner;
        ST_3b9304e9875ccc71ec31b003d76d44c7Structure.init();
    }
});

define("OutSystemsUI.model$RC_0a10b180e32034e48747aceb3ee25eef", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_3b9304e9875ccc71ec31b003d76d44c7Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_0a10b180e32034e48747aceb3ee25eefInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("SectionIndex_InternalConfig", "sectionIndex_InternalConfigAttr", "SectionIndex_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_3b9304e9875ccc71ec31b003d76d44c7Structure());
                    }, true, OutSystemsUIModel.ST_3b9304e9875ccc71ec31b003d76d44c7Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_0a10b180e32034e48747aceb3ee25eef(new RC_0a10b180e32034e48747aceb3ee25eef.RecordClass({
                    sectionIndex_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_0a10b180e32034e48747aceb3ee25eef = RC_0a10b180e32034e48747aceb3ee25eefInner;

        RC_0a10b180e32034e48747aceb3ee25eefInner._isAnonymousRecord = true;
        RC_0a10b180e32034e48747aceb3ee25eefInner.UniqueId = "0a10b180-e320-34e4-8747-aceb3ee25eef";
        var RC_0a10b180e32034e48747aceb3ee25eef = RC_0a10b180e32034e48747aceb3ee25eefInner;
        RC_0a10b180e32034e48747aceb3ee25eef.init();
    }
});

define("OutSystemsUI.model$ST_69c22c095aca285f3fb706e10e473ba5Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_69c22c095aca285f3fb706e10e473ba5StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("RatingValue", "ratingValueAttr", "RatingValue", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true),
                    this.attr("RatingScale", "ratingScaleAttr", "RatingScale", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("IsEdit", "isEditAttr", "IsEdit", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Size", "sizeAttr", "Size", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_69c22c095aca285f3fb706e10e473ba5Structure = ST_69c22c095aca285f3fb706e10e473ba5StructureInner;

        var ST_69c22c095aca285f3fb706e10e473ba5Structure = ST_69c22c095aca285f3fb706e10e473ba5StructureInner;
        ST_69c22c095aca285f3fb706e10e473ba5Structure.init();
    }
});

define("OutSystemsUI.model$RL_0a4cc67046f3ef5e3ecf39d571c1b1e6", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_69c22c095aca285f3fb706e10e473ba5Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_0a4cc67046f3ef5e3ecf39d571c1b1e6 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_69c22c095aca285f3fb706e10e473ba5Structure;
        }

    }

    OutSystemsUIModel.RL_0a4cc67046f3ef5e3ecf39d571c1b1e6 = RL_0a4cc67046f3ef5e3ecf39d571c1b1e6;

});

define("OutSystemsUI.model$EN_d11562be18a7e40ca777aa336c946163EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class EN_d11562be18a7e40ca777aa336c946163EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Shape", "shapeAttr", "Shape", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Order", "orderAttr", "Order", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.EN_d11562be18a7e40ca777aa336c946163EntityRecord = EN_d11562be18a7e40ca777aa336c946163EntityRecordInner;

        var EN_d11562be18a7e40ca777aa336c946163EntityRecord = EN_d11562be18a7e40ca777aa336c946163EntityRecordInner;
        EN_d11562be18a7e40ca777aa336c946163EntityRecord.init();
    }
});

define("OutSystemsUI.model$RC_0a89eeb60fa1f44b6316ca69b462007b", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_d11562be18a7e40ca777aa336c946163EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_0a89eeb60fa1f44b6316ca69b462007bInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Shape", "shapeAttr", "Shape", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_d11562be18a7e40ca777aa336c946163EntityRecord());
                    }, true, OutSystemsUIModel.EN_d11562be18a7e40ca777aa336c946163EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_0a89eeb60fa1f44b6316ca69b462007b(new RC_0a89eeb60fa1f44b6316ca69b462007b.RecordClass({
                    shapeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_0a89eeb60fa1f44b6316ca69b462007b = RC_0a89eeb60fa1f44b6316ca69b462007bInner;

        RC_0a89eeb60fa1f44b6316ca69b462007bInner._isAnonymousRecord = true;
        RC_0a89eeb60fa1f44b6316ca69b462007bInner.UniqueId = "0a89eeb6-0fa1-f44b-6316-ca69b462007b";
        var RC_0a89eeb60fa1f44b6316ca69b462007b = RC_0a89eeb60fa1f44b6316ca69b462007bInner;
        RC_0a89eeb60fa1f44b6316ca69b462007b.init();
    }
});

define("OutSystemsUI.model$ST_0d18385ed976d2d74e8cea1d77078409Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_0d18385ed976d2d74e8cea1d77078409StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("AllowMultipleSelection", "allowMultipleSelectionAttr", "AllowMultipleSelection", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("IsDisabled", "isDisabledAttr", "IsDisabled", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "1";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_0d18385ed976d2d74e8cea1d77078409Structure = ST_0d18385ed976d2d74e8cea1d77078409StructureInner;

        var ST_0d18385ed976d2d74e8cea1d77078409Structure = ST_0d18385ed976d2d74e8cea1d77078409StructureInner;
        ST_0d18385ed976d2d74e8cea1d77078409Structure.init();
    }
});

define("OutSystemsUI.model$EN_7441573ccf264d27ef548a39a846bd68EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class EN_7441573ccf264d27ef548a39a846bd68EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Steps", "stepsAttr", "Steps", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_7441573ccf264d27ef548a39a846bd68EntityRecord(new EN_7441573ccf264d27ef548a39a846bd68EntityRecord.RecordClass({
                    stepsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.EN_7441573ccf264d27ef548a39a846bd68EntityRecord = EN_7441573ccf264d27ef548a39a846bd68EntityRecordInner;

        var EN_7441573ccf264d27ef548a39a846bd68EntityRecord = EN_7441573ccf264d27ef548a39a846bd68EntityRecordInner;
        EN_7441573ccf264d27ef548a39a846bd68EntityRecord.init();
    }
});

define("OutSystemsUI.model$RC_0d776a4e191faf321030d5ce57aa4167", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_7441573ccf264d27ef548a39a846bd68EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_0d776a4e191faf321030d5ce57aa4167Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Steps", "stepsAttr", "Steps", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_7441573ccf264d27ef548a39a846bd68EntityRecord());
                    }, true, OutSystemsUIModel.EN_7441573ccf264d27ef548a39a846bd68EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_0d776a4e191faf321030d5ce57aa4167(new RC_0d776a4e191faf321030d5ce57aa4167.RecordClass({
                    stepsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_0d776a4e191faf321030d5ce57aa4167 = RC_0d776a4e191faf321030d5ce57aa4167Inner;

        RC_0d776a4e191faf321030d5ce57aa4167Inner._isAnonymousRecord = true;
        RC_0d776a4e191faf321030d5ce57aa4167Inner.UniqueId = "0d776a4e-191f-af32-1030-d5ce57aa4167";
        var RC_0d776a4e191faf321030d5ce57aa4167 = RC_0d776a4e191faf321030d5ce57aa4167Inner;
        RC_0d776a4e191faf321030d5ce57aa4167.init();
    }
});

define("OutSystemsUI.model$ST_106b6e385f5e89b0a7d76e23b14f61a0Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_106b6e385f5e89b0a7d76e23b14f61a0StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Shape", "shapeAttr", "Shape", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.shape.softRounded;
                    }, true),
                    this.attr("ShowHandler", "showHandlerAttr", "ShowHandler", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_106b6e385f5e89b0a7d76e23b14f61a0Structure = ST_106b6e385f5e89b0a7d76e23b14f61a0StructureInner;

        var ST_106b6e385f5e89b0a7d76e23b14f61a0Structure = ST_106b6e385f5e89b0a7d76e23b14f61a0StructureInner;
        ST_106b6e385f5e89b0a7d76e23b14f61a0Structure.init();
    }
});

define("OutSystemsUI.model$RC_dae4b4e9efc938bf677d8f92dec29722", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_0995bd60993005a912f016117c0f5fd9Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_dae4b4e9efc938bf677d8f92dec29722Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ProviderEventReturnMessage", "providerEventReturnMessageAttr", "ProviderEventReturnMessage", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_0995bd60993005a912f016117c0f5fd9Structure());
                    }, true, OutSystemsUIModel.ST_0995bd60993005a912f016117c0f5fd9Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_dae4b4e9efc938bf677d8f92dec29722(new RC_dae4b4e9efc938bf677d8f92dec29722.RecordClass({
                    providerEventReturnMessageAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_dae4b4e9efc938bf677d8f92dec29722 = RC_dae4b4e9efc938bf677d8f92dec29722Inner;

        RC_dae4b4e9efc938bf677d8f92dec29722Inner._isAnonymousRecord = true;
        RC_dae4b4e9efc938bf677d8f92dec29722Inner.UniqueId = "dae4b4e9-efc9-38bf-677d-8f92dec29722";
        var RC_dae4b4e9efc938bf677d8f92dec29722 = RC_dae4b4e9efc938bf677d8f92dec29722Inner;
        RC_dae4b4e9efc938bf677d8f92dec29722.init();
    }
});

define("OutSystemsUI.model$RL_1088f1545d2e7aa029bcf18435e48f7c", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_dae4b4e9efc938bf677d8f92dec29722"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_1088f1545d2e7aa029bcf18435e48f7c extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_dae4b4e9efc938bf677d8f92dec29722;
        }

    }

    OutSystemsUIModel.RL_1088f1545d2e7aa029bcf18435e48f7c = RL_1088f1545d2e7aa029bcf18435e48f7c;

});

define("OutSystemsUI.model$ST_963c357dbc45b19fade654e21b1521d0Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_963c357dbc45b19fade654e21b1521d0StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("StartsOpen", "startsOpenAttr", "StartsOpen", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Direction", "directionAttr", "Direction", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Width", "widthAttr", "Width", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("HasOverlay", "hasOverlayAttr", "HasOverlay", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_963c357dbc45b19fade654e21b1521d0Structure = ST_963c357dbc45b19fade654e21b1521d0StructureInner;

        var ST_963c357dbc45b19fade654e21b1521d0Structure = ST_963c357dbc45b19fade654e21b1521d0StructureInner;
        ST_963c357dbc45b19fade654e21b1521d0Structure.init();
    }
});

define("OutSystemsUI.model$RC_11d8167e3fa15e3043cb2afdd0778cf2", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_963c357dbc45b19fade654e21b1521d0Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_11d8167e3fa15e3043cb2afdd0778cf2Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Sidebar_InternalConfig", "sidebar_InternalConfigAttr", "Sidebar_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_963c357dbc45b19fade654e21b1521d0Structure());
                    }, true, OutSystemsUIModel.ST_963c357dbc45b19fade654e21b1521d0Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_11d8167e3fa15e3043cb2afdd0778cf2(new RC_11d8167e3fa15e3043cb2afdd0778cf2.RecordClass({
                    sidebar_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_11d8167e3fa15e3043cb2afdd0778cf2 = RC_11d8167e3fa15e3043cb2afdd0778cf2Inner;

        RC_11d8167e3fa15e3043cb2afdd0778cf2Inner._isAnonymousRecord = true;
        RC_11d8167e3fa15e3043cb2afdd0778cf2Inner.UniqueId = "11d8167e-3fa1-5e30-43cb-2afdd0778cf2";
        var RC_11d8167e3fa15e3043cb2afdd0778cf2 = RC_11d8167e3fa15e3043cb2afdd0778cf2Inner;
        RC_11d8167e3fa15e3043cb2afdd0778cf2.init();
    }
});

define("OutSystemsUI.model$ST_b29bdecfa7956bb3d5bee97678e39fb0Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_b29bdecfa7956bb3d5bee97678e39fb0StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Progress", "progressAttr", "Progress", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("ProgressColor", "progressColorAttr", "ProgressColor", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("TrailColor", "trailColorAttr", "TrailColor", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Thickness", "thicknessAttr", "Thickness", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("Shape", "shapeAttr", "Shape", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.shape.rounded;
                    }, true),
                    this.attr("AnimateInitialProgress", "animateInitialProgressAttr", "AnimateInitialProgress", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, true),
                    this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("InitialProgress", "initialProgressAttr", "InitialProgress", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_b29bdecfa7956bb3d5bee97678e39fb0Structure = ST_b29bdecfa7956bb3d5bee97678e39fb0StructureInner;

        var ST_b29bdecfa7956bb3d5bee97678e39fb0Structure = ST_b29bdecfa7956bb3d5bee97678e39fb0StructureInner;
        ST_b29bdecfa7956bb3d5bee97678e39fb0Structure.init();
    }
});

define("OutSystemsUI.model$RC_12cb0160c5b908b286f2418f6f00a5eb", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_b29bdecfa7956bb3d5bee97678e39fb0Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_12cb0160c5b908b286f2418f6f00a5ebInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ProgressBar_InternalConfig", "progressBar_InternalConfigAttr", "ProgressBar_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_b29bdecfa7956bb3d5bee97678e39fb0Structure());
                    }, true, OutSystemsUIModel.ST_b29bdecfa7956bb3d5bee97678e39fb0Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_12cb0160c5b908b286f2418f6f00a5eb(new RC_12cb0160c5b908b286f2418f6f00a5eb.RecordClass({
                    progressBar_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_12cb0160c5b908b286f2418f6f00a5eb = RC_12cb0160c5b908b286f2418f6f00a5ebInner;

        RC_12cb0160c5b908b286f2418f6f00a5ebInner._isAnonymousRecord = true;
        RC_12cb0160c5b908b286f2418f6f00a5ebInner.UniqueId = "12cb0160-c5b9-08b2-86f2-418f6f00a5eb";
        var RC_12cb0160c5b908b286f2418f6f00a5eb = RC_12cb0160c5b908b286f2418f6f00a5ebInner;
        RC_12cb0160c5b908b286f2418f6f00a5eb.init();
    }
});

define("OutSystemsUI.model$ST_2fd97622d01b72b1af62467b00f1da8eStructure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_2fd97622d01b72b1af62467b00f1da8eStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Progress", "progressAttr", "Progress", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("ProgressColor", "progressColorAttr", "ProgressColor", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ProgressCircleSize", "progressCircleSizeAttr", "ProgressCircleSize", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("TrailColor", "trailColorAttr", "TrailColor", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Thickness", "thicknessAttr", "Thickness", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("Shape", "shapeAttr", "Shape", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.shape.rounded;
                    }, true),
                    this.attr("AnimateInitialProgress", "animateInitialProgressAttr", "AnimateInitialProgress", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, true),
                    this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("InitialProgress", "initialProgressAttr", "InitialProgress", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_2fd97622d01b72b1af62467b00f1da8eStructure = ST_2fd97622d01b72b1af62467b00f1da8eStructureInner;

        var ST_2fd97622d01b72b1af62467b00f1da8eStructure = ST_2fd97622d01b72b1af62467b00f1da8eStructureInner;
        ST_2fd97622d01b72b1af62467b00f1da8eStructure.init();
    }
});

define("OutSystemsUI.model$RC_b6f4f6f58cf9d7e93da0322d7951765a", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_2fd97622d01b72b1af62467b00f1da8eStructure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_b6f4f6f58cf9d7e93da0322d7951765aInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ProgressCircle_InternalConfig", "progressCircle_InternalConfigAttr", "ProgressCircle_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_2fd97622d01b72b1af62467b00f1da8eStructure());
                    }, true, OutSystemsUIModel.ST_2fd97622d01b72b1af62467b00f1da8eStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_b6f4f6f58cf9d7e93da0322d7951765a(new RC_b6f4f6f58cf9d7e93da0322d7951765a.RecordClass({
                    progressCircle_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_b6f4f6f58cf9d7e93da0322d7951765a = RC_b6f4f6f58cf9d7e93da0322d7951765aInner;

        RC_b6f4f6f58cf9d7e93da0322d7951765aInner._isAnonymousRecord = true;
        RC_b6f4f6f58cf9d7e93da0322d7951765aInner.UniqueId = "b6f4f6f5-8cf9-d7e9-3da0-322d7951765a";
        var RC_b6f4f6f58cf9d7e93da0322d7951765a = RC_b6f4f6f58cf9d7e93da0322d7951765aInner;
        RC_b6f4f6f58cf9d7e93da0322d7951765a.init();
    }
});

define("OutSystemsUI.model$RL_12ed4bb13edbb334bdf47b5f3e8430f7", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_b6f4f6f58cf9d7e93da0322d7951765a"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_12ed4bb13edbb334bdf47b5f3e8430f7 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_b6f4f6f58cf9d7e93da0322d7951765a;
        }

    }

    OutSystemsUIModel.RL_12ed4bb13edbb334bdf47b5f3e8430f7 = RL_12ed4bb13edbb334bdf47b5f3e8430f7;

});

define("OutSystemsUI.model$ST_841c1f1485f51831db9f4b37a6d551d5Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_841c1f1485f51831db9f4b37a6d551d5StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("key", "keyAttr", "key", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("value", "valueAttr", "value", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_841c1f1485f51831db9f4b37a6d551d5Structure = ST_841c1f1485f51831db9f4b37a6d551d5StructureInner;

        var ST_841c1f1485f51831db9f4b37a6d551d5Structure = ST_841c1f1485f51831db9f4b37a6d551d5StructureInner;
        ST_841c1f1485f51831db9f4b37a6d551d5Structure.init();
    }
});

define("OutSystemsUI.model$RL_b290214900b73d49f11f1fe32c57a145", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_841c1f1485f51831db9f4b37a6d551d5Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_b290214900b73d49f11f1fe32c57a145 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_841c1f1485f51831db9f4b37a6d551d5Structure;
        }

    }

    OutSystemsUIModel.RL_b290214900b73d49f11f1fe32c57a145 = RL_b290214900b73d49f11f1fe32c57a145;

});

define("OutSystemsUI.model$ST_af087c80f6ec63e7de4ff7926f7da7d0Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_841c1f1485f51831db9f4b37a6d551d5Structure", "OutSystemsUI.model$RL_b290214900b73d49f11f1fe32c57a145"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_af087c80f6ec63e7de4ff7926f7da7d0StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("animate", "animateAttr", "animate", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.booleanTypes.unset;
                    }, true),
                    this.attr("animationDuration", "animationDurationAttr", "animationDuration", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 300;
                    }, true),
                    this.attr("behaviour", "behaviourAttr", "behaviour", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("cssPrefix", "cssPrefixAttr", "cssPrefix", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("keyboardMultiplier", "keyboardMultiplierAttr", "keyboardMultiplier", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 1;
                    }, true),
                    this.attr("keyboardPageMultiplier", "keyboardPageMultiplierAttr", "keyboardPageMultiplier", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 5;
                    }, true),
                    this.attr("keyboardSupport", "keyboardSupportAttr", "keyboardSupport", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.booleanTypes.unset;
                    }, true),
                    this.attr("limit", "limitAttr", "limit", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("margin", "marginAttr", "margin", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("padding", "paddingAttr", "padding", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("range", "rangeAttr", "range", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.RL_b290214900b73d49f11f1fe32c57a145());
                    }, true, OutSystemsUIModel.RL_b290214900b73d49f11f1fe32c57a145),
                    this.attr("snap", "snapAttr", "snap", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_af087c80f6ec63e7de4ff7926f7da7d0Structure = ST_af087c80f6ec63e7de4ff7926f7da7d0StructureInner;

        var ST_af087c80f6ec63e7de4ff7926f7da7d0Structure = ST_af087c80f6ec63e7de4ff7926f7da7d0StructureInner;
        ST_af087c80f6ec63e7de4ff7926f7da7d0Structure.init();
    }
});

define("OutSystemsUI.model$RC_1310596a4ac4ae2b0319b38dd9472639", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_af087c80f6ec63e7de4ff7926f7da7d0Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_1310596a4ac4ae2b0319b38dd9472639Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("NoUiSliderConfigs", "noUiSliderConfigsAttr", "NoUiSliderConfigs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_af087c80f6ec63e7de4ff7926f7da7d0Structure());
                    }, true, OutSystemsUIModel.ST_af087c80f6ec63e7de4ff7926f7da7d0Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_1310596a4ac4ae2b0319b38dd9472639(new RC_1310596a4ac4ae2b0319b38dd9472639.RecordClass({
                    noUiSliderConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_1310596a4ac4ae2b0319b38dd9472639 = RC_1310596a4ac4ae2b0319b38dd9472639Inner;

        RC_1310596a4ac4ae2b0319b38dd9472639Inner._isAnonymousRecord = true;
        RC_1310596a4ac4ae2b0319b38dd9472639Inner.UniqueId = "1310596a-4ac4-ae2b-0319-b38dd9472639";
        var RC_1310596a4ac4ae2b0319b38dd9472639 = RC_1310596a4ac4ae2b0319b38dd9472639Inner;
        RC_1310596a4ac4ae2b0319b38dd9472639.init();
    }
});

define("OutSystemsUI.model$ST_13c131829a33cb5bedb5c64aa6f4add2Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_13c131829a33cb5bedb5c64aa6f4add2StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("IsSuccess", "isSuccessAttr", "isSuccess", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Code", "codeAttr", "code", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Message", "messageAttr", "message", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Value", "valueAttr", "value", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_13c131829a33cb5bedb5c64aa6f4add2Structure = ST_13c131829a33cb5bedb5c64aa6f4add2StructureInner;

        var ST_13c131829a33cb5bedb5c64aa6f4add2Structure = ST_13c131829a33cb5bedb5c64aa6f4add2StructureInner;
        ST_13c131829a33cb5bedb5c64aa6f4add2Structure.init();
    }
});

define("OutSystemsUI.model$EN_8aa0a121c98b5f44394f59c96ffee853EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class EN_8aa0a121c98b5f44394f59c96ffee853EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("AnimationType", "animationTypeAttr", "AnimationType", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_8aa0a121c98b5f44394f59c96ffee853EntityRecord(new EN_8aa0a121c98b5f44394f59c96ffee853EntityRecord.RecordClass({
                    animationTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.EN_8aa0a121c98b5f44394f59c96ffee853EntityRecord = EN_8aa0a121c98b5f44394f59c96ffee853EntityRecordInner;

        var EN_8aa0a121c98b5f44394f59c96ffee853EntityRecord = EN_8aa0a121c98b5f44394f59c96ffee853EntityRecordInner;
        EN_8aa0a121c98b5f44394f59c96ffee853EntityRecord.init();
    }
});

define("OutSystemsUI.model$RC_78b6d6ed7d52800a8a68e7d796ec6850", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_8aa0a121c98b5f44394f59c96ffee853EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_78b6d6ed7d52800a8a68e7d796ec6850Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("AnimationType", "animationTypeAttr", "AnimationType", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_8aa0a121c98b5f44394f59c96ffee853EntityRecord());
                    }, true, OutSystemsUIModel.EN_8aa0a121c98b5f44394f59c96ffee853EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_78b6d6ed7d52800a8a68e7d796ec6850(new RC_78b6d6ed7d52800a8a68e7d796ec6850.RecordClass({
                    animationTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_78b6d6ed7d52800a8a68e7d796ec6850 = RC_78b6d6ed7d52800a8a68e7d796ec6850Inner;

        RC_78b6d6ed7d52800a8a68e7d796ec6850Inner._isAnonymousRecord = true;
        RC_78b6d6ed7d52800a8a68e7d796ec6850Inner.UniqueId = "78b6d6ed-7d52-800a-8a68-e7d796ec6850";
        var RC_78b6d6ed7d52800a8a68e7d796ec6850 = RC_78b6d6ed7d52800a8a68e7d796ec6850Inner;
        RC_78b6d6ed7d52800a8a68e7d796ec6850.init();
    }
});

define("OutSystemsUI.model$RL_13dce2cada552f2b003eedebc4cfbf64", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_78b6d6ed7d52800a8a68e7d796ec6850"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_13dce2cada552f2b003eedebc4cfbf64 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_78b6d6ed7d52800a8a68e7d796ec6850;
        }

    }

    OutSystemsUIModel.RL_13dce2cada552f2b003eedebc4cfbf64 = RL_13dce2cada552f2b003eedebc4cfbf64;

});

define("OutSystemsUI.model$ST_14b00646f6cd842655571448758d0a23Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_14b00646f6cd842655571448758d0a23StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("altInputClass", "altInputClassAttr", "altInputClass", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "undefined";
                    }, true),
                    this.attr("allowInvalidPreload", "allowInvalidPreloadAttr", "allowInvalidPreload", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.booleanTypes.unset;
                    }, true),
                    this.attr("ariaDateFormat", "ariaDateFormatAttr", "ariaDateFormat", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "undefined";
                    }, true),
                    this.attr("clickOpens", "clickOpensAttr", "clickOpens", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.booleanTypes.unset;
                    }, true),
                    this.attr("enableSeconds", "enableSecondsAttr", "enableSeconds", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.booleanTypes.unset;
                    }, true),
                    this.attr("hourIncrement", "hourIncrementAttr", "hourIncrement", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("inline", "inlineAttr", "inline", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.booleanTypes.unset;
                    }, true),
                    this.attr("minuteIncrement", "minuteIncrementAttr", "minuteIncrement", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("nextArrow", "nextArrowAttr", "nextArrow", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "undefined";
                    }, true),
                    this.attr("position", "positionAttr", "position", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "undefined";
                    }, true),
                    this.attr("positionElement", "positionElementAttr", "positionElement", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "undefined";
                    }, true),
                    this.attr("prevArrow", "prevArrowAttr", "prevArrow", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "undefined";
                    }, true),
                    this.attr("shorthandCurrentMonth", "shorthandCurrentMonthAttr", "shorthandCurrentMonth", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.booleanTypes.unset;
                    }, true),
                    this.attr("static", "staticAttr", "static", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.booleanTypes.unset;
                    }, true),
                    this.attr("showMonths", "showMonthsAttr", "showMonths", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("wrap", "wrapAttr", "wrap", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.booleanTypes.unset;
                    }, true),
                    this.attr("monthSelectorType", "monthSelectorTypeAttr", "monthSelectorType", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "undefined";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_14b00646f6cd842655571448758d0a23Structure = ST_14b00646f6cd842655571448758d0a23StructureInner;

        var ST_14b00646f6cd842655571448758d0a23Structure = ST_14b00646f6cd842655571448758d0a23StructureInner;
        ST_14b00646f6cd842655571448758d0a23Structure.init();
    }
});

define("OutSystemsUI.model$RL_157fced35d515bf7b615f06f3ed59864", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_bc915b2fa9297a72fb4d1b227ebe2573EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_157fced35d515bf7b615f06f3ed59864 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.EN_bc915b2fa9297a72fb4d1b227ebe2573EntityRecord;
        }

    }

    OutSystemsUIModel.RL_157fced35d515bf7b615f06f3ed59864 = RL_157fced35d515bf7b615f06f3ed59864;

});

define("OutSystemsUI.model$EN_ede7f8abbe990a3b2c1a9cfd79dc5b0fEntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class EN_ede7f8abbe990a3b2c1a9cfd79dc5b0fEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Type", "typeAttr", "Type", true, false, OS.DataTypes.DataTypes.Text, function() {
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

        OutSystemsUIModel.EN_ede7f8abbe990a3b2c1a9cfd79dc5b0fEntityRecord = EN_ede7f8abbe990a3b2c1a9cfd79dc5b0fEntityRecordInner;

        var EN_ede7f8abbe990a3b2c1a9cfd79dc5b0fEntityRecord = EN_ede7f8abbe990a3b2c1a9cfd79dc5b0fEntityRecordInner;
        EN_ede7f8abbe990a3b2c1a9cfd79dc5b0fEntityRecord.init();
    }
});

define("OutSystemsUI.model$RC_1583be5d90a94b6a73170ffa868eecc5", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_ede7f8abbe990a3b2c1a9cfd79dc5b0fEntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_1583be5d90a94b6a73170ffa868eecc5Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("DeviceResponsive", "deviceResponsiveAttr", "DeviceResponsive", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_ede7f8abbe990a3b2c1a9cfd79dc5b0fEntityRecord());
                    }, true, OutSystemsUIModel.EN_ede7f8abbe990a3b2c1a9cfd79dc5b0fEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_1583be5d90a94b6a73170ffa868eecc5(new RC_1583be5d90a94b6a73170ffa868eecc5.RecordClass({
                    deviceResponsiveAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_1583be5d90a94b6a73170ffa868eecc5 = RC_1583be5d90a94b6a73170ffa868eecc5Inner;

        RC_1583be5d90a94b6a73170ffa868eecc5Inner._isAnonymousRecord = true;
        RC_1583be5d90a94b6a73170ffa868eecc5Inner.UniqueId = "1583be5d-90a9-4b6a-7317-0ffa868eecc5";
        var RC_1583be5d90a94b6a73170ffa868eecc5 = RC_1583be5d90a94b6a73170ffa868eecc5Inner;
        RC_1583be5d90a94b6a73170ffa868eecc5.init();
    }
});

define("OutSystemsUI.model$RC_3ba1d238c8e0f0c3e875fb37f0381cc6", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_8d4f783227026ce93d50126c7f028443EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_3ba1d238c8e0f0c3e875fb37f0381cc6Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Orientation", "orientationAttr", "Orientation", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_8d4f783227026ce93d50126c7f028443EntityRecord());
                    }, true, OutSystemsUIModel.EN_8d4f783227026ce93d50126c7f028443EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_3ba1d238c8e0f0c3e875fb37f0381cc6(new RC_3ba1d238c8e0f0c3e875fb37f0381cc6.RecordClass({
                    orientationAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_3ba1d238c8e0f0c3e875fb37f0381cc6 = RC_3ba1d238c8e0f0c3e875fb37f0381cc6Inner;

        RC_3ba1d238c8e0f0c3e875fb37f0381cc6Inner._isAnonymousRecord = true;
        RC_3ba1d238c8e0f0c3e875fb37f0381cc6Inner.UniqueId = "3ba1d238-c8e0-f0c3-e875-fb37f0381cc6";
        var RC_3ba1d238c8e0f0c3e875fb37f0381cc6 = RC_3ba1d238c8e0f0c3e875fb37f0381cc6Inner;
        RC_3ba1d238c8e0f0c3e875fb37f0381cc6.init();
    }
});

define("OutSystemsUI.model$RL_1608d9419ce68c1bc879636bc5f915cc", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_3ba1d238c8e0f0c3e875fb37f0381cc6"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_1608d9419ce68c1bc879636bc5f915cc extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_3ba1d238c8e0f0c3e875fb37f0381cc6;
        }

    }

    OutSystemsUIModel.RL_1608d9419ce68c1bc879636bc5f915cc = RL_1608d9419ce68c1bc879636bc5f915cc;

});

define("OutSystemsUI.model$RL_166d9c488ed75ab70d02b1e5d330558b", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_0f0a5319963cb5bf3b0eab53b2781088Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_166d9c488ed75ab70d02b1e5d330558b extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_0f0a5319963cb5bf3b0eab53b2781088Structure;
        }

    }

    OutSystemsUIModel.RL_166d9c488ed75ab70d02b1e5d330558b = RL_166d9c488ed75ab70d02b1e5d330558b;

});

define("OutSystemsUI.model$RC_d3d7d244571ed038dbfee008e77e8c11", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_d3d7d244571ed038dbfee008e77e8c11Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Weekday1", "weekday1Attr", "Weekday1", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Weekday2", "weekday2Attr", "Weekday2", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Weekday3", "weekday3Attr", "Weekday3", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Weekday4", "weekday4Attr", "Weekday4", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Weekday5", "weekday5Attr", "Weekday5", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Weekday6", "weekday6Attr", "Weekday6", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Weekday7", "weekday7Attr", "Weekday7", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.RC_d3d7d244571ed038dbfee008e77e8c11 = RC_d3d7d244571ed038dbfee008e77e8c11Inner;

        RC_d3d7d244571ed038dbfee008e77e8c11Inner._isAnonymousRecord = true;
        RC_d3d7d244571ed038dbfee008e77e8c11Inner.UniqueId = "d3d7d244-571e-d038-dbfe-e008e77e8c11";
        var RC_d3d7d244571ed038dbfee008e77e8c11 = RC_d3d7d244571ed038dbfee008e77e8c11Inner;
        RC_d3d7d244571ed038dbfee008e77e8c11.init();
    }
});

define("OutSystemsUI.model$RL_1729600b673fd0870291732dd16f0147", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_d3d7d244571ed038dbfee008e77e8c11"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_1729600b673fd0870291732dd16f0147 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_d3d7d244571ed038dbfee008e77e8c11;
        }

    }

    OutSystemsUIModel.RL_1729600b673fd0870291732dd16f0147 = RL_1729600b673fd0870291732dd16f0147;

});

define("OutSystemsUI.model$EN_182bd2d69e3f1edb7f1fb76efcbcae87EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class EN_182bd2d69e3f1edb7f1fb76efcbcae87EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("BreakColumns", "breakColumnsAttr", "BreakColumns", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_182bd2d69e3f1edb7f1fb76efcbcae87EntityRecord(new EN_182bd2d69e3f1edb7f1fb76efcbcae87EntityRecord.RecordClass({
                    breakColumnsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.EN_182bd2d69e3f1edb7f1fb76efcbcae87EntityRecord = EN_182bd2d69e3f1edb7f1fb76efcbcae87EntityRecordInner;

        var EN_182bd2d69e3f1edb7f1fb76efcbcae87EntityRecord = EN_182bd2d69e3f1edb7f1fb76efcbcae87EntityRecordInner;
        EN_182bd2d69e3f1edb7f1fb76efcbcae87EntityRecord.init();
    }
});

define("OutSystemsUI.model$EN_189b647ddc5c60c1aa5290bb6481a72dEntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class EN_189b647ddc5c60c1aa5290bb6481a72dEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Type", "typeAttr", "Type", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.EN_189b647ddc5c60c1aa5290bb6481a72dEntityRecord = EN_189b647ddc5c60c1aa5290bb6481a72dEntityRecordInner;

        var EN_189b647ddc5c60c1aa5290bb6481a72dEntityRecord = EN_189b647ddc5c60c1aa5290bb6481a72dEntityRecordInner;
        EN_189b647ddc5c60c1aa5290bb6481a72dEntityRecord.init();
    }
});

define("OutSystemsUI.model$EN_1967a79b0bc6b1bdc38ff87eefe0b127EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class EN_1967a79b0bc6b1bdc38ff87eefe0b127EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Style", "styleAttr", "Style", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_1967a79b0bc6b1bdc38ff87eefe0b127EntityRecord(new EN_1967a79b0bc6b1bdc38ff87eefe0b127EntityRecord.RecordClass({
                    styleAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.EN_1967a79b0bc6b1bdc38ff87eefe0b127EntityRecord = EN_1967a79b0bc6b1bdc38ff87eefe0b127EntityRecordInner;

        var EN_1967a79b0bc6b1bdc38ff87eefe0b127EntityRecord = EN_1967a79b0bc6b1bdc38ff87eefe0b127EntityRecordInner;
        EN_1967a79b0bc6b1bdc38ff87eefe0b127EntityRecord.init();
    }
});

define("OutSystemsUI.model$EN_52e55d60c515b6016f81404afb220594EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class EN_52e55d60c515b6016f81404afb220594EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Trigger", "triggerAttr", "Trigger", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_52e55d60c515b6016f81404afb220594EntityRecord(new EN_52e55d60c515b6016f81404afb220594EntityRecord.RecordClass({
                    triggerAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.EN_52e55d60c515b6016f81404afb220594EntityRecord = EN_52e55d60c515b6016f81404afb220594EntityRecordInner;

        var EN_52e55d60c515b6016f81404afb220594EntityRecord = EN_52e55d60c515b6016f81404afb220594EntityRecordInner;
        EN_52e55d60c515b6016f81404afb220594EntityRecord.init();
    }
});

define("OutSystemsUI.model$RL_19efe67c3ea3fa4b4b07aaa801b42f8c", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_52e55d60c515b6016f81404afb220594EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_19efe67c3ea3fa4b4b07aaa801b42f8c extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.EN_52e55d60c515b6016f81404afb220594EntityRecord;
        }

    }

    OutSystemsUIModel.RL_19efe67c3ea3fa4b4b07aaa801b42f8c = RL_19efe67c3ea3fa4b4b07aaa801b42f8c;

});

define("OutSystemsUI.model$EN_c3a2475ae6370a2f746040280495b4a2EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class EN_c3a2475ae6370a2f746040280495b4a2EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Autoplay", "autoplayAttr", "Autoplay", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_c3a2475ae6370a2f746040280495b4a2EntityRecord(new EN_c3a2475ae6370a2f746040280495b4a2EntityRecord.RecordClass({
                    autoplayAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.EN_c3a2475ae6370a2f746040280495b4a2EntityRecord = EN_c3a2475ae6370a2f746040280495b4a2EntityRecordInner;

        var EN_c3a2475ae6370a2f746040280495b4a2EntityRecord = EN_c3a2475ae6370a2f746040280495b4a2EntityRecordInner;
        EN_c3a2475ae6370a2f746040280495b4a2EntityRecord.init();
    }
});

define("OutSystemsUI.model$RC_c6831d06e579de4edbcf59e128b60b13", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_c3a2475ae6370a2f746040280495b4a2EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_c6831d06e579de4edbcf59e128b60b13Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Autoplay", "autoplayAttr", "Autoplay", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_c3a2475ae6370a2f746040280495b4a2EntityRecord());
                    }, true, OutSystemsUIModel.EN_c3a2475ae6370a2f746040280495b4a2EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_c6831d06e579de4edbcf59e128b60b13(new RC_c6831d06e579de4edbcf59e128b60b13.RecordClass({
                    autoplayAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_c6831d06e579de4edbcf59e128b60b13 = RC_c6831d06e579de4edbcf59e128b60b13Inner;

        RC_c6831d06e579de4edbcf59e128b60b13Inner._isAnonymousRecord = true;
        RC_c6831d06e579de4edbcf59e128b60b13Inner.UniqueId = "c6831d06-e579-de4e-dbcf-59e128b60b13";
        var RC_c6831d06e579de4edbcf59e128b60b13 = RC_c6831d06e579de4edbcf59e128b60b13Inner;
        RC_c6831d06e579de4edbcf59e128b60b13.init();
    }
});

define("OutSystemsUI.model$RL_1a211c52d9450d4da06f34c1b8aa3b76", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_c6831d06e579de4edbcf59e128b60b13"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_1a211c52d9450d4da06f34c1b8aa3b76 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_c6831d06e579de4edbcf59e128b60b13;
        }

    }

    OutSystemsUIModel.RL_1a211c52d9450d4da06f34c1b8aa3b76 = RL_1a211c52d9450d4da06f34c1b8aa3b76;

});

define("OutSystemsUI.model$EN_1f7daead8658b6d9bc2681468edc5e3fEntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class EN_1f7daead8658b6d9bc2681468edc5e3fEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Provider", "providerAttr", "Provider", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_1f7daead8658b6d9bc2681468edc5e3fEntityRecord(new EN_1f7daead8658b6d9bc2681468edc5e3fEntityRecord.RecordClass({
                    providerAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.EN_1f7daead8658b6d9bc2681468edc5e3fEntityRecord = EN_1f7daead8658b6d9bc2681468edc5e3fEntityRecordInner;

        var EN_1f7daead8658b6d9bc2681468edc5e3fEntityRecord = EN_1f7daead8658b6d9bc2681468edc5e3fEntityRecordInner;
        EN_1f7daead8658b6d9bc2681468edc5e3fEntityRecord.init();
    }
});

define("OutSystemsUI.model$RL_1cbee159281ed82f6e5bc7a8b9325c58", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_1f7daead8658b6d9bc2681468edc5e3fEntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_1cbee159281ed82f6e5bc7a8b9325c58 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.EN_1f7daead8658b6d9bc2681468edc5e3fEntityRecord;
        }

    }

    OutSystemsUIModel.RL_1cbee159281ed82f6e5bc7a8b9325c58 = RL_1cbee159281ed82f6e5bc7a8b9325c58;

});

define("OutSystemsUI.model$ST_87ed820dae13f311d79f7f394fc3790aStructure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_87ed820dae13f311d79f7f394fc3790aStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Autoplay", "autoplayAttr", "Autoplay", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, true),
                    this.attr("Captions", "captionsAttr", "Captions", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Controls", "controlsAttr", "Controls", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, true),
                    this.attr("Height", "heightAttr", "Height", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Loop", "loopAttr", "Loop", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Muted", "mutedAttr", "Muted", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("PosterURL", "posterURLAttr", "PosterURL", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("URL", "uRLAttr", "URL", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Width", "widthAttr", "Width", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_87ed820dae13f311d79f7f394fc3790aStructure = ST_87ed820dae13f311d79f7f394fc3790aStructureInner;

        var ST_87ed820dae13f311d79f7f394fc3790aStructure = ST_87ed820dae13f311d79f7f394fc3790aStructureInner;
        ST_87ed820dae13f311d79f7f394fc3790aStructure.init();
    }
});

define("OutSystemsUI.model$RC_824809bf8c57cb0db3f5d42bbea4d2cf", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_87ed820dae13f311d79f7f394fc3790aStructure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_824809bf8c57cb0db3f5d42bbea4d2cfInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Video_InternalConfig", "video_InternalConfigAttr", "Video_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_87ed820dae13f311d79f7f394fc3790aStructure());
                    }, true, OutSystemsUIModel.ST_87ed820dae13f311d79f7f394fc3790aStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_824809bf8c57cb0db3f5d42bbea4d2cf(new RC_824809bf8c57cb0db3f5d42bbea4d2cf.RecordClass({
                    video_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_824809bf8c57cb0db3f5d42bbea4d2cf = RC_824809bf8c57cb0db3f5d42bbea4d2cfInner;

        RC_824809bf8c57cb0db3f5d42bbea4d2cfInner._isAnonymousRecord = true;
        RC_824809bf8c57cb0db3f5d42bbea4d2cfInner.UniqueId = "824809bf-8c57-cb0d-b3f5-d42bbea4d2cf";
        var RC_824809bf8c57cb0db3f5d42bbea4d2cf = RC_824809bf8c57cb0db3f5d42bbea4d2cfInner;
        RC_824809bf8c57cb0db3f5d42bbea4d2cf.init();
    }
});

define("OutSystemsUI.model$RL_1cf429e8bab27b0a835794d4d352252f", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_824809bf8c57cb0db3f5d42bbea4d2cf"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_1cf429e8bab27b0a835794d4d352252f extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_824809bf8c57cb0db3f5d42bbea4d2cf;
        }

    }

    OutSystemsUIModel.RL_1cf429e8bab27b0a835794d4d352252f = RL_1cf429e8bab27b0a835794d4d352252f;

});

define("OutSystemsUI.model$ST_256310aee13520906f2ba115af101f62Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_256310aee13520906f2ba115af101f62StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("DateFormat", "dateFormatAttr", "DateFormat", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("InitialStartDate", "initialStartDateAttr", "InitialStartDate", false, false, OS.DataTypes.DataTypes.DateTime, function() {
                        return OS.DataTypes.DateTime.defaultValue;
                    }, true),
                    this.attr("InitialEndDate", "initialEndDateAttr", "InitialEndDate", false, false, OS.DataTypes.DataTypes.DateTime, function() {
                        return OS.DataTypes.DateTime.defaultValue;
                    }, true),
                    this.attr("ShowTodayButton", "showTodayButtonAttr", "ShowTodayButton", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("FirstWeekDay", "firstWeekDayAttr", "FirstWeekDay", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return OutSystemsUIModel.staticEntities.datePickerWeekDay.sunday;
                    }, true),
                    this.attr("MinDate", "minDateAttr", "MinDate", false, false, OS.DataTypes.DataTypes.DateTime, function() {
                        return OS.DataTypes.DateTime.defaultValue;
                    }, true),
                    this.attr("MaxDate", "maxDateAttr", "MaxDate", false, false, OS.DataTypes.DataTypes.DateTime, function() {
                        return OS.DataTypes.DateTime.defaultValue;
                    }, true),
                    this.attr("ShowWeekNumbers", "showWeekNumbersAttr", "ShowWeekNumbers", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_256310aee13520906f2ba115af101f62Structure = ST_256310aee13520906f2ba115af101f62StructureInner;

        var ST_256310aee13520906f2ba115af101f62Structure = ST_256310aee13520906f2ba115af101f62StructureInner;
        ST_256310aee13520906f2ba115af101f62Structure.init();
    }
});

define("OutSystemsUI.model$RC_1d16add6c65a995967ac402e66fde3ff", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_256310aee13520906f2ba115af101f62Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_1d16add6c65a995967ac402e66fde3ffInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("DatePickerRange_InternalConfig", "datePickerRange_InternalConfigAttr", "DatePickerRange_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_256310aee13520906f2ba115af101f62Structure());
                    }, true, OutSystemsUIModel.ST_256310aee13520906f2ba115af101f62Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_1d16add6c65a995967ac402e66fde3ff(new RC_1d16add6c65a995967ac402e66fde3ff.RecordClass({
                    datePickerRange_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_1d16add6c65a995967ac402e66fde3ff = RC_1d16add6c65a995967ac402e66fde3ffInner;

        RC_1d16add6c65a995967ac402e66fde3ffInner._isAnonymousRecord = true;
        RC_1d16add6c65a995967ac402e66fde3ffInner.UniqueId = "1d16add6-c65a-9959-67ac-402e66fde3ff";
        var RC_1d16add6c65a995967ac402e66fde3ff = RC_1d16add6c65a995967ac402e66fde3ffInner;
        RC_1d16add6c65a995967ac402e66fde3ff.init();
    }
});

define("OutSystemsUI.model$ST_bc9955d62033e77475d9540bd4940593Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_bc9955d62033e77475d9540bd4940593StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("SVGCode", "sVGCodeAttr", "SVGCode", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_bc9955d62033e77475d9540bd4940593Structure = ST_bc9955d62033e77475d9540bd4940593StructureInner;

        var ST_bc9955d62033e77475d9540bd4940593Structure = ST_bc9955d62033e77475d9540bd4940593StructureInner;
        ST_bc9955d62033e77475d9540bd4940593Structure.init();
    }
});

define("OutSystemsUI.model$RL_1d5d9a16261edaf52587231a41469a09", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_bc9955d62033e77475d9540bd4940593Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_1d5d9a16261edaf52587231a41469a09 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_bc9955d62033e77475d9540bd4940593Structure;
        }

    }

    OutSystemsUIModel.RL_1d5d9a16261edaf52587231a41469a09 = RL_1d5d9a16261edaf52587231a41469a09;

});

define("OutSystemsUI.model$EN_4f86046673de081f9834eb306850ab22EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class EN_4f86046673de081f9834eb306850ab22EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Position", "positionAttr", "Position", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_4f86046673de081f9834eb306850ab22EntityRecord(new EN_4f86046673de081f9834eb306850ab22EntityRecord.RecordClass({
                    positionAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.EN_4f86046673de081f9834eb306850ab22EntityRecord = EN_4f86046673de081f9834eb306850ab22EntityRecordInner;

        var EN_4f86046673de081f9834eb306850ab22EntityRecord = EN_4f86046673de081f9834eb306850ab22EntityRecordInner;
        EN_4f86046673de081f9834eb306850ab22EntityRecord.init();
    }
});

define("OutSystemsUI.model$RC_95c473136722ba7379611f73a3471de3", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_4f86046673de081f9834eb306850ab22EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_95c473136722ba7379611f73a3471de3Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("FloatingPosition", "floatingPositionAttr", "FloatingPosition", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_4f86046673de081f9834eb306850ab22EntityRecord());
                    }, true, OutSystemsUIModel.EN_4f86046673de081f9834eb306850ab22EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_95c473136722ba7379611f73a3471de3(new RC_95c473136722ba7379611f73a3471de3.RecordClass({
                    floatingPositionAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_95c473136722ba7379611f73a3471de3 = RC_95c473136722ba7379611f73a3471de3Inner;

        RC_95c473136722ba7379611f73a3471de3Inner._isAnonymousRecord = true;
        RC_95c473136722ba7379611f73a3471de3Inner.UniqueId = "95c47313-6722-ba73-7961-1f73a3471de3";
        var RC_95c473136722ba7379611f73a3471de3 = RC_95c473136722ba7379611f73a3471de3Inner;
        RC_95c473136722ba7379611f73a3471de3.init();
    }
});

define("OutSystemsUI.model$RL_1ea3e84bcb11dff20d44cc2dd9bb0fe2", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_95c473136722ba7379611f73a3471de3"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_1ea3e84bcb11dff20d44cc2dd9bb0fe2 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_95c473136722ba7379611f73a3471de3;
        }

    }

    OutSystemsUIModel.RL_1ea3e84bcb11dff20d44cc2dd9bb0fe2 = RL_1ea3e84bcb11dff20d44cc2dd9bb0fe2;

});

define("OutSystemsUI.model$RC_1ea63146d7f1d969afc206832e751192", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_1e2af88601c0491260411e1369eb104cEntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_1ea63146d7f1d969afc206832e751192Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("BooleanTypes", "booleanTypesAttr", "BooleanTypes", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_1e2af88601c0491260411e1369eb104cEntityRecord());
                    }, true, OutSystemsUIModel.EN_1e2af88601c0491260411e1369eb104cEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_1ea63146d7f1d969afc206832e751192(new RC_1ea63146d7f1d969afc206832e751192.RecordClass({
                    booleanTypesAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_1ea63146d7f1d969afc206832e751192 = RC_1ea63146d7f1d969afc206832e751192Inner;

        RC_1ea63146d7f1d969afc206832e751192Inner._isAnonymousRecord = true;
        RC_1ea63146d7f1d969afc206832e751192Inner.UniqueId = "1ea63146-d7f1-d969-afc2-06832e751192";
        var RC_1ea63146d7f1d969afc206832e751192 = RC_1ea63146d7f1d969afc206832e751192Inner;
        RC_1ea63146d7f1d969afc206832e751192.init();
    }
});

define("OutSystemsUI.model$ST_28a47f2e64dd49f0d3d29e55f70be394Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_28a47f2e64dd49f0d3d29e55f70be394StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Page", "pageAttr", "Page", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("StartIndex", "startIndexAttr", "StartIndex", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_28a47f2e64dd49f0d3d29e55f70be394Structure = ST_28a47f2e64dd49f0d3d29e55f70be394StructureInner;

        var ST_28a47f2e64dd49f0d3d29e55f70be394Structure = ST_28a47f2e64dd49f0d3d29e55f70be394StructureInner;
        ST_28a47f2e64dd49f0d3d29e55f70be394Structure.init();
    }
});

define("OutSystemsUI.model$RC_5b37cd2bc5a279c3cc9b8640efcc6427", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_28a47f2e64dd49f0d3d29e55f70be394Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_5b37cd2bc5a279c3cc9b8640efcc6427Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ListNavigation", "listNavigationAttr", "ListNavigation", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_28a47f2e64dd49f0d3d29e55f70be394Structure());
                    }, true, OutSystemsUIModel.ST_28a47f2e64dd49f0d3d29e55f70be394Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_5b37cd2bc5a279c3cc9b8640efcc6427(new RC_5b37cd2bc5a279c3cc9b8640efcc6427.RecordClass({
                    listNavigationAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_5b37cd2bc5a279c3cc9b8640efcc6427 = RC_5b37cd2bc5a279c3cc9b8640efcc6427Inner;

        RC_5b37cd2bc5a279c3cc9b8640efcc6427Inner._isAnonymousRecord = true;
        RC_5b37cd2bc5a279c3cc9b8640efcc6427Inner.UniqueId = "5b37cd2b-c5a2-79c3-cc9b-8640efcc6427";
        var RC_5b37cd2bc5a279c3cc9b8640efcc6427 = RC_5b37cd2bc5a279c3cc9b8640efcc6427Inner;
        RC_5b37cd2bc5a279c3cc9b8640efcc6427.init();
    }
});

define("OutSystemsUI.model$RL_22f5579f76e7c8900c0e0ea6a0d13792", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_5b37cd2bc5a279c3cc9b8640efcc6427"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_22f5579f76e7c8900c0e0ea6a0d13792 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_5b37cd2bc5a279c3cc9b8640efcc6427;
        }

    }

    OutSystemsUIModel.RL_22f5579f76e7c8900c0e0ea6a0d13792 = RL_22f5579f76e7c8900c0e0ea6a0d13792;

});

define("OutSystemsUI.model$EN_7f8fd02aa7ee2ac6182b6b36e46460d9EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class EN_7f8fd02aa7ee2ac6182b6b36e46460d9EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_7f8fd02aa7ee2ac6182b6b36e46460d9EntityRecord(new EN_7f8fd02aa7ee2ac6182b6b36e46460d9EntityRecord.RecordClass({
                    labelAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.EN_7f8fd02aa7ee2ac6182b6b36e46460d9EntityRecord = EN_7f8fd02aa7ee2ac6182b6b36e46460d9EntityRecordInner;

        var EN_7f8fd02aa7ee2ac6182b6b36e46460d9EntityRecord = EN_7f8fd02aa7ee2ac6182b6b36e46460d9EntityRecordInner;
        EN_7f8fd02aa7ee2ac6182b6b36e46460d9EntityRecord.init();
    }
});

define("OutSystemsUI.model$RL_230328260e3d7a695b9562201483a549", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_7f8fd02aa7ee2ac6182b6b36e46460d9EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_230328260e3d7a695b9562201483a549 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.EN_7f8fd02aa7ee2ac6182b6b36e46460d9EntityRecord;
        }

    }

    OutSystemsUIModel.RL_230328260e3d7a695b9562201483a549 = RL_230328260e3d7a695b9562201483a549;

});

define("OutSystemsUI.model$ST_235f8a24bba710c13f14db6b69a566bbStructure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_235f8a24bba710c13f14db6b69a566bbStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("StartingTab", "startingTabAttr", "StartingTab", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("TabsOrientation", "tabsOrientationAttr", "TabsOrientation", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.orientation.horizontal;
                    }, true),
                    this.attr("TabsVerticalPosition", "tabsVerticalPositionAttr", "TabsVerticalPosition", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.direction.left;
                    }, true),
                    this.attr("Height", "heightAttr", "Height", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "auto";
                    }, true),
                    this.attr("JustifyHeaders", "justifyHeadersAttr", "JustifyHeaders", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("ContentAutoHeight", "contentAutoHeightAttr", "ContentAutoHeight", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_235f8a24bba710c13f14db6b69a566bbStructure = ST_235f8a24bba710c13f14db6b69a566bbStructureInner;

        var ST_235f8a24bba710c13f14db6b69a566bbStructure = ST_235f8a24bba710c13f14db6b69a566bbStructureInner;
        ST_235f8a24bba710c13f14db6b69a566bbStructure.init();
    }
});

define("OutSystemsUI.model$ST_ffc6ac6eac2c99bcdbe1dc79ecc6377fStructure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_ffc6ac6eac2c99bcdbe1dc79ecc6377fStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("LanguageCode", "languageCodeAttr", "LanguageCode", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("SourceFile", "sourceFileAttr", "SourceFile", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Label", "labelAttr", "Label", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_ffc6ac6eac2c99bcdbe1dc79ecc6377fStructure = ST_ffc6ac6eac2c99bcdbe1dc79ecc6377fStructureInner;

        var ST_ffc6ac6eac2c99bcdbe1dc79ecc6377fStructure = ST_ffc6ac6eac2c99bcdbe1dc79ecc6377fStructureInner;
        ST_ffc6ac6eac2c99bcdbe1dc79ecc6377fStructure.init();
    }
});

define("OutSystemsUI.model$RC_23e4ac7b03ba2050af5811737c8cc89f", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_ffc6ac6eac2c99bcdbe1dc79ecc6377fStructure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_23e4ac7b03ba2050af5811737c8cc89fInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("VideoCaptions", "videoCaptionsAttr", "VideoCaptions", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_ffc6ac6eac2c99bcdbe1dc79ecc6377fStructure());
                    }, true, OutSystemsUIModel.ST_ffc6ac6eac2c99bcdbe1dc79ecc6377fStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_23e4ac7b03ba2050af5811737c8cc89f(new RC_23e4ac7b03ba2050af5811737c8cc89f.RecordClass({
                    videoCaptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_23e4ac7b03ba2050af5811737c8cc89f = RC_23e4ac7b03ba2050af5811737c8cc89fInner;

        RC_23e4ac7b03ba2050af5811737c8cc89fInner._isAnonymousRecord = true;
        RC_23e4ac7b03ba2050af5811737c8cc89fInner.UniqueId = "23e4ac7b-03ba-2050-af58-11737c8cc89f";
        var RC_23e4ac7b03ba2050af5811737c8cc89f = RC_23e4ac7b03ba2050af5811737c8cc89fInner;
        RC_23e4ac7b03ba2050af5811737c8cc89f.init();
    }
});

define("OutSystemsUI.model$RL_2434a812d9c1801fbc8d36150d23329c", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_af087c80f6ec63e7de4ff7926f7da7d0Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_2434a812d9c1801fbc8d36150d23329c extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_af087c80f6ec63e7de4ff7926f7da7d0Structure;
        }

    }

    OutSystemsUIModel.RL_2434a812d9c1801fbc8d36150d23329c = RL_2434a812d9c1801fbc8d36150d23329c;

});

define("OutSystemsUI.model$ST_7aeb6b0becaab355b4a3ae2d0ba331eaStructure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_7aeb6b0becaab355b4a3ae2d0ba331eaStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_7aeb6b0becaab355b4a3ae2d0ba331eaStructure = ST_7aeb6b0becaab355b4a3ae2d0ba331eaStructureInner;

        var ST_7aeb6b0becaab355b4a3ae2d0ba331eaStructure = ST_7aeb6b0becaab355b4a3ae2d0ba331eaStructureInner;
        ST_7aeb6b0becaab355b4a3ae2d0ba331eaStructure.init();
    }
});

define("OutSystemsUI.model$RL_254e9acf50e8fbb70295a333c7fc6cd2", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_7aeb6b0becaab355b4a3ae2d0ba331eaStructure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_254e9acf50e8fbb70295a333c7fc6cd2 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_7aeb6b0becaab355b4a3ae2d0ba331eaStructure;
        }

    }

    OutSystemsUIModel.RL_254e9acf50e8fbb70295a333c7fc6cd2 = RL_254e9acf50e8fbb70295a333c7fc6cd2;

});

define("OutSystemsUI.model$RC_261685da2c799bcc3b4873485e008694", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_182bd2d69e3f1edb7f1fb76efcbcae87EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_261685da2c799bcc3b4873485e008694Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("BreakColumns", "breakColumnsAttr", "BreakColumns", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_182bd2d69e3f1edb7f1fb76efcbcae87EntityRecord());
                    }, true, OutSystemsUIModel.EN_182bd2d69e3f1edb7f1fb76efcbcae87EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_261685da2c799bcc3b4873485e008694(new RC_261685da2c799bcc3b4873485e008694.RecordClass({
                    breakColumnsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_261685da2c799bcc3b4873485e008694 = RC_261685da2c799bcc3b4873485e008694Inner;

        RC_261685da2c799bcc3b4873485e008694Inner._isAnonymousRecord = true;
        RC_261685da2c799bcc3b4873485e008694Inner.UniqueId = "261685da-2c79-9bcc-3b48-73485e008694";
        var RC_261685da2c799bcc3b4873485e008694 = RC_261685da2c799bcc3b4873485e008694Inner;
        RC_261685da2c799bcc3b4873485e008694.init();
    }
});

define("OutSystemsUI.model$ST_5c08eaa15b890a2d617cabe547c34f0bStructure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_5c08eaa15b890a2d617cabe547c34f0bStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Month", "monthAttr", "Month", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Year", "yearAttr", "Year", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_5c08eaa15b890a2d617cabe547c34f0bStructure = ST_5c08eaa15b890a2d617cabe547c34f0bStructureInner;

        var ST_5c08eaa15b890a2d617cabe547c34f0bStructure = ST_5c08eaa15b890a2d617cabe547c34f0bStructureInner;
        ST_5c08eaa15b890a2d617cabe547c34f0bStructure.init();
    }
});

define("OutSystemsUI.model$ST_6f97d9724e66f51b47133aa003a9e610Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_5c08eaa15b890a2d617cabe547c34f0bStructure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_6f97d9724e66f51b47133aa003a9e610StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("DateFormat", "dateFormatAttr", "DateFormat", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("MinMonth", "minMonthAttr", "MinMonth", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_5c08eaa15b890a2d617cabe547c34f0bStructure());
                    }, true, OutSystemsUIModel.ST_5c08eaa15b890a2d617cabe547c34f0bStructure),
                    this.attr("InitialMonth", "initialMonthAttr", "InitialMonth", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_5c08eaa15b890a2d617cabe547c34f0bStructure());
                    }, true, OutSystemsUIModel.ST_5c08eaa15b890a2d617cabe547c34f0bStructure),
                    this.attr("MaxMonth", "maxMonthAttr", "MaxMonth", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_5c08eaa15b890a2d617cabe547c34f0bStructure());
                    }, true, OutSystemsUIModel.ST_5c08eaa15b890a2d617cabe547c34f0bStructure),
                    this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_6f97d9724e66f51b47133aa003a9e610Structure = ST_6f97d9724e66f51b47133aa003a9e610StructureInner;

        var ST_6f97d9724e66f51b47133aa003a9e610Structure = ST_6f97d9724e66f51b47133aa003a9e610StructureInner;
        ST_6f97d9724e66f51b47133aa003a9e610Structure.init();
    }
});

define("OutSystemsUI.model$RL_264e480af17fa239d591aa03fb53347c", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_6f97d9724e66f51b47133aa003a9e610Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_264e480af17fa239d591aa03fb53347c extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_6f97d9724e66f51b47133aa003a9e610Structure;
        }

    }

    OutSystemsUIModel.RL_264e480af17fa239d591aa03fb53347c = RL_264e480af17fa239d591aa03fb53347c;

});

define("OutSystemsUI.model$RC_a2f63a3e27000ea7c800cf727f8ecfba", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_106b6e385f5e89b0a7d76e23b14f61a0Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_a2f63a3e27000ea7c800cf727f8ecfbaInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("BottomSheet_InternalConfig", "bottomSheet_InternalConfigAttr", "BottomSheet_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_106b6e385f5e89b0a7d76e23b14f61a0Structure());
                    }, true, OutSystemsUIModel.ST_106b6e385f5e89b0a7d76e23b14f61a0Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_a2f63a3e27000ea7c800cf727f8ecfba(new RC_a2f63a3e27000ea7c800cf727f8ecfba.RecordClass({
                    bottomSheet_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_a2f63a3e27000ea7c800cf727f8ecfba = RC_a2f63a3e27000ea7c800cf727f8ecfbaInner;

        RC_a2f63a3e27000ea7c800cf727f8ecfbaInner._isAnonymousRecord = true;
        RC_a2f63a3e27000ea7c800cf727f8ecfbaInner.UniqueId = "a2f63a3e-2700-0ea7-c800-cf727f8ecfba";
        var RC_a2f63a3e27000ea7c800cf727f8ecfba = RC_a2f63a3e27000ea7c800cf727f8ecfbaInner;
        RC_a2f63a3e27000ea7c800cf727f8ecfba.init();
    }
});

define("OutSystemsUI.model$RL_26fe7e35cc8af3671f82a7f722857f76", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_a2f63a3e27000ea7c800cf727f8ecfba"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_26fe7e35cc8af3671f82a7f722857f76 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_a2f63a3e27000ea7c800cf727f8ecfba;
        }

    }

    OutSystemsUIModel.RL_26fe7e35cc8af3671f82a7f722857f76 = RL_26fe7e35cc8af3671f82a7f722857f76;

});

define("OutSystemsUI.model$ST_ef80898cf0e45bb0e0895a62dd0c45b1Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_ef80898cf0e45bb0e0895a62dd0c45b1StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("StartsExpanded", "startsExpandedAttr", "StartsExpanded", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Icon", "iconAttr", "Icon", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("IconPosition", "iconPositionAttr", "IconPosition", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("IsDisabled", "isDisabledAttr", "IsDisabled", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_ef80898cf0e45bb0e0895a62dd0c45b1Structure = ST_ef80898cf0e45bb0e0895a62dd0c45b1StructureInner;

        var ST_ef80898cf0e45bb0e0895a62dd0c45b1Structure = ST_ef80898cf0e45bb0e0895a62dd0c45b1StructureInner;
        ST_ef80898cf0e45bb0e0895a62dd0c45b1Structure.init();
    }
});

define("OutSystemsUI.model$RC_28eb7999f57ca2adfa805d40364c85b5", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_ef80898cf0e45bb0e0895a62dd0c45b1Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_28eb7999f57ca2adfa805d40364c85b5Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("AccordionItem_InternalConfigs", "accordionItem_InternalConfigsAttr", "AccordionItem_InternalConfigs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_ef80898cf0e45bb0e0895a62dd0c45b1Structure());
                    }, true, OutSystemsUIModel.ST_ef80898cf0e45bb0e0895a62dd0c45b1Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_28eb7999f57ca2adfa805d40364c85b5(new RC_28eb7999f57ca2adfa805d40364c85b5.RecordClass({
                    accordionItem_InternalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_28eb7999f57ca2adfa805d40364c85b5 = RC_28eb7999f57ca2adfa805d40364c85b5Inner;

        RC_28eb7999f57ca2adfa805d40364c85b5Inner._isAnonymousRecord = true;
        RC_28eb7999f57ca2adfa805d40364c85b5Inner.UniqueId = "28eb7999-f57c-a2ad-fa80-5d40364c85b5";
        var RC_28eb7999f57ca2adfa805d40364c85b5 = RC_28eb7999f57ca2adfa805d40364c85b5Inner;
        RC_28eb7999f57ca2adfa805d40364c85b5.init();
    }
});

define("OutSystemsUI.model$RL_26fff94a649decd44865005d77fa1ed8", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_28eb7999f57ca2adfa805d40364c85b5"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_26fff94a649decd44865005d77fa1ed8 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_28eb7999f57ca2adfa805d40364c85b5;
        }

    }

    OutSystemsUIModel.RL_26fff94a649decd44865005d77fa1ed8 = RL_26fff94a649decd44865005d77fa1ed8;

});

define("OutSystemsUI.model$EN_a14a98f7fea6a66cbe59ce2905b45c09EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class EN_a14a98f7fea6a66cbe59ce2905b45c09EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Size", "sizeAttr", "Size", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_a14a98f7fea6a66cbe59ce2905b45c09EntityRecord(new EN_a14a98f7fea6a66cbe59ce2905b45c09EntityRecord.RecordClass({
                    sizeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.EN_a14a98f7fea6a66cbe59ce2905b45c09EntityRecord = EN_a14a98f7fea6a66cbe59ce2905b45c09EntityRecordInner;

        var EN_a14a98f7fea6a66cbe59ce2905b45c09EntityRecord = EN_a14a98f7fea6a66cbe59ce2905b45c09EntityRecordInner;
        EN_a14a98f7fea6a66cbe59ce2905b45c09EntityRecord.init();
    }
});

define("OutSystemsUI.model$RC_ca426fec0751e5b6dcf015e9fdc2120e", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_a14a98f7fea6a66cbe59ce2905b45c09EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_ca426fec0751e5b6dcf015e9fdc2120eInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Size", "sizeAttr", "Size", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_a14a98f7fea6a66cbe59ce2905b45c09EntityRecord());
                    }, true, OutSystemsUIModel.EN_a14a98f7fea6a66cbe59ce2905b45c09EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_ca426fec0751e5b6dcf015e9fdc2120e(new RC_ca426fec0751e5b6dcf015e9fdc2120e.RecordClass({
                    sizeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_ca426fec0751e5b6dcf015e9fdc2120e = RC_ca426fec0751e5b6dcf015e9fdc2120eInner;

        RC_ca426fec0751e5b6dcf015e9fdc2120eInner._isAnonymousRecord = true;
        RC_ca426fec0751e5b6dcf015e9fdc2120eInner.UniqueId = "ca426fec-0751-e5b6-dcf0-15e9fdc2120e";
        var RC_ca426fec0751e5b6dcf015e9fdc2120e = RC_ca426fec0751e5b6dcf015e9fdc2120eInner;
        RC_ca426fec0751e5b6dcf015e9fdc2120e.init();
    }
});

define("OutSystemsUI.model$RL_27a81319ef1cef112a91632cbf388562", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_ca426fec0751e5b6dcf015e9fdc2120e"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_27a81319ef1cef112a91632cbf388562 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_ca426fec0751e5b6dcf015e9fdc2120e;
        }

    }

    OutSystemsUIModel.RL_27a81319ef1cef112a91632cbf388562 = RL_27a81319ef1cef112a91632cbf388562;

});

define("OutSystemsUI.model$ST_27b48af5cc16a3b2165fd73e0270cad1Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_27b48af5cc16a3b2165fd73e0270cad1StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Color", "colorAttr", "Color", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Percentage", "percentageAttr", "Percentage", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.BuiltinFunctions.integerToDecimal(-1);
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_27b48af5cc16a3b2165fd73e0270cad1Structure = ST_27b48af5cc16a3b2165fd73e0270cad1StructureInner;

        var ST_27b48af5cc16a3b2165fd73e0270cad1Structure = ST_27b48af5cc16a3b2165fd73e0270cad1StructureInner;
        ST_27b48af5cc16a3b2165fd73e0270cad1Structure.init();
    }
});

define("OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_b7d405ca4407e572da091e54d07e3bd1StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Code", "codeAttr", "code", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Message", "messageAttr", "message", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_b7d405ca4407e572da091e54d07e3bd1Structure = ST_b7d405ca4407e572da091e54d07e3bd1StructureInner;

        var ST_b7d405ca4407e572da091e54d07e3bd1Structure = ST_b7d405ca4407e572da091e54d07e3bd1StructureInner;
        ST_b7d405ca4407e572da091e54d07e3bd1Structure.init();
    }
});

define("OutSystemsUI.model$RC_27b5a164e828de9b90686831c7908b4a", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_27b5a164e828de9b90686831c7908b4aInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ErrorMessage", "errorMessageAttr", "ErrorMessage", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_b7d405ca4407e572da091e54d07e3bd1Structure());
                    }, true, OutSystemsUIModel.ST_b7d405ca4407e572da091e54d07e3bd1Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_27b5a164e828de9b90686831c7908b4a(new RC_27b5a164e828de9b90686831c7908b4a.RecordClass({
                    errorMessageAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_27b5a164e828de9b90686831c7908b4a = RC_27b5a164e828de9b90686831c7908b4aInner;

        RC_27b5a164e828de9b90686831c7908b4aInner._isAnonymousRecord = true;
        RC_27b5a164e828de9b90686831c7908b4aInner.UniqueId = "27b5a164-e828-de9b-9068-6831c7908b4a";
        var RC_27b5a164e828de9b90686831c7908b4a = RC_27b5a164e828de9b90686831c7908b4aInner;
        RC_27b5a164e828de9b90686831c7908b4a.init();
    }
});

define("OutSystemsUI.model$RL_2995190cb5b8004126c835c4dd6dec76", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_736a0a0e931f1e6cffc1de4b3ad94539Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_2995190cb5b8004126c835c4dd6dec76 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_736a0a0e931f1e6cffc1de4b3ad94539Structure;
        }

    }

    OutSystemsUIModel.RL_2995190cb5b8004126c835c4dd6dec76 = RL_2995190cb5b8004126c835c4dd6dec76;

});

define("OutSystemsUI.model$ST_52888c3e6f33b11b7d6288dd268a26dcStructure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_52888c3e6f33b11b7d6288dd268a26dcStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_52888c3e6f33b11b7d6288dd268a26dcStructure = ST_52888c3e6f33b11b7d6288dd268a26dcStructureInner;

        var ST_52888c3e6f33b11b7d6288dd268a26dcStructure = ST_52888c3e6f33b11b7d6288dd268a26dcStructureInner;
        ST_52888c3e6f33b11b7d6288dd268a26dcStructure.init();
    }
});

define("OutSystemsUI.model$RL_29abfa51de4d470d3279317a334d5530", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_52888c3e6f33b11b7d6288dd268a26dcStructure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_29abfa51de4d470d3279317a334d5530 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_52888c3e6f33b11b7d6288dd268a26dcStructure;
        }

    }

    OutSystemsUIModel.RL_29abfa51de4d470d3279317a334d5530 = RL_29abfa51de4d470d3279317a334d5530;

});

define("OutSystemsUI.model$RL_2a0eb2112b6bdaac280617c2b6e06a2f", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_235f8a24bba710c13f14db6b69a566bbStructure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_2a0eb2112b6bdaac280617c2b6e06a2f extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_235f8a24bba710c13f14db6b69a566bbStructure;
        }

    }

    OutSystemsUIModel.RL_2a0eb2112b6bdaac280617c2b6e06a2f = RL_2a0eb2112b6bdaac280617c2b6e06a2f;

});

define("OutSystemsUI.model$ST_4e53cb8815b86020ced1d2f2652c9b1dStructure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_4e53cb8815b86020ced1d2f2652c9b1dStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("AllowMultipleSelection", "allowMultipleSelectionAttr", "AllowMultipleSelection", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("IsDisabled", "isDisabledAttr", "IsDisabled", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("NoResultsText", "noResultsTextAttr", "NoResultsText", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "There are no options to show.";
                    }, true),
                    this.attr("SearchPrompt", "searchPromptAttr", "SearchPrompt", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "Search...";
                    }, true),
                    this.attr("NoOptionsText", "noOptionsTextAttr", "NoOptionsText", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "There are no options to show.";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_4e53cb8815b86020ced1d2f2652c9b1dStructure = ST_4e53cb8815b86020ced1d2f2652c9b1dStructureInner;

        var ST_4e53cb8815b86020ced1d2f2652c9b1dStructure = ST_4e53cb8815b86020ced1d2f2652c9b1dStructureInner;
        ST_4e53cb8815b86020ced1d2f2652c9b1dStructure.init();
    }
});

define("OutSystemsUI.model$RC_2ac88c51f2d9ed908454e6a06ffe188e", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_4e53cb8815b86020ced1d2f2652c9b1dStructure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_2ac88c51f2d9ed908454e6a06ffe188eInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("DropdownOptionalConfigs", "dropdownOptionalConfigsAttr", "DropdownOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_4e53cb8815b86020ced1d2f2652c9b1dStructure());
                    }, true, OutSystemsUIModel.ST_4e53cb8815b86020ced1d2f2652c9b1dStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_2ac88c51f2d9ed908454e6a06ffe188e(new RC_2ac88c51f2d9ed908454e6a06ffe188e.RecordClass({
                    dropdownOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_2ac88c51f2d9ed908454e6a06ffe188e = RC_2ac88c51f2d9ed908454e6a06ffe188eInner;

        RC_2ac88c51f2d9ed908454e6a06ffe188eInner._isAnonymousRecord = true;
        RC_2ac88c51f2d9ed908454e6a06ffe188eInner.UniqueId = "2ac88c51-f2d9-ed90-8454-e6a06ffe188e";
        var RC_2ac88c51f2d9ed908454e6a06ffe188e = RC_2ac88c51f2d9ed908454e6a06ffe188eInner;
        RC_2ac88c51f2d9ed908454e6a06ffe188e.init();
    }
});

define("OutSystemsUI.model$ST_2b510eefd88959a00bf486cfc856fa96Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_2b510eefd88959a00bf486cfc856fa96StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("IsLoading", "isLoadingAttr", "IsLoading", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("ShowLoadingAndLabel", "showLoadingAndLabelAttr", "ShowLoadingAndLabel", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_2b510eefd88959a00bf486cfc856fa96Structure = ST_2b510eefd88959a00bf486cfc856fa96StructureInner;

        var ST_2b510eefd88959a00bf486cfc856fa96Structure = ST_2b510eefd88959a00bf486cfc856fa96StructureInner;
        ST_2b510eefd88959a00bf486cfc856fa96Structure.init();
    }
});

define("OutSystemsUI.model$EN_2c43e02ff45af9d6dc9d417ea3304062EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class EN_2c43e02ff45af9d6dc9d417ea3304062EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Speed", "speedAttr", "Speed", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_2c43e02ff45af9d6dc9d417ea3304062EntityRecord(new EN_2c43e02ff45af9d6dc9d417ea3304062EntityRecord.RecordClass({
                    speedAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.EN_2c43e02ff45af9d6dc9d417ea3304062EntityRecord = EN_2c43e02ff45af9d6dc9d417ea3304062EntityRecordInner;

        var EN_2c43e02ff45af9d6dc9d417ea3304062EntityRecord = EN_2c43e02ff45af9d6dc9d417ea3304062EntityRecordInner;
        EN_2c43e02ff45af9d6dc9d417ea3304062EntityRecord.init();
    }
});

define("OutSystemsUI.model$RC_63c659b6dc554b0b4f81d60382bf5fd6", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_189b647ddc5c60c1aa5290bb6481a72dEntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_63c659b6dc554b0b4f81d60382bf5fd6Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("MessageStatus", "messageStatusAttr", "MessageStatus", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_189b647ddc5c60c1aa5290bb6481a72dEntityRecord());
                    }, true, OutSystemsUIModel.EN_189b647ddc5c60c1aa5290bb6481a72dEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_63c659b6dc554b0b4f81d60382bf5fd6(new RC_63c659b6dc554b0b4f81d60382bf5fd6.RecordClass({
                    messageStatusAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_63c659b6dc554b0b4f81d60382bf5fd6 = RC_63c659b6dc554b0b4f81d60382bf5fd6Inner;

        RC_63c659b6dc554b0b4f81d60382bf5fd6Inner._isAnonymousRecord = true;
        RC_63c659b6dc554b0b4f81d60382bf5fd6Inner.UniqueId = "63c659b6-dc55-4b0b-4f81-d60382bf5fd6";
        var RC_63c659b6dc554b0b4f81d60382bf5fd6 = RC_63c659b6dc554b0b4f81d60382bf5fd6Inner;
        RC_63c659b6dc554b0b4f81d60382bf5fd6.init();
    }
});

define("OutSystemsUI.model$RL_2c7706a8fd91e45cb8a8b97418bcf4d0", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_63c659b6dc554b0b4f81d60382bf5fd6"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_2c7706a8fd91e45cb8a8b97418bcf4d0 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_63c659b6dc554b0b4f81d60382bf5fd6;
        }

    }

    OutSystemsUIModel.RL_2c7706a8fd91e45cb8a8b97418bcf4d0 = RL_2c7706a8fd91e45cb8a8b97418bcf4d0;

});

define("OutSystemsUI.model$EN_f43f179caddf7f7b68b18272d67285d6EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class EN_f43f179caddf7f7b68b18272d67285d6EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("MenuAction", "menuActionAttr", "MenuAction", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_f43f179caddf7f7b68b18272d67285d6EntityRecord(new EN_f43f179caddf7f7b68b18272d67285d6EntityRecord.RecordClass({
                    menuActionAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.EN_f43f179caddf7f7b68b18272d67285d6EntityRecord = EN_f43f179caddf7f7b68b18272d67285d6EntityRecordInner;

        var EN_f43f179caddf7f7b68b18272d67285d6EntityRecord = EN_f43f179caddf7f7b68b18272d67285d6EntityRecordInner;
        EN_f43f179caddf7f7b68b18272d67285d6EntityRecord.init();
    }
});

define("OutSystemsUI.model$RC_954cd1231210e70f33f184017bf580ac", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_f43f179caddf7f7b68b18272d67285d6EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_954cd1231210e70f33f184017bf580acInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("MenuAction", "menuActionAttr", "MenuAction", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_f43f179caddf7f7b68b18272d67285d6EntityRecord());
                    }, true, OutSystemsUIModel.EN_f43f179caddf7f7b68b18272d67285d6EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_954cd1231210e70f33f184017bf580ac(new RC_954cd1231210e70f33f184017bf580ac.RecordClass({
                    menuActionAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_954cd1231210e70f33f184017bf580ac = RC_954cd1231210e70f33f184017bf580acInner;

        RC_954cd1231210e70f33f184017bf580acInner._isAnonymousRecord = true;
        RC_954cd1231210e70f33f184017bf580acInner.UniqueId = "954cd123-1210-e70f-33f1-84017bf580ac";
        var RC_954cd1231210e70f33f184017bf580ac = RC_954cd1231210e70f33f184017bf580acInner;
        RC_954cd1231210e70f33f184017bf580ac.init();
    }
});

define("OutSystemsUI.model$RL_2cadeb0c6f7df3cfbe06d89edb556615", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_954cd1231210e70f33f184017bf580ac"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_2cadeb0c6f7df3cfbe06d89edb556615 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_954cd1231210e70f33f184017bf580ac;
        }

    }

    OutSystemsUIModel.RL_2cadeb0c6f7df3cfbe06d89edb556615 = RL_2cadeb0c6f7df3cfbe06d89edb556615;

});

define("OutSystemsUI.model$EN_b247924e01b5d93a7cb0164b4482d4b5EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class EN_b247924e01b5d93a7cb0164b4482d4b5EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Provider", "providerAttr", "Provider", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_b247924e01b5d93a7cb0164b4482d4b5EntityRecord(new EN_b247924e01b5d93a7cb0164b4482d4b5EntityRecord.RecordClass({
                    providerAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.EN_b247924e01b5d93a7cb0164b4482d4b5EntityRecord = EN_b247924e01b5d93a7cb0164b4482d4b5EntityRecordInner;

        var EN_b247924e01b5d93a7cb0164b4482d4b5EntityRecord = EN_b247924e01b5d93a7cb0164b4482d4b5EntityRecordInner;
        EN_b247924e01b5d93a7cb0164b4482d4b5EntityRecord.init();
    }
});

define("OutSystemsUI.model$RL_2dafb734b3fa8f00d09ad3d0c3a077e6", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_b247924e01b5d93a7cb0164b4482d4b5EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_2dafb734b3fa8f00d09ad3d0c3a077e6 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.EN_b247924e01b5d93a7cb0164b4482d4b5EntityRecord;
        }

    }

    OutSystemsUIModel.RL_2dafb734b3fa8f00d09ad3d0c3a077e6 = RL_2dafb734b3fa8f00d09ad3d0c3a077e6;

});

define("OutSystemsUI.model$ST_ba5b17ae5b3fdd9318ea2b4cf18c7d4dStructure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_ba5b17ae5b3fdd9318ea2b4cf18c7d4dStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("InitialStartDate", "initialStartDateAttr", "InitialStartDate", false, false, OS.DataTypes.DataTypes.Date, function() {
                        return OS.DataTypes.DateTime.defaultValue;
                    }, true),
                    this.attr("InitialEndDate", "initialEndDateAttr", "InitialEndDate", false, false, OS.DataTypes.DataTypes.Date, function() {
                        return OS.DataTypes.DateTime.defaultValue;
                    }, true),
                    this.attr("MinDate", "minDateAttr", "MinDate", false, false, OS.DataTypes.DataTypes.Date, function() {
                        return OS.DataTypes.DateTime.defaultValue;
                    }, true),
                    this.attr("MaxDate", "maxDateAttr", "MaxDate", false, false, OS.DataTypes.DataTypes.Date, function() {
                        return OS.DataTypes.DateTime.defaultValue;
                    }, true),
                    this.attr("FirstWeekDay", "firstWeekDayAttr", "FirstWeekDay", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return OutSystemsUIModel.staticEntities.datePickerWeekDay.sunday;
                    }, true),
                    this.attr("ShowWeekNumbers", "showWeekNumbersAttr", "ShowWeekNumbers", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_ba5b17ae5b3fdd9318ea2b4cf18c7d4dStructure = ST_ba5b17ae5b3fdd9318ea2b4cf18c7d4dStructureInner;

        var ST_ba5b17ae5b3fdd9318ea2b4cf18c7d4dStructure = ST_ba5b17ae5b3fdd9318ea2b4cf18c7d4dStructureInner;
        ST_ba5b17ae5b3fdd9318ea2b4cf18c7d4dStructure.init();
    }
});

define("OutSystemsUI.model$RC_310dae2b4d3a1f1ded7570a6ee74f16e", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_ba5b17ae5b3fdd9318ea2b4cf18c7d4dStructure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_310dae2b4d3a1f1ded7570a6ee74f16eInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("DatePickerRangeOptionalConfigs", "datePickerRangeOptionalConfigsAttr", "DatePickerRangeOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_ba5b17ae5b3fdd9318ea2b4cf18c7d4dStructure());
                    }, true, OutSystemsUIModel.ST_ba5b17ae5b3fdd9318ea2b4cf18c7d4dStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_310dae2b4d3a1f1ded7570a6ee74f16e(new RC_310dae2b4d3a1f1ded7570a6ee74f16e.RecordClass({
                    datePickerRangeOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_310dae2b4d3a1f1ded7570a6ee74f16e = RC_310dae2b4d3a1f1ded7570a6ee74f16eInner;

        RC_310dae2b4d3a1f1ded7570a6ee74f16eInner._isAnonymousRecord = true;
        RC_310dae2b4d3a1f1ded7570a6ee74f16eInner.UniqueId = "310dae2b-4d3a-1f1d-ed75-70a6ee74f16e";
        var RC_310dae2b4d3a1f1ded7570a6ee74f16e = RC_310dae2b4d3a1f1ded7570a6ee74f16eInner;
        RC_310dae2b4d3a1f1ded7570a6ee74f16e.init();
    }
});

define("OutSystemsUI.model$ST_34444d0742578c128ebc8b2594439346Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_34444d0742578c128ebc8b2594439346StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("IsDisabled", "isDisabledAttr", "IsDisabled", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("NoResultsText", "noResultsTextAttr", "NoResultsText", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "There are no options to show.";
                    }, true),
                    this.attr("SearchPrompt", "searchPromptAttr", "SearchPrompt", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "Search...";
                    }, true),
                    this.attr("NoOptionsText", "noOptionsTextAttr", "NoOptionsText", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "There are no options to show.";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_34444d0742578c128ebc8b2594439346Structure = ST_34444d0742578c128ebc8b2594439346StructureInner;

        var ST_34444d0742578c128ebc8b2594439346Structure = ST_34444d0742578c128ebc8b2594439346StructureInner;
        ST_34444d0742578c128ebc8b2594439346Structure.init();
    }
});

define("OutSystemsUI.model$RC_4d01ba747615bc6dc01c586f0b43450a", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_34444d0742578c128ebc8b2594439346Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_4d01ba747615bc6dc01c586f0b43450aInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("DropdownTagsOptionalConfigs", "dropdownTagsOptionalConfigsAttr", "DropdownTagsOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_34444d0742578c128ebc8b2594439346Structure());
                    }, true, OutSystemsUIModel.ST_34444d0742578c128ebc8b2594439346Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_4d01ba747615bc6dc01c586f0b43450a(new RC_4d01ba747615bc6dc01c586f0b43450a.RecordClass({
                    dropdownTagsOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_4d01ba747615bc6dc01c586f0b43450a = RC_4d01ba747615bc6dc01c586f0b43450aInner;

        RC_4d01ba747615bc6dc01c586f0b43450aInner._isAnonymousRecord = true;
        RC_4d01ba747615bc6dc01c586f0b43450aInner.UniqueId = "4d01ba74-7615-bc6d-c01c-586f0b43450a";
        var RC_4d01ba747615bc6dc01c586f0b43450a = RC_4d01ba747615bc6dc01c586f0b43450aInner;
        RC_4d01ba747615bc6dc01c586f0b43450a.init();
    }
});

define("OutSystemsUI.model$RL_3168a7a1678dfe8f6720ee5fb1eb68a1", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_4d01ba747615bc6dc01c586f0b43450a"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_3168a7a1678dfe8f6720ee5fb1eb68a1 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_4d01ba747615bc6dc01c586f0b43450a;
        }

    }

    OutSystemsUIModel.RL_3168a7a1678dfe8f6720ee5fb1eb68a1 = RL_3168a7a1678dfe8f6720ee5fb1eb68a1;

});

define("OutSystemsUI.model$ST_bc4abb4233d9ce894e855c520a20c76fStructure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_bc4abb4233d9ce894e855c520a20c76fStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("InitialDate", "initialDateAttr", "InitialDate", false, false, OS.DataTypes.DataTypes.DateTime, function() {
                        return OS.DataTypes.DateTime.defaultValue;
                    }, true),
                    this.attr("MinDate", "minDateAttr", "MinDate", false, false, OS.DataTypes.DataTypes.DateTime, function() {
                        return OS.DataTypes.DateTime.defaultValue;
                    }, true),
                    this.attr("MaxDate", "maxDateAttr", "MaxDate", false, false, OS.DataTypes.DataTypes.DateTime, function() {
                        return OS.DataTypes.DateTime.defaultValue;
                    }, true),
                    this.attr("FirstWeekDay", "firstWeekDayAttr", "FirstWeekDay", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return OutSystemsUIModel.staticEntities.datePickerWeekDay.sunday;
                    }, true),
                    this.attr("ShowWeekNumbers", "showWeekNumbersAttr", "ShowWeekNumbers", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_bc4abb4233d9ce894e855c520a20c76fStructure = ST_bc4abb4233d9ce894e855c520a20c76fStructureInner;

        var ST_bc4abb4233d9ce894e855c520a20c76fStructure = ST_bc4abb4233d9ce894e855c520a20c76fStructureInner;
        ST_bc4abb4233d9ce894e855c520a20c76fStructure.init();
    }
});

define("OutSystemsUI.model$RC_327e36bc408edd046ca40df8a4e734bb", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_bc4abb4233d9ce894e855c520a20c76fStructure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_327e36bc408edd046ca40df8a4e734bbInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("DatePickerOptionalConfigs", "datePickerOptionalConfigsAttr", "DatePickerOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_bc4abb4233d9ce894e855c520a20c76fStructure());
                    }, true, OutSystemsUIModel.ST_bc4abb4233d9ce894e855c520a20c76fStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_327e36bc408edd046ca40df8a4e734bb(new RC_327e36bc408edd046ca40df8a4e734bb.RecordClass({
                    datePickerOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_327e36bc408edd046ca40df8a4e734bb = RC_327e36bc408edd046ca40df8a4e734bbInner;

        RC_327e36bc408edd046ca40df8a4e734bbInner._isAnonymousRecord = true;
        RC_327e36bc408edd046ca40df8a4e734bbInner.UniqueId = "327e36bc-408e-dd04-6ca4-0df8a4e734bb";
        var RC_327e36bc408edd046ca40df8a4e734bb = RC_327e36bc408edd046ca40df8a4e734bbInner;
        RC_327e36bc408edd046ca40df8a4e734bb.init();
    }
});

define("OutSystemsUI.model$ST_6e6632cfd831e4e0f6a401872bea6eccStructure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_6e6632cfd831e4e0f6a401872bea6eccStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("BalloonPosition", "balloonPositionAttr", "Position", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.floatingPosition.auto;
                    }, true),
                    this.attr("BalloonShape", "balloonShapeAttr", "Shape", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.shape.softRounded;
                    }, true),
                    this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_6e6632cfd831e4e0f6a401872bea6eccStructure = ST_6e6632cfd831e4e0f6a401872bea6eccStructureInner;

        var ST_6e6632cfd831e4e0f6a401872bea6eccStructure = ST_6e6632cfd831e4e0f6a401872bea6eccStructureInner;
        ST_6e6632cfd831e4e0f6a401872bea6eccStructure.init();
    }
});

define("OutSystemsUI.model$RC_b12957472059fa384384c2ddc449560e", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_6e6632cfd831e4e0f6a401872bea6eccStructure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_b12957472059fa384384c2ddc449560eInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("OverflowMenu_InternalConfigs", "overflowMenu_InternalConfigsAttr", "OverflowMenu_InternalConfigs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_6e6632cfd831e4e0f6a401872bea6eccStructure());
                    }, true, OutSystemsUIModel.ST_6e6632cfd831e4e0f6a401872bea6eccStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_b12957472059fa384384c2ddc449560e(new RC_b12957472059fa384384c2ddc449560e.RecordClass({
                    overflowMenu_InternalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_b12957472059fa384384c2ddc449560e = RC_b12957472059fa384384c2ddc449560eInner;

        RC_b12957472059fa384384c2ddc449560eInner._isAnonymousRecord = true;
        RC_b12957472059fa384384c2ddc449560eInner.UniqueId = "b1295747-2059-fa38-4384-c2ddc449560e";
        var RC_b12957472059fa384384c2ddc449560e = RC_b12957472059fa384384c2ddc449560eInner;
        RC_b12957472059fa384384c2ddc449560e.init();
    }
});

define("OutSystemsUI.model$RL_32b9c5ca43955ecaca6bde26d91b8bcf", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_b12957472059fa384384c2ddc449560e"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_32b9c5ca43955ecaca6bde26d91b8bcf extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_b12957472059fa384384c2ddc449560e;
        }

    }

    OutSystemsUIModel.RL_32b9c5ca43955ecaca6bde26d91b8bcf = RL_32b9c5ca43955ecaca6bde26d91b8bcf;

});

define("OutSystemsUI.model$RL_331fdaa66f00c258aa64e18fe67ccb9e", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_2fd97622d01b72b1af62467b00f1da8eStructure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_331fdaa66f00c258aa64e18fe67ccb9e extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_2fd97622d01b72b1af62467b00f1da8eStructure;
        }

    }

    OutSystemsUIModel.RL_331fdaa66f00c258aa64e18fe67ccb9e = RL_331fdaa66f00c258aa64e18fe67ccb9e;

});

define("OutSystemsUI.model$EN_92679525739afa328c09890d25f5ac45EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class EN_92679525739afa328c09890d25f5ac45EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_92679525739afa328c09890d25f5ac45EntityRecord(new EN_92679525739afa328c09890d25f5ac45EntityRecord.RecordClass({
                    labelAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.EN_92679525739afa328c09890d25f5ac45EntityRecord = EN_92679525739afa328c09890d25f5ac45EntityRecordInner;

        var EN_92679525739afa328c09890d25f5ac45EntityRecord = EN_92679525739afa328c09890d25f5ac45EntityRecordInner;
        EN_92679525739afa328c09890d25f5ac45EntityRecord.init();
    }
});

define("OutSystemsUI.model$RL_3325417b3e1ae27173e1161b12a2b345", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_92679525739afa328c09890d25f5ac45EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_3325417b3e1ae27173e1161b12a2b345 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.EN_92679525739afa328c09890d25f5ac45EntityRecord;
        }

    }

    OutSystemsUIModel.RL_3325417b3e1ae27173e1161b12a2b345 = RL_3325417b3e1ae27173e1161b12a2b345;

});

define("OutSystemsUI.model$ST_8391f9d0c6b78f74493c47987669deecStructure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_8391f9d0c6b78f74493c47987669deecStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Shape", "shapeAttr", "Shape", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.shape.rounded;
                    }, true),
                    this.attr("AnimateInitialProgress", "animateInitialProgressAttr", "AnimateInitialProgress", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_8391f9d0c6b78f74493c47987669deecStructure = ST_8391f9d0c6b78f74493c47987669deecStructureInner;

        var ST_8391f9d0c6b78f74493c47987669deecStructure = ST_8391f9d0c6b78f74493c47987669deecStructureInner;
        ST_8391f9d0c6b78f74493c47987669deecStructure.init();
    }
});

define("OutSystemsUI.model$RC_3554b1e2806a5b827c457cdecc492d4a", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_8391f9d0c6b78f74493c47987669deecStructure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_3554b1e2806a5b827c457cdecc492d4aInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ProgressBarOptionalConfigs", "progressBarOptionalConfigsAttr", "ProgressBarOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_8391f9d0c6b78f74493c47987669deecStructure());
                    }, true, OutSystemsUIModel.ST_8391f9d0c6b78f74493c47987669deecStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_3554b1e2806a5b827c457cdecc492d4a(new RC_3554b1e2806a5b827c457cdecc492d4a.RecordClass({
                    progressBarOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_3554b1e2806a5b827c457cdecc492d4a = RC_3554b1e2806a5b827c457cdecc492d4aInner;

        RC_3554b1e2806a5b827c457cdecc492d4aInner._isAnonymousRecord = true;
        RC_3554b1e2806a5b827c457cdecc492d4aInner.UniqueId = "3554b1e2-806a-5b82-7c45-7cdecc492d4a";
        var RC_3554b1e2806a5b827c457cdecc492d4a = RC_3554b1e2806a5b827c457cdecc492d4aInner;
        RC_3554b1e2806a5b827c457cdecc492d4a.init();
    }
});

define("OutSystemsUI.model$RC_35ce9df1ad7a89533b2e8a49a8413520", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_35ce9df1ad7a89533b2e8a49a8413520Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Month1", "month1Attr", "Month1", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Month10", "month10Attr", "Month10", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Month11", "month11Attr", "Month11", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Month12", "month12Attr", "Month12", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Month2", "month2Attr", "Month2", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Month3", "month3Attr", "Month3", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Month4", "month4Attr", "Month4", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Month5", "month5Attr", "Month5", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Month6", "month6Attr", "Month6", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Month7", "month7Attr", "Month7", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Month8", "month8Attr", "Month8", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Month9", "month9Attr", "Month9", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.RC_35ce9df1ad7a89533b2e8a49a8413520 = RC_35ce9df1ad7a89533b2e8a49a8413520Inner;

        RC_35ce9df1ad7a89533b2e8a49a8413520Inner._isAnonymousRecord = true;
        RC_35ce9df1ad7a89533b2e8a49a8413520Inner.UniqueId = "35ce9df1-ad7a-8953-3b2e-8a49a8413520";
        var RC_35ce9df1ad7a89533b2e8a49a8413520 = RC_35ce9df1ad7a89533b2e8a49a8413520Inner;
        RC_35ce9df1ad7a89533b2e8a49a8413520.init();
    }
});

define("OutSystemsUI.model$EN_ef2257119ab36e2c35ddd0bb3d7ac544EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class EN_ef2257119ab36e2c35ddd0bb3d7ac544EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ColumnBreak", "columnBreakAttr", "ColumnBreak", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_ef2257119ab36e2c35ddd0bb3d7ac544EntityRecord(new EN_ef2257119ab36e2c35ddd0bb3d7ac544EntityRecord.RecordClass({
                    columnBreakAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.EN_ef2257119ab36e2c35ddd0bb3d7ac544EntityRecord = EN_ef2257119ab36e2c35ddd0bb3d7ac544EntityRecordInner;

        var EN_ef2257119ab36e2c35ddd0bb3d7ac544EntityRecord = EN_ef2257119ab36e2c35ddd0bb3d7ac544EntityRecordInner;
        EN_ef2257119ab36e2c35ddd0bb3d7ac544EntityRecord.init();
    }
});

define("OutSystemsUI.model$RL_362950b7d5d9798e12950648533599a1", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_ef2257119ab36e2c35ddd0bb3d7ac544EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_362950b7d5d9798e12950648533599a1 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.EN_ef2257119ab36e2c35ddd0bb3d7ac544EntityRecord;
        }

    }

    OutSystemsUIModel.RL_362950b7d5d9798e12950648533599a1 = RL_362950b7d5d9798e12950648533599a1;

});

define("OutSystemsUI.model$EN_3693d4da8f8fc784e4048b7b08e34c39EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class EN_3693d4da8f8fc784e4048b7b08e34c39EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Provider", "providerAttr", "Provider", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_3693d4da8f8fc784e4048b7b08e34c39EntityRecord(new EN_3693d4da8f8fc784e4048b7b08e34c39EntityRecord.RecordClass({
                    providerAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.EN_3693d4da8f8fc784e4048b7b08e34c39EntityRecord = EN_3693d4da8f8fc784e4048b7b08e34c39EntityRecordInner;

        var EN_3693d4da8f8fc784e4048b7b08e34c39EntityRecord = EN_3693d4da8f8fc784e4048b7b08e34c39EntityRecordInner;
        EN_3693d4da8f8fc784e4048b7b08e34c39EntityRecord.init();
    }
});

define("OutSystemsUI.model$EN_59aacee1cb91627a0f497366b24e4500EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class EN_59aacee1cb91627a0f497366b24e4500EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Type", "typeAttr", "Type", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_59aacee1cb91627a0f497366b24e4500EntityRecord(new EN_59aacee1cb91627a0f497366b24e4500EntityRecord.RecordClass({
                    typeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.EN_59aacee1cb91627a0f497366b24e4500EntityRecord = EN_59aacee1cb91627a0f497366b24e4500EntityRecordInner;

        var EN_59aacee1cb91627a0f497366b24e4500EntityRecord = EN_59aacee1cb91627a0f497366b24e4500EntityRecordInner;
        EN_59aacee1cb91627a0f497366b24e4500EntityRecord.init();
    }
});

define("OutSystemsUI.model$RC_373fec8a2329a8b1ecd55cf717893131", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_59aacee1cb91627a0f497366b24e4500EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_373fec8a2329a8b1ecd55cf717893131Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("CarouselNavigation", "carouselNavigationAttr", "CarouselNavigation", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_59aacee1cb91627a0f497366b24e4500EntityRecord());
                    }, true, OutSystemsUIModel.EN_59aacee1cb91627a0f497366b24e4500EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_373fec8a2329a8b1ecd55cf717893131(new RC_373fec8a2329a8b1ecd55cf717893131.RecordClass({
                    carouselNavigationAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_373fec8a2329a8b1ecd55cf717893131 = RC_373fec8a2329a8b1ecd55cf717893131Inner;

        RC_373fec8a2329a8b1ecd55cf717893131Inner._isAnonymousRecord = true;
        RC_373fec8a2329a8b1ecd55cf717893131Inner.UniqueId = "373fec8a-2329-a8b1-ecd5-5cf717893131";
        var RC_373fec8a2329a8b1ecd55cf717893131 = RC_373fec8a2329a8b1ecd55cf717893131Inner;
        RC_373fec8a2329a8b1ecd55cf717893131.init();
    }
});

define("OutSystemsUI.model$EN_3a1bf32d2ff94c720f1efbdad7281777EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class EN_3a1bf32d2ff94c720f1efbdad7281777EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Provider", "providerAttr", "Provider", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_3a1bf32d2ff94c720f1efbdad7281777EntityRecord(new EN_3a1bf32d2ff94c720f1efbdad7281777EntityRecord.RecordClass({
                    providerAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.EN_3a1bf32d2ff94c720f1efbdad7281777EntityRecord = EN_3a1bf32d2ff94c720f1efbdad7281777EntityRecordInner;

        var EN_3a1bf32d2ff94c720f1efbdad7281777EntityRecord = EN_3a1bf32d2ff94c720f1efbdad7281777EntityRecordInner;
        EN_3a1bf32d2ff94c720f1efbdad7281777EntityRecord.init();
    }
});

define("OutSystemsUI.model$ST_cd3e064c4ee8b37ab96945c09d5d2155Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_cd3e064c4ee8b37ab96945c09d5d2155StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("DateFormat", "dateFormatAttr", "DateFormat", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("InitialDate", "initialDateAttr", "InitialDate", false, false, OS.DataTypes.DataTypes.DateTime, function() {
                        return OS.DataTypes.DateTime.defaultValue;
                    }, true),
                    this.attr("TimeFormat", "timeFormatAttr", "TimeFormat", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.datePickerTimeFormat.disabled;
                    }, true),
                    this.attr("ShowTodayButton", "showTodayButtonAttr", "ShowTodayButton", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("FirstWeekDay", "firstWeekDayAttr", "FirstWeekDay", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return OutSystemsUIModel.staticEntities.datePickerWeekDay.sunday;
                    }, true),
                    this.attr("MinDate", "minDateAttr", "MinDate", false, false, OS.DataTypes.DataTypes.DateTime, function() {
                        return OS.DataTypes.DateTime.defaultValue;
                    }, true),
                    this.attr("MaxDate", "maxDateAttr", "MaxDate", false, false, OS.DataTypes.DataTypes.DateTime, function() {
                        return OS.DataTypes.DateTime.defaultValue;
                    }, true),
                    this.attr("ShowWeekNumbers", "showWeekNumbersAttr", "ShowWeekNumbers", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_cd3e064c4ee8b37ab96945c09d5d2155Structure = ST_cd3e064c4ee8b37ab96945c09d5d2155StructureInner;

        var ST_cd3e064c4ee8b37ab96945c09d5d2155Structure = ST_cd3e064c4ee8b37ab96945c09d5d2155StructureInner;
        ST_cd3e064c4ee8b37ab96945c09d5d2155Structure.init();
    }
});

define("OutSystemsUI.model$RC_3af5daa8009f6f7f8a09f38255a62078", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_cd3e064c4ee8b37ab96945c09d5d2155Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_3af5daa8009f6f7f8a09f38255a62078Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("DatePicker_InternalConfig", "datePicker_InternalConfigAttr", "DatePicker_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_cd3e064c4ee8b37ab96945c09d5d2155Structure());
                    }, true, OutSystemsUIModel.ST_cd3e064c4ee8b37ab96945c09d5d2155Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_3af5daa8009f6f7f8a09f38255a62078(new RC_3af5daa8009f6f7f8a09f38255a62078.RecordClass({
                    datePicker_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_3af5daa8009f6f7f8a09f38255a62078 = RC_3af5daa8009f6f7f8a09f38255a62078Inner;

        RC_3af5daa8009f6f7f8a09f38255a62078Inner._isAnonymousRecord = true;
        RC_3af5daa8009f6f7f8a09f38255a62078Inner.UniqueId = "3af5daa8-009f-6f7f-8a09-f38255a62078";
        var RC_3af5daa8009f6f7f8a09f38255a62078 = RC_3af5daa8009f6f7f8a09f38255a62078Inner;
        RC_3af5daa8009f6f7f8a09f38255a62078.init();
    }
});

define("OutSystemsUI.model$EN_f9178b4aae1879ea388b92402c64db4cEntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class EN_f9178b4aae1879ea388b92402c64db4cEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Provider", "providerAttr", "Provider", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_f9178b4aae1879ea388b92402c64db4cEntityRecord(new EN_f9178b4aae1879ea388b92402c64db4cEntityRecord.RecordClass({
                    providerAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.EN_f9178b4aae1879ea388b92402c64db4cEntityRecord = EN_f9178b4aae1879ea388b92402c64db4cEntityRecordInner;

        var EN_f9178b4aae1879ea388b92402c64db4cEntityRecord = EN_f9178b4aae1879ea388b92402c64db4cEntityRecordInner;
        EN_f9178b4aae1879ea388b92402c64db4cEntityRecord.init();
    }
});

define("OutSystemsUI.model$RC_3bbfc6c91fcd8a2dd97847564be30682", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_f9178b4aae1879ea388b92402c64db4cEntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_3bbfc6c91fcd8a2dd97847564be30682Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("IdentityProvider", "identityProviderAttr", "IdentityProvider", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_f9178b4aae1879ea388b92402c64db4cEntityRecord());
                    }, true, OutSystemsUIModel.EN_f9178b4aae1879ea388b92402c64db4cEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_3bbfc6c91fcd8a2dd97847564be30682(new RC_3bbfc6c91fcd8a2dd97847564be30682.RecordClass({
                    identityProviderAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_3bbfc6c91fcd8a2dd97847564be30682 = RC_3bbfc6c91fcd8a2dd97847564be30682Inner;

        RC_3bbfc6c91fcd8a2dd97847564be30682Inner._isAnonymousRecord = true;
        RC_3bbfc6c91fcd8a2dd97847564be30682Inner.UniqueId = "3bbfc6c9-1fcd-8a2d-d978-47564be30682";
        var RC_3bbfc6c91fcd8a2dd97847564be30682 = RC_3bbfc6c91fcd8a2dd97847564be30682Inner;
        RC_3bbfc6c91fcd8a2dd97847564be30682.init();
    }
});

define("OutSystemsUI.model$EN_d383eada98ae47b51248dfe934bb4fabEntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class EN_d383eada98ae47b51248dfe934bb4fabEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Color", "colorAttr", "Color", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_d383eada98ae47b51248dfe934bb4fabEntityRecord(new EN_d383eada98ae47b51248dfe934bb4fabEntityRecord.RecordClass({
                    colorAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.EN_d383eada98ae47b51248dfe934bb4fabEntityRecord = EN_d383eada98ae47b51248dfe934bb4fabEntityRecordInner;

        var EN_d383eada98ae47b51248dfe934bb4fabEntityRecord = EN_d383eada98ae47b51248dfe934bb4fabEntityRecordInner;
        EN_d383eada98ae47b51248dfe934bb4fabEntityRecord.init();
    }
});

define("OutSystemsUI.model$RL_3be527befbeca9c3042c1440ecab7d56", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_d383eada98ae47b51248dfe934bb4fabEntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_3be527befbeca9c3042c1440ecab7d56 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.EN_d383eada98ae47b51248dfe934bb4fabEntityRecord;
        }

    }

    OutSystemsUIModel.RL_3be527befbeca9c3042c1440ecab7d56 = RL_3be527befbeca9c3042c1440ecab7d56;

});

define("OutSystemsUI.model$ST_3cb059eb7f6ed8c9a730f87011d5c0e0Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_3cb059eb7f6ed8c9a730f87011d5c0e0StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Value", "valueAttr", "Value", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Text", "textAttr", "Text", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_3cb059eb7f6ed8c9a730f87011d5c0e0Structure = ST_3cb059eb7f6ed8c9a730f87011d5c0e0StructureInner;

        var ST_3cb059eb7f6ed8c9a730f87011d5c0e0Structure = ST_3cb059eb7f6ed8c9a730f87011d5c0e0StructureInner;
        ST_3cb059eb7f6ed8c9a730f87011d5c0e0Structure.init();
    }
});

define("OutSystemsUI.model$RL_3cfea1a1e933b75750f570ea368d3da2", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_8391f9d0c6b78f74493c47987669deecStructure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_3cfea1a1e933b75750f570ea368d3da2 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_8391f9d0c6b78f74493c47987669deecStructure;
        }

    }

    OutSystemsUIModel.RL_3cfea1a1e933b75750f570ea368d3da2 = RL_3cfea1a1e933b75750f570ea368d3da2;

});

define("OutSystemsUI.model$RC_3d7c5be4055c8fe2c227afc40d8dee2f", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_1967a79b0bc6b1bdc38ff87eefe0b127EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_3d7c5be4055c8fe2c227afc40d8dee2fInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ScrollbarStyle", "scrollbarStyleAttr", "ScrollbarStyle", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_1967a79b0bc6b1bdc38ff87eefe0b127EntityRecord());
                    }, true, OutSystemsUIModel.EN_1967a79b0bc6b1bdc38ff87eefe0b127EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_3d7c5be4055c8fe2c227afc40d8dee2f(new RC_3d7c5be4055c8fe2c227afc40d8dee2f.RecordClass({
                    scrollbarStyleAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_3d7c5be4055c8fe2c227afc40d8dee2f = RC_3d7c5be4055c8fe2c227afc40d8dee2fInner;

        RC_3d7c5be4055c8fe2c227afc40d8dee2fInner._isAnonymousRecord = true;
        RC_3d7c5be4055c8fe2c227afc40d8dee2fInner.UniqueId = "3d7c5be4-055c-8fe2-c227-afc40d8dee2f";
        var RC_3d7c5be4055c8fe2c227afc40d8dee2f = RC_3d7c5be4055c8fe2c227afc40d8dee2fInner;
        RC_3d7c5be4055c8fe2c227afc40d8dee2f.init();
    }
});

define("OutSystemsUI.model$ST_8ccec918bf91fdb79e42a7e1e178b4beStructure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_8ccec918bf91fdb79e42a7e1e178b4beStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_8ccec918bf91fdb79e42a7e1e178b4beStructure = ST_8ccec918bf91fdb79e42a7e1e178b4beStructureInner;

        var ST_8ccec918bf91fdb79e42a7e1e178b4beStructure = ST_8ccec918bf91fdb79e42a7e1e178b4beStructureInner;
        ST_8ccec918bf91fdb79e42a7e1e178b4beStructure.init();
    }
});

define("OutSystemsUI.model$RC_3dc2f7b3c292c64f7476a99f4086df98", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_8ccec918bf91fdb79e42a7e1e178b4beStructure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_3dc2f7b3c292c64f7476a99f4086df98Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Search_InternalConfig", "search_InternalConfigAttr", "Search_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_8ccec918bf91fdb79e42a7e1e178b4beStructure());
                    }, true, OutSystemsUIModel.ST_8ccec918bf91fdb79e42a7e1e178b4beStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_3dc2f7b3c292c64f7476a99f4086df98(new RC_3dc2f7b3c292c64f7476a99f4086df98.RecordClass({
                    search_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_3dc2f7b3c292c64f7476a99f4086df98 = RC_3dc2f7b3c292c64f7476a99f4086df98Inner;

        RC_3dc2f7b3c292c64f7476a99f4086df98Inner._isAnonymousRecord = true;
        RC_3dc2f7b3c292c64f7476a99f4086df98Inner.UniqueId = "3dc2f7b3-c292-c64f-7476-a99f4086df98";
        var RC_3dc2f7b3c292c64f7476a99f4086df98 = RC_3dc2f7b3c292c64f7476a99f4086df98Inner;
        RC_3dc2f7b3c292c64f7476a99f4086df98.init();
    }
});

define("OutSystemsUI.model$RC_3e7155b32546681d96eaaf8aa39a4f6e", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_235f8a24bba710c13f14db6b69a566bbStructure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_3e7155b32546681d96eaaf8aa39a4f6eInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Tabs_InternalConfig", "tabs_InternalConfigAttr", "Tabs_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_235f8a24bba710c13f14db6b69a566bbStructure());
                    }, true, OutSystemsUIModel.ST_235f8a24bba710c13f14db6b69a566bbStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_3e7155b32546681d96eaaf8aa39a4f6e(new RC_3e7155b32546681d96eaaf8aa39a4f6e.RecordClass({
                    tabs_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_3e7155b32546681d96eaaf8aa39a4f6e = RC_3e7155b32546681d96eaaf8aa39a4f6eInner;

        RC_3e7155b32546681d96eaaf8aa39a4f6eInner._isAnonymousRecord = true;
        RC_3e7155b32546681d96eaaf8aa39a4f6eInner.UniqueId = "3e7155b3-2546-681d-96ea-af8aa39a4f6e";
        var RC_3e7155b32546681d96eaaf8aa39a4f6e = RC_3e7155b32546681d96eaaf8aa39a4f6eInner;
        RC_3e7155b32546681d96eaaf8aa39a4f6e.init();
    }
});

define("OutSystemsUI.model$EN_f318de02ad2d00bca70ecb5d73f27ec9EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class EN_f318de02ad2d00bca70ecb5d73f27ec9EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Type", "typeAttr", "Type", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_f318de02ad2d00bca70ecb5d73f27ec9EntityRecord(new EN_f318de02ad2d00bca70ecb5d73f27ec9EntityRecord.RecordClass({
                    typeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.EN_f318de02ad2d00bca70ecb5d73f27ec9EntityRecord = EN_f318de02ad2d00bca70ecb5d73f27ec9EntityRecordInner;

        var EN_f318de02ad2d00bca70ecb5d73f27ec9EntityRecord = EN_f318de02ad2d00bca70ecb5d73f27ec9EntityRecordInner;
        EN_f318de02ad2d00bca70ecb5d73f27ec9EntityRecord.init();
    }
});

define("OutSystemsUI.model$RC_3f6426aeecbfa4af19e279847df746cc", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_f318de02ad2d00bca70ecb5d73f27ec9EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_3f6426aeecbfa4af19e279847df746ccInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Gradient", "gradientAttr", "Gradient", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_f318de02ad2d00bca70ecb5d73f27ec9EntityRecord());
                    }, true, OutSystemsUIModel.EN_f318de02ad2d00bca70ecb5d73f27ec9EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_3f6426aeecbfa4af19e279847df746cc(new RC_3f6426aeecbfa4af19e279847df746cc.RecordClass({
                    gradientAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_3f6426aeecbfa4af19e279847df746cc = RC_3f6426aeecbfa4af19e279847df746ccInner;

        RC_3f6426aeecbfa4af19e279847df746ccInner._isAnonymousRecord = true;
        RC_3f6426aeecbfa4af19e279847df746ccInner.UniqueId = "3f6426ae-ecbf-a4af-19e2-79847df746cc";
        var RC_3f6426aeecbfa4af19e279847df746cc = RC_3f6426aeecbfa4af19e279847df746ccInner;
        RC_3f6426aeecbfa4af19e279847df746cc.init();
    }
});

define("OutSystemsUI.model$RC_3fbb4babd0ba48852fecc04be37d3c0e", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_841c1f1485f51831db9f4b37a6d551d5Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_3fbb4babd0ba48852fecc04be37d3c0eInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("NoUiSliderConfigs_Range", "noUiSliderConfigs_RangeAttr", "NoUiSliderConfigs_Range", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_841c1f1485f51831db9f4b37a6d551d5Structure());
                    }, true, OutSystemsUIModel.ST_841c1f1485f51831db9f4b37a6d551d5Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_3fbb4babd0ba48852fecc04be37d3c0e(new RC_3fbb4babd0ba48852fecc04be37d3c0e.RecordClass({
                    noUiSliderConfigs_RangeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_3fbb4babd0ba48852fecc04be37d3c0e = RC_3fbb4babd0ba48852fecc04be37d3c0eInner;

        RC_3fbb4babd0ba48852fecc04be37d3c0eInner._isAnonymousRecord = true;
        RC_3fbb4babd0ba48852fecc04be37d3c0eInner.UniqueId = "3fbb4bab-d0ba-4885-2fec-c04be37d3c0e";
        var RC_3fbb4babd0ba48852fecc04be37d3c0e = RC_3fbb4babd0ba48852fecc04be37d3c0eInner;
        RC_3fbb4babd0ba48852fecc04be37d3c0e.init();
    }
});

define("OutSystemsUI.model$ST_3fe78d74e319e2ce842fd51dd2d67caaStructure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_3fe78d74e319e2ce842fd51dd2d67caaStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("role", "roleAttr", "role", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("label", "labelAttr", "label", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("labelledby", "labelledbyAttr", "labelledby", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("rewind", "rewindAttr", "rewind", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.booleanTypes.unset;
                    }, true),
                    this.attr("speed", "speedAttr", "speed", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("rewindSpeed", "rewindSpeedAttr", "rewindSpeed", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("rewindByDrag", "rewindByDragAttr", "rewindByDrag", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.booleanTypes.unset;
                    }, true),
                    this.attr("width", "widthAttr", "width", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("fixedWidth", "fixedWidthAttr", "fixedWidth", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("fixedHeight", "fixedHeightAttr", "fixedHeight", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("autoWidth", "autoWidthAttr", "autoWidth", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.booleanTypes.unset;
                    }, true),
                    this.attr("perMove", "perMoveAttr", "perMove", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("clones", "clonesAttr", "clones", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("cloneStatus", "cloneStatusAttr", "cloneStatus", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.booleanTypes.unset;
                    }, true),
                    this.attr("paginationDirection", "paginationDirectionAttr", "paginationDirection", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("easing", "easingAttr", "easing", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("noDrag", "noDragAttr", "noDrag", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("flickPower", "flickPowerAttr", "flickPower", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("flickMaxPages", "flickMaxPagesAttr", "flickMaxPages", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("waitForTransition", "waitForTransitionAttr", "waitForTransition", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.booleanTypes.unset;
                    }, true),
                    this.attr("arrowPath", "arrowPathAttr", "arrowPath", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("interval", "intervalAttr", "interval", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("pauseOnHover", "pauseOnHoverAttr", "pauseOnHover", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.booleanTypes.unset;
                    }, true),
                    this.attr("pauseOnFocus", "pauseOnFocusAttr", "pauseOnFocus", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.booleanTypes.unset;
                    }, true),
                    this.attr("resetProgress", "resetProgressAttr", "resetProgress", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.booleanTypes.unset;
                    }, true),
                    this.attr("lazyLoad", "lazyLoadAttr", "lazyLoad", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("preloadPages", "preloadPagesAttr", "preloadPages", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("wheel", "wheelAttr", "wheel", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.booleanTypes.unset;
                    }, true),
                    this.attr("wheelMinThreshold", "wheelMinThresholdAttr", "wheelMinThreshold", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("wheelSleep", "wheelSleepAttr", "wheelSleep", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("releaseWheel", "releaseWheelAttr", "releaseWheel", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.booleanTypes.unset;
                    }, true),
                    this.attr("slideFocus", "slideFocusAttr", "slideFocus", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.booleanTypes.unset;
                    }, true),
                    this.attr("focusableNodes", "focusableNodesAttr", "focusableNodes", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("isNavigation", "isNavigationAttr", "isNavigation", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.booleanTypes.unset;
                    }, true),
                    this.attr("trimSpace", "trimSpaceAttr", "trimSpace", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("updateOnMove", "updateOnMoveAttr", "updateOnMove", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.booleanTypes.unset;
                    }, true),
                    this.attr("mediaQuery", "mediaQueryAttr", "mediaQuery", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("live", "liveAttr", "live", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.booleanTypes.unset;
                    }, true),
                    this.attr("destroy", "destroyAttr", "destroy", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("omitEnd", "omitEndAttr", "omitEnd", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.booleanTypes.unset;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_3fe78d74e319e2ce842fd51dd2d67caaStructure = ST_3fe78d74e319e2ce842fd51dd2d67caaStructureInner;

        var ST_3fe78d74e319e2ce842fd51dd2d67caaStructure = ST_3fe78d74e319e2ce842fd51dd2d67caaStructureInner;
        ST_3fe78d74e319e2ce842fd51dd2d67caaStructure.init();
    }
});

define("OutSystemsUI.model$ST_7d99fd1de65649f174aff6854b052539Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_7d99fd1de65649f174aff6854b052539StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("AutoPlay", "autoPlayAttr", "AutoPlay", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, true),
                    this.attr("Loop", "loopAttr", "Loop", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, true),
                    this.attr("Padding", "paddingAttr", "Padding", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ItemsGap", "itemsGapAttr", "ItemsGap", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("StartingPosition", "startingPositionAttr", "StartingPosition", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_7d99fd1de65649f174aff6854b052539Structure = ST_7d99fd1de65649f174aff6854b052539StructureInner;

        var ST_7d99fd1de65649f174aff6854b052539Structure = ST_7d99fd1de65649f174aff6854b052539StructureInner;
        ST_7d99fd1de65649f174aff6854b052539Structure.init();
    }
});

define("OutSystemsUI.model$RC_4028c83435ff8f3fa19c27e5a3252dd5", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_7d99fd1de65649f174aff6854b052539Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_4028c83435ff8f3fa19c27e5a3252dd5Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("CarouselOptionalConfigs", "carouselOptionalConfigsAttr", "CarouselOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_7d99fd1de65649f174aff6854b052539Structure());
                    }, true, OutSystemsUIModel.ST_7d99fd1de65649f174aff6854b052539Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_4028c83435ff8f3fa19c27e5a3252dd5(new RC_4028c83435ff8f3fa19c27e5a3252dd5.RecordClass({
                    carouselOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_4028c83435ff8f3fa19c27e5a3252dd5 = RC_4028c83435ff8f3fa19c27e5a3252dd5Inner;

        RC_4028c83435ff8f3fa19c27e5a3252dd5Inner._isAnonymousRecord = true;
        RC_4028c83435ff8f3fa19c27e5a3252dd5Inner.UniqueId = "4028c834-35ff-8f3f-a19c-27e5a3252dd5";
        var RC_4028c83435ff8f3fa19c27e5a3252dd5 = RC_4028c83435ff8f3fa19c27e5a3252dd5Inner;
        RC_4028c83435ff8f3fa19c27e5a3252dd5.init();
    }
});

define("OutSystemsUI.model$RC_40ff37b8719fa708a2bb67c839d296b2", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_52888c3e6f33b11b7d6288dd268a26dcStructure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_40ff37b8719fa708a2bb67c839d296b2Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("AnimatedLabel_InternalConfig", "animatedLabel_InternalConfigAttr", "AnimatedLabel_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_52888c3e6f33b11b7d6288dd268a26dcStructure());
                    }, true, OutSystemsUIModel.ST_52888c3e6f33b11b7d6288dd268a26dcStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_40ff37b8719fa708a2bb67c839d296b2(new RC_40ff37b8719fa708a2bb67c839d296b2.RecordClass({
                    animatedLabel_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_40ff37b8719fa708a2bb67c839d296b2 = RC_40ff37b8719fa708a2bb67c839d296b2Inner;

        RC_40ff37b8719fa708a2bb67c839d296b2Inner._isAnonymousRecord = true;
        RC_40ff37b8719fa708a2bb67c839d296b2Inner.UniqueId = "40ff37b8-719f-a708-a2bb-67c839d296b2";
        var RC_40ff37b8719fa708a2bb67c839d296b2 = RC_40ff37b8719fa708a2bb67c839d296b2Inner;
        RC_40ff37b8719fa708a2bb67c839d296b2.init();
    }
});

define("OutSystemsUI.model$RC_bbab5f70da1d7251909f44ce9efe20fa", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_bbab5f70da1d7251909f44ce9efe20faInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("WeekdayShort1", "weekdayShort1Attr", "WeekdayShort1", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("WeekdayShort2", "weekdayShort2Attr", "WeekdayShort2", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("WeekdayShort3", "weekdayShort3Attr", "WeekdayShort3", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("WeekdayShort4", "weekdayShort4Attr", "WeekdayShort4", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("WeekdayShort5", "weekdayShort5Attr", "WeekdayShort5", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("WeekdayShort6", "weekdayShort6Attr", "WeekdayShort6", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("WeekdayShort7", "weekdayShort7Attr", "WeekdayShort7", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.RC_bbab5f70da1d7251909f44ce9efe20fa = RC_bbab5f70da1d7251909f44ce9efe20faInner;

        RC_bbab5f70da1d7251909f44ce9efe20faInner._isAnonymousRecord = true;
        RC_bbab5f70da1d7251909f44ce9efe20faInner.UniqueId = "bbab5f70-da1d-7251-909f-44ce9efe20fa";
        var RC_bbab5f70da1d7251909f44ce9efe20fa = RC_bbab5f70da1d7251909f44ce9efe20faInner;
        RC_bbab5f70da1d7251909f44ce9efe20fa.init();
    }
});

define("OutSystemsUI.model$RL_4260c6c2a6b32d80f4d763c795bd8980", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_bbab5f70da1d7251909f44ce9efe20fa"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_4260c6c2a6b32d80f4d763c795bd8980 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_bbab5f70da1d7251909f44ce9efe20fa;
        }

    }

    OutSystemsUIModel.RL_4260c6c2a6b32d80f4d763c795bd8980 = RL_4260c6c2a6b32d80f4d763c795bd8980;

});

define("OutSystemsUI.model$RL_43d8e9ecdc8162bbe976ff0cc1fbc6e4", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_0832b315fa435e0ff97aca2a0ca6bd44"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_43d8e9ecdc8162bbe976ff0cc1fbc6e4 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_0832b315fa435e0ff97aca2a0ca6bd44;
        }

    }

    OutSystemsUIModel.RL_43d8e9ecdc8162bbe976ff0cc1fbc6e4 = RL_43d8e9ecdc8162bbe976ff0cc1fbc6e4;

});

define("OutSystemsUI.model$RL_4438108cb3e8b9ed9e8aaff799663860", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_75c9c074bd528ecee8df4d2a3299b5a1EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_4438108cb3e8b9ed9e8aaff799663860 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.EN_75c9c074bd528ecee8df4d2a3299b5a1EntityRecord;
        }

    }

    OutSystemsUIModel.RL_4438108cb3e8b9ed9e8aaff799663860 = RL_4438108cb3e8b9ed9e8aaff799663860;

});

define("OutSystemsUI.model$EN_f0a0dc1163bf03e1d7bb0d253808f956EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class EN_f0a0dc1163bf03e1d7bb0d253808f956EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_f0a0dc1163bf03e1d7bb0d253808f956EntityRecord(new EN_f0a0dc1163bf03e1d7bb0d253808f956EntityRecord.RecordClass({
                    idAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.EN_f0a0dc1163bf03e1d7bb0d253808f956EntityRecord = EN_f0a0dc1163bf03e1d7bb0d253808f956EntityRecordInner;

        var EN_f0a0dc1163bf03e1d7bb0d253808f956EntityRecord = EN_f0a0dc1163bf03e1d7bb0d253808f956EntityRecordInner;
        EN_f0a0dc1163bf03e1d7bb0d253808f956EntityRecord.init();
    }
});

define("OutSystemsUI.model$RC_73fae6920f82113320dccc89ef073c01", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_f0a0dc1163bf03e1d7bb0d253808f956EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_73fae6920f82113320dccc89ef073c01Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("AccordionIconType", "accordionIconTypeAttr", "AccordionIconType", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_f0a0dc1163bf03e1d7bb0d253808f956EntityRecord());
                    }, true, OutSystemsUIModel.EN_f0a0dc1163bf03e1d7bb0d253808f956EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_73fae6920f82113320dccc89ef073c01(new RC_73fae6920f82113320dccc89ef073c01.RecordClass({
                    accordionIconTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_73fae6920f82113320dccc89ef073c01 = RC_73fae6920f82113320dccc89ef073c01Inner;

        RC_73fae6920f82113320dccc89ef073c01Inner._isAnonymousRecord = true;
        RC_73fae6920f82113320dccc89ef073c01Inner.UniqueId = "73fae692-0f82-1133-20dc-cc89ef073c01";
        var RC_73fae6920f82113320dccc89ef073c01 = RC_73fae6920f82113320dccc89ef073c01Inner;
        RC_73fae6920f82113320dccc89ef073c01.init();
    }
});

define("OutSystemsUI.model$RL_452bae0381b3504e486b471d2123e658", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_73fae6920f82113320dccc89ef073c01"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_452bae0381b3504e486b471d2123e658 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_73fae6920f82113320dccc89ef073c01;
        }

    }

    OutSystemsUIModel.RL_452bae0381b3504e486b471d2123e658 = RL_452bae0381b3504e486b471d2123e658;

});

define("OutSystemsUI.model$RC_45a33caf5ebb3dedd109c21fe6ae3d86", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_b247924e01b5d93a7cb0164b4482d4b5EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_45a33caf5ebb3dedd109c21fe6ae3d86Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("RangeSliderProvider", "rangeSliderProviderAttr", "RangeSliderProvider", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_b247924e01b5d93a7cb0164b4482d4b5EntityRecord());
                    }, true, OutSystemsUIModel.EN_b247924e01b5d93a7cb0164b4482d4b5EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_45a33caf5ebb3dedd109c21fe6ae3d86(new RC_45a33caf5ebb3dedd109c21fe6ae3d86.RecordClass({
                    rangeSliderProviderAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_45a33caf5ebb3dedd109c21fe6ae3d86 = RC_45a33caf5ebb3dedd109c21fe6ae3d86Inner;

        RC_45a33caf5ebb3dedd109c21fe6ae3d86Inner._isAnonymousRecord = true;
        RC_45a33caf5ebb3dedd109c21fe6ae3d86Inner.UniqueId = "45a33caf-5ebb-3ded-d109-c21fe6ae3d86";
        var RC_45a33caf5ebb3dedd109c21fe6ae3d86 = RC_45a33caf5ebb3dedd109c21fe6ae3d86Inner;
        RC_45a33caf5ebb3dedd109c21fe6ae3d86.init();
    }
});

define("OutSystemsUI.model$RL_4645896d20bae069726fdb473c154d2d", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_2ac88c51f2d9ed908454e6a06ffe188e"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_4645896d20bae069726fdb473c154d2d extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_2ac88c51f2d9ed908454e6a06ffe188e;
        }

    }

    OutSystemsUIModel.RL_4645896d20bae069726fdb473c154d2d = RL_4645896d20bae069726fdb473c154d2d;

});

define("OutSystemsUI.model$ST_46bd5f77d899939eaf145ae01d3efd6bStructure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_46bd5f77d899939eaf145ae01d3efd6bStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("StartsOpen", "startsOpenAttr", "StartsOpen", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Position", "positionAttr", "Position", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Width", "widthAttr", "Width", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("CloseAfterTime", "closeAfterTimeAttr", "CloseAfterTime", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("InteractToClose", "interactToCloseAttr", "InteractToClose", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_46bd5f77d899939eaf145ae01d3efd6bStructure = ST_46bd5f77d899939eaf145ae01d3efd6bStructureInner;

        var ST_46bd5f77d899939eaf145ae01d3efd6bStructure = ST_46bd5f77d899939eaf145ae01d3efd6bStructureInner;
        ST_46bd5f77d899939eaf145ae01d3efd6bStructure.init();
    }
});

define("OutSystemsUI.model$RL_478659cf4d50eb426ae425e9399ed35f", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_b7d405ca4407e572da091e54d07e3bd1Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_478659cf4d50eb426ae425e9399ed35f extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_b7d405ca4407e572da091e54d07e3bd1Structure;
        }

    }

    OutSystemsUIModel.RL_478659cf4d50eb426ae425e9399ed35f = RL_478659cf4d50eb426ae425e9399ed35f;

});

define("OutSystemsUI.model$RC_f3c2b7b3f72abb115f72c934f4368624", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_14b00646f6cd842655571448758d0a23Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_f3c2b7b3f72abb115f72c934f4368624Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("FlatpickrConfigs", "flatpickrConfigsAttr", "FlatpickrConfigs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_14b00646f6cd842655571448758d0a23Structure());
                    }, true, OutSystemsUIModel.ST_14b00646f6cd842655571448758d0a23Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_f3c2b7b3f72abb115f72c934f4368624(new RC_f3c2b7b3f72abb115f72c934f4368624.RecordClass({
                    flatpickrConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_f3c2b7b3f72abb115f72c934f4368624 = RC_f3c2b7b3f72abb115f72c934f4368624Inner;

        RC_f3c2b7b3f72abb115f72c934f4368624Inner._isAnonymousRecord = true;
        RC_f3c2b7b3f72abb115f72c934f4368624Inner.UniqueId = "f3c2b7b3-f72a-bb11-5f72-c934f4368624";
        var RC_f3c2b7b3f72abb115f72c934f4368624 = RC_f3c2b7b3f72abb115f72c934f4368624Inner;
        RC_f3c2b7b3f72abb115f72c934f4368624.init();
    }
});

define("OutSystemsUI.model$RL_47cfc8da94abd6a57dcb42f40bcbe06e", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_f3c2b7b3f72abb115f72c934f4368624"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_47cfc8da94abd6a57dcb42f40bcbe06e extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_f3c2b7b3f72abb115f72c934f4368624;
        }

    }

    OutSystemsUIModel.RL_47cfc8da94abd6a57dcb42f40bcbe06e = RL_47cfc8da94abd6a57dcb42f40bcbe06e;

});

define("OutSystemsUI.model$RC_4835a3b0a2d4ab28e154f8a8831a00ef", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_5c08eaa15b890a2d617cabe547c34f0bStructure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_4835a3b0a2d4ab28e154f8a8831a00efInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("MonthYear", "monthYearAttr", "MonthYear", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_5c08eaa15b890a2d617cabe547c34f0bStructure());
                    }, true, OutSystemsUIModel.ST_5c08eaa15b890a2d617cabe547c34f0bStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_4835a3b0a2d4ab28e154f8a8831a00ef(new RC_4835a3b0a2d4ab28e154f8a8831a00ef.RecordClass({
                    monthYearAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_4835a3b0a2d4ab28e154f8a8831a00ef = RC_4835a3b0a2d4ab28e154f8a8831a00efInner;

        RC_4835a3b0a2d4ab28e154f8a8831a00efInner._isAnonymousRecord = true;
        RC_4835a3b0a2d4ab28e154f8a8831a00efInner.UniqueId = "4835a3b0-a2d4-ab28-e154-f8a8831a00ef";
        var RC_4835a3b0a2d4ab28e154f8a8831a00ef = RC_4835a3b0a2d4ab28e154f8a8831a00efInner;
        RC_4835a3b0a2d4ab28e154f8a8831a00ef.init();
    }
});

define("OutSystemsUI.model$RC_486a35159c95750661e012cbe99a555f", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_27b48af5cc16a3b2165fd73e0270cad1Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_486a35159c95750661e012cbe99a555fInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("GradientColor", "gradientColorAttr", "GradientColor", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_27b48af5cc16a3b2165fd73e0270cad1Structure());
                    }, true, OutSystemsUIModel.ST_27b48af5cc16a3b2165fd73e0270cad1Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_486a35159c95750661e012cbe99a555f(new RC_486a35159c95750661e012cbe99a555f.RecordClass({
                    gradientColorAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_486a35159c95750661e012cbe99a555f = RC_486a35159c95750661e012cbe99a555fInner;

        RC_486a35159c95750661e012cbe99a555fInner._isAnonymousRecord = true;
        RC_486a35159c95750661e012cbe99a555fInner.UniqueId = "486a3515-9c95-7506-61e0-12cbe99a555f";
        var RC_486a35159c95750661e012cbe99a555f = RC_486a35159c95750661e012cbe99a555fInner;
        RC_486a35159c95750661e012cbe99a555f.init();
    }
});

define("OutSystemsUI.model$EN_48a3ab8db598b5be6bef9add20e71bbbEntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class EN_48a3ab8db598b5be6bef9add20e71bbbEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("GutterSize", "gutterSizeAttr", "GutterSize", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.EN_48a3ab8db598b5be6bef9add20e71bbbEntityRecord = EN_48a3ab8db598b5be6bef9add20e71bbbEntityRecordInner;

        var EN_48a3ab8db598b5be6bef9add20e71bbbEntityRecord = EN_48a3ab8db598b5be6bef9add20e71bbbEntityRecordInner;
        EN_48a3ab8db598b5be6bef9add20e71bbbEntityRecord.init();
    }
});

define("OutSystemsUI.model$RL_4aa1509142da7c0b9e4be414c8f7c6f5", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_f43f179caddf7f7b68b18272d67285d6EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_4aa1509142da7c0b9e4be414c8f7c6f5 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.EN_f43f179caddf7f7b68b18272d67285d6EntityRecord;
        }

    }

    OutSystemsUIModel.RL_4aa1509142da7c0b9e4be414c8f7c6f5 = RL_4aa1509142da7c0b9e4be414c8f7c6f5;

});

define("OutSystemsUI.model$EN_b4e36c9529d7446e086560192df48d7cEntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class EN_b4e36c9529d7446e086560192df48d7cEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Timeformat", "timeformatAttr", "Timeformat", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_b4e36c9529d7446e086560192df48d7cEntityRecord(new EN_b4e36c9529d7446e086560192df48d7cEntityRecord.RecordClass({
                    timeformatAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.EN_b4e36c9529d7446e086560192df48d7cEntityRecord = EN_b4e36c9529d7446e086560192df48d7cEntityRecordInner;

        var EN_b4e36c9529d7446e086560192df48d7cEntityRecord = EN_b4e36c9529d7446e086560192df48d7cEntityRecordInner;
        EN_b4e36c9529d7446e086560192df48d7cEntityRecord.init();
    }
});

define("OutSystemsUI.model$RL_4ac7560fd222f165e8fbfd92d25d984e", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_b4e36c9529d7446e086560192df48d7cEntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_4ac7560fd222f165e8fbfd92d25d984e extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.EN_b4e36c9529d7446e086560192df48d7cEntityRecord;
        }

    }

    OutSystemsUIModel.RL_4ac7560fd222f165e8fbfd92d25d984e = RL_4ac7560fd222f165e8fbfd92d25d984e;

});

define("OutSystemsUI.model$RC_4c3ee0d0ad514546e23495b0186f9086", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_4c3ee0d0ad514546e23495b0186f9086Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ShortcutsDialog1", "shortcutsDialog1Attr", "ShortcutsDialog1", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ShortcutsDialog2", "shortcutsDialog2Attr", "ShortcutsDialog2", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ShortcutsDialog3", "shortcutsDialog3Attr", "ShortcutsDialog3", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ShortcutsDialog4", "shortcutsDialog4Attr", "ShortcutsDialog4", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ShortcutsDialog5", "shortcutsDialog5Attr", "ShortcutsDialog5", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ShortcutsDialog6", "shortcutsDialog6Attr", "ShortcutsDialog6", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ShortcutsDialog7", "shortcutsDialog7Attr", "ShortcutsDialog7", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ShortcutsDialog8", "shortcutsDialog8Attr", "ShortcutsDialog8", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.RC_4c3ee0d0ad514546e23495b0186f9086 = RC_4c3ee0d0ad514546e23495b0186f9086Inner;

        RC_4c3ee0d0ad514546e23495b0186f9086Inner._isAnonymousRecord = true;
        RC_4c3ee0d0ad514546e23495b0186f9086Inner.UniqueId = "4c3ee0d0-ad51-4546-e234-95b0186f9086";
        var RC_4c3ee0d0ad514546e23495b0186f9086 = RC_4c3ee0d0ad514546e23495b0186f9086Inner;
        RC_4c3ee0d0ad514546e23495b0186f9086.init();
    }
});

define("OutSystemsUI.model$RL_4d556c695c13b2c308f888cfb68cea19", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_ba5b17ae5b3fdd9318ea2b4cf18c7d4dStructure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_4d556c695c13b2c308f888cfb68cea19 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_ba5b17ae5b3fdd9318ea2b4cf18c7d4dStructure;
        }

    }

    OutSystemsUIModel.RL_4d556c695c13b2c308f888cfb68cea19 = RL_4d556c695c13b2c308f888cfb68cea19;

});

define("OutSystemsUI.model$RL_4d67a428caaa9d0a9cf0257d7fce0e9b", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_486a35159c95750661e012cbe99a555f"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_4d67a428caaa9d0a9cf0257d7fce0e9b extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_486a35159c95750661e012cbe99a555f;
        }

    }

    OutSystemsUIModel.RL_4d67a428caaa9d0a9cf0257d7fce0e9b = RL_4d67a428caaa9d0a9cf0257d7fce0e9b;

});

define("OutSystemsUI.model$RC_4d77cfdd567b208680377834fc8205a2", ["exports", "@outsystems/runtime-core-js", "System_.model", "OutSystemsUI.model", "System_.model$PasswordComplexityPolicyRec", "OutSystemsUI.referencesHealth", "OutSystemsUI.referencesHealth$System_"], function(exports, OSRuntimeCore, System_Model, OutSystemsUIModel) {
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

        OutSystemsUIModel.RC_4d77cfdd567b208680377834fc8205a2 = RC_4d77cfdd567b208680377834fc8205a2Inner;

        RC_4d77cfdd567b208680377834fc8205a2Inner._isAnonymousRecord = true;
        RC_4d77cfdd567b208680377834fc8205a2Inner.UniqueId = "4d77cfdd-567b-2086-8037-7834fc8205a2";
        var RC_4d77cfdd567b208680377834fc8205a2 = RC_4d77cfdd567b208680377834fc8205a2Inner;
        RC_4d77cfdd567b208680377834fc8205a2.init();
    }
});

define("OutSystemsUI.model$RL_4e7296c1aceb3bd3dd9793888e254d07", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_1b42e9a925bffd384f525d6adac8fe8eEntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_4e7296c1aceb3bd3dd9793888e254d07 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.EN_1b42e9a925bffd384f525d6adac8fe8eEntityRecord;
        }

    }

    OutSystemsUIModel.RL_4e7296c1aceb3bd3dd9793888e254d07 = RL_4e7296c1aceb3bd3dd9793888e254d07;

});

define("OutSystemsUI.model$RL_4f6dde27a1d6ecd82e9d6a4d041d32f3", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_261685da2c799bcc3b4873485e008694"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_4f6dde27a1d6ecd82e9d6a4d041d32f3 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_261685da2c799bcc3b4873485e008694;
        }

    }

    OutSystemsUIModel.RL_4f6dde27a1d6ecd82e9d6a4d041d32f3 = RL_4f6dde27a1d6ecd82e9d6a4d041d32f3;

});

define("OutSystemsUI.model$ST_4f70c42b393d853a53e093e196f4b683Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_4f70c42b393d853a53e093e196f4b683StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_4f70c42b393d853a53e093e196f4b683Structure = ST_4f70c42b393d853a53e093e196f4b683StructureInner;

        var ST_4f70c42b393d853a53e093e196f4b683Structure = ST_4f70c42b393d853a53e093e196f4b683StructureInner;
        ST_4f70c42b393d853a53e093e196f4b683Structure.init();
    }
});

define("OutSystemsUI.model$ST_7167810326c75456a7ce120ed2dbd76bStructure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_7167810326c75456a7ce120ed2dbd76bStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ShowFloatingLabel", "showFloatingLabelAttr", "ShowFloatingLabel", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Step", "stepAttr", "Step", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.BuiltinFunctions.integerToDecimal(1);
                    }, true),
                    this.attr("ShowTickMarks", "showTickMarksAttr", "ShowTickMarks", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, true),
                    this.attr("TickMarksInterval", "tickMarksIntervalAttr", "TickMarksInterval", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("IsDisabled", "isDisabledAttr", "IsDisabled", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_7167810326c75456a7ce120ed2dbd76bStructure = ST_7167810326c75456a7ce120ed2dbd76bStructureInner;

        var ST_7167810326c75456a7ce120ed2dbd76bStructure = ST_7167810326c75456a7ce120ed2dbd76bStructureInner;
        ST_7167810326c75456a7ce120ed2dbd76bStructure.init();
    }
});

define("OutSystemsUI.model$RC_4fc16da695108ad1b034b7256ffa868d", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_7167810326c75456a7ce120ed2dbd76bStructure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_4fc16da695108ad1b034b7256ffa868dInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("RangeSliderOptionalConfigs", "rangeSliderOptionalConfigsAttr", "RangeSliderOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_7167810326c75456a7ce120ed2dbd76bStructure());
                    }, true, OutSystemsUIModel.ST_7167810326c75456a7ce120ed2dbd76bStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_4fc16da695108ad1b034b7256ffa868d(new RC_4fc16da695108ad1b034b7256ffa868d.RecordClass({
                    rangeSliderOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_4fc16da695108ad1b034b7256ffa868d = RC_4fc16da695108ad1b034b7256ffa868dInner;

        RC_4fc16da695108ad1b034b7256ffa868dInner._isAnonymousRecord = true;
        RC_4fc16da695108ad1b034b7256ffa868dInner.UniqueId = "4fc16da6-9510-8ad1-b034-b7256ffa868d";
        var RC_4fc16da695108ad1b034b7256ffa868d = RC_4fc16da695108ad1b034b7256ffa868dInner;
        RC_4fc16da695108ad1b034b7256ffa868d.init();
    }
});

define("OutSystemsUI.model$RL_4feb2fb00f9cd7e5ee8abc58513e6f4d", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_373fec8a2329a8b1ecd55cf717893131"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_4feb2fb00f9cd7e5ee8abc58513e6f4d extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_373fec8a2329a8b1ecd55cf717893131;
        }

    }

    OutSystemsUIModel.RL_4feb2fb00f9cd7e5ee8abc58513e6f4d = RL_4feb2fb00f9cd7e5ee8abc58513e6f4d;

});

define("OutSystemsUI.model$RL_505eb79092b88d8c5112cf252cbfabf9", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_1310596a4ac4ae2b0319b38dd9472639"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_505eb79092b88d8c5112cf252cbfabf9 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_1310596a4ac4ae2b0319b38dd9472639;
        }

    }

    OutSystemsUIModel.RL_505eb79092b88d8c5112cf252cbfabf9 = RL_505eb79092b88d8c5112cf252cbfabf9;

});

define("OutSystemsUI.model$RL_50d3e0774fce43a1ce1cf3a9009855f8", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_7d99fd1de65649f174aff6854b052539Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_50d3e0774fce43a1ce1cf3a9009855f8 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_7d99fd1de65649f174aff6854b052539Structure;
        }

    }

    OutSystemsUIModel.RL_50d3e0774fce43a1ce1cf3a9009855f8 = RL_50d3e0774fce43a1ce1cf3a9009855f8;

});

define("OutSystemsUI.model$ST_9cac82fc47e32e1503b2dbc00140aa98Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_9cac82fc47e32e1503b2dbc00140aa98StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Position", "positionAttr", "Position", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("StartVisible", "startVisibleAttr", "StartVisible", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("IsHover", "isHoverAttr", "IsHover", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_9cac82fc47e32e1503b2dbc00140aa98Structure = ST_9cac82fc47e32e1503b2dbc00140aa98StructureInner;

        var ST_9cac82fc47e32e1503b2dbc00140aa98Structure = ST_9cac82fc47e32e1503b2dbc00140aa98StructureInner;
        ST_9cac82fc47e32e1503b2dbc00140aa98Structure.init();
    }
});

define("OutSystemsUI.model$RL_51838c970a5f5ffd90e6f16dae1511f6", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_9cac82fc47e32e1503b2dbc00140aa98Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_51838c970a5f5ffd90e6f16dae1511f6 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_9cac82fc47e32e1503b2dbc00140aa98Structure;
        }

    }

    OutSystemsUIModel.RL_51838c970a5f5ffd90e6f16dae1511f6 = RL_51838c970a5f5ffd90e6f16dae1511f6;

});

define("OutSystemsUI.model$RC_51b1c15949308af5f9b2dba7043d5ae6", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_b4e36c9529d7446e086560192df48d7cEntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_51b1c15949308af5f9b2dba7043d5ae6Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("DatePickerTimeFormat", "datePickerTimeFormatAttr", "DatePickerTimeFormat", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_b4e36c9529d7446e086560192df48d7cEntityRecord());
                    }, true, OutSystemsUIModel.EN_b4e36c9529d7446e086560192df48d7cEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_51b1c15949308af5f9b2dba7043d5ae6(new RC_51b1c15949308af5f9b2dba7043d5ae6.RecordClass({
                    datePickerTimeFormatAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_51b1c15949308af5f9b2dba7043d5ae6 = RC_51b1c15949308af5f9b2dba7043d5ae6Inner;

        RC_51b1c15949308af5f9b2dba7043d5ae6Inner._isAnonymousRecord = true;
        RC_51b1c15949308af5f9b2dba7043d5ae6Inner.UniqueId = "51b1c159-4930-8af5-f9b2-dba7043d5ae6";
        var RC_51b1c15949308af5f9b2dba7043d5ae6 = RC_51b1c15949308af5f9b2dba7043d5ae6Inner;
        RC_51b1c15949308af5f9b2dba7043d5ae6.init();
    }
});

define("OutSystemsUI.model$ST_e828cdbd51e0c1ef095bd323f6e2875aStructure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_e828cdbd51e0c1ef095bd323f6e2875aStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("IsFlipped", "isFlippedAttr", "IsFlipped", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("FlipSelf", "flipSelfAttr", "FlipSelf", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, true),
                    this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_e828cdbd51e0c1ef095bd323f6e2875aStructure = ST_e828cdbd51e0c1ef095bd323f6e2875aStructureInner;

        var ST_e828cdbd51e0c1ef095bd323f6e2875aStructure = ST_e828cdbd51e0c1ef095bd323f6e2875aStructureInner;
        ST_e828cdbd51e0c1ef095bd323f6e2875aStructure.init();
    }
});

define("OutSystemsUI.model$RL_51f9ee8496afba68bd62021ef774d312", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_e828cdbd51e0c1ef095bd323f6e2875aStructure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_51f9ee8496afba68bd62021ef774d312 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_e828cdbd51e0c1ef095bd323f6e2875aStructure;
        }

    }

    OutSystemsUIModel.RL_51f9ee8496afba68bd62021ef774d312 = RL_51f9ee8496afba68bd62021ef774d312;

});

define("OutSystemsUI.model$RL_5214147e7fe1d47d32e4d5dbafdf5f0a", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_6e6632cfd831e4e0f6a401872bea6eccStructure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_5214147e7fe1d47d32e4d5dbafdf5f0a extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_6e6632cfd831e4e0f6a401872bea6eccStructure;
        }

    }

    OutSystemsUIModel.RL_5214147e7fe1d47d32e4d5dbafdf5f0a = RL_5214147e7fe1d47d32e4d5dbafdf5f0a;

});

define("OutSystemsUI.model$RL_52688881ccfed8dc2d89a4eb45a2498e", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_4c3ee0d0ad514546e23495b0186f9086"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_52688881ccfed8dc2d89a4eb45a2498e extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_4c3ee0d0ad514546e23495b0186f9086;
        }

    }

    OutSystemsUIModel.RL_52688881ccfed8dc2d89a4eb45a2498e = RL_52688881ccfed8dc2d89a4eb45a2498e;

});

define("OutSystemsUI.model$ST_546a3060996e070a522a708cd2d94c23Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_546a3060996e070a522a708cd2d94c23StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("RowItemsPhone", "rowItemsPhoneAttr", "RowItemsPhone", false, false, OS.DataTypes.DataTypes.PhoneNumber, function() {
                        return "";
                    }, true),
                    this.attr("RowItemsTablet", "rowItemsTabletAttr", "RowItemsTablet", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("RowItemsDesktop", "rowItemsDesktopAttr", "RowItemsDesktop", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ItemsGap", "itemsGapAttr", "ItemsGap", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_546a3060996e070a522a708cd2d94c23Structure = ST_546a3060996e070a522a708cd2d94c23StructureInner;

        var ST_546a3060996e070a522a708cd2d94c23Structure = ST_546a3060996e070a522a708cd2d94c23StructureInner;
        ST_546a3060996e070a522a708cd2d94c23Structure.init();
    }
});

define("OutSystemsUI.model$RL_549974f3b4457a3de60891ae7d23d2bc", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_d11562be18a7e40ca777aa336c946163EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_549974f3b4457a3de60891ae7d23d2bc extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.EN_d11562be18a7e40ca777aa336c946163EntityRecord;
        }

    }

    OutSystemsUIModel.RL_549974f3b4457a3de60891ae7d23d2bc = RL_549974f3b4457a3de60891ae7d23d2bc;

});

define("OutSystemsUI.model$RC_56805fdef6332e01f13c0f9217357dbc", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_3cb059eb7f6ed8c9a730f87011d5c0e0Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_56805fdef6332e01f13c0f9217357dbcInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("DropdownItem", "dropdownItemAttr", "DropdownItem", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_3cb059eb7f6ed8c9a730f87011d5c0e0Structure());
                    }, true, OutSystemsUIModel.ST_3cb059eb7f6ed8c9a730f87011d5c0e0Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_56805fdef6332e01f13c0f9217357dbc(new RC_56805fdef6332e01f13c0f9217357dbc.RecordClass({
                    dropdownItemAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_56805fdef6332e01f13c0f9217357dbc = RC_56805fdef6332e01f13c0f9217357dbcInner;

        RC_56805fdef6332e01f13c0f9217357dbcInner._isAnonymousRecord = true;
        RC_56805fdef6332e01f13c0f9217357dbcInner.UniqueId = "56805fde-f633-2e01-f13c-0f9217357dbc";
        var RC_56805fdef6332e01f13c0f9217357dbc = RC_56805fdef6332e01f13c0f9217357dbcInner;
        RC_56805fdef6332e01f13c0f9217357dbc.init();
    }
});

define("OutSystemsUI.model$RL_584bbb33120a24b11c5b7440ce29b75f", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_28a47f2e64dd49f0d3d29e55f70be394Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_584bbb33120a24b11c5b7440ce29b75f extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_28a47f2e64dd49f0d3d29e55f70be394Structure;
        }

    }

    OutSystemsUIModel.RL_584bbb33120a24b11c5b7440ce29b75f = RL_584bbb33120a24b11c5b7440ce29b75f;

});

define("OutSystemsUI.model$RL_597a3a552f76dc5968860b549203fa96", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_40ff37b8719fa708a2bb67c839d296b2"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_597a3a552f76dc5968860b549203fa96 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_40ff37b8719fa708a2bb67c839d296b2;
        }

    }

    OutSystemsUIModel.RL_597a3a552f76dc5968860b549203fa96 = RL_597a3a552f76dc5968860b549203fa96;

});

define("OutSystemsUI.model$RL_5a2f2aff27f92e4dd93b1f922d1a7262", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_cd3e064c4ee8b37ab96945c09d5d2155Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_5a2f2aff27f92e4dd93b1f922d1a7262 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_cd3e064c4ee8b37ab96945c09d5d2155Structure;
        }

    }

    OutSystemsUIModel.RL_5a2f2aff27f92e4dd93b1f922d1a7262 = RL_5a2f2aff27f92e4dd93b1f922d1a7262;

});

define("OutSystemsUI.model$ST_5abb10cad8e1029cd3a5a677a5bd89aeStructure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_5abb10cad8e1029cd3a5a677a5bd89aeStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("MinValue", "minValueAttr", "MinValue", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true),
                    this.attr("MaxValue", "maxValueAttr", "MaxValue", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true),
                    this.attr("StartingValueFrom", "startingValueFromAttr", "StartingValueFrom", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true),
                    this.attr("StartingValueTo", "startingValueToAttr", "StartingValueTo", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true),
                    this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Step", "stepAttr", "Step", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.BuiltinFunctions.integerToDecimal(1);
                    }, true),
                    this.attr("ShowTickMarks", "showTickMarksAttr", "ShowTickMarks", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, true),
                    this.attr("TickMarksInterval", "tickMarksIntervalAttr", "TickMarksInterval", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("IsDisabled", "isDisabledAttr", "IsDisabled", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Orientation", "orientationAttr", "Orientation", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.orientation.horizontal;
                    }, true),
                    this.attr("Size", "sizeAttr", "Size", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "100%";
                    }, true),
                    this.attr("ShowFloatingLabel", "showFloatingLabelAttr", "ShowFloatingLabel", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("InitialValueFrom", "initialValueFromAttr", "InitialValueFrom", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true),
                    this.attr("InitialValueTo", "initialValueToAttr", "InitialValueTo", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_5abb10cad8e1029cd3a5a677a5bd89aeStructure = ST_5abb10cad8e1029cd3a5a677a5bd89aeStructureInner;

        var ST_5abb10cad8e1029cd3a5a677a5bd89aeStructure = ST_5abb10cad8e1029cd3a5a677a5bd89aeStructureInner;
        ST_5abb10cad8e1029cd3a5a677a5bd89aeStructure.init();
    }
});

define("OutSystemsUI.model$EN_5d1279724e719322292e34ef3c5500a0EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class EN_5d1279724e719322292e34ef3c5500a0EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Position", "positionAttr", "Position", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_5d1279724e719322292e34ef3c5500a0EntityRecord(new EN_5d1279724e719322292e34ef3c5500a0EntityRecord.RecordClass({
                    positionAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.EN_5d1279724e719322292e34ef3c5500a0EntityRecord = EN_5d1279724e719322292e34ef3c5500a0EntityRecordInner;

        var EN_5d1279724e719322292e34ef3c5500a0EntityRecord = EN_5d1279724e719322292e34ef3c5500a0EntityRecordInner;
        EN_5d1279724e719322292e34ef3c5500a0EntityRecord.init();
    }
});

define("OutSystemsUI.model$RC_5f28219a5e30fb90023fcbc295513e7c", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_5d1279724e719322292e34ef3c5500a0EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_5f28219a5e30fb90023fcbc295513e7cInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Position", "positionAttr", "Position", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_5d1279724e719322292e34ef3c5500a0EntityRecord());
                    }, true, OutSystemsUIModel.EN_5d1279724e719322292e34ef3c5500a0EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_5f28219a5e30fb90023fcbc295513e7c(new RC_5f28219a5e30fb90023fcbc295513e7c.RecordClass({
                    positionAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_5f28219a5e30fb90023fcbc295513e7c = RC_5f28219a5e30fb90023fcbc295513e7cInner;

        RC_5f28219a5e30fb90023fcbc295513e7cInner._isAnonymousRecord = true;
        RC_5f28219a5e30fb90023fcbc295513e7cInner.UniqueId = "5f28219a-5e30-fb90-023f-cbc295513e7c";
        var RC_5f28219a5e30fb90023fcbc295513e7c = RC_5f28219a5e30fb90023fcbc295513e7cInner;
        RC_5f28219a5e30fb90023fcbc295513e7c.init();
    }
});

define("OutSystemsUI.model$RL_5ba41fd2555db2daaba8da89df34a9b8", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_5f28219a5e30fb90023fcbc295513e7c"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_5ba41fd2555db2daaba8da89df34a9b8 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_5f28219a5e30fb90023fcbc295513e7c;
        }

    }

    OutSystemsUIModel.RL_5ba41fd2555db2daaba8da89df34a9b8 = RL_5ba41fd2555db2daaba8da89df34a9b8;

});

define("OutSystemsUI.model$EN_5be8b31925746693c09b3f64c4898006EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class EN_5be8b31925746693c09b3f64c4898006EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Month", "monthAttr", "Month", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.EN_5be8b31925746693c09b3f64c4898006EntityRecord = EN_5be8b31925746693c09b3f64c4898006EntityRecordInner;

        var EN_5be8b31925746693c09b3f64c4898006EntityRecord = EN_5be8b31925746693c09b3f64c4898006EntityRecordInner;
        EN_5be8b31925746693c09b3f64c4898006EntityRecord.init();
    }
});

define("OutSystemsUI.model$ST_b96c67f06fdfae580256b7081d85460dStructure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_b96c67f06fdfae580256b7081d85460dStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("MinTime", "minTimeAttr", "MinTime", false, false, OS.DataTypes.DataTypes.Time, function() {
                        return OS.DataTypes.DateTime.defaultValue;
                    }, true),
                    this.attr("MaxTime", "maxTimeAttr", "MaxTime", false, false, OS.DataTypes.DataTypes.Time, function() {
                        return OS.DataTypes.DateTime.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_b96c67f06fdfae580256b7081d85460dStructure = ST_b96c67f06fdfae580256b7081d85460dStructureInner;

        var ST_b96c67f06fdfae580256b7081d85460dStructure = ST_b96c67f06fdfae580256b7081d85460dStructureInner;
        ST_b96c67f06fdfae580256b7081d85460dStructure.init();
    }
});

define("OutSystemsUI.model$RL_5f1eb42ec5e25a70109aeb71587a7f0b", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_b96c67f06fdfae580256b7081d85460dStructure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_5f1eb42ec5e25a70109aeb71587a7f0b extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_b96c67f06fdfae580256b7081d85460dStructure;
        }

    }

    OutSystemsUIModel.RL_5f1eb42ec5e25a70109aeb71587a7f0b = RL_5f1eb42ec5e25a70109aeb71587a7f0b;

});

define("OutSystemsUI.model$RC_60ed22b1487b1e18edb2fceb277aa5d1", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_3693d4da8f8fc784e4048b7b08e34c39EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_60ed22b1487b1e18edb2fceb277aa5d1Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("CarouselProvider", "carouselProviderAttr", "CarouselProvider", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_3693d4da8f8fc784e4048b7b08e34c39EntityRecord());
                    }, true, OutSystemsUIModel.EN_3693d4da8f8fc784e4048b7b08e34c39EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_60ed22b1487b1e18edb2fceb277aa5d1(new RC_60ed22b1487b1e18edb2fceb277aa5d1.RecordClass({
                    carouselProviderAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_60ed22b1487b1e18edb2fceb277aa5d1 = RC_60ed22b1487b1e18edb2fceb277aa5d1Inner;

        RC_60ed22b1487b1e18edb2fceb277aa5d1Inner._isAnonymousRecord = true;
        RC_60ed22b1487b1e18edb2fceb277aa5d1Inner.UniqueId = "60ed22b1-487b-1e18-edb2-fceb277aa5d1";
        var RC_60ed22b1487b1e18edb2fceb277aa5d1 = RC_60ed22b1487b1e18edb2fceb277aa5d1Inner;
        RC_60ed22b1487b1e18edb2fceb277aa5d1.init();
    }
});

define("OutSystemsUI.model$ST_60f22bd2e9b10a22278b8afe6d7f601aStructure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_60f22bd2e9b10a22278b8afe6d7f601aStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Value", "valueAttr", "value", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Label", "labelAttr", "label", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ImageUrlOrIconClass", "imageUrlOrIconClassAttr", "image_url_or_class", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("GroupName", "groupNameAttr", "group_name", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Description", "descriptionAttr", "description", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_60f22bd2e9b10a22278b8afe6d7f601aStructure = ST_60f22bd2e9b10a22278b8afe6d7f601aStructureInner;

        var ST_60f22bd2e9b10a22278b8afe6d7f601aStructure = ST_60f22bd2e9b10a22278b8afe6d7f601aStructureInner;
        ST_60f22bd2e9b10a22278b8afe6d7f601aStructure.init();
    }
});

define("OutSystemsUI.model$RC_60f7027c05b269e64f9c4c41640d4643", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_6f97d9724e66f51b47133aa003a9e610Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_60f7027c05b269e64f9c4c41640d4643Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("MonthPicker_InternalConfig", "monthPicker_InternalConfigAttr", "MonthPicker_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_6f97d9724e66f51b47133aa003a9e610Structure());
                    }, true, OutSystemsUIModel.ST_6f97d9724e66f51b47133aa003a9e610Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_60f7027c05b269e64f9c4c41640d4643(new RC_60f7027c05b269e64f9c4c41640d4643.RecordClass({
                    monthPicker_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_60f7027c05b269e64f9c4c41640d4643 = RC_60f7027c05b269e64f9c4c41640d4643Inner;

        RC_60f7027c05b269e64f9c4c41640d4643Inner._isAnonymousRecord = true;
        RC_60f7027c05b269e64f9c4c41640d4643Inner.UniqueId = "60f7027c-05b2-69e6-4f9c-4c41640d4643";
        var RC_60f7027c05b269e64f9c4c41640d4643 = RC_60f7027c05b269e64f9c4c41640d4643Inner;
        RC_60f7027c05b269e64f9c4c41640d4643.init();
    }
});

define("OutSystemsUI.model$ST_613242ff7dd22d356200cb1f89298a39Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_613242ff7dd22d356200cb1f89298a39StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("TimeFormat", "timeFormatAttr", "TimeFormat", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Is24Hours", "is24HoursAttr", "Is24Hours", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, true),
                    this.attr("InitialTime", "initialTimeAttr", "InitialTime", false, false, OS.DataTypes.DataTypes.Time, function() {
                        return OS.DataTypes.DateTime.defaultValue;
                    }, true),
                    this.attr("MinTime", "minTimeAttr", "MinTime", false, false, OS.DataTypes.DataTypes.Time, function() {
                        return OS.DataTypes.DateTime.defaultValue;
                    }, true),
                    this.attr("MaxTime", "maxTimeAttr", "MaxTime", false, false, OS.DataTypes.DataTypes.Time, function() {
                        return OS.DataTypes.DateTime.defaultValue;
                    }, true),
                    this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_613242ff7dd22d356200cb1f89298a39Structure = ST_613242ff7dd22d356200cb1f89298a39StructureInner;

        var ST_613242ff7dd22d356200cb1f89298a39Structure = ST_613242ff7dd22d356200cb1f89298a39StructureInner;
        ST_613242ff7dd22d356200cb1f89298a39Structure.init();
    }
});

define("OutSystemsUI.model$RL_62db41b41dbf507c50e0bafe4d455ef4", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_03619642a06de09478f0b8f506c364eb"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_62db41b41dbf507c50e0bafe4d455ef4 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_03619642a06de09478f0b8f506c364eb;
        }

    }

    OutSystemsUIModel.RL_62db41b41dbf507c50e0bafe4d455ef4 = RL_62db41b41dbf507c50e0bafe4d455ef4;

});

define("OutSystemsUI.model$RL_63ccb429e57f95e7ed9716b41b4e2342", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_46bd5f77d899939eaf145ae01d3efd6bStructure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_63ccb429e57f95e7ed9716b41b4e2342 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_46bd5f77d899939eaf145ae01d3efd6bStructure;
        }

    }

    OutSystemsUIModel.RL_63ccb429e57f95e7ed9716b41b4e2342 = RL_63ccb429e57f95e7ed9716b41b4e2342;

});

define("OutSystemsUI.model$ST_eb161a8909408fbd30eac1833398f018Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_eb161a8909408fbd30eac1833398f018StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Shape", "shapeAttr", "Shape", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.shape.rounded;
                    }, true),
                    this.attr("AnimateInitialProgress", "animateInitialProgressAttr", "AnimateInitialProgress", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_eb161a8909408fbd30eac1833398f018Structure = ST_eb161a8909408fbd30eac1833398f018StructureInner;

        var ST_eb161a8909408fbd30eac1833398f018Structure = ST_eb161a8909408fbd30eac1833398f018StructureInner;
        ST_eb161a8909408fbd30eac1833398f018Structure.init();
    }
});

define("OutSystemsUI.model$RC_646e6c02297b69c2ac8936bd87cff545", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_eb161a8909408fbd30eac1833398f018Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_646e6c02297b69c2ac8936bd87cff545Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ProgressCircleOptionalConfigs", "progressCircleOptionalConfigsAttr", "ProgressCircleOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_eb161a8909408fbd30eac1833398f018Structure());
                    }, true, OutSystemsUIModel.ST_eb161a8909408fbd30eac1833398f018Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_646e6c02297b69c2ac8936bd87cff545(new RC_646e6c02297b69c2ac8936bd87cff545.RecordClass({
                    progressCircleOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_646e6c02297b69c2ac8936bd87cff545 = RC_646e6c02297b69c2ac8936bd87cff545Inner;

        RC_646e6c02297b69c2ac8936bd87cff545Inner._isAnonymousRecord = true;
        RC_646e6c02297b69c2ac8936bd87cff545Inner.UniqueId = "646e6c02-297b-69c2-ac89-36bd87cff545";
        var RC_646e6c02297b69c2ac8936bd87cff545 = RC_646e6c02297b69c2ac8936bd87cff545Inner;
        RC_646e6c02297b69c2ac8936bd87cff545.init();
    }
});

define("OutSystemsUI.model$ST_6510d2524fe77fcc6c285159d4000cfbStructure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_6510d2524fe77fcc6c285159d4000cfbStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Autoplay", "autoplayAttr", "Autoplay", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Loop", "loopAttr", "Loop", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Muted", "mutedAttr", "Muted", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("PosterURL", "posterURLAttr", "PosterURL", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_6510d2524fe77fcc6c285159d4000cfbStructure = ST_6510d2524fe77fcc6c285159d4000cfbStructureInner;

        var ST_6510d2524fe77fcc6c285159d4000cfbStructure = ST_6510d2524fe77fcc6c285159d4000cfbStructureInner;
        ST_6510d2524fe77fcc6c285159d4000cfbStructure.init();
    }
});

define("OutSystemsUI.model$RC_ab84a98a3ac9de80e9278e5b21681a23", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_52e55d60c515b6016f81404afb220594EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_ab84a98a3ac9de80e9278e5b21681a23Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Trigger", "triggerAttr", "Trigger", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_52e55d60c515b6016f81404afb220594EntityRecord());
                    }, true, OutSystemsUIModel.EN_52e55d60c515b6016f81404afb220594EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_ab84a98a3ac9de80e9278e5b21681a23(new RC_ab84a98a3ac9de80e9278e5b21681a23.RecordClass({
                    triggerAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_ab84a98a3ac9de80e9278e5b21681a23 = RC_ab84a98a3ac9de80e9278e5b21681a23Inner;

        RC_ab84a98a3ac9de80e9278e5b21681a23Inner._isAnonymousRecord = true;
        RC_ab84a98a3ac9de80e9278e5b21681a23Inner.UniqueId = "ab84a98a-3ac9-de80-e927-8e5b21681a23";
        var RC_ab84a98a3ac9de80e9278e5b21681a23 = RC_ab84a98a3ac9de80e9278e5b21681a23Inner;
        RC_ab84a98a3ac9de80e9278e5b21681a23.init();
    }
});

define("OutSystemsUI.model$RL_6534465d8eaff1ed770420b9742876dc", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_ab84a98a3ac9de80e9278e5b21681a23"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_6534465d8eaff1ed770420b9742876dc extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_ab84a98a3ac9de80e9278e5b21681a23;
        }

    }

    OutSystemsUIModel.RL_6534465d8eaff1ed770420b9742876dc = RL_6534465d8eaff1ed770420b9742876dc;

});

define("OutSystemsUI.model$RL_65b4601c7246ad02da4e6c18fe619d03", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_f0a0dc1163bf03e1d7bb0d253808f956EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_65b4601c7246ad02da4e6c18fe619d03 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.EN_f0a0dc1163bf03e1d7bb0d253808f956EntityRecord;
        }

    }

    OutSystemsUIModel.RL_65b4601c7246ad02da4e6c18fe619d03 = RL_65b4601c7246ad02da4e6c18fe619d03;

});

define("OutSystemsUI.model$RL_65d9a4311a8786a7162dbd4fc605ecd0", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_e168de2e23691f28c2b57a8300aa4d06EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_65d9a4311a8786a7162dbd4fc605ecd0 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.EN_e168de2e23691f28c2b57a8300aa4d06EntityRecord;
        }

    }

    OutSystemsUIModel.RL_65d9a4311a8786a7162dbd4fc605ecd0 = RL_65d9a4311a8786a7162dbd4fc605ecd0;

});

define("OutSystemsUI.model$ST_660adb7a9db48bff1b12c6e03515b415Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_660adb7a9db48bff1b12c6e03515b415StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Desktop", "desktopAttr", "Desktop", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 1;
                    }, true),
                    this.attr("Tablet", "tabletAttr", "Tablet", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 1;
                    }, true),
                    this.attr("Phone", "phoneAttr", "Phone", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 1;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_660adb7a9db48bff1b12c6e03515b415Structure = ST_660adb7a9db48bff1b12c6e03515b415StructureInner;

        var ST_660adb7a9db48bff1b12c6e03515b415Structure = ST_660adb7a9db48bff1b12c6e03515b415StructureInner;
        ST_660adb7a9db48bff1b12c6e03515b415Structure.init();
    }
});

define("OutSystemsUI.model$RL_662f9a01faab4debe4196401f9ed4c71", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_310dae2b4d3a1f1ded7570a6ee74f16e"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_662f9a01faab4debe4196401f9ed4c71 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_310dae2b4d3a1f1ded7570a6ee74f16e;
        }

    }

    OutSystemsUIModel.RL_662f9a01faab4debe4196401f9ed4c71 = RL_662f9a01faab4debe4196401f9ed4c71;

});

define("OutSystemsUI.model$RL_67211e5ef9090bf1006a3e1da6767024", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_182bd2d69e3f1edb7f1fb76efcbcae87EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_67211e5ef9090bf1006a3e1da6767024 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.EN_182bd2d69e3f1edb7f1fb76efcbcae87EntityRecord;
        }

    }

    OutSystemsUIModel.RL_67211e5ef9090bf1006a3e1da6767024 = RL_67211e5ef9090bf1006a3e1da6767024;

});

define("OutSystemsUI.model$EN_ac6f62956e278d5390a5f27c607338d0EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class EN_ac6f62956e278d5390a5f27c607338d0EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Alpha2Code", "alpha2CodeAttr", "Alpha2Code", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("LanguageName", "languageNameAttr", "LanguageName", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.EN_ac6f62956e278d5390a5f27c607338d0EntityRecord = EN_ac6f62956e278d5390a5f27c607338d0EntityRecordInner;

        var EN_ac6f62956e278d5390a5f27c607338d0EntityRecord = EN_ac6f62956e278d5390a5f27c607338d0EntityRecordInner;
        EN_ac6f62956e278d5390a5f27c607338d0EntityRecord.init();
    }
});

define("OutSystemsUI.model$RC_673cc0a63dbc3f5836f7732ba0712544", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_ac6f62956e278d5390a5f27c607338d0EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_673cc0a63dbc3f5836f7732ba0712544Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("DatePickerLanguage", "datePickerLanguageAttr", "DatePickerLanguage", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_ac6f62956e278d5390a5f27c607338d0EntityRecord());
                    }, true, OutSystemsUIModel.EN_ac6f62956e278d5390a5f27c607338d0EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_673cc0a63dbc3f5836f7732ba0712544(new RC_673cc0a63dbc3f5836f7732ba0712544.RecordClass({
                    datePickerLanguageAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_673cc0a63dbc3f5836f7732ba0712544 = RC_673cc0a63dbc3f5836f7732ba0712544Inner;

        RC_673cc0a63dbc3f5836f7732ba0712544Inner._isAnonymousRecord = true;
        RC_673cc0a63dbc3f5836f7732ba0712544Inner.UniqueId = "673cc0a6-3dbc-3f58-36f7-732ba0712544";
        var RC_673cc0a63dbc3f5836f7732ba0712544 = RC_673cc0a63dbc3f5836f7732ba0712544Inner;
        RC_673cc0a63dbc3f5836f7732ba0712544.init();
    }
});

define("OutSystemsUI.model$RL_6753b1849ff4bc19e62c553317f17751", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_0a89eeb60fa1f44b6316ca69b462007b"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_6753b1849ff4bc19e62c553317f17751 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_0a89eeb60fa1f44b6316ca69b462007b;
        }

    }

    OutSystemsUIModel.RL_6753b1849ff4bc19e62c553317f17751 = RL_6753b1849ff4bc19e62c553317f17751;

});

define("OutSystemsUI.model$RC_f01d650db89cbacd8f4a32786da5428e", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_f01d650db89cbacd8f4a32786da5428eInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Direction", "directionAttr", "Direction", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("InitialIntervalEnd", "initialIntervalEndAttr", "InitialIntervalEnd", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true),
                    this.attr("InitialIntervalStart", "initialIntervalStartAttr", "InitialIntervalStart", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true),
                    this.attr("MaxValue", "maxValueAttr", "MaxValue", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true),
                    this.attr("MinValue", "minValueAttr", "MinValue", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true),
                    this.attr("Step", "stepAttr", "Step", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true),
                    this.attr("ChangeEventDuringSlide", "changeEventDuringSlideAttr", "ChangeEventDuringSlide", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("IsDisabled", "isDisabledAttr", "IsDisabled", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("IsVertical", "isVerticalAttr", "IsVertical", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("ShowPips", "showPipsAttr", "ShowPips", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("PipsStep", "pipsStepAttr", "PipsStep", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("VerticalHeight", "verticalHeightAttr", "VerticalHeight", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.RC_f01d650db89cbacd8f4a32786da5428e = RC_f01d650db89cbacd8f4a32786da5428eInner;

        RC_f01d650db89cbacd8f4a32786da5428eInner._isAnonymousRecord = true;
        RC_f01d650db89cbacd8f4a32786da5428eInner.UniqueId = "f01d650d-b89c-bacd-8f4a-32786da5428e";
        var RC_f01d650db89cbacd8f4a32786da5428e = RC_f01d650db89cbacd8f4a32786da5428eInner;
        RC_f01d650db89cbacd8f4a32786da5428e.init();
    }
});

define("OutSystemsUI.model$RL_6dd55341acb0c4f5e43d780f071bf981", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_f01d650db89cbacd8f4a32786da5428e"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_6dd55341acb0c4f5e43d780f071bf981 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_f01d650db89cbacd8f4a32786da5428e;
        }

    }

    OutSystemsUIModel.RL_6dd55341acb0c4f5e43d780f071bf981 = RL_6dd55341acb0c4f5e43d780f071bf981;

});

define("OutSystemsUI.model$RC_f4b8704cebd53b0a2ed361a846fc1b0e", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_2b510eefd88959a00bf486cfc856fa96Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_f4b8704cebd53b0a2ed361a846fc1b0eInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ButtonLoading_InternalConfig", "buttonLoading_InternalConfigAttr", "ButtonLoading_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_2b510eefd88959a00bf486cfc856fa96Structure());
                    }, true, OutSystemsUIModel.ST_2b510eefd88959a00bf486cfc856fa96Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_f4b8704cebd53b0a2ed361a846fc1b0e(new RC_f4b8704cebd53b0a2ed361a846fc1b0e.RecordClass({
                    buttonLoading_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_f4b8704cebd53b0a2ed361a846fc1b0e = RC_f4b8704cebd53b0a2ed361a846fc1b0eInner;

        RC_f4b8704cebd53b0a2ed361a846fc1b0eInner._isAnonymousRecord = true;
        RC_f4b8704cebd53b0a2ed361a846fc1b0eInner.UniqueId = "f4b8704c-ebd5-3b0a-2ed3-61a846fc1b0e";
        var RC_f4b8704cebd53b0a2ed361a846fc1b0e = RC_f4b8704cebd53b0a2ed361a846fc1b0eInner;
        RC_f4b8704cebd53b0a2ed361a846fc1b0e.init();
    }
});

define("OutSystemsUI.model$RL_6e6a0f055ae42ad0262990e3c814fca5", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_f4b8704cebd53b0a2ed361a846fc1b0e"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_6e6a0f055ae42ad0262990e3c814fca5 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_f4b8704cebd53b0a2ed361a846fc1b0e;
        }

    }

    OutSystemsUIModel.RL_6e6a0f055ae42ad0262990e3c814fca5 = RL_6e6a0f055ae42ad0262990e3c814fca5;

});

define("OutSystemsUI.model$RL_6e83700adc6fcd665137daf94937dfd4", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_3b9304e9875ccc71ec31b003d76d44c7Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_6e83700adc6fcd665137daf94937dfd4 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_3b9304e9875ccc71ec31b003d76d44c7Structure;
        }

    }

    OutSystemsUIModel.RL_6e83700adc6fcd665137daf94937dfd4 = RL_6e83700adc6fcd665137daf94937dfd4;

});

define("OutSystemsUI.model$EN_df70a614ae02fde4029645a728b2909cEntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class EN_df70a614ae02fde4029645a728b2909cEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_df70a614ae02fde4029645a728b2909cEntityRecord(new EN_df70a614ae02fde4029645a728b2909cEntityRecord.RecordClass({
                    nameAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.EN_df70a614ae02fde4029645a728b2909cEntityRecord = EN_df70a614ae02fde4029645a728b2909cEntityRecordInner;

        var EN_df70a614ae02fde4029645a728b2909cEntityRecord = EN_df70a614ae02fde4029645a728b2909cEntityRecordInner;
        EN_df70a614ae02fde4029645a728b2909cEntityRecord.init();
    }
});

define("OutSystemsUI.model$RC_b2eeb8f69cd26079c0c421f6fd8d6d1f", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_df70a614ae02fde4029645a728b2909cEntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_b2eeb8f69cd26079c0c421f6fd8d6d1fInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("RegisteredCallbackEvents", "registeredCallbackEventsAttr", "RegisteredCallbackEvents", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_df70a614ae02fde4029645a728b2909cEntityRecord());
                    }, true, OutSystemsUIModel.EN_df70a614ae02fde4029645a728b2909cEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_b2eeb8f69cd26079c0c421f6fd8d6d1f(new RC_b2eeb8f69cd26079c0c421f6fd8d6d1f.RecordClass({
                    registeredCallbackEventsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_b2eeb8f69cd26079c0c421f6fd8d6d1f = RC_b2eeb8f69cd26079c0c421f6fd8d6d1fInner;

        RC_b2eeb8f69cd26079c0c421f6fd8d6d1fInner._isAnonymousRecord = true;
        RC_b2eeb8f69cd26079c0c421f6fd8d6d1fInner.UniqueId = "b2eeb8f6-9cd2-6079-c0c4-21f6fd8d6d1f";
        var RC_b2eeb8f69cd26079c0c421f6fd8d6d1f = RC_b2eeb8f69cd26079c0c421f6fd8d6d1fInner;
        RC_b2eeb8f69cd26079c0c421f6fd8d6d1f.init();
    }
});

define("OutSystemsUI.model$RL_6ee4774b8ebf7f4bd9b3c05eedd6dd87", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_b2eeb8f69cd26079c0c421f6fd8d6d1f"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_6ee4774b8ebf7f4bd9b3c05eedd6dd87 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_b2eeb8f69cd26079c0c421f6fd8d6d1f;
        }

    }

    OutSystemsUIModel.RL_6ee4774b8ebf7f4bd9b3c05eedd6dd87 = RL_6ee4774b8ebf7f4bd9b3c05eedd6dd87;

});

define("OutSystemsUI.model$RC_abb6a3eba8583e4ab0625de8f38fb719", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_0262e6910ebecc922f633b08db78d688Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_abb6a3eba8583e4ab0625de8f38fb719Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("DeviceConfiguration", "deviceConfigurationAttr", "DeviceConfiguration", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_0262e6910ebecc922f633b08db78d688Structure());
                    }, true, OutSystemsUIModel.ST_0262e6910ebecc922f633b08db78d688Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_abb6a3eba8583e4ab0625de8f38fb719(new RC_abb6a3eba8583e4ab0625de8f38fb719.RecordClass({
                    deviceConfigurationAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_abb6a3eba8583e4ab0625de8f38fb719 = RC_abb6a3eba8583e4ab0625de8f38fb719Inner;

        RC_abb6a3eba8583e4ab0625de8f38fb719Inner._isAnonymousRecord = true;
        RC_abb6a3eba8583e4ab0625de8f38fb719Inner.UniqueId = "abb6a3eb-a858-3e4a-b062-5de8f38fb719";
        var RC_abb6a3eba8583e4ab0625de8f38fb719 = RC_abb6a3eba8583e4ab0625de8f38fb719Inner;
        RC_abb6a3eba8583e4ab0625de8f38fb719.init();
    }
});

define("OutSystemsUI.model$RL_703668b187ab39de3436f6485526e12a", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_abb6a3eba8583e4ab0625de8f38fb719"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_703668b187ab39de3436f6485526e12a extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_abb6a3eba8583e4ab0625de8f38fb719;
        }

    }

    OutSystemsUIModel.RL_703668b187ab39de3436f6485526e12a = RL_703668b187ab39de3436f6485526e12a;

});

define("OutSystemsUI.model$RL_718bfa5485b42466fae8f4ad1fc16180", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_189b647ddc5c60c1aa5290bb6481a72dEntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_718bfa5485b42466fae8f4ad1fc16180 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.EN_189b647ddc5c60c1aa5290bb6481a72dEntityRecord;
        }

    }

    OutSystemsUIModel.RL_718bfa5485b42466fae8f4ad1fc16180 = RL_718bfa5485b42466fae8f4ad1fc16180;

});

define("OutSystemsUI.model$ST_71bc196daedd9ac0648bfd56a713859dStructure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_71bc196daedd9ac0648bfd56a713859dStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Month", "monthAttr", "Month", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("MonthOrder", "monthOrderAttr", "MonthOrder", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("Year", "yearAttr", "Year", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_71bc196daedd9ac0648bfd56a713859dStructure = ST_71bc196daedd9ac0648bfd56a713859dStructureInner;

        var ST_71bc196daedd9ac0648bfd56a713859dStructure = ST_71bc196daedd9ac0648bfd56a713859dStructureInner;
        ST_71bc196daedd9ac0648bfd56a713859dStructure.init();
    }
});

define("OutSystemsUI.model$RC_967cb65710fd1a346ebf0b0d8dbea56b", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_92679525739afa328c09890d25f5ac45EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_967cb65710fd1a346ebf0b0d8dbea56bInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("StackedCardsPosition", "stackedCardsPositionAttr", "StackedCardsPosition", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_92679525739afa328c09890d25f5ac45EntityRecord());
                    }, true, OutSystemsUIModel.EN_92679525739afa328c09890d25f5ac45EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_967cb65710fd1a346ebf0b0d8dbea56b(new RC_967cb65710fd1a346ebf0b0d8dbea56b.RecordClass({
                    stackedCardsPositionAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_967cb65710fd1a346ebf0b0d8dbea56b = RC_967cb65710fd1a346ebf0b0d8dbea56bInner;

        RC_967cb65710fd1a346ebf0b0d8dbea56bInner._isAnonymousRecord = true;
        RC_967cb65710fd1a346ebf0b0d8dbea56bInner.UniqueId = "967cb657-10fd-1a34-6ebf-0b0d8dbea56b";
        var RC_967cb65710fd1a346ebf0b0d8dbea56b = RC_967cb65710fd1a346ebf0b0d8dbea56bInner;
        RC_967cb65710fd1a346ebf0b0d8dbea56b.init();
    }
});

define("OutSystemsUI.model$RL_73c285d01c2c56407f6a3b6c7863f99b", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_967cb65710fd1a346ebf0b0d8dbea56b"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_73c285d01c2c56407f6a3b6c7863f99b extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_967cb65710fd1a346ebf0b0d8dbea56b;
        }

    }

    OutSystemsUIModel.RL_73c285d01c2c56407f6a3b6c7863f99b = RL_73c285d01c2c56407f6a3b6c7863f99b;

});

define("OutSystemsUI.model$RL_73cbe97ff08da4924df6411aaaf55e68", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_87ed820dae13f311d79f7f394fc3790aStructure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_73cbe97ff08da4924df6411aaaf55e68 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_87ed820dae13f311d79f7f394fc3790aStructure;
        }

    }

    OutSystemsUIModel.RL_73cbe97ff08da4924df6411aaaf55e68 = RL_73cbe97ff08da4924df6411aaaf55e68;

});

define("OutSystemsUI.model$RC_7c416001ce979a5857a1237e54d11a88", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_bc9955d62033e77475d9540bd4940593Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_7c416001ce979a5857a1237e54d11a88Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("InlineSVG_InternalConfig", "inlineSVG_InternalConfigAttr", "InlineSVG_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_bc9955d62033e77475d9540bd4940593Structure());
                    }, true, OutSystemsUIModel.ST_bc9955d62033e77475d9540bd4940593Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_7c416001ce979a5857a1237e54d11a88(new RC_7c416001ce979a5857a1237e54d11a88.RecordClass({
                    inlineSVG_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_7c416001ce979a5857a1237e54d11a88 = RC_7c416001ce979a5857a1237e54d11a88Inner;

        RC_7c416001ce979a5857a1237e54d11a88Inner._isAnonymousRecord = true;
        RC_7c416001ce979a5857a1237e54d11a88Inner.UniqueId = "7c416001-ce97-9a58-57a1-237e54d11a88";
        var RC_7c416001ce979a5857a1237e54d11a88 = RC_7c416001ce979a5857a1237e54d11a88Inner;
        RC_7c416001ce979a5857a1237e54d11a88.init();
    }
});

define("OutSystemsUI.model$RL_74a608cd4da094ed2430bedab2c84160", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_7c416001ce979a5857a1237e54d11a88"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_74a608cd4da094ed2430bedab2c84160 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_7c416001ce979a5857a1237e54d11a88;
        }

    }

    OutSystemsUIModel.RL_74a608cd4da094ed2430bedab2c84160 = RL_74a608cd4da094ed2430bedab2c84160;

});

define("OutSystemsUI.model$RC_e14f3c77ad4f7c2d7fcad14fc0ab9bf1", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_71bc196daedd9ac0648bfd56a713859dStructure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_e14f3c77ad4f7c2d7fcad14fc0ab9bf1Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("MonthOrderYear", "monthOrderYearAttr", "MonthOrderYear", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_71bc196daedd9ac0648bfd56a713859dStructure());
                    }, true, OutSystemsUIModel.ST_71bc196daedd9ac0648bfd56a713859dStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_e14f3c77ad4f7c2d7fcad14fc0ab9bf1(new RC_e14f3c77ad4f7c2d7fcad14fc0ab9bf1.RecordClass({
                    monthOrderYearAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_e14f3c77ad4f7c2d7fcad14fc0ab9bf1 = RC_e14f3c77ad4f7c2d7fcad14fc0ab9bf1Inner;

        RC_e14f3c77ad4f7c2d7fcad14fc0ab9bf1Inner._isAnonymousRecord = true;
        RC_e14f3c77ad4f7c2d7fcad14fc0ab9bf1Inner.UniqueId = "e14f3c77-ad4f-7c2d-7fca-d14fc0ab9bf1";
        var RC_e14f3c77ad4f7c2d7fcad14fc0ab9bf1 = RC_e14f3c77ad4f7c2d7fcad14fc0ab9bf1Inner;
        RC_e14f3c77ad4f7c2d7fcad14fc0ab9bf1.init();
    }
});

define("OutSystemsUI.model$RL_7682dd80718b550d6c5a921d5990d04e", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_e14f3c77ad4f7c2d7fcad14fc0ab9bf1"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_7682dd80718b550d6c5a921d5990d04e extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_e14f3c77ad4f7c2d7fcad14fc0ab9bf1;
        }

    }

    OutSystemsUIModel.RL_7682dd80718b550d6c5a921d5990d04e = RL_7682dd80718b550d6c5a921d5990d04e;

});

define("OutSystemsUI.model$RL_78373738575ac72ef55dea9c617c7d1f", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_50814454e481dd1773c2250bc248da5eEntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_78373738575ac72ef55dea9c617c7d1f extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.EN_50814454e481dd1773c2250bc248da5eEntityRecord;
        }

    }

    OutSystemsUIModel.RL_78373738575ac72ef55dea9c617c7d1f = RL_78373738575ac72ef55dea9c617c7d1f;

});

define("OutSystemsUI.model$RL_c0f17d75c546075264f5d075e00ba65b", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_60f22bd2e9b10a22278b8afe6d7f601aStructure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_c0f17d75c546075264f5d075e00ba65b extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_60f22bd2e9b10a22278b8afe6d7f601aStructure;
        }

    }

    OutSystemsUIModel.RL_c0f17d75c546075264f5d075e00ba65b = RL_c0f17d75c546075264f5d075e00ba65b;

});

define("OutSystemsUI.model$ST_936f99e69df60f5aa2563bbd38e49c98Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_60f22bd2e9b10a22278b8afe6d7f601aStructure", "OutSystemsUI.model$RL_c0f17d75c546075264f5d075e00ba65b"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_936f99e69df60f5aa2563bbd38e49c98StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("OptionsList", "optionsListAttr", "OptionsList", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.RL_c0f17d75c546075264f5d075e00ba65b());
                    }, true, OutSystemsUIModel.RL_c0f17d75c546075264f5d075e00ba65b),
                    this.attr("StartingSelection", "startingSelectionAttr", "StartingSelection", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.RL_c0f17d75c546075264f5d075e00ba65b());
                    }, true, OutSystemsUIModel.RL_c0f17d75c546075264f5d075e00ba65b),
                    this.attr("Prompt", "promptAttr", "Prompt", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "Select an item";
                    }, true),
                    this.attr("AllowMultipleSelection", "allowMultipleSelectionAttr", "AllowMultipleSelection", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("IsDisabled", "isDisabledAttr", "IsDisabled", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("NoOptionsText", "noOptionsTextAttr", "NoOptionsText", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "0";
                    }, true),
                    this.attr("NoResultsText", "noResultsTextAttr", "NoResultsText", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "0";
                    }, true),
                    this.attr("SearchPrompt", "searchPromptAttr", "SearchPrompt", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "1";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_936f99e69df60f5aa2563bbd38e49c98Structure = ST_936f99e69df60f5aa2563bbd38e49c98StructureInner;

        var ST_936f99e69df60f5aa2563bbd38e49c98Structure = ST_936f99e69df60f5aa2563bbd38e49c98StructureInner;
        ST_936f99e69df60f5aa2563bbd38e49c98Structure.init();
    }
});

define("OutSystemsUI.model$RC_7925a19e6fd0a09e9058a96c7f19b104", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_936f99e69df60f5aa2563bbd38e49c98Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_7925a19e6fd0a09e9058a96c7f19b104Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("DropdownSearch_InternalConfigs", "dropdownSearch_InternalConfigsAttr", "DropdownSearch_InternalConfigs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_936f99e69df60f5aa2563bbd38e49c98Structure());
                    }, true, OutSystemsUIModel.ST_936f99e69df60f5aa2563bbd38e49c98Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_7925a19e6fd0a09e9058a96c7f19b104(new RC_7925a19e6fd0a09e9058a96c7f19b104.RecordClass({
                    dropdownSearch_InternalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_7925a19e6fd0a09e9058a96c7f19b104 = RC_7925a19e6fd0a09e9058a96c7f19b104Inner;

        RC_7925a19e6fd0a09e9058a96c7f19b104Inner._isAnonymousRecord = true;
        RC_7925a19e6fd0a09e9058a96c7f19b104Inner.UniqueId = "7925a19e-6fd0-a09e-9058-a96c7f19b104";
        var RC_7925a19e6fd0a09e9058a96c7f19b104 = RC_7925a19e6fd0a09e9058a96c7f19b104Inner;
        RC_7925a19e6fd0a09e9058a96c7f19b104.init();
    }
});

define("OutSystemsUI.model$RL_799b7146a2a08781a419c46b161fba52", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_4f86046673de081f9834eb306850ab22EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_799b7146a2a08781a419c46b161fba52 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.EN_4f86046673de081f9834eb306850ab22EntityRecord;
        }

    }

    OutSystemsUIModel.RL_799b7146a2a08781a419c46b161fba52 = RL_799b7146a2a08781a419c46b161fba52;

});

define("OutSystemsUI.model$EN_79dd905420a035342bdbafd506073863EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class EN_79dd905420a035342bdbafd506073863EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.EN_79dd905420a035342bdbafd506073863EntityRecord = EN_79dd905420a035342bdbafd506073863EntityRecordInner;

        var EN_79dd905420a035342bdbafd506073863EntityRecord = EN_79dd905420a035342bdbafd506073863EntityRecordInner;
        EN_79dd905420a035342bdbafd506073863EntityRecord.init();
    }
});

define("OutSystemsUI.model$RC_85af8fa7a4c9fca4ade94e1edb0d5f7d", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_6510d2524fe77fcc6c285159d4000cfbStructure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_85af8fa7a4c9fca4ade94e1edb0d5f7dInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("VideoOptionalConfigs", "videoOptionalConfigsAttr", "VideoOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_6510d2524fe77fcc6c285159d4000cfbStructure());
                    }, true, OutSystemsUIModel.ST_6510d2524fe77fcc6c285159d4000cfbStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_85af8fa7a4c9fca4ade94e1edb0d5f7d(new RC_85af8fa7a4c9fca4ade94e1edb0d5f7d.RecordClass({
                    videoOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_85af8fa7a4c9fca4ade94e1edb0d5f7d = RC_85af8fa7a4c9fca4ade94e1edb0d5f7dInner;

        RC_85af8fa7a4c9fca4ade94e1edb0d5f7dInner._isAnonymousRecord = true;
        RC_85af8fa7a4c9fca4ade94e1edb0d5f7dInner.UniqueId = "85af8fa7-a4c9-fca4-ade9-4e1edb0d5f7d";
        var RC_85af8fa7a4c9fca4ade94e1edb0d5f7d = RC_85af8fa7a4c9fca4ade94e1edb0d5f7dInner;
        RC_85af8fa7a4c9fca4ade94e1edb0d5f7d.init();
    }
});

define("OutSystemsUI.model$RL_7a204c55a54d7fc5a49ee67743d390cb", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_85af8fa7a4c9fca4ade94e1edb0d5f7d"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_7a204c55a54d7fc5a49ee67743d390cb extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_85af8fa7a4c9fca4ade94e1edb0d5f7d;
        }

    }

    OutSystemsUIModel.RL_7a204c55a54d7fc5a49ee67743d390cb = RL_7a204c55a54d7fc5a49ee67743d390cb;

});

define("OutSystemsUI.model$EN_7a28bfa00272cf999603d060780d47ecEntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class EN_7a28bfa00272cf999603d060780d47ecEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Mode", "modeAttr", "Mode", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_7a28bfa00272cf999603d060780d47ecEntityRecord(new EN_7a28bfa00272cf999603d060780d47ecEntityRecord.RecordClass({
                    modeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.EN_7a28bfa00272cf999603d060780d47ecEntityRecord = EN_7a28bfa00272cf999603d060780d47ecEntityRecordInner;

        var EN_7a28bfa00272cf999603d060780d47ecEntityRecord = EN_7a28bfa00272cf999603d060780d47ecEntityRecordInner;
        EN_7a28bfa00272cf999603d060780d47ecEntityRecord.init();
    }
});

define("OutSystemsUI.model$RL_7ab705bfa7ab8be3383dd7312431c92b", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_0995bd60993005a912f016117c0f5fd9Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_7ab705bfa7ab8be3383dd7312431c92b extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_0995bd60993005a912f016117c0f5fd9Structure;
        }

    }

    OutSystemsUIModel.RL_7ab705bfa7ab8be3383dd7312431c92b = RL_7ab705bfa7ab8be3383dd7312431c92b;

});

define("OutSystemsUI.model$RL_7afe2e3802b1138fe7c019f238334de4", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_1583be5d90a94b6a73170ffa868eecc5"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_7afe2e3802b1138fe7c019f238334de4 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_1583be5d90a94b6a73170ffa868eecc5;
        }

    }

    OutSystemsUIModel.RL_7afe2e3802b1138fe7c019f238334de4 = RL_7afe2e3802b1138fe7c019f238334de4;

});

define("OutSystemsUI.model$RC_de4b3bacd4ec5ee23880b64e848f90da", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_13c131829a33cb5bedb5c64aa6f4add2Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_de4b3bacd4ec5ee23880b64e848f90daInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ReturnMessage", "returnMessageAttr", "ReturnMessage", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_13c131829a33cb5bedb5c64aa6f4add2Structure());
                    }, true, OutSystemsUIModel.ST_13c131829a33cb5bedb5c64aa6f4add2Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_de4b3bacd4ec5ee23880b64e848f90da(new RC_de4b3bacd4ec5ee23880b64e848f90da.RecordClass({
                    returnMessageAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_de4b3bacd4ec5ee23880b64e848f90da = RC_de4b3bacd4ec5ee23880b64e848f90daInner;

        RC_de4b3bacd4ec5ee23880b64e848f90daInner._isAnonymousRecord = true;
        RC_de4b3bacd4ec5ee23880b64e848f90daInner.UniqueId = "de4b3bac-d4ec-5ee2-3880-b64e848f90da";
        var RC_de4b3bacd4ec5ee23880b64e848f90da = RC_de4b3bacd4ec5ee23880b64e848f90daInner;
        RC_de4b3bacd4ec5ee23880b64e848f90da.init();
    }
});

define("OutSystemsUI.model$RL_7b51ea73c091c181cde3054c500bd942", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_de4b3bacd4ec5ee23880b64e848f90da"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_7b51ea73c091c181cde3054c500bd942 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_de4b3bacd4ec5ee23880b64e848f90da;
        }

    }

    OutSystemsUIModel.RL_7b51ea73c091c181cde3054c500bd942 = RL_7b51ea73c091c181cde3054c500bd942;

});

define("OutSystemsUI.model$EN_c521eea762e9dd37e04340f2864e8aa0EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class EN_c521eea762e9dd37e04340f2864e8aa0EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Mode", "modeAttr", "Mode", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_c521eea762e9dd37e04340f2864e8aa0EntityRecord(new EN_c521eea762e9dd37e04340f2864e8aa0EntityRecord.RecordClass({
                    modeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.EN_c521eea762e9dd37e04340f2864e8aa0EntityRecord = EN_c521eea762e9dd37e04340f2864e8aa0EntityRecordInner;

        var EN_c521eea762e9dd37e04340f2864e8aa0EntityRecord = EN_c521eea762e9dd37e04340f2864e8aa0EntityRecordInner;
        EN_c521eea762e9dd37e04340f2864e8aa0EntityRecord.init();
    }
});

define("OutSystemsUI.model$RL_7bd41f8d00f41c9c5d00f63f12019938", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_c521eea762e9dd37e04340f2864e8aa0EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_7bd41f8d00f41c9c5d00f63f12019938 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.EN_c521eea762e9dd37e04340f2864e8aa0EntityRecord;
        }

    }

    OutSystemsUIModel.RL_7bd41f8d00f41c9c5d00f63f12019938 = RL_7bd41f8d00f41c9c5d00f63f12019938;

});

define("OutSystemsUI.model$RL_7c155d6f9991d43524221e40a2ecb02b", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_59aacee1cb91627a0f497366b24e4500EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_7c155d6f9991d43524221e40a2ecb02b extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.EN_59aacee1cb91627a0f497366b24e4500EntityRecord;
        }

    }

    OutSystemsUIModel.RL_7c155d6f9991d43524221e40a2ecb02b = RL_7c155d6f9991d43524221e40a2ecb02b;

});

define("OutSystemsUI.model$RC_e5ad8f04c38047441643c6868992c277", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_09173c1b0f41f719b9efd6430c2e737dStructure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_e5ad8f04c38047441643c6868992c277Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("NotificationOptionalConfigs", "notificationOptionalConfigsAttr", "NotificationOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_09173c1b0f41f719b9efd6430c2e737dStructure());
                    }, true, OutSystemsUIModel.ST_09173c1b0f41f719b9efd6430c2e737dStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_e5ad8f04c38047441643c6868992c277(new RC_e5ad8f04c38047441643c6868992c277.RecordClass({
                    notificationOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_e5ad8f04c38047441643c6868992c277 = RC_e5ad8f04c38047441643c6868992c277Inner;

        RC_e5ad8f04c38047441643c6868992c277Inner._isAnonymousRecord = true;
        RC_e5ad8f04c38047441643c6868992c277Inner.UniqueId = "e5ad8f04-c380-4744-1643-c6868992c277";
        var RC_e5ad8f04c38047441643c6868992c277 = RC_e5ad8f04c38047441643c6868992c277Inner;
        RC_e5ad8f04c38047441643c6868992c277.init();
    }
});

define("OutSystemsUI.model$RL_7d09eb138f7abf181049d020e739a58f", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_e5ad8f04c38047441643c6868992c277"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_7d09eb138f7abf181049d020e739a58f extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_e5ad8f04c38047441643c6868992c277;
        }

    }

    OutSystemsUIModel.RL_7d09eb138f7abf181049d020e739a58f = RL_7d09eb138f7abf181049d020e739a58f;

});

define("OutSystemsUI.model$RC_7d9f2e2bc8ad21193b3b806a3a092d80", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_0d18385ed976d2d74e8cea1d77078409Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_7d9f2e2bc8ad21193b3b806a3a092d80Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("DropdownServerSide_InternalConfigs", "dropdownServerSide_InternalConfigsAttr", "DropdownServerSide_InternalConfigs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_0d18385ed976d2d74e8cea1d77078409Structure());
                    }, true, OutSystemsUIModel.ST_0d18385ed976d2d74e8cea1d77078409Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_7d9f2e2bc8ad21193b3b806a3a092d80(new RC_7d9f2e2bc8ad21193b3b806a3a092d80.RecordClass({
                    dropdownServerSide_InternalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_7d9f2e2bc8ad21193b3b806a3a092d80 = RC_7d9f2e2bc8ad21193b3b806a3a092d80Inner;

        RC_7d9f2e2bc8ad21193b3b806a3a092d80Inner._isAnonymousRecord = true;
        RC_7d9f2e2bc8ad21193b3b806a3a092d80Inner.UniqueId = "7d9f2e2b-c8ad-2119-3b3b-806a3a092d80";
        var RC_7d9f2e2bc8ad21193b3b806a3a092d80 = RC_7d9f2e2bc8ad21193b3b806a3a092d80Inner;
        RC_7d9f2e2bc8ad21193b3b806a3a092d80.init();
    }
});

define("OutSystemsUI.model$EN_7e19f04989174b13ab8c3badf82f69b4EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class EN_7e19f04989174b13ab8c3badf82f69b4EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Mode", "modeAttr", "Mode", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_7e19f04989174b13ab8c3badf82f69b4EntityRecord(new EN_7e19f04989174b13ab8c3badf82f69b4EntityRecord.RecordClass({
                    modeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.EN_7e19f04989174b13ab8c3badf82f69b4EntityRecord = EN_7e19f04989174b13ab8c3badf82f69b4EntityRecordInner;

        var EN_7e19f04989174b13ab8c3badf82f69b4EntityRecord = EN_7e19f04989174b13ab8c3badf82f69b4EntityRecordInner;
        EN_7e19f04989174b13ab8c3badf82f69b4EntityRecord.init();
    }
});

define("OutSystemsUI.model$RC_b5f68720e8ed79c9aa70970bcdd12b24", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_7aeb6b0becaab355b4a3ae2d0ba331eaStructure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_b5f68720e8ed79c9aa70970bcdd12b24Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("TabsContentItem_InternalConfig", "tabsContentItem_InternalConfigAttr", "TabsContentItem_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_7aeb6b0becaab355b4a3ae2d0ba331eaStructure());
                    }, true, OutSystemsUIModel.ST_7aeb6b0becaab355b4a3ae2d0ba331eaStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_b5f68720e8ed79c9aa70970bcdd12b24(new RC_b5f68720e8ed79c9aa70970bcdd12b24.RecordClass({
                    tabsContentItem_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_b5f68720e8ed79c9aa70970bcdd12b24 = RC_b5f68720e8ed79c9aa70970bcdd12b24Inner;

        RC_b5f68720e8ed79c9aa70970bcdd12b24Inner._isAnonymousRecord = true;
        RC_b5f68720e8ed79c9aa70970bcdd12b24Inner.UniqueId = "b5f68720-e8ed-79c9-aa70-970bcdd12b24";
        var RC_b5f68720e8ed79c9aa70970bcdd12b24 = RC_b5f68720e8ed79c9aa70970bcdd12b24Inner;
        RC_b5f68720e8ed79c9aa70970bcdd12b24.init();
    }
});

define("OutSystemsUI.model$RL_7e9847cbd460e629ebec5413d11b35ed", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_b5f68720e8ed79c9aa70970bcdd12b24"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_7e9847cbd460e629ebec5413d11b35ed extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_b5f68720e8ed79c9aa70970bcdd12b24;
        }

    }

    OutSystemsUIModel.RL_7e9847cbd460e629ebec5413d11b35ed = RL_7e9847cbd460e629ebec5413d11b35ed;

});

define("OutSystemsUI.model$RC_7f56ea63061432843ab4dd16f4578b32", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_7a28bfa00272cf999603d060780d47ecEntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_7f56ea63061432843ab4dd16f4578b32Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("DropdownType", "dropdownTypeAttr", "DropdownType", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_7a28bfa00272cf999603d060780d47ecEntityRecord());
                    }, true, OutSystemsUIModel.EN_7a28bfa00272cf999603d060780d47ecEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_7f56ea63061432843ab4dd16f4578b32(new RC_7f56ea63061432843ab4dd16f4578b32.RecordClass({
                    dropdownTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_7f56ea63061432843ab4dd16f4578b32 = RC_7f56ea63061432843ab4dd16f4578b32Inner;

        RC_7f56ea63061432843ab4dd16f4578b32Inner._isAnonymousRecord = true;
        RC_7f56ea63061432843ab4dd16f4578b32Inner.UniqueId = "7f56ea63-0614-3284-3ab4-dd16f4578b32";
        var RC_7f56ea63061432843ab4dd16f4578b32 = RC_7f56ea63061432843ab4dd16f4578b32Inner;
        RC_7f56ea63061432843ab4dd16f4578b32.init();
    }
});

define("OutSystemsUI.model$RL_806e82a94733d0af9e43960265151f80", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_bc4abb4233d9ce894e855c520a20c76fStructure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_806e82a94733d0af9e43960265151f80 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_bc4abb4233d9ce894e855c520a20c76fStructure;
        }

    }

    OutSystemsUIModel.RL_806e82a94733d0af9e43960265151f80 = RL_806e82a94733d0af9e43960265151f80;

});

define("OutSystemsUI.model$RL_80cc885cccb8696830df8ec337645f92", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_4fc16da695108ad1b034b7256ffa868d"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_80cc885cccb8696830df8ec337645f92 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_4fc16da695108ad1b034b7256ffa868d;
        }

    }

    OutSystemsUIModel.RL_80cc885cccb8696830df8ec337645f92 = RL_80cc885cccb8696830df8ec337645f92;

});

define("OutSystemsUI.model$RL_813e0996d705e3c45deaefe05bef3a22", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_12cb0160c5b908b286f2418f6f00a5eb"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_813e0996d705e3c45deaefe05bef3a22 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_12cb0160c5b908b286f2418f6f00a5eb;
        }

    }

    OutSystemsUIModel.RL_813e0996d705e3c45deaefe05bef3a22 = RL_813e0996d705e3c45deaefe05bef3a22;

});

define("OutSystemsUI.model$RC_81cffcb474124022b5e4e9bef9a608da", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_4f70c42b393d853a53e093e196f4b683Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_81cffcb474124022b5e4e9bef9a608daInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("TabsHeaderItem_InternalConfig", "tabsHeaderItem_InternalConfigAttr", "TabsHeaderItem_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_4f70c42b393d853a53e093e196f4b683Structure());
                    }, true, OutSystemsUIModel.ST_4f70c42b393d853a53e093e196f4b683Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_81cffcb474124022b5e4e9bef9a608da(new RC_81cffcb474124022b5e4e9bef9a608da.RecordClass({
                    tabsHeaderItem_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_81cffcb474124022b5e4e9bef9a608da = RC_81cffcb474124022b5e4e9bef9a608daInner;

        RC_81cffcb474124022b5e4e9bef9a608daInner._isAnonymousRecord = true;
        RC_81cffcb474124022b5e4e9bef9a608daInner.UniqueId = "81cffcb4-7412-4022-b5e4-e9bef9a608da";
        var RC_81cffcb474124022b5e4e9bef9a608da = RC_81cffcb474124022b5e4e9bef9a608daInner;
        RC_81cffcb474124022b5e4e9bef9a608da.init();
    }
});

define("OutSystemsUI.model$RL_8434dd7ea7e3ca102ba9242db03d7a59", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_256310aee13520906f2ba115af101f62Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_8434dd7ea7e3ca102ba9242db03d7a59 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_256310aee13520906f2ba115af101f62Structure;
        }

    }

    OutSystemsUIModel.RL_8434dd7ea7e3ca102ba9242db03d7a59 = RL_8434dd7ea7e3ca102ba9242db03d7a59;

});

define("OutSystemsUI.model$RL_843bbe6b5508d5a1ce4c6547db1f1385", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_34444d0742578c128ebc8b2594439346Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_843bbe6b5508d5a1ce4c6547db1f1385 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_34444d0742578c128ebc8b2594439346Structure;
        }

    }

    OutSystemsUIModel.RL_843bbe6b5508d5a1ce4c6547db1f1385 = RL_843bbe6b5508d5a1ce4c6547db1f1385;

});

define("OutSystemsUI.model$EN_849d11ab47adc426b5ce8d8c815c4fbfEntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class EN_849d11ab47adc426b5ce8d8c815c4fbfEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Color", "colorAttr", "Color", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.EN_849d11ab47adc426b5ce8d8c815c4fbfEntityRecord = EN_849d11ab47adc426b5ce8d8c815c4fbfEntityRecordInner;

        var EN_849d11ab47adc426b5ce8d8c815c4fbfEntityRecord = EN_849d11ab47adc426b5ce8d8c815c4fbfEntityRecordInner;
        EN_849d11ab47adc426b5ce8d8c815c4fbfEntityRecord.init();
    }
});

define("OutSystemsUI.model$RL_851e3aab1d06720d1786c3bd3c18c1aa", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_5abb10cad8e1029cd3a5a677a5bd89aeStructure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_851e3aab1d06720d1786c3bd3c18c1aa extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_5abb10cad8e1029cd3a5a677a5bd89aeStructure;
        }

    }

    OutSystemsUIModel.RL_851e3aab1d06720d1786c3bd3c18c1aa = RL_851e3aab1d06720d1786c3bd3c18c1aa;

});

define("OutSystemsUI.model$RL_8575155378978edb6ccb8c6d660a9505", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_7e19f04989174b13ab8c3badf82f69b4EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_8575155378978edb6ccb8c6d660a9505 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.EN_7e19f04989174b13ab8c3badf82f69b4EntityRecord;
        }

    }

    OutSystemsUIModel.RL_8575155378978edb6ccb8c6d660a9505 = RL_8575155378978edb6ccb8c6d660a9505;

});

define("OutSystemsUI.model$RL_86a710fa3061d711a5a3426a0542a93a", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_3af5daa8009f6f7f8a09f38255a62078"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_86a710fa3061d711a5a3426a0542a93a extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_3af5daa8009f6f7f8a09f38255a62078;
        }

    }

    OutSystemsUIModel.RL_86a710fa3061d711a5a3426a0542a93a = RL_86a710fa3061d711a5a3426a0542a93a;

});

define("OutSystemsUI.model$RC_87351e3b0fa2ca59cf6c6749c6405006", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_849d11ab47adc426b5ce8d8c815c4fbfEntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_87351e3b0fa2ca59cf6c6749c6405006Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Color", "colorAttr", "Color", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_849d11ab47adc426b5ce8d8c815c4fbfEntityRecord());
                    }, true, OutSystemsUIModel.EN_849d11ab47adc426b5ce8d8c815c4fbfEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_87351e3b0fa2ca59cf6c6749c6405006(new RC_87351e3b0fa2ca59cf6c6749c6405006.RecordClass({
                    colorAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_87351e3b0fa2ca59cf6c6749c6405006 = RC_87351e3b0fa2ca59cf6c6749c6405006Inner;

        RC_87351e3b0fa2ca59cf6c6749c6405006Inner._isAnonymousRecord = true;
        RC_87351e3b0fa2ca59cf6c6749c6405006Inner.UniqueId = "87351e3b-0fa2-ca59-cf6c-6749c6405006";
        var RC_87351e3b0fa2ca59cf6c6749c6405006 = RC_87351e3b0fa2ca59cf6c6749c6405006Inner;
        RC_87351e3b0fa2ca59cf6c6749c6405006.init();
    }
});

define("OutSystemsUI.model$RL_88055e7d64e095cc2917570a8093617e", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_963c357dbc45b19fade654e21b1521d0Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_88055e7d64e095cc2917570a8093617e extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_963c357dbc45b19fade654e21b1521d0Structure;
        }

    }

    OutSystemsUIModel.RL_88055e7d64e095cc2917570a8093617e = RL_88055e7d64e095cc2917570a8093617e;

});

define("OutSystemsUI.model$RC_98ce383abd92f0f4c51d49a4fcc3bfcc", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_98ce383abd92f0f4c51d49a4fcc3bfccInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("IsDisable", "isDisableAttr", "IsDisable", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("IsRemoveItems", "isRemoveItemsAttr", "IsRemoveItems", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.RC_98ce383abd92f0f4c51d49a4fcc3bfcc = RC_98ce383abd92f0f4c51d49a4fcc3bfccInner;

        RC_98ce383abd92f0f4c51d49a4fcc3bfccInner._isAnonymousRecord = true;
        RC_98ce383abd92f0f4c51d49a4fcc3bfccInner.UniqueId = "98ce383a-bd92-f0f4-c51d-49a4fcc3bfcc";
        var RC_98ce383abd92f0f4c51d49a4fcc3bfcc = RC_98ce383abd92f0f4c51d49a4fcc3bfccInner;
        RC_98ce383abd92f0f4c51d49a4fcc3bfcc.init();
    }
});

define("OutSystemsUI.model$RL_8998aef405ae5fbccecf77293a72a28a", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_98ce383abd92f0f4c51d49a4fcc3bfcc"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_8998aef405ae5fbccecf77293a72a28a extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_98ce383abd92f0f4c51d49a4fcc3bfcc;
        }

    }

    OutSystemsUIModel.RL_8998aef405ae5fbccecf77293a72a28a = RL_8998aef405ae5fbccecf77293a72a28a;

});

define("OutSystemsUI.model$RL_8add23b891a53c086b7017fd4cdd211b", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_a14a98f7fea6a66cbe59ce2905b45c09EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_8add23b891a53c086b7017fd4cdd211b extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.EN_a14a98f7fea6a66cbe59ce2905b45c09EntityRecord;
        }

    }

    OutSystemsUIModel.RL_8add23b891a53c086b7017fd4cdd211b = RL_8add23b891a53c086b7017fd4cdd211b;

});

define("OutSystemsUI.model$RC_f52343ea94aab4a44927e9cbc0e79a19", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_46bd5f77d899939eaf145ae01d3efd6bStructure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_f52343ea94aab4a44927e9cbc0e79a19Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Notification_InternalConfig", "notification_InternalConfigAttr", "Notification_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_46bd5f77d899939eaf145ae01d3efd6bStructure());
                    }, true, OutSystemsUIModel.ST_46bd5f77d899939eaf145ae01d3efd6bStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_f52343ea94aab4a44927e9cbc0e79a19(new RC_f52343ea94aab4a44927e9cbc0e79a19.RecordClass({
                    notification_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_f52343ea94aab4a44927e9cbc0e79a19 = RC_f52343ea94aab4a44927e9cbc0e79a19Inner;

        RC_f52343ea94aab4a44927e9cbc0e79a19Inner._isAnonymousRecord = true;
        RC_f52343ea94aab4a44927e9cbc0e79a19Inner.UniqueId = "f52343ea-94aa-b4a4-4927-e9cbc0e79a19";
        var RC_f52343ea94aab4a44927e9cbc0e79a19 = RC_f52343ea94aab4a44927e9cbc0e79a19Inner;
        RC_f52343ea94aab4a44927e9cbc0e79a19.init();
    }
});

define("OutSystemsUI.model$RL_8b3d3d8dfdc8305db5da1ea630a7c3be", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_f52343ea94aab4a44927e9cbc0e79a19"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_8b3d3d8dfdc8305db5da1ea630a7c3be extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_f52343ea94aab4a44927e9cbc0e79a19;
        }

    }

    OutSystemsUIModel.RL_8b3d3d8dfdc8305db5da1ea630a7c3be = RL_8b3d3d8dfdc8305db5da1ea630a7c3be;

});

define("OutSystemsUI.model$RC_8d60218511e7c5a6826e7f1bde0eda29", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_3a1bf32d2ff94c720f1efbdad7281777EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_8d60218511e7c5a6826e7f1bde0eda29Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("DatePickerProvider", "datePickerProviderAttr", "DatePickerProvider", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_3a1bf32d2ff94c720f1efbdad7281777EntityRecord());
                    }, true, OutSystemsUIModel.EN_3a1bf32d2ff94c720f1efbdad7281777EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_8d60218511e7c5a6826e7f1bde0eda29(new RC_8d60218511e7c5a6826e7f1bde0eda29.RecordClass({
                    datePickerProviderAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_8d60218511e7c5a6826e7f1bde0eda29 = RC_8d60218511e7c5a6826e7f1bde0eda29Inner;

        RC_8d60218511e7c5a6826e7f1bde0eda29Inner._isAnonymousRecord = true;
        RC_8d60218511e7c5a6826e7f1bde0eda29Inner.UniqueId = "8d602185-11e7-c5a6-826e-7f1bde0eda29";
        var RC_8d60218511e7c5a6826e7f1bde0eda29 = RC_8d60218511e7c5a6826e7f1bde0eda29Inner;
        RC_8d60218511e7c5a6826e7f1bde0eda29.init();
    }
});

define("OutSystemsUI.model$RL_8e0fc5c9e799d27970a97b6552ea83ed", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_1ea63146d7f1d969afc206832e751192"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_8e0fc5c9e799d27970a97b6552ea83ed extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_1ea63146d7f1d969afc206832e751192;
        }

    }

    OutSystemsUIModel.RL_8e0fc5c9e799d27970a97b6552ea83ed = RL_8e0fc5c9e799d27970a97b6552ea83ed;

});

define("OutSystemsUI.model$RC_8f31728044d1321864213488837bc67a", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_613242ff7dd22d356200cb1f89298a39Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_8f31728044d1321864213488837bc67aInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("TimePicker_InternalConfig", "timePicker_InternalConfigAttr", "TimePicker_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_613242ff7dd22d356200cb1f89298a39Structure());
                    }, true, OutSystemsUIModel.ST_613242ff7dd22d356200cb1f89298a39Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_8f31728044d1321864213488837bc67a(new RC_8f31728044d1321864213488837bc67a.RecordClass({
                    timePicker_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_8f31728044d1321864213488837bc67a = RC_8f31728044d1321864213488837bc67aInner;

        RC_8f31728044d1321864213488837bc67aInner._isAnonymousRecord = true;
        RC_8f31728044d1321864213488837bc67aInner.UniqueId = "8f317280-44d1-3218-6421-3488837bc67a";
        var RC_8f31728044d1321864213488837bc67a = RC_8f31728044d1321864213488837bc67aInner;
        RC_8f31728044d1321864213488837bc67a.init();
    }
});

define("OutSystemsUI.model$RL_8f663be7596d4724f6146bc0b1d8cb69", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_5c08eaa15b890a2d617cabe547c34f0bStructure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_8f663be7596d4724f6146bc0b1d8cb69 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_5c08eaa15b890a2d617cabe547c34f0bStructure;
        }

    }

    OutSystemsUIModel.RL_8f663be7596d4724f6146bc0b1d8cb69 = RL_8f663be7596d4724f6146bc0b1d8cb69;

});

define("OutSystemsUI.model$RL_90540fb356a9f06dc487d0623c648999", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_45a33caf5ebb3dedd109c21fe6ae3d86"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_90540fb356a9f06dc487d0623c648999 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_45a33caf5ebb3dedd109c21fe6ae3d86;
        }

    }

    OutSystemsUIModel.RL_90540fb356a9f06dc487d0623c648999 = RL_90540fb356a9f06dc487d0623c648999;

});

define("OutSystemsUI.model$RC_c3613394da5ea68f302177112ad784ed", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_c3613394da5ea68f302177112ad784edInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Direction", "directionAttr", "Direction", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("InitialValue", "initialValueAttr", "InitialValue", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true),
                    this.attr("MaxValue", "maxValueAttr", "MaxValue", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true),
                    this.attr("MinValue", "minValueAttr", "MinValue", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true),
                    this.attr("Step", "stepAttr", "Step", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true),
                    this.attr("ChangeEventDuringSlide", "changeEventDuringSlideAttr", "ChangeEventDuringSlide", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("IsDisabled", "isDisabledAttr", "IsDisabled", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("IsVertical", "isVerticalAttr", "IsVertical", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("ShowPips", "showPipsAttr", "ShowPips", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("PipsStep", "pipsStepAttr", "PipsStep", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("VerticalHeight", "verticalHeightAttr", "VerticalHeight", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.RC_c3613394da5ea68f302177112ad784ed = RC_c3613394da5ea68f302177112ad784edInner;

        RC_c3613394da5ea68f302177112ad784edInner._isAnonymousRecord = true;
        RC_c3613394da5ea68f302177112ad784edInner.UniqueId = "c3613394-da5e-a68f-3021-77112ad784ed";
        var RC_c3613394da5ea68f302177112ad784ed = RC_c3613394da5ea68f302177112ad784edInner;
        RC_c3613394da5ea68f302177112ad784ed.init();
    }
});

define("OutSystemsUI.model$RL_914da2be0748baaaf7570352c3c10799", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_c3613394da5ea68f302177112ad784ed"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_914da2be0748baaaf7570352c3c10799 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_c3613394da5ea68f302177112ad784ed;
        }

    }

    OutSystemsUIModel.RL_914da2be0748baaaf7570352c3c10799 = RL_914da2be0748baaaf7570352c3c10799;

});

define("OutSystemsUI.model$RL_9155b46cc5c187efb7cc10c67b592005", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_4028c83435ff8f3fa19c27e5a3252dd5"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_9155b46cc5c187efb7cc10c67b592005 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_4028c83435ff8f3fa19c27e5a3252dd5;
        }

    }

    OutSystemsUIModel.RL_9155b46cc5c187efb7cc10c67b592005 = RL_9155b46cc5c187efb7cc10c67b592005;

});

define("OutSystemsUI.model$RL_919d8bc896529858c8cc8f0f3e5cb019", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_4d77cfdd567b208680377834fc8205a2"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_919d8bc896529858c8cc8f0f3e5cb019 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_4d77cfdd567b208680377834fc8205a2;
        }

    }

    OutSystemsUIModel.RL_919d8bc896529858c8cc8f0f3e5cb019 = RL_919d8bc896529858c8cc8f0f3e5cb019;

});

define("OutSystemsUI.model$RL_9218ab2195edc65f2e39b1f9240d7383", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_098ae17f520233165dd0526529ff8852"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_9218ab2195edc65f2e39b1f9240d7383 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_098ae17f520233165dd0526529ff8852;
        }

    }

    OutSystemsUIModel.RL_9218ab2195edc65f2e39b1f9240d7383 = RL_9218ab2195edc65f2e39b1f9240d7383;

});

define("OutSystemsUI.model$RL_946153d1b4948e5eab31756e5c1159f1", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_7a28bfa00272cf999603d060780d47ecEntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_946153d1b4948e5eab31756e5c1159f1 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.EN_7a28bfa00272cf999603d060780d47ecEntityRecord;
        }

    }

    OutSystemsUIModel.RL_946153d1b4948e5eab31756e5c1159f1 = RL_946153d1b4948e5eab31756e5c1159f1;

});

define("OutSystemsUI.model$RL_95d0d522cef60364076f377317e08b52", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_6510d2524fe77fcc6c285159d4000cfbStructure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_95d0d522cef60364076f377317e08b52 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_6510d2524fe77fcc6c285159d4000cfbStructure;
        }

    }

    OutSystemsUIModel.RL_95d0d522cef60364076f377317e08b52 = RL_95d0d522cef60364076f377317e08b52;

});

define("OutSystemsUI.model$RL_974e629f62892897fa725e3d52373ce1", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_7925a19e6fd0a09e9058a96c7f19b104"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_974e629f62892897fa725e3d52373ce1 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_7925a19e6fd0a09e9058a96c7f19b104;
        }

    }

    OutSystemsUIModel.RL_974e629f62892897fa725e3d52373ce1 = RL_974e629f62892897fa725e3d52373ce1;

});

define("OutSystemsUI.model$RL_9797ec0d56ee4ca8b93bd458944f1a08", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_646e6c02297b69c2ac8936bd87cff545"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_9797ec0d56ee4ca8b93bd458944f1a08 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_646e6c02297b69c2ac8936bd87cff545;
        }

    }

    OutSystemsUIModel.RL_9797ec0d56ee4ca8b93bd458944f1a08 = RL_9797ec0d56ee4ca8b93bd458944f1a08;

});

define("OutSystemsUI.model$RL_990ec909aac501b1bcb3004f4a88bfe6", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_3a1bf32d2ff94c720f1efbdad7281777EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_990ec909aac501b1bcb3004f4a88bfe6 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.EN_3a1bf32d2ff94c720f1efbdad7281777EntityRecord;
        }

    }

    OutSystemsUIModel.RL_990ec909aac501b1bcb3004f4a88bfe6 = RL_990ec909aac501b1bcb3004f4a88bfe6;

});

define("OutSystemsUI.model$RC_ab72f035aa34ddb5ec313dc02adb1f18", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_7f8fd02aa7ee2ac6182b6b36e46460d9EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_ab72f035aa34ddb5ec313dc02adb1f18Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("AccordionIconPosition", "accordionIconPositionAttr", "AccordionIconPosition", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_7f8fd02aa7ee2ac6182b6b36e46460d9EntityRecord());
                    }, true, OutSystemsUIModel.EN_7f8fd02aa7ee2ac6182b6b36e46460d9EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_ab72f035aa34ddb5ec313dc02adb1f18(new RC_ab72f035aa34ddb5ec313dc02adb1f18.RecordClass({
                    accordionIconPositionAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_ab72f035aa34ddb5ec313dc02adb1f18 = RC_ab72f035aa34ddb5ec313dc02adb1f18Inner;

        RC_ab72f035aa34ddb5ec313dc02adb1f18Inner._isAnonymousRecord = true;
        RC_ab72f035aa34ddb5ec313dc02adb1f18Inner.UniqueId = "ab72f035-aa34-ddb5-ec31-3dc02adb1f18";
        var RC_ab72f035aa34ddb5ec313dc02adb1f18 = RC_ab72f035aa34ddb5ec313dc02adb1f18Inner;
        RC_ab72f035aa34ddb5ec313dc02adb1f18.init();
    }
});

define("OutSystemsUI.model$RL_996fbee06ca423494c6785889a54264f", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_ab72f035aa34ddb5ec313dc02adb1f18"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_996fbee06ca423494c6785889a54264f extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_ab72f035aa34ddb5ec313dc02adb1f18;
        }

    }

    OutSystemsUIModel.RL_996fbee06ca423494c6785889a54264f = RL_996fbee06ca423494c6785889a54264f;

});

define("OutSystemsUI.model$RL_9af508c2bc49a313fc433219cb3052d0", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_14b00646f6cd842655571448758d0a23Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_9af508c2bc49a313fc433219cb3052d0 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_14b00646f6cd842655571448758d0a23Structure;
        }

    }

    OutSystemsUIModel.RL_9af508c2bc49a313fc433219cb3052d0 = RL_9af508c2bc49a313fc433219cb3052d0;

});

define("OutSystemsUI.model$RC_c506c74ca8aaa04b11f3b2041bb6669f", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_9cac82fc47e32e1503b2dbc00140aa98Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_c506c74ca8aaa04b11f3b2041bb6669fInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Tooltip_InternalConfig", "tooltip_InternalConfigAttr", "Tooltip_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_9cac82fc47e32e1503b2dbc00140aa98Structure());
                    }, true, OutSystemsUIModel.ST_9cac82fc47e32e1503b2dbc00140aa98Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_c506c74ca8aaa04b11f3b2041bb6669f(new RC_c506c74ca8aaa04b11f3b2041bb6669f.RecordClass({
                    tooltip_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_c506c74ca8aaa04b11f3b2041bb6669f = RC_c506c74ca8aaa04b11f3b2041bb6669fInner;

        RC_c506c74ca8aaa04b11f3b2041bb6669fInner._isAnonymousRecord = true;
        RC_c506c74ca8aaa04b11f3b2041bb6669fInner.UniqueId = "c506c74c-a8aa-a04b-11f3-b2041bb6669f";
        var RC_c506c74ca8aaa04b11f3b2041bb6669f = RC_c506c74ca8aaa04b11f3b2041bb6669fInner;
        RC_c506c74ca8aaa04b11f3b2041bb6669f.init();
    }
});

define("OutSystemsUI.model$RL_9bf017f1e701e51f079aa12b453a76f1", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_c506c74ca8aaa04b11f3b2041bb6669f"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_9bf017f1e701e51f079aa12b453a76f1 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_c506c74ca8aaa04b11f3b2041bb6669f;
        }

    }

    OutSystemsUIModel.RL_9bf017f1e701e51f079aa12b453a76f1 = RL_9bf017f1e701e51f079aa12b453a76f1;

});

define("OutSystemsUI.model$RL_9c28fba2ad5d9bbe6b5a769d4094590b", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_3554b1e2806a5b827c457cdecc492d4a"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_9c28fba2ad5d9bbe6b5a769d4094590b extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_3554b1e2806a5b827c457cdecc492d4a;
        }

    }

    OutSystemsUIModel.RL_9c28fba2ad5d9bbe6b5a769d4094590b = RL_9c28fba2ad5d9bbe6b5a769d4094590b;

});

define("OutSystemsUI.model$EN_adf11bcbc411b5a0f498d25dd0ea882fEntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class EN_adf11bcbc411b5a0f498d25dd0ea882fEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Alert", "alertAttr", "Alert", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_adf11bcbc411b5a0f498d25dd0ea882fEntityRecord(new EN_adf11bcbc411b5a0f498d25dd0ea882fEntityRecord.RecordClass({
                    alertAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.EN_adf11bcbc411b5a0f498d25dd0ea882fEntityRecord = EN_adf11bcbc411b5a0f498d25dd0ea882fEntityRecordInner;

        var EN_adf11bcbc411b5a0f498d25dd0ea882fEntityRecord = EN_adf11bcbc411b5a0f498d25dd0ea882fEntityRecordInner;
        EN_adf11bcbc411b5a0f498d25dd0ea882fEntityRecord.init();
    }
});

define("OutSystemsUI.model$RC_9ca6a18cc49ca7246c44c0f7c2cef62a", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_adf11bcbc411b5a0f498d25dd0ea882fEntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_9ca6a18cc49ca7246c44c0f7c2cef62aInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Alert", "alertAttr", "Alert", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_adf11bcbc411b5a0f498d25dd0ea882fEntityRecord());
                    }, true, OutSystemsUIModel.EN_adf11bcbc411b5a0f498d25dd0ea882fEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_9ca6a18cc49ca7246c44c0f7c2cef62a(new RC_9ca6a18cc49ca7246c44c0f7c2cef62a.RecordClass({
                    alertAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_9ca6a18cc49ca7246c44c0f7c2cef62a = RC_9ca6a18cc49ca7246c44c0f7c2cef62aInner;

        RC_9ca6a18cc49ca7246c44c0f7c2cef62aInner._isAnonymousRecord = true;
        RC_9ca6a18cc49ca7246c44c0f7c2cef62aInner.UniqueId = "9ca6a18c-c49c-a724-6c44-c0f7c2cef62a";
        var RC_9ca6a18cc49ca7246c44c0f7c2cef62a = RC_9ca6a18cc49ca7246c44c0f7c2cef62aInner;
        RC_9ca6a18cc49ca7246c44c0f7c2cef62a.init();
    }
});

define("OutSystemsUI.model$ST_e3f9af4171d5e4a41700770295d05c77Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_e3f9af4171d5e4a41700770295d05c77StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ContentAutoHeight", "contentAutoHeightAttr", "ContentAutoHeight", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("JustifyHeaders", "justifyHeadersAttr", "JustifyHeaders", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_e3f9af4171d5e4a41700770295d05c77Structure = ST_e3f9af4171d5e4a41700770295d05c77StructureInner;

        var ST_e3f9af4171d5e4a41700770295d05c77Structure = ST_e3f9af4171d5e4a41700770295d05c77StructureInner;
        ST_e3f9af4171d5e4a41700770295d05c77Structure.init();
    }
});

define("OutSystemsUI.model$RC_b7283e2c6e9c6bcb5286d1ae04959554", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_e3f9af4171d5e4a41700770295d05c77Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_b7283e2c6e9c6bcb5286d1ae04959554Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("TabsOptionalConfigs", "tabsOptionalConfigsAttr", "TabsOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_e3f9af4171d5e4a41700770295d05c77Structure());
                    }, true, OutSystemsUIModel.ST_e3f9af4171d5e4a41700770295d05c77Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_b7283e2c6e9c6bcb5286d1ae04959554(new RC_b7283e2c6e9c6bcb5286d1ae04959554.RecordClass({
                    tabsOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_b7283e2c6e9c6bcb5286d1ae04959554 = RC_b7283e2c6e9c6bcb5286d1ae04959554Inner;

        RC_b7283e2c6e9c6bcb5286d1ae04959554Inner._isAnonymousRecord = true;
        RC_b7283e2c6e9c6bcb5286d1ae04959554Inner.UniqueId = "b7283e2c-6e9c-6bcb-5286-d1ae04959554";
        var RC_b7283e2c6e9c6bcb5286d1ae04959554 = RC_b7283e2c6e9c6bcb5286d1ae04959554Inner;
        RC_b7283e2c6e9c6bcb5286d1ae04959554.init();
    }
});

define("OutSystemsUI.model$RL_9e12f04bf3ce19087cbbf62097a9932a", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_b7283e2c6e9c6bcb5286d1ae04959554"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_9e12f04bf3ce19087cbbf62097a9932a extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_b7283e2c6e9c6bcb5286d1ae04959554;
        }

    }

    OutSystemsUIModel.RL_9e12f04bf3ce19087cbbf62097a9932a = RL_9e12f04bf3ce19087cbbf62097a9932a;

});

define("OutSystemsUI.model$RL_9e7bcabdb3b3258424c077ac40a6d519", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_27b48af5cc16a3b2165fd73e0270cad1Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_9e7bcabdb3b3258424c077ac40a6d519 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_27b48af5cc16a3b2165fd73e0270cad1Structure;
        }

    }

    OutSystemsUIModel.RL_9e7bcabdb3b3258424c077ac40a6d519 = RL_9e7bcabdb3b3258424c077ac40a6d519;

});

define("OutSystemsUI.model$RL_9e8eb507fc82c7005600a2499b6a668c", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_87351e3b0fa2ca59cf6c6749c6405006"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_9e8eb507fc82c7005600a2499b6a668c extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_87351e3b0fa2ca59cf6c6749c6405006;
        }

    }

    OutSystemsUIModel.RL_9e8eb507fc82c7005600a2499b6a668c = RL_9e8eb507fc82c7005600a2499b6a668c;

});

define("OutSystemsUI.model$RL_a30d2539b4ff7ed1b19c3e6514d069cf", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_3693d4da8f8fc784e4048b7b08e34c39EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_a30d2539b4ff7ed1b19c3e6514d069cf extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.EN_3693d4da8f8fc784e4048b7b08e34c39EntityRecord;
        }

    }

    OutSystemsUIModel.RL_a30d2539b4ff7ed1b19c3e6514d069cf = RL_a30d2539b4ff7ed1b19c3e6514d069cf;

});

define("OutSystemsUI.model$BasicTypeList<Text>", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class TextList extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OS.DataTypes.DataTypes.Text;
        }

    }

    OutSystemsUIModel.TextList = TextList;

});

define("OutSystemsUI.model$ST_ee4d16d56cd7c489ec094cc9fa0cd607Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_ee4d16d56cd7c489ec094cc9fa0cd607StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("additionalClasses", "additionalClassesAttr", "additionalClasses", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("aliasKey", "aliasKeyAttr", "aliasKey", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("allOptionsSelectedText", "allOptionsSelectedTextAttr", "allOptionsSelectedText", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("allowNewOption", "allowNewOptionAttr", "allowNewOption", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.booleanTypes.unset;
                    }, true),
                    this.attr("alwaysShowSelectedOptionsCount", "alwaysShowSelectedOptionsCountAttr", "alwaysShowSelectedOptionsCount", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.booleanTypes.unset;
                    }, true),
                    this.attr("alwaysShowSelectedOptionsLabel", "alwaysShowSelectedOptionsLabelAttr", "alwaysShowSelectedOptionsLabel", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.booleanTypes.false;
                    }, true),
                    this.attr("ariaLabelClearButtonText", "ariaLabelClearButtonTextAttr", "ariaLabelClearButtonText", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ariaLabelledby", "ariaLabelledbyAttr", "ariaLabelledby", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ariaLabelText", "ariaLabelTextAttr", "ariaLabelText", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("autofocus", "autofocusAttr", "autofocus", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.booleanTypes.unset;
                    }, true),
                    this.attr("autoSelectFirstOption", "autoSelectFirstOptionAttr", "autoSelectFirstOption", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.booleanTypes.unset;
                    }, true),
                    this.attr("descriptionKey", "descriptionKeyAttr", "descriptionKey", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("disableSelectAll", "disableSelectAllAttr", "disableSelectAll", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.booleanTypes.unset;
                    }, true),
                    this.attr("disableAllOptionsSelectedText", "disableAllOptionsSelectedTextAttr", "disableAllOptionsSelectedText", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.booleanTypes.unset;
                    }, true),
                    this.attr("disabledOptions", "disabledOptionsAttr", "disabledOptions", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
                    }, true, OS.DataTypes.TextList),
                    this.attr("disableOptionGroupCheckbox", "disableOptionGroupCheckboxAttr", "disableOptionGroupCheckbox", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.booleanTypes.unset;
                    }, true),
                    this.attr("disableValidation", "disableValidationAttr", "disableValidation", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.booleanTypes.unset;
                    }, true),
                    this.attr("dropboxWidth", "dropboxWidthAttr", "dropboxWidth", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("emptyValue", "emptyValueAttr", "emptyValue", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("enableSecureText", "enableSecureTextAttr", "enableSecureText", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.booleanTypes.unset;
                    }, true),
                    this.attr("focusSelectedOptionOnOpen", "focusSelectedOptionOnOpenAttr", "focusSelectedOptionOnOpen", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.booleanTypes.unset;
                    }, true),
                    this.attr("hideClearButton", "hideClearButtonAttr", "hideClearButton", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.booleanTypes.unset;
                    }, true),
                    this.attr("markSearchResults", "markSearchResultsAttr", "markSearchResults", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.booleanTypes.unset;
                    }, true),
                    this.attr("keepAlwaysOpen", "keepAlwaysOpenAttr", "keepAlwaysOpen", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.booleanTypes.unset;
                    }, true),
                    this.attr("labelKey", "labelKeyAttr", "labelKey", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("maxValues", "maxValuesAttr", "maxValues", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("maxWidth", "maxWidthAttr", "maxWidth", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("minValues", "minValuesAttr", "minValues", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("moreText", "moreTextAttr", "moreText", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("noOfDisplayValues", "noOfDisplayValuesAttr", "noOfDisplayValues", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("optionsCount", "optionsCountAttr", "optionsCount", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("optionHeight", "optionHeightAttr", "optionHeight", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("optionSelectedText", "optionSelectedTextAttr", "optionSelectedText", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("optionsSelectedText", "optionsSelectedTextAttr", "optionsSelectedText", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("popupDropboxBreakpoint", "popupDropboxBreakpointAttr", "popupDropboxBreakpoint", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("popupPosition", "popupPositionAttr", "popupPosition", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("position", "positionAttr", "position", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("required", "requiredAttr", "required", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.booleanTypes.unset;
                    }, true),
                    this.attr("search", "searchAttr", "search", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.booleanTypes.unset;
                    }, true),
                    this.attr("searchByStartsWith", "searchByStartsWithAttr", "searchByStartsWith", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.booleanTypes.unset;
                    }, true),
                    this.attr("searchFormLabel", "searchFormLabelAttr", "searchFormLabel", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("searchGroup", "searchGroupAttr", "searchGroup", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.booleanTypes.unset;
                    }, true),
                    this.attr("searchNormalize", "searchNormalizeAttr", "searchNormalize", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.booleanTypes.unset;
                    }, true),
                    this.attr("selectAllOnlyVisible", "selectAllOnlyVisibleAttr", "selectAllOnlyVisible", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.booleanTypes.unset;
                    }, true),
                    this.attr("selectAllText", "selectAllTextAttr", "selectAllText", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("showDropboxAsPopup", "showDropboxAsPopupAttr", "showDropboxAsPopup", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.booleanTypes.unset;
                    }, true),
                    this.attr("showOptionsOnlyOnSearch", "showOptionsOnlyOnSearchAttr", "showOptionsOnlyOnSearch", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.booleanTypes.unset;
                    }, true),
                    this.attr("showSelectedOptionsFirst", "showSelectedOptionsFirstAttr", "showSelectedOptionsFirst", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsUIModel.staticEntities.booleanTypes.unset;
                    }, true),
                    this.attr("textDirection", "textDirectionAttr", "textDirection", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("valueKey", "valueKeyAttr", "valueKey", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("zIndex", "zIndexAttr", "zIndex", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_ee4d16d56cd7c489ec094cc9fa0cd607Structure = ST_ee4d16d56cd7c489ec094cc9fa0cd607StructureInner;

        var ST_ee4d16d56cd7c489ec094cc9fa0cd607Structure = ST_ee4d16d56cd7c489ec094cc9fa0cd607StructureInner;
        ST_ee4d16d56cd7c489ec094cc9fa0cd607Structure.init();
    }
});

define("OutSystemsUI.model$RC_a34c029579f872c2fbb90741544ea7c6", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_ee4d16d56cd7c489ec094cc9fa0cd607Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_a34c029579f872c2fbb90741544ea7c6Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("VirtualSelectConfigs", "virtualSelectConfigsAttr", "VirtualSelectConfigs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_ee4d16d56cd7c489ec094cc9fa0cd607Structure());
                    }, true, OutSystemsUIModel.ST_ee4d16d56cd7c489ec094cc9fa0cd607Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_a34c029579f872c2fbb90741544ea7c6(new RC_a34c029579f872c2fbb90741544ea7c6.RecordClass({
                    virtualSelectConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_a34c029579f872c2fbb90741544ea7c6 = RC_a34c029579f872c2fbb90741544ea7c6Inner;

        RC_a34c029579f872c2fbb90741544ea7c6Inner._isAnonymousRecord = true;
        RC_a34c029579f872c2fbb90741544ea7c6Inner.UniqueId = "a34c0295-79f8-72c2-fbb9-0741544ea7c6";
        var RC_a34c029579f872c2fbb90741544ea7c6 = RC_a34c029579f872c2fbb90741544ea7c6Inner;
        RC_a34c029579f872c2fbb90741544ea7c6.init();
    }
});

define("OutSystemsUI.model$RL_a3746675e7afa0a411750081849db606", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_8aa0a121c98b5f44394f59c96ffee853EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_a3746675e7afa0a411750081849db606 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.EN_8aa0a121c98b5f44394f59c96ffee853EntityRecord;
        }

    }

    OutSystemsUIModel.RL_a3746675e7afa0a411750081849db606 = RL_a3746675e7afa0a411750081849db606;

});

define("OutSystemsUI.model$RC_e092deacf9bc8885dd34714ac00f33e4", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_5be8b31925746693c09b3f64c4898006EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_e092deacf9bc8885dd34714ac00f33e4Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Month", "monthAttr", "Month", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_5be8b31925746693c09b3f64c4898006EntityRecord());
                    }, true, OutSystemsUIModel.EN_5be8b31925746693c09b3f64c4898006EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_e092deacf9bc8885dd34714ac00f33e4(new RC_e092deacf9bc8885dd34714ac00f33e4.RecordClass({
                    monthAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_e092deacf9bc8885dd34714ac00f33e4 = RC_e092deacf9bc8885dd34714ac00f33e4Inner;

        RC_e092deacf9bc8885dd34714ac00f33e4Inner._isAnonymousRecord = true;
        RC_e092deacf9bc8885dd34714ac00f33e4Inner.UniqueId = "e092deac-f9bc-8885-dd34-714ac00f33e4";
        var RC_e092deacf9bc8885dd34714ac00f33e4 = RC_e092deacf9bc8885dd34714ac00f33e4Inner;
        RC_e092deacf9bc8885dd34714ac00f33e4.init();
    }
});

define("OutSystemsUI.model$RL_a48ae6e6aedeec60d7b351d47494aa56", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_e092deacf9bc8885dd34714ac00f33e4"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_a48ae6e6aedeec60d7b351d47494aa56 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_e092deacf9bc8885dd34714ac00f33e4;
        }

    }

    OutSystemsUIModel.RL_a48ae6e6aedeec60d7b351d47494aa56 = RL_a48ae6e6aedeec60d7b351d47494aa56;

});

define("OutSystemsUI.model$RC_b31d17ba3ccc14eaadd4d2faf9371f2d", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_1f7daead8658b6d9bc2681468edc5e3fEntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_b31d17ba3ccc14eaadd4d2faf9371f2dInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("DropdownProvider", "dropdownProviderAttr", "DropdownProvider", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_1f7daead8658b6d9bc2681468edc5e3fEntityRecord());
                    }, true, OutSystemsUIModel.EN_1f7daead8658b6d9bc2681468edc5e3fEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_b31d17ba3ccc14eaadd4d2faf9371f2d(new RC_b31d17ba3ccc14eaadd4d2faf9371f2d.RecordClass({
                    dropdownProviderAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_b31d17ba3ccc14eaadd4d2faf9371f2d = RC_b31d17ba3ccc14eaadd4d2faf9371f2dInner;

        RC_b31d17ba3ccc14eaadd4d2faf9371f2dInner._isAnonymousRecord = true;
        RC_b31d17ba3ccc14eaadd4d2faf9371f2dInner.UniqueId = "b31d17ba-3ccc-14ea-add4-d2faf9371f2d";
        var RC_b31d17ba3ccc14eaadd4d2faf9371f2d = RC_b31d17ba3ccc14eaadd4d2faf9371f2dInner;
        RC_b31d17ba3ccc14eaadd4d2faf9371f2d.init();
    }
});

define("OutSystemsUI.model$RL_a4d3e7059d940ae293c84c03c23eb5be", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_b31d17ba3ccc14eaadd4d2faf9371f2d"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_a4d3e7059d940ae293c84c03c23eb5be extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_b31d17ba3ccc14eaadd4d2faf9371f2d;
        }

    }

    OutSystemsUIModel.RL_a4d3e7059d940ae293c84c03c23eb5be = RL_a4d3e7059d940ae293c84c03c23eb5be;

});

define("OutSystemsUI.model$RC_a52e1739b8f4600af03587813c6346bb", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_5abb10cad8e1029cd3a5a677a5bd89aeStructure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_a52e1739b8f4600af03587813c6346bbInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("RangeSlider_InternalConfig", "rangeSlider_InternalConfigAttr", "RangeSlider_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_5abb10cad8e1029cd3a5a677a5bd89aeStructure());
                    }, true, OutSystemsUIModel.ST_5abb10cad8e1029cd3a5a677a5bd89aeStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_a52e1739b8f4600af03587813c6346bb(new RC_a52e1739b8f4600af03587813c6346bb.RecordClass({
                    rangeSlider_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_a52e1739b8f4600af03587813c6346bb = RC_a52e1739b8f4600af03587813c6346bbInner;

        RC_a52e1739b8f4600af03587813c6346bbInner._isAnonymousRecord = true;
        RC_a52e1739b8f4600af03587813c6346bbInner.UniqueId = "a52e1739-b8f4-600a-f035-87813c6346bb";
        var RC_a52e1739b8f4600af03587813c6346bb = RC_a52e1739b8f4600af03587813c6346bbInner;
        RC_a52e1739b8f4600af03587813c6346bb.init();
    }
});

define("OutSystemsUI.model$RL_a500b87435ba92088f423cd3cb985687", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_a52e1739b8f4600af03587813c6346bb"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_a500b87435ba92088f423cd3cb985687 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_a52e1739b8f4600af03587813c6346bb;
        }

    }

    OutSystemsUIModel.RL_a500b87435ba92088f423cd3cb985687 = RL_a500b87435ba92088f423cd3cb985687;

});

define("OutSystemsUI.model$RC_a5018402fa6c90c5e826e54b2748cedc", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_48a3ab8db598b5be6bef9add20e71bbbEntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_a5018402fa6c90c5e826e54b2748cedcInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("GutterSize", "gutterSizeAttr", "GutterSize", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_48a3ab8db598b5be6bef9add20e71bbbEntityRecord());
                    }, true, OutSystemsUIModel.EN_48a3ab8db598b5be6bef9add20e71bbbEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_a5018402fa6c90c5e826e54b2748cedc(new RC_a5018402fa6c90c5e826e54b2748cedc.RecordClass({
                    gutterSizeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_a5018402fa6c90c5e826e54b2748cedc = RC_a5018402fa6c90c5e826e54b2748cedcInner;

        RC_a5018402fa6c90c5e826e54b2748cedcInner._isAnonymousRecord = true;
        RC_a5018402fa6c90c5e826e54b2748cedcInner.UniqueId = "a5018402-fa6c-90c5-e826-e54b2748cedc";
        var RC_a5018402fa6c90c5e826e54b2748cedc = RC_a5018402fa6c90c5e826e54b2748cedcInner;
        RC_a5018402fa6c90c5e826e54b2748cedc.init();
    }
});

define("OutSystemsUI.model$ST_f2d4817754eec123207470e41d7a01d7Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_60f22bd2e9b10a22278b8afe6d7f601aStructure", "OutSystemsUI.model$RL_c0f17d75c546075264f5d075e00ba65b"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class ST_f2d4817754eec123207470e41d7a01d7StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("OptionsList", "optionsListAttr", "OptionsList", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.RL_c0f17d75c546075264f5d075e00ba65b());
                    }, true, OutSystemsUIModel.RL_c0f17d75c546075264f5d075e00ba65b),
                    this.attr("StartingSelection", "startingSelectionAttr", "StartingSelection", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.RL_c0f17d75c546075264f5d075e00ba65b());
                    }, true, OutSystemsUIModel.RL_c0f17d75c546075264f5d075e00ba65b),
                    this.attr("Prompt", "promptAttr", "Prompt", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "Select an item";
                    }, true),
                    this.attr("IsDisabled", "isDisabledAttr", "IsDisabled", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("NoOptionsText", "noOptionsTextAttr", "NoOptionsText", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "0";
                    }, true),
                    this.attr("NoResultsText", "noResultsTextAttr", "NoResultsText", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "0";
                    }, true),
                    this.attr("SearchPrompt", "searchPromptAttr", "SearchPrompt", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "1";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.ST_f2d4817754eec123207470e41d7a01d7Structure = ST_f2d4817754eec123207470e41d7a01d7StructureInner;

        var ST_f2d4817754eec123207470e41d7a01d7Structure = ST_f2d4817754eec123207470e41d7a01d7StructureInner;
        ST_f2d4817754eec123207470e41d7a01d7Structure.init();
    }
});

define("OutSystemsUI.model$RC_e3b67119e4a2ce2c95244e08a29b21aa", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_f2d4817754eec123207470e41d7a01d7Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_e3b67119e4a2ce2c95244e08a29b21aaInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("DropdownTags_InternalConfigs", "dropdownTags_InternalConfigsAttr", "DropdownTags_InternalConfigs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_f2d4817754eec123207470e41d7a01d7Structure());
                    }, true, OutSystemsUIModel.ST_f2d4817754eec123207470e41d7a01d7Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_e3b67119e4a2ce2c95244e08a29b21aa(new RC_e3b67119e4a2ce2c95244e08a29b21aa.RecordClass({
                    dropdownTags_InternalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_e3b67119e4a2ce2c95244e08a29b21aa = RC_e3b67119e4a2ce2c95244e08a29b21aaInner;

        RC_e3b67119e4a2ce2c95244e08a29b21aaInner._isAnonymousRecord = true;
        RC_e3b67119e4a2ce2c95244e08a29b21aaInner.UniqueId = "e3b67119-e4a2-ce2c-9524-4e08a29b21aa";
        var RC_e3b67119e4a2ce2c95244e08a29b21aa = RC_e3b67119e4a2ce2c95244e08a29b21aaInner;
        RC_e3b67119e4a2ce2c95244e08a29b21aa.init();
    }
});

define("OutSystemsUI.model$RL_a5b4786090b04fa97abef703025f0e41", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_e3b67119e4a2ce2c95244e08a29b21aa"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_a5b4786090b04fa97abef703025f0e41 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_e3b67119e4a2ce2c95244e08a29b21aa;
        }

    }

    OutSystemsUIModel.RL_a5b4786090b04fa97abef703025f0e41 = RL_a5b4786090b04fa97abef703025f0e41;

});

define("OutSystemsUI.model$RC_a784fb81632458d6690327bfa77675d9", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_3fe78d74e319e2ce842fd51dd2d67caaStructure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_a784fb81632458d6690327bfa77675d9Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("SplideConfigs", "splideConfigsAttr", "SplideConfigs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_3fe78d74e319e2ce842fd51dd2d67caaStructure());
                    }, true, OutSystemsUIModel.ST_3fe78d74e319e2ce842fd51dd2d67caaStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_a784fb81632458d6690327bfa77675d9(new RC_a784fb81632458d6690327bfa77675d9.RecordClass({
                    splideConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_a784fb81632458d6690327bfa77675d9 = RC_a784fb81632458d6690327bfa77675d9Inner;

        RC_a784fb81632458d6690327bfa77675d9Inner._isAnonymousRecord = true;
        RC_a784fb81632458d6690327bfa77675d9Inner.UniqueId = "a784fb81-6324-58d6-6903-27bfa77675d9";
        var RC_a784fb81632458d6690327bfa77675d9 = RC_a784fb81632458d6690327bfa77675d9Inner;
        RC_a784fb81632458d6690327bfa77675d9.init();
    }
});

define("OutSystemsUI.model$RC_c47826b7e4232fbf890784243715f5a8", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_d383eada98ae47b51248dfe934bb4fabEntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_c47826b7e4232fbf890784243715f5a8Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("DEPRECATED_Color", "dEPRECATED_ColorAttr", "DEPRECATED_Color", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_d383eada98ae47b51248dfe934bb4fabEntityRecord());
                    }, true, OutSystemsUIModel.EN_d383eada98ae47b51248dfe934bb4fabEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_c47826b7e4232fbf890784243715f5a8(new RC_c47826b7e4232fbf890784243715f5a8.RecordClass({
                    dEPRECATED_ColorAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_c47826b7e4232fbf890784243715f5a8 = RC_c47826b7e4232fbf890784243715f5a8Inner;

        RC_c47826b7e4232fbf890784243715f5a8Inner._isAnonymousRecord = true;
        RC_c47826b7e4232fbf890784243715f5a8Inner.UniqueId = "c47826b7-e423-2fbf-8907-84243715f5a8";
        var RC_c47826b7e4232fbf890784243715f5a8 = RC_c47826b7e4232fbf890784243715f5a8Inner;
        RC_c47826b7e4232fbf890784243715f5a8.init();
    }
});

define("OutSystemsUI.model$RL_a8ebdafe2cd32ab057831964cf8f39ff", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_c47826b7e4232fbf890784243715f5a8"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_a8ebdafe2cd32ab057831964cf8f39ff extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_c47826b7e4232fbf890784243715f5a8;
        }

    }

    OutSystemsUIModel.RL_a8ebdafe2cd32ab057831964cf8f39ff = RL_a8ebdafe2cd32ab057831964cf8f39ff;

});

define("OutSystemsUI.model$RL_a99fc4ead772763d78283a9d04a1dd57", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_13c131829a33cb5bedb5c64aa6f4add2Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_a99fc4ead772763d78283a9d04a1dd57 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_13c131829a33cb5bedb5c64aa6f4add2Structure;
        }

    }

    OutSystemsUIModel.RL_a99fc4ead772763d78283a9d04a1dd57 = RL_a99fc4ead772763d78283a9d04a1dd57;

});

define("OutSystemsUI.model$RL_a9a9108148017b3108e7788d5e0b597c", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_23e4ac7b03ba2050af5811737c8cc89f"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_a9a9108148017b3108e7788d5e0b597c extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_23e4ac7b03ba2050af5811737c8cc89f;
        }

    }

    OutSystemsUIModel.RL_a9a9108148017b3108e7788d5e0b597c = RL_a9a9108148017b3108e7788d5e0b597c;

});

define("OutSystemsUI.model$RC_aa6f2a469018f20449b52bedd4074e46", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_4c3ee0d0ad514546e23495b0186f9086", "OutSystemsUI.model$RL_52688881ccfed8dc2d89a4eb45a2498e"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_aa6f2a469018f20449b52bedd4074e46Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Calendar", "calendarAttr", "Calendar", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("CalendarDates", "calendarDatesAttr", "CalendarDates", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("CloseCalendar", "closeCalendarAttr", "CloseCalendar", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("DateSelected", "dateSelectedAttr", "DateSelected", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("DaySelected", "daySelectedAttr", "DaySelected", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("DaysInRange", "daysInRangeAttr", "DaysInRange", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("DialogButton", "dialogButtonAttr", "DialogButton", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("EndRange", "endRangeAttr", "EndRange", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("EnterCalendar", "enterCalendarAttr", "EnterCalendar", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("GoToToday", "goToTodayAttr", "GoToToday", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("HasEvent", "hasEventAttr", "HasEvent", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("IsDisabled", "isDisabledAttr", "IsDisabled", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("IsToday", "isTodayAttr", "IsToday", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("KeyboardShortcuts", "keyboardShortcutsAttr", "KeyboardShortcuts", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Month", "monthAttr", "Month", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("MonthNext", "monthNextAttr", "MonthNext", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("MonthPrevious", "monthPreviousAttr", "MonthPrevious", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Navigation", "navigationAttr", "Navigation", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("OpenCalendar", "openCalendarAttr", "OpenCalendar", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("StartRange", "startRangeAttr", "StartRange", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Year", "yearAttr", "Year", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ShortcutsDialog", "shortcutsDialogAttr", "ShortcutsDialog", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.RL_52688881ccfed8dc2d89a4eb45a2498e());
                    }, true, OutSystemsUIModel.RL_52688881ccfed8dc2d89a4eb45a2498e)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.RC_aa6f2a469018f20449b52bedd4074e46 = RC_aa6f2a469018f20449b52bedd4074e46Inner;

        RC_aa6f2a469018f20449b52bedd4074e46Inner._isAnonymousRecord = true;
        RC_aa6f2a469018f20449b52bedd4074e46Inner.UniqueId = "aa6f2a46-9018-f204-49b5-2bedd4074e46";
        var RC_aa6f2a469018f20449b52bedd4074e46 = RC_aa6f2a469018f20449b52bedd4074e46Inner;
        RC_aa6f2a469018f20449b52bedd4074e46.init();
    }
});

define("OutSystemsUI.model$RL_acf3198d7827e501ece64b7f57e6f374", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_3fbb4babd0ba48852fecc04be37d3c0e"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_acf3198d7827e501ece64b7f57e6f374 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_3fbb4babd0ba48852fecc04be37d3c0e;
        }

    }

    OutSystemsUIModel.RL_acf3198d7827e501ece64b7f57e6f374 = RL_acf3198d7827e501ece64b7f57e6f374;

});

define("OutSystemsUI.model$RL_adbfc30c899ef88f92a4ffb0fe1c08d9", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_6b2a66e5a0a888e952c1a6f0d254d48aEntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_adbfc30c899ef88f92a4ffb0fe1c08d9 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.EN_6b2a66e5a0a888e952c1a6f0d254d48aEntityRecord;
        }

    }

    OutSystemsUIModel.RL_adbfc30c899ef88f92a4ffb0fe1c08d9 = RL_adbfc30c899ef88f92a4ffb0fe1c08d9;

});

define("OutSystemsUI.model$RL_aec2af9ce70ea7e7bfe1e63d0f657cf5", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_35ce9df1ad7a89533b2e8a49a8413520"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_aec2af9ce70ea7e7bfe1e63d0f657cf5 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_35ce9df1ad7a89533b2e8a49a8413520;
        }

    }

    OutSystemsUIModel.RL_aec2af9ce70ea7e7bfe1e63d0f657cf5 = RL_aec2af9ce70ea7e7bfe1e63d0f657cf5;

});

define("OutSystemsUI.model$RL_af071f8b45f2932e1364f15bc3e90819", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_adf11bcbc411b5a0f498d25dd0ea882fEntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_af071f8b45f2932e1364f15bc3e90819 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.EN_adf11bcbc411b5a0f498d25dd0ea882fEntityRecord;
        }

    }

    OutSystemsUIModel.RL_af071f8b45f2932e1364f15bc3e90819 = RL_af071f8b45f2932e1364f15bc3e90819;

});

define("OutSystemsUI.model$RL_af46fd5f455422e07d0fa67a99656193", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_11d8167e3fa15e3043cb2afdd0778cf2"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_af46fd5f455422e07d0fa67a99656193 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_11d8167e3fa15e3043cb2afdd0778cf2;
        }

    }

    OutSystemsUIModel.RL_af46fd5f455422e07d0fa67a99656193 = RL_af46fd5f455422e07d0fa67a99656193;

});

define("OutSystemsUI.model$RL_af7f649b9a00c07af59590b0760c28af", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_0262e6910ebecc922f633b08db78d688Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_af7f649b9a00c07af59590b0760c28af extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_0262e6910ebecc922f633b08db78d688Structure;
        }

    }

    OutSystemsUIModel.RL_af7f649b9a00c07af59590b0760c28af = RL_af7f649b9a00c07af59590b0760c28af;

});

define("OutSystemsUI.model$RC_cc83188402b0c2897ce694332899ab49", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_79dd905420a035342bdbafd506073863EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_cc83188402b0c2897ce694332899ab49Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("LogType", "logTypeAttr", "LogType", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_79dd905420a035342bdbafd506073863EntityRecord());
                    }, true, OutSystemsUIModel.EN_79dd905420a035342bdbafd506073863EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_cc83188402b0c2897ce694332899ab49(new RC_cc83188402b0c2897ce694332899ab49.RecordClass({
                    logTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_cc83188402b0c2897ce694332899ab49 = RC_cc83188402b0c2897ce694332899ab49Inner;

        RC_cc83188402b0c2897ce694332899ab49Inner._isAnonymousRecord = true;
        RC_cc83188402b0c2897ce694332899ab49Inner.UniqueId = "cc831884-02b0-c289-7ce6-94332899ab49";
        var RC_cc83188402b0c2897ce694332899ab49 = RC_cc83188402b0c2897ce694332899ab49Inner;
        RC_cc83188402b0c2897ce694332899ab49.init();
    }
});

define("OutSystemsUI.model$RL_afde32c02d31aa9dc9d1d570d8226b0f", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_cc83188402b0c2897ce694332899ab49"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_afde32c02d31aa9dc9d1d570d8226b0f extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_cc83188402b0c2897ce694332899ab49;
        }

    }

    OutSystemsUIModel.RL_afde32c02d31aa9dc9d1d570d8226b0f = RL_afde32c02d31aa9dc9d1d570d8226b0f;

});

define("OutSystemsUI.model$RC_e03a49308bfaca02257d451178bbf041", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_60f22bd2e9b10a22278b8afe6d7f601aStructure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_e03a49308bfaca02257d451178bbf041Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("DropdownOption", "dropdownOptionAttr", "DropdownOption", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_60f22bd2e9b10a22278b8afe6d7f601aStructure());
                    }, true, OutSystemsUIModel.ST_60f22bd2e9b10a22278b8afe6d7f601aStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_e03a49308bfaca02257d451178bbf041(new RC_e03a49308bfaca02257d451178bbf041.RecordClass({
                    dropdownOptionAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_e03a49308bfaca02257d451178bbf041 = RC_e03a49308bfaca02257d451178bbf041Inner;

        RC_e03a49308bfaca02257d451178bbf041Inner._isAnonymousRecord = true;
        RC_e03a49308bfaca02257d451178bbf041Inner.UniqueId = "e03a4930-8bfa-ca02-257d-451178bbf041";
        var RC_e03a49308bfaca02257d451178bbf041 = RC_e03a49308bfaca02257d451178bbf041Inner;
        RC_e03a49308bfaca02257d451178bbf041.init();
    }
});

define("OutSystemsUI.model$RL_b17522b541f7e019c0443ba6658c825f", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_e03a49308bfaca02257d451178bbf041"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_b17522b541f7e019c0443ba6658c825f extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_e03a49308bfaca02257d451178bbf041;
        }

    }

    OutSystemsUIModel.RL_b17522b541f7e019c0443ba6658c825f = RL_b17522b541f7e019c0443ba6658c825f;

});

define("OutSystemsUI.model$RL_b17d2ee19e721e639857531d2bbc81c0", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_4f70c42b393d853a53e093e196f4b683Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_b17d2ee19e721e639857531d2bbc81c0 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_4f70c42b393d853a53e093e196f4b683Structure;
        }

    }

    OutSystemsUIModel.RL_b17d2ee19e721e639857531d2bbc81c0 = RL_b17d2ee19e721e639857531d2bbc81c0;

});

define("OutSystemsUI.model$RC_b1f70cd6a745b5879d66249a8c483fef", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_e828cdbd51e0c1ef095bd323f6e2875aStructure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_b1f70cd6a745b5879d66249a8c483fefInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("FlipContent_InternalConfig", "flipContent_InternalConfigAttr", "FlipContent_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_e828cdbd51e0c1ef095bd323f6e2875aStructure());
                    }, true, OutSystemsUIModel.ST_e828cdbd51e0c1ef095bd323f6e2875aStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_b1f70cd6a745b5879d66249a8c483fef(new RC_b1f70cd6a745b5879d66249a8c483fef.RecordClass({
                    flipContent_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_b1f70cd6a745b5879d66249a8c483fef = RC_b1f70cd6a745b5879d66249a8c483fefInner;

        RC_b1f70cd6a745b5879d66249a8c483fefInner._isAnonymousRecord = true;
        RC_b1f70cd6a745b5879d66249a8c483fefInner.UniqueId = "b1f70cd6-a745-b587-9d66-249a8c483fef";
        var RC_b1f70cd6a745b5879d66249a8c483fef = RC_b1f70cd6a745b5879d66249a8c483fefInner;
        RC_b1f70cd6a745b5879d66249a8c483fef.init();
    }
});

define("OutSystemsUI.model$RC_b6adbbf4e08bad2975a6f8f796279b71", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_ef2257119ab36e2c35ddd0bb3d7ac544EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_b6adbbf4e08bad2975a6f8f796279b71Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ColumnBreak", "columnBreakAttr", "ColumnBreak", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_ef2257119ab36e2c35ddd0bb3d7ac544EntityRecord());
                    }, true, OutSystemsUIModel.EN_ef2257119ab36e2c35ddd0bb3d7ac544EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_b6adbbf4e08bad2975a6f8f796279b71(new RC_b6adbbf4e08bad2975a6f8f796279b71.RecordClass({
                    columnBreakAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_b6adbbf4e08bad2975a6f8f796279b71 = RC_b6adbbf4e08bad2975a6f8f796279b71Inner;

        RC_b6adbbf4e08bad2975a6f8f796279b71Inner._isAnonymousRecord = true;
        RC_b6adbbf4e08bad2975a6f8f796279b71Inner.UniqueId = "b6adbbf4-e08b-ad29-75a6-f8f796279b71";
        var RC_b6adbbf4e08bad2975a6f8f796279b71 = RC_b6adbbf4e08bad2975a6f8f796279b71Inner;
        RC_b6adbbf4e08bad2975a6f8f796279b71.init();
    }
});

define("OutSystemsUI.model$RL_b2003a063523641b68ecff9e50755bc3", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_b6adbbf4e08bad2975a6f8f796279b71"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_b2003a063523641b68ecff9e50755bc3 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_b6adbbf4e08bad2975a6f8f796279b71;
        }

    }

    OutSystemsUIModel.RL_b2003a063523641b68ecff9e50755bc3 = RL_b2003a063523641b68ecff9e50755bc3;

});

define("OutSystemsUI.model$RC_b27f0b968b0f7cea61506ac9d6ee7c27", ["exports", "@outsystems/runtime-core-js", "System_.model", "OutSystemsUI.model", "System_.model$PasswordValidationResultRec", "OutSystemsUI.referencesHealth", "OutSystemsUI.referencesHealth$System_"], function(exports, OSRuntimeCore, System_Model, OutSystemsUIModel) {
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

        OutSystemsUIModel.RC_b27f0b968b0f7cea61506ac9d6ee7c27 = RC_b27f0b968b0f7cea61506ac9d6ee7c27Inner;

        RC_b27f0b968b0f7cea61506ac9d6ee7c27Inner._isAnonymousRecord = true;
        RC_b27f0b968b0f7cea61506ac9d6ee7c27Inner.UniqueId = "b27f0b96-8b0f-7cea-6150-6ac9d6ee7c27";
        var RC_b27f0b968b0f7cea61506ac9d6ee7c27 = RC_b27f0b968b0f7cea61506ac9d6ee7c27Inner;
        RC_b27f0b968b0f7cea61506ac9d6ee7c27.init();
    }
});

define("OutSystemsUI.model$RL_b399fd74f6375cee8461023a74406333", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_3bbfc6c91fcd8a2dd97847564be30682"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_b399fd74f6375cee8461023a74406333 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_3bbfc6c91fcd8a2dd97847564be30682;
        }

    }

    OutSystemsUIModel.RL_b399fd74f6375cee8461023a74406333 = RL_b399fd74f6375cee8461023a74406333;

});

define("OutSystemsUI.model$RL_b3e25f2f8271a63fcdf2ac5b5ce11cdc", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_e3f9af4171d5e4a41700770295d05c77Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_b3e25f2f8271a63fcdf2ac5b5ce11cdc extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_e3f9af4171d5e4a41700770295d05c77Structure;
        }

    }

    OutSystemsUIModel.RL_b3e25f2f8271a63fcdf2ac5b5ce11cdc = RL_b3e25f2f8271a63fcdf2ac5b5ce11cdc;

});

define("OutSystemsUI.model$RL_b4ddbbd05f91618f48b2747b1bedf987", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_7d9f2e2bc8ad21193b3b806a3a092d80"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_b4ddbbd05f91618f48b2747b1bedf987 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_7d9f2e2bc8ad21193b3b806a3a092d80;
        }

    }

    OutSystemsUIModel.RL_b4ddbbd05f91618f48b2747b1bedf987 = RL_b4ddbbd05f91618f48b2747b1bedf987;

});

define("OutSystemsUI.model$RL_b693780c9c2e91ec100b6cde72ab3ad5", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_f9178b4aae1879ea388b92402c64db4cEntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_b693780c9c2e91ec100b6cde72ab3ad5 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.EN_f9178b4aae1879ea388b92402c64db4cEntityRecord;
        }

    }

    OutSystemsUIModel.RL_b693780c9c2e91ec100b6cde72ab3ad5 = RL_b693780c9c2e91ec100b6cde72ab3ad5;

});

define("OutSystemsUI.model$RL_b81a693ea5fe206cf847a51f9be40beb", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_a784fb81632458d6690327bfa77675d9"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_b81a693ea5fe206cf847a51f9be40beb extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_a784fb81632458d6690327bfa77675d9;
        }

    }

    OutSystemsUIModel.RL_b81a693ea5fe206cf847a51f9be40beb = RL_b81a693ea5fe206cf847a51f9be40beb;

});

define("OutSystemsUI.model$RL_b90257b403297564a341dbb0631e7230", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_3dc2f7b3c292c64f7476a99f4086df98"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_b90257b403297564a341dbb0631e7230 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_3dc2f7b3c292c64f7476a99f4086df98;
        }

    }

    OutSystemsUIModel.RL_b90257b403297564a341dbb0631e7230 = RL_b90257b403297564a341dbb0631e7230;

});

define("OutSystemsUI.model$RL_b99a910a43a035ae4af35109fcbd78bb", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_2b510eefd88959a00bf486cfc856fa96Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_b99a910a43a035ae4af35109fcbd78bb extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_2b510eefd88959a00bf486cfc856fa96Structure;
        }

    }

    OutSystemsUIModel.RL_b99a910a43a035ae4af35109fcbd78bb = RL_b99a910a43a035ae4af35109fcbd78bb;

});

define("OutSystemsUI.model$RL_bb23cfabef259372d4ccc6deba43b63b", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_3cb059eb7f6ed8c9a730f87011d5c0e0Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_bb23cfabef259372d4ccc6deba43b63b extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_3cb059eb7f6ed8c9a730f87011d5c0e0Structure;
        }

    }

    OutSystemsUIModel.RL_bb23cfabef259372d4ccc6deba43b63b = RL_bb23cfabef259372d4ccc6deba43b63b;

});

define("OutSystemsUI.model$RC_bb80a04f7ea6a5bb3d33db9b2bca4c88", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_b96c67f06fdfae580256b7081d85460dStructure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_bb80a04f7ea6a5bb3d33db9b2bca4c88Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("TimePickerOptionalConfigs", "timePickerOptionalConfigsAttr", "TimePickerOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_b96c67f06fdfae580256b7081d85460dStructure());
                    }, true, OutSystemsUIModel.ST_b96c67f06fdfae580256b7081d85460dStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_bb80a04f7ea6a5bb3d33db9b2bca4c88(new RC_bb80a04f7ea6a5bb3d33db9b2bca4c88.RecordClass({
                    timePickerOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_bb80a04f7ea6a5bb3d33db9b2bca4c88 = RC_bb80a04f7ea6a5bb3d33db9b2bca4c88Inner;

        RC_bb80a04f7ea6a5bb3d33db9b2bca4c88Inner._isAnonymousRecord = true;
        RC_bb80a04f7ea6a5bb3d33db9b2bca4c88Inner.UniqueId = "bb80a04f-7ea6-a5bb-3d33-db9b2bca4c88";
        var RC_bb80a04f7ea6a5bb3d33db9b2bca4c88 = RC_bb80a04f7ea6a5bb3d33db9b2bca4c88Inner;
        RC_bb80a04f7ea6a5bb3d33db9b2bca4c88.init();
    }
});

define("OutSystemsUI.model$RL_bca66b074f528989e6d5482126ef35c6", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_df70a614ae02fde4029645a728b2909cEntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_bca66b074f528989e6d5482126ef35c6 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.EN_df70a614ae02fde4029645a728b2909cEntityRecord;
        }

    }

    OutSystemsUIModel.RL_bca66b074f528989e6d5482126ef35c6 = RL_bca66b074f528989e6d5482126ef35c6;

});

define("OutSystemsUI.model$RL_bd4587648373bf4d3e2c5fb636046bee", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_327e36bc408edd046ca40df8a4e734bb"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_bd4587648373bf4d3e2c5fb636046bee extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_327e36bc408edd046ca40df8a4e734bb;
        }

    }

    OutSystemsUIModel.RL_bd4587648373bf4d3e2c5fb636046bee = RL_bd4587648373bf4d3e2c5fb636046bee;

});

define("OutSystemsUI.model$RL_be21e3aab03a03acafadf693c54c51b8", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_8d60218511e7c5a6826e7f1bde0eda29"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_be21e3aab03a03acafadf693c54c51b8 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_8d60218511e7c5a6826e7f1bde0eda29;
        }

    }

    OutSystemsUIModel.RL_be21e3aab03a03acafadf693c54c51b8 = RL_be21e3aab03a03acafadf693c54c51b8;

});

define("OutSystemsUI.model$RL_bf3bc554c395cc3dd0ab1a5b6ac5d91f", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_27b5a164e828de9b90686831c7908b4a"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_bf3bc554c395cc3dd0ab1a5b6ac5d91f extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_27b5a164e828de9b90686831c7908b4a;
        }

    }

    OutSystemsUIModel.RL_bf3bc554c395cc3dd0ab1a5b6ac5d91f = RL_bf3bc554c395cc3dd0ab1a5b6ac5d91f;

});

define("OutSystemsUI.model$EN_c1e622743b79c1510fd62a0adf89686bEntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class EN_c1e622743b79c1510fd62a0adf89686bEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("SideMenuBehavior", "sideMenuBehaviorAttr", "SideMenuBehavior", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_c1e622743b79c1510fd62a0adf89686bEntityRecord(new EN_c1e622743b79c1510fd62a0adf89686bEntityRecord.RecordClass({
                    sideMenuBehaviorAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.EN_c1e622743b79c1510fd62a0adf89686bEntityRecord = EN_c1e622743b79c1510fd62a0adf89686bEntityRecordInner;

        var EN_c1e622743b79c1510fd62a0adf89686bEntityRecord = EN_c1e622743b79c1510fd62a0adf89686bEntityRecordInner;
        EN_c1e622743b79c1510fd62a0adf89686bEntityRecord.init();
    }
});

define("OutSystemsUI.model$RL_c2447e636d62746c6aa3e6af8767d31e", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_60f7027c05b269e64f9c4c41640d4643"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_c2447e636d62746c6aa3e6af8767d31e extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_60f7027c05b269e64f9c4c41640d4643;
        }

    }

    OutSystemsUIModel.RL_c2447e636d62746c6aa3e6af8767d31e = RL_c2447e636d62746c6aa3e6af8767d31e;

});

define("OutSystemsUI.model$RL_c485f9f483418f5379953cdc77acac73", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_a34c029579f872c2fbb90741544ea7c6"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_c485f9f483418f5379953cdc77acac73 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_a34c029579f872c2fbb90741544ea7c6;
        }

    }

    OutSystemsUIModel.RL_c485f9f483418f5379953cdc77acac73 = RL_c485f9f483418f5379953cdc77acac73;

});

define("OutSystemsUI.model$RL_c542301ba033767f97d37c7ac8f0f71c", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_71bc196daedd9ac0648bfd56a713859dStructure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_c542301ba033767f97d37c7ac8f0f71c extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_71bc196daedd9ac0648bfd56a713859dStructure;
        }

    }

    OutSystemsUIModel.RL_c542301ba033767f97d37c7ac8f0f71c = RL_c542301ba033767f97d37c7ac8f0f71c;

});

define("OutSystemsUI.model$RL_c564b1e63d41953ea9734fb248f40109", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_51b1c15949308af5f9b2dba7043d5ae6"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_c564b1e63d41953ea9734fb248f40109 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_51b1c15949308af5f9b2dba7043d5ae6;
        }

    }

    OutSystemsUIModel.RL_c564b1e63d41953ea9734fb248f40109 = RL_c564b1e63d41953ea9734fb248f40109;

});

define("OutSystemsUI.model$RL_c58ca0a921eee43537149b3c5b7a13e2", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_eb161a8909408fbd30eac1833398f018Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_c58ca0a921eee43537149b3c5b7a13e2 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_eb161a8909408fbd30eac1833398f018Structure;
        }

    }

    OutSystemsUIModel.RL_c58ca0a921eee43537149b3c5b7a13e2 = RL_c58ca0a921eee43537149b3c5b7a13e2;

});

define("OutSystemsUI.model$RL_c70c6fbde641bc249181616cec2cfcdf", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_7167810326c75456a7ce120ed2dbd76bStructure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_c70c6fbde641bc249181616cec2cfcdf extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_7167810326c75456a7ce120ed2dbd76bStructure;
        }

    }

    OutSystemsUIModel.RL_c70c6fbde641bc249181616cec2cfcdf = RL_c70c6fbde641bc249181616cec2cfcdf;

});

define("OutSystemsUI.model$RL_c8ee2f82cd0842220547a079f59ee97c", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_106b6e385f5e89b0a7d76e23b14f61a0Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_c8ee2f82cd0842220547a079f59ee97c extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_106b6e385f5e89b0a7d76e23b14f61a0Structure;
        }

    }

    OutSystemsUIModel.RL_c8ee2f82cd0842220547a079f59ee97c = RL_c8ee2f82cd0842220547a079f59ee97c;

});

define("OutSystemsUI.model$RL_c96c932beb2df37555eef63900365df4", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_ef80898cf0e45bb0e0895a62dd0c45b1Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_c96c932beb2df37555eef63900365df4 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_ef80898cf0e45bb0e0895a62dd0c45b1Structure;
        }

    }

    OutSystemsUIModel.RL_c96c932beb2df37555eef63900365df4 = RL_c96c932beb2df37555eef63900365df4;

});

define("OutSystemsUI.model$RL_c99beeed1b27505b6fc6f74a47981ee8", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_613242ff7dd22d356200cb1f89298a39Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_c99beeed1b27505b6fc6f74a47981ee8 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_613242ff7dd22d356200cb1f89298a39Structure;
        }

    }

    OutSystemsUIModel.RL_c99beeed1b27505b6fc6f74a47981ee8 = RL_c99beeed1b27505b6fc6f74a47981ee8;

});

define("OutSystemsUI.model$RL_ca4befaa7d5de5d9bbcd4bf59c44b15c", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_b27f0b968b0f7cea61506ac9d6ee7c27"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_ca4befaa7d5de5d9bbcd4bf59c44b15c extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_b27f0b968b0f7cea61506ac9d6ee7c27;
        }

    }

    OutSystemsUIModel.RL_ca4befaa7d5de5d9bbcd4bf59c44b15c = RL_ca4befaa7d5de5d9bbcd4bf59c44b15c;

});

define("OutSystemsUI.model$RL_ca76f33b4bf777f87addea60d1bc4e8c", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_e373082a732833044c6d132d736b9a20Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_ca76f33b4bf777f87addea60d1bc4e8c extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_e373082a732833044c6d132d736b9a20Structure;
        }

    }

    OutSystemsUIModel.RL_ca76f33b4bf777f87addea60d1bc4e8c = RL_ca76f33b4bf777f87addea60d1bc4e8c;

});

define("OutSystemsUI.model$RL_cb76dbafdcac1c590a2cd950966ded8e", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_79dd905420a035342bdbafd506073863EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_cb76dbafdcac1c590a2cd950966ded8e extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.EN_79dd905420a035342bdbafd506073863EntityRecord;
        }

    }

    OutSystemsUIModel.RL_cb76dbafdcac1c590a2cd950966ded8e = RL_cb76dbafdcac1c590a2cd950966ded8e;

});

define("OutSystemsUI.model$RL_cbac71e3b2383e8c0c384139f6b34f78", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_7441573ccf264d27ef548a39a846bd68EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_cbac71e3b2383e8c0c384139f6b34f78 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.EN_7441573ccf264d27ef548a39a846bd68EntityRecord;
        }

    }

    OutSystemsUIModel.RL_cbac71e3b2383e8c0c384139f6b34f78 = RL_cbac71e3b2383e8c0c384139f6b34f78;

});

define("OutSystemsUI.model$RL_ce72a5ad70ab717754c27c16d3a4aee6", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_0d18385ed976d2d74e8cea1d77078409Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_ce72a5ad70ab717754c27c16d3a4aee6 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_0d18385ed976d2d74e8cea1d77078409Structure;
        }

    }

    OutSystemsUIModel.RL_ce72a5ad70ab717754c27c16d3a4aee6 = RL_ce72a5ad70ab717754c27c16d3a4aee6;

});

define("OutSystemsUI.model$RL_cee89322b70b4f0970ccb596bcdde503", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_3fe78d74e319e2ce842fd51dd2d67caaStructure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_cee89322b70b4f0970ccb596bcdde503 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_3fe78d74e319e2ce842fd51dd2d67caaStructure;
        }

    }

    OutSystemsUIModel.RL_cee89322b70b4f0970ccb596bcdde503 = RL_cee89322b70b4f0970ccb596bcdde503;

});

define("OutSystemsUI.model$RL_cfb818c964fb3ae8dde06e9177a0c998", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_ee4d16d56cd7c489ec094cc9fa0cd607Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_cfb818c964fb3ae8dde06e9177a0c998 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_ee4d16d56cd7c489ec094cc9fa0cd607Structure;
        }

    }

    OutSystemsUIModel.RL_cfb818c964fb3ae8dde06e9177a0c998 = RL_cfb818c964fb3ae8dde06e9177a0c998;

});

define("OutSystemsUI.model$RC_d15ba8cc56cc5ee58bd8acaffd974239", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_2c43e02ff45af9d6dc9d417ea3304062EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_d15ba8cc56cc5ee58bd8acaffd974239Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Speed", "speedAttr", "Speed", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_2c43e02ff45af9d6dc9d417ea3304062EntityRecord());
                    }, true, OutSystemsUIModel.EN_2c43e02ff45af9d6dc9d417ea3304062EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_d15ba8cc56cc5ee58bd8acaffd974239(new RC_d15ba8cc56cc5ee58bd8acaffd974239.RecordClass({
                    speedAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_d15ba8cc56cc5ee58bd8acaffd974239 = RC_d15ba8cc56cc5ee58bd8acaffd974239Inner;

        RC_d15ba8cc56cc5ee58bd8acaffd974239Inner._isAnonymousRecord = true;
        RC_d15ba8cc56cc5ee58bd8acaffd974239Inner.UniqueId = "d15ba8cc-56cc-5ee5-8bd8-acaffd974239";
        var RC_d15ba8cc56cc5ee58bd8acaffd974239 = RC_d15ba8cc56cc5ee58bd8acaffd974239Inner;
        RC_d15ba8cc56cc5ee58bd8acaffd974239.init();
    }
});

define("OutSystemsUI.model$RL_d1ce957a73e235b2c1f9383b50c6c777", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_ede7f8abbe990a3b2c1a9cfd79dc5b0fEntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_d1ce957a73e235b2c1f9383b50c6c777 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.EN_ede7f8abbe990a3b2c1a9cfd79dc5b0fEntityRecord;
        }

    }

    OutSystemsUIModel.RL_d1ce957a73e235b2c1f9383b50c6c777 = RL_d1ce957a73e235b2c1f9383b50c6c777;

});

define("OutSystemsUI.model$RL_d1ec4133b9c9274ea17a14b497f44d93", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_c1e622743b79c1510fd62a0adf89686bEntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_d1ec4133b9c9274ea17a14b497f44d93 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.EN_c1e622743b79c1510fd62a0adf89686bEntityRecord;
        }

    }

    OutSystemsUIModel.RL_d1ec4133b9c9274ea17a14b497f44d93 = RL_d1ec4133b9c9274ea17a14b497f44d93;

});

define("OutSystemsUI.model$RL_d24415aae8bc2d864868eb4166823bd0", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_849d11ab47adc426b5ce8d8c815c4fbfEntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_d24415aae8bc2d864868eb4166823bd0 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.EN_849d11ab47adc426b5ce8d8c815c4fbfEntityRecord;
        }

    }

    OutSystemsUIModel.RL_d24415aae8bc2d864868eb4166823bd0 = RL_d24415aae8bc2d864868eb4166823bd0;

});

define("OutSystemsUI.model$RL_d28765f0509bd8278495bc8b55d5a50e", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_48a3ab8db598b5be6bef9add20e71bbbEntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_d28765f0509bd8278495bc8b55d5a50e extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.EN_48a3ab8db598b5be6bef9add20e71bbbEntityRecord;
        }

    }

    OutSystemsUIModel.RL_d28765f0509bd8278495bc8b55d5a50e = RL_d28765f0509bd8278495bc8b55d5a50e;

});

define("OutSystemsUI.model$RL_d2c71de812e44763974172e04508cef5", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_1967a79b0bc6b1bdc38ff87eefe0b127EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_d2c71de812e44763974172e04508cef5 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.EN_1967a79b0bc6b1bdc38ff87eefe0b127EntityRecord;
        }

    }

    OutSystemsUIModel.RL_d2c71de812e44763974172e04508cef5 = RL_d2c71de812e44763974172e04508cef5;

});

define("OutSystemsUI.model$RC_d5f1a8119489aabce0fbd0fa422c2185", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_69c22c095aca285f3fb706e10e473ba5Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_d5f1a8119489aabce0fbd0fa422c2185Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Rating_InternalConfig", "rating_InternalConfigAttr", "Rating_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_69c22c095aca285f3fb706e10e473ba5Structure());
                    }, true, OutSystemsUIModel.ST_69c22c095aca285f3fb706e10e473ba5Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_d5f1a8119489aabce0fbd0fa422c2185(new RC_d5f1a8119489aabce0fbd0fa422c2185.RecordClass({
                    rating_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_d5f1a8119489aabce0fbd0fa422c2185 = RC_d5f1a8119489aabce0fbd0fa422c2185Inner;

        RC_d5f1a8119489aabce0fbd0fa422c2185Inner._isAnonymousRecord = true;
        RC_d5f1a8119489aabce0fbd0fa422c2185Inner.UniqueId = "d5f1a811-9489-aabc-e0fb-d0fa422c2185";
        var RC_d5f1a8119489aabce0fbd0fa422c2185 = RC_d5f1a8119489aabce0fbd0fa422c2185Inner;
        RC_d5f1a8119489aabce0fbd0fa422c2185.init();
    }
});

define("OutSystemsUI.model$RL_d656c399e70b60822640f73b89cbc71f", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_ac6f62956e278d5390a5f27c607338d0EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_d656c399e70b60822640f73b89cbc71f extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.EN_ac6f62956e278d5390a5f27c607338d0EntityRecord;
        }

    }

    OutSystemsUIModel.RL_d656c399e70b60822640f73b89cbc71f = RL_d656c399e70b60822640f73b89cbc71f;

});

define("OutSystemsUI.model$RL_d689c0ceaaa6201af233ffc179beef2f", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_09173c1b0f41f719b9efd6430c2e737dStructure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_d689c0ceaaa6201af233ffc179beef2f extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_09173c1b0f41f719b9efd6430c2e737dStructure;
        }

    }

    OutSystemsUIModel.RL_d689c0ceaaa6201af233ffc179beef2f = RL_d689c0ceaaa6201af233ffc179beef2f;

});

define("OutSystemsUI.model$RL_d6c0b448038896edf0289bb81122c411", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_1d16add6c65a995967ac402e66fde3ff"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_d6c0b448038896edf0289bb81122c411 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_1d16add6c65a995967ac402e66fde3ff;
        }

    }

    OutSystemsUIModel.RL_d6c0b448038896edf0289bb81122c411 = RL_d6c0b448038896edf0289bb81122c411;

});

define("OutSystemsUI.model$RC_f332a0a4298f66d209888b6f5c56f633", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_7e19f04989174b13ab8c3badf82f69b4EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_f332a0a4298f66d209888b6f5c56f633Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("RangeSliderType", "rangeSliderTypeAttr", "RangeSliderType", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_7e19f04989174b13ab8c3badf82f69b4EntityRecord());
                    }, true, OutSystemsUIModel.EN_7e19f04989174b13ab8c3badf82f69b4EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_f332a0a4298f66d209888b6f5c56f633(new RC_f332a0a4298f66d209888b6f5c56f633.RecordClass({
                    rangeSliderTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_f332a0a4298f66d209888b6f5c56f633 = RC_f332a0a4298f66d209888b6f5c56f633Inner;

        RC_f332a0a4298f66d209888b6f5c56f633Inner._isAnonymousRecord = true;
        RC_f332a0a4298f66d209888b6f5c56f633Inner.UniqueId = "f332a0a4-298f-66d2-0988-8b6f5c56f633";
        var RC_f332a0a4298f66d209888b6f5c56f633 = RC_f332a0a4298f66d209888b6f5c56f633Inner;
        RC_f332a0a4298f66d209888b6f5c56f633.init();
    }
});

define("OutSystemsUI.model$RL_d785cb35a227b6661ab0e0202fba3af9", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_f332a0a4298f66d209888b6f5c56f633"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_d785cb35a227b6661ab0e0202fba3af9 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_f332a0a4298f66d209888b6f5c56f633;
        }

    }

    OutSystemsUIModel.RL_d785cb35a227b6661ab0e0202fba3af9 = RL_d785cb35a227b6661ab0e0202fba3af9;

});

define("OutSystemsUI.model$RL_d7cde0d346486a854aee07525f121a90", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_5d1279724e719322292e34ef3c5500a0EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_d7cde0d346486a854aee07525f121a90 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.EN_5d1279724e719322292e34ef3c5500a0EntityRecord;
        }

    }

    OutSystemsUIModel.RL_d7cde0d346486a854aee07525f121a90 = RL_d7cde0d346486a854aee07525f121a90;

});

define("OutSystemsUI.model$RL_d8959d4c81c965e073d03471f545ed85", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_56805fdef6332e01f13c0f9217357dbc"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_d8959d4c81c965e073d03471f545ed85 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_56805fdef6332e01f13c0f9217357dbc;
        }

    }

    OutSystemsUIModel.RL_d8959d4c81c965e073d03471f545ed85 = RL_d8959d4c81c965e073d03471f545ed85;

});

define("OutSystemsUI.model$RL_d9087525544a5398e32fd1eb2f3e8818", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_b29bdecfa7956bb3d5bee97678e39fb0Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_d9087525544a5398e32fd1eb2f3e8818 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_b29bdecfa7956bb3d5bee97678e39fb0Structure;
        }

    }

    OutSystemsUIModel.RL_d9087525544a5398e32fd1eb2f3e8818 = RL_d9087525544a5398e32fd1eb2f3e8818;

});

define("OutSystemsUI.model$RL_da293bf48581f98e964af95ac114b752", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_f2d4817754eec123207470e41d7a01d7Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_da293bf48581f98e964af95ac114b752 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_f2d4817754eec123207470e41d7a01d7Structure;
        }

    }

    OutSystemsUIModel.RL_da293bf48581f98e964af95ac114b752 = RL_da293bf48581f98e964af95ac114b752;

});

define("OutSystemsUI.model$RC_dac62773434cf92b52368fd089bbfc2a", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_660adb7a9db48bff1b12c6e03515b415Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_dac62773434cf92b52368fd089bbfc2aInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("CarouselItems", "carouselItemsAttr", "CarouselItems", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_660adb7a9db48bff1b12c6e03515b415Structure());
                    }, true, OutSystemsUIModel.ST_660adb7a9db48bff1b12c6e03515b415Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_dac62773434cf92b52368fd089bbfc2a(new RC_dac62773434cf92b52368fd089bbfc2a.RecordClass({
                    carouselItemsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_dac62773434cf92b52368fd089bbfc2a = RC_dac62773434cf92b52368fd089bbfc2aInner;

        RC_dac62773434cf92b52368fd089bbfc2aInner._isAnonymousRecord = true;
        RC_dac62773434cf92b52368fd089bbfc2aInner.UniqueId = "dac62773-434c-f92b-5236-8fd089bbfc2a";
        var RC_dac62773434cf92b52368fd089bbfc2a = RC_dac62773434cf92b52368fd089bbfc2aInner;
        RC_dac62773434cf92b52368fd089bbfc2a.init();
    }
});

define("OutSystemsUI.model$RL_dce031541ffd7ddb60ff42662d8a6be6", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_c3a2475ae6370a2f746040280495b4a2EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_dce031541ffd7ddb60ff42662d8a6be6 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.EN_c3a2475ae6370a2f746040280495b4a2EntityRecord;
        }

    }

    OutSystemsUIModel.RL_dce031541ffd7ddb60ff42662d8a6be6 = RL_dce031541ffd7ddb60ff42662d8a6be6;

});

define("OutSystemsUI.model$RL_dce3f06b54239d1a341b332bfbc48ec2", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_6af81a2c1989c9b6ed62295dfa4c4e65Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_dce3f06b54239d1a341b332bfbc48ec2 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_6af81a2c1989c9b6ed62295dfa4c4e65Structure;
        }

    }

    OutSystemsUIModel.RL_dce3f06b54239d1a341b332bfbc48ec2 = RL_dce3f06b54239d1a341b332bfbc48ec2;

});

define("OutSystemsUI.model$RC_dd0070f225e242673216fed1481d0a20", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_546a3060996e070a522a708cd2d94c23Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_dd0070f225e242673216fed1481d0a20Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Gallery_InternalConfig", "gallery_InternalConfigAttr", "Gallery_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_546a3060996e070a522a708cd2d94c23Structure());
                    }, true, OutSystemsUIModel.ST_546a3060996e070a522a708cd2d94c23Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_dd0070f225e242673216fed1481d0a20(new RC_dd0070f225e242673216fed1481d0a20.RecordClass({
                    gallery_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_dd0070f225e242673216fed1481d0a20 = RC_dd0070f225e242673216fed1481d0a20Inner;

        RC_dd0070f225e242673216fed1481d0a20Inner._isAnonymousRecord = true;
        RC_dd0070f225e242673216fed1481d0a20Inner.UniqueId = "dd0070f2-25e2-4267-3216-fed1481d0a20";
        var RC_dd0070f225e242673216fed1481d0a20 = RC_dd0070f225e242673216fed1481d0a20Inner;
        RC_dd0070f225e242673216fed1481d0a20.init();
    }
});

define("OutSystemsUI.model$RC_de3deb221a4b1656cc37f0db973c4e9a", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_c521eea762e9dd37e04340f2864e8aa0EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_de3deb221a4b1656cc37f0db973c4e9aInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("DatePickerCalendarType", "datePickerCalendarTypeAttr", "DatePickerCalendarType", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_c521eea762e9dd37e04340f2864e8aa0EntityRecord());
                    }, true, OutSystemsUIModel.EN_c521eea762e9dd37e04340f2864e8aa0EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_de3deb221a4b1656cc37f0db973c4e9a(new RC_de3deb221a4b1656cc37f0db973c4e9a.RecordClass({
                    datePickerCalendarTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_de3deb221a4b1656cc37f0db973c4e9a = RC_de3deb221a4b1656cc37f0db973c4e9aInner;

        RC_de3deb221a4b1656cc37f0db973c4e9aInner._isAnonymousRecord = true;
        RC_de3deb221a4b1656cc37f0db973c4e9aInner.UniqueId = "de3deb22-1a4b-1656-cc37-f0db973c4e9a";
        var RC_de3deb221a4b1656cc37f0db973c4e9a = RC_de3deb221a4b1656cc37f0db973c4e9aInner;
        RC_de3deb221a4b1656cc37f0db973c4e9a.init();
    }
});

define("OutSystemsUI.model$RC_edb482045d64b0cbbcbf62278fb73c32", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_d3d7d244571ed038dbfee008e77e8c11", "OutSystemsUI.model$RL_1729600b673fd0870291732dd16f0147", "OutSystemsUI.model$RC_bbab5f70da1d7251909f44ce9efe20fa", "OutSystemsUI.model$RL_4260c6c2a6b32d80f4d763c795bd8980", "OutSystemsUI.model$RC_35ce9df1ad7a89533b2e8a49a8413520", "OutSystemsUI.model$RL_aec2af9ce70ea7e7bfe1e63d0f657cf5"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_edb482045d64b0cbbcbf62278fb73c32Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Midnight", "midnightAttr", "Midnight", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("NextMonth", "nextMonthAttr", "NextMonth", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Noon", "noonAttr", "Noon", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("PreviousMonth", "previousMonthAttr", "PreviousMonth", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("TodayButton", "todayButtonAttr", "TodayButton", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Weekdays", "weekdaysAttr", "Weekdays", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.RL_1729600b673fd0870291732dd16f0147());
                    }, true, OutSystemsUIModel.RL_1729600b673fd0870291732dd16f0147),
                    this.attr("WeekdaysShort", "weekdaysShortAttr", "WeekdaysShort", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.RL_4260c6c2a6b32d80f4d763c795bd8980());
                    }, true, OutSystemsUIModel.RL_4260c6c2a6b32d80f4d763c795bd8980),
                    this.attr("Months", "monthsAttr", "Months", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.RL_aec2af9ce70ea7e7bfe1e63d0f657cf5());
                    }, true, OutSystemsUIModel.RL_aec2af9ce70ea7e7bfe1e63d0f657cf5)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsUIModel.RC_edb482045d64b0cbbcbf62278fb73c32 = RC_edb482045d64b0cbbcbf62278fb73c32Inner;

        RC_edb482045d64b0cbbcbf62278fb73c32Inner._isAnonymousRecord = true;
        RC_edb482045d64b0cbbcbf62278fb73c32Inner.UniqueId = "edb48204-5d64-b0cb-bcbf-62278fb73c32";
        var RC_edb482045d64b0cbbcbf62278fb73c32 = RC_edb482045d64b0cbbcbf62278fb73c32Inner;
        RC_edb482045d64b0cbbcbf62278fb73c32.init();
    }
});

define("OutSystemsUI.model$RL_df229a142c5216bd1ccc062986b28796", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_edb482045d64b0cbbcbf62278fb73c32"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_df229a142c5216bd1ccc062986b28796 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_edb482045d64b0cbbcbf62278fb73c32;
        }

    }

    OutSystemsUIModel.RL_df229a142c5216bd1ccc062986b28796 = RL_df229a142c5216bd1ccc062986b28796;

});

define("OutSystemsUI.model$RL_e3429d51e0fc95e173d2cbcfc5f6b446", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_8ccec918bf91fdb79e42a7e1e178b4beStructure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_e3429d51e0fc95e173d2cbcfc5f6b446 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_8ccec918bf91fdb79e42a7e1e178b4beStructure;
        }

    }

    OutSystemsUIModel.RL_e3429d51e0fc95e173d2cbcfc5f6b446 = RL_e3429d51e0fc95e173d2cbcfc5f6b446;

});

define("OutSystemsUI.model$RC_e3607d6b92545e5793fbeb99fc16b7e7", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_c1e622743b79c1510fd62a0adf89686bEntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore; {
        class RC_e3607d6b92545e5793fbeb99fc16b7e7Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("SideMenuBehavior", "sideMenuBehaviorAttr", "SideMenuBehavior", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.EN_c1e622743b79c1510fd62a0adf89686bEntityRecord());
                    }, true, OutSystemsUIModel.EN_c1e622743b79c1510fd62a0adf89686bEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_e3607d6b92545e5793fbeb99fc16b7e7(new RC_e3607d6b92545e5793fbeb99fc16b7e7.RecordClass({
                    sideMenuBehaviorAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsUIModel.RC_e3607d6b92545e5793fbeb99fc16b7e7 = RC_e3607d6b92545e5793fbeb99fc16b7e7Inner;

        RC_e3607d6b92545e5793fbeb99fc16b7e7Inner._isAnonymousRecord = true;
        RC_e3607d6b92545e5793fbeb99fc16b7e7Inner.UniqueId = "e3607d6b-9254-5e57-93fb-eb99fc16b7e7";
        var RC_e3607d6b92545e5793fbeb99fc16b7e7 = RC_e3607d6b92545e5793fbeb99fc16b7e7Inner;
        RC_e3607d6b92545e5793fbeb99fc16b7e7.init();
    }
});

define("OutSystemsUI.model$RL_e42632965fbacac756c3d935f97df7a8", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_dac62773434cf92b52368fd089bbfc2a"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_e42632965fbacac756c3d935f97df7a8 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_dac62773434cf92b52368fd089bbfc2a;
        }

    }

    OutSystemsUIModel.RL_e42632965fbacac756c3d935f97df7a8 = RL_e42632965fbacac756c3d935f97df7a8;

});

define("OutSystemsUI.model$RL_e57523dcca7e6d3766c4721a0ef109ee", ["exports", "@outsystems/runtime-core-js", "System_.model", "OutSystemsUI.model", "System_.model$PasswordValidationResultRec", "OutSystemsUI.referencesHealth", "OutSystemsUI.referencesHealth$System_"], function(exports, OSRuntimeCore, System_Model, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_e57523dcca7e6d3766c4721a0ef109ee extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OS.SystemStructures.PasswordValidationResultRec;
        }

    }

    OutSystemsUIModel.RL_e57523dcca7e6d3766c4721a0ef109ee = RL_e57523dcca7e6d3766c4721a0ef109ee;

});

define("OutSystemsUI.model$RL_e601dea76a3baf75374a012b5b214ad7", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_0a10b180e32034e48747aceb3ee25eef"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_e601dea76a3baf75374a012b5b214ad7 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_0a10b180e32034e48747aceb3ee25eef;
        }

    }

    OutSystemsUIModel.RL_e601dea76a3baf75374a012b5b214ad7 = RL_e601dea76a3baf75374a012b5b214ad7;

});

define("OutSystemsUI.model$RL_e643032e067ed027c126907d7206bcdd", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_81cffcb474124022b5e4e9bef9a608da"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_e643032e067ed027c126907d7206bcdd extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_81cffcb474124022b5e4e9bef9a608da;
        }

    }

    OutSystemsUIModel.RL_e643032e067ed027c126907d7206bcdd = RL_e643032e067ed027c126907d7206bcdd;

});

define("OutSystemsUI.model$RL_e76ce0f7deb6f6a812e61bd92e29120f", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_ffc6ac6eac2c99bcdbe1dc79ecc6377fStructure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_e76ce0f7deb6f6a812e61bd92e29120f extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_ffc6ac6eac2c99bcdbe1dc79ecc6377fStructure;
        }

    }

    OutSystemsUIModel.RL_e76ce0f7deb6f6a812e61bd92e29120f = RL_e76ce0f7deb6f6a812e61bd92e29120f;

});

define("OutSystemsUI.model$RL_e7b86a113e8a30ffc58a70e6ee41afc1", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_8f31728044d1321864213488837bc67a"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_e7b86a113e8a30ffc58a70e6ee41afc1 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_8f31728044d1321864213488837bc67a;
        }

    }

    OutSystemsUIModel.RL_e7b86a113e8a30ffc58a70e6ee41afc1 = RL_e7b86a113e8a30ffc58a70e6ee41afc1;

});

define("OutSystemsUI.model$RL_e80686d835355219265e84e425077e4d", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_a783e375273068e4b8f9c122c1661a6aStructure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_e80686d835355219265e84e425077e4d extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_a783e375273068e4b8f9c122c1661a6aStructure;
        }

    }

    OutSystemsUIModel.RL_e80686d835355219265e84e425077e4d = RL_e80686d835355219265e84e425077e4d;

});

define("OutSystemsUI.model$RL_e8445d61f812c92de860d050e73a5e29", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_2c43e02ff45af9d6dc9d417ea3304062EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_e8445d61f812c92de860d050e73a5e29 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.EN_2c43e02ff45af9d6dc9d417ea3304062EntityRecord;
        }

    }

    OutSystemsUIModel.RL_e8445d61f812c92de860d050e73a5e29 = RL_e8445d61f812c92de860d050e73a5e29;

});

define("OutSystemsUI.model$RL_eaefbf6dde0f7f83dd46a12f58dd150a", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_0d776a4e191faf321030d5ce57aa4167"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_eaefbf6dde0f7f83dd46a12f58dd150a extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_0d776a4e191faf321030d5ce57aa4167;
        }

    }

    OutSystemsUIModel.RL_eaefbf6dde0f7f83dd46a12f58dd150a = RL_eaefbf6dde0f7f83dd46a12f58dd150a;

});

define("OutSystemsUI.model$RL_eafe76043375465a898a3d00608f23b6", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_673cc0a63dbc3f5836f7732ba0712544"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_eafe76043375465a898a3d00608f23b6 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_673cc0a63dbc3f5836f7732ba0712544;
        }

    }

    OutSystemsUIModel.RL_eafe76043375465a898a3d00608f23b6 = RL_eafe76043375465a898a3d00608f23b6;

});

define("OutSystemsUI.model$RL_ee3b3fae9cabe5575be671b0ad7cd7cc", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_546a3060996e070a522a708cd2d94c23Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_ee3b3fae9cabe5575be671b0ad7cd7cc extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_546a3060996e070a522a708cd2d94c23Structure;
        }

    }

    OutSystemsUIModel.RL_ee3b3fae9cabe5575be671b0ad7cd7cc = RL_ee3b3fae9cabe5575be671b0ad7cd7cc;

});

define("OutSystemsUI.model$RL_ef0927b1b88ce156242cd5fb3fc4da55", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_dd0070f225e242673216fed1481d0a20"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_ef0927b1b88ce156242cd5fb3fc4da55 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_dd0070f225e242673216fed1481d0a20;
        }

    }

    OutSystemsUIModel.RL_ef0927b1b88ce156242cd5fb3fc4da55 = RL_ef0927b1b88ce156242cd5fb3fc4da55;

});

define("OutSystemsUI.model$RL_f05e8ae3043c6c2ac7e0d3791d45935e", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_de3deb221a4b1656cc37f0db973c4e9a"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_f05e8ae3043c6c2ac7e0d3791d45935e extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_de3deb221a4b1656cc37f0db973c4e9a;
        }

    }

    OutSystemsUIModel.RL_f05e8ae3043c6c2ac7e0d3791d45935e = RL_f05e8ae3043c6c2ac7e0d3791d45935e;

});

define("OutSystemsUI.model$RL_f115a666c5540eef6697d9968af9fe8e", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_a5018402fa6c90c5e826e54b2748cedc"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_f115a666c5540eef6697d9968af9fe8e extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_a5018402fa6c90c5e826e54b2748cedc;
        }

    }

    OutSystemsUIModel.RL_f115a666c5540eef6697d9968af9fe8e = RL_f115a666c5540eef6697d9968af9fe8e;

});

define("OutSystemsUI.model$RL_f1db162aca08aae7be68b7aedc571752", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_e3607d6b92545e5793fbeb99fc16b7e7"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_f1db162aca08aae7be68b7aedc571752 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_e3607d6b92545e5793fbeb99fc16b7e7;
        }

    }

    OutSystemsUIModel.RL_f1db162aca08aae7be68b7aedc571752 = RL_f1db162aca08aae7be68b7aedc571752;

});

define("OutSystemsUI.model$RL_f29b41ddd5f70c83d6188b4207e93ec0", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_f318de02ad2d00bca70ecb5d73f27ec9EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_f29b41ddd5f70c83d6188b4207e93ec0 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.EN_f318de02ad2d00bca70ecb5d73f27ec9EntityRecord;
        }

    }

    OutSystemsUIModel.RL_f29b41ddd5f70c83d6188b4207e93ec0 = RL_f29b41ddd5f70c83d6188b4207e93ec0;

});

define("OutSystemsUI.model$RL_f40eb24837dbd8351714c4d6350d54cb", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_7f56ea63061432843ab4dd16f4578b32"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_f40eb24837dbd8351714c4d6350d54cb extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_7f56ea63061432843ab4dd16f4578b32;
        }

    }

    OutSystemsUIModel.RL_f40eb24837dbd8351714c4d6350d54cb = RL_f40eb24837dbd8351714c4d6350d54cb;

});

define("OutSystemsUI.model$RL_f50879d0da007880fcd304f3378f0a9e", ["exports", "@outsystems/runtime-core-js", "System_.model", "OutSystemsUI.model", "System_.model$PasswordComplexityPolicyRec", "OutSystemsUI.referencesHealth", "OutSystemsUI.referencesHealth$System_"], function(exports, OSRuntimeCore, System_Model, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_f50879d0da007880fcd304f3378f0a9e extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OS.SystemStructures.PasswordComplexityPolicyRec;
        }

    }

    OutSystemsUIModel.RL_f50879d0da007880fcd304f3378f0a9e = RL_f50879d0da007880fcd304f3378f0a9e;

});

define("OutSystemsUI.model$RL_f51d1b2f3972179080ca5027bc7c8f43", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_9ca6a18cc49ca7246c44c0f7c2cef62a"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_f51d1b2f3972179080ca5027bc7c8f43 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_9ca6a18cc49ca7246c44c0f7c2cef62a;
        }

    }

    OutSystemsUIModel.RL_f51d1b2f3972179080ca5027bc7c8f43 = RL_f51d1b2f3972179080ca5027bc7c8f43;

});

define("OutSystemsUI.model$RL_f523c7921013f0781080fba3bca3beb7", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_d15ba8cc56cc5ee58bd8acaffd974239"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_f523c7921013f0781080fba3bca3beb7 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_d15ba8cc56cc5ee58bd8acaffd974239;
        }

    }

    OutSystemsUIModel.RL_f523c7921013f0781080fba3bca3beb7 = RL_f523c7921013f0781080fba3bca3beb7;

});

define("OutSystemsUI.model$RL_f6b054c71a69c2b6a6022397c94198cd", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_bb80a04f7ea6a5bb3d33db9b2bca4c88"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_f6b054c71a69c2b6a6022397c94198cd extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_bb80a04f7ea6a5bb3d33db9b2bca4c88;
        }

    }

    OutSystemsUIModel.RL_f6b054c71a69c2b6a6022397c94198cd = RL_f6b054c71a69c2b6a6022397c94198cd;

});

define("OutSystemsUI.model$RL_f6bc0d68163ce9d4c64ce162194bde5e", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_070998dc6b3dc951b52d8108550fe380"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_f6bc0d68163ce9d4c64ce162194bde5e extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_070998dc6b3dc951b52d8108550fe380;
        }

    }

    OutSystemsUIModel.RL_f6bc0d68163ce9d4c64ce162194bde5e = RL_f6bc0d68163ce9d4c64ce162194bde5e;

});

define("OutSystemsUI.model$RL_f6f369139dd0b4b991cc52257bf57277", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_3f6426aeecbfa4af19e279847df746cc"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_f6f369139dd0b4b991cc52257bf57277 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_3f6426aeecbfa4af19e279847df746cc;
        }

    }

    OutSystemsUIModel.RL_f6f369139dd0b4b991cc52257bf57277 = RL_f6f369139dd0b4b991cc52257bf57277;

});

define("OutSystemsUI.model$RL_f895ce68953fdb97b2f37d55699f4e66", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_4835a3b0a2d4ab28e154f8a8831a00ef"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_f895ce68953fdb97b2f37d55699f4e66 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_4835a3b0a2d4ab28e154f8a8831a00ef;
        }

    }

    OutSystemsUIModel.RL_f895ce68953fdb97b2f37d55699f4e66 = RL_f895ce68953fdb97b2f37d55699f4e66;

});

define("OutSystemsUI.model$RL_f8c899ec29befda6e6527c5f059904c6", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_aa6f2a469018f20449b52bedd4074e46"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_f8c899ec29befda6e6527c5f059904c6 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_aa6f2a469018f20449b52bedd4074e46;
        }

    }

    OutSystemsUIModel.RL_f8c899ec29befda6e6527c5f059904c6 = RL_f8c899ec29befda6e6527c5f059904c6;

});

define("OutSystemsUI.model$RL_f90829e8248d7dd911b648b9522ef82a", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$EN_5be8b31925746693c09b3f64c4898006EntityRecord"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_f90829e8248d7dd911b648b9522ef82a extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.EN_5be8b31925746693c09b3f64c4898006EntityRecord;
        }

    }

    OutSystemsUIModel.RL_f90829e8248d7dd911b648b9522ef82a = RL_f90829e8248d7dd911b648b9522ef82a;

});

define("OutSystemsUI.model$RL_f90b181f5e7da4de036de66a53f72976", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_3e7155b32546681d96eaaf8aa39a4f6e"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_f90b181f5e7da4de036de66a53f72976 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_3e7155b32546681d96eaaf8aa39a4f6e;
        }

    }

    OutSystemsUIModel.RL_f90b181f5e7da4de036de66a53f72976 = RL_f90b181f5e7da4de036de66a53f72976;

});

define("OutSystemsUI.model$RL_f9624ab6e814fdb86dd00a59d573aa8e", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_660adb7a9db48bff1b12c6e03515b415Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_f9624ab6e814fdb86dd00a59d573aa8e extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_660adb7a9db48bff1b12c6e03515b415Structure;
        }

    }

    OutSystemsUIModel.RL_f9624ab6e814fdb86dd00a59d573aa8e = RL_f9624ab6e814fdb86dd00a59d573aa8e;

});

define("OutSystemsUI.model$RL_f969515e188a563eaaeb32adf64a4b13", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_60ed22b1487b1e18edb2fceb277aa5d1"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_f969515e188a563eaaeb32adf64a4b13 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_60ed22b1487b1e18edb2fceb277aa5d1;
        }

    }

    OutSystemsUIModel.RL_f969515e188a563eaaeb32adf64a4b13 = RL_f969515e188a563eaaeb32adf64a4b13;

});

define("OutSystemsUI.model$RL_fa557d462db5fd8b6c78f8146063f07b", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_936f99e69df60f5aa2563bbd38e49c98Structure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_fa557d462db5fd8b6c78f8146063f07b extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_936f99e69df60f5aa2563bbd38e49c98Structure;
        }

    }

    OutSystemsUIModel.RL_fa557d462db5fd8b6c78f8146063f07b = RL_fa557d462db5fd8b6c78f8146063f07b;

});

define("OutSystemsUI.model$RL_fbb2b7534faa0da2d8fb2745cf7ef411", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_b1f70cd6a745b5879d66249a8c483fef"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_fbb2b7534faa0da2d8fb2745cf7ef411 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_b1f70cd6a745b5879d66249a8c483fef;
        }

    }

    OutSystemsUIModel.RL_fbb2b7534faa0da2d8fb2745cf7ef411 = RL_fbb2b7534faa0da2d8fb2745cf7ef411;

});

define("OutSystemsUI.model$RL_fe6fb4f018033ae17b199f007902ed43", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_d5f1a8119489aabce0fbd0fa422c2185"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_fe6fb4f018033ae17b199f007902ed43 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_d5f1a8119489aabce0fbd0fa422c2185;
        }

    }

    OutSystemsUIModel.RL_fe6fb4f018033ae17b199f007902ed43 = RL_fe6fb4f018033ae17b199f007902ed43;

});

define("OutSystemsUI.model$RL_fea339219699b0d78ea5a0c4450d0c70", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$ST_4e53cb8815b86020ced1d2f2652c9b1dStructure"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_fea339219699b0d78ea5a0c4450d0c70 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.ST_4e53cb8815b86020ced1d2f2652c9b1dStructure;
        }

    }

    OutSystemsUIModel.RL_fea339219699b0d78ea5a0c4450d0c70 = RL_fea339219699b0d78ea5a0c4450d0c70;

});

define("OutSystemsUI.model$RL_ff5ba20b0d42d4170d7b63779346dc5d", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.model$RC_3d7c5be4055c8fe2c227afc40d8dee2f"], function(exports, OSRuntimeCore, OutSystemsUIModel) {
    var OS = OSRuntimeCore;
    class RL_ff5ba20b0d42d4170d7b63779346dc5d extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsUIModel.RC_3d7c5be4055c8fe2c227afc40d8dee2f;
        }

    }

    OutSystemsUIModel.RL_ff5ba20b0d42d4170d7b63779346dc5d = RL_ff5ba20b0d42d4170d7b63779346dc5d;

});

define("OutSystemsUI.model", ["exports", "@outsystems/runtime-core-js"], function(exports, OSRuntimeCore) {
    var OS = OSRuntimeCore;
    var OutSystemsUIModel = exports;
    Object.defineProperty(OutSystemsUIModel, "module", {
        get: function() {
            return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"];
        }
    });

    OutSystemsUIModel.staticEntities = {};
    OutSystemsUIModel.staticEntities.carouselProvider = {};
    var getCarouselProviderRecord = function(record) {
        return OutSystemsUIModel.module.staticEntities["01addca3-86ba-436f-950e-e48d74ea2cac"][record];
    };
    Object.defineProperty(OutSystemsUIModel.staticEntities.carouselProvider, "splide", {
        get: function() {
            return "Splide";
        }
    });

    OutSystemsUIModel.staticEntities.animationType = {};
    var getAnimationTypeRecord = function(record) {
        return OutSystemsUIModel.module.staticEntities["0463d449-6834-40d5-817b-3d74d1a71bb2"][record];
    };
    Object.defineProperty(OutSystemsUIModel.staticEntities.animationType, "topToBottom", {
        get: function() {
            return "top-to-bottom";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.animationType, "bounce", {
        get: function() {
            return "bounce";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.animationType, "fadeIn", {
        get: function() {
            return "fade-in";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.animationType, "scaleDown", {
        get: function() {
            return "scale-down";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.animationType, "scale", {
        get: function() {
            return "scale";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.animationType, "spinner", {
        get: function() {
            return "spinner";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.animationType, "bottomToTop", {
        get: function() {
            return "bottom-to-top";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.animationType, "rightToLeft", {
        get: function() {
            return "right-to-left";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.animationType, "leftToRight", {
        get: function() {
            return "left-to-right";
        }
    });

    OutSystemsUIModel.staticEntities.speed = {};
    var getSpeedRecord = function(record) {
        return OutSystemsUIModel.module.staticEntities["0a5cc4ae-b54f-4ea3-9ace-9f49c7724606"][record];
    };
    Object.defineProperty(OutSystemsUIModel.staticEntities.speed, "fast", {
        get: function() {
            return "fast";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.speed, "normal", {
        get: function() {
            return "normal";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.speed, "slow", {
        get: function() {
            return "slow";
        }
    });

    OutSystemsUIModel.staticEntities.sideMenuBehavior = {};
    var getSideMenuBehaviorRecord = function(record) {
        return OutSystemsUIModel.module.staticEntities["11a5937b-e94d-4250-99a8-9c8358d3d965"][record];
    };
    Object.defineProperty(OutSystemsUIModel.staticEntities.sideMenuBehavior, "visible", {
        get: function() {
            return "aside-visible";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.sideMenuBehavior, "expandable", {
        get: function() {
            return "aside-expandable";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.sideMenuBehavior, "overlay", {
        get: function() {
            return "aside-overlay";
        }
    });

    OutSystemsUIModel.staticEntities.gradient = {};
    var getGradientRecord = function(record) {
        return OutSystemsUIModel.module.staticEntities["15f4b55e-c9e8-4f0d-a043-0093e17fa04d"][record];
    };
    Object.defineProperty(OutSystemsUIModel.staticEntities.gradient, "linearHorizontal", {
        get: function() {
            return "LinearHorizontal";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.gradient, "radial", {
        get: function() {
            return "Radial";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.gradient, "linearDiagonally", {
        get: function() {
            return "LinearDiagonally";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.gradient, "linearVertical", {
        get: function() {
            return "LinearVertical";
        }
    });

    OutSystemsUIModel.staticEntities.size = {};
    var getSizeRecord = function(record) {
        return OutSystemsUIModel.module.staticEntities["1ac110b4-8964-470b-a6b2-81ae4a6b5bde"][record];
    };
    Object.defineProperty(OutSystemsUIModel.staticEntities.size, "medium", {
        get: function() {
            return "medium";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.size, "small", {
        get: function() {
            return "small";
        }
    });

    OutSystemsUIModel.staticEntities.deviceResponsive = {};
    var getDeviceResponsiveRecord = function(record) {
        return OutSystemsUIModel.module.staticEntities["29468e1d-a25a-42c3-bf53-b232accc150d"][record];
    };
    Object.defineProperty(OutSystemsUIModel.staticEntities.deviceResponsive, "desktopAndTablet", {
        get: function() {
            return "DesktopAndTablet";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.deviceResponsive, "tabletOnly", {
        get: function() {
            return "TabletOnly";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.deviceResponsive, "allDevices", {
        get: function() {
            return "AllDevices";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.deviceResponsive, "phoneOnly", {
        get: function() {
            return "PhoneOnly";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.deviceResponsive, "tabletAndPhone", {
        get: function() {
            return "TabletAndPhone";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.deviceResponsive, "desktopOnly", {
        get: function() {
            return "DesktopOnly";
        }
    });

    OutSystemsUIModel.staticEntities.gutterSize = {};
    var getGutterSizeRecord = function(record) {
        return OutSystemsUIModel.module.staticEntities["2e81a1e8-4fa4-4bd0-a945-65352999b0be"][record];
    };
    Object.defineProperty(OutSystemsUIModel.staticEntities.gutterSize, "xXLarge", {
        get: function() {
            return "gutter-xxl";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.gutterSize, "medium", {
        get: function() {
            return "gutter-m";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.gutterSize, "none", {
        get: function() {
            return "gutter-none";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.gutterSize, "extraLarge", {
        get: function() {
            return "gutter-xl";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.gutterSize, "small", {
        get: function() {
            return "gutter-s";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.gutterSize, "large", {
        get: function() {
            return "gutter-l";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.gutterSize, "base", {
        get: function() {
            return "gutter-base";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.gutterSize, "extraSmall", {
        get: function() {
            return "gutter-xs";
        }
    });

    OutSystemsUIModel.staticEntities.month = {};
    var getMonthRecord = function(record) {
        return OutSystemsUIModel.module.staticEntities["33d9b724-a0b1-4b0a-91fb-272143c44a85"][record];
    };
    Object.defineProperty(OutSystemsUIModel.staticEntities.month, "june", {
        get: function() {
            return "June";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.month, "march", {
        get: function() {
            return "March";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.month, "december", {
        get: function() {
            return "December";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.month, "february", {
        get: function() {
            return "February";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.month, "may", {
        get: function() {
            return "May";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.month, "april", {
        get: function() {
            return "April";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.month, "november", {
        get: function() {
            return "November";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.month, "august", {
        get: function() {
            return "August";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.month, "january", {
        get: function() {
            return "January";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.month, "july", {
        get: function() {
            return "July";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.month, "september", {
        get: function() {
            return "September";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.month, "october", {
        get: function() {
            return "October";
        }
    });

    OutSystemsUIModel.staticEntities.datePickerLanguage = {};
    var getDatePickerLanguageRecord = function(record) {
        return OutSystemsUIModel.module.staticEntities["45402ee4-73bf-42a2-b5f8-371ae940bf4f"][record];
    };
    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "japanese", {
        get: function() {
            return "ja";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "dutchFlemish", {
        get: function() {
            return "nl";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "czech", {
        get: function() {
            return "cs";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "indonesian", {
        get: function() {
            return "id";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "punjabiPanjabi", {
        get: function() {
            return "pa";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "latvian", {
        get: function() {
            return "lv";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "chinese", {
        get: function() {
            return "zh";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "polish", {
        get: function() {
            return "pl";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "estonian", {
        get: function() {
            return "et";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "catalanValencian", {
        get: function() {
            return "ca";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "malay", {
        get: function() {
            return "ms";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "slovak", {
        get: function() {
            return "sk";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "sinhalaSinhalese", {
        get: function() {
            return "si";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "danish", {
        get: function() {
            return "da";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "english", {
        get: function() {
            return "en";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "hungarian", {
        get: function() {
            return "hu";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "norwegianNynorsk", {
        get: function() {
            return "nn";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "norwegianBokmal", {
        get: function() {
            return "nb";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "arabic", {
        get: function() {
            return "ar";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "faroese", {
        get: function() {
            return "fo";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "centralKhmer", {
        get: function() {
            return "km";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "romanianMoldavianMoldovan", {
        get: function() {
            return "ro";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "chineseTraditional", {
        get: function() {
            return "zh_tw";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "norwegian", {
        get: function() {
            return "no";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "esperanto", {
        get: function() {
            return "eo";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "croatian", {
        get: function() {
            return "hr";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "albanian", {
        get: function() {
            return "sq";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "korean", {
        get: function() {
            return "ko";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "thai", {
        get: function() {
            return "th";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "mongolian", {
        get: function() {
            return "mn";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "spanishCastilian", {
        get: function() {
            return "es";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "slovenian", {
        get: function() {
            return "sl";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "vietnamese", {
        get: function() {
            return "vi";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "bosnian", {
        get: function() {
            return "bs";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "french", {
        get: function() {
            return "fr";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "turkish", {
        get: function() {
            return "tr";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "russian", {
        get: function() {
            return "ru";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "serbian", {
        get: function() {
            return "sr";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "lithuanian", {
        get: function() {
            return "lt";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "portuguese", {
        get: function() {
            return "pt";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "hebrew", {
        get: function() {
            return "he";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "uzbek", {
        get: function() {
            return "uz";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "burmese", {
        get: function() {
            return "my";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "italian", {
        get: function() {
            return "it";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "georgian", {
        get: function() {
            return "ka";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "swedish", {
        get: function() {
            return "sv";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "azerbaijani", {
        get: function() {
            return "az";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "hindi", {
        get: function() {
            return "hi";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "bulgarian", {
        get: function() {
            return "bg";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "finnish", {
        get: function() {
            return "fi";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "persian", {
        get: function() {
            return "fa";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "armenian", {
        get: function() {
            return "hy";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "german", {
        get: function() {
            return "de";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "belarusian", {
        get: function() {
            return "be";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "welsh", {
        get: function() {
            return "cy";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "ukrainian", {
        get: function() {
            return "uk";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "bengali", {
        get: function() {
            return "bn";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerLanguage, "macedonian", {
        get: function() {
            return "mk";
        }
    });

    OutSystemsUIModel.staticEntities.dEPRECATED_Color = {};
    var getDEPRECATED_ColorRecord = function(record) {
        return OutSystemsUIModel.module.staticEntities["4a5b3b8d-44e7-4c03-9b89-453fa2feee20"][record];
    };
    Object.defineProperty(OutSystemsUIModel.staticEntities.dEPRECATED_Color, "white", {
        get: function() {
            return "white";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.dEPRECATED_Color, "blue", {
        get: function() {
            return "blue";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.dEPRECATED_Color, "black", {
        get: function() {
            return "black";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.dEPRECATED_Color, "violet", {
        get: function() {
            return "violet";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.dEPRECATED_Color, "none", {
        get: function() {
            return "default";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.dEPRECATED_Color, "orange", {
        get: function() {
            return "orange";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.dEPRECATED_Color, "red", {
        get: function() {
            return "red";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.dEPRECATED_Color, "primaryColor", {
        get: function() {
            return "primary-color";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.dEPRECATED_Color, "green", {
        get: function() {
            return "green";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.dEPRECATED_Color, "grey", {
        get: function() {
            return "grey";
        }
    });

    OutSystemsUIModel.staticEntities.orientation = {};
    var getOrientationRecord = function(record) {
        return OutSystemsUIModel.module.staticEntities["4d71f824-a563-4f63-8c76-626e4e0bdddb"][record];
    };
    Object.defineProperty(OutSystemsUIModel.staticEntities.orientation, "horizontal", {
        get: function() {
            return "horizontal";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.orientation, "vertical", {
        get: function() {
            return "vertical";
        }
    });

    OutSystemsUIModel.staticEntities.datePickerTimeFormat = {};
    var getDatePickerTimeFormatRecord = function(record) {
        return OutSystemsUIModel.module.staticEntities["55e54b1a-0efe-4bef-ae10-c2769129634d"][record];
    };
    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerTimeFormat, "disabled", {
        get: function() {
            return "disabled";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerTimeFormat, "time24hFormat", {
        get: function() {
            return "24";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerTimeFormat, "time12hFormat", {
        get: function() {
            return "12";
        }
    });

    OutSystemsUIModel.staticEntities.accordionIconType = {};
    var getAccordionIconTypeRecord = function(record) {
        return OutSystemsUIModel.module.staticEntities["635cc1de-f6de-4b65-baf1-c661bc518266"][record];
    };
    Object.defineProperty(OutSystemsUIModel.staticEntities.accordionIconType, "custom", {
        get: function() {
            return "Custom";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.accordionIconType, "plusMinus", {
        get: function() {
            return "PlusMinus";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.accordionIconType, "caret", {
        get: function() {
            return "Caret";
        }
    });

    OutSystemsUIModel.staticEntities.direction = {};
    var getDirectionRecord = function(record) {
        return OutSystemsUIModel.module.staticEntities["67628086-7f8b-4f84-a978-a9d3f547969c"][record];
    };
    Object.defineProperty(OutSystemsUIModel.staticEntities.direction, "left", {
        get: function() {
            return "left";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.direction, "right", {
        get: function() {
            return "right";
        }
    });

    OutSystemsUIModel.staticEntities.breakColumns = {};
    var getBreakColumnsRecord = function(record) {
        return OutSystemsUIModel.module.staticEntities["68f74593-a5c4-4e65-858b-f44211eaf122"][record];
    };
    Object.defineProperty(OutSystemsUIModel.staticEntities.breakColumns, "none", {
        get: function() {
            return "break-none";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.breakColumns, "first", {
        get: function() {
            return "break-first";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.breakColumns, "all", {
        get: function() {
            return "break-all";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.breakColumns, "middle", {
        get: function() {
            return "break-middle";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.breakColumns, "last", {
        get: function() {
            return "break-last";
        }
    });

    OutSystemsUIModel.staticEntities.rangeSliderType = {};
    var getRangeSliderTypeRecord = function(record) {
        return OutSystemsUIModel.module.staticEntities["6f4436fe-d69a-4b09-8cc9-abddba377729"][record];
    };
    Object.defineProperty(OutSystemsUIModel.staticEntities.rangeSliderType, "single", {
        get: function() {
            return "single";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.rangeSliderType, "interval", {
        get: function() {
            return "interval";
        }
    });

    OutSystemsUIModel.staticEntities.shape = {};
    var getShapeRecord = function(record) {
        return OutSystemsUIModel.module.staticEntities["6fe168a9-c16d-4cdb-9b6f-a9e6c6b79326"][record];
    };
    Object.defineProperty(OutSystemsUIModel.staticEntities.shape, "sharp", {
        get: function() {
            return "none";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.shape, "softRounded", {
        get: function() {
            return "soft";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.shape, "rounded", {
        get: function() {
            return "rounded";
        }
    });

    OutSystemsUIModel.staticEntities.stackedCardsPosition = {};
    var getStackedCardsPositionRecord = function(record) {
        return OutSystemsUIModel.module.staticEntities["71865eb4-55fe-40a5-bc7f-45b005a3a0b5"][record];
    };
    Object.defineProperty(OutSystemsUIModel.staticEntities.stackedCardsPosition, "bottom", {
        get: function() {
            return "Bottom";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.stackedCardsPosition, "top", {
        get: function() {
            return "Top";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.stackedCardsPosition, "none", {
        get: function() {
            return "None";
        }
    });

    OutSystemsUIModel.staticEntities.carouselDirection = {};
    var getCarouselDirectionRecord = function(record) {
        return OutSystemsUIModel.module.staticEntities["71cbe266-f7c5-42fb-beae-76bc325d99ea"][record];
    };
    Object.defineProperty(OutSystemsUIModel.staticEntities.carouselDirection, "rightToLeft", {
        get: function() {
            return "RightToLeft";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.carouselDirection, "leftToRight", {
        get: function() {
            return "LeftToRight";
        }
    });

    OutSystemsUIModel.staticEntities.rangeSliderProvider = {};
    var getRangeSliderProviderRecord = function(record) {
        return OutSystemsUIModel.module.staticEntities["76a8780c-9acf-4be3-949d-c5bb30052481"][record];
    };
    Object.defineProperty(OutSystemsUIModel.staticEntities.rangeSliderProvider, "noUiSlider", {
        get: function() {
            return "noUiSlider";
        }
    });

    OutSystemsUIModel.staticEntities.registeredCallbackEvents = {};
    var getRegisteredCallbackEventsRecord = function(record) {
        return OutSystemsUIModel.module.staticEntities["8292d703-2455-4daf-9574-a852dc42baff"][record];
    };
    Object.defineProperty(OutSystemsUIModel.staticEntities.registeredCallbackEvents, "carousel_OnSlideMoved", {
        get: function() {
            return "OnSlideMoved";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.registeredCallbackEvents, "onChange", {
        get: function() {
            return "OnChange";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.registeredCallbackEvents, "initialized", {
        get: function() {
            return "Initialized";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.registeredCallbackEvents, "rangeSlider_OnValueChange", {
        get: function() {
            return "OnValueChange";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.registeredCallbackEvents, "onSelected", {
        get: function() {
            return "OnSelected";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.registeredCallbackEvents, "onToggle", {
        get: function() {
            return "OnToggle";
        }
    });

    OutSystemsUIModel.staticEntities.autoplay = {};
    var getAutoplayRecord = function(record) {
        return OutSystemsUIModel.module.staticEntities["82aa58b4-8bbb-4d19-92b6-2944affad02c"][record];
    };
    Object.defineProperty(OutSystemsUIModel.staticEntities.autoplay, "disabled", {
        get: function() {
            return "disabled";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.autoplay, "slow", {
        get: function() {
            return "slow";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.autoplay, "fast", {
        get: function() {
            return "fast";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.autoplay, "normal", {
        get: function() {
            return "normal";
        }
    });

    OutSystemsUIModel.staticEntities.position = {};
    var getPositionRecord = function(record) {
        return OutSystemsUIModel.module.staticEntities["83c073e8-bac2-4122-9772-aa6e122a5d36"][record];
    };
    Object.defineProperty(OutSystemsUIModel.staticEntities.position, "top", {
        get: function() {
            return "top";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.position, "left", {
        get: function() {
            return "left";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.position, "bottomRight", {
        get: function() {
            return "bottom-right";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.position, "bottomLeft", {
        get: function() {
            return "bottom-left";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.position, "right", {
        get: function() {
            return "right";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.position, "topLeft", {
        get: function() {
            return "top-left";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.position, "topRight", {
        get: function() {
            return "top-right";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.position, "center", {
        get: function() {
            return "center";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.position, "bottom", {
        get: function() {
            return "bottom";
        }
    });

    OutSystemsUIModel.staticEntities.identityProvider = {};
    var getIdentityProviderRecord = function(record) {
        return OutSystemsUIModel.module.staticEntities["8ad07004-49d8-42d6-93d1-73727c698b14"][record];
    };
    Object.defineProperty(OutSystemsUIModel.staticEntities.identityProvider, "facebook", {
        get: function() {
            return "facebook";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.identityProvider, "google", {
        get: function() {
            return "google";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.identityProvider, "apple", {
        get: function() {
            return "apple";
        }
    });

    OutSystemsUIModel.staticEntities.trigger = {};
    var getTriggerRecord = function(record) {
        return OutSystemsUIModel.module.staticEntities["8f0912ba-c626-4795-90a6-5311e2b970cb"][record];
    };
    Object.defineProperty(OutSystemsUIModel.staticEntities.trigger, "onClick", {
        get: function() {
            return "onclick";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.trigger, "onHover", {
        get: function() {
            return "onhover";
        }
    });

    OutSystemsUIModel.staticEntities.space = {};
    var getSpaceRecord = function(record) {
        return OutSystemsUIModel.module.staticEntities["8fb3d471-82a4-439c-9cc1-0555dfa91451"][record];
    };
    Object.defineProperty(OutSystemsUIModel.staticEntities.space, "large", {
        get: function() {
            return "l";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.space, "medium", {
        get: function() {
            return "m";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.space, "xXLarge", {
        get: function() {
            return "xxl";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.space, "extraSmall", {
        get: function() {
            return "xs";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.space, "small", {
        get: function() {
            return "s";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.space, "base", {
        get: function() {
            return "base";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.space, "extraLarge", {
        get: function() {
            return "xl";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.space, "none", {
        get: function() {
            return "none";
        }
    });

    OutSystemsUIModel.staticEntities.alert = {};
    var getAlertRecord = function(record) {
        return OutSystemsUIModel.module.staticEntities["924486c0-dd9a-46ea-ad74-2cf9ac0c84d9"][record];
    };
    Object.defineProperty(OutSystemsUIModel.staticEntities.alert, "success", {
        get: function() {
            return "alert-success";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.alert, "error", {
        get: function() {
            return "alert-error";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.alert, "info", {
        get: function() {
            return "alert-info";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.alert, "warning", {
        get: function() {
            return "alert-warning";
        }
    });

    OutSystemsUIModel.staticEntities.floatingPosition = {};
    var getFloatingPositionRecord = function(record) {
        return OutSystemsUIModel.module.staticEntities["926b8b2a-0906-4e6f-8ef5-e18fdce4b5af"][record];
    };
    Object.defineProperty(OutSystemsUIModel.staticEntities.floatingPosition, "leftStart", {
        get: function() {
            return "left-start";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.floatingPosition, "topEnd", {
        get: function() {
            return "top-end";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.floatingPosition, "right", {
        get: function() {
            return "right";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.floatingPosition, "top", {
        get: function() {
            return "top";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.floatingPosition, "bottomEnd", {
        get: function() {
            return "bottom-end";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.floatingPosition, "auto", {
        get: function() {
            return "auto";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.floatingPosition, "leftEnd", {
        get: function() {
            return "left-end";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.floatingPosition, "bottomStart", {
        get: function() {
            return "bottom-start";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.floatingPosition, "rightEnd", {
        get: function() {
            return "right-end";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.floatingPosition, "topStart", {
        get: function() {
            return "top-start";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.floatingPosition, "left", {
        get: function() {
            return "left";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.floatingPosition, "rightStart", {
        get: function() {
            return "right-start";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.floatingPosition, "center", {
        get: function() {
            return "center";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.floatingPosition, "bottom", {
        get: function() {
            return "bottom";
        }
    });

    OutSystemsUIModel.staticEntities.booleanTypes = {};
    var getBooleanTypesRecord = function(record) {
        return OutSystemsUIModel.module.staticEntities["9882c8fc-0dd6-492e-b6b9-7a68059ecc06"][record];
    };
    Object.defineProperty(OutSystemsUIModel.staticEntities.booleanTypes, "true", {
        get: function() {
            return "true";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.booleanTypes, "unset", {
        get: function() {
            return "unset";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.booleanTypes, "false", {
        get: function() {
            return "false";
        }
    });

    OutSystemsUIModel.staticEntities.menuAction = {};
    var getMenuActionRecord = function(record) {
        return OutSystemsUIModel.module.staticEntities["9cc12883-06ab-4cf0-9997-ede7c6c02d67"][record];
    };
    Object.defineProperty(OutSystemsUIModel.staticEntities.menuAction, "menu", {
        get: function() {
            return "Menu";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.menuAction, "auto", {
        get: function() {
            return "Auto";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.menuAction, "hidden", {
        get: function() {
            return "Hidden";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.menuAction, "back", {
        get: function() {
            return "Back";
        }
    });

    OutSystemsUIModel.staticEntities.accordionIconPosition = {};
    var getAccordionIconPositionRecord = function(record) {
        return OutSystemsUIModel.module.staticEntities["a848db2d-fe6c-4df1-8c10-8bdb3c2e948a"][record];
    };
    Object.defineProperty(OutSystemsUIModel.staticEntities.accordionIconPosition, "left", {
        get: function() {
            return "left";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.accordionIconPosition, "right", {
        get: function() {
            return "right";
        }
    });

    OutSystemsUIModel.staticEntities.datePickerCalendarType = {};
    var getDatePickerCalendarTypeRecord = function(record) {
        return OutSystemsUIModel.module.staticEntities["a8849efb-7aa4-4297-971f-db5b0c65fbfa"][record];
    };
    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerCalendarType, "single", {
        get: function() {
            return "single";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerCalendarType, "range", {
        get: function() {
            return "range";
        }
    });

    OutSystemsUIModel.staticEntities.logType = {};
    var getLogTypeRecord = function(record) {
        return OutSystemsUIModel.module.staticEntities["ac429394-d435-4e1c-8f83-8ec82b367ec9"][record];
    };
    Object.defineProperty(OutSystemsUIModel.staticEntities.logType, "performance", {
        get: function() {
            return "Performance";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.logType, "debug", {
        get: function() {
            return "Debug";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.logType, "error", {
        get: function() {
            return "Error";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.logType, "general", {
        get: function() {
            return "General";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.logType, "warning", {
        get: function() {
            return "Warning";
        }
    });

    OutSystemsUIModel.staticEntities.progressType = {};
    var getProgressTypeRecord = function(record) {
        return OutSystemsUIModel.module.staticEntities["b1c32742-606e-4e3e-9923-1c2e6e69ab6c"][record];
    };
    Object.defineProperty(OutSystemsUIModel.staticEntities.progressType, "bar", {
        get: function() {
            return "Bar";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.progressType, "circle", {
        get: function() {
            return "Circle";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.progressType, "circleFraction", {
        get: function() {
            return "CircleFraction";
        }
    });

    OutSystemsUIModel.staticEntities.messageStatus = {};
    var getMessageStatusRecord = function(record) {
        return OutSystemsUIModel.module.staticEntities["c1015fc0-c81c-40cc-a046-bf99cf21a280"][record];
    };
    Object.defineProperty(OutSystemsUIModel.staticEntities.messageStatus, "hidden", {
        get: function() {
            return "Hidden";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.messageStatus, "read", {
        get: function() {
            return "Read";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.messageStatus, "sent", {
        get: function() {
            return "Sent";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.messageStatus, "received", {
        get: function() {
            return "Received";
        }
    });

    OutSystemsUIModel.staticEntities.scrollbarStyle = {};
    var getScrollbarStyleRecord = function(record) {
        return OutSystemsUIModel.module.staticEntities["c3d6dfea-6da2-468a-80e4-5ce668d43f70"][record];
    };
    Object.defineProperty(OutSystemsUIModel.staticEntities.scrollbarStyle, "none", {
        get: function() {
            return "none";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.scrollbarStyle, "default", {
        get: function() {
            return "default";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.scrollbarStyle, "compact", {
        get: function() {
            return "compact";
        }
    });

    OutSystemsUIModel.staticEntities.dropdownProvider = {};
    var getDropdownProviderRecord = function(record) {
        return OutSystemsUIModel.module.staticEntities["c432b13a-7b10-4a88-993c-71748f34d7ff"][record];
    };
    Object.defineProperty(OutSystemsUIModel.staticEntities.dropdownProvider, "oSUIComponents", {
        get: function() {
            return "osui-components";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.dropdownProvider, "virtualSelect", {
        get: function() {
            return "virtual-select";
        }
    });

    OutSystemsUIModel.staticEntities.color = {};
    var getColorRecord = function(record) {
        return OutSystemsUIModel.module.staticEntities["cb6d1da7-26d4-45d9-bc22-9a4c482e6ce2"][record];
    };
    Object.defineProperty(OutSystemsUIModel.staticEntities.color, "neutral9", {
        get: function() {
            return "neutral-9";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.color, "grape", {
        get: function() {
            return "grape";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.color, "neutral7", {
        get: function() {
            return "neutral-7";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.color, "neutral10", {
        get: function() {
            return "neutral-10";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.color, "teal", {
        get: function() {
            return "teal";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.color, "primary", {
        get: function() {
            return "primary";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.color, "neutral4", {
        get: function() {
            return "neutral-4";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.color, "neutral8", {
        get: function() {
            return "neutral-8";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.color, "indigo", {
        get: function() {
            return "indigo";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.color, "orange", {
        get: function() {
            return "orange";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.color, "lime", {
        get: function() {
            return "lime";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.color, "cyan", {
        get: function() {
            return "cyan";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.color, "secondary", {
        get: function() {
            return "secondary";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.color, "neutral6", {
        get: function() {
            return "neutral-6";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.color, "yellow", {
        get: function() {
            return "yellow";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.color, "neutral2", {
        get: function() {
            return "neutral-2";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.color, "neutral1", {
        get: function() {
            return "neutral-1";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.color, "neutral3", {
        get: function() {
            return "neutral-3";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.color, "transparent", {
        get: function() {
            return "transparent";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.color, "violet", {
        get: function() {
            return "violet";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.color, "blue", {
        get: function() {
            return "blue";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.color, "neutral5", {
        get: function() {
            return "neutral-5";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.color, "red", {
        get: function() {
            return "red";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.color, "pink", {
        get: function() {
            return "pink";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.color, "green", {
        get: function() {
            return "green";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.color, "neutral0", {
        get: function() {
            return "neutral-0";
        }
    });

    OutSystemsUIModel.staticEntities.columnBreak = {};
    var getColumnBreakRecord = function(record) {
        return OutSystemsUIModel.module.staticEntities["cce6ac21-942a-492f-8b46-64c5e6ea057b"][record];
    };
    Object.defineProperty(OutSystemsUIModel.staticEntities.columnBreak, "breakMiddle", {
        get: function() {
            return "break-middle";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.columnBreak, "breakAll", {
        get: function() {
            return "break-all";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.columnBreak, "breakNone", {
        get: function() {
            return "break-none";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.columnBreak, "breakLast", {
        get: function() {
            return "break-last";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.columnBreak, "breakFirst", {
        get: function() {
            return "break-first";
        }
    });

    OutSystemsUIModel.staticEntities.dropdownType = {};
    var getDropdownTypeRecord = function(record) {
        return OutSystemsUIModel.module.staticEntities["e225f392-825d-442c-ac1f-b4b08d829a5d"][record];
    };
    Object.defineProperty(OutSystemsUIModel.staticEntities.dropdownType, "tags", {
        get: function() {
            return "tags";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.dropdownType, "serverSide", {
        get: function() {
            return "server-side";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.dropdownType, "search", {
        get: function() {
            return "search";
        }
    });

    OutSystemsUIModel.staticEntities.steps = {};
    var getStepsRecord = function(record) {
        return OutSystemsUIModel.module.staticEntities["e4dd8e9f-a620-4df5-b619-9b8a771be5a3"][record];
    };
    Object.defineProperty(OutSystemsUIModel.staticEntities.steps, "next", {
        get: function() {
            return "next";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.steps, "past", {
        get: function() {
            return "past";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.steps, "active", {
        get: function() {
            return "active";
        }
    });

    OutSystemsUIModel.staticEntities.datePickerProvider = {};
    var getDatePickerProviderRecord = function(record) {
        return OutSystemsUIModel.module.staticEntities["eba14106-529d-4e9d-9ca0-fdb74716d75f"][record];
    };
    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerProvider, "flatpickr", {
        get: function() {
            return "flatpickr";
        }
    });

    OutSystemsUIModel.staticEntities.carouselNavigation = {};
    var getCarouselNavigationRecord = function(record) {
        return OutSystemsUIModel.module.staticEntities["ee3aefc9-e437-49fb-86a2-0c2d0656ed43"][record];
    };
    Object.defineProperty(OutSystemsUIModel.staticEntities.carouselNavigation, "dots", {
        get: function() {
            return "dots";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.carouselNavigation, "none", {
        get: function() {
            return "none";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.carouselNavigation, "arrows", {
        get: function() {
            return "arrows";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.carouselNavigation, "both", {
        get: function() {
            return "both";
        }
    });

    OutSystemsUIModel.staticEntities.videoState = {};
    var getVideoStateRecord = function(record) {
        return OutSystemsUIModel.module.staticEntities["f1508f37-01a7-456d-9dd0-64dff62f6d39"][record];
    };
    Object.defineProperty(OutSystemsUIModel.staticEntities.videoState, "unstarted", {
        get: function() {
            return "Unstarted";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.videoState, "paused", {
        get: function() {
            return "Paused";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.videoState, "ended", {
        get: function() {
            return "Ended";
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.videoState, "playing", {
        get: function() {
            return "Playing";
        }
    });

    OutSystemsUIModel.staticEntities.datePickerWeekDay = {};
    var getDatePickerWeekDayRecord = function(record) {
        return OutSystemsUIModel.module.staticEntities["fd4ed0ba-1ab9-4a3e-a2b1-18f41793be2d"][record];
    };
    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerWeekDay, "monday", {
        get: function() {
            return 1;
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerWeekDay, "saturday", {
        get: function() {
            return 6;
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerWeekDay, "sunday", {
        get: function() {
            return 0;
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerWeekDay, "friday", {
        get: function() {
            return 5;
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerWeekDay, "tuesday", {
        get: function() {
            return 2;
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerWeekDay, "thursday", {
        get: function() {
            return 4;
        }
    });

    Object.defineProperty(OutSystemsUIModel.staticEntities.datePickerWeekDay, "wednesday", {
        get: function() {
            return 3;
        }
    });

});