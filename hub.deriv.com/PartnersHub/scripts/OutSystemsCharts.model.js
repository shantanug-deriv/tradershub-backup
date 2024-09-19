define("OutSystemsCharts.model$ST_f281012c72a5f666adafe0a5edc16938Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class ST_f281012c72a5f666adafe0a5edc16938StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Type", "typeAttr", "type", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("RenderTo", "renderToAttr", "renderTo", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Height", "heightAttr", "height", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ClassName", "classNameAttr", "className", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("InnerSize", "innerSizeAttr", "innerSize", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsChartsModel.ST_f281012c72a5f666adafe0a5edc16938Structure = ST_f281012c72a5f666adafe0a5edc16938StructureInner;

        var ST_f281012c72a5f666adafe0a5edc16938Structure = ST_f281012c72a5f666adafe0a5edc16938StructureInner;
        ST_f281012c72a5f666adafe0a5edc16938Structure.init();
    }
});

define("OutSystemsCharts.model$ST_58245655fd14aecad2b52faf6ef8f39bStructure", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_f281012c72a5f666adafe0a5edc16938Structure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class ST_58245655fd14aecad2b52faf6ef8f39bStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Chart", "chartAttr", "chart", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_f281012c72a5f666adafe0a5edc16938Structure());
                    }, true, OutSystemsChartsModel.ST_f281012c72a5f666adafe0a5edc16938Structure),
                    this.attr("StackingType", "stackingTypeAttr", "stackingType", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("UniqueId", "uniqueIdAttr", "uniqueId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ValuesType", "valuesTypeAttr", "valuesType", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("disableLoadingAnimation", "disableLoadingAnimationAttr", "disableLoadingAnimation", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsChartsModel.ST_58245655fd14aecad2b52faf6ef8f39bStructure = ST_58245655fd14aecad2b52faf6ef8f39bStructureInner;

        var ST_58245655fd14aecad2b52faf6ef8f39bStructure = ST_58245655fd14aecad2b52faf6ef8f39bStructureInner;
        ST_58245655fd14aecad2b52faf6ef8f39bStructure.init();
    }
});

define("OutSystemsCharts.model$RC_00179e46ad196fea946536d51a4dedf6", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_58245655fd14aecad2b52faf6ef8f39bStructure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class RC_00179e46ad196fea946536d51a4dedf6Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("InternalConfig", "internalConfigAttr", "InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_58245655fd14aecad2b52faf6ef8f39bStructure());
                    }, true, OutSystemsChartsModel.ST_58245655fd14aecad2b52faf6ef8f39bStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_00179e46ad196fea946536d51a4dedf6(new RC_00179e46ad196fea946536d51a4dedf6.RecordClass({
                    internalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.RC_00179e46ad196fea946536d51a4dedf6 = RC_00179e46ad196fea946536d51a4dedf6Inner;

        RC_00179e46ad196fea946536d51a4dedf6Inner._isAnonymousRecord = true;
        RC_00179e46ad196fea946536d51a4dedf6Inner.UniqueId = "00179e46-ad19-6fea-9465-36d51a4dedf6";
        var RC_00179e46ad196fea946536d51a4dedf6 = RC_00179e46ad196fea946536d51a4dedf6Inner;
        RC_00179e46ad196fea946536d51a4dedf6.init();
    }
});

define("OutSystemsCharts.model$ST_5552d23a1ca6c55fb342792127e6be05Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class ST_5552d23a1ca6c55fb342792127e6be05StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Binding", "bindingAttr", "Binding", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("MarkerHideMarker", "markerHideMarkerAttr", "MarkerHideMarker", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("MarkerFillColor", "markerFillColorAttr", "MarkerFillColor", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("MarkerBorderColor", "markerBorderColorAttr", "MarkerBorderColor", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("MarkerBorderWidth", "markerBorderWidthAttr", "MarkerBorderWidth", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("MarkerSymbol", "markerSymbolAttr", "MarkerSymbol", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("MarkerRadius", "markerRadiusAttr", "MarkerRadius", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 4;
                    }, true),
                    this.attr("ShowDataPointValues", "showDataPointValuesAttr", "ShowDataPointValues", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("FillColor", "fillColorAttr", "FillColor", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("LineColor", "lineColorAttr", "LineColor", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("LineWidth", "lineWidthAttr", "LineWidth", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Opacity", "opacityAttr", "Opacity", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ShowInLegend", "showInLegendAttr", "ShowInLegend", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, true),
                    this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("XAxisId", "xAxisIdAttr", "XAxisId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "0";
                    }, true),
                    this.attr("YAxisId", "yAxisIdAttr", "YAxisId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "0";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsChartsModel.ST_5552d23a1ca6c55fb342792127e6be05Structure = ST_5552d23a1ca6c55fb342792127e6be05StructureInner;

        var ST_5552d23a1ca6c55fb342792127e6be05Structure = ST_5552d23a1ca6c55fb342792127e6be05StructureInner;
        ST_5552d23a1ca6c55fb342792127e6be05Structure.init();
    }
});

define("OutSystemsCharts.model$RC_024e2239e97c5f6d0bb80b2851c02e49", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_5552d23a1ca6c55fb342792127e6be05Structure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class RC_024e2239e97c5f6d0bb80b2851c02e49Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("SerieStylingInternalConfigs", "serieStylingInternalConfigsAttr", "SerieStylingInternalConfigs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_5552d23a1ca6c55fb342792127e6be05Structure());
                    }, true, OutSystemsChartsModel.ST_5552d23a1ca6c55fb342792127e6be05Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_024e2239e97c5f6d0bb80b2851c02e49(new RC_024e2239e97c5f6d0bb80b2851c02e49.RecordClass({
                    serieStylingInternalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.RC_024e2239e97c5f6d0bb80b2851c02e49 = RC_024e2239e97c5f6d0bb80b2851c02e49Inner;

        RC_024e2239e97c5f6d0bb80b2851c02e49Inner._isAnonymousRecord = true;
        RC_024e2239e97c5f6d0bb80b2851c02e49Inner.UniqueId = "024e2239-e97c-5f6d-0bb8-0b2851c02e49";
        var RC_024e2239e97c5f6d0bb80b2851c02e49 = RC_024e2239e97c5f6d0bb80b2851c02e49Inner;
        RC_024e2239e97c5f6d0bb80b2851c02e49.init();
    }
});

define("OutSystemsCharts.model$ST_ac4a98d5209ff3cbf055ac67e03c6463Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class ST_ac4a98d5209ff3cbf055ac67e03c6463StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("MenuExtendedClass", "menuExtendedClassAttr", "MenuExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new ST_ac4a98d5209ff3cbf055ac67e03c6463Structure(new ST_ac4a98d5209ff3cbf055ac67e03c6463Structure.RecordClass({
                    menuExtendedClassAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.ST_ac4a98d5209ff3cbf055ac67e03c6463Structure = ST_ac4a98d5209ff3cbf055ac67e03c6463StructureInner;

        var ST_ac4a98d5209ff3cbf055ac67e03c6463Structure = ST_ac4a98d5209ff3cbf055ac67e03c6463StructureInner;
        ST_ac4a98d5209ff3cbf055ac67e03c6463Structure.init();
    }
});

define("OutSystemsCharts.model$RL_039003cd3465e421b831537459c44187", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_ac4a98d5209ff3cbf055ac67e03c6463Structure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_039003cd3465e421b831537459c44187 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.ST_ac4a98d5209ff3cbf055ac67e03c6463Structure;
        }

    }

    OutSystemsChartsModel.RL_039003cd3465e421b831537459c44187 = RL_039003cd3465e421b831537459c44187;

});

define("OutSystemsCharts.model$ST_0398a87aaf5fccfd4503642b3b7d1dc0Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class ST_0398a87aaf5fccfd4503642b3b7d1dc0StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ValuesType", "valuesTypeAttr", "ValuesType", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsChartsModel.staticEntities.axisValuesType.category;
                    }, true),
                    this.attr("Crosshair", "crosshairAttr", "Crosshair", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Opposite", "oppositeAttr", "Opposite", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsChartsModel.ST_0398a87aaf5fccfd4503642b3b7d1dc0Structure = ST_0398a87aaf5fccfd4503642b3b7d1dc0StructureInner;

        var ST_0398a87aaf5fccfd4503642b3b7d1dc0Structure = ST_0398a87aaf5fccfd4503642b3b7d1dc0StructureInner;
        ST_0398a87aaf5fccfd4503642b3b7d1dc0Structure.init();
    }
});

define("OutSystemsCharts.model$ST_9695772c3b8ae4caa8a4e3fb1dfb5bb8Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class ST_9695772c3b8ae4caa8a4e3fb1dfb5bb8StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("EnableOption", "enableOptionAttr", "enabled", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, true),
                    this.attr("ButtonLabel", "buttonLabelAttr", "label", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsChartsModel.ST_9695772c3b8ae4caa8a4e3fb1dfb5bb8Structure = ST_9695772c3b8ae4caa8a4e3fb1dfb5bb8StructureInner;

        var ST_9695772c3b8ae4caa8a4e3fb1dfb5bb8Structure = ST_9695772c3b8ae4caa8a4e3fb1dfb5bb8StructureInner;
        ST_9695772c3b8ae4caa8a4e3fb1dfb5bb8Structure.init();
    }
});

define("OutSystemsCharts.model$ST_223dfcdc1e3c93bfb0e422a434fb180fStructure", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_9695772c3b8ae4caa8a4e3fb1dfb5bb8Structure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class ST_223dfcdc1e3c93bfb0e422a434fb180fStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ViewInFullScreen", "viewInFullScreenAttr", "ViewInFullScreen", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_9695772c3b8ae4caa8a4e3fb1dfb5bb8Structure());
                    }, true, OutSystemsChartsModel.ST_9695772c3b8ae4caa8a4e3fb1dfb5bb8Structure),
                    this.attr("PrintChart", "printChartAttr", "PrintChart", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_9695772c3b8ae4caa8a4e3fb1dfb5bb8Structure());
                    }, true, OutSystemsChartsModel.ST_9695772c3b8ae4caa8a4e3fb1dfb5bb8Structure),
                    this.attr("DownloadPNG", "downloadPNGAttr", "DownloadPNG", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_9695772c3b8ae4caa8a4e3fb1dfb5bb8Structure());
                    }, true, OutSystemsChartsModel.ST_9695772c3b8ae4caa8a4e3fb1dfb5bb8Structure),
                    this.attr("DownloadJPEG", "downloadJPEGAttr", "DownloadJPEG", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_9695772c3b8ae4caa8a4e3fb1dfb5bb8Structure());
                    }, true, OutSystemsChartsModel.ST_9695772c3b8ae4caa8a4e3fb1dfb5bb8Structure),
                    this.attr("DownloadPDF", "downloadPDFAttr", "DownloadPDF", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_9695772c3b8ae4caa8a4e3fb1dfb5bb8Structure());
                    }, true, OutSystemsChartsModel.ST_9695772c3b8ae4caa8a4e3fb1dfb5bb8Structure),
                    this.attr("DownloadSVG", "downloadSVGAttr", "DownloadSVG", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_9695772c3b8ae4caa8a4e3fb1dfb5bb8Structure());
                    }, true, OutSystemsChartsModel.ST_9695772c3b8ae4caa8a4e3fb1dfb5bb8Structure),
                    this.attr("DownloadCSV", "downloadCSVAttr", "DownloadCSV", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_9695772c3b8ae4caa8a4e3fb1dfb5bb8Structure());
                    }, true, OutSystemsChartsModel.ST_9695772c3b8ae4caa8a4e3fb1dfb5bb8Structure),
                    this.attr("DownloadXLS", "downloadXLSAttr", "DownloadXLS", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_9695772c3b8ae4caa8a4e3fb1dfb5bb8Structure());
                    }, true, OutSystemsChartsModel.ST_9695772c3b8ae4caa8a4e3fb1dfb5bb8Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsChartsModel.ST_223dfcdc1e3c93bfb0e422a434fb180fStructure = ST_223dfcdc1e3c93bfb0e422a434fb180fStructureInner;

        var ST_223dfcdc1e3c93bfb0e422a434fb180fStructure = ST_223dfcdc1e3c93bfb0e422a434fb180fStructureInner;
        ST_223dfcdc1e3c93bfb0e422a434fb180fStructure.init();
    }
});

define("OutSystemsCharts.model$RL_050b01c364c9df98c9aff37d97787da6", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_223dfcdc1e3c93bfb0e422a434fb180fStructure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_050b01c364c9df98c9aff37d97787da6 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.ST_223dfcdc1e3c93bfb0e422a434fb180fStructure;
        }

    }

    OutSystemsChartsModel.RL_050b01c364c9df98c9aff37d97787da6 = RL_050b01c364c9df98c9aff37d97787da6;

});

define("OutSystemsCharts.model$EN_c09810fe22e8a6a144d75dbd4ee5e70eEntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class EN_c09810fe22e8a6a144d75dbd4ee5e70eEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Position", "positionAttr", "Position", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_c09810fe22e8a6a144d75dbd4ee5e70eEntityRecord(new EN_c09810fe22e8a6a144d75dbd4ee5e70eEntityRecord.RecordClass({
                    positionAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.EN_c09810fe22e8a6a144d75dbd4ee5e70eEntityRecord = EN_c09810fe22e8a6a144d75dbd4ee5e70eEntityRecordInner;

        var EN_c09810fe22e8a6a144d75dbd4ee5e70eEntityRecord = EN_c09810fe22e8a6a144d75dbd4ee5e70eEntityRecordInner;
        EN_c09810fe22e8a6a144d75dbd4ee5e70eEntityRecord.init();
    }
});

define("OutSystemsCharts.model$RC_054139ee1b4e118a0de0bda9edde9b3e", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$EN_c09810fe22e8a6a144d75dbd4ee5e70eEntityRecord"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class RC_054139ee1b4e118a0de0bda9edde9b3eInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("LegendPosition", "legendPositionAttr", "LegendPosition", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.EN_c09810fe22e8a6a144d75dbd4ee5e70eEntityRecord());
                    }, true, OutSystemsChartsModel.EN_c09810fe22e8a6a144d75dbd4ee5e70eEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_054139ee1b4e118a0de0bda9edde9b3e(new RC_054139ee1b4e118a0de0bda9edde9b3e.RecordClass({
                    legendPositionAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.RC_054139ee1b4e118a0de0bda9edde9b3e = RC_054139ee1b4e118a0de0bda9edde9b3eInner;

        RC_054139ee1b4e118a0de0bda9edde9b3eInner._isAnonymousRecord = true;
        RC_054139ee1b4e118a0de0bda9edde9b3eInner.UniqueId = "054139ee-1b4e-118a-0de0-bda9edde9b3e";
        var RC_054139ee1b4e118a0de0bda9edde9b3e = RC_054139ee1b4e118a0de0bda9edde9b3eInner;
        RC_054139ee1b4e118a0de0bda9edde9b3e.init();
    }
});

define("OutSystemsCharts.model$EN_0aaaca7207138bf7860a19b299026910EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class EN_0aaaca7207138bf7860a19b299026910EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Type", "typeAttr", "Type", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_0aaaca7207138bf7860a19b299026910EntityRecord(new EN_0aaaca7207138bf7860a19b299026910EntityRecord.RecordClass({
                    typeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.EN_0aaaca7207138bf7860a19b299026910EntityRecord = EN_0aaaca7207138bf7860a19b299026910EntityRecordInner;

        var EN_0aaaca7207138bf7860a19b299026910EntityRecord = EN_0aaaca7207138bf7860a19b299026910EntityRecordInner;
        EN_0aaaca7207138bf7860a19b299026910EntityRecord.init();
    }
});

define("OutSystemsCharts.model$EN_0c0b103cba961483054afffbc30b3066EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class EN_0c0b103cba961483054afffbc30b3066EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
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

        OutSystemsChartsModel.EN_0c0b103cba961483054afffbc30b3066EntityRecord = EN_0c0b103cba961483054afffbc30b3066EntityRecordInner;

        var EN_0c0b103cba961483054afffbc30b3066EntityRecord = EN_0c0b103cba961483054afffbc30b3066EntityRecordInner;
        EN_0c0b103cba961483054afffbc30b3066EntityRecord.init();
    }
});

define("OutSystemsCharts.model$EN_0e1d37c640439329e5a37a201fe5ef06EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class EN_0e1d37c640439329e5a37a201fe5ef06EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Type", "typeAttr", "Type", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_0e1d37c640439329e5a37a201fe5ef06EntityRecord(new EN_0e1d37c640439329e5a37a201fe5ef06EntityRecord.RecordClass({
                    typeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.EN_0e1d37c640439329e5a37a201fe5ef06EntityRecord = EN_0e1d37c640439329e5a37a201fe5ef06EntityRecordInner;

        var EN_0e1d37c640439329e5a37a201fe5ef06EntityRecord = EN_0e1d37c640439329e5a37a201fe5ef06EntityRecordInner;
        EN_0e1d37c640439329e5a37a201fe5ef06EntityRecord.init();
    }
});

define("OutSystemsCharts.model$ST_24000c8fde24da45a0d83940a64dbbafStructure", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class ST_24000c8fde24da45a0d83940a64dbbafStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Floating", "floatingAttr", "Floating", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new ST_24000c8fde24da45a0d83940a64dbbafStructure(new ST_24000c8fde24da45a0d83940a64dbbafStructure.RecordClass({
                    floatingAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.ST_24000c8fde24da45a0d83940a64dbbafStructure = ST_24000c8fde24da45a0d83940a64dbbafStructureInner;

        var ST_24000c8fde24da45a0d83940a64dbbafStructure = ST_24000c8fde24da45a0d83940a64dbbafStructureInner;
        ST_24000c8fde24da45a0d83940a64dbbafStructure.init();
    }
});

define("OutSystemsCharts.model$RC_c38769c4e3f53c55790e6a4b2c81b7ff", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_24000c8fde24da45a0d83940a64dbbafStructure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class RC_c38769c4e3f53c55790e6a4b2c81b7ffInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ChartLegendOptionalConfigs", "chartLegendOptionalConfigsAttr", "ChartLegendOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_24000c8fde24da45a0d83940a64dbbafStructure());
                    }, true, OutSystemsChartsModel.ST_24000c8fde24da45a0d83940a64dbbafStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_c38769c4e3f53c55790e6a4b2c81b7ff(new RC_c38769c4e3f53c55790e6a4b2c81b7ff.RecordClass({
                    chartLegendOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.RC_c38769c4e3f53c55790e6a4b2c81b7ff = RC_c38769c4e3f53c55790e6a4b2c81b7ffInner;

        RC_c38769c4e3f53c55790e6a4b2c81b7ffInner._isAnonymousRecord = true;
        RC_c38769c4e3f53c55790e6a4b2c81b7ffInner.UniqueId = "c38769c4-e3f5-3c55-790e-6a4b2c81b7ff";
        var RC_c38769c4e3f53c55790e6a4b2c81b7ff = RC_c38769c4e3f53c55790e6a4b2c81b7ffInner;
        RC_c38769c4e3f53c55790e6a4b2c81b7ff.init();
    }
});

define("OutSystemsCharts.model$RL_0f73e10e5d9541713603d0a98a57b9d8", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$RC_c38769c4e3f53c55790e6a4b2c81b7ff"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_0f73e10e5d9541713603d0a98a57b9d8 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.RC_c38769c4e3f53c55790e6a4b2c81b7ff;
        }

    }

    OutSystemsChartsModel.RL_0f73e10e5d9541713603d0a98a57b9d8 = RL_0f73e10e5d9541713603d0a98a57b9d8;

});

define("OutSystemsCharts.model$ST_0facb06834084a9f1a55e2bf7cbbfcf1Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class ST_0facb06834084a9f1a55e2bf7cbbfcf1StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Title", "titleAttr", "Title", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Visible", "visibleAttr", "Visible", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, true),
                    this.attr("MinValue", "minValueAttr", "MinValue", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true),
                    this.attr("MaxValue", "maxValueAttr", "MaxValue", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true),
                    this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ValuesPrefix", "valuesPrefixAttr", "ValuesPrefix", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ValuesSuffix", "valuesSuffixAttr", "ValuesSuffix", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("LabelColor", "labelColorAttr", "LabelColor", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "#666666";
                    }, true),
                    this.attr("LabelSize", "labelSizeAttr", "LabelSize", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 11;
                    }, true),
                    this.attr("LabelRotation", "labelRotationAttr", "LabelRotation", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.BuiltinFunctions.integerToDecimal(0);
                    }, true),
                    this.attr("LineColor", "lineColorAttr", "LineColor", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "#ccd6eb";
                    }, true),
                    this.attr("LineWidth", "lineWidthAttr", "LineWidth", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("GridLinesColor", "gridLinesColorAttr", "GridLinesColor", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "#ccd6eb";
                    }, true),
                    this.attr("GridLinesWidth", "gridLinesWidthAttr", "GridLinesWidth", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("GridLineStep", "gridLineStepAttr", "GridLineStep", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("Crosshair", "crosshairAttr", "Crosshair", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("ValuesType", "valuesTypeAttr", "ValuesType", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsChartsModel.staticEntities.axisValuesType.linear;
                    }, true),
                    this.attr("Opposite", "oppositeAttr", "Opposite", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsChartsModel.ST_0facb06834084a9f1a55e2bf7cbbfcf1Structure = ST_0facb06834084a9f1a55e2bf7cbbfcf1StructureInner;

        var ST_0facb06834084a9f1a55e2bf7cbbfcf1Structure = ST_0facb06834084a9f1a55e2bf7cbbfcf1StructureInner;
        ST_0facb06834084a9f1a55e2bf7cbbfcf1Structure.init();
    }
});

define("OutSystemsCharts.model$ST_4bdf4d0ba65c5e31172d7b508a740391Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class ST_4bdf4d0ba65c5e31172d7b508a740391StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("BackgroundColor", "backgroundColorAttr", "BackgroundColor", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "transparent";
                    }, true),
                    this.attr("ItemsDistance", "itemsDistanceAttr", "ItemsDistance", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 20;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsChartsModel.ST_4bdf4d0ba65c5e31172d7b508a740391Structure = ST_4bdf4d0ba65c5e31172d7b508a740391StructureInner;

        var ST_4bdf4d0ba65c5e31172d7b508a740391Structure = ST_4bdf4d0ba65c5e31172d7b508a740391StructureInner;
        ST_4bdf4d0ba65c5e31172d7b508a740391Structure.init();
    }
});

define("OutSystemsCharts.model$RC_11e12158254e5be6bde5f4ba88bacb32", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_4bdf4d0ba65c5e31172d7b508a740391Structure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class RC_11e12158254e5be6bde5f4ba88bacb32Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ChartLegendStyling", "chartLegendStylingAttr", "ChartLegendStyling", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_4bdf4d0ba65c5e31172d7b508a740391Structure());
                    }, true, OutSystemsChartsModel.ST_4bdf4d0ba65c5e31172d7b508a740391Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_11e12158254e5be6bde5f4ba88bacb32(new RC_11e12158254e5be6bde5f4ba88bacb32.RecordClass({
                    chartLegendStylingAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.RC_11e12158254e5be6bde5f4ba88bacb32 = RC_11e12158254e5be6bde5f4ba88bacb32Inner;

        RC_11e12158254e5be6bde5f4ba88bacb32Inner._isAnonymousRecord = true;
        RC_11e12158254e5be6bde5f4ba88bacb32Inner.UniqueId = "11e12158-254e-5be6-bde5-f4ba88bacb32";
        var RC_11e12158254e5be6bde5f4ba88bacb32 = RC_11e12158254e5be6bde5f4ba88bacb32Inner;
        RC_11e12158254e5be6bde5f4ba88bacb32.init();
    }
});

