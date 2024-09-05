define("OutSystemsMaps.controller$AddMarker", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$AddMarker.AddMarkerJS", "OutSystemsMaps.controller$ServerAction.GetMapErrorByMapErrorCode", "OutSystemsMaps.model$ST_51ef6a78944132edc56aa7bf7c4ea240Structure", "OutSystemsMaps.model$ST_7f069279f39dd7c7d2e7b5637a5b25c9Structure", "OutSystemsMaps.model$ST_f8c2d1b69d03ea90c73e9f07e7d98bf0Structure", "OutSystemsMaps.model$ST_3d593ae1aad35ac58e1616049bb8da2cStructure", "OutSystemsMaps.model$ST_cdd94bc434e873b4d04598ac1e187543Structure"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_AddMarker_AddMarkerJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.addMarker$Action = function (mapWidgetIdIn, positionIn, optionalConfigsIn, callContext) {
return OS.Logger.startActiveSpan("AddMarker", function (span) {
if(span) {
span.setAttribute("code.function", "AddMarker");
span.setAttribute("outsystems.function.key", "f95089fe-4838-488f-b4ea-1b861f7ca42c");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

return OS.Flow.tryFinally(function () {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.AddMarker$vars"))());
vars.value.mapWidgetIdInLocal = mapWidgetIdIn;
vars.value.positionInLocal = positionIn;
vars.value.optionalConfigsInLocal = optionalConfigsIn.clone();
var getMapErrorByMapErrorCodeVar = new OS.DataTypes.VariableHolder();
var addMarkerJSResult = new OS.DataTypes.VariableHolder();
var serializeConfigsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var jSONDeserializeReturnMessageVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(OutSystemsMapsModel.ST_cdd94bc434e873b4d04598ac1e187543Structure))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.AddMarker$outVars"))());
return OS.Flow.executeAsyncFlow(function () {
// Set configurations
// Internal_Marker_Configs.UniqueId = ""
vars.value.internal_Marker_ConfigsVar.uniqueIdAttr = "";
// Internal_Marker_Configs.Internal_to_provider_marker_configs.location = Position
vars.value.internal_Marker_ConfigsVar.internal_to_provider_marker_configsAttr.locationAttr = vars.value.positionInLocal;
// Internal_Marker_Configs.Internal_to_provider_marker_configs.iconUrl = OptionalConfigs.IconURL
vars.value.internal_Marker_ConfigsVar.internal_to_provider_marker_configsAttr.iconUrlAttr = vars.value.optionalConfigsInLocal.iconURLAttr;
// Internal_Marker_Configs.Internal_to_provider_marker_configs.title = OptionalConfigs.Title
vars.value.internal_Marker_ConfigsVar.internal_to_provider_marker_configsAttr.titleAttr = vars.value.optionalConfigsInLocal.titleAttr;
// Internal_Marker_Configs.Internal_to_provider_marker_configs.allowDrag = OptionalConfigs.AllowDrag
vars.value.internal_Marker_ConfigsVar.internal_to_provider_marker_configsAttr.allowDragAttr = vars.value.optionalConfigsInLocal.allowDragAttr;
// Internal_Marker_Configs.Internal_to_provider_marker_configs.label = OptionalConfigs.Label
vars.value.internal_Marker_ConfigsVar.internal_to_provider_marker_configsAttr.labelAttr = vars.value.optionalConfigsInLocal.labelAttr;
// Internal_Marker_Configs.Internal_to_provider_marker_configs.iconWidth = OptionalConfigs.IconSize.Width
vars.value.internal_Marker_ConfigsVar.internal_to_provider_marker_configsAttr.iconWidthAttr = (vars.value.optionalConfigsInLocal.iconSizeAttr.widthAttr).toString();
// Internal_Marker_Configs.Internal_to_provider_marker_configs.iconHeight = OptionalConfigs.IconSize.Height
vars.value.internal_Marker_ConfigsVar.internal_to_provider_marker_configsAttr.iconHeightAttr = (vars.value.optionalConfigsInLocal.iconSizeAttr.heightAttr).toString();
// JSON Serialize: SerializeConfigs
serializeConfigsVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.internal_Marker_ConfigsVar.internal_to_provider_marker_configsAttr, true, false);
addMarkerJSResult.value = OS.Logger.startActiveSpan("AddMarker", function (span) {
if(span) {
span.setAttribute("code.function", "AddMarker");
span.setAttribute("outsystems.function.key", "d79bb00b-a638-47a5-84d8-2b88f566a96d");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_AddMarker_AddMarkerJS, "AddMarker", "AddMarker", {
MapId: OS.DataConversion.JSNodeParamConverter.to(vars.value.mapWidgetIdInLocal, OS.DataTypes.DataTypes.Text),
Configs: OS.DataConversion.JSNodeParamConverter.to(serializeConfigsVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
ReturnMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsMaps.AddMarker$addMarkerJSResult"))();
jsNodeResult.returnMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ReturnMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// JSON Deserialize: JSONDeserializeReturnMessage
jSONDeserializeReturnMessageVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(addMarkerJSResult.value.returnMessageOut, OutSystemsMapsModel.ST_cdd94bc434e873b4d04598ac1e187543Structure, false);
// Set Success
// Success = JSONDeserializeReturnMessage.Data.IsSuccess
outVars.value.successOut = jSONDeserializeReturnMessageVar.value.dataOut.isSuccessAttr;
// Is Success?
return OS.Flow.executeSequence(function () {
if((outVars.value.successOut)) {
// MarkerId = JSONDeserializeReturnMessage.Data.Message
outVars.value.markerIdOut = jSONDeserializeReturnMessageVar.value.dataOut.messageAttr;
// ↘
} else {
// Execute Action: GetMapErrorByMapErrorCode
return controller.getMapErrorByMapErrorCode$ServerAction(OutSystemsMapsModel.staticEntities.mapErrors.aPI_FailedCreateMarker, callContext).then(function (value) {
getMapErrorByMapErrorCodeVar.value = value;
}).then(function () {
// Set ErrorMessage
// ErrorMessage.Code = JSONDeserializeReturnMessage.Data.Code
outVars.value.errorMessageOut.codeAttr = jSONDeserializeReturnMessageVar.value.dataOut.codeAttr;
// ErrorMessage.Message = GetMapErrorByMapErrorCode.ErrorMessage + JSONDeserializeReturnMessage.Data.Message
outVars.value.errorMessageOut.messageAttr = (getMapErrorByMapErrorCodeVar.value.errorMessageOut + jSONDeserializeReturnMessageVar.value.dataOut.messageAttr);
});
}

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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.AddMarker$vars", [{
name: "MapWidgetId",
attrName: "mapWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Position",
attrName: "positionInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "OptionalConfigs",
attrName: "optionalConfigsInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new OutSystemsMapsModel.ST_7f069279f39dd7c7d2e7b5637a5b25c9Structure();
},
complexType: OutSystemsMapsModel.ST_7f069279f39dd7c7d2e7b5637a5b25c9Structure
}, {
name: "Internal_Marker_Configs",
attrName: "internal_Marker_ConfigsVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new OutSystemsMapsModel.ST_3d593ae1aad35ac58e1616049bb8da2cStructure();
},
complexType: OutSystemsMapsModel.ST_3d593ae1aad35ac58e1616049bb8da2cStructure
}]);
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.AddMarker$addMarkerJSResult", [{
name: "ReturnMessage",
attrName: "returnMessageOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.AddMarker$outVars", [{
name: "MarkerId",
attrName: "markerIdOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
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
return new OutSystemsMapsModel.ST_f8c2d1b69d03ea90c73e9f07e7d98bf0Structure();
},
complexType: OutSystemsMapsModel.ST_f8c2d1b69d03ea90c73e9f07e7d98bf0Structure
}]);
OutSystemsMapsController.default.clientActionProxies.addMarker$Action = function (mapWidgetIdIn, positionIn, optionalConfigsIn) {
mapWidgetIdIn = (mapWidgetIdIn === undefined) ? "" : mapWidgetIdIn;
positionIn = (positionIn === undefined) ? "" : positionIn;
optionalConfigsIn = (optionalConfigsIn === undefined) ? new OutSystemsMapsModel.ST_7f069279f39dd7c7d2e7b5637a5b25c9Structure() : optionalConfigsIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.addMarker$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(positionIn, OS.DataTypes.DataTypes.Text), optionalConfigsIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
MarkerId: OS.DataConversion.JSNodeParamConverter.to(actionResults.markerIdOut, OS.DataTypes.DataTypes.Text),
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: actionResults.errorMessageOut
};
});
};
});

define("OutSystemsMaps.controller$AddMarker.AddMarkerJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.ReturnMessage = OutSystems.Maps.MapAPI.MarkerManager.AddMarker($parameters.MapId, $parameters.Configs);
};
});


