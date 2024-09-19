define("OutSystemsMaps.model$ST_b2c05afcf4810ad0d4384a01306bb0f3Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_b2c05afcf4810ad0d4384a01306bb0f3StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Zoom", "zoomAttr", "Zoom", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return OutSystemsMapsModel.staticEntities.zoom.auto;
                    }, true),
                    this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsMapsModel.staticEntities.type.roadmap;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_b2c05afcf4810ad0d4384a01306bb0f3Structure = ST_b2c05afcf4810ad0d4384a01306bb0f3StructureInner;

        var ST_b2c05afcf4810ad0d4384a01306bb0f3Structure = ST_b2c05afcf4810ad0d4384a01306bb0f3StructureInner;
        ST_b2c05afcf4810ad0d4384a01306bb0f3Structure.init();
    }
});

define("OutSystemsMaps.model$RC_003de7652ef70684ee40ecb9c31ff117", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_b2c05afcf4810ad0d4384a01306bb0f3Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_003de7652ef70684ee40ecb9c31ff117Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("OptionalStaticMapConfigs", "optionalStaticMapConfigsAttr", "OptionalStaticMapConfigs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_b2c05afcf4810ad0d4384a01306bb0f3Structure());
                    }, true, OutSystemsMapsModel.ST_b2c05afcf4810ad0d4384a01306bb0f3Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_003de7652ef70684ee40ecb9c31ff117(new RC_003de7652ef70684ee40ecb9c31ff117.RecordClass({
                    optionalStaticMapConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_003de7652ef70684ee40ecb9c31ff117 = RC_003de7652ef70684ee40ecb9c31ff117Inner;

        RC_003de7652ef70684ee40ecb9c31ff117Inner._isAnonymousRecord = true;
        RC_003de7652ef70684ee40ecb9c31ff117Inner.UniqueId = "003de765-2ef7-0684-ee40-ecb9c31ff117";
        var RC_003de7652ef70684ee40ecb9c31ff117 = RC_003de7652ef70684ee40ecb9c31ff117Inner;
        RC_003de7652ef70684ee40ecb9c31ff117.init();
    }
});

define("OutSystemsMaps.model$ST_c2a46cf64d2acc4b38d805712495224cStructure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_c2a46cf64d2acc4b38d805712495224cStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Color", "colorAttr", "Color", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "#000000";
                    }, true),
                    this.attr("Opacity", "opacityAttr", "Opacity", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.BuiltinFunctions.integerToDecimal(1);
                    }, true),
                    this.attr("Weight", "weightAttr", "Weight", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 2;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_c2a46cf64d2acc4b38d805712495224cStructure = ST_c2a46cf64d2acc4b38d805712495224cStructureInner;

        var ST_c2a46cf64d2acc4b38d805712495224cStructure = ST_c2a46cf64d2acc4b38d805712495224cStructureInner;
        ST_c2a46cf64d2acc4b38d805712495224cStructure.init();
    }
});

define("OutSystemsMaps.model$RC_80cb2a4451da1d8d8f25a688259024cd", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_c2a46cf64d2acc4b38d805712495224cStructure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_80cb2a4451da1d8d8f25a688259024cdInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Stroke", "strokeAttr", "Stroke", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_c2a46cf64d2acc4b38d805712495224cStructure());
                    }, true, OutSystemsMapsModel.ST_c2a46cf64d2acc4b38d805712495224cStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_80cb2a4451da1d8d8f25a688259024cd(new RC_80cb2a4451da1d8d8f25a688259024cd.RecordClass({
                    strokeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_80cb2a4451da1d8d8f25a688259024cd = RC_80cb2a4451da1d8d8f25a688259024cdInner;

        RC_80cb2a4451da1d8d8f25a688259024cdInner._isAnonymousRecord = true;
        RC_80cb2a4451da1d8d8f25a688259024cdInner.UniqueId = "80cb2a44-51da-1d8d-8f25-a688259024cd";
        var RC_80cb2a4451da1d8d8f25a688259024cd = RC_80cb2a4451da1d8d8f25a688259024cdInner;
        RC_80cb2a4451da1d8d8f25a688259024cd.init();
    }
});

define("OutSystemsMaps.model$RL_01101873132d33b7b76cda4800cadf1d", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_80cb2a4451da1d8d8f25a688259024cd"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_01101873132d33b7b76cda4800cadf1d extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_80cb2a4451da1d8d8f25a688259024cd;
        }

    }

    OutSystemsMapsModel.RL_01101873132d33b7b76cda4800cadf1d = RL_01101873132d33b7b76cda4800cadf1d;

});

define("OutSystemsMaps.model$ST_4d96f69748c4f35fb433f7995d061407Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_4d96f69748c4f35fb433f7995d061407StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("locations", "locationsAttr", "locations", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("center", "centerAttr", "center", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("bounds", "boundsAttr", "bounds", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("radius", "radiusAttr", "radius", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("allowDrag", "allowDragAttr", "allowDrag", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("allowEdit", "allowEditAttr", "allowEdit", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("strokeColor", "strokeColorAttr", "strokeColor", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "#000000";
                    }, true),
                    this.attr("strokeOpacity", "strokeOpacityAttr", "strokeOpacity", true, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.BuiltinFunctions.integerToDecimal(1);
                    }, true),
                    this.attr("strokeWeight", "strokeWeightAttr", "strokeWeight", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 2;
                    }, true),
                    this.attr("fillColor", "fillColorAttr", "fillColor", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "#000000";
                    }, true),
                    this.attr("fillOpacity", "fillOpacityAttr", "fillOpacity", true, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.BuiltinFunctions.integerToDecimal(1);
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_4d96f69748c4f35fb433f7995d061407Structure = ST_4d96f69748c4f35fb433f7995d061407StructureInner;

        var ST_4d96f69748c4f35fb433f7995d061407Structure = ST_4d96f69748c4f35fb433f7995d061407StructureInner;
        ST_4d96f69748c4f35fb433f7995d061407Structure.init();
    }
});

define("OutSystemsMaps.model$RC_d566c0a27b8928cd9ecc06f062d869f4", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_4d96f69748c4f35fb433f7995d061407Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_d566c0a27b8928cd9ecc06f062d869f4Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Internal_to_provider_shape_configs", "internal_to_provider_shape_configsAttr", "Internal_to_provider_shape_configs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_4d96f69748c4f35fb433f7995d061407Structure());
                    }, true, OutSystemsMapsModel.ST_4d96f69748c4f35fb433f7995d061407Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_d566c0a27b8928cd9ecc06f062d869f4(new RC_d566c0a27b8928cd9ecc06f062d869f4.RecordClass({
                    internal_to_provider_shape_configsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_d566c0a27b8928cd9ecc06f062d869f4 = RC_d566c0a27b8928cd9ecc06f062d869f4Inner;

        RC_d566c0a27b8928cd9ecc06f062d869f4Inner._isAnonymousRecord = true;
        RC_d566c0a27b8928cd9ecc06f062d869f4Inner.UniqueId = "d566c0a2-7b89-28cd-9ecc-06f062d869f4";
        var RC_d566c0a27b8928cd9ecc06f062d869f4 = RC_d566c0a27b8928cd9ecc06f062d869f4Inner;
        RC_d566c0a27b8928cd9ecc06f062d869f4.init();
    }
});

define("OutSystemsMaps.model$RL_026241dd021d92fba8dbd1e2ecd28058", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_d566c0a27b8928cd9ecc06f062d869f4"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_026241dd021d92fba8dbd1e2ecd28058 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_d566c0a27b8928cd9ecc06f062d869f4;
        }

    }

    OutSystemsMapsModel.RL_026241dd021d92fba8dbd1e2ecd28058 = RL_026241dd021d92fba8dbd1e2ecd28058;

});

define("OutSystemsMaps.model$ST_7f8762cb0c77867d9f9e3b82fd927c7bStructure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_7f8762cb0c77867d9f9e3b82fd927c7bStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Color", "colorAttr", "Color", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "#000000";
                    }, true),
                    this.attr("Opacity", "opacityAttr", "Opacity", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.BuiltinFunctions.integerToDecimal(1);
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_7f8762cb0c77867d9f9e3b82fd927c7bStructure = ST_7f8762cb0c77867d9f9e3b82fd927c7bStructureInner;

        var ST_7f8762cb0c77867d9f9e3b82fd927c7bStructure = ST_7f8762cb0c77867d9f9e3b82fd927c7bStructureInner;
        ST_7f8762cb0c77867d9f9e3b82fd927c7bStructure.init();
    }
});

define("OutSystemsMaps.model$ST_fbded4e930a61a57761a37f0b1ea8d40Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_c2a46cf64d2acc4b38d805712495224cStructure", "OutSystemsMaps.model$ST_7f8762cb0c77867d9f9e3b82fd927c7bStructure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_fbded4e930a61a57761a37f0b1ea8d40StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("AllowDrag", "allowDragAttr", "AllowDrag", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("AllowEdit", "allowEditAttr", "AllowEdit", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Stroke", "strokeAttr", "Stroke", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_c2a46cf64d2acc4b38d805712495224cStructure());
                    }, true, OutSystemsMapsModel.ST_c2a46cf64d2acc4b38d805712495224cStructure),
                    this.attr("Fill", "fillAttr", "Fill", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_7f8762cb0c77867d9f9e3b82fd927c7bStructure());
                    }, true, OutSystemsMapsModel.ST_7f8762cb0c77867d9f9e3b82fd927c7bStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_fbded4e930a61a57761a37f0b1ea8d40Structure = ST_fbded4e930a61a57761a37f0b1ea8d40StructureInner;

        var ST_fbded4e930a61a57761a37f0b1ea8d40Structure = ST_fbded4e930a61a57761a37f0b1ea8d40StructureInner;
        ST_fbded4e930a61a57761a37f0b1ea8d40Structure.init();
    }
});

define("OutSystemsMaps.model$RC_a11b90f038b532a4625b14a0974b03a2", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_fbded4e930a61a57761a37f0b1ea8d40Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_a11b90f038b532a4625b14a0974b03a2Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("OptionalRectangleConfigs", "optionalRectangleConfigsAttr", "OptionalRectangleConfigs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_fbded4e930a61a57761a37f0b1ea8d40Structure());
                    }, true, OutSystemsMapsModel.ST_fbded4e930a61a57761a37f0b1ea8d40Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_a11b90f038b532a4625b14a0974b03a2(new RC_a11b90f038b532a4625b14a0974b03a2.RecordClass({
                    optionalRectangleConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_a11b90f038b532a4625b14a0974b03a2 = RC_a11b90f038b532a4625b14a0974b03a2Inner;

        RC_a11b90f038b532a4625b14a0974b03a2Inner._isAnonymousRecord = true;
        RC_a11b90f038b532a4625b14a0974b03a2Inner.UniqueId = "a11b90f0-38b5-32a4-625b-14a0974b03a2";
        var RC_a11b90f038b532a4625b14a0974b03a2 = RC_a11b90f038b532a4625b14a0974b03a2Inner;
        RC_a11b90f038b532a4625b14a0974b03a2.init();
    }
});

define("OutSystemsMaps.model$RL_031760b0a286b19e96249006302a6d77", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_a11b90f038b532a4625b14a0974b03a2"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_031760b0a286b19e96249006302a6d77 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_a11b90f038b532a4625b14a0974b03a2;
        }

    }

    OutSystemsMapsModel.RL_031760b0a286b19e96249006302a6d77 = RL_031760b0a286b19e96249006302a6d77;

});

define("OutSystemsMaps.model$ST_30625b4ad0f3e10abf82b61ea58e8644Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_30625b4ad0f3e10abf82b61ea58e8644StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Active", "activeAttr", "markerClustererActive", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("MaxZoom", "maxZoomAttr", "markerClustererMaxZoom", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("ZoomOnClick", "zoomOnClickAttr", "markerClustererZoomOnClick", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, true),
                    this.attr("MinClusterSize", "minClusterSizeAttr", "markerClustererMinClusterSize", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 2;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_30625b4ad0f3e10abf82b61ea58e8644Structure = ST_30625b4ad0f3e10abf82b61ea58e8644StructureInner;

        var ST_30625b4ad0f3e10abf82b61ea58e8644Structure = ST_30625b4ad0f3e10abf82b61ea58e8644StructureInner;
        ST_30625b4ad0f3e10abf82b61ea58e8644Structure.init();
    }
});

define("OutSystemsMaps.model$ST_be62cc31fbe4705834275960beeb55e2Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_be62cc31fbe4705834275960beeb55e2StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("OffsetX", "offsetXAttr", "offsetX", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("OffsetY", "offsetYAttr", "offsetY", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_be62cc31fbe4705834275960beeb55e2Structure = ST_be62cc31fbe4705834275960beeb55e2StructureInner;

        var ST_be62cc31fbe4705834275960beeb55e2Structure = ST_be62cc31fbe4705834275960beeb55e2StructureInner;
        ST_be62cc31fbe4705834275960beeb55e2Structure.init();
    }
});

define("OutSystemsMaps.model$ST_d609eacb476c603df8b92eb374da99faStructure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_30625b4ad0f3e10abf82b61ea58e8644Structure", "OutSystemsMaps.model$ST_be62cc31fbe4705834275960beeb55e2Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_d609eacb476c603df8b92eb374da99faStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("AutoZoomOnShapes", "autoZoomOnShapesAttr", "AutoZoomOnShapes", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("MarkerClusterer", "markerClustererAttr", "MarkerClusterer", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_30625b4ad0f3e10abf82b61ea58e8644Structure());
                    }, true, OutSystemsMapsModel.ST_30625b4ad0f3e10abf82b61ea58e8644Structure),
                    this.attr("Offset", "offsetAttr", "Offset", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_be62cc31fbe4705834275960beeb55e2Structure());
                    }, true, OutSystemsMapsModel.ST_be62cc31fbe4705834275960beeb55e2Structure),
                    this.attr("ShowTraffic", "showTrafficAttr", "ShowTraffic", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("RespectUserZoom", "respectUserZoomAttr", "respectUserZoom", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Style", "styleAttr", "Style", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return OutSystemsMapsModel.staticEntities.style.standard;
                    }, true),
                    this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsMapsModel.staticEntities.type.roadmap;
                    }, true),
                    this.attr("Zoom", "zoomAttr", "Zoom", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return OutSystemsMapsModel.staticEntities.zoom.auto;
                    }, true),
                    this.attr("DEPRECATED_AdvancedFormat", "dEPRECATED_AdvancedFormatAttr", "DEPRECATED_AdvancedFormat", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_d609eacb476c603df8b92eb374da99faStructure = ST_d609eacb476c603df8b92eb374da99faStructureInner;

        var ST_d609eacb476c603df8b92eb374da99faStructure = ST_d609eacb476c603df8b92eb374da99faStructureInner;
        ST_d609eacb476c603df8b92eb374da99faStructure.init();
    }
});

define("OutSystemsMaps.model$RC_d761bc5f1b0fe2debf1c3edffd0efd3c", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_d609eacb476c603df8b92eb374da99faStructure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_d761bc5f1b0fe2debf1c3edffd0efd3cInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("OptionalMapConfigs", "optionalMapConfigsAttr", "OptionalMapConfigs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_d609eacb476c603df8b92eb374da99faStructure());
                    }, true, OutSystemsMapsModel.ST_d609eacb476c603df8b92eb374da99faStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_d761bc5f1b0fe2debf1c3edffd0efd3c(new RC_d761bc5f1b0fe2debf1c3edffd0efd3c.RecordClass({
                    optionalMapConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_d761bc5f1b0fe2debf1c3edffd0efd3c = RC_d761bc5f1b0fe2debf1c3edffd0efd3cInner;

        RC_d761bc5f1b0fe2debf1c3edffd0efd3cInner._isAnonymousRecord = true;
        RC_d761bc5f1b0fe2debf1c3edffd0efd3cInner.UniqueId = "d761bc5f-1b0f-e2de-bf1c-3edffd0efd3c";
        var RC_d761bc5f1b0fe2debf1c3edffd0efd3c = RC_d761bc5f1b0fe2debf1c3edffd0efd3cInner;
        RC_d761bc5f1b0fe2debf1c3edffd0efd3c.init();
    }
});

define("OutSystemsMaps.model$RL_0352d07492c0bc1610ae95bac5df94b5", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_d761bc5f1b0fe2debf1c3edffd0efd3c"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_0352d07492c0bc1610ae95bac5df94b5 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_d761bc5f1b0fe2debf1c3edffd0efd3c;
        }

    }

    OutSystemsMapsModel.RL_0352d07492c0bc1610ae95bac5df94b5 = RL_0352d07492c0bc1610ae95bac5df94b5;

});

define("OutSystemsMaps.model$EN_03e1c2ea04d7f49cbc09fc7d6f681f53EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class EN_03e1c2ea04d7f49cbc09fc7d6f681f53EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_03e1c2ea04d7f49cbc09fc7d6f681f53EntityRecord(new EN_03e1c2ea04d7f49cbc09fc7d6f681f53EntityRecord.RecordClass({
                    idAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.EN_03e1c2ea04d7f49cbc09fc7d6f681f53EntityRecord = EN_03e1c2ea04d7f49cbc09fc7d6f681f53EntityRecordInner;

        var EN_03e1c2ea04d7f49cbc09fc7d6f681f53EntityRecord = EN_03e1c2ea04d7f49cbc09fc7d6f681f53EntityRecordInner;
        EN_03e1c2ea04d7f49cbc09fc7d6f681f53EntityRecord.init();
    }
});

define("OutSystemsMaps.model$RL_0407be818a2fac09cd5cb9fba665bce7", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_4d96f69748c4f35fb433f7995d061407Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_0407be818a2fac09cd5cb9fba665bce7 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_4d96f69748c4f35fb433f7995d061407Structure;
        }

    }

    OutSystemsMapsModel.RL_0407be818a2fac09cd5cb9fba665bce7 = RL_0407be818a2fac09cd5cb9fba665bce7;

});

define("OutSystemsMaps.model$ST_597877eac22877030461f6d98995be4aStructure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_be62cc31fbe4705834275960beeb55e2Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_597877eac22877030461f6d98995be4aStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("AutoZoomOnShapes", "autoZoomOnShapesAttr", "AutoZoomOnShapes", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Offset", "offsetAttr", "Offset", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_be62cc31fbe4705834275960beeb55e2Structure());
                    }, true, OutSystemsMapsModel.ST_be62cc31fbe4705834275960beeb55e2Structure),
                    this.attr("RespectUserZoom", "respectUserZoomAttr", "respectUserZoom", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Zoom", "zoomAttr", "Zoom", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return OutSystemsMapsModel.staticEntities.zoom.auto;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_597877eac22877030461f6d98995be4aStructure = ST_597877eac22877030461f6d98995be4aStructureInner;

        var ST_597877eac22877030461f6d98995be4aStructure = ST_597877eac22877030461f6d98995be4aStructureInner;
        ST_597877eac22877030461f6d98995be4aStructure.init();
    }
});

define("OutSystemsMaps.model$RC_708103c95439cc3f1448414527622b7c", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_597877eac22877030461f6d98995be4aStructure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_708103c95439cc3f1448414527622b7cInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("OptionalLeafletMapConfigs", "optionalLeafletMapConfigsAttr", "OptionalLeafletMapConfigs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_597877eac22877030461f6d98995be4aStructure());
                    }, true, OutSystemsMapsModel.ST_597877eac22877030461f6d98995be4aStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_708103c95439cc3f1448414527622b7c(new RC_708103c95439cc3f1448414527622b7c.RecordClass({
                    optionalLeafletMapConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_708103c95439cc3f1448414527622b7c = RC_708103c95439cc3f1448414527622b7cInner;

        RC_708103c95439cc3f1448414527622b7cInner._isAnonymousRecord = true;
        RC_708103c95439cc3f1448414527622b7cInner.UniqueId = "708103c9-5439-cc3f-1448-414527622b7c";
        var RC_708103c95439cc3f1448414527622b7c = RC_708103c95439cc3f1448414527622b7cInner;
        RC_708103c95439cc3f1448414527622b7c.init();
    }
});

define("OutSystemsMaps.model$RL_072e9a99378a3fe4c1e19c5a7956268f", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_708103c95439cc3f1448414527622b7c"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_072e9a99378a3fe4c1e19c5a7956268f extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_708103c95439cc3f1448414527622b7c;
        }

    }

    OutSystemsMapsModel.RL_072e9a99378a3fe4c1e19c5a7956268f = RL_072e9a99378a3fe4c1e19c5a7956268f;

});

define("OutSystemsMaps.model$ST_ca9f1e36e4f2b1c8cabc0fd0c956ac77Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_ca9f1e36e4f2b1c8cabc0fd0c956ac77StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Lat", "latAttr", "Lat", true, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true),
                    this.attr("Lng", "lngAttr", "Lng", true, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true),
                    this.attr("Weight", "weightAttr", "Weight", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return (new OS.DataTypes.Decimal("1.0"));
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_ca9f1e36e4f2b1c8cabc0fd0c956ac77Structure = ST_ca9f1e36e4f2b1c8cabc0fd0c956ac77StructureInner;

        var ST_ca9f1e36e4f2b1c8cabc0fd0c956ac77Structure = ST_ca9f1e36e4f2b1c8cabc0fd0c956ac77StructureInner;
        ST_ca9f1e36e4f2b1c8cabc0fd0c956ac77Structure.init();
    }
});

define("OutSystemsMaps.model$RL_3e9d003efe19bfd5edf008a600c8d3af", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_ca9f1e36e4f2b1c8cabc0fd0c956ac77Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_3e9d003efe19bfd5edf008a600c8d3af extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_ca9f1e36e4f2b1c8cabc0fd0c956ac77Structure;
        }

    }

    OutSystemsMapsModel.RL_3e9d003efe19bfd5edf008a600c8d3af = RL_3e9d003efe19bfd5edf008a600c8d3af;

});

define("OutSystemsMaps.model$BasicTypeList<Text>", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class TextList extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OS.DataTypes.DataTypes.Text;
        }

    }

    OutSystemsMapsModel.TextList = TextList;

});

define("OutSystemsMaps.model$ST_ca5fecbdf222b72d179909c1f030119cStructure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_ca9f1e36e4f2b1c8cabc0fd0c956ac77Structure", "OutSystemsMaps.model$RL_3e9d003efe19bfd5edf008a600c8d3af"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_ca5fecbdf222b72d179909c1f030119cStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("points", "pointsAttr", "points", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.RL_3e9d003efe19bfd5edf008a600c8d3af());
                    }, true, OutSystemsMapsModel.RL_3e9d003efe19bfd5edf008a600c8d3af),
                    this.attr("maxIntensity", "maxIntensityAttr", "maxIntensity", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true),
                    this.attr("opacity", "opacityAttr", "opacity", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true),
                    this.attr("radius", "radiusAttr", "radius", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("dissipateOnZoom", "dissipateOnZoomAttr", "dissipateOnZoom", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, true),
                    this.attr("gradient", "gradientAttr", "gradient", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
                    }, true, OS.DataTypes.TextList)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_ca5fecbdf222b72d179909c1f030119cStructure = ST_ca5fecbdf222b72d179909c1f030119cStructureInner;

        var ST_ca5fecbdf222b72d179909c1f030119cStructure = ST_ca5fecbdf222b72d179909c1f030119cStructureInner;
        ST_ca5fecbdf222b72d179909c1f030119cStructure.init();
    }
});

define("OutSystemsMaps.model$RL_077ade80c9c35d6a29f94ecd2102a671", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_ca5fecbdf222b72d179909c1f030119cStructure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_077ade80c9c35d6a29f94ecd2102a671 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_ca5fecbdf222b72d179909c1f030119cStructure;
        }

    }

    OutSystemsMapsModel.RL_077ade80c9c35d6a29f94ecd2102a671 = RL_077ade80c9c35d6a29f94ecd2102a671;

});

define("OutSystemsMaps.model$EN_e7686de199fbd20281899419f0b6ff11EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class EN_e7686de199fbd20281899419f0b6ff11EntityRecordInner extends
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
                    this.attr("Style", "styleAttr", "Style", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("URLStyle", "uRLStyleAttr", "URLStyle", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.EN_e7686de199fbd20281899419f0b6ff11EntityRecord = EN_e7686de199fbd20281899419f0b6ff11EntityRecordInner;

        var EN_e7686de199fbd20281899419f0b6ff11EntityRecord = EN_e7686de199fbd20281899419f0b6ff11EntityRecordInner;
        EN_e7686de199fbd20281899419f0b6ff11EntityRecord.init();
    }
});

define("OutSystemsMaps.model$RL_07e65f4cc3491f918636e1711890abb8", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_e7686de199fbd20281899419f0b6ff11EntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_07e65f4cc3491f918636e1711890abb8 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.EN_e7686de199fbd20281899419f0b6ff11EntityRecord;
        }

    }

    OutSystemsMapsModel.RL_07e65f4cc3491f918636e1711890abb8 = RL_07e65f4cc3491f918636e1711890abb8;

});

define("OutSystemsMaps.model$ST_f8c2d1b69d03ea90c73e9f07e7d98bf0Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_f8c2d1b69d03ea90c73e9f07e7d98bf0StructureInner extends
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

        OutSystemsMapsModel.ST_f8c2d1b69d03ea90c73e9f07e7d98bf0Structure = ST_f8c2d1b69d03ea90c73e9f07e7d98bf0StructureInner;

        var ST_f8c2d1b69d03ea90c73e9f07e7d98bf0Structure = ST_f8c2d1b69d03ea90c73e9f07e7d98bf0StructureInner;
        ST_f8c2d1b69d03ea90c73e9f07e7d98bf0Structure.init();
    }
});

define("OutSystemsMaps.model$RC_098b5b5f4bf19fe0ddbe136503d3bd5a", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_f8c2d1b69d03ea90c73e9f07e7d98bf0Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_098b5b5f4bf19fe0ddbe136503d3bd5aInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ErrorMessage", "errorMessageAttr", "ErrorMessage", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_f8c2d1b69d03ea90c73e9f07e7d98bf0Structure());
                    }, true, OutSystemsMapsModel.ST_f8c2d1b69d03ea90c73e9f07e7d98bf0Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_098b5b5f4bf19fe0ddbe136503d3bd5a(new RC_098b5b5f4bf19fe0ddbe136503d3bd5a.RecordClass({
                    errorMessageAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_098b5b5f4bf19fe0ddbe136503d3bd5a = RC_098b5b5f4bf19fe0ddbe136503d3bd5aInner;

        RC_098b5b5f4bf19fe0ddbe136503d3bd5aInner._isAnonymousRecord = true;
        RC_098b5b5f4bf19fe0ddbe136503d3bd5aInner.UniqueId = "098b5b5f-4bf1-9fe0-ddbe-136503d3bd5a";
        var RC_098b5b5f4bf19fe0ddbe136503d3bd5a = RC_098b5b5f4bf19fe0ddbe136503d3bd5aInner;
        RC_098b5b5f4bf19fe0ddbe136503d3bd5a.init();
    }
});

define("OutSystemsMaps.model$RL_08e6ffa61762e97d642011e69cfed7f8", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_098b5b5f4bf19fe0ddbe136503d3bd5a"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_08e6ffa61762e97d642011e69cfed7f8 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_098b5b5f4bf19fe0ddbe136503d3bd5a;
        }

    }

    OutSystemsMapsModel.RL_08e6ffa61762e97d642011e69cfed7f8 = RL_08e6ffa61762e97d642011e69cfed7f8;

});

define("OutSystemsMaps.model$EN_d5303c5dfa3a0e0e964776dce02c36f0EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class EN_d5303c5dfa3a0e0e964776dce02c36f0EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_d5303c5dfa3a0e0e964776dce02c36f0EntityRecord(new EN_d5303c5dfa3a0e0e964776dce02c36f0EntityRecord.RecordClass({
                    idAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.EN_d5303c5dfa3a0e0e964776dce02c36f0EntityRecord = EN_d5303c5dfa3a0e0e964776dce02c36f0EntityRecordInner;

        var EN_d5303c5dfa3a0e0e964776dce02c36f0EntityRecord = EN_d5303c5dfa3a0e0e964776dce02c36f0EntityRecordInner;
        EN_d5303c5dfa3a0e0e964776dce02c36f0EntityRecord.init();
    }
});

define("OutSystemsMaps.model$RC_098c46906c1c0c7e7b39f1210fb64f78", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_d5303c5dfa3a0e0e964776dce02c36f0EntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_098c46906c1c0c7e7b39f1210fb64f78Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ShapeEventTriggered", "shapeEventTriggeredAttr", "ShapeEventTriggered", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.EN_d5303c5dfa3a0e0e964776dce02c36f0EntityRecord());
                    }, true, OutSystemsMapsModel.EN_d5303c5dfa3a0e0e964776dce02c36f0EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_098c46906c1c0c7e7b39f1210fb64f78(new RC_098c46906c1c0c7e7b39f1210fb64f78.RecordClass({
                    shapeEventTriggeredAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_098c46906c1c0c7e7b39f1210fb64f78 = RC_098c46906c1c0c7e7b39f1210fb64f78Inner;

        RC_098c46906c1c0c7e7b39f1210fb64f78Inner._isAnonymousRecord = true;
        RC_098c46906c1c0c7e7b39f1210fb64f78Inner.UniqueId = "098c4690-6c1c-0c7e-7b39-f1210fb64f78";
        var RC_098c46906c1c0c7e7b39f1210fb64f78 = RC_098c46906c1c0c7e7b39f1210fb64f78Inner;
        RC_098c46906c1c0c7e7b39f1210fb64f78.init();
    }
});

define("OutSystemsMaps.model$ST_31cb630f5fdaa3aa4d3dbfd37cbf9e56Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_31cb630f5fdaa3aa4d3dbfd37cbf9e56StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("North", "northAttr", "north", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("South", "southAttr", "south", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("West", "westAttr", "west", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("East", "eastAttr", "east", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_31cb630f5fdaa3aa4d3dbfd37cbf9e56Structure = ST_31cb630f5fdaa3aa4d3dbfd37cbf9e56StructureInner;

        var ST_31cb630f5fdaa3aa4d3dbfd37cbf9e56Structure = ST_31cb630f5fdaa3aa4d3dbfd37cbf9e56StructureInner;
        ST_31cb630f5fdaa3aa4d3dbfd37cbf9e56Structure.init();
    }
});

define("OutSystemsMaps.model$ST_d4721898ae8c007cd938074f575e2979Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_31cb630f5fdaa3aa4d3dbfd37cbf9e56Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_d4721898ae8c007cd938074f575e2979StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("apiKey", "apiKeyAttr", "apiKey", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("countries", "countriesAttr", "countries", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
                    }, true, OS.DataTypes.TextList),
                    this.attr("searchArea", "searchAreaAttr", "searchArea", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_31cb630f5fdaa3aa4d3dbfd37cbf9e56Structure());
                    }, true, OutSystemsMapsModel.ST_31cb630f5fdaa3aa4d3dbfd37cbf9e56Structure),
                    this.attr("searchType", "searchTypeAttr", "searchType", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_d4721898ae8c007cd938074f575e2979Structure = ST_d4721898ae8c007cd938074f575e2979StructureInner;

        var ST_d4721898ae8c007cd938074f575e2979Structure = ST_d4721898ae8c007cd938074f575e2979StructureInner;
        ST_d4721898ae8c007cd938074f575e2979Structure.init();
    }
});

define("OutSystemsMaps.model$RC_5b713573f61d6f7da10c24ba6dcff0a5", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_d4721898ae8c007cd938074f575e2979Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_5b713573f61d6f7da10c24ba6dcff0a5Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Internal_to_provider_searchPlaces_configs", "internal_to_provider_searchPlaces_configsAttr", "Internal_to_provider_searchPlaces_configs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_d4721898ae8c007cd938074f575e2979Structure());
                    }, true, OutSystemsMapsModel.ST_d4721898ae8c007cd938074f575e2979Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_5b713573f61d6f7da10c24ba6dcff0a5(new RC_5b713573f61d6f7da10c24ba6dcff0a5.RecordClass({
                    internal_to_provider_searchPlaces_configsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_5b713573f61d6f7da10c24ba6dcff0a5 = RC_5b713573f61d6f7da10c24ba6dcff0a5Inner;

        RC_5b713573f61d6f7da10c24ba6dcff0a5Inner._isAnonymousRecord = true;
        RC_5b713573f61d6f7da10c24ba6dcff0a5Inner.UniqueId = "5b713573-f61d-6f7d-a10c-24ba6dcff0a5";
        var RC_5b713573f61d6f7da10c24ba6dcff0a5 = RC_5b713573f61d6f7da10c24ba6dcff0a5Inner;
        RC_5b713573f61d6f7da10c24ba6dcff0a5.init();
    }
});

define("OutSystemsMaps.model$RL_0a6dff1b0ed70563da6da4dc764c9f20", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_5b713573f61d6f7da10c24ba6dcff0a5"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_0a6dff1b0ed70563da6da4dc764c9f20 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_5b713573f61d6f7da10c24ba6dcff0a5;
        }

    }

    OutSystemsMapsModel.RL_0a6dff1b0ed70563da6da4dc764c9f20 = RL_0a6dff1b0ed70563da6da4dc764c9f20;

});

define("OutSystemsMaps.model$EN_6a1434d5022d0c0b07dda84f17d8b42fEntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class EN_6a1434d5022d0c0b07dda84f17d8b42fEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_6a1434d5022d0c0b07dda84f17d8b42fEntityRecord(new EN_6a1434d5022d0c0b07dda84f17d8b42fEntityRecord.RecordClass({
                    idAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.EN_6a1434d5022d0c0b07dda84f17d8b42fEntityRecord = EN_6a1434d5022d0c0b07dda84f17d8b42fEntityRecordInner;

        var EN_6a1434d5022d0c0b07dda84f17d8b42fEntityRecord = EN_6a1434d5022d0c0b07dda84f17d8b42fEntityRecordInner;
        EN_6a1434d5022d0c0b07dda84f17d8b42fEntityRecord.init();
    }
});

define("OutSystemsMaps.model$RL_0ab39bc0b00a63aa72a84e5a53caeac0", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_6a1434d5022d0c0b07dda84f17d8b42fEntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_0ab39bc0b00a63aa72a84e5a53caeac0 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.EN_6a1434d5022d0c0b07dda84f17d8b42fEntityRecord;
        }

    }

    OutSystemsMapsModel.RL_0ab39bc0b00a63aa72a84e5a53caeac0 = RL_0ab39bc0b00a63aa72a84e5a53caeac0;

});

define("OutSystemsMaps.model$EN_c3a74b883bf36717c1c549a2bbfbc0daEntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class EN_c3a74b883bf36717c1c549a2bbfbc0daEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_c3a74b883bf36717c1c549a2bbfbc0daEntityRecord(new EN_c3a74b883bf36717c1c549a2bbfbc0daEntityRecord.RecordClass({
                    idAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.EN_c3a74b883bf36717c1c549a2bbfbc0daEntityRecord = EN_c3a74b883bf36717c1c549a2bbfbc0daEntityRecordInner;

        var EN_c3a74b883bf36717c1c549a2bbfbc0daEntityRecord = EN_c3a74b883bf36717c1c549a2bbfbc0daEntityRecordInner;
        EN_c3a74b883bf36717c1c549a2bbfbc0daEntityRecord.init();
    }
});

