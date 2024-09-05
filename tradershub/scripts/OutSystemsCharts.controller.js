define("OutSystemsCharts.controller$AddModuleToBeLoaded", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.controller", "OutSystemsCharts.controller$AddModuleToBeLoaded.AddModuleJS"], function (exports, OSRuntimeCore, OutSystemsChartsModel, OutSystemsChartsController, OutSystemsCharts_controller_AddModuleToBeLoaded_AddModuleJS) {
var OS = OSRuntimeCore;
OutSystemsChartsController.default.addModuleToBeLoaded$Action = function (highchartModulesIdentifierIn, callContext) {
return OS.Logger.startActiveSpan("AddModuleToBeLoaded", function (span) {
if(span) {
span.setAttribute("code.function", "AddModuleToBeLoaded");
span.setAttribute("outsystems.function.key", "ada9884f-be61-47d6-adf1-5f8c9998fb2f");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.AddModuleToBeLoaded$vars"))());
vars.value.highchartModulesIdentifierInLocal = highchartModulesIdentifierIn;
var block2 = false;
do {
block2 = false;
var block4 = false;
do {
block4 = false;
var block1 = false;
do {
block1 = false;
if(((vars.value.highchartModulesIdentifierInLocal === OutSystemsChartsModel.staticEntities.highchartModules.annotations))) {
// Annotations
// ModuleURL = Scripts.Annotations.URL
vars.value.moduleURLVar = OS.Navigation.VersionedURL.getVersionedUrl("scripts/OutSystemsCharts.Annotations.js");
} else {
if((vars.value.highchartModulesIdentifierInLocal === OutSystemsChartsModel.staticEntities.highchartModules.arcDiagram)) {
// ArcDiagram
// ModuleURL = Scripts.ArcDiagram.URL
vars.value.moduleURLVar = OS.Navigation.VersionedURL.getVersionedUrl("scripts/OutSystemsCharts.ArcDiagram.js");
} else {
if((vars.value.highchartModulesIdentifierInLocal === OutSystemsChartsModel.staticEntities.highchartModules.bellcurve)) {
// Bellcurve
// ModuleURL = Scripts.HistogramBellcurve.URL
vars.value.moduleURLVar = OS.Navigation.VersionedURL.getVersionedUrl("scripts/OutSystemsCharts.HistogramBellcurve.js");
} else {
if((vars.value.highchartModulesIdentifierInLocal === OutSystemsChartsModel.staticEntities.highchartModules.boost)) {
// Boost
// ModuleURL = Scripts.Boost.URL
vars.value.moduleURLVar = OS.Navigation.VersionedURL.getVersionedUrl("scripts/OutSystemsCharts.Boost.js");
} else {
if((vars.value.highchartModulesIdentifierInLocal === OutSystemsChartsModel.staticEntities.highchartModules.brokenAxis)) {
// BrokenAxis
// ModuleURL = Scripts.BrokenAxis.URL
vars.value.moduleURLVar = OS.Navigation.VersionedURL.getVersionedUrl("scripts/OutSystemsCharts.BrokenAxis.js");
} else {
var block5 = false;
do {
block5 = false;
do {
if((vars.value.highchartModulesIdentifierInLocal === OutSystemsChartsModel.staticEntities.highchartModules.bullet)) {
// Bullet
// ModuleURL = Scripts.Bullet.URL
vars.value.moduleURLVar = OS.Navigation.VersionedURL.getVersionedUrl("scripts/OutSystemsCharts.Bullet.js");
} else {
if((vars.value.highchartModulesIdentifierInLocal === OutSystemsChartsModel.staticEntities.highchartModules.canvasTools)) {
// CanvasTools
// ModuleURL = Scripts.CanvasTools.URL
vars.value.moduleURLVar = OS.Navigation.VersionedURL.getVersionedUrl("scripts/OutSystemsCharts.CanvasTools.js");
} else {
if((vars.value.highchartModulesIdentifierInLocal === OutSystemsChartsModel.staticEntities.highchartModules.cylinder)) {
// Cylinder
// ModuleURL = Scripts.Cylinder.URL
vars.value.moduleURLVar = OS.Navigation.VersionedURL.getVersionedUrl("scripts/OutSystemsCharts.Cylinder.js");
} else {
if((vars.value.highchartModulesIdentifierInLocal === OutSystemsChartsModel.staticEntities.highchartModules.data)) {
// Data
// ModuleURL = Scripts.Data.URL
vars.value.moduleURLVar = OS.Navigation.VersionedURL.getVersionedUrl("scripts/OutSystemsCharts.Data.js");
} else {
if((vars.value.highchartModulesIdentifierInLocal === OutSystemsChartsModel.staticEntities.highchartModules.dependencyWheel)) {
// DependencyWheel
// ModuleURL = Scripts.DependencyWheel.URL
vars.value.moduleURLVar = OS.Navigation.VersionedURL.getVersionedUrl("scripts/OutSystemsCharts.DependencyWheel.js");
} else {
if(((vars.value.highchartModulesIdentifierInLocal === OutSystemsChartsModel.staticEntities.highchartModules.drilldown))) {
// Drilldown
// ModuleURL = Scripts.Drilldown.URL
vars.value.moduleURLVar = OS.Navigation.VersionedURL.getVersionedUrl("scripts/OutSystemsCharts.Drilldown.js");
// jump to block1
block1 = true;
break;
} else {
if((vars.value.highchartModulesIdentifierInLocal === OutSystemsChartsModel.staticEntities.highchartModules.dumbbell)) {
// Dumbbell
// ModuleURL = Scripts.Dumbbell.URL
vars.value.moduleURLVar = OS.Navigation.VersionedURL.getVersionedUrl("scripts/OutSystemsCharts.Dumbbell.js");
// jump to block1
block1 = true;
break;
} else {
if((vars.value.highchartModulesIdentifierInLocal === OutSystemsChartsModel.staticEntities.highchartModules.funnel)) {
// Funnel
// ModuleURL = Scripts.Funnel.URL
vars.value.moduleURLVar = OS.Navigation.VersionedURL.getVersionedUrl("scripts/OutSystemsCharts.Funnel.js");
// jump to block1
block1 = true;
break;
} else {
if((vars.value.highchartModulesIdentifierInLocal === OutSystemsChartsModel.staticEntities.highchartModules.funnel3d)) {
// Funnel3d
// ModuleURL = Scripts.Funnel3d.URL
vars.value.moduleURLVar = OS.Navigation.VersionedURL.getVersionedUrl("scripts/OutSystemsCharts.Funnel3d.js");
// jump to block1
block1 = true;
break;
} else {
if((vars.value.highchartModulesIdentifierInLocal === OutSystemsChartsModel.staticEntities.highchartModules.heatmap)) {
// Heatmap
// ModuleURL = Scripts.Heatmap.URL
vars.value.moduleURLVar = OS.Navigation.VersionedURL.getVersionedUrl("scripts/OutSystemsCharts.Heatmap.js");
break;
} else {
if((vars.value.highchartModulesIdentifierInLocal === OutSystemsChartsModel.staticEntities.highchartModules.histogram)) {
// Histogram
// ModuleURL = Scripts.HistogramBellcurve.URL
vars.value.moduleURLVar = OS.Navigation.VersionedURL.getVersionedUrl("scripts/OutSystemsCharts.HistogramBellcurve.js");
break;
} else {
if((vars.value.highchartModulesIdentifierInLocal === OutSystemsChartsModel.staticEntities.highchartModules.itemSeries)) {
// ItemSeries
// ModuleURL = Scripts.ItemSeries.URL
vars.value.moduleURLVar = OS.Navigation.VersionedURL.getVersionedUrl("scripts/OutSystemsCharts.ItemSeries.js");
break;
} else {
if((vars.value.highchartModulesIdentifierInLocal === OutSystemsChartsModel.staticEntities.highchartModules.lollipop)) {
// Lollipop
// ModuleURL = Scripts.Lollipop.URL
vars.value.moduleURLVar = OS.Navigation.VersionedURL.getVersionedUrl("scripts/OutSystemsCharts.Lollipop.js");
break;
} else {
if((vars.value.highchartModulesIdentifierInLocal === OutSystemsChartsModel.staticEntities.highchartModules.networkgraph)) {
// Networkgraph
// ModuleURL = Scripts.Networkgraph.URL
vars.value.moduleURLVar = OS.Navigation.VersionedURL.getVersionedUrl("scripts/OutSystemsCharts.Networkgraph.js");
break;
} else {
if(((vars.value.highchartModulesIdentifierInLocal === OutSystemsChartsModel.staticEntities.highchartModules.offlineExporting))) {
// OfflineExporting
// ModuleURL = Scripts.OfflineExporting.URL
vars.value.moduleURLVar = OS.Navigation.VersionedURL.getVersionedUrl("scripts/OutSystemsCharts.OfflineExporting.js");
// jump to block4
block4 = true;
break;
} else {
if((vars.value.highchartModulesIdentifierInLocal === OutSystemsChartsModel.staticEntities.highchartModules.organization)) {
// Organization
// ModuleURL = Scripts.Organization.URL
vars.value.moduleURLVar = OS.Navigation.VersionedURL.getVersionedUrl("scripts/OutSystemsCharts.Organization.js");
// jump to block4
block4 = true;
break;
} else {
if((vars.value.highchartModulesIdentifierInLocal === OutSystemsChartsModel.staticEntities.highchartModules.pareto)) {
// Pareto
// ModuleURL = Scripts.Pareto.URL
vars.value.moduleURLVar = OS.Navigation.VersionedURL.getVersionedUrl("scripts/OutSystemsCharts.Pareto.js");
// jump to block4
block4 = true;
break;
} else {
if((vars.value.highchartModulesIdentifierInLocal === OutSystemsChartsModel.staticEntities.highchartModules.pictorial)) {
// Pictorial
// ModuleURL = Scripts.Pictorial.URL
vars.value.moduleURLVar = OS.Navigation.VersionedURL.getVersionedUrl("scripts/OutSystemsCharts.Pictorial.js");
// jump to block4
block4 = true;
break;
} else {
if((vars.value.highchartModulesIdentifierInLocal === OutSystemsChartsModel.staticEntities.highchartModules.pyramid3d)) {
// Pyramid3d
// ModuleURL = Scripts.Pyramid3d.URL
vars.value.moduleURLVar = OS.Navigation.VersionedURL.getVersionedUrl("scripts/OutSystemsCharts.Pyramid3d.js");
// jump to block4
block4 = true;
break;
} else {
if((vars.value.highchartModulesIdentifierInLocal === OutSystemsChartsModel.staticEntities.highchartModules.sankey)) {
// Sankey
// ModuleURL = Scripts.Sankey.URL
vars.value.moduleURLVar = OS.Navigation.VersionedURL.getVersionedUrl("scripts/OutSystemsCharts.Sankey.js");
// jump to block5
block5 = true;
break;
} else {
if((vars.value.highchartModulesIdentifierInLocal === OutSystemsChartsModel.staticEntities.highchartModules.solidGauge)) {
// SolidGauge
// ModuleURL = Scripts.SolidGauge.URL
vars.value.moduleURLVar = OS.Navigation.VersionedURL.getVersionedUrl("scripts/OutSystemsCharts.SolidGauge.js");
// jump to block5
block5 = true;
break;
} else {
if((vars.value.highchartModulesIdentifierInLocal === OutSystemsChartsModel.staticEntities.highchartModules.streamgraph)) {
// Streamgraph
// ModuleURL = Scripts.Streamgraph.URL
vars.value.moduleURLVar = OS.Navigation.VersionedURL.getVersionedUrl("scripts/OutSystemsCharts.Streamgraph.js");
// jump to block5
block5 = true;
break;
} else {
if((vars.value.highchartModulesIdentifierInLocal === OutSystemsChartsModel.staticEntities.highchartModules.sunburst)) {
// Sunburst
// ModuleURL = Scripts.Sunburst.URL
vars.value.moduleURLVar = OS.Navigation.VersionedURL.getVersionedUrl("scripts/OutSystemsCharts.Sunburst.js");
// jump to block5
block5 = true;
break;
} else {
if((vars.value.highchartModulesIdentifierInLocal === OutSystemsChartsModel.staticEntities.highchartModules.tilemap)) {
// Tilemap
// ModuleURL = Scripts.Tilemap.URL
vars.value.moduleURLVar = OS.Navigation.VersionedURL.getVersionedUrl("scripts/OutSystemsCharts.Tilemap.js");
// jump to block5
block5 = true;
break;
} else {
if(((vars.value.highchartModulesIdentifierInLocal === OutSystemsChartsModel.staticEntities.highchartModules.timeline))) {
// Timeline
// ModuleURL = Scripts.Timeline.URL
vars.value.moduleURLVar = OS.Navigation.VersionedURL.getVersionedUrl("scripts/OutSystemsCharts.Timeline.js");
// jump to block2
block2 = true;
break;
} else {
if((vars.value.highchartModulesIdentifierInLocal === OutSystemsChartsModel.staticEntities.highchartModules.treegraph)) {
// Treegraph
// ModuleURL = Scripts.Treegraph.URL
vars.value.moduleURLVar = OS.Navigation.VersionedURL.getVersionedUrl("scripts/OutSystemsCharts.Treegraph.js");
// jump to block2
block2 = true;
break;
} else {
if((vars.value.highchartModulesIdentifierInLocal === OutSystemsChartsModel.staticEntities.highchartModules.treemap)) {
// Treemap
// ModuleURL = Scripts.Treemap.URL
vars.value.moduleURLVar = OS.Navigation.VersionedURL.getVersionedUrl("scripts/OutSystemsCharts.Treemap.js");
// jump to block2
block2 = true;
break;
} else {
if((vars.value.highchartModulesIdentifierInLocal === OutSystemsChartsModel.staticEntities.highchartModules.variablePie)) {
// VariablePie
// ModuleURL = Scripts.VariablePie.URL
vars.value.moduleURLVar = OS.Navigation.VersionedURL.getVersionedUrl("scripts/OutSystemsCharts.VariablePie.js");
// jump to block2
block2 = true;
break;
} else {
if((vars.value.highchartModulesIdentifierInLocal === OutSystemsChartsModel.staticEntities.highchartModules.variwide)) {
// Variwide
// ModuleURL = Scripts.Variwide.URL
vars.value.moduleURLVar = OS.Navigation.VersionedURL.getVersionedUrl("scripts/OutSystemsCharts.Variwide.js");
// jump to block2
block2 = true;
break;
} else {
if((vars.value.highchartModulesIdentifierInLocal === OutSystemsChartsModel.staticEntities.highchartModules.vector)) {
// Vector
// ModuleURL = Scripts.Vector.URL
vars.value.moduleURLVar = OS.Navigation.VersionedURL.getVersionedUrl("scripts/OutSystemsCharts.Vector.js");
// jump to block2
block2 = true;
break;
} else {
if((vars.value.highchartModulesIdentifierInLocal === OutSystemsChartsModel.staticEntities.highchartModules.venn)) {
// Venn
// ModuleURL = Scripts.Venn.URL
vars.value.moduleURLVar = OS.Navigation.VersionedURL.getVersionedUrl("scripts/OutSystemsCharts.Venn.js");
// jump to block2
block2 = true;
break;
} else {
if((vars.value.highchartModulesIdentifierInLocal === OutSystemsChartsModel.staticEntities.highchartModules.windbarb)) {
// Windbarb
// ModuleURL = Scripts.Windbarb.URL
vars.value.moduleURLVar = OS.Navigation.VersionedURL.getVersionedUrl("scripts/OutSystemsCharts.Windbarb.js");
// jump to block2
block2 = true;
break;
} else {
if((vars.value.highchartModulesIdentifierInLocal === OutSystemsChartsModel.staticEntities.highchartModules.wordcloud)) {
// Wordcloud
// ModuleURL = Scripts.Wordcloud.URL
vars.value.moduleURLVar = OS.Navigation.VersionedURL.getVersionedUrl("scripts/OutSystemsCharts.Wordcloud.js");
// jump to block2
block2 = true;
break;
} else {
if((vars.value.highchartModulesIdentifierInLocal === OutSystemsChartsModel.staticEntities.highchartModules.xrange)) {
// Xrange
// ModuleURL = Scripts.XRange.URL
vars.value.moduleURLVar = OS.Navigation.VersionedURL.getVersionedUrl("scripts/OutSystemsCharts.XRange.js");
// jump to block2
block2 = true;
break;
} else {
return ;

}

}

}

}

}

}

}

}

}

}

}

}

}

}

}

}

}

}

}

}

}

}

}

}

}

}

}

}

}

}

}

}

}

}

// ➡
} while(false)
;
if((block1 || (block2 || (block4 || block5)))) {
break;
}

// ➡
} while(false)
;
if((block1 || (block2 || block4))) {
break;
}

// ➡
// ➡
// jump to block2
block2 = true;
break;
}

}

}

}

}

// ➡
} while(false)
;
if((block2 || block4)) {
break;
}

// ➡
} while(false)
;
if(block2) {
break;
}

// ➡
// ➡
} while(false)
;
OS.Logger.startActiveSpan("AddModule", function (span) {
if(span) {
span.setAttribute("code.function", "AddModule");
span.setAttribute("outsystems.function.key", "d7d48f4e-bec9-498c-8f66-540d50921d68");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsCharts_controller_AddModuleToBeLoaded_AddModuleJS, "AddModule", "AddModuleToBeLoaded", {
ModuleName: OS.DataConversion.JSNodeParamConverter.to(vars.value.highchartModulesIdentifierInLocal, OS.DataTypes.DataTypes.Text),
ModuleUrl: OS.DataConversion.JSNodeParamConverter.to(vars.value.moduleURLVar, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsChartsController.default;
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.AddModuleToBeLoaded$vars", [{
name: "HighchartModulesIdentifier",
attrName: "highchartModulesIdentifierInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ModuleURL",
attrName: "moduleURLVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsChartsController.default.clientActionProxies.addModuleToBeLoaded$Action = function (highchartModulesIdentifierIn) {
highchartModulesIdentifierIn = (highchartModulesIdentifierIn === undefined) ? "" : highchartModulesIdentifierIn;
return controller.executeActionInsideJSNode(OutSystemsChartsController.default.addModuleToBeLoaded$Action.bind(controller, highchartModulesIdentifierIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsCharts.controller$AddModuleToBeLoaded.AddModuleJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.ChartAPI.Advanced.Provider.HighCharts.Module.AddScript(
    $parameters.ModuleName, 
    $parameters.ModuleUrl
);
};
});


define("OutSystemsCharts.controller$AdvancedFormat_Init_v1", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.controller", "OutSystemsCharts.model$ST_8ceac0b3cf282b6c0c3a95ffb4156762Structure", "OutSystemsCharts.model$RL_a401bbc515f324607832f48e5f845362", "OutSystemsCharts.model$ST_e76d7672809d02d24c5a5adfeacd07eeStructure", "OutSystemsCharts.model$RL_7917133dcbda5cd4a6decab71f2048c1", "OutSystemsCharts.model$ST_934e7357fa36babd8aa5d2585785fd1aStructure"], function (exports, OSRuntimeCore, OutSystemsChartsModel, OutSystemsChartsController) {
var OS = OSRuntimeCore;
OutSystemsChartsController.default.advancedFormat_Init_v1$Action = function (dataPointFormatsIn, dataSeriesFormatsIn, xAxisJSONIn, yAxisJSONIn, highchartsJSONIn, callContext) {
return OS.Logger.startActiveSpan("AdvancedFormat_Init_v1", function (span) {
if(span) {
span.setAttribute("code.function", "AdvancedFormat_Init_v1");
span.setAttribute("outsystems.function.key", "1f2c685e-41ee-4350-949d-2de92b8560c3");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.AdvancedFormat_Init_v1$vars"))());
vars.value.dataPointFormatsInLocal = dataPointFormatsIn.clone();
vars.value.dataSeriesFormatsInLocal = dataSeriesFormatsIn.clone();
vars.value.xAxisJSONInLocal = xAxisJSONIn;
vars.value.yAxisJSONInLocal = yAxisJSONIn;
vars.value.highchartsJSONInLocal = highchartsJSONIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.AdvancedFormat_Init_v1$outVars"))());
// Set AdvancedFormat
// AdvancedFormat.DataPointFormats = DataPointFormats
outVars.value.advancedFormatOut.dataPointFormatsAttr = vars.value.dataPointFormatsInLocal;
// AdvancedFormat.DataSeriesFormats = DataSeriesFormats
outVars.value.advancedFormatOut.dataSeriesFormatsAttr = vars.value.dataSeriesFormatsInLocal;
// AdvancedFormat.XAxisJSON = XAxisJSON
outVars.value.advancedFormatOut.xAxisJSONAttr = vars.value.xAxisJSONInLocal;
// AdvancedFormat.YAxisJSON = YAxisJSON
outVars.value.advancedFormatOut.yAxisJSONAttr = vars.value.yAxisJSONInLocal;
// AdvancedFormat.HighchartsJSON = HighchartsJSON
outVars.value.advancedFormatOut.highchartsJSONAttr = vars.value.highchartsJSONInLocal;
return outVars.value;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsChartsController.default;
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.AdvancedFormat_Init_v1$vars", [{
name: "DataPointFormats",
attrName: "dataPointFormatsInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new OutSystemsChartsModel.RL_7917133dcbda5cd4a6decab71f2048c1();
},
complexType: OutSystemsChartsModel.RL_7917133dcbda5cd4a6decab71f2048c1
}, {
name: "DataSeriesFormats",
attrName: "dataSeriesFormatsInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new OutSystemsChartsModel.RL_a401bbc515f324607832f48e5f845362();
},
complexType: OutSystemsChartsModel.RL_a401bbc515f324607832f48e5f845362
}, {
name: "XAxisJSON",
attrName: "xAxisJSONInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "YAxisJSON",
attrName: "yAxisJSONInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "HighchartsJSON",
attrName: "highchartsJSONInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.AdvancedFormat_Init_v1$outVars", [{
name: "AdvancedFormat",
attrName: "advancedFormatOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new OutSystemsChartsModel.ST_934e7357fa36babd8aa5d2585785fd1aStructure();
},
complexType: OutSystemsChartsModel.ST_934e7357fa36babd8aa5d2585785fd1aStructure
}]);
OutSystemsChartsController.default.clientActionProxies.advancedFormat_Init_v1$Action = function (dataPointFormatsIn, dataSeriesFormatsIn, xAxisJSONIn, yAxisJSONIn, highchartsJSONIn) {
dataPointFormatsIn = (dataPointFormatsIn === undefined) ? new OutSystemsChartsModel.RL_7917133dcbda5cd4a6decab71f2048c1() : dataPointFormatsIn;
dataSeriesFormatsIn = (dataSeriesFormatsIn === undefined) ? new OutSystemsChartsModel.RL_a401bbc515f324607832f48e5f845362() : dataSeriesFormatsIn;
xAxisJSONIn = (xAxisJSONIn === undefined) ? "" : xAxisJSONIn;
yAxisJSONIn = (yAxisJSONIn === undefined) ? "" : yAxisJSONIn;
highchartsJSONIn = (highchartsJSONIn === undefined) ? "" : highchartsJSONIn;
return controller.executeActionInsideJSNode(OutSystemsChartsController.default.advancedFormat_Init_v1$Action.bind(controller, dataPointFormatsIn, dataSeriesFormatsIn, OS.DataConversion.JSNodeParamConverter.from(xAxisJSONIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(yAxisJSONIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(highchartsJSONIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
AdvancedFormat: actionResults.advancedFormatOut
};
});
};
});


define("OutSystemsCharts.controller$ChartEventSubscribe", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.controller", "OutSystemsCharts.controller$ChartEventSubscribe.ChartEventRegisterJS"], function (exports, OSRuntimeCore, OutSystemsChartsModel, OutSystemsChartsController, OutSystemsCharts_controller_ChartEventSubscribe_ChartEventRegisterJS) {
var OS = OSRuntimeCore;
OutSystemsChartsController.default.chartEventSubscribe$Action = function (chartWidgetIdIn, chartEventIdIn, callbackIn, callContext) {
return OS.Logger.startActiveSpan("ChartEventSubscribe", function (span) {
if(span) {
span.setAttribute("code.function", "ChartEventSubscribe");
span.setAttribute("outsystems.function.key", "2fa95fcd-fb90-4af1-8f72-2782223a9adf");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.ChartEventSubscribe$vars"))());
vars.value.chartWidgetIdInLocal = chartWidgetIdIn;
vars.value.chartEventIdInLocal = chartEventIdIn;
vars.value.callbackInLocal = callbackIn;
OS.Logger.startActiveSpan("ChartEventRegister", function (span) {
if(span) {
span.setAttribute("code.function", "ChartEventRegister");
span.setAttribute("outsystems.function.key", "2a567369-15e3-4daa-a619-cf0050a1b522");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsCharts_controller_ChartEventSubscribe_ChartEventRegisterJS, "ChartEventRegister", "ChartEventSubscribe", {
Callback: OS.DataConversion.JSNodeParamConverter.to(vars.value.callbackInLocal, OS.DataTypes.DataTypes.Object),
ChartWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.chartWidgetIdInLocal, OS.DataTypes.DataTypes.Text),
ChartEventId: OS.DataConversion.JSNodeParamConverter.to(vars.value.chartEventIdInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsChartsController.default;
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.ChartEventSubscribe$vars", [{
name: "ChartWidgetId",
attrName: "chartWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ChartEventId",
attrName: "chartEventIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Callback",
attrName: "callbackInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
OutSystemsChartsController.default.clientActionProxies.chartEventSubscribe$Action = function (chartWidgetIdIn, chartEventIdIn, callbackIn) {
chartWidgetIdIn = (chartWidgetIdIn === undefined) ? "" : chartWidgetIdIn;
chartEventIdIn = (chartEventIdIn === undefined) ? "" : chartEventIdIn;
callbackIn = (callbackIn === undefined) ? null : callbackIn;
return controller.executeActionInsideJSNode(OutSystemsChartsController.default.chartEventSubscribe$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(chartWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(chartEventIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(callbackIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsCharts.controller$ChartEventSubscribe.ChartEventRegisterJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.ChartAPI.Chart.SubscribeEvent(
    $parameters.ChartWidgetId, 
    $parameters.ChartEventId, 
    $parameters.Callback
);
};
});


define("OutSystemsCharts.controller$ChartEventUnsubscribe", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.controller", "OutSystemsCharts.controller$ChartEventUnsubscribe.SeriesEventUnregisterJS"], function (exports, OSRuntimeCore, OutSystemsChartsModel, OutSystemsChartsController, OutSystemsCharts_controller_ChartEventUnsubscribe_SeriesEventUnregisterJS) {
var OS = OSRuntimeCore;
OutSystemsChartsController.default.chartEventUnsubscribe$Action = function (chartWidgetIdIn, chartEventIdIn, callbackIn, callContext) {
return OS.Logger.startActiveSpan("ChartEventUnsubscribe", function (span) {
if(span) {
span.setAttribute("code.function", "ChartEventUnsubscribe");
span.setAttribute("outsystems.function.key", "6ff7ac8c-83bb-4460-9d7f-970725294c62");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.ChartEventUnsubscribe$vars"))());
vars.value.chartWidgetIdInLocal = chartWidgetIdIn;
vars.value.chartEventIdInLocal = chartEventIdIn;
vars.value.callbackInLocal = callbackIn;
OS.Logger.startActiveSpan("SeriesEventUnregister", function (span) {
if(span) {
span.setAttribute("code.function", "SeriesEventUnregister");
span.setAttribute("outsystems.function.key", "54bcf6a8-2add-4299-bfc6-125cc1272954");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsCharts_controller_ChartEventUnsubscribe_SeriesEventUnregisterJS, "SeriesEventUnregister", "ChartEventUnsubscribe", {
Callback: OS.DataConversion.JSNodeParamConverter.to(vars.value.callbackInLocal, OS.DataTypes.DataTypes.Object),
ChartEventId: OS.DataConversion.JSNodeParamConverter.to(vars.value.chartEventIdInLocal, OS.DataTypes.DataTypes.Text),
ChartWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.chartWidgetIdInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsChartsController.default;
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.ChartEventUnsubscribe$vars", [{
name: "ChartWidgetId",
attrName: "chartWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ChartEventId",
attrName: "chartEventIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Callback",
attrName: "callbackInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
OutSystemsChartsController.default.clientActionProxies.chartEventUnsubscribe$Action = function (chartWidgetIdIn, chartEventIdIn, callbackIn) {
chartWidgetIdIn = (chartWidgetIdIn === undefined) ? "" : chartWidgetIdIn;
chartEventIdIn = (chartEventIdIn === undefined) ? "" : chartEventIdIn;
callbackIn = (callbackIn === undefined) ? null : callbackIn;
return controller.executeActionInsideJSNode(OutSystemsChartsController.default.chartEventUnsubscribe$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(chartWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(chartEventIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(callbackIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsCharts.controller$ChartEventUnsubscribe.SeriesEventUnregisterJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.ChartAPI.Chart.UnsubscribeEvent(
    $parameters.ChartWidgetId,
    $parameters.ChartEventId,
    $parameters.Callback
);
};
});


define("OutSystemsCharts.controller$ChartFormat_Init_v1", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.controller", "OutSystemsCharts.model$ST_639b8c480159ce740702f0a0cf3b55a5Structure"], function (exports, OSRuntimeCore, OutSystemsChartsModel, OutSystemsChartsController) {
var OS = OSRuntimeCore;
OutSystemsChartsController.default.chartFormat_Init_v1$Action = function (showDataPointValuesIn, useAnimationIn, callContext) {
return OS.Logger.startActiveSpan("ChartFormat_Init_v1", function (span) {
if(span) {
span.setAttribute("code.function", "ChartFormat_Init_v1");
span.setAttribute("outsystems.function.key", "ce8cc542-8d82-43ad-9286-8d7ecef73618");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.ChartFormat_Init_v1$vars"))());
vars.value.showDataPointValuesInLocal = showDataPointValuesIn;
vars.value.useAnimationInLocal = useAnimationIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.ChartFormat_Init_v1$outVars"))());
// Set ChartFormat
// ChartFormat.ShowDataPointValues = ShowDataPointValues
outVars.value.chartFormatOut.showDataPointValuesAttr = vars.value.showDataPointValuesInLocal;
// ChartFormat.UseAnimation = UseAnimation
outVars.value.chartFormatOut.useAnimationAttr = vars.value.useAnimationInLocal;
return outVars.value;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsChartsController.default;
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.ChartFormat_Init_v1$vars", [{
name: "ShowDataPointValues",
attrName: "showDataPointValuesInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "UseAnimation",
attrName: "useAnimationInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.ChartFormat_Init_v1$outVars", [{
name: "ChartFormat",
attrName: "chartFormatOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new OutSystemsChartsModel.ST_639b8c480159ce740702f0a0cf3b55a5Structure();
},
complexType: OutSystemsChartsModel.ST_639b8c480159ce740702f0a0cf3b55a5Structure
}]);
OutSystemsChartsController.default.clientActionProxies.chartFormat_Init_v1$Action = function (showDataPointValuesIn, useAnimationIn) {
showDataPointValuesIn = (showDataPointValuesIn === undefined) ? false : showDataPointValuesIn;
useAnimationIn = (useAnimationIn === undefined) ? false : useAnimationIn;
return controller.executeActionInsideJSNode(OutSystemsChartsController.default.chartFormat_Init_v1$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(showDataPointValuesIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(useAnimationIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
ChartFormat: actionResults.chartFormatOut
};
});
};
});


define("OutSystemsCharts.controller$CreateAxis", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.controller", "OutSystemsCharts.controller$CreateAxis.CreateAxisJS"], function (exports, OSRuntimeCore, OutSystemsChartsModel, OutSystemsChartsController, OutSystemsCharts_controller_CreateAxis_CreateAxisJS) {
var OS = OSRuntimeCore;
OutSystemsChartsController.default.createAxis$Action = function (uniqueIdIn, configsIn, typeIn, providerIn, callContext) {
return OS.Logger.startActiveSpan("CreateAxis", function (span) {
if(span) {
span.setAttribute("code.function", "CreateAxis");
span.setAttribute("outsystems.function.key", "f50c1105-de4a-4036-bde0-cc1b4bd6af45");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.CreateAxis$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.configsInLocal = configsIn;
vars.value.typeInLocal = typeIn;
vars.value.providerInLocal = providerIn;
OS.Logger.startActiveSpan("CreateAxis", function (span) {
if(span) {
span.setAttribute("code.function", "CreateAxis");
span.setAttribute("outsystems.function.key", "b04541a8-f270-45c0-8fd7-6444418c6703");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsCharts_controller_CreateAxis_CreateAxisJS, "CreateAxis", "CreateAxis", {
configs: OS.DataConversion.JSNodeParamConverter.to(vars.value.configsInLocal, OS.DataTypes.DataTypes.Text),
provider: OS.DataConversion.JSNodeParamConverter.to(vars.value.providerInLocal, OS.DataTypes.DataTypes.Text),
uniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.DataTypes.DataTypes.Text),
type: OS.DataConversion.JSNodeParamConverter.to(vars.value.typeInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsChartsController.default;
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.CreateAxis$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Configs",
attrName: "configsInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Type",
attrName: "typeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Provider",
attrName: "providerInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsChartsController.default.clientActionProxies.createAxis$Action = function (uniqueIdIn, configsIn, typeIn, providerIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
configsIn = (configsIn === undefined) ? "" : configsIn;
typeIn = (typeIn === undefined) ? "" : typeIn;
providerIn = (providerIn === undefined) ? "" : providerIn;
return controller.executeActionInsideJSNode(OutSystemsChartsController.default.createAxis$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(configsIn, OS.DataTypes.DataTypes.Text), typeIn, providerIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsCharts.controller$CreateAxis.CreateAxisJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.ChartAPI.AddOn.Axis.Create(
    $parameters.uniqueId,
    $parameters.configs,
    $parameters.provider,
    $parameters.type
);
};
});


define("OutSystemsCharts.controller$CreateChart", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.controller", "OutSystemsCharts.controller$CreateChart.CreateChartJS", "OutSystemsCharts.controller$SetServerDateFormat"], function (exports, OSRuntimeCore, OutSystemsChartsModel, OutSystemsChartsController, OutSystemsCharts_controller_CreateChart_CreateChartJS) {
var OS = OSRuntimeCore;
OutSystemsChartsController.default.createChart$Action = function (uniqueIdIn, typeIn, configsIn, versionIn, providerIn, callContext) {
return OS.Logger.startActiveSpan("CreateChart", function (span) {
if(span) {
span.setAttribute("code.function", "CreateChart");
span.setAttribute("outsystems.function.key", "92a0064a-2939-4f8c-ad32-c8b2b692a268");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.CreateChart$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.typeInLocal = typeIn;
vars.value.configsInLocal = configsIn;
vars.value.versionInLocal = versionIn;
vars.value.providerInLocal = providerIn;
// Execute Action: SetServerDateFormat
OutSystemsChartsController.default.setServerDateFormat$Action(callContext);
OS.Logger.startActiveSpan("CreateChart", function (span) {
if(span) {
span.setAttribute("code.function", "CreateChart");
span.setAttribute("outsystems.function.key", "d1a76d94-454c-4b7b-a8f1-51feda0c6660");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsCharts_controller_CreateChart_CreateChartJS, "CreateChart", "CreateChart", {
configs: OS.DataConversion.JSNodeParamConverter.to(vars.value.configsInLocal, OS.DataTypes.DataTypes.Text),
provider: OS.DataConversion.JSNodeParamConverter.to(vars.value.providerInLocal, OS.DataTypes.DataTypes.Text),
version: OS.DataConversion.JSNodeParamConverter.to(vars.value.versionInLocal, OS.DataTypes.DataTypes.Text),
type: OS.DataConversion.JSNodeParamConverter.to(vars.value.typeInLocal, OS.DataTypes.DataTypes.Text),
chartID: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsChartsController.default;
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.CreateChart$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Type",
attrName: "typeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Configs",
attrName: "configsInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Version",
attrName: "versionInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Provider",
attrName: "providerInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsChartsController.default.clientActionProxies.createChart$Action = function (uniqueIdIn, typeIn, configsIn, versionIn, providerIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
typeIn = (typeIn === undefined) ? "" : typeIn;
configsIn = (configsIn === undefined) ? "" : configsIn;
versionIn = (versionIn === undefined) ? "" : versionIn;
providerIn = (providerIn === undefined) ? "" : providerIn;
return controller.executeActionInsideJSNode(OutSystemsChartsController.default.createChart$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(typeIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(configsIn, OS.DataTypes.DataTypes.Text), versionIn, providerIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsCharts.controller$CreateChart.CreateChartJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.ChartAPI.Chart.Create(
    $parameters.chartID,
    $parameters.configs,
    $parameters.provider,
    $parameters.type,
    $parameters.version,
);
};
});


define("OutSystemsCharts.controller$CreateExport", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.controller", "OutSystemsCharts.controller$CreateExport.CreateExportJS"], function (exports, OSRuntimeCore, OutSystemsChartsModel, OutSystemsChartsController, OutSystemsCharts_controller_CreateExport_CreateExportJS) {
var OS = OSRuntimeCore;
OutSystemsChartsController.default.createExport$Action = function (uniqueIdIn, configsIn, providerIn, callContext) {
return OS.Logger.startActiveSpan("CreateExport", function (span) {
if(span) {
span.setAttribute("code.function", "CreateExport");
span.setAttribute("outsystems.function.key", "effbd010-96a4-41af-8f7c-4fbaeff67543");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.CreateExport$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.configsInLocal = configsIn;
vars.value.providerInLocal = providerIn;
OS.Logger.startActiveSpan("CreateExport", function (span) {
if(span) {
span.setAttribute("code.function", "CreateExport");
span.setAttribute("outsystems.function.key", "1920eeb4-4109-4236-9821-0ef66425fc8c");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsCharts_controller_CreateExport_CreateExportJS, "CreateExport", "CreateExport", {
provider: OS.DataConversion.JSNodeParamConverter.to(vars.value.providerInLocal, OS.DataTypes.DataTypes.Text),
configs: OS.DataConversion.JSNodeParamConverter.to(vars.value.configsInLocal, OS.DataTypes.DataTypes.Text),
uniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsChartsController.default;
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.CreateExport$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Configs",
attrName: "configsInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Provider",
attrName: "providerInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsChartsController.default.clientActionProxies.createExport$Action = function (uniqueIdIn, configsIn, providerIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
configsIn = (configsIn === undefined) ? "" : configsIn;
providerIn = (providerIn === undefined) ? "" : providerIn;
return controller.executeActionInsideJSNode(OutSystemsChartsController.default.createExport$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(configsIn, OS.DataTypes.DataTypes.Text), providerIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsCharts.controller$CreateExport.CreateExportJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.ChartAPI.AddOn.Export.Create(
    $parameters.uniqueId,
    $parameters.configs,
    $parameters.provider
);
};
});


define("OutSystemsCharts.controller$CreateLegend", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.controller", "OutSystemsCharts.controller$CreateLegend.CreateLegendJS"], function (exports, OSRuntimeCore, OutSystemsChartsModel, OutSystemsChartsController, OutSystemsCharts_controller_CreateLegend_CreateLegendJS) {
var OS = OSRuntimeCore;
OutSystemsChartsController.default.createLegend$Action = function (uniqueIdIn, configsIn, providerIn, callContext) {
return OS.Logger.startActiveSpan("CreateLegend", function (span) {
if(span) {
span.setAttribute("code.function", "CreateLegend");
span.setAttribute("outsystems.function.key", "36b4d99e-ea06-40da-a659-12865c3e1b1c");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.CreateLegend$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.configsInLocal = configsIn;
vars.value.providerInLocal = providerIn;
OS.Logger.startActiveSpan("CreateLegend", function (span) {
if(span) {
span.setAttribute("code.function", "CreateLegend");
span.setAttribute("outsystems.function.key", "cb8a1b70-cc6d-431b-8864-cc470be3efec");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsCharts_controller_CreateLegend_CreateLegendJS, "CreateLegend", "CreateLegend", {
uniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.DataTypes.DataTypes.Text),
provider: OS.DataConversion.JSNodeParamConverter.to(vars.value.providerInLocal, OS.DataTypes.DataTypes.Text),
configs: OS.DataConversion.JSNodeParamConverter.to(vars.value.configsInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsChartsController.default;
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.CreateLegend$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Configs",
attrName: "configsInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Provider",
attrName: "providerInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsChartsController.default.clientActionProxies.createLegend$Action = function (uniqueIdIn, configsIn, providerIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
configsIn = (configsIn === undefined) ? "" : configsIn;
providerIn = (providerIn === undefined) ? "" : providerIn;
return controller.executeActionInsideJSNode(OutSystemsChartsController.default.createLegend$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(configsIn, OS.DataTypes.DataTypes.Text), providerIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsCharts.controller$CreateLegend.CreateLegendJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.ChartAPI.AddOn.Legend.Create(
    $parameters.uniqueId,
    $parameters.configs,
    $parameters.provider
);
};
});


define("OutSystemsCharts.controller$CreateSeriesStyling", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.controller", "OutSystemsCharts.controller$CreateSeriesStyling.CreateSeriesStylingJS"], function (exports, OSRuntimeCore, OutSystemsChartsModel, OutSystemsChartsController, OutSystemsCharts_controller_CreateSeriesStyling_CreateSeriesStylingJS) {
var OS = OSRuntimeCore;
OutSystemsChartsController.default.createSeriesStyling$Action = function (uniqueIdIn, configsIn, providerIn, callContext) {
return OS.Logger.startActiveSpan("CreateSeriesStyling", function (span) {
if(span) {
span.setAttribute("code.function", "CreateSeriesStyling");
span.setAttribute("outsystems.function.key", "86a27ff3-5ea4-4a8a-abd6-e7189ec8dc00");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.CreateSeriesStyling$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.configsInLocal = configsIn;
vars.value.providerInLocal = providerIn;
OS.Logger.startActiveSpan("CreateSeriesStyling", function (span) {
if(span) {
span.setAttribute("code.function", "CreateSeriesStyling");
span.setAttribute("outsystems.function.key", "fed06e8a-ef90-4f01-a4c4-7fafda1d2cce");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsCharts_controller_CreateSeriesStyling_CreateSeriesStylingJS, "CreateSeriesStyling", "CreateSeriesStyling", {
uniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.DataTypes.DataTypes.Text),
provider: OS.DataConversion.JSNodeParamConverter.to(vars.value.providerInLocal, OS.DataTypes.DataTypes.Text),
configs: OS.DataConversion.JSNodeParamConverter.to(vars.value.configsInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsChartsController.default;
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.CreateSeriesStyling$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Configs",
attrName: "configsInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Provider",
attrName: "providerInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsChartsController.default.clientActionProxies.createSeriesStyling$Action = function (uniqueIdIn, configsIn, providerIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
configsIn = (configsIn === undefined) ? "" : configsIn;
providerIn = (providerIn === undefined) ? "" : providerIn;
return controller.executeActionInsideJSNode(OutSystemsChartsController.default.createSeriesStyling$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(configsIn, OS.DataTypes.DataTypes.Text), providerIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsCharts.controller$CreateSeriesStyling.CreateSeriesStylingJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.ChartAPI.AddOn.SeriesStyling.Create(
    $parameters.uniqueId,
    $parameters.configs,
    $parameters.provider
);
};
});


define("OutSystemsCharts.controller$DataPoint_Init_v1", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.controller", "OutSystemsCharts.model$ST_9498db02a236485a96a27db0bd61b81eStructure"], function (exports, OSRuntimeCore, OutSystemsChartsModel, OutSystemsChartsController) {
var OS = OSRuntimeCore;
OutSystemsChartsController.default.dataPoint_Init_v1$Action = function (labelIn, valueIn, dataSeriesNameIn, tooltipIn, colorIn, callContext) {
return OS.Logger.startActiveSpan("DataPoint_Init_v1", function (span) {
if(span) {
span.setAttribute("code.function", "DataPoint_Init_v1");
span.setAttribute("outsystems.function.key", "2620c320-41df-43e6-b6d0-c18d1ea61b60");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.DataPoint_Init_v1$vars"))());
vars.value.labelInLocal = labelIn;
vars.value.valueInLocal = valueIn;
vars.value.dataSeriesNameInLocal = dataSeriesNameIn;
vars.value.tooltipInLocal = tooltipIn;
vars.value.colorInLocal = colorIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.DataPoint_Init_v1$outVars"))());
// Set DataPoint
// DataPoint.Label = Label
outVars.value.dataPointOut.labelAttr = vars.value.labelInLocal;
// DataPoint.Value = Value
outVars.value.dataPointOut.valueAttr = vars.value.valueInLocal;
// DataPoint.SeriesName = DataSeriesName
outVars.value.dataPointOut.seriesNameAttr = vars.value.dataSeriesNameInLocal;
// DataPoint.Color = Color
outVars.value.dataPointOut.colorAttr = vars.value.colorInLocal;
// DataPoint.Tooltip = Tooltip
outVars.value.dataPointOut.tooltipAttr = vars.value.tooltipInLocal;
return outVars.value;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsChartsController.default;
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.DataPoint_Init_v1$vars", [{
name: "Label",
attrName: "labelInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Value",
attrName: "valueInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "DataSeriesName",
attrName: "dataSeriesNameInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Tooltip",
attrName: "tooltipInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Color",
attrName: "colorInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.DataPoint_Init_v1$outVars", [{
name: "DataPoint",
attrName: "dataPointOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new OutSystemsChartsModel.ST_9498db02a236485a96a27db0bd61b81eStructure();
},
complexType: OutSystemsChartsModel.ST_9498db02a236485a96a27db0bd61b81eStructure
}]);
OutSystemsChartsController.default.clientActionProxies.dataPoint_Init_v1$Action = function (labelIn, valueIn, dataSeriesNameIn, tooltipIn, colorIn) {
labelIn = (labelIn === undefined) ? "" : labelIn;
valueIn = (valueIn === undefined) ? OS.DataTypes.Decimal.defaultValue : valueIn;
dataSeriesNameIn = (dataSeriesNameIn === undefined) ? "" : dataSeriesNameIn;
tooltipIn = (tooltipIn === undefined) ? "" : tooltipIn;
colorIn = (colorIn === undefined) ? "" : colorIn;
return controller.executeActionInsideJSNode(OutSystemsChartsController.default.dataPoint_Init_v1$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(labelIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(valueIn, OS.DataTypes.DataTypes.Decimal), OS.DataConversion.JSNodeParamConverter.from(dataSeriesNameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(tooltipIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(colorIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
DataPoint: actionResults.dataPointOut
};
});
};
});


define("OutSystemsCharts.controller$DataPoint_InitMissing_v1", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.controller", "OutSystemsCharts.model$ST_9498db02a236485a96a27db0bd61b81eStructure"], function (exports, OSRuntimeCore, OutSystemsChartsModel, OutSystemsChartsController) {
var OS = OSRuntimeCore;
OutSystemsChartsController.default.dataPoint_InitMissing_v1$Action = function (labelIn, dataSeriesNameIn, callContext) {
return OS.Logger.startActiveSpan("DataPoint_InitMissing_v1", function (span) {
if(span) {
span.setAttribute("code.function", "DataPoint_InitMissing_v1");
span.setAttribute("outsystems.function.key", "22eaffb5-5001-45d3-9650-2be2d9824315");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.DataPoint_InitMissing_v1$vars"))());
vars.value.labelInLocal = labelIn;
vars.value.dataSeriesNameInLocal = dataSeriesNameIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.DataPoint_InitMissing_v1$outVars"))());
// Set DataPoint
// DataPoint.Label = Label
outVars.value.dataPointOut.labelAttr = vars.value.labelInLocal;
// DataPoint.SeriesName = DataSeriesName
outVars.value.dataPointOut.seriesNameAttr = vars.value.dataSeriesNameInLocal;
// DataPoint.Value = -2147483647
outVars.value.dataPointOut.valueAttr = OS.BuiltinFunctions.integerToDecimal(-2147483647);
return outVars.value;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsChartsController.default;
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.DataPoint_InitMissing_v1$vars", [{
name: "Label",
attrName: "labelInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "DataSeriesName",
attrName: "dataSeriesNameInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.DataPoint_InitMissing_v1$outVars", [{
name: "DataPoint",
attrName: "dataPointOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new OutSystemsChartsModel.ST_9498db02a236485a96a27db0bd61b81eStructure();
},
complexType: OutSystemsChartsModel.ST_9498db02a236485a96a27db0bd61b81eStructure
}]);
OutSystemsChartsController.default.clientActionProxies.dataPoint_InitMissing_v1$Action = function (labelIn, dataSeriesNameIn) {
labelIn = (labelIn === undefined) ? "" : labelIn;
dataSeriesNameIn = (dataSeriesNameIn === undefined) ? "" : dataSeriesNameIn;
return controller.executeActionInsideJSNode(OutSystemsChartsController.default.dataPoint_InitMissing_v1$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(labelIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(dataSeriesNameIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
DataPoint: actionResults.dataPointOut
};
});
};
});


define("OutSystemsCharts.controller$DateParseToJS_v1", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.controller"], function (exports, OSRuntimeCore, OutSystemsChartsModel, OutSystemsChartsController) {
var OS = OSRuntimeCore;
OutSystemsChartsController.default.dateParseToJS_v1$Action = function (valueIn, callContext) {
return OS.Logger.startActiveSpan("DateParseToJS_v1", function (span) {
if(span) {
span.setAttribute("code.function", "DateParseToJS_v1");
span.setAttribute("outsystems.function.key", "c5359dba-94af-4899-80b8-1599434600ec");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.DateParseToJS_v1$vars"))());
vars.value.valueInLocal = valueIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.DateParseToJS_v1$outVars"))());
// Valid Date or DateTime?
if(((OS.BuiltinFunctions.textToDateValidate(vars.value.valueInLocal) || OS.BuiltinFunctions.textToDateTimeValidate(vars.value.valueInLocal)))) {
// Output
// TempDateTime = If
vars.value.tempDateTimeVar = ((OS.BuiltinFunctions.textToDateTimeValidate(vars.value.valueInLocal)) ? (OS.BuiltinFunctions.textToDateTime(vars.value.valueInLocal)) : (OS.BuiltinFunctions.textToDate(vars.value.valueInLocal)));
// Output = FormatDateTime
outVars.value.outputOut = OS.BuiltinFunctions.formatDateTime(vars.value.tempDateTimeVar, "yyyy-MM-ddTHH:mm:ss");
} else {
// Output = Value
outVars.value.outputOut = vars.value.valueInLocal;
}

return outVars.value;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsChartsController.default;
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.DateParseToJS_v1$vars", [{
name: "Value",
attrName: "valueInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "TempDateTime",
attrName: "tempDateTimeVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}]);
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.DateParseToJS_v1$outVars", [{
name: "Output",
attrName: "outputOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsChartsController.default.clientActionProxies.dateParseToJS_v1$Action = function (valueIn) {
valueIn = (valueIn === undefined) ? "" : valueIn;
return controller.executeActionInsideJSNode(OutSystemsChartsController.default.dateParseToJS_v1$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(valueIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Output: OS.DataConversion.JSNodeParamConverter.to(actionResults.outputOut, OS.DataTypes.DataTypes.Text)
};
});
};
});


define("OutSystemsCharts.controller$DestroyAxis", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.controller", "OutSystemsCharts.controller$DestroyAxis.DisposeJS", "OutSystemsCharts.model$ST_50c794173b7ac3485b1cda7be99f6b43Structure", "OutSystemsCharts.model$ST_7c45885429f626cd0775ccbea11ace15Structure"], function (exports, OSRuntimeCore, OutSystemsChartsModel, OutSystemsChartsController, OutSystemsCharts_controller_DestroyAxis_DisposeJS) {
var OS = OSRuntimeCore;
OutSystemsChartsController.default.destroyAxis$Action = function (uniqueIdIn, callContext) {
return OS.Logger.startActiveSpan("DestroyAxis", function (span) {
if(span) {
span.setAttribute("code.function", "DestroyAxis");
span.setAttribute("outsystems.function.key", "d266c8c5-2242-4d19-a0b4-9b686f6dac9f");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.DestroyAxis$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
var disposeJSResult = new OS.DataTypes.VariableHolder();
var jSONDeserializeErrorMessageVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(OutSystemsChartsModel.ST_7c45885429f626cd0775ccbea11ace15Structure))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.DestroyAxis$outVars"))());
disposeJSResult.value = OS.Logger.startActiveSpan("Dispose", function (span) {
if(span) {
span.setAttribute("code.function", "Dispose");
span.setAttribute("outsystems.function.key", "380c8261-1114-4a98-bfce-899a622b33d4");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsCharts_controller_DestroyAxis_DisposeJS, "Dispose", "DestroyAxis", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.DataTypes.DataTypes.Text),
ResponseJSON: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsCharts.DestroyAxis$disposeJSResult"))();
jsNodeResult.responseJSONOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ResponseJSON, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// JSON Deserialize: JSONDeserializeErrorMessage
jSONDeserializeErrorMessageVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(disposeJSResult.value.responseJSONOut, OutSystemsChartsModel.ST_7c45885429f626cd0775ccbea11ace15Structure, false);
// Success = JSONDeserializeErrorMessage.Data.IsSuccess
outVars.value.successOut = jSONDeserializeErrorMessageVar.value.dataOut.isSuccessAttr;
// ErrorMessage.Code = JSONDeserializeErrorMessage.Data.Code
outVars.value.errorMessageOut.codeAttr = jSONDeserializeErrorMessageVar.value.dataOut.codeAttr;
// ErrorMessage.Message = JSONDeserializeErrorMessage.Data.Message
outVars.value.errorMessageOut.messageAttr = jSONDeserializeErrorMessageVar.value.dataOut.messageAttr;
return outVars.value;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsChartsController.default;
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.DestroyAxis$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.DestroyAxis$disposeJSResult", [{
name: "ResponseJSON",
attrName: "responseJSONOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.DestroyAxis$outVars", [{
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new OutSystemsChartsModel.ST_50c794173b7ac3485b1cda7be99f6b43Structure();
},
complexType: OutSystemsChartsModel.ST_50c794173b7ac3485b1cda7be99f6b43Structure
}]);
OutSystemsChartsController.default.clientActionProxies.destroyAxis$Action = function (uniqueIdIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
return controller.executeActionInsideJSNode(OutSystemsChartsController.default.destroyAxis$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: actionResults.errorMessageOut
};
});
};
});

define("OutSystemsCharts.controller$DestroyAxis.DisposeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.ResponseJSON = OutSystems.ChartAPI.AddOn.Axis.Dispose($parameters.UniqueId);
};
});


define("OutSystemsCharts.controller$DestroyExport", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.controller", "OutSystemsCharts.controller$DestroyExport.DisposeJS", "OutSystemsCharts.model$ST_50c794173b7ac3485b1cda7be99f6b43Structure", "OutSystemsCharts.model$ST_7c45885429f626cd0775ccbea11ace15Structure"], function (exports, OSRuntimeCore, OutSystemsChartsModel, OutSystemsChartsController, OutSystemsCharts_controller_DestroyExport_DisposeJS) {
var OS = OSRuntimeCore;
OutSystemsChartsController.default.destroyExport$Action = function (uniqueIdIn, callContext) {
return OS.Logger.startActiveSpan("DestroyExport", function (span) {
if(span) {
span.setAttribute("code.function", "DestroyExport");
span.setAttribute("outsystems.function.key", "351c4c59-1697-4487-9e29-112bd2ec16a7");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.DestroyExport$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
var disposeJSResult = new OS.DataTypes.VariableHolder();
var jSONDeserializeErrorMessageVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(OutSystemsChartsModel.ST_7c45885429f626cd0775ccbea11ace15Structure))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.DestroyExport$outVars"))());
disposeJSResult.value = OS.Logger.startActiveSpan("Dispose", function (span) {
if(span) {
span.setAttribute("code.function", "Dispose");
span.setAttribute("outsystems.function.key", "9f725785-50a6-41de-92dc-502db56e06f3");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsCharts_controller_DestroyExport_DisposeJS, "Dispose", "DestroyExport", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.DataTypes.DataTypes.Text),
ResponseJSON: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsCharts.DestroyExport$disposeJSResult"))();
jsNodeResult.responseJSONOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ResponseJSON, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// JSON Deserialize: JSONDeserializeErrorMessage
jSONDeserializeErrorMessageVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(disposeJSResult.value.responseJSONOut, OutSystemsChartsModel.ST_7c45885429f626cd0775ccbea11ace15Structure, false);
// Set output
// Success = JSONDeserializeErrorMessage.Data.IsSuccess
outVars.value.successOut = jSONDeserializeErrorMessageVar.value.dataOut.isSuccessAttr;
// ErrorMessage.Code = JSONDeserializeErrorMessage.Data.Code
outVars.value.errorMessageOut.codeAttr = jSONDeserializeErrorMessageVar.value.dataOut.codeAttr;
// ErrorMessage.Message = JSONDeserializeErrorMessage.Data.Message
outVars.value.errorMessageOut.messageAttr = jSONDeserializeErrorMessageVar.value.dataOut.messageAttr;
return outVars.value;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsChartsController.default;
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.DestroyExport$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.DestroyExport$disposeJSResult", [{
name: "ResponseJSON",
attrName: "responseJSONOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.DestroyExport$outVars", [{
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new OutSystemsChartsModel.ST_50c794173b7ac3485b1cda7be99f6b43Structure();
},
complexType: OutSystemsChartsModel.ST_50c794173b7ac3485b1cda7be99f6b43Structure
}]);
OutSystemsChartsController.default.clientActionProxies.destroyExport$Action = function (uniqueIdIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
return controller.executeActionInsideJSNode(OutSystemsChartsController.default.destroyExport$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: actionResults.errorMessageOut
};
});
};
});

define("OutSystemsCharts.controller$DestroyExport.DisposeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.ResponseJSON = OutSystems.ChartAPI.AddOn.Export.Dispose($parameters.UniqueId);
};
});


define("OutSystemsCharts.controller$DestroyLegend", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.controller", "OutSystemsCharts.controller$DestroyLegend.DisposeJS", "OutSystemsCharts.model$ST_50c794173b7ac3485b1cda7be99f6b43Structure", "OutSystemsCharts.model$ST_7c45885429f626cd0775ccbea11ace15Structure"], function (exports, OSRuntimeCore, OutSystemsChartsModel, OutSystemsChartsController, OutSystemsCharts_controller_DestroyLegend_DisposeJS) {
var OS = OSRuntimeCore;
OutSystemsChartsController.default.destroyLegend$Action = function (uniqueIdIn, callContext) {
return OS.Logger.startActiveSpan("DestroyLegend", function (span) {
if(span) {
span.setAttribute("code.function", "DestroyLegend");
span.setAttribute("outsystems.function.key", "73dd4900-2e09-4d72-8f67-72db565d0570");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.DestroyLegend$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
var disposeJSResult = new OS.DataTypes.VariableHolder();
var jSONDeserializeErrorMessageVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(OutSystemsChartsModel.ST_7c45885429f626cd0775ccbea11ace15Structure))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.DestroyLegend$outVars"))());
disposeJSResult.value = OS.Logger.startActiveSpan("Dispose", function (span) {
if(span) {
span.setAttribute("code.function", "Dispose");
span.setAttribute("outsystems.function.key", "7a6f7b66-4864-49f9-8c10-8f2e0ef3e71f");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsCharts_controller_DestroyLegend_DisposeJS, "Dispose", "DestroyLegend", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.DataTypes.DataTypes.Text),
ResponseJSON: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsCharts.DestroyLegend$disposeJSResult"))();
jsNodeResult.responseJSONOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ResponseJSON, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// JSON Deserialize: JSONDeserializeErrorMessage
jSONDeserializeErrorMessageVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(disposeJSResult.value.responseJSONOut, OutSystemsChartsModel.ST_7c45885429f626cd0775ccbea11ace15Structure, false);
// Success = JSONDeserializeErrorMessage.Data.IsSuccess
outVars.value.successOut = jSONDeserializeErrorMessageVar.value.dataOut.isSuccessAttr;
// ErrorMessage.Code = JSONDeserializeErrorMessage.Data.Code
outVars.value.errorMessageOut.codeAttr = jSONDeserializeErrorMessageVar.value.dataOut.codeAttr;
// ErrorMessage.Message = JSONDeserializeErrorMessage.Data.Message
outVars.value.errorMessageOut.messageAttr = jSONDeserializeErrorMessageVar.value.dataOut.messageAttr;
return outVars.value;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsChartsController.default;
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.DestroyLegend$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.DestroyLegend$disposeJSResult", [{
name: "ResponseJSON",
attrName: "responseJSONOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.DestroyLegend$outVars", [{
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new OutSystemsChartsModel.ST_50c794173b7ac3485b1cda7be99f6b43Structure();
},
complexType: OutSystemsChartsModel.ST_50c794173b7ac3485b1cda7be99f6b43Structure
}]);
OutSystemsChartsController.default.clientActionProxies.destroyLegend$Action = function (uniqueIdIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
return controller.executeActionInsideJSNode(OutSystemsChartsController.default.destroyLegend$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: actionResults.errorMessageOut
};
});
};
});

define("OutSystemsCharts.controller$DestroyLegend.DisposeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.ResponseJSON = OutSystems.ChartAPI.AddOn.Legend.Dispose($parameters.UniqueId);
};
});


define("OutSystemsCharts.controller$DestroySeriesStyling", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.controller", "OutSystemsCharts.controller$DestroySeriesStyling.DisposeJS", "OutSystemsCharts.model$ST_50c794173b7ac3485b1cda7be99f6b43Structure", "OutSystemsCharts.model$ST_7c45885429f626cd0775ccbea11ace15Structure"], function (exports, OSRuntimeCore, OutSystemsChartsModel, OutSystemsChartsController, OutSystemsCharts_controller_DestroySeriesStyling_DisposeJS) {
var OS = OSRuntimeCore;
OutSystemsChartsController.default.destroySeriesStyling$Action = function (uniqueIdIn, callContext) {
return OS.Logger.startActiveSpan("DestroySeriesStyling", function (span) {
if(span) {
span.setAttribute("code.function", "DestroySeriesStyling");
span.setAttribute("outsystems.function.key", "d2aeeb6d-d8a3-4a53-affd-b61a69fdda51");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.DestroySeriesStyling$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
var disposeJSResult = new OS.DataTypes.VariableHolder();
var jSONDeserializeErrorMessageVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(OutSystemsChartsModel.ST_7c45885429f626cd0775ccbea11ace15Structure))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.DestroySeriesStyling$outVars"))());
disposeJSResult.value = OS.Logger.startActiveSpan("Dispose", function (span) {
if(span) {
span.setAttribute("code.function", "Dispose");
span.setAttribute("outsystems.function.key", "10895e12-3088-48c1-9a77-ca986c2fa90b");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsCharts_controller_DestroySeriesStyling_DisposeJS, "Dispose", "DestroySeriesStyling", {
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.DataTypes.DataTypes.Text),
ResponseJSON: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsCharts.DestroySeriesStyling$disposeJSResult"))();
jsNodeResult.responseJSONOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ResponseJSON, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// JSON Deserialize: JSONDeserializeErrorMessage
jSONDeserializeErrorMessageVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(disposeJSResult.value.responseJSONOut, OutSystemsChartsModel.ST_7c45885429f626cd0775ccbea11ace15Structure, false);
// Success = JSONDeserializeErrorMessage.Data.IsSuccess
outVars.value.successOut = jSONDeserializeErrorMessageVar.value.dataOut.isSuccessAttr;
// ErrorMessage.Code = JSONDeserializeErrorMessage.Data.Code
outVars.value.errorMessageOut.codeAttr = jSONDeserializeErrorMessageVar.value.dataOut.codeAttr;
// ErrorMessage.Message = JSONDeserializeErrorMessage.Data.Message
outVars.value.errorMessageOut.messageAttr = jSONDeserializeErrorMessageVar.value.dataOut.messageAttr;
return outVars.value;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsChartsController.default;
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.DestroySeriesStyling$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.DestroySeriesStyling$disposeJSResult", [{
name: "ResponseJSON",
attrName: "responseJSONOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.DestroySeriesStyling$outVars", [{
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new OutSystemsChartsModel.ST_50c794173b7ac3485b1cda7be99f6b43Structure();
},
complexType: OutSystemsChartsModel.ST_50c794173b7ac3485b1cda7be99f6b43Structure
}]);
OutSystemsChartsController.default.clientActionProxies.destroySeriesStyling$Action = function (uniqueIdIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
return controller.executeActionInsideJSNode(OutSystemsChartsController.default.destroySeriesStyling$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: actionResults.errorMessageOut
};
});
};
});

define("OutSystemsCharts.controller$DestroySeriesStyling.DisposeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.ResponseJSON = OutSystems.ChartAPI.AddOn.SeriesStyling.Dispose($parameters.UniqueId);
};
});


define("OutSystemsCharts.controller$GenerateUniqueId", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.controller", "OutSystemsCharts.controller$GenerateUniqueId.RandomStringJS"], function (exports, OSRuntimeCore, OutSystemsChartsModel, OutSystemsChartsController, OutSystemsCharts_controller_GenerateUniqueId_RandomStringJS) {
var OS = OSRuntimeCore;
OutSystemsChartsController.default.generateUniqueId$Action = function (current_Unique_IDIn, callContext) {
return OS.Logger.startActiveSpan("GenerateUniqueId", function (span) {
if(span) {
span.setAttribute("code.function", "GenerateUniqueId");
span.setAttribute("outsystems.function.key", "2d918a2a-87a2-43a6-9fe9-c3d1a90895c3");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.GenerateUniqueId$vars"))());
vars.value.current_Unique_IDInLocal = current_Unique_IDIn;
var randomStringJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.GenerateUniqueId$outVars"))());
// Current_ID is empty?
if(((vars.value.current_Unique_IDInLocal === OS.BuiltinFunctions.nullTextIdentifier()))) {
randomStringJSResult.value = OS.Logger.startActiveSpan("RandomString", function (span) {
if(span) {
span.setAttribute("code.function", "RandomString");
span.setAttribute("outsystems.function.key", "a348d3c5-21f7-4589-b6c8-9146ac410733");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsCharts_controller_GenerateUniqueId_RandomStringJS, "RandomString", "GenerateUniqueId", {
UniqueID: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsCharts.GenerateUniqueId$randomStringJSResult"))();
jsNodeResult.uniqueIDOut = OS.DataConversion.JSNodeParamConverter.from($parameters.UniqueID, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// Return new ID
// Unique_ID = RandomString.UniqueID
outVars.value.unique_IDOut = randomStringJSResult.value.uniqueIDOut;
} else {
// Return current ID
// Unique_ID = Current_Unique_ID
outVars.value.unique_IDOut = vars.value.current_Unique_IDInLocal;
}

return outVars.value;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsChartsController.default;
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.GenerateUniqueId$vars", [{
name: "Current_Unique_ID",
attrName: "current_Unique_IDInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.GenerateUniqueId$randomStringJSResult", [{
name: "UniqueID",
attrName: "uniqueIDOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.GenerateUniqueId$outVars", [{
name: "Unique_ID",
attrName: "unique_IDOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsChartsController.default.clientActionProxies.generateUniqueId$Action = function (current_Unique_IDIn) {
current_Unique_IDIn = (current_Unique_IDIn === undefined) ? "" : current_Unique_IDIn;
return controller.executeActionInsideJSNode(OutSystemsChartsController.default.generateUniqueId$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(current_Unique_IDIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Unique_ID: OS.DataConversion.JSNodeParamConverter.to(actionResults.unique_IDOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("OutSystemsCharts.controller$GenerateUniqueId.RandomStringJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.UniqueID = Math.random().toString(36);

};
});


define("OutSystemsCharts.controller$InitChart", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.controller", "OutSystemsCharts.controller$InitChart.InitChartJS", "OutSystemsCharts.model$ST_34313c5cf94d7ce3c5404858c22fafd9Structure", "OutSystemsCharts.model$RL_7d9c239ab2336eba85802eb00151e260"], function (exports, OSRuntimeCore, OutSystemsChartsModel, OutSystemsChartsController, OutSystemsCharts_controller_InitChart_InitChartJS) {
var OS = OSRuntimeCore;
OutSystemsChartsController.default.initChart$Action = function (uniqueIdIn, sourceDataPointListIn, xAxisTypeIn, callContext) {
return OS.Logger.startActiveSpan("InitChart", function (span) {
if(span) {
span.setAttribute("code.function", "InitChart");
span.setAttribute("outsystems.function.key", "b2b90c0b-e65f-45ef-a707-ca6b65666aa4");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.InitChart$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.sourceDataPointListInLocal = sourceDataPointListIn.clone();
vars.value.xAxisTypeInLocal = xAxisTypeIn;
var jSONSerialize_SourceDataPoint_ListVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
// JSON Serialize: JSONSerialize_SourceDataPoint_List
jSONSerialize_SourceDataPoint_ListVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.sourceDataPointListInLocal, true, false);
OS.Logger.startActiveSpan("InitChart", function (span) {
if(span) {
span.setAttribute("code.function", "InitChart");
span.setAttribute("outsystems.function.key", "86696a7c-f2aa-48ea-ac6d-1d7cae1b313f");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsCharts_controller_InitChart_InitChartJS, "InitChart", "InitChart", {
xAxisType: OS.DataConversion.JSNodeParamConverter.to(vars.value.xAxisTypeInLocal, OS.DataTypes.DataTypes.Text),
SourceDataPointList: OS.DataConversion.JSNodeParamConverter.to(jSONSerialize_SourceDataPoint_ListVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsChartsController.default;
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.InitChart$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "SourceDataPointList",
attrName: "sourceDataPointListInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new OutSystemsChartsModel.RL_7d9c239ab2336eba85802eb00151e260();
},
complexType: OutSystemsChartsModel.RL_7d9c239ab2336eba85802eb00151e260
}, {
name: "XAxisType",
attrName: "xAxisTypeInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsChartsController.default.clientActionProxies.initChart$Action = function (uniqueIdIn, sourceDataPointListIn, xAxisTypeIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
sourceDataPointListIn = (sourceDataPointListIn === undefined) ? new OutSystemsChartsModel.RL_7d9c239ab2336eba85802eb00151e260() : sourceDataPointListIn;
xAxisTypeIn = (xAxisTypeIn === undefined) ? "" : xAxisTypeIn;
return controller.executeActionInsideJSNode(OutSystemsChartsController.default.initChart$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.DataTypes.DataTypes.Text), sourceDataPointListIn, OS.DataConversion.JSNodeParamConverter.from(xAxisTypeIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsCharts.controller$InitChart.InitChartJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.ChartAPI.Chart.Initialize(
    $parameters.UniqueId, 
    $parameters.SourceDataPointList,
    $parameters.xAxisType
);
};
});


define("OutSystemsCharts.controller$InitializeAxis", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.controller", "OutSystemsCharts.controller$InitializeAxis.InitializeAxisJS"], function (exports, OSRuntimeCore, OutSystemsChartsModel, OutSystemsChartsController, OutSystemsCharts_controller_InitializeAxis_InitializeAxisJS) {
var OS = OSRuntimeCore;
OutSystemsChartsController.default.initializeAxis$Action = function (uniqueIdIn, callContext) {
return OS.Logger.startActiveSpan("InitializeAxis", function (span) {
if(span) {
span.setAttribute("code.function", "InitializeAxis");
span.setAttribute("outsystems.function.key", "7bdb5c16-a6f5-4239-8b68-d51b29784f7e");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.InitializeAxis$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
OS.Logger.startActiveSpan("InitializeAxis", function (span) {
if(span) {
span.setAttribute("code.function", "InitializeAxis");
span.setAttribute("outsystems.function.key", "8c6ffdeb-b3d7-4f82-bdd7-138eb6d81800");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsCharts_controller_InitializeAxis_InitializeAxisJS, "InitializeAxis", "InitializeAxis", {
uniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsChartsController.default;
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.InitializeAxis$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsChartsController.default.clientActionProxies.initializeAxis$Action = function (uniqueIdIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
return controller.executeActionInsideJSNode(OutSystemsChartsController.default.initializeAxis$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsCharts.controller$InitializeAxis.InitializeAxisJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.ChartAPI.AddOn.Axis.Initialize($parameters.uniqueId);
};
});


define("OutSystemsCharts.controller$InitializeExport", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.controller", "OutSystemsCharts.controller$InitializeExport.InitializeJS"], function (exports, OSRuntimeCore, OutSystemsChartsModel, OutSystemsChartsController, OutSystemsCharts_controller_InitializeExport_InitializeJS) {
var OS = OSRuntimeCore;
OutSystemsChartsController.default.initializeExport$Action = function (uniqueIdIn, callContext) {
return OS.Logger.startActiveSpan("InitializeExport", function (span) {
if(span) {
span.setAttribute("code.function", "InitializeExport");
span.setAttribute("outsystems.function.key", "6dbe7080-7ba5-4c0b-898a-5525a1c6ad18");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.InitializeExport$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
OS.Logger.startActiveSpan("Initialize", function (span) {
if(span) {
span.setAttribute("code.function", "Initialize");
span.setAttribute("outsystems.function.key", "59c46864-145d-47ff-b1f6-722c01747f0b");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsCharts_controller_InitializeExport_InitializeJS, "Initialize", "InitializeExport", {
uniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsChartsController.default;
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.InitializeExport$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsChartsController.default.clientActionProxies.initializeExport$Action = function (uniqueIdIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
return controller.executeActionInsideJSNode(OutSystemsChartsController.default.initializeExport$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsCharts.controller$InitializeExport.InitializeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.ChartAPI.AddOn.Export.Initialize($parameters.uniqueId);
};
});


define("OutSystemsCharts.controller$InitializeLegend", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.controller", "OutSystemsCharts.controller$InitializeLegend.InitializeJS"], function (exports, OSRuntimeCore, OutSystemsChartsModel, OutSystemsChartsController, OutSystemsCharts_controller_InitializeLegend_InitializeJS) {
var OS = OSRuntimeCore;
OutSystemsChartsController.default.initializeLegend$Action = function (uniqueIdIn, callContext) {
return OS.Logger.startActiveSpan("InitializeLegend", function (span) {
if(span) {
span.setAttribute("code.function", "InitializeLegend");
span.setAttribute("outsystems.function.key", "7b2c1009-5545-4b80-a4da-7960e0f48e4a");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.InitializeLegend$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
OS.Logger.startActiveSpan("Initialize", function (span) {
if(span) {
span.setAttribute("code.function", "Initialize");
span.setAttribute("outsystems.function.key", "0032ee7e-bb82-41ee-93a5-13550ca4d1b7");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsCharts_controller_InitializeLegend_InitializeJS, "Initialize", "InitializeLegend", {
uniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsChartsController.default;
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.InitializeLegend$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsChartsController.default.clientActionProxies.initializeLegend$Action = function (uniqueIdIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
return controller.executeActionInsideJSNode(OutSystemsChartsController.default.initializeLegend$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsCharts.controller$InitializeLegend.InitializeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.ChartAPI.AddOn.Legend.Initialize($parameters.uniqueId);
};
});


define("OutSystemsCharts.controller$InitializeSeriesStyling", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.controller", "OutSystemsCharts.controller$InitializeSeriesStyling.InitializeSeriesStylingJS"], function (exports, OSRuntimeCore, OutSystemsChartsModel, OutSystemsChartsController, OutSystemsCharts_controller_InitializeSeriesStyling_InitializeSeriesStylingJS) {
var OS = OSRuntimeCore;
OutSystemsChartsController.default.initializeSeriesStyling$Action = function (uniqueIdIn, callContext) {
return OS.Logger.startActiveSpan("InitializeSeriesStyling", function (span) {
if(span) {
span.setAttribute("code.function", "InitializeSeriesStyling");
span.setAttribute("outsystems.function.key", "e2ef94e4-749a-4fd7-babf-262aca0aff92");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.InitializeSeriesStyling$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
OS.Logger.startActiveSpan("InitializeSeriesStyling", function (span) {
if(span) {
span.setAttribute("code.function", "InitializeSeriesStyling");
span.setAttribute("outsystems.function.key", "b1849bd3-c546-441e-b3e6-4b94fa3c7482");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsCharts_controller_InitializeSeriesStyling_InitializeSeriesStylingJS, "InitializeSeriesStyling", "InitializeSeriesStyling", {
uniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsChartsController.default;
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.InitializeSeriesStyling$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsChartsController.default.clientActionProxies.initializeSeriesStyling$Action = function (uniqueIdIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
return controller.executeActionInsideJSNode(OutSystemsChartsController.default.initializeSeriesStyling$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsCharts.controller$InitializeSeriesStyling.InitializeSeriesStylingJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.ChartAPI.AddOn.SeriesStyling.Initialize($parameters.uniqueId);
};
});


define("OutSystemsCharts.controller$Legacy_InitChart", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.controller", "OutSystemsCharts.controller$Legacy_InitChart.InitChartJS", "OutSystemsCharts.model$ST_9498db02a236485a96a27db0bd61b81eStructure", "OutSystemsCharts.model$RL_52a96e0500b1d6d23d93e10409e37890"], function (exports, OSRuntimeCore, OutSystemsChartsModel, OutSystemsChartsController, OutSystemsCharts_controller_Legacy_InitChart_InitChartJS) {
var OS = OSRuntimeCore;
OutSystemsChartsController.default.legacy_InitChart$Action = function (uniqueIdIn, sourceDataPointListIn, xAxisTypeIn, callContext) {
return OS.Logger.startActiveSpan("Legacy_InitChart", function (span) {
if(span) {
span.setAttribute("code.function", "Legacy_InitChart");
span.setAttribute("outsystems.function.key", "0e580a9c-81c9-4750-a97d-127e91737729");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.Legacy_InitChart$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.sourceDataPointListInLocal = sourceDataPointListIn.clone();
vars.value.xAxisTypeInLocal = xAxisTypeIn;
var jSONSerialize_SourceDataPoint_ListVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
// JSON Serialize: JSONSerialize_SourceDataPoint_List
jSONSerialize_SourceDataPoint_ListVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.sourceDataPointListInLocal, true, false);
OS.Logger.startActiveSpan("InitChart", function (span) {
if(span) {
span.setAttribute("code.function", "InitChart");
span.setAttribute("outsystems.function.key", "040082ac-26f0-40c4-aa19-560a60af6def");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsCharts_controller_Legacy_InitChart_InitChartJS, "InitChart", "Legacy_InitChart", {
xAxisType: OS.DataConversion.JSNodeParamConverter.to(vars.value.xAxisTypeInLocal, OS.DataTypes.DataTypes.Text),
UniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.DataTypes.DataTypes.Text),
SourceDataPointList: OS.DataConversion.JSNodeParamConverter.to(jSONSerialize_SourceDataPoint_ListVar.value.jSONOut, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsChartsController.default;
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.Legacy_InitChart$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "SourceDataPointList",
attrName: "sourceDataPointListInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new OutSystemsChartsModel.RL_52a96e0500b1d6d23d93e10409e37890();
},
complexType: OutSystemsChartsModel.RL_52a96e0500b1d6d23d93e10409e37890
}, {
name: "XAxisType",
attrName: "xAxisTypeInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsChartsController.default.clientActionProxies.legacy_InitChart$Action = function (uniqueIdIn, sourceDataPointListIn, xAxisTypeIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
sourceDataPointListIn = (sourceDataPointListIn === undefined) ? new OutSystemsChartsModel.RL_52a96e0500b1d6d23d93e10409e37890() : sourceDataPointListIn;
xAxisTypeIn = (xAxisTypeIn === undefined) ? "" : xAxisTypeIn;
return controller.executeActionInsideJSNode(OutSystemsChartsController.default.legacy_InitChart$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.DataTypes.DataTypes.Text), sourceDataPointListIn, OS.DataConversion.JSNodeParamConverter.from(xAxisTypeIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsCharts.controller$Legacy_InitChart.InitChartJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.ChartAPI.Chart.Initialize(
    $parameters.UniqueId, 
    $parameters.SourceDataPointList,
    $parameters.xAxisType
);
};
});


define("OutSystemsCharts.controller$LoadModules", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.controller", "OutSystemsCharts.controller$LoadModules.ForceReloadJS"], function (exports, OSRuntimeCore, OutSystemsChartsModel, OutSystemsChartsController, OutSystemsCharts_controller_LoadModules_ForceReloadJS) {
var OS = OSRuntimeCore;
OutSystemsChartsController.default.loadModules$Action = function (callContext) {
return OS.Logger.startActiveSpan("LoadModules", function (span) {
if(span) {
span.setAttribute("code.function", "LoadModules");
span.setAttribute("outsystems.function.key", "e5c75320-b377-4c0e-8b68-0b1c293b0c6d");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

return OS.Flow.tryFinally(function () {
callContext = controller.callContext(callContext);
var forceReloadJSResult = new OS.DataTypes.VariableHolder();
var deserializeErrorsVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(OS.DataTypes.TextList))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.LoadModules$outVars"))());
return OS.Flow.executeAsyncFlow(function () {
return OS.Logger.startActiveSpan("ForceReload", function (span) {
if(span) {
span.setAttribute("code.function", "ForceReload");
span.setAttribute("outsystems.function.key", "aea50b7c-052c-4bdf-a4ea-7ea2eb2485be");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteAsyncJSNode(OutSystemsCharts_controller_LoadModules_ForceReloadJS, "ForceReload", "LoadModules", {
Success: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
DidSomething: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorMessageList: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsCharts.LoadModules$forceReloadJSResult"))();
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.didSomethingOut = OS.DataConversion.JSNodeParamConverter.from($parameters.DidSomething, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorMessageListOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessageList, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {
RequireScript: OS.SystemActions.requireScript
}, {});
} finally {
if(span) {
span.end();
}

}

}, 1).then(function (results) {
forceReloadJSResult.value = results;
}).then(function () {
if((forceReloadJSResult.value.successOut)) {
// Success = true
// Success = True
outVars.value.successOut = true;
// ↘
} else {
// JSON Deserialize: DeserializeErrors
deserializeErrorsVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(forceReloadJSResult.value.errorMessageListOut, OS.DataTypes.TextList, false);
// Set ErrorMessage list
// ErrorMessage = DeserializeErrors.Data
outVars.value.errorMessageOut = deserializeErrorsVar.value.dataOut;
}

// Set DidSomething
// DidSomething = ForceReload.DidSomething
outVars.value.didSomethingOut = forceReloadJSResult.value.didSomethingOut;
});
}).then(function () {
return outVars.value;
});
}, function () {
if(span) {
span.end();
}

});
}, 1);
};
var controller = OutSystemsChartsController.default;
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.LoadModules$forceReloadJSResult", [{
name: "Success",
attrName: "successOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "DidSomething",
attrName: "didSomethingOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessageList",
attrName: "errorMessageListOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.LoadModules$outVars", [{
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "DidSomething",
attrName: "didSomethingOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new OS.DataTypes.TextList();
},
complexType: OS.DataTypes.TextList
}]);
OutSystemsChartsController.default.clientActionProxies.loadModules$Action = function () {
return controller.executeActionInsideJSNode(OutSystemsChartsController.default.loadModules$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
DidSomething: OS.DataConversion.JSNodeParamConverter.to(actionResults.didSomethingOut, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: actionResults.errorMessageOut
};
});
};
});

define("OutSystemsCharts.controller$LoadModules.ForceReloadJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
OutSystems.ChartAPI.Advanced.Provider.HighCharts.Module.Load($actions.RequireScript).then((didSomething)=>{
    $parameters.Success = true; 
    $parameters.DidSomething = didSomething;
}).catch((error) => {
    $parameters.Success = false;
    $parameters.ErrorMessageList = error;
}).finally(()=>{
    $resolve();
});
});
};
});


define("OutSystemsCharts.controller$RemoveChart", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.controller", "OutSystemsCharts.controller$RemoveChart.RemoveChartJS"], function (exports, OSRuntimeCore, OutSystemsChartsModel, OutSystemsChartsController, OutSystemsCharts_controller_RemoveChart_RemoveChartJS) {
var OS = OSRuntimeCore;
OutSystemsChartsController.default.removeChart$Action = function (chartWidgetIdIn, callContext) {
return OS.Logger.startActiveSpan("RemoveChart", function (span) {
if(span) {
span.setAttribute("code.function", "RemoveChart");
span.setAttribute("outsystems.function.key", "982d075b-6b5c-46ea-9f66-ea6fce586471");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.RemoveChart$vars"))());
vars.value.chartWidgetIdInLocal = chartWidgetIdIn;
OS.Logger.startActiveSpan("RemoveChart", function (span) {
if(span) {
span.setAttribute("code.function", "RemoveChart");
span.setAttribute("outsystems.function.key", "7f85fb14-764d-4f4a-8aab-decaf8652670");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsCharts_controller_RemoveChart_RemoveChartJS, "RemoveChart", "RemoveChart", {
ChartWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.chartWidgetIdInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsChartsController.default;
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.RemoveChart$vars", [{
name: "ChartWidgetId",
attrName: "chartWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsChartsController.default.clientActionProxies.removeChart$Action = function (chartWidgetIdIn) {
chartWidgetIdIn = (chartWidgetIdIn === undefined) ? "" : chartWidgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsChartsController.default.removeChart$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(chartWidgetIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsCharts.controller$RemoveChart.RemoveChartJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.ChartAPI.Chart.Dispose($parameters.ChartWidgetId)
};
});


define("OutSystemsCharts.controller$SeriesEventSubscribe", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.controller", "OutSystemsCharts.controller$SeriesEventSubscribe.SeriesEventRegisterJS"], function (exports, OSRuntimeCore, OutSystemsChartsModel, OutSystemsChartsController, OutSystemsCharts_controller_SeriesEventSubscribe_SeriesEventRegisterJS) {
var OS = OSRuntimeCore;
OutSystemsChartsController.default.seriesEventSubscribe$Action = function (chartWidgetIdIn, seriesEventIdIn, callbackIn, callContext) {
return OS.Logger.startActiveSpan("SeriesEventSubscribe", function (span) {
if(span) {
span.setAttribute("code.function", "SeriesEventSubscribe");
span.setAttribute("outsystems.function.key", "dbb48f80-34a7-41a2-ad68-4845c4c1360c");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.SeriesEventSubscribe$vars"))());
vars.value.chartWidgetIdInLocal = chartWidgetIdIn;
vars.value.seriesEventIdInLocal = seriesEventIdIn;
vars.value.callbackInLocal = callbackIn;
OS.Logger.startActiveSpan("SeriesEventRegister", function (span) {
if(span) {
span.setAttribute("code.function", "SeriesEventRegister");
span.setAttribute("outsystems.function.key", "c3580376-bbe3-48ff-ae47-e1a40d8b9499");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsCharts_controller_SeriesEventSubscribe_SeriesEventRegisterJS, "SeriesEventRegister", "SeriesEventSubscribe", {
SeriesEventId: OS.DataConversion.JSNodeParamConverter.to(vars.value.seriesEventIdInLocal, OS.DataTypes.DataTypes.Text),
Callback: OS.DataConversion.JSNodeParamConverter.to(vars.value.callbackInLocal, OS.DataTypes.DataTypes.Object),
ChartWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.chartWidgetIdInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsChartsController.default;
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.SeriesEventSubscribe$vars", [{
name: "ChartWidgetId",
attrName: "chartWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "SeriesEventId",
attrName: "seriesEventIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Callback",
attrName: "callbackInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
OutSystemsChartsController.default.clientActionProxies.seriesEventSubscribe$Action = function (chartWidgetIdIn, seriesEventIdIn, callbackIn) {
chartWidgetIdIn = (chartWidgetIdIn === undefined) ? "" : chartWidgetIdIn;
seriesEventIdIn = (seriesEventIdIn === undefined) ? "" : seriesEventIdIn;
callbackIn = (callbackIn === undefined) ? null : callbackIn;
return controller.executeActionInsideJSNode(OutSystemsChartsController.default.seriesEventSubscribe$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(chartWidgetIdIn, OS.DataTypes.DataTypes.Text), seriesEventIdIn, OS.DataConversion.JSNodeParamConverter.from(callbackIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsCharts.controller$SeriesEventSubscribe.SeriesEventRegisterJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.ChartAPI.Chart.SubscribeEvent(
    $parameters.ChartWidgetId,
    $parameters.SeriesEventId,
    $parameters.Callback
);
};
});


define("OutSystemsCharts.controller$SeriesEventUnsubscribe", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.controller", "OutSystemsCharts.controller$SeriesEventUnsubscribe.SeriesEventUnregisterJS"], function (exports, OSRuntimeCore, OutSystemsChartsModel, OutSystemsChartsController, OutSystemsCharts_controller_SeriesEventUnsubscribe_SeriesEventUnregisterJS) {
var OS = OSRuntimeCore;
OutSystemsChartsController.default.seriesEventUnsubscribe$Action = function (chartWidgetIdIn, seriesEventIdIn, callbackIn, callContext) {
return OS.Logger.startActiveSpan("SeriesEventUnsubscribe", function (span) {
if(span) {
span.setAttribute("code.function", "SeriesEventUnsubscribe");
span.setAttribute("outsystems.function.key", "b33b0b04-728a-4174-8573-d76386436f82");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.SeriesEventUnsubscribe$vars"))());
vars.value.chartWidgetIdInLocal = chartWidgetIdIn;
vars.value.seriesEventIdInLocal = seriesEventIdIn;
vars.value.callbackInLocal = callbackIn;
OS.Logger.startActiveSpan("SeriesEventUnregister", function (span) {
if(span) {
span.setAttribute("code.function", "SeriesEventUnregister");
span.setAttribute("outsystems.function.key", "9fc7873b-26a2-4898-bd29-ba562213b1b0");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsCharts_controller_SeriesEventUnsubscribe_SeriesEventUnregisterJS, "SeriesEventUnregister", "SeriesEventUnsubscribe", {
ChartWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.chartWidgetIdInLocal, OS.DataTypes.DataTypes.Text),
Callback: OS.DataConversion.JSNodeParamConverter.to(vars.value.callbackInLocal, OS.DataTypes.DataTypes.Object),
SeriesEventId: OS.DataConversion.JSNodeParamConverter.to(vars.value.seriesEventIdInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsChartsController.default;
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.SeriesEventUnsubscribe$vars", [{
name: "ChartWidgetId",
attrName: "chartWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "SeriesEventId",
attrName: "seriesEventIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Callback",
attrName: "callbackInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
OutSystemsChartsController.default.clientActionProxies.seriesEventUnsubscribe$Action = function (chartWidgetIdIn, seriesEventIdIn, callbackIn) {
chartWidgetIdIn = (chartWidgetIdIn === undefined) ? "" : chartWidgetIdIn;
seriesEventIdIn = (seriesEventIdIn === undefined) ? "" : seriesEventIdIn;
callbackIn = (callbackIn === undefined) ? null : callbackIn;
return controller.executeActionInsideJSNode(OutSystemsChartsController.default.seriesEventUnsubscribe$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(chartWidgetIdIn, OS.DataTypes.DataTypes.Text), seriesEventIdIn, OS.DataConversion.JSNodeParamConverter.from(callbackIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsCharts.controller$SeriesEventUnsubscribe.SeriesEventUnregisterJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.ChartAPI.Chart.UnsubscribeEvent(
    $parameters.ChartWidgetId,
    $parameters.SeriesEventId,
    $parameters.Callback
);
};
});


define("OutSystemsCharts.controller$SetHighchartsChartConfigs", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.controller", "OutSystemsCharts.controller$SetHighchartsChartConfigs.SetHighchartsChartConfigsJS", "OutSystemsCharts.model$ST_7eaeb3ff8676da7994fdf13c6a5a2bffStructure", "OutSystemsCharts.model$RL_2486f6833a6be16aa4e796d4596cbf53", "OutSystemsCharts.model$ST_50c794173b7ac3485b1cda7be99f6b43Structure", "OutSystemsCharts.model$ST_7c45885429f626cd0775ccbea11ace15Structure"], function (exports, OSRuntimeCore, OutSystemsChartsModel, OutSystemsChartsController, OutSystemsCharts_controller_SetHighchartsChartConfigs_SetHighchartsChartConfigsJS) {
var OS = OSRuntimeCore;
OutSystemsChartsController.default.setHighchartsChartConfigs$Action = function (widgetIdIn, propertyValueListIn, callContext) {
return OS.Logger.startActiveSpan("SetHighchartsChartConfigs", function (span) {
if(span) {
span.setAttribute("code.function", "SetHighchartsChartConfigs");
span.setAttribute("outsystems.function.key", "ddfae0bc-9515-4663-ba71-8330c339b83a");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.SetHighchartsChartConfigs$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
vars.value.propertyValueListInLocal = propertyValueListIn.clone();
var setHighchartsChartConfigsJSResult = new OS.DataTypes.VariableHolder();
var jSONSerializeVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var jSONDeserializeErrorMessageVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(OutSystemsChartsModel.ST_7c45885429f626cd0775ccbea11ace15Structure))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.SetHighchartsChartConfigs$outVars"))());
// JSON Serialize: JSONSerialize
jSONSerializeVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.propertyValueListInLocal, false, false);
setHighchartsChartConfigsJSResult.value = OS.Logger.startActiveSpan("SetHighchartsChartConfigs", function (span) {
if(span) {
span.setAttribute("code.function", "SetHighchartsChartConfigs");
span.setAttribute("outsystems.function.key", "f6a2c3a8-d217-46c2-803a-6584d05f9ecb");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsCharts_controller_SetHighchartsChartConfigs_SetHighchartsChartConfigsJS, "SetHighchartsChartConfigs", "SetHighchartsChartConfigs", {
chartId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.DataTypes.DataTypes.Text),
configs: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
ResponseJSON: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsCharts.SetHighchartsChartConfigs$setHighchartsChartConfigsJSResult"))();
jsNodeResult.responseJSONOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ResponseJSON, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// JSON Deserialize: JSONDeserializeErrorMessage
jSONDeserializeErrorMessageVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(setHighchartsChartConfigsJSResult.value.responseJSONOut, OutSystemsChartsModel.ST_7c45885429f626cd0775ccbea11ace15Structure, false);
// Success = JSONDeserializeErrorMessage.Data.IsSuccess
outVars.value.successOut = jSONDeserializeErrorMessageVar.value.dataOut.isSuccessAttr;
// ErrorMessage.Code = JSONDeserializeErrorMessage.Data.Code
outVars.value.errorMessageOut.codeAttr = jSONDeserializeErrorMessageVar.value.dataOut.codeAttr;
// ErrorMessage.Message = JSONDeserializeErrorMessage.Data.Message
outVars.value.errorMessageOut.messageAttr = jSONDeserializeErrorMessageVar.value.dataOut.messageAttr;
return outVars.value;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsChartsController.default;
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.SetHighchartsChartConfigs$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValueList",
attrName: "propertyValueListInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new OutSystemsChartsModel.RL_2486f6833a6be16aa4e796d4596cbf53();
},
complexType: OutSystemsChartsModel.RL_2486f6833a6be16aa4e796d4596cbf53
}]);
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.SetHighchartsChartConfigs$setHighchartsChartConfigsJSResult", [{
name: "ResponseJSON",
attrName: "responseJSONOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.SetHighchartsChartConfigs$outVars", [{
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new OutSystemsChartsModel.ST_50c794173b7ac3485b1cda7be99f6b43Structure();
},
complexType: OutSystemsChartsModel.ST_50c794173b7ac3485b1cda7be99f6b43Structure
}]);
OutSystemsChartsController.default.clientActionProxies.setHighchartsChartConfigs$Action = function (widgetIdIn, propertyValueListIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
propertyValueListIn = (propertyValueListIn === undefined) ? new OutSystemsChartsModel.RL_2486f6833a6be16aa4e796d4596cbf53() : propertyValueListIn;
return controller.executeActionInsideJSNode(OutSystemsChartsController.default.setHighchartsChartConfigs$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.DataTypes.DataTypes.Text), propertyValueListIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: actionResults.errorMessageOut
};
});
};
});

define("OutSystemsCharts.controller$SetHighchartsChartConfigs.SetHighchartsChartConfigsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.ResponseJSON = OutSystems.ChartAPI.Chart.SetProviderConfigs(
    $parameters.chartId,
    $parameters.configs
);
};
});


define("OutSystemsCharts.controller$SetHighchartsSeriesConfigs", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.controller", "OutSystemsCharts.controller$SetHighchartsSeriesConfigs.SetHighchartsSeriesConfigsJS", "OutSystemsCharts.model$ST_7eaeb3ff8676da7994fdf13c6a5a2bffStructure", "OutSystemsCharts.model$RL_2486f6833a6be16aa4e796d4596cbf53", "OutSystemsCharts.model$ST_50c794173b7ac3485b1cda7be99f6b43Structure", "OutSystemsCharts.model$ST_7c45885429f626cd0775ccbea11ace15Structure"], function (exports, OSRuntimeCore, OutSystemsChartsModel, OutSystemsChartsController, OutSystemsCharts_controller_SetHighchartsSeriesConfigs_SetHighchartsSeriesConfigsJS) {
var OS = OSRuntimeCore;
OutSystemsChartsController.default.setHighchartsSeriesConfigs$Action = function (widgetIdIn, serieNameIn, propertyValueListIn, callContext) {
return OS.Logger.startActiveSpan("SetHighchartsSeriesConfigs", function (span) {
if(span) {
span.setAttribute("code.function", "SetHighchartsSeriesConfigs");
span.setAttribute("outsystems.function.key", "a00472c2-0185-4679-a475-4a29ad0f2046");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.SetHighchartsSeriesConfigs$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
vars.value.serieNameInLocal = serieNameIn;
vars.value.propertyValueListInLocal = propertyValueListIn.clone();
var setHighchartsSeriesConfigsJSResult = new OS.DataTypes.VariableHolder();
var jSONSerializeVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var jSONDeserializeErrorMessageVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(OutSystemsChartsModel.ST_7c45885429f626cd0775ccbea11ace15Structure))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.SetHighchartsSeriesConfigs$outVars"))());
// JSON Serialize: JSONSerialize
jSONSerializeVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.propertyValueListInLocal, false, false);
setHighchartsSeriesConfigsJSResult.value = OS.Logger.startActiveSpan("SetHighchartsSeriesConfigs", function (span) {
if(span) {
span.setAttribute("code.function", "SetHighchartsSeriesConfigs");
span.setAttribute("outsystems.function.key", "f27f23bd-9c0d-4c61-8ccc-8f5ae8d85bbc");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsCharts_controller_SetHighchartsSeriesConfigs_SetHighchartsSeriesConfigsJS, "SetHighchartsSeriesConfigs", "SetHighchartsSeriesConfigs", {
serieName: OS.DataConversion.JSNodeParamConverter.to(vars.value.serieNameInLocal, OS.DataTypes.DataTypes.Text),
configs: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
chartId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.DataTypes.DataTypes.Text),
ResponseJSON: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsCharts.SetHighchartsSeriesConfigs$setHighchartsSeriesConfigsJSResult"))();
jsNodeResult.responseJSONOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ResponseJSON, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// JSON Deserialize: JSONDeserializeErrorMessage
jSONDeserializeErrorMessageVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(setHighchartsSeriesConfigsJSResult.value.responseJSONOut, OutSystemsChartsModel.ST_7c45885429f626cd0775ccbea11ace15Structure, false);
// Success = JSONDeserializeErrorMessage.Data.IsSuccess
outVars.value.successOut = jSONDeserializeErrorMessageVar.value.dataOut.isSuccessAttr;
// ErrorMessage.Code = JSONDeserializeErrorMessage.Data.Code
outVars.value.errorMessageOut.codeAttr = jSONDeserializeErrorMessageVar.value.dataOut.codeAttr;
// ErrorMessage.Message = JSONDeserializeErrorMessage.Data.Message
outVars.value.errorMessageOut.messageAttr = jSONDeserializeErrorMessageVar.value.dataOut.messageAttr;
return outVars.value;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsChartsController.default;
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.SetHighchartsSeriesConfigs$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "SerieName",
attrName: "serieNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValueList",
attrName: "propertyValueListInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new OutSystemsChartsModel.RL_2486f6833a6be16aa4e796d4596cbf53();
},
complexType: OutSystemsChartsModel.RL_2486f6833a6be16aa4e796d4596cbf53
}]);
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.SetHighchartsSeriesConfigs$setHighchartsSeriesConfigsJSResult", [{
name: "ResponseJSON",
attrName: "responseJSONOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.SetHighchartsSeriesConfigs$outVars", [{
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new OutSystemsChartsModel.ST_50c794173b7ac3485b1cda7be99f6b43Structure();
},
complexType: OutSystemsChartsModel.ST_50c794173b7ac3485b1cda7be99f6b43Structure
}]);
OutSystemsChartsController.default.clientActionProxies.setHighchartsSeriesConfigs$Action = function (widgetIdIn, serieNameIn, propertyValueListIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
serieNameIn = (serieNameIn === undefined) ? "" : serieNameIn;
propertyValueListIn = (propertyValueListIn === undefined) ? new OutSystemsChartsModel.RL_2486f6833a6be16aa4e796d4596cbf53() : propertyValueListIn;
return controller.executeActionInsideJSNode(OutSystemsChartsController.default.setHighchartsSeriesConfigs$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(serieNameIn, OS.DataTypes.DataTypes.Text), propertyValueListIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: actionResults.errorMessageOut
};
});
};
});

define("OutSystemsCharts.controller$SetHighchartsSeriesConfigs.SetHighchartsSeriesConfigsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.ResponseJSON = OutSystems.ChartAPI.Chart.SetProviderSeriesConfigs(
    $parameters.chartId,
    $parameters.serieName,
    $parameters.configs
);
};
});


define("OutSystemsCharts.controller$SetHighchartsXAxisConfigs", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.controller", "OutSystemsCharts.controller$SetHighchartsXAxisConfigs.SetHighchartsAxisConfigsJS", "OutSystemsCharts.model$ST_7eaeb3ff8676da7994fdf13c6a5a2bffStructure", "OutSystemsCharts.model$RL_2486f6833a6be16aa4e796d4596cbf53", "OutSystemsCharts.model$ST_50c794173b7ac3485b1cda7be99f6b43Structure", "OutSystemsCharts.model$ST_7c45885429f626cd0775ccbea11ace15Structure"], function (exports, OSRuntimeCore, OutSystemsChartsModel, OutSystemsChartsController, OutSystemsCharts_controller_SetHighchartsXAxisConfigs_SetHighchartsAxisConfigsJS) {
var OS = OSRuntimeCore;
OutSystemsChartsController.default.setHighchartsXAxisConfigs$Action = function (widgetIdIn, propertyValueListIn, callContext) {
return OS.Logger.startActiveSpan("SetHighchartsXAxisConfigs", function (span) {
if(span) {
span.setAttribute("code.function", "SetHighchartsXAxisConfigs");
span.setAttribute("outsystems.function.key", "c3ab455d-280e-48e3-a4cd-2c00c3b7cfb8");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.SetHighchartsXAxisConfigs$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
vars.value.propertyValueListInLocal = propertyValueListIn.clone();
var setHighchartsAxisConfigsJSResult = new OS.DataTypes.VariableHolder();
var jSONSerializeVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var jSONDeserializeErrorMessageVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(OutSystemsChartsModel.ST_7c45885429f626cd0775ccbea11ace15Structure))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.SetHighchartsXAxisConfigs$outVars"))());
// JSON Serialize: JSONSerialize
jSONSerializeVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.propertyValueListInLocal, false, false);
setHighchartsAxisConfigsJSResult.value = OS.Logger.startActiveSpan("SetHighchartsAxisConfigs", function (span) {
if(span) {
span.setAttribute("code.function", "SetHighchartsAxisConfigs");
span.setAttribute("outsystems.function.key", "14392276-9af0-4af5-8927-9e802a53da25");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsCharts_controller_SetHighchartsXAxisConfigs_SetHighchartsAxisConfigsJS, "SetHighchartsAxisConfigs", "SetHighchartsXAxisConfigs", {
uniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.DataTypes.DataTypes.Text),
configs: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
ResponseJSON: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsCharts.SetHighchartsXAxisConfigs$setHighchartsAxisConfigsJSResult"))();
jsNodeResult.responseJSONOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ResponseJSON, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// JSON Deserialize: JSONDeserializeErrorMessage
jSONDeserializeErrorMessageVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(setHighchartsAxisConfigsJSResult.value.responseJSONOut, OutSystemsChartsModel.ST_7c45885429f626cd0775ccbea11ace15Structure, false);
// Success = JSONDeserializeErrorMessage.Data.IsSuccess
outVars.value.successOut = jSONDeserializeErrorMessageVar.value.dataOut.isSuccessAttr;
// ErrorMessage.Code = JSONDeserializeErrorMessage.Data.Code
outVars.value.errorMessageOut.codeAttr = jSONDeserializeErrorMessageVar.value.dataOut.codeAttr;
// ErrorMessage.Message = JSONDeserializeErrorMessage.Data.Message
outVars.value.errorMessageOut.messageAttr = jSONDeserializeErrorMessageVar.value.dataOut.messageAttr;
return outVars.value;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsChartsController.default;
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.SetHighchartsXAxisConfigs$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValueList",
attrName: "propertyValueListInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new OutSystemsChartsModel.RL_2486f6833a6be16aa4e796d4596cbf53();
},
complexType: OutSystemsChartsModel.RL_2486f6833a6be16aa4e796d4596cbf53
}]);
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.SetHighchartsXAxisConfigs$setHighchartsAxisConfigsJSResult", [{
name: "ResponseJSON",
attrName: "responseJSONOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.SetHighchartsXAxisConfigs$outVars", [{
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new OutSystemsChartsModel.ST_50c794173b7ac3485b1cda7be99f6b43Structure();
},
complexType: OutSystemsChartsModel.ST_50c794173b7ac3485b1cda7be99f6b43Structure
}]);
OutSystemsChartsController.default.clientActionProxies.setHighchartsXAxisConfigs$Action = function (widgetIdIn, propertyValueListIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
propertyValueListIn = (propertyValueListIn === undefined) ? new OutSystemsChartsModel.RL_2486f6833a6be16aa4e796d4596cbf53() : propertyValueListIn;
return controller.executeActionInsideJSNode(OutSystemsChartsController.default.setHighchartsXAxisConfigs$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.DataTypes.DataTypes.Text), propertyValueListIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: actionResults.errorMessageOut
};
});
};
});

define("OutSystemsCharts.controller$SetHighchartsXAxisConfigs.SetHighchartsAxisConfigsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.ResponseJSON = OutSystems.ChartAPI.AddOn.Axis.SetProviderConfigs(
    $parameters.uniqueId,
    $parameters.configs
);
};
});


define("OutSystemsCharts.controller$SetHighchartsYAxisConfigs", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.controller", "OutSystemsCharts.controller$SetHighchartsYAxisConfigs.SetHighchartsAxisConfigsJS", "OutSystemsCharts.model$ST_7eaeb3ff8676da7994fdf13c6a5a2bffStructure", "OutSystemsCharts.model$RL_2486f6833a6be16aa4e796d4596cbf53", "OutSystemsCharts.model$ST_50c794173b7ac3485b1cda7be99f6b43Structure", "OutSystemsCharts.model$ST_7c45885429f626cd0775ccbea11ace15Structure"], function (exports, OSRuntimeCore, OutSystemsChartsModel, OutSystemsChartsController, OutSystemsCharts_controller_SetHighchartsYAxisConfigs_SetHighchartsAxisConfigsJS) {
var OS = OSRuntimeCore;
OutSystemsChartsController.default.setHighchartsYAxisConfigs$Action = function (widgetIdIn, propertyValueListIn, callContext) {
return OS.Logger.startActiveSpan("SetHighchartsYAxisConfigs", function (span) {
if(span) {
span.setAttribute("code.function", "SetHighchartsYAxisConfigs");
span.setAttribute("outsystems.function.key", "dcf07d1c-cab4-4155-9314-1047335ae45c");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.SetHighchartsYAxisConfigs$vars"))());
vars.value.widgetIdInLocal = widgetIdIn;
vars.value.propertyValueListInLocal = propertyValueListIn.clone();
var setHighchartsAxisConfigsJSResult = new OS.DataTypes.VariableHolder();
var jSONSerializeVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var jSONDeserializeErrorMessageVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(OutSystemsChartsModel.ST_7c45885429f626cd0775ccbea11ace15Structure))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.SetHighchartsYAxisConfigs$outVars"))());
// JSON Serialize: JSONSerialize
jSONSerializeVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.propertyValueListInLocal, false, false);
setHighchartsAxisConfigsJSResult.value = OS.Logger.startActiveSpan("SetHighchartsAxisConfigs", function (span) {
if(span) {
span.setAttribute("code.function", "SetHighchartsAxisConfigs");
span.setAttribute("outsystems.function.key", "a42bd196-826f-4972-9bbf-9274dc6007ba");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsCharts_controller_SetHighchartsYAxisConfigs_SetHighchartsAxisConfigsJS, "SetHighchartsAxisConfigs", "SetHighchartsYAxisConfigs", {
uniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.widgetIdInLocal, OS.DataTypes.DataTypes.Text),
configs: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
ResponseJSON: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsCharts.SetHighchartsYAxisConfigs$setHighchartsAxisConfigsJSResult"))();
jsNodeResult.responseJSONOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ResponseJSON, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// JSON Deserialize: JSONDeserializeErrorMessage
jSONDeserializeErrorMessageVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(setHighchartsAxisConfigsJSResult.value.responseJSONOut, OutSystemsChartsModel.ST_7c45885429f626cd0775ccbea11ace15Structure, false);
// Success = JSONDeserializeErrorMessage.Data.IsSuccess
outVars.value.successOut = jSONDeserializeErrorMessageVar.value.dataOut.isSuccessAttr;
// ErrorMessage.Code = JSONDeserializeErrorMessage.Data.Code
outVars.value.errorMessageOut.codeAttr = jSONDeserializeErrorMessageVar.value.dataOut.codeAttr;
// ErrorMessage.Message = JSONDeserializeErrorMessage.Data.Message
outVars.value.errorMessageOut.messageAttr = jSONDeserializeErrorMessageVar.value.dataOut.messageAttr;
return outVars.value;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsChartsController.default;
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.SetHighchartsYAxisConfigs$vars", [{
name: "WidgetId",
attrName: "widgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyValueList",
attrName: "propertyValueListInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new OutSystemsChartsModel.RL_2486f6833a6be16aa4e796d4596cbf53();
},
complexType: OutSystemsChartsModel.RL_2486f6833a6be16aa4e796d4596cbf53
}]);
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.SetHighchartsYAxisConfigs$setHighchartsAxisConfigsJSResult", [{
name: "ResponseJSON",
attrName: "responseJSONOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.SetHighchartsYAxisConfigs$outVars", [{
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new OutSystemsChartsModel.ST_50c794173b7ac3485b1cda7be99f6b43Structure();
},
complexType: OutSystemsChartsModel.ST_50c794173b7ac3485b1cda7be99f6b43Structure
}]);
OutSystemsChartsController.default.clientActionProxies.setHighchartsYAxisConfigs$Action = function (widgetIdIn, propertyValueListIn) {
widgetIdIn = (widgetIdIn === undefined) ? "" : widgetIdIn;
propertyValueListIn = (propertyValueListIn === undefined) ? new OutSystemsChartsModel.RL_2486f6833a6be16aa4e796d4596cbf53() : propertyValueListIn;
return controller.executeActionInsideJSNode(OutSystemsChartsController.default.setHighchartsYAxisConfigs$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(widgetIdIn, OS.DataTypes.DataTypes.Text), propertyValueListIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: actionResults.errorMessageOut
};
});
};
});

define("OutSystemsCharts.controller$SetHighchartsYAxisConfigs.SetHighchartsAxisConfigsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.ResponseJSON = OutSystems.ChartAPI.AddOn.Axis.SetProviderConfigs(
    $parameters.uniqueId,
    $parameters.configs
);
};
});


define("OutSystemsCharts.controller$SetServerDateFormat", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.controller", "OutSystemsCharts.controller$SetServerDateFormat.SetServerDateFormatJS"], function (exports, OSRuntimeCore, OutSystemsChartsModel, OutSystemsChartsController, OutSystemsCharts_controller_SetServerDateFormat_SetServerDateFormatJS) {
var OS = OSRuntimeCore;
OutSystemsChartsController.default.setServerDateFormat$Action = function (callContext) {
return OS.Logger.startActiveSpan("SetServerDateFormat", function (span) {
if(span) {
span.setAttribute("code.function", "SetServerDateFormat");
span.setAttribute("outsystems.function.key", "a5568222-d885-42f6-93b5-707a9cf3637c");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
// Trigger the API method that will set the ServerDate format.
OS.Logger.startActiveSpan("SetServerDateFormat", function (span) {
if(span) {
span.setAttribute("code.function", "SetServerDateFormat");
span.setAttribute("outsystems.function.key", "2e6c7659-c286-4895-8b48-29b6ef6b0fe3");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsCharts_controller_SetServerDateFormat_SetServerDateFormatJS, "SetServerDateFormat", "SetServerDateFormat", {
SampleDate: OS.DataConversion.JSNodeParamConverter.to(OS.BuiltinFunctions.dateToText(OS.BuiltinFunctions.newDate(1900, 10, 13)), OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsChartsController.default;
OutSystemsChartsController.default.clientActionProxies.setServerDateFormat$Action = function () {
return controller.executeActionInsideJSNode(OutSystemsChartsController.default.setServerDateFormat$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsCharts.controller$SetServerDateFormat.SetServerDateFormatJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.ChartAPI.Chart.SetServerDateFormat($parameters.SampleDate);
};
});


define("OutSystemsCharts.controller$UpdateAxisConfigs", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.controller", "OutSystemsCharts.controller$UpdateAxisConfigs.UpdateConfigsJS", "OutSystemsCharts.model$ST_50c794173b7ac3485b1cda7be99f6b43Structure", "OutSystemsCharts.model$ST_7c45885429f626cd0775ccbea11ace15Structure"], function (exports, OSRuntimeCore, OutSystemsChartsModel, OutSystemsChartsController, OutSystemsCharts_controller_UpdateAxisConfigs_UpdateConfigsJS) {
var OS = OSRuntimeCore;
OutSystemsChartsController.default.updateAxisConfigs$Action = function (uniqueIdIn, configsIn, callContext) {
return OS.Logger.startActiveSpan("UpdateAxisConfigs", function (span) {
if(span) {
span.setAttribute("code.function", "UpdateAxisConfigs");
span.setAttribute("outsystems.function.key", "15d52705-4c0d-4d18-a090-2113cb4f0754");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.UpdateAxisConfigs$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.configsInLocal = configsIn;
var updateConfigsJSResult = new OS.DataTypes.VariableHolder();
var jSONDeserializeErrorMessageVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(OutSystemsChartsModel.ST_7c45885429f626cd0775ccbea11ace15Structure))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.UpdateAxisConfigs$outVars"))());
updateConfigsJSResult.value = OS.Logger.startActiveSpan("UpdateConfigs", function (span) {
if(span) {
span.setAttribute("code.function", "UpdateConfigs");
span.setAttribute("outsystems.function.key", "895fd238-f652-4863-b0d6-983d9820ede5");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsCharts_controller_UpdateAxisConfigs_UpdateConfigsJS, "UpdateConfigs", "UpdateAxisConfigs", {
uniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.DataTypes.DataTypes.Text),
configs: OS.DataConversion.JSNodeParamConverter.to(vars.value.configsInLocal, OS.DataTypes.DataTypes.Text),
ResponseJSON: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsCharts.UpdateAxisConfigs$updateConfigsJSResult"))();
jsNodeResult.responseJSONOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ResponseJSON, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// JSON Deserialize: JSONDeserializeErrorMessage
jSONDeserializeErrorMessageVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(updateConfigsJSResult.value.responseJSONOut, OutSystemsChartsModel.ST_7c45885429f626cd0775ccbea11ace15Structure, false);
// Success = JSONDeserializeErrorMessage.Data.IsSuccess
outVars.value.successOut = jSONDeserializeErrorMessageVar.value.dataOut.isSuccessAttr;
// ErrorMessage.Code = JSONDeserializeErrorMessage.Data.Code
outVars.value.errorMessageOut.codeAttr = jSONDeserializeErrorMessageVar.value.dataOut.codeAttr;
// ErrorMessage.Message = JSONDeserializeErrorMessage.Data.Message
outVars.value.errorMessageOut.messageAttr = jSONDeserializeErrorMessageVar.value.dataOut.messageAttr;
return outVars.value;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsChartsController.default;
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.UpdateAxisConfigs$vars", [{
name: "uniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "configs",
attrName: "configsInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.UpdateAxisConfigs$updateConfigsJSResult", [{
name: "ResponseJSON",
attrName: "responseJSONOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.UpdateAxisConfigs$outVars", [{
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new OutSystemsChartsModel.ST_50c794173b7ac3485b1cda7be99f6b43Structure();
},
complexType: OutSystemsChartsModel.ST_50c794173b7ac3485b1cda7be99f6b43Structure
}]);
OutSystemsChartsController.default.clientActionProxies.updateAxisConfigs$Action = function (uniqueIdIn, configsIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
configsIn = (configsIn === undefined) ? "" : configsIn;
return controller.executeActionInsideJSNode(OutSystemsChartsController.default.updateAxisConfigs$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(configsIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: actionResults.errorMessageOut
};
});
};
});

define("OutSystemsCharts.controller$UpdateAxisConfigs.UpdateConfigsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.ResponseJSON = OutSystems.ChartAPI.AddOn.Axis.UpdateConfigs(
    $parameters.uniqueId,
    $parameters.configs
)
};
});


define("OutSystemsCharts.controller$UpdateChartColorScheme", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.controller", "OutSystemsCharts.controller$UpdateChartColorScheme.UpdateColorSchemeJS", "OutSystemsCharts.model$ST_50c794173b7ac3485b1cda7be99f6b43Structure", "OutSystemsCharts.model$ST_7c45885429f626cd0775ccbea11ace15Structure"], function (exports, OSRuntimeCore, OutSystemsChartsModel, OutSystemsChartsController, OutSystemsCharts_controller_UpdateChartColorScheme_UpdateColorSchemeJS) {
var OS = OSRuntimeCore;
OutSystemsChartsController.default.updateChartColorScheme$Action = function (chartIdIn, colorSchemeIn, callContext) {
return OS.Logger.startActiveSpan("UpdateChartColorScheme", function (span) {
if(span) {
span.setAttribute("code.function", "UpdateChartColorScheme");
span.setAttribute("outsystems.function.key", "2359f32e-835f-4378-92cc-ee0717383415");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.UpdateChartColorScheme$vars"))());
vars.value.chartIdInLocal = chartIdIn;
vars.value.colorSchemeInLocal = colorSchemeIn.clone();
var updateColorSchemeJSResult = new OS.DataTypes.VariableHolder();
var jSONSerializeColorsSchemeVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var jSONDeserializeErrorMessageVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(OutSystemsChartsModel.ST_7c45885429f626cd0775ccbea11ace15Structure))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.UpdateChartColorScheme$outVars"))());
// JSON Serialize: JSONSerializeColorsScheme
jSONSerializeColorsSchemeVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.colorSchemeInLocal, false, false, OS.DataTypes.DataTypes.Text);
updateColorSchemeJSResult.value = OS.Logger.startActiveSpan("UpdateColorScheme", function (span) {
if(span) {
span.setAttribute("code.function", "UpdateColorScheme");
span.setAttribute("outsystems.function.key", "aa054c7b-9ee4-4155-9eb8-0396a2150543");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsCharts_controller_UpdateChartColorScheme_UpdateColorSchemeJS, "UpdateColorScheme", "UpdateChartColorScheme", {
ColorsScheme: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeColorsSchemeVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
ChartId: OS.DataConversion.JSNodeParamConverter.to(vars.value.chartIdInLocal, OS.DataTypes.DataTypes.Text),
ResponseJSON: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsCharts.UpdateChartColorScheme$updateColorSchemeJSResult"))();
jsNodeResult.responseJSONOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ResponseJSON, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// JSON Deserialize: JSONDeserializeErrorMessage
jSONDeserializeErrorMessageVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(updateColorSchemeJSResult.value.responseJSONOut, OutSystemsChartsModel.ST_7c45885429f626cd0775ccbea11ace15Structure, false);
// Success = JSONDeserializeErrorMessage.Data.IsSuccess
outVars.value.successOut = jSONDeserializeErrorMessageVar.value.dataOut.isSuccessAttr;
// ErrorMessage.Code = JSONDeserializeErrorMessage.Data.Code
outVars.value.errorMessageOut.codeAttr = jSONDeserializeErrorMessageVar.value.dataOut.codeAttr;
// ErrorMessage.Message = JSONDeserializeErrorMessage.Data.Message
outVars.value.errorMessageOut.messageAttr = jSONDeserializeErrorMessageVar.value.dataOut.messageAttr;
return outVars.value;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsChartsController.default;
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.UpdateChartColorScheme$vars", [{
name: "ChartId",
attrName: "chartIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ColorScheme",
attrName: "colorSchemeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new OS.DataTypes.TextList();
},
complexType: OS.DataTypes.TextList
}]);
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.UpdateChartColorScheme$updateColorSchemeJSResult", [{
name: "ResponseJSON",
attrName: "responseJSONOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.UpdateChartColorScheme$outVars", [{
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new OutSystemsChartsModel.ST_50c794173b7ac3485b1cda7be99f6b43Structure();
},
complexType: OutSystemsChartsModel.ST_50c794173b7ac3485b1cda7be99f6b43Structure
}]);
OutSystemsChartsController.default.clientActionProxies.updateChartColorScheme$Action = function (chartIdIn, colorSchemeIn) {
chartIdIn = (chartIdIn === undefined) ? "" : chartIdIn;
colorSchemeIn = (colorSchemeIn === undefined) ? new OS.DataTypes.TextList() : colorSchemeIn;
return controller.executeActionInsideJSNode(OutSystemsChartsController.default.updateChartColorScheme$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(chartIdIn, OS.DataTypes.DataTypes.Text), colorSchemeIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: actionResults.errorMessageOut
};
});
};
});

define("OutSystemsCharts.controller$UpdateChartColorScheme.UpdateColorSchemeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.ResponseJSON = OutSystems.ChartAPI.Chart.UpdateColorScheme(
    $parameters.ChartId,
    $parameters.ColorsScheme
);
};
});


define("OutSystemsCharts.controller$UpdateConfigs", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.controller", "OutSystemsCharts.controller$UpdateConfigs.UpdateConfigsJS"], function (exports, OSRuntimeCore, OutSystemsChartsModel, OutSystemsChartsController, OutSystemsCharts_controller_UpdateConfigs_UpdateConfigsJS) {
var OS = OSRuntimeCore;
OutSystemsChartsController.default.updateConfigs$Action = function (chartIDIn, configsIn, sourceDataPointListIn, callContext) {
return OS.Logger.startActiveSpan("UpdateConfigs", function (span) {
if(span) {
span.setAttribute("code.function", "UpdateConfigs");
span.setAttribute("outsystems.function.key", "5844cc75-717a-4b00-8d04-18583c545269");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.UpdateConfigs$vars"))());
vars.value.chartIDInLocal = chartIDIn;
vars.value.configsInLocal = configsIn;
vars.value.sourceDataPointListInLocal = sourceDataPointListIn;
OS.Logger.startActiveSpan("UpdateConfigs", function (span) {
if(span) {
span.setAttribute("code.function", "UpdateConfigs");
span.setAttribute("outsystems.function.key", "5b7b11fb-ce0b-4ac2-9d21-53f84a682801");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsCharts_controller_UpdateConfigs_UpdateConfigsJS, "UpdateConfigs", "UpdateConfigs", {
configs: OS.DataConversion.JSNodeParamConverter.to(vars.value.configsInLocal, OS.DataTypes.DataTypes.Text),
SourceDataPointList: OS.DataConversion.JSNodeParamConverter.to(vars.value.sourceDataPointListInLocal, OS.DataTypes.DataTypes.Text),
chartID: OS.DataConversion.JSNodeParamConverter.to(vars.value.chartIDInLocal, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsChartsController.default;
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.UpdateConfigs$vars", [{
name: "chartID",
attrName: "chartIDInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "configs",
attrName: "configsInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "SourceDataPointList",
attrName: "sourceDataPointListInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsChartsController.default.clientActionProxies.updateConfigs$Action = function (chartIDIn, configsIn, sourceDataPointListIn) {
chartIDIn = (chartIDIn === undefined) ? "" : chartIDIn;
configsIn = (configsIn === undefined) ? "" : configsIn;
sourceDataPointListIn = (sourceDataPointListIn === undefined) ? "" : sourceDataPointListIn;
return controller.executeActionInsideJSNode(OutSystemsChartsController.default.updateConfigs$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(chartIDIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(configsIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(sourceDataPointListIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsCharts.controller$UpdateConfigs.UpdateConfigsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.ChartAPI.Chart.UpdateConfigs(
    $parameters.chartID,
    $parameters.configs,
    $parameters.SourceDataPointList
)
};
});


define("OutSystemsCharts.controller$UpdateExportConfigs", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.controller", "OutSystemsCharts.controller$UpdateExportConfigs.UpdateConfigsJS", "OutSystemsCharts.model$ST_50c794173b7ac3485b1cda7be99f6b43Structure", "OutSystemsCharts.model$ST_7c45885429f626cd0775ccbea11ace15Structure"], function (exports, OSRuntimeCore, OutSystemsChartsModel, OutSystemsChartsController, OutSystemsCharts_controller_UpdateExportConfigs_UpdateConfigsJS) {
var OS = OSRuntimeCore;
OutSystemsChartsController.default.updateExportConfigs$Action = function (uniqueIdIn, configsIn, callContext) {
return OS.Logger.startActiveSpan("UpdateExportConfigs", function (span) {
if(span) {
span.setAttribute("code.function", "UpdateExportConfigs");
span.setAttribute("outsystems.function.key", "a0560818-b1be-4534-8e06-b142ba3a5875");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.UpdateExportConfigs$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.configsInLocal = configsIn;
var updateConfigsJSResult = new OS.DataTypes.VariableHolder();
var jSONDeserializeErrorMessageVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(OutSystemsChartsModel.ST_7c45885429f626cd0775ccbea11ace15Structure))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.UpdateExportConfigs$outVars"))());
updateConfigsJSResult.value = OS.Logger.startActiveSpan("UpdateConfigs", function (span) {
if(span) {
span.setAttribute("code.function", "UpdateConfigs");
span.setAttribute("outsystems.function.key", "226a13a1-436d-4def-96d8-907d8f4a4813");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsCharts_controller_UpdateExportConfigs_UpdateConfigsJS, "UpdateConfigs", "UpdateExportConfigs", {
configs: OS.DataConversion.JSNodeParamConverter.to(vars.value.configsInLocal, OS.DataTypes.DataTypes.Text),
uniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.DataTypes.DataTypes.Text),
ResponseJSON: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsCharts.UpdateExportConfigs$updateConfigsJSResult"))();
jsNodeResult.responseJSONOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ResponseJSON, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// JSON Deserialize: JSONDeserializeErrorMessage
jSONDeserializeErrorMessageVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(updateConfigsJSResult.value.responseJSONOut, OutSystemsChartsModel.ST_7c45885429f626cd0775ccbea11ace15Structure, false);
// Set output
// Success = JSONDeserializeErrorMessage.Data.IsSuccess
outVars.value.successOut = jSONDeserializeErrorMessageVar.value.dataOut.isSuccessAttr;
// ErrorMessage.Code = JSONDeserializeErrorMessage.Data.Code
outVars.value.errorMessageOut.codeAttr = jSONDeserializeErrorMessageVar.value.dataOut.codeAttr;
// ErrorMessage.Message = JSONDeserializeErrorMessage.Data.Message
outVars.value.errorMessageOut.messageAttr = jSONDeserializeErrorMessageVar.value.dataOut.messageAttr;
return outVars.value;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsChartsController.default;
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.UpdateExportConfigs$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Configs",
attrName: "configsInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.UpdateExportConfigs$updateConfigsJSResult", [{
name: "ResponseJSON",
attrName: "responseJSONOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.UpdateExportConfigs$outVars", [{
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new OutSystemsChartsModel.ST_50c794173b7ac3485b1cda7be99f6b43Structure();
},
complexType: OutSystemsChartsModel.ST_50c794173b7ac3485b1cda7be99f6b43Structure
}]);
OutSystemsChartsController.default.clientActionProxies.updateExportConfigs$Action = function (uniqueIdIn, configsIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
configsIn = (configsIn === undefined) ? "" : configsIn;
return controller.executeActionInsideJSNode(OutSystemsChartsController.default.updateExportConfigs$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(configsIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: actionResults.errorMessageOut
};
});
};
});

define("OutSystemsCharts.controller$UpdateExportConfigs.UpdateConfigsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.ResponseJSON = OutSystems.ChartAPI.AddOn.Export.UpdateConfigs(
    $parameters.uniqueId,
    $parameters.configs
)
};
});


define("OutSystemsCharts.controller$UpdateLegendConfigs", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.controller", "OutSystemsCharts.controller$UpdateLegendConfigs.UpdateConfigsJS", "OutSystemsCharts.model$ST_50c794173b7ac3485b1cda7be99f6b43Structure", "OutSystemsCharts.model$ST_7c45885429f626cd0775ccbea11ace15Structure"], function (exports, OSRuntimeCore, OutSystemsChartsModel, OutSystemsChartsController, OutSystemsCharts_controller_UpdateLegendConfigs_UpdateConfigsJS) {
var OS = OSRuntimeCore;
OutSystemsChartsController.default.updateLegendConfigs$Action = function (uniqueIdIn, configsIn, callContext) {
return OS.Logger.startActiveSpan("UpdateLegendConfigs", function (span) {
if(span) {
span.setAttribute("code.function", "UpdateLegendConfigs");
span.setAttribute("outsystems.function.key", "ef26325c-ccf7-4ad3-86e5-fe90e35af76d");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.UpdateLegendConfigs$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.configsInLocal = configsIn;
var updateConfigsJSResult = new OS.DataTypes.VariableHolder();
var jSONDeserializeErrorMessageVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(OutSystemsChartsModel.ST_7c45885429f626cd0775ccbea11ace15Structure))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.UpdateLegendConfigs$outVars"))());
updateConfigsJSResult.value = OS.Logger.startActiveSpan("UpdateConfigs", function (span) {
if(span) {
span.setAttribute("code.function", "UpdateConfigs");
span.setAttribute("outsystems.function.key", "89d0c173-06ed-4e6c-8444-3e85e1414543");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsCharts_controller_UpdateLegendConfigs_UpdateConfigsJS, "UpdateConfigs", "UpdateLegendConfigs", {
uniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.DataTypes.DataTypes.Text),
configs: OS.DataConversion.JSNodeParamConverter.to(vars.value.configsInLocal, OS.DataTypes.DataTypes.Text),
ResponseJSON: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsCharts.UpdateLegendConfigs$updateConfigsJSResult"))();
jsNodeResult.responseJSONOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ResponseJSON, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// JSON Deserialize: JSONDeserializeErrorMessage
jSONDeserializeErrorMessageVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(updateConfigsJSResult.value.responseJSONOut, OutSystemsChartsModel.ST_7c45885429f626cd0775ccbea11ace15Structure, false);
// Success = JSONDeserializeErrorMessage.Data.IsSuccess
outVars.value.successOut = jSONDeserializeErrorMessageVar.value.dataOut.isSuccessAttr;
// ErrorMessage.Code = JSONDeserializeErrorMessage.Data.Code
outVars.value.errorMessageOut.codeAttr = jSONDeserializeErrorMessageVar.value.dataOut.codeAttr;
// ErrorMessage.Message = JSONDeserializeErrorMessage.Data.Message
outVars.value.errorMessageOut.messageAttr = jSONDeserializeErrorMessageVar.value.dataOut.messageAttr;
return outVars.value;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsChartsController.default;
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.UpdateLegendConfigs$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Configs",
attrName: "configsInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.UpdateLegendConfigs$updateConfigsJSResult", [{
name: "ResponseJSON",
attrName: "responseJSONOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.UpdateLegendConfigs$outVars", [{
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new OutSystemsChartsModel.ST_50c794173b7ac3485b1cda7be99f6b43Structure();
},
complexType: OutSystemsChartsModel.ST_50c794173b7ac3485b1cda7be99f6b43Structure
}]);
OutSystemsChartsController.default.clientActionProxies.updateLegendConfigs$Action = function (uniqueIdIn, configsIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
configsIn = (configsIn === undefined) ? "" : configsIn;
return controller.executeActionInsideJSNode(OutSystemsChartsController.default.updateLegendConfigs$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(configsIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: actionResults.errorMessageOut
};
});
};
});

define("OutSystemsCharts.controller$UpdateLegendConfigs.UpdateConfigsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.ResponseJSON = OutSystems.ChartAPI.AddOn.Legend.UpdateConfigs(
    $parameters.uniqueId,
    $parameters.configs
)
};
});


define("OutSystemsCharts.controller$UpdateSeriesStyling", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.controller", "OutSystemsCharts.controller$UpdateSeriesStyling.UpdateConfigsJS", "OutSystemsCharts.model$ST_50c794173b7ac3485b1cda7be99f6b43Structure", "OutSystemsCharts.model$ST_7c45885429f626cd0775ccbea11ace15Structure"], function (exports, OSRuntimeCore, OutSystemsChartsModel, OutSystemsChartsController, OutSystemsCharts_controller_UpdateSeriesStyling_UpdateConfigsJS) {
var OS = OSRuntimeCore;
OutSystemsChartsController.default.updateSeriesStyling$Action = function (uniqueIdIn, configsIn, callContext) {
return OS.Logger.startActiveSpan("UpdateSeriesStyling", function (span) {
if(span) {
span.setAttribute("code.function", "UpdateSeriesStyling");
span.setAttribute("outsystems.function.key", "bf6b0a57-4067-471d-9845-04fbab5a98f9");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.UpdateSeriesStyling$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.configsInLocal = configsIn;
var updateConfigsJSResult = new OS.DataTypes.VariableHolder();
var jSONDeserializeErrorMessageVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(OutSystemsChartsModel.ST_7c45885429f626cd0775ccbea11ace15Structure))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.UpdateSeriesStyling$outVars"))());
updateConfigsJSResult.value = OS.Logger.startActiveSpan("UpdateConfigs", function (span) {
if(span) {
span.setAttribute("code.function", "UpdateConfigs");
span.setAttribute("outsystems.function.key", "c4a3f3dc-897e-456c-a577-c8c77920c1ec");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsCharts_controller_UpdateSeriesStyling_UpdateConfigsJS, "UpdateConfigs", "UpdateSeriesStyling", {
uniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.DataTypes.DataTypes.Text),
configs: OS.DataConversion.JSNodeParamConverter.to(vars.value.configsInLocal, OS.DataTypes.DataTypes.Text),
ResponseJSON: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsCharts.UpdateSeriesStyling$updateConfigsJSResult"))();
jsNodeResult.responseJSONOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ResponseJSON, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// JSON Deserialize: JSONDeserializeErrorMessage
jSONDeserializeErrorMessageVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(updateConfigsJSResult.value.responseJSONOut, OutSystemsChartsModel.ST_7c45885429f626cd0775ccbea11ace15Structure, false);
// Success = JSONDeserializeErrorMessage.Data.IsSuccess
outVars.value.successOut = jSONDeserializeErrorMessageVar.value.dataOut.isSuccessAttr;
// ErrorMessage.Code = JSONDeserializeErrorMessage.Data.Code
outVars.value.errorMessageOut.codeAttr = jSONDeserializeErrorMessageVar.value.dataOut.codeAttr;
// ErrorMessage.Message = JSONDeserializeErrorMessage.Data.Message
outVars.value.errorMessageOut.messageAttr = jSONDeserializeErrorMessageVar.value.dataOut.messageAttr;
return outVars.value;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsChartsController.default;
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.UpdateSeriesStyling$vars", [{
name: "uniqueId",
attrName: "uniqueIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "configs",
attrName: "configsInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.UpdateSeriesStyling$updateConfigsJSResult", [{
name: "ResponseJSON",
attrName: "responseJSONOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.UpdateSeriesStyling$outVars", [{
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new OutSystemsChartsModel.ST_50c794173b7ac3485b1cda7be99f6b43Structure();
},
complexType: OutSystemsChartsModel.ST_50c794173b7ac3485b1cda7be99f6b43Structure
}]);
OutSystemsChartsController.default.clientActionProxies.updateSeriesStyling$Action = function (uniqueIdIn, configsIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
configsIn = (configsIn === undefined) ? "" : configsIn;
return controller.executeActionInsideJSNode(OutSystemsChartsController.default.updateSeriesStyling$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(configsIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: actionResults.errorMessageOut
};
});
};
});

define("OutSystemsCharts.controller$UpdateSeriesStyling.UpdateConfigsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.ResponseJSON = OutSystems.ChartAPI.AddOn.SeriesStyling.UpdateConfigs(
    $parameters.uniqueId,
    $parameters.configs
)
};
});


define("OutSystemsCharts.controller$XAxisFormat_Init_v1", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.controller", "OutSystemsCharts.model$ST_87973ae5f6c07db6193b59603f29dce6Structure"], function (exports, OSRuntimeCore, OutSystemsChartsModel, OutSystemsChartsController) {
var OS = OSRuntimeCore;
OutSystemsChartsController.default.xAxisFormat_Init_v1$Action = function (titleIn, labelsRotationIn, minValueIn, maxValueIn, valuesTypeIn, callContext) {
return OS.Logger.startActiveSpan("XAxisFormat_Init_v1", function (span) {
if(span) {
span.setAttribute("code.function", "XAxisFormat_Init_v1");
span.setAttribute("outsystems.function.key", "ba4dc227-c24f-49b7-a77e-c34544c79f03");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.XAxisFormat_Init_v1$vars"))());
vars.value.titleInLocal = titleIn;
vars.value.labelsRotationInLocal = labelsRotationIn;
vars.value.minValueInLocal = minValueIn;
vars.value.maxValueInLocal = maxValueIn;
vars.value.valuesTypeInLocal = valuesTypeIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.XAxisFormat_Init_v1$outVars"))());
// Set XAxisFormat
// XAxisFormat.Title = Title
outVars.value.xAxisFormatOut.titleAttr = vars.value.titleInLocal;
// XAxisFormat.LabelsRotation = LabelsRotation
outVars.value.xAxisFormatOut.labelsRotationAttr = vars.value.labelsRotationInLocal;
// XAxisFormat.MinValue = MinValue
outVars.value.xAxisFormatOut.minValueAttr = vars.value.minValueInLocal;
// XAxisFormat.MaxValue = MaxValue
outVars.value.xAxisFormatOut.maxValueAttr = vars.value.maxValueInLocal;
// XAxisFormat.ValuesType = ValuesType
outVars.value.xAxisFormatOut.valuesTypeAttr = vars.value.valuesTypeInLocal;
return outVars.value;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsChartsController.default;
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.XAxisFormat_Init_v1$vars", [{
name: "Title",
attrName: "titleInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "LabelsRotation",
attrName: "labelsRotationInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "MinValue",
attrName: "minValueInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "MaxValue",
attrName: "maxValueInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ValuesType",
attrName: "valuesTypeInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return OutSystemsChartsModel.staticEntities.xAxisValuesType_v1.auto;
}
}]);
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.XAxisFormat_Init_v1$outVars", [{
name: "XAxisFormat",
attrName: "xAxisFormatOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new OutSystemsChartsModel.ST_87973ae5f6c07db6193b59603f29dce6Structure();
},
complexType: OutSystemsChartsModel.ST_87973ae5f6c07db6193b59603f29dce6Structure
}]);
OutSystemsChartsController.default.clientActionProxies.xAxisFormat_Init_v1$Action = function (titleIn, labelsRotationIn, minValueIn, maxValueIn, valuesTypeIn) {
titleIn = (titleIn === undefined) ? "" : titleIn;
labelsRotationIn = (labelsRotationIn === undefined) ? 0 : labelsRotationIn;
minValueIn = (minValueIn === undefined) ? "" : minValueIn;
maxValueIn = (maxValueIn === undefined) ? "" : maxValueIn;
valuesTypeIn = (valuesTypeIn === undefined) ? OutSystemsChartsModel.staticEntities.xAxisValuesType_v1.auto : valuesTypeIn;
return controller.executeActionInsideJSNode(OutSystemsChartsController.default.xAxisFormat_Init_v1$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(titleIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(labelsRotationIn, OS.DataTypes.DataTypes.Integer), OS.DataConversion.JSNodeParamConverter.from(minValueIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(maxValueIn, OS.DataTypes.DataTypes.Text), valuesTypeIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
XAxisFormat: actionResults.xAxisFormatOut
};
});
};
});


define("OutSystemsCharts.controller$YAxisFormat_Init_v1", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model", "OutSystemsCharts.controller", "OutSystemsCharts.model$ST_80a54fdc5a44237df505b3e5b63ad0feStructure"], function (exports, OSRuntimeCore, OutSystemsChartsModel, OutSystemsChartsController) {
var OS = OSRuntimeCore;
OutSystemsChartsController.default.yAxisFormat_Init_v1$Action = function (titleIn, minValueIn, maxValueIn, valuesPrefixIn, valuesSufixIn, gridLineStepIn, callContext) {
return OS.Logger.startActiveSpan("YAxisFormat_Init_v1", function (span) {
if(span) {
span.setAttribute("code.function", "YAxisFormat_Init_v1");
span.setAttribute("outsystems.function.key", "efad66d3-b7b9-4277-9c2e-426176e6e88f");
span.setAttribute("outsystems.function.owner.name", "OutSystemsCharts");
span.setAttribute("outsystems.function.owner.key", "38b70e23-50fc-4710-80cf-3682a9dc998a");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.YAxisFormat_Init_v1$vars"))());
vars.value.titleInLocal = titleIn;
vars.value.minValueInLocal = minValueIn;
vars.value.maxValueInLocal = maxValueIn;
vars.value.valuesPrefixInLocal = valuesPrefixIn;
vars.value.valuesSufixInLocal = valuesSufixIn;
vars.value.gridLineStepInLocal = gridLineStepIn;
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsCharts.YAxisFormat_Init_v1$outVars"))());
// Set YAxisFormat
// YAxisFormat.Title = Title
outVars.value.yAxisFormatOut.titleAttr = vars.value.titleInLocal;
// YAxisFormat.MinValue = MinValue
outVars.value.yAxisFormatOut.minValueAttr = vars.value.minValueInLocal;
// YAxisFormat.MaxValue = MaxValue
outVars.value.yAxisFormatOut.maxValueAttr = vars.value.maxValueInLocal;
// YAxisFormat.ValuesPrefix = ValuesPrefix
outVars.value.yAxisFormatOut.valuesPrefixAttr = vars.value.valuesPrefixInLocal;
// YAxisFormat.ValuesSuffix = ValuesSufix
outVars.value.yAxisFormatOut.valuesSuffixAttr = vars.value.valuesSufixInLocal;
// YAxisFormat.GridLineStep = GridLineStep
outVars.value.yAxisFormatOut.gridLineStepAttr = vars.value.gridLineStepInLocal;
return outVars.value;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsChartsController.default;
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.YAxisFormat_Init_v1$vars", [{
name: "Title",
attrName: "titleInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "MinValue",
attrName: "minValueInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.BuiltinFunctions.integerToDecimal(-2147483647);
}
}, {
name: "MaxValue",
attrName: "maxValueInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.BuiltinFunctions.integerToDecimal(-2147483647);
}
}, {
name: "ValuesPrefix",
attrName: "valuesPrefixInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ValuesSufix",
attrName: "valuesSufixInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "GridLineStep",
attrName: "gridLineStepInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.BuiltinFunctions.integerToDecimal(-2147483647);
}
}]);
OutSystemsChartsController.default.constructor.registerVariableGroupType("OutSystemsCharts.YAxisFormat_Init_v1$outVars", [{
name: "YAxisFormat",
attrName: "yAxisFormatOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new OutSystemsChartsModel.ST_80a54fdc5a44237df505b3e5b63ad0feStructure();
},
complexType: OutSystemsChartsModel.ST_80a54fdc5a44237df505b3e5b63ad0feStructure
}]);
OutSystemsChartsController.default.clientActionProxies.yAxisFormat_Init_v1$Action = function (titleIn, minValueIn, maxValueIn, valuesPrefixIn, valuesSufixIn, gridLineStepIn) {
titleIn = (titleIn === undefined) ? "" : titleIn;
minValueIn = (minValueIn === undefined) ? -2147483647 : minValueIn;
maxValueIn = (maxValueIn === undefined) ? -2147483647 : maxValueIn;
valuesPrefixIn = (valuesPrefixIn === undefined) ? "" : valuesPrefixIn;
valuesSufixIn = (valuesSufixIn === undefined) ? "" : valuesSufixIn;
gridLineStepIn = (gridLineStepIn === undefined) ? -2147483647 : gridLineStepIn;
return controller.executeActionInsideJSNode(OutSystemsChartsController.default.yAxisFormat_Init_v1$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(titleIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(minValueIn, OS.DataTypes.DataTypes.Decimal), OS.DataConversion.JSNodeParamConverter.from(maxValueIn, OS.DataTypes.DataTypes.Decimal), OS.DataConversion.JSNodeParamConverter.from(valuesPrefixIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(valuesSufixIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(gridLineStepIn, OS.DataTypes.DataTypes.Decimal)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
YAxisFormat: actionResults.yAxisFormatOut
};
});
};
});


define("OutSystemsCharts.controller", ["exports", "@outsystems/runtime-core-js", "OutSystemsCharts.model"], function (exports, OSRuntimeCore, OutSystemsChartsModel) {
var OS = OSRuntimeCore;
var OutSystemsChartsController = exports;
class Controller extends 
OS.Controller.BaseModuleController {
constructor(model, messagesProvider, idService, translationResources) {
super(model, messagesProvider, idService, translationResources);
}

get clientActionProxies() {if(!(this.hasOwnProperty("_clientActionProxies"))) {
this._clientActionProxies = {};
}

return this._clientActionProxies;
}set clientActionProxies(value) {this._clientActionProxies = value;
}


get roles() {if(!(this.hasOwnProperty("_roles"))) {
this._roles = {};
}

return this._roles;
}set roles(value) {this._roles = value;
}

get defaultTimeout() {if(!(this.hasOwnProperty("_defaultTimeout"))) {
this._defaultTimeout = 10;
}

return this._defaultTimeout;
}set defaultTimeout(value) {this._defaultTimeout = value;
}

getDefaultTimeout() {
return OutSystemsChartsController.default.defaultTimeout;
}

}

OutSystemsChartsController.default = new Controller();
});