define("OutSystemsMaps.controller$AddTool", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$AddTool.AddToolJS"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_AddTool_AddToolJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.addTool$Action = function (toolIdIn, toolTypeIn, configsIn, callContext) {
return OS.Logger.startActiveSpan("AddTool", function (span) {
if(span) {
span.setAttribute("code.function", "AddTool");
span.setAttribute("outsystems.function.key", "cafac29b-a33f-4359-ae00-b2fc4e3dc6ae");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.AddTool$vars"))());
vars.value.toolIdInLocal = toolIdIn;
vars.value.toolTypeInLocal = toolTypeIn;
vars.value.configsInLocal = configsIn;
OS.Logger.startActiveSpan("AddTool", function (span) {
if(span) {
span.setAttribute("code.function", "AddTool");
span.setAttribute("outsystems.function.key", "d0633792-d787-4b3e-bd89-104dc7b9fb80");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_AddTool_AddToolJS, "AddTool", "AddTool", {
DrawingToolsId: OS.DataConversion.JSNodeParamConverter.to(vars.value.toolIdInLocal, OS.DataTypes.DataTypes.Text),
Configs: OS.DataConversion.JSNodeParamConverter.to(vars.value.configsInLocal, OS.DataTypes.DataTypes.Text),
Type: OS.DataConversion.JSNodeParamConverter.to(vars.value.toolTypeInLocal, OS.DataTypes.DataTypes.Text)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.AddTool$vars", [{
name: "ToolId",
attrName: "toolIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ToolType",
attrName: "toolTypeInLocal",
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
OutSystemsMapsController.default.clientActionProxies.addTool$Action = function (toolIdIn, toolTypeIn, configsIn) {
toolIdIn = (toolIdIn === undefined) ? "" : toolIdIn;
toolTypeIn = (toolTypeIn === undefined) ? "" : toolTypeIn;
configsIn = (configsIn === undefined) ? "" : configsIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.addTool$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(toolIdIn, OS.DataTypes.DataTypes.Text), toolTypeIn, OS.DataConversion.JSNodeParamConverter.from(configsIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$AddTool.AddToolJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.Maps.MapAPI.DrawingToolsManager.AddTool($parameters.DrawingToolsId, $parameters.Type, $parameters.Configs);
};
});


define("OutSystemsMaps.controller$ChangeDrawingToolsPosition", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeDrawingToolsProperty_Text"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeDrawingToolsPosition$Action = function (drawingToolsWidgetIdIn, positionIn, callContext) {
return OS.Logger.startActiveSpan("ChangeDrawingToolsPosition", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeDrawingToolsPosition");
span.setAttribute("outsystems.function.key", "d1505de5-5282-4253-adc1-54a672b9052a");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeDrawingToolsPosition$vars"))());
vars.value.drawingToolsWidgetIdInLocal = drawingToolsWidgetIdIn;
vars.value.positionInLocal = positionIn;
// Execute Action: ChangeDrawingToolsProperty_Text
OutSystemsMapsController.default.changeDrawingToolsProperty_Text$Action(vars.value.drawingToolsWidgetIdInLocal, "position", vars.value.positionInLocal, callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeDrawingToolsPosition$vars", [{
name: "DrawingToolsWidgetId",
attrName: "drawingToolsWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Position",
attrName: "positionInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeDrawingToolsPosition$Action = function (drawingToolsWidgetIdIn, positionIn) {
drawingToolsWidgetIdIn = (drawingToolsWidgetIdIn === undefined) ? "" : drawingToolsWidgetIdIn;
positionIn = (positionIn === undefined) ? "" : positionIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeDrawingToolsPosition$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(drawingToolsWidgetIdIn, OS.DataTypes.DataTypes.Text), positionIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeDrawingToolsProperty_Text", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeDrawingToolsProperty_Text.ChangePropertyJS"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_ChangeDrawingToolsProperty_Text_ChangePropertyJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeDrawingToolsProperty_Text$Action = function (drawingToolsWidgetIdIn, propertyNameIn, propertValueIn, callContext) {
return OS.Logger.startActiveSpan("ChangeDrawingToolsProperty_Text", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeDrawingToolsProperty_Text");
span.setAttribute("outsystems.function.key", "27869f60-4041-484d-bd91-2eeb39630c78");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeDrawingToolsProperty_Text$vars"))());
vars.value.drawingToolsWidgetIdInLocal = drawingToolsWidgetIdIn;
vars.value.propertyNameInLocal = propertyNameIn;
vars.value.propertValueInLocal = propertValueIn;
OS.Logger.startActiveSpan("ChangeProperty", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeProperty");
span.setAttribute("outsystems.function.key", "e605321b-8c03-41d8-a7f7-f74fd6260b46");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_ChangeDrawingToolsProperty_Text_ChangePropertyJS, "ChangeProperty", "ChangeDrawingToolsProperty_Text", {
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyNameInLocal, OS.DataTypes.DataTypes.Text),
DrawingToolsWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.drawingToolsWidgetIdInLocal, OS.DataTypes.DataTypes.Text),
PropertValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertValueInLocal, OS.DataTypes.DataTypes.Text)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeDrawingToolsProperty_Text$vars", [{
name: "DrawingToolsWidgetId",
attrName: "drawingToolsWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyName",
attrName: "propertyNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertValue",
attrName: "propertValueInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeDrawingToolsProperty_Text$Action = function (drawingToolsWidgetIdIn, propertyNameIn, propertValueIn) {
drawingToolsWidgetIdIn = (drawingToolsWidgetIdIn === undefined) ? "" : drawingToolsWidgetIdIn;
propertyNameIn = (propertyNameIn === undefined) ? "" : propertyNameIn;
propertValueIn = (propertValueIn === undefined) ? "" : propertValueIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeDrawingToolsProperty_Text$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(drawingToolsWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(propertyNameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(propertValueIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$ChangeDrawingToolsProperty_Text.ChangePropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.Maps.MapAPI.DrawingToolsManager.ChangeProperty($parameters.DrawingToolsWidgetId, $parameters.PropertyName, $parameters.PropertValue)
};
});


define("OutSystemsMaps.controller$ChangeFileLayerLayerURL", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeFileLayerProperty_Text"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeFileLayerLayerURL$Action = function (fileLayerWidgetIdIn, layerURLIn, callContext) {
return OS.Logger.startActiveSpan("ChangeFileLayerLayerURL", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeFileLayerLayerURL");
span.setAttribute("outsystems.function.key", "6515bf4c-7b9c-4e48-bd97-3f703de8d4a8");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeFileLayerLayerURL$vars"))());
vars.value.fileLayerWidgetIdInLocal = fileLayerWidgetIdIn;
vars.value.layerURLInLocal = layerURLIn;
// Execute Action: ChangeFileLayerProperty_Text
OutSystemsMapsController.default.changeFileLayerProperty_Text$Action(vars.value.fileLayerWidgetIdInLocal, "layerUrl", vars.value.layerURLInLocal, callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeFileLayerLayerURL$vars", [{
name: "FileLayerWidgetId",
attrName: "fileLayerWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "LayerURL",
attrName: "layerURLInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeFileLayerLayerURL$Action = function (fileLayerWidgetIdIn, layerURLIn) {
fileLayerWidgetIdIn = (fileLayerWidgetIdIn === undefined) ? "" : fileLayerWidgetIdIn;
layerURLIn = (layerURLIn === undefined) ? "" : layerURLIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeFileLayerLayerURL$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(fileLayerWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(layerURLIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeFileLayerPreserveViewport", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeFileLayerProperty_Boolean"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeFileLayerPreserveViewport$Action = function (fileLayerWidgetIdIn, preserveViewportIn, callContext) {
return OS.Logger.startActiveSpan("ChangeFileLayerPreserveViewport", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeFileLayerPreserveViewport");
span.setAttribute("outsystems.function.key", "3a40f35b-fc80-40dc-ac01-ebb8de653cee");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeFileLayerPreserveViewport$vars"))());
vars.value.fileLayerWidgetIdInLocal = fileLayerWidgetIdIn;
vars.value.preserveViewportInLocal = preserveViewportIn;
// Execute Action: ChangeFileLayerProperty_Boolean
OutSystemsMapsController.default.changeFileLayerProperty_Boolean$Action(vars.value.fileLayerWidgetIdInLocal, "preserveViewport", vars.value.preserveViewportInLocal, callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeFileLayerPreserveViewport$vars", [{
name: "FileLayerWidgetId",
attrName: "fileLayerWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "PreserveViewport",
attrName: "preserveViewportInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeFileLayerPreserveViewport$Action = function (fileLayerWidgetIdIn, preserveViewportIn) {
fileLayerWidgetIdIn = (fileLayerWidgetIdIn === undefined) ? "" : fileLayerWidgetIdIn;
preserveViewportIn = (preserveViewportIn === undefined) ? false : preserveViewportIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeFileLayerPreserveViewport$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(fileLayerWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(preserveViewportIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeFileLayerProperty_Boolean", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeFileLayerProperty_Boolean.ChangePropertyJS"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_ChangeFileLayerProperty_Boolean_ChangePropertyJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeFileLayerProperty_Boolean$Action = function (fileLayerWidgetIdIn, propertyNameIn, propertValueIn, callContext) {
return OS.Logger.startActiveSpan("ChangeFileLayerProperty_Boolean", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeFileLayerProperty_Boolean");
span.setAttribute("outsystems.function.key", "cb68dc0d-39d5-4fc3-866c-ed39fe9bd323");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeFileLayerProperty_Boolean$vars"))());
vars.value.fileLayerWidgetIdInLocal = fileLayerWidgetIdIn;
vars.value.propertyNameInLocal = propertyNameIn;
vars.value.propertValueInLocal = propertValueIn;
OS.Logger.startActiveSpan("ChangeProperty", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeProperty");
span.setAttribute("outsystems.function.key", "8bf8ba1d-3271-4527-9083-63f6470124c2");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_ChangeFileLayerProperty_Boolean_ChangePropertyJS, "ChangeProperty", "ChangeFileLayerProperty_Boolean", {
PropertValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertValueInLocal, OS.DataTypes.DataTypes.Boolean),
FileLayerWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.fileLayerWidgetIdInLocal, OS.DataTypes.DataTypes.Text),
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyNameInLocal, OS.DataTypes.DataTypes.Text)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeFileLayerProperty_Boolean$vars", [{
name: "FileLayerWidgetId",
attrName: "fileLayerWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyName",
attrName: "propertyNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertValue",
attrName: "propertValueInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeFileLayerProperty_Boolean$Action = function (fileLayerWidgetIdIn, propertyNameIn, propertValueIn) {
fileLayerWidgetIdIn = (fileLayerWidgetIdIn === undefined) ? "" : fileLayerWidgetIdIn;
propertyNameIn = (propertyNameIn === undefined) ? "" : propertyNameIn;
propertValueIn = (propertValueIn === undefined) ? false : propertValueIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeFileLayerProperty_Boolean$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(fileLayerWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(propertyNameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(propertValueIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$ChangeFileLayerProperty_Boolean.ChangePropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.Maps.MapAPI.FileLayerManager.ChangeProperty($parameters.FileLayerWidgetId, $parameters.PropertyName, $parameters.PropertValue)
};
});


define("OutSystemsMaps.controller$ChangeFileLayerProperty_Text", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeFileLayerProperty_Text.ChangePropertyJS"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_ChangeFileLayerProperty_Text_ChangePropertyJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeFileLayerProperty_Text$Action = function (fileLayerWidgetIdIn, propertyNameIn, propertValueIn, callContext) {
return OS.Logger.startActiveSpan("ChangeFileLayerProperty_Text", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeFileLayerProperty_Text");
span.setAttribute("outsystems.function.key", "a5497d74-49b5-43fb-873d-4a90aba2038a");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeFileLayerProperty_Text$vars"))());
vars.value.fileLayerWidgetIdInLocal = fileLayerWidgetIdIn;
vars.value.propertyNameInLocal = propertyNameIn;
vars.value.propertValueInLocal = propertValueIn;
OS.Logger.startActiveSpan("ChangeProperty", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeProperty");
span.setAttribute("outsystems.function.key", "f1489713-7288-43ba-a18b-4a58fd697e43");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_ChangeFileLayerProperty_Text_ChangePropertyJS, "ChangeProperty", "ChangeFileLayerProperty_Text", {
FileLayerWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.fileLayerWidgetIdInLocal, OS.DataTypes.DataTypes.Text),
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyNameInLocal, OS.DataTypes.DataTypes.Text),
PropertValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertValueInLocal, OS.DataTypes.DataTypes.Text)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeFileLayerProperty_Text$vars", [{
name: "FileLayerWidgetId",
attrName: "fileLayerWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyName",
attrName: "propertyNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertValue",
attrName: "propertValueInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeFileLayerProperty_Text$Action = function (fileLayerWidgetIdIn, propertyNameIn, propertValueIn) {
fileLayerWidgetIdIn = (fileLayerWidgetIdIn === undefined) ? "" : fileLayerWidgetIdIn;
propertyNameIn = (propertyNameIn === undefined) ? "" : propertyNameIn;
propertValueIn = (propertValueIn === undefined) ? "" : propertValueIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeFileLayerProperty_Text$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(fileLayerWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(propertyNameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(propertValueIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$ChangeFileLayerProperty_Text.ChangePropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.Maps.MapAPI.FileLayerManager.ChangeProperty($parameters.FileLayerWidgetId, $parameters.PropertyName, $parameters.PropertValue)
};
});


define("OutSystemsMaps.controller$ChangeFileLayerSuppressPopups", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeFileLayerProperty_Boolean"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeFileLayerSuppressPopups$Action = function (fileLayerWidgetIdIn, suppressPopupsIn, callContext) {
return OS.Logger.startActiveSpan("ChangeFileLayerSuppressPopups", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeFileLayerSuppressPopups");
span.setAttribute("outsystems.function.key", "d24acc2a-36ef-425c-892a-133b0d867fcf");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeFileLayerSuppressPopups$vars"))());
vars.value.fileLayerWidgetIdInLocal = fileLayerWidgetIdIn;
vars.value.suppressPopupsInLocal = suppressPopupsIn;
// Execute Action: ChangeFileLayerProperty_Boolean
OutSystemsMapsController.default.changeFileLayerProperty_Boolean$Action(vars.value.fileLayerWidgetIdInLocal, "suppressPopups", vars.value.suppressPopupsInLocal, callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeFileLayerSuppressPopups$vars", [{
name: "FileLayerWidgetId",
attrName: "fileLayerWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "SuppressPopups",
attrName: "suppressPopupsInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeFileLayerSuppressPopups$Action = function (fileLayerWidgetIdIn, suppressPopupsIn) {
fileLayerWidgetIdIn = (fileLayerWidgetIdIn === undefined) ? "" : fileLayerWidgetIdIn;
suppressPopupsIn = (suppressPopupsIn === undefined) ? false : suppressPopupsIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeFileLayerSuppressPopups$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(fileLayerWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(suppressPopupsIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeHeatmapLayerDissipateOnZoom", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeHeatmapLayerProperty_Boolean"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeHeatmapLayerDissipateOnZoom$Action = function (heatmapLayerWidgetIdIn, dissipateOnZoomIn, callContext) {
return OS.Logger.startActiveSpan("ChangeHeatmapLayerDissipateOnZoom", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeHeatmapLayerDissipateOnZoom");
span.setAttribute("outsystems.function.key", "4719dd78-dc06-4bf9-be02-3cdeeac1a4b4");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeHeatmapLayerDissipateOnZoom$vars"))());
vars.value.heatmapLayerWidgetIdInLocal = heatmapLayerWidgetIdIn;
vars.value.dissipateOnZoomInLocal = dissipateOnZoomIn;
// Execute Action: ChangeHeatmapLayerProperty_Boolean
OutSystemsMapsController.default.changeHeatmapLayerProperty_Boolean$Action(vars.value.heatmapLayerWidgetIdInLocal, "dissipateOnZoom", vars.value.dissipateOnZoomInLocal, callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeHeatmapLayerDissipateOnZoom$vars", [{
name: "HeatmapLayerWidgetId",
attrName: "heatmapLayerWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "DissipateOnZoom",
attrName: "dissipateOnZoomInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeHeatmapLayerDissipateOnZoom$Action = function (heatmapLayerWidgetIdIn, dissipateOnZoomIn) {
heatmapLayerWidgetIdIn = (heatmapLayerWidgetIdIn === undefined) ? "" : heatmapLayerWidgetIdIn;
dissipateOnZoomIn = (dissipateOnZoomIn === undefined) ? false : dissipateOnZoomIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeHeatmapLayerDissipateOnZoom$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(heatmapLayerWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(dissipateOnZoomIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeHeatmapLayerGradient", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeHeatmapLayerProperty_Text"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeHeatmapLayerGradient$Action = function (heatmapLayerWidgetIdIn, gradientIn, callContext) {
return OS.Logger.startActiveSpan("ChangeHeatmapLayerGradient", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeHeatmapLayerGradient");
span.setAttribute("outsystems.function.key", "3092e1b6-8fd4-4a01-9291-86245bd62355");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeHeatmapLayerGradient$vars"))());
vars.value.heatmapLayerWidgetIdInLocal = heatmapLayerWidgetIdIn;
vars.value.gradientInLocal = gradientIn.clone();
var gradientSerializeVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
// JSON Serialize: GradientSerialize
gradientSerializeVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.gradientInLocal, true, false, OS.DataTypes.DataTypes.Text);
// Execute Action: ChangeHeatmapLayerProperty_Text
OutSystemsMapsController.default.changeHeatmapLayerProperty_Text$Action(vars.value.heatmapLayerWidgetIdInLocal, "gradient", gradientSerializeVar.value.jSONOut, callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeHeatmapLayerGradient$vars", [{
name: "HeatmapLayerWidgetId",
attrName: "heatmapLayerWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Gradient",
attrName: "gradientInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new OS.DataTypes.TextList();
},
complexType: OS.DataTypes.TextList
}]);
OutSystemsMapsController.default.clientActionProxies.changeHeatmapLayerGradient$Action = function (heatmapLayerWidgetIdIn, gradientIn) {
heatmapLayerWidgetIdIn = (heatmapLayerWidgetIdIn === undefined) ? "" : heatmapLayerWidgetIdIn;
gradientIn = (gradientIn === undefined) ? new OS.DataTypes.TextList() : gradientIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeHeatmapLayerGradient$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(heatmapLayerWidgetIdIn, OS.DataTypes.DataTypes.Text), gradientIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeHeatmapLayerMaxIntensity", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeHeatmapLayerProperty_Number"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeHeatmapLayerMaxIntensity$Action = function (heatmapLayerWidgetIdIn, maxIntensityIn, callContext) {
return OS.Logger.startActiveSpan("ChangeHeatmapLayerMaxIntensity", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeHeatmapLayerMaxIntensity");
span.setAttribute("outsystems.function.key", "499f1ac8-f579-4ef9-b1a5-077523267f08");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeHeatmapLayerMaxIntensity$vars"))());
vars.value.heatmapLayerWidgetIdInLocal = heatmapLayerWidgetIdIn;
vars.value.maxIntensityInLocal = maxIntensityIn;
// Execute Action: ChangeHeatmapLayerProperty_Number
OutSystemsMapsController.default.changeHeatmapLayerProperty_Number$Action(vars.value.heatmapLayerWidgetIdInLocal, "maxIntensity", vars.value.maxIntensityInLocal, callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeHeatmapLayerMaxIntensity$vars", [{
name: "HeatmapLayerWidgetId",
attrName: "heatmapLayerWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "MaxIntensity",
attrName: "maxIntensityInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeHeatmapLayerMaxIntensity$Action = function (heatmapLayerWidgetIdIn, maxIntensityIn) {
heatmapLayerWidgetIdIn = (heatmapLayerWidgetIdIn === undefined) ? "" : heatmapLayerWidgetIdIn;
maxIntensityIn = (maxIntensityIn === undefined) ? OS.DataTypes.Decimal.defaultValue : maxIntensityIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeHeatmapLayerMaxIntensity$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(heatmapLayerWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(maxIntensityIn, OS.DataTypes.DataTypes.Decimal)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeHeatmapLayerOpacity", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeHeatmapLayerProperty_Number"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeHeatmapLayerOpacity$Action = function (heatmapLayerWidgetIdIn, opacityIn, callContext) {
return OS.Logger.startActiveSpan("ChangeHeatmapLayerOpacity", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeHeatmapLayerOpacity");
span.setAttribute("outsystems.function.key", "ff502f5d-5702-4d88-a30c-f7dd638a955a");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeHeatmapLayerOpacity$vars"))());
vars.value.heatmapLayerWidgetIdInLocal = heatmapLayerWidgetIdIn;
vars.value.opacityInLocal = opacityIn;
// Execute Action: ChangeHeatmapLayerProperty_Number
OutSystemsMapsController.default.changeHeatmapLayerProperty_Number$Action(vars.value.heatmapLayerWidgetIdInLocal, "opacity", vars.value.opacityInLocal, callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeHeatmapLayerOpacity$vars", [{
name: "HeatmapLayerWidgetId",
attrName: "heatmapLayerWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Opacity",
attrName: "opacityInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeHeatmapLayerOpacity$Action = function (heatmapLayerWidgetIdIn, opacityIn) {
heatmapLayerWidgetIdIn = (heatmapLayerWidgetIdIn === undefined) ? "" : heatmapLayerWidgetIdIn;
opacityIn = (opacityIn === undefined) ? OS.DataTypes.Decimal.defaultValue : opacityIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeHeatmapLayerOpacity$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(heatmapLayerWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(opacityIn, OS.DataTypes.DataTypes.Decimal)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeHeatmapLayerPoints", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeHeatmapLayerProperty_Text", "OutSystemsMaps.model$ST_ca9f1e36e4f2b1c8cabc0fd0c956ac77Structure", "OutSystemsMaps.model$RL_3e9d003efe19bfd5edf008a600c8d3af"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeHeatmapLayerPoints$Action = function (heatmapLayerWidgetIdIn, pointsIn, callContext) {
return OS.Logger.startActiveSpan("ChangeHeatmapLayerPoints", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeHeatmapLayerPoints");
span.setAttribute("outsystems.function.key", "00b272f5-619c-49c4-8057-8571b20dd654");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeHeatmapLayerPoints$vars"))());
vars.value.heatmapLayerWidgetIdInLocal = heatmapLayerWidgetIdIn;
vars.value.pointsInLocal = pointsIn.clone();
var pointsSerializeVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
// JSON Serialize: PointsSerialize
pointsSerializeVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.pointsInLocal, true, false);
// Execute Action: ChangeHeatmapLayerProperty_Text
OutSystemsMapsController.default.changeHeatmapLayerProperty_Text$Action(vars.value.heatmapLayerWidgetIdInLocal, "points", pointsSerializeVar.value.jSONOut, callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeHeatmapLayerPoints$vars", [{
name: "HeatmapLayerWidgetId",
attrName: "heatmapLayerWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Points",
attrName: "pointsInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new OutSystemsMapsModel.RL_3e9d003efe19bfd5edf008a600c8d3af();
},
complexType: OutSystemsMapsModel.RL_3e9d003efe19bfd5edf008a600c8d3af
}]);
OutSystemsMapsController.default.clientActionProxies.changeHeatmapLayerPoints$Action = function (heatmapLayerWidgetIdIn, pointsIn) {
heatmapLayerWidgetIdIn = (heatmapLayerWidgetIdIn === undefined) ? "" : heatmapLayerWidgetIdIn;
pointsIn = (pointsIn === undefined) ? new OutSystemsMapsModel.RL_3e9d003efe19bfd5edf008a600c8d3af() : pointsIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeHeatmapLayerPoints$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(heatmapLayerWidgetIdIn, OS.DataTypes.DataTypes.Text), pointsIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeHeatmapLayerProperty_Boolean", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeHeatmapLayerProperty_Boolean.ChangePropertyJS"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_ChangeHeatmapLayerProperty_Boolean_ChangePropertyJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeHeatmapLayerProperty_Boolean$Action = function (heatmapLayerWidgetIdIn, propertyNameIn, propertValueIn, callContext) {
return OS.Logger.startActiveSpan("ChangeHeatmapLayerProperty_Boolean", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeHeatmapLayerProperty_Boolean");
span.setAttribute("outsystems.function.key", "9b869710-b128-4887-9818-66ea5b1af57c");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeHeatmapLayerProperty_Boolean$vars"))());
vars.value.heatmapLayerWidgetIdInLocal = heatmapLayerWidgetIdIn;
vars.value.propertyNameInLocal = propertyNameIn;
vars.value.propertValueInLocal = propertValueIn;
OS.Logger.startActiveSpan("ChangeProperty", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeProperty");
span.setAttribute("outsystems.function.key", "27068770-734e-47de-8522-2bf4d317e402");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_ChangeHeatmapLayerProperty_Boolean_ChangePropertyJS, "ChangeProperty", "ChangeHeatmapLayerProperty_Boolean", {
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyNameInLocal, OS.DataTypes.DataTypes.Text),
FileLayerWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.heatmapLayerWidgetIdInLocal, OS.DataTypes.DataTypes.Text),
PropertValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertValueInLocal, OS.DataTypes.DataTypes.Boolean)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeHeatmapLayerProperty_Boolean$vars", [{
name: "HeatmapLayerWidgetId",
attrName: "heatmapLayerWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyName",
attrName: "propertyNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertValue",
attrName: "propertValueInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeHeatmapLayerProperty_Boolean$Action = function (heatmapLayerWidgetIdIn, propertyNameIn, propertValueIn) {
heatmapLayerWidgetIdIn = (heatmapLayerWidgetIdIn === undefined) ? "" : heatmapLayerWidgetIdIn;
propertyNameIn = (propertyNameIn === undefined) ? "" : propertyNameIn;
propertValueIn = (propertValueIn === undefined) ? false : propertValueIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeHeatmapLayerProperty_Boolean$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(heatmapLayerWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(propertyNameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(propertValueIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$ChangeHeatmapLayerProperty_Boolean.ChangePropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.Maps.MapAPI.HeatmapLayerManager.ChangeProperty($parameters.FileLayerWidgetId, $parameters.PropertyName, $parameters.PropertValue)
};
});


define("OutSystemsMaps.controller$ChangeHeatmapLayerProperty_Number", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeHeatmapLayerProperty_Number.ChangePropertyJS"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_ChangeHeatmapLayerProperty_Number_ChangePropertyJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeHeatmapLayerProperty_Number$Action = function (heatmapLayerWidgetIdIn, propertyNameIn, propertValueIn, callContext) {
return OS.Logger.startActiveSpan("ChangeHeatmapLayerProperty_Number", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeHeatmapLayerProperty_Number");
span.setAttribute("outsystems.function.key", "b2ff607a-7fdc-496f-b581-0cfec8fec24b");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeHeatmapLayerProperty_Number$vars"))());
vars.value.heatmapLayerWidgetIdInLocal = heatmapLayerWidgetIdIn;
vars.value.propertyNameInLocal = propertyNameIn;
vars.value.propertValueInLocal = propertValueIn;
OS.Logger.startActiveSpan("ChangeProperty", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeProperty");
span.setAttribute("outsystems.function.key", "9ec899a5-8329-44f9-9795-1f750323a49d");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_ChangeHeatmapLayerProperty_Number_ChangePropertyJS, "ChangeProperty", "ChangeHeatmapLayerProperty_Number", {
PropertValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertValueInLocal, OS.DataTypes.DataTypes.Decimal),
FileLayerWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.heatmapLayerWidgetIdInLocal, OS.DataTypes.DataTypes.Text),
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyNameInLocal, OS.DataTypes.DataTypes.Text)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeHeatmapLayerProperty_Number$vars", [{
name: "HeatmapLayerWidgetId",
attrName: "heatmapLayerWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyName",
attrName: "propertyNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertValue",
attrName: "propertValueInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeHeatmapLayerProperty_Number$Action = function (heatmapLayerWidgetIdIn, propertyNameIn, propertValueIn) {
heatmapLayerWidgetIdIn = (heatmapLayerWidgetIdIn === undefined) ? "" : heatmapLayerWidgetIdIn;
propertyNameIn = (propertyNameIn === undefined) ? "" : propertyNameIn;
propertValueIn = (propertValueIn === undefined) ? OS.DataTypes.Decimal.defaultValue : propertValueIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeHeatmapLayerProperty_Number$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(heatmapLayerWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(propertyNameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(propertValueIn, OS.DataTypes.DataTypes.Decimal)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$ChangeHeatmapLayerProperty_Number.ChangePropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.Maps.MapAPI.HeatmapLayerManager.ChangeProperty($parameters.FileLayerWidgetId, $parameters.PropertyName, $parameters.PropertValue)
};
});


define("OutSystemsMaps.controller$ChangeHeatmapLayerProperty_Text", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeHeatmapLayerProperty_Text.ChangePropertyJS"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_ChangeHeatmapLayerProperty_Text_ChangePropertyJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeHeatmapLayerProperty_Text$Action = function (heatmapLayerWidgetIdIn, propertyNameIn, propertValueIn, callContext) {
return OS.Logger.startActiveSpan("ChangeHeatmapLayerProperty_Text", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeHeatmapLayerProperty_Text");
span.setAttribute("outsystems.function.key", "3444dbce-8269-4902-8680-e479c234ee7d");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeHeatmapLayerProperty_Text$vars"))());
vars.value.heatmapLayerWidgetIdInLocal = heatmapLayerWidgetIdIn;
vars.value.propertyNameInLocal = propertyNameIn;
vars.value.propertValueInLocal = propertValueIn;
OS.Logger.startActiveSpan("ChangeProperty", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeProperty");
span.setAttribute("outsystems.function.key", "f0ec21f4-2c02-482c-a099-1d0b433101b9");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_ChangeHeatmapLayerProperty_Text_ChangePropertyJS, "ChangeProperty", "ChangeHeatmapLayerProperty_Text", {
PropertValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertValueInLocal, OS.DataTypes.DataTypes.Text),
FileLayerWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.heatmapLayerWidgetIdInLocal, OS.DataTypes.DataTypes.Text),
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyNameInLocal, OS.DataTypes.DataTypes.Text)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeHeatmapLayerProperty_Text$vars", [{
name: "HeatmapLayerWidgetId",
attrName: "heatmapLayerWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyName",
attrName: "propertyNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertValue",
attrName: "propertValueInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeHeatmapLayerProperty_Text$Action = function (heatmapLayerWidgetIdIn, propertyNameIn, propertValueIn) {
heatmapLayerWidgetIdIn = (heatmapLayerWidgetIdIn === undefined) ? "" : heatmapLayerWidgetIdIn;
propertyNameIn = (propertyNameIn === undefined) ? "" : propertyNameIn;
propertValueIn = (propertValueIn === undefined) ? "" : propertValueIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeHeatmapLayerProperty_Text$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(heatmapLayerWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(propertyNameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(propertValueIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$ChangeHeatmapLayerProperty_Text.ChangePropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.Maps.MapAPI.HeatmapLayerManager.ChangeProperty($parameters.FileLayerWidgetId, $parameters.PropertyName, $parameters.PropertValue)
};
});


define("OutSystemsMaps.controller$ChangeHeatmapLayerRadius", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeHeatmapLayerProperty_Number"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeHeatmapLayerRadius$Action = function (heatmapLayerWidgetIdIn, radiusIn, callContext) {
return OS.Logger.startActiveSpan("ChangeHeatmapLayerRadius", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeHeatmapLayerRadius");
span.setAttribute("outsystems.function.key", "31a95e38-6e83-482c-91c9-1f7add7a3cbc");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeHeatmapLayerRadius$vars"))());
vars.value.heatmapLayerWidgetIdInLocal = heatmapLayerWidgetIdIn;
vars.value.radiusInLocal = radiusIn;
// Execute Action: ChangeHeatmapLayerProperty_Number
OutSystemsMapsController.default.changeHeatmapLayerProperty_Number$Action(vars.value.heatmapLayerWidgetIdInLocal, "radius", OS.BuiltinFunctions.integerToDecimal(vars.value.radiusInLocal), callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeHeatmapLayerRadius$vars", [{
name: "HeatmapLayerWidgetId",
attrName: "heatmapLayerWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Radius",
attrName: "radiusInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeHeatmapLayerRadius$Action = function (heatmapLayerWidgetIdIn, radiusIn) {
heatmapLayerWidgetIdIn = (heatmapLayerWidgetIdIn === undefined) ? "" : heatmapLayerWidgetIdIn;
radiusIn = (radiusIn === undefined) ? 0 : radiusIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeHeatmapLayerRadius$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(heatmapLayerWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(radiusIn, OS.DataTypes.DataTypes.Integer)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeMapAdvancedFormat", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeMapProperty_Text"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeMapAdvancedFormat$Action = function (mapWidgetIdIn, advancedFormatIn, callContext) {
return OS.Logger.startActiveSpan("ChangeMapAdvancedFormat", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeMapAdvancedFormat");
span.setAttribute("outsystems.function.key", "bb15482a-2396-4b18-be21-224d4595a1bf");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeMapAdvancedFormat$vars"))());
vars.value.mapWidgetIdInLocal = mapWidgetIdIn;
vars.value.advancedFormatInLocal = advancedFormatIn;
// Execute Action: ChangeMapProperty_Text
OutSystemsMapsController.default.changeMapProperty_Text$Action(vars.value.mapWidgetIdInLocal, "advancedFormat", vars.value.advancedFormatInLocal, callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeMapAdvancedFormat$vars", [{
name: "MapWidgetId",
attrName: "mapWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "AdvancedFormat",
attrName: "advancedFormatInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeMapAdvancedFormat$Action = function (mapWidgetIdIn, advancedFormatIn) {
mapWidgetIdIn = (mapWidgetIdIn === undefined) ? "" : mapWidgetIdIn;
advancedFormatIn = (advancedFormatIn === undefined) ? "" : advancedFormatIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeMapAdvancedFormat$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(advancedFormatIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeMapApiKey", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeMapProperty_Text"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeMapApiKey$Action = function (mapWidgetIdIn, apiKeyIn, callContext) {
return OS.Logger.startActiveSpan("ChangeMapApiKey", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeMapApiKey");
span.setAttribute("outsystems.function.key", "44efefad-107d-41b5-a1a4-a0010ae59b15");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeMapApiKey$vars"))());
vars.value.mapWidgetIdInLocal = mapWidgetIdIn;
vars.value.apiKeyInLocal = apiKeyIn;
// Execute Action: ChangeMapProperty_Text
OutSystemsMapsController.default.changeMapProperty_Text$Action(vars.value.mapWidgetIdInLocal, "apiKey", vars.value.apiKeyInLocal, callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeMapApiKey$vars", [{
name: "MapWidgetId",
attrName: "mapWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ApiKey",
attrName: "apiKeyInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeMapApiKey$Action = function (mapWidgetIdIn, apiKeyIn) {
mapWidgetIdIn = (mapWidgetIdIn === undefined) ? "" : mapWidgetIdIn;
apiKeyIn = (apiKeyIn === undefined) ? "" : apiKeyIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeMapApiKey$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(apiKeyIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeMapAutoZoomOnShape", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeMapProperty_Boolean"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeMapAutoZoomOnShape$Action = function (mapWidgetIdIn, autoZoomOnShapesIn, callContext) {
return OS.Logger.startActiveSpan("ChangeMapAutoZoomOnShape", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeMapAutoZoomOnShape");
span.setAttribute("outsystems.function.key", "46c41ffe-fff5-4bd9-9f62-82d204624a1a");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeMapAutoZoomOnShape$vars"))());
vars.value.mapWidgetIdInLocal = mapWidgetIdIn;
vars.value.autoZoomOnShapesInLocal = autoZoomOnShapesIn;
// Execute Action: ChangeMapProperty_Boolean
OutSystemsMapsController.default.changeMapProperty_Boolean$Action(vars.value.mapWidgetIdInLocal, "autoZoomOnShapes", vars.value.autoZoomOnShapesInLocal, callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeMapAutoZoomOnShape$vars", [{
name: "MapWidgetId",
attrName: "mapWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "AutoZoomOnShapes",
attrName: "autoZoomOnShapesInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeMapAutoZoomOnShape$Action = function (mapWidgetIdIn, autoZoomOnShapesIn) {
mapWidgetIdIn = (mapWidgetIdIn === undefined) ? "" : mapWidgetIdIn;
autoZoomOnShapesIn = (autoZoomOnShapesIn === undefined) ? false : autoZoomOnShapesIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeMapAutoZoomOnShape$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(autoZoomOnShapesIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeMapLocation", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeMapProperty_Text"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeMapLocation$Action = function (mapWidgetIdIn, newLocationIn, callContext) {
return OS.Logger.startActiveSpan("ChangeMapLocation", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeMapLocation");
span.setAttribute("outsystems.function.key", "fa93fa79-17c1-4911-aedc-7083a86e123d");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeMapLocation$vars"))());
vars.value.mapWidgetIdInLocal = mapWidgetIdIn;
vars.value.newLocationInLocal = newLocationIn;
// Execute Action: ChangeMapProperty_Text
OutSystemsMapsController.default.changeMapProperty_Text$Action(vars.value.mapWidgetIdInLocal, "center", vars.value.newLocationInLocal, callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeMapLocation$vars", [{
name: "MapWidgetId",
attrName: "mapWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "NewLocation",
attrName: "newLocationInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeMapLocation$Action = function (mapWidgetIdIn, newLocationIn) {
mapWidgetIdIn = (mapWidgetIdIn === undefined) ? "" : mapWidgetIdIn;
newLocationIn = (newLocationIn === undefined) ? "" : newLocationIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeMapLocation$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(newLocationIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeMapMarkerClusteringActive", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeMapProperty_Boolean"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeMapMarkerClusteringActive$Action = function (mapWidgetIdIn, activeIn, callContext) {
return OS.Logger.startActiveSpan("ChangeMapMarkerClusteringActive", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeMapMarkerClusteringActive");
span.setAttribute("outsystems.function.key", "5984bd16-f2d2-4863-96a2-f80d0d4775d0");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeMapMarkerClusteringActive$vars"))());
vars.value.mapWidgetIdInLocal = mapWidgetIdIn;
vars.value.activeInLocal = activeIn;
// Execute Action: ChangeMapProperty_Boolean
OutSystemsMapsController.default.changeMapProperty_Boolean$Action(vars.value.mapWidgetIdInLocal, "markerClustererActive", vars.value.activeInLocal, callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeMapMarkerClusteringActive$vars", [{
name: "MapWidgetId",
attrName: "mapWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Active",
attrName: "activeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeMapMarkerClusteringActive$Action = function (mapWidgetIdIn, activeIn) {
mapWidgetIdIn = (mapWidgetIdIn === undefined) ? "" : mapWidgetIdIn;
activeIn = (activeIn === undefined) ? false : activeIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeMapMarkerClusteringActive$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(activeIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeMapMarkerClusteringMaxZoom", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeMapProperty_Number"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeMapMarkerClusteringMaxZoom$Action = function (mapWidgetIdIn, maxZoomIn, callContext) {
return OS.Logger.startActiveSpan("ChangeMapMarkerClusteringMaxZoom", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeMapMarkerClusteringMaxZoom");
span.setAttribute("outsystems.function.key", "c79c5cdd-20f7-467a-b4f3-c669a204f788");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeMapMarkerClusteringMaxZoom$vars"))());
vars.value.mapWidgetIdInLocal = mapWidgetIdIn;
vars.value.maxZoomInLocal = maxZoomIn;
// Execute Action: ChangeMapProperty_Number
OutSystemsMapsController.default.changeMapProperty_Number$Action(vars.value.mapWidgetIdInLocal, "markerClustererMaxZoom", OS.BuiltinFunctions.integerToDecimal(vars.value.maxZoomInLocal), callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeMapMarkerClusteringMaxZoom$vars", [{
name: "MapWidgetId",
attrName: "mapWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "MaxZoom",
attrName: "maxZoomInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeMapMarkerClusteringMaxZoom$Action = function (mapWidgetIdIn, maxZoomIn) {
mapWidgetIdIn = (mapWidgetIdIn === undefined) ? "" : mapWidgetIdIn;
maxZoomIn = (maxZoomIn === undefined) ? 0 : maxZoomIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeMapMarkerClusteringMaxZoom$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapWidgetIdIn, OS.DataTypes.DataTypes.Text), maxZoomIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeMapMarkerClusteringMinClusterSize", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeMapProperty_Number"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeMapMarkerClusteringMinClusterSize$Action = function (mapWidgetIdIn, minClusterSizeIn, callContext) {
return OS.Logger.startActiveSpan("ChangeMapMarkerClusteringMinClusterSize", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeMapMarkerClusteringMinClusterSize");
span.setAttribute("outsystems.function.key", "fd6fc57b-c5dd-4da1-9a66-8b08c6548676");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeMapMarkerClusteringMinClusterSize$vars"))());
vars.value.mapWidgetIdInLocal = mapWidgetIdIn;
vars.value.minClusterSizeInLocal = minClusterSizeIn;
// Execute Action: ChangeMapProperty_Number
OutSystemsMapsController.default.changeMapProperty_Number$Action(vars.value.mapWidgetIdInLocal, "markerClustererMinClusterSize", OS.BuiltinFunctions.integerToDecimal(vars.value.minClusterSizeInLocal), callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeMapMarkerClusteringMinClusterSize$vars", [{
name: "MapWidgetId",
attrName: "mapWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "MinClusterSize",
attrName: "minClusterSizeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeMapMarkerClusteringMinClusterSize$Action = function (mapWidgetIdIn, minClusterSizeIn) {
mapWidgetIdIn = (mapWidgetIdIn === undefined) ? "" : mapWidgetIdIn;
minClusterSizeIn = (minClusterSizeIn === undefined) ? 0 : minClusterSizeIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeMapMarkerClusteringMinClusterSize$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(minClusterSizeIn, OS.DataTypes.DataTypes.Integer)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeMapMarkerClusteringZoomOnClick", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeMapProperty_Boolean"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeMapMarkerClusteringZoomOnClick$Action = function (mapWidgetIdIn, zoomOnClickIn, callContext) {
return OS.Logger.startActiveSpan("ChangeMapMarkerClusteringZoomOnClick", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeMapMarkerClusteringZoomOnClick");
span.setAttribute("outsystems.function.key", "441996ea-435c-4b05-a23d-7419857e5ba9");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeMapMarkerClusteringZoomOnClick$vars"))());
vars.value.mapWidgetIdInLocal = mapWidgetIdIn;
vars.value.zoomOnClickInLocal = zoomOnClickIn;
// Execute Action: ChangeMapProperty_Boolean
OutSystemsMapsController.default.changeMapProperty_Boolean$Action(vars.value.mapWidgetIdInLocal, "markerClustererZoomOnClick", vars.value.zoomOnClickInLocal, callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeMapMarkerClusteringZoomOnClick$vars", [{
name: "MapWidgetId",
attrName: "mapWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ZoomOnClick",
attrName: "zoomOnClickInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeMapMarkerClusteringZoomOnClick$Action = function (mapWidgetIdIn, zoomOnClickIn) {
mapWidgetIdIn = (mapWidgetIdIn === undefined) ? "" : mapWidgetIdIn;
zoomOnClickIn = (zoomOnClickIn === undefined) ? false : zoomOnClickIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeMapMarkerClusteringZoomOnClick$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(zoomOnClickIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeMapOffset", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeMapProperty_Text", "OutSystemsMaps.model$ST_be62cc31fbe4705834275960beeb55e2Structure"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeMapOffset$Action = function (mapWidgetIdIn, offsetIn, callContext) {
return OS.Logger.startActiveSpan("ChangeMapOffset", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeMapOffset");
span.setAttribute("outsystems.function.key", "e28c41f7-286f-4558-84ea-8a39e25f94e9");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeMapOffset$vars"))());
vars.value.mapWidgetIdInLocal = mapWidgetIdIn;
vars.value.offsetInLocal = offsetIn.clone();
var serializeOffsetVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
// JSON Serialize: SerializeOffset
serializeOffsetVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.offsetInLocal, true, false);
// Execute Action: ChangeMapProperty_Text
OutSystemsMapsController.default.changeMapProperty_Text$Action(vars.value.mapWidgetIdInLocal, "offset", serializeOffsetVar.value.jSONOut, callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeMapOffset$vars", [{
name: "MapWidgetId",
attrName: "mapWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Offset",
attrName: "offsetInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new OutSystemsMapsModel.ST_be62cc31fbe4705834275960beeb55e2Structure();
},
complexType: OutSystemsMapsModel.ST_be62cc31fbe4705834275960beeb55e2Structure
}]);
OutSystemsMapsController.default.clientActionProxies.changeMapOffset$Action = function (mapWidgetIdIn, offsetIn) {
mapWidgetIdIn = (mapWidgetIdIn === undefined) ? "" : mapWidgetIdIn;
offsetIn = (offsetIn === undefined) ? new OutSystemsMapsModel.ST_be62cc31fbe4705834275960beeb55e2Structure() : offsetIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeMapOffset$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapWidgetIdIn, OS.DataTypes.DataTypes.Text), offsetIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeMapProperty_Boolean", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeMapProperty_Boolean.ChangePropertyJS"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_ChangeMapProperty_Boolean_ChangePropertyJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeMapProperty_Boolean$Action = function (mapWidgetIdIn, propertyNameIn, propertValueIn, callContext) {
return OS.Logger.startActiveSpan("ChangeMapProperty_Boolean", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeMapProperty_Boolean");
span.setAttribute("outsystems.function.key", "c4f630e9-3d0b-4440-a4eb-2a5eadc9cedc");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeMapProperty_Boolean$vars"))());
vars.value.mapWidgetIdInLocal = mapWidgetIdIn;
vars.value.propertyNameInLocal = propertyNameIn;
vars.value.propertValueInLocal = propertValueIn;
OS.Logger.startActiveSpan("ChangeProperty", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeProperty");
span.setAttribute("outsystems.function.key", "12123596-fdd1-4c3d-b918-ad2d0bf5b865");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_ChangeMapProperty_Boolean_ChangePropertyJS, "ChangeProperty", "ChangeMapProperty_Boolean", {
MapWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.mapWidgetIdInLocal, OS.DataTypes.DataTypes.Text),
PropertValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertValueInLocal, OS.DataTypes.DataTypes.Boolean),
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyNameInLocal, OS.DataTypes.DataTypes.Text)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeMapProperty_Boolean$vars", [{
name: "MapWidgetId",
attrName: "mapWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyName",
attrName: "propertyNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertValue",
attrName: "propertValueInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeMapProperty_Boolean$Action = function (mapWidgetIdIn, propertyNameIn, propertValueIn) {
mapWidgetIdIn = (mapWidgetIdIn === undefined) ? "" : mapWidgetIdIn;
propertyNameIn = (propertyNameIn === undefined) ? "" : propertyNameIn;
propertValueIn = (propertValueIn === undefined) ? false : propertValueIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeMapProperty_Boolean$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(propertyNameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(propertValueIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$ChangeMapProperty_Boolean.ChangePropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.Maps.MapAPI.MapManager.ChangeProperty($parameters.MapWidgetId, $parameters.PropertyName, $parameters.PropertValue)
};
});


define("OutSystemsMaps.controller$ChangeMapProperty_Number", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeMapProperty_Number.ChangePropertyJS"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_ChangeMapProperty_Number_ChangePropertyJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeMapProperty_Number$Action = function (mapWidgetIdIn, propertyNameIn, propertValueIn, callContext) {
return OS.Logger.startActiveSpan("ChangeMapProperty_Number", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeMapProperty_Number");
span.setAttribute("outsystems.function.key", "e714a9dd-6a45-4ca3-af1e-0388d47befa6");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeMapProperty_Number$vars"))());
vars.value.mapWidgetIdInLocal = mapWidgetIdIn;
vars.value.propertyNameInLocal = propertyNameIn;
vars.value.propertValueInLocal = propertValueIn;
OS.Logger.startActiveSpan("ChangeProperty", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeProperty");
span.setAttribute("outsystems.function.key", "8ccc82cf-f753-4031-8d83-4b66506d18ac");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_ChangeMapProperty_Number_ChangePropertyJS, "ChangeProperty", "ChangeMapProperty_Number", {
MapWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.mapWidgetIdInLocal, OS.DataTypes.DataTypes.Text),
PropertValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertValueInLocal, OS.DataTypes.DataTypes.Decimal),
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyNameInLocal, OS.DataTypes.DataTypes.Text)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeMapProperty_Number$vars", [{
name: "MapWidgetId",
attrName: "mapWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyName",
attrName: "propertyNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertValue",
attrName: "propertValueInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeMapProperty_Number$Action = function (mapWidgetIdIn, propertyNameIn, propertValueIn) {
mapWidgetIdIn = (mapWidgetIdIn === undefined) ? "" : mapWidgetIdIn;
propertyNameIn = (propertyNameIn === undefined) ? "" : propertyNameIn;
propertValueIn = (propertValueIn === undefined) ? OS.DataTypes.Decimal.defaultValue : propertValueIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeMapProperty_Number$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(propertyNameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(propertValueIn, OS.DataTypes.DataTypes.Decimal)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$ChangeMapProperty_Number.ChangePropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.Maps.MapAPI.MapManager.ChangeProperty($parameters.MapWidgetId, $parameters.PropertyName, $parameters.PropertValue)
};
});


define("OutSystemsMaps.controller$ChangeMapProperty_Text", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeMapProperty_Text.ChangePropertyJS"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_ChangeMapProperty_Text_ChangePropertyJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeMapProperty_Text$Action = function (mapWidgetIdIn, propertyNameIn, propertValueIn, callContext) {
return OS.Logger.startActiveSpan("ChangeMapProperty_Text", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeMapProperty_Text");
span.setAttribute("outsystems.function.key", "5546fa72-fac6-4d1b-bb19-f03d32b1fc07");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeMapProperty_Text$vars"))());
vars.value.mapWidgetIdInLocal = mapWidgetIdIn;
vars.value.propertyNameInLocal = propertyNameIn;
vars.value.propertValueInLocal = propertValueIn;
OS.Logger.startActiveSpan("ChangeProperty", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeProperty");
span.setAttribute("outsystems.function.key", "13ddfb35-c9aa-4ea4-935b-e73f01c51b9c");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_ChangeMapProperty_Text_ChangePropertyJS, "ChangeProperty", "ChangeMapProperty_Text", {
MapWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.mapWidgetIdInLocal, OS.DataTypes.DataTypes.Text),
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyNameInLocal, OS.DataTypes.DataTypes.Text),
PropertValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertValueInLocal, OS.DataTypes.DataTypes.Text)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeMapProperty_Text$vars", [{
name: "MapWidgetId",
attrName: "mapWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyName",
attrName: "propertyNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertValue",
attrName: "propertValueInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeMapProperty_Text$Action = function (mapWidgetIdIn, propertyNameIn, propertValueIn) {
mapWidgetIdIn = (mapWidgetIdIn === undefined) ? "" : mapWidgetIdIn;
propertyNameIn = (propertyNameIn === undefined) ? "" : propertyNameIn;
propertValueIn = (propertValueIn === undefined) ? "" : propertValueIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeMapProperty_Text$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(propertyNameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(propertValueIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$ChangeMapProperty_Text.ChangePropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.Maps.MapAPI.MapManager.ChangeProperty($parameters.MapWidgetId, $parameters.PropertyName, $parameters.PropertValue)
};
});


define("OutSystemsMaps.controller$ChangeMapRespectUserZoom", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeMapProperty_Boolean"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeMapRespectUserZoom$Action = function (mapWidgetIdIn, newRespectUserZoomIn, callContext) {
return OS.Logger.startActiveSpan("ChangeMapRespectUserZoom", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeMapRespectUserZoom");
span.setAttribute("outsystems.function.key", "c5b95cfb-9cfc-4c88-b989-d31c67a7eb3b");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeMapRespectUserZoom$vars"))());
vars.value.mapWidgetIdInLocal = mapWidgetIdIn;
vars.value.newRespectUserZoomInLocal = newRespectUserZoomIn;
// Execute Action: ChangeMapProperty_Boolean
OutSystemsMapsController.default.changeMapProperty_Boolean$Action(vars.value.mapWidgetIdInLocal, "respectUserZoom", vars.value.newRespectUserZoomInLocal, callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeMapRespectUserZoom$vars", [{
name: "MapWidgetId",
attrName: "mapWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "NewRespectUserZoom",
attrName: "newRespectUserZoomInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeMapRespectUserZoom$Action = function (mapWidgetIdIn, newRespectUserZoomIn) {
mapWidgetIdIn = (mapWidgetIdIn === undefined) ? "" : mapWidgetIdIn;
newRespectUserZoomIn = (newRespectUserZoomIn === undefined) ? false : newRespectUserZoomIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeMapRespectUserZoom$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(newRespectUserZoomIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeMapShowTraffic", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeMapProperty_Boolean"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeMapShowTraffic$Action = function (mapWidgetIdIn, showTrafficIn, callContext) {
return OS.Logger.startActiveSpan("ChangeMapShowTraffic", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeMapShowTraffic");
span.setAttribute("outsystems.function.key", "4e5e576a-f9ea-4d6d-9a79-ded5972f1798");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeMapShowTraffic$vars"))());
vars.value.mapWidgetIdInLocal = mapWidgetIdIn;
vars.value.showTrafficInLocal = showTrafficIn;
// Execute Action: ChangeMapProperty_Boolean
OutSystemsMapsController.default.changeMapProperty_Boolean$Action(vars.value.mapWidgetIdInLocal, "showTraffic", vars.value.showTrafficInLocal, callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeMapShowTraffic$vars", [{
name: "MapWidgetId",
attrName: "mapWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ShowTraffic",
attrName: "showTrafficInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeMapShowTraffic$Action = function (mapWidgetIdIn, showTrafficIn) {
mapWidgetIdIn = (mapWidgetIdIn === undefined) ? "" : mapWidgetIdIn;
showTrafficIn = (showTrafficIn === undefined) ? false : showTrafficIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeMapShowTraffic$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(showTrafficIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeMapStyle", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeMapProperty_Number"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeMapStyle$Action = function (mapWidgetIdIn, styleIdIn, callContext) {
return OS.Logger.startActiveSpan("ChangeMapStyle", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeMapStyle");
span.setAttribute("outsystems.function.key", "14a150df-80f7-453b-90ab-f39dcf461ff1");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeMapStyle$vars"))());
vars.value.mapWidgetIdInLocal = mapWidgetIdIn;
vars.value.styleIdInLocal = styleIdIn;
// Execute Action: ChangeMapProperty_Number
OutSystemsMapsController.default.changeMapProperty_Number$Action(vars.value.mapWidgetIdInLocal, "style", OS.BuiltinFunctions.integerToDecimal(vars.value.styleIdInLocal), callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeMapStyle$vars", [{
name: "MapWidgetId",
attrName: "mapWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "StyleId",
attrName: "styleIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeMapStyle$Action = function (mapWidgetIdIn, styleIdIn) {
mapWidgetIdIn = (mapWidgetIdIn === undefined) ? "" : mapWidgetIdIn;
styleIdIn = (styleIdIn === undefined) ? 0 : styleIdIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeMapStyle$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapWidgetIdIn, OS.DataTypes.DataTypes.Text), styleIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeMapType", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeMapProperty_Text"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeMapType$Action = function (mapWidgetIdIn, typeIdIn, callContext) {
return OS.Logger.startActiveSpan("ChangeMapType", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeMapType");
span.setAttribute("outsystems.function.key", "7ca5e99e-22e4-4058-8060-425b76a226cd");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeMapType$vars"))());
vars.value.mapWidgetIdInLocal = mapWidgetIdIn;
vars.value.typeIdInLocal = typeIdIn;
// Execute Action: ChangeMapProperty_Text
OutSystemsMapsController.default.changeMapProperty_Text$Action(vars.value.mapWidgetIdInLocal, "type", vars.value.typeIdInLocal, callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeMapType$vars", [{
name: "MapWidgetId",
attrName: "mapWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "TypeId",
attrName: "typeIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeMapType$Action = function (mapWidgetIdIn, typeIdIn) {
mapWidgetIdIn = (mapWidgetIdIn === undefined) ? "" : mapWidgetIdIn;
typeIdIn = (typeIdIn === undefined) ? "" : typeIdIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeMapType$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapWidgetIdIn, OS.DataTypes.DataTypes.Text), typeIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeMapZoom", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeMapProperty_Number"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeMapZoom$Action = function (mapWidgetIdIn, zoomIdIn, callContext) {
return OS.Logger.startActiveSpan("ChangeMapZoom", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeMapZoom");
span.setAttribute("outsystems.function.key", "7a20d7af-6008-4090-a030-6fd87738462f");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeMapZoom$vars"))());
vars.value.mapWidgetIdInLocal = mapWidgetIdIn;
vars.value.zoomIdInLocal = zoomIdIn;
// Execute Action: ChangeMapProperty_Number
OutSystemsMapsController.default.changeMapProperty_Number$Action(vars.value.mapWidgetIdInLocal, "zoom", OS.BuiltinFunctions.integerToDecimal(vars.value.zoomIdInLocal), callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeMapZoom$vars", [{
name: "MapWidgetId",
attrName: "mapWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ZoomId",
attrName: "zoomIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeMapZoom$Action = function (mapWidgetIdIn, zoomIdIn) {
mapWidgetIdIn = (mapWidgetIdIn === undefined) ? "" : mapWidgetIdIn;
zoomIdIn = (zoomIdIn === undefined) ? 0 : zoomIdIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeMapZoom$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapWidgetIdIn, OS.DataTypes.DataTypes.Text), zoomIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeMarkerAllowDrag", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeMarkerProperty_Boolean"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeMarkerAllowDrag$Action = function (markerWidgetIdIn, allowDragIn, callContext) {
return OS.Logger.startActiveSpan("ChangeMarkerAllowDrag", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeMarkerAllowDrag");
span.setAttribute("outsystems.function.key", "305bb70b-ed6b-49b0-9c01-a809128977b7");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeMarkerAllowDrag$vars"))());
vars.value.markerWidgetIdInLocal = markerWidgetIdIn;
vars.value.allowDragInLocal = allowDragIn;
// Execute Action: ChangeMarkerProperty_Boolean
OutSystemsMapsController.default.changeMarkerProperty_Boolean$Action(vars.value.markerWidgetIdInLocal, "allowDrag", vars.value.allowDragInLocal, callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeMarkerAllowDrag$vars", [{
name: "MarkerWidgetId",
attrName: "markerWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "AllowDrag",
attrName: "allowDragInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeMarkerAllowDrag$Action = function (markerWidgetIdIn, allowDragIn) {
markerWidgetIdIn = (markerWidgetIdIn === undefined) ? "" : markerWidgetIdIn;
allowDragIn = (allowDragIn === undefined) ? false : allowDragIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeMarkerAllowDrag$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(markerWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(allowDragIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeMarkerIconHeight", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeMarkerProperty_Number"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeMarkerIconHeight$Action = function (markerWidgetIdIn, newIconHeightIn, callContext) {
return OS.Logger.startActiveSpan("ChangeMarkerIconHeight", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeMarkerIconHeight");
span.setAttribute("outsystems.function.key", "25fdf49a-f476-4f9a-b915-15fa6899f85b");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeMarkerIconHeight$vars"))());
vars.value.markerWidgetIdInLocal = markerWidgetIdIn;
vars.value.newIconHeightInLocal = newIconHeightIn;
// Execute Action: ChangeMarkerProperty_Number
OutSystemsMapsController.default.changeMarkerProperty_Number$Action(vars.value.markerWidgetIdInLocal, "iconHeight", OS.BuiltinFunctions.integerToDecimal(vars.value.newIconHeightInLocal), callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeMarkerIconHeight$vars", [{
name: "MarkerWidgetId",
attrName: "markerWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "NewIconHeight",
attrName: "newIconHeightInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeMarkerIconHeight$Action = function (markerWidgetIdIn, newIconHeightIn) {
markerWidgetIdIn = (markerWidgetIdIn === undefined) ? "" : markerWidgetIdIn;
newIconHeightIn = (newIconHeightIn === undefined) ? 0 : newIconHeightIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeMarkerIconHeight$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(markerWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(newIconHeightIn, OS.DataTypes.DataTypes.Integer)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeMarkerIconUrl", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeMarkerProperty_Text"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeMarkerIconUrl$Action = function (markerWidgetIdIn, newIconUrlIn, callContext) {
return OS.Logger.startActiveSpan("ChangeMarkerIconUrl", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeMarkerIconUrl");
span.setAttribute("outsystems.function.key", "4aa4b06e-6be1-4f29-bd75-15d511f2063a");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeMarkerIconUrl$vars"))());
vars.value.markerWidgetIdInLocal = markerWidgetIdIn;
vars.value.newIconUrlInLocal = newIconUrlIn;
// Execute Action: ChangeMarkerProperty_Text
OutSystemsMapsController.default.changeMarkerProperty_Text$Action(vars.value.markerWidgetIdInLocal, "iconUrl", vars.value.newIconUrlInLocal, callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeMarkerIconUrl$vars", [{
name: "MarkerWidgetId",
attrName: "markerWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "NewIconUrl",
attrName: "newIconUrlInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeMarkerIconUrl$Action = function (markerWidgetIdIn, newIconUrlIn) {
markerWidgetIdIn = (markerWidgetIdIn === undefined) ? "" : markerWidgetIdIn;
newIconUrlIn = (newIconUrlIn === undefined) ? "" : newIconUrlIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeMarkerIconUrl$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(markerWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(newIconUrlIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeMarkerIconWidth", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeMarkerProperty_Number"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeMarkerIconWidth$Action = function (markerWidgetIdIn, newIconWidthIn, callContext) {
return OS.Logger.startActiveSpan("ChangeMarkerIconWidth", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeMarkerIconWidth");
span.setAttribute("outsystems.function.key", "7fe513fb-2526-4581-b8e7-a6008d797963");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeMarkerIconWidth$vars"))());
vars.value.markerWidgetIdInLocal = markerWidgetIdIn;
vars.value.newIconWidthInLocal = newIconWidthIn;
// Execute Action: ChangeMarkerProperty_Number
OutSystemsMapsController.default.changeMarkerProperty_Number$Action(vars.value.markerWidgetIdInLocal, "iconWidth", OS.BuiltinFunctions.integerToDecimal(vars.value.newIconWidthInLocal), callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeMarkerIconWidth$vars", [{
name: "MarkerWidgetId",
attrName: "markerWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "NewIconWidth",
attrName: "newIconWidthInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeMarkerIconWidth$Action = function (markerWidgetIdIn, newIconWidthIn) {
markerWidgetIdIn = (markerWidgetIdIn === undefined) ? "" : markerWidgetIdIn;
newIconWidthIn = (newIconWidthIn === undefined) ? 0 : newIconWidthIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeMarkerIconWidth$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(markerWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(newIconWidthIn, OS.DataTypes.DataTypes.Integer)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeMarkerLabel", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeMarkerProperty_Text"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeMarkerLabel$Action = function (markerWidgetIdIn, labelIn, callContext) {
return OS.Logger.startActiveSpan("ChangeMarkerLabel", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeMarkerLabel");
span.setAttribute("outsystems.function.key", "9a4704a8-b697-4859-96ab-d6ea0ce4fd61");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeMarkerLabel$vars"))());
vars.value.markerWidgetIdInLocal = markerWidgetIdIn;
vars.value.labelInLocal = labelIn;
// Execute Action: ChangeMarkerProperty_Text
OutSystemsMapsController.default.changeMarkerProperty_Text$Action(vars.value.markerWidgetIdInLocal, "label", vars.value.labelInLocal, callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeMarkerLabel$vars", [{
name: "MarkerWidgetId",
attrName: "markerWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Label",
attrName: "labelInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeMarkerLabel$Action = function (markerWidgetIdIn, labelIn) {
markerWidgetIdIn = (markerWidgetIdIn === undefined) ? "" : markerWidgetIdIn;
labelIn = (labelIn === undefined) ? "" : labelIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeMarkerLabel$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(markerWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(labelIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeMarkerLocation", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeMarkerProperty_Text"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeMarkerLocation$Action = function (markerWidgetIdIn, newLocationIn, callContext) {
return OS.Logger.startActiveSpan("ChangeMarkerLocation", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeMarkerLocation");
span.setAttribute("outsystems.function.key", "7c5b4afe-83f2-41a4-9963-20b97131116c");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeMarkerLocation$vars"))());
vars.value.markerWidgetIdInLocal = markerWidgetIdIn;
vars.value.newLocationInLocal = newLocationIn;
// Execute Action: ChangeMarkerProperty_Text
OutSystemsMapsController.default.changeMarkerProperty_Text$Action(vars.value.markerWidgetIdInLocal, "location", vars.value.newLocationInLocal, callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeMarkerLocation$vars", [{
name: "MarkerWidgetId",
attrName: "markerWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "NewLocation",
attrName: "newLocationInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeMarkerLocation$Action = function (markerWidgetIdIn, newLocationIn) {
markerWidgetIdIn = (markerWidgetIdIn === undefined) ? "" : markerWidgetIdIn;
newLocationIn = (newLocationIn === undefined) ? "" : newLocationIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeMarkerLocation$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(markerWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(newLocationIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeMarkerProperty_Boolean", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeMarkerProperty_Boolean.ChangePropertyJS"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_ChangeMarkerProperty_Boolean_ChangePropertyJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeMarkerProperty_Boolean$Action = function (markerWidgetIdIn, propertyNameIn, propertValueIn, callContext) {
return OS.Logger.startActiveSpan("ChangeMarkerProperty_Boolean", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeMarkerProperty_Boolean");
span.setAttribute("outsystems.function.key", "1cb14ccf-d00c-4194-9e96-321dbbbb4328");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeMarkerProperty_Boolean$vars"))());
vars.value.markerWidgetIdInLocal = markerWidgetIdIn;
vars.value.propertyNameInLocal = propertyNameIn;
vars.value.propertValueInLocal = propertValueIn;
OS.Logger.startActiveSpan("ChangeProperty", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeProperty");
span.setAttribute("outsystems.function.key", "66d3553d-65a4-41e0-a67b-a6dadc15da07");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_ChangeMarkerProperty_Boolean_ChangePropertyJS, "ChangeProperty", "ChangeMarkerProperty_Boolean", {
MarkerWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.markerWidgetIdInLocal, OS.DataTypes.DataTypes.Text),
PropertValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertValueInLocal, OS.DataTypes.DataTypes.Boolean),
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyNameInLocal, OS.DataTypes.DataTypes.Text)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeMarkerProperty_Boolean$vars", [{
name: "MarkerWidgetId",
attrName: "markerWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyName",
attrName: "propertyNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertValue",
attrName: "propertValueInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeMarkerProperty_Boolean$Action = function (markerWidgetIdIn, propertyNameIn, propertValueIn) {
markerWidgetIdIn = (markerWidgetIdIn === undefined) ? "" : markerWidgetIdIn;
propertyNameIn = (propertyNameIn === undefined) ? "" : propertyNameIn;
propertValueIn = (propertValueIn === undefined) ? false : propertValueIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeMarkerProperty_Boolean$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(markerWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(propertyNameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(propertValueIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$ChangeMarkerProperty_Boolean.ChangePropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.Maps.MapAPI.MarkerManager.ChangeProperty($parameters.MarkerWidgetId, $parameters.PropertyName, $parameters.PropertValue)
};
});


define("OutSystemsMaps.controller$ChangeMarkerProperty_Number", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeMarkerProperty_Number.ChangePropertyJS"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_ChangeMarkerProperty_Number_ChangePropertyJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeMarkerProperty_Number$Action = function (markerWidgetIdIn, propertyNameIn, propertValueIn, callContext) {
return OS.Logger.startActiveSpan("ChangeMarkerProperty_Number", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeMarkerProperty_Number");
span.setAttribute("outsystems.function.key", "899915ca-134b-4e5e-963a-2a3b7aad3452");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeMarkerProperty_Number$vars"))());
vars.value.markerWidgetIdInLocal = markerWidgetIdIn;
vars.value.propertyNameInLocal = propertyNameIn;
vars.value.propertValueInLocal = propertValueIn;
OS.Logger.startActiveSpan("ChangeProperty", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeProperty");
span.setAttribute("outsystems.function.key", "d4abf1a1-b51d-49fb-b961-459d1ae816b4");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_ChangeMarkerProperty_Number_ChangePropertyJS, "ChangeProperty", "ChangeMarkerProperty_Number", {
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyNameInLocal, OS.DataTypes.DataTypes.Text),
PropertValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertValueInLocal, OS.DataTypes.DataTypes.Decimal),
MarkerWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.markerWidgetIdInLocal, OS.DataTypes.DataTypes.Text)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeMarkerProperty_Number$vars", [{
name: "MarkerWidgetId",
attrName: "markerWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyName",
attrName: "propertyNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertValue",
attrName: "propertValueInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeMarkerProperty_Number$Action = function (markerWidgetIdIn, propertyNameIn, propertValueIn) {
markerWidgetIdIn = (markerWidgetIdIn === undefined) ? "" : markerWidgetIdIn;
propertyNameIn = (propertyNameIn === undefined) ? "" : propertyNameIn;
propertValueIn = (propertValueIn === undefined) ? OS.DataTypes.Decimal.defaultValue : propertValueIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeMarkerProperty_Number$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(markerWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(propertyNameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(propertValueIn, OS.DataTypes.DataTypes.Decimal)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$ChangeMarkerProperty_Number.ChangePropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.Maps.MapAPI.MarkerManager.ChangeProperty($parameters.MarkerWidgetId, $parameters.PropertyName, $parameters.PropertValue)
};
});


define("OutSystemsMaps.controller$ChangeMarkerProperty_Text", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeMarkerProperty_Text.ChangePropertyJS"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_ChangeMarkerProperty_Text_ChangePropertyJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeMarkerProperty_Text$Action = function (mapWidgetIdIn, propertyNameIn, propertValueIn, callContext) {
return OS.Logger.startActiveSpan("ChangeMarkerProperty_Text", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeMarkerProperty_Text");
span.setAttribute("outsystems.function.key", "56843ecc-27b7-49e5-aabe-6ffa4f062c96");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeMarkerProperty_Text$vars"))());
vars.value.mapWidgetIdInLocal = mapWidgetIdIn;
vars.value.propertyNameInLocal = propertyNameIn;
vars.value.propertValueInLocal = propertValueIn;
OS.Logger.startActiveSpan("ChangeProperty", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeProperty");
span.setAttribute("outsystems.function.key", "9f777405-461f-46eb-8d16-0ab513c4698f");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_ChangeMarkerProperty_Text_ChangePropertyJS, "ChangeProperty", "ChangeMarkerProperty_Text", {
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyNameInLocal, OS.DataTypes.DataTypes.Text),
PropertValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertValueInLocal, OS.DataTypes.DataTypes.Text),
MarkerWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.mapWidgetIdInLocal, OS.DataTypes.DataTypes.Text)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeMarkerProperty_Text$vars", [{
name: "MapWidgetId",
attrName: "mapWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyName",
attrName: "propertyNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertValue",
attrName: "propertValueInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeMarkerProperty_Text$Action = function (mapWidgetIdIn, propertyNameIn, propertValueIn) {
mapWidgetIdIn = (mapWidgetIdIn === undefined) ? "" : mapWidgetIdIn;
propertyNameIn = (propertyNameIn === undefined) ? "" : propertyNameIn;
propertValueIn = (propertValueIn === undefined) ? "" : propertValueIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeMarkerProperty_Text$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(propertyNameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(propertValueIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$ChangeMarkerProperty_Text.ChangePropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.Maps.MapAPI.MarkerManager.ChangeProperty($parameters.MarkerWidgetId, $parameters.PropertyName, $parameters.PropertValue)
};
});


define("OutSystemsMaps.controller$ChangeMarkers", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.model$ST_5a7ef7acf3b11e0c41074aefa2466f75Structure", "OutSystemsMaps.controller$CreateMarker", "OutSystemsMaps.model$ST_f8c2d1b69d03ea90c73e9f07e7d98bf0Structure", "OutSystemsMaps.controller$RemoveAllMarkers", "OutSystemsMaps.model$RL_78b384ffc67b2b6c5ffe17e2f3a3c3b2"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeMarkers$Action = function (mapWidgetIdIn, markersIn, callContext) {
return OS.Logger.startActiveSpan("ChangeMarkers", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeMarkers");
span.setAttribute("outsystems.function.key", "4e64396a-73f1-402b-b996-fca0e831e462");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

return OS.Flow.tryFinally(function () {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeMarkers$vars"))());
vars.value.mapWidgetIdInLocal = mapWidgetIdIn;
vars.value.markersInLocal = markersIn.clone();
var removeMarkersVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: RemoveMarkers
return OutSystemsMapsController.default.removeAllMarkers$Action(vars.value.mapWidgetIdInLocal, callContext).then(function (value) {
removeMarkersVar.value = value;
}).then(function () {
// Foreach Markers
callContext.iterationContext.registerIterationStart(vars.value.markersInLocal);
}).then(function () {
try {var markersIterator = callContext.iterationContext.getIterator(vars.value.markersInLocal);
var markersIndex = 0;
while (((markersIndex < vars.value.markersInLocal.length))) {
markersIterator.currentRowNumber = markersIndex;
// Execute Action: CreateMarker
OutSystemsMapsController.default.createMarker$Action(vars.value.mapWidgetIdInLocal, "", vars.value.markersInLocal.getItem(markersIndex.valueOf()), callContext);
markersIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(vars.value.markersInLocal);
}

});
}).then(function () {
return ;
});
}, function () {
if(span) {
span.end();
}

});
}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeMarkers$vars", [{
name: "MapWidgetId",
attrName: "mapWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Markers",
attrName: "markersInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new OutSystemsMapsModel.RL_78b384ffc67b2b6c5ffe17e2f3a3c3b2();
},
complexType: OutSystemsMapsModel.RL_78b384ffc67b2b6c5ffe17e2f3a3c3b2
}]);
OutSystemsMapsController.default.clientActionProxies.changeMarkers$Action = function (mapWidgetIdIn, markersIn) {
mapWidgetIdIn = (mapWidgetIdIn === undefined) ? "" : mapWidgetIdIn;
markersIn = (markersIn === undefined) ? new OutSystemsMapsModel.RL_78b384ffc67b2b6c5ffe17e2f3a3c3b2() : markersIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeMarkers$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapWidgetIdIn, OS.DataTypes.DataTypes.Text), markersIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeMarkerTitle", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeMarkerProperty_Text"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeMarkerTitle$Action = function (markerWidgetIdIn, titleIn, callContext) {
return OS.Logger.startActiveSpan("ChangeMarkerTitle", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeMarkerTitle");
span.setAttribute("outsystems.function.key", "b32211ef-b7e9-40f2-804b-d590d51a40e7");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeMarkerTitle$vars"))());
vars.value.markerWidgetIdInLocal = markerWidgetIdIn;
vars.value.titleInLocal = titleIn;
// Execute Action: ChangeMarkerProperty_Text
OutSystemsMapsController.default.changeMarkerProperty_Text$Action(vars.value.markerWidgetIdInLocal, "title", vars.value.titleInLocal, callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeMarkerTitle$vars", [{
name: "MarkerWidgetId",
attrName: "markerWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Title",
attrName: "titleInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeMarkerTitle$Action = function (markerWidgetIdIn, titleIn) {
markerWidgetIdIn = (markerWidgetIdIn === undefined) ? "" : markerWidgetIdIn;
titleIn = (titleIn === undefined) ? "" : titleIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeMarkerTitle$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(markerWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(titleIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeSearchPlacesApiKey", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeSearchPlacesProperty_Text"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeSearchPlacesApiKey$Action = function (searchPlacesWidgetIdIn, apiKeyIn, callContext) {
return OS.Logger.startActiveSpan("ChangeSearchPlacesApiKey", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeSearchPlacesApiKey");
span.setAttribute("outsystems.function.key", "be02836e-e401-4dc4-a049-5c3bff6b07c2");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeSearchPlacesApiKey$vars"))());
vars.value.searchPlacesWidgetIdInLocal = searchPlacesWidgetIdIn;
vars.value.apiKeyInLocal = apiKeyIn;
// Execute Action: ChangeSearchPlacesProperty_Text
OutSystemsMapsController.default.changeSearchPlacesProperty_Text$Action(vars.value.searchPlacesWidgetIdInLocal, "apiKey", vars.value.apiKeyInLocal, callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeSearchPlacesApiKey$vars", [{
name: "SearchPlacesWidgetId",
attrName: "searchPlacesWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ApiKey",
attrName: "apiKeyInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeSearchPlacesApiKey$Action = function (searchPlacesWidgetIdIn, apiKeyIn) {
searchPlacesWidgetIdIn = (searchPlacesWidgetIdIn === undefined) ? "" : searchPlacesWidgetIdIn;
apiKeyIn = (apiKeyIn === undefined) ? "" : apiKeyIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeSearchPlacesApiKey$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(searchPlacesWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(apiKeyIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeSearchPlacesCountries", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeSearchPlacesProperty_Text"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeSearchPlacesCountries$Action = function (searchPlacesWidgetIdIn, countriesIn, callContext) {
return OS.Logger.startActiveSpan("ChangeSearchPlacesCountries", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeSearchPlacesCountries");
span.setAttribute("outsystems.function.key", "3844d734-2e9a-4034-9b84-748e6161242a");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeSearchPlacesCountries$vars"))());
vars.value.searchPlacesWidgetIdInLocal = searchPlacesWidgetIdIn;
vars.value.countriesInLocal = countriesIn.clone();
var countriesSerializeVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
// JSON Serialize: CountriesSerialize
countriesSerializeVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.countriesInLocal, true, false, OS.DataTypes.DataTypes.Text);
// Execute Action: ChangeSearchPlacesProperty_Text
OutSystemsMapsController.default.changeSearchPlacesProperty_Text$Action(vars.value.searchPlacesWidgetIdInLocal, "countries", countriesSerializeVar.value.jSONOut, callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeSearchPlacesCountries$vars", [{
name: "SearchPlacesWidgetId",
attrName: "searchPlacesWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Countries",
attrName: "countriesInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new OS.DataTypes.TextList();
},
complexType: OS.DataTypes.TextList
}]);
OutSystemsMapsController.default.clientActionProxies.changeSearchPlacesCountries$Action = function (searchPlacesWidgetIdIn, countriesIn) {
searchPlacesWidgetIdIn = (searchPlacesWidgetIdIn === undefined) ? "" : searchPlacesWidgetIdIn;
countriesIn = (countriesIn === undefined) ? new OS.DataTypes.TextList() : countriesIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeSearchPlacesCountries$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(searchPlacesWidgetIdIn, OS.DataTypes.DataTypes.Text), countriesIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeSearchPlacesProperty_Boolean", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeSearchPlacesProperty_Boolean.ChangePropertyJS"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_ChangeSearchPlacesProperty_Boolean_ChangePropertyJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeSearchPlacesProperty_Boolean$Action = function (mapWidgetIdIn, propertyNameIn, propertValueIn, callContext) {
return OS.Logger.startActiveSpan("ChangeSearchPlacesProperty_Boolean", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeSearchPlacesProperty_Boolean");
span.setAttribute("outsystems.function.key", "049305d7-5cce-4af4-a26e-4d5b78d4a4d2");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeSearchPlacesProperty_Boolean$vars"))());
vars.value.mapWidgetIdInLocal = mapWidgetIdIn;
vars.value.propertyNameInLocal = propertyNameIn;
vars.value.propertValueInLocal = propertValueIn;
OS.Logger.startActiveSpan("ChangeProperty", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeProperty");
span.setAttribute("outsystems.function.key", "ecf16d89-9cc0-462b-9186-2402394b5849");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_ChangeSearchPlacesProperty_Boolean_ChangePropertyJS, "ChangeProperty", "ChangeSearchPlacesProperty_Boolean", {
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyNameInLocal, OS.DataTypes.DataTypes.Text),
PropertValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertValueInLocal, OS.DataTypes.DataTypes.Boolean),
SearchPlacesWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.mapWidgetIdInLocal, OS.DataTypes.DataTypes.Text)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeSearchPlacesProperty_Boolean$vars", [{
name: "MapWidgetId",
attrName: "mapWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyName",
attrName: "propertyNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertValue",
attrName: "propertValueInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeSearchPlacesProperty_Boolean$Action = function (mapWidgetIdIn, propertyNameIn, propertValueIn) {
mapWidgetIdIn = (mapWidgetIdIn === undefined) ? "" : mapWidgetIdIn;
propertyNameIn = (propertyNameIn === undefined) ? "" : propertyNameIn;
propertValueIn = (propertValueIn === undefined) ? false : propertValueIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeSearchPlacesProperty_Boolean$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(propertyNameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(propertValueIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$ChangeSearchPlacesProperty_Boolean.ChangePropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
PlacesAPI.SearchPlacesManager.ChangeProperty($parameters.SearchPlacesWidgetId, $parameters.PropertyName, $parameters.PropertValue)
};
});


define("OutSystemsMaps.controller$ChangeSearchPlacesProperty_Number", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeSearchPlacesProperty_Number.ChangePropertyJS"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_ChangeSearchPlacesProperty_Number_ChangePropertyJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeSearchPlacesProperty_Number$Action = function (mapWidgetIdIn, propertyNameIn, propertValueIn, callContext) {
return OS.Logger.startActiveSpan("ChangeSearchPlacesProperty_Number", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeSearchPlacesProperty_Number");
span.setAttribute("outsystems.function.key", "d273cf6c-7bbd-4e00-8615-9b1a7f6c64d5");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeSearchPlacesProperty_Number$vars"))());
vars.value.mapWidgetIdInLocal = mapWidgetIdIn;
vars.value.propertyNameInLocal = propertyNameIn;
vars.value.propertValueInLocal = propertValueIn;
OS.Logger.startActiveSpan("ChangeProperty", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeProperty");
span.setAttribute("outsystems.function.key", "a86c4f7d-cbf4-4727-a2ac-b424f6b9eeab");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_ChangeSearchPlacesProperty_Number_ChangePropertyJS, "ChangeProperty", "ChangeSearchPlacesProperty_Number", {
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyNameInLocal, OS.DataTypes.DataTypes.Text),
SearchPlacesWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.mapWidgetIdInLocal, OS.DataTypes.DataTypes.Text),
PropertValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertValueInLocal, OS.DataTypes.DataTypes.Decimal)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeSearchPlacesProperty_Number$vars", [{
name: "MapWidgetId",
attrName: "mapWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyName",
attrName: "propertyNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertValue",
attrName: "propertValueInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeSearchPlacesProperty_Number$Action = function (mapWidgetIdIn, propertyNameIn, propertValueIn) {
mapWidgetIdIn = (mapWidgetIdIn === undefined) ? "" : mapWidgetIdIn;
propertyNameIn = (propertyNameIn === undefined) ? "" : propertyNameIn;
propertValueIn = (propertValueIn === undefined) ? OS.DataTypes.Decimal.defaultValue : propertValueIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeSearchPlacesProperty_Number$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(propertyNameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(propertValueIn, OS.DataTypes.DataTypes.Decimal)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$ChangeSearchPlacesProperty_Number.ChangePropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
PlacesAPI.SearchPlacesManager.ChangeProperty($parameters.SearchPlacesWidgetId, $parameters.PropertyName, $parameters.PropertValue)
};
});


define("OutSystemsMaps.controller$ChangeSearchPlacesProperty_Text", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeSearchPlacesProperty_Text.ChangePropertyJS"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_ChangeSearchPlacesProperty_Text_ChangePropertyJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeSearchPlacesProperty_Text$Action = function (mapWidgetIdIn, propertyNameIn, propertValueIn, callContext) {
return OS.Logger.startActiveSpan("ChangeSearchPlacesProperty_Text", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeSearchPlacesProperty_Text");
span.setAttribute("outsystems.function.key", "b671b03b-7ea6-4c0b-b24f-d3efb7e1fbd9");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeSearchPlacesProperty_Text$vars"))());
vars.value.mapWidgetIdInLocal = mapWidgetIdIn;
vars.value.propertyNameInLocal = propertyNameIn;
vars.value.propertValueInLocal = propertValueIn;
OS.Logger.startActiveSpan("ChangeProperty", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeProperty");
span.setAttribute("outsystems.function.key", "5e950978-de3f-40b6-a7ee-730cc732495d");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_ChangeSearchPlacesProperty_Text_ChangePropertyJS, "ChangeProperty", "ChangeSearchPlacesProperty_Text", {
PropertValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertValueInLocal, OS.DataTypes.DataTypes.Text),
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyNameInLocal, OS.DataTypes.DataTypes.Text),
SearchPlacesWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.mapWidgetIdInLocal, OS.DataTypes.DataTypes.Text)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeSearchPlacesProperty_Text$vars", [{
name: "MapWidgetId",
attrName: "mapWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyName",
attrName: "propertyNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertValue",
attrName: "propertValueInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeSearchPlacesProperty_Text$Action = function (mapWidgetIdIn, propertyNameIn, propertValueIn) {
mapWidgetIdIn = (mapWidgetIdIn === undefined) ? "" : mapWidgetIdIn;
propertyNameIn = (propertyNameIn === undefined) ? "" : propertyNameIn;
propertValueIn = (propertValueIn === undefined) ? "" : propertValueIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeSearchPlacesProperty_Text$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(propertyNameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(propertValueIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$ChangeSearchPlacesProperty_Text.ChangePropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
PlacesAPI.SearchPlacesManager.ChangeProperty($parameters.SearchPlacesWidgetId, $parameters.PropertyName, $parameters.PropertValue)
};
});


define("OutSystemsMaps.controller$ChangeSearchPlacesSearchArea", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeSearchPlacesProperty_Text", "OutSystemsMaps.model$ST_31cb630f5fdaa3aa4d3dbfd37cbf9e56Structure"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeSearchPlacesSearchArea$Action = function (searchPlacesWidgetIdIn, searchAreaIn, callContext) {
return OS.Logger.startActiveSpan("ChangeSearchPlacesSearchArea", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeSearchPlacesSearchArea");
span.setAttribute("outsystems.function.key", "bcda3fcb-fe6c-4e64-98ac-be6ada0e3f68");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeSearchPlacesSearchArea$vars"))());
vars.value.searchPlacesWidgetIdInLocal = searchPlacesWidgetIdIn;
vars.value.searchAreaInLocal = searchAreaIn.clone();
var searchAreaSerializeVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
// JSON Serialize: SearchAreaSerialize
searchAreaSerializeVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.searchAreaInLocal, true, false);
// Execute Action: ChangeSearchPlacesProperty_Text
OutSystemsMapsController.default.changeSearchPlacesProperty_Text$Action(vars.value.searchPlacesWidgetIdInLocal, "searchArea", searchAreaSerializeVar.value.jSONOut, callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeSearchPlacesSearchArea$vars", [{
name: "SearchPlacesWidgetId",
attrName: "searchPlacesWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "SearchArea",
attrName: "searchAreaInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new OutSystemsMapsModel.ST_31cb630f5fdaa3aa4d3dbfd37cbf9e56Structure();
},
complexType: OutSystemsMapsModel.ST_31cb630f5fdaa3aa4d3dbfd37cbf9e56Structure
}]);
OutSystemsMapsController.default.clientActionProxies.changeSearchPlacesSearchArea$Action = function (searchPlacesWidgetIdIn, searchAreaIn) {
searchPlacesWidgetIdIn = (searchPlacesWidgetIdIn === undefined) ? "" : searchPlacesWidgetIdIn;
searchAreaIn = (searchAreaIn === undefined) ? new OutSystemsMapsModel.ST_31cb630f5fdaa3aa4d3dbfd37cbf9e56Structure() : searchAreaIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeSearchPlacesSearchArea$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(searchPlacesWidgetIdIn, OS.DataTypes.DataTypes.Text), searchAreaIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeSearchPlacesSearchType", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeSearchPlacesProperty_Text"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeSearchPlacesSearchType$Action = function (searchPlacesWidgetIdIn, searchTypeIn, callContext) {
return OS.Logger.startActiveSpan("ChangeSearchPlacesSearchType", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeSearchPlacesSearchType");
span.setAttribute("outsystems.function.key", "a08849b2-4710-48b9-aebd-53b902d10f5d");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeSearchPlacesSearchType$vars"))());
vars.value.searchPlacesWidgetIdInLocal = searchPlacesWidgetIdIn;
vars.value.searchTypeInLocal = searchTypeIn;
// Execute Action: ChangeSearchPlacesProperty_Text
OutSystemsMapsController.default.changeSearchPlacesProperty_Text$Action(vars.value.searchPlacesWidgetIdInLocal, "searchType", vars.value.searchTypeInLocal, callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeSearchPlacesSearchType$vars", [{
name: "SearchPlacesWidgetId",
attrName: "searchPlacesWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "SearchType",
attrName: "searchTypeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeSearchPlacesSearchType$Action = function (searchPlacesWidgetIdIn, searchTypeIn) {
searchPlacesWidgetIdIn = (searchPlacesWidgetIdIn === undefined) ? "" : searchPlacesWidgetIdIn;
searchTypeIn = (searchTypeIn === undefined) ? "" : searchTypeIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeSearchPlacesSearchType$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(searchPlacesWidgetIdIn, OS.DataTypes.DataTypes.Text), searchTypeIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeShapeAllowDrag", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeShapeProperty_Boolean"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeShapeAllowDrag$Action = function (shapeWidgetIdIn, allowDragIn, callContext) {
return OS.Logger.startActiveSpan("ChangeShapeAllowDrag", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeShapeAllowDrag");
span.setAttribute("outsystems.function.key", "3e45a073-7d7f-4a5a-9883-c2cc06945d0a");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeShapeAllowDrag$vars"))());
vars.value.shapeWidgetIdInLocal = shapeWidgetIdIn;
vars.value.allowDragInLocal = allowDragIn;
// Execute Action: ChangeShapeProperty_Boolean
OutSystemsMapsController.default.changeShapeProperty_Boolean$Action(vars.value.shapeWidgetIdInLocal, "allowDrag", vars.value.allowDragInLocal, callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeShapeAllowDrag$vars", [{
name: "ShapeWidgetId",
attrName: "shapeWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "AllowDrag",
attrName: "allowDragInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeShapeAllowDrag$Action = function (shapeWidgetIdIn, allowDragIn) {
shapeWidgetIdIn = (shapeWidgetIdIn === undefined) ? "" : shapeWidgetIdIn;
allowDragIn = (allowDragIn === undefined) ? false : allowDragIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeShapeAllowDrag$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(shapeWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(allowDragIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeShapeAllowEdit", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeShapeProperty_Boolean"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeShapeAllowEdit$Action = function (shapeWidgetIdIn, allowEditIn, callContext) {
return OS.Logger.startActiveSpan("ChangeShapeAllowEdit", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeShapeAllowEdit");
span.setAttribute("outsystems.function.key", "d3748ce1-d77e-4d0b-84d2-2fc25599911a");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeShapeAllowEdit$vars"))());
vars.value.shapeWidgetIdInLocal = shapeWidgetIdIn;
vars.value.allowEditInLocal = allowEditIn;
// Execute Action: ChangeShapeProperty_Boolean
OutSystemsMapsController.default.changeShapeProperty_Boolean$Action(vars.value.shapeWidgetIdInLocal, "allowEdit", vars.value.allowEditInLocal, callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeShapeAllowEdit$vars", [{
name: "ShapeWidgetId",
attrName: "shapeWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "AllowEdit",
attrName: "allowEditInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeShapeAllowEdit$Action = function (shapeWidgetIdIn, allowEditIn) {
shapeWidgetIdIn = (shapeWidgetIdIn === undefined) ? "" : shapeWidgetIdIn;
allowEditIn = (allowEditIn === undefined) ? false : allowEditIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeShapeAllowEdit$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(shapeWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(allowEditIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeShapeBounds", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeShapeProperty_Text"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeShapeBounds$Action = function (shapeWidgetIdIn, newBoundsIn, callContext) {
return OS.Logger.startActiveSpan("ChangeShapeBounds", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeShapeBounds");
span.setAttribute("outsystems.function.key", "851d8fca-22ec-40b7-a197-719099b59ea9");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeShapeBounds$vars"))());
vars.value.shapeWidgetIdInLocal = shapeWidgetIdIn;
vars.value.newBoundsInLocal = newBoundsIn;
// Execute Action: ChangeShapeProperty_Text
OutSystemsMapsController.default.changeShapeProperty_Text$Action(vars.value.shapeWidgetIdInLocal, "bounds", vars.value.newBoundsInLocal, callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeShapeBounds$vars", [{
name: "ShapeWidgetId",
attrName: "shapeWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "NewBounds",
attrName: "newBoundsInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeShapeBounds$Action = function (shapeWidgetIdIn, newBoundsIn) {
shapeWidgetIdIn = (shapeWidgetIdIn === undefined) ? "" : shapeWidgetIdIn;
newBoundsIn = (newBoundsIn === undefined) ? "" : newBoundsIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeShapeBounds$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(shapeWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(newBoundsIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeShapeCenter", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeShapeProperty_Text"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeShapeCenter$Action = function (shapeWidgetIdIn, newCenterIn, callContext) {
return OS.Logger.startActiveSpan("ChangeShapeCenter", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeShapeCenter");
span.setAttribute("outsystems.function.key", "1723c66f-1527-4f48-80c5-c7987c67395f");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeShapeCenter$vars"))());
vars.value.shapeWidgetIdInLocal = shapeWidgetIdIn;
vars.value.newCenterInLocal = newCenterIn;
// Execute Action: ChangeShapeProperty_Text
OutSystemsMapsController.default.changeShapeProperty_Text$Action(vars.value.shapeWidgetIdInLocal, "center", vars.value.newCenterInLocal, callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeShapeCenter$vars", [{
name: "ShapeWidgetId",
attrName: "shapeWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "NewCenter",
attrName: "newCenterInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeShapeCenter$Action = function (shapeWidgetIdIn, newCenterIn) {
shapeWidgetIdIn = (shapeWidgetIdIn === undefined) ? "" : shapeWidgetIdIn;
newCenterIn = (newCenterIn === undefined) ? "" : newCenterIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeShapeCenter$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(shapeWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(newCenterIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeShapeFillColor", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeShapeProperty_Text"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeShapeFillColor$Action = function (shapeWidgetIdIn, newColorIn, callContext) {
return OS.Logger.startActiveSpan("ChangeShapeFillColor", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeShapeFillColor");
span.setAttribute("outsystems.function.key", "344ab753-a16a-4346-9048-0f03dee22416");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeShapeFillColor$vars"))());
vars.value.shapeWidgetIdInLocal = shapeWidgetIdIn;
vars.value.newColorInLocal = newColorIn;
// Execute Action: ChangeShapeProperty_Text
OutSystemsMapsController.default.changeShapeProperty_Text$Action(vars.value.shapeWidgetIdInLocal, "fillColor", vars.value.newColorInLocal, callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeShapeFillColor$vars", [{
name: "ShapeWidgetId",
attrName: "shapeWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "NewColor",
attrName: "newColorInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeShapeFillColor$Action = function (shapeWidgetIdIn, newColorIn) {
shapeWidgetIdIn = (shapeWidgetIdIn === undefined) ? "" : shapeWidgetIdIn;
newColorIn = (newColorIn === undefined) ? "" : newColorIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeShapeFillColor$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(shapeWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(newColorIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeShapeFillOpacity", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeShapeProperty_Number"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeShapeFillOpacity$Action = function (shapeWidgetIdIn, newOpacityIn, callContext) {
return OS.Logger.startActiveSpan("ChangeShapeFillOpacity", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeShapeFillOpacity");
span.setAttribute("outsystems.function.key", "25cfe5bd-a431-478b-b582-3a9106db48d3");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeShapeFillOpacity$vars"))());
vars.value.shapeWidgetIdInLocal = shapeWidgetIdIn;
vars.value.newOpacityInLocal = newOpacityIn;
// Execute Action: ChangeShapeProperty_Number
OutSystemsMapsController.default.changeShapeProperty_Number$Action(vars.value.shapeWidgetIdInLocal, "fillOpacity", vars.value.newOpacityInLocal, callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeShapeFillOpacity$vars", [{
name: "ShapeWidgetId",
attrName: "shapeWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "NewOpacity",
attrName: "newOpacityInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeShapeFillOpacity$Action = function (shapeWidgetIdIn, newOpacityIn) {
shapeWidgetIdIn = (shapeWidgetIdIn === undefined) ? "" : shapeWidgetIdIn;
newOpacityIn = (newOpacityIn === undefined) ? OS.DataTypes.Decimal.defaultValue : newOpacityIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeShapeFillOpacity$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(shapeWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(newOpacityIn, OS.DataTypes.DataTypes.Decimal)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeShapeLocations", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeShapeProperty_Text"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeShapeLocations$Action = function (shapeWidgetIdIn, newLocationsIn, callContext) {
return OS.Logger.startActiveSpan("ChangeShapeLocations", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeShapeLocations");
span.setAttribute("outsystems.function.key", "a96b8ddb-d70d-461a-b547-baacdff5d48e");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeShapeLocations$vars"))());
vars.value.shapeWidgetIdInLocal = shapeWidgetIdIn;
vars.value.newLocationsInLocal = newLocationsIn.clone();
var jSONSerialize_NewLocationsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
// JSON Serialize: JSONSerialize_NewLocations
jSONSerialize_NewLocationsVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.newLocationsInLocal, true, false, OS.DataTypes.DataTypes.Text);
// Execute Action: ChangeShapeProperty_Text
OutSystemsMapsController.default.changeShapeProperty_Text$Action(vars.value.shapeWidgetIdInLocal, "locations", jSONSerialize_NewLocationsVar.value.jSONOut, callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeShapeLocations$vars", [{
name: "ShapeWidgetId",
attrName: "shapeWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "NewLocations",
attrName: "newLocationsInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new OS.DataTypes.TextList();
},
complexType: OS.DataTypes.TextList
}]);
OutSystemsMapsController.default.clientActionProxies.changeShapeLocations$Action = function (shapeWidgetIdIn, newLocationsIn) {
shapeWidgetIdIn = (shapeWidgetIdIn === undefined) ? "" : shapeWidgetIdIn;
newLocationsIn = (newLocationsIn === undefined) ? new OS.DataTypes.TextList() : newLocationsIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeShapeLocations$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(shapeWidgetIdIn, OS.DataTypes.DataTypes.Text), newLocationsIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeShapeProperty_Boolean", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeShapeProperty_Boolean.ChangePropertyJS"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_ChangeShapeProperty_Boolean_ChangePropertyJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeShapeProperty_Boolean$Action = function (shapeWidgetIdIn, propertyNameIn, propertValueIn, callContext) {
return OS.Logger.startActiveSpan("ChangeShapeProperty_Boolean", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeShapeProperty_Boolean");
span.setAttribute("outsystems.function.key", "dcdb948d-2dd2-459f-baac-a48c38d21c5b");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeShapeProperty_Boolean$vars"))());
vars.value.shapeWidgetIdInLocal = shapeWidgetIdIn;
vars.value.propertyNameInLocal = propertyNameIn;
vars.value.propertValueInLocal = propertValueIn;
OS.Logger.startActiveSpan("ChangeProperty", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeProperty");
span.setAttribute("outsystems.function.key", "788d189e-4d08-49b1-82c5-3204db98aa64");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_ChangeShapeProperty_Boolean_ChangePropertyJS, "ChangeProperty", "ChangeShapeProperty_Boolean", {
ShapeWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.shapeWidgetIdInLocal, OS.DataTypes.DataTypes.Text),
PropertValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertValueInLocal, OS.DataTypes.DataTypes.Boolean),
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyNameInLocal, OS.DataTypes.DataTypes.Text)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeShapeProperty_Boolean$vars", [{
name: "ShapeWidgetId",
attrName: "shapeWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyName",
attrName: "propertyNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertValue",
attrName: "propertValueInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeShapeProperty_Boolean$Action = function (shapeWidgetIdIn, propertyNameIn, propertValueIn) {
shapeWidgetIdIn = (shapeWidgetIdIn === undefined) ? "" : shapeWidgetIdIn;
propertyNameIn = (propertyNameIn === undefined) ? "" : propertyNameIn;
propertValueIn = (propertValueIn === undefined) ? false : propertValueIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeShapeProperty_Boolean$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(shapeWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(propertyNameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(propertValueIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$ChangeShapeProperty_Boolean.ChangePropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.Maps.MapAPI.ShapeManager.ChangeProperty($parameters.ShapeWidgetId, $parameters.PropertyName, $parameters.PropertValue)
};
});


define("OutSystemsMaps.controller$ChangeShapeProperty_Number", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeShapeProperty_Number.ChangePropertyJS"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_ChangeShapeProperty_Number_ChangePropertyJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeShapeProperty_Number$Action = function (shapeWidgetIdIn, propertyNameIn, propertValueIn, callContext) {
return OS.Logger.startActiveSpan("ChangeShapeProperty_Number", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeShapeProperty_Number");
span.setAttribute("outsystems.function.key", "a028b53b-d4fb-4ee5-9b9d-12ddd0f84e16");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeShapeProperty_Number$vars"))());
vars.value.shapeWidgetIdInLocal = shapeWidgetIdIn;
vars.value.propertyNameInLocal = propertyNameIn;
vars.value.propertValueInLocal = propertValueIn;
OS.Logger.startActiveSpan("ChangeProperty", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeProperty");
span.setAttribute("outsystems.function.key", "543b8e16-44b2-484f-9268-9e982ec9c047");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_ChangeShapeProperty_Number_ChangePropertyJS, "ChangeProperty", "ChangeShapeProperty_Number", {
ShapeWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.shapeWidgetIdInLocal, OS.DataTypes.DataTypes.Text),
PropertValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertValueInLocal, OS.DataTypes.DataTypes.Decimal),
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyNameInLocal, OS.DataTypes.DataTypes.Text)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeShapeProperty_Number$vars", [{
name: "ShapeWidgetId",
attrName: "shapeWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyName",
attrName: "propertyNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertValue",
attrName: "propertValueInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeShapeProperty_Number$Action = function (shapeWidgetIdIn, propertyNameIn, propertValueIn) {
shapeWidgetIdIn = (shapeWidgetIdIn === undefined) ? "" : shapeWidgetIdIn;
propertyNameIn = (propertyNameIn === undefined) ? "" : propertyNameIn;
propertValueIn = (propertValueIn === undefined) ? OS.DataTypes.Decimal.defaultValue : propertValueIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeShapeProperty_Number$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(shapeWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(propertyNameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(propertValueIn, OS.DataTypes.DataTypes.Decimal)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$ChangeShapeProperty_Number.ChangePropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.Maps.MapAPI.ShapeManager.ChangeProperty($parameters.ShapeWidgetId, $parameters.PropertyName, $parameters.PropertValue)
};
});


define("OutSystemsMaps.controller$ChangeShapeProperty_Text", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeShapeProperty_Text.ChangePropertyJS"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_ChangeShapeProperty_Text_ChangePropertyJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeShapeProperty_Text$Action = function (shapeWidgetIdIn, propertyNameIn, propertValueIn, callContext) {
return OS.Logger.startActiveSpan("ChangeShapeProperty_Text", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeShapeProperty_Text");
span.setAttribute("outsystems.function.key", "569aeaf9-b299-46e8-ac0c-d935a7b56fe9");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeShapeProperty_Text$vars"))());
vars.value.shapeWidgetIdInLocal = shapeWidgetIdIn;
vars.value.propertyNameInLocal = propertyNameIn;
vars.value.propertValueInLocal = propertValueIn;
OS.Logger.startActiveSpan("ChangeProperty", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeProperty");
span.setAttribute("outsystems.function.key", "2e1b4334-c95d-4ef1-b829-11858faac1aa");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_ChangeShapeProperty_Text_ChangePropertyJS, "ChangeProperty", "ChangeShapeProperty_Text", {
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyNameInLocal, OS.DataTypes.DataTypes.Text),
PropertValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertValueInLocal, OS.DataTypes.DataTypes.Text),
ShapeWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.shapeWidgetIdInLocal, OS.DataTypes.DataTypes.Text)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeShapeProperty_Text$vars", [{
name: "ShapeWidgetId",
attrName: "shapeWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyName",
attrName: "propertyNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertValue",
attrName: "propertValueInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeShapeProperty_Text$Action = function (shapeWidgetIdIn, propertyNameIn, propertValueIn) {
shapeWidgetIdIn = (shapeWidgetIdIn === undefined) ? "" : shapeWidgetIdIn;
propertyNameIn = (propertyNameIn === undefined) ? "" : propertyNameIn;
propertValueIn = (propertValueIn === undefined) ? "" : propertValueIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeShapeProperty_Text$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(shapeWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(propertyNameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(propertValueIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$ChangeShapeProperty_Text.ChangePropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.Maps.MapAPI.ShapeManager.ChangeProperty($parameters.ShapeWidgetId, $parameters.PropertyName, $parameters.PropertValue)
};
});


define("OutSystemsMaps.controller$ChangeShapeRadius", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeShapeProperty_Number"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeShapeRadius$Action = function (shapeWidgetIdIn, newRadiusIn, callContext) {
return OS.Logger.startActiveSpan("ChangeShapeRadius", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeShapeRadius");
span.setAttribute("outsystems.function.key", "550e8c9e-dfca-46cb-ba0e-04756e04c70f");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeShapeRadius$vars"))());
vars.value.shapeWidgetIdInLocal = shapeWidgetIdIn;
vars.value.newRadiusInLocal = newRadiusIn;
// Execute Action: ChangeShapeProperty_Number
OutSystemsMapsController.default.changeShapeProperty_Number$Action(vars.value.shapeWidgetIdInLocal, "radius", vars.value.newRadiusInLocal, callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeShapeRadius$vars", [{
name: "ShapeWidgetId",
attrName: "shapeWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "NewRadius",
attrName: "newRadiusInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeShapeRadius$Action = function (shapeWidgetIdIn, newRadiusIn) {
shapeWidgetIdIn = (shapeWidgetIdIn === undefined) ? "" : shapeWidgetIdIn;
newRadiusIn = (newRadiusIn === undefined) ? OS.DataTypes.Decimal.defaultValue : newRadiusIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeShapeRadius$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(shapeWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(newRadiusIn, OS.DataTypes.DataTypes.Decimal)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeShapeStrokeColor", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeShapeProperty_Text"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeShapeStrokeColor$Action = function (shapeWidgetIdIn, newColorIn, callContext) {
return OS.Logger.startActiveSpan("ChangeShapeStrokeColor", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeShapeStrokeColor");
span.setAttribute("outsystems.function.key", "da9328c8-11ac-4897-a962-ece00ecd4316");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeShapeStrokeColor$vars"))());
vars.value.shapeWidgetIdInLocal = shapeWidgetIdIn;
vars.value.newColorInLocal = newColorIn;
// Execute Action: ChangeShapeProperty_Text
OutSystemsMapsController.default.changeShapeProperty_Text$Action(vars.value.shapeWidgetIdInLocal, "strokeColor", vars.value.newColorInLocal, callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeShapeStrokeColor$vars", [{
name: "ShapeWidgetId",
attrName: "shapeWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "NewColor",
attrName: "newColorInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeShapeStrokeColor$Action = function (shapeWidgetIdIn, newColorIn) {
shapeWidgetIdIn = (shapeWidgetIdIn === undefined) ? "" : shapeWidgetIdIn;
newColorIn = (newColorIn === undefined) ? "" : newColorIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeShapeStrokeColor$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(shapeWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(newColorIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeShapeStrokeOpacity", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeShapeProperty_Number"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeShapeStrokeOpacity$Action = function (shapeWidgetIdIn, newOpacityIn, callContext) {
return OS.Logger.startActiveSpan("ChangeShapeStrokeOpacity", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeShapeStrokeOpacity");
span.setAttribute("outsystems.function.key", "24d245d4-f646-45e0-a2cf-5de88287f955");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeShapeStrokeOpacity$vars"))());
vars.value.shapeWidgetIdInLocal = shapeWidgetIdIn;
vars.value.newOpacityInLocal = newOpacityIn;
// Execute Action: ChangeShapeProperty_Number
OutSystemsMapsController.default.changeShapeProperty_Number$Action(vars.value.shapeWidgetIdInLocal, "strokeOpacity", vars.value.newOpacityInLocal, callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeShapeStrokeOpacity$vars", [{
name: "ShapeWidgetId",
attrName: "shapeWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "NewOpacity",
attrName: "newOpacityInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeShapeStrokeOpacity$Action = function (shapeWidgetIdIn, newOpacityIn) {
shapeWidgetIdIn = (shapeWidgetIdIn === undefined) ? "" : shapeWidgetIdIn;
newOpacityIn = (newOpacityIn === undefined) ? OS.DataTypes.Decimal.defaultValue : newOpacityIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeShapeStrokeOpacity$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(shapeWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(newOpacityIn, OS.DataTypes.DataTypes.Decimal)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeShapeStrokeWeight", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeShapeProperty_Number"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeShapeStrokeWeight$Action = function (shapeWidgetIdIn, newWeightIn, callContext) {
return OS.Logger.startActiveSpan("ChangeShapeStrokeWeight", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeShapeStrokeWeight");
span.setAttribute("outsystems.function.key", "ad141917-865f-4659-adc2-fa436c8163fb");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeShapeStrokeWeight$vars"))());
vars.value.shapeWidgetIdInLocal = shapeWidgetIdIn;
vars.value.newWeightInLocal = newWeightIn;
// Execute Action: ChangeShapeProperty_Number
OutSystemsMapsController.default.changeShapeProperty_Number$Action(vars.value.shapeWidgetIdInLocal, "strokeWeight", OS.BuiltinFunctions.integerToDecimal(vars.value.newWeightInLocal), callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeShapeStrokeWeight$vars", [{
name: "ShapeWidgetId",
attrName: "shapeWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "NewWeight",
attrName: "newWeightInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeShapeStrokeWeight$Action = function (shapeWidgetIdIn, newWeightIn) {
shapeWidgetIdIn = (shapeWidgetIdIn === undefined) ? "" : shapeWidgetIdIn;
newWeightIn = (newWeightIn === undefined) ? 0 : newWeightIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeShapeStrokeWeight$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(shapeWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(newWeightIn, OS.DataTypes.DataTypes.Integer)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeToolAllowDrag", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeToolProperty_Boolean"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeToolAllowDrag$Action = function (toolWidgetIdIn, allowDragIn, callContext) {
return OS.Logger.startActiveSpan("ChangeToolAllowDrag", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeToolAllowDrag");
span.setAttribute("outsystems.function.key", "e9533100-07c3-444e-8c69-aa6a3856e5bb");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeToolAllowDrag$vars"))());
vars.value.toolWidgetIdInLocal = toolWidgetIdIn;
vars.value.allowDragInLocal = allowDragIn;
// Execute Action: ChangeToolProperty_Boolean
OutSystemsMapsController.default.changeToolProperty_Boolean$Action(vars.value.toolWidgetIdInLocal, "allowDrag", vars.value.allowDragInLocal, callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeToolAllowDrag$vars", [{
name: "ToolWidgetId",
attrName: "toolWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "AllowDrag",
attrName: "allowDragInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeToolAllowDrag$Action = function (toolWidgetIdIn, allowDragIn) {
toolWidgetIdIn = (toolWidgetIdIn === undefined) ? "" : toolWidgetIdIn;
allowDragIn = (allowDragIn === undefined) ? false : allowDragIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeToolAllowDrag$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(toolWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(allowDragIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeToolAllowEdit", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeToolProperty_Boolean"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeToolAllowEdit$Action = function (toolWidgetIdIn, allowEditIn, callContext) {
return OS.Logger.startActiveSpan("ChangeToolAllowEdit", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeToolAllowEdit");
span.setAttribute("outsystems.function.key", "c8a355a4-556d-46a8-bab8-1ddbf9cb61e6");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeToolAllowEdit$vars"))());
vars.value.toolWidgetIdInLocal = toolWidgetIdIn;
vars.value.allowEditInLocal = allowEditIn;
// Execute Action: ChangeToolProperty_Boolean
OutSystemsMapsController.default.changeToolProperty_Boolean$Action(vars.value.toolWidgetIdInLocal, "allowEdit", vars.value.allowEditInLocal, callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeToolAllowEdit$vars", [{
name: "ToolWidgetId",
attrName: "toolWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "AllowEdit",
attrName: "allowEditInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeToolAllowEdit$Action = function (toolWidgetIdIn, allowEditIn) {
toolWidgetIdIn = (toolWidgetIdIn === undefined) ? "" : toolWidgetIdIn;
allowEditIn = (allowEditIn === undefined) ? false : allowEditIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeToolAllowEdit$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(toolWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(allowEditIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeToolFillColor", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeToolProperty_Text"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeToolFillColor$Action = function (toolWidgetIdIn, newColorIn, callContext) {
return OS.Logger.startActiveSpan("ChangeToolFillColor", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeToolFillColor");
span.setAttribute("outsystems.function.key", "54b4668a-f628-4f85-8585-6f6014b6b9d4");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeToolFillColor$vars"))());
vars.value.toolWidgetIdInLocal = toolWidgetIdIn;
vars.value.newColorInLocal = newColorIn;
// Execute Action: ChangeToolProperty_Text
OutSystemsMapsController.default.changeToolProperty_Text$Action(vars.value.toolWidgetIdInLocal, "fillColor", vars.value.newColorInLocal, callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeToolFillColor$vars", [{
name: "ToolWidgetId",
attrName: "toolWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "NewColor",
attrName: "newColorInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeToolFillColor$Action = function (toolWidgetIdIn, newColorIn) {
toolWidgetIdIn = (toolWidgetIdIn === undefined) ? "" : toolWidgetIdIn;
newColorIn = (newColorIn === undefined) ? "" : newColorIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeToolFillColor$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(toolWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(newColorIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeToolFillOpacity", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeToolProperty_Number"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeToolFillOpacity$Action = function (toolWidgetIdIn, newOpacityIn, callContext) {
return OS.Logger.startActiveSpan("ChangeToolFillOpacity", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeToolFillOpacity");
span.setAttribute("outsystems.function.key", "7ebd2703-1f42-4f9c-b8d3-7cce02faeaa7");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeToolFillOpacity$vars"))());
vars.value.toolWidgetIdInLocal = toolWidgetIdIn;
vars.value.newOpacityInLocal = newOpacityIn;
// Execute Action: ChangeToolProperty_Number
OutSystemsMapsController.default.changeToolProperty_Number$Action(vars.value.toolWidgetIdInLocal, "fillOpacity", vars.value.newOpacityInLocal, callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeToolFillOpacity$vars", [{
name: "ToolWidgetId",
attrName: "toolWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "NewOpacity",
attrName: "newOpacityInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeToolFillOpacity$Action = function (toolWidgetIdIn, newOpacityIn) {
toolWidgetIdIn = (toolWidgetIdIn === undefined) ? "" : toolWidgetIdIn;
newOpacityIn = (newOpacityIn === undefined) ? OS.DataTypes.Decimal.defaultValue : newOpacityIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeToolFillOpacity$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(toolWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(newOpacityIn, OS.DataTypes.DataTypes.Decimal)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeToolIconUrl", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeToolProperty_Text"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeToolIconUrl$Action = function (toolWidgetIdIn, newIconUrlIn, callContext) {
return OS.Logger.startActiveSpan("ChangeToolIconUrl", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeToolIconUrl");
span.setAttribute("outsystems.function.key", "a8ad34bd-8f23-4ef2-82e9-b158dfd40f29");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeToolIconUrl$vars"))());
vars.value.toolWidgetIdInLocal = toolWidgetIdIn;
vars.value.newIconUrlInLocal = newIconUrlIn;
// Execute Action: ChangeToolProperty_Text
OutSystemsMapsController.default.changeToolProperty_Text$Action(vars.value.toolWidgetIdInLocal, "iconUrl", vars.value.newIconUrlInLocal, callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeToolIconUrl$vars", [{
name: "ToolWidgetId",
attrName: "toolWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "NewIconUrl",
attrName: "newIconUrlInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeToolIconUrl$Action = function (toolWidgetIdIn, newIconUrlIn) {
toolWidgetIdIn = (toolWidgetIdIn === undefined) ? "" : toolWidgetIdIn;
newIconUrlIn = (newIconUrlIn === undefined) ? "" : newIconUrlIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeToolIconUrl$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(toolWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(newIconUrlIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeToolProperty_Boolean", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeToolProperty_Boolean.ChangePropertyJS"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_ChangeToolProperty_Boolean_ChangePropertyJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeToolProperty_Boolean$Action = function (toolWidgetIdIn, propertyNameIn, propertValueIn, callContext) {
return OS.Logger.startActiveSpan("ChangeToolProperty_Boolean", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeToolProperty_Boolean");
span.setAttribute("outsystems.function.key", "860453a0-68e2-4534-87e2-11573f4785f1");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeToolProperty_Boolean$vars"))());
vars.value.toolWidgetIdInLocal = toolWidgetIdIn;
vars.value.propertyNameInLocal = propertyNameIn;
vars.value.propertValueInLocal = propertValueIn;
OS.Logger.startActiveSpan("ChangeProperty", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeProperty");
span.setAttribute("outsystems.function.key", "dad3b365-be68-40a4-a53f-fced645bc853");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_ChangeToolProperty_Boolean_ChangePropertyJS, "ChangeProperty", "ChangeToolProperty_Boolean", {
PropertValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertValueInLocal, OS.DataTypes.DataTypes.Boolean),
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyNameInLocal, OS.DataTypes.DataTypes.Text),
ToolWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.toolWidgetIdInLocal, OS.DataTypes.DataTypes.Text)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeToolProperty_Boolean$vars", [{
name: "ToolWidgetId",
attrName: "toolWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyName",
attrName: "propertyNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertValue",
attrName: "propertValueInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeToolProperty_Boolean$Action = function (toolWidgetIdIn, propertyNameIn, propertValueIn) {
toolWidgetIdIn = (toolWidgetIdIn === undefined) ? "" : toolWidgetIdIn;
propertyNameIn = (propertyNameIn === undefined) ? "" : propertyNameIn;
propertValueIn = (propertValueIn === undefined) ? false : propertValueIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeToolProperty_Boolean$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(toolWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(propertyNameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(propertValueIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$ChangeToolProperty_Boolean.ChangePropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.Maps.MapAPI.DrawingToolsManager.ChangeToolProperty($parameters.ToolWidgetId, $parameters.PropertyName, $parameters.PropertValue)
};
});


define("OutSystemsMaps.controller$ChangeToolProperty_Number", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeToolProperty_Number.ChangePropertyJS"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_ChangeToolProperty_Number_ChangePropertyJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeToolProperty_Number$Action = function (toolWidgetIdIn, propertyNameIn, propertValueIn, callContext) {
return OS.Logger.startActiveSpan("ChangeToolProperty_Number", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeToolProperty_Number");
span.setAttribute("outsystems.function.key", "ee73c8a0-5ed6-4b82-8ac7-415b040b86fb");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeToolProperty_Number$vars"))());
vars.value.toolWidgetIdInLocal = toolWidgetIdIn;
vars.value.propertyNameInLocal = propertyNameIn;
vars.value.propertValueInLocal = propertValueIn;
OS.Logger.startActiveSpan("ChangeProperty", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeProperty");
span.setAttribute("outsystems.function.key", "5fc36f98-cfc4-4144-9ddd-c24ebff1db98");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_ChangeToolProperty_Number_ChangePropertyJS, "ChangeProperty", "ChangeToolProperty_Number", {
PropertValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertValueInLocal, OS.DataTypes.DataTypes.Decimal),
ToolWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.toolWidgetIdInLocal, OS.DataTypes.DataTypes.Text),
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyNameInLocal, OS.DataTypes.DataTypes.Text)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeToolProperty_Number$vars", [{
name: "ToolWidgetId",
attrName: "toolWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyName",
attrName: "propertyNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertValue",
attrName: "propertValueInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeToolProperty_Number$Action = function (toolWidgetIdIn, propertyNameIn, propertValueIn) {
toolWidgetIdIn = (toolWidgetIdIn === undefined) ? "" : toolWidgetIdIn;
propertyNameIn = (propertyNameIn === undefined) ? "" : propertyNameIn;
propertValueIn = (propertValueIn === undefined) ? OS.DataTypes.Decimal.defaultValue : propertValueIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeToolProperty_Number$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(toolWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(propertyNameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(propertValueIn, OS.DataTypes.DataTypes.Decimal)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$ChangeToolProperty_Number.ChangePropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.Maps.MapAPI.DrawingToolsManager.ChangeToolProperty($parameters.ToolWidgetId, $parameters.PropertyName, $parameters.PropertValue)
};
});


define("OutSystemsMaps.controller$ChangeToolProperty_Text", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeToolProperty_Text.ChangePropertyJS"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_ChangeToolProperty_Text_ChangePropertyJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeToolProperty_Text$Action = function (toolWidgetIdIn, propertyNameIn, propertValueIn, callContext) {
return OS.Logger.startActiveSpan("ChangeToolProperty_Text", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeToolProperty_Text");
span.setAttribute("outsystems.function.key", "8ed3bcb7-90db-40d3-b17b-04f993f35805");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeToolProperty_Text$vars"))());
vars.value.toolWidgetIdInLocal = toolWidgetIdIn;
vars.value.propertyNameInLocal = propertyNameIn;
vars.value.propertValueInLocal = propertValueIn;
OS.Logger.startActiveSpan("ChangeProperty", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeProperty");
span.setAttribute("outsystems.function.key", "2744be7c-6a4d-417c-a509-4e33855ea402");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_ChangeToolProperty_Text_ChangePropertyJS, "ChangeProperty", "ChangeToolProperty_Text", {
PropertValue: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertValueInLocal, OS.DataTypes.DataTypes.Text),
PropertyName: OS.DataConversion.JSNodeParamConverter.to(vars.value.propertyNameInLocal, OS.DataTypes.DataTypes.Text),
ToolWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.toolWidgetIdInLocal, OS.DataTypes.DataTypes.Text)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeToolProperty_Text$vars", [{
name: "ToolWidgetId",
attrName: "toolWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertyName",
attrName: "propertyNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "PropertValue",
attrName: "propertValueInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeToolProperty_Text$Action = function (toolWidgetIdIn, propertyNameIn, propertValueIn) {
toolWidgetIdIn = (toolWidgetIdIn === undefined) ? "" : toolWidgetIdIn;
propertyNameIn = (propertyNameIn === undefined) ? "" : propertyNameIn;
propertValueIn = (propertValueIn === undefined) ? "" : propertValueIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeToolProperty_Text$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(toolWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(propertyNameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(propertValueIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$ChangeToolProperty_Text.ChangePropertyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.Maps.MapAPI.DrawingToolsManager.ChangeToolProperty($parameters.ToolWidgetId, $parameters.PropertyName, $parameters.PropertValue)
};
});


define("OutSystemsMaps.controller$ChangeToolStrokeColor", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeToolProperty_Text"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeToolStrokeColor$Action = function (toolWidgetIdIn, newColorIn, callContext) {
return OS.Logger.startActiveSpan("ChangeToolStrokeColor", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeToolStrokeColor");
span.setAttribute("outsystems.function.key", "31699264-df59-4ecb-a72d-980111b7c9f8");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeToolStrokeColor$vars"))());
vars.value.toolWidgetIdInLocal = toolWidgetIdIn;
vars.value.newColorInLocal = newColorIn;
// Execute Action: ChangeToolProperty_Text
OutSystemsMapsController.default.changeToolProperty_Text$Action(vars.value.toolWidgetIdInLocal, "strokeColor", vars.value.newColorInLocal, callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeToolStrokeColor$vars", [{
name: "ToolWidgetId",
attrName: "toolWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "NewColor",
attrName: "newColorInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeToolStrokeColor$Action = function (toolWidgetIdIn, newColorIn) {
toolWidgetIdIn = (toolWidgetIdIn === undefined) ? "" : toolWidgetIdIn;
newColorIn = (newColorIn === undefined) ? "" : newColorIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeToolStrokeColor$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(toolWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(newColorIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeToolStrokeOpacity", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeToolProperty_Number"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeToolStrokeOpacity$Action = function (toolWidgetIdIn, newOpacityIn, callContext) {
return OS.Logger.startActiveSpan("ChangeToolStrokeOpacity", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeToolStrokeOpacity");
span.setAttribute("outsystems.function.key", "d45be739-9534-4a88-b729-b60a2991efce");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeToolStrokeOpacity$vars"))());
vars.value.toolWidgetIdInLocal = toolWidgetIdIn;
vars.value.newOpacityInLocal = newOpacityIn;
// Execute Action: ChangeToolProperty_Number
OutSystemsMapsController.default.changeToolProperty_Number$Action(vars.value.toolWidgetIdInLocal, "strokeOpacity", vars.value.newOpacityInLocal, callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeToolStrokeOpacity$vars", [{
name: "ToolWidgetId",
attrName: "toolWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "NewOpacity",
attrName: "newOpacityInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeToolStrokeOpacity$Action = function (toolWidgetIdIn, newOpacityIn) {
toolWidgetIdIn = (toolWidgetIdIn === undefined) ? "" : toolWidgetIdIn;
newOpacityIn = (newOpacityIn === undefined) ? OS.DataTypes.Decimal.defaultValue : newOpacityIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeToolStrokeOpacity$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(toolWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(newOpacityIn, OS.DataTypes.DataTypes.Decimal)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ChangeToolStrokeWeight", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ChangeToolProperty_Number"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.changeToolStrokeWeight$Action = function (toolWidgetIdIn, newWeightIn, callContext) {
return OS.Logger.startActiveSpan("ChangeToolStrokeWeight", function (span) {
if(span) {
span.setAttribute("code.function", "ChangeToolStrokeWeight");
span.setAttribute("outsystems.function.key", "4905e34d-c020-4b62-b044-fb16a01f6741");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ChangeToolStrokeWeight$vars"))());
vars.value.toolWidgetIdInLocal = toolWidgetIdIn;
vars.value.newWeightInLocal = newWeightIn;
// Execute Action: ChangeToolProperty_Number
OutSystemsMapsController.default.changeToolProperty_Number$Action(vars.value.toolWidgetIdInLocal, "strokeWeight", OS.BuiltinFunctions.integerToDecimal(vars.value.newWeightInLocal), callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ChangeToolStrokeWeight$vars", [{
name: "ToolWidgetId",
attrName: "toolWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "NewWeight",
attrName: "newWeightInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
OutSystemsMapsController.default.clientActionProxies.changeToolStrokeWeight$Action = function (toolWidgetIdIn, newWeightIn) {
toolWidgetIdIn = (toolWidgetIdIn === undefined) ? "" : toolWidgetIdIn;
newWeightIn = (newWeightIn === undefined) ? 0 : newWeightIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.changeToolStrokeWeight$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(toolWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(newWeightIn, OS.DataTypes.DataTypes.Integer)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$ContainsLocation", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ContainsLocation.ContainsLocationJS", "OutSystemsMaps.controller$ServerAction.GetMapErrorByMapErrorCode", "OutSystemsMaps.model$ST_0e474756a4be14d378c73cd05f602bcdStructure", "OutSystemsMaps.model$RL_7d169bd7c22bd4fc5143477f3a7cef9a", "OutSystemsMaps.model$ST_f8c2d1b69d03ea90c73e9f07e7d98bf0Structure", "OutSystemsMaps.model$ST_cdd94bc434e873b4d04598ac1e187543Structure"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_ContainsLocation_ContainsLocationJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.containsLocation$Action = function (mapIdIn, pointCoordinatesIn, shapeWidgetIdIn, coordinatesListIn, callContext) {
return OS.Logger.startActiveSpan("ContainsLocation", function (span) {
if(span) {
span.setAttribute("code.function", "ContainsLocation");
span.setAttribute("outsystems.function.key", "6b9d3ded-09c2-4712-b280-18436f3d25e6");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

return OS.Flow.tryFinally(function () {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ContainsLocation$vars"))());
vars.value.mapIdInLocal = mapIdIn;
vars.value.pointCoordinatesInLocal = pointCoordinatesIn.clone();
vars.value.shapeWidgetIdInLocal = shapeWidgetIdIn;
vars.value.coordinatesListInLocal = coordinatesListIn.clone();
var getMapErrorByMapErrorCodeVar = new OS.DataTypes.VariableHolder();
var containsLocationJSResult = new OS.DataTypes.VariableHolder();
var jSONSerialize_PointCoordinatesVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var jSONSerialize_CoordinatesListVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var jSONDeserializeReturnMessageVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(OutSystemsMapsModel.ST_cdd94bc434e873b4d04598ac1e187543Structure))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ContainsLocation$outVars"))());
return OS.Flow.executeAsyncFlow(function () {
// JSON Serialize: JSONSerialize_PointCoordinates
jSONSerialize_PointCoordinatesVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.pointCoordinatesInLocal, true, false);
// JSON Serialize: JSONSerialize_CoordinatesList
jSONSerialize_CoordinatesListVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.coordinatesListInLocal, true, false);
containsLocationJSResult.value = OS.Logger.startActiveSpan("ContainsLocation", function (span) {
if(span) {
span.setAttribute("code.function", "ContainsLocation");
span.setAttribute("outsystems.function.key", "1060b755-2c5b-47bb-b71a-92d0e01d784b");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_ContainsLocation_ContainsLocationJS, "ContainsLocation", "ContainsLocation", {
ShapeWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.shapeWidgetIdInLocal, OS.DataTypes.DataTypes.Text),
PointCoordinates: OS.DataConversion.JSNodeParamConverter.to(jSONSerialize_PointCoordinatesVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
MapId: OS.DataConversion.JSNodeParamConverter.to(vars.value.mapIdInLocal, OS.DataTypes.DataTypes.Text),
CoordinatesList: OS.DataConversion.JSNodeParamConverter.to(jSONSerialize_CoordinatesListVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
ReturnMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsMaps.ContainsLocation$containsLocationJSResult"))();
jsNodeResult.returnMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ReturnMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// JSON Deserialize: JSONDeserializeReturnMessage
jSONDeserializeReturnMessageVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(containsLocationJSResult.value.returnMessageOut, OutSystemsMapsModel.ST_cdd94bc434e873b4d04598ac1e187543Structure, false);
// Is Success?
return OS.Flow.executeSequence(function () {
if((jSONDeserializeReturnMessageVar.value.dataOut.isSuccessAttr)) {
// Assign ErrorMessage
// Success = JSONDeserializeReturnMessage.Data.IsSuccess
outVars.value.successOut = jSONDeserializeReturnMessageVar.value.dataOut.isSuccessAttr;
// IsInsideShape = JSONDeserializeReturnMessage.Data.Message = "true"
outVars.value.isInsideShapeOut = (jSONDeserializeReturnMessageVar.value.dataOut.messageAttr === "true");
} else {
// Execute Action: GetMapErrorByMapErrorCode
return controller.getMapErrorByMapErrorCode$ServerAction(OutSystemsMapsModel.staticEntities.mapErrors.aPI_FailedContainsLocation, callContext).then(function (value) {
getMapErrorByMapErrorCodeVar.value = value;
}).then(function () {
// Assign ErrorMessage
// ErrorMessage.Code = JSONDeserializeReturnMessage.Data.Code
outVars.value.errorMessageOut.codeAttr = jSONDeserializeReturnMessageVar.value.dataOut.codeAttr;
// ErrorMessage.Message = If
outVars.value.errorMessageOut.messageAttr = ((jSONDeserializeReturnMessageVar.value.dataOut.isSuccessAttr) ? ("") : ((getMapErrorByMapErrorCodeVar.value.errorMessageOut + jSONDeserializeReturnMessageVar.value.dataOut.messageAttr)));
// Success = JSONDeserializeReturnMessage.Data.IsSuccess
outVars.value.successOut = jSONDeserializeReturnMessageVar.value.dataOut.isSuccessAttr;
});
}

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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ContainsLocation$vars", [{
name: "MapId",
attrName: "mapIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "PointCoordinates",
attrName: "pointCoordinatesInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new OutSystemsMapsModel.ST_0e474756a4be14d378c73cd05f602bcdStructure();
},
complexType: OutSystemsMapsModel.ST_0e474756a4be14d378c73cd05f602bcdStructure
}, {
name: "ShapeWidgetId",
attrName: "shapeWidgetIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "CoordinatesList",
attrName: "coordinatesListInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new OutSystemsMapsModel.RL_7d169bd7c22bd4fc5143477f3a7cef9a();
},
complexType: OutSystemsMapsModel.RL_7d169bd7c22bd4fc5143477f3a7cef9a
}]);
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ContainsLocation$containsLocationJSResult", [{
name: "ReturnMessage",
attrName: "returnMessageOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ContainsLocation$outVars", [{
name: "IsInsideShape",
attrName: "isInsideShapeOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
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
return new OutSystemsMapsModel.ST_f8c2d1b69d03ea90c73e9f07e7d98bf0Structure();
},
complexType: OutSystemsMapsModel.ST_f8c2d1b69d03ea90c73e9f07e7d98bf0Structure
}]);
OutSystemsMapsController.default.clientActionProxies.containsLocation$Action = function (mapIdIn, pointCoordinatesIn, shapeWidgetIdIn, coordinatesListIn) {
mapIdIn = (mapIdIn === undefined) ? "" : mapIdIn;
pointCoordinatesIn = (pointCoordinatesIn === undefined) ? new OutSystemsMapsModel.ST_0e474756a4be14d378c73cd05f602bcdStructure() : pointCoordinatesIn;
shapeWidgetIdIn = (shapeWidgetIdIn === undefined) ? "" : shapeWidgetIdIn;
coordinatesListIn = (coordinatesListIn === undefined) ? new OutSystemsMapsModel.RL_7d169bd7c22bd4fc5143477f3a7cef9a() : coordinatesListIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.containsLocation$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapIdIn, OS.DataTypes.DataTypes.Text), pointCoordinatesIn, OS.DataConversion.JSNodeParamConverter.from(shapeWidgetIdIn, OS.DataTypes.DataTypes.Text), coordinatesListIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsInsideShape: OS.DataConversion.JSNodeParamConverter.to(actionResults.isInsideShapeOut, OS.DataTypes.DataTypes.Boolean),
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: actionResults.errorMessageOut
};
});
};
});

define("OutSystemsMaps.controller$ContainsLocation.ContainsLocationJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.ReturnMessage = OutSystems.Maps.MapAPI.ShapeManager.ContainsLocation(
    $parameters.MapId,
    $parameters.ShapeWidgetId,
    $parameters.PointCoordinates,
    $parameters.CoordinatesList
);
};
});


define("OutSystemsMaps.controller$CreateDrawingTools", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$CreateDrawingTools.CreateShapeUniqueIDJS", "OutSystemsMaps.model$ST_3f16cd459ccd861deffd4483bc1bbac3Structure"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_CreateDrawingTools_CreateShapeUniqueIDJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.createDrawingTools$Action = function (drawingToolsIdIn, drawingToolsIn, callContext) {
return OS.Logger.startActiveSpan("CreateDrawingTools", function (span) {
if(span) {
span.setAttribute("code.function", "CreateDrawingTools");
span.setAttribute("outsystems.function.key", "8d614ac7-67d8-44f6-b737-45d7c533c5f4");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.CreateDrawingTools$vars"))());
vars.value.drawingToolsIdInLocal = drawingToolsIdIn;
vars.value.drawingToolsInLocal = drawingToolsIn.clone();
var serializeConfigsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
// JSON Serialize: SerializeConfigs
serializeConfigsVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.drawingToolsInLocal, true, false);
OS.Logger.startActiveSpan("CreateShapeUniqueID", function (span) {
if(span) {
span.setAttribute("code.function", "CreateShapeUniqueID");
span.setAttribute("outsystems.function.key", "1ef49ac0-4b2b-4689-91f3-97ff0cc6bb38");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_CreateDrawingTools_CreateShapeUniqueIDJS, "CreateShapeUniqueID", "CreateDrawingTools", {
DrawingToolsId: OS.DataConversion.JSNodeParamConverter.to(vars.value.drawingToolsIdInLocal, OS.DataTypes.DataTypes.Text),
Configs: OS.DataConversion.JSNodeParamConverter.to(serializeConfigsVar.value.jSONOut, OS.DataTypes.DataTypes.Text)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.CreateDrawingTools$vars", [{
name: "DrawingToolsId",
attrName: "drawingToolsIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "DrawingTools",
attrName: "drawingToolsInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new OutSystemsMapsModel.ST_3f16cd459ccd861deffd4483bc1bbac3Structure();
},
complexType: OutSystemsMapsModel.ST_3f16cd459ccd861deffd4483bc1bbac3Structure
}]);
OutSystemsMapsController.default.clientActionProxies.createDrawingTools$Action = function (drawingToolsIdIn, drawingToolsIn) {
drawingToolsIdIn = (drawingToolsIdIn === undefined) ? "" : drawingToolsIdIn;
drawingToolsIn = (drawingToolsIn === undefined) ? new OutSystemsMapsModel.ST_3f16cd459ccd861deffd4483bc1bbac3Structure() : drawingToolsIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.createDrawingTools$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(drawingToolsIdIn, OS.DataTypes.DataTypes.Text), drawingToolsIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$CreateDrawingTools.CreateShapeUniqueIDJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.Maps.MapAPI.DrawingToolsManager.CreateDrawingTools($parameters.DrawingToolsId, $parameters.Configs)
};
});


define("OutSystemsMaps.controller$CreateFileLayer", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$CreateFileLayer.CreateFileLayerUniqueIDJS", "OutSystemsMaps.model$ST_793e574f3ddb64f39831eacf8a4462b0Structure"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_CreateFileLayer_CreateFileLayerUniqueIDJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.createFileLayer$Action = function (fileLayerIdIn, fileLayerIn, callContext) {
return OS.Logger.startActiveSpan("CreateFileLayer", function (span) {
if(span) {
span.setAttribute("code.function", "CreateFileLayer");
span.setAttribute("outsystems.function.key", "bfe44da8-1b68-46b1-84e4-579f34d6e80c");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.CreateFileLayer$vars"))());
vars.value.fileLayerIdInLocal = fileLayerIdIn;
vars.value.fileLayerInLocal = fileLayerIn.clone();
var serializeConfigsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
// JSON Serialize: SerializeConfigs
serializeConfigsVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.fileLayerInLocal, true, false);
OS.Logger.startActiveSpan("CreateFileLayerUniqueID", function (span) {
if(span) {
span.setAttribute("code.function", "CreateFileLayerUniqueID");
span.setAttribute("outsystems.function.key", "2abec026-e608-4154-a377-881592a633eb");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_CreateFileLayer_CreateFileLayerUniqueIDJS, "CreateFileLayerUniqueID", "CreateFileLayer", {
FileLayerId: OS.DataConversion.JSNodeParamConverter.to(vars.value.fileLayerIdInLocal, OS.DataTypes.DataTypes.Text),
Configs: OS.DataConversion.JSNodeParamConverter.to(serializeConfigsVar.value.jSONOut, OS.DataTypes.DataTypes.Text)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.CreateFileLayer$vars", [{
name: "FileLayerId",
attrName: "fileLayerIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "FileLayer",
attrName: "fileLayerInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new OutSystemsMapsModel.ST_793e574f3ddb64f39831eacf8a4462b0Structure();
},
complexType: OutSystemsMapsModel.ST_793e574f3ddb64f39831eacf8a4462b0Structure
}]);
OutSystemsMapsController.default.clientActionProxies.createFileLayer$Action = function (fileLayerIdIn, fileLayerIn) {
fileLayerIdIn = (fileLayerIdIn === undefined) ? "" : fileLayerIdIn;
fileLayerIn = (fileLayerIn === undefined) ? new OutSystemsMapsModel.ST_793e574f3ddb64f39831eacf8a4462b0Structure() : fileLayerIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.createFileLayer$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(fileLayerIdIn, OS.DataTypes.DataTypes.Text), fileLayerIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$CreateFileLayer.CreateFileLayerUniqueIDJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.Maps.MapAPI.FileLayerManager.CreateFileLayer($parameters.FileLayerId, $parameters.Configs)
};
});


define("OutSystemsMaps.controller$CreateHeatmapLayer", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$CreateHeatmapLayer.CreateHeatmapLayerUniqueIDJS", "OutSystemsMaps.model$ST_ca5fecbdf222b72d179909c1f030119cStructure"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_CreateHeatmapLayer_CreateHeatmapLayerUniqueIDJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.createHeatmapLayer$Action = function (heatmapLayerIdIn, heatmapLayerIn, callContext) {
return OS.Logger.startActiveSpan("CreateHeatmapLayer", function (span) {
if(span) {
span.setAttribute("code.function", "CreateHeatmapLayer");
span.setAttribute("outsystems.function.key", "34b9e3a1-e54b-4a1c-bd04-e49578fd101d");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.CreateHeatmapLayer$vars"))());
vars.value.heatmapLayerIdInLocal = heatmapLayerIdIn;
vars.value.heatmapLayerInLocal = heatmapLayerIn.clone();
var serializeConfigsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
// JSON Serialize: SerializeConfigs
serializeConfigsVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.heatmapLayerInLocal, true, false);
OS.Logger.startActiveSpan("CreateHeatmapLayerUniqueID", function (span) {
if(span) {
span.setAttribute("code.function", "CreateHeatmapLayerUniqueID");
span.setAttribute("outsystems.function.key", "4e793dab-eafd-4430-a8ba-bd3b2f13aa8a");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_CreateHeatmapLayer_CreateHeatmapLayerUniqueIDJS, "CreateHeatmapLayerUniqueID", "CreateHeatmapLayer", {
Configs: OS.DataConversion.JSNodeParamConverter.to(serializeConfigsVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
HeatmapLayerId: OS.DataConversion.JSNodeParamConverter.to(vars.value.heatmapLayerIdInLocal, OS.DataTypes.DataTypes.Text)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.CreateHeatmapLayer$vars", [{
name: "HeatmapLayerId",
attrName: "heatmapLayerIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "HeatmapLayer",
attrName: "heatmapLayerInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new OutSystemsMapsModel.ST_ca5fecbdf222b72d179909c1f030119cStructure();
},
complexType: OutSystemsMapsModel.ST_ca5fecbdf222b72d179909c1f030119cStructure
}]);
OutSystemsMapsController.default.clientActionProxies.createHeatmapLayer$Action = function (heatmapLayerIdIn, heatmapLayerIn) {
heatmapLayerIdIn = (heatmapLayerIdIn === undefined) ? "" : heatmapLayerIdIn;
heatmapLayerIn = (heatmapLayerIn === undefined) ? new OutSystemsMapsModel.ST_ca5fecbdf222b72d179909c1f030119cStructure() : heatmapLayerIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.createHeatmapLayer$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(heatmapLayerIdIn, OS.DataTypes.DataTypes.Text), heatmapLayerIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$CreateHeatmapLayer.CreateHeatmapLayerUniqueIDJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.Maps.MapAPI.HeatmapLayerManager.CreateHeatmapLayer($parameters.HeatmapLayerId, $parameters.Configs)
};
});


define("OutSystemsMaps.controller$CreateMap", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$CreateMap.CreateMapJS"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_CreateMap_CreateMapJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.createMap$Action = function (uniqueIdIn, providerIn, mapTypeIn, configsIn, callContext) {
return OS.Logger.startActiveSpan("CreateMap", function (span) {
if(span) {
span.setAttribute("code.function", "CreateMap");
span.setAttribute("outsystems.function.key", "e3c3f6c7-88e6-43d3-9955-7587601720ab");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.CreateMap$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.providerInLocal = providerIn;
vars.value.mapTypeInLocal = mapTypeIn;
vars.value.configsInLocal = configsIn;
OS.Logger.startActiveSpan("CreateMap", function (span) {
if(span) {
span.setAttribute("code.function", "CreateMap");
span.setAttribute("outsystems.function.key", "c2968176-9dc2-4686-8cb2-82a4ffef38dc");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_CreateMap_CreateMapJS, "CreateMap", "CreateMap", {
mapProvider: OS.DataConversion.JSNodeParamConverter.to(vars.value.providerInLocal, OS.DataTypes.DataTypes.Text),
configs: OS.DataConversion.JSNodeParamConverter.to(vars.value.configsInLocal, OS.DataTypes.DataTypes.Text),
mapID: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.DataTypes.DataTypes.Text),
mapType: OS.DataConversion.JSNodeParamConverter.to(vars.value.mapTypeInLocal, OS.DataTypes.DataTypes.Text)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.CreateMap$vars", [{
name: "UniqueId",
attrName: "uniqueIdInLocal",
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
}, {
name: "MapType",
attrName: "mapTypeInLocal",
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
OutSystemsMapsController.default.clientActionProxies.createMap$Action = function (uniqueIdIn, providerIn, mapTypeIn, configsIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
providerIn = (providerIn === undefined) ? "" : providerIn;
mapTypeIn = (mapTypeIn === undefined) ? "" : mapTypeIn;
configsIn = (configsIn === undefined) ? "" : configsIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.createMap$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.DataTypes.DataTypes.Text), providerIn, mapTypeIn, OS.DataConversion.JSNodeParamConverter.from(configsIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$CreateMap.CreateMapJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.Maps.MapAPI.MapManager.CreateMap($parameters.mapID, $parameters.mapProvider, $parameters.mapType, $parameters.configs);
};
});


define("OutSystemsMaps.controller$CreateMarker", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$CreateMarker.CreateMarkerJS", "OutSystemsMaps.controller$GenerateUniqueId", "OutSystemsMaps.model$ST_5a7ef7acf3b11e0c41074aefa2466f75Structure"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_CreateMarker_CreateMarkerJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.createMarker$Action = function (mapWidgetIdIn, markerIdIn, markerIn, callContext) {
return OS.Logger.startActiveSpan("CreateMarker", function (span) {
if(span) {
span.setAttribute("code.function", "CreateMarker");
span.setAttribute("outsystems.function.key", "eea7c7c3-f2bb-4838-ab4e-692c458d8e78");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.CreateMarker$vars"))());
vars.value.mapWidgetIdInLocal = mapWidgetIdIn;
vars.value.markerIdInLocal = markerIdIn;
vars.value.markerInLocal = markerIn.clone();
var generateUniqueIdVar = new OS.DataTypes.VariableHolder();
var serializeConfigsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
// JSON Serialize: SerializeConfigs
serializeConfigsVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.markerInLocal, true, false);
// Execute Action: GenerateUniqueId
generateUniqueIdVar.value = OutSystemsMapsController.default.generateUniqueId$Action(vars.value.markerIdInLocal, callContext);

OS.Logger.startActiveSpan("CreateMarker", function (span) {
if(span) {
span.setAttribute("code.function", "CreateMarker");
span.setAttribute("outsystems.function.key", "eed464dd-572c-4232-af37-77288fe7ecf1");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_CreateMarker_CreateMarkerJS, "CreateMarker", "CreateMarker", {
MarkerId: OS.DataConversion.JSNodeParamConverter.to(generateUniqueIdVar.value.unique_IDOut, OS.DataTypes.DataTypes.Text),
Configs: OS.DataConversion.JSNodeParamConverter.to(serializeConfigsVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
MapWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.mapWidgetIdInLocal, OS.DataTypes.DataTypes.Text)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.CreateMarker$vars", [{
name: "MapWidgetId",
attrName: "mapWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "MarkerId",
attrName: "markerIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Marker",
attrName: "markerInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new OutSystemsMapsModel.ST_5a7ef7acf3b11e0c41074aefa2466f75Structure();
},
complexType: OutSystemsMapsModel.ST_5a7ef7acf3b11e0c41074aefa2466f75Structure
}]);
OutSystemsMapsController.default.clientActionProxies.createMarker$Action = function (mapWidgetIdIn, markerIdIn, markerIn) {
mapWidgetIdIn = (mapWidgetIdIn === undefined) ? "" : mapWidgetIdIn;
markerIdIn = (markerIdIn === undefined) ? "" : markerIdIn;
markerIn = (markerIn === undefined) ? new OutSystemsMapsModel.ST_5a7ef7acf3b11e0c41074aefa2466f75Structure() : markerIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.createMarker$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(markerIdIn, OS.DataTypes.DataTypes.Text), markerIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$CreateMarker.CreateMarkerJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.Maps.MapAPI.MarkerManager.CreateMarker($parameters.MapWidgetId, $parameters.MarkerId, $parameters.Configs)
};
});


define("OutSystemsMaps.controller$CreateMarkerByUniqueID", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$CreateMarkerByUniqueID.CreateMarkeByUniqueIDJS", "OutSystemsMaps.model$ST_51ef6a78944132edc56aa7bf7c4ea240Structure"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_CreateMarkerByUniqueID_CreateMarkeByUniqueIDJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.createMarkerByUniqueID$Action = function (markerIdIn, markerIn, markerTypeIn, callContext) {
return OS.Logger.startActiveSpan("CreateMarkerByUniqueID", function (span) {
if(span) {
span.setAttribute("code.function", "CreateMarkerByUniqueID");
span.setAttribute("outsystems.function.key", "13ae2c95-106e-405d-a8c9-8a598f3f1f70");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.CreateMarkerByUniqueID$vars"))());
vars.value.markerIdInLocal = markerIdIn;
vars.value.markerInLocal = markerIn.clone();
vars.value.markerTypeInLocal = markerTypeIn;
var serializeConfigsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
// JSON Serialize: SerializeConfigs
serializeConfigsVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.markerInLocal, true, false);
OS.Logger.startActiveSpan("CreateMarkeByUniqueID", function (span) {
if(span) {
span.setAttribute("code.function", "CreateMarkeByUniqueID");
span.setAttribute("outsystems.function.key", "bbca59b2-1bbf-443f-89dd-eb71ca7c945f");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_CreateMarkerByUniqueID_CreateMarkeByUniqueIDJS, "CreateMarkeByUniqueID", "CreateMarkerByUniqueID", {
Configs: OS.DataConversion.JSNodeParamConverter.to(serializeConfigsVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
MarkerId: OS.DataConversion.JSNodeParamConverter.to(vars.value.markerIdInLocal, OS.DataTypes.DataTypes.Text),
MarkerType: OS.DataConversion.JSNodeParamConverter.to(vars.value.markerTypeInLocal, OS.DataTypes.DataTypes.Text)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.CreateMarkerByUniqueID$vars", [{
name: "MarkerId",
attrName: "markerIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Marker",
attrName: "markerInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new OutSystemsMapsModel.ST_51ef6a78944132edc56aa7bf7c4ea240Structure();
},
complexType: OutSystemsMapsModel.ST_51ef6a78944132edc56aa7bf7c4ea240Structure
}, {
name: "MarkerType",
attrName: "markerTypeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.clientActionProxies.createMarkerByUniqueID$Action = function (markerIdIn, markerIn, markerTypeIn) {
markerIdIn = (markerIdIn === undefined) ? "" : markerIdIn;
markerIn = (markerIn === undefined) ? new OutSystemsMapsModel.ST_51ef6a78944132edc56aa7bf7c4ea240Structure() : markerIn;
markerTypeIn = (markerTypeIn === undefined) ? "" : markerTypeIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.createMarkerByUniqueID$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(markerIdIn, OS.DataTypes.DataTypes.Text), markerIn, markerTypeIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$CreateMarkerByUniqueID.CreateMarkeByUniqueIDJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.Maps.MapAPI.MarkerManager.CreateMarkerByUniqueID($parameters.MarkerId, $parameters.MarkerType, $parameters.Configs)
};
});


define("OutSystemsMaps.controller$CreateSearchPlaces", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$CreateSearchPlaces.CreateSearchPlacesJS"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_CreateSearchPlaces_CreateSearchPlacesJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.createSearchPlaces$Action = function (uniqueIdIn, configsIn, callContext) {
return OS.Logger.startActiveSpan("CreateSearchPlaces", function (span) {
if(span) {
span.setAttribute("code.function", "CreateSearchPlaces");
span.setAttribute("outsystems.function.key", "74525e31-86a3-487f-95dc-1402ad265c4b");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.CreateSearchPlaces$vars"))());
vars.value.uniqueIdInLocal = uniqueIdIn;
vars.value.configsInLocal = configsIn;
OS.Logger.startActiveSpan("CreateSearchPlaces", function (span) {
if(span) {
span.setAttribute("code.function", "CreateSearchPlaces");
span.setAttribute("outsystems.function.key", "daf76d5c-2744-4546-ad31-21c9c6d0b7c1");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_CreateSearchPlaces_CreateSearchPlacesJS, "CreateSearchPlaces", "CreateSearchPlaces", {
configs: OS.DataConversion.JSNodeParamConverter.to(vars.value.configsInLocal, OS.DataTypes.DataTypes.Text),
searchPlacesId: OS.DataConversion.JSNodeParamConverter.to(vars.value.uniqueIdInLocal, OS.DataTypes.DataTypes.Text)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.CreateSearchPlaces$vars", [{
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
OutSystemsMapsController.default.clientActionProxies.createSearchPlaces$Action = function (uniqueIdIn, configsIn) {
uniqueIdIn = (uniqueIdIn === undefined) ? "" : uniqueIdIn;
configsIn = (configsIn === undefined) ? "" : configsIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.createSearchPlaces$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(uniqueIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(configsIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$CreateSearchPlaces.CreateSearchPlacesJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.Maps.PlacesAPI.SearchPlacesManager.CreateSearchPlaces($parameters.searchPlacesId, $parameters.configs);
};
});


define("OutSystemsMaps.controller$CreateShape", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$CreateShape.CreateShapeUniqueIDJS", "OutSystemsMaps.model$ST_4d96f69748c4f35fb433f7995d061407Structure"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_CreateShape_CreateShapeUniqueIDJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.createShape$Action = function (shapeIdIn, shapeIn, shapeTypeIn, callContext) {
return OS.Logger.startActiveSpan("CreateShape", function (span) {
if(span) {
span.setAttribute("code.function", "CreateShape");
span.setAttribute("outsystems.function.key", "86c97075-9d24-4b9a-8fa0-779ac6f3608e");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.CreateShape$vars"))());
vars.value.shapeIdInLocal = shapeIdIn;
vars.value.shapeInLocal = shapeIn.clone();
vars.value.shapeTypeInLocal = shapeTypeIn;
var serializeConfigsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
// JSON Serialize: SerializeConfigs
serializeConfigsVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.shapeInLocal, true, false);
OS.Logger.startActiveSpan("CreateShapeUniqueID", function (span) {
if(span) {
span.setAttribute("code.function", "CreateShapeUniqueID");
span.setAttribute("outsystems.function.key", "6ae80fc4-f3c1-4857-923d-3ca8c45e8300");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_CreateShape_CreateShapeUniqueIDJS, "CreateShapeUniqueID", "CreateShape", {
Configs: OS.DataConversion.JSNodeParamConverter.to(serializeConfigsVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
ShapeType: OS.DataConversion.JSNodeParamConverter.to(vars.value.shapeTypeInLocal, OS.DataTypes.DataTypes.Text),
ShapeId: OS.DataConversion.JSNodeParamConverter.to(vars.value.shapeIdInLocal, OS.DataTypes.DataTypes.Text)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.CreateShape$vars", [{
name: "ShapeId",
attrName: "shapeIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Shape",
attrName: "shapeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new OutSystemsMapsModel.ST_4d96f69748c4f35fb433f7995d061407Structure();
},
complexType: OutSystemsMapsModel.ST_4d96f69748c4f35fb433f7995d061407Structure
}, {
name: "ShapeType",
attrName: "shapeTypeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.clientActionProxies.createShape$Action = function (shapeIdIn, shapeIn, shapeTypeIn) {
shapeIdIn = (shapeIdIn === undefined) ? "" : shapeIdIn;
shapeIn = (shapeIn === undefined) ? new OutSystemsMapsModel.ST_4d96f69748c4f35fb433f7995d061407Structure() : shapeIn;
shapeTypeIn = (shapeTypeIn === undefined) ? "" : shapeTypeIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.createShape$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(shapeIdIn, OS.DataTypes.DataTypes.Text), shapeIn, shapeTypeIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$CreateShape.CreateShapeUniqueIDJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.Maps.MapAPI.ShapeManager.CreateShape($parameters.ShapeId, $parameters.ShapeType, $parameters.Configs)
};
});


define("OutSystemsMaps.controller$FileLayerEventSubscribe", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$FileLayerEventSubscribe.FileLayerEventRegisterJS"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_FileLayerEventSubscribe_FileLayerEventRegisterJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.fileLayerEventSubscribe$Action = function (fileLayerWidgetIdIn, fileLayerEventIdIn, callbackIn, callContext) {
return OS.Logger.startActiveSpan("FileLayerEventSubscribe", function (span) {
if(span) {
span.setAttribute("code.function", "FileLayerEventSubscribe");
span.setAttribute("outsystems.function.key", "ee4159d6-aba2-4b5b-a751-ff4084a97674");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.FileLayerEventSubscribe$vars"))());
vars.value.fileLayerWidgetIdInLocal = fileLayerWidgetIdIn;
vars.value.fileLayerEventIdInLocal = fileLayerEventIdIn;
vars.value.callbackInLocal = callbackIn;
OS.Logger.startActiveSpan("FileLayerEventRegister", function (span) {
if(span) {
span.setAttribute("code.function", "FileLayerEventRegister");
span.setAttribute("outsystems.function.key", "a45a64f8-6075-4ef1-9e30-c5fa94dd97aa");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_FileLayerEventSubscribe_FileLayerEventRegisterJS, "FileLayerEventRegister", "FileLayerEventSubscribe", {
Callback: OS.DataConversion.JSNodeParamConverter.to(vars.value.callbackInLocal, OS.DataTypes.DataTypes.Object),
FileLayerEventId: OS.DataConversion.JSNodeParamConverter.to(vars.value.fileLayerEventIdInLocal, OS.DataTypes.DataTypes.Text),
FileLayerWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.fileLayerWidgetIdInLocal, OS.DataTypes.DataTypes.Text)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.FileLayerEventSubscribe$vars", [{
name: "FileLayerWidgetId",
attrName: "fileLayerWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "FileLayerEventId",
attrName: "fileLayerEventIdInLocal",
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
OutSystemsMapsController.default.clientActionProxies.fileLayerEventSubscribe$Action = function (fileLayerWidgetIdIn, fileLayerEventIdIn, callbackIn) {
fileLayerWidgetIdIn = (fileLayerWidgetIdIn === undefined) ? "" : fileLayerWidgetIdIn;
fileLayerEventIdIn = (fileLayerEventIdIn === undefined) ? "" : fileLayerEventIdIn;
callbackIn = (callbackIn === undefined) ? null : callbackIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.fileLayerEventSubscribe$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(fileLayerWidgetIdIn, OS.DataTypes.DataTypes.Text), fileLayerEventIdIn, OS.DataConversion.JSNodeParamConverter.from(callbackIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$FileLayerEventSubscribe.FileLayerEventRegisterJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.Maps.MapAPI.FileLayerManager.Events.Subscribe($parameters.FileLayerWidgetId, $parameters.FileLayerEventId, $parameters.Callback);
};
});


define("OutSystemsMaps.controller$FileLayerEventUnsubscribe", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$FileLayerEventUnsubscribe.FileLayerEventUnregisterJS"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_FileLayerEventUnsubscribe_FileLayerEventUnregisterJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.fileLayerEventUnsubscribe$Action = function (fileLayerWidgetIdIn, fileLayerEventIdIn, callbackIn, callContext) {
return OS.Logger.startActiveSpan("FileLayerEventUnsubscribe", function (span) {
if(span) {
span.setAttribute("code.function", "FileLayerEventUnsubscribe");
span.setAttribute("outsystems.function.key", "ecfac7a3-11e7-4f23-a499-74debcc60210");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.FileLayerEventUnsubscribe$vars"))());
vars.value.fileLayerWidgetIdInLocal = fileLayerWidgetIdIn;
vars.value.fileLayerEventIdInLocal = fileLayerEventIdIn;
vars.value.callbackInLocal = callbackIn;
OS.Logger.startActiveSpan("FileLayerEventUnregister", function (span) {
if(span) {
span.setAttribute("code.function", "FileLayerEventUnregister");
span.setAttribute("outsystems.function.key", "5ef88e39-8420-46d9-9ce7-00e3d6c6db6b");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_FileLayerEventUnsubscribe_FileLayerEventUnregisterJS, "FileLayerEventUnregister", "FileLayerEventUnsubscribe", {
Callback: OS.DataConversion.JSNodeParamConverter.to(vars.value.callbackInLocal, OS.DataTypes.DataTypes.Object),
FileLayerWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.fileLayerWidgetIdInLocal, OS.DataTypes.DataTypes.Text),
FileLayerEventId: OS.DataConversion.JSNodeParamConverter.to(vars.value.fileLayerEventIdInLocal, OS.DataTypes.DataTypes.Text)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.FileLayerEventUnsubscribe$vars", [{
name: "FileLayerWidgetId",
attrName: "fileLayerWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "FileLayerEventId",
attrName: "fileLayerEventIdInLocal",
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
OutSystemsMapsController.default.clientActionProxies.fileLayerEventUnsubscribe$Action = function (fileLayerWidgetIdIn, fileLayerEventIdIn, callbackIn) {
fileLayerWidgetIdIn = (fileLayerWidgetIdIn === undefined) ? "" : fileLayerWidgetIdIn;
fileLayerEventIdIn = (fileLayerEventIdIn === undefined) ? "" : fileLayerEventIdIn;
callbackIn = (callbackIn === undefined) ? null : callbackIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.fileLayerEventUnsubscribe$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(fileLayerWidgetIdIn, OS.DataTypes.DataTypes.Text), fileLayerEventIdIn, OS.DataConversion.JSNodeParamConverter.from(callbackIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$FileLayerEventUnsubscribe.FileLayerEventUnregisterJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.Maps.MapAPI.FileLayerManager.Events.Unsubscribe($parameters.FileLayerWidgetId, $parameters.FileLayerEventId, $parameters.Callback);
};
});


define("OutSystemsMaps.controller$GenerateUniqueId", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$GenerateUniqueId.RandomStringJS"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_GenerateUniqueId_RandomStringJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.generateUniqueId$Action = function (current_Unique_IDIn, callContext) {
return OS.Logger.startActiveSpan("GenerateUniqueId", function (span) {
if(span) {
span.setAttribute("code.function", "GenerateUniqueId");
span.setAttribute("outsystems.function.key", "27e2db49-8dce-4879-8f7f-7c46729b41ae");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.GenerateUniqueId$vars"))());
vars.value.current_Unique_IDInLocal = current_Unique_IDIn;
var randomStringJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.GenerateUniqueId$outVars"))());
// Current_ID is empty?
if(((vars.value.current_Unique_IDInLocal === OS.BuiltinFunctions.nullTextIdentifier()))) {
randomStringJSResult.value = OS.Logger.startActiveSpan("RandomString", function (span) {
if(span) {
span.setAttribute("code.function", "RandomString");
span.setAttribute("outsystems.function.key", "48c0b163-b8f2-4310-87c9-45505984470a");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_GenerateUniqueId_RandomStringJS, "RandomString", "GenerateUniqueId", {
UniqueID: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsMaps.GenerateUniqueId$randomStringJSResult"))();
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.GenerateUniqueId$vars", [{
name: "Current_Unique_ID",
attrName: "current_Unique_IDInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.GenerateUniqueId$randomStringJSResult", [{
name: "UniqueID",
attrName: "uniqueIDOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.GenerateUniqueId$outVars", [{
name: "Unique_ID",
attrName: "unique_IDOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.clientActionProxies.generateUniqueId$Action = function (current_Unique_IDIn) {
current_Unique_IDIn = (current_Unique_IDIn === undefined) ? "" : current_Unique_IDIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.generateUniqueId$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(current_Unique_IDIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Unique_ID: OS.DataConversion.JSNodeParamConverter.to(actionResults.unique_IDOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("OutSystemsMaps.controller$GenerateUniqueId.RandomStringJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.UniqueID = Math.random().toString(36);

};
});


define("OutSystemsMaps.controller$GetCircleShape", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$GetCircleShape.GetCircleShapeJS", "OutSystemsMaps.model$ST_7e9e7e47a56960855c31bd37116d68abStructure"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_GetCircleShape_GetCircleShapeJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.getCircleShape$Action = function (circleWidgetIdIn, callContext) {
return OS.Logger.startActiveSpan("GetCircleShape", function (span) {
if(span) {
span.setAttribute("code.function", "GetCircleShape");
span.setAttribute("outsystems.function.key", "61eff8df-d938-4aae-a413-5f0892ac293d");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.GetCircleShape$vars"))());
vars.value.circleWidgetIdInLocal = circleWidgetIdIn;
var getCircleShapeJSResult = new OS.DataTypes.VariableHolder();
var jSONDeserializeStringifiedPathVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(OutSystemsMapsModel.ST_7e9e7e47a56960855c31bd37116d68abStructure))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.GetCircleShape$outVars"))());
getCircleShapeJSResult.value = OS.Logger.startActiveSpan("GetCircleShape", function (span) {
if(span) {
span.setAttribute("code.function", "GetCircleShape");
span.setAttribute("outsystems.function.key", "8651259d-00cf-450d-b189-9447b25c2946");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_GetCircleShape_GetCircleShapeJS, "GetCircleShape", "GetCircleShape", {
ShapeId: OS.DataConversion.JSNodeParamConverter.to(vars.value.circleWidgetIdInLocal, OS.DataTypes.DataTypes.Text),
StringifiedCircle: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsMaps.GetCircleShape$getCircleShapeJSResult"))();
jsNodeResult.stringifiedCircleOut = OS.DataConversion.JSNodeParamConverter.from($parameters.StringifiedCircle, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// JSON Deserialize: JSONDeserializeStringifiedPath
jSONDeserializeStringifiedPathVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(getCircleShapeJSResult.value.stringifiedCircleOut, OutSystemsMapsModel.ST_7e9e7e47a56960855c31bd37116d68abStructure, false);
// CircleShape = JSONDeserializeStringifiedPath.Data
outVars.value.circleShapeOut = jSONDeserializeStringifiedPathVar.value.dataOut;
return outVars.value;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.GetCircleShape$vars", [{
name: "CircleWidgetId",
attrName: "circleWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.GetCircleShape$getCircleShapeJSResult", [{
name: "StringifiedCircle",
attrName: "stringifiedCircleOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.GetCircleShape$outVars", [{
name: "CircleShape",
attrName: "circleShapeOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new OutSystemsMapsModel.ST_7e9e7e47a56960855c31bd37116d68abStructure();
},
complexType: OutSystemsMapsModel.ST_7e9e7e47a56960855c31bd37116d68abStructure
}]);
OutSystemsMapsController.default.clientActionProxies.getCircleShape$Action = function (circleWidgetIdIn) {
circleWidgetIdIn = (circleWidgetIdIn === undefined) ? "" : circleWidgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.getCircleShape$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(circleWidgetIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
CircleShape: actionResults.circleShapeOut
};
});
};
});

define("OutSystemsMaps.controller$GetCircleShape.GetCircleShapeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.StringifiedCircle = OutSystems.Maps.MapAPI.ShapeManager.GetCircle($parameters.ShapeId);
};
});


define("OutSystemsMaps.controller$GetHashcode", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$GetHashcode.GetHashcodeJS"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_GetHashcode_GetHashcodeJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.getHashcode$Action = function (dataIn, callContext) {
return OS.Logger.startActiveSpan("GetHashcode", function (span) {
if(span) {
span.setAttribute("code.function", "GetHashcode");
span.setAttribute("outsystems.function.key", "eaba19f5-1ce5-4d81-9e31-293f2ded0c6f");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.GetHashcode$vars"))());
vars.value.dataInLocal = dataIn;
var getHashcodeJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.GetHashcode$outVars"))());
getHashcodeJSResult.value = OS.Logger.startActiveSpan("GetHashcode", function (span) {
if(span) {
span.setAttribute("code.function", "GetHashcode");
span.setAttribute("outsystems.function.key", "0a5d4a56-20a6-46fc-93a4-3e8bfa343d7c");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_GetHashcode_GetHashcodeJS, "GetHashcode", "GetHashcode", {
Data: OS.DataConversion.JSNodeParamConverter.to(vars.value.dataInLocal, OS.DataTypes.DataTypes.Text),
Hashcode: OS.DataConversion.JSNodeParamConverter.to(OS.DataTypes.LongInteger.defaultValue, OS.DataTypes.DataTypes.LongInteger)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsMaps.GetHashcode$getHashcodeJSResult"))();
jsNodeResult.hashcodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Hashcode, OS.DataTypes.DataTypes.LongInteger);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// Hashcode = GetHashcode.Hashcode
outVars.value.hashcodeOut = getHashcodeJSResult.value.hashcodeOut;
return outVars.value;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.GetHashcode$vars", [{
name: "Data",
attrName: "dataInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.GetHashcode$getHashcodeJSResult", [{
name: "Hashcode",
attrName: "hashcodeOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.GetHashcode$outVars", [{
name: "Hashcode",
attrName: "hashcodeOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
OutSystemsMapsController.default.clientActionProxies.getHashcode$Action = function (dataIn) {
dataIn = (dataIn === undefined) ? "" : dataIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.getHashcode$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(dataIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Hashcode: OS.DataConversion.JSNodeParamConverter.to(actionResults.hashcodeOut, OS.DataTypes.DataTypes.LongInteger)
};
});
};
});

define("OutSystemsMaps.controller$GetHashcode.GetHashcodeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Hashcode = OutSystems.Maps.MapAPI.Auxiliary.GetHashCode($parameters.Data);
};
});


define("OutSystemsMaps.controller$GetLegsFromDirection", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$GetLegsFromDirection.GetLegsFromDirectionJS", "OutSystemsMaps.model$ST_2c6551904cfa95c93fa24da37b55d320Structure"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_GetLegsFromDirection_GetLegsFromDirectionJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.getLegsFromDirection$Action = function (mapIdIn, callContext) {
return OS.Logger.startActiveSpan("GetLegsFromDirection", function (span) {
if(span) {
span.setAttribute("code.function", "GetLegsFromDirection");
span.setAttribute("outsystems.function.key", "dfbd2e68-bcee-4810-86b0-b35e925114cd");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.GetLegsFromDirection$vars"))());
vars.value.mapIdInLocal = mapIdIn;
var getLegsFromDirectionJSResult = new OS.DataTypes.VariableHolder();
var jSONDeserializeDirectionLegsVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(OutSystemsMapsModel.ST_2c6551904cfa95c93fa24da37b55d320Structure))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.GetLegsFromDirection$outVars"))());
getLegsFromDirectionJSResult.value = OS.Logger.startActiveSpan("GetLegsFromDirection", function (span) {
if(span) {
span.setAttribute("code.function", "GetLegsFromDirection");
span.setAttribute("outsystems.function.key", "3afd9861-1a4e-4cf6-a4de-0d8e4f73e962");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_GetLegsFromDirection_GetLegsFromDirectionJS, "GetLegsFromDirection", "GetLegsFromDirection", {
MapId: OS.DataConversion.JSNodeParamConverter.to(vars.value.mapIdInLocal, OS.DataTypes.DataTypes.Text),
Legs: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsMaps.GetLegsFromDirection$getLegsFromDirectionJSResult"))();
jsNodeResult.legsOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Legs, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// JSON Deserialize: JSONDeserializeDirectionLegs
jSONDeserializeDirectionLegsVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(getLegsFromDirectionJSResult.value.legsOut, OutSystemsMapsModel.ST_2c6551904cfa95c93fa24da37b55d320Structure, false);
// DirectionLegs = JSONDeserializeDirectionLegs.Data
outVars.value.directionLegsOut = jSONDeserializeDirectionLegsVar.value.dataOut;
return outVars.value;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.GetLegsFromDirection$vars", [{
name: "MapId",
attrName: "mapIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.GetLegsFromDirection$getLegsFromDirectionJSResult", [{
name: "Legs",
attrName: "legsOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.GetLegsFromDirection$outVars", [{
name: "DirectionLegs",
attrName: "directionLegsOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new OutSystemsMapsModel.ST_2c6551904cfa95c93fa24da37b55d320Structure();
},
complexType: OutSystemsMapsModel.ST_2c6551904cfa95c93fa24da37b55d320Structure
}]);
OutSystemsMapsController.default.clientActionProxies.getLegsFromDirection$Action = function (mapIdIn) {
mapIdIn = (mapIdIn === undefined) ? "" : mapIdIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.getLegsFromDirection$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
DirectionLegs: actionResults.directionLegsOut
};
});
};
});

define("OutSystemsMaps.controller$GetLegsFromDirection.GetLegsFromDirectionJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Legs = OutSystems.Maps.MapAPI.Directions.GetLegsFromDirection($parameters.MapId)
};
});


define("OutSystemsMaps.controller$GetMapCenter", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$GetMapCenter.GetMapCenterJS", "OutSystemsMaps.controller$GetMapCenter.GetMessageValuesJS", "OutSystemsMaps.controller$ServerAction.GetMapErrorByMapErrorCode", "OutSystemsMaps.model$ST_0e474756a4be14d378c73cd05f602bcdStructure", "OutSystemsMaps.model$ST_f8c2d1b69d03ea90c73e9f07e7d98bf0Structure", "OutSystemsMaps.model$ST_cdd94bc434e873b4d04598ac1e187543Structure"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_GetMapCenter_GetMapCenterJS, OutSystemsMaps_controller_GetMapCenter_GetMessageValuesJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.getMapCenter$Action = function (mapIdIn, callContext) {
return OS.Logger.startActiveSpan("GetMapCenter", function (span) {
if(span) {
span.setAttribute("code.function", "GetMapCenter");
span.setAttribute("outsystems.function.key", "e3ed407e-2896-4d63-ab94-4706327b61e8");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

return OS.Flow.tryFinally(function () {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.GetMapCenter$vars"))());
vars.value.mapIdInLocal = mapIdIn;
var getMapErrorByMapErrorCodeVar = new OS.DataTypes.VariableHolder();
var getMapCenterJSResult = new OS.DataTypes.VariableHolder();
var getMessageValuesJSResult = new OS.DataTypes.VariableHolder();
var jSONDeserializeReturnMessageVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(OutSystemsMapsModel.ST_cdd94bc434e873b4d04598ac1e187543Structure))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.GetMapCenter$outVars"))());
return OS.Flow.executeAsyncFlow(function () {
// Script to get the coordinates (latitude and longitude) of the center of a given map.
getMapCenterJSResult.value = OS.Logger.startActiveSpan("GetMapCenter", function (span) {
if(span) {
span.setAttribute("code.function", "GetMapCenter");
span.setAttribute("outsystems.function.key", "6e74d6dc-fbf3-48b9-abeb-92dcc74e9f7b");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_GetMapCenter_GetMapCenterJS, "GetMapCenter", "GetMapCenter", {
MapId: OS.DataConversion.JSNodeParamConverter.to(vars.value.mapIdInLocal, OS.DataTypes.DataTypes.Text),
ReturnMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsMaps.GetMapCenter$getMapCenterJSResult"))();
jsNodeResult.returnMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ReturnMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// JSON Deserialize: JSONDeserializeReturnMessage
jSONDeserializeReturnMessageVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(getMapCenterJSResult.value.returnMessageOut, OutSystemsMapsModel.ST_cdd94bc434e873b4d04598ac1e187543Structure, false);
// Is Success?
return OS.Flow.executeSequence(function () {
if((jSONDeserializeReturnMessageVar.value.dataOut.isSuccessAttr)) {
getMessageValuesJSResult.value = OS.Logger.startActiveSpan("GetMessageValues", function (span) {
if(span) {
span.setAttribute("code.function", "GetMessageValues");
span.setAttribute("outsystems.function.key", "d55c1548-32f9-4614-b28c-890abab17f00");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_GetMapCenter_GetMessageValuesJS, "GetMessageValues", "GetMapCenter", {
Message: OS.DataConversion.JSNodeParamConverter.to(jSONDeserializeReturnMessageVar.value.dataOut.messageAttr, OS.DataTypes.DataTypes.Text),
SuccessMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
CenterLatitude: OS.DataConversion.JSNodeParamConverter.to(OS.DataTypes.Decimal.defaultValue, OS.DataTypes.DataTypes.Decimal),
CenterLongitude: OS.DataConversion.JSNodeParamConverter.to(OS.DataTypes.Decimal.defaultValue, OS.DataTypes.DataTypes.Decimal)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsMaps.GetMapCenter$getMessageValuesJSResult"))();
jsNodeResult.successMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.SuccessMessage, OS.DataTypes.DataTypes.Text);
jsNodeResult.centerLatitudeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.CenterLatitude, OS.DataTypes.DataTypes.Decimal);
jsNodeResult.centerLongitudeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.CenterLongitude, OS.DataTypes.DataTypes.Decimal);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// Set Coordinates
// Success = JSONDeserializeReturnMessage.Data.IsSuccess
outVars.value.successOut = jSONDeserializeReturnMessageVar.value.dataOut.isSuccessAttr;
// Coordinates.Lat = GetMessageValues.CenterLatitude
outVars.value.coordinatesOut.latAttr = getMessageValuesJSResult.value.centerLatitudeOut;
// Coordinates.Lng = GetMessageValues.CenterLongitude
outVars.value.coordinatesOut.lngAttr = getMessageValuesJSResult.value.centerLongitudeOut;
} else {
// Execute Action: GetMapErrorByMapErrorCode
return controller.getMapErrorByMapErrorCode$ServerAction(OutSystemsMapsModel.staticEntities.mapErrors.aPI_FailedGettingCenterCoordinates, callContext).then(function (value) {
getMapErrorByMapErrorCodeVar.value = value;
}).then(function () {
// Set ErrorMessage
// ErrorMessage.Code = JSONDeserializeReturnMessage.Data.Code
outVars.value.errorMessageOut.codeAttr = jSONDeserializeReturnMessageVar.value.dataOut.codeAttr;
// ErrorMessage.Message = If
outVars.value.errorMessageOut.messageAttr = ((jSONDeserializeReturnMessageVar.value.dataOut.isSuccessAttr) ? ("") : ((getMapErrorByMapErrorCodeVar.value.errorMessageOut + jSONDeserializeReturnMessageVar.value.dataOut.messageAttr)));
// Success = JSONDeserializeReturnMessage.Data.IsSuccess
outVars.value.successOut = jSONDeserializeReturnMessageVar.value.dataOut.isSuccessAttr;
});
}

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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.GetMapCenter$vars", [{
name: "MapId",
attrName: "mapIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.GetMapCenter$getMapCenterJSResult", [{
name: "ReturnMessage",
attrName: "returnMessageOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.GetMapCenter$getMessageValuesJSResult", [{
name: "SuccessMessage",
attrName: "successMessageOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "CenterLatitude",
attrName: "centerLatitudeOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "CenterLongitude",
attrName: "centerLongitudeOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}]);
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.GetMapCenter$outVars", [{
name: "Coordinates",
attrName: "coordinatesOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new OutSystemsMapsModel.ST_0e474756a4be14d378c73cd05f602bcdStructure();
},
complexType: OutSystemsMapsModel.ST_0e474756a4be14d378c73cd05f602bcdStructure
}, {
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
return new OutSystemsMapsModel.ST_f8c2d1b69d03ea90c73e9f07e7d98bf0Structure();
},
complexType: OutSystemsMapsModel.ST_f8c2d1b69d03ea90c73e9f07e7d98bf0Structure
}]);
OutSystemsMapsController.default.clientActionProxies.getMapCenter$Action = function (mapIdIn) {
mapIdIn = (mapIdIn === undefined) ? "" : mapIdIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.getMapCenter$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Coordinates: actionResults.coordinatesOut,
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: actionResults.errorMessageOut
};
});
};
});

define("OutSystemsMaps.controller$GetMapCenter.GetMapCenterJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.ReturnMessage = OutSystems.Maps.MapAPI.MapManager.GetMapCenter($parameters.MapId);
};
});

define("OutSystemsMaps.controller$GetMapCenter.GetMessageValuesJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
// The message info comes from TS to pass the coordinate values
var messageOutput = JSON.parse($parameters.Message);

// Set the output values to assign
$parameters.SuccessMessage = messageOutput.message;
$parameters.CenterLatitude = parseFloat(messageOutput.lat);
$parameters.CenterLongitude = parseFloat(messageOutput.lng);
};
});


define("OutSystemsMaps.controller$GetShapePath", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$GetShapePath.GetShapePathJS", "OutSystemsMaps.model$ST_0e474756a4be14d378c73cd05f602bcdStructure", "OutSystemsMaps.model$RL_7d169bd7c22bd4fc5143477f3a7cef9a"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_GetShapePath_GetShapePathJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.getShapePath$Action = function (shapeWidgetIdIn, callContext) {
return OS.Logger.startActiveSpan("GetShapePath", function (span) {
if(span) {
span.setAttribute("code.function", "GetShapePath");
span.setAttribute("outsystems.function.key", "44b09937-9ce3-407b-90a6-2f2b11f46a14");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.GetShapePath$vars"))());
vars.value.shapeWidgetIdInLocal = shapeWidgetIdIn;
var getShapePathJSResult = new OS.DataTypes.VariableHolder();
var jSONDeserializeStringifiedPathVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(OutSystemsMapsModel.RL_7d169bd7c22bd4fc5143477f3a7cef9a))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.GetShapePath$outVars"))());
getShapePathJSResult.value = OS.Logger.startActiveSpan("GetShapePath", function (span) {
if(span) {
span.setAttribute("code.function", "GetShapePath");
span.setAttribute("outsystems.function.key", "e002bc5b-0b72-46c3-9451-0d5581755aeb");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_GetShapePath_GetShapePathJS, "GetShapePath", "GetShapePath", {
ShapeId: OS.DataConversion.JSNodeParamConverter.to(vars.value.shapeWidgetIdInLocal, OS.DataTypes.DataTypes.Text),
StringifiedPath: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsMaps.GetShapePath$getShapePathJSResult"))();
jsNodeResult.stringifiedPathOut = OS.DataConversion.JSNodeParamConverter.from($parameters.StringifiedPath, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// JSON Deserialize: JSONDeserializeStringifiedPath
jSONDeserializeStringifiedPathVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(getShapePathJSResult.value.stringifiedPathOut, OutSystemsMapsModel.RL_7d169bd7c22bd4fc5143477f3a7cef9a, false);
// CoordinatesList = JSONDeserializeStringifiedPath.Data
outVars.value.coordinatesListOut = jSONDeserializeStringifiedPathVar.value.dataOut;
return outVars.value;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.GetShapePath$vars", [{
name: "ShapeWidgetId",
attrName: "shapeWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.GetShapePath$getShapePathJSResult", [{
name: "StringifiedPath",
attrName: "stringifiedPathOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.GetShapePath$outVars", [{
name: "CoordinatesList",
attrName: "coordinatesListOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new OutSystemsMapsModel.RL_7d169bd7c22bd4fc5143477f3a7cef9a();
},
complexType: OutSystemsMapsModel.RL_7d169bd7c22bd4fc5143477f3a7cef9a
}]);
OutSystemsMapsController.default.clientActionProxies.getShapePath$Action = function (shapeWidgetIdIn) {
shapeWidgetIdIn = (shapeWidgetIdIn === undefined) ? "" : shapeWidgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.getShapePath$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(shapeWidgetIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
CoordinatesList: actionResults.coordinatesListOut
};
});
};
});

define("OutSystemsMaps.controller$GetShapePath.GetShapePathJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.StringifiedPath = OutSystems.Maps.MapAPI.ShapeManager.GetShapePath($parameters.ShapeId);
};
});


define("OutSystemsMaps.controller$GetTotalDistanceFromDirection", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$GetTotalDistanceFromDirection.GetTotalDistanceFromDirectionJS"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_GetTotalDistanceFromDirection_GetTotalDistanceFromDirectionJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.getTotalDistanceFromDirection$Action = function (mapIdIn, callContext) {
return OS.Logger.startActiveSpan("GetTotalDistanceFromDirection", function (span) {
if(span) {
span.setAttribute("code.function", "GetTotalDistanceFromDirection");
span.setAttribute("outsystems.function.key", "e98181e6-7c45-4aa7-a4f4-667e64f9cb21");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

return OS.Flow.tryFinally(function () {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.GetTotalDistanceFromDirection$vars"))());
vars.value.mapIdInLocal = mapIdIn;
var getTotalDistanceFromDirectionJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.GetTotalDistanceFromDirection$outVars"))());
return OS.Flow.executeAsyncFlow(function () {
return OS.Logger.startActiveSpan("GetTotalDistanceFromDirection", function (span) {
if(span) {
span.setAttribute("code.function", "GetTotalDistanceFromDirection");
span.setAttribute("outsystems.function.key", "0723ad6e-6686-4095-9488-0fe674ec0f14");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteAsyncJSNode(OutSystemsMaps_controller_GetTotalDistanceFromDirection_GetTotalDistanceFromDirectionJS, "GetTotalDistanceFromDirection", "GetTotalDistanceFromDirection", {
MapId: OS.DataConversion.JSNodeParamConverter.to(vars.value.mapIdInLocal, OS.DataTypes.DataTypes.Text),
Distance: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsMaps.GetTotalDistanceFromDirection$getTotalDistanceFromDirectionJSResult"))();
jsNodeResult.distanceOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Distance, OS.DataTypes.DataTypes.Integer);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1).then(function (results) {
getTotalDistanceFromDirectionJSResult.value = results;
}).then(function () {
// Distance = GetTotalDistanceFromDirection.Distance
outVars.value.distanceOut = getTotalDistanceFromDirectionJSResult.value.distanceOut;
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.GetTotalDistanceFromDirection$vars", [{
name: "MapId",
attrName: "mapIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.GetTotalDistanceFromDirection$getTotalDistanceFromDirectionJSResult", [{
name: "Distance",
attrName: "distanceOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.GetTotalDistanceFromDirection$outVars", [{
name: "Distance",
attrName: "distanceOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
OutSystemsMapsController.default.clientActionProxies.getTotalDistanceFromDirection$Action = function (mapIdIn) {
mapIdIn = (mapIdIn === undefined) ? "" : mapIdIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.getTotalDistanceFromDirection$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Distance: OS.DataConversion.JSNodeParamConverter.to(actionResults.distanceOut, OS.DataTypes.DataTypes.Integer)
};
});
};
});

define("OutSystemsMaps.controller$GetTotalDistanceFromDirection.GetTotalDistanceFromDirectionJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
OutSystems.Maps.MapAPI.Directions.GetTotalDistanceFromDirection($parameters.MapId).then(function(response) {
    $parameters.Distance = response;
    $resolve();
})
});
};
});


define("OutSystemsMaps.controller$GetTotalDurationFromDirection", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$GetTotalDurationFromDirection.GetTotalDurationFromDirectionJS"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_GetTotalDurationFromDirection_GetTotalDurationFromDirectionJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.getTotalDurationFromDirection$Action = function (mapIdIn, callContext) {
return OS.Logger.startActiveSpan("GetTotalDurationFromDirection", function (span) {
if(span) {
span.setAttribute("code.function", "GetTotalDurationFromDirection");
span.setAttribute("outsystems.function.key", "ea36e03c-5551-4c28-a0f9-d18a6094a36e");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

return OS.Flow.tryFinally(function () {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.GetTotalDurationFromDirection$vars"))());
vars.value.mapIdInLocal = mapIdIn;
var getTotalDurationFromDirectionJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.GetTotalDurationFromDirection$outVars"))());
return OS.Flow.executeAsyncFlow(function () {
return OS.Logger.startActiveSpan("GetTotalDurationFromDirection", function (span) {
if(span) {
span.setAttribute("code.function", "GetTotalDurationFromDirection");
span.setAttribute("outsystems.function.key", "e75f6b00-c19e-43d4-9f84-d3b4d8f5a0e9");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteAsyncJSNode(OutSystemsMaps_controller_GetTotalDurationFromDirection_GetTotalDurationFromDirectionJS, "GetTotalDurationFromDirection", "GetTotalDurationFromDirection", {
MapId: OS.DataConversion.JSNodeParamConverter.to(vars.value.mapIdInLocal, OS.DataTypes.DataTypes.Text),
Duration: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsMaps.GetTotalDurationFromDirection$getTotalDurationFromDirectionJSResult"))();
jsNodeResult.durationOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Duration, OS.DataTypes.DataTypes.Integer);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1).then(function (results) {
getTotalDurationFromDirectionJSResult.value = results;
}).then(function () {
// Assign ErrorMessage
// Duration = GetTotalDurationFromDirection.Duration
outVars.value.durationOut = getTotalDurationFromDirectionJSResult.value.durationOut;
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.GetTotalDurationFromDirection$vars", [{
name: "MapId",
attrName: "mapIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.GetTotalDurationFromDirection$getTotalDurationFromDirectionJSResult", [{
name: "Duration",
attrName: "durationOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.GetTotalDurationFromDirection$outVars", [{
name: "Duration",
attrName: "durationOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}]);
OutSystemsMapsController.default.clientActionProxies.getTotalDurationFromDirection$Action = function (mapIdIn) {
mapIdIn = (mapIdIn === undefined) ? "" : mapIdIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.getTotalDurationFromDirection$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Duration: OS.DataConversion.JSNodeParamConverter.to(actionResults.durationOut, OS.DataTypes.DataTypes.Integer)
};
});
};
});

define("OutSystemsMaps.controller$GetTotalDurationFromDirection.GetTotalDurationFromDirectionJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
OutSystems.Maps.MapAPI.Directions.GetTotalDurationFromDirection($parameters.MapId).then(function(response) {
    $parameters.Duration = response;
    $resolve();
})
});
};
});


define("OutSystemsMaps.controller$InitMap", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$InitMap.InitMapJS"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_InitMap_InitMapJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.initMap$Action = function (mapWidgetIdIn, callContext) {
return OS.Logger.startActiveSpan("InitMap", function (span) {
if(span) {
span.setAttribute("code.function", "InitMap");
span.setAttribute("outsystems.function.key", "d3723809-ceb5-452d-b1de-90b8db032c97");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.InitMap$vars"))());
vars.value.mapWidgetIdInLocal = mapWidgetIdIn;
OS.Logger.startActiveSpan("InitMap", function (span) {
if(span) {
span.setAttribute("code.function", "InitMap");
span.setAttribute("outsystems.function.key", "f036cd58-8da6-4dac-be34-71f7b4f35968");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_InitMap_InitMapJS, "InitMap", "InitMap", {
MapID: OS.DataConversion.JSNodeParamConverter.to(vars.value.mapWidgetIdInLocal, OS.DataTypes.DataTypes.Text)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.InitMap$vars", [{
name: "MapWidgetId",
attrName: "mapWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.clientActionProxies.initMap$Action = function (mapWidgetIdIn) {
mapWidgetIdIn = (mapWidgetIdIn === undefined) ? "" : mapWidgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.initMap$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapWidgetIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$InitMap.InitMapJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.Maps.MapAPI.MapManager.InitializeMap($parameters.MapID);
};
});


define("OutSystemsMaps.controller$InitSearchPlaces", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$InitSearchPlaces.InitSearchPlacesJS"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_InitSearchPlaces_InitSearchPlacesJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.initSearchPlaces$Action = function (searchPlacesWidgetIdIn, callContext) {
return OS.Logger.startActiveSpan("InitSearchPlaces", function (span) {
if(span) {
span.setAttribute("code.function", "InitSearchPlaces");
span.setAttribute("outsystems.function.key", "a5a7164e-45ee-465b-b0a9-e1b0916515c8");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.InitSearchPlaces$vars"))());
vars.value.searchPlacesWidgetIdInLocal = searchPlacesWidgetIdIn;
OS.Logger.startActiveSpan("InitSearchPlaces", function (span) {
if(span) {
span.setAttribute("code.function", "InitSearchPlaces");
span.setAttribute("outsystems.function.key", "dabf259c-48f3-4928-9cbf-2963ee628b52");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_InitSearchPlaces_InitSearchPlacesJS, "InitSearchPlaces", "InitSearchPlaces", {
SearchPlacesId: OS.DataConversion.JSNodeParamConverter.to(vars.value.searchPlacesWidgetIdInLocal, OS.DataTypes.DataTypes.Text)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.InitSearchPlaces$vars", [{
name: "SearchPlacesWidgetId",
attrName: "searchPlacesWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.clientActionProxies.initSearchPlaces$Action = function (searchPlacesWidgetIdIn) {
searchPlacesWidgetIdIn = (searchPlacesWidgetIdIn === undefined) ? "" : searchPlacesWidgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.initSearchPlaces$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(searchPlacesWidgetIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$InitSearchPlaces.InitSearchPlacesJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.Maps.PlacesAPI.SearchPlacesManager.InitializeSearchPlaces($parameters.SearchPlacesId);
};
});


define("OutSystemsMaps.controller$LoadLeafletDirectionsPlugin", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$LoadLeafletDirectionsPlugin.LoadPluginJS", "OutSystemsMaps.controller$ServerAction.GetMapErrorByMapErrorCode", "OutSystemsMaps.model$ST_f8c2d1b69d03ea90c73e9f07e7d98bf0Structure", "OutSystemsMaps.model$ST_cdd94bc434e873b4d04598ac1e187543Structure"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_LoadLeafletDirectionsPlugin_LoadPluginJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.loadLeafletDirectionsPlugin$Action = function (mapIdIn, providerIn, aPIKeyIn, pluginURLIn, callContext) {
return OS.Logger.startActiveSpan("LoadLeafletDirectionsPlugin", function (span) {
if(span) {
span.setAttribute("code.function", "LoadLeafletDirectionsPlugin");
span.setAttribute("outsystems.function.key", "8bfbe5d4-26ad-41fa-84ff-0a1283548937");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

return OS.Flow.tryFinally(function () {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.LoadLeafletDirectionsPlugin$vars"))());
vars.value.mapIdInLocal = mapIdIn;
vars.value.providerInLocal = providerIn;
vars.value.aPIKeyInLocal = aPIKeyIn;
vars.value.pluginURLInLocal = pluginURLIn;
var getMapErrorByMapErrorCodeVar = new OS.DataTypes.VariableHolder();
var loadPluginJSResult = new OS.DataTypes.VariableHolder();
var jSONDeserializeReturnMessageVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(OutSystemsMapsModel.ST_cdd94bc434e873b4d04598ac1e187543Structure))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.LoadLeafletDirectionsPlugin$outVars"))());
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((((vars.value.pluginURLInLocal) !== ("")))) {
// Execute Action: RequireScript
return OS.SystemActions.requireScript(vars.value.pluginURLInLocal, callContext);
}

}).then(function () {
loadPluginJSResult.value = OS.Logger.startActiveSpan("LoadPlugin", function (span) {
if(span) {
span.setAttribute("code.function", "LoadPlugin");
span.setAttribute("outsystems.function.key", "5642bf54-5d14-471e-b871-6925292c4bbe");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_LoadLeafletDirectionsPlugin_LoadPluginJS, "LoadPlugin", "LoadLeafletDirectionsPlugin", {
APIKey: OS.DataConversion.JSNodeParamConverter.to(vars.value.aPIKeyInLocal, OS.DataTypes.DataTypes.Text),
MapId: OS.DataConversion.JSNodeParamConverter.to(vars.value.mapIdInLocal, OS.DataTypes.DataTypes.Text),
Provider: OS.DataConversion.JSNodeParamConverter.to(vars.value.providerInLocal, OS.DataTypes.DataTypes.Text),
ReturnMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsMaps.LoadLeafletDirectionsPlugin$loadPluginJSResult"))();
jsNodeResult.returnMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ReturnMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// JSON Deserialize: JSONDeserializeReturnMessage
jSONDeserializeReturnMessageVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(loadPluginJSResult.value.returnMessageOut, OutSystemsMapsModel.ST_cdd94bc434e873b4d04598ac1e187543Structure, false);
// Execute Action: GetMapErrorByMapErrorCode
return controller.getMapErrorByMapErrorCode$ServerAction(OutSystemsMapsModel.staticEntities.mapErrors.lIB_FailedSetDirections, callContext).then(function (value) {
getMapErrorByMapErrorCodeVar.value = value;
}).then(function () {
// Assign ErrorMessage
// ErrorMessage.Code = JSONDeserializeReturnMessage.Data.Code
outVars.value.errorMessageOut.codeAttr = jSONDeserializeReturnMessageVar.value.dataOut.codeAttr;
// ErrorMessage.Message = If
outVars.value.errorMessageOut.messageAttr = ((jSONDeserializeReturnMessageVar.value.dataOut.isSuccessAttr) ? ("") : ((getMapErrorByMapErrorCodeVar.value.errorMessageOut + jSONDeserializeReturnMessageVar.value.dataOut.messageAttr)));
// Success = JSONDeserializeReturnMessage.Data.IsSuccess
outVars.value.successOut = jSONDeserializeReturnMessageVar.value.dataOut.isSuccessAttr;
});
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.LoadLeafletDirectionsPlugin$vars", [{
name: "MapId",
attrName: "mapIdInLocal",
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
}, {
name: "APIKey",
attrName: "aPIKeyInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "PluginURL",
attrName: "pluginURLInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.LoadLeafletDirectionsPlugin$loadPluginJSResult", [{
name: "ReturnMessage",
attrName: "returnMessageOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.LoadLeafletDirectionsPlugin$outVars", [{
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
return new OutSystemsMapsModel.ST_f8c2d1b69d03ea90c73e9f07e7d98bf0Structure();
},
complexType: OutSystemsMapsModel.ST_f8c2d1b69d03ea90c73e9f07e7d98bf0Structure
}]);
OutSystemsMapsController.default.clientActionProxies.loadLeafletDirectionsPlugin$Action = function (mapIdIn, providerIn, aPIKeyIn, pluginURLIn) {
mapIdIn = (mapIdIn === undefined) ? "" : mapIdIn;
providerIn = (providerIn === undefined) ? "" : providerIn;
aPIKeyIn = (aPIKeyIn === undefined) ? "" : aPIKeyIn;
pluginURLIn = (pluginURLIn === undefined) ? "" : pluginURLIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.loadLeafletDirectionsPlugin$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapIdIn, OS.DataTypes.DataTypes.Text), providerIn, OS.DataConversion.JSNodeParamConverter.from(aPIKeyIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(pluginURLIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: actionResults.errorMessageOut
};
});
};
});

define("OutSystemsMaps.controller$LoadLeafletDirectionsPlugin.LoadPluginJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.ReturnMessage = OutSystems.Maps.MapAPI.Directions.LoadPlugin(
    $parameters.MapId,
    $parameters.Provider,
    $parameters.APIKey
);
};
});


define("OutSystemsMaps.controller$LogEvent", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$SetLogVerbosity"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.logEvent$Action = function (logTypeIdIn, messageIn, callContext) {
return OS.Logger.startActiveSpan("LogEvent", function (span) {
if(span) {
span.setAttribute("code.function", "LogEvent");
span.setAttribute("outsystems.function.key", "f5e81e6a-11b8-4ed4-8c12-8ed6a7f363d4");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.LogEvent$vars"))());
vars.value.logTypeIdInLocal = logTypeIdIn;
vars.value.messageInLocal = messageIn;
// Execute Action: SetLogVerbosity
OutSystemsMapsController.default.setLogVerbosity$Action(OutSystemsMapsModel.staticEntities.verbosity.noLogging, callContext);
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.LogEvent$vars", [{
name: "LogTypeId",
attrName: "logTypeIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Message",
attrName: "messageInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.clientActionProxies.logEvent$Action = function (logTypeIdIn, messageIn) {
logTypeIdIn = (logTypeIdIn === undefined) ? "" : logTypeIdIn;
messageIn = (messageIn === undefined) ? "" : messageIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.logEvent$Action.bind(controller, logTypeIdIn, OS.DataConversion.JSNodeParamConverter.from(messageIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$MapEventSubscribe", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$MapEventSubscribe.MapEventRegisterJS"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_MapEventSubscribe_MapEventRegisterJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.mapEventSubscribe$Action = function (mapWidgetIdIn, mapEventIdIn, callbackIn, callContext) {
return OS.Logger.startActiveSpan("MapEventSubscribe", function (span) {
if(span) {
span.setAttribute("code.function", "MapEventSubscribe");
span.setAttribute("outsystems.function.key", "2313bd43-ffb5-4fc2-9840-ac8e74ffc3d0");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.MapEventSubscribe$vars"))());
vars.value.mapWidgetIdInLocal = mapWidgetIdIn;
vars.value.mapEventIdInLocal = mapEventIdIn;
vars.value.callbackInLocal = callbackIn;
OS.Logger.startActiveSpan("MapEventRegister", function (span) {
if(span) {
span.setAttribute("code.function", "MapEventRegister");
span.setAttribute("outsystems.function.key", "66ae594c-ec89-4b52-8a83-8c2d51cdf1b1");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_MapEventSubscribe_MapEventRegisterJS, "MapEventRegister", "MapEventSubscribe", {
MapWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.mapWidgetIdInLocal, OS.DataTypes.DataTypes.Text),
Callback: OS.DataConversion.JSNodeParamConverter.to(vars.value.callbackInLocal, OS.DataTypes.DataTypes.Object),
MapEventId: OS.DataConversion.JSNodeParamConverter.to(vars.value.mapEventIdInLocal, OS.DataTypes.DataTypes.Text)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.MapEventSubscribe$vars", [{
name: "MapWidgetId",
attrName: "mapWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "MapEventId",
attrName: "mapEventIdInLocal",
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
OutSystemsMapsController.default.clientActionProxies.mapEventSubscribe$Action = function (mapWidgetIdIn, mapEventIdIn, callbackIn) {
mapWidgetIdIn = (mapWidgetIdIn === undefined) ? "" : mapWidgetIdIn;
mapEventIdIn = (mapEventIdIn === undefined) ? "" : mapEventIdIn;
callbackIn = (callbackIn === undefined) ? null : callbackIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.mapEventSubscribe$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapWidgetIdIn, OS.DataTypes.DataTypes.Text), mapEventIdIn, OS.DataConversion.JSNodeParamConverter.from(callbackIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$MapEventSubscribe.MapEventRegisterJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.Maps.MapAPI.MapManager.Events.Subscribe($parameters.MapWidgetId, $parameters.MapEventId, $parameters.Callback);
};
});


define("OutSystemsMaps.controller$MapEventTriggeredSubscribe", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$MapEventTriggeredSubscribe.MapEventRegisterJS"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_MapEventTriggeredSubscribe_MapEventRegisterJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.mapEventTriggeredSubscribe$Action = function (mapEventUniqueIdIn, mapEventNameIn, callbackIn, callContext) {
return OS.Logger.startActiveSpan("MapEventTriggeredSubscribe", function (span) {
if(span) {
span.setAttribute("code.function", "MapEventTriggeredSubscribe");
span.setAttribute("outsystems.function.key", "eea2726d-bfe0-4584-a93a-4ec63059b61a");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.MapEventTriggeredSubscribe$vars"))());
vars.value.mapEventUniqueIdInLocal = mapEventUniqueIdIn;
vars.value.mapEventNameInLocal = mapEventNameIn;
vars.value.callbackInLocal = callbackIn;
OS.Logger.startActiveSpan("MapEventRegister", function (span) {
if(span) {
span.setAttribute("code.function", "MapEventRegister");
span.setAttribute("outsystems.function.key", "637ed6f3-44e1-4b9c-ade6-6132c61edebd");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_MapEventTriggeredSubscribe_MapEventRegisterJS, "MapEventRegister", "MapEventTriggeredSubscribe", {
Callback: OS.DataConversion.JSNodeParamConverter.to(vars.value.callbackInLocal, OS.DataTypes.DataTypes.Object),
MapEventUniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.mapEventUniqueIdInLocal, OS.DataTypes.DataTypes.Text),
MapEventName: OS.DataConversion.JSNodeParamConverter.to(vars.value.mapEventNameInLocal, OS.DataTypes.DataTypes.Text)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.MapEventTriggeredSubscribe$vars", [{
name: "MapEventUniqueId",
attrName: "mapEventUniqueIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "MapEventName",
attrName: "mapEventNameInLocal",
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
OutSystemsMapsController.default.clientActionProxies.mapEventTriggeredSubscribe$Action = function (mapEventUniqueIdIn, mapEventNameIn, callbackIn) {
mapEventUniqueIdIn = (mapEventUniqueIdIn === undefined) ? "" : mapEventUniqueIdIn;
mapEventNameIn = (mapEventNameIn === undefined) ? "" : mapEventNameIn;
callbackIn = (callbackIn === undefined) ? null : callbackIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.mapEventTriggeredSubscribe$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapEventUniqueIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(mapEventNameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(callbackIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$MapEventTriggeredSubscribe.MapEventRegisterJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.Maps.MapAPI.MapManager.Events.SubscribeByUniqueId($parameters.MapEventUniqueId, $parameters.MapEventName, $parameters.Callback);
};
});


define("OutSystemsMaps.controller$MapEventTriggeredUnsubscribe", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$MapEventTriggeredUnsubscribe.MapEventUnregisterJS"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_MapEventTriggeredUnsubscribe_MapEventUnregisterJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.mapEventTriggeredUnsubscribe$Action = function (mapEventUniqueIdIn, mapEventIdIn, callbackIn, callContext) {
return OS.Logger.startActiveSpan("MapEventTriggeredUnsubscribe", function (span) {
if(span) {
span.setAttribute("code.function", "MapEventTriggeredUnsubscribe");
span.setAttribute("outsystems.function.key", "fce44621-14b8-4b8f-80bc-983a9dc37d4b");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.MapEventTriggeredUnsubscribe$vars"))());
vars.value.mapEventUniqueIdInLocal = mapEventUniqueIdIn;
vars.value.mapEventIdInLocal = mapEventIdIn;
vars.value.callbackInLocal = callbackIn;
OS.Logger.startActiveSpan("MapEventUnregister", function (span) {
if(span) {
span.setAttribute("code.function", "MapEventUnregister");
span.setAttribute("outsystems.function.key", "d935415b-bd28-4469-a2a8-df272ca43bb0");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_MapEventTriggeredUnsubscribe_MapEventUnregisterJS, "MapEventUnregister", "MapEventTriggeredUnsubscribe", {
MapEventId: OS.DataConversion.JSNodeParamConverter.to(vars.value.mapEventIdInLocal, OS.DataTypes.DataTypes.Text),
Callback: OS.DataConversion.JSNodeParamConverter.to(vars.value.callbackInLocal, OS.DataTypes.DataTypes.Object),
MapWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.mapEventUniqueIdInLocal, OS.DataTypes.DataTypes.Text)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.MapEventTriggeredUnsubscribe$vars", [{
name: "MapEventUniqueId",
attrName: "mapEventUniqueIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "MapEventId",
attrName: "mapEventIdInLocal",
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
OutSystemsMapsController.default.clientActionProxies.mapEventTriggeredUnsubscribe$Action = function (mapEventUniqueIdIn, mapEventIdIn, callbackIn) {
mapEventUniqueIdIn = (mapEventUniqueIdIn === undefined) ? "" : mapEventUniqueIdIn;
mapEventIdIn = (mapEventIdIn === undefined) ? "" : mapEventIdIn;
callbackIn = (callbackIn === undefined) ? null : callbackIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.mapEventTriggeredUnsubscribe$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapEventUniqueIdIn, OS.DataTypes.DataTypes.Text), mapEventIdIn, OS.DataConversion.JSNodeParamConverter.from(callbackIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$MapEventTriggeredUnsubscribe.MapEventUnregisterJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.Maps.MapAPI.MapManager.Events.Unsubscribe($parameters.MapWidgetId, $parameters.MapEventId, $parameters.Callback);
};
});


define("OutSystemsMaps.controller$MapEventUnsubscribe", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$MapEventUnsubscribe.MapEventUnregisterJS"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_MapEventUnsubscribe_MapEventUnregisterJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.mapEventUnsubscribe$Action = function (mapWidgetIdIn, mapEventIdIn, callbackIn, callContext) {
return OS.Logger.startActiveSpan("MapEventUnsubscribe", function (span) {
if(span) {
span.setAttribute("code.function", "MapEventUnsubscribe");
span.setAttribute("outsystems.function.key", "0b9d482e-3075-49b1-aace-e5c47f039621");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.MapEventUnsubscribe$vars"))());
vars.value.mapWidgetIdInLocal = mapWidgetIdIn;
vars.value.mapEventIdInLocal = mapEventIdIn;
vars.value.callbackInLocal = callbackIn;
OS.Logger.startActiveSpan("MapEventUnregister", function (span) {
if(span) {
span.setAttribute("code.function", "MapEventUnregister");
span.setAttribute("outsystems.function.key", "650b137f-82f7-436c-a5e0-add96c5ea305");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_MapEventUnsubscribe_MapEventUnregisterJS, "MapEventUnregister", "MapEventUnsubscribe", {
MapEventId: OS.DataConversion.JSNodeParamConverter.to(vars.value.mapEventIdInLocal, OS.DataTypes.DataTypes.Text),
Callback: OS.DataConversion.JSNodeParamConverter.to(vars.value.callbackInLocal, OS.DataTypes.DataTypes.Object),
MapWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.mapWidgetIdInLocal, OS.DataTypes.DataTypes.Text)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.MapEventUnsubscribe$vars", [{
name: "MapWidgetId",
attrName: "mapWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "MapEventId",
attrName: "mapEventIdInLocal",
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
OutSystemsMapsController.default.clientActionProxies.mapEventUnsubscribe$Action = function (mapWidgetIdIn, mapEventIdIn, callbackIn) {
mapWidgetIdIn = (mapWidgetIdIn === undefined) ? "" : mapWidgetIdIn;
mapEventIdIn = (mapEventIdIn === undefined) ? "" : mapEventIdIn;
callbackIn = (callbackIn === undefined) ? null : callbackIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.mapEventUnsubscribe$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapWidgetIdIn, OS.DataTypes.DataTypes.Text), mapEventIdIn, OS.DataConversion.JSNodeParamConverter.from(callbackIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$MapEventUnsubscribe.MapEventUnregisterJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.Maps.MapAPI.MapManager.Events.Unsubscribe($parameters.MapWidgetId, $parameters.MapEventId, $parameters.Callback);
};
});


define("OutSystemsMaps.controller$MarkerEventSubscribe", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$MarkerEventSubscribe.MarkerEventRegisterJS"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_MarkerEventSubscribe_MarkerEventRegisterJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.markerEventSubscribe$Action = function (markerWidgetIdIn, markerEventIdIn, callbackIn, callContext) {
return OS.Logger.startActiveSpan("MarkerEventSubscribe", function (span) {
if(span) {
span.setAttribute("code.function", "MarkerEventSubscribe");
span.setAttribute("outsystems.function.key", "c10c0366-1d94-49ea-8e6c-fbbebda8a324");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.MarkerEventSubscribe$vars"))());
vars.value.markerWidgetIdInLocal = markerWidgetIdIn;
vars.value.markerEventIdInLocal = markerEventIdIn;
vars.value.callbackInLocal = callbackIn;
OS.Logger.startActiveSpan("MarkerEventRegister", function (span) {
if(span) {
span.setAttribute("code.function", "MarkerEventRegister");
span.setAttribute("outsystems.function.key", "914aa3d9-e9e0-4f41-b9de-d1404607bc46");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_MarkerEventSubscribe_MarkerEventRegisterJS, "MarkerEventRegister", "MarkerEventSubscribe", {
Callback: OS.DataConversion.JSNodeParamConverter.to(vars.value.callbackInLocal, OS.DataTypes.DataTypes.Object),
MarkerEventId: OS.DataConversion.JSNodeParamConverter.to(vars.value.markerEventIdInLocal, OS.DataTypes.DataTypes.Text),
MarkerWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.markerWidgetIdInLocal, OS.DataTypes.DataTypes.Text)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.MarkerEventSubscribe$vars", [{
name: "MarkerWidgetId",
attrName: "markerWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "MarkerEventId",
attrName: "markerEventIdInLocal",
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
OutSystemsMapsController.default.clientActionProxies.markerEventSubscribe$Action = function (markerWidgetIdIn, markerEventIdIn, callbackIn) {
markerWidgetIdIn = (markerWidgetIdIn === undefined) ? "" : markerWidgetIdIn;
markerEventIdIn = (markerEventIdIn === undefined) ? "" : markerEventIdIn;
callbackIn = (callbackIn === undefined) ? null : callbackIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.markerEventSubscribe$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(markerWidgetIdIn, OS.DataTypes.DataTypes.Text), markerEventIdIn, OS.DataConversion.JSNodeParamConverter.from(callbackIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$MarkerEventSubscribe.MarkerEventRegisterJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.Maps.MapAPI.MarkerManager.Events.Subscribe($parameters.MarkerWidgetId, $parameters.MarkerEventId, $parameters.Callback);
};
});


define("OutSystemsMaps.controller$MarkerEventTriggeredSubscribe", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$MarkerEventTriggeredSubscribe.MarkerEventRegisterJS"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_MarkerEventTriggeredSubscribe_MarkerEventRegisterJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.markerEventTriggeredSubscribe$Action = function (markerEventUniqueIdIn, markerEventNameIn, callbackIn, callContext) {
return OS.Logger.startActiveSpan("MarkerEventTriggeredSubscribe", function (span) {
if(span) {
span.setAttribute("code.function", "MarkerEventTriggeredSubscribe");
span.setAttribute("outsystems.function.key", "6ec79cb8-bf44-45bc-a3c3-57fd7aad9546");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.MarkerEventTriggeredSubscribe$vars"))());
vars.value.markerEventUniqueIdInLocal = markerEventUniqueIdIn;
vars.value.markerEventNameInLocal = markerEventNameIn;
vars.value.callbackInLocal = callbackIn;
OS.Logger.startActiveSpan("MarkerEventRegister", function (span) {
if(span) {
span.setAttribute("code.function", "MarkerEventRegister");
span.setAttribute("outsystems.function.key", "077c4d21-3d3e-4707-98da-9267c4569b3d");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_MarkerEventTriggeredSubscribe_MarkerEventRegisterJS, "MarkerEventRegister", "MarkerEventTriggeredSubscribe", {
MarkerEventUniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.markerEventUniqueIdInLocal, OS.DataTypes.DataTypes.Text),
Callback: OS.DataConversion.JSNodeParamConverter.to(vars.value.callbackInLocal, OS.DataTypes.DataTypes.Object),
MarkerEventName: OS.DataConversion.JSNodeParamConverter.to(vars.value.markerEventNameInLocal, OS.DataTypes.DataTypes.Text)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.MarkerEventTriggeredSubscribe$vars", [{
name: "MarkerEventUniqueId",
attrName: "markerEventUniqueIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "MarkerEventName",
attrName: "markerEventNameInLocal",
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
OutSystemsMapsController.default.clientActionProxies.markerEventTriggeredSubscribe$Action = function (markerEventUniqueIdIn, markerEventNameIn, callbackIn) {
markerEventUniqueIdIn = (markerEventUniqueIdIn === undefined) ? "" : markerEventUniqueIdIn;
markerEventNameIn = (markerEventNameIn === undefined) ? "" : markerEventNameIn;
callbackIn = (callbackIn === undefined) ? null : callbackIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.markerEventTriggeredSubscribe$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(markerEventUniqueIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(markerEventNameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(callbackIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$MarkerEventTriggeredSubscribe.MarkerEventRegisterJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.Maps.MapAPI.MarkerManager.Events.SubscribeByUniqueId($parameters.MarkerEventUniqueId, $parameters.MarkerEventName, $parameters.Callback);
};
});


define("OutSystemsMaps.controller$MarkerEventTriggeredUnsubscribe", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$MarkerEventTriggeredUnsubscribe.MarkerEventUnregisterJS"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_MarkerEventTriggeredUnsubscribe_MarkerEventUnregisterJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.markerEventTriggeredUnsubscribe$Action = function (markerEventUniqueIdIn, markerEventIdIn, callbackIn, callContext) {
return OS.Logger.startActiveSpan("MarkerEventTriggeredUnsubscribe", function (span) {
if(span) {
span.setAttribute("code.function", "MarkerEventTriggeredUnsubscribe");
span.setAttribute("outsystems.function.key", "a2e36824-5e63-4221-a709-76290d5ed853");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.MarkerEventTriggeredUnsubscribe$vars"))());
vars.value.markerEventUniqueIdInLocal = markerEventUniqueIdIn;
vars.value.markerEventIdInLocal = markerEventIdIn;
vars.value.callbackInLocal = callbackIn;
OS.Logger.startActiveSpan("MarkerEventUnregister", function (span) {
if(span) {
span.setAttribute("code.function", "MarkerEventUnregister");
span.setAttribute("outsystems.function.key", "33a8e2e2-e6f6-4ce9-86c3-c36fb19bbaba");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_MarkerEventTriggeredUnsubscribe_MarkerEventUnregisterJS, "MarkerEventUnregister", "MarkerEventTriggeredUnsubscribe", {
Callback: OS.DataConversion.JSNodeParamConverter.to(vars.value.callbackInLocal, OS.DataTypes.DataTypes.Object),
MarkerEventId: OS.DataConversion.JSNodeParamConverter.to(vars.value.markerEventIdInLocal, OS.DataTypes.DataTypes.Text),
MarkerWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.markerEventUniqueIdInLocal, OS.DataTypes.DataTypes.Text)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.MarkerEventTriggeredUnsubscribe$vars", [{
name: "MarkerEventUniqueId",
attrName: "markerEventUniqueIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "MarkerEventId",
attrName: "markerEventIdInLocal",
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
OutSystemsMapsController.default.clientActionProxies.markerEventTriggeredUnsubscribe$Action = function (markerEventUniqueIdIn, markerEventIdIn, callbackIn) {
markerEventUniqueIdIn = (markerEventUniqueIdIn === undefined) ? "" : markerEventUniqueIdIn;
markerEventIdIn = (markerEventIdIn === undefined) ? "" : markerEventIdIn;
callbackIn = (callbackIn === undefined) ? null : callbackIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.markerEventTriggeredUnsubscribe$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(markerEventUniqueIdIn, OS.DataTypes.DataTypes.Text), markerEventIdIn, OS.DataConversion.JSNodeParamConverter.from(callbackIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$MarkerEventTriggeredUnsubscribe.MarkerEventUnregisterJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.Maps.MapAPI.MarkerManager.Events.Unsubscribe($parameters.MarkerWidgetId, $parameters.MarkerEventId, $parameters.Callback);
};
});


define("OutSystemsMaps.controller$RemoveAllMarkers", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$RemoveAllMarkers.RemoveMarkersJS", "OutSystemsMaps.controller$ServerAction.GetMapErrorByMapErrorCode", "OutSystemsMaps.model$ST_f8c2d1b69d03ea90c73e9f07e7d98bf0Structure", "OutSystemsMaps.model$ST_cdd94bc434e873b4d04598ac1e187543Structure"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_RemoveAllMarkers_RemoveMarkersJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.removeAllMarkers$Action = function (mapWidgetIdIn, callContext) {
return OS.Logger.startActiveSpan("RemoveAllMarkers", function (span) {
if(span) {
span.setAttribute("code.function", "RemoveAllMarkers");
span.setAttribute("outsystems.function.key", "481cf1dd-606e-4aad-b4fa-54627d546f37");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

return OS.Flow.tryFinally(function () {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.RemoveAllMarkers$vars"))());
vars.value.mapWidgetIdInLocal = mapWidgetIdIn;
var getMapErrorByMapErrorCodeVar = new OS.DataTypes.VariableHolder();
var removeMarkersJSResult = new OS.DataTypes.VariableHolder();
var jSONDeserializeReturnMessageVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(OutSystemsMapsModel.ST_cdd94bc434e873b4d04598ac1e187543Structure))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.RemoveAllMarkers$outVars"))());
return OS.Flow.executeAsyncFlow(function () {
removeMarkersJSResult.value = OS.Logger.startActiveSpan("RemoveMarkers", function (span) {
if(span) {
span.setAttribute("code.function", "RemoveMarkers");
span.setAttribute("outsystems.function.key", "b8b0d453-5c30-4324-a031-b6ba040f2e1b");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_RemoveAllMarkers_RemoveMarkersJS, "RemoveMarkers", "RemoveAllMarkers", {
MapWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.mapWidgetIdInLocal, OS.DataTypes.DataTypes.Text),
APIResponse: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsMaps.RemoveAllMarkers$removeMarkersJSResult"))();
jsNodeResult.aPIResponseOut = OS.DataConversion.JSNodeParamConverter.from($parameters.APIResponse, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// JSON Deserialize: JSONDeserializeReturnMessage
jSONDeserializeReturnMessageVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(removeMarkersJSResult.value.aPIResponseOut, OutSystemsMapsModel.ST_cdd94bc434e873b4d04598ac1e187543Structure, false);
// Set Success
// Success = JSONDeserializeReturnMessage.Data.IsSuccess
outVars.value.successOut = jSONDeserializeReturnMessageVar.value.dataOut.isSuccessAttr;
// Is Success?
return OS.Flow.executeSequence(function () {
if((!(outVars.value.successOut))) {
// Execute Action: GetMapErrorByMapErrorCode
return controller.getMapErrorByMapErrorCode$ServerAction(OutSystemsMapsModel.staticEntities.mapErrors.aPI_FailedRemoveMarkers, callContext).then(function (value) {
getMapErrorByMapErrorCodeVar.value = value;
}).then(function () {
// Set ErrorMessage
// ErrorMessage.Code = JSONDeserializeReturnMessage.Data.Code
outVars.value.errorMessageOut.codeAttr = jSONDeserializeReturnMessageVar.value.dataOut.codeAttr;
// ErrorMessage.Message = GetMapErrorByMapErrorCode.ErrorMessage + JSONDeserializeReturnMessage.Data.Message
outVars.value.errorMessageOut.messageAttr = (getMapErrorByMapErrorCodeVar.value.errorMessageOut + jSONDeserializeReturnMessageVar.value.dataOut.messageAttr);
});
}

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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.RemoveAllMarkers$vars", [{
name: "MapWidgetId",
attrName: "mapWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.RemoveAllMarkers$removeMarkersJSResult", [{
name: "APIResponse",
attrName: "aPIResponseOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.RemoveAllMarkers$outVars", [{
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
return new OutSystemsMapsModel.ST_f8c2d1b69d03ea90c73e9f07e7d98bf0Structure();
},
complexType: OutSystemsMapsModel.ST_f8c2d1b69d03ea90c73e9f07e7d98bf0Structure
}]);
OutSystemsMapsController.default.clientActionProxies.removeAllMarkers$Action = function (mapWidgetIdIn) {
mapWidgetIdIn = (mapWidgetIdIn === undefined) ? "" : mapWidgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.removeAllMarkers$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapWidgetIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: actionResults.errorMessageOut
};
});
};
});

define("OutSystemsMaps.controller$RemoveAllMarkers.RemoveMarkersJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.APIResponse = OutSystems.Maps.MapAPI.MarkerManager.RemoveAllMarkers($parameters.MapWidgetId);
};
});


define("OutSystemsMaps.controller$RemoveDirections", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$RemoveDirections.RemoveDirectionsJS", "OutSystemsMaps.controller$ServerAction.GetMapErrorByMapErrorCode", "OutSystemsMaps.model$ST_f8c2d1b69d03ea90c73e9f07e7d98bf0Structure", "OutSystemsMaps.model$ST_cdd94bc434e873b4d04598ac1e187543Structure"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_RemoveDirections_RemoveDirectionsJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.removeDirections$Action = function (mapIdIn, callContext) {
return OS.Logger.startActiveSpan("RemoveDirections", function (span) {
if(span) {
span.setAttribute("code.function", "RemoveDirections");
span.setAttribute("outsystems.function.key", "4bce22df-66b6-4733-88af-3c288c9c84f2");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

return OS.Flow.tryFinally(function () {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.RemoveDirections$vars"))());
vars.value.mapIdInLocal = mapIdIn;
var getMapErrorByMapErrorCodeVar = new OS.DataTypes.VariableHolder();
var removeDirectionsJSResult = new OS.DataTypes.VariableHolder();
var jSONDeserializeReturnMessageVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(OutSystemsMapsModel.ST_cdd94bc434e873b4d04598ac1e187543Structure))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.RemoveDirections$outVars"))());
return OS.Flow.executeAsyncFlow(function () {
removeDirectionsJSResult.value = OS.Logger.startActiveSpan("RemoveDirections", function (span) {
if(span) {
span.setAttribute("code.function", "RemoveDirections");
span.setAttribute("outsystems.function.key", "5557c7e3-7c23-4a4d-9b66-1467d5630e1a");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_RemoveDirections_RemoveDirectionsJS, "RemoveDirections", "RemoveDirections", {
MapId: OS.DataConversion.JSNodeParamConverter.to(vars.value.mapIdInLocal, OS.DataTypes.DataTypes.Text),
ReturnMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsMaps.RemoveDirections$removeDirectionsJSResult"))();
jsNodeResult.returnMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ReturnMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// JSON Deserialize: JSONDeserializeReturnMessage
jSONDeserializeReturnMessageVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(removeDirectionsJSResult.value.returnMessageOut, OutSystemsMapsModel.ST_cdd94bc434e873b4d04598ac1e187543Structure, false);
// Execute Action: GetMapErrorByMapErrorCode
return controller.getMapErrorByMapErrorCode$ServerAction(OutSystemsMapsModel.staticEntities.mapErrors.aPI_FailedRemoveDirections, callContext).then(function (value) {
getMapErrorByMapErrorCodeVar.value = value;
}).then(function () {
// Assign ErrorMessage
// ErrorMessage.Code = JSONDeserializeReturnMessage.Data.Code
outVars.value.errorMessageOut.codeAttr = jSONDeserializeReturnMessageVar.value.dataOut.codeAttr;
// ErrorMessage.Message = If
outVars.value.errorMessageOut.messageAttr = ((jSONDeserializeReturnMessageVar.value.dataOut.isSuccessAttr) ? ("") : ((getMapErrorByMapErrorCodeVar.value.errorMessageOut + jSONDeserializeReturnMessageVar.value.dataOut.messageAttr)));
// Success = JSONDeserializeReturnMessage.Data.IsSuccess
outVars.value.successOut = jSONDeserializeReturnMessageVar.value.dataOut.isSuccessAttr;
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.RemoveDirections$vars", [{
name: "MapId",
attrName: "mapIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.RemoveDirections$removeDirectionsJSResult", [{
name: "ReturnMessage",
attrName: "returnMessageOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.RemoveDirections$outVars", [{
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
return new OutSystemsMapsModel.ST_f8c2d1b69d03ea90c73e9f07e7d98bf0Structure();
},
complexType: OutSystemsMapsModel.ST_f8c2d1b69d03ea90c73e9f07e7d98bf0Structure
}]);
OutSystemsMapsController.default.clientActionProxies.removeDirections$Action = function (mapIdIn) {
mapIdIn = (mapIdIn === undefined) ? "" : mapIdIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.removeDirections$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: actionResults.errorMessageOut
};
});
};
});

define("OutSystemsMaps.controller$RemoveDirections.RemoveDirectionsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.ReturnMessage = OutSystems.Maps.MapAPI.Directions.RemoveDirections($parameters.MapId)
};
});


define("OutSystemsMaps.controller$RemoveDrawingTools", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$RemoveDrawingTools.RemoveDrawingToolsJS"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_RemoveDrawingTools_RemoveDrawingToolsJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.removeDrawingTools$Action = function (drawingToolsWidgetIdIn, callContext) {
return OS.Logger.startActiveSpan("RemoveDrawingTools", function (span) {
if(span) {
span.setAttribute("code.function", "RemoveDrawingTools");
span.setAttribute("outsystems.function.key", "e661d729-5a12-4794-8e71-2290343f5d79");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.RemoveDrawingTools$vars"))());
vars.value.drawingToolsWidgetIdInLocal = drawingToolsWidgetIdIn;
OS.Logger.startActiveSpan("RemoveDrawingTools", function (span) {
if(span) {
span.setAttribute("code.function", "RemoveDrawingTools");
span.setAttribute("outsystems.function.key", "c4f859a3-83a2-4e52-ac39-0f91a31135db");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_RemoveDrawingTools_RemoveDrawingToolsJS, "RemoveDrawingTools", "RemoveDrawingTools", {
DrawingToolsWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.drawingToolsWidgetIdInLocal, OS.DataTypes.DataTypes.Text)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.RemoveDrawingTools$vars", [{
name: "DrawingToolsWidgetId",
attrName: "drawingToolsWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.clientActionProxies.removeDrawingTools$Action = function (drawingToolsWidgetIdIn) {
drawingToolsWidgetIdIn = (drawingToolsWidgetIdIn === undefined) ? "" : drawingToolsWidgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.removeDrawingTools$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(drawingToolsWidgetIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$RemoveDrawingTools.RemoveDrawingToolsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.Maps.MapAPI.DrawingToolsManager.RemoveDrawingTools($parameters.DrawingToolsWidgetId)
};
});


define("OutSystemsMaps.controller$RemoveFileLayer", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$RemoveFileLayer.RemoveShapeJS"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_RemoveFileLayer_RemoveShapeJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.removeFileLayer$Action = function (fileLayerWidgetIdIn, callContext) {
return OS.Logger.startActiveSpan("RemoveFileLayer", function (span) {
if(span) {
span.setAttribute("code.function", "RemoveFileLayer");
span.setAttribute("outsystems.function.key", "f5b030c7-ccc7-4c4d-bd42-5ea538a277ea");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.RemoveFileLayer$vars"))());
vars.value.fileLayerWidgetIdInLocal = fileLayerWidgetIdIn;
OS.Logger.startActiveSpan("RemoveShape", function (span) {
if(span) {
span.setAttribute("code.function", "RemoveShape");
span.setAttribute("outsystems.function.key", "7f68d990-13ee-4dff-a8a2-adbaa237c3f2");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_RemoveFileLayer_RemoveShapeJS, "RemoveShape", "RemoveFileLayer", {
FileLayerWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.fileLayerWidgetIdInLocal, OS.DataTypes.DataTypes.Text)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.RemoveFileLayer$vars", [{
name: "FileLayerWidgetId",
attrName: "fileLayerWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.clientActionProxies.removeFileLayer$Action = function (fileLayerWidgetIdIn) {
fileLayerWidgetIdIn = (fileLayerWidgetIdIn === undefined) ? "" : fileLayerWidgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.removeFileLayer$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(fileLayerWidgetIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$RemoveFileLayer.RemoveShapeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.Maps.MapAPI.FileLayerManager.RemoveFileLayer($parameters.FileLayerWidgetId)
};
});


define("OutSystemsMaps.controller$RemoveHeatmapLayer", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$RemoveHeatmapLayer.RemoveHeatmapLayerJS"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_RemoveHeatmapLayer_RemoveHeatmapLayerJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.removeHeatmapLayer$Action = function (heatmapLayerWidgetIdIn, callContext) {
return OS.Logger.startActiveSpan("RemoveHeatmapLayer", function (span) {
if(span) {
span.setAttribute("code.function", "RemoveHeatmapLayer");
span.setAttribute("outsystems.function.key", "996ec1f3-7a92-4fce-a253-340648055aad");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.RemoveHeatmapLayer$vars"))());
vars.value.heatmapLayerWidgetIdInLocal = heatmapLayerWidgetIdIn;
OS.Logger.startActiveSpan("RemoveHeatmapLayer", function (span) {
if(span) {
span.setAttribute("code.function", "RemoveHeatmapLayer");
span.setAttribute("outsystems.function.key", "8ab5e7a1-4187-465c-afc0-f5c347bb626e");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_RemoveHeatmapLayer_RemoveHeatmapLayerJS, "RemoveHeatmapLayer", "RemoveHeatmapLayer", {
HeatmapLayerWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.heatmapLayerWidgetIdInLocal, OS.DataTypes.DataTypes.Text)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.RemoveHeatmapLayer$vars", [{
name: "HeatmapLayerWidgetId",
attrName: "heatmapLayerWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.clientActionProxies.removeHeatmapLayer$Action = function (heatmapLayerWidgetIdIn) {
heatmapLayerWidgetIdIn = (heatmapLayerWidgetIdIn === undefined) ? "" : heatmapLayerWidgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.removeHeatmapLayer$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(heatmapLayerWidgetIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$RemoveHeatmapLayer.RemoveHeatmapLayerJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.Maps.MapAPI.HeatmapLayerManager.RemoveHeatmapLayer($parameters.HeatmapLayerWidgetId)
};
});


define("OutSystemsMaps.controller$RemoveMap", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$RemoveMap.RemoveMapJS"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_RemoveMap_RemoveMapJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.removeMap$Action = function (mapWidgetIdIn, callContext) {
return OS.Logger.startActiveSpan("RemoveMap", function (span) {
if(span) {
span.setAttribute("code.function", "RemoveMap");
span.setAttribute("outsystems.function.key", "90e17644-9644-4f17-8d51-311502004e6f");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.RemoveMap$vars"))());
vars.value.mapWidgetIdInLocal = mapWidgetIdIn;
OS.Logger.startActiveSpan("RemoveMap", function (span) {
if(span) {
span.setAttribute("code.function", "RemoveMap");
span.setAttribute("outsystems.function.key", "ecf84218-9ae7-4166-8da9-9e76f2fac7c0");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_RemoveMap_RemoveMapJS, "RemoveMap", "RemoveMap", {
MapWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.mapWidgetIdInLocal, OS.DataTypes.DataTypes.Text)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.RemoveMap$vars", [{
name: "MapWidgetId",
attrName: "mapWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.clientActionProxies.removeMap$Action = function (mapWidgetIdIn) {
mapWidgetIdIn = (mapWidgetIdIn === undefined) ? "" : mapWidgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.removeMap$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapWidgetIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$RemoveMap.RemoveMapJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.Maps.MapAPI.MapManager.RemoveMap($parameters.MapWidgetId)
};
});


define("OutSystemsMaps.controller$RemoveMarker", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$RemoveMarker.RemoveMarkerByIdJS", "OutSystemsMaps.controller$ServerAction.GetMapErrorByMapErrorCode", "OutSystemsMaps.model$ST_f8c2d1b69d03ea90c73e9f07e7d98bf0Structure", "OutSystemsMaps.model$ST_cdd94bc434e873b4d04598ac1e187543Structure"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_RemoveMarker_RemoveMarkerByIdJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.removeMarker$Action = function (markerIdIn, callContext) {
return OS.Logger.startActiveSpan("RemoveMarker", function (span) {
if(span) {
span.setAttribute("code.function", "RemoveMarker");
span.setAttribute("outsystems.function.key", "1012f971-b3cc-4b9c-bebe-55cd06425273");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

return OS.Flow.tryFinally(function () {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.RemoveMarker$vars"))());
vars.value.markerIdInLocal = markerIdIn;
var getMapErrorByMapErrorCodeVar = new OS.DataTypes.VariableHolder();
var removeMarkerByIdJSResult = new OS.DataTypes.VariableHolder();
var jSONDeserializeReturnMessageVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(OutSystemsMapsModel.ST_cdd94bc434e873b4d04598ac1e187543Structure))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.RemoveMarker$outVars"))());
return OS.Flow.executeAsyncFlow(function () {
removeMarkerByIdJSResult.value = OS.Logger.startActiveSpan("RemoveMarkerById", function (span) {
if(span) {
span.setAttribute("code.function", "RemoveMarkerById");
span.setAttribute("outsystems.function.key", "507ea64a-862b-4f4d-8c6b-18d32dbc8d3a");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_RemoveMarker_RemoveMarkerByIdJS, "RemoveMarkerById", "RemoveMarker", {
MarkerId: OS.DataConversion.JSNodeParamConverter.to(vars.value.markerIdInLocal, OS.DataTypes.DataTypes.Text),
APIResponse: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsMaps.RemoveMarker$removeMarkerByIdJSResult"))();
jsNodeResult.aPIResponseOut = OS.DataConversion.JSNodeParamConverter.from($parameters.APIResponse, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// JSON Deserialize: JSONDeserializeReturnMessage
jSONDeserializeReturnMessageVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(removeMarkerByIdJSResult.value.aPIResponseOut, OutSystemsMapsModel.ST_cdd94bc434e873b4d04598ac1e187543Structure, false);
// Set Success
// Success = JSONDeserializeReturnMessage.Data.IsSuccess
outVars.value.successOut = jSONDeserializeReturnMessageVar.value.dataOut.isSuccessAttr;
// Is Success?
return OS.Flow.executeSequence(function () {
if((!(outVars.value.successOut))) {
// Execute Action: GetMapErrorByMapErrorCode
return controller.getMapErrorByMapErrorCode$ServerAction(OutSystemsMapsModel.staticEntities.mapErrors.aPI_FailedRemoveMarker, callContext).then(function (value) {
getMapErrorByMapErrorCodeVar.value = value;
}).then(function () {
// Set ErrorMessage
// ErrorMessage.Code = JSONDeserializeReturnMessage.Data.Code
outVars.value.errorMessageOut.codeAttr = jSONDeserializeReturnMessageVar.value.dataOut.codeAttr;
// ErrorMessage.Message = GetMapErrorByMapErrorCode.ErrorMessage + JSONDeserializeReturnMessage.Data.Message
outVars.value.errorMessageOut.messageAttr = (getMapErrorByMapErrorCodeVar.value.errorMessageOut + jSONDeserializeReturnMessageVar.value.dataOut.messageAttr);
});
}

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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.RemoveMarker$vars", [{
name: "MarkerId",
attrName: "markerIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.RemoveMarker$removeMarkerByIdJSResult", [{
name: "APIResponse",
attrName: "aPIResponseOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.RemoveMarker$outVars", [{
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
return new OutSystemsMapsModel.ST_f8c2d1b69d03ea90c73e9f07e7d98bf0Structure();
},
complexType: OutSystemsMapsModel.ST_f8c2d1b69d03ea90c73e9f07e7d98bf0Structure
}]);
OutSystemsMapsController.default.clientActionProxies.removeMarker$Action = function (markerIdIn) {
markerIdIn = (markerIdIn === undefined) ? "" : markerIdIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.removeMarker$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(markerIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: actionResults.errorMessageOut
};
});
};
});

define("OutSystemsMaps.controller$RemoveMarker.RemoveMarkerByIdJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.APIResponse = OutSystems.Maps.MapAPI.MarkerManager.RemoveMarker($parameters.MarkerId);
};
});


define("OutSystemsMaps.controller$RemoveMarkerFromCluster", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$RemoveMarkerFromCluster.RemoveMarkerFromClusterJS", "OutSystemsMaps.model$ST_f8c2d1b69d03ea90c73e9f07e7d98bf0Structure", "OutSystemsMaps.model$ST_cdd94bc434e873b4d04598ac1e187543Structure"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_RemoveMarkerFromCluster_RemoveMarkerFromClusterJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.removeMarkerFromCluster$Action = function (mapIdIn, markerPositionIn, callContext) {
return OS.Logger.startActiveSpan("RemoveMarkerFromCluster", function (span) {
if(span) {
span.setAttribute("code.function", "RemoveMarkerFromCluster");
span.setAttribute("outsystems.function.key", "973b5b16-041b-44dc-acef-3835695501fd");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.RemoveMarkerFromCluster$vars"))());
vars.value.mapIdInLocal = mapIdIn;
vars.value.markerPositionInLocal = markerPositionIn;
var removeMarkerFromClusterJSResult = new OS.DataTypes.VariableHolder();
var jSONDeserializeErrorMessageVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(OutSystemsMapsModel.ST_cdd94bc434e873b4d04598ac1e187543Structure))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.RemoveMarkerFromCluster$outVars"))());
removeMarkerFromClusterJSResult.value = OS.Logger.startActiveSpan("RemoveMarkerFromCluster", function (span) {
if(span) {
span.setAttribute("code.function", "RemoveMarkerFromCluster");
span.setAttribute("outsystems.function.key", "4431714a-d5c5-4f69-8522-46f0c80842f0");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_RemoveMarkerFromCluster_RemoveMarkerFromClusterJS, "RemoveMarkerFromCluster", "RemoveMarkerFromCluster", {
MarkerPosition: OS.DataConversion.JSNodeParamConverter.to(vars.value.markerPositionInLocal, OS.DataTypes.DataTypes.Text),
MapId: OS.DataConversion.JSNodeParamConverter.to(vars.value.mapIdInLocal, OS.DataTypes.DataTypes.Text),
ResponseJSON: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsMaps.RemoveMarkerFromCluster$removeMarkerFromClusterJSResult"))();
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
jSONDeserializeErrorMessageVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(removeMarkerFromClusterJSResult.value.responseJSONOut, OutSystemsMapsModel.ST_cdd94bc434e873b4d04598ac1e187543Structure, false);
// Set Result Information
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.RemoveMarkerFromCluster$vars", [{
name: "MapId",
attrName: "mapIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "MarkerPosition",
attrName: "markerPositionInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.RemoveMarkerFromCluster$removeMarkerFromClusterJSResult", [{
name: "ResponseJSON",
attrName: "responseJSONOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.RemoveMarkerFromCluster$outVars", [{
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
return new OutSystemsMapsModel.ST_f8c2d1b69d03ea90c73e9f07e7d98bf0Structure();
},
complexType: OutSystemsMapsModel.ST_f8c2d1b69d03ea90c73e9f07e7d98bf0Structure
}]);
OutSystemsMapsController.default.clientActionProxies.removeMarkerFromCluster$Action = function (mapIdIn, markerPositionIn) {
mapIdIn = (mapIdIn === undefined) ? "" : mapIdIn;
markerPositionIn = (markerPositionIn === undefined) ? "" : markerPositionIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.removeMarkerFromCluster$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(markerPositionIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: actionResults.errorMessageOut
};
});
};
});

define("OutSystemsMaps.controller$RemoveMarkerFromCluster.RemoveMarkerFromClusterJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.ResponseJSON = OutSystems.Maps.MapAPI.MarkerManager.RemoveMarkerFromCluster($parameters.MapId, $parameters.MarkerPosition);
};
});


define("OutSystemsMaps.controller$RemoveSearchPlaces", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$RemoveSearchPlaces.RemoveSearchPlacesJS"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_RemoveSearchPlaces_RemoveSearchPlacesJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.removeSearchPlaces$Action = function (mapWidgetIdIn, callContext) {
return OS.Logger.startActiveSpan("RemoveSearchPlaces", function (span) {
if(span) {
span.setAttribute("code.function", "RemoveSearchPlaces");
span.setAttribute("outsystems.function.key", "95048768-0a83-410a-b40d-742baee885c9");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.RemoveSearchPlaces$vars"))());
vars.value.mapWidgetIdInLocal = mapWidgetIdIn;
OS.Logger.startActiveSpan("RemoveSearchPlaces", function (span) {
if(span) {
span.setAttribute("code.function", "RemoveSearchPlaces");
span.setAttribute("outsystems.function.key", "49e6ad64-1cc9-42df-9d04-2812cd102d2f");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_RemoveSearchPlaces_RemoveSearchPlacesJS, "RemoveSearchPlaces", "RemoveSearchPlaces", {
SearchPlacesWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.mapWidgetIdInLocal, OS.DataTypes.DataTypes.Text)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.RemoveSearchPlaces$vars", [{
name: "MapWidgetId",
attrName: "mapWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.clientActionProxies.removeSearchPlaces$Action = function (mapWidgetIdIn) {
mapWidgetIdIn = (mapWidgetIdIn === undefined) ? "" : mapWidgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.removeSearchPlaces$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapWidgetIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$RemoveSearchPlaces.RemoveSearchPlacesJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.Maps.PlacesAPI.SearchPlacesManager.RemoveSearchPlaces($parameters.SearchPlacesWidgetId)
};
});


define("OutSystemsMaps.controller$RemoveShape", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$RemoveShape.RemoveShapeJS"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_RemoveShape_RemoveShapeJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.removeShape$Action = function (shapeWidgetIdIn, callContext) {
return OS.Logger.startActiveSpan("RemoveShape", function (span) {
if(span) {
span.setAttribute("code.function", "RemoveShape");
span.setAttribute("outsystems.function.key", "38405bf8-763a-46f6-bc7c-8c08f1594d60");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.RemoveShape$vars"))());
vars.value.shapeWidgetIdInLocal = shapeWidgetIdIn;
OS.Logger.startActiveSpan("RemoveShape", function (span) {
if(span) {
span.setAttribute("code.function", "RemoveShape");
span.setAttribute("outsystems.function.key", "93b565ca-317f-4131-9f77-1e113bbf712c");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_RemoveShape_RemoveShapeJS, "RemoveShape", "RemoveShape", {
ShapeWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.shapeWidgetIdInLocal, OS.DataTypes.DataTypes.Text)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.RemoveShape$vars", [{
name: "ShapeWidgetId",
attrName: "shapeWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.clientActionProxies.removeShape$Action = function (shapeWidgetIdIn) {
shapeWidgetIdIn = (shapeWidgetIdIn === undefined) ? "" : shapeWidgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.removeShape$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(shapeWidgetIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$RemoveShape.RemoveShapeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.Maps.MapAPI.ShapeManager.RemoveShape($parameters.ShapeWidgetId)
};
});


define("OutSystemsMaps.controller$RemoveTool", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$RemoveTool.RemoveToolJS"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_RemoveTool_RemoveToolJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.removeTool$Action = function (toolWidgetIdIn, callContext) {
return OS.Logger.startActiveSpan("RemoveTool", function (span) {
if(span) {
span.setAttribute("code.function", "RemoveTool");
span.setAttribute("outsystems.function.key", "c04462d9-dca3-45e0-8168-de7f27aca842");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.RemoveTool$vars"))());
vars.value.toolWidgetIdInLocal = toolWidgetIdIn;
OS.Logger.startActiveSpan("RemoveTool", function (span) {
if(span) {
span.setAttribute("code.function", "RemoveTool");
span.setAttribute("outsystems.function.key", "c7bc173e-228f-4453-b9b6-eacda01bba39");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_RemoveTool_RemoveToolJS, "RemoveTool", "RemoveTool", {
ToolWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.toolWidgetIdInLocal, OS.DataTypes.DataTypes.Text)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.RemoveTool$vars", [{
name: "ToolWidgetId",
attrName: "toolWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.clientActionProxies.removeTool$Action = function (toolWidgetIdIn) {
toolWidgetIdIn = (toolWidgetIdIn === undefined) ? "" : toolWidgetIdIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.removeTool$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(toolWidgetIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$RemoveTool.RemoveToolJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.Maps.MapAPI.DrawingToolsManager.RemoveTool($parameters.ToolWidgetId)
};
});


define("OutSystemsMaps.controller$SearchPlacesEventSubscribe", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$SearchPlacesEventSubscribe.SearchPlacesEventRegisterJS"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_SearchPlacesEventSubscribe_SearchPlacesEventRegisterJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.searchPlacesEventSubscribe$Action = function (searchPlacesWidgetIdIn, searchPlacesEventIdIn, callbackIn, callContext) {
return OS.Logger.startActiveSpan("SearchPlacesEventSubscribe", function (span) {
if(span) {
span.setAttribute("code.function", "SearchPlacesEventSubscribe");
span.setAttribute("outsystems.function.key", "abe7ad2c-a6f3-4480-b5f4-38a31c0c8f65");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.SearchPlacesEventSubscribe$vars"))());
vars.value.searchPlacesWidgetIdInLocal = searchPlacesWidgetIdIn;
vars.value.searchPlacesEventIdInLocal = searchPlacesEventIdIn;
vars.value.callbackInLocal = callbackIn;
OS.Logger.startActiveSpan("SearchPlacesEventRegister", function (span) {
if(span) {
span.setAttribute("code.function", "SearchPlacesEventRegister");
span.setAttribute("outsystems.function.key", "15024c52-87e6-4c33-8a5a-3d14db98439c");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_SearchPlacesEventSubscribe_SearchPlacesEventRegisterJS, "SearchPlacesEventRegister", "SearchPlacesEventSubscribe", {
SearchPlacesEventId: OS.DataConversion.JSNodeParamConverter.to(vars.value.searchPlacesEventIdInLocal, OS.DataTypes.DataTypes.Text),
Callback: OS.DataConversion.JSNodeParamConverter.to(vars.value.callbackInLocal, OS.DataTypes.DataTypes.Object),
SearchPlacesWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.searchPlacesWidgetIdInLocal, OS.DataTypes.DataTypes.Text)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.SearchPlacesEventSubscribe$vars", [{
name: "SearchPlacesWidgetId",
attrName: "searchPlacesWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "SearchPlacesEventId",
attrName: "searchPlacesEventIdInLocal",
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
OutSystemsMapsController.default.clientActionProxies.searchPlacesEventSubscribe$Action = function (searchPlacesWidgetIdIn, searchPlacesEventIdIn, callbackIn) {
searchPlacesWidgetIdIn = (searchPlacesWidgetIdIn === undefined) ? "" : searchPlacesWidgetIdIn;
searchPlacesEventIdIn = (searchPlacesEventIdIn === undefined) ? "" : searchPlacesEventIdIn;
callbackIn = (callbackIn === undefined) ? null : callbackIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.searchPlacesEventSubscribe$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(searchPlacesWidgetIdIn, OS.DataTypes.DataTypes.Text), searchPlacesEventIdIn, OS.DataConversion.JSNodeParamConverter.from(callbackIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$SearchPlacesEventSubscribe.SearchPlacesEventRegisterJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.Maps.PlacesAPI.SearchPlacesManager.Events.Subscribe($parameters.SearchPlacesWidgetId, $parameters.SearchPlacesEventId, $parameters.Callback);
};
});


define("OutSystemsMaps.controller$SetDirections", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$SetDirections.SetDirectionsJS", "OutSystemsMaps.controller$ServerAction.GetMapErrorByMapErrorCode", "OutSystemsMaps.model$ST_78b0cd1737b6725aac7ae45759769b93Structure", "OutSystemsMaps.model$ST_f8c2d1b69d03ea90c73e9f07e7d98bf0Structure", "OutSystemsMaps.model$ST_cdd94bc434e873b4d04598ac1e187543Structure"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_SetDirections_SetDirectionsJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.setDirections$Action = function (mapIdIn, originIn, destinationIn, travelModeIn, waypointsIn, optimizeWaypointsIn, avoidTollsIn, avoidHighwaysIn, avoidFerriesIn, callContext) {
return OS.Logger.startActiveSpan("SetDirections", function (span) {
if(span) {
span.setAttribute("code.function", "SetDirections");
span.setAttribute("outsystems.function.key", "6a7e4bba-bd44-41cc-8935-4efb0d618a9f");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

return OS.Flow.tryFinally(function () {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.SetDirections$vars"))());
vars.value.mapIdInLocal = mapIdIn;
vars.value.originInLocal = originIn;
vars.value.destinationInLocal = destinationIn;
vars.value.travelModeInLocal = travelModeIn;
vars.value.waypointsInLocal = waypointsIn.clone();
vars.value.optimizeWaypointsInLocal = optimizeWaypointsIn;
vars.value.avoidTollsInLocal = avoidTollsIn;
vars.value.avoidHighwaysInLocal = avoidHighwaysIn;
vars.value.avoidFerriesInLocal = avoidFerriesIn;
var getMapErrorByMapErrorCodeVar = new OS.DataTypes.VariableHolder();
var setDirectionsJSResult = new OS.DataTypes.VariableHolder();
var jSONSerialize_OptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var jSONDeserializeReturnMessageVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(OutSystemsMapsModel.ST_cdd94bc434e873b4d04598ac1e187543Structure))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.SetDirections$outVars"))());
return OS.Flow.executeAsyncFlow(function () {
// Set Options
// Options.Origin = Origin
vars.value.optionsVar.originAttr = vars.value.originInLocal;
// Options.Destination = Destination
vars.value.optionsVar.destinationAttr = vars.value.destinationInLocal;
// Options.TravelMode = TravelMode
vars.value.optionsVar.travelModeAttr = vars.value.travelModeInLocal;
// Options.Waypoints = Waypoints
vars.value.optionsVar.waypointsAttr = vars.value.waypointsInLocal;
// Options.OptimizeWaypoints = OptimizeWaypoints
vars.value.optionsVar.optimizeWaypointsAttr = vars.value.optimizeWaypointsInLocal;
// Options.Exclude.AvoidTolls = AvoidTolls
vars.value.optionsVar.excludeAttr.avoidTollsAttr = vars.value.avoidTollsInLocal;
// Options.Exclude.AvoidHighways = AvoidHighways
vars.value.optionsVar.excludeAttr.avoidHighwaysAttr = vars.value.avoidHighwaysInLocal;
// Options.Exclude.AvoidFerries = AvoidFerries
vars.value.optionsVar.excludeAttr.avoidFerriesAttr = vars.value.avoidFerriesInLocal;
// JSON Serialize: JSONSerialize_Options
jSONSerialize_OptionsVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.optionsVar, true, false);
return OS.Logger.startActiveSpan("SetDirections", function (span) {
if(span) {
span.setAttribute("code.function", "SetDirections");
span.setAttribute("outsystems.function.key", "e735af39-5758-4426-9dcc-f038b38fae5a");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteAsyncJSNode(OutSystemsMaps_controller_SetDirections_SetDirectionsJS, "SetDirections", "SetDirections", {
MapId: OS.DataConversion.JSNodeParamConverter.to(vars.value.mapIdInLocal, OS.DataTypes.DataTypes.Text),
Options: OS.DataConversion.JSNodeParamConverter.to(jSONSerialize_OptionsVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
ReturnMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsMaps.SetDirections$setDirectionsJSResult"))();
jsNodeResult.returnMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ReturnMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1).then(function (results) {
setDirectionsJSResult.value = results;
}).then(function () {
// JSON Deserialize: JSONDeserializeReturnMessage
jSONDeserializeReturnMessageVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(setDirectionsJSResult.value.returnMessageOut, OutSystemsMapsModel.ST_cdd94bc434e873b4d04598ac1e187543Structure, false);
}).then(function () {
// IsSuccess?
return OS.Flow.executeSequence(function () {
if((!(jSONDeserializeReturnMessageVar.value.dataOut.isSuccessAttr))) {
// Execute Action: GetMapErrorByMapErrorCode
return controller.getMapErrorByMapErrorCode$ServerAction(OS.BuiltinFunctions.textToIdentifier(jSONDeserializeReturnMessageVar.value.dataOut.codeAttr), callContext).then(function (value) {
getMapErrorByMapErrorCodeVar.value = value;
}).then(function () {
// Assign ErrorMessage
// ErrorMessage.Code = JSONDeserializeReturnMessage.Data.Code
outVars.value.errorMessageOut.codeAttr = jSONDeserializeReturnMessageVar.value.dataOut.codeAttr;
// ErrorMessage.Message = If
outVars.value.errorMessageOut.messageAttr = ((jSONDeserializeReturnMessageVar.value.dataOut.isSuccessAttr) ? ("") : ((getMapErrorByMapErrorCodeVar.value.errorMessageOut + jSONDeserializeReturnMessageVar.value.dataOut.messageAttr)));
});
}

});
}).then(function () {
// Assign IsSuccess
// Success = JSONDeserializeReturnMessage.Data.IsSuccess
outVars.value.successOut = jSONDeserializeReturnMessageVar.value.dataOut.isSuccessAttr;
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.SetDirections$vars", [{
name: "MapId",
attrName: "mapIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Origin",
attrName: "originInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Destination",
attrName: "destinationInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "TravelMode",
attrName: "travelModeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Waypoints",
attrName: "waypointsInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new OS.DataTypes.TextList();
},
complexType: OS.DataTypes.TextList
}, {
name: "OptimizeWaypoints",
attrName: "optimizeWaypointsInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "AvoidTolls",
attrName: "avoidTollsInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "AvoidHighways",
attrName: "avoidHighwaysInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "AvoidFerries",
attrName: "avoidFerriesInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Options",
attrName: "optionsVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new OutSystemsMapsModel.ST_78b0cd1737b6725aac7ae45759769b93Structure();
},
complexType: OutSystemsMapsModel.ST_78b0cd1737b6725aac7ae45759769b93Structure
}]);
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.SetDirections$setDirectionsJSResult", [{
name: "ReturnMessage",
attrName: "returnMessageOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.SetDirections$outVars", [{
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
return new OutSystemsMapsModel.ST_f8c2d1b69d03ea90c73e9f07e7d98bf0Structure();
},
complexType: OutSystemsMapsModel.ST_f8c2d1b69d03ea90c73e9f07e7d98bf0Structure
}]);
OutSystemsMapsController.default.clientActionProxies.setDirections$Action = function (mapIdIn, originIn, destinationIn, travelModeIn, waypointsIn, optimizeWaypointsIn, avoidTollsIn, avoidHighwaysIn, avoidFerriesIn) {
mapIdIn = (mapIdIn === undefined) ? "" : mapIdIn;
originIn = (originIn === undefined) ? "" : originIn;
destinationIn = (destinationIn === undefined) ? "" : destinationIn;
travelModeIn = (travelModeIn === undefined) ? "" : travelModeIn;
waypointsIn = (waypointsIn === undefined) ? new OS.DataTypes.TextList() : waypointsIn;
optimizeWaypointsIn = (optimizeWaypointsIn === undefined) ? false : optimizeWaypointsIn;
avoidTollsIn = (avoidTollsIn === undefined) ? false : avoidTollsIn;
avoidHighwaysIn = (avoidHighwaysIn === undefined) ? false : avoidHighwaysIn;
avoidFerriesIn = (avoidFerriesIn === undefined) ? false : avoidFerriesIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.setDirections$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(originIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(destinationIn, OS.DataTypes.DataTypes.Text), travelModeIn, waypointsIn, OS.DataConversion.JSNodeParamConverter.from(optimizeWaypointsIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(avoidTollsIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(avoidHighwaysIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(avoidFerriesIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: actionResults.errorMessageOut
};
});
};
});

define("OutSystemsMaps.controller$SetDirections.SetDirectionsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
OutSystems.Maps.MapAPI.Directions.SetDirections(
    $parameters.MapId,
    $parameters.Options
).then(function(response) {
    $parameters.ReturnMessage = response;
    $resolve();
});
});
};
});


define("OutSystemsMaps.controller$SetLogVerbosity", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.setLogVerbosity$Action = function (verbosityIdIn, callContext) {
return OS.Logger.startActiveSpan("SetLogVerbosity", function (span) {
if(span) {
span.setAttribute("code.function", "SetLogVerbosity");
span.setAttribute("outsystems.function.key", "5312c412-7c71-4aa1-bc23-c9d70f3473bc");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.SetLogVerbosity$vars"))());
vars.value.verbosityIdInLocal = verbosityIdIn;
return ;
} finally {
if(span) {
span.end();
}

}

}, 1);
};
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.SetLogVerbosity$vars", [{
name: "VerbosityId",
attrName: "verbosityIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.clientActionProxies.setLogVerbosity$Action = function (verbosityIdIn) {
verbosityIdIn = (verbosityIdIn === undefined) ? "" : verbosityIdIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.setLogVerbosity$Action.bind(controller, verbosityIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});


define("OutSystemsMaps.controller$SetMapHeight", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$SetMapHeight.SetHeightJS"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_SetMapHeight_SetHeightJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.setMapHeight$Action = function (mapWidgetIdIn, heightIn, callContext) {
return OS.Logger.startActiveSpan("SetMapHeight", function (span) {
if(span) {
span.setAttribute("code.function", "SetMapHeight");
span.setAttribute("outsystems.function.key", "90aff7ce-5f48-43f9-8eae-4d56174f9923");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.SetMapHeight$vars"))());
vars.value.mapWidgetIdInLocal = mapWidgetIdIn;
vars.value.heightInLocal = heightIn;
OS.Logger.startActiveSpan("SetHeight", function (span) {
if(span) {
span.setAttribute("code.function", "SetHeight");
span.setAttribute("outsystems.function.key", "565412ed-bb8b-4fa4-98cc-c6117ddf029f");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_SetMapHeight_SetHeightJS, "SetHeight", "SetMapHeight", {
Height: OS.DataConversion.JSNodeParamConverter.to(vars.value.heightInLocal, OS.DataTypes.DataTypes.Text),
MapWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.mapWidgetIdInLocal, OS.DataTypes.DataTypes.Text)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.SetMapHeight$vars", [{
name: "MapWidgetId",
attrName: "mapWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Height",
attrName: "heightInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.clientActionProxies.setMapHeight$Action = function (mapWidgetIdIn, heightIn) {
mapWidgetIdIn = (mapWidgetIdIn === undefined) ? "" : mapWidgetIdIn;
heightIn = (heightIn === undefined) ? "" : heightIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.setMapHeight$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(mapWidgetIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(heightIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$SetMapHeight.SetHeightJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.Maps.MapAPI.MapManager.SetHeight($parameters.MapWidgetId, $parameters.Height)
};
});


define("OutSystemsMaps.controller$ShapeEventSubscribe", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ShapeEventSubscribe.ShapeEventRegisterJS"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_ShapeEventSubscribe_ShapeEventRegisterJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.shapeEventSubscribe$Action = function (shapeWidgetIdIn, shapeEventIdIn, callbackIn, callContext) {
return OS.Logger.startActiveSpan("ShapeEventSubscribe", function (span) {
if(span) {
span.setAttribute("code.function", "ShapeEventSubscribe");
span.setAttribute("outsystems.function.key", "2b19a955-582e-4d1e-b8bd-b45d7f46eaa4");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ShapeEventSubscribe$vars"))());
vars.value.shapeWidgetIdInLocal = shapeWidgetIdIn;
vars.value.shapeEventIdInLocal = shapeEventIdIn;
vars.value.callbackInLocal = callbackIn;
OS.Logger.startActiveSpan("ShapeEventRegister", function (span) {
if(span) {
span.setAttribute("code.function", "ShapeEventRegister");
span.setAttribute("outsystems.function.key", "a069aa2b-f346-4054-9155-7f57654bd196");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_ShapeEventSubscribe_ShapeEventRegisterJS, "ShapeEventRegister", "ShapeEventSubscribe", {
ShapeEventId: OS.DataConversion.JSNodeParamConverter.to(vars.value.shapeEventIdInLocal, OS.DataTypes.DataTypes.Text),
ShapeWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.shapeWidgetIdInLocal, OS.DataTypes.DataTypes.Text),
Callback: OS.DataConversion.JSNodeParamConverter.to(vars.value.callbackInLocal, OS.DataTypes.DataTypes.Object)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ShapeEventSubscribe$vars", [{
name: "ShapeWidgetId",
attrName: "shapeWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ShapeEventId",
attrName: "shapeEventIdInLocal",
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
OutSystemsMapsController.default.clientActionProxies.shapeEventSubscribe$Action = function (shapeWidgetIdIn, shapeEventIdIn, callbackIn) {
shapeWidgetIdIn = (shapeWidgetIdIn === undefined) ? "" : shapeWidgetIdIn;
shapeEventIdIn = (shapeEventIdIn === undefined) ? "" : shapeEventIdIn;
callbackIn = (callbackIn === undefined) ? null : callbackIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.shapeEventSubscribe$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(shapeWidgetIdIn, OS.DataTypes.DataTypes.Text), shapeEventIdIn, OS.DataConversion.JSNodeParamConverter.from(callbackIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$ShapeEventSubscribe.ShapeEventRegisterJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.Maps.MapAPI.ShapeManager.Events.Subscribe($parameters.ShapeWidgetId, $parameters.ShapeEventId, $parameters.Callback);
};
});


define("OutSystemsMaps.controller$ShapeEventTriggeredSubscribe", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ShapeEventTriggeredSubscribe.ShapeEventRegisterJS"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_ShapeEventTriggeredSubscribe_ShapeEventRegisterJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.shapeEventTriggeredSubscribe$Action = function (shapeEventUniqueIdIn, shapeEventNameIn, callbackIn, callContext) {
return OS.Logger.startActiveSpan("ShapeEventTriggeredSubscribe", function (span) {
if(span) {
span.setAttribute("code.function", "ShapeEventTriggeredSubscribe");
span.setAttribute("outsystems.function.key", "8dd02fb6-b307-44a0-9131-03d5fc051173");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ShapeEventTriggeredSubscribe$vars"))());
vars.value.shapeEventUniqueIdInLocal = shapeEventUniqueIdIn;
vars.value.shapeEventNameInLocal = shapeEventNameIn;
vars.value.callbackInLocal = callbackIn;
OS.Logger.startActiveSpan("ShapeEventRegister", function (span) {
if(span) {
span.setAttribute("code.function", "ShapeEventRegister");
span.setAttribute("outsystems.function.key", "c5717557-90e9-47c0-926d-103aad9c5996");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_ShapeEventTriggeredSubscribe_ShapeEventRegisterJS, "ShapeEventRegister", "ShapeEventTriggeredSubscribe", {
Callback: OS.DataConversion.JSNodeParamConverter.to(vars.value.callbackInLocal, OS.DataTypes.DataTypes.Object),
ShapeEventUniqueId: OS.DataConversion.JSNodeParamConverter.to(vars.value.shapeEventUniqueIdInLocal, OS.DataTypes.DataTypes.Text),
ShapeEventName: OS.DataConversion.JSNodeParamConverter.to(vars.value.shapeEventNameInLocal, OS.DataTypes.DataTypes.Text)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ShapeEventTriggeredSubscribe$vars", [{
name: "ShapeEventUniqueId",
attrName: "shapeEventUniqueIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ShapeEventName",
attrName: "shapeEventNameInLocal",
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
OutSystemsMapsController.default.clientActionProxies.shapeEventTriggeredSubscribe$Action = function (shapeEventUniqueIdIn, shapeEventNameIn, callbackIn) {
shapeEventUniqueIdIn = (shapeEventUniqueIdIn === undefined) ? "" : shapeEventUniqueIdIn;
shapeEventNameIn = (shapeEventNameIn === undefined) ? "" : shapeEventNameIn;
callbackIn = (callbackIn === undefined) ? null : callbackIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.shapeEventTriggeredSubscribe$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(shapeEventUniqueIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(shapeEventNameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(callbackIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$ShapeEventTriggeredSubscribe.ShapeEventRegisterJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.Maps.MapAPI.ShapeManager.Events.SubscribeByEventUniqueId($parameters.ShapeEventUniqueId, $parameters.ShapeEventName, $parameters.Callback);
};
});


define("OutSystemsMaps.controller$ShapeEventTriggeredUnsubscribe", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ShapeEventTriggeredUnsubscribe.ShapeEventUnregisterJS"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_ShapeEventTriggeredUnsubscribe_ShapeEventUnregisterJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.shapeEventTriggeredUnsubscribe$Action = function (shapeEventUniqueIdIn, shapeEventIdIn, callbackIn, callContext) {
return OS.Logger.startActiveSpan("ShapeEventTriggeredUnsubscribe", function (span) {
if(span) {
span.setAttribute("code.function", "ShapeEventTriggeredUnsubscribe");
span.setAttribute("outsystems.function.key", "a6dc3aca-e50f-4bcb-8d9a-a044fd16cf8e");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ShapeEventTriggeredUnsubscribe$vars"))());
vars.value.shapeEventUniqueIdInLocal = shapeEventUniqueIdIn;
vars.value.shapeEventIdInLocal = shapeEventIdIn;
vars.value.callbackInLocal = callbackIn;
OS.Logger.startActiveSpan("ShapeEventUnregister", function (span) {
if(span) {
span.setAttribute("code.function", "ShapeEventUnregister");
span.setAttribute("outsystems.function.key", "24003390-cff1-49cf-9d62-9d20b878b8ff");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_ShapeEventTriggeredUnsubscribe_ShapeEventUnregisterJS, "ShapeEventUnregister", "ShapeEventTriggeredUnsubscribe", {
ShapeEventId: OS.DataConversion.JSNodeParamConverter.to(vars.value.shapeEventIdInLocal, OS.DataTypes.DataTypes.Text),
ShapeWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.shapeEventUniqueIdInLocal, OS.DataTypes.DataTypes.Text),
Callback: OS.DataConversion.JSNodeParamConverter.to(vars.value.callbackInLocal, OS.DataTypes.DataTypes.Object)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ShapeEventTriggeredUnsubscribe$vars", [{
name: "ShapeEventUniqueId",
attrName: "shapeEventUniqueIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ShapeEventId",
attrName: "shapeEventIdInLocal",
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
OutSystemsMapsController.default.clientActionProxies.shapeEventTriggeredUnsubscribe$Action = function (shapeEventUniqueIdIn, shapeEventIdIn, callbackIn) {
shapeEventUniqueIdIn = (shapeEventUniqueIdIn === undefined) ? "" : shapeEventUniqueIdIn;
shapeEventIdIn = (shapeEventIdIn === undefined) ? "" : shapeEventIdIn;
callbackIn = (callbackIn === undefined) ? null : callbackIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.shapeEventTriggeredUnsubscribe$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(shapeEventUniqueIdIn, OS.DataTypes.DataTypes.Text), shapeEventIdIn, OS.DataConversion.JSNodeParamConverter.from(callbackIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$ShapeEventTriggeredUnsubscribe.ShapeEventUnregisterJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.Maps.MapAPI.ShapeManager.Events.Unsubscribe($parameters.ShapeWidgetId, $parameters.ShapeEventId, $parameters.Callback);
};
});


define("OutSystemsMaps.controller$SubscribeMarkerEvent", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$SubscribeMarkerEvent.AddMarkerEventJS", "OutSystemsMaps.controller$ServerAction.GetMapErrorByMapErrorCode", "OutSystemsMaps.model$ST_f8c2d1b69d03ea90c73e9f07e7d98bf0Structure", "OutSystemsMaps.model$ST_cdd94bc434e873b4d04598ac1e187543Structure"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_SubscribeMarkerEvent_AddMarkerEventJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.subscribeMarkerEvent$Action = function (markerIdIn, markerEventTriggeredIdIn, callbackIn, callContext) {
return OS.Logger.startActiveSpan("SubscribeMarkerEvent", function (span) {
if(span) {
span.setAttribute("code.function", "SubscribeMarkerEvent");
span.setAttribute("outsystems.function.key", "bd22d7e6-d5fc-40cd-80be-11951dd341e5");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

return OS.Flow.tryFinally(function () {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.SubscribeMarkerEvent$vars"))());
vars.value.markerIdInLocal = markerIdIn;
vars.value.markerEventTriggeredIdInLocal = markerEventTriggeredIdIn;
vars.value.callbackInLocal = callbackIn;
var getMapErrorByMapErrorCodeVar = new OS.DataTypes.VariableHolder();
var addMarkerEventJSResult = new OS.DataTypes.VariableHolder();
var jSONDeserializeReturnMessageVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(OutSystemsMapsModel.ST_cdd94bc434e873b4d04598ac1e187543Structure))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.SubscribeMarkerEvent$outVars"))());
return OS.Flow.executeAsyncFlow(function () {
addMarkerEventJSResult.value = OS.Logger.startActiveSpan("AddMarkerEvent", function (span) {
if(span) {
span.setAttribute("code.function", "AddMarkerEvent");
span.setAttribute("outsystems.function.key", "5a1d841c-6b0c-4a5f-b58d-2c657c6dae83");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_SubscribeMarkerEvent_AddMarkerEventJS, "AddMarkerEvent", "SubscribeMarkerEvent", {
MarkerId: OS.DataConversion.JSNodeParamConverter.to(vars.value.markerIdInLocal, OS.DataTypes.DataTypes.Text),
MarkerEventTriggeredId: OS.DataConversion.JSNodeParamConverter.to(vars.value.markerEventTriggeredIdInLocal, OS.DataTypes.DataTypes.Text),
Callback: OS.DataConversion.JSNodeParamConverter.to(vars.value.callbackInLocal, OS.DataTypes.DataTypes.Object),
ReturnMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsMaps.SubscribeMarkerEvent$addMarkerEventJSResult"))();
jsNodeResult.returnMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ReturnMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// JSON Deserialize: JSONDeserializeReturnMessage
jSONDeserializeReturnMessageVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(addMarkerEventJSResult.value.returnMessageOut, OutSystemsMapsModel.ST_cdd94bc434e873b4d04598ac1e187543Structure, false);
// Set Success
// Success = JSONDeserializeReturnMessage.Data.IsSuccess
outVars.value.successOut = jSONDeserializeReturnMessageVar.value.dataOut.isSuccessAttr;
// Is Success?
return OS.Flow.executeSequence(function () {
if((!(outVars.value.successOut))) {
// Execute Action: GetMapErrorByMapErrorCode
return controller.getMapErrorByMapErrorCode$ServerAction(OutSystemsMapsModel.staticEntities.mapErrors.aPI_FailedSubscribeMarkerEvent, callContext).then(function (value) {
getMapErrorByMapErrorCodeVar.value = value;
}).then(function () {
// Set ErrorMessage
// ErrorMessage.Code = JSONDeserializeReturnMessage.Data.Code
outVars.value.errorMessageOut.codeAttr = jSONDeserializeReturnMessageVar.value.dataOut.codeAttr;
// ErrorMessage.Message = GetMapErrorByMapErrorCode.ErrorMessage + JSONDeserializeReturnMessage.Data.Message
outVars.value.errorMessageOut.messageAttr = (getMapErrorByMapErrorCodeVar.value.errorMessageOut + jSONDeserializeReturnMessageVar.value.dataOut.messageAttr);
});
}

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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.SubscribeMarkerEvent$vars", [{
name: "MarkerId",
attrName: "markerIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "MarkerEventTriggeredId",
attrName: "markerEventTriggeredIdInLocal",
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
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.SubscribeMarkerEvent$addMarkerEventJSResult", [{
name: "ReturnMessage",
attrName: "returnMessageOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.SubscribeMarkerEvent$outVars", [{
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
return new OutSystemsMapsModel.ST_f8c2d1b69d03ea90c73e9f07e7d98bf0Structure();
},
complexType: OutSystemsMapsModel.ST_f8c2d1b69d03ea90c73e9f07e7d98bf0Structure
}]);
OutSystemsMapsController.default.clientActionProxies.subscribeMarkerEvent$Action = function (markerIdIn, markerEventTriggeredIdIn, callbackIn) {
markerIdIn = (markerIdIn === undefined) ? "" : markerIdIn;
markerEventTriggeredIdIn = (markerEventTriggeredIdIn === undefined) ? "" : markerEventTriggeredIdIn;
callbackIn = (callbackIn === undefined) ? null : callbackIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.subscribeMarkerEvent$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(markerIdIn, OS.DataTypes.DataTypes.Text), markerEventTriggeredIdIn, OS.DataConversion.JSNodeParamConverter.from(callbackIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: actionResults.errorMessageOut
};
});
};
});

define("OutSystemsMaps.controller$SubscribeMarkerEvent.AddMarkerEventJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.ReturnMessage = OutSystems.Maps.MapAPI.MarkerManager.Events.Subscribe($parameters.MarkerId, $parameters.MarkerEventTriggeredId, $parameters.Callback);
};
});


define("OutSystemsMaps.controller$ToolsEventSubscribe", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ToolsEventSubscribe.ToolsEventRegisterJS"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_ToolsEventSubscribe_ToolsEventRegisterJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.toolsEventSubscribe$Action = function (toolWidgetIdIn, drawingToolsEventIdIn, callbackIn, callContext) {
return OS.Logger.startActiveSpan("ToolsEventSubscribe", function (span) {
if(span) {
span.setAttribute("code.function", "ToolsEventSubscribe");
span.setAttribute("outsystems.function.key", "30fe8982-2bc9-4147-a0d5-050f0cf60540");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ToolsEventSubscribe$vars"))());
vars.value.toolWidgetIdInLocal = toolWidgetIdIn;
vars.value.drawingToolsEventIdInLocal = drawingToolsEventIdIn;
vars.value.callbackInLocal = callbackIn;
OS.Logger.startActiveSpan("ToolsEventRegister", function (span) {
if(span) {
span.setAttribute("code.function", "ToolsEventRegister");
span.setAttribute("outsystems.function.key", "6150a5a6-9581-4a07-9432-1140b22de56f");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_ToolsEventSubscribe_ToolsEventRegisterJS, "ToolsEventRegister", "ToolsEventSubscribe", {
ToolWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.toolWidgetIdInLocal, OS.DataTypes.DataTypes.Text),
Callback: OS.DataConversion.JSNodeParamConverter.to(vars.value.callbackInLocal, OS.DataTypes.DataTypes.Object),
DrawingToolsEventId: OS.DataConversion.JSNodeParamConverter.to(vars.value.drawingToolsEventIdInLocal, OS.DataTypes.DataTypes.Text)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ToolsEventSubscribe$vars", [{
name: "ToolWidgetId",
attrName: "toolWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "DrawingToolsEventId",
attrName: "drawingToolsEventIdInLocal",
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
OutSystemsMapsController.default.clientActionProxies.toolsEventSubscribe$Action = function (toolWidgetIdIn, drawingToolsEventIdIn, callbackIn) {
toolWidgetIdIn = (toolWidgetIdIn === undefined) ? "" : toolWidgetIdIn;
drawingToolsEventIdIn = (drawingToolsEventIdIn === undefined) ? "" : drawingToolsEventIdIn;
callbackIn = (callbackIn === undefined) ? null : callbackIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.toolsEventSubscribe$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(toolWidgetIdIn, OS.DataTypes.DataTypes.Text), drawingToolsEventIdIn, OS.DataConversion.JSNodeParamConverter.from(callbackIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$ToolsEventSubscribe.ToolsEventRegisterJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.Maps.MapAPI.DrawingToolsManager.Events.SubscribeByToolUniqueId($parameters.ToolWidgetId, $parameters.DrawingToolsEventId, $parameters.Callback);
};
});


define("OutSystemsMaps.controller$ToolsEventUnSubscribe", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$ToolsEventUnSubscribe.ToolsEventUnregisterJS"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_ToolsEventUnSubscribe_ToolsEventUnregisterJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.toolsEventUnSubscribe$Action = function (toolWidgetIdIn, drawingToolsEventIdIn, callbackIn, callContext) {
return OS.Logger.startActiveSpan("ToolsEventUnSubscribe", function (span) {
if(span) {
span.setAttribute("code.function", "ToolsEventUnSubscribe");
span.setAttribute("outsystems.function.key", "dfab52dc-d89c-4314-82fe-391f5f1ec108");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

try {callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.ToolsEventUnSubscribe$vars"))());
vars.value.toolWidgetIdInLocal = toolWidgetIdIn;
vars.value.drawingToolsEventIdInLocal = drawingToolsEventIdIn;
vars.value.callbackInLocal = callbackIn;
OS.Logger.startActiveSpan("ToolsEventUnregister", function (span) {
if(span) {
span.setAttribute("code.function", "ToolsEventUnregister");
span.setAttribute("outsystems.function.key", "a348d66b-278c-4dde-9cfe-ac03f6d70d74");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_ToolsEventUnSubscribe_ToolsEventUnregisterJS, "ToolsEventUnregister", "ToolsEventUnSubscribe", {
ToolWidgetId: OS.DataConversion.JSNodeParamConverter.to(vars.value.toolWidgetIdInLocal, OS.DataTypes.DataTypes.Text),
Callback: OS.DataConversion.JSNodeParamConverter.to(vars.value.callbackInLocal, OS.DataTypes.DataTypes.Object),
DrawingToolsEventId: OS.DataConversion.JSNodeParamConverter.to(vars.value.drawingToolsEventIdInLocal, OS.DataTypes.DataTypes.Text)
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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.ToolsEventUnSubscribe$vars", [{
name: "ToolWidgetId",
attrName: "toolWidgetIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "DrawingToolsEventId",
attrName: "drawingToolsEventIdInLocal",
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
OutSystemsMapsController.default.clientActionProxies.toolsEventUnSubscribe$Action = function (toolWidgetIdIn, drawingToolsEventIdIn, callbackIn) {
toolWidgetIdIn = (toolWidgetIdIn === undefined) ? "" : toolWidgetIdIn;
drawingToolsEventIdIn = (drawingToolsEventIdIn === undefined) ? "" : drawingToolsEventIdIn;
callbackIn = (callbackIn === undefined) ? null : callbackIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.toolsEventUnSubscribe$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(toolWidgetIdIn, OS.DataTypes.DataTypes.Text), drawingToolsEventIdIn, OS.DataConversion.JSNodeParamConverter.from(callbackIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("OutSystemsMaps.controller$ToolsEventUnSubscribe.ToolsEventUnregisterJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
OutSystems.Maps.MapAPI.DrawingToolsManager.Events.UnsubscribeByToolId($parameters.ToolWidgetId, $parameters.DrawingToolsEventId, $parameters.Callback);
};
});


define("OutSystemsMaps.controller$UnsubscribeMarkerEvent", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller", "OutSystemsMaps.controller$UnsubscribeMarkerEvent.RemoveMarkerEventJS", "OutSystemsMaps.controller$ServerAction.GetMapErrorByMapErrorCode", "OutSystemsMaps.model$ST_f8c2d1b69d03ea90c73e9f07e7d98bf0Structure", "OutSystemsMaps.model$ST_cdd94bc434e873b4d04598ac1e187543Structure"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController, OutSystemsMaps_controller_UnsubscribeMarkerEvent_RemoveMarkerEventJS) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.unsubscribeMarkerEvent$Action = function (markerIdIn, markerEventTriggeredIdIn, callbackIn, callContext) {
return OS.Logger.startActiveSpan("UnsubscribeMarkerEvent", function (span) {
if(span) {
span.setAttribute("code.function", "UnsubscribeMarkerEvent");
span.setAttribute("outsystems.function.key", "ca5954ed-65ab-471f-9583-f017a38c02aa");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
}

return OS.Flow.tryFinally(function () {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.UnsubscribeMarkerEvent$vars"))());
vars.value.markerIdInLocal = markerIdIn;
vars.value.markerEventTriggeredIdInLocal = markerEventTriggeredIdIn;
vars.value.callbackInLocal = callbackIn;
var getMapErrorByMapErrorCodeVar = new OS.DataTypes.VariableHolder();
var removeMarkerEventJSResult = new OS.DataTypes.VariableHolder();
var jSONDeserializeReturnMessageVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(OutSystemsMapsModel.ST_cdd94bc434e873b4d04598ac1e187543Structure))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsMaps.UnsubscribeMarkerEvent$outVars"))());
return OS.Flow.executeAsyncFlow(function () {
removeMarkerEventJSResult.value = OS.Logger.startActiveSpan("RemoveMarkerEvent", function (span) {
if(span) {
span.setAttribute("code.function", "RemoveMarkerEvent");
span.setAttribute("outsystems.function.key", "7005301e-1447-4f12-bdfa-8ccdab51114b");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsMaps_controller_UnsubscribeMarkerEvent_RemoveMarkerEventJS, "RemoveMarkerEvent", "UnsubscribeMarkerEvent", {
MarkerEventTriggeredId: OS.DataConversion.JSNodeParamConverter.to(vars.value.markerEventTriggeredIdInLocal, OS.DataTypes.DataTypes.Text),
MarkerId: OS.DataConversion.JSNodeParamConverter.to(vars.value.markerIdInLocal, OS.DataTypes.DataTypes.Text),
Callback: OS.DataConversion.JSNodeParamConverter.to(vars.value.callbackInLocal, OS.DataTypes.DataTypes.Object),
ReturnMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsMaps.UnsubscribeMarkerEvent$removeMarkerEventJSResult"))();
jsNodeResult.returnMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ReturnMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// JSON Deserialize: JSONDeserializeReturnMessage
jSONDeserializeReturnMessageVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(removeMarkerEventJSResult.value.returnMessageOut, OutSystemsMapsModel.ST_cdd94bc434e873b4d04598ac1e187543Structure, false);
// Set Success
// Success = JSONDeserializeReturnMessage.Data.IsSuccess
outVars.value.successOut = jSONDeserializeReturnMessageVar.value.dataOut.isSuccessAttr;
// Is Success?
return OS.Flow.executeSequence(function () {
if((!(outVars.value.successOut))) {
// Execute Action: GetMapErrorByMapErrorCode
return controller.getMapErrorByMapErrorCode$ServerAction(OutSystemsMapsModel.staticEntities.mapErrors.aPI_FailedUnsubscribeMarkerEvent, callContext).then(function (value) {
getMapErrorByMapErrorCodeVar.value = value;
}).then(function () {
// Set ErrorMessage
// ErrorMessage.Code = JSONDeserializeReturnMessage.Data.Code
outVars.value.errorMessageOut.codeAttr = jSONDeserializeReturnMessageVar.value.dataOut.codeAttr;
// ErrorMessage.Message = GetMapErrorByMapErrorCode.ErrorMessage + JSONDeserializeReturnMessage.Data.Message
outVars.value.errorMessageOut.messageAttr = (getMapErrorByMapErrorCodeVar.value.errorMessageOut + jSONDeserializeReturnMessageVar.value.dataOut.messageAttr);
});
}

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
var controller = OutSystemsMapsController.default;
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.UnsubscribeMarkerEvent$vars", [{
name: "MarkerId",
attrName: "markerIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "MarkerEventTriggeredId",
attrName: "markerEventTriggeredIdInLocal",
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
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.UnsubscribeMarkerEvent$removeMarkerEventJSResult", [{
name: "ReturnMessage",
attrName: "returnMessageOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps.UnsubscribeMarkerEvent$outVars", [{
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
return new OutSystemsMapsModel.ST_f8c2d1b69d03ea90c73e9f07e7d98bf0Structure();
},
complexType: OutSystemsMapsModel.ST_f8c2d1b69d03ea90c73e9f07e7d98bf0Structure
}]);
OutSystemsMapsController.default.clientActionProxies.unsubscribeMarkerEvent$Action = function (markerIdIn, markerEventTriggeredIdIn, callbackIn) {
markerIdIn = (markerIdIn === undefined) ? "" : markerIdIn;
markerEventTriggeredIdIn = (markerEventTriggeredIdIn === undefined) ? "" : markerEventTriggeredIdIn;
callbackIn = (callbackIn === undefined) ? null : callbackIn;
return controller.executeActionInsideJSNode(OutSystemsMapsController.default.unsubscribeMarkerEvent$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(markerIdIn, OS.DataTypes.DataTypes.Text), markerEventTriggeredIdIn, OS.DataConversion.JSNodeParamConverter.from(callbackIn, OS.DataTypes.DataTypes.Object)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: actionResults.errorMessageOut
};
});
};
});

define("OutSystemsMaps.controller$UnsubscribeMarkerEvent.RemoveMarkerEventJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.ReturnMessage = OutSystems.Maps.MapAPI.MarkerManager.Events.UnsubscribeByMarkerId($parameters.MarkerId, $parameters.MarkerEventTriggeredId, $parameters.Callback);
};
});


define("OutSystemsMaps.controller$ServerAction.GetMapErrorByMapErrorCode", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model", "OutSystemsMaps.controller"], function (exports, OSRuntimeCore, OutSystemsMapsModel, OutSystemsMapsController) {
var OS = OSRuntimeCore;
OutSystemsMapsController.default.getMapErrorByMapErrorCode$ServerAction = function (mapErrorCodeIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("GetMapErrorByMapErrorCode", function (span) {
if(span) {
span.setAttribute("code.function", "GetMapErrorByMapErrorCode");
span.setAttribute("outsystems.function.key", "090ed996-d282-4f1d-9770-115596ee342d");
span.setAttribute("outsystems.function.owner.name", "OutSystemsMaps");
span.setAttribute("outsystems.function.owner.key", "95bb31d1-f079-4fd6-ab2e-5c8326855aaa");
span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
}

return OS.Flow.tryFinally(function () {
var inputs = {
MapErrorCode: OS.DataConversion.ServerDataConverter.to(mapErrorCodeIn, OS.DataTypes.DataTypes.Text)
};
return controller.callServerAction("GetMapErrorByMapErrorCode", "screenservices/OutSystemsMaps/ActionGetMapErrorByMapErrorCode", "eQ8KiQyKSulJZzmU2VrV6A", inputs, controller.callContext(callContext), undefined, undefined, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("OutSystemsMaps$ActionGetMapErrorByMapErrorCode"))();
executeServerActionResult.errorMessageOut = OS.DataConversion.ServerDataConverter.from(outputs.ErrorMessage, OS.DataTypes.DataTypes.Text);
return executeServerActionResult;
});
}, function () {
if(span) {
span.end();
}

});
}, 0);
};
OutSystemsMapsController.default.constructor.registerVariableGroupType("OutSystemsMaps$ActionGetMapErrorByMapErrorCode", [{
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
});

define("OutSystemsMaps.controller", ["exports", "@outsystems/runtime-core-js", "OutSystemsMaps.model"], function (exports, OSRuntimeCore, OutSystemsMapsModel) {
var OS = OSRuntimeCore;
var OutSystemsMapsController = exports;
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
return OutSystemsMapsController.default.defaultTimeout;
}

}

OutSystemsMapsController.default = new Controller();
});