define("OutSystemsCharts.model$EN_12004a480323e1caa1d0e9cb95ddd993EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class EN_12004a480323e1caa1d0e9cb95ddd993EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Type", "typeAttr", "Type", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_12004a480323e1caa1d0e9cb95ddd993EntityRecord(new EN_12004a480323e1caa1d0e9cb95ddd993EntityRecord.RecordClass({
                    typeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.EN_12004a480323e1caa1d0e9cb95ddd993EntityRecord = EN_12004a480323e1caa1d0e9cb95ddd993EntityRecordInner;

        var EN_12004a480323e1caa1d0e9cb95ddd993EntityRecord = EN_12004a480323e1caa1d0e9cb95ddd993EntityRecordInner;
        EN_12004a480323e1caa1d0e9cb95ddd993EntityRecord.init();
    }
});

define("OutSystemsCharts.model$ST_73d23e1a8b3eeebfe9bad962b0689dfcStructure", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class ST_73d23e1a8b3eeebfe9bad962b0689dfcStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("GridLineStep", "gridLineStepAttr", "GridLineStep", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("LinesColor", "linesColorAttr", "LinesColor", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "#ccd6eb";
                    }, true),
                    this.attr("LinesWidth", "linesWidthAttr", "LinesWidth", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsChartsModel.ST_73d23e1a8b3eeebfe9bad962b0689dfcStructure = ST_73d23e1a8b3eeebfe9bad962b0689dfcStructureInner;

        var ST_73d23e1a8b3eeebfe9bad962b0689dfcStructure = ST_73d23e1a8b3eeebfe9bad962b0689dfcStructureInner;
        ST_73d23e1a8b3eeebfe9bad962b0689dfcStructure.init();
    }
});

define("OutSystemsCharts.model$RC_1566355ec5faf3138acdd10ae68fb068", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_73d23e1a8b3eeebfe9bad962b0689dfcStructure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class RC_1566355ec5faf3138acdd10ae68fb068Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("YAxisGridLinesStyling", "yAxisGridLinesStylingAttr", "YAxisGridLinesStyling", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_73d23e1a8b3eeebfe9bad962b0689dfcStructure());
                    }, true, OutSystemsChartsModel.ST_73d23e1a8b3eeebfe9bad962b0689dfcStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_1566355ec5faf3138acdd10ae68fb068(new RC_1566355ec5faf3138acdd10ae68fb068.RecordClass({
                    yAxisGridLinesStylingAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.RC_1566355ec5faf3138acdd10ae68fb068 = RC_1566355ec5faf3138acdd10ae68fb068Inner;

        RC_1566355ec5faf3138acdd10ae68fb068Inner._isAnonymousRecord = true;
        RC_1566355ec5faf3138acdd10ae68fb068Inner.UniqueId = "1566355e-c5fa-f313-8acd-d10ae68fb068";
        var RC_1566355ec5faf3138acdd10ae68fb068 = RC_1566355ec5faf3138acdd10ae68fb068Inner;
        RC_1566355ec5faf3138acdd10ae68fb068.init();
    }
});

define("OutSystemsCharts.model$ST_5f03a71663878a59bb35497ebf79ae21Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class ST_5f03a71663878a59bb35497ebf79ae21StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ValuesPrefix", "valuesPrefixAttr", "ValuesPrefix", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ValuesSuffix", "valuesSuffixAttr", "ValuesSuffix", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("LabelColor", "labelColorAttr", "LabelColor", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "#666666";
                    }, true),
                    this.attr("LabelSize", "labelSizeAttr", "LabelSize", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 11;
                    }, true),
                    this.attr("LabelRotation", "labelRotationAttr", "LabelRotation", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.BuiltinFunctions.integerToDecimal(0);
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsChartsModel.ST_5f03a71663878a59bb35497ebf79ae21Structure = ST_5f03a71663878a59bb35497ebf79ae21StructureInner;

        var ST_5f03a71663878a59bb35497ebf79ae21Structure = ST_5f03a71663878a59bb35497ebf79ae21StructureInner;
        ST_5f03a71663878a59bb35497ebf79ae21Structure.init();
    }
});

define("OutSystemsCharts.model$RL_16d1d7be8bdee511276e135660ca682a", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_5f03a71663878a59bb35497ebf79ae21Structure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_16d1d7be8bdee511276e135660ca682a extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.ST_5f03a71663878a59bb35497ebf79ae21Structure;
        }

    }

    OutSystemsChartsModel.RL_16d1d7be8bdee511276e135660ca682a = RL_16d1d7be8bdee511276e135660ca682a;

});

define("OutSystemsCharts.model$ST_e5a78fd1ee745d24f58f7ce224fde0f0Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class ST_e5a78fd1ee745d24f58f7ce224fde0f0StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("LineColor", "lineColorAttr", "LineColor", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "#ccd6eb";
                    }, true),
                    this.attr("LineWidth", "lineWidthAttr", "LineWidth", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsChartsModel.ST_e5a78fd1ee745d24f58f7ce224fde0f0Structure = ST_e5a78fd1ee745d24f58f7ce224fde0f0StructureInner;

        var ST_e5a78fd1ee745d24f58f7ce224fde0f0Structure = ST_e5a78fd1ee745d24f58f7ce224fde0f0StructureInner;
        ST_e5a78fd1ee745d24f58f7ce224fde0f0Structure.init();
    }
});

define("OutSystemsCharts.model$RC_d614572f93a79200a3235ee26034df62", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_e5a78fd1ee745d24f58f7ce224fde0f0Structure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class RC_d614572f93a79200a3235ee26034df62Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("YAxisStyling", "yAxisStylingAttr", "YAxisStyling", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_e5a78fd1ee745d24f58f7ce224fde0f0Structure());
                    }, true, OutSystemsChartsModel.ST_e5a78fd1ee745d24f58f7ce224fde0f0Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_d614572f93a79200a3235ee26034df62(new RC_d614572f93a79200a3235ee26034df62.RecordClass({
                    yAxisStylingAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.RC_d614572f93a79200a3235ee26034df62 = RC_d614572f93a79200a3235ee26034df62Inner;

        RC_d614572f93a79200a3235ee26034df62Inner._isAnonymousRecord = true;
        RC_d614572f93a79200a3235ee26034df62Inner.UniqueId = "d614572f-93a7-9200-a323-5ee26034df62";
        var RC_d614572f93a79200a3235ee26034df62 = RC_d614572f93a79200a3235ee26034df62Inner;
        RC_d614572f93a79200a3235ee26034df62.init();
    }
});

define("OutSystemsCharts.model$RL_199d1a1f8719ad3951d7b2b7a9c7e9bd", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$RC_d614572f93a79200a3235ee26034df62"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_199d1a1f8719ad3951d7b2b7a9c7e9bd extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.RC_d614572f93a79200a3235ee26034df62;
        }

    }

    OutSystemsChartsModel.RL_199d1a1f8719ad3951d7b2b7a9c7e9bd = RL_199d1a1f8719ad3951d7b2b7a9c7e9bd;

});

define("OutSystemsCharts.model$BasicTypeList<Text>", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class TextList extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OS.DataTypes.DataTypes.Text;
        }

    }

    OutSystemsChartsModel.TextList = TextList;

});

define("OutSystemsCharts.model$ST_7eaeb3ff8676da7994fdf13c6a5a2bffStructure", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class ST_7eaeb3ff8676da7994fdf13c6a5a2bffStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("PropertyPathList", "propertyPathListAttr", "PropertyPathList", true, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
                    }, true, OS.DataTypes.TextList),
                    this.attr("Value", "valueAttr", "Value", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsChartsModel.ST_7eaeb3ff8676da7994fdf13c6a5a2bffStructure = ST_7eaeb3ff8676da7994fdf13c6a5a2bffStructureInner;

        var ST_7eaeb3ff8676da7994fdf13c6a5a2bffStructure = ST_7eaeb3ff8676da7994fdf13c6a5a2bffStructureInner;
        ST_7eaeb3ff8676da7994fdf13c6a5a2bffStructure.init();
    }
});

define("OutSystemsCharts.model$RC_a193d684326814a4a15e932d0cccd250", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_7eaeb3ff8676da7994fdf13c6a5a2bffStructure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class RC_a193d684326814a4a15e932d0cccd250Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("PropertyValue", "propertyValueAttr", "PropertyValue", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_7eaeb3ff8676da7994fdf13c6a5a2bffStructure());
                    }, true, OutSystemsChartsModel.ST_7eaeb3ff8676da7994fdf13c6a5a2bffStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_a193d684326814a4a15e932d0cccd250(new RC_a193d684326814a4a15e932d0cccd250.RecordClass({
                    propertyValueAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.RC_a193d684326814a4a15e932d0cccd250 = RC_a193d684326814a4a15e932d0cccd250Inner;

        RC_a193d684326814a4a15e932d0cccd250Inner._isAnonymousRecord = true;
        RC_a193d684326814a4a15e932d0cccd250Inner.UniqueId = "a193d684-3268-14a4-a15e-932d0cccd250";
        var RC_a193d684326814a4a15e932d0cccd250 = RC_a193d684326814a4a15e932d0cccd250Inner;
        RC_a193d684326814a4a15e932d0cccd250.init();
    }
});

define("OutSystemsCharts.model$RL_1acc6ead75cf05d5d64a0e1585d65072", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$RC_a193d684326814a4a15e932d0cccd250"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_1acc6ead75cf05d5d64a0e1585d65072 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.RC_a193d684326814a4a15e932d0cccd250;
        }

    }

    OutSystemsChartsModel.RL_1acc6ead75cf05d5d64a0e1585d65072 = RL_1acc6ead75cf05d5d64a0e1585d65072;

});

define("OutSystemsCharts.model$ST_1ae4a810d4cabfbdad2f5a6ea4ed9737Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class ST_1ae4a810d4cabfbdad2f5a6ea4ed9737StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ShowInLegend", "showInLegendAttr", "ShowInLegend", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, true),
                    this.attr("xAxisId", "xAxisIdAttr", "xAxisId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("yAxisId", "yAxisIdAttr", "yAxisId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsChartsModel.ST_1ae4a810d4cabfbdad2f5a6ea4ed9737Structure = ST_1ae4a810d4cabfbdad2f5a6ea4ed9737StructureInner;

        var ST_1ae4a810d4cabfbdad2f5a6ea4ed9737Structure = ST_1ae4a810d4cabfbdad2f5a6ea4ed9737StructureInner;
        ST_1ae4a810d4cabfbdad2f5a6ea4ed9737Structure.init();
    }
});

define("OutSystemsCharts.model$ST_1bc129a4ddcba67fb3de5717d1aad835Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class ST_1bc129a4ddcba67fb3de5717d1aad835StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("GridLineStep", "gridLineStepAttr", "GridLineStep", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("LinesColor", "linesColorAttr", "LinesColor", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "#ccd6eb";
                    }, true),
                    this.attr("LinesWidth", "linesWidthAttr", "LinesWidth", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsChartsModel.ST_1bc129a4ddcba67fb3de5717d1aad835Structure = ST_1bc129a4ddcba67fb3de5717d1aad835StructureInner;

        var ST_1bc129a4ddcba67fb3de5717d1aad835Structure = ST_1bc129a4ddcba67fb3de5717d1aad835StructureInner;
        ST_1bc129a4ddcba67fb3de5717d1aad835Structure.init();
    }
});

define("OutSystemsCharts.model$RL_1c28901efde3032d217fafbbe1ebcdba", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$EN_c09810fe22e8a6a144d75dbd4ee5e70eEntityRecord"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_1c28901efde3032d217fafbbe1ebcdba extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.EN_c09810fe22e8a6a144d75dbd4ee5e70eEntityRecord;
        }

    }

    OutSystemsChartsModel.RL_1c28901efde3032d217fafbbe1ebcdba = RL_1c28901efde3032d217fafbbe1ebcdba;

});

define("OutSystemsCharts.model$ST_499ab2dc67e078b5441ac528549f73d9Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class ST_499ab2dc67e078b5441ac528549f73d9StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("plotShadow", "plotShadowAttr", "plotShadow", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("type", "typeAttr", "type", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("renderTo", "renderToAttr", "renderTo", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("height", "heightAttr", "height", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("animation", "animationAttr", "animation", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, true),
                    this.attr("backgroundColor", "backgroundColorAttr", "backgroundColor", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "rgba(255, 255, 255, 0)";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsChartsModel.ST_499ab2dc67e078b5441ac528549f73d9Structure = ST_499ab2dc67e078b5441ac528549f73d9StructureInner;

        var ST_499ab2dc67e078b5441ac528549f73d9Structure = ST_499ab2dc67e078b5441ac528549f73d9StructureInner;
        ST_499ab2dc67e078b5441ac528549f73d9Structure.init();
    }
});

define("OutSystemsCharts.model$ST_639b8c480159ce740702f0a0cf3b55a5Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class ST_639b8c480159ce740702f0a0cf3b55a5StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ShowDataPointValues", "showDataPointValuesAttr", "ShowDataPointValues", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("UseAnimation", "useAnimationAttr", "UseAnimation", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsChartsModel.ST_639b8c480159ce740702f0a0cf3b55a5Structure = ST_639b8c480159ce740702f0a0cf3b55a5StructureInner;

        var ST_639b8c480159ce740702f0a0cf3b55a5Structure = ST_639b8c480159ce740702f0a0cf3b55a5StructureInner;
        ST_639b8c480159ce740702f0a0cf3b55a5Structure.init();
    }
});

define("OutSystemsCharts.model$ST_87973ae5f6c07db6193b59603f29dce6Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class ST_87973ae5f6c07db6193b59603f29dce6StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Title", "titleAttr", "Title", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("LabelsRotation", "labelsRotationAttr", "LabelsRotation", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("MinValue", "minValueAttr", "MinValue", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("MaxValue", "maxValueAttr", "MaxValue", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ValuesType", "valuesTypeAttr", "ValuesType", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsChartsModel.ST_87973ae5f6c07db6193b59603f29dce6Structure = ST_87973ae5f6c07db6193b59603f29dce6StructureInner;

        var ST_87973ae5f6c07db6193b59603f29dce6Structure = ST_87973ae5f6c07db6193b59603f29dce6StructureInner;
        ST_87973ae5f6c07db6193b59603f29dce6Structure.init();
    }
});

define("OutSystemsCharts.model$ST_80a54fdc5a44237df505b3e5b63ad0feStructure", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class ST_80a54fdc5a44237df505b3e5b63ad0feStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Title", "titleAttr", "Title", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("MinValue", "minValueAttr", "MinValue", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.BuiltinFunctions.integerToDecimal(-2147483647);
                    }, true),
                    this.attr("MaxValue", "maxValueAttr", "MaxValue", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.BuiltinFunctions.integerToDecimal(-2147483647);
                    }, true),
                    this.attr("ValuesPrefix", "valuesPrefixAttr", "ValuesPrefix", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ValuesSuffix", "valuesSuffixAttr", "ValuesSuffix", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("GridLineStep", "gridLineStepAttr", "GridLineStep", false, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.BuiltinFunctions.integerToDecimal(-2147483647);
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsChartsModel.ST_80a54fdc5a44237df505b3e5b63ad0feStructure = ST_80a54fdc5a44237df505b3e5b63ad0feStructureInner;

        var ST_80a54fdc5a44237df505b3e5b63ad0feStructure = ST_80a54fdc5a44237df505b3e5b63ad0feStructureInner;
        ST_80a54fdc5a44237df505b3e5b63ad0feStructure.init();
    }
});

define("OutSystemsCharts.model$ST_c4b262744850a3b08ce7036d0595a8dfStructure", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class ST_c4b262744850a3b08ce7036d0595a8dfStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("DataPointFormatsJSON", "dataPointFormatsJSONAttr", "DataPointFormatsJSON", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("DataSeriesFormatsJSON", "dataSeriesFormatsJSONAttr", "DataSeriesFormatsJSON", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("XAxisJSON", "xAxisJSONAttr", "XAxisJSON", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("YAxisJSON", "yAxisJSONAttr", "YAxisJSON", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("HighchartsJSON", "highchartsJSONAttr", "HighchartsJSON", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsChartsModel.ST_c4b262744850a3b08ce7036d0595a8dfStructure = ST_c4b262744850a3b08ce7036d0595a8dfStructureInner;

        var ST_c4b262744850a3b08ce7036d0595a8dfStructure = ST_c4b262744850a3b08ce7036d0595a8dfStructureInner;
        ST_c4b262744850a3b08ce7036d0595a8dfStructure.init();
    }
});

define("OutSystemsCharts.model$ST_69d759501e759b3aa378b0f06e6de282Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_499ab2dc67e078b5441ac528549f73d9Structure", "OutSystemsCharts.model$ST_639b8c480159ce740702f0a0cf3b55a5Structure", "OutSystemsCharts.model$ST_87973ae5f6c07db6193b59603f29dce6Structure", "OutSystemsCharts.model$ST_80a54fdc5a44237df505b3e5b63ad0feStructure", "OutSystemsCharts.model$ST_c4b262744850a3b08ce7036d0595a8dfStructure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class ST_69d759501e759b3aa378b0f06e6de282StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("chart", "chartAttr", "chart", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_499ab2dc67e078b5441ac528549f73d9Structure());
                    }, true, OutSystemsChartsModel.ST_499ab2dc67e078b5441ac528549f73d9Structure),
                    this.attr("chartFormat", "chartFormatAttr", "chartFormat", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_639b8c480159ce740702f0a0cf3b55a5Structure());
                    }, true, OutSystemsChartsModel.ST_639b8c480159ce740702f0a0cf3b55a5Structure),
                    this.attr("stackingTypeId", "stackingTypeIdAttr", "stackingTypeId", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("xAxisFormat", "xAxisFormatAttr", "xAxisFormat", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_87973ae5f6c07db6193b59603f29dce6Structure());
                    }, true, OutSystemsChartsModel.ST_87973ae5f6c07db6193b59603f29dce6Structure),
                    this.attr("xAxisType", "xAxisTypeAttr", "xAxisType", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("yAxisFormat", "yAxisFormatAttr", "yAxisFormat", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_80a54fdc5a44237df505b3e5b63ad0feStructure());
                    }, true, OutSystemsChartsModel.ST_80a54fdc5a44237df505b3e5b63ad0feStructure),
                    this.attr("legendPositionId", "legendPositionIdAttr", "legendPositionId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("uniqueId", "uniqueIdAttr", "uniqueId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("advancedFormat_JSON", "advancedFormat_JSONAttr", "advancedFormat_JSON", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_c4b262744850a3b08ce7036d0595a8dfStructure());
                    }, true, OutSystemsChartsModel.ST_c4b262744850a3b08ce7036d0595a8dfStructure),
                    this.attr("isClickable", "isClickableAttr", "isClickable", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsChartsModel.ST_69d759501e759b3aa378b0f06e6de282Structure = ST_69d759501e759b3aa378b0f06e6de282StructureInner;

        var ST_69d759501e759b3aa378b0f06e6de282Structure = ST_69d759501e759b3aa378b0f06e6de282StructureInner;
        ST_69d759501e759b3aa378b0f06e6de282Structure.init();
    }
});

define("OutSystemsCharts.model$RL_1d037414aa3694f17d0340fda139b00a", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_69d759501e759b3aa378b0f06e6de282Structure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_1d037414aa3694f17d0340fda139b00a extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.ST_69d759501e759b3aa378b0f06e6de282Structure;
        }

    }

    OutSystemsChartsModel.RL_1d037414aa3694f17d0340fda139b00a = RL_1d037414aa3694f17d0340fda139b00a;

});

define("OutSystemsCharts.model$ST_b3834d7ed62611267b2b87b3fd352441Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class ST_b3834d7ed62611267b2b87b3fd352441StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ValuesType", "valuesTypeAttr", "ValuesType", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsChartsModel.staticEntities.axisValuesType.linear;
                    }, true),
                    this.attr("Crosshair", "crosshairAttr", "Crosshair", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("Opposite", "oppositeAttr", "Opposite", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsChartsModel.ST_b3834d7ed62611267b2b87b3fd352441Structure = ST_b3834d7ed62611267b2b87b3fd352441StructureInner;

        var ST_b3834d7ed62611267b2b87b3fd352441Structure = ST_b3834d7ed62611267b2b87b3fd352441StructureInner;
        ST_b3834d7ed62611267b2b87b3fd352441Structure.init();
    }
});

define("OutSystemsCharts.model$RC_65ec7e7c1193943ac7d316b6ce7d97cc", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_b3834d7ed62611267b2b87b3fd352441Structure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class RC_65ec7e7c1193943ac7d316b6ce7d97ccInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("YAxisOptionalConfigs", "yAxisOptionalConfigsAttr", "YAxisOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_b3834d7ed62611267b2b87b3fd352441Structure());
                    }, true, OutSystemsChartsModel.ST_b3834d7ed62611267b2b87b3fd352441Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_65ec7e7c1193943ac7d316b6ce7d97cc(new RC_65ec7e7c1193943ac7d316b6ce7d97cc.RecordClass({
                    yAxisOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.RC_65ec7e7c1193943ac7d316b6ce7d97cc = RC_65ec7e7c1193943ac7d316b6ce7d97ccInner;

        RC_65ec7e7c1193943ac7d316b6ce7d97ccInner._isAnonymousRecord = true;
        RC_65ec7e7c1193943ac7d316b6ce7d97ccInner.UniqueId = "65ec7e7c-1193-943a-c7d3-16b6ce7d97cc";
        var RC_65ec7e7c1193943ac7d316b6ce7d97cc = RC_65ec7e7c1193943ac7d316b6ce7d97ccInner;
        RC_65ec7e7c1193943ac7d316b6ce7d97cc.init();
    }
});

define("OutSystemsCharts.model$RL_1d8b3d5b48dbe9440703b14a3e969bae", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$RC_65ec7e7c1193943ac7d316b6ce7d97cc"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_1d8b3d5b48dbe9440703b14a3e969bae extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.RC_65ec7e7c1193943ac7d316b6ce7d97cc;
        }

    }

    OutSystemsChartsModel.RL_1d8b3d5b48dbe9440703b14a3e969bae = RL_1d8b3d5b48dbe9440703b14a3e969bae;

});