define("OutSystemsMaps.model$RC_0b102c453446be3ebcb793be90d6b209", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_c3a74b883bf36717c1c549a2bbfbc0daEntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_0b102c453446be3ebcb793be90d6b209Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("MarkerType", "markerTypeAttr", "MarkerType", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.EN_c3a74b883bf36717c1c549a2bbfbc0daEntityRecord());
                    }, true, OutSystemsMapsModel.EN_c3a74b883bf36717c1c549a2bbfbc0daEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_0b102c453446be3ebcb793be90d6b209(new RC_0b102c453446be3ebcb793be90d6b209.RecordClass({
                    markerTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_0b102c453446be3ebcb793be90d6b209 = RC_0b102c453446be3ebcb793be90d6b209Inner;

        RC_0b102c453446be3ebcb793be90d6b209Inner._isAnonymousRecord = true;
        RC_0b102c453446be3ebcb793be90d6b209Inner.UniqueId = "0b102c45-3446-be3e-bcb7-93be90d6b209";
        var RC_0b102c453446be3ebcb793be90d6b209 = RC_0b102c453446be3ebcb793be90d6b209Inner;
        RC_0b102c453446be3ebcb793be90d6b209.init();
    }
});

define("OutSystemsMaps.model$RL_0bcd3c98d22adfc3203704c950fffba0", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_30625b4ad0f3e10abf82b61ea58e8644Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_0bcd3c98d22adfc3203704c950fffba0 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_30625b4ad0f3e10abf82b61ea58e8644Structure;
        }

    }

    OutSystemsMapsModel.RL_0bcd3c98d22adfc3203704c950fffba0 = RL_0bcd3c98d22adfc3203704c950fffba0;

});

define("OutSystemsMaps.model$ST_793e574f3ddb64f39831eacf8a4462b0Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_793e574f3ddb64f39831eacf8a4462b0StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("layerUrl", "layerUrlAttr", "layerUrl", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("suppressPopups", "suppressPopupsAttr", "suppressPopups", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("preserveViewport", "preserveViewportAttr", "preserveViewport", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_793e574f3ddb64f39831eacf8a4462b0Structure = ST_793e574f3ddb64f39831eacf8a4462b0StructureInner;

        var ST_793e574f3ddb64f39831eacf8a4462b0Structure = ST_793e574f3ddb64f39831eacf8a4462b0StructureInner;
        ST_793e574f3ddb64f39831eacf8a4462b0Structure.init();
    }
});

define("OutSystemsMaps.model$ST_1a3d048e7bc3b165cd3ddc45ef640b18Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_793e574f3ddb64f39831eacf8a4462b0Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_1a3d048e7bc3b165cd3ddc45ef640b18StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Internal_to_provider_fileLayer_configs", "internal_to_provider_fileLayer_configsAttr", "Internal_to_provider_fileLayer_configs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_793e574f3ddb64f39831eacf8a4462b0Structure());
                    }, true, OutSystemsMapsModel.ST_793e574f3ddb64f39831eacf8a4462b0Structure),
                    this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_1a3d048e7bc3b165cd3ddc45ef640b18Structure = ST_1a3d048e7bc3b165cd3ddc45ef640b18StructureInner;

        var ST_1a3d048e7bc3b165cd3ddc45ef640b18Structure = ST_1a3d048e7bc3b165cd3ddc45ef640b18StructureInner;
        ST_1a3d048e7bc3b165cd3ddc45ef640b18Structure.init();
    }
});

define("OutSystemsMaps.model$RC_0cc9882276464f8a42abc2516db92c70", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_1a3d048e7bc3b165cd3ddc45ef640b18Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_0cc9882276464f8a42abc2516db92c70Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Internal_FileLayer_Configs", "internal_FileLayer_ConfigsAttr", "Internal_FileLayer_Configs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_1a3d048e7bc3b165cd3ddc45ef640b18Structure());
                    }, true, OutSystemsMapsModel.ST_1a3d048e7bc3b165cd3ddc45ef640b18Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_0cc9882276464f8a42abc2516db92c70(new RC_0cc9882276464f8a42abc2516db92c70.RecordClass({
                    internal_FileLayer_ConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_0cc9882276464f8a42abc2516db92c70 = RC_0cc9882276464f8a42abc2516db92c70Inner;

        RC_0cc9882276464f8a42abc2516db92c70Inner._isAnonymousRecord = true;
        RC_0cc9882276464f8a42abc2516db92c70Inner.UniqueId = "0cc98822-7646-4f8a-42ab-c2516db92c70";
        var RC_0cc9882276464f8a42abc2516db92c70 = RC_0cc9882276464f8a42abc2516db92c70Inner;
        RC_0cc9882276464f8a42abc2516db92c70.init();
    }
});

define("OutSystemsMaps.model$ST_b3f640c8758c66e2b436da510a8dfe3cStructure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_b3f640c8758c66e2b436da510a8dfe3cStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Location", "locationAttr", "location", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Radius", "radiusAttr", "radius", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_b3f640c8758c66e2b436da510a8dfe3cStructure = ST_b3f640c8758c66e2b436da510a8dfe3cStructureInner;

        var ST_b3f640c8758c66e2b436da510a8dfe3cStructure = ST_b3f640c8758c66e2b436da510a8dfe3cStructureInner;
        ST_b3f640c8758c66e2b436da510a8dfe3cStructure.init();
    }
});

define("OutSystemsMaps.model$RC_0d7cc7bed68e0cd9bac246a9a398426e", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_b3f640c8758c66e2b436da510a8dfe3cStructure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_0d7cc7bed68e0cd9bac246a9a398426eInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Internal_DrawCircle_Shape", "internal_DrawCircle_ShapeAttr", "Internal_DrawCircle_Shape", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_b3f640c8758c66e2b436da510a8dfe3cStructure());
                    }, true, OutSystemsMapsModel.ST_b3f640c8758c66e2b436da510a8dfe3cStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_0d7cc7bed68e0cd9bac246a9a398426e(new RC_0d7cc7bed68e0cd9bac246a9a398426e.RecordClass({
                    internal_DrawCircle_ShapeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_0d7cc7bed68e0cd9bac246a9a398426e = RC_0d7cc7bed68e0cd9bac246a9a398426eInner;

        RC_0d7cc7bed68e0cd9bac246a9a398426eInner._isAnonymousRecord = true;
        RC_0d7cc7bed68e0cd9bac246a9a398426eInner.UniqueId = "0d7cc7be-d68e-0cd9-bac2-46a9a398426e";
        var RC_0d7cc7bed68e0cd9bac246a9a398426e = RC_0d7cc7bed68e0cd9bac246a9a398426eInner;
        RC_0d7cc7bed68e0cd9bac246a9a398426e.init();
    }
});

define("OutSystemsMaps.model$EN_0df198ce2d64e9aa6113403a9d3f7309EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class EN_0df198ce2d64e9aa6113403a9d3f7309EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_0df198ce2d64e9aa6113403a9d3f7309EntityRecord(new EN_0df198ce2d64e9aa6113403a9d3f7309EntityRecord.RecordClass({
                    idAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.EN_0df198ce2d64e9aa6113403a9d3f7309EntityRecord = EN_0df198ce2d64e9aa6113403a9d3f7309EntityRecordInner;

        var EN_0df198ce2d64e9aa6113403a9d3f7309EntityRecord = EN_0df198ce2d64e9aa6113403a9d3f7309EntityRecordInner;
        EN_0df198ce2d64e9aa6113403a9d3f7309EntityRecord.init();
    }
});

define("OutSystemsMaps.model$ST_0e474756a4be14d378c73cd05f602bcdStructure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_0e474756a4be14d378c73cd05f602bcdStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Lat", "latAttr", "Lat", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true),
                    this.attr("Lng", "lngAttr", "Lng", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_0e474756a4be14d378c73cd05f602bcdStructure = ST_0e474756a4be14d378c73cd05f602bcdStructureInner;

        var ST_0e474756a4be14d378c73cd05f602bcdStructure = ST_0e474756a4be14d378c73cd05f602bcdStructureInner;
        ST_0e474756a4be14d378c73cd05f602bcdStructure.init();
    }
});

define("OutSystemsMaps.model$ST_5fb6f64676b0133fcb572480a766fc9cStructure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_5fb6f64676b0133fcb572480a766fc9cStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("North", "northAttr", "north", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("South", "southAttr", "south", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("West", "westAttr", "west", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("East", "eastAttr", "east", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_5fb6f64676b0133fcb572480a766fc9cStructure = ST_5fb6f64676b0133fcb572480a766fc9cStructureInner;

        var ST_5fb6f64676b0133fcb572480a766fc9cStructure = ST_5fb6f64676b0133fcb572480a766fc9cStructureInner;
        ST_5fb6f64676b0133fcb572480a766fc9cStructure.init();
    }
});

define("OutSystemsMaps.model$RC_fdf568550fb18a6ec270df7466fa0d20", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_5fb6f64676b0133fcb572480a766fc9cStructure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_fdf568550fb18a6ec270df7466fa0d20Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Bounds", "boundsAttr", "Bounds", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_5fb6f64676b0133fcb572480a766fc9cStructure());
                    }, true, OutSystemsMapsModel.ST_5fb6f64676b0133fcb572480a766fc9cStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_fdf568550fb18a6ec270df7466fa0d20(new RC_fdf568550fb18a6ec270df7466fa0d20.RecordClass({
                    boundsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_fdf568550fb18a6ec270df7466fa0d20 = RC_fdf568550fb18a6ec270df7466fa0d20Inner;

        RC_fdf568550fb18a6ec270df7466fa0d20Inner._isAnonymousRecord = true;
        RC_fdf568550fb18a6ec270df7466fa0d20Inner.UniqueId = "fdf56855-0fb1-8a6e-c270-df7466fa0d20";
        var RC_fdf568550fb18a6ec270df7466fa0d20 = RC_fdf568550fb18a6ec270df7466fa0d20Inner;
        RC_fdf568550fb18a6ec270df7466fa0d20.init();
    }
});

define("OutSystemsMaps.model$RL_0e72f02e1a6410320f8b97edcbb7dcb3", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_fdf568550fb18a6ec270df7466fa0d20"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_0e72f02e1a6410320f8b97edcbb7dcb3 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_fdf568550fb18a6ec270df7466fa0d20;
        }

    }

    OutSystemsMapsModel.RL_0e72f02e1a6410320f8b97edcbb7dcb3 = RL_0e72f02e1a6410320f8b97edcbb7dcb3;

});

define("OutSystemsMaps.model$RL_117c109748f839c6db14d3cec441846b", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_793e574f3ddb64f39831eacf8a4462b0Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_117c109748f839c6db14d3cec441846b extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_793e574f3ddb64f39831eacf8a4462b0Structure;
        }

    }

    OutSystemsMapsModel.RL_117c109748f839c6db14d3cec441846b = RL_117c109748f839c6db14d3cec441846b;

});

define("OutSystemsMaps.model$ST_d25262c67f1be04c1df274811b8c7ee4Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_d25262c67f1be04c1df274811b8c7ee4StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("allowDrag", "allowDragAttr", "allowDrag", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("allowEdit", "allowEditAttr", "allowEdit", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("strokeColor", "strokeColorAttr", "strokeColor", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "#000000";
                    }, true),
                    this.attr("strokeOpacity", "strokeOpacityAttr", "strokeOpacity", true, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.BuiltinFunctions.integerToDecimal(1);
                    }, true),
                    this.attr("strokeWeight", "strokeWeightAttr", "strokeWeight", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 2;
                    }, true),
                    this.attr("fillColor", "fillColorAttr", "fillColor", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "#000000";
                    }, true),
                    this.attr("fillOpacity", "fillOpacityAttr", "fillOpacity", true, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.BuiltinFunctions.integerToDecimal(1);
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_d25262c67f1be04c1df274811b8c7ee4Structure = ST_d25262c67f1be04c1df274811b8c7ee4StructureInner;

        var ST_d25262c67f1be04c1df274811b8c7ee4Structure = ST_d25262c67f1be04c1df274811b8c7ee4StructureInner;
        ST_d25262c67f1be04c1df274811b8c7ee4Structure.init();
    }
});

define("OutSystemsMaps.model$ST_5d8d0b250562ec29250400c2b0c3eb66Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_d25262c67f1be04c1df274811b8c7ee4Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_5d8d0b250562ec29250400c2b0c3eb66StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Internal_to_provider_tools_configs", "internal_to_provider_tools_configsAttr", "Internal_to_provider_tools_configs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_d25262c67f1be04c1df274811b8c7ee4Structure());
                    }, true, OutSystemsMapsModel.ST_d25262c67f1be04c1df274811b8c7ee4Structure),
                    this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_5d8d0b250562ec29250400c2b0c3eb66Structure = ST_5d8d0b250562ec29250400c2b0c3eb66StructureInner;

        var ST_5d8d0b250562ec29250400c2b0c3eb66Structure = ST_5d8d0b250562ec29250400c2b0c3eb66StructureInner;
        ST_5d8d0b250562ec29250400c2b0c3eb66Structure.init();
    }
});

define("OutSystemsMaps.model$RL_1189c558de808bdc52d9d085e792f236", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_5d8d0b250562ec29250400c2b0c3eb66Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_1189c558de808bdc52d9d085e792f236 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_5d8d0b250562ec29250400c2b0c3eb66Structure;
        }

    }

    OutSystemsMapsModel.RL_1189c558de808bdc52d9d085e792f236 = RL_1189c558de808bdc52d9d085e792f236;

});

define("OutSystemsMaps.model$EN_120b6e3e471666b0ae15ac3a8f34340fEntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class EN_120b6e3e471666b0ae15ac3a8f34340fEntityRecordInner extends
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

        OutSystemsMapsModel.EN_120b6e3e471666b0ae15ac3a8f34340fEntityRecord = EN_120b6e3e471666b0ae15ac3a8f34340fEntityRecordInner;

        var EN_120b6e3e471666b0ae15ac3a8f34340fEntityRecord = EN_120b6e3e471666b0ae15ac3a8f34340fEntityRecordInner;
        EN_120b6e3e471666b0ae15ac3a8f34340fEntityRecord.init();
    }
});

define("OutSystemsMaps.model$ST_f021741499f997a32540fab3dfcdbbfaStructure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_c2a46cf64d2acc4b38d805712495224cStructure", "OutSystemsMaps.model$ST_7f8762cb0c77867d9f9e3b82fd927c7bStructure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_f021741499f997a32540fab3dfcdbbfaStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("AllowDrag", "allowDragAttr", "AllowDrag", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("AllowEdit", "allowEditAttr", "AllowEdit", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Stroke", "strokeAttr", "Stroke", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_c2a46cf64d2acc4b38d805712495224cStructure());
                    }, true, OutSystemsMapsModel.ST_c2a46cf64d2acc4b38d805712495224cStructure),
                    this.attr("Fill", "fillAttr", "Fill", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_7f8762cb0c77867d9f9e3b82fd927c7bStructure());
                    }, true, OutSystemsMapsModel.ST_7f8762cb0c77867d9f9e3b82fd927c7bStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_f021741499f997a32540fab3dfcdbbfaStructure = ST_f021741499f997a32540fab3dfcdbbfaStructureInner;

        var ST_f021741499f997a32540fab3dfcdbbfaStructure = ST_f021741499f997a32540fab3dfcdbbfaStructureInner;
        ST_f021741499f997a32540fab3dfcdbbfaStructure.init();
    }
});

define("OutSystemsMaps.model$RC_f413938d99b2f109b9b51d646a4937af", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_f021741499f997a32540fab3dfcdbbfaStructure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_f413938d99b2f109b9b51d646a4937afInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("OptionalShapeConfigs", "optionalShapeConfigsAttr", "OptionalShapeConfigs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_f021741499f997a32540fab3dfcdbbfaStructure());
                    }, true, OutSystemsMapsModel.ST_f021741499f997a32540fab3dfcdbbfaStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_f413938d99b2f109b9b51d646a4937af(new RC_f413938d99b2f109b9b51d646a4937af.RecordClass({
                    optionalShapeConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_f413938d99b2f109b9b51d646a4937af = RC_f413938d99b2f109b9b51d646a4937afInner;

        RC_f413938d99b2f109b9b51d646a4937afInner._isAnonymousRecord = true;
        RC_f413938d99b2f109b9b51d646a4937afInner.UniqueId = "f413938d-99b2-f109-b9b5-1d646a4937af";
        var RC_f413938d99b2f109b9b51d646a4937af = RC_f413938d99b2f109b9b51d646a4937afInner;
        RC_f413938d99b2f109b9b51d646a4937af.init();
    }
});

define("OutSystemsMaps.model$RL_137b896072b61ef2961aafb3d62ca98e", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_f413938d99b2f109b9b51d646a4937af"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_137b896072b61ef2961aafb3d62ca98e extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_f413938d99b2f109b9b51d646a4937af;
        }

    }

    OutSystemsMapsModel.RL_137b896072b61ef2961aafb3d62ca98e = RL_137b896072b61ef2961aafb3d62ca98e;

});

define("OutSystemsMaps.model$RL_13ca00363f7e33ac6324e85dfb3d658d", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_0d7cc7bed68e0cd9bac246a9a398426e"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_13ca00363f7e33ac6324e85dfb3d658d extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_0d7cc7bed68e0cd9bac246a9a398426e;
        }

    }

    OutSystemsMapsModel.RL_13ca00363f7e33ac6324e85dfb3d658d = RL_13ca00363f7e33ac6324e85dfb3d658d;

});

define("OutSystemsMaps.model$RC_468bdef36a83c5e44a35aa87e6093ad0", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_ca5fecbdf222b72d179909c1f030119cStructure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_468bdef36a83c5e44a35aa87e6093ad0Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Internal_to_provider_heatmapLayer_configs", "internal_to_provider_heatmapLayer_configsAttr", "Internal_to_provider_heatmapLayer_configs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_ca5fecbdf222b72d179909c1f030119cStructure());
                    }, true, OutSystemsMapsModel.ST_ca5fecbdf222b72d179909c1f030119cStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_468bdef36a83c5e44a35aa87e6093ad0(new RC_468bdef36a83c5e44a35aa87e6093ad0.RecordClass({
                    internal_to_provider_heatmapLayer_configsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_468bdef36a83c5e44a35aa87e6093ad0 = RC_468bdef36a83c5e44a35aa87e6093ad0Inner;

        RC_468bdef36a83c5e44a35aa87e6093ad0Inner._isAnonymousRecord = true;
        RC_468bdef36a83c5e44a35aa87e6093ad0Inner.UniqueId = "468bdef3-6a83-c5e4-4a35-aa87e6093ad0";
        var RC_468bdef36a83c5e44a35aa87e6093ad0 = RC_468bdef36a83c5e44a35aa87e6093ad0Inner;
        RC_468bdef36a83c5e44a35aa87e6093ad0.init();
    }
});

define("OutSystemsMaps.model$RL_1531f144004a1f036454b8eceea3fafa", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_468bdef36a83c5e44a35aa87e6093ad0"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_1531f144004a1f036454b8eceea3fafa extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_468bdef36a83c5e44a35aa87e6093ad0;
        }

    }

    OutSystemsMapsModel.RL_1531f144004a1f036454b8eceea3fafa = RL_1531f144004a1f036454b8eceea3fafa;

});

define("OutSystemsMaps.model$RL_15a080885a824b18c40f8b64d818ce41", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_31cb630f5fdaa3aa4d3dbfd37cbf9e56Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_15a080885a824b18c40f8b64d818ce41 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_31cb630f5fdaa3aa4d3dbfd37cbf9e56Structure;
        }

    }

    OutSystemsMapsModel.RL_15a080885a824b18c40f8b64d818ce41 = RL_15a080885a824b18c40f8b64d818ce41;

});

define("OutSystemsMaps.model$RL_1638668ea76502df056543656d2e89d1", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_f8c2d1b69d03ea90c73e9f07e7d98bf0Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_1638668ea76502df056543656d2e89d1 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_f8c2d1b69d03ea90c73e9f07e7d98bf0Structure;
        }

    }

    OutSystemsMapsModel.RL_1638668ea76502df056543656d2e89d1 = RL_1638668ea76502df056543656d2e89d1;

});

define("OutSystemsMaps.model$ST_51ef6a78944132edc56aa7bf7c4ea240Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_51ef6a78944132edc56aa7bf7c4ea240StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("location", "locationAttr", "location", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("iconUrl", "iconUrlAttr", "iconUrl", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("title", "titleAttr", "title", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("label", "labelAttr", "label", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("allowDrag", "allowDragAttr", "allowDrag", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("iconWidth", "iconWidthAttr", "iconWidth", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("iconHeight", "iconHeightAttr", "iconHeight", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_51ef6a78944132edc56aa7bf7c4ea240Structure = ST_51ef6a78944132edc56aa7bf7c4ea240StructureInner;

        var ST_51ef6a78944132edc56aa7bf7c4ea240Structure = ST_51ef6a78944132edc56aa7bf7c4ea240StructureInner;
        ST_51ef6a78944132edc56aa7bf7c4ea240Structure.init();
    }
});

define("OutSystemsMaps.model$ST_3d593ae1aad35ac58e1616049bb8da2cStructure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_51ef6a78944132edc56aa7bf7c4ea240Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_3d593ae1aad35ac58e1616049bb8da2cStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Internal_to_provider_marker_configs", "internal_to_provider_marker_configsAttr", "Internal_to_provider_marker_configs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_51ef6a78944132edc56aa7bf7c4ea240Structure());
                    }, true, OutSystemsMapsModel.ST_51ef6a78944132edc56aa7bf7c4ea240Structure),
                    this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_3d593ae1aad35ac58e1616049bb8da2cStructure = ST_3d593ae1aad35ac58e1616049bb8da2cStructureInner;

        var ST_3d593ae1aad35ac58e1616049bb8da2cStructure = ST_3d593ae1aad35ac58e1616049bb8da2cStructureInner;
        ST_3d593ae1aad35ac58e1616049bb8da2cStructure.init();
    }
});

define("OutSystemsMaps.model$RL_1740c5fc4f19037173051d750651a4c3", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_3d593ae1aad35ac58e1616049bb8da2cStructure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_1740c5fc4f19037173051d750651a4c3 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_3d593ae1aad35ac58e1616049bb8da2cStructure;
        }

    }

    OutSystemsMapsModel.RL_1740c5fc4f19037173051d750651a4c3 = RL_1740c5fc4f19037173051d750651a4c3;

});

define("OutSystemsMaps.model$ST_3f16cd459ccd861deffd4483bc1bbac3Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_3f16cd459ccd861deffd4483bc1bbac3StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("position", "positionAttr", "position", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsMapsModel.staticEntities.drawingToolsPosition.top_Center;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new ST_3f16cd459ccd861deffd4483bc1bbac3Structure(new ST_3f16cd459ccd861deffd4483bc1bbac3Structure.RecordClass({
                    positionAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.ST_3f16cd459ccd861deffd4483bc1bbac3Structure = ST_3f16cd459ccd861deffd4483bc1bbac3StructureInner;

        var ST_3f16cd459ccd861deffd4483bc1bbac3Structure = ST_3f16cd459ccd861deffd4483bc1bbac3StructureInner;
        ST_3f16cd459ccd861deffd4483bc1bbac3Structure.init();
    }
});

define("OutSystemsMaps.model$RL_18137c78c83e8eb0c8f8ec08bffbb968", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_3f16cd459ccd861deffd4483bc1bbac3Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_18137c78c83e8eb0c8f8ec08bffbb968 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_3f16cd459ccd861deffd4483bc1bbac3Structure;
        }

    }

    OutSystemsMapsModel.RL_18137c78c83e8eb0c8f8ec08bffbb968 = RL_18137c78c83e8eb0c8f8ec08bffbb968;

});

define("OutSystemsMaps.model$EN_7595bf81d0b29040f5ad1b9eff7896b0EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class EN_7595bf81d0b29040f5ad1b9eff7896b0EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_7595bf81d0b29040f5ad1b9eff7896b0EntityRecord(new EN_7595bf81d0b29040f5ad1b9eff7896b0EntityRecord.RecordClass({
                    idAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.EN_7595bf81d0b29040f5ad1b9eff7896b0EntityRecord = EN_7595bf81d0b29040f5ad1b9eff7896b0EntityRecordInner;

        var EN_7595bf81d0b29040f5ad1b9eff7896b0EntityRecord = EN_7595bf81d0b29040f5ad1b9eff7896b0EntityRecordInner;
        EN_7595bf81d0b29040f5ad1b9eff7896b0EntityRecord.init();
    }
});

define("OutSystemsMaps.model$RL_1aaab832ae3d87080f837b1b09d93572", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_7595bf81d0b29040f5ad1b9eff7896b0EntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_1aaab832ae3d87080f837b1b09d93572 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.EN_7595bf81d0b29040f5ad1b9eff7896b0EntityRecord;
        }

    }

    OutSystemsMapsModel.RL_1aaab832ae3d87080f837b1b09d93572 = RL_1aaab832ae3d87080f837b1b09d93572;

});

define("OutSystemsMaps.model$RC_1b25d6a078a2b54dc46acf86c7e61fc3", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_7f8762cb0c77867d9f9e3b82fd927c7bStructure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_1b25d6a078a2b54dc46acf86c7e61fc3Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Fill", "fillAttr", "Fill", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_7f8762cb0c77867d9f9e3b82fd927c7bStructure());
                    }, true, OutSystemsMapsModel.ST_7f8762cb0c77867d9f9e3b82fd927c7bStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_1b25d6a078a2b54dc46acf86c7e61fc3(new RC_1b25d6a078a2b54dc46acf86c7e61fc3.RecordClass({
                    fillAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_1b25d6a078a2b54dc46acf86c7e61fc3 = RC_1b25d6a078a2b54dc46acf86c7e61fc3Inner;

        RC_1b25d6a078a2b54dc46acf86c7e61fc3Inner._isAnonymousRecord = true;
        RC_1b25d6a078a2b54dc46acf86c7e61fc3Inner.UniqueId = "1b25d6a0-78a2-b54d-c46a-cf86c7e61fc3";
        var RC_1b25d6a078a2b54dc46acf86c7e61fc3 = RC_1b25d6a078a2b54dc46acf86c7e61fc3Inner;
        RC_1b25d6a078a2b54dc46acf86c7e61fc3.init();
    }
});

define("OutSystemsMaps.model$RL_1dd9beeca9296fa7b8e0dda894601f07", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_c3a74b883bf36717c1c549a2bbfbc0daEntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_1dd9beeca9296fa7b8e0dda894601f07 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.EN_c3a74b883bf36717c1c549a2bbfbc0daEntityRecord;
        }

    }

    OutSystemsMapsModel.RL_1dd9beeca9296fa7b8e0dda894601f07 = RL_1dd9beeca9296fa7b8e0dda894601f07;

});

define("OutSystemsMaps.model$RC_97843bcb52146db1681dfc816cff70a0", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_e7686de199fbd20281899419f0b6ff11EntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_97843bcb52146db1681dfc816cff70a0Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Style", "styleAttr", "Style", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.EN_e7686de199fbd20281899419f0b6ff11EntityRecord());
                    }, true, OutSystemsMapsModel.EN_e7686de199fbd20281899419f0b6ff11EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_97843bcb52146db1681dfc816cff70a0(new RC_97843bcb52146db1681dfc816cff70a0.RecordClass({
                    styleAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_97843bcb52146db1681dfc816cff70a0 = RC_97843bcb52146db1681dfc816cff70a0Inner;

        RC_97843bcb52146db1681dfc816cff70a0Inner._isAnonymousRecord = true;
        RC_97843bcb52146db1681dfc816cff70a0Inner.UniqueId = "97843bcb-5214-6db1-681d-fc816cff70a0";
        var RC_97843bcb52146db1681dfc816cff70a0 = RC_97843bcb52146db1681dfc816cff70a0Inner;
        RC_97843bcb52146db1681dfc816cff70a0.init();
    }
});

define("OutSystemsMaps.model$RL_1e8f93f5e9d6c1aa9b732c047fc0e7d0", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_97843bcb52146db1681dfc816cff70a0"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_1e8f93f5e9d6c1aa9b732c047fc0e7d0 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_97843bcb52146db1681dfc816cff70a0;
        }

    }

    OutSystemsMapsModel.RL_1e8f93f5e9d6c1aa9b732c047fc0e7d0 = RL_1e8f93f5e9d6c1aa9b732c047fc0e7d0;

});

define("OutSystemsMaps.model$ST_f2c047cd8082950bd1961446a5ec1949Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_ca5fecbdf222b72d179909c1f030119cStructure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_f2c047cd8082950bd1961446a5ec1949StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Internal_to_provider_heatmapLayer_configs", "internal_to_provider_heatmapLayer_configsAttr", "Internal_to_provider_heatmapLayer_configs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_ca5fecbdf222b72d179909c1f030119cStructure());
                    }, true, OutSystemsMapsModel.ST_ca5fecbdf222b72d179909c1f030119cStructure),
                    this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_f2c047cd8082950bd1961446a5ec1949Structure = ST_f2c047cd8082950bd1961446a5ec1949StructureInner;

        var ST_f2c047cd8082950bd1961446a5ec1949Structure = ST_f2c047cd8082950bd1961446a5ec1949StructureInner;
        ST_f2c047cd8082950bd1961446a5ec1949Structure.init();
    }
});

define("OutSystemsMaps.model$RL_2040a40e62ae80fafc57cb81cae34851", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_f2c047cd8082950bd1961446a5ec1949Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_2040a40e62ae80fafc57cb81cae34851 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_f2c047cd8082950bd1961446a5ec1949Structure;
        }

    }

    OutSystemsMapsModel.RL_2040a40e62ae80fafc57cb81cae34851 = RL_2040a40e62ae80fafc57cb81cae34851;

});

define("OutSystemsMaps.model$RL_2041355d498997d1657fdf428c3b452d", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_0b102c453446be3ebcb793be90d6b209"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_2041355d498997d1657fdf428c3b452d extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_0b102c453446be3ebcb793be90d6b209;
        }

    }

    OutSystemsMapsModel.RL_2041355d498997d1657fdf428c3b452d = RL_2041355d498997d1657fdf428c3b452d;

});

define("OutSystemsMaps.model$ST_9f8ac95fe4e47e327de12de1b56bed45Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_9f8ac95fe4e47e327de12de1b56bed45StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Active", "activeAttr", "markerClustererActive", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("MaxZoom", "maxZoomAttr", "markerClustererMaxZoom", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("ZoomOnClick", "zoomOnClickAttr", "markerClustererZoomOnClick", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, true),
                    this.attr("MinClusterSize", "minClusterSizeAttr", "markerClustererMinClusterSize", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 2;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_9f8ac95fe4e47e327de12de1b56bed45Structure = ST_9f8ac95fe4e47e327de12de1b56bed45StructureInner;

        var ST_9f8ac95fe4e47e327de12de1b56bed45Structure = ST_9f8ac95fe4e47e327de12de1b56bed45StructureInner;
        ST_9f8ac95fe4e47e327de12de1b56bed45Structure.init();
    }
});

define("OutSystemsMaps.model$ST_5baae74ed57e3bb61180aff1dadec4e1Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_be62cc31fbe4705834275960beeb55e2Structure", "OutSystemsMaps.model$ST_9f8ac95fe4e47e327de12de1b56bed45Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_5baae74ed57e3bb61180aff1dadec4e1StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("advancedFormat", "advancedFormatAttr", "advancedFormat", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("apiKey", "apiKeyAttr", "apiKey", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("autoZoomOnShapes", "autoZoomOnShapesAttr", "autoZoomOnShapes", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("center", "centerAttr", "center", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("height", "heightAttr", "height", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("offset", "offsetAttr", "offset", true, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_be62cc31fbe4705834275960beeb55e2Structure());
                    }, true, OutSystemsMapsModel.ST_be62cc31fbe4705834275960beeb55e2Structure),
                    this.attr("showTraffic", "showTrafficAttr", "showTraffic", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("staticMap", "staticMapAttr", "staticMap", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("style", "styleAttr", "style", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("type", "typeAttr", "type", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("zoom", "zoomAttr", "zoom", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("markerClusterer", "markerClustererAttr", "markerClusterer", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_9f8ac95fe4e47e327de12de1b56bed45Structure());
                    }, true, OutSystemsMapsModel.ST_9f8ac95fe4e47e327de12de1b56bed45Structure),
                    this.attr("respectUserZoom", "respectUserZoomAttr", "respectUserZoom", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_5baae74ed57e3bb61180aff1dadec4e1Structure = ST_5baae74ed57e3bb61180aff1dadec4e1StructureInner;

        var ST_5baae74ed57e3bb61180aff1dadec4e1Structure = ST_5baae74ed57e3bb61180aff1dadec4e1StructureInner;
        ST_5baae74ed57e3bb61180aff1dadec4e1Structure.init();
    }
});

define("OutSystemsMaps.model$RC_3f581e27c2f72d4f78b5674dc475102b", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_5baae74ed57e3bb61180aff1dadec4e1Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_3f581e27c2f72d4f78b5674dc475102bInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Internal_to_provider_configs", "internal_to_provider_configsAttr", "Internal_to_provider_configs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_5baae74ed57e3bb61180aff1dadec4e1Structure());
                    }, true, OutSystemsMapsModel.ST_5baae74ed57e3bb61180aff1dadec4e1Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_3f581e27c2f72d4f78b5674dc475102b(new RC_3f581e27c2f72d4f78b5674dc475102b.RecordClass({
                    internal_to_provider_configsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_3f581e27c2f72d4f78b5674dc475102b = RC_3f581e27c2f72d4f78b5674dc475102bInner;

        RC_3f581e27c2f72d4f78b5674dc475102bInner._isAnonymousRecord = true;
        RC_3f581e27c2f72d4f78b5674dc475102bInner.UniqueId = "3f581e27-c2f7-2d4f-78b5-674dc475102b";
        var RC_3f581e27c2f72d4f78b5674dc475102b = RC_3f581e27c2f72d4f78b5674dc475102bInner;
        RC_3f581e27c2f72d4f78b5674dc475102b.init();
    }
});

define("OutSystemsMaps.model$RL_212aa4d4c8fbd8bd92eb665c5f5a19bc", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_3f581e27c2f72d4f78b5674dc475102b"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_212aa4d4c8fbd8bd92eb665c5f5a19bc extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_3f581e27c2f72d4f78b5674dc475102b;
        }

    }

    OutSystemsMapsModel.RL_212aa4d4c8fbd8bd92eb665c5f5a19bc = RL_212aa4d4c8fbd8bd92eb665c5f5a19bc;

});