define("OutSystemsCharts.model$RC_f3000856fa7c3354ce371360ce2db23a", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_5f03a71663878a59bb35497ebf79ae21Structure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class RC_f3000856fa7c3354ce371360ce2db23aInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("AxisLabel", "axisLabelAttr", "AxisLabel", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_5f03a71663878a59bb35497ebf79ae21Structure());
                    }, true, OutSystemsChartsModel.ST_5f03a71663878a59bb35497ebf79ae21Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_f3000856fa7c3354ce371360ce2db23a(new RC_f3000856fa7c3354ce371360ce2db23a.RecordClass({
                    axisLabelAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.RC_f3000856fa7c3354ce371360ce2db23a = RC_f3000856fa7c3354ce371360ce2db23aInner;

        RC_f3000856fa7c3354ce371360ce2db23aInner._isAnonymousRecord = true;
        RC_f3000856fa7c3354ce371360ce2db23aInner.UniqueId = "f3000856-fa7c-3354-ce37-1360ce2db23a";
        var RC_f3000856fa7c3354ce371360ce2db23a = RC_f3000856fa7c3354ce371360ce2db23aInner;
        RC_f3000856fa7c3354ce371360ce2db23a.init();
    }
});

define("OutSystemsCharts.model$RL_2010e40590918539b1d6aa694f83204c", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$RC_f3000856fa7c3354ce371360ce2db23a"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_2010e40590918539b1d6aa694f83204c extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.RC_f3000856fa7c3354ce371360ce2db23a;
        }

    }

    OutSystemsChartsModel.RL_2010e40590918539b1d6aa694f83204c = RL_2010e40590918539b1d6aa694f83204c;

});

define("OutSystemsCharts.model$ST_8921a71e9062659e96a587c9434dca93Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_9695772c3b8ae4caa8a4e3fb1dfb5bb8Structure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class ST_8921a71e9062659e96a587c9434dca93StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("ExtendedClass", "extendedClassAttr", "extendedClass", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Filename", "filenameAttr", "filename", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("MenuExtendedClass", "menuExtendedClassAttr", "menuExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("DownloadJPEG", "downloadJPEGAttr", "downloadJPEG", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_9695772c3b8ae4caa8a4e3fb1dfb5bb8Structure());
                    }, true, OutSystemsChartsModel.ST_9695772c3b8ae4caa8a4e3fb1dfb5bb8Structure),
                    this.attr("DownloadPDF", "downloadPDFAttr", "downloadPDF", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_9695772c3b8ae4caa8a4e3fb1dfb5bb8Structure());
                    }, true, OutSystemsChartsModel.ST_9695772c3b8ae4caa8a4e3fb1dfb5bb8Structure),
                    this.attr("DownloadPNG", "downloadPNGAttr", "downloadPNG", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_9695772c3b8ae4caa8a4e3fb1dfb5bb8Structure());
                    }, true, OutSystemsChartsModel.ST_9695772c3b8ae4caa8a4e3fb1dfb5bb8Structure),
                    this.attr("DownloadSVG", "downloadSVGAttr", "downloadSVG", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_9695772c3b8ae4caa8a4e3fb1dfb5bb8Structure());
                    }, true, OutSystemsChartsModel.ST_9695772c3b8ae4caa8a4e3fb1dfb5bb8Structure),
                    this.attr("DownloadCSV", "downloadCSVAttr", "downloadCSV", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_9695772c3b8ae4caa8a4e3fb1dfb5bb8Structure());
                    }, true, OutSystemsChartsModel.ST_9695772c3b8ae4caa8a4e3fb1dfb5bb8Structure),
                    this.attr("DownloadXLS", "downloadXLSAttr", "downloadXLS", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_9695772c3b8ae4caa8a4e3fb1dfb5bb8Structure());
                    }, true, OutSystemsChartsModel.ST_9695772c3b8ae4caa8a4e3fb1dfb5bb8Structure),
                    this.attr("PrintChart", "printChartAttr", "printChart", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_9695772c3b8ae4caa8a4e3fb1dfb5bb8Structure());
                    }, true, OutSystemsChartsModel.ST_9695772c3b8ae4caa8a4e3fb1dfb5bb8Structure),
                    this.attr("ViewInFullScreen", "viewInFullScreenAttr", "viewInFullScreen", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_9695772c3b8ae4caa8a4e3fb1dfb5bb8Structure());
                    }, true, OutSystemsChartsModel.ST_9695772c3b8ae4caa8a4e3fb1dfb5bb8Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsChartsModel.ST_8921a71e9062659e96a587c9434dca93Structure = ST_8921a71e9062659e96a587c9434dca93StructureInner;

        var ST_8921a71e9062659e96a587c9434dca93Structure = ST_8921a71e9062659e96a587c9434dca93StructureInner;
        ST_8921a71e9062659e96a587c9434dca93Structure.init();
    }
});

define("OutSystemsCharts.model$RL_20f420181e8d6572dc90698942655c6c", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_8921a71e9062659e96a587c9434dca93Structure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_20f420181e8d6572dc90698942655c6c extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.ST_8921a71e9062659e96a587c9434dca93Structure;
        }

    }

    OutSystemsChartsModel.RL_20f420181e8d6572dc90698942655c6c = RL_20f420181e8d6572dc90698942655c6c;

});

define("OutSystemsCharts.model$ST_73b5287c34f36a04fe003585368d6e1bStructure", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class ST_73b5287c34f36a04fe003585368d6e1bStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("HideMarker", "hideMarkerAttr", "HideMarker", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true),
                    this.attr("FillColor", "fillColorAttr", "FillColor", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("BorderColor", "borderColorAttr", "BorderColor", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("BorderWidth", "borderWidthAttr", "BorderWidth", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Radius", "radiusAttr", "Radius", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 4;
                    }, true),
                    this.attr("MarkerSymbol", "markerSymbolAttr", "MarkerSymbol", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsChartsModel.ST_73b5287c34f36a04fe003585368d6e1bStructure = ST_73b5287c34f36a04fe003585368d6e1bStructureInner;

        var ST_73b5287c34f36a04fe003585368d6e1bStructure = ST_73b5287c34f36a04fe003585368d6e1bStructureInner;
        ST_73b5287c34f36a04fe003585368d6e1bStructure.init();
    }
});

define("OutSystemsCharts.model$RC_23f04252aed9962b8ebdb251db000b96", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_73b5287c34f36a04fe003585368d6e1bStructure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class RC_23f04252aed9962b8ebdb251db000b96Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("SeriesStylingMarker", "seriesStylingMarkerAttr", "SeriesStylingMarker", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_73b5287c34f36a04fe003585368d6e1bStructure());
                    }, true, OutSystemsChartsModel.ST_73b5287c34f36a04fe003585368d6e1bStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_23f04252aed9962b8ebdb251db000b96(new RC_23f04252aed9962b8ebdb251db000b96.RecordClass({
                    seriesStylingMarkerAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.RC_23f04252aed9962b8ebdb251db000b96 = RC_23f04252aed9962b8ebdb251db000b96Inner;

        RC_23f04252aed9962b8ebdb251db000b96Inner._isAnonymousRecord = true;
        RC_23f04252aed9962b8ebdb251db000b96Inner.UniqueId = "23f04252-aed9-962b-8ebd-b251db000b96";
        var RC_23f04252aed9962b8ebdb251db000b96 = RC_23f04252aed9962b8ebdb251db000b96Inner;
        RC_23f04252aed9962b8ebdb251db000b96.init();
    }
});

define("OutSystemsCharts.model$ST_7c45885429f626cd0775ccbea11ace15Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class ST_7c45885429f626cd0775ccbea11ace15StructureInner extends
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

        OutSystemsChartsModel.ST_7c45885429f626cd0775ccbea11ace15Structure = ST_7c45885429f626cd0775ccbea11ace15StructureInner;

        var ST_7c45885429f626cd0775ccbea11ace15Structure = ST_7c45885429f626cd0775ccbea11ace15StructureInner;
        ST_7c45885429f626cd0775ccbea11ace15Structure.init();
    }
});

define("OutSystemsCharts.model$RC_d64ed7ef21079464b9daea706fb2c2b4", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_7c45885429f626cd0775ccbea11ace15Structure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class RC_d64ed7ef21079464b9daea706fb2c2b4Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ReturnMessage", "returnMessageAttr", "ReturnMessage", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_7c45885429f626cd0775ccbea11ace15Structure());
                    }, true, OutSystemsChartsModel.ST_7c45885429f626cd0775ccbea11ace15Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_d64ed7ef21079464b9daea706fb2c2b4(new RC_d64ed7ef21079464b9daea706fb2c2b4.RecordClass({
                    returnMessageAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.RC_d64ed7ef21079464b9daea706fb2c2b4 = RC_d64ed7ef21079464b9daea706fb2c2b4Inner;

        RC_d64ed7ef21079464b9daea706fb2c2b4Inner._isAnonymousRecord = true;
        RC_d64ed7ef21079464b9daea706fb2c2b4Inner.UniqueId = "d64ed7ef-2107-9464-b9da-ea706fb2c2b4";
        var RC_d64ed7ef21079464b9daea706fb2c2b4 = RC_d64ed7ef21079464b9daea706fb2c2b4Inner;
        RC_d64ed7ef21079464b9daea706fb2c2b4.init();
    }
});

define("OutSystemsCharts.model$RL_242f8462babd3a752e896659b32eeb6c", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$RC_d64ed7ef21079464b9daea706fb2c2b4"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_242f8462babd3a752e896659b32eeb6c extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.RC_d64ed7ef21079464b9daea706fb2c2b4;
        }

    }

    OutSystemsChartsModel.RL_242f8462babd3a752e896659b32eeb6c = RL_242f8462babd3a752e896659b32eeb6c;

});

define("OutSystemsCharts.model$EN_adefbfd7e853fa2cb46e2f151738d1b5EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class EN_adefbfd7e853fa2cb46e2f151738d1b5EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_adefbfd7e853fa2cb46e2f151738d1b5EntityRecord(new EN_adefbfd7e853fa2cb46e2f151738d1b5EntityRecord.RecordClass({
                    idAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.EN_adefbfd7e853fa2cb46e2f151738d1b5EntityRecord = EN_adefbfd7e853fa2cb46e2f151738d1b5EntityRecordInner;

        var EN_adefbfd7e853fa2cb46e2f151738d1b5EntityRecord = EN_adefbfd7e853fa2cb46e2f151738d1b5EntityRecordInner;
        EN_adefbfd7e853fa2cb46e2f151738d1b5EntityRecord.init();
    }
});

define("OutSystemsCharts.model$RL_2476bc64a03c867c444fcb5729161ac6", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$EN_adefbfd7e853fa2cb46e2f151738d1b5EntityRecord"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_2476bc64a03c867c444fcb5729161ac6 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.EN_adefbfd7e853fa2cb46e2f151738d1b5EntityRecord;
        }

    }

    OutSystemsChartsModel.RL_2476bc64a03c867c444fcb5729161ac6 = RL_2476bc64a03c867c444fcb5729161ac6;

});

define("OutSystemsCharts.model$RL_2486f6833a6be16aa4e796d4596cbf53", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_7eaeb3ff8676da7994fdf13c6a5a2bffStructure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_2486f6833a6be16aa4e796d4596cbf53 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.ST_7eaeb3ff8676da7994fdf13c6a5a2bffStructure;
        }

    }

    OutSystemsChartsModel.RL_2486f6833a6be16aa4e796d4596cbf53 = RL_2486f6833a6be16aa4e796d4596cbf53;

});

define("OutSystemsCharts.model$EN_f2ce8f552d142202c9a955104f8986e7EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class EN_f2ce8f552d142202c9a955104f8986e7EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Layout", "layoutAttr", "Layout", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_f2ce8f552d142202c9a955104f8986e7EntityRecord(new EN_f2ce8f552d142202c9a955104f8986e7EntityRecord.RecordClass({
                    layoutAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.EN_f2ce8f552d142202c9a955104f8986e7EntityRecord = EN_f2ce8f552d142202c9a955104f8986e7EntityRecordInner;

        var EN_f2ce8f552d142202c9a955104f8986e7EntityRecord = EN_f2ce8f552d142202c9a955104f8986e7EntityRecordInner;
        EN_f2ce8f552d142202c9a955104f8986e7EntityRecord.init();
    }
});

define("OutSystemsCharts.model$RC_250abb7806127d6d6c565bcd6bd8fd6f", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$EN_f2ce8f552d142202c9a955104f8986e7EntityRecord"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class RC_250abb7806127d6d6c565bcd6bd8fd6fInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("LegendLayout", "legendLayoutAttr", "LegendLayout", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.EN_f2ce8f552d142202c9a955104f8986e7EntityRecord());
                    }, true, OutSystemsChartsModel.EN_f2ce8f552d142202c9a955104f8986e7EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_250abb7806127d6d6c565bcd6bd8fd6f(new RC_250abb7806127d6d6c565bcd6bd8fd6f.RecordClass({
                    legendLayoutAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.RC_250abb7806127d6d6c565bcd6bd8fd6f = RC_250abb7806127d6d6c565bcd6bd8fd6fInner;

        RC_250abb7806127d6d6c565bcd6bd8fd6fInner._isAnonymousRecord = true;
        RC_250abb7806127d6d6c565bcd6bd8fd6fInner.UniqueId = "250abb78-0612-7d6d-6c56-5bcd6bd8fd6f";
        var RC_250abb7806127d6d6c565bcd6bd8fd6f = RC_250abb7806127d6d6c565bcd6bd8fd6fInner;
        RC_250abb7806127d6d6c565bcd6bd8fd6f.init();
    }
});

define("OutSystemsCharts.model$EN_dd503b13df684d7ec8cc34d86edadd21EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class EN_dd503b13df684d7ec8cc34d86edadd21EntityRecordInner extends
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

        OutSystemsChartsModel.EN_dd503b13df684d7ec8cc34d86edadd21EntityRecord = EN_dd503b13df684d7ec8cc34d86edadd21EntityRecordInner;

        var EN_dd503b13df684d7ec8cc34d86edadd21EntityRecord = EN_dd503b13df684d7ec8cc34d86edadd21EntityRecordInner;
        EN_dd503b13df684d7ec8cc34d86edadd21EntityRecord.init();
    }
});

define("OutSystemsCharts.model$RC_d2362d0d0bb36623a5f0020a47954dfc", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$EN_dd503b13df684d7ec8cc34d86edadd21EntityRecord"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class RC_d2362d0d0bb36623a5f0020a47954dfcInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("LegendPosition_v1", "legendPosition_v1Attr", "LegendPosition_v1", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.EN_dd503b13df684d7ec8cc34d86edadd21EntityRecord());
                    }, true, OutSystemsChartsModel.EN_dd503b13df684d7ec8cc34d86edadd21EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_d2362d0d0bb36623a5f0020a47954dfc(new RC_d2362d0d0bb36623a5f0020a47954dfc.RecordClass({
                    legendPosition_v1Attr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.RC_d2362d0d0bb36623a5f0020a47954dfc = RC_d2362d0d0bb36623a5f0020a47954dfcInner;

        RC_d2362d0d0bb36623a5f0020a47954dfcInner._isAnonymousRecord = true;
        RC_d2362d0d0bb36623a5f0020a47954dfcInner.UniqueId = "d2362d0d-0bb3-6623-a5f0-020a47954dfc";
        var RC_d2362d0d0bb36623a5f0020a47954dfc = RC_d2362d0d0bb36623a5f0020a47954dfcInner;
        RC_d2362d0d0bb36623a5f0020a47954dfc.init();
    }
});

define("OutSystemsCharts.model$RL_257ff75163dcb7f5df49442c867d608a", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$RC_d2362d0d0bb36623a5f0020a47954dfc"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_257ff75163dcb7f5df49442c867d608a extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.RC_d2362d0d0bb36623a5f0020a47954dfc;
        }

    }

    OutSystemsChartsModel.RL_257ff75163dcb7f5df49442c867d608a = RL_257ff75163dcb7f5df49442c867d608a;

});

define("OutSystemsCharts.model$RC_268a48d1c903fcee31c2d9b87f8f364f", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_1bc129a4ddcba67fb3de5717d1aad835Structure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class RC_268a48d1c903fcee31c2d9b87f8f364fInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("XAxisGridLinesStyling", "xAxisGridLinesStylingAttr", "XAxisGridLinesStyling", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_1bc129a4ddcba67fb3de5717d1aad835Structure());
                    }, true, OutSystemsChartsModel.ST_1bc129a4ddcba67fb3de5717d1aad835Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_268a48d1c903fcee31c2d9b87f8f364f(new RC_268a48d1c903fcee31c2d9b87f8f364f.RecordClass({
                    xAxisGridLinesStylingAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.RC_268a48d1c903fcee31c2d9b87f8f364f = RC_268a48d1c903fcee31c2d9b87f8f364fInner;

        RC_268a48d1c903fcee31c2d9b87f8f364fInner._isAnonymousRecord = true;
        RC_268a48d1c903fcee31c2d9b87f8f364fInner.UniqueId = "268a48d1-c903-fcee-31c2-d9b87f8f364f";
        var RC_268a48d1c903fcee31c2d9b87f8f364f = RC_268a48d1c903fcee31c2d9b87f8f364fInner;
        RC_268a48d1c903fcee31c2d9b87f8f364f.init();
    }
});

define("OutSystemsCharts.model$EN_b204725747cd7cf563ecf5a8b8d794e0EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class EN_b204725747cd7cf563ecf5a8b8d794e0EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Event", "eventAttr", "Event", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_b204725747cd7cf563ecf5a8b8d794e0EntityRecord(new EN_b204725747cd7cf563ecf5a8b8d794e0EntityRecord.RecordClass({
                    eventAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.EN_b204725747cd7cf563ecf5a8b8d794e0EntityRecord = EN_b204725747cd7cf563ecf5a8b8d794e0EntityRecordInner;

        var EN_b204725747cd7cf563ecf5a8b8d794e0EntityRecord = EN_b204725747cd7cf563ecf5a8b8d794e0EntityRecordInner;
        EN_b204725747cd7cf563ecf5a8b8d794e0EntityRecord.init();
    }
});

define("OutSystemsCharts.model$RL_26d345a20c798307b7e957ba8cd7e3bb", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$EN_b204725747cd7cf563ecf5a8b8d794e0EntityRecord"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_26d345a20c798307b7e957ba8cd7e3bb extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.EN_b204725747cd7cf563ecf5a8b8d794e0EntityRecord;
        }

    }

    OutSystemsChartsModel.RL_26d345a20c798307b7e957ba8cd7e3bb = RL_26d345a20c798307b7e957ba8cd7e3bb;

});

define("OutSystemsCharts.model$RC_2b9e41428d5c5ca3b04a80be4ce98f53", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_639b8c480159ce740702f0a0cf3b55a5Structure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class RC_2b9e41428d5c5ca3b04a80be4ce98f53Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Legacy_ChartFormat", "legacy_ChartFormatAttr", "Legacy_ChartFormat", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_639b8c480159ce740702f0a0cf3b55a5Structure());
                    }, true, OutSystemsChartsModel.ST_639b8c480159ce740702f0a0cf3b55a5Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_2b9e41428d5c5ca3b04a80be4ce98f53(new RC_2b9e41428d5c5ca3b04a80be4ce98f53.RecordClass({
                    legacy_ChartFormatAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.RC_2b9e41428d5c5ca3b04a80be4ce98f53 = RC_2b9e41428d5c5ca3b04a80be4ce98f53Inner;

        RC_2b9e41428d5c5ca3b04a80be4ce98f53Inner._isAnonymousRecord = true;
        RC_2b9e41428d5c5ca3b04a80be4ce98f53Inner.UniqueId = "2b9e4142-8d5c-5ca3-b04a-80be4ce98f53";
        var RC_2b9e41428d5c5ca3b04a80be4ce98f53 = RC_2b9e41428d5c5ca3b04a80be4ce98f53Inner;
        RC_2b9e41428d5c5ca3b04a80be4ce98f53.init();
    }
});

define("OutSystemsCharts.model$RL_2c26fb87fc1f13f5c33922f9f936d791", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$RC_250abb7806127d6d6c565bcd6bd8fd6f"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_2c26fb87fc1f13f5c33922f9f936d791 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.RC_250abb7806127d6d6c565bcd6bd8fd6f;
        }

    }

    OutSystemsChartsModel.RL_2c26fb87fc1f13f5c33922f9f936d791 = RL_2c26fb87fc1f13f5c33922f9f936d791;

});

define("OutSystemsCharts.model$RL_2d8295065e00df34d4c74c380fd9cf47", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_b3834d7ed62611267b2b87b3fd352441Structure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_2d8295065e00df34d4c74c380fd9cf47 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.ST_b3834d7ed62611267b2b87b3fd352441Structure;
        }

    }

    OutSystemsChartsModel.RL_2d8295065e00df34d4c74c380fd9cf47 = RL_2d8295065e00df34d4c74c380fd9cf47;

});

define("OutSystemsCharts.model$EN_c206e072354abd28c734a686a107801eEntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class EN_c206e072354abd28c734a686a107801eEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Order", "orderAttr", "Order", false, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsChartsModel.EN_c206e072354abd28c734a686a107801eEntityRecord = EN_c206e072354abd28c734a686a107801eEntityRecordInner;

        var EN_c206e072354abd28c734a686a107801eEntityRecord = EN_c206e072354abd28c734a686a107801eEntityRecordInner;
        EN_c206e072354abd28c734a686a107801eEntityRecord.init();
    }
});

define("OutSystemsCharts.model$RC_700a042c18a52538bbda09226917700a", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$EN_c206e072354abd28c734a686a107801eEntityRecord"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class RC_700a042c18a52538bbda09226917700aInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("XAxisValuesType_v1", "xAxisValuesType_v1Attr", "XAxisValuesType_v1", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.EN_c206e072354abd28c734a686a107801eEntityRecord());
                    }, true, OutSystemsChartsModel.EN_c206e072354abd28c734a686a107801eEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_700a042c18a52538bbda09226917700a(new RC_700a042c18a52538bbda09226917700a.RecordClass({
                    xAxisValuesType_v1Attr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.RC_700a042c18a52538bbda09226917700a = RC_700a042c18a52538bbda09226917700aInner;

        RC_700a042c18a52538bbda09226917700aInner._isAnonymousRecord = true;
        RC_700a042c18a52538bbda09226917700aInner.UniqueId = "700a042c-18a5-2538-bbda-09226917700a";
        var RC_700a042c18a52538bbda09226917700a = RC_700a042c18a52538bbda09226917700aInner;
        RC_700a042c18a52538bbda09226917700a.init();
    }
});

define("OutSystemsCharts.model$RL_2ed820148ec0066544c2529736074c83", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$RC_700a042c18a52538bbda09226917700a"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_2ed820148ec0066544c2529736074c83 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.RC_700a042c18a52538bbda09226917700a;
        }

    }

    OutSystemsChartsModel.RL_2ed820148ec0066544c2529736074c83 = RL_2ed820148ec0066544c2529736074c83;

});