define("OutSystemsMaps.model$RC_21369035d43ec8805ca548830e8c3c98", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_6a1434d5022d0c0b07dda84f17d8b42fEntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_21369035d43ec8805ca548830e8c3c98Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Provider", "providerAttr", "Provider", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.EN_6a1434d5022d0c0b07dda84f17d8b42fEntityRecord());
                    }, true, OutSystemsMapsModel.EN_6a1434d5022d0c0b07dda84f17d8b42fEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_21369035d43ec8805ca548830e8c3c98(new RC_21369035d43ec8805ca548830e8c3c98.RecordClass({
                    providerAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_21369035d43ec8805ca548830e8c3c98 = RC_21369035d43ec8805ca548830e8c3c98Inner;

        RC_21369035d43ec8805ca548830e8c3c98Inner._isAnonymousRecord = true;
        RC_21369035d43ec8805ca548830e8c3c98Inner.UniqueId = "21369035-d43e-c880-5ca5-48830e8c3c98";
        var RC_21369035d43ec8805ca548830e8c3c98 = RC_21369035d43ec8805ca548830e8c3c98Inner;
        RC_21369035d43ec8805ca548830e8c3c98.init();
    }
});

define("OutSystemsMaps.model$EN_e5ca0002e0338a827923cc311de3f95cEntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class EN_e5ca0002e0338a827923cc311de3f95cEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_e5ca0002e0338a827923cc311de3f95cEntityRecord(new EN_e5ca0002e0338a827923cc311de3f95cEntityRecord.RecordClass({
                    idAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.EN_e5ca0002e0338a827923cc311de3f95cEntityRecord = EN_e5ca0002e0338a827923cc311de3f95cEntityRecordInner;

        var EN_e5ca0002e0338a827923cc311de3f95cEntityRecord = EN_e5ca0002e0338a827923cc311de3f95cEntityRecordInner;
        EN_e5ca0002e0338a827923cc311de3f95cEntityRecord.init();
    }
});

define("OutSystemsMaps.model$RC_227974ef92f7b64b18b95570fef9abe3", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_e5ca0002e0338a827923cc311de3f95cEntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_227974ef92f7b64b18b95570fef9abe3Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("MapEvent", "mapEventAttr", "MapEvent", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.EN_e5ca0002e0338a827923cc311de3f95cEntityRecord());
                    }, true, OutSystemsMapsModel.EN_e5ca0002e0338a827923cc311de3f95cEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_227974ef92f7b64b18b95570fef9abe3(new RC_227974ef92f7b64b18b95570fef9abe3.RecordClass({
                    mapEventAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_227974ef92f7b64b18b95570fef9abe3 = RC_227974ef92f7b64b18b95570fef9abe3Inner;

        RC_227974ef92f7b64b18b95570fef9abe3Inner._isAnonymousRecord = true;
        RC_227974ef92f7b64b18b95570fef9abe3Inner.UniqueId = "227974ef-92f7-b64b-18b9-5570fef9abe3";
        var RC_227974ef92f7b64b18b95570fef9abe3 = RC_227974ef92f7b64b18b95570fef9abe3Inner;
        RC_227974ef92f7b64b18b95570fef9abe3.init();
    }
});

define("OutSystemsMaps.model$RL_22a46c31cc29b485a4a09782f08327cb", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_5baae74ed57e3bb61180aff1dadec4e1Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_22a46c31cc29b485a4a09782f08327cb extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_5baae74ed57e3bb61180aff1dadec4e1Structure;
        }

    }

    OutSystemsMapsModel.RL_22a46c31cc29b485a4a09782f08327cb = RL_22a46c31cc29b485a4a09782f08327cb;

});

define("OutSystemsMaps.model$ST_2c6551904cfa95c93fa24da37b55d320Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_0e474756a4be14d378c73cd05f602bcdStructure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_2c6551904cfa95c93fa24da37b55d320StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Origin", "originAttr", "origin", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_0e474756a4be14d378c73cd05f602bcdStructure());
                    }, true, OutSystemsMapsModel.ST_0e474756a4be14d378c73cd05f602bcdStructure),
                    this.attr("Destination", "destinationAttr", "destination", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_0e474756a4be14d378c73cd05f602bcdStructure());
                    }, true, OutSystemsMapsModel.ST_0e474756a4be14d378c73cd05f602bcdStructure),
                    this.attr("Distance", "distanceAttr", "distance", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("Duration", "durationAttr", "duration", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_2c6551904cfa95c93fa24da37b55d320Structure = ST_2c6551904cfa95c93fa24da37b55d320StructureInner;

        var ST_2c6551904cfa95c93fa24da37b55d320Structure = ST_2c6551904cfa95c93fa24da37b55d320StructureInner;
        ST_2c6551904cfa95c93fa24da37b55d320Structure.init();
    }
});

define("OutSystemsMaps.model$RL_23d0968d2ab1f8eb693cff9d043fd342", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_2c6551904cfa95c93fa24da37b55d320Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_23d0968d2ab1f8eb693cff9d043fd342 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_2c6551904cfa95c93fa24da37b55d320Structure;
        }

    }

    OutSystemsMapsModel.RL_23d0968d2ab1f8eb693cff9d043fd342 = RL_23d0968d2ab1f8eb693cff9d043fd342;

});

define("OutSystemsMaps.model$ST_f121435b3edb481ee03ab7ef58e5b805Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_f121435b3edb481ee03ab7ef58e5b805StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("allowDrag", "allowDragAttr", "allowDrag", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("iconUrl", "iconUrlAttr", "iconUrl", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_f121435b3edb481ee03ab7ef58e5b805Structure = ST_f121435b3edb481ee03ab7ef58e5b805StructureInner;

        var ST_f121435b3edb481ee03ab7ef58e5b805Structure = ST_f121435b3edb481ee03ab7ef58e5b805StructureInner;
        ST_f121435b3edb481ee03ab7ef58e5b805Structure.init();
    }
});

define("OutSystemsMaps.model$ST_60018fad8b9768f5644ffadf96040a85Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_f121435b3edb481ee03ab7ef58e5b805Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_60018fad8b9768f5644ffadf96040a85StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Internal_to_provider_tools_configs", "internal_to_provider_tools_configsAttr", "Internal_to_provider_tools_configs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_f121435b3edb481ee03ab7ef58e5b805Structure());
                    }, true, OutSystemsMapsModel.ST_f121435b3edb481ee03ab7ef58e5b805Structure),
                    this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_60018fad8b9768f5644ffadf96040a85Structure = ST_60018fad8b9768f5644ffadf96040a85StructureInner;

        var ST_60018fad8b9768f5644ffadf96040a85Structure = ST_60018fad8b9768f5644ffadf96040a85StructureInner;
        ST_60018fad8b9768f5644ffadf96040a85Structure.init();
    }
});

define("OutSystemsMaps.model$RL_252f0b4b2d4c4c22097e3688bd1ee0c6", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_60018fad8b9768f5644ffadf96040a85Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_252f0b4b2d4c4c22097e3688bd1ee0c6 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_60018fad8b9768f5644ffadf96040a85Structure;
        }

    }

    OutSystemsMapsModel.RL_252f0b4b2d4c4c22097e3688bd1ee0c6 = RL_252f0b4b2d4c4c22097e3688bd1ee0c6;

});

define("OutSystemsMaps.model$EN_8a068e43cce18c5870b845073fb713c1EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class EN_8a068e43cce18c5870b845073fb713c1EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_8a068e43cce18c5870b845073fb713c1EntityRecord(new EN_8a068e43cce18c5870b845073fb713c1EntityRecord.RecordClass({
                    idAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.EN_8a068e43cce18c5870b845073fb713c1EntityRecord = EN_8a068e43cce18c5870b845073fb713c1EntityRecordInner;

        var EN_8a068e43cce18c5870b845073fb713c1EntityRecord = EN_8a068e43cce18c5870b845073fb713c1EntityRecordInner;
        EN_8a068e43cce18c5870b845073fb713c1EntityRecord.init();
    }
});

define("OutSystemsMaps.model$RL_25b09e54ba65c9a859d9dfa5fd79e171", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_8a068e43cce18c5870b845073fb713c1EntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_25b09e54ba65c9a859d9dfa5fd79e171 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.EN_8a068e43cce18c5870b845073fb713c1EntityRecord;
        }

    }

    OutSystemsMapsModel.RL_25b09e54ba65c9a859d9dfa5fd79e171 = RL_25b09e54ba65c9a859d9dfa5fd79e171;

});

define("OutSystemsMaps.model$ST_7cd861eaa819851d6fba6d8150ed8cc1Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_31cb630f5fdaa3aa4d3dbfd37cbf9e56Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_7cd861eaa819851d6fba6d8150ed8cc1StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Countries", "countriesAttr", "Countries", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
                    }, true, OS.DataTypes.TextList),
                    this.attr("SearchArea", "searchAreaAttr", "SearchArea", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_31cb630f5fdaa3aa4d3dbfd37cbf9e56Structure());
                    }, true, OutSystemsMapsModel.ST_31cb630f5fdaa3aa4d3dbfd37cbf9e56Structure),
                    this.attr("SearchType", "searchTypeAttr", "SearchType", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_7cd861eaa819851d6fba6d8150ed8cc1Structure = ST_7cd861eaa819851d6fba6d8150ed8cc1StructureInner;

        var ST_7cd861eaa819851d6fba6d8150ed8cc1Structure = ST_7cd861eaa819851d6fba6d8150ed8cc1StructureInner;
        ST_7cd861eaa819851d6fba6d8150ed8cc1Structure.init();
    }
});

define("OutSystemsMaps.model$RC_27d8031b19e05deba9a159874d88bc75", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_7cd861eaa819851d6fba6d8150ed8cc1Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_27d8031b19e05deba9a159874d88bc75Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("OptionalSearchPlacesConfigs", "optionalSearchPlacesConfigsAttr", "OptionalSearchPlacesConfigs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_7cd861eaa819851d6fba6d8150ed8cc1Structure());
                    }, true, OutSystemsMapsModel.ST_7cd861eaa819851d6fba6d8150ed8cc1Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_27d8031b19e05deba9a159874d88bc75(new RC_27d8031b19e05deba9a159874d88bc75.RecordClass({
                    optionalSearchPlacesConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_27d8031b19e05deba9a159874d88bc75 = RC_27d8031b19e05deba9a159874d88bc75Inner;

        RC_27d8031b19e05deba9a159874d88bc75Inner._isAnonymousRecord = true;
        RC_27d8031b19e05deba9a159874d88bc75Inner.UniqueId = "27d8031b-19e0-5deb-a9a1-59874d88bc75";
        var RC_27d8031b19e05deba9a159874d88bc75 = RC_27d8031b19e05deba9a159874d88bc75Inner;
        RC_27d8031b19e05deba9a159874d88bc75.init();
    }
});

define("OutSystemsMaps.model$ST_f85923824a33f65ded14770af5377402Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_c2a46cf64d2acc4b38d805712495224cStructure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_f85923824a33f65ded14770af5377402StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("AllowDrag", "allowDragAttr", "AllowDrag", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("AllowEdit", "allowEditAttr", "AllowEdit", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Stroke", "strokeAttr", "Stroke", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_c2a46cf64d2acc4b38d805712495224cStructure());
                    }, true, OutSystemsMapsModel.ST_c2a46cf64d2acc4b38d805712495224cStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_f85923824a33f65ded14770af5377402Structure = ST_f85923824a33f65ded14770af5377402StructureInner;

        var ST_f85923824a33f65ded14770af5377402Structure = ST_f85923824a33f65ded14770af5377402StructureInner;
        ST_f85923824a33f65ded14770af5377402Structure.init();
    }
});

define("OutSystemsMaps.model$RC_3836c6494dc01a6dca1bf0597beb32bb", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_f85923824a33f65ded14770af5377402Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_3836c6494dc01a6dca1bf0597beb32bbInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("OptionalPolylineConfigs", "optionalPolylineConfigsAttr", "OptionalPolylineConfigs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_f85923824a33f65ded14770af5377402Structure());
                    }, true, OutSystemsMapsModel.ST_f85923824a33f65ded14770af5377402Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_3836c6494dc01a6dca1bf0597beb32bb(new RC_3836c6494dc01a6dca1bf0597beb32bb.RecordClass({
                    optionalPolylineConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_3836c6494dc01a6dca1bf0597beb32bb = RC_3836c6494dc01a6dca1bf0597beb32bbInner;

        RC_3836c6494dc01a6dca1bf0597beb32bbInner._isAnonymousRecord = true;
        RC_3836c6494dc01a6dca1bf0597beb32bbInner.UniqueId = "3836c649-4dc0-1a6d-ca1b-f0597beb32bb";
        var RC_3836c6494dc01a6dca1bf0597beb32bb = RC_3836c6494dc01a6dca1bf0597beb32bbInner;
        RC_3836c6494dc01a6dca1bf0597beb32bb.init();
    }
});

define("OutSystemsMaps.model$RL_28b1907e8293683af0c45f54c4d2b8d8", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_3836c6494dc01a6dca1bf0597beb32bb"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_28b1907e8293683af0c45f54c4d2b8d8 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_3836c6494dc01a6dca1bf0597beb32bb;
        }

    }

    OutSystemsMapsModel.RL_28b1907e8293683af0c45f54c4d2b8d8 = RL_28b1907e8293683af0c45f54c4d2b8d8;

});

define("OutSystemsMaps.model$EN_ddceb9a0506316e12e8b49777be81ba4EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class EN_ddceb9a0506316e12e8b49777be81ba4EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Code", "codeAttr", "Code", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Message", "messageAttr", "Message", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.EN_ddceb9a0506316e12e8b49777be81ba4EntityRecord = EN_ddceb9a0506316e12e8b49777be81ba4EntityRecordInner;

        var EN_ddceb9a0506316e12e8b49777be81ba4EntityRecord = EN_ddceb9a0506316e12e8b49777be81ba4EntityRecordInner;
        EN_ddceb9a0506316e12e8b49777be81ba4EntityRecord.init();
    }
});

define("OutSystemsMaps.model$RC_28b5debce9c04e64c6dd40275449bf6c", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_ddceb9a0506316e12e8b49777be81ba4EntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_28b5debce9c04e64c6dd40275449bf6cInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("SearchPlacesErrors", "searchPlacesErrorsAttr", "SearchPlacesErrors", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.EN_ddceb9a0506316e12e8b49777be81ba4EntityRecord());
                    }, true, OutSystemsMapsModel.EN_ddceb9a0506316e12e8b49777be81ba4EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_28b5debce9c04e64c6dd40275449bf6c(new RC_28b5debce9c04e64c6dd40275449bf6c.RecordClass({
                    searchPlacesErrorsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_28b5debce9c04e64c6dd40275449bf6c = RC_28b5debce9c04e64c6dd40275449bf6cInner;

        RC_28b5debce9c04e64c6dd40275449bf6cInner._isAnonymousRecord = true;
        RC_28b5debce9c04e64c6dd40275449bf6cInner.UniqueId = "28b5debc-e9c0-4e64-c6dd-40275449bf6c";
        var RC_28b5debce9c04e64c6dd40275449bf6c = RC_28b5debce9c04e64c6dd40275449bf6cInner;
        RC_28b5debce9c04e64c6dd40275449bf6c.init();
    }
});

define("OutSystemsMaps.model$RC_9590e411027a378334a242a620d3f27e", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_793e574f3ddb64f39831eacf8a4462b0Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_9590e411027a378334a242a620d3f27eInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Internal_to_provider_fileLayer_configs", "internal_to_provider_fileLayer_configsAttr", "Internal_to_provider_fileLayer_configs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_793e574f3ddb64f39831eacf8a4462b0Structure());
                    }, true, OutSystemsMapsModel.ST_793e574f3ddb64f39831eacf8a4462b0Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_9590e411027a378334a242a620d3f27e(new RC_9590e411027a378334a242a620d3f27e.RecordClass({
                    internal_to_provider_fileLayer_configsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_9590e411027a378334a242a620d3f27e = RC_9590e411027a378334a242a620d3f27eInner;

        RC_9590e411027a378334a242a620d3f27eInner._isAnonymousRecord = true;
        RC_9590e411027a378334a242a620d3f27eInner.UniqueId = "9590e411-027a-3783-34a2-42a620d3f27e";
        var RC_9590e411027a378334a242a620d3f27e = RC_9590e411027a378334a242a620d3f27eInner;
        RC_9590e411027a378334a242a620d3f27e.init();
    }
});

define("OutSystemsMaps.model$RL_29bde35723297e54bb4953d87ba5d82b", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_9590e411027a378334a242a620d3f27e"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_29bde35723297e54bb4953d87ba5d82b extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_9590e411027a378334a242a620d3f27e;
        }

    }

    OutSystemsMapsModel.RL_29bde35723297e54bb4953d87ba5d82b = RL_29bde35723297e54bb4953d87ba5d82b;

});

define("OutSystemsMaps.model$EN_2a64cd2fe4a253e65ea352434a6d389aEntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class EN_2a64cd2fe4a253e65ea352434a6d389aEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_2a64cd2fe4a253e65ea352434a6d389aEntityRecord(new EN_2a64cd2fe4a253e65ea352434a6d389aEntityRecord.RecordClass({
                    idAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.EN_2a64cd2fe4a253e65ea352434a6d389aEntityRecord = EN_2a64cd2fe4a253e65ea352434a6d389aEntityRecordInner;

        var EN_2a64cd2fe4a253e65ea352434a6d389aEntityRecord = EN_2a64cd2fe4a253e65ea352434a6d389aEntityRecordInner;
        EN_2a64cd2fe4a253e65ea352434a6d389aEntityRecord.init();
    }
});

define("OutSystemsMaps.model$ST_9df57e801e7478aaf703933c17abb4f6Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_d25262c67f1be04c1df274811b8c7ee4Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_9df57e801e7478aaf703933c17abb4f6StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Internal_to_provider_tools_configs", "internal_to_provider_tools_configsAttr", "Internal_to_provider_tools_configs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_d25262c67f1be04c1df274811b8c7ee4Structure());
                    }, true, OutSystemsMapsModel.ST_d25262c67f1be04c1df274811b8c7ee4Structure),
                    this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_9df57e801e7478aaf703933c17abb4f6Structure = ST_9df57e801e7478aaf703933c17abb4f6StructureInner;

        var ST_9df57e801e7478aaf703933c17abb4f6Structure = ST_9df57e801e7478aaf703933c17abb4f6StructureInner;
        ST_9df57e801e7478aaf703933c17abb4f6Structure.init();
    }
});

define("OutSystemsMaps.model$RC_2afa68ebeade43c502f553bf208d417d", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_9df57e801e7478aaf703933c17abb4f6Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_2afa68ebeade43c502f553bf208d417dInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Internal_DrawRectangle_Configs", "internal_DrawRectangle_ConfigsAttr", "Internal_DrawRectangle_Configs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_9df57e801e7478aaf703933c17abb4f6Structure());
                    }, true, OutSystemsMapsModel.ST_9df57e801e7478aaf703933c17abb4f6Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_2afa68ebeade43c502f553bf208d417d(new RC_2afa68ebeade43c502f553bf208d417d.RecordClass({
                    internal_DrawRectangle_ConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_2afa68ebeade43c502f553bf208d417d = RC_2afa68ebeade43c502f553bf208d417dInner;

        RC_2afa68ebeade43c502f553bf208d417dInner._isAnonymousRecord = true;
        RC_2afa68ebeade43c502f553bf208d417dInner.UniqueId = "2afa68eb-eade-43c5-02f5-53bf208d417d";
        var RC_2afa68ebeade43c502f553bf208d417d = RC_2afa68ebeade43c502f553bf208d417dInner;
        RC_2afa68ebeade43c502f553bf208d417d.init();
    }
});

define("OutSystemsMaps.model$EN_2b877a58494bdf7ca89c3ea2061b88c8EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class EN_2b877a58494bdf7ca89c3ea2061b88c8EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_2b877a58494bdf7ca89c3ea2061b88c8EntityRecord(new EN_2b877a58494bdf7ca89c3ea2061b88c8EntityRecord.RecordClass({
                    idAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.EN_2b877a58494bdf7ca89c3ea2061b88c8EntityRecord = EN_2b877a58494bdf7ca89c3ea2061b88c8EntityRecordInner;

        var EN_2b877a58494bdf7ca89c3ea2061b88c8EntityRecord = EN_2b877a58494bdf7ca89c3ea2061b88c8EntityRecordInner;
        EN_2b877a58494bdf7ca89c3ea2061b88c8EntityRecord.init();
    }
});

define("OutSystemsMaps.model$ST_2bb06e37aea9715ba999f70106cf37a5Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_2bb06e37aea9715ba999f70106cf37a5StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("SuppressPopups", "suppressPopupsAttr", "SuppressPopups", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("PreserveViewport", "preserveViewportAttr", "PreserveViewport", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_2bb06e37aea9715ba999f70106cf37a5Structure = ST_2bb06e37aea9715ba999f70106cf37a5StructureInner;

        var ST_2bb06e37aea9715ba999f70106cf37a5Structure = ST_2bb06e37aea9715ba999f70106cf37a5StructureInner;
        ST_2bb06e37aea9715ba999f70106cf37a5Structure.init();
    }
});

define("OutSystemsMaps.model$RC_2d18bab1b72b271dc15dda249e871290", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_7595bf81d0b29040f5ad1b9eff7896b0EntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_2d18bab1b72b271dc15dda249e871290Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("MarkerEvent", "markerEventAttr", "MarkerEvent", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.EN_7595bf81d0b29040f5ad1b9eff7896b0EntityRecord());
                    }, true, OutSystemsMapsModel.EN_7595bf81d0b29040f5ad1b9eff7896b0EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_2d18bab1b72b271dc15dda249e871290(new RC_2d18bab1b72b271dc15dda249e871290.RecordClass({
                    markerEventAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_2d18bab1b72b271dc15dda249e871290 = RC_2d18bab1b72b271dc15dda249e871290Inner;

        RC_2d18bab1b72b271dc15dda249e871290Inner._isAnonymousRecord = true;
        RC_2d18bab1b72b271dc15dda249e871290Inner.UniqueId = "2d18bab1-b72b-271d-c15d-da249e871290";
        var RC_2d18bab1b72b271dc15dda249e871290 = RC_2d18bab1b72b271dc15dda249e871290Inner;
        RC_2d18bab1b72b271dc15dda249e871290.init();
    }
});

define("OutSystemsMaps.model$ST_832344699c82a4f799a423f89bbe7297Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_832344699c82a4f799a423f89bbe7297StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Location", "locationAttr", "location", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "42.3517926,-71.0467845";
                    }, true),
                    this.attr("IconURL", "iconURLAttr", "iconUrl", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("DEPRECATED_AdvancedFormat", "dEPRECATED_AdvancedFormatAttr", "advancedFormat", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_832344699c82a4f799a423f89bbe7297Structure = ST_832344699c82a4f799a423f89bbe7297StructureInner;

        var ST_832344699c82a4f799a423f89bbe7297Structure = ST_832344699c82a4f799a423f89bbe7297StructureInner;
        ST_832344699c82a4f799a423f89bbe7297Structure.init();
    }
});

define("OutSystemsMaps.model$RC_2e794e9950648fb781740aa3223ba10d", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_832344699c82a4f799a423f89bbe7297Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_2e794e9950648fb781740aa3223ba10dInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("StaticMarker", "staticMarkerAttr", "StaticMarker", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_832344699c82a4f799a423f89bbe7297Structure());
                    }, true, OutSystemsMapsModel.ST_832344699c82a4f799a423f89bbe7297Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_2e794e9950648fb781740aa3223ba10d(new RC_2e794e9950648fb781740aa3223ba10d.RecordClass({
                    staticMarkerAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_2e794e9950648fb781740aa3223ba10d = RC_2e794e9950648fb781740aa3223ba10dInner;

        RC_2e794e9950648fb781740aa3223ba10dInner._isAnonymousRecord = true;
        RC_2e794e9950648fb781740aa3223ba10dInner.UniqueId = "2e794e99-5064-8fb7-8174-0aa3223ba10d";
        var RC_2e794e9950648fb781740aa3223ba10d = RC_2e794e9950648fb781740aa3223ba10dInner;
        RC_2e794e9950648fb781740aa3223ba10d.init();
    }
});

define("OutSystemsMaps.model$RC_2f373495341cd6d1bc0753ee5c713769", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_f2c047cd8082950bd1961446a5ec1949Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_2f373495341cd6d1bc0753ee5c713769Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Internal_HeatmapLayer_Configs", "internal_HeatmapLayer_ConfigsAttr", "Internal_HeatmapLayer_Configs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_f2c047cd8082950bd1961446a5ec1949Structure());
                    }, true, OutSystemsMapsModel.ST_f2c047cd8082950bd1961446a5ec1949Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_2f373495341cd6d1bc0753ee5c713769(new RC_2f373495341cd6d1bc0753ee5c713769.RecordClass({
                    internal_HeatmapLayer_ConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_2f373495341cd6d1bc0753ee5c713769 = RC_2f373495341cd6d1bc0753ee5c713769Inner;

        RC_2f373495341cd6d1bc0753ee5c713769Inner._isAnonymousRecord = true;
        RC_2f373495341cd6d1bc0753ee5c713769Inner.UniqueId = "2f373495-341c-d6d1-bc07-53ee5c713769";
        var RC_2f373495341cd6d1bc0753ee5c713769 = RC_2f373495341cd6d1bc0753ee5c713769Inner;
        RC_2f373495341cd6d1bc0753ee5c713769.init();
    }
});

define("OutSystemsMaps.model$ST_2f5ec17a6f7c3827bc8a33107ce38ec9Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_4d96f69748c4f35fb433f7995d061407Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_2f5ec17a6f7c3827bc8a33107ce38ec9StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Internal_to_provider_shape_configs", "internal_to_provider_shape_configsAttr", "Internal_to_provider_shape_configs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_4d96f69748c4f35fb433f7995d061407Structure());
                    }, true, OutSystemsMapsModel.ST_4d96f69748c4f35fb433f7995d061407Structure),
                    this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_2f5ec17a6f7c3827bc8a33107ce38ec9Structure = ST_2f5ec17a6f7c3827bc8a33107ce38ec9StructureInner;

        var ST_2f5ec17a6f7c3827bc8a33107ce38ec9Structure = ST_2f5ec17a6f7c3827bc8a33107ce38ec9StructureInner;
        ST_2f5ec17a6f7c3827bc8a33107ce38ec9Structure.init();
    }
});

define("OutSystemsMaps.model$ST_44bc2bbbb8592f02bc88a9fdf25bb951Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_44bc2bbbb8592f02bc88a9fdf25bb951StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Email", "emailAttr", "email", false, false, OS.DataTypes.DataTypes.Email, function() {
                        return "";
                    }, true),
                    this.attr("Name", "nameAttr", "name", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Uri", "uriAttr", "uri", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_44bc2bbbb8592f02bc88a9fdf25bb951Structure = ST_44bc2bbbb8592f02bc88a9fdf25bb951StructureInner;

        var ST_44bc2bbbb8592f02bc88a9fdf25bb951Structure = ST_44bc2bbbb8592f02bc88a9fdf25bb951StructureInner;
        ST_44bc2bbbb8592f02bc88a9fdf25bb951Structure.init();
    }
});

define("OutSystemsMaps.model$ST_87d89cf32a40d309845674355a1bd4e1Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_44bc2bbbb8592f02bc88a9fdf25bb951Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_87d89cf32a40d309845674355a1bd4e1StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "id", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Name", "nameAttr", "name", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Author", "authorAttr", "author", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_44bc2bbbb8592f02bc88a9fdf25bb951Structure());
                    }, true, OutSystemsMapsModel.ST_44bc2bbbb8592f02bc88a9fdf25bb951Structure),
                    this.attr("Description", "descriptionAttr", "description", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("InfoWindowHtml", "infoWindowHtmlAttr", "infoWindowHtml", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Snippet", "snippetAttr", "Snippet", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_87d89cf32a40d309845674355a1bd4e1Structure = ST_87d89cf32a40d309845674355a1bd4e1StructureInner;

        var ST_87d89cf32a40d309845674355a1bd4e1Structure = ST_87d89cf32a40d309845674355a1bd4e1StructureInner;
        ST_87d89cf32a40d309845674355a1bd4e1Structure.init();
    }
});

define("OutSystemsMaps.model$RC_2fa6ec01db1a6b09e6b59fa237f21deb", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_87d89cf32a40d309845674355a1bd4e1Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_2fa6ec01db1a6b09e6b59fa237f21debInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("FeatureData", "featureDataAttr", "FeatureData", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_87d89cf32a40d309845674355a1bd4e1Structure());
                    }, true, OutSystemsMapsModel.ST_87d89cf32a40d309845674355a1bd4e1Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_2fa6ec01db1a6b09e6b59fa237f21deb(new RC_2fa6ec01db1a6b09e6b59fa237f21deb.RecordClass({
                    featureDataAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_2fa6ec01db1a6b09e6b59fa237f21deb = RC_2fa6ec01db1a6b09e6b59fa237f21debInner;

        RC_2fa6ec01db1a6b09e6b59fa237f21debInner._isAnonymousRecord = true;
        RC_2fa6ec01db1a6b09e6b59fa237f21debInner.UniqueId = "2fa6ec01-db1a-6b09-e6b5-9fa237f21deb";
        var RC_2fa6ec01db1a6b09e6b59fa237f21deb = RC_2fa6ec01db1a6b09e6b59fa237f21debInner;
        RC_2fa6ec01db1a6b09e6b59fa237f21deb.init();
    }
});

define("OutSystemsMaps.model$ST_b0933bf7957301c22e5d9229ad792ac0Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_d4721898ae8c007cd938074f575e2979Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_b0933bf7957301c22e5d9229ad792ac0StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Internal_to_provider_configs", "internal_to_provider_configsAttr", "Internal_to_provider_configs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_d4721898ae8c007cd938074f575e2979Structure());
                    }, true, OutSystemsMapsModel.ST_d4721898ae8c007cd938074f575e2979Structure),
                    this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_b0933bf7957301c22e5d9229ad792ac0Structure = ST_b0933bf7957301c22e5d9229ad792ac0StructureInner;

        var ST_b0933bf7957301c22e5d9229ad792ac0Structure = ST_b0933bf7957301c22e5d9229ad792ac0StructureInner;
        ST_b0933bf7957301c22e5d9229ad792ac0Structure.init();
    }
});

define("OutSystemsMaps.model$RC_31c29444fafad199d1156f5f03b41f57", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_b0933bf7957301c22e5d9229ad792ac0Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_31c29444fafad199d1156f5f03b41f57Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Internal_SearchPlaces_Configs", "internal_SearchPlaces_ConfigsAttr", "Internal_SearchPlaces_Configs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_b0933bf7957301c22e5d9229ad792ac0Structure());
                    }, true, OutSystemsMapsModel.ST_b0933bf7957301c22e5d9229ad792ac0Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_31c29444fafad199d1156f5f03b41f57(new RC_31c29444fafad199d1156f5f03b41f57.RecordClass({
                    internal_SearchPlaces_ConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_31c29444fafad199d1156f5f03b41f57 = RC_31c29444fafad199d1156f5f03b41f57Inner;

        RC_31c29444fafad199d1156f5f03b41f57Inner._isAnonymousRecord = true;
        RC_31c29444fafad199d1156f5f03b41f57Inner.UniqueId = "31c29444-fafa-d199-d115-6f5f03b41f57";
        var RC_31c29444fafad199d1156f5f03b41f57 = RC_31c29444fafad199d1156f5f03b41f57Inner;
        RC_31c29444fafad199d1156f5f03b41f57.init();
    }
});

define("OutSystemsMaps.model$EN_e8edeefe38d8112c39e64ad89dac6f44EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class EN_e8edeefe38d8112c39e64ad89dac6f44EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_e8edeefe38d8112c39e64ad89dac6f44EntityRecord(new EN_e8edeefe38d8112c39e64ad89dac6f44EntityRecord.RecordClass({
                    idAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.EN_e8edeefe38d8112c39e64ad89dac6f44EntityRecord = EN_e8edeefe38d8112c39e64ad89dac6f44EntityRecordInner;

        var EN_e8edeefe38d8112c39e64ad89dac6f44EntityRecord = EN_e8edeefe38d8112c39e64ad89dac6f44EntityRecordInner;
        EN_e8edeefe38d8112c39e64ad89dac6f44EntityRecord.init();
    }
});

define("OutSystemsMaps.model$RC_3201d1384957542debf3cb5808f51144", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_e8edeefe38d8112c39e64ad89dac6f44EntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_3201d1384957542debf3cb5808f51144Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ShapeType", "shapeTypeAttr", "ShapeType", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.EN_e8edeefe38d8112c39e64ad89dac6f44EntityRecord());
                    }, true, OutSystemsMapsModel.EN_e8edeefe38d8112c39e64ad89dac6f44EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_3201d1384957542debf3cb5808f51144(new RC_3201d1384957542debf3cb5808f51144.RecordClass({
                    shapeTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_3201d1384957542debf3cb5808f51144 = RC_3201d1384957542debf3cb5808f51144Inner;

        RC_3201d1384957542debf3cb5808f51144Inner._isAnonymousRecord = true;
        RC_3201d1384957542debf3cb5808f51144Inner.UniqueId = "3201d138-4957-542d-ebf3-cb5808f51144";
        var RC_3201d1384957542debf3cb5808f51144 = RC_3201d1384957542debf3cb5808f51144Inner;
        RC_3201d1384957542debf3cb5808f51144.init();
    }
});

define("OutSystemsMaps.model$EN_480235a969b3f42eac91ad5813fe9bf9EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class EN_480235a969b3f42eac91ad5813fe9bf9EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("Label", "labelAttr", "Label", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Zoom", "zoomAttr", "Zoom", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.EN_480235a969b3f42eac91ad5813fe9bf9EntityRecord = EN_480235a969b3f42eac91ad5813fe9bf9EntityRecordInner;

        var EN_480235a969b3f42eac91ad5813fe9bf9EntityRecord = EN_480235a969b3f42eac91ad5813fe9bf9EntityRecordInner;
        EN_480235a969b3f42eac91ad5813fe9bf9EntityRecord.init();
    }
});

define("OutSystemsMaps.model$RL_34e3285764324083bc72bd04bd7ad877", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_480235a969b3f42eac91ad5813fe9bf9EntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_34e3285764324083bc72bd04bd7ad877 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.EN_480235a969b3f42eac91ad5813fe9bf9EntityRecord;
        }

    }

    OutSystemsMapsModel.RL_34e3285764324083bc72bd04bd7ad877 = RL_34e3285764324083bc72bd04bd7ad877;

});

define("OutSystemsMaps.model$EN_4d0e07d9538530f68924ab612d15f82bEntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class EN_4d0e07d9538530f68924ab612d15f82bEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Code", "codeAttr", "Code", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Message", "messageAttr", "Message", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.EN_4d0e07d9538530f68924ab612d15f82bEntityRecord = EN_4d0e07d9538530f68924ab612d15f82bEntityRecordInner;

        var EN_4d0e07d9538530f68924ab612d15f82bEntityRecord = EN_4d0e07d9538530f68924ab612d15f82bEntityRecordInner;
        EN_4d0e07d9538530f68924ab612d15f82bEntityRecord.init();
    }
});

define("OutSystemsMaps.model$RL_37db3dabed0bf7582173dae36f4afeae", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_4d0e07d9538530f68924ab612d15f82bEntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_37db3dabed0bf7582173dae36f4afeae extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.EN_4d0e07d9538530f68924ab612d15f82bEntityRecord;
        }

    }

    OutSystemsMapsModel.RL_37db3dabed0bf7582173dae36f4afeae = RL_37db3dabed0bf7582173dae36f4afeae;

});

define("OutSystemsMaps.model$RC_a3e0d02178b078a960ae427dd1751cbc", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_be62cc31fbe4705834275960beeb55e2Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_a3e0d02178b078a960ae427dd1751cbcInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Offset", "offsetAttr", "Offset", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_be62cc31fbe4705834275960beeb55e2Structure());
                    }, true, OutSystemsMapsModel.ST_be62cc31fbe4705834275960beeb55e2Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_a3e0d02178b078a960ae427dd1751cbc(new RC_a3e0d02178b078a960ae427dd1751cbc.RecordClass({
                    offsetAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_a3e0d02178b078a960ae427dd1751cbc = RC_a3e0d02178b078a960ae427dd1751cbcInner;

        RC_a3e0d02178b078a960ae427dd1751cbcInner._isAnonymousRecord = true;
        RC_a3e0d02178b078a960ae427dd1751cbcInner.UniqueId = "a3e0d021-78b0-78a9-60ae-427dd1751cbc";
        var RC_a3e0d02178b078a960ae427dd1751cbc = RC_a3e0d02178b078a960ae427dd1751cbcInner;
        RC_a3e0d02178b078a960ae427dd1751cbc.init();
    }
});

define("OutSystemsMaps.model$RL_37ebca9cc7a640553fda76d301ad4a68", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_a3e0d02178b078a960ae427dd1751cbc"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_37ebca9cc7a640553fda76d301ad4a68 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_a3e0d02178b078a960ae427dd1751cbc;
        }

    }

    OutSystemsMapsModel.RL_37ebca9cc7a640553fda76d301ad4a68 = RL_37ebca9cc7a640553fda76d301ad4a68;

});

define("OutSystemsMaps.model$ST_86d2610e9625abf0ecb7241e6d8099fbStructure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_86d2610e9625abf0ecb7241e6d8099fbStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("allowDrag", "allowDragAttr", "allowDrag", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("allowEdit", "allowEditAttr", "allowEdit", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("strokeColor", "strokeColorAttr", "strokeColor", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "#000000";
                    }, true),
                    this.attr("strokeOpacity", "strokeOpacityAttr", "strokeOpacity", true, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.BuiltinFunctions.integerToDecimal(1);
                    }, true),
                    this.attr("strokeWeight", "strokeWeightAttr", "strokeWeight", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 2;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_86d2610e9625abf0ecb7241e6d8099fbStructure = ST_86d2610e9625abf0ecb7241e6d8099fbStructureInner;

        var ST_86d2610e9625abf0ecb7241e6d8099fbStructure = ST_86d2610e9625abf0ecb7241e6d8099fbStructureInner;
        ST_86d2610e9625abf0ecb7241e6d8099fbStructure.init();
    }
});

define("OutSystemsMaps.model$ST_5223ca706bfb3de574fb0b39ebba3fb6Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_86d2610e9625abf0ecb7241e6d8099fbStructure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_5223ca706bfb3de574fb0b39ebba3fb6StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Internal_to_provider_tools_configs", "internal_to_provider_tools_configsAttr", "Internal_to_provider_tools_configs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_86d2610e9625abf0ecb7241e6d8099fbStructure());
                    }, true, OutSystemsMapsModel.ST_86d2610e9625abf0ecb7241e6d8099fbStructure),
                    this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_5223ca706bfb3de574fb0b39ebba3fb6Structure = ST_5223ca706bfb3de574fb0b39ebba3fb6StructureInner;

        var ST_5223ca706bfb3de574fb0b39ebba3fb6Structure = ST_5223ca706bfb3de574fb0b39ebba3fb6StructureInner;
        ST_5223ca706bfb3de574fb0b39ebba3fb6Structure.init();
    }
});

define("OutSystemsMaps.model$RL_389f2c39da50ad36f3dbeadd4af0b4d3", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_5223ca706bfb3de574fb0b39ebba3fb6Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_389f2c39da50ad36f3dbeadd4af0b4d3 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_5223ca706bfb3de574fb0b39ebba3fb6Structure;
        }

    }

    OutSystemsMapsModel.RL_389f2c39da50ad36f3dbeadd4af0b4d3 = RL_389f2c39da50ad36f3dbeadd4af0b4d3;

});

define("OutSystemsMaps.model$RL_3b9b74504238c1837b79b58dfe494b5b", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_f121435b3edb481ee03ab7ef58e5b805Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_3b9b74504238c1837b79b58dfe494b5b extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_f121435b3edb481ee03ab7ef58e5b805Structure;
        }

    }

    OutSystemsMapsModel.RL_3b9b74504238c1837b79b58dfe494b5b = RL_3b9b74504238c1837b79b58dfe494b5b;

});

define("OutSystemsMaps.model$RC_a9d3f6b226a37f22bb219f2bf72cf852", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_60018fad8b9768f5644ffadf96040a85Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_a9d3f6b226a37f22bb219f2bf72cf852Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Internal_DrawMarker_Configs", "internal_DrawMarker_ConfigsAttr", "Internal_DrawMarker_Configs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_60018fad8b9768f5644ffadf96040a85Structure());
                    }, true, OutSystemsMapsModel.ST_60018fad8b9768f5644ffadf96040a85Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_a9d3f6b226a37f22bb219f2bf72cf852(new RC_a9d3f6b226a37f22bb219f2bf72cf852.RecordClass({
                    internal_DrawMarker_ConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_a9d3f6b226a37f22bb219f2bf72cf852 = RC_a9d3f6b226a37f22bb219f2bf72cf852Inner;

        RC_a9d3f6b226a37f22bb219f2bf72cf852Inner._isAnonymousRecord = true;
        RC_a9d3f6b226a37f22bb219f2bf72cf852Inner.UniqueId = "a9d3f6b2-26a3-7f22-bb21-9f2bf72cf852";
        var RC_a9d3f6b226a37f22bb219f2bf72cf852 = RC_a9d3f6b226a37f22bb219f2bf72cf852Inner;
        RC_a9d3f6b226a37f22bb219f2bf72cf852.init();
    }
});

define("OutSystemsMaps.model$RL_3c18a06a0b0cb2ff9323e9e683293f73", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_a9d3f6b226a37f22bb219f2bf72cf852"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_3c18a06a0b0cb2ff9323e9e683293f73 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_a9d3f6b226a37f22bb219f2bf72cf852;
        }

    }

    OutSystemsMapsModel.RL_3c18a06a0b0cb2ff9323e9e683293f73 = RL_3c18a06a0b0cb2ff9323e9e683293f73;

});

define("OutSystemsMaps.model$RC_7f3fab599cac29adb40d23996cbe5a3b", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_3d593ae1aad35ac58e1616049bb8da2cStructure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_7f3fab599cac29adb40d23996cbe5a3bInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Internal__Marker_Configs", "internal__Marker_ConfigsAttr", "Internal__Marker_Configs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_3d593ae1aad35ac58e1616049bb8da2cStructure());
                    }, true, OutSystemsMapsModel.ST_3d593ae1aad35ac58e1616049bb8da2cStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_7f3fab599cac29adb40d23996cbe5a3b(new RC_7f3fab599cac29adb40d23996cbe5a3b.RecordClass({
                    internal__Marker_ConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_7f3fab599cac29adb40d23996cbe5a3b = RC_7f3fab599cac29adb40d23996cbe5a3bInner;

        RC_7f3fab599cac29adb40d23996cbe5a3bInner._isAnonymousRecord = true;
        RC_7f3fab599cac29adb40d23996cbe5a3bInner.UniqueId = "7f3fab59-9cac-29ad-b40d-23996cbe5a3b";
        var RC_7f3fab599cac29adb40d23996cbe5a3b = RC_7f3fab599cac29adb40d23996cbe5a3bInner;
        RC_7f3fab599cac29adb40d23996cbe5a3b.init();
    }
});

define("OutSystemsMaps.model$RL_3cd1e9f4dc129b616317a614e87a04d1", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_7f3fab599cac29adb40d23996cbe5a3b"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_3cd1e9f4dc129b616317a614e87a04d1 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_7f3fab599cac29adb40d23996cbe5a3b;
        }

    }

    OutSystemsMapsModel.RL_3cd1e9f4dc129b616317a614e87a04d1 = RL_3cd1e9f4dc129b616317a614e87a04d1;

});

define("OutSystemsMaps.model$EN_f6b05f1cc2ae707d67f7da7ba2f4fd22EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class EN_f6b05f1cc2ae707d67f7da7ba2f4fd22EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_f6b05f1cc2ae707d67f7da7ba2f4fd22EntityRecord(new EN_f6b05f1cc2ae707d67f7da7ba2f4fd22EntityRecord.RecordClass({
                    idAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.EN_f6b05f1cc2ae707d67f7da7ba2f4fd22EntityRecord = EN_f6b05f1cc2ae707d67f7da7ba2f4fd22EntityRecordInner;

        var EN_f6b05f1cc2ae707d67f7da7ba2f4fd22EntityRecord = EN_f6b05f1cc2ae707d67f7da7ba2f4fd22EntityRecordInner;
        EN_f6b05f1cc2ae707d67f7da7ba2f4fd22EntityRecord.init();
    }
});

define("OutSystemsMaps.model$RL_3ceaf8c75f7341cd8a52e0037549736f", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_f6b05f1cc2ae707d67f7da7ba2f4fd22EntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_3ceaf8c75f7341cd8a52e0037549736f extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.EN_f6b05f1cc2ae707d67f7da7ba2f4fd22EntityRecord;
        }

    }

    OutSystemsMapsModel.RL_3ceaf8c75f7341cd8a52e0037549736f = RL_3ceaf8c75f7341cd8a52e0037549736f;

});

define("OutSystemsMaps.model$RC_3d151c63adf137bd3c85eaa462bbbe0c", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_4d0e07d9538530f68924ab612d15f82bEntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_3d151c63adf137bd3c85eaa462bbbe0cInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("MapErrors", "mapErrorsAttr", "MapErrors", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.EN_4d0e07d9538530f68924ab612d15f82bEntityRecord());
                    }, true, OutSystemsMapsModel.EN_4d0e07d9538530f68924ab612d15f82bEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_3d151c63adf137bd3c85eaa462bbbe0c(new RC_3d151c63adf137bd3c85eaa462bbbe0c.RecordClass({
                    mapErrorsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_3d151c63adf137bd3c85eaa462bbbe0c = RC_3d151c63adf137bd3c85eaa462bbbe0cInner;

        RC_3d151c63adf137bd3c85eaa462bbbe0cInner._isAnonymousRecord = true;
        RC_3d151c63adf137bd3c85eaa462bbbe0cInner.UniqueId = "3d151c63-adf1-37bd-3c85-eaa462bbbe0c";
        var RC_3d151c63adf137bd3c85eaa462bbbe0c = RC_3d151c63adf137bd3c85eaa462bbbe0cInner;
        RC_3d151c63adf137bd3c85eaa462bbbe0c.init();
    }
});

define("OutSystemsMaps.model$RL_3d15fde051d0f445d11317bbc8751458", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_28b5debce9c04e64c6dd40275449bf6c"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_3d15fde051d0f445d11317bbc8751458 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_28b5debce9c04e64c6dd40275449bf6c;
        }

    }

    OutSystemsMapsModel.RL_3d15fde051d0f445d11317bbc8751458 = RL_3d15fde051d0f445d11317bbc8751458;

});

define("OutSystemsMaps.model$RC_ac174f96b960b9152d73b4583f3f4d43", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_5223ca706bfb3de574fb0b39ebba3fb6Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_ac174f96b960b9152d73b4583f3f4d43Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Internal_DrawPolyline_Configs", "internal_DrawPolyline_ConfigsAttr", "Internal_DrawPolyline_Configs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_5223ca706bfb3de574fb0b39ebba3fb6Structure());
                    }, true, OutSystemsMapsModel.ST_5223ca706bfb3de574fb0b39ebba3fb6Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_ac174f96b960b9152d73b4583f3f4d43(new RC_ac174f96b960b9152d73b4583f3f4d43.RecordClass({
                    internal_DrawPolyline_ConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_ac174f96b960b9152d73b4583f3f4d43 = RC_ac174f96b960b9152d73b4583f3f4d43Inner;

        RC_ac174f96b960b9152d73b4583f3f4d43Inner._isAnonymousRecord = true;
        RC_ac174f96b960b9152d73b4583f3f4d43Inner.UniqueId = "ac174f96-b960-b915-2d73-b4583f3f4d43";
        var RC_ac174f96b960b9152d73b4583f3f4d43 = RC_ac174f96b960b9152d73b4583f3f4d43Inner;
        RC_ac174f96b960b9152d73b4583f3f4d43.init();
    }
});

define("OutSystemsMaps.model$RL_3d32ef0bcad58dedcfa8b601d0da2302", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_ac174f96b960b9152d73b4583f3f4d43"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_3d32ef0bcad58dedcfa8b601d0da2302 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_ac174f96b960b9152d73b4583f3f4d43;
        }

    }

    OutSystemsMapsModel.RL_3d32ef0bcad58dedcfa8b601d0da2302 = RL_3d32ef0bcad58dedcfa8b601d0da2302;

});

define("OutSystemsMaps.model$ST_78fd8c130caeaf241d821392d1010014Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_78fd8c130caeaf241d821392d1010014StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("AvoidTolls", "avoidTollsAttr", "avoidTolls", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("AvoidHighways", "avoidHighwaysAttr", "avoidHighways", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("AvoidFerries", "avoidFerriesAttr", "avoidFerries", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_78fd8c130caeaf241d821392d1010014Structure = ST_78fd8c130caeaf241d821392d1010014StructureInner;

        var ST_78fd8c130caeaf241d821392d1010014Structure = ST_78fd8c130caeaf241d821392d1010014StructureInner;
        ST_78fd8c130caeaf241d821392d1010014Structure.init();
    }
});

define("OutSystemsMaps.model$ST_78b0cd1737b6725aac7ae45759769b93Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_78fd8c130caeaf241d821392d1010014Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_78b0cd1737b6725aac7ae45759769b93StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Origin", "originAttr", "originRoute", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Destination", "destinationAttr", "destinationRoute", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("TravelMode", "travelModeAttr", "travelMode", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Waypoints", "waypointsAttr", "waypoints", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
                    }, true, OS.DataTypes.TextList),
                    this.attr("OptimizeWaypoints", "optimizeWaypointsAttr", "optimizeWaypoints", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Exclude", "excludeAttr", "exclude", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_78fd8c130caeaf241d821392d1010014Structure());
                    }, true, OutSystemsMapsModel.ST_78fd8c130caeaf241d821392d1010014Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_78b0cd1737b6725aac7ae45759769b93Structure = ST_78b0cd1737b6725aac7ae45759769b93StructureInner;

        var ST_78b0cd1737b6725aac7ae45759769b93Structure = ST_78b0cd1737b6725aac7ae45759769b93StructureInner;
        ST_78b0cd1737b6725aac7ae45759769b93Structure.init();
    }
});

define("OutSystemsMaps.model$RC_8cdaa87184301dfa944cee1224e04604", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_78b0cd1737b6725aac7ae45759769b93Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_8cdaa87184301dfa944cee1224e04604Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("DirectionOptions", "directionOptionsAttr", "DirectionOptions", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_78b0cd1737b6725aac7ae45759769b93Structure());
                    }, true, OutSystemsMapsModel.ST_78b0cd1737b6725aac7ae45759769b93Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_8cdaa87184301dfa944cee1224e04604(new RC_8cdaa87184301dfa944cee1224e04604.RecordClass({
                    directionOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_8cdaa87184301dfa944cee1224e04604 = RC_8cdaa87184301dfa944cee1224e04604Inner;

        RC_8cdaa87184301dfa944cee1224e04604Inner._isAnonymousRecord = true;
        RC_8cdaa87184301dfa944cee1224e04604Inner.UniqueId = "8cdaa871-8430-1dfa-944c-ee1224e04604";
        var RC_8cdaa87184301dfa944cee1224e04604 = RC_8cdaa87184301dfa944cee1224e04604Inner;
        RC_8cdaa87184301dfa944cee1224e04604.init();
    }
});

define("OutSystemsMaps.model$RL_3d74d9d326e1af4e0ef57c8e7b6106e5", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_8cdaa87184301dfa944cee1224e04604"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_3d74d9d326e1af4e0ef57c8e7b6106e5 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_8cdaa87184301dfa944cee1224e04604;
        }

    }

    OutSystemsMapsModel.RL_3d74d9d326e1af4e0ef57c8e7b6106e5 = RL_3d74d9d326e1af4e0ef57c8e7b6106e5;

});

define("OutSystemsMaps.model$EN_6b2476596efdad1a294f5d1a6e21f7e1EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class EN_6b2476596efdad1a294f5d1a6e21f7e1EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_6b2476596efdad1a294f5d1a6e21f7e1EntityRecord(new EN_6b2476596efdad1a294f5d1a6e21f7e1EntityRecord.RecordClass({
                    idAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.EN_6b2476596efdad1a294f5d1a6e21f7e1EntityRecord = EN_6b2476596efdad1a294f5d1a6e21f7e1EntityRecordInner;

        var EN_6b2476596efdad1a294f5d1a6e21f7e1EntityRecord = EN_6b2476596efdad1a294f5d1a6e21f7e1EntityRecordInner;
        EN_6b2476596efdad1a294f5d1a6e21f7e1EntityRecord.init();
    }
});

define("OutSystemsMaps.model$RL_3de0810e495df9d2bddf019c212a28e7", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_6b2476596efdad1a294f5d1a6e21f7e1EntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_3de0810e495df9d2bddf019c212a28e7 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.EN_6b2476596efdad1a294f5d1a6e21f7e1EntityRecord;
        }

    }

    OutSystemsMapsModel.RL_3de0810e495df9d2bddf019c212a28e7 = RL_3de0810e495df9d2bddf019c212a28e7;

});

define("OutSystemsMaps.model$RL_3edf9b671d971f98015ab6b1b5f47187", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_597877eac22877030461f6d98995be4aStructure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_3edf9b671d971f98015ab6b1b5f47187 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_597877eac22877030461f6d98995be4aStructure;
        }

    }

    OutSystemsMapsModel.RL_3edf9b671d971f98015ab6b1b5f47187 = RL_3edf9b671d971f98015ab6b1b5f47187;

});

define("OutSystemsMaps.model$ST_a0cdfbad52e32bc69efd7ec23c40fc2fStructure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_a0cdfbad52e32bc69efd7ec23c40fc2fStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Width", "widthAttr", "Width", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("Height", "heightAttr", "Height", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_a0cdfbad52e32bc69efd7ec23c40fc2fStructure = ST_a0cdfbad52e32bc69efd7ec23c40fc2fStructureInner;

        var ST_a0cdfbad52e32bc69efd7ec23c40fc2fStructure = ST_a0cdfbad52e32bc69efd7ec23c40fc2fStructureInner;
        ST_a0cdfbad52e32bc69efd7ec23c40fc2fStructure.init();
    }
});

define("OutSystemsMaps.model$RL_41f69bc5f164eef25227510b7af86bed", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_a0cdfbad52e32bc69efd7ec23c40fc2fStructure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_41f69bc5f164eef25227510b7af86bed extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_a0cdfbad52e32bc69efd7ec23c40fc2fStructure;
        }

    }

    OutSystemsMapsModel.RL_41f69bc5f164eef25227510b7af86bed = RL_41f69bc5f164eef25227510b7af86bed;

});

define("OutSystemsMaps.model$RC_b426a0d7aa8f7cff1977eb04da864b0f", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_6b2476596efdad1a294f5d1a6e21f7e1EntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_b426a0d7aa8f7cff1977eb04da864b0fInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("PopupEvent", "popupEventAttr", "PopupEvent", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.EN_6b2476596efdad1a294f5d1a6e21f7e1EntityRecord());
                    }, true, OutSystemsMapsModel.EN_6b2476596efdad1a294f5d1a6e21f7e1EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_b426a0d7aa8f7cff1977eb04da864b0f(new RC_b426a0d7aa8f7cff1977eb04da864b0f.RecordClass({
                    popupEventAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_b426a0d7aa8f7cff1977eb04da864b0f = RC_b426a0d7aa8f7cff1977eb04da864b0fInner;

        RC_b426a0d7aa8f7cff1977eb04da864b0fInner._isAnonymousRecord = true;
        RC_b426a0d7aa8f7cff1977eb04da864b0fInner.UniqueId = "b426a0d7-aa8f-7cff-1977-eb04da864b0f";
        var RC_b426a0d7aa8f7cff1977eb04da864b0f = RC_b426a0d7aa8f7cff1977eb04da864b0fInner;
        RC_b426a0d7aa8f7cff1977eb04da864b0f.init();
    }
});

define("OutSystemsMaps.model$RL_42ccc6dea7262d1c5960d9d9edeca153", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_b426a0d7aa8f7cff1977eb04da864b0f"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_42ccc6dea7262d1c5960d9d9edeca153 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_b426a0d7aa8f7cff1977eb04da864b0f;
        }

    }

    OutSystemsMapsModel.RL_42ccc6dea7262d1c5960d9d9edeca153 = RL_42ccc6dea7262d1c5960d9d9edeca153;

});

define("OutSystemsMaps.model$ST_707b1ead9a0d000606d8b9e0cca3c3f9Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_d25262c67f1be04c1df274811b8c7ee4Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_707b1ead9a0d000606d8b9e0cca3c3f9StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Internal_to_provider_tools_configs", "internal_to_provider_tools_configsAttr", "Internal_to_provider_tools_configs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_d25262c67f1be04c1df274811b8c7ee4Structure());
                    }, true, OutSystemsMapsModel.ST_d25262c67f1be04c1df274811b8c7ee4Structure),
                    this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_707b1ead9a0d000606d8b9e0cca3c3f9Structure = ST_707b1ead9a0d000606d8b9e0cca3c3f9StructureInner;

        var ST_707b1ead9a0d000606d8b9e0cca3c3f9Structure = ST_707b1ead9a0d000606d8b9e0cca3c3f9StructureInner;
        ST_707b1ead9a0d000606d8b9e0cca3c3f9Structure.init();
    }
});

define("OutSystemsMaps.model$RL_456236f973ca00515f32bb9ae2704d6a", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_707b1ead9a0d000606d8b9e0cca3c3f9Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_456236f973ca00515f32bb9ae2704d6a extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_707b1ead9a0d000606d8b9e0cca3c3f9Structure;
        }

    }

    OutSystemsMapsModel.RL_456236f973ca00515f32bb9ae2704d6a = RL_456236f973ca00515f32bb9ae2704d6a;

});

define("OutSystemsMaps.model$RL_45b1a00767a21a6d36e72bda469c2b5a", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_2f5ec17a6f7c3827bc8a33107ce38ec9Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_45b1a00767a21a6d36e72bda469c2b5a extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_2f5ec17a6f7c3827bc8a33107ce38ec9Structure;
        }

    }

    OutSystemsMapsModel.RL_45b1a00767a21a6d36e72bda469c2b5a = RL_45b1a00767a21a6d36e72bda469c2b5a;

});

define("OutSystemsMaps.model$RC_c81197f1ff862582a2342ed17a50f086", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_78fd8c130caeaf241d821392d1010014Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_c81197f1ff862582a2342ed17a50f086Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ExcludeCriteria", "excludeCriteriaAttr", "ExcludeCriteria", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_78fd8c130caeaf241d821392d1010014Structure());
                    }, true, OutSystemsMapsModel.ST_78fd8c130caeaf241d821392d1010014Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_c81197f1ff862582a2342ed17a50f086(new RC_c81197f1ff862582a2342ed17a50f086.RecordClass({
                    excludeCriteriaAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_c81197f1ff862582a2342ed17a50f086 = RC_c81197f1ff862582a2342ed17a50f086Inner;

        RC_c81197f1ff862582a2342ed17a50f086Inner._isAnonymousRecord = true;
        RC_c81197f1ff862582a2342ed17a50f086Inner.UniqueId = "c81197f1-ff86-2582-a234-2ed17a50f086";
        var RC_c81197f1ff862582a2342ed17a50f086 = RC_c81197f1ff862582a2342ed17a50f086Inner;
        RC_c81197f1ff862582a2342ed17a50f086.init();
    }
});

define("OutSystemsMaps.model$RL_4624f4b70e2046b470a77346edfc0bcc", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_c81197f1ff862582a2342ed17a50f086"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_4624f4b70e2046b470a77346edfc0bcc extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_c81197f1ff862582a2342ed17a50f086;
        }

    }

    OutSystemsMapsModel.RL_4624f4b70e2046b470a77346edfc0bcc = RL_4624f4b70e2046b470a77346edfc0bcc;

});

define("OutSystemsMaps.model$RL_4805e15f00dc12c56ca2c04862bba5ec", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_098c46906c1c0c7e7b39f1210fb64f78"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_4805e15f00dc12c56ca2c04862bba5ec extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_098c46906c1c0c7e7b39f1210fb64f78;
        }

    }

    OutSystemsMapsModel.RL_4805e15f00dc12c56ca2c04862bba5ec = RL_4805e15f00dc12c56ca2c04862bba5ec;

});

define("OutSystemsMaps.model$ST_49045fb6574dc7f29ee1f97116ecb1f6Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_c2a46cf64d2acc4b38d805712495224cStructure", "OutSystemsMaps.model$ST_7f8762cb0c77867d9f9e3b82fd927c7bStructure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_49045fb6574dc7f29ee1f97116ecb1f6StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("AllowDrag", "allowDragAttr", "AllowDrag", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("AllowEdit", "allowEditAttr", "AllowEdit", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Stroke", "strokeAttr", "Stroke", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_c2a46cf64d2acc4b38d805712495224cStructure());
                    }, true, OutSystemsMapsModel.ST_c2a46cf64d2acc4b38d805712495224cStructure),
                    this.attr("Fill", "fillAttr", "Fill", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_7f8762cb0c77867d9f9e3b82fd927c7bStructure());
                    }, true, OutSystemsMapsModel.ST_7f8762cb0c77867d9f9e3b82fd927c7bStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_49045fb6574dc7f29ee1f97116ecb1f6Structure = ST_49045fb6574dc7f29ee1f97116ecb1f6StructureInner;

        var ST_49045fb6574dc7f29ee1f97116ecb1f6Structure = ST_49045fb6574dc7f29ee1f97116ecb1f6StructureInner;
        ST_49045fb6574dc7f29ee1f97116ecb1f6Structure.init();
    }
});

define("OutSystemsMaps.model$RC_48d7c166849f4c26288a543a51543b8d", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_49045fb6574dc7f29ee1f97116ecb1f6Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_48d7c166849f4c26288a543a51543b8dInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("OptionalPolygonConfigs", "optionalPolygonConfigsAttr", "OptionalPolygonConfigs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_49045fb6574dc7f29ee1f97116ecb1f6Structure());
                    }, true, OutSystemsMapsModel.ST_49045fb6574dc7f29ee1f97116ecb1f6Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_48d7c166849f4c26288a543a51543b8d(new RC_48d7c166849f4c26288a543a51543b8d.RecordClass({
                    optionalPolygonConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_48d7c166849f4c26288a543a51543b8d = RC_48d7c166849f4c26288a543a51543b8dInner;

        RC_48d7c166849f4c26288a543a51543b8dInner._isAnonymousRecord = true;
        RC_48d7c166849f4c26288a543a51543b8dInner.UniqueId = "48d7c166-849f-4c26-288a-543a51543b8d";
        var RC_48d7c166849f4c26288a543a51543b8d = RC_48d7c166849f4c26288a543a51543b8dInner;
        RC_48d7c166849f4c26288a543a51543b8d.init();
    }
});

define("OutSystemsMaps.model$EN_91019cdb14b7c30434c481d431eb9bf2EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class EN_91019cdb14b7c30434c481d431eb9bf2EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_91019cdb14b7c30434c481d431eb9bf2EntityRecord(new EN_91019cdb14b7c30434c481d431eb9bf2EntityRecord.RecordClass({
                    idAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.EN_91019cdb14b7c30434c481d431eb9bf2EntityRecord = EN_91019cdb14b7c30434c481d431eb9bf2EntityRecordInner;

        var EN_91019cdb14b7c30434c481d431eb9bf2EntityRecord = EN_91019cdb14b7c30434c481d431eb9bf2EntityRecordInner;
        EN_91019cdb14b7c30434c481d431eb9bf2EntityRecord.init();
    }
});

define("OutSystemsMaps.model$RC_499414721b608cf3d3b8f99fae961f52", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_91019cdb14b7c30434c481d431eb9bf2EntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_499414721b608cf3d3b8f99fae961f52Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("DrawingToolsEvent", "drawingToolsEventAttr", "DrawingToolsEvent", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.EN_91019cdb14b7c30434c481d431eb9bf2EntityRecord());
                    }, true, OutSystemsMapsModel.EN_91019cdb14b7c30434c481d431eb9bf2EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_499414721b608cf3d3b8f99fae961f52(new RC_499414721b608cf3d3b8f99fae961f52.RecordClass({
                    drawingToolsEventAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_499414721b608cf3d3b8f99fae961f52 = RC_499414721b608cf3d3b8f99fae961f52Inner;

        RC_499414721b608cf3d3b8f99fae961f52Inner._isAnonymousRecord = true;
        RC_499414721b608cf3d3b8f99fae961f52Inner.UniqueId = "49941472-1b60-8cf3-d3b8-f99fae961f52";
        var RC_499414721b608cf3d3b8f99fae961f52 = RC_499414721b608cf3d3b8f99fae961f52Inner;
        RC_499414721b608cf3d3b8f99fae961f52.init();
    }
});

define("OutSystemsMaps.model$RC_499511b992975daa9639159d76f69e74", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_8a068e43cce18c5870b845073fb713c1EntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_499511b992975daa9639159d76f69e74Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("DrawingToolsEventTriggered", "drawingToolsEventTriggeredAttr", "DrawingToolsEventTriggered", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.EN_8a068e43cce18c5870b845073fb713c1EntityRecord());
                    }, true, OutSystemsMapsModel.EN_8a068e43cce18c5870b845073fb713c1EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_499511b992975daa9639159d76f69e74(new RC_499511b992975daa9639159d76f69e74.RecordClass({
                    drawingToolsEventTriggeredAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_499511b992975daa9639159d76f69e74 = RC_499511b992975daa9639159d76f69e74Inner;

        RC_499511b992975daa9639159d76f69e74Inner._isAnonymousRecord = true;
        RC_499511b992975daa9639159d76f69e74Inner.UniqueId = "499511b9-9297-5daa-9639-159d76f69e74";
        var RC_499511b992975daa9639159d76f69e74 = RC_499511b992975daa9639159d76f69e74Inner;
        RC_499511b992975daa9639159d76f69e74.init();
    }
});

define("OutSystemsMaps.model$RC_6cdb4a5361f01d77ad1b8152ec45fc2a", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_44bc2bbbb8592f02bc88a9fdf25bb951Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_6cdb4a5361f01d77ad1b8152ec45fc2aInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Author", "authorAttr", "Author", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_44bc2bbbb8592f02bc88a9fdf25bb951Structure());
                    }, true, OutSystemsMapsModel.ST_44bc2bbbb8592f02bc88a9fdf25bb951Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_6cdb4a5361f01d77ad1b8152ec45fc2a(new RC_6cdb4a5361f01d77ad1b8152ec45fc2a.RecordClass({
                    authorAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_6cdb4a5361f01d77ad1b8152ec45fc2a = RC_6cdb4a5361f01d77ad1b8152ec45fc2aInner;

        RC_6cdb4a5361f01d77ad1b8152ec45fc2aInner._isAnonymousRecord = true;
        RC_6cdb4a5361f01d77ad1b8152ec45fc2aInner.UniqueId = "6cdb4a53-61f0-1d77-ad1b-8152ec45fc2a";
        var RC_6cdb4a5361f01d77ad1b8152ec45fc2a = RC_6cdb4a5361f01d77ad1b8152ec45fc2aInner;
        RC_6cdb4a5361f01d77ad1b8152ec45fc2a.init();
    }
});

define("OutSystemsMaps.model$RL_4be67e3d3448f372fc9ddf138a8d2ee2", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_6cdb4a5361f01d77ad1b8152ec45fc2a"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_4be67e3d3448f372fc9ddf138a8d2ee2 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_6cdb4a5361f01d77ad1b8152ec45fc2a;
        }

    }

    OutSystemsMapsModel.RL_4be67e3d3448f372fc9ddf138a8d2ee2 = RL_4be67e3d3448f372fc9ddf138a8d2ee2;

});

define("OutSystemsMaps.model$RL_4d00fb3ac308ea1d2891835aef38e4fd", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_d5303c5dfa3a0e0e964776dce02c36f0EntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_4d00fb3ac308ea1d2891835aef38e4fd extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.EN_d5303c5dfa3a0e0e964776dce02c36f0EntityRecord;
        }

    }

    OutSystemsMapsModel.RL_4d00fb3ac308ea1d2891835aef38e4fd = RL_4d00fb3ac308ea1d2891835aef38e4fd;

});

define("OutSystemsMaps.model$RC_ee9e4164abf6fbb75acecf37ce2b6aee", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_2c6551904cfa95c93fa24da37b55d320Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_ee9e4164abf6fbb75acecf37ce2b6aeeInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("DirectionLegs", "directionLegsAttr", "DirectionLegs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_2c6551904cfa95c93fa24da37b55d320Structure());
                    }, true, OutSystemsMapsModel.ST_2c6551904cfa95c93fa24da37b55d320Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_ee9e4164abf6fbb75acecf37ce2b6aee(new RC_ee9e4164abf6fbb75acecf37ce2b6aee.RecordClass({
                    directionLegsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_ee9e4164abf6fbb75acecf37ce2b6aee = RC_ee9e4164abf6fbb75acecf37ce2b6aeeInner;

        RC_ee9e4164abf6fbb75acecf37ce2b6aeeInner._isAnonymousRecord = true;
        RC_ee9e4164abf6fbb75acecf37ce2b6aeeInner.UniqueId = "ee9e4164-abf6-fbb7-5ace-cf37ce2b6aee";
        var RC_ee9e4164abf6fbb75acecf37ce2b6aee = RC_ee9e4164abf6fbb75acecf37ce2b6aeeInner;
        RC_ee9e4164abf6fbb75acecf37ce2b6aee.init();
    }
});

define("OutSystemsMaps.model$RL_4f4550c2ab239d2ba6872f9fe4fd88ec", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_ee9e4164abf6fbb75acecf37ce2b6aee"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_4f4550c2ab239d2ba6872f9fe4fd88ec extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_ee9e4164abf6fbb75acecf37ce2b6aee;
        }

    }

    OutSystemsMapsModel.RL_4f4550c2ab239d2ba6872f9fe4fd88ec = RL_4f4550c2ab239d2ba6872f9fe4fd88ec;

});