define("OutSystemsCharts.model$EN_88376fed4a3ecf20e3b58a99fb8820c0EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class EN_88376fed4a3ecf20e3b58a99fb8820c0EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ModuleName", "moduleNameAttr", "ModuleName", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_88376fed4a3ecf20e3b58a99fb8820c0EntityRecord(new EN_88376fed4a3ecf20e3b58a99fb8820c0EntityRecord.RecordClass({
                    moduleNameAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.EN_88376fed4a3ecf20e3b58a99fb8820c0EntityRecord = EN_88376fed4a3ecf20e3b58a99fb8820c0EntityRecordInner;

        var EN_88376fed4a3ecf20e3b58a99fb8820c0EntityRecord = EN_88376fed4a3ecf20e3b58a99fb8820c0EntityRecordInner;
        EN_88376fed4a3ecf20e3b58a99fb8820c0EntityRecord.init();
    }
});

define("OutSystemsCharts.model$RC_2ef79bd810cdf6d872efd5fb430d0cec", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$EN_88376fed4a3ecf20e3b58a99fb8820c0EntityRecord"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class RC_2ef79bd810cdf6d872efd5fb430d0cecInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("HighchartModules", "highchartModulesAttr", "HighchartModules", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.EN_88376fed4a3ecf20e3b58a99fb8820c0EntityRecord());
                    }, true, OutSystemsChartsModel.EN_88376fed4a3ecf20e3b58a99fb8820c0EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_2ef79bd810cdf6d872efd5fb430d0cec(new RC_2ef79bd810cdf6d872efd5fb430d0cec.RecordClass({
                    highchartModulesAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.RC_2ef79bd810cdf6d872efd5fb430d0cec = RC_2ef79bd810cdf6d872efd5fb430d0cecInner;

        RC_2ef79bd810cdf6d872efd5fb430d0cecInner._isAnonymousRecord = true;
        RC_2ef79bd810cdf6d872efd5fb430d0cecInner.UniqueId = "2ef79bd8-10cd-f6d8-72ef-d5fb430d0cec";
        var RC_2ef79bd810cdf6d872efd5fb430d0cec = RC_2ef79bd810cdf6d872efd5fb430d0cecInner;
        RC_2ef79bd810cdf6d872efd5fb430d0cec.init();
    }
});

define("OutSystemsCharts.model$EN_e3e66f92a97b1d29d00b88c019c33babEntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class EN_e3e66f92a97b1d29d00b88c019c33babEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 0;
                    }, true),
                    this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsChartsModel.EN_e3e66f92a97b1d29d00b88c019c33babEntityRecord = EN_e3e66f92a97b1d29d00b88c019c33babEntityRecordInner;

        var EN_e3e66f92a97b1d29d00b88c019c33babEntityRecord = EN_e3e66f92a97b1d29d00b88c019c33babEntityRecordInner;
        EN_e3e66f92a97b1d29d00b88c019c33babEntityRecord.init();
    }
});

define("OutSystemsCharts.model$RC_ace3a46bceb2ccb5db97f9bdb5d49f20", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$EN_e3e66f92a97b1d29d00b88c019c33babEntityRecord"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class RC_ace3a46bceb2ccb5db97f9bdb5d49f20Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("XAxisType", "xAxisTypeAttr", "XAxisType", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.EN_e3e66f92a97b1d29d00b88c019c33babEntityRecord());
                    }, true, OutSystemsChartsModel.EN_e3e66f92a97b1d29d00b88c019c33babEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_ace3a46bceb2ccb5db97f9bdb5d49f20(new RC_ace3a46bceb2ccb5db97f9bdb5d49f20.RecordClass({
                    xAxisTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.RC_ace3a46bceb2ccb5db97f9bdb5d49f20 = RC_ace3a46bceb2ccb5db97f9bdb5d49f20Inner;

        RC_ace3a46bceb2ccb5db97f9bdb5d49f20Inner._isAnonymousRecord = true;
        RC_ace3a46bceb2ccb5db97f9bdb5d49f20Inner.UniqueId = "ace3a46b-ceb2-ccb5-db97-f9bdb5d49f20";
        var RC_ace3a46bceb2ccb5db97f9bdb5d49f20 = RC_ace3a46bceb2ccb5db97f9bdb5d49f20Inner;
        RC_ace3a46bceb2ccb5db97f9bdb5d49f20.init();
    }
});

define("OutSystemsCharts.model$RL_30d3f6cc8e52b0c767d068f23649e54e", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$RC_ace3a46bceb2ccb5db97f9bdb5d49f20"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_30d3f6cc8e52b0c767d068f23649e54e extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.RC_ace3a46bceb2ccb5db97f9bdb5d49f20;
        }

    }

    OutSystemsChartsModel.RL_30d3f6cc8e52b0c767d068f23649e54e = RL_30d3f6cc8e52b0c767d068f23649e54e;

});

define("OutSystemsCharts.model$ST_34313c5cf94d7ce3c5404858c22fafd9Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class ST_34313c5cf94d7ce3c5404858c22fafd9StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Value", "valueAttr", "Value", true, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true),
                    this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("SeriesName", "seriesNameAttr", "SeriesName", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Color", "colorAttr", "Color", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Tooltip", "tooltipAttr", "Tooltip", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsChartsModel.ST_34313c5cf94d7ce3c5404858c22fafd9Structure = ST_34313c5cf94d7ce3c5404858c22fafd9StructureInner;

        var ST_34313c5cf94d7ce3c5404858c22fafd9Structure = ST_34313c5cf94d7ce3c5404858c22fafd9StructureInner;
        ST_34313c5cf94d7ce3c5404858c22fafd9Structure.init();
    }
});

define("OutSystemsCharts.model$RC_34d5d5ab5565b38a57ae5f2563a8c466", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_1ae4a810d4cabfbdad2f5a6ea4ed9737Structure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class RC_34d5d5ab5565b38a57ae5f2563a8c466Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("SeriesStylingOptionalConfigs", "seriesStylingOptionalConfigsAttr", "SeriesStylingOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_1ae4a810d4cabfbdad2f5a6ea4ed9737Structure());
                    }, true, OutSystemsChartsModel.ST_1ae4a810d4cabfbdad2f5a6ea4ed9737Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_34d5d5ab5565b38a57ae5f2563a8c466(new RC_34d5d5ab5565b38a57ae5f2563a8c466.RecordClass({
                    seriesStylingOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.RC_34d5d5ab5565b38a57ae5f2563a8c466 = RC_34d5d5ab5565b38a57ae5f2563a8c466Inner;

        RC_34d5d5ab5565b38a57ae5f2563a8c466Inner._isAnonymousRecord = true;
        RC_34d5d5ab5565b38a57ae5f2563a8c466Inner.UniqueId = "34d5d5ab-5565-b38a-57ae-5f2563a8c466";
        var RC_34d5d5ab5565b38a57ae5f2563a8c466 = RC_34d5d5ab5565b38a57ae5f2563a8c466Inner;
        RC_34d5d5ab5565b38a57ae5f2563a8c466.init();
    }
});

define("OutSystemsCharts.model$RC_35e37489cb29f7a304d512a403000665", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$EN_0c0b103cba961483054afffbc30b3066EntityRecord"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class RC_35e37489cb29f7a304d512a403000665Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("StackingType_v1", "stackingType_v1Attr", "StackingType_v1", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.EN_0c0b103cba961483054afffbc30b3066EntityRecord());
                    }, true, OutSystemsChartsModel.EN_0c0b103cba961483054afffbc30b3066EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_35e37489cb29f7a304d512a403000665(new RC_35e37489cb29f7a304d512a403000665.RecordClass({
                    stackingType_v1Attr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.RC_35e37489cb29f7a304d512a403000665 = RC_35e37489cb29f7a304d512a403000665Inner;

        RC_35e37489cb29f7a304d512a403000665Inner._isAnonymousRecord = true;
        RC_35e37489cb29f7a304d512a403000665Inner.UniqueId = "35e37489-cb29-f7a3-04d5-12a403000665";
        var RC_35e37489cb29f7a304d512a403000665 = RC_35e37489cb29f7a304d512a403000665Inner;
        RC_35e37489cb29f7a304d512a403000665.init();
    }
});

define("OutSystemsCharts.model$RL_385664760b64c50456043c93c2ea560e", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$EN_0aaaca7207138bf7860a19b299026910EntityRecord"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_385664760b64c50456043c93c2ea560e extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.EN_0aaaca7207138bf7860a19b299026910EntityRecord;
        }

    }

    OutSystemsChartsModel.RL_385664760b64c50456043c93c2ea560e = RL_385664760b64c50456043c93c2ea560e;

});

define("OutSystemsCharts.model$RL_392b64bd075fc192968825bc0bc06ae0", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$RC_35e37489cb29f7a304d512a403000665"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_392b64bd075fc192968825bc0bc06ae0 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.RC_35e37489cb29f7a304d512a403000665;
        }

    }

    OutSystemsChartsModel.RL_392b64bd075fc192968825bc0bc06ae0 = RL_392b64bd075fc192968825bc0bc06ae0;

});

define("OutSystemsCharts.model$RL_3d3acfa79e82ad633c83009eac2033d6", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_0398a87aaf5fccfd4503642b3b7d1dc0Structure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_3d3acfa79e82ad633c83009eac2033d6 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.ST_0398a87aaf5fccfd4503642b3b7d1dc0Structure;
        }

    }

    OutSystemsChartsModel.RL_3d3acfa79e82ad633c83009eac2033d6 = RL_3d3acfa79e82ad633c83009eac2033d6;

});

define("OutSystemsCharts.model$RC_76c0cdc972cd99ba5628cbffcee3234a", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_f281012c72a5f666adafe0a5edc16938Structure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class RC_76c0cdc972cd99ba5628cbffcee3234aInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Chart", "chartAttr", "Chart", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_f281012c72a5f666adafe0a5edc16938Structure());
                    }, true, OutSystemsChartsModel.ST_f281012c72a5f666adafe0a5edc16938Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_76c0cdc972cd99ba5628cbffcee3234a(new RC_76c0cdc972cd99ba5628cbffcee3234a.RecordClass({
                    chartAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.RC_76c0cdc972cd99ba5628cbffcee3234a = RC_76c0cdc972cd99ba5628cbffcee3234aInner;

        RC_76c0cdc972cd99ba5628cbffcee3234aInner._isAnonymousRecord = true;
        RC_76c0cdc972cd99ba5628cbffcee3234aInner.UniqueId = "76c0cdc9-72cd-99ba-5628-cbffcee3234a";
        var RC_76c0cdc972cd99ba5628cbffcee3234a = RC_76c0cdc972cd99ba5628cbffcee3234aInner;
        RC_76c0cdc972cd99ba5628cbffcee3234a.init();
    }
});

define("OutSystemsCharts.model$RL_4025de551529030bc6dab3b7e625efb9", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$RC_76c0cdc972cd99ba5628cbffcee3234a"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_4025de551529030bc6dab3b7e625efb9 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.RC_76c0cdc972cd99ba5628cbffcee3234a;
        }

    }

    OutSystemsChartsModel.RL_4025de551529030bc6dab3b7e625efb9 = RL_4025de551529030bc6dab3b7e625efb9;

});

define("OutSystemsCharts.model$RC_424d57a2d666c8edb0343600d6705eee", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_87973ae5f6c07db6193b59603f29dce6Structure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class RC_424d57a2d666c8edb0343600d6705eeeInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Legacy_XAxisFormat", "legacy_XAxisFormatAttr", "Legacy_XAxisFormat", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_87973ae5f6c07db6193b59603f29dce6Structure());
                    }, true, OutSystemsChartsModel.ST_87973ae5f6c07db6193b59603f29dce6Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_424d57a2d666c8edb0343600d6705eee(new RC_424d57a2d666c8edb0343600d6705eee.RecordClass({
                    legacy_XAxisFormatAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.RC_424d57a2d666c8edb0343600d6705eee = RC_424d57a2d666c8edb0343600d6705eeeInner;

        RC_424d57a2d666c8edb0343600d6705eeeInner._isAnonymousRecord = true;
        RC_424d57a2d666c8edb0343600d6705eeeInner.UniqueId = "424d57a2-d666-c8ed-b034-3600d6705eee";
        var RC_424d57a2d666c8edb0343600d6705eee = RC_424d57a2d666c8edb0343600d6705eeeInner;
        RC_424d57a2d666c8edb0343600d6705eee.init();
    }
});

define("OutSystemsCharts.model$RC_60c0eb9676746216236a33a6fde51bea", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_499ab2dc67e078b5441ac528549f73d9Structure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class RC_60c0eb9676746216236a33a6fde51beaInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Legacy_Chart", "legacy_ChartAttr", "Legacy_Chart", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_499ab2dc67e078b5441ac528549f73d9Structure());
                    }, true, OutSystemsChartsModel.ST_499ab2dc67e078b5441ac528549f73d9Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_60c0eb9676746216236a33a6fde51bea(new RC_60c0eb9676746216236a33a6fde51bea.RecordClass({
                    legacy_ChartAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.RC_60c0eb9676746216236a33a6fde51bea = RC_60c0eb9676746216236a33a6fde51beaInner;

        RC_60c0eb9676746216236a33a6fde51beaInner._isAnonymousRecord = true;
        RC_60c0eb9676746216236a33a6fde51beaInner.UniqueId = "60c0eb96-7674-6216-236a-33a6fde51bea";
        var RC_60c0eb9676746216236a33a6fde51bea = RC_60c0eb9676746216236a33a6fde51beaInner;
        RC_60c0eb9676746216236a33a6fde51bea.init();
    }
});

define("OutSystemsCharts.model$RL_444933f3bd90c65af4b0dbb5addda529", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$RC_60c0eb9676746216236a33a6fde51bea"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_444933f3bd90c65af4b0dbb5addda529 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.RC_60c0eb9676746216236a33a6fde51bea;
        }

    }

    OutSystemsChartsModel.RL_444933f3bd90c65af4b0dbb5addda529 = RL_444933f3bd90c65af4b0dbb5addda529;

});

define("OutSystemsCharts.model$EN_46b2d81a8018ce98d89b836ab78051f0EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class EN_46b2d81a8018ce98d89b836ab78051f0EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Version", "versionAttr", "Version", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_46b2d81a8018ce98d89b836ab78051f0EntityRecord(new EN_46b2d81a8018ce98d89b836ab78051f0EntityRecord.RecordClass({
                    versionAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.EN_46b2d81a8018ce98d89b836ab78051f0EntityRecord = EN_46b2d81a8018ce98d89b836ab78051f0EntityRecordInner;

        var EN_46b2d81a8018ce98d89b836ab78051f0EntityRecord = EN_46b2d81a8018ce98d89b836ab78051f0EntityRecordInner;
        EN_46b2d81a8018ce98d89b836ab78051f0EntityRecord.init();
    }
});

define("OutSystemsCharts.model$RL_47f3ae0e3a771af284bc005aecd805c5", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_73d23e1a8b3eeebfe9bad962b0689dfcStructure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_47f3ae0e3a771af284bc005aecd805c5 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.ST_73d23e1a8b3eeebfe9bad962b0689dfcStructure;
        }

    }

    OutSystemsChartsModel.RL_47f3ae0e3a771af284bc005aecd805c5 = RL_47f3ae0e3a771af284bc005aecd805c5;

});

define("OutSystemsCharts.model$ST_6bed431434274b65c17cd0339b1ecaa5Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class ST_6bed431434274b65c17cd0339b1ecaa5StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("FillColor", "fillColorAttr", "FillColor", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("LineColor", "lineColorAttr", "LineColor", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("LineWidth", "lineWidthAttr", "LineWidth", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Opacity", "opacityAttr", "Opacity", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsChartsModel.ST_6bed431434274b65c17cd0339b1ecaa5Structure = ST_6bed431434274b65c17cd0339b1ecaa5StructureInner;

        var ST_6bed431434274b65c17cd0339b1ecaa5Structure = ST_6bed431434274b65c17cd0339b1ecaa5StructureInner;
        ST_6bed431434274b65c17cd0339b1ecaa5Structure.init();
    }
});

define("OutSystemsCharts.model$RL_48d4c629d7b0e572d393ee61d6511e0d", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_6bed431434274b65c17cd0339b1ecaa5Structure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_48d4c629d7b0e572d393ee61d6511e0d extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.ST_6bed431434274b65c17cd0339b1ecaa5Structure;
        }

    }

    OutSystemsChartsModel.RL_48d4c629d7b0e572d393ee61d6511e0d = RL_48d4c629d7b0e572d393ee61d6511e0d;

});

define("OutSystemsCharts.model$ST_4b22cda3b03d150ad8e37c82029c7e70Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class ST_4b22cda3b03d150ad8e37c82029c7e70StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("UniqueId", "uniqueIdAttr", "UniqueId", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Visible", "visibleAttr", "Visible", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return true;
                    }, true),
                    this.attr("Position", "positionAttr", "Position", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Layout", "layoutAttr", "Layout", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return OutSystemsChartsModel.staticEntities.legendLayout.horizontal;
                    }, true),
                    this.attr("ExtendedClass", "extendedClassAttr", "ExtendedClass", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("BackgroundColor", "backgroundColorAttr", "BackgroundColor", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "transparent";
                    }, true),
                    this.attr("ItemsDistance", "itemsDistanceAttr", "ItemsDistance", true, false, OS.DataTypes.DataTypes.Integer, function() {
                        return 20;
                    }, true),
                    this.attr("Floating", "floatingAttr", "Floating", true, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsChartsModel.ST_4b22cda3b03d150ad8e37c82029c7e70Structure = ST_4b22cda3b03d150ad8e37c82029c7e70StructureInner;

        var ST_4b22cda3b03d150ad8e37c82029c7e70Structure = ST_4b22cda3b03d150ad8e37c82029c7e70StructureInner;
        ST_4b22cda3b03d150ad8e37c82029c7e70Structure.init();
    }
});

define("OutSystemsCharts.model$RC_d4877c3ce032067b5e79d1ff12e3ea33", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_0398a87aaf5fccfd4503642b3b7d1dc0Structure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class RC_d4877c3ce032067b5e79d1ff12e3ea33Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("XAxisOptionalConfigs", "xAxisOptionalConfigsAttr", "XAxisOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_0398a87aaf5fccfd4503642b3b7d1dc0Structure());
                    }, true, OutSystemsChartsModel.ST_0398a87aaf5fccfd4503642b3b7d1dc0Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_d4877c3ce032067b5e79d1ff12e3ea33(new RC_d4877c3ce032067b5e79d1ff12e3ea33.RecordClass({
                    xAxisOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.RC_d4877c3ce032067b5e79d1ff12e3ea33 = RC_d4877c3ce032067b5e79d1ff12e3ea33Inner;

        RC_d4877c3ce032067b5e79d1ff12e3ea33Inner._isAnonymousRecord = true;
        RC_d4877c3ce032067b5e79d1ff12e3ea33Inner.UniqueId = "d4877c3c-e032-067b-5e79-d1ff12e3ea33";
        var RC_d4877c3ce032067b5e79d1ff12e3ea33 = RC_d4877c3ce032067b5e79d1ff12e3ea33Inner;
        RC_d4877c3ce032067b5e79d1ff12e3ea33.init();
    }
});

define("OutSystemsCharts.model$RL_4baf2ad963b01441a599b98b0c84efd8", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$RC_d4877c3ce032067b5e79d1ff12e3ea33"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_4baf2ad963b01441a599b98b0c84efd8 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.RC_d4877c3ce032067b5e79d1ff12e3ea33;
        }

    }

    OutSystemsChartsModel.RL_4baf2ad963b01441a599b98b0c84efd8 = RL_4baf2ad963b01441a599b98b0c84efd8;

});

define("OutSystemsCharts.model$RC_4c0c00419258d867de6c9a39d39cbd40", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_c4b262744850a3b08ce7036d0595a8dfStructure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class RC_4c0c00419258d867de6c9a39d39cbd40Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Legacy_AdvancedFormat_JSON", "legacy_AdvancedFormat_JSONAttr", "Legacy_AdvancedFormat_JSON", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_c4b262744850a3b08ce7036d0595a8dfStructure());
                    }, true, OutSystemsChartsModel.ST_c4b262744850a3b08ce7036d0595a8dfStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_4c0c00419258d867de6c9a39d39cbd40(new RC_4c0c00419258d867de6c9a39d39cbd40.RecordClass({
                    legacy_AdvancedFormat_JSONAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.RC_4c0c00419258d867de6c9a39d39cbd40 = RC_4c0c00419258d867de6c9a39d39cbd40Inner;

        RC_4c0c00419258d867de6c9a39d39cbd40Inner._isAnonymousRecord = true;
        RC_4c0c00419258d867de6c9a39d39cbd40Inner.UniqueId = "4c0c0041-9258-d867-de6c-9a39d39cbd40";
        var RC_4c0c00419258d867de6c9a39d39cbd40 = RC_4c0c00419258d867de6c9a39d39cbd40Inner;
        RC_4c0c00419258d867de6c9a39d39cbd40.init();
    }
});

define("OutSystemsCharts.model$RL_4e53ade62caaa844df4a59d80245f6bc", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$EN_88376fed4a3ecf20e3b58a99fb8820c0EntityRecord"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_4e53ade62caaa844df4a59d80245f6bc extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.EN_88376fed4a3ecf20e3b58a99fb8820c0EntityRecord;
        }

    }

    OutSystemsChartsModel.RL_4e53ade62caaa844df4a59d80245f6bc = RL_4e53ade62caaa844df4a59d80245f6bc;

});

define("OutSystemsCharts.model$ST_50c794173b7ac3485b1cda7be99f6b43Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class ST_50c794173b7ac3485b1cda7be99f6b43StructureInner extends
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

        OutSystemsChartsModel.ST_50c794173b7ac3485b1cda7be99f6b43Structure = ST_50c794173b7ac3485b1cda7be99f6b43StructureInner;

        var ST_50c794173b7ac3485b1cda7be99f6b43Structure = ST_50c794173b7ac3485b1cda7be99f6b43StructureInner;
        ST_50c794173b7ac3485b1cda7be99f6b43Structure.init();
    }
});

define("OutSystemsCharts.model$RC_8bfcc1d381d104953fbf01fd54a56e45", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$EN_12004a480323e1caa1d0e9cb95ddd993EntityRecord"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class RC_8bfcc1d381d104953fbf01fd54a56e45Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("SeriesType", "seriesTypeAttr", "SeriesType", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.EN_12004a480323e1caa1d0e9cb95ddd993EntityRecord());
                    }, true, OutSystemsChartsModel.EN_12004a480323e1caa1d0e9cb95ddd993EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_8bfcc1d381d104953fbf01fd54a56e45(new RC_8bfcc1d381d104953fbf01fd54a56e45.RecordClass({
                    seriesTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.RC_8bfcc1d381d104953fbf01fd54a56e45 = RC_8bfcc1d381d104953fbf01fd54a56e45Inner;

        RC_8bfcc1d381d104953fbf01fd54a56e45Inner._isAnonymousRecord = true;
        RC_8bfcc1d381d104953fbf01fd54a56e45Inner.UniqueId = "8bfcc1d3-81d1-0495-3fbf-01fd54a56e45";
        var RC_8bfcc1d381d104953fbf01fd54a56e45 = RC_8bfcc1d381d104953fbf01fd54a56e45Inner;
        RC_8bfcc1d381d104953fbf01fd54a56e45.init();
    }
});

define("OutSystemsCharts.model$RL_5183695f922445931daf051508280c46", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$RC_8bfcc1d381d104953fbf01fd54a56e45"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_5183695f922445931daf051508280c46 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.RC_8bfcc1d381d104953fbf01fd54a56e45;
        }

    }

    OutSystemsChartsModel.RL_5183695f922445931daf051508280c46 = RL_5183695f922445931daf051508280c46;

});