define("OutSystemsMaps.model$RL_524f6964155c0065c42f035c25e7b580", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_5fb6f64676b0133fcb572480a766fc9cStructure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_524f6964155c0065c42f035c25e7b580 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_5fb6f64676b0133fcb572480a766fc9cStructure;
        }

    }

    OutSystemsMapsModel.RL_524f6964155c0065c42f035c25e7b580 = RL_524f6964155c0065c42f035c25e7b580;

});

define("OutSystemsMaps.model$EN_8d1df0845b207a514a87b62b89a2f0f9EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class EN_8d1df0845b207a514a87b62b89a2f0f9EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_8d1df0845b207a514a87b62b89a2f0f9EntityRecord(new EN_8d1df0845b207a514a87b62b89a2f0f9EntityRecord.RecordClass({
                    idAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.EN_8d1df0845b207a514a87b62b89a2f0f9EntityRecord = EN_8d1df0845b207a514a87b62b89a2f0f9EntityRecordInner;

        var EN_8d1df0845b207a514a87b62b89a2f0f9EntityRecord = EN_8d1df0845b207a514a87b62b89a2f0f9EntityRecordInner;
        EN_8d1df0845b207a514a87b62b89a2f0f9EntityRecord.init();
    }
});

define("OutSystemsMaps.model$RC_e2e4078a68f051b01b0e49ed4f3f6e07", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_8d1df0845b207a514a87b62b89a2f0f9EntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_e2e4078a68f051b01b0e49ed4f3f6e07Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("DrawingToolType", "drawingToolTypeAttr", "DrawingToolType", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.EN_8d1df0845b207a514a87b62b89a2f0f9EntityRecord());
                    }, true, OutSystemsMapsModel.EN_8d1df0845b207a514a87b62b89a2f0f9EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_e2e4078a68f051b01b0e49ed4f3f6e07(new RC_e2e4078a68f051b01b0e49ed4f3f6e07.RecordClass({
                    drawingToolTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_e2e4078a68f051b01b0e49ed4f3f6e07 = RC_e2e4078a68f051b01b0e49ed4f3f6e07Inner;

        RC_e2e4078a68f051b01b0e49ed4f3f6e07Inner._isAnonymousRecord = true;
        RC_e2e4078a68f051b01b0e49ed4f3f6e07Inner.UniqueId = "e2e4078a-68f0-51b0-1b0e-49ed4f3f6e07";
        var RC_e2e4078a68f051b01b0e49ed4f3f6e07 = RC_e2e4078a68f051b01b0e49ed4f3f6e07Inner;
        RC_e2e4078a68f051b01b0e49ed4f3f6e07.init();
    }
});

define("OutSystemsMaps.model$RL_5428fe7a3573eea99d91fc6654eda2fe", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_e2e4078a68f051b01b0e49ed4f3f6e07"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_5428fe7a3573eea99d91fc6654eda2fe extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_e2e4078a68f051b01b0e49ed4f3f6e07;
        }

    }

    OutSystemsMapsModel.RL_5428fe7a3573eea99d91fc6654eda2fe = RL_5428fe7a3573eea99d91fc6654eda2fe;

});

define("OutSystemsMaps.model$RC_bf75694d8016688134fa555a2fd4f5d7", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_2b877a58494bdf7ca89c3ea2061b88c8EntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_bf75694d8016688134fa555a2fd4f5d7Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("MapEventTriggered", "mapEventTriggeredAttr", "MapEventTriggered", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.EN_2b877a58494bdf7ca89c3ea2061b88c8EntityRecord());
                    }, true, OutSystemsMapsModel.EN_2b877a58494bdf7ca89c3ea2061b88c8EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_bf75694d8016688134fa555a2fd4f5d7(new RC_bf75694d8016688134fa555a2fd4f5d7.RecordClass({
                    mapEventTriggeredAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_bf75694d8016688134fa555a2fd4f5d7 = RC_bf75694d8016688134fa555a2fd4f5d7Inner;

        RC_bf75694d8016688134fa555a2fd4f5d7Inner._isAnonymousRecord = true;
        RC_bf75694d8016688134fa555a2fd4f5d7Inner.UniqueId = "bf75694d-8016-6881-34fa-555a2fd4f5d7";
        var RC_bf75694d8016688134fa555a2fd4f5d7 = RC_bf75694d8016688134fa555a2fd4f5d7Inner;
        RC_bf75694d8016688134fa555a2fd4f5d7.init();
    }
});

define("OutSystemsMaps.model$RL_5544cfc15f95ff239b7f04e7101e83bb", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_bf75694d8016688134fa555a2fd4f5d7"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_5544cfc15f95ff239b7f04e7101e83bb extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_bf75694d8016688134fa555a2fd4f5d7;
        }

    }

    OutSystemsMapsModel.RL_5544cfc15f95ff239b7f04e7101e83bb = RL_5544cfc15f95ff239b7f04e7101e83bb;

});

define("OutSystemsMaps.model$RC_e3355f6b7ba3051c4a4a9a00634d68d0", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_0e474756a4be14d378c73cd05f602bcdStructure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_e3355f6b7ba3051c4a4a9a00634d68d0Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Coordinates", "coordinatesAttr", "Coordinates", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_0e474756a4be14d378c73cd05f602bcdStructure());
                    }, true, OutSystemsMapsModel.ST_0e474756a4be14d378c73cd05f602bcdStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_e3355f6b7ba3051c4a4a9a00634d68d0(new RC_e3355f6b7ba3051c4a4a9a00634d68d0.RecordClass({
                    coordinatesAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_e3355f6b7ba3051c4a4a9a00634d68d0 = RC_e3355f6b7ba3051c4a4a9a00634d68d0Inner;

        RC_e3355f6b7ba3051c4a4a9a00634d68d0Inner._isAnonymousRecord = true;
        RC_e3355f6b7ba3051c4a4a9a00634d68d0Inner.UniqueId = "e3355f6b-7ba3-051c-4a4a-9a00634d68d0";
        var RC_e3355f6b7ba3051c4a4a9a00634d68d0 = RC_e3355f6b7ba3051c4a4a9a00634d68d0Inner;
        RC_e3355f6b7ba3051c4a4a9a00634d68d0.init();
    }
});

define("OutSystemsMaps.model$RL_55aa3adfaada82d015c1dcd249b8e8ce", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_e3355f6b7ba3051c4a4a9a00634d68d0"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_55aa3adfaada82d015c1dcd249b8e8ce extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_e3355f6b7ba3051c4a4a9a00634d68d0;
        }

    }

    OutSystemsMapsModel.RL_55aa3adfaada82d015c1dcd249b8e8ce = RL_55aa3adfaada82d015c1dcd249b8e8ce;

});

define("OutSystemsMaps.model$RL_592eaf1c99729dad11d69819a0523b2c", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_2afa68ebeade43c502f553bf208d417d"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_592eaf1c99729dad11d69819a0523b2c extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_2afa68ebeade43c502f553bf208d417d;
        }

    }

    OutSystemsMapsModel.RL_592eaf1c99729dad11d69819a0523b2c = RL_592eaf1c99729dad11d69819a0523b2c;

});

define("OutSystemsMaps.model$ST_c84e2ea85c3f77e3b083b2b79806c17aStructure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_c84e2ea85c3f77e3b083b2b79806c17aStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("MaxIntensity", "maxIntensityAttr", "MaxIntensity", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true),
                    this.attr("Opacity", "opacityAttr", "Opacity", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return (new OS.DataTypes.Decimal("0.6"));
                    }, true),
                    this.attr("Radius", "radiusAttr", "Radius", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 3;
                    }, true),
                    this.attr("DissipateOnZoom", "dissipateOnZoomAttr", "DissipateOnZoom", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, true),
                    this.attr("Gradient", "gradientAttr", "Gradient", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
                    }, true, OS.DataTypes.TextList)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_c84e2ea85c3f77e3b083b2b79806c17aStructure = ST_c84e2ea85c3f77e3b083b2b79806c17aStructureInner;

        var ST_c84e2ea85c3f77e3b083b2b79806c17aStructure = ST_c84e2ea85c3f77e3b083b2b79806c17aStructureInner;
        ST_c84e2ea85c3f77e3b083b2b79806c17aStructure.init();
    }
});

define("OutSystemsMaps.model$RC_59608f6fdf263bd270d8edd0a1db0f3c", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_c84e2ea85c3f77e3b083b2b79806c17aStructure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_59608f6fdf263bd270d8edd0a1db0f3cInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("OptionalHeatmapLayerConfigs", "optionalHeatmapLayerConfigsAttr", "OptionalHeatmapLayerConfigs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_c84e2ea85c3f77e3b083b2b79806c17aStructure());
                    }, true, OutSystemsMapsModel.ST_c84e2ea85c3f77e3b083b2b79806c17aStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_59608f6fdf263bd270d8edd0a1db0f3c(new RC_59608f6fdf263bd270d8edd0a1db0f3c.RecordClass({
                    optionalHeatmapLayerConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_59608f6fdf263bd270d8edd0a1db0f3c = RC_59608f6fdf263bd270d8edd0a1db0f3cInner;

        RC_59608f6fdf263bd270d8edd0a1db0f3cInner._isAnonymousRecord = true;
        RC_59608f6fdf263bd270d8edd0a1db0f3cInner.UniqueId = "59608f6f-df26-3bd2-70d8-edd0a1db0f3c";
        var RC_59608f6fdf263bd270d8edd0a1db0f3c = RC_59608f6fdf263bd270d8edd0a1db0f3cInner;
        RC_59608f6fdf263bd270d8edd0a1db0f3c.init();
    }
});

define("OutSystemsMaps.model$RC_992836b5ddde04d0d91f0c87e7233524", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_0df198ce2d64e9aa6113403a9d3f7309EntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_992836b5ddde04d0d91f0c87e7233524Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("MapType", "mapTypeAttr", "MapType", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.EN_0df198ce2d64e9aa6113403a9d3f7309EntityRecord());
                    }, true, OutSystemsMapsModel.EN_0df198ce2d64e9aa6113403a9d3f7309EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_992836b5ddde04d0d91f0c87e7233524(new RC_992836b5ddde04d0d91f0c87e7233524.RecordClass({
                    mapTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_992836b5ddde04d0d91f0c87e7233524 = RC_992836b5ddde04d0d91f0c87e7233524Inner;

        RC_992836b5ddde04d0d91f0c87e7233524Inner._isAnonymousRecord = true;
        RC_992836b5ddde04d0d91f0c87e7233524Inner.UniqueId = "992836b5-ddde-04d0-d91f-0c87e7233524";
        var RC_992836b5ddde04d0d91f0c87e7233524 = RC_992836b5ddde04d0d91f0c87e7233524Inner;
        RC_992836b5ddde04d0d91f0c87e7233524.init();
    }
});

define("OutSystemsMaps.model$RL_5982f8687c5ac946ae2cbaf319e43b9f", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_992836b5ddde04d0d91f0c87e7233524"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_5982f8687c5ac946ae2cbaf319e43b9f extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_992836b5ddde04d0d91f0c87e7233524;
        }

    }

    OutSystemsMapsModel.RL_5982f8687c5ac946ae2cbaf319e43b9f = RL_5982f8687c5ac946ae2cbaf319e43b9f;

});

define("OutSystemsMaps.model$RL_59a4fbf5e364b5bb932d107181ed2455", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_48d7c166849f4c26288a543a51543b8d"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_59a4fbf5e364b5bb932d107181ed2455 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_48d7c166849f4c26288a543a51543b8d;
        }

    }

    OutSystemsMapsModel.RL_59a4fbf5e364b5bb932d107181ed2455 = RL_59a4fbf5e364b5bb932d107181ed2455;

});

define("OutSystemsMaps.model$RL_5a159bcaeb1a211c3c97752d6b3cfae5", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_2bb06e37aea9715ba999f70106cf37a5Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_5a159bcaeb1a211c3c97752d6b3cfae5 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_2bb06e37aea9715ba999f70106cf37a5Structure;
        }

    }

    OutSystemsMapsModel.RL_5a159bcaeb1a211c3c97752d6b3cfae5 = RL_5a159bcaeb1a211c3c97752d6b3cfae5;

});

define("OutSystemsMaps.model$ST_5a7ef7acf3b11e0c41074aefa2466f75Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_5a7ef7acf3b11e0c41074aefa2466f75StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Location", "locationAttr", "location", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "42.3517926,-71.0467845";
                    }, true),
                    this.attr("IconURL", "iconURLAttr", "iconUrl", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("AdvancedFormat", "advancedFormatAttr", "advancedFormat", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_5a7ef7acf3b11e0c41074aefa2466f75Structure = ST_5a7ef7acf3b11e0c41074aefa2466f75StructureInner;

        var ST_5a7ef7acf3b11e0c41074aefa2466f75Structure = ST_5a7ef7acf3b11e0c41074aefa2466f75StructureInner;
        ST_5a7ef7acf3b11e0c41074aefa2466f75Structure.init();
    }
});

define("OutSystemsMaps.model$ST_bbc1ca6a16af45dbf463953c280f2bf7Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_a0cdfbad52e32bc69efd7ec23c40fc2fStructure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_bbc1ca6a16af45dbf463953c280f2bf7StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("IconURL", "iconURLAttr", "IconURL", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("IconSize", "iconSizeAttr", "IconSize", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_a0cdfbad52e32bc69efd7ec23c40fc2fStructure());
                    }, true, OutSystemsMapsModel.ST_a0cdfbad52e32bc69efd7ec23c40fc2fStructure),
                    this.attr("Title", "titleAttr", "Title", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Label", "labelAttr", "Label", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("AllowDrag", "allowDragAttr", "AllowDrag", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_bbc1ca6a16af45dbf463953c280f2bf7Structure = ST_bbc1ca6a16af45dbf463953c280f2bf7StructureInner;

        var ST_bbc1ca6a16af45dbf463953c280f2bf7Structure = ST_bbc1ca6a16af45dbf463953c280f2bf7StructureInner;
        ST_bbc1ca6a16af45dbf463953c280f2bf7Structure.init();
    }
});

define("OutSystemsMaps.model$RC_dfb836f467b00be2b3ce838401b340cc", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_bbc1ca6a16af45dbf463953c280f2bf7Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_dfb836f467b00be2b3ce838401b340ccInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("OptionalPopupMarkerConfigs", "optionalPopupMarkerConfigsAttr", "OptionalPopupMarkerConfigs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_bbc1ca6a16af45dbf463953c280f2bf7Structure());
                    }, true, OutSystemsMapsModel.ST_bbc1ca6a16af45dbf463953c280f2bf7Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_dfb836f467b00be2b3ce838401b340cc(new RC_dfb836f467b00be2b3ce838401b340cc.RecordClass({
                    optionalPopupMarkerConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_dfb836f467b00be2b3ce838401b340cc = RC_dfb836f467b00be2b3ce838401b340ccInner;

        RC_dfb836f467b00be2b3ce838401b340ccInner._isAnonymousRecord = true;
        RC_dfb836f467b00be2b3ce838401b340ccInner.UniqueId = "dfb836f4-67b0-0be2-b3ce-838401b340cc";
        var RC_dfb836f467b00be2b3ce838401b340cc = RC_dfb836f467b00be2b3ce838401b340ccInner;
        RC_dfb836f467b00be2b3ce838401b340cc.init();
    }
});

define("OutSystemsMaps.model$RL_5c878fa9fbf73778d7e6e41024ae4f84", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_dfb836f467b00be2b3ce838401b340cc"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_5c878fa9fbf73778d7e6e41024ae4f84 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_dfb836f467b00be2b3ce838401b340cc;
        }

    }

    OutSystemsMapsModel.RL_5c878fa9fbf73778d7e6e41024ae4f84 = RL_5c878fa9fbf73778d7e6e41024ae4f84;

});

define("OutSystemsMaps.model$RL_5e5ee9ae0fcac1f142b0849f5cd91a60", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_003de7652ef70684ee40ecb9c31ff117"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_5e5ee9ae0fcac1f142b0849f5cd91a60 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_003de7652ef70684ee40ecb9c31ff117;
        }

    }

    OutSystemsMapsModel.RL_5e5ee9ae0fcac1f142b0849f5cd91a60 = RL_5e5ee9ae0fcac1f142b0849f5cd91a60;

});

define("OutSystemsMaps.model$ST_61db11323cabca5a5fb3b6c7b9d63842Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_3f16cd459ccd861deffd4483bc1bbac3Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_61db11323cabca5a5fb3b6c7b9d63842StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Internal_to_provider_drawingTools_configs", "internal_to_provider_drawingTools_configsAttr", "Internal_to_provider_drawingTools_configs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_3f16cd459ccd861deffd4483bc1bbac3Structure());
                    }, true, OutSystemsMapsModel.ST_3f16cd459ccd861deffd4483bc1bbac3Structure),
                    this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_61db11323cabca5a5fb3b6c7b9d63842Structure = ST_61db11323cabca5a5fb3b6c7b9d63842StructureInner;

        var ST_61db11323cabca5a5fb3b6c7b9d63842Structure = ST_61db11323cabca5a5fb3b6c7b9d63842StructureInner;
        ST_61db11323cabca5a5fb3b6c7b9d63842Structure.init();
    }
});

define("OutSystemsMaps.model$RL_61f987775598f16873dffb86d0b27a55", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_51ef6a78944132edc56aa7bf7c4ea240Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_61f987775598f16873dffb86d0b27a55 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_51ef6a78944132edc56aa7bf7c4ea240Structure;
        }

    }

    OutSystemsMapsModel.RL_61f987775598f16873dffb86d0b27a55 = RL_61f987775598f16873dffb86d0b27a55;

});

define("OutSystemsMaps.model$RL_62008a3a72717059889cf2557d83f9e8", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_21369035d43ec8805ca548830e8c3c98"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_62008a3a72717059889cf2557d83f9e8 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_21369035d43ec8805ca548830e8c3c98;
        }

    }

    OutSystemsMapsModel.RL_62008a3a72717059889cf2557d83f9e8 = RL_62008a3a72717059889cf2557d83f9e8;

});

define("OutSystemsMaps.model$RL_624b2d57a77bb97d27ae6a8a9d8e8ee6", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_3d151c63adf137bd3c85eaa462bbbe0c"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_624b2d57a77bb97d27ae6a8a9d8e8ee6 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_3d151c63adf137bd3c85eaa462bbbe0c;
        }

    }

    OutSystemsMapsModel.RL_624b2d57a77bb97d27ae6a8a9d8e8ee6 = RL_624b2d57a77bb97d27ae6a8a9d8e8ee6;

});

define("OutSystemsMaps.model$EN_79a82b77f95346f2348912e0d4ee0bf1EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class EN_79a82b77f95346f2348912e0d4ee0bf1EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Order", "orderAttr", "Order", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.EN_79a82b77f95346f2348912e0d4ee0bf1EntityRecord = EN_79a82b77f95346f2348912e0d4ee0bf1EntityRecordInner;

        var EN_79a82b77f95346f2348912e0d4ee0bf1EntityRecord = EN_79a82b77f95346f2348912e0d4ee0bf1EntityRecordInner;
        EN_79a82b77f95346f2348912e0d4ee0bf1EntityRecord.init();
    }
});

define("OutSystemsMaps.model$RC_a9d171af5978fe3e4b7ef9f38c0c5a39", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_79a82b77f95346f2348912e0d4ee0bf1EntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_a9d171af5978fe3e4b7ef9f38c0c5a39Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Verbosity", "verbosityAttr", "Verbosity", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.EN_79a82b77f95346f2348912e0d4ee0bf1EntityRecord());
                    }, true, OutSystemsMapsModel.EN_79a82b77f95346f2348912e0d4ee0bf1EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_a9d171af5978fe3e4b7ef9f38c0c5a39(new RC_a9d171af5978fe3e4b7ef9f38c0c5a39.RecordClass({
                    verbosityAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_a9d171af5978fe3e4b7ef9f38c0c5a39 = RC_a9d171af5978fe3e4b7ef9f38c0c5a39Inner;

        RC_a9d171af5978fe3e4b7ef9f38c0c5a39Inner._isAnonymousRecord = true;
        RC_a9d171af5978fe3e4b7ef9f38c0c5a39Inner.UniqueId = "a9d171af-5978-fe3e-4b7e-f9f38c0c5a39";
        var RC_a9d171af5978fe3e4b7ef9f38c0c5a39 = RC_a9d171af5978fe3e4b7ef9f38c0c5a39Inner;
        RC_a9d171af5978fe3e4b7ef9f38c0c5a39.init();
    }
});

define("OutSystemsMaps.model$RL_62d317376210e901ee40f919c9f80100", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_a9d171af5978fe3e4b7ef9f38c0c5a39"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_62d317376210e901ee40f919c9f80100 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_a9d171af5978fe3e4b7ef9f38c0c5a39;
        }

    }

    OutSystemsMapsModel.RL_62d317376210e901ee40f919c9f80100 = RL_62d317376210e901ee40f919c9f80100;

});

define("OutSystemsMaps.model$RL_641ffd2e0663341a460be77463e186bb", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_b2c05afcf4810ad0d4384a01306bb0f3Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_641ffd2e0663341a460be77463e186bb extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_b2c05afcf4810ad0d4384a01306bb0f3Structure;
        }

    }

    OutSystemsMapsModel.RL_641ffd2e0663341a460be77463e186bb = RL_641ffd2e0663341a460be77463e186bb;

});

define("OutSystemsMaps.model$RL_65a208a4b9c539b70f4154cb275ecc23", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_0cc9882276464f8a42abc2516db92c70"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_65a208a4b9c539b70f4154cb275ecc23 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_0cc9882276464f8a42abc2516db92c70;
        }

    }

    OutSystemsMapsModel.RL_65a208a4b9c539b70f4154cb275ecc23 = RL_65a208a4b9c539b70f4154cb275ecc23;

});

define("OutSystemsMaps.model$RC_6633adb48f346ff9147637b286666408", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_120b6e3e471666b0ae15ac3a8f34340fEntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_6633adb48f346ff9147637b286666408Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("LogType", "logTypeAttr", "LogType", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.EN_120b6e3e471666b0ae15ac3a8f34340fEntityRecord());
                    }, true, OutSystemsMapsModel.EN_120b6e3e471666b0ae15ac3a8f34340fEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_6633adb48f346ff9147637b286666408(new RC_6633adb48f346ff9147637b286666408.RecordClass({
                    logTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_6633adb48f346ff9147637b286666408 = RC_6633adb48f346ff9147637b286666408Inner;

        RC_6633adb48f346ff9147637b286666408Inner._isAnonymousRecord = true;
        RC_6633adb48f346ff9147637b286666408Inner.UniqueId = "6633adb4-8f34-6ff9-1476-37b286666408";
        var RC_6633adb48f346ff9147637b286666408 = RC_6633adb48f346ff9147637b286666408Inner;
        RC_6633adb48f346ff9147637b286666408.init();
    }
});

define("OutSystemsMaps.model$EN_66bd367690762fecfd8fe2f2e4080f5dEntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class EN_66bd367690762fecfd8fe2f2e4080f5dEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_66bd367690762fecfd8fe2f2e4080f5dEntityRecord(new EN_66bd367690762fecfd8fe2f2e4080f5dEntityRecord.RecordClass({
                    idAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.EN_66bd367690762fecfd8fe2f2e4080f5dEntityRecord = EN_66bd367690762fecfd8fe2f2e4080f5dEntityRecordInner;

        var EN_66bd367690762fecfd8fe2f2e4080f5dEntityRecord = EN_66bd367690762fecfd8fe2f2e4080f5dEntityRecordInner;
        EN_66bd367690762fecfd8fe2f2e4080f5dEntityRecord.init();
    }
});

define("OutSystemsMaps.model$RL_6897c0b9a465b6b8e75080159ed1a0ba", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_120b6e3e471666b0ae15ac3a8f34340fEntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_6897c0b9a465b6b8e75080159ed1a0ba extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.EN_120b6e3e471666b0ae15ac3a8f34340fEntityRecord;
        }

    }

    OutSystemsMapsModel.RL_6897c0b9a465b6b8e75080159ed1a0ba = RL_6897c0b9a465b6b8e75080159ed1a0ba;

});

define("OutSystemsMaps.model$RC_68b38ef52a6c43d6a00c9748c6ced1ca", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_f121435b3edb481ee03ab7ef58e5b805Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_68b38ef52a6c43d6a00c9748c6ced1caInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Internal_to_provider_drawMarker_configs", "internal_to_provider_drawMarker_configsAttr", "Internal_to_provider_drawMarker_configs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_f121435b3edb481ee03ab7ef58e5b805Structure());
                    }, true, OutSystemsMapsModel.ST_f121435b3edb481ee03ab7ef58e5b805Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_68b38ef52a6c43d6a00c9748c6ced1ca(new RC_68b38ef52a6c43d6a00c9748c6ced1ca.RecordClass({
                    internal_to_provider_drawMarker_configsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_68b38ef52a6c43d6a00c9748c6ced1ca = RC_68b38ef52a6c43d6a00c9748c6ced1caInner;

        RC_68b38ef52a6c43d6a00c9748c6ced1caInner._isAnonymousRecord = true;
        RC_68b38ef52a6c43d6a00c9748c6ced1caInner.UniqueId = "68b38ef5-2a6c-43d6-a00c-9748c6ced1ca";
        var RC_68b38ef52a6c43d6a00c9748c6ced1ca = RC_68b38ef52a6c43d6a00c9748c6ced1caInner;
        RC_68b38ef52a6c43d6a00c9748c6ced1ca.init();
    }
});

define("OutSystemsMaps.model$RL_699844e1a84f1877f4a4a9076716df33", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_e5ca0002e0338a827923cc311de3f95cEntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_699844e1a84f1877f4a4a9076716df33 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.EN_e5ca0002e0338a827923cc311de3f95cEntityRecord;
        }

    }

    OutSystemsMapsModel.RL_699844e1a84f1877f4a4a9076716df33 = RL_699844e1a84f1877f4a4a9076716df33;

});

define("OutSystemsMaps.model$RL_69bc672632207b6ab7be38e5bf1c3e72", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_499414721b608cf3d3b8f99fae961f52"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_69bc672632207b6ab7be38e5bf1c3e72 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_499414721b608cf3d3b8f99fae961f52;
        }

    }

    OutSystemsMapsModel.RL_69bc672632207b6ab7be38e5bf1c3e72 = RL_69bc672632207b6ab7be38e5bf1c3e72;

});

define("OutSystemsMaps.model$RL_6b78ac86ffea73d6add846eee29f8299", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_61db11323cabca5a5fb3b6c7b9d63842Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_6b78ac86ffea73d6add846eee29f8299 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_61db11323cabca5a5fb3b6c7b9d63842Structure;
        }

    }

    OutSystemsMapsModel.RL_6b78ac86ffea73d6add846eee29f8299 = RL_6b78ac86ffea73d6add846eee29f8299;

});

define("OutSystemsMaps.model$RC_6beef079e29e7256385ac77b93f8d4bb", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_2f5ec17a6f7c3827bc8a33107ce38ec9Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_6beef079e29e7256385ac77b93f8d4bbInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Internal_Shape_Configs", "internal_Shape_ConfigsAttr", "Internal_Shape_Configs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_2f5ec17a6f7c3827bc8a33107ce38ec9Structure());
                    }, true, OutSystemsMapsModel.ST_2f5ec17a6f7c3827bc8a33107ce38ec9Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_6beef079e29e7256385ac77b93f8d4bb(new RC_6beef079e29e7256385ac77b93f8d4bb.RecordClass({
                    internal_Shape_ConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_6beef079e29e7256385ac77b93f8d4bb = RC_6beef079e29e7256385ac77b93f8d4bbInner;

        RC_6beef079e29e7256385ac77b93f8d4bbInner._isAnonymousRecord = true;
        RC_6beef079e29e7256385ac77b93f8d4bbInner.UniqueId = "6beef079-e29e-7256-385a-c77b93f8d4bb";
        var RC_6beef079e29e7256385ac77b93f8d4bb = RC_6beef079e29e7256385ac77b93f8d4bbInner;
        RC_6beef079e29e7256385ac77b93f8d4bb.init();
    }
});

define("OutSystemsMaps.model$RC_6e989af6610cf33b5d07b40b7d0a9306", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_5d8d0b250562ec29250400c2b0c3eb66Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_6e989af6610cf33b5d07b40b7d0a9306Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Internal_DrawCircle_Configs", "internal_DrawCircle_ConfigsAttr", "Internal_DrawCircle_Configs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_5d8d0b250562ec29250400c2b0c3eb66Structure());
                    }, true, OutSystemsMapsModel.ST_5d8d0b250562ec29250400c2b0c3eb66Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_6e989af6610cf33b5d07b40b7d0a9306(new RC_6e989af6610cf33b5d07b40b7d0a9306.RecordClass({
                    internal_DrawCircle_ConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_6e989af6610cf33b5d07b40b7d0a9306 = RC_6e989af6610cf33b5d07b40b7d0a9306Inner;

        RC_6e989af6610cf33b5d07b40b7d0a9306Inner._isAnonymousRecord = true;
        RC_6e989af6610cf33b5d07b40b7d0a9306Inner.UniqueId = "6e989af6-610c-f33b-5d07-b40b7d0a9306";
        var RC_6e989af6610cf33b5d07b40b7d0a9306 = RC_6e989af6610cf33b5d07b40b7d0a9306Inner;
        RC_6e989af6610cf33b5d07b40b7d0a9306.init();
    }
});

define("OutSystemsMaps.model$RC_7c2c1d82e3a31f1ec5d5faa260c033b7", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_86d2610e9625abf0ecb7241e6d8099fbStructure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_7c2c1d82e3a31f1ec5d5faa260c033b7Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Internal_to_provider_drawNotFilledShape_configs", "internal_to_provider_drawNotFilledShape_configsAttr", "Internal_to_provider_drawNotFilledShape_configs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_86d2610e9625abf0ecb7241e6d8099fbStructure());
                    }, true, OutSystemsMapsModel.ST_86d2610e9625abf0ecb7241e6d8099fbStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_7c2c1d82e3a31f1ec5d5faa260c033b7(new RC_7c2c1d82e3a31f1ec5d5faa260c033b7.RecordClass({
                    internal_to_provider_drawNotFilledShape_configsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_7c2c1d82e3a31f1ec5d5faa260c033b7 = RC_7c2c1d82e3a31f1ec5d5faa260c033b7Inner;

        RC_7c2c1d82e3a31f1ec5d5faa260c033b7Inner._isAnonymousRecord = true;
        RC_7c2c1d82e3a31f1ec5d5faa260c033b7Inner.UniqueId = "7c2c1d82-e3a3-1f1e-c5d5-faa260c033b7";
        var RC_7c2c1d82e3a31f1ec5d5faa260c033b7 = RC_7c2c1d82e3a31f1ec5d5faa260c033b7Inner;
        RC_7c2c1d82e3a31f1ec5d5faa260c033b7.init();
    }
});

define("OutSystemsMaps.model$RL_70b91cf4f57884d5f12e0e5564148afa", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_7c2c1d82e3a31f1ec5d5faa260c033b7"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_70b91cf4f57884d5f12e0e5564148afa extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_7c2c1d82e3a31f1ec5d5faa260c033b7;
        }

    }

    OutSystemsMapsModel.RL_70b91cf4f57884d5f12e0e5564148afa = RL_70b91cf4f57884d5f12e0e5564148afa;

});

define("OutSystemsMaps.model$EN_714295b6f712e509405abbf66debf617EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class EN_714295b6f712e509405abbf66debf617EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_714295b6f712e509405abbf66debf617EntityRecord(new EN_714295b6f712e509405abbf66debf617EntityRecord.RecordClass({
                    idAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.EN_714295b6f712e509405abbf66debf617EntityRecord = EN_714295b6f712e509405abbf66debf617EntityRecordInner;

        var EN_714295b6f712e509405abbf66debf617EntityRecord = EN_714295b6f712e509405abbf66debf617EntityRecordInner;
        EN_714295b6f712e509405abbf66debf617EntityRecord.init();
    }
});

define("OutSystemsMaps.model$RL_724d63befe29e32e7a03e32f4cd42851", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_2a64cd2fe4a253e65ea352434a6d389aEntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_724d63befe29e32e7a03e32f4cd42851 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.EN_2a64cd2fe4a253e65ea352434a6d389aEntityRecord;
        }

    }

    OutSystemsMapsModel.RL_724d63befe29e32e7a03e32f4cd42851 = RL_724d63befe29e32e7a03e32f4cd42851;

});

define("OutSystemsMaps.model$ST_7f069279f39dd7c7d2e7b5637a5b25c9Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_a0cdfbad52e32bc69efd7ec23c40fc2fStructure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_7f069279f39dd7c7d2e7b5637a5b25c9StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("IconURL", "iconURLAttr", "IconURL", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("IconSize", "iconSizeAttr", "IconSize", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_a0cdfbad52e32bc69efd7ec23c40fc2fStructure());
                    }, true, OutSystemsMapsModel.ST_a0cdfbad52e32bc69efd7ec23c40fc2fStructure),
                    this.attr("Title", "titleAttr", "Title", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Label", "labelAttr", "Label", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("AllowDrag", "allowDragAttr", "AllowDrag", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_7f069279f39dd7c7d2e7b5637a5b25c9Structure = ST_7f069279f39dd7c7d2e7b5637a5b25c9StructureInner;

        var ST_7f069279f39dd7c7d2e7b5637a5b25c9Structure = ST_7f069279f39dd7c7d2e7b5637a5b25c9StructureInner;
        ST_7f069279f39dd7c7d2e7b5637a5b25c9Structure.init();
    }
});

define("OutSystemsMaps.model$RL_72d1939a3c0be1d010649f2d48d51148", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_7f069279f39dd7c7d2e7b5637a5b25c9Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_72d1939a3c0be1d010649f2d48d51148 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_7f069279f39dd7c7d2e7b5637a5b25c9Structure;
        }

    }

    OutSystemsMapsModel.RL_72d1939a3c0be1d010649f2d48d51148 = RL_72d1939a3c0be1d010649f2d48d51148;

});

define("OutSystemsMaps.model$RC_f6c2f142af073709395973c555ac9ddc", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_ca9f1e36e4f2b1c8cabc0fd0c956ac77Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_f6c2f142af073709395973c555ac9ddcInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Points", "pointsAttr", "Points", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_ca9f1e36e4f2b1c8cabc0fd0c956ac77Structure());
                    }, true, OutSystemsMapsModel.ST_ca9f1e36e4f2b1c8cabc0fd0c956ac77Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_f6c2f142af073709395973c555ac9ddc(new RC_f6c2f142af073709395973c555ac9ddc.RecordClass({
                    pointsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_f6c2f142af073709395973c555ac9ddc = RC_f6c2f142af073709395973c555ac9ddcInner;

        RC_f6c2f142af073709395973c555ac9ddcInner._isAnonymousRecord = true;
        RC_f6c2f142af073709395973c555ac9ddcInner.UniqueId = "f6c2f142-af07-3709-3959-73c555ac9ddc";
        var RC_f6c2f142af073709395973c555ac9ddc = RC_f6c2f142af073709395973c555ac9ddcInner;
        RC_f6c2f142af073709395973c555ac9ddc.init();
    }
});