define("OutSystemsCharts.model$ST_9498db02a236485a96a27db0bd61b81eStructure", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class ST_9498db02a236485a96a27db0bd61b81eStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Value", "valueAttr", "Value", true, false, OS.DataTypes.DataTypes.Decimal, function() {
                        return OS.DataTypes.Decimal.defaultValue;
                    }, true),
                    this.attr("SeriesName", "seriesNameAttr", "SeriesName", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Tooltip", "tooltipAttr", "Tooltip", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("Color", "colorAttr", "Color", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsChartsModel.ST_9498db02a236485a96a27db0bd61b81eStructure = ST_9498db02a236485a96a27db0bd61b81eStructureInner;

        var ST_9498db02a236485a96a27db0bd61b81eStructure = ST_9498db02a236485a96a27db0bd61b81eStructureInner;
        ST_9498db02a236485a96a27db0bd61b81eStructure.init();
    }
});

define("OutSystemsCharts.model$RL_52a96e0500b1d6d23d93e10409e37890", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_9498db02a236485a96a27db0bd61b81eStructure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_52a96e0500b1d6d23d93e10409e37890 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.ST_9498db02a236485a96a27db0bd61b81eStructure;
        }

    }

    OutSystemsChartsModel.RL_52a96e0500b1d6d23d93e10409e37890 = RL_52a96e0500b1d6d23d93e10409e37890;

});

define("OutSystemsCharts.model$EN_91855acd6e96303d3e1dafe035c00f0fEntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class EN_91855acd6e96303d3e1dafe035c00f0fEntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Type", "typeAttr", "Type", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_91855acd6e96303d3e1dafe035c00f0fEntityRecord(new EN_91855acd6e96303d3e1dafe035c00f0fEntityRecord.RecordClass({
                    typeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.EN_91855acd6e96303d3e1dafe035c00f0fEntityRecord = EN_91855acd6e96303d3e1dafe035c00f0fEntityRecordInner;

        var EN_91855acd6e96303d3e1dafe035c00f0fEntityRecord = EN_91855acd6e96303d3e1dafe035c00f0fEntityRecordInner;
        EN_91855acd6e96303d3e1dafe035c00f0fEntityRecord.init();
    }
});

define("OutSystemsCharts.model$RC_5411a63fb30fbc2379b448666b5ca564", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$EN_91855acd6e96303d3e1dafe035c00f0fEntityRecord"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class RC_5411a63fb30fbc2379b448666b5ca564Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("AxisValuesType", "axisValuesTypeAttr", "AxisValuesType", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.EN_91855acd6e96303d3e1dafe035c00f0fEntityRecord());
                    }, true, OutSystemsChartsModel.EN_91855acd6e96303d3e1dafe035c00f0fEntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_5411a63fb30fbc2379b448666b5ca564(new RC_5411a63fb30fbc2379b448666b5ca564.RecordClass({
                    axisValuesTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.RC_5411a63fb30fbc2379b448666b5ca564 = RC_5411a63fb30fbc2379b448666b5ca564Inner;

        RC_5411a63fb30fbc2379b448666b5ca564Inner._isAnonymousRecord = true;
        RC_5411a63fb30fbc2379b448666b5ca564Inner.UniqueId = "5411a63f-b30f-bc23-79b4-48666b5ca564";
        var RC_5411a63fb30fbc2379b448666b5ca564 = RC_5411a63fb30fbc2379b448666b5ca564Inner;
        RC_5411a63fb30fbc2379b448666b5ca564.init();
    }
});

define("OutSystemsCharts.model$RC_f012f1f96abab76663b00566b2d7923c", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_8921a71e9062659e96a587c9434dca93Structure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class RC_f012f1f96abab76663b00566b2d7923cInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ExportInternalConfigs", "exportInternalConfigsAttr", "ExportInternalConfigs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_8921a71e9062659e96a587c9434dca93Structure());
                    }, true, OutSystemsChartsModel.ST_8921a71e9062659e96a587c9434dca93Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_f012f1f96abab76663b00566b2d7923c(new RC_f012f1f96abab76663b00566b2d7923c.RecordClass({
                    exportInternalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.RC_f012f1f96abab76663b00566b2d7923c = RC_f012f1f96abab76663b00566b2d7923cInner;

        RC_f012f1f96abab76663b00566b2d7923cInner._isAnonymousRecord = true;
        RC_f012f1f96abab76663b00566b2d7923cInner.UniqueId = "f012f1f9-6aba-b766-63b0-0566b2d7923c";
        var RC_f012f1f96abab76663b00566b2d7923c = RC_f012f1f96abab76663b00566b2d7923cInner;
        RC_f012f1f96abab76663b00566b2d7923c.init();
    }
});

define("OutSystemsCharts.model$RL_5536ec464968b36acf9bf64db701ad28", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$RC_f012f1f96abab76663b00566b2d7923c"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_5536ec464968b36acf9bf64db701ad28 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.RC_f012f1f96abab76663b00566b2d7923c;
        }

    }

    OutSystemsChartsModel.RL_5536ec464968b36acf9bf64db701ad28 = RL_5536ec464968b36acf9bf64db701ad28;

});

define("OutSystemsCharts.model$RC_9d592254256b14619af5d64d439cbb46", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_223dfcdc1e3c93bfb0e422a434fb180fStructure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class RC_9d592254256b14619af5d64d439cbb46Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ChartExportMenuOptions", "chartExportMenuOptionsAttr", "ChartExportMenuOptions", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_223dfcdc1e3c93bfb0e422a434fb180fStructure());
                    }, true, OutSystemsChartsModel.ST_223dfcdc1e3c93bfb0e422a434fb180fStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_9d592254256b14619af5d64d439cbb46(new RC_9d592254256b14619af5d64d439cbb46.RecordClass({
                    chartExportMenuOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.RC_9d592254256b14619af5d64d439cbb46 = RC_9d592254256b14619af5d64d439cbb46Inner;

        RC_9d592254256b14619af5d64d439cbb46Inner._isAnonymousRecord = true;
        RC_9d592254256b14619af5d64d439cbb46Inner.UniqueId = "9d592254-256b-1461-9af5-d64d439cbb46";
        var RC_9d592254256b14619af5d64d439cbb46 = RC_9d592254256b14619af5d64d439cbb46Inner;
        RC_9d592254256b14619af5d64d439cbb46.init();
    }
});

define("OutSystemsCharts.model$RL_5548bb2b7b5f256577c9bf216c5ac7ea", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$RC_9d592254256b14619af5d64d439cbb46"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_5548bb2b7b5f256577c9bf216c5ac7ea extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.RC_9d592254256b14619af5d64d439cbb46;
        }

    }

    OutSystemsChartsModel.RL_5548bb2b7b5f256577c9bf216c5ac7ea = RL_5548bb2b7b5f256577c9bf216c5ac7ea;

});

define("OutSystemsCharts.model$RC_c9cf2667636b777abbc288cec73d1375", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$EN_46b2d81a8018ce98d89b836ab78051f0EntityRecord"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class RC_c9cf2667636b777abbc288cec73d1375Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("OSChartVersion", "oSChartVersionAttr", "OSChartVersion", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.EN_46b2d81a8018ce98d89b836ab78051f0EntityRecord());
                    }, true, OutSystemsChartsModel.EN_46b2d81a8018ce98d89b836ab78051f0EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_c9cf2667636b777abbc288cec73d1375(new RC_c9cf2667636b777abbc288cec73d1375.RecordClass({
                    oSChartVersionAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.RC_c9cf2667636b777abbc288cec73d1375 = RC_c9cf2667636b777abbc288cec73d1375Inner;

        RC_c9cf2667636b777abbc288cec73d1375Inner._isAnonymousRecord = true;
        RC_c9cf2667636b777abbc288cec73d1375Inner.UniqueId = "c9cf2667-636b-777a-bbc2-88cec73d1375";
        var RC_c9cf2667636b777abbc288cec73d1375 = RC_c9cf2667636b777abbc288cec73d1375Inner;
        RC_c9cf2667636b777abbc288cec73d1375.init();
    }
});

define("OutSystemsCharts.model$RL_55a62ed059bf1f478956d0d1019493c1", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$RC_c9cf2667636b777abbc288cec73d1375"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_55a62ed059bf1f478956d0d1019493c1 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.RC_c9cf2667636b777abbc288cec73d1375;
        }

    }

    OutSystemsChartsModel.RL_55a62ed059bf1f478956d0d1019493c1 = RL_55a62ed059bf1f478956d0d1019493c1;

});

define("OutSystemsCharts.model$RL_55e12cf788c1bd3aa183436567f86c54", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$EN_0c0b103cba961483054afffbc30b3066EntityRecord"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_55e12cf788c1bd3aa183436567f86c54 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.EN_0c0b103cba961483054afffbc30b3066EntityRecord;
        }

    }

    OutSystemsChartsModel.RL_55e12cf788c1bd3aa183436567f86c54 = RL_55e12cf788c1bd3aa183436567f86c54;

});

define("OutSystemsCharts.model$RL_571b103d9a95a8c3a2deb1712897dca8", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$EN_dd503b13df684d7ec8cc34d86edadd21EntityRecord"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_571b103d9a95a8c3a2deb1712897dca8 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.EN_dd503b13df684d7ec8cc34d86edadd21EntityRecord;
        }

    }

    OutSystemsChartsModel.RL_571b103d9a95a8c3a2deb1712897dca8 = RL_571b103d9a95a8c3a2deb1712897dca8;

});

define("OutSystemsCharts.model$RC_b433f1b3ae72f9da85b20eb8b0abb0e8", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_6bed431434274b65c17cd0339b1ecaa5Structure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class RC_b433f1b3ae72f9da85b20eb8b0abb0e8Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("SeriesStyling", "seriesStylingAttr", "SeriesStyling", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_6bed431434274b65c17cd0339b1ecaa5Structure());
                    }, true, OutSystemsChartsModel.ST_6bed431434274b65c17cd0339b1ecaa5Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_b433f1b3ae72f9da85b20eb8b0abb0e8(new RC_b433f1b3ae72f9da85b20eb8b0abb0e8.RecordClass({
                    seriesStylingAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.RC_b433f1b3ae72f9da85b20eb8b0abb0e8 = RC_b433f1b3ae72f9da85b20eb8b0abb0e8Inner;

        RC_b433f1b3ae72f9da85b20eb8b0abb0e8Inner._isAnonymousRecord = true;
        RC_b433f1b3ae72f9da85b20eb8b0abb0e8Inner.UniqueId = "b433f1b3-ae72-f9da-85b2-0eb8b0abb0e8";
        var RC_b433f1b3ae72f9da85b20eb8b0abb0e8 = RC_b433f1b3ae72f9da85b20eb8b0abb0e8Inner;
        RC_b433f1b3ae72f9da85b20eb8b0abb0e8.init();
    }
});

define("OutSystemsCharts.model$RL_593f1556a13a137f08b3b2af31250b5a", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$RC_b433f1b3ae72f9da85b20eb8b0abb0e8"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_593f1556a13a137f08b3b2af31250b5a extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.RC_b433f1b3ae72f9da85b20eb8b0abb0e8;
        }

    }

    OutSystemsChartsModel.RL_593f1556a13a137f08b3b2af31250b5a = RL_593f1556a13a137f08b3b2af31250b5a;

});

define("OutSystemsCharts.model$RL_5cace3a1ee80bf29b67e9cad96754231", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$EN_f2ce8f552d142202c9a955104f8986e7EntityRecord"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_5cace3a1ee80bf29b67e9cad96754231 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.EN_f2ce8f552d142202c9a955104f8986e7EntityRecord;
        }

    }

    OutSystemsChartsModel.RL_5cace3a1ee80bf29b67e9cad96754231 = RL_5cace3a1ee80bf29b67e9cad96754231;

});

define("OutSystemsCharts.model$EN_a32084c8b56857b20a4251c6881d59f4EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class EN_a32084c8b56857b20a4251c6881d59f4EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Event", "eventAttr", "Event", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_a32084c8b56857b20a4251c6881d59f4EntityRecord(new EN_a32084c8b56857b20a4251c6881d59f4EntityRecord.RecordClass({
                    eventAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.EN_a32084c8b56857b20a4251c6881d59f4EntityRecord = EN_a32084c8b56857b20a4251c6881d59f4EntityRecordInner;

        var EN_a32084c8b56857b20a4251c6881d59f4EntityRecord = EN_a32084c8b56857b20a4251c6881d59f4EntityRecordInner;
        EN_a32084c8b56857b20a4251c6881d59f4EntityRecord.init();
    }
});

define("OutSystemsCharts.model$RC_a84b998a9c71257a390215ab520c29fb", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$EN_a32084c8b56857b20a4251c6881d59f4EntityRecord"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class RC_a84b998a9c71257a390215ab520c29fbInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ChartEvent", "chartEventAttr", "ChartEvent", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.EN_a32084c8b56857b20a4251c6881d59f4EntityRecord());
                    }, true, OutSystemsChartsModel.EN_a32084c8b56857b20a4251c6881d59f4EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_a84b998a9c71257a390215ab520c29fb(new RC_a84b998a9c71257a390215ab520c29fb.RecordClass({
                    chartEventAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.RC_a84b998a9c71257a390215ab520c29fb = RC_a84b998a9c71257a390215ab520c29fbInner;

        RC_a84b998a9c71257a390215ab520c29fbInner._isAnonymousRecord = true;
        RC_a84b998a9c71257a390215ab520c29fbInner.UniqueId = "a84b998a-9c71-257a-3902-15ab520c29fb";
        var RC_a84b998a9c71257a390215ab520c29fb = RC_a84b998a9c71257a390215ab520c29fbInner;
        RC_a84b998a9c71257a390215ab520c29fb.init();
    }
});

define("OutSystemsCharts.model$RL_5cb983b888b09c801f0692d0d5ce417d", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$RC_a84b998a9c71257a390215ab520c29fb"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_5cb983b888b09c801f0692d0d5ce417d extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.RC_a84b998a9c71257a390215ab520c29fb;
        }

    }

    OutSystemsChartsModel.RL_5cb983b888b09c801f0692d0d5ce417d = RL_5cb983b888b09c801f0692d0d5ce417d;

});

define("OutSystemsCharts.model$RL_6025e5f450644d749d7952e43ca4e358", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_58245655fd14aecad2b52faf6ef8f39bStructure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_6025e5f450644d749d7952e43ca4e358 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.ST_58245655fd14aecad2b52faf6ef8f39bStructure;
        }

    }

    OutSystemsChartsModel.RL_6025e5f450644d749d7952e43ca4e358 = RL_6025e5f450644d749d7952e43ca4e358;

});

define("OutSystemsCharts.model$RL_61c070ad804e002429f0acebd8410bdf", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$RC_024e2239e97c5f6d0bb80b2851c02e49"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_61c070ad804e002429f0acebd8410bdf extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.RC_024e2239e97c5f6d0bb80b2851c02e49;
        }

    }

    OutSystemsChartsModel.RL_61c070ad804e002429f0acebd8410bdf = RL_61c070ad804e002429f0acebd8410bdf;

});

define("OutSystemsCharts.model$ST_8ceac0b3cf282b6c0c3a95ffb4156762Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class ST_8ceac0b3cf282b6c0c3a95ffb4156762StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("SeriesName", "seriesNameAttr", "SeriesName", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("DataSeriesJSON", "dataSeriesJSONAttr", "DataSeriesJSON", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsChartsModel.ST_8ceac0b3cf282b6c0c3a95ffb4156762Structure = ST_8ceac0b3cf282b6c0c3a95ffb4156762StructureInner;

        var ST_8ceac0b3cf282b6c0c3a95ffb4156762Structure = ST_8ceac0b3cf282b6c0c3a95ffb4156762StructureInner;
        ST_8ceac0b3cf282b6c0c3a95ffb4156762Structure.init();
    }
});

define("OutSystemsCharts.model$RC_e3eb18969a1d0856d6aa6db7946dac4d", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_8ceac0b3cf282b6c0c3a95ffb4156762Structure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class RC_e3eb18969a1d0856d6aa6db7946dac4dInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Legacy_AdvancedDataSeriesFormat", "legacy_AdvancedDataSeriesFormatAttr", "Legacy_AdvancedDataSeriesFormat", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_8ceac0b3cf282b6c0c3a95ffb4156762Structure());
                    }, true, OutSystemsChartsModel.ST_8ceac0b3cf282b6c0c3a95ffb4156762Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_e3eb18969a1d0856d6aa6db7946dac4d(new RC_e3eb18969a1d0856d6aa6db7946dac4d.RecordClass({
                    legacy_AdvancedDataSeriesFormatAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.RC_e3eb18969a1d0856d6aa6db7946dac4d = RC_e3eb18969a1d0856d6aa6db7946dac4dInner;

        RC_e3eb18969a1d0856d6aa6db7946dac4dInner._isAnonymousRecord = true;
        RC_e3eb18969a1d0856d6aa6db7946dac4dInner.UniqueId = "e3eb1896-9a1d-0856-d6aa-6db7946dac4d";
        var RC_e3eb18969a1d0856d6aa6db7946dac4d = RC_e3eb18969a1d0856d6aa6db7946dac4dInner;
        RC_e3eb18969a1d0856d6aa6db7946dac4d.init();
    }
});

define("OutSystemsCharts.model$RL_65d3df966a7e3cf88a00a473fc2b09d2", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$RC_e3eb18969a1d0856d6aa6db7946dac4d"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_65d3df966a7e3cf88a00a473fc2b09d2 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.RC_e3eb18969a1d0856d6aa6db7946dac4d;
        }

    }

    OutSystemsChartsModel.RL_65d3df966a7e3cf88a00a473fc2b09d2 = RL_65d3df966a7e3cf88a00a473fc2b09d2;

});

define("OutSystemsCharts.model$RC_6e662d2b0dd947976d5cb296cc0f82e2", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$EN_adefbfd7e853fa2cb46e2f151738d1b5EntityRecord"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class RC_6e662d2b0dd947976d5cb296cc0f82e2Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("SeriesEvent_v1", "seriesEvent_v1Attr", "SeriesEvent_v1", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.EN_adefbfd7e853fa2cb46e2f151738d1b5EntityRecord());
                    }, true, OutSystemsChartsModel.EN_adefbfd7e853fa2cb46e2f151738d1b5EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_6e662d2b0dd947976d5cb296cc0f82e2(new RC_6e662d2b0dd947976d5cb296cc0f82e2.RecordClass({
                    seriesEvent_v1Attr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.RC_6e662d2b0dd947976d5cb296cc0f82e2 = RC_6e662d2b0dd947976d5cb296cc0f82e2Inner;

        RC_6e662d2b0dd947976d5cb296cc0f82e2Inner._isAnonymousRecord = true;
        RC_6e662d2b0dd947976d5cb296cc0f82e2Inner.UniqueId = "6e662d2b-0dd9-4797-6d5c-b296cc0f82e2";
        var RC_6e662d2b0dd947976d5cb296cc0f82e2 = RC_6e662d2b0dd947976d5cb296cc0f82e2Inner;
        RC_6e662d2b0dd947976d5cb296cc0f82e2.init();
    }
});

define("OutSystemsCharts.model$RL_698742e3982d0d37b0c57727d333bd38", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$RC_6e662d2b0dd947976d5cb296cc0f82e2"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_698742e3982d0d37b0c57727d333bd38 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.RC_6e662d2b0dd947976d5cb296cc0f82e2;
        }

    }

    OutSystemsChartsModel.RL_698742e3982d0d37b0c57727d333bd38 = RL_698742e3982d0d37b0c57727d333bd38;

});

define("OutSystemsCharts.model$RC_87ab3d0b80938e4e95dcb616c8a9232e", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_34313c5cf94d7ce3c5404858c22fafd9Structure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class RC_87ab3d0b80938e4e95dcb616c8a9232eInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("DataPoint", "dataPointAttr", "DataPoint", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_34313c5cf94d7ce3c5404858c22fafd9Structure());
                    }, true, OutSystemsChartsModel.ST_34313c5cf94d7ce3c5404858c22fafd9Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_87ab3d0b80938e4e95dcb616c8a9232e(new RC_87ab3d0b80938e4e95dcb616c8a9232e.RecordClass({
                    dataPointAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.RC_87ab3d0b80938e4e95dcb616c8a9232e = RC_87ab3d0b80938e4e95dcb616c8a9232eInner;

        RC_87ab3d0b80938e4e95dcb616c8a9232eInner._isAnonymousRecord = true;
        RC_87ab3d0b80938e4e95dcb616c8a9232eInner.UniqueId = "87ab3d0b-8093-8e4e-95dc-b616c8a9232e";
        var RC_87ab3d0b80938e4e95dcb616c8a9232e = RC_87ab3d0b80938e4e95dcb616c8a9232eInner;
        RC_87ab3d0b80938e4e95dcb616c8a9232e.init();
    }
});

define("OutSystemsCharts.model$RL_6a352f2318cfd62ff903ae77454721c8", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$RC_87ab3d0b80938e4e95dcb616c8a9232e"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_6a352f2318cfd62ff903ae77454721c8 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.RC_87ab3d0b80938e4e95dcb616c8a9232e;
        }

    }

    OutSystemsChartsModel.RL_6a352f2318cfd62ff903ae77454721c8 = RL_6a352f2318cfd62ff903ae77454721c8;

});

define("OutSystemsCharts.model$RC_6ceb0a54ddbc92446ab66e8c847870c1", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_9498db02a236485a96a27db0bd61b81eStructure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class RC_6ceb0a54ddbc92446ab66e8c847870c1Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Legacy_DataPoint", "legacy_DataPointAttr", "Legacy_DataPoint", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_9498db02a236485a96a27db0bd61b81eStructure());
                    }, true, OutSystemsChartsModel.ST_9498db02a236485a96a27db0bd61b81eStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_6ceb0a54ddbc92446ab66e8c847870c1(new RC_6ceb0a54ddbc92446ab66e8c847870c1.RecordClass({
                    legacy_DataPointAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.RC_6ceb0a54ddbc92446ab66e8c847870c1 = RC_6ceb0a54ddbc92446ab66e8c847870c1Inner;

        RC_6ceb0a54ddbc92446ab66e8c847870c1Inner._isAnonymousRecord = true;
        RC_6ceb0a54ddbc92446ab66e8c847870c1Inner.UniqueId = "6ceb0a54-ddbc-9244-6ab6-6e8c847870c1";
        var RC_6ceb0a54ddbc92446ab66e8c847870c1 = RC_6ceb0a54ddbc92446ab66e8c847870c1Inner;
        RC_6ceb0a54ddbc92446ab66e8c847870c1.init();
    }
});

define("OutSystemsCharts.model$RC_6d8d0ab8b7a86a24d5f4b91570ad61d9", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_50c794173b7ac3485b1cda7be99f6b43Structure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class RC_6d8d0ab8b7a86a24d5f4b91570ad61d9Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ErrorMessage", "errorMessageAttr", "ErrorMessage", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_50c794173b7ac3485b1cda7be99f6b43Structure());
                    }, true, OutSystemsChartsModel.ST_50c794173b7ac3485b1cda7be99f6b43Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_6d8d0ab8b7a86a24d5f4b91570ad61d9(new RC_6d8d0ab8b7a86a24d5f4b91570ad61d9.RecordClass({
                    errorMessageAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.RC_6d8d0ab8b7a86a24d5f4b91570ad61d9 = RC_6d8d0ab8b7a86a24d5f4b91570ad61d9Inner;

        RC_6d8d0ab8b7a86a24d5f4b91570ad61d9Inner._isAnonymousRecord = true;
        RC_6d8d0ab8b7a86a24d5f4b91570ad61d9Inner.UniqueId = "6d8d0ab8-b7a8-6a24-d5f4-b91570ad61d9";
        var RC_6d8d0ab8b7a86a24d5f4b91570ad61d9 = RC_6d8d0ab8b7a86a24d5f4b91570ad61d9Inner;
        RC_6d8d0ab8b7a86a24d5f4b91570ad61d9.init();
    }
});