define("OutSystemsMaps.model$RL_73ee209cf0a78b1590dcc8cc4fe17b9e", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_f6c2f142af073709395973c555ac9ddc"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_73ee209cf0a78b1590dcc8cc4fe17b9e extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_f6c2f142af073709395973c555ac9ddc;
        }

    }

    OutSystemsMapsModel.RL_73ee209cf0a78b1590dcc8cc4fe17b9e = RL_73ee209cf0a78b1590dcc8cc4fe17b9e;

});

define("OutSystemsMaps.model$RC_c97612a27be85a5532e2b3b5ddfcfa27", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_7f069279f39dd7c7d2e7b5637a5b25c9Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_c97612a27be85a5532e2b3b5ddfcfa27Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("OptionalMarkerConfigs", "optionalMarkerConfigsAttr", "OptionalMarkerConfigs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_7f069279f39dd7c7d2e7b5637a5b25c9Structure());
                    }, true, OutSystemsMapsModel.ST_7f069279f39dd7c7d2e7b5637a5b25c9Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_c97612a27be85a5532e2b3b5ddfcfa27(new RC_c97612a27be85a5532e2b3b5ddfcfa27.RecordClass({
                    optionalMarkerConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_c97612a27be85a5532e2b3b5ddfcfa27 = RC_c97612a27be85a5532e2b3b5ddfcfa27Inner;

        RC_c97612a27be85a5532e2b3b5ddfcfa27Inner._isAnonymousRecord = true;
        RC_c97612a27be85a5532e2b3b5ddfcfa27Inner.UniqueId = "c97612a2-7be8-5a55-32e2-b3b5ddfcfa27";
        var RC_c97612a27be85a5532e2b3b5ddfcfa27 = RC_c97612a27be85a5532e2b3b5ddfcfa27Inner;
        RC_c97612a27be85a5532e2b3b5ddfcfa27.init();
    }
});

define("OutSystemsMaps.model$RL_745f22a3ada550afdd2fd2cbc8fe0793", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_c97612a27be85a5532e2b3b5ddfcfa27"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_745f22a3ada550afdd2fd2cbc8fe0793 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_c97612a27be85a5532e2b3b5ddfcfa27;
        }

    }

    OutSystemsMapsModel.RL_745f22a3ada550afdd2fd2cbc8fe0793 = RL_745f22a3ada550afdd2fd2cbc8fe0793;

});

define("OutSystemsMaps.model$ST_cdd94bc434e873b4d04598ac1e187543Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_cdd94bc434e873b4d04598ac1e187543StructureInner extends
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
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_cdd94bc434e873b4d04598ac1e187543Structure = ST_cdd94bc434e873b4d04598ac1e187543StructureInner;

        var ST_cdd94bc434e873b4d04598ac1e187543Structure = ST_cdd94bc434e873b4d04598ac1e187543StructureInner;
        ST_cdd94bc434e873b4d04598ac1e187543Structure.init();
    }
});

define("OutSystemsMaps.model$RC_7511ee1a86159a139a2f21acdabfee5b", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_cdd94bc434e873b4d04598ac1e187543Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_7511ee1a86159a139a2f21acdabfee5bInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ReturnMessage", "returnMessageAttr", "ReturnMessage", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_cdd94bc434e873b4d04598ac1e187543Structure());
                    }, true, OutSystemsMapsModel.ST_cdd94bc434e873b4d04598ac1e187543Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_7511ee1a86159a139a2f21acdabfee5b(new RC_7511ee1a86159a139a2f21acdabfee5b.RecordClass({
                    returnMessageAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_7511ee1a86159a139a2f21acdabfee5b = RC_7511ee1a86159a139a2f21acdabfee5bInner;

        RC_7511ee1a86159a139a2f21acdabfee5bInner._isAnonymousRecord = true;
        RC_7511ee1a86159a139a2f21acdabfee5bInner.UniqueId = "7511ee1a-8615-9a13-9a2f-21acdabfee5b";
        var RC_7511ee1a86159a139a2f21acdabfee5b = RC_7511ee1a86159a139a2f21acdabfee5bInner;
        RC_7511ee1a86159a139a2f21acdabfee5b.init();
    }
});

define("OutSystemsMaps.model$EN_d9c97e718205f8627d74b06df54e3543EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class EN_d9c97e718205f8627d74b06df54e3543EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_d9c97e718205f8627d74b06df54e3543EntityRecord(new EN_d9c97e718205f8627d74b06df54e3543EntityRecord.RecordClass({
                    idAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.EN_d9c97e718205f8627d74b06df54e3543EntityRecord = EN_d9c97e718205f8627d74b06df54e3543EntityRecordInner;

        var EN_d9c97e718205f8627d74b06df54e3543EntityRecord = EN_d9c97e718205f8627d74b06df54e3543EntityRecordInner;
        EN_d9c97e718205f8627d74b06df54e3543EntityRecord.init();
    }
});

define("OutSystemsMaps.model$RC_d18425d8035234c443ecbdefa0da8210", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_d9c97e718205f8627d74b06df54e3543EntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_d18425d8035234c443ecbdefa0da8210Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("MarkerEventTriggered", "markerEventTriggeredAttr", "MarkerEventTriggered", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.EN_d9c97e718205f8627d74b06df54e3543EntityRecord());
                    }, true, OutSystemsMapsModel.EN_d9c97e718205f8627d74b06df54e3543EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_d18425d8035234c443ecbdefa0da8210(new RC_d18425d8035234c443ecbdefa0da8210.RecordClass({
                    markerEventTriggeredAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_d18425d8035234c443ecbdefa0da8210 = RC_d18425d8035234c443ecbdefa0da8210Inner;

        RC_d18425d8035234c443ecbdefa0da8210Inner._isAnonymousRecord = true;
        RC_d18425d8035234c443ecbdefa0da8210Inner.UniqueId = "d18425d8-0352-34c4-43ec-bdefa0da8210";
        var RC_d18425d8035234c443ecbdefa0da8210 = RC_d18425d8035234c443ecbdefa0da8210Inner;
        RC_d18425d8035234c443ecbdefa0da8210.init();
    }
});

define("OutSystemsMaps.model$RL_768ac2f95f2438d51b1f08cac04338dd", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_d18425d8035234c443ecbdefa0da8210"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_768ac2f95f2438d51b1f08cac04338dd extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_d18425d8035234c443ecbdefa0da8210;
        }

    }

    OutSystemsMapsModel.RL_768ac2f95f2438d51b1f08cac04338dd = RL_768ac2f95f2438d51b1f08cac04338dd;

});

define("OutSystemsMaps.model$RC_7848ef17b87824c24f6e707b82dac222", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_9f8ac95fe4e47e327de12de1b56bed45Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_7848ef17b87824c24f6e707b82dac222Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Private_MarkerClusterer", "private_MarkerClustererAttr", "Private_MarkerClusterer", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_9f8ac95fe4e47e327de12de1b56bed45Structure());
                    }, true, OutSystemsMapsModel.ST_9f8ac95fe4e47e327de12de1b56bed45Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_7848ef17b87824c24f6e707b82dac222(new RC_7848ef17b87824c24f6e707b82dac222.RecordClass({
                    private_MarkerClustererAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_7848ef17b87824c24f6e707b82dac222 = RC_7848ef17b87824c24f6e707b82dac222Inner;

        RC_7848ef17b87824c24f6e707b82dac222Inner._isAnonymousRecord = true;
        RC_7848ef17b87824c24f6e707b82dac222Inner.UniqueId = "7848ef17-b878-24c2-4f6e-707b82dac222";
        var RC_7848ef17b87824c24f6e707b82dac222 = RC_7848ef17b87824c24f6e707b82dac222Inner;
        RC_7848ef17b87824c24f6e707b82dac222.init();
    }
});

define("OutSystemsMaps.model$RL_78b384ffc67b2b6c5ffe17e2f3a3c3b2", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_5a7ef7acf3b11e0c41074aefa2466f75Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_78b384ffc67b2b6c5ffe17e2f3a3c3b2 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_5a7ef7acf3b11e0c41074aefa2466f75Structure;
        }

    }

    OutSystemsMapsModel.RL_78b384ffc67b2b6c5ffe17e2f3a3c3b2 = RL_78b384ffc67b2b6c5ffe17e2f3a3c3b2;

});

define("OutSystemsMaps.model$ST_78d3133d124713193d703c2644ecd39bStructure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_5baae74ed57e3bb61180aff1dadec4e1Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_78d3133d124713193d703c2644ecd39bStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Height", "heightAttr", "Height", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Internal_to_provider_configs", "internal_to_provider_configsAttr", "Internal_to_provider_configs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_5baae74ed57e3bb61180aff1dadec4e1Structure());
                    }, true, OutSystemsMapsModel.ST_5baae74ed57e3bb61180aff1dadec4e1Structure),
                    this.attr("StaticMapURL", "staticMapURLAttr", "StaticMapURL", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_78d3133d124713193d703c2644ecd39bStructure = ST_78d3133d124713193d703c2644ecd39bStructureInner;

        var ST_78d3133d124713193d703c2644ecd39bStructure = ST_78d3133d124713193d703c2644ecd39bStructureInner;
        ST_78d3133d124713193d703c2644ecd39bStructure.init();
    }
});

define("OutSystemsMaps.model$RC_794e39fc977eff2817cb99ab6af38d57", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_d25262c67f1be04c1df274811b8c7ee4Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_794e39fc977eff2817cb99ab6af38d57Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Internal_to_provider_drawFilledShape_configs", "internal_to_provider_drawFilledShape_configsAttr", "Internal_to_provider_drawFilledShape_configs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_d25262c67f1be04c1df274811b8c7ee4Structure());
                    }, true, OutSystemsMapsModel.ST_d25262c67f1be04c1df274811b8c7ee4Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_794e39fc977eff2817cb99ab6af38d57(new RC_794e39fc977eff2817cb99ab6af38d57.RecordClass({
                    internal_to_provider_drawFilledShape_configsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_794e39fc977eff2817cb99ab6af38d57 = RC_794e39fc977eff2817cb99ab6af38d57Inner;

        RC_794e39fc977eff2817cb99ab6af38d57Inner._isAnonymousRecord = true;
        RC_794e39fc977eff2817cb99ab6af38d57Inner.UniqueId = "794e39fc-977e-ff28-17cb-99ab6af38d57";
        var RC_794e39fc977eff2817cb99ab6af38d57 = RC_794e39fc977eff2817cb99ab6af38d57Inner;
        RC_794e39fc977eff2817cb99ab6af38d57.init();
    }
});

define("OutSystemsMaps.model$RC_a7db230a655a3c54e1e9a992db69e805", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_707b1ead9a0d000606d8b9e0cca3c3f9Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_a7db230a655a3c54e1e9a992db69e805Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Internal_DrawPolygon_Configs", "internal_DrawPolygon_ConfigsAttr", "Internal_DrawPolygon_Configs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_707b1ead9a0d000606d8b9e0cca3c3f9Structure());
                    }, true, OutSystemsMapsModel.ST_707b1ead9a0d000606d8b9e0cca3c3f9Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_a7db230a655a3c54e1e9a992db69e805(new RC_a7db230a655a3c54e1e9a992db69e805.RecordClass({
                    internal_DrawPolygon_ConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_a7db230a655a3c54e1e9a992db69e805 = RC_a7db230a655a3c54e1e9a992db69e805Inner;

        RC_a7db230a655a3c54e1e9a992db69e805Inner._isAnonymousRecord = true;
        RC_a7db230a655a3c54e1e9a992db69e805Inner.UniqueId = "a7db230a-655a-3c54-e1e9-a992db69e805";
        var RC_a7db230a655a3c54e1e9a992db69e805 = RC_a7db230a655a3c54e1e9a992db69e805Inner;
        RC_a7db230a655a3c54e1e9a992db69e805.init();
    }
});

define("OutSystemsMaps.model$RL_7a74e72b910069480737293f8c18c808", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_a7db230a655a3c54e1e9a992db69e805"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_7a74e72b910069480737293f8c18c808 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_a7db230a655a3c54e1e9a992db69e805;
        }

    }

    OutSystemsMapsModel.RL_7a74e72b910069480737293f8c18c808 = RL_7a74e72b910069480737293f8c18c808;

});

define("OutSystemsMaps.model$RL_7abacef66f8c8ee19e972f9405ffd4ae", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_f85923824a33f65ded14770af5377402Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_7abacef66f8c8ee19e972f9405ffd4ae extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_f85923824a33f65ded14770af5377402Structure;
        }

    }

    OutSystemsMapsModel.RL_7abacef66f8c8ee19e972f9405ffd4ae = RL_7abacef66f8c8ee19e972f9405ffd4ae;

});

define("OutSystemsMaps.model$RL_7c4605673564471d88af1f24f7fd0a58", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_832344699c82a4f799a423f89bbe7297Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_7c4605673564471d88af1f24f7fd0a58 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_832344699c82a4f799a423f89bbe7297Structure;
        }

    }

    OutSystemsMapsModel.RL_7c4605673564471d88af1f24f7fd0a58 = RL_7c4605673564471d88af1f24f7fd0a58;

});

define("OutSystemsMaps.model$RL_7d169bd7c22bd4fc5143477f3a7cef9a", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_0e474756a4be14d378c73cd05f602bcdStructure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_7d169bd7c22bd4fc5143477f3a7cef9a extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_0e474756a4be14d378c73cd05f602bcdStructure;
        }

    }

    OutSystemsMapsModel.RL_7d169bd7c22bd4fc5143477f3a7cef9a = RL_7d169bd7c22bd4fc5143477f3a7cef9a;

});

define("OutSystemsMaps.model$RC_7d204fba4e0a277c99c007d6b7af7b72", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_61db11323cabca5a5fb3b6c7b9d63842Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_7d204fba4e0a277c99c007d6b7af7b72Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Internal_DrawingTools_Configs", "internal_DrawingTools_ConfigsAttr", "Internal_DrawingTools_Configs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_61db11323cabca5a5fb3b6c7b9d63842Structure());
                    }, true, OutSystemsMapsModel.ST_61db11323cabca5a5fb3b6c7b9d63842Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_7d204fba4e0a277c99c007d6b7af7b72(new RC_7d204fba4e0a277c99c007d6b7af7b72.RecordClass({
                    internal_DrawingTools_ConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_7d204fba4e0a277c99c007d6b7af7b72 = RC_7d204fba4e0a277c99c007d6b7af7b72Inner;

        RC_7d204fba4e0a277c99c007d6b7af7b72Inner._isAnonymousRecord = true;
        RC_7d204fba4e0a277c99c007d6b7af7b72Inner.UniqueId = "7d204fba-4e0a-277c-99c0-07d6b7af7b72";
        var RC_7d204fba4e0a277c99c007d6b7af7b72 = RC_7d204fba4e0a277c99c007d6b7af7b72Inner;
        RC_7d204fba4e0a277c99c007d6b7af7b72.init();
    }
});

define("OutSystemsMaps.model$ST_7e9e7e47a56960855c31bd37116d68abStructure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_0e474756a4be14d378c73cd05f602bcdStructure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_7e9e7e47a56960855c31bd37116d68abStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Center", "centerAttr", "Center", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_0e474756a4be14d378c73cd05f602bcdStructure());
                    }, true, OutSystemsMapsModel.ST_0e474756a4be14d378c73cd05f602bcdStructure),
                    this.attr("Radius", "radiusAttr", "Radius", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_7e9e7e47a56960855c31bd37116d68abStructure = ST_7e9e7e47a56960855c31bd37116d68abStructureInner;

        var ST_7e9e7e47a56960855c31bd37116d68abStructure = ST_7e9e7e47a56960855c31bd37116d68abStructureInner;
        ST_7e9e7e47a56960855c31bd37116d68abStructure.init();
    }
});

define("OutSystemsMaps.model$RL_80b90c5e418abe587bc307d0e11b1e76", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_2fa6ec01db1a6b09e6b59fa237f21deb"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_80b90c5e418abe587bc307d0e11b1e76 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_2fa6ec01db1a6b09e6b59fa237f21deb;
        }

    }

    OutSystemsMapsModel.RL_80b90c5e418abe587bc307d0e11b1e76 = RL_80b90c5e418abe587bc307d0e11b1e76;

});

define("OutSystemsMaps.model$RC_80e81fddca0089d3f29f81106c0bee34", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_480235a969b3f42eac91ad5813fe9bf9EntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_80e81fddca0089d3f29f81106c0bee34Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Zoom", "zoomAttr", "Zoom", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.EN_480235a969b3f42eac91ad5813fe9bf9EntityRecord());
                    }, true, OutSystemsMapsModel.EN_480235a969b3f42eac91ad5813fe9bf9EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_80e81fddca0089d3f29f81106c0bee34(new RC_80e81fddca0089d3f29f81106c0bee34.RecordClass({
                    zoomAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_80e81fddca0089d3f29f81106c0bee34 = RC_80e81fddca0089d3f29f81106c0bee34Inner;

        RC_80e81fddca0089d3f29f81106c0bee34Inner._isAnonymousRecord = true;
        RC_80e81fddca0089d3f29f81106c0bee34Inner.UniqueId = "80e81fdd-ca00-89d3-f29f-81106c0bee34";
        var RC_80e81fddca0089d3f29f81106c0bee34 = RC_80e81fddca0089d3f29f81106c0bee34Inner;
        RC_80e81fddca0089d3f29f81106c0bee34.init();
    }
});

define("OutSystemsMaps.model$RL_8145c3d769f4c9bbbe231760708670b3", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_499511b992975daa9639159d76f69e74"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_8145c3d769f4c9bbbe231760708670b3 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_499511b992975daa9639159d76f69e74;
        }

    }

    OutSystemsMapsModel.RL_8145c3d769f4c9bbbe231760708670b3 = RL_8145c3d769f4c9bbbe231760708670b3;

});

define("OutSystemsMaps.model$RL_815d85007a1f216f0067d3825a34d1a7", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_c84e2ea85c3f77e3b083b2b79806c17aStructure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_815d85007a1f216f0067d3825a34d1a7 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_c84e2ea85c3f77e3b083b2b79806c17aStructure;
        }

    }

    OutSystemsMapsModel.RL_815d85007a1f216f0067d3825a34d1a7 = RL_815d85007a1f216f0067d3825a34d1a7;

});

define("OutSystemsMaps.model$RC_bff46e9299d53c31f52181ed865bd729", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_5a7ef7acf3b11e0c41074aefa2466f75Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_bff46e9299d53c31f52181ed865bd729Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Marker", "markerAttr", "Marker", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_5a7ef7acf3b11e0c41074aefa2466f75Structure());
                    }, true, OutSystemsMapsModel.ST_5a7ef7acf3b11e0c41074aefa2466f75Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_bff46e9299d53c31f52181ed865bd729(new RC_bff46e9299d53c31f52181ed865bd729.RecordClass({
                    markerAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_bff46e9299d53c31f52181ed865bd729 = RC_bff46e9299d53c31f52181ed865bd729Inner;

        RC_bff46e9299d53c31f52181ed865bd729Inner._isAnonymousRecord = true;
        RC_bff46e9299d53c31f52181ed865bd729Inner.UniqueId = "bff46e92-99d5-3c31-f521-81ed865bd729";
        var RC_bff46e9299d53c31f52181ed865bd729 = RC_bff46e9299d53c31f52181ed865bd729Inner;
        RC_bff46e9299d53c31f52181ed865bd729.init();
    }
});

define("OutSystemsMaps.model$RL_8258d5e6cd03d65a1d22f35ea70607e2", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_bff46e9299d53c31f52181ed865bd729"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_8258d5e6cd03d65a1d22f35ea70607e2 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_bff46e9299d53c31f52181ed865bd729;
        }

    }

    OutSystemsMapsModel.RL_8258d5e6cd03d65a1d22f35ea70607e2 = RL_8258d5e6cd03d65a1d22f35ea70607e2;

});

define("OutSystemsMaps.model$RL_8261860bc5d9da142a31f73ae9b497b1", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_78d3133d124713193d703c2644ecd39bStructure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_8261860bc5d9da142a31f73ae9b497b1 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_78d3133d124713193d703c2644ecd39bStructure;
        }

    }

    OutSystemsMapsModel.RL_8261860bc5d9da142a31f73ae9b497b1 = RL_8261860bc5d9da142a31f73ae9b497b1;

});

define("OutSystemsMaps.model$RC_d186ae1becb56f86c126b4768e3f70d2", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_2a64cd2fe4a253e65ea352434a6d389aEntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_d186ae1becb56f86c126b4768e3f70d2Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("SearchTypes", "searchTypesAttr", "SearchTypes", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.EN_2a64cd2fe4a253e65ea352434a6d389aEntityRecord());
                    }, true, OutSystemsMapsModel.EN_2a64cd2fe4a253e65ea352434a6d389aEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_d186ae1becb56f86c126b4768e3f70d2(new RC_d186ae1becb56f86c126b4768e3f70d2.RecordClass({
                    searchTypesAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_d186ae1becb56f86c126b4768e3f70d2 = RC_d186ae1becb56f86c126b4768e3f70d2Inner;

        RC_d186ae1becb56f86c126b4768e3f70d2Inner._isAnonymousRecord = true;
        RC_d186ae1becb56f86c126b4768e3f70d2Inner.UniqueId = "d186ae1b-ecb5-6f86-c126-b4768e3f70d2";
        var RC_d186ae1becb56f86c126b4768e3f70d2 = RC_d186ae1becb56f86c126b4768e3f70d2Inner;
        RC_d186ae1becb56f86c126b4768e3f70d2.init();
    }
});

define("OutSystemsMaps.model$RL_848d56b8d953088a0f1dbc9b1b919b2e", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_d186ae1becb56f86c126b4768e3f70d2"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_848d56b8d953088a0f1dbc9b1b919b2e extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_d186ae1becb56f86c126b4768e3f70d2;
        }

    }

    OutSystemsMapsModel.RL_848d56b8d953088a0f1dbc9b1b919b2e = RL_848d56b8d953088a0f1dbc9b1b919b2e;

});

define("OutSystemsMaps.model$RC_afeb3af87221b535eb5e95ea10936666", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_78d3133d124713193d703c2644ecd39bStructure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_afeb3af87221b535eb5e95ea10936666Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Internal_Configs", "internal_ConfigsAttr", "Internal_Configs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_78d3133d124713193d703c2644ecd39bStructure());
                    }, true, OutSystemsMapsModel.ST_78d3133d124713193d703c2644ecd39bStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_afeb3af87221b535eb5e95ea10936666(new RC_afeb3af87221b535eb5e95ea10936666.RecordClass({
                    internal_ConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_afeb3af87221b535eb5e95ea10936666 = RC_afeb3af87221b535eb5e95ea10936666Inner;

        RC_afeb3af87221b535eb5e95ea10936666Inner._isAnonymousRecord = true;
        RC_afeb3af87221b535eb5e95ea10936666Inner.UniqueId = "afeb3af8-7221-b535-eb5e-95ea10936666";
        var RC_afeb3af87221b535eb5e95ea10936666 = RC_afeb3af87221b535eb5e95ea10936666Inner;
        RC_afeb3af87221b535eb5e95ea10936666.init();
    }
});

define("OutSystemsMaps.model$RL_84ec52f14adbfe6a8b7f3f76b0cd788d", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_afeb3af87221b535eb5e95ea10936666"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_84ec52f14adbfe6a8b7f3f76b0cd788d extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_afeb3af87221b535eb5e95ea10936666;
        }

    }

    OutSystemsMapsModel.RL_84ec52f14adbfe6a8b7f3f76b0cd788d = RL_84ec52f14adbfe6a8b7f3f76b0cd788d;

});

define("OutSystemsMaps.model$RL_868ad2e44e97acf04f8f693101df5e0d", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_91019cdb14b7c30434c481d431eb9bf2EntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_868ad2e44e97acf04f8f693101df5e0d extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.EN_91019cdb14b7c30434c481d431eb9bf2EntityRecord;
        }

    }

    OutSystemsMapsModel.RL_868ad2e44e97acf04f8f693101df5e0d = RL_868ad2e44e97acf04f8f693101df5e0d;

});

define("OutSystemsMaps.model$RC_86c442a46c095f494cab514734ffc71c", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_3f16cd459ccd861deffd4483bc1bbac3Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_86c442a46c095f494cab514734ffc71cInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Internal_to_provider_drawingTools_configs", "internal_to_provider_drawingTools_configsAttr", "Internal_to_provider_drawingTools_configs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_3f16cd459ccd861deffd4483bc1bbac3Structure());
                    }, true, OutSystemsMapsModel.ST_3f16cd459ccd861deffd4483bc1bbac3Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_86c442a46c095f494cab514734ffc71c(new RC_86c442a46c095f494cab514734ffc71c.RecordClass({
                    internal_to_provider_drawingTools_configsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_86c442a46c095f494cab514734ffc71c = RC_86c442a46c095f494cab514734ffc71cInner;

        RC_86c442a46c095f494cab514734ffc71cInner._isAnonymousRecord = true;
        RC_86c442a46c095f494cab514734ffc71cInner.UniqueId = "86c442a4-6c09-5f49-4cab-514734ffc71c";
        var RC_86c442a46c095f494cab514734ffc71c = RC_86c442a46c095f494cab514734ffc71cInner;
        RC_86c442a46c095f494cab514734ffc71c.init();
    }
});

define("OutSystemsMaps.model$RC_dc7b093401bf134dc8399c003cfc6bc0", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_03e1c2ea04d7f49cbc09fc7d6f681f53EntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_dc7b093401bf134dc8399c003cfc6bc0Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("FileLayerEvent", "fileLayerEventAttr", "FileLayerEvent", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.EN_03e1c2ea04d7f49cbc09fc7d6f681f53EntityRecord());
                    }, true, OutSystemsMapsModel.EN_03e1c2ea04d7f49cbc09fc7d6f681f53EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_dc7b093401bf134dc8399c003cfc6bc0(new RC_dc7b093401bf134dc8399c003cfc6bc0.RecordClass({
                    fileLayerEventAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_dc7b093401bf134dc8399c003cfc6bc0 = RC_dc7b093401bf134dc8399c003cfc6bc0Inner;

        RC_dc7b093401bf134dc8399c003cfc6bc0Inner._isAnonymousRecord = true;
        RC_dc7b093401bf134dc8399c003cfc6bc0Inner.UniqueId = "dc7b0934-01bf-134d-c839-9c003cfc6bc0";
        var RC_dc7b093401bf134dc8399c003cfc6bc0 = RC_dc7b093401bf134dc8399c003cfc6bc0Inner;
        RC_dc7b093401bf134dc8399c003cfc6bc0.init();
    }
});

define("OutSystemsMaps.model$RL_86fbed1618008cdc1ffb40212b2c9089", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_dc7b093401bf134dc8399c003cfc6bc0"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_86fbed1618008cdc1ffb40212b2c9089 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_dc7b093401bf134dc8399c003cfc6bc0;
        }

    }

    OutSystemsMapsModel.RL_86fbed1618008cdc1ffb40212b2c9089 = RL_86fbed1618008cdc1ffb40212b2c9089;

});

define("OutSystemsMaps.model$RL_8be1611c5d10b078eeb854159188fc0f", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_6633adb48f346ff9147637b286666408"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_8be1611c5d10b078eeb854159188fc0f extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_6633adb48f346ff9147637b286666408;
        }

    }

    OutSystemsMapsModel.RL_8be1611c5d10b078eeb854159188fc0f = RL_8be1611c5d10b078eeb854159188fc0f;

});

define("OutSystemsMaps.model$RL_8cb164b27a70600521e3160acb211c45", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_c2a46cf64d2acc4b38d805712495224cStructure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_8cb164b27a70600521e3160acb211c45 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_c2a46cf64d2acc4b38d805712495224cStructure;
        }

    }

    OutSystemsMapsModel.RL_8cb164b27a70600521e3160acb211c45 = RL_8cb164b27a70600521e3160acb211c45;

});

define("OutSystemsMaps.model$RL_8da67595edc06c9fadd5ecd2611bc025", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_7cd861eaa819851d6fba6d8150ed8cc1Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_8da67595edc06c9fadd5ecd2611bc025 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_7cd861eaa819851d6fba6d8150ed8cc1Structure;
        }

    }

    OutSystemsMapsModel.RL_8da67595edc06c9fadd5ecd2611bc025 = RL_8da67595edc06c9fadd5ecd2611bc025;

});

define("OutSystemsMaps.model$EN_8fe01ec881aca02efe3d0db98080a5e2EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class EN_8fe01ec881aca02efe3d0db98080a5e2EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_8fe01ec881aca02efe3d0db98080a5e2EntityRecord(new EN_8fe01ec881aca02efe3d0db98080a5e2EntityRecord.RecordClass({
                    idAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.EN_8fe01ec881aca02efe3d0db98080a5e2EntityRecord = EN_8fe01ec881aca02efe3d0db98080a5e2EntityRecordInner;

        var EN_8fe01ec881aca02efe3d0db98080a5e2EntityRecord = EN_8fe01ec881aca02efe3d0db98080a5e2EntityRecordInner;
        EN_8fe01ec881aca02efe3d0db98080a5e2EntityRecord.init();
    }
});

define("OutSystemsMaps.model$RL_93b6a88c9c2da7119b9466c342ffdb20", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_8d1df0845b207a514a87b62b89a2f0f9EntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_93b6a88c9c2da7119b9466c342ffdb20 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.EN_8d1df0845b207a514a87b62b89a2f0f9EntityRecord;
        }

    }

    OutSystemsMapsModel.RL_93b6a88c9c2da7119b9466c342ffdb20 = RL_93b6a88c9c2da7119b9466c342ffdb20;

});

define("OutSystemsMaps.model$RC_f1764d7c40e4f0543f1781c01f8cbcf5", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_8fe01ec881aca02efe3d0db98080a5e2EntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_f1764d7c40e4f0543f1781c01f8cbcf5Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("SearchPlacesEvent", "searchPlacesEventAttr", "SearchPlacesEvent", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.EN_8fe01ec881aca02efe3d0db98080a5e2EntityRecord());
                    }, true, OutSystemsMapsModel.EN_8fe01ec881aca02efe3d0db98080a5e2EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_f1764d7c40e4f0543f1781c01f8cbcf5(new RC_f1764d7c40e4f0543f1781c01f8cbcf5.RecordClass({
                    searchPlacesEventAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_f1764d7c40e4f0543f1781c01f8cbcf5 = RC_f1764d7c40e4f0543f1781c01f8cbcf5Inner;

        RC_f1764d7c40e4f0543f1781c01f8cbcf5Inner._isAnonymousRecord = true;
        RC_f1764d7c40e4f0543f1781c01f8cbcf5Inner.UniqueId = "f1764d7c-40e4-f054-3f17-81c01f8cbcf5";
        var RC_f1764d7c40e4f0543f1781c01f8cbcf5 = RC_f1764d7c40e4f0543f1781c01f8cbcf5Inner;
        RC_f1764d7c40e4f0543f1781c01f8cbcf5.init();
    }
});

define("OutSystemsMaps.model$RL_9521475d97508001d029535eefb032a9", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_f1764d7c40e4f0543f1781c01f8cbcf5"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_9521475d97508001d029535eefb032a9 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_f1764d7c40e4f0543f1781c01f8cbcf5;
        }

    }

    OutSystemsMapsModel.RL_9521475d97508001d029535eefb032a9 = RL_9521475d97508001d029535eefb032a9;

});

define("OutSystemsMaps.model$RL_96898bc542883716a6d11da0115bf734", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_b3f640c8758c66e2b436da510a8dfe3cStructure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_96898bc542883716a6d11da0115bf734 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_b3f640c8758c66e2b436da510a8dfe3cStructure;
        }

    }

    OutSystemsMapsModel.RL_96898bc542883716a6d11da0115bf734 = RL_96898bc542883716a6d11da0115bf734;

});

define("OutSystemsMaps.model$RC_96c340f5ac620f54674641c63eb91876", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_a0cdfbad52e32bc69efd7ec23c40fc2fStructure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_96c340f5ac620f54674641c63eb91876Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("IconSize", "iconSizeAttr", "IconSize", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_a0cdfbad52e32bc69efd7ec23c40fc2fStructure());
                    }, true, OutSystemsMapsModel.ST_a0cdfbad52e32bc69efd7ec23c40fc2fStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_96c340f5ac620f54674641c63eb91876(new RC_96c340f5ac620f54674641c63eb91876.RecordClass({
                    iconSizeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_96c340f5ac620f54674641c63eb91876 = RC_96c340f5ac620f54674641c63eb91876Inner;

        RC_96c340f5ac620f54674641c63eb91876Inner._isAnonymousRecord = true;
        RC_96c340f5ac620f54674641c63eb91876Inner.UniqueId = "96c340f5-ac62-0f54-6746-41c63eb91876";
        var RC_96c340f5ac620f54674641c63eb91876 = RC_96c340f5ac620f54674641c63eb91876Inner;
        RC_96c340f5ac620f54674641c63eb91876.init();
    }
});

define("OutSystemsMaps.model$EN_da8d5af471adea3d9064074b1a40d8c2EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class EN_da8d5af471adea3d9064074b1a40d8c2EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("MapType", "mapTypeAttr", "MapType", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
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

        OutSystemsMapsModel.EN_da8d5af471adea3d9064074b1a40d8c2EntityRecord = EN_da8d5af471adea3d9064074b1a40d8c2EntityRecordInner;

        var EN_da8d5af471adea3d9064074b1a40d8c2EntityRecord = EN_da8d5af471adea3d9064074b1a40d8c2EntityRecordInner;
        EN_da8d5af471adea3d9064074b1a40d8c2EntityRecord.init();
    }
});

define("OutSystemsMaps.model$RL_99fb577a5b3c7e3c7a449a321d07bd30", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_da8d5af471adea3d9064074b1a40d8c2EntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_99fb577a5b3c7e3c7a449a321d07bd30 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.EN_da8d5af471adea3d9064074b1a40d8c2EntityRecord;
        }

    }

    OutSystemsMapsModel.RL_99fb577a5b3c7e3c7a449a321d07bd30 = RL_99fb577a5b3c7e3c7a449a321d07bd30;

});

define("OutSystemsMaps.model$ST_9a87c036f8540c84242b92bb54609014Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_c2a46cf64d2acc4b38d805712495224cStructure", "OutSystemsMaps.model$ST_7f8762cb0c77867d9f9e3b82fd927c7bStructure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class ST_9a87c036f8540c84242b92bb54609014StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("AllowDrag", "allowDragAttr", "AllowDrag", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("AllowEdit", "allowEditAttr", "AllowEdit", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Stroke", "strokeAttr", "Stroke", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_c2a46cf64d2acc4b38d805712495224cStructure());
                    }, true, OutSystemsMapsModel.ST_c2a46cf64d2acc4b38d805712495224cStructure),
                    this.attr("Fill", "fillAttr", "Fill", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_7f8762cb0c77867d9f9e3b82fd927c7bStructure());
                    }, true, OutSystemsMapsModel.ST_7f8762cb0c77867d9f9e3b82fd927c7bStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.ST_9a87c036f8540c84242b92bb54609014Structure = ST_9a87c036f8540c84242b92bb54609014StructureInner;

        var ST_9a87c036f8540c84242b92bb54609014Structure = ST_9a87c036f8540c84242b92bb54609014StructureInner;
        ST_9a87c036f8540c84242b92bb54609014Structure.init();
    }
});

define("OutSystemsMaps.model$RL_9ab0c2094cafdfad27b30d8f4aaeb896", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_68b38ef52a6c43d6a00c9748c6ced1ca"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_9ab0c2094cafdfad27b30d8f4aaeb896 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_68b38ef52a6c43d6a00c9748c6ced1ca;
        }

    }

    OutSystemsMapsModel.RL_9ab0c2094cafdfad27b30d8f4aaeb896 = RL_9ab0c2094cafdfad27b30d8f4aaeb896;

});

define("OutSystemsMaps.model$RC_9c493adade9ae0a5806b7a20eb12f1e0", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_714295b6f712e509405abbf66debf617EntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_9c493adade9ae0a5806b7a20eb12f1e0Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("DirectionsProvider", "directionsProviderAttr", "DirectionsProvider", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.EN_714295b6f712e509405abbf66debf617EntityRecord());
                    }, true, OutSystemsMapsModel.EN_714295b6f712e509405abbf66debf617EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_9c493adade9ae0a5806b7a20eb12f1e0(new RC_9c493adade9ae0a5806b7a20eb12f1e0.RecordClass({
                    directionsProviderAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_9c493adade9ae0a5806b7a20eb12f1e0 = RC_9c493adade9ae0a5806b7a20eb12f1e0Inner;

        RC_9c493adade9ae0a5806b7a20eb12f1e0Inner._isAnonymousRecord = true;
        RC_9c493adade9ae0a5806b7a20eb12f1e0Inner.UniqueId = "9c493ada-de9a-e0a5-806b-7a20eb12f1e0";
        var RC_9c493adade9ae0a5806b7a20eb12f1e0 = RC_9c493adade9ae0a5806b7a20eb12f1e0Inner;
        RC_9c493adade9ae0a5806b7a20eb12f1e0.init();
    }
});

define("OutSystemsMaps.model$RC_df0786951d2357ea5f13ac02dccd68c2", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_df0786951d2357ea5f13ac02dccd68c2Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Lat", "latAttr", "Lat", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true),
                    this.attr("Lng", "lngAttr", "Lng", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsMapsModel.RC_df0786951d2357ea5f13ac02dccd68c2 = RC_df0786951d2357ea5f13ac02dccd68c2Inner;

        RC_df0786951d2357ea5f13ac02dccd68c2Inner._isAnonymousRecord = true;
        RC_df0786951d2357ea5f13ac02dccd68c2Inner.UniqueId = "df078695-1d23-57ea-5f13-ac02dccd68c2";
        var RC_df0786951d2357ea5f13ac02dccd68c2 = RC_df0786951d2357ea5f13ac02dccd68c2Inner;
        RC_df0786951d2357ea5f13ac02dccd68c2.init();
    }
});

define("OutSystemsMaps.model$RL_9cb21d90c5001a7c161a10beb1618d1c", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_df0786951d2357ea5f13ac02dccd68c2"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_9cb21d90c5001a7c161a10beb1618d1c extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_df0786951d2357ea5f13ac02dccd68c2;
        }

    }

    OutSystemsMapsModel.RL_9cb21d90c5001a7c161a10beb1618d1c = RL_9cb21d90c5001a7c161a10beb1618d1c;

});

define("OutSystemsMaps.model$RL_9d995883b5323069f271add818c11d4e", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_78fd8c130caeaf241d821392d1010014Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_9d995883b5323069f271add818c11d4e extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_78fd8c130caeaf241d821392d1010014Structure;
        }

    }

    OutSystemsMapsModel.RL_9d995883b5323069f271add818c11d4e = RL_9d995883b5323069f271add818c11d4e;

});

define("OutSystemsMaps.model$RC_c52fa927f09489f1c90f3a0526a1c8c9", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_f6b05f1cc2ae707d67f7da7ba2f4fd22EntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_c52fa927f09489f1c90f3a0526a1c8c9Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("DrawingToolsPosition", "drawingToolsPositionAttr", "DrawingToolsPosition", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.EN_f6b05f1cc2ae707d67f7da7ba2f4fd22EntityRecord());
                    }, true, OutSystemsMapsModel.EN_f6b05f1cc2ae707d67f7da7ba2f4fd22EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_c52fa927f09489f1c90f3a0526a1c8c9(new RC_c52fa927f09489f1c90f3a0526a1c8c9.RecordClass({
                    drawingToolsPositionAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_c52fa927f09489f1c90f3a0526a1c8c9 = RC_c52fa927f09489f1c90f3a0526a1c8c9Inner;

        RC_c52fa927f09489f1c90f3a0526a1c8c9Inner._isAnonymousRecord = true;
        RC_c52fa927f09489f1c90f3a0526a1c8c9Inner.UniqueId = "c52fa927-f094-89f1-c90f-3a0526a1c8c9";
        var RC_c52fa927f09489f1c90f3a0526a1c8c9 = RC_c52fa927f09489f1c90f3a0526a1c8c9Inner;
        RC_c52fa927f09489f1c90f3a0526a1c8c9.init();
    }
});

define("OutSystemsMaps.model$RL_9e18711d0e128678787e38cf96c062ee", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_c52fa927f09489f1c90f3a0526a1c8c9"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_9e18711d0e128678787e38cf96c062ee extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_c52fa927f09489f1c90f3a0526a1c8c9;
        }

    }

    OutSystemsMapsModel.RL_9e18711d0e128678787e38cf96c062ee = RL_9e18711d0e128678787e38cf96c062ee;

});

define("OutSystemsMaps.model$RL_9f824e61b67438726b0ca6d8a584e2cb", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_9c493adade9ae0a5806b7a20eb12f1e0"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_9f824e61b67438726b0ca6d8a584e2cb extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_9c493adade9ae0a5806b7a20eb12f1e0;
        }

    }

    OutSystemsMapsModel.RL_9f824e61b67438726b0ca6d8a584e2cb = RL_9f824e61b67438726b0ca6d8a584e2cb;

});

define("OutSystemsMaps.model$RL_a0d33d282a082e36edde3e445101c333", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_d609eacb476c603df8b92eb374da99faStructure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_a0d33d282a082e36edde3e445101c333 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_d609eacb476c603df8b92eb374da99faStructure;
        }

    }

    OutSystemsMapsModel.RL_a0d33d282a082e36edde3e445101c333 = RL_a0d33d282a082e36edde3e445101c333;

});

define("OutSystemsMaps.model$RC_a13c14b9ba27332cf1eb1f7147c42c92", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_2bb06e37aea9715ba999f70106cf37a5Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_a13c14b9ba27332cf1eb1f7147c42c92Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("OptionalFileLayerConfigs", "optionalFileLayerConfigsAttr", "OptionalFileLayerConfigs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_2bb06e37aea9715ba999f70106cf37a5Structure());
                    }, true, OutSystemsMapsModel.ST_2bb06e37aea9715ba999f70106cf37a5Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_a13c14b9ba27332cf1eb1f7147c42c92(new RC_a13c14b9ba27332cf1eb1f7147c42c92.RecordClass({
                    optionalFileLayerConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_a13c14b9ba27332cf1eb1f7147c42c92 = RC_a13c14b9ba27332cf1eb1f7147c42c92Inner;

        RC_a13c14b9ba27332cf1eb1f7147c42c92Inner._isAnonymousRecord = true;
        RC_a13c14b9ba27332cf1eb1f7147c42c92Inner.UniqueId = "a13c14b9-ba27-332c-f1eb-1f7147c42c92";
        var RC_a13c14b9ba27332cf1eb1f7147c42c92 = RC_a13c14b9ba27332cf1eb1f7147c42c92Inner;
        RC_a13c14b9ba27332cf1eb1f7147c42c92.init();
    }
});

define("OutSystemsMaps.model$RC_a4e8f80d0a21edea3a71318677a15130", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_7e9e7e47a56960855c31bd37116d68abStructure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_a4e8f80d0a21edea3a71318677a15130Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("CircleShape", "circleShapeAttr", "CircleShape", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_7e9e7e47a56960855c31bd37116d68abStructure());
                    }, true, OutSystemsMapsModel.ST_7e9e7e47a56960855c31bd37116d68abStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_a4e8f80d0a21edea3a71318677a15130(new RC_a4e8f80d0a21edea3a71318677a15130.RecordClass({
                    circleShapeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_a4e8f80d0a21edea3a71318677a15130 = RC_a4e8f80d0a21edea3a71318677a15130Inner;

        RC_a4e8f80d0a21edea3a71318677a15130Inner._isAnonymousRecord = true;
        RC_a4e8f80d0a21edea3a71318677a15130Inner.UniqueId = "a4e8f80d-0a21-edea-3a71-318677a15130";
        var RC_a4e8f80d0a21edea3a71318677a15130 = RC_a4e8f80d0a21edea3a71318677a15130Inner;
        RC_a4e8f80d0a21edea3a71318677a15130.init();
    }
});

define("OutSystemsMaps.model$RL_a6093ab8c4c3fe4e765d6d53e363d26f", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_87d89cf32a40d309845674355a1bd4e1Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_a6093ab8c4c3fe4e765d6d53e363d26f extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_87d89cf32a40d309845674355a1bd4e1Structure;
        }

    }

    OutSystemsMapsModel.RL_a6093ab8c4c3fe4e765d6d53e363d26f = RL_a6093ab8c4c3fe4e765d6d53e363d26f;

});

define("OutSystemsMaps.model$EN_bb81f40812568e1c8d85e64e62cfe06cEntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class EN_bb81f40812568e1c8d85e64e62cfe06cEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_bb81f40812568e1c8d85e64e62cfe06cEntityRecord(new EN_bb81f40812568e1c8d85e64e62cfe06cEntityRecord.RecordClass({
                    idAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.EN_bb81f40812568e1c8d85e64e62cfe06cEntityRecord = EN_bb81f40812568e1c8d85e64e62cfe06cEntityRecordInner;

        var EN_bb81f40812568e1c8d85e64e62cfe06cEntityRecord = EN_bb81f40812568e1c8d85e64e62cfe06cEntityRecordInner;
        EN_bb81f40812568e1c8d85e64e62cfe06cEntityRecord.init();
    }
});

define("OutSystemsMaps.model$RC_edb1f7bb91ddbc761736a4f9fe9ed955", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_bb81f40812568e1c8d85e64e62cfe06cEntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_edb1f7bb91ddbc761736a4f9fe9ed955Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ShapeEvent", "shapeEventAttr", "ShapeEvent", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.EN_bb81f40812568e1c8d85e64e62cfe06cEntityRecord());
                    }, true, OutSystemsMapsModel.EN_bb81f40812568e1c8d85e64e62cfe06cEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_edb1f7bb91ddbc761736a4f9fe9ed955(new RC_edb1f7bb91ddbc761736a4f9fe9ed955.RecordClass({
                    shapeEventAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_edb1f7bb91ddbc761736a4f9fe9ed955 = RC_edb1f7bb91ddbc761736a4f9fe9ed955Inner;

        RC_edb1f7bb91ddbc761736a4f9fe9ed955Inner._isAnonymousRecord = true;
        RC_edb1f7bb91ddbc761736a4f9fe9ed955Inner.UniqueId = "edb1f7bb-91dd-bc76-1736-a4f9fe9ed955";
        var RC_edb1f7bb91ddbc761736a4f9fe9ed955 = RC_edb1f7bb91ddbc761736a4f9fe9ed955Inner;
        RC_edb1f7bb91ddbc761736a4f9fe9ed955.init();
    }
});

define("OutSystemsMaps.model$RL_a63434523705ad5af804bdbeb8b187a0", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_edb1f7bb91ddbc761736a4f9fe9ed955"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_a63434523705ad5af804bdbeb8b187a0 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_edb1f7bb91ddbc761736a4f9fe9ed955;
        }

    }

    OutSystemsMapsModel.RL_a63434523705ad5af804bdbeb8b187a0 = RL_a63434523705ad5af804bdbeb8b187a0;

});

define("OutSystemsMaps.model$RC_d687bfbe104d17346737149645109738", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_30625b4ad0f3e10abf82b61ea58e8644Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_d687bfbe104d17346737149645109738Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("MarkerClusterer", "markerClustererAttr", "MarkerClusterer", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_30625b4ad0f3e10abf82b61ea58e8644Structure());
                    }, true, OutSystemsMapsModel.ST_30625b4ad0f3e10abf82b61ea58e8644Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_d687bfbe104d17346737149645109738(new RC_d687bfbe104d17346737149645109738.RecordClass({
                    markerClustererAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_d687bfbe104d17346737149645109738 = RC_d687bfbe104d17346737149645109738Inner;

        RC_d687bfbe104d17346737149645109738Inner._isAnonymousRecord = true;
        RC_d687bfbe104d17346737149645109738Inner.UniqueId = "d687bfbe-104d-1734-6737-149645109738";
        var RC_d687bfbe104d17346737149645109738 = RC_d687bfbe104d17346737149645109738Inner;
        RC_d687bfbe104d17346737149645109738.init();
    }
});

define("OutSystemsMaps.model$RL_ab79b46414538632e058912e7b4492f7", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_d687bfbe104d17346737149645109738"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_ab79b46414538632e058912e7b4492f7 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_d687bfbe104d17346737149645109738;
        }

    }

    OutSystemsMapsModel.RL_ab79b46414538632e058912e7b4492f7 = RL_ab79b46414538632e058912e7b4492f7;

});

define("OutSystemsMaps.model$RL_abd9c3facbfc80ae8d869a26e557cd73", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_e8edeefe38d8112c39e64ad89dac6f44EntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_abd9c3facbfc80ae8d869a26e557cd73 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.EN_e8edeefe38d8112c39e64ad89dac6f44EntityRecord;
        }

    }

    OutSystemsMapsModel.RL_abd9c3facbfc80ae8d869a26e557cd73 = RL_abd9c3facbfc80ae8d869a26e557cd73;

});

define("OutSystemsMaps.model$RL_ad31d0654019e3768ba1be8893ecd1bf", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_9df57e801e7478aaf703933c17abb4f6Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_ad31d0654019e3768ba1be8893ecd1bf extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_9df57e801e7478aaf703933c17abb4f6Structure;
        }

    }

    OutSystemsMapsModel.RL_ad31d0654019e3768ba1be8893ecd1bf = RL_ad31d0654019e3768ba1be8893ecd1bf;

});

define("OutSystemsMaps.model$RC_fd916ed3e439afbf2b3a8036c2de75ba", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_66bd367690762fecfd8fe2f2e4080f5dEntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_fd916ed3e439afbf2b3a8036c2de75baInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("TravelMode", "travelModeAttr", "TravelMode", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.EN_66bd367690762fecfd8fe2f2e4080f5dEntityRecord());
                    }, true, OutSystemsMapsModel.EN_66bd367690762fecfd8fe2f2e4080f5dEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_fd916ed3e439afbf2b3a8036c2de75ba(new RC_fd916ed3e439afbf2b3a8036c2de75ba.RecordClass({
                    travelModeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_fd916ed3e439afbf2b3a8036c2de75ba = RC_fd916ed3e439afbf2b3a8036c2de75baInner;

        RC_fd916ed3e439afbf2b3a8036c2de75baInner._isAnonymousRecord = true;
        RC_fd916ed3e439afbf2b3a8036c2de75baInner.UniqueId = "fd916ed3-e439-afbf-2b3a-8036c2de75ba";
        var RC_fd916ed3e439afbf2b3a8036c2de75ba = RC_fd916ed3e439afbf2b3a8036c2de75baInner;
        RC_fd916ed3e439afbf2b3a8036c2de75ba.init();
    }
});

define("OutSystemsMaps.model$RL_ae0575ea17d8ab65a3c4f4247d2336cf", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_fd916ed3e439afbf2b3a8036c2de75ba"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_ae0575ea17d8ab65a3c4f4247d2336cf extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_fd916ed3e439afbf2b3a8036c2de75ba;
        }

    }

    OutSystemsMapsModel.RL_ae0575ea17d8ab65a3c4f4247d2336cf = RL_ae0575ea17d8ab65a3c4f4247d2336cf;

});

define("OutSystemsMaps.model$RL_aed7bfc55da2af3c9f376ba85cda12e8", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_6beef079e29e7256385ac77b93f8d4bb"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_aed7bfc55da2af3c9f376ba85cda12e8 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_6beef079e29e7256385ac77b93f8d4bb;
        }

    }

    OutSystemsMapsModel.RL_aed7bfc55da2af3c9f376ba85cda12e8 = RL_aed7bfc55da2af3c9f376ba85cda12e8;

});

define("OutSystemsMaps.model$RL_b06b1ca48ce3e669f6d11bd7bb1c0609", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_794e39fc977eff2817cb99ab6af38d57"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_b06b1ca48ce3e669f6d11bd7bb1c0609 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_794e39fc977eff2817cb99ab6af38d57;
        }

    }

    OutSystemsMapsModel.RL_b06b1ca48ce3e669f6d11bd7bb1c0609 = RL_b06b1ca48ce3e669f6d11bd7bb1c0609;

});

define("OutSystemsMaps.model$RC_b32e755d03dd085a4b975b8c0c7d4454", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_da8d5af471adea3d9064074b1a40d8c2EntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_b32e755d03dd085a4b975b8c0c7d4454Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.EN_da8d5af471adea3d9064074b1a40d8c2EntityRecord());
                    }, true, OutSystemsMapsModel.EN_da8d5af471adea3d9064074b1a40d8c2EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_b32e755d03dd085a4b975b8c0c7d4454(new RC_b32e755d03dd085a4b975b8c0c7d4454.RecordClass({
                    typeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_b32e755d03dd085a4b975b8c0c7d4454 = RC_b32e755d03dd085a4b975b8c0c7d4454Inner;

        RC_b32e755d03dd085a4b975b8c0c7d4454Inner._isAnonymousRecord = true;
        RC_b32e755d03dd085a4b975b8c0c7d4454Inner.UniqueId = "b32e755d-03dd-085a-4b97-5b8c0c7d4454";
        var RC_b32e755d03dd085a4b975b8c0c7d4454 = RC_b32e755d03dd085a4b975b8c0c7d4454Inner;
        RC_b32e755d03dd085a4b975b8c0c7d4454.init();
    }
});

define("OutSystemsMaps.model$RL_b477a8b93d69afefa1626e94016c37d9", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_0df198ce2d64e9aa6113403a9d3f7309EntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_b477a8b93d69afefa1626e94016c37d9 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.EN_0df198ce2d64e9aa6113403a9d3f7309EntityRecord;
        }

    }

    OutSystemsMapsModel.RL_b477a8b93d69afefa1626e94016c37d9 = RL_b477a8b93d69afefa1626e94016c37d9;

});

define("OutSystemsMaps.model$RL_b481a3e1f57509338918c6099fc91208", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_7e9e7e47a56960855c31bd37116d68abStructure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_b481a3e1f57509338918c6099fc91208 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_7e9e7e47a56960855c31bd37116d68abStructure;
        }

    }

    OutSystemsMapsModel.RL_b481a3e1f57509338918c6099fc91208 = RL_b481a3e1f57509338918c6099fc91208;

});

define("OutSystemsMaps.model$RL_b6eda930a695560d8402033f001880cd", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_6e989af6610cf33b5d07b40b7d0a9306"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_b6eda930a695560d8402033f001880cd extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_6e989af6610cf33b5d07b40b7d0a9306;
        }

    }

    OutSystemsMapsModel.RL_b6eda930a695560d8402033f001880cd = RL_b6eda930a695560d8402033f001880cd;

});

define("OutSystemsMaps.model$RL_b91aa30dfbd36cc5a4f43ef2905eaa19", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_8fe01ec881aca02efe3d0db98080a5e2EntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_b91aa30dfbd36cc5a4f43ef2905eaa19 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.EN_8fe01ec881aca02efe3d0db98080a5e2EntityRecord;
        }

    }

    OutSystemsMapsModel.RL_b91aa30dfbd36cc5a4f43ef2905eaa19 = RL_b91aa30dfbd36cc5a4f43ef2905eaa19;

});

define("OutSystemsMaps.model$RL_b9b66c74d55f9ac4e9a13b2ed98048a5", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_86c442a46c095f494cab514734ffc71c"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_b9b66c74d55f9ac4e9a13b2ed98048a5 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_86c442a46c095f494cab514734ffc71c;
        }

    }

    OutSystemsMapsModel.RL_b9b66c74d55f9ac4e9a13b2ed98048a5 = RL_b9b66c74d55f9ac4e9a13b2ed98048a5;

});

define("OutSystemsMaps.model$RC_ba003b5de3d2da83898f81e428002fdb", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_9a87c036f8540c84242b92bb54609014Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_ba003b5de3d2da83898f81e428002fdbInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("OptionalCircleConfigs", "optionalCircleConfigsAttr", "OptionalCircleConfigs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_9a87c036f8540c84242b92bb54609014Structure());
                    }, true, OutSystemsMapsModel.ST_9a87c036f8540c84242b92bb54609014Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_ba003b5de3d2da83898f81e428002fdb(new RC_ba003b5de3d2da83898f81e428002fdb.RecordClass({
                    optionalCircleConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_ba003b5de3d2da83898f81e428002fdb = RC_ba003b5de3d2da83898f81e428002fdbInner;

        RC_ba003b5de3d2da83898f81e428002fdbInner._isAnonymousRecord = true;
        RC_ba003b5de3d2da83898f81e428002fdbInner.UniqueId = "ba003b5d-e3d2-da83-898f-81e428002fdb";
        var RC_ba003b5de3d2da83898f81e428002fdb = RC_ba003b5de3d2da83898f81e428002fdbInner;
        RC_ba003b5de3d2da83898f81e428002fdb.init();
    }
});

define("OutSystemsMaps.model$RL_bc2dda2039d1adf3e3d1dd13979b4dc2", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_27d8031b19e05deba9a159874d88bc75"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_bc2dda2039d1adf3e3d1dd13979b4dc2 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_27d8031b19e05deba9a159874d88bc75;
        }

    }

    OutSystemsMapsModel.RL_bc2dda2039d1adf3e3d1dd13979b4dc2 = RL_bc2dda2039d1adf3e3d1dd13979b4dc2;

});

define("OutSystemsMaps.model$RL_bf8419dbc0d495138fce5469408e1ae2", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_66bd367690762fecfd8fe2f2e4080f5dEntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_bf8419dbc0d495138fce5469408e1ae2 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.EN_66bd367690762fecfd8fe2f2e4080f5dEntityRecord;
        }

    }

    OutSystemsMapsModel.RL_bf8419dbc0d495138fce5469408e1ae2 = RL_bf8419dbc0d495138fce5469408e1ae2;

});

define("OutSystemsMaps.model$RL_c0fa3cff543c32f44aedaea106082dd0", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_86d2610e9625abf0ecb7241e6d8099fbStructure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_c0fa3cff543c32f44aedaea106082dd0 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_86d2610e9625abf0ecb7241e6d8099fbStructure;
        }

    }

    OutSystemsMapsModel.RL_c0fa3cff543c32f44aedaea106082dd0 = RL_c0fa3cff543c32f44aedaea106082dd0;

});

define("OutSystemsMaps.model$RL_c3bfb55b3eb1f9d65964545596508105", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_78b0cd1737b6725aac7ae45759769b93Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_c3bfb55b3eb1f9d65964545596508105 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_78b0cd1737b6725aac7ae45759769b93Structure;
        }

    }

    OutSystemsMapsModel.RL_c3bfb55b3eb1f9d65964545596508105 = RL_c3bfb55b3eb1f9d65964545596508105;

});

define("OutSystemsMaps.model$RL_c741a57cf499ba291dad3ca452914290", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_a13c14b9ba27332cf1eb1f7147c42c92"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_c741a57cf499ba291dad3ca452914290 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_a13c14b9ba27332cf1eb1f7147c42c92;
        }

    }

    OutSystemsMapsModel.RL_c741a57cf499ba291dad3ca452914290 = RL_c741a57cf499ba291dad3ca452914290;

});

define("OutSystemsMaps.model$RC_fc0e8940fcfc7ecaecb548b5cf8eab5d", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_51ef6a78944132edc56aa7bf7c4ea240Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_fc0e8940fcfc7ecaecb548b5cf8eab5dInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Internal_to_provider_marker_configs", "internal_to_provider_marker_configsAttr", "Internal_to_provider_marker_configs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_51ef6a78944132edc56aa7bf7c4ea240Structure());
                    }, true, OutSystemsMapsModel.ST_51ef6a78944132edc56aa7bf7c4ea240Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_fc0e8940fcfc7ecaecb548b5cf8eab5d(new RC_fc0e8940fcfc7ecaecb548b5cf8eab5d.RecordClass({
                    internal_to_provider_marker_configsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_fc0e8940fcfc7ecaecb548b5cf8eab5d = RC_fc0e8940fcfc7ecaecb548b5cf8eab5dInner;

        RC_fc0e8940fcfc7ecaecb548b5cf8eab5dInner._isAnonymousRecord = true;
        RC_fc0e8940fcfc7ecaecb548b5cf8eab5dInner.UniqueId = "fc0e8940-fcfc-7eca-ecb5-48b5cf8eab5d";
        var RC_fc0e8940fcfc7ecaecb548b5cf8eab5d = RC_fc0e8940fcfc7ecaecb548b5cf8eab5dInner;
        RC_fc0e8940fcfc7ecaecb548b5cf8eab5d.init();
    }
});

define("OutSystemsMaps.model$RL_cad5f90c9ef8be32dc11b1b88fcde135", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_fc0e8940fcfc7ecaecb548b5cf8eab5d"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_cad5f90c9ef8be32dc11b1b88fcde135 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_fc0e8940fcfc7ecaecb548b5cf8eab5d;
        }

    }

    OutSystemsMapsModel.RL_cad5f90c9ef8be32dc11b1b88fcde135 = RL_cad5f90c9ef8be32dc11b1b88fcde135;

});

define("OutSystemsMaps.model$RL_cc2748e8dc663faa1bc70171492e8ff9", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_80e81fddca0089d3f29f81106c0bee34"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_cc2748e8dc663faa1bc70171492e8ff9 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_80e81fddca0089d3f29f81106c0bee34;
        }

    }

    OutSystemsMapsModel.RL_cc2748e8dc663faa1bc70171492e8ff9 = RL_cc2748e8dc663faa1bc70171492e8ff9;

});

define("OutSystemsMaps.model$RL_cf834024cc0749abefb56f537d2bf6f7", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_7848ef17b87824c24f6e707b82dac222"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_cf834024cc0749abefb56f537d2bf6f7 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_7848ef17b87824c24f6e707b82dac222;
        }

    }

    OutSystemsMapsModel.RL_cf834024cc0749abefb56f537d2bf6f7 = RL_cf834024cc0749abefb56f537d2bf6f7;

});

define("OutSystemsMaps.model$RL_d082a22aaba2edcf587644f856c62a9a", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_be62cc31fbe4705834275960beeb55e2Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_d082a22aaba2edcf587644f856c62a9a extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_be62cc31fbe4705834275960beeb55e2Structure;
        }

    }

    OutSystemsMapsModel.RL_d082a22aaba2edcf587644f856c62a9a = RL_d082a22aaba2edcf587644f856c62a9a;

});

define("OutSystemsMaps.model$RL_d15db589ea4d1a0a05d21cda4e2f9db2", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_b32e755d03dd085a4b975b8c0c7d4454"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_d15db589ea4d1a0a05d21cda4e2f9db2 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_b32e755d03dd085a4b975b8c0c7d4454;
        }

    }

    OutSystemsMapsModel.RL_d15db589ea4d1a0a05d21cda4e2f9db2 = RL_d15db589ea4d1a0a05d21cda4e2f9db2;

});

define("OutSystemsMaps.model$RC_f5926d9764d9dfa431e4fc134e2e6a98", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_31cb630f5fdaa3aa4d3dbfd37cbf9e56Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore; {
        class RC_f5926d9764d9dfa431e4fc134e2e6a98Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("SearchArea", "searchAreaAttr", "SearchArea", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsMapsModel.ST_31cb630f5fdaa3aa4d3dbfd37cbf9e56Structure());
                    }, true, OutSystemsMapsModel.ST_31cb630f5fdaa3aa4d3dbfd37cbf9e56Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_f5926d9764d9dfa431e4fc134e2e6a98(new RC_f5926d9764d9dfa431e4fc134e2e6a98.RecordClass({
                    searchAreaAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsMapsModel.RC_f5926d9764d9dfa431e4fc134e2e6a98 = RC_f5926d9764d9dfa431e4fc134e2e6a98Inner;

        RC_f5926d9764d9dfa431e4fc134e2e6a98Inner._isAnonymousRecord = true;
        RC_f5926d9764d9dfa431e4fc134e2e6a98Inner.UniqueId = "f5926d97-64d9-dfa4-31e4-fc134e2e6a98";
        var RC_f5926d9764d9dfa431e4fc134e2e6a98 = RC_f5926d9764d9dfa431e4fc134e2e6a98Inner;
        RC_f5926d9764d9dfa431e4fc134e2e6a98.init();
    }
});

define("OutSystemsMaps.model$RL_d1a5d844f6dcfdf5c7e83e1504e1fd10", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_f5926d9764d9dfa431e4fc134e2e6a98"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_d1a5d844f6dcfdf5c7e83e1504e1fd10 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_f5926d9764d9dfa431e4fc134e2e6a98;
        }

    }

    OutSystemsMapsModel.RL_d1a5d844f6dcfdf5c7e83e1504e1fd10 = RL_d1a5d844f6dcfdf5c7e83e1504e1fd10;

});

define("OutSystemsMaps.model$RL_d34e57a0f3be3dcf5e6c2af78bbca9cd", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_b0933bf7957301c22e5d9229ad792ac0Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_d34e57a0f3be3dcf5e6c2af78bbca9cd extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_b0933bf7957301c22e5d9229ad792ac0Structure;
        }

    }

    OutSystemsMapsModel.RL_d34e57a0f3be3dcf5e6c2af78bbca9cd = RL_d34e57a0f3be3dcf5e6c2af78bbca9cd;

});

define("OutSystemsMaps.model$RL_d3d84b93751a23851d803ac48dd5ce8a", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_03e1c2ea04d7f49cbc09fc7d6f681f53EntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_d3d84b93751a23851d803ac48dd5ce8a extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.EN_03e1c2ea04d7f49cbc09fc7d6f681f53EntityRecord;
        }

    }

    OutSystemsMapsModel.RL_d3d84b93751a23851d803ac48dd5ce8a = RL_d3d84b93751a23851d803ac48dd5ce8a;

});

define("OutSystemsMaps.model$RL_d44d85a1d6577bb886dcdf90ca46f0a1", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_9f8ac95fe4e47e327de12de1b56bed45Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_d44d85a1d6577bb886dcdf90ca46f0a1 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_9f8ac95fe4e47e327de12de1b56bed45Structure;
        }

    }

    OutSystemsMapsModel.RL_d44d85a1d6577bb886dcdf90ca46f0a1 = RL_d44d85a1d6577bb886dcdf90ca46f0a1;

});

define("OutSystemsMaps.model$RL_d4f7893aa6d04f57395acc7bc2d61af1", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_2b877a58494bdf7ca89c3ea2061b88c8EntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_d4f7893aa6d04f57395acc7bc2d61af1 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.EN_2b877a58494bdf7ca89c3ea2061b88c8EntityRecord;
        }

    }

    OutSystemsMapsModel.RL_d4f7893aa6d04f57395acc7bc2d61af1 = RL_d4f7893aa6d04f57395acc7bc2d61af1;

});

define("OutSystemsMaps.model$RL_d66ace1346b52d1c825353e8e6242745", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_cdd94bc434e873b4d04598ac1e187543Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_d66ace1346b52d1c825353e8e6242745 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_cdd94bc434e873b4d04598ac1e187543Structure;
        }

    }

    OutSystemsMapsModel.RL_d66ace1346b52d1c825353e8e6242745 = RL_d66ace1346b52d1c825353e8e6242745;

});

define("OutSystemsMaps.model$RL_d8645c67ee74276888b02145980ad608", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_44bc2bbbb8592f02bc88a9fdf25bb951Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_d8645c67ee74276888b02145980ad608 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_44bc2bbbb8592f02bc88a9fdf25bb951Structure;
        }

    }

    OutSystemsMapsModel.RL_d8645c67ee74276888b02145980ad608 = RL_d8645c67ee74276888b02145980ad608;

});

define("OutSystemsMaps.model$RL_d8d4258d680fd287c9ccf9006eaca84a", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_ba003b5de3d2da83898f81e428002fdb"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_d8d4258d680fd287c9ccf9006eaca84a extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_ba003b5de3d2da83898f81e428002fdb;
        }

    }

    OutSystemsMapsModel.RL_d8d4258d680fd287c9ccf9006eaca84a = RL_d8d4258d680fd287c9ccf9006eaca84a;

});

define("OutSystemsMaps.model$RL_db517726bd3ccb8cadfd2631a2f814c6", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_fbded4e930a61a57761a37f0b1ea8d40Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_db517726bd3ccb8cadfd2631a2f814c6 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_fbded4e930a61a57761a37f0b1ea8d40Structure;
        }

    }

    OutSystemsMapsModel.RL_db517726bd3ccb8cadfd2631a2f814c6 = RL_db517726bd3ccb8cadfd2631a2f814c6;

});

define("OutSystemsMaps.model$RL_ddac7ae82399019b6b9f96af5f5696e1", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_96c340f5ac620f54674641c63eb91876"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_ddac7ae82399019b6b9f96af5f5696e1 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_96c340f5ac620f54674641c63eb91876;
        }

    }

    OutSystemsMapsModel.RL_ddac7ae82399019b6b9f96af5f5696e1 = RL_ddac7ae82399019b6b9f96af5f5696e1;

});

define("OutSystemsMaps.model$RL_e2de29528fcc4f4e1167813e7872d86f", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_d4721898ae8c007cd938074f575e2979Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_e2de29528fcc4f4e1167813e7872d86f extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_d4721898ae8c007cd938074f575e2979Structure;
        }

    }

    OutSystemsMapsModel.RL_e2de29528fcc4f4e1167813e7872d86f = RL_e2de29528fcc4f4e1167813e7872d86f;

});