define("OutSystemsCharts.model$RL_6f032abe30e159d0164c5fba3fac6998", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_9695772c3b8ae4caa8a4e3fb1dfb5bb8Structure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_6f032abe30e159d0164c5fba3fac6998 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.ST_9695772c3b8ae4caa8a4e3fb1dfb5bb8Structure;
        }

    }

    OutSystemsChartsModel.RL_6f032abe30e159d0164c5fba3fac6998 = RL_6f032abe30e159d0164c5fba3fac6998;

});

define("OutSystemsCharts.model$RL_703486673ab24a9404041e6c3c485947", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_50c794173b7ac3485b1cda7be99f6b43Structure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_703486673ab24a9404041e6c3c485947 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.ST_50c794173b7ac3485b1cda7be99f6b43Structure;
        }

    }

    OutSystemsChartsModel.RL_703486673ab24a9404041e6c3c485947 = RL_703486673ab24a9404041e6c3c485947;

});

define("OutSystemsCharts.model$RL_70b63e97206a50fbde9991afd404df74", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_4b22cda3b03d150ad8e37c82029c7e70Structure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_70b63e97206a50fbde9991afd404df74 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.ST_4b22cda3b03d150ad8e37c82029c7e70Structure;
        }

    }

    OutSystemsChartsModel.RL_70b63e97206a50fbde9991afd404df74 = RL_70b63e97206a50fbde9991afd404df74;

});

define("OutSystemsCharts.model$RL_7466d1f73cbd2c703ddb7258bc2f245b", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$RC_6ceb0a54ddbc92446ab66e8c847870c1"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_7466d1f73cbd2c703ddb7258bc2f245b extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.RC_6ceb0a54ddbc92446ab66e8c847870c1;
        }

    }

    OutSystemsChartsModel.RL_7466d1f73cbd2c703ddb7258bc2f245b = RL_7466d1f73cbd2c703ddb7258bc2f245b;

});

define("OutSystemsCharts.model$RL_7598c106c4297d60093649fe28189119", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_c4b262744850a3b08ce7036d0595a8dfStructure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_7598c106c4297d60093649fe28189119 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.ST_c4b262744850a3b08ce7036d0595a8dfStructure;
        }

    }

    OutSystemsChartsModel.RL_7598c106c4297d60093649fe28189119 = RL_7598c106c4297d60093649fe28189119;

});

define("OutSystemsCharts.model$EN_784e6c50710f45bd3a06ee5a6d088c04EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class EN_784e6c50710f45bd3a06ee5a6d088c04EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Type", "typeAttr", "Type", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_784e6c50710f45bd3a06ee5a6d088c04EntityRecord(new EN_784e6c50710f45bd3a06ee5a6d088c04EntityRecord.RecordClass({
                    typeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.EN_784e6c50710f45bd3a06ee5a6d088c04EntityRecord = EN_784e6c50710f45bd3a06ee5a6d088c04EntityRecordInner;

        var EN_784e6c50710f45bd3a06ee5a6d088c04EntityRecord = EN_784e6c50710f45bd3a06ee5a6d088c04EntityRecordInner;
        EN_784e6c50710f45bd3a06ee5a6d088c04EntityRecord.init();
    }
});

define("OutSystemsCharts.model$ST_e76d7672809d02d24c5a5adfeacd07eeStructure", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_9498db02a236485a96a27db0bd61b81eStructure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class ST_e76d7672809d02d24c5a5adfeacd07eeStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("DataPoint", "dataPointAttr", "DataPoint", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_9498db02a236485a96a27db0bd61b81eStructure());
                    }, true, OutSystemsChartsModel.ST_9498db02a236485a96a27db0bd61b81eStructure),
                    this.attr("DataPointJSON", "dataPointJSONAttr", "DataPointJSON", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsChartsModel.ST_e76d7672809d02d24c5a5adfeacd07eeStructure = ST_e76d7672809d02d24c5a5adfeacd07eeStructureInner;

        var ST_e76d7672809d02d24c5a5adfeacd07eeStructure = ST_e76d7672809d02d24c5a5adfeacd07eeStructureInner;
        ST_e76d7672809d02d24c5a5adfeacd07eeStructure.init();
    }
});

define("OutSystemsCharts.model$RL_7917133dcbda5cd4a6decab71f2048c1", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_e76d7672809d02d24c5a5adfeacd07eeStructure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_7917133dcbda5cd4a6decab71f2048c1 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.ST_e76d7672809d02d24c5a5adfeacd07eeStructure;
        }

    }

    OutSystemsChartsModel.RL_7917133dcbda5cd4a6decab71f2048c1 = RL_7917133dcbda5cd4a6decab71f2048c1;

});

define("OutSystemsCharts.model$RC_7d371655b20786958d20c377072ad1b6", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$EN_0e1d37c640439329e5a37a201fe5ef06EntityRecord"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class RC_7d371655b20786958d20c377072ad1b6Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("StackingType", "stackingTypeAttr", "StackingType", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.EN_0e1d37c640439329e5a37a201fe5ef06EntityRecord());
                    }, true, OutSystemsChartsModel.EN_0e1d37c640439329e5a37a201fe5ef06EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_7d371655b20786958d20c377072ad1b6(new RC_7d371655b20786958d20c377072ad1b6.RecordClass({
                    stackingTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.RC_7d371655b20786958d20c377072ad1b6 = RC_7d371655b20786958d20c377072ad1b6Inner;

        RC_7d371655b20786958d20c377072ad1b6Inner._isAnonymousRecord = true;
        RC_7d371655b20786958d20c377072ad1b6Inner.UniqueId = "7d371655-b207-8695-8d20-c377072ad1b6";
        var RC_7d371655b20786958d20c377072ad1b6 = RC_7d371655b20786958d20c377072ad1b6Inner;
        RC_7d371655b20786958d20c377072ad1b6.init();
    }
});

define("OutSystemsCharts.model$RL_7943cd4d9c1c74c7e292c49057d08cbe", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$RC_7d371655b20786958d20c377072ad1b6"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_7943cd4d9c1c74c7e292c49057d08cbe extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.RC_7d371655b20786958d20c377072ad1b6;
        }

    }

    OutSystemsChartsModel.RL_7943cd4d9c1c74c7e292c49057d08cbe = RL_7943cd4d9c1c74c7e292c49057d08cbe;

});

define("OutSystemsCharts.model$ST_d907e71360b734aa1ce657185862bd8bStructure", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class ST_d907e71360b734aa1ce657185862bd8bStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("DisableLoadingAnimation", "disableLoadingAnimationAttr", "disableLoadingAnimation", false, false, OS.DataTypes.DataTypes.Boolean, function() {
                        return false;
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new ST_d907e71360b734aa1ce657185862bd8bStructure(new ST_d907e71360b734aa1ce657185862bd8bStructure.RecordClass({
                    disableLoadingAnimationAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.ST_d907e71360b734aa1ce657185862bd8bStructure = ST_d907e71360b734aa1ce657185862bd8bStructureInner;

        var ST_d907e71360b734aa1ce657185862bd8bStructure = ST_d907e71360b734aa1ce657185862bd8bStructureInner;
        ST_d907e71360b734aa1ce657185862bd8bStructure.init();
    }
});

define("OutSystemsCharts.model$RC_83bc3ae4c5fec64bfa528e6320384107", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_d907e71360b734aa1ce657185862bd8bStructure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class RC_83bc3ae4c5fec64bfa528e6320384107Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("OptionalConfigs", "optionalConfigsAttr", "OptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_d907e71360b734aa1ce657185862bd8bStructure());
                    }, true, OutSystemsChartsModel.ST_d907e71360b734aa1ce657185862bd8bStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_83bc3ae4c5fec64bfa528e6320384107(new RC_83bc3ae4c5fec64bfa528e6320384107.RecordClass({
                    optionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.RC_83bc3ae4c5fec64bfa528e6320384107 = RC_83bc3ae4c5fec64bfa528e6320384107Inner;

        RC_83bc3ae4c5fec64bfa528e6320384107Inner._isAnonymousRecord = true;
        RC_83bc3ae4c5fec64bfa528e6320384107Inner.UniqueId = "83bc3ae4-c5fe-c64b-fa52-8e6320384107";
        var RC_83bc3ae4c5fec64bfa528e6320384107 = RC_83bc3ae4c5fec64bfa528e6320384107Inner;
        RC_83bc3ae4c5fec64bfa528e6320384107.init();
    }
});

define("OutSystemsCharts.model$RL_7b71eb0202a2720df0d42d26f6b82001", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$RC_83bc3ae4c5fec64bfa528e6320384107"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_7b71eb0202a2720df0d42d26f6b82001 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.RC_83bc3ae4c5fec64bfa528e6320384107;
        }

    }

    OutSystemsChartsModel.RL_7b71eb0202a2720df0d42d26f6b82001 = RL_7b71eb0202a2720df0d42d26f6b82001;

});

define("OutSystemsCharts.model$RL_7c036597cf3d8c9e8050976e7b9cd21a", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$EN_c206e072354abd28c734a686a107801eEntityRecord"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_7c036597cf3d8c9e8050976e7b9cd21a extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.EN_c206e072354abd28c734a686a107801eEntityRecord;
        }

    }

    OutSystemsChartsModel.RL_7c036597cf3d8c9e8050976e7b9cd21a = RL_7c036597cf3d8c9e8050976e7b9cd21a;

});

define("OutSystemsCharts.model$EN_7ca2e7b2fec6f75cfb759c1832790d39EntityRecord", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class EN_7ca2e7b2fec6f75cfb759c1832790d39EntityRecordInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ProviderName", "providerNameAttr", "ProviderName", true, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new EN_7ca2e7b2fec6f75cfb759c1832790d39EntityRecord(new EN_7ca2e7b2fec6f75cfb759c1832790d39EntityRecord.RecordClass({
                    providerNameAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.EN_7ca2e7b2fec6f75cfb759c1832790d39EntityRecord = EN_7ca2e7b2fec6f75cfb759c1832790d39EntityRecordInner;

        var EN_7ca2e7b2fec6f75cfb759c1832790d39EntityRecord = EN_7ca2e7b2fec6f75cfb759c1832790d39EntityRecordInner;
        EN_7ca2e7b2fec6f75cfb759c1832790d39EntityRecord.init();
    }
});

define("OutSystemsCharts.model$RL_7d9c239ab2336eba85802eb00151e260", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_34313c5cf94d7ce3c5404858c22fafd9Structure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_7d9c239ab2336eba85802eb00151e260 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.ST_34313c5cf94d7ce3c5404858c22fafd9Structure;
        }

    }

    OutSystemsChartsModel.RL_7d9c239ab2336eba85802eb00151e260 = RL_7d9c239ab2336eba85802eb00151e260;

});

define("OutSystemsCharts.model$RC_7ff33d136acf80fa7561894fec32ad32", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_0facb06834084a9f1a55e2bf7cbbfcf1Structure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class RC_7ff33d136acf80fa7561894fec32ad32Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("AxisInternalConfigs", "axisInternalConfigsAttr", "AxisInternalConfigs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_0facb06834084a9f1a55e2bf7cbbfcf1Structure());
                    }, true, OutSystemsChartsModel.ST_0facb06834084a9f1a55e2bf7cbbfcf1Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_7ff33d136acf80fa7561894fec32ad32(new RC_7ff33d136acf80fa7561894fec32ad32.RecordClass({
                    axisInternalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.RC_7ff33d136acf80fa7561894fec32ad32 = RC_7ff33d136acf80fa7561894fec32ad32Inner;

        RC_7ff33d136acf80fa7561894fec32ad32Inner._isAnonymousRecord = true;
        RC_7ff33d136acf80fa7561894fec32ad32Inner.UniqueId = "7ff33d13-6acf-80fa-7561-894fec32ad32";
        var RC_7ff33d136acf80fa7561894fec32ad32 = RC_7ff33d136acf80fa7561894fec32ad32Inner;
        RC_7ff33d136acf80fa7561894fec32ad32.init();
    }
});

define("OutSystemsCharts.model$RC_83e1e05cd8ef028076aede930ba833d7", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$EN_0aaaca7207138bf7860a19b299026910EntityRecord"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class RC_83e1e05cd8ef028076aede930ba833d7Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("AxisType", "axisTypeAttr", "AxisType", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.EN_0aaaca7207138bf7860a19b299026910EntityRecord());
                    }, true, OutSystemsChartsModel.EN_0aaaca7207138bf7860a19b299026910EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_83e1e05cd8ef028076aede930ba833d7(new RC_83e1e05cd8ef028076aede930ba833d7.RecordClass({
                    axisTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.RC_83e1e05cd8ef028076aede930ba833d7 = RC_83e1e05cd8ef028076aede930ba833d7Inner;

        RC_83e1e05cd8ef028076aede930ba833d7Inner._isAnonymousRecord = true;
        RC_83e1e05cd8ef028076aede930ba833d7Inner.UniqueId = "83e1e05c-d8ef-0280-76ae-de930ba833d7";
        var RC_83e1e05cd8ef028076aede930ba833d7 = RC_83e1e05cd8ef028076aede930ba833d7Inner;
        RC_83e1e05cd8ef028076aede930ba833d7.init();
    }
});

define("OutSystemsCharts.model$RL_84933ade4b43703b5a208bdef771c8fb", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$EN_46b2d81a8018ce98d89b836ab78051f0EntityRecord"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_84933ade4b43703b5a208bdef771c8fb extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.EN_46b2d81a8018ce98d89b836ab78051f0EntityRecord;
        }

    }

    OutSystemsChartsModel.RL_84933ade4b43703b5a208bdef771c8fb = RL_84933ade4b43703b5a208bdef771c8fb;

});

define("OutSystemsCharts.model$RL_8516b8318b6fd8234aa6a4c975cfced5", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$RC_5411a63fb30fbc2379b448666b5ca564"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_8516b8318b6fd8234aa6a4c975cfced5 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.RC_5411a63fb30fbc2379b448666b5ca564;
        }

    }

    OutSystemsChartsModel.RL_8516b8318b6fd8234aa6a4c975cfced5 = RL_8516b8318b6fd8234aa6a4c975cfced5;

});

define("OutSystemsCharts.model$RC_860a186f93e9fe7fe0d42f4282c2ec00", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_e76d7672809d02d24c5a5adfeacd07eeStructure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class RC_860a186f93e9fe7fe0d42f4282c2ec00Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Legacy_AdvancedDataPointFormat", "legacy_AdvancedDataPointFormatAttr", "Legacy_AdvancedDataPointFormat", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_e76d7672809d02d24c5a5adfeacd07eeStructure());
                    }, true, OutSystemsChartsModel.ST_e76d7672809d02d24c5a5adfeacd07eeStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_860a186f93e9fe7fe0d42f4282c2ec00(new RC_860a186f93e9fe7fe0d42f4282c2ec00.RecordClass({
                    legacy_AdvancedDataPointFormatAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.RC_860a186f93e9fe7fe0d42f4282c2ec00 = RC_860a186f93e9fe7fe0d42f4282c2ec00Inner;

        RC_860a186f93e9fe7fe0d42f4282c2ec00Inner._isAnonymousRecord = true;
        RC_860a186f93e9fe7fe0d42f4282c2ec00Inner.UniqueId = "860a186f-93e9-fe7f-e0d4-2f4282c2ec00";
        var RC_860a186f93e9fe7fe0d42f4282c2ec00 = RC_860a186f93e9fe7fe0d42f4282c2ec00Inner;
        RC_860a186f93e9fe7fe0d42f4282c2ec00.init();
    }
});

define("OutSystemsCharts.model$RL_88607ed934cddaa2f5080032a18eca8b", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$RC_2ef79bd810cdf6d872efd5fb430d0cec"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_88607ed934cddaa2f5080032a18eca8b extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.RC_2ef79bd810cdf6d872efd5fb430d0cec;
        }

    }

    OutSystemsChartsModel.RL_88607ed934cddaa2f5080032a18eca8b = RL_88607ed934cddaa2f5080032a18eca8b;

});

define("OutSystemsCharts.model$RL_886e75f265a0a7fbc13b3d74d89a8d0b", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$RC_424d57a2d666c8edb0343600d6705eee"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_886e75f265a0a7fbc13b3d74d89a8d0b extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.RC_424d57a2d666c8edb0343600d6705eee;
        }

    }

    OutSystemsChartsModel.RL_886e75f265a0a7fbc13b3d74d89a8d0b = RL_886e75f265a0a7fbc13b3d74d89a8d0b;

});

define("OutSystemsCharts.model$RL_88caf95e46b56f6f49fb935e6edee4c9", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_4bdf4d0ba65c5e31172d7b508a740391Structure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_88caf95e46b56f6f49fb935e6edee4c9 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.ST_4bdf4d0ba65c5e31172d7b508a740391Structure;
        }

    }

    OutSystemsChartsModel.RL_88caf95e46b56f6f49fb935e6edee4c9 = RL_88caf95e46b56f6f49fb935e6edee4c9;

});

define("OutSystemsCharts.model$RL_8906b8c65e0702bdf7509e7a0ac0f2d2", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$EN_12004a480323e1caa1d0e9cb95ddd993EntityRecord"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_8906b8c65e0702bdf7509e7a0ac0f2d2 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.EN_12004a480323e1caa1d0e9cb95ddd993EntityRecord;
        }

    }

    OutSystemsChartsModel.RL_8906b8c65e0702bdf7509e7a0ac0f2d2 = RL_8906b8c65e0702bdf7509e7a0ac0f2d2;

});

define("OutSystemsCharts.model$RC_baca360b74d4e65535b809cab5137ca4", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$EN_7ca2e7b2fec6f75cfb759c1832790d39EntityRecord"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class RC_baca360b74d4e65535b809cab5137ca4Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ChartProvider", "chartProviderAttr", "ChartProvider", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.EN_7ca2e7b2fec6f75cfb759c1832790d39EntityRecord());
                    }, true, OutSystemsChartsModel.EN_7ca2e7b2fec6f75cfb759c1832790d39EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_baca360b74d4e65535b809cab5137ca4(new RC_baca360b74d4e65535b809cab5137ca4.RecordClass({
                    chartProviderAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.RC_baca360b74d4e65535b809cab5137ca4 = RC_baca360b74d4e65535b809cab5137ca4Inner;

        RC_baca360b74d4e65535b809cab5137ca4Inner._isAnonymousRecord = true;
        RC_baca360b74d4e65535b809cab5137ca4Inner.UniqueId = "baca360b-74d4-e655-35b8-09cab5137ca4";
        var RC_baca360b74d4e65535b809cab5137ca4 = RC_baca360b74d4e65535b809cab5137ca4Inner;
        RC_baca360b74d4e65535b809cab5137ca4.init();
    }
});

define("OutSystemsCharts.model$RL_89f10668f31f6fe9c14e72facc3db075", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$RC_baca360b74d4e65535b809cab5137ca4"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_89f10668f31f6fe9c14e72facc3db075 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.RC_baca360b74d4e65535b809cab5137ca4;
        }

    }

    OutSystemsChartsModel.RL_89f10668f31f6fe9c14e72facc3db075 = RL_89f10668f31f6fe9c14e72facc3db075;

});

define("OutSystemsCharts.model$RL_a401bbc515f324607832f48e5f845362", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_8ceac0b3cf282b6c0c3a95ffb4156762Structure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_a401bbc515f324607832f48e5f845362 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.ST_8ceac0b3cf282b6c0c3a95ffb4156762Structure;
        }

    }

    OutSystemsChartsModel.RL_a401bbc515f324607832f48e5f845362 = RL_a401bbc515f324607832f48e5f845362;

});

define("OutSystemsCharts.model$ST_934e7357fa36babd8aa5d2585785fd1aStructure", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_e76d7672809d02d24c5a5adfeacd07eeStructure", "OutSystemsCharts.model$RL_7917133dcbda5cd4a6decab71f2048c1", "OutSystemsCharts.model$ST_8ceac0b3cf282b6c0c3a95ffb4156762Structure", "OutSystemsCharts.model$RL_a401bbc515f324607832f48e5f845362"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class ST_934e7357fa36babd8aa5d2585785fd1aStructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("DataPointFormats", "dataPointFormatsAttr", "DataPointFormats", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.RL_7917133dcbda5cd4a6decab71f2048c1());
                    }, true, OutSystemsChartsModel.RL_7917133dcbda5cd4a6decab71f2048c1),
                    this.attr("DataSeriesFormats", "dataSeriesFormatsAttr", "DataSeriesFormats", false, false, OS.DataTypes.DataTypes.RecordList, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.RL_a401bbc515f324607832f48e5f845362());
                    }, true, OutSystemsChartsModel.RL_a401bbc515f324607832f48e5f845362),
                    this.attr("XAxisJSON", "xAxisJSONAttr", "XAxisJSON", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("YAxisJSON", "yAxisJSONAttr", "YAxisJSON", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true),
                    this.attr("HighchartsJSON", "highchartsJSONAttr", "HighchartsJSON", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsChartsModel.ST_934e7357fa36babd8aa5d2585785fd1aStructure = ST_934e7357fa36babd8aa5d2585785fd1aStructureInner;

        var ST_934e7357fa36babd8aa5d2585785fd1aStructure = ST_934e7357fa36babd8aa5d2585785fd1aStructureInner;
        ST_934e7357fa36babd8aa5d2585785fd1aStructure.init();
    }
});

define("OutSystemsCharts.model$RC_8bd0ab07a3f3c2d2a572a84134c564bd", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_934e7357fa36babd8aa5d2585785fd1aStructure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class RC_8bd0ab07a3f3c2d2a572a84134c564bdInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Legacy_AdvancedFormat", "legacy_AdvancedFormatAttr", "Legacy_AdvancedFormat", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_934e7357fa36babd8aa5d2585785fd1aStructure());
                    }, true, OutSystemsChartsModel.ST_934e7357fa36babd8aa5d2585785fd1aStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_8bd0ab07a3f3c2d2a572a84134c564bd(new RC_8bd0ab07a3f3c2d2a572a84134c564bd.RecordClass({
                    legacy_AdvancedFormatAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.RC_8bd0ab07a3f3c2d2a572a84134c564bd = RC_8bd0ab07a3f3c2d2a572a84134c564bdInner;

        RC_8bd0ab07a3f3c2d2a572a84134c564bdInner._isAnonymousRecord = true;
        RC_8bd0ab07a3f3c2d2a572a84134c564bdInner.UniqueId = "8bd0ab07-a3f3-c2d2-a572-a84134c564bd";
        var RC_8bd0ab07a3f3c2d2a572a84134c564bd = RC_8bd0ab07a3f3c2d2a572a84134c564bdInner;
        RC_8bd0ab07a3f3c2d2a572a84134c564bd.init();
    }
});