define("OutSystemsMaps.model$RL_e2e6af3569ea21958dbed7a8ee6756e7", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_2f373495341cd6d1bc0753ee5c713769"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_e2e6af3569ea21958dbed7a8ee6756e7 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_2f373495341cd6d1bc0753ee5c713769;
        }

    }

    OutSystemsMapsModel.RL_e2e6af3569ea21958dbed7a8ee6756e7 = RL_e2e6af3569ea21958dbed7a8ee6756e7;

});

define("OutSystemsMaps.model$RL_e3387fd9387e17b451b57ed577025ebf", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_d9c97e718205f8627d74b06df54e3543EntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_e3387fd9387e17b451b57ed577025ebf extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.EN_d9c97e718205f8627d74b06df54e3543EntityRecord;
        }

    }

    OutSystemsMapsModel.RL_e3387fd9387e17b451b57ed577025ebf = RL_e3387fd9387e17b451b57ed577025ebf;

});

define("OutSystemsMaps.model$RL_e49abea873c895e5d77d216c9c1ed16d", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_a4e8f80d0a21edea3a71318677a15130"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_e49abea873c895e5d77d216c9c1ed16d extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_a4e8f80d0a21edea3a71318677a15130;
        }

    }

    OutSystemsMapsModel.RL_e49abea873c895e5d77d216c9c1ed16d = RL_e49abea873c895e5d77d216c9c1ed16d;

});

define("OutSystemsMaps.model$RL_e61a5d2bba7bf23acfe2713fb1292435", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_7d204fba4e0a277c99c007d6b7af7b72"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_e61a5d2bba7bf23acfe2713fb1292435 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_7d204fba4e0a277c99c007d6b7af7b72;
        }

    }

    OutSystemsMapsModel.RL_e61a5d2bba7bf23acfe2713fb1292435 = RL_e61a5d2bba7bf23acfe2713fb1292435;

});

define("OutSystemsMaps.model$RL_e9ed364f1c303a6ee96cf13dc37248d6", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_2d18bab1b72b271dc15dda249e871290"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_e9ed364f1c303a6ee96cf13dc37248d6 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_2d18bab1b72b271dc15dda249e871290;
        }

    }

    OutSystemsMapsModel.RL_e9ed364f1c303a6ee96cf13dc37248d6 = RL_e9ed364f1c303a6ee96cf13dc37248d6;

});

define("OutSystemsMaps.model$RL_eafeffd52cd05aba315766e9bebd595c", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_bbc1ca6a16af45dbf463953c280f2bf7Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_eafeffd52cd05aba315766e9bebd595c extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_bbc1ca6a16af45dbf463953c280f2bf7Structure;
        }

    }

    OutSystemsMapsModel.RL_eafeffd52cd05aba315766e9bebd595c = RL_eafeffd52cd05aba315766e9bebd595c;

});

define("OutSystemsMaps.model$RL_ebfb5fc205ec92d52bf5f3e7e64c17f3", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_49045fb6574dc7f29ee1f97116ecb1f6Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_ebfb5fc205ec92d52bf5f3e7e64c17f3 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_49045fb6574dc7f29ee1f97116ecb1f6Structure;
        }

    }

    OutSystemsMapsModel.RL_ebfb5fc205ec92d52bf5f3e7e64c17f3 = RL_ebfb5fc205ec92d52bf5f3e7e64c17f3;

});

define("OutSystemsMaps.model$RL_ede87d50813709aae83fc2c586956286", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_714295b6f712e509405abbf66debf617EntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_ede87d50813709aae83fc2c586956286 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.EN_714295b6f712e509405abbf66debf617EntityRecord;
        }

    }

    OutSystemsMapsModel.RL_ede87d50813709aae83fc2c586956286 = RL_ede87d50813709aae83fc2c586956286;

});

define("OutSystemsMaps.model$RL_f0d4cb9d719e2431c9c125448897412d", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_ddceb9a0506316e12e8b49777be81ba4EntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_f0d4cb9d719e2431c9c125448897412d extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.EN_ddceb9a0506316e12e8b49777be81ba4EntityRecord;
        }

    }

    OutSystemsMapsModel.RL_f0d4cb9d719e2431c9c125448897412d = RL_f0d4cb9d719e2431c9c125448897412d;

});

define("OutSystemsMaps.model$RL_f139a8c7f8b49c172c86e808970ca57e", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_f021741499f997a32540fab3dfcdbbfaStructure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_f139a8c7f8b49c172c86e808970ca57e extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_f021741499f997a32540fab3dfcdbbfaStructure;
        }

    }

    OutSystemsMapsModel.RL_f139a8c7f8b49c172c86e808970ca57e = RL_f139a8c7f8b49c172c86e808970ca57e;

});

define("OutSystemsMaps.model$RL_f165a17d72270107d404a3e103dad392", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_31c29444fafad199d1156f5f03b41f57"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_f165a17d72270107d404a3e103dad392 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_31c29444fafad199d1156f5f03b41f57;
        }

    }

    OutSystemsMapsModel.RL_f165a17d72270107d404a3e103dad392 = RL_f165a17d72270107d404a3e103dad392;

});

define("OutSystemsMaps.model$RL_f1a06962d87613eacc074d66c560648e", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_79a82b77f95346f2348912e0d4ee0bf1EntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_f1a06962d87613eacc074d66c560648e extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.EN_79a82b77f95346f2348912e0d4ee0bf1EntityRecord;
        }

    }

    OutSystemsMapsModel.RL_f1a06962d87613eacc074d66c560648e = RL_f1a06962d87613eacc074d66c560648e;

});

define("OutSystemsMaps.model$RL_f220b279cf20ca20ab24e3c41cf84e9a", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_227974ef92f7b64b18b95570fef9abe3"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_f220b279cf20ca20ab24e3c41cf84e9a extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_227974ef92f7b64b18b95570fef9abe3;
        }

    }

    OutSystemsMapsModel.RL_f220b279cf20ca20ab24e3c41cf84e9a = RL_f220b279cf20ca20ab24e3c41cf84e9a;

});

define("OutSystemsMaps.model$RL_f5728e3766cfe781fac6422ec4947dc0", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_1b25d6a078a2b54dc46acf86c7e61fc3"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_f5728e3766cfe781fac6422ec4947dc0 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_1b25d6a078a2b54dc46acf86c7e61fc3;
        }

    }

    OutSystemsMapsModel.RL_f5728e3766cfe781fac6422ec4947dc0 = RL_f5728e3766cfe781fac6422ec4947dc0;

});

define("OutSystemsMaps.model$RL_f6766102ea4dcc3665148ec35fb5cb78", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_3201d1384957542debf3cb5808f51144"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_f6766102ea4dcc3665148ec35fb5cb78 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_3201d1384957542debf3cb5808f51144;
        }

    }

    OutSystemsMapsModel.RL_f6766102ea4dcc3665148ec35fb5cb78 = RL_f6766102ea4dcc3665148ec35fb5cb78;

});

define("OutSystemsMaps.model$RL_f6b31eeeb08e8523093eacf779b2506c", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$EN_bb81f40812568e1c8d85e64e62cfe06cEntityRecord"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_f6b31eeeb08e8523093eacf779b2506c extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.EN_bb81f40812568e1c8d85e64e62cfe06cEntityRecord;
        }

    }

    OutSystemsMapsModel.RL_f6b31eeeb08e8523093eacf779b2506c = RL_f6b31eeeb08e8523093eacf779b2506c;

});

define("OutSystemsMaps.model$RL_f7d09f5b5f749dd750fd11763217536f", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_9a87c036f8540c84242b92bb54609014Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_f7d09f5b5f749dd750fd11763217536f extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_9a87c036f8540c84242b92bb54609014Structure;
        }

    }

    OutSystemsMapsModel.RL_f7d09f5b5f749dd750fd11763217536f = RL_f7d09f5b5f749dd750fd11763217536f;

});

define("OutSystemsMaps.model$RL_f8f20865cae1dc5bfcf574f1089add11", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_7511ee1a86159a139a2f21acdabfee5b"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_f8f20865cae1dc5bfcf574f1089add11 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_7511ee1a86159a139a2f21acdabfee5b;
        }

    }

    OutSystemsMapsModel.RL_f8f20865cae1dc5bfcf574f1089add11 = RL_f8f20865cae1dc5bfcf574f1089add11;

});

define("OutSystemsMaps.model$RL_fa4032a5fa1100d682b184e818a06718", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_d25262c67f1be04c1df274811b8c7ee4Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_fa4032a5fa1100d682b184e818a06718 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_d25262c67f1be04c1df274811b8c7ee4Structure;
        }

    }

    OutSystemsMapsModel.RL_fa4032a5fa1100d682b184e818a06718 = RL_fa4032a5fa1100d682b184e818a06718;

});

define("OutSystemsMaps.model$RL_fa6777019e2dac1120f9271e79b32cf7", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_2e794e9950648fb781740aa3223ba10d"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_fa6777019e2dac1120f9271e79b32cf7 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_2e794e9950648fb781740aa3223ba10d;
        }

    }

    OutSystemsMapsModel.RL_fa6777019e2dac1120f9271e79b32cf7 = RL_fa6777019e2dac1120f9271e79b32cf7;

});

define("OutSystemsMaps.model$RL_fbc6d3557cbab24aad22edbe8e93b6f4", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_1a3d048e7bc3b165cd3ddc45ef640b18Structure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_fbc6d3557cbab24aad22edbe8e93b6f4 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_1a3d048e7bc3b165cd3ddc45ef640b18Structure;
        }

    }

    OutSystemsMapsModel.RL_fbc6d3557cbab24aad22edbe8e93b6f4 = RL_fbc6d3557cbab24aad22edbe8e93b6f4;

});

define("OutSystemsMaps.model$RL_fc144e04b60a1ff1da29c01dfb2812e3", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$ST_7f8762cb0c77867d9f9e3b82fd927c7bStructure"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_fc144e04b60a1ff1da29c01dfb2812e3 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.ST_7f8762cb0c77867d9f9e3b82fd927c7bStructure;
        }

    }

    OutSystemsMapsModel.RL_fc144e04b60a1ff1da29c01dfb2812e3 = RL_fc144e04b60a1ff1da29c01dfb2812e3;

});

define("OutSystemsMaps.model$RL_ff93ddb23ad1a28af46fae42cf98bb8c", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.model$RC_59608f6fdf263bd270d8edd0a1db0f3c"], function(exports, OSRuntimeCore, OutSystemsMapsModel) {
    var OS = OSRuntimeCore;
    class RL_ff93ddb23ad1a28af46fae42cf98bb8c extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsMapsModel.RC_59608f6fdf263bd270d8edd0a1db0f3c;
        }

    }

    OutSystemsMapsModel.RL_ff93ddb23ad1a28af46fae42cf98bb8c = RL_ff93ddb23ad1a28af46fae42cf98bb8c;

});

define("OutSystemsMaps.model", ["exports", "@outsystems/runtime-core-js"], function(exports, OSRuntimeCore) {
    var OS = OSRuntimeCore;
    var OutSystemsMapsModel = exports;
    Object.defineProperty(OutSystemsMapsModel, "module", {
        get: function() {
            return OS.ApplicationInfo.getModules()["95bb31d1-f079-4fd6-ab2e-5c8326855aaa"];
        }
    });

    OutSystemsMapsModel.staticEntities = {};
    OutSystemsMapsModel.staticEntities.logType = {};
    var getLogTypeRecord = function(record) {
        return OutSystemsMapsModel.module.staticEntities["00f4d392-689e-4d22-b7e4-fb21b53c5072"][record];
    };
    Object.defineProperty(OutSystemsMapsModel.staticEntities.logType, "general", {
        get: function() {
            return "General";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.logType, "error", {
        get: function() {
            return "Error";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.logType, "debug", {
        get: function() {
            return "Debug";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.logType, "performance", {
        get: function() {
            return "Performance";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.logType, "warning", {
        get: function() {
            return "Warning";
        }
    });

    OutSystemsMapsModel.staticEntities.mapErrors = {};
    var getMapErrorsRecord = function(record) {
        return OutSystemsMapsModel.module.staticEntities["0ae015e4-c953-4e33-aec0-91674d05cbf5"][record];
    };
    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapErrors, "cFG_CantChangeParamsStaticMap", {
        get: function() {
            return "MAPS-CFG-02002";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapErrors, "gEN_ToolTypeAlreadyExists", {
        get: function() {
            return "MAPS-GEN-06004";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapErrors, "aPI_FailedGettingShapeRadius", {
        get: function() {
            return "MAPS-API-05004";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapErrors, "lIB_FailedGeocodingLeafletShapeLocations", {
        get: function() {
            return "MAPS-LIB-05002";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapErrors, "lIB_FailedSetDirections", {
        get: function() {
            return "MAPS-LIB-04001";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapErrors, "aPI_FailedUnsubscribeMarkerEvent", {
        get: function() {
            return "MAPS-API-09006";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapErrors, "cFG_InvalidMapId", {
        get: function() {
            return "MAPS-CFG-10005";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapErrors, "lIB_FailedGeocodingMarker", {
        get: function() {
            return "MAPS-LIB-03001";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapErrors, "aPI_FailedNoPluginDirections", {
        get: function() {
            return "MAPS-API-04003";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapErrors, "cFG_APIKeyAlreadySetStaticMap", {
        get: function() {
            return "MAPS-CFG-02001";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapErrors, "cFG_APIKeyDiffersFromPlacesToMaps", {
        get: function() {
            return "MAPS-CFG-01002";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapErrors, "aPI_FailedCreateMarker", {
        get: function() {
            return "MAPS-API-09002";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapErrors, "lIB_InvalidApiKeyStaticMap", {
        get: function() {
            return "MAPS-LIB-02001";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapErrors, "aPI_FailedGettingCenterCoordinates", {
        get: function() {
            return "MAPS-API-01001";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapErrors, "lIB_FailedGeocodingLeafletMarker", {
        get: function() {
            return "MAPS-LIB-03002";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapErrors, "gEN_InvalidChangePropertyShape", {
        get: function() {
            return "MAPS-GEN-05001";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapErrors, "gEN_UnsupportedEventShape", {
        get: function() {
            return "MAPS-GEN-05002";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapErrors, "gEN_UnsupportedEventMap", {
        get: function() {
            return "MAPS-GEN-01002";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapErrors, "gEN_UnsupportedEventDrawingTools", {
        get: function() {
            return "MAPS-GEN-06003";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapErrors, "gEN_InvalidChangePropertyMap", {
        get: function() {
            return "MAPS-GEN-01001";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapErrors, "cFG_InvalidCircleShapeCenter", {
        get: function() {
            return "MAPS-CFG-05003";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapErrors, "gEN_InvalidChangePropertyDrawingTools", {
        get: function() {
            return "MAPS-GEN-06001";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapErrors, "gEN_InvalidChangePropertyHeatmapLayer", {
        get: function() {
            return "MAPS-GEN-08001";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapErrors, "gEN_InvalidChangePropertyMarker", {
        get: function() {
            return "MAPS-GEN-03001";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapErrors, "cFG_InvalidPolylineShapeLocations", {
        get: function() {
            return "MAPS-CFG-05001";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapErrors, "aPI_FailedRemoveDirections", {
        get: function() {
            return "MAPS-API-03001";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapErrors, "cFG_InvalidRectangleShapeBounds", {
        get: function() {
            return "MAPS-CFG-05004";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapErrors, "lIB_FailedGeocodingShapeLocations", {
        get: function() {
            return "MAPS-LIB-05001";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapErrors, "aPI_FailedGettingShapePath", {
        get: function() {
            return "MAPS-API-05001";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapErrors, "gEN_InvalidChangePropertyTools", {
        get: function() {
            return "MAPS-GEN-06002";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapErrors, "aPI_PolylineUnsupported", {
        get: function() {
            return "MAPS-GEN-01003";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapErrors, "aPI_FailedGettingShapeCenter", {
        get: function() {
            return "MAPS-API-05003";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapErrors, "cFG_APIKeyAlreadySetMap", {
        get: function() {
            return "MAPS-CFG-01001";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapErrors, "cFG_InvalidDrawingToolsPosition", {
        get: function() {
            return "MAPS-CFG-06001";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapErrors, "gEN_UnsupportedEventMarker", {
        get: function() {
            return "MAPS-GEN-03002";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapErrors, "aPI_FailedGettingCircleShape", {
        get: function() {
            return "MAPS-API-05002";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapErrors, "gEN_InvalidChangePropertyMarkerClusterer", {
        get: function() {
            return "MAPS-GEN-09001";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapErrors, "gEN_NoPluginDirectionsNeeded", {
        get: function() {
            return "MAPS-GEN-04001";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapErrors, "aPI_FailedSubscribeMarkerEvent", {
        get: function() {
            return "MAPS-API-09005";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapErrors, "aPI_FailedRemoveMarker", {
        get: function() {
            return "MAPS-API-09003";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapErrors, "cFG_InvalidPolygonShapeLocations", {
        get: function() {
            return "MAPS-CFG-05002";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapErrors, "lIB_InvalidApiKeyMap", {
        get: function() {
            return "MAPS-LIB-01001";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapErrors, "aPI_FailedContainsLocation", {
        get: function() {
            return "MAPS-API-05005";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapErrors, "lIB_FailedGeocodingMap", {
        get: function() {
            return "MAPS-LIB-01002";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapErrors, "cFG_InvalidTravelMode", {
        get: function() {
            return "MAPS-CFG-04001";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapErrors, "lIB_FailedGeocodingLeafletMap", {
        get: function() {
            return "MAPS-LIB-11001";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapErrors, "gEN_InvalidChangePropertyFileLayer", {
        get: function() {
            return "MAPS-GEN-07001";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapErrors, "aPI_FailedRemoveMarkers", {
        get: function() {
            return "MAPS-API-09004";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapErrors, "aPI_FailedLoadingPlugin", {
        get: function() {
            return "MAPS-API-04002";
        }
    });

    OutSystemsMapsModel.staticEntities.drawingToolType = {};
    var getDrawingToolTypeRecord = function(record) {
        return OutSystemsMapsModel.module.staticEntities["14e12666-1a84-4330-b798-e9981e0537c4"][record];
    };
    Object.defineProperty(OutSystemsMapsModel.staticEntities.drawingToolType, "polyline", {
        get: function() {
            return "polyline";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.drawingToolType, "rectangle", {
        get: function() {
            return "rectangle";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.drawingToolType, "marker", {
        get: function() {
            return "marker";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.drawingToolType, "circle", {
        get: function() {
            return "circle";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.drawingToolType, "polygon", {
        get: function() {
            return "polygon";
        }
    });

    OutSystemsMapsModel.staticEntities.shapeType = {};
    var getShapeTypeRecord = function(record) {
        return OutSystemsMapsModel.module.staticEntities["14fd2674-7979-4bb0-b74d-83a246b11f1f"][record];
    };
    Object.defineProperty(OutSystemsMapsModel.staticEntities.shapeType, "rectangle", {
        get: function() {
            return "Rectangle";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.shapeType, "circle", {
        get: function() {
            return "Circle";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.shapeType, "polyline", {
        get: function() {
            return "Polyline";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.shapeType, "polygon", {
        get: function() {
            return "Polygon";
        }
    });

    OutSystemsMapsModel.staticEntities.directionsProvider = {};
    var getDirectionsProviderRecord = function(record) {
        return OutSystemsMapsModel.module.staticEntities["20fa4a07-f748-417d-b23c-b858acc94546"][record];
    };
    Object.defineProperty(OutSystemsMapsModel.staticEntities.directionsProvider, "oSRM", {
        get: function() {
            return "OSRM";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.directionsProvider, "mapBox", {
        get: function() {
            return "MapBox";
        }
    });

    OutSystemsMapsModel.staticEntities.popupEvent = {};
    var getPopupEventRecord = function(record) {
        return OutSystemsMapsModel.module.staticEntities["25c28812-61a5-472c-b946-caa03aeed4aa"][record];
    };
    Object.defineProperty(OutSystemsMapsModel.staticEntities.popupEvent, "onMouseover", {
        get: function() {
            return "OnMouseover";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.popupEvent, "onMouseout", {
        get: function() {
            return "OnMouseout";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.popupEvent, "onClick", {
        get: function() {
            return "OnClick";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.popupEvent, "rightClick", {
        get: function() {
            return "RightClick";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.popupEvent, "doubleClick", {
        get: function() {
            return "DoubleClick";
        }
    });

    OutSystemsMapsModel.staticEntities.drawingToolsEventTriggered = {};
    var getDrawingToolsEventTriggeredRecord = function(record) {
        return OutSystemsMapsModel.module.staticEntities["2640dedd-7e59-483c-89f6-51ab17a38999"][record];
    };
    Object.defineProperty(OutSystemsMapsModel.staticEntities.drawingToolsEventTriggered, "polygonCreated", {
        get: function() {
            return "polygoncomplete";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.drawingToolsEventTriggered, "polylineCreated", {
        get: function() {
            return "polylinecomplete";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.drawingToolsEventTriggered, "rectangleCreated", {
        get: function() {
            return "rectanglecomplete";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.drawingToolsEventTriggered, "circleCreated", {
        get: function() {
            return "circlecomplete";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.drawingToolsEventTriggered, "markerAdd", {
        get: function() {
            return "markercomplete";
        }
    });

    OutSystemsMapsModel.staticEntities.type = {};
    var getTypeRecord = function(record) {
        return OutSystemsMapsModel.module.staticEntities["321464c3-cb26-412f-b60a-1c7140dc8c1b"][record];
    };
    Object.defineProperty(OutSystemsMapsModel.staticEntities.type, "hybrid", {
        get: function() {
            return "hybrid";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.type, "terrain", {
        get: function() {
            return "terrain";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.type, "roadmap", {
        get: function() {
            return "roadmap";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.type, "satellite", {
        get: function() {
            return "satellite";
        }
    });

    OutSystemsMapsModel.staticEntities.searchPlacesEvent = {};
    var getSearchPlacesEventRecord = function(record) {
        return OutSystemsMapsModel.module.staticEntities["352844c7-4325-49fd-a1f8-298237ad2c49"][record];
    };
    Object.defineProperty(OutSystemsMapsModel.staticEntities.searchPlacesEvent, "onError", {
        get: function() {
            return "OnError";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.searchPlacesEvent, "onPlaceSelect", {
        get: function() {
            return "OnPlaceSelect";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.searchPlacesEvent, "initialized", {
        get: function() {
            return "Initialized";
        }
    });

    OutSystemsMapsModel.staticEntities.shapeEvent = {};
    var getShapeEventRecord = function(record) {
        return OutSystemsMapsModel.module.staticEntities["381a1deb-bc9a-4931-8d1e-90177993e176"][record];
    };
    Object.defineProperty(OutSystemsMapsModel.staticEntities.shapeEvent, "onClick", {
        get: function() {
            return "OnClick";
        }
    });

    OutSystemsMapsModel.staticEntities.markerType = {};
    var getMarkerTypeRecord = function(record) {
        return OutSystemsMapsModel.module.staticEntities["3d05f10a-28e9-4029-bb84-5ab7ade9e36a"][record];
    };
    Object.defineProperty(OutSystemsMapsModel.staticEntities.markerType, "markerPopup", {
        get: function() {
            return "MarkerPopup";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.markerType, "marker", {
        get: function() {
            return "Marker";
        }
    });

    OutSystemsMapsModel.staticEntities.searchPlacesErrors = {};
    var getSearchPlacesErrorsRecord = function(record) {
        return OutSystemsMapsModel.module.staticEntities["4ef14755-abc6-4dc3-815d-ecd3a6dc3407"][record];
    };
    Object.defineProperty(OutSystemsMapsModel.staticEntities.searchPlacesErrors, "gEN_UnsupportedEventSearchPlaces", {
        get: function() {
            return "MAPS-GEN-10002";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.searchPlacesErrors, "cFG_APIKeyAlreadySetSearchPlaces", {
        get: function() {
            return "MAPS-CFG-10001";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.searchPlacesErrors, "lIB_InvalidApiKeySearchPlaces", {
        get: function() {
            return "MAPS-LIB-10001";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.searchPlacesErrors, "cFG_APIKeyDiffersFromPlacesToMaps", {
        get: function() {
            return "MAPS-CFG-01002";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.searchPlacesErrors, "lIB_FailedGeocodingSearchAreaLocations", {
        get: function() {
            return "MAPS-LIB-10002";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.searchPlacesErrors, "cFG_MaximumCountriesNumber", {
        get: function() {
            return "MAPS-CFG-10003";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.searchPlacesErrors, "gEN_InvalidChangePropertySearchPlaces", {
        get: function() {
            return "MAPS-GEN-10001";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.searchPlacesErrors, "cFG_InvalidSearchPlacesSearchArea", {
        get: function() {
            return "MAPS-CFG-10002";
        }
    });

    OutSystemsMapsModel.staticEntities.mapEvent = {};
    var getMapEventRecord = function(record) {
        return OutSystemsMapsModel.module.staticEntities["5caa5df9-dc3a-4864-874f-6ecf22baa80f"][record];
    };
    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapEvent, "initialized", {
        get: function() {
            return "Initialized";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapEvent, "onError", {
        get: function() {
            return "OnError";
        }
    });

    OutSystemsMapsModel.staticEntities.mapEventTriggered = {};
    var getMapEventTriggeredRecord = function(record) {
        return OutSystemsMapsModel.module.staticEntities["7cf2a964-5ef8-4901-abe6-e84cb6616a62"][record];
    };
    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapEventTriggered, "dragEnd", {
        get: function() {
            return "dragend";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapEventTriggered, "rightClick", {
        get: function() {
            return "contextmenu";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapEventTriggered, "doubleClick", {
        get: function() {
            return "dblclick";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapEventTriggered, "click", {
        get: function() {
            return "click";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapEventTriggered, "zoomChanged", {
        get: function() {
            return "zoom_changed";
        }
    });

    OutSystemsMapsModel.staticEntities.searchTypes = {};
    var getSearchTypesRecord = function(record) {
        return OutSystemsMapsModel.module.staticEntities["874caddc-a7e7-422a-ad8b-0267067bc563"][record];
    };
    Object.defineProperty(OutSystemsMapsModel.staticEntities.searchTypes, "addresses", {
        get: function() {
            return "Addresses";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.searchTypes, "establishments", {
        get: function() {
            return "Establishments";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.searchTypes, "cities", {
        get: function() {
            return "Cities";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.searchTypes, "regions", {
        get: function() {
            return "Regions";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.searchTypes, "geocodes", {
        get: function() {
            return "Geocodes";
        }
    });

    OutSystemsMapsModel.staticEntities.markerEvent = {};
    var getMarkerEventRecord = function(record) {
        return OutSystemsMapsModel.module.staticEntities["88306854-60f3-4fc9-b928-db3e0ca7f7b6"][record];
    };
    Object.defineProperty(OutSystemsMapsModel.staticEntities.markerEvent, "onClick", {
        get: function() {
            return "OnClick";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.markerEvent, "initialized", {
        get: function() {
            return "Initialized";
        }
    });

    OutSystemsMapsModel.staticEntities.provider = {};
    var getProviderRecord = function(record) {
        return OutSystemsMapsModel.module.staticEntities["88944e86-e035-49c1-90a5-64d0aed01f83"][record];
    };
    Object.defineProperty(OutSystemsMapsModel.staticEntities.provider, "google", {
        get: function() {
            return "Google";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.provider, "leaflet", {
        get: function() {
            return "Leaflet";
        }
    });

    OutSystemsMapsModel.staticEntities.drawingToolsPosition = {};
    var getDrawingToolsPositionRecord = function(record) {
        return OutSystemsMapsModel.module.staticEntities["950fddcc-2412-4248-a864-399a0fd9b469"][record];
    };
    Object.defineProperty(OutSystemsMapsModel.staticEntities.drawingToolsPosition, "top_Right", {
        get: function() {
            return "TOP_RIGHT";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.drawingToolsPosition, "top_Center", {
        get: function() {
            return "TOP_CENTER";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.drawingToolsPosition, "right_Center", {
        get: function() {
            return "RIGHT_CENTER";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.drawingToolsPosition, "top_Left", {
        get: function() {
            return "TOP_LEFT";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.drawingToolsPosition, "bottom_Center", {
        get: function() {
            return "BOTTOM_CENTER";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.drawingToolsPosition, "right_Top", {
        get: function() {
            return "RIGHT_TOP";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.drawingToolsPosition, "bottom_Right", {
        get: function() {
            return "BOTTOM_RIGHT";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.drawingToolsPosition, "bottom_Left", {
        get: function() {
            return "BOTTOM_LEFT";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.drawingToolsPosition, "right_Bottom", {
        get: function() {
            return "RIGHT_BOTTOM";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.drawingToolsPosition, "left_Center", {
        get: function() {
            return "LEFT_CENTER";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.drawingToolsPosition, "left_Top", {
        get: function() {
            return "LEFT_TOP";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.drawingToolsPosition, "left_Bottom", {
        get: function() {
            return "LEFT_BOTTOM";
        }
    });

    OutSystemsMapsModel.staticEntities.style = {};
    var getStyleRecord = function(record) {
        return OutSystemsMapsModel.module.staticEntities["a0adb83b-e208-4039-bc92-91d01b8e2081"][record];
    };
    Object.defineProperty(OutSystemsMapsModel.staticEntities.style, "silver", {
        get: function() {
            return 2;
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.style, "standard", {
        get: function() {
            return 1;
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.style, "dark", {
        get: function() {
            return 4;
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.style, "night", {
        get: function() {
            return 5;
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.style, "aubergine", {
        get: function() {
            return 6;
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.style, "retro", {
        get: function() {
            return 3;
        }
    });

    OutSystemsMapsModel.staticEntities.fileLayerEvent = {};
    var getFileLayerEventRecord = function(record) {
        return OutSystemsMapsModel.module.staticEntities["a1f5dba7-e312-4de7-b0c2-9316e20a66a4"][record];
    };
    Object.defineProperty(OutSystemsMapsModel.staticEntities.fileLayerEvent, "onClick", {
        get: function() {
            return "OnClick";
        }
    });

    OutSystemsMapsModel.staticEntities.markerEventTriggered = {};
    var getMarkerEventTriggeredRecord = function(record) {
        return OutSystemsMapsModel.module.staticEntities["cf5812b2-bdc9-4eb2-8240-09f6367c6ad6"][record];
    };
    Object.defineProperty(OutSystemsMapsModel.staticEntities.markerEventTriggered, "onClick", {
        get: function() {
            return "OnClick";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.markerEventTriggered, "doubleClick", {
        get: function() {
            return "dblclick";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.markerEventTriggered, "rightClick", {
        get: function() {
            return "contextmenu";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.markerEventTriggered, "dragEnd", {
        get: function() {
            return "dragend";
        }
    });

    OutSystemsMapsModel.staticEntities.mapType = {};
    var getMapTypeRecord = function(record) {
        return OutSystemsMapsModel.module.staticEntities["d4ae68c7-58a9-4003-96c0-e23e7c46b48a"][record];
    };
    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapType, "staticMap", {
        get: function() {
            return "StaticMap";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.mapType, "map", {
        get: function() {
            return "Map";
        }
    });

    OutSystemsMapsModel.staticEntities.zoom = {};
    var getZoomRecord = function(record) {
        return OutSystemsMapsModel.module.staticEntities["e4acf07c-b38a-4871-a7c2-4017eaabe95c"][record];
    };
    Object.defineProperty(OutSystemsMapsModel.staticEntities.zoom, "zoom13", {
        get: function() {
            return 13;
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.zoom, "zoom9", {
        get: function() {
            return 9;
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.zoom, "zoom10_City", {
        get: function() {
            return 10;
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.zoom, "zoom3", {
        get: function() {
            return 3;
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.zoom, "zoom15_Streets", {
        get: function() {
            return 15;
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.zoom, "zoom20_Buildings", {
        get: function() {
            return 20;
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.zoom, "zoom19", {
        get: function() {
            return 19;
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.zoom, "zoom7", {
        get: function() {
            return 7;
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.zoom, "zoom4", {
        get: function() {
            return 4;
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.zoom, "zoom16", {
        get: function() {
            return 16;
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.zoom, "zoom5_Continent", {
        get: function() {
            return 5;
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.zoom, "zoom18", {
        get: function() {
            return 18;
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.zoom, "zoom11", {
        get: function() {
            return 11;
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.zoom, "zoom1_World", {
        get: function() {
            return 1;
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.zoom, "zoom8", {
        get: function() {
            return 8;
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.zoom, "zoom2", {
        get: function() {
            return 2;
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.zoom, "zoom6", {
        get: function() {
            return 6;
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.zoom, "zoom17", {
        get: function() {
            return 17;
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.zoom, "zoom12", {
        get: function() {
            return 12;
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.zoom, "zoom14", {
        get: function() {
            return 14;
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.zoom, "auto", {
        get: function() {
            return 0;
        }
    });

    OutSystemsMapsModel.staticEntities.verbosity = {};
    var getVerbosityRecord = function(record) {
        return OutSystemsMapsModel.module.staticEntities["e622b827-468a-483f-9c56-4d5bc2d8635b"][record];
    };
    Object.defineProperty(OutSystemsMapsModel.staticEntities.verbosity, "verbose", {
        get: function() {
            return "Verbose";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.verbosity, "noLogging", {
        get: function() {
            return "No Logging";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.verbosity, "error", {
        get: function() {
            return "Error";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.verbosity, "warning", {
        get: function() {
            return "Warning";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.verbosity, "log", {
        get: function() {
            return "Log";
        }
    });

    OutSystemsMapsModel.staticEntities.drawingToolsEvent = {};
    var getDrawingToolsEventRecord = function(record) {
        return OutSystemsMapsModel.module.staticEntities["e6239ed8-518d-4f10-a23e-29333bffabc7"][record];
    };
    Object.defineProperty(OutSystemsMapsModel.staticEntities.drawingToolsEvent, "initialized", {
        get: function() {
            return "Initialized";
        }
    });

    OutSystemsMapsModel.staticEntities.shapeEventTriggered = {};
    var getShapeEventTriggeredRecord = function(record) {
        return OutSystemsMapsModel.module.staticEntities["ecd875a9-9c28-48b3-8693-d77fa52bfcb9"][record];
    };
    Object.defineProperty(OutSystemsMapsModel.staticEntities.shapeEventTriggered, "dragEnd", {
        get: function() {
            return "dragend";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.shapeEventTriggered, "shapeChanged", {
        get: function() {
            return "shape_changed";
        }
    });

    OutSystemsMapsModel.staticEntities.travelMode = {};
    var getTravelModeRecord = function(record) {
        return OutSystemsMapsModel.module.staticEntities["fd1f3f9a-87ad-45fa-81b4-46a61da60671"][record];
    };
    Object.defineProperty(OutSystemsMapsModel.staticEntities.travelMode, "dRIVING", {
        get: function() {
            return "DRIVING";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.travelMode, "bICYCLING", {
        get: function() {
            return "BICYCLING";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.travelMode, "tRANSIT", {
        get: function() {
            return "TRANSIT";
        }
    });

    Object.defineProperty(OutSystemsMapsModel.staticEntities.travelMode, "wALKING", {
        get: function() {
            return "WALKING";
        }
    });

});