define("OutSystemsCharts.model$RL_8c4fcbceb61f253df73da643e4b9ae13", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_639b8c480159ce740702f0a0cf3b55a5Structure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_8c4fcbceb61f253df73da643e4b9ae13 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.ST_639b8c480159ce740702f0a0cf3b55a5Structure;
        }

    }

    OutSystemsChartsModel.RL_8c4fcbceb61f253df73da643e4b9ae13 = RL_8c4fcbceb61f253df73da643e4b9ae13;

});

define("OutSystemsCharts.model$RL_8ed647be048e617fa817eb8a6da1f2ef", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$RC_2b9e41428d5c5ca3b04a80be4ce98f53"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_8ed647be048e617fa817eb8a6da1f2ef extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.RC_2b9e41428d5c5ca3b04a80be4ce98f53;
        }

    }

    OutSystemsChartsModel.RL_8ed647be048e617fa817eb8a6da1f2ef = RL_8ed647be048e617fa817eb8a6da1f2ef;

});

define("OutSystemsCharts.model$RC_9ac3a73b5c3ddd8f3923cd00427e8e10", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_80a54fdc5a44237df505b3e5b63ad0feStructure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class RC_9ac3a73b5c3ddd8f3923cd00427e8e10Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Legacy_YAxisFormat", "legacy_YAxisFormatAttr", "Legacy_YAxisFormat", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_80a54fdc5a44237df505b3e5b63ad0feStructure());
                    }, true, OutSystemsChartsModel.ST_80a54fdc5a44237df505b3e5b63ad0feStructure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_9ac3a73b5c3ddd8f3923cd00427e8e10(new RC_9ac3a73b5c3ddd8f3923cd00427e8e10.RecordClass({
                    legacy_YAxisFormatAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.RC_9ac3a73b5c3ddd8f3923cd00427e8e10 = RC_9ac3a73b5c3ddd8f3923cd00427e8e10Inner;

        RC_9ac3a73b5c3ddd8f3923cd00427e8e10Inner._isAnonymousRecord = true;
        RC_9ac3a73b5c3ddd8f3923cd00427e8e10Inner.UniqueId = "9ac3a73b-5c3d-dd8f-3923-cd00427e8e10";
        var RC_9ac3a73b5c3ddd8f3923cd00427e8e10 = RC_9ac3a73b5c3ddd8f3923cd00427e8e10Inner;
        RC_9ac3a73b5c3ddd8f3923cd00427e8e10.init();
    }
});

define("OutSystemsCharts.model$RL_8ed7a0e74bf62a56d225f393fa1fdf35", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$RC_9ac3a73b5c3ddd8f3923cd00427e8e10"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_8ed7a0e74bf62a56d225f393fa1fdf35 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.RC_9ac3a73b5c3ddd8f3923cd00427e8e10;
        }

    }

    OutSystemsChartsModel.RL_8ed7a0e74bf62a56d225f393fa1fdf35 = RL_8ed7a0e74bf62a56d225f393fa1fdf35;

});

define("OutSystemsCharts.model$RC_ec5ba0dcae2fdbb0747c672da6bec9fd", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$EN_784e6c50710f45bd3a06ee5a6d088c04EntityRecord"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class RC_ec5ba0dcae2fdbb0747c672da6bec9fdInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ValuesType", "valuesTypeAttr", "ValuesType", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.EN_784e6c50710f45bd3a06ee5a6d088c04EntityRecord());
                    }, true, OutSystemsChartsModel.EN_784e6c50710f45bd3a06ee5a6d088c04EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_ec5ba0dcae2fdbb0747c672da6bec9fd(new RC_ec5ba0dcae2fdbb0747c672da6bec9fd.RecordClass({
                    valuesTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.RC_ec5ba0dcae2fdbb0747c672da6bec9fd = RC_ec5ba0dcae2fdbb0747c672da6bec9fdInner;

        RC_ec5ba0dcae2fdbb0747c672da6bec9fdInner._isAnonymousRecord = true;
        RC_ec5ba0dcae2fdbb0747c672da6bec9fdInner.UniqueId = "ec5ba0dc-ae2f-dbb0-747c-672da6bec9fd";
        var RC_ec5ba0dcae2fdbb0747c672da6bec9fd = RC_ec5ba0dcae2fdbb0747c672da6bec9fdInner;
        RC_ec5ba0dcae2fdbb0747c672da6bec9fd.init();
    }
});

define("OutSystemsCharts.model$RL_8f2a48bb1c5f61e668074680892ce525", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$RC_ec5ba0dcae2fdbb0747c672da6bec9fd"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_8f2a48bb1c5f61e668074680892ce525 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.RC_ec5ba0dcae2fdbb0747c672da6bec9fd;
        }

    }

    OutSystemsChartsModel.RL_8f2a48bb1c5f61e668074680892ce525 = RL_8f2a48bb1c5f61e668074680892ce525;

});

define("OutSystemsCharts.model$RL_928b309e47d3fee06ffa327ba5f3019b", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_24000c8fde24da45a0d83940a64dbbafStructure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_928b309e47d3fee06ffa327ba5f3019b extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.ST_24000c8fde24da45a0d83940a64dbbafStructure;
        }

    }

    OutSystemsChartsModel.RL_928b309e47d3fee06ffa327ba5f3019b = RL_928b309e47d3fee06ffa327ba5f3019b;

});

define("OutSystemsCharts.model$RL_934c26b501c2cab7b0a48c8dcd029c23", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_934e7357fa36babd8aa5d2585785fd1aStructure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_934c26b501c2cab7b0a48c8dcd029c23 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.ST_934e7357fa36babd8aa5d2585785fd1aStructure;
        }

    }

    OutSystemsChartsModel.RL_934c26b501c2cab7b0a48c8dcd029c23 = RL_934c26b501c2cab7b0a48c8dcd029c23;

});

define("OutSystemsCharts.model$RL_96c910d11089048c052793c7ed737383", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$RC_23f04252aed9962b8ebdb251db000b96"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_96c910d11089048c052793c7ed737383 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.RC_23f04252aed9962b8ebdb251db000b96;
        }

    }

    OutSystemsChartsModel.RL_96c910d11089048c052793c7ed737383 = RL_96c910d11089048c052793c7ed737383;

});

define("OutSystemsCharts.model$RC_c64cd01e4ffc5de737f0f40dc852d3f7", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_9695772c3b8ae4caa8a4e3fb1dfb5bb8Structure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class RC_c64cd01e4ffc5de737f0f40dc852d3f7Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ChartExportOption", "chartExportOptionAttr", "ChartExportOption", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_9695772c3b8ae4caa8a4e3fb1dfb5bb8Structure());
                    }, true, OutSystemsChartsModel.ST_9695772c3b8ae4caa8a4e3fb1dfb5bb8Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_c64cd01e4ffc5de737f0f40dc852d3f7(new RC_c64cd01e4ffc5de737f0f40dc852d3f7.RecordClass({
                    chartExportOptionAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.RC_c64cd01e4ffc5de737f0f40dc852d3f7 = RC_c64cd01e4ffc5de737f0f40dc852d3f7Inner;

        RC_c64cd01e4ffc5de737f0f40dc852d3f7Inner._isAnonymousRecord = true;
        RC_c64cd01e4ffc5de737f0f40dc852d3f7Inner.UniqueId = "c64cd01e-4ffc-5de7-37f0-f40dc852d3f7";
        var RC_c64cd01e4ffc5de737f0f40dc852d3f7 = RC_c64cd01e4ffc5de737f0f40dc852d3f7Inner;
        RC_c64cd01e4ffc5de737f0f40dc852d3f7.init();
    }
});

define("OutSystemsCharts.model$RL_988859224e5f1c94dd6e9dfe18748458", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$RC_c64cd01e4ffc5de737f0f40dc852d3f7"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_988859224e5f1c94dd6e9dfe18748458 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.RC_c64cd01e4ffc5de737f0f40dc852d3f7;
        }

    }

    OutSystemsChartsModel.RL_988859224e5f1c94dd6e9dfe18748458 = RL_988859224e5f1c94dd6e9dfe18748458;

});

define("OutSystemsCharts.model$RL_99477c70990b1c5bac51f37a012521f9", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$RC_11e12158254e5be6bde5f4ba88bacb32"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_99477c70990b1c5bac51f37a012521f9 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.RC_11e12158254e5be6bde5f4ba88bacb32;
        }

    }

    OutSystemsChartsModel.RL_99477c70990b1c5bac51f37a012521f9 = RL_99477c70990b1c5bac51f37a012521f9;

});

define("OutSystemsCharts.model$RL_9eb78a2b8052aacf06d974f1c25ff438", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$RC_1566355ec5faf3138acdd10ae68fb068"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_9eb78a2b8052aacf06d974f1c25ff438 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.RC_1566355ec5faf3138acdd10ae68fb068;
        }

    }

    OutSystemsChartsModel.RL_9eb78a2b8052aacf06d974f1c25ff438 = RL_9eb78a2b8052aacf06d974f1c25ff438;

});

define("OutSystemsCharts.model$RC_de2d35ebb3feae706b5313bdafc14f70", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$EN_b204725747cd7cf563ecf5a8b8d794e0EntityRecord"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class RC_de2d35ebb3feae706b5313bdafc14f70Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("SeriesEvent", "seriesEventAttr", "SeriesEvent", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.EN_b204725747cd7cf563ecf5a8b8d794e0EntityRecord());
                    }, true, OutSystemsChartsModel.EN_b204725747cd7cf563ecf5a8b8d794e0EntityRecord)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_de2d35ebb3feae706b5313bdafc14f70(new RC_de2d35ebb3feae706b5313bdafc14f70.RecordClass({
                    seriesEventAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.RC_de2d35ebb3feae706b5313bdafc14f70 = RC_de2d35ebb3feae706b5313bdafc14f70Inner;

        RC_de2d35ebb3feae706b5313bdafc14f70Inner._isAnonymousRecord = true;
        RC_de2d35ebb3feae706b5313bdafc14f70Inner.UniqueId = "de2d35eb-b3fe-ae70-6b53-13bdafc14f70";
        var RC_de2d35ebb3feae706b5313bdafc14f70 = RC_de2d35ebb3feae706b5313bdafc14f70Inner;
        RC_de2d35ebb3feae706b5313bdafc14f70.init();
    }
});

define("OutSystemsCharts.model$RL_9f0a991ed2a384536b44e8525eb980b4", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$RC_de2d35ebb3feae706b5313bdafc14f70"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_9f0a991ed2a384536b44e8525eb980b4 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.RC_de2d35ebb3feae706b5313bdafc14f70;
        }

    }

    OutSystemsChartsModel.RL_9f0a991ed2a384536b44e8525eb980b4 = RL_9f0a991ed2a384536b44e8525eb980b4;

});

define("OutSystemsCharts.model$RL_a13361317fa094d07c3f32d8e1fb1abf", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$EN_91855acd6e96303d3e1dafe035c00f0fEntityRecord"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_a13361317fa094d07c3f32d8e1fb1abf extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.EN_91855acd6e96303d3e1dafe035c00f0fEntityRecord;
        }

    }

    OutSystemsChartsModel.RL_a13361317fa094d07c3f32d8e1fb1abf = RL_a13361317fa094d07c3f32d8e1fb1abf;

});

define("OutSystemsCharts.model$RL_a30d98f2bfb144ef6e1a6a7d9e196137", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$RC_83e1e05cd8ef028076aede930ba833d7"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_a30d98f2bfb144ef6e1a6a7d9e196137 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.RC_83e1e05cd8ef028076aede930ba833d7;
        }

    }

    OutSystemsChartsModel.RL_a30d98f2bfb144ef6e1a6a7d9e196137 = RL_a30d98f2bfb144ef6e1a6a7d9e196137;

});

define("OutSystemsCharts.model$ST_d908e2b0c36bde785653d79e6507d073Structure", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class ST_d908e2b0c36bde785653d79e6507d073StructureInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("LineColor", "lineColorAttr", "LineColor", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "#ccd6eb";
                    }, true),
                    this.attr("LineWidth", "lineWidthAttr", "LineWidth", false, false, OS.DataTypes.DataTypes.Text, function() {
                        return "";
                    }, true)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

        }

        OutSystemsChartsModel.ST_d908e2b0c36bde785653d79e6507d073Structure = ST_d908e2b0c36bde785653d79e6507d073StructureInner;

        var ST_d908e2b0c36bde785653d79e6507d073Structure = ST_d908e2b0c36bde785653d79e6507d073StructureInner;
        ST_d908e2b0c36bde785653d79e6507d073Structure.init();
    }
});

define("OutSystemsCharts.model$RC_a36f33fd75edf3ca18b53fc02b778c00", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_d908e2b0c36bde785653d79e6507d073Structure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class RC_a36f33fd75edf3ca18b53fc02b778c00Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("XAxisStyling", "xAxisStylingAttr", "XAxisStyling", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_d908e2b0c36bde785653d79e6507d073Structure());
                    }, true, OutSystemsChartsModel.ST_d908e2b0c36bde785653d79e6507d073Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_a36f33fd75edf3ca18b53fc02b778c00(new RC_a36f33fd75edf3ca18b53fc02b778c00.RecordClass({
                    xAxisStylingAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.RC_a36f33fd75edf3ca18b53fc02b778c00 = RC_a36f33fd75edf3ca18b53fc02b778c00Inner;

        RC_a36f33fd75edf3ca18b53fc02b778c00Inner._isAnonymousRecord = true;
        RC_a36f33fd75edf3ca18b53fc02b778c00Inner.UniqueId = "a36f33fd-75ed-f3ca-18b5-3fc02b778c00";
        var RC_a36f33fd75edf3ca18b53fc02b778c00 = RC_a36f33fd75edf3ca18b53fc02b778c00Inner;
        RC_a36f33fd75edf3ca18b53fc02b778c00.init();
    }
});

define("OutSystemsCharts.model$RL_a3d2c694dff2de0a0f3888b710952d41", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$RC_4c0c00419258d867de6c9a39d39cbd40"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_a3d2c694dff2de0a0f3888b710952d41 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.RC_4c0c00419258d867de6c9a39d39cbd40;
        }

    }

    OutSystemsChartsModel.RL_a3d2c694dff2de0a0f3888b710952d41 = RL_a3d2c694dff2de0a0f3888b710952d41;

});

define("OutSystemsCharts.model$RL_a40216e14ab40a8d4ecfcbcea0d46860", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$EN_a32084c8b56857b20a4251c6881d59f4EntityRecord"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_a40216e14ab40a8d4ecfcbcea0d46860 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.EN_a32084c8b56857b20a4251c6881d59f4EntityRecord;
        }

    }

    OutSystemsChartsModel.RL_a40216e14ab40a8d4ecfcbcea0d46860 = RL_a40216e14ab40a8d4ecfcbcea0d46860;

});

define("OutSystemsCharts.model$RL_ad02058c386e5f81e5a4e3d49bf546fd", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_d908e2b0c36bde785653d79e6507d073Structure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_ad02058c386e5f81e5a4e3d49bf546fd extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.ST_d908e2b0c36bde785653d79e6507d073Structure;
        }

    }

    OutSystemsChartsModel.RL_ad02058c386e5f81e5a4e3d49bf546fd = RL_ad02058c386e5f81e5a4e3d49bf546fd;

});

define("OutSystemsCharts.model$RL_ad52f40ed6b7fe5122edfaa0ea380f97", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_1ae4a810d4cabfbdad2f5a6ea4ed9737Structure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_ad52f40ed6b7fe5122edfaa0ea380f97 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.ST_1ae4a810d4cabfbdad2f5a6ea4ed9737Structure;
        }

    }

    OutSystemsChartsModel.RL_ad52f40ed6b7fe5122edfaa0ea380f97 = RL_ad52f40ed6b7fe5122edfaa0ea380f97;

});

define("OutSystemsCharts.model$RL_af57503b6694a3f1b486f2c263ff7f0e", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$RC_268a48d1c903fcee31c2d9b87f8f364f"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_af57503b6694a3f1b486f2c263ff7f0e extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.RC_268a48d1c903fcee31c2d9b87f8f364f;
        }

    }

    OutSystemsChartsModel.RL_af57503b6694a3f1b486f2c263ff7f0e = RL_af57503b6694a3f1b486f2c263ff7f0e;

});

define("OutSystemsCharts.model$RL_b115fffa775eacd174e4dc6056343607", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$RC_860a186f93e9fe7fe0d42f4282c2ec00"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_b115fffa775eacd174e4dc6056343607 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.RC_860a186f93e9fe7fe0d42f4282c2ec00;
        }

    }

    OutSystemsChartsModel.RL_b115fffa775eacd174e4dc6056343607 = RL_b115fffa775eacd174e4dc6056343607;

});

define("OutSystemsCharts.model$RL_b313a8d709f9396ec193dee40ad651e2", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_0facb06834084a9f1a55e2bf7cbbfcf1Structure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_b313a8d709f9396ec193dee40ad651e2 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.ST_0facb06834084a9f1a55e2bf7cbbfcf1Structure;
        }

    }

    OutSystemsChartsModel.RL_b313a8d709f9396ec193dee40ad651e2 = RL_b313a8d709f9396ec193dee40ad651e2;

});

define("OutSystemsCharts.model$RL_b5eeed2f3935fba13bc2ba0379e9ecb2", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$RC_00179e46ad196fea946536d51a4dedf6"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_b5eeed2f3935fba13bc2ba0379e9ecb2 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.RC_00179e46ad196fea946536d51a4dedf6;
        }

    }

    OutSystemsChartsModel.RL_b5eeed2f3935fba13bc2ba0379e9ecb2 = RL_b5eeed2f3935fba13bc2ba0379e9ecb2;

});

define("OutSystemsCharts.model$RC_b9cc97d4f5ca6625f6d31d4e7e643874", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_69d759501e759b3aa378b0f06e6de282Structure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class RC_b9cc97d4f5ca6625f6d31d4e7e643874Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("Legacy_InternalConfig", "legacy_InternalConfigAttr", "Legacy_InternalConfig", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_69d759501e759b3aa378b0f06e6de282Structure());
                    }, true, OutSystemsChartsModel.ST_69d759501e759b3aa378b0f06e6de282Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_b9cc97d4f5ca6625f6d31d4e7e643874(new RC_b9cc97d4f5ca6625f6d31d4e7e643874.RecordClass({
                    legacy_InternalConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.RC_b9cc97d4f5ca6625f6d31d4e7e643874 = RC_b9cc97d4f5ca6625f6d31d4e7e643874Inner;

        RC_b9cc97d4f5ca6625f6d31d4e7e643874Inner._isAnonymousRecord = true;
        RC_b9cc97d4f5ca6625f6d31d4e7e643874Inner.UniqueId = "b9cc97d4-f5ca-6625-f6d3-1d4e7e643874";
        var RC_b9cc97d4f5ca6625f6d31d4e7e643874 = RC_b9cc97d4f5ca6625f6d31d4e7e643874Inner;
        RC_b9cc97d4f5ca6625f6d31d4e7e643874.init();
    }
});

define("OutSystemsCharts.model$RL_bd14bcc1fd354521db5511da3ddcc3d0", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$EN_784e6c50710f45bd3a06ee5a6d088c04EntityRecord"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_bd14bcc1fd354521db5511da3ddcc3d0 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.EN_784e6c50710f45bd3a06ee5a6d088c04EntityRecord;
        }

    }

    OutSystemsChartsModel.RL_bd14bcc1fd354521db5511da3ddcc3d0 = RL_bd14bcc1fd354521db5511da3ddcc3d0;

});

define("OutSystemsCharts.model$RL_c00a35e05574e8e9007aafcec77ad537", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$RC_34d5d5ab5565b38a57ae5f2563a8c466"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_c00a35e05574e8e9007aafcec77ad537 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.RC_34d5d5ab5565b38a57ae5f2563a8c466;
        }

    }

    OutSystemsChartsModel.RL_c00a35e05574e8e9007aafcec77ad537 = RL_c00a35e05574e8e9007aafcec77ad537;

});

define("OutSystemsCharts.model$RC_c15b65896c08df0c893eb8f103ad3409", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_4b22cda3b03d150ad8e37c82029c7e70Structure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class RC_c15b65896c08df0c893eb8f103ad3409Inner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("LegendInternalConfigs", "legendInternalConfigsAttr", "LegendInternalConfigs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_4b22cda3b03d150ad8e37c82029c7e70Structure());
                    }, true, OutSystemsChartsModel.ST_4b22cda3b03d150ad8e37c82029c7e70Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_c15b65896c08df0c893eb8f103ad3409(new RC_c15b65896c08df0c893eb8f103ad3409.RecordClass({
                    legendInternalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.RC_c15b65896c08df0c893eb8f103ad3409 = RC_c15b65896c08df0c893eb8f103ad3409Inner;

        RC_c15b65896c08df0c893eb8f103ad3409Inner._isAnonymousRecord = true;
        RC_c15b65896c08df0c893eb8f103ad3409Inner.UniqueId = "c15b6589-6c08-df0c-893e-b8f103ad3409";
        var RC_c15b65896c08df0c893eb8f103ad3409 = RC_c15b65896c08df0c893eb8f103ad3409Inner;
        RC_c15b65896c08df0c893eb8f103ad3409.init();
    }
});

define("OutSystemsCharts.model$RL_c1ab1c1878f3b6ab39f90cc507ecb978", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$RC_7ff33d136acf80fa7561894fec32ad32"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_c1ab1c1878f3b6ab39f90cc507ecb978 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.RC_7ff33d136acf80fa7561894fec32ad32;
        }

    }

    OutSystemsChartsModel.RL_c1ab1c1878f3b6ab39f90cc507ecb978 = RL_c1ab1c1878f3b6ab39f90cc507ecb978;

});

define("OutSystemsCharts.model$RL_c432f61de7cd55341e321271ef26b2f5", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$EN_0e1d37c640439329e5a37a201fe5ef06EntityRecord"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_c432f61de7cd55341e321271ef26b2f5 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.EN_0e1d37c640439329e5a37a201fe5ef06EntityRecord;
        }

    }

    OutSystemsChartsModel.RL_c432f61de7cd55341e321271ef26b2f5 = RL_c432f61de7cd55341e321271ef26b2f5;

});

define("OutSystemsCharts.model$RL_c5c0654c1652bc3a4b3d6451c97793d1", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$RC_054139ee1b4e118a0de0bda9edde9b3e"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_c5c0654c1652bc3a4b3d6451c97793d1 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.RC_054139ee1b4e118a0de0bda9edde9b3e;
        }

    }

    OutSystemsChartsModel.RL_c5c0654c1652bc3a4b3d6451c97793d1 = RL_c5c0654c1652bc3a4b3d6451c97793d1;

});

define("OutSystemsCharts.model$RC_d03145ab43f2fed21bf254f98c38e8cb", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_ac4a98d5209ff3cbf055ac67e03c6463Structure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore; {
        class RC_d03145ab43f2fed21bf254f98c38e8cbInner extends
        OS.DataTypes.GenericRecord {
            static attributesToDeclare() {
                return [
                    this.attr("ChartExportOptionalConfigs", "chartExportOptionalConfigsAttr", "ChartExportOptionalConfigs", false, false, OS.DataTypes.DataTypes.Record, function() {
                        return OS.DataTypes.ImmutableBase.getData(new OutSystemsChartsModel.ST_ac4a98d5209ff3cbf055ac67e03c6463Structure());
                    }, true, OutSystemsChartsModel.ST_ac4a98d5209ff3cbf055ac67e03c6463Structure)
                ].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
            }

            static fromStructure(str) {
                return new RC_d03145ab43f2fed21bf254f98c38e8cb(new RC_d03145ab43f2fed21bf254f98c38e8cb.RecordClass({
                    chartExportOptionalConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
                }));
            }

        }

        OutSystemsChartsModel.RC_d03145ab43f2fed21bf254f98c38e8cb = RC_d03145ab43f2fed21bf254f98c38e8cbInner;

        RC_d03145ab43f2fed21bf254f98c38e8cbInner._isAnonymousRecord = true;
        RC_d03145ab43f2fed21bf254f98c38e8cbInner.UniqueId = "d03145ab-43f2-fed2-1bf2-54f98c38e8cb";
        var RC_d03145ab43f2fed21bf254f98c38e8cb = RC_d03145ab43f2fed21bf254f98c38e8cbInner;
        RC_d03145ab43f2fed21bf254f98c38e8cb.init();
    }
});

define("OutSystemsCharts.model$RL_d29c29f210f2cded5fc40a6b552dfbd2", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$RC_8bd0ab07a3f3c2d2a572a84134c564bd"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_d29c29f210f2cded5fc40a6b552dfbd2 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.RC_8bd0ab07a3f3c2d2a572a84134c564bd;
        }

    }

    OutSystemsChartsModel.RL_d29c29f210f2cded5fc40a6b552dfbd2 = RL_d29c29f210f2cded5fc40a6b552dfbd2;

});

define("OutSystemsCharts.model$RL_d99a37b24a3a5891c7f70b07199889c5", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_499ab2dc67e078b5441ac528549f73d9Structure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_d99a37b24a3a5891c7f70b07199889c5 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.ST_499ab2dc67e078b5441ac528549f73d9Structure;
        }

    }

    OutSystemsChartsModel.RL_d99a37b24a3a5891c7f70b07199889c5 = RL_d99a37b24a3a5891c7f70b07199889c5;

});

define("OutSystemsCharts.model$RL_da05c2efe4cb7ff61688a1c350e3b05f", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_d907e71360b734aa1ce657185862bd8bStructure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_da05c2efe4cb7ff61688a1c350e3b05f extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.ST_d907e71360b734aa1ce657185862bd8bStructure;
        }

    }

    OutSystemsChartsModel.RL_da05c2efe4cb7ff61688a1c350e3b05f = RL_da05c2efe4cb7ff61688a1c350e3b05f;

});

define("OutSystemsCharts.model$RL_dbb5ebef80bd7336b252f2615c21d195", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_7c45885429f626cd0775ccbea11ace15Structure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_dbb5ebef80bd7336b252f2615c21d195 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.ST_7c45885429f626cd0775ccbea11ace15Structure;
        }

    }

    OutSystemsChartsModel.RL_dbb5ebef80bd7336b252f2615c21d195 = RL_dbb5ebef80bd7336b252f2615c21d195;

});

define("OutSystemsCharts.model$RL_ddc1b7b17dff9e49f625952f8cbd6103", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$RC_d03145ab43f2fed21bf254f98c38e8cb"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_ddc1b7b17dff9e49f625952f8cbd6103 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.RC_d03145ab43f2fed21bf254f98c38e8cb;
        }

    }

    OutSystemsChartsModel.RL_ddc1b7b17dff9e49f625952f8cbd6103 = RL_ddc1b7b17dff9e49f625952f8cbd6103;

});

define("OutSystemsCharts.model$RL_e0066dae551f4bf26497fc70996b0a29", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_5552d23a1ca6c55fb342792127e6be05Structure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_e0066dae551f4bf26497fc70996b0a29 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.ST_5552d23a1ca6c55fb342792127e6be05Structure;
        }

    }

    OutSystemsChartsModel.RL_e0066dae551f4bf26497fc70996b0a29 = RL_e0066dae551f4bf26497fc70996b0a29;

});

define("OutSystemsCharts.model$RL_e044c3ca1ab850c5eac08c6cde5b945a", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$RC_b9cc97d4f5ca6625f6d31d4e7e643874"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_e044c3ca1ab850c5eac08c6cde5b945a extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.RC_b9cc97d4f5ca6625f6d31d4e7e643874;
        }

    }

    OutSystemsChartsModel.RL_e044c3ca1ab850c5eac08c6cde5b945a = RL_e044c3ca1ab850c5eac08c6cde5b945a;

});

define("OutSystemsCharts.model$RL_e0d14ad0ade0a943d9ecc9ebb8efce77", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_87973ae5f6c07db6193b59603f29dce6Structure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_e0d14ad0ade0a943d9ecc9ebb8efce77 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.ST_87973ae5f6c07db6193b59603f29dce6Structure;
        }

    }

    OutSystemsChartsModel.RL_e0d14ad0ade0a943d9ecc9ebb8efce77 = RL_e0d14ad0ade0a943d9ecc9ebb8efce77;

});

define("OutSystemsCharts.model$RL_e1bbb6f2318dd9094360b19f393b9afa", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$RC_6d8d0ab8b7a86a24d5f4b91570ad61d9"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_e1bbb6f2318dd9094360b19f393b9afa extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.RC_6d8d0ab8b7a86a24d5f4b91570ad61d9;
        }

    }

    OutSystemsChartsModel.RL_e1bbb6f2318dd9094360b19f393b9afa = RL_e1bbb6f2318dd9094360b19f393b9afa;

});

define("OutSystemsCharts.model$RL_e31782271ed2d9722295887c9142644d", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$EN_e3e66f92a97b1d29d00b88c019c33babEntityRecord"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_e31782271ed2d9722295887c9142644d extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.EN_e3e66f92a97b1d29d00b88c019c33babEntityRecord;
        }

    }

    OutSystemsChartsModel.RL_e31782271ed2d9722295887c9142644d = RL_e31782271ed2d9722295887c9142644d;

});

define("OutSystemsCharts.model$RL_e32ab16cc42411786c971a13c745ff33", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$RC_a36f33fd75edf3ca18b53fc02b778c00"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_e32ab16cc42411786c971a13c745ff33 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.RC_a36f33fd75edf3ca18b53fc02b778c00;
        }

    }

    OutSystemsChartsModel.RL_e32ab16cc42411786c971a13c745ff33 = RL_e32ab16cc42411786c971a13c745ff33;

});

define("OutSystemsCharts.model$RL_ea91cb08c8fa7580047ff8d93b2734d6", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$EN_7ca2e7b2fec6f75cfb759c1832790d39EntityRecord"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_ea91cb08c8fa7580047ff8d93b2734d6 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.EN_7ca2e7b2fec6f75cfb759c1832790d39EntityRecord;
        }

    }

    OutSystemsChartsModel.RL_ea91cb08c8fa7580047ff8d93b2734d6 = RL_ea91cb08c8fa7580047ff8d93b2734d6;

});

define("OutSystemsCharts.model$RL_eede018366f1eb756786ab1ac291684e", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_1bc129a4ddcba67fb3de5717d1aad835Structure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_eede018366f1eb756786ab1ac291684e extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.ST_1bc129a4ddcba67fb3de5717d1aad835Structure;
        }

    }

    OutSystemsChartsModel.RL_eede018366f1eb756786ab1ac291684e = RL_eede018366f1eb756786ab1ac291684e;

});

define("OutSystemsCharts.model$RL_f02cdb97aaddd97ae84d8039d9af6cb6", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_e5a78fd1ee745d24f58f7ce224fde0f0Structure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_f02cdb97aaddd97ae84d8039d9af6cb6 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.ST_e5a78fd1ee745d24f58f7ce224fde0f0Structure;
        }

    }

    OutSystemsChartsModel.RL_f02cdb97aaddd97ae84d8039d9af6cb6 = RL_f02cdb97aaddd97ae84d8039d9af6cb6;

});

define("OutSystemsCharts.model$RL_f40166a4eda71d949a73980d0c85fed2", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_f281012c72a5f666adafe0a5edc16938Structure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_f40166a4eda71d949a73980d0c85fed2 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.ST_f281012c72a5f666adafe0a5edc16938Structure;
        }

    }

    OutSystemsChartsModel.RL_f40166a4eda71d949a73980d0c85fed2 = RL_f40166a4eda71d949a73980d0c85fed2;

});

define("OutSystemsCharts.model$RL_f5908efec95d364ebda8574126c5c10d", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_73b5287c34f36a04fe003585368d6e1bStructure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_f5908efec95d364ebda8574126c5c10d extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.ST_73b5287c34f36a04fe003585368d6e1bStructure;
        }

    }

    OutSystemsChartsModel.RL_f5908efec95d364ebda8574126c5c10d = RL_f5908efec95d364ebda8574126c5c10d;

});

define("OutSystemsCharts.model$RL_f9e63c4afe72a8da1896238a9a873dc9", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$RC_c15b65896c08df0c893eb8f103ad3409"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_f9e63c4afe72a8da1896238a9a873dc9 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.RC_c15b65896c08df0c893eb8f103ad3409;
        }

    }

    OutSystemsChartsModel.RL_f9e63c4afe72a8da1896238a9a873dc9 = RL_f9e63c4afe72a8da1896238a9a873dc9;

});

define("OutSystemsCharts.model$RL_fa146924f6833ee5375b7cfb2ad97f66", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.model$ST_80a54fdc5a44237df505b3e5b63ad0feStructure"], function(exports, OSRuntimeCore, OutSystemsChartsModel) {
    var OS = OSRuntimeCore;
    class RL_fa146924f6833ee5375b7cfb2ad97f66 extends
    OS.DataTypes.GenericRecordList {
        static getItemType() {
            return OutSystemsChartsModel.ST_80a54fdc5a44237df505b3e5b63ad0feStructure;
        }

    }

    OutSystemsChartsModel.RL_fa146924f6833ee5375b7cfb2ad97f66 = RL_fa146924f6833ee5375b7cfb2ad97f66;

});

define("OutSystemsCharts.model", ["exports", "@outsystems/runtime-core-js"], function(exports, OSRuntimeCore) {
    var OS = OSRuntimeCore;
    var OutSystemsChartsModel = exports;
    Object.defineProperty(OutSystemsChartsModel, "module", {
        get: function() {
            return OS.ApplicationInfo.getModules()["38b70e23-50fc-4710-80cf-3682a9dc998a"];
        }
    });

    OutSystemsChartsModel.staticEntities = {};
    OutSystemsChartsModel.staticEntities.chartProvider = {};
    var getChartProviderRecord = function(record) {
        return OutSystemsChartsModel.module.staticEntities["00943809-64da-4846-97a0-3fbac6b1913d"][record];
    };
    Object.defineProperty(OutSystemsChartsModel.staticEntities.chartProvider, "highcharts", {
        get: function() {
            return "Highcharts";
        }
    });

    OutSystemsChartsModel.staticEntities.stackingType_v1 = {};
    var getStackingType_v1Record = function(record) {
        return OutSystemsChartsModel.module.staticEntities["1aaafcbe-99a5-4857-83f2-e4754e65edcf"][record];
    };
    Object.defineProperty(OutSystemsChartsModel.staticEntities.stackingType_v1, "stacked100Percent", {
        get: function() {
            return 3;
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.stackingType_v1, "noStacking", {
        get: function() {
            return 1;
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.stackingType_v1, "stacked", {
        get: function() {
            return 2;
        }
    });

    OutSystemsChartsModel.staticEntities.oSChartVersion = {};
    var getOSChartVersionRecord = function(record) {
        return OutSystemsChartsModel.module.staticEntities["3e3bf022-d92f-488a-9e7d-f0560c2a88d9"][record];
    };
    Object.defineProperty(OutSystemsChartsModel.staticEntities.oSChartVersion, "version1", {
        get: function() {
            return "Version1";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.oSChartVersion, "version2", {
        get: function() {
            return "Version2";
        }
    });

    OutSystemsChartsModel.staticEntities.highchartModules = {};
    var getHighchartModulesRecord = function(record) {
        return OutSystemsChartsModel.module.staticEntities["4880d1c5-d340-4018-aafc-57ce5706922e"][record];
    };
    Object.defineProperty(OutSystemsChartsModel.staticEntities.highchartModules, "wordcloud", {
        get: function() {
            return "wordcloud";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.highchartModules, "treegraph", {
        get: function() {
            return "treegraph";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.highchartModules, "tilemap", {
        get: function() {
            return "tilemap";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.highchartModules, "lollipop", {
        get: function() {
            return "lollipop";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.highchartModules, "organization", {
        get: function() {
            return "organization";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.highchartModules, "vector", {
        get: function() {
            return "vector";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.highchartModules, "funnel3d", {
        get: function() {
            return "funnel3d";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.highchartModules, "variwide", {
        get: function() {
            return "variwide";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.highchartModules, "annotations", {
        get: function() {
            return "annotations";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.highchartModules, "pictorial", {
        get: function() {
            return "pictorial";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.highchartModules, "sunburst", {
        get: function() {
            return "sunburst";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.highchartModules, "cylinder", {
        get: function() {
            return "cylinder";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.highchartModules, "boost", {
        get: function() {
            return "boost";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.highchartModules, "streamgraph", {
        get: function() {
            return "streamgraph";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.highchartModules, "solidGauge", {
        get: function() {
            return "solid-gauge";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.highchartModules, "treemap", {
        get: function() {
            return "treemap";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.highchartModules, "funnel", {
        get: function() {
            return "funnel";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.highchartModules, "windbarb", {
        get: function() {
            return "windbarb";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.highchartModules, "brokenAxis", {
        get: function() {
            return "broken-axis";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.highchartModules, "bellcurve", {
        get: function() {
            return "bellcurve";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.highchartModules, "dumbbell", {
        get: function() {
            return "dumbbell";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.highchartModules, "itemSeries", {
        get: function() {
            return "item-series";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.highchartModules, "pareto", {
        get: function() {
            return "pareto";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.highchartModules, "venn", {
        get: function() {
            return "venn";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.highchartModules, "canvasTools", {
        get: function() {
            return "canvas-tools";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.highchartModules, "histogram", {
        get: function() {
            return "histogram";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.highchartModules, "xrange", {
        get: function() {
            return "xrange";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.highchartModules, "variablePie", {
        get: function() {
            return "variable-pie";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.highchartModules, "sankey", {
        get: function() {
            return "sankey";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.highchartModules, "networkgraph", {
        get: function() {
            return "networkgraph";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.highchartModules, "timeline", {
        get: function() {
            return "timeline";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.highchartModules, "drilldown", {
        get: function() {
            return "drilldown";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.highchartModules, "dependencyWheel", {
        get: function() {
            return "dependency-wheel";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.highchartModules, "arcDiagram", {
        get: function() {
            return "arc-diagram";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.highchartModules, "pyramid3d", {
        get: function() {
            return "pyramid3d";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.highchartModules, "heatmap", {
        get: function() {
            return "heatmap";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.highchartModules, "offlineExporting", {
        get: function() {
            return "offline-exporting";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.highchartModules, "data", {
        get: function() {
            return "data";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.highchartModules, "bullet", {
        get: function() {
            return "bullet";
        }
    });

    OutSystemsChartsModel.staticEntities.chartEvent = {};
    var getChartEventRecord = function(record) {
        return OutSystemsChartsModel.module.staticEntities["50efbd5e-bb47-4505-bc1b-aaedd404ac21"][record];
    };
    Object.defineProperty(OutSystemsChartsModel.staticEntities.chartEvent, "initialized", {
        get: function() {
            return "Initialized";
        }
    });

    OutSystemsChartsModel.staticEntities.legendPosition_v1 = {};
    var getLegendPosition_v1Record = function(record) {
        return OutSystemsChartsModel.module.staticEntities["6f55558f-9a5c-49bb-bc32-8180c0ac0d73"][record];
    };
    Object.defineProperty(OutSystemsChartsModel.staticEntities.legendPosition_v1, "bottom", {
        get: function() {
            return "Bottom";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.legendPosition_v1, "right", {
        get: function() {
            return "Right";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.legendPosition_v1, "inside", {
        get: function() {
            return "Inside";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.legendPosition_v1, "left", {
        get: function() {
            return "Left";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.legendPosition_v1, "hidden", {
        get: function() {
            return "Hidden";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.legendPosition_v1, "top", {
        get: function() {
            return "Top";
        }
    });

    OutSystemsChartsModel.staticEntities.seriesType = {};
    var getSeriesTypeRecord = function(record) {
        return OutSystemsChartsModel.module.staticEntities["a9c663e8-6354-4f02-931c-636fc58b7d51"][record];
    };
    Object.defineProperty(OutSystemsChartsModel.staticEntities.seriesType, "lineSpline", {
        get: function() {
            return "spline";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.seriesType, "pie", {
        get: function() {
            return "pie";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.seriesType, "column", {
        get: function() {
            return "column";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.seriesType, "area", {
        get: function() {
            return "area";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.seriesType, "line", {
        get: function() {
            return "line";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.seriesType, "areaSpline", {
        get: function() {
            return "areaspline";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.seriesType, "bar", {
        get: function() {
            return "bar";
        }
    });

    OutSystemsChartsModel.staticEntities.legendPosition = {};
    var getLegendPositionRecord = function(record) {
        return OutSystemsChartsModel.module.staticEntities["aae17a97-3f0a-41cb-8937-e49d737a9771"][record];
    };
    Object.defineProperty(OutSystemsChartsModel.staticEntities.legendPosition, "bottom", {
        get: function() {
            return "Bottom";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.legendPosition, "right", {
        get: function() {
            return "Right";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.legendPosition, "center", {
        get: function() {
            return "Center";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.legendPosition, "bottomRight", {
        get: function() {
            return "BottomRight";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.legendPosition, "left", {
        get: function() {
            return "Left";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.legendPosition, "top", {
        get: function() {
            return "Top";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.legendPosition, "topLeft", {
        get: function() {
            return "TopLeft";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.legendPosition, "topRight", {
        get: function() {
            return "TopRight";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.legendPosition, "bottomLeft", {
        get: function() {
            return "BottomLeft";
        }
    });

    OutSystemsChartsModel.staticEntities.seriesEvent_v1 = {};
    var getSeriesEvent_v1Record = function(record) {
        return OutSystemsChartsModel.module.staticEntities["ca843517-6f55-4ce4-b34e-28fc63cd740f"][record];
    };
    Object.defineProperty(OutSystemsChartsModel.staticEntities.seriesEvent_v1, "click", {
        get: function() {
            return "Click";
        }
    });

    OutSystemsChartsModel.staticEntities.valuesType = {};
    var getValuesTypeRecord = function(record) {
        return OutSystemsChartsModel.module.staticEntities["d0562170-cf56-434a-85ef-b8d33f2023f2"][record];
    };
    Object.defineProperty(OutSystemsChartsModel.staticEntities.valuesType, "decimal", {
        get: function() {
            return "decimal";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.valuesType, "text", {
        get: function() {
            return "text";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.valuesType, "datetime", {
        get: function() {
            return "datetime";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.valuesType, "integer", {
        get: function() {
            return "integer";
        }
    });

    OutSystemsChartsModel.staticEntities.xAxisType = {};
    var getXAxisTypeRecord = function(record) {
        return OutSystemsChartsModel.module.staticEntities["d2ce446b-c3dd-4453-8e99-0a586230a85c"][record];
    };
    Object.defineProperty(OutSystemsChartsModel.staticEntities.xAxisType, "linear", {
        get: function() {
            return "linear";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.xAxisType, "datetime", {
        get: function() {
            return "datetime";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.xAxisType, "decimal", {
        get: function() {
            return "decimal";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.xAxisType, "category", {
        get: function() {
            return "category";
        }
    });

    OutSystemsChartsModel.staticEntities.axisType = {};
    var getAxisTypeRecord = function(record) {
        return OutSystemsChartsModel.module.staticEntities["d64ec36e-560e-4509-b2f0-8918dbb72de4"][record];
    };
    Object.defineProperty(OutSystemsChartsModel.staticEntities.axisType, "y", {
        get: function() {
            return "Y";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.axisType, "x", {
        get: function() {
            return "X";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.axisType, "z", {
        get: function() {
            return "Z";
        }
    });

    OutSystemsChartsModel.staticEntities.xAxisValuesType_v1 = {};
    var getXAxisValuesType_v1Record = function(record) {
        return OutSystemsChartsModel.module.staticEntities["e24bffa0-82f5-4cd2-9d43-97b142649f77"][record];
    };
    Object.defineProperty(OutSystemsChartsModel.staticEntities.xAxisValuesType_v1, "text", {
        get: function() {
            return 3;
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.xAxisValuesType_v1, "auto", {
        get: function() {
            return 4;
        }
    });

    OutSystemsChartsModel.staticEntities.seriesEvent = {};
    var getSeriesEventRecord = function(record) {
        return OutSystemsChartsModel.module.staticEntities["e7cb0e07-206a-40ab-a76a-8383ca114365"][record];
    };
    Object.defineProperty(OutSystemsChartsModel.staticEntities.seriesEvent, "click", {
        get: function() {
            return "Click";
        }
    });

    OutSystemsChartsModel.staticEntities.legendLayout = {};
    var getLegendLayoutRecord = function(record) {
        return OutSystemsChartsModel.module.staticEntities["f3006da5-223f-4057-894a-8966e01ba39f"][record];
    };
    Object.defineProperty(OutSystemsChartsModel.staticEntities.legendLayout, "proximate", {
        get: function() {
            return "proximate";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.legendLayout, "horizontal", {
        get: function() {
            return "horizontal";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.legendLayout, "vertical", {
        get: function() {
            return "vertical";
        }
    });

    OutSystemsChartsModel.staticEntities.stackingType = {};
    var getStackingTypeRecord = function(record) {
        return OutSystemsChartsModel.module.staticEntities["f7a3d532-b80b-4cf8-a88a-1b138a432266"][record];
    };
    Object.defineProperty(OutSystemsChartsModel.staticEntities.stackingType, "stacked", {
        get: function() {
            return "Stacked";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.stackingType, "stacked100Percent", {
        get: function() {
            return "Stacked100Percent";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.stackingType, "noStacking", {
        get: function() {
            return "NoStacking";
        }
    });

    OutSystemsChartsModel.staticEntities.axisValuesType = {};
    var getAxisValuesTypeRecord = function(record) {
        return OutSystemsChartsModel.module.staticEntities["fd747d79-417d-4efa-8f89-2d79bb8de835"][record];
    };
    Object.defineProperty(OutSystemsChartsModel.staticEntities.axisValuesType, "linear", {
        get: function() {
            return "linear";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.axisValuesType, "datetime", {
        get: function() {
            return "datetime";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.axisValuesType, "logarithmic", {
        get: function() {
            return "logarithmic";
        }
    });

    Object.defineProperty(OutSystemsChartsModel.staticEntities.axisValuesType, "category", {
        get: function() {
            return "category";
        }
    });

});