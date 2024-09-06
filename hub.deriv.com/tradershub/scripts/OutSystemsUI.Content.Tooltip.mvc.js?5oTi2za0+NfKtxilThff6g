define("OutSystemsUI.Content.Tooltip.mvc$model", ["@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.model$ST_9cac82fc47e32e1503b2dbc00140aa98Structure", "OutSystemsUI.controller$TooltipRegisterCallback", "OutSystemsUI.controller$TooltipInitialize", "OutSystemsUI.controller$LogEvent", "OutSystemsUI.controller$TooltipChangeTextProperty", "OutSystemsUI.controller$TooltipChangeBooleanProperty", "OutSystemsUI.controller$IsPhone", "OutSystemsUI.controller$TooltipDestroy", "OutSystemsUI.controller$TooltipCreate", "OutSystemsUI.controller$GenerateUniqueId"], function (OSRuntimeCore, OutSystemsUIModel, OutSystemsUIController) {
var OS = OSRuntimeCore;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Internal_Configs", "internal_ConfigsVar", "Internal_Configs", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_9cac82fc47e32e1503b2dbc00140aa98Structure());
}, false, OutSystemsUIModel.ST_9cac82fc47e32e1503b2dbc00140aa98Structure), 
this.attr("Position", "positionIn", "Position", true, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUIModel.staticEntities.position.right;
}, false), 
this.attr("_positionInDataFetchStatus", "_positionInDataFetchStatus", "_positionInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("StartsOpen", "startsOpenIn", "StartsOpen", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_startsOpenInDataFetchStatus", "_startsOpenInDataFetchStatus", "_startsOpenInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Trigger", "triggerIn", "Trigger", true, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUIModel.staticEntities.trigger.onHover;
}, false), 
this.attr("_triggerInDataFetchStatus", "_triggerInDataFetchStatus", "_triggerInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false)
].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
}

}

var VariablesRecord = VariablesRecordInner;
VariablesRecord.init();
}
class WidgetsRecord extends 
OS.Model.BaseWidgetRecordMap {
static getWidgetsType() {
return {};
}

}

class Model extends 
OS.Model.BaseViewModel {
static getVariablesRecordConstructor() {
return VariablesRecord;
}

static getWidgetsRecordConstructor() {
return WidgetsRecord;
}

static get hasValidationWidgets() {return false;
}
setInputs(inputs) {
if("Position" in inputs) {
this.variables.positionIn = inputs.Position;
if("_positionInDataFetchStatus" in inputs) {
this.variables._positionInDataFetchStatus = inputs._positionInDataFetchStatus;
}

}

if("StartsOpen" in inputs) {
this.variables.startsOpenIn = inputs.StartsOpen;
if("_startsOpenInDataFetchStatus" in inputs) {
this.variables._startsOpenInDataFetchStatus = inputs._startsOpenInDataFetchStatus;
}

}

if("Trigger" in inputs) {
this.variables.triggerIn = inputs.Trigger;
if("_triggerInDataFetchStatus" in inputs) {
this.variables._triggerInDataFetchStatus = inputs._triggerInDataFetchStatus;
}

}

if("ExtendedClass" in inputs) {
this.variables.extendedClassIn = inputs.ExtendedClass;
if("_extendedClassInDataFetchStatus" in inputs) {
this.variables._extendedClassInDataFetchStatus = inputs._extendedClassInDataFetchStatus;
}

}

}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("OutSystemsUI.Content.Tooltip.mvc$view", ["@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "@outsystems/runtime-view-js", "OutSystemsUI.Content.Tooltip.mvc$model", "OutSystemsUI.Content.Tooltip.mvc$controller", "@outsystems/runtime-widgets-js", "OutSystemsUI.model$ST_9cac82fc47e32e1503b2dbc00140aa98Structure", "OutSystemsUI.controller$TooltipRegisterCallback", "OutSystemsUI.controller$TooltipInitialize", "OutSystemsUI.controller$LogEvent", "OutSystemsUI.controller$TooltipChangeTextProperty", "OutSystemsUI.controller$TooltipChangeBooleanProperty", "OutSystemsUI.controller$IsPhone", "OutSystemsUI.controller$TooltipDestroy", "OutSystemsUI.controller$TooltipCreate", "OutSystemsUI.controller$GenerateUniqueId"], function (OSRuntimeCore, OutSystemsUIModel, OutSystemsUIController, React, OSView, OutSystemsUI_Content_Tooltip_mvc_model, OutSystemsUI_Content_Tooltip_mvc_controller, OSWidgets) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() { return "Content.Tooltip"; }

        static getAttributes() { return {
codeFunction: "Tooltip",
functionKey: "283641ee-368d-43a2-a20e-4fc47dd869fb",
functionOwnerName: "OutSystemsUI",
functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css"];
        }

        static getJsDependencies() {
            return ["scripts/OutSystemsUI.OutSystemsUI.js", "scripts/OutSystemsUI.FloatingUICore.js", "scripts/OutSystemsUI.FloatingUIDom.js"];
        }

        static getBlocks() {
            return [];
        }

        get modelFactory() {
            return OutSystemsUI_Content_Tooltip_mvc_model;
        }

        get controllerFactory() {
            return OutSystemsUI_Content_Tooltip_mvc_controller;
        }

        get title() {
            

            return "";
        }

        internalRender() {
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            var validationService = controller.validationService;
            var widgetsRecordProvider = this.widgetsRecordProvider;
            var callContext = controller.callContext();
            var $if = View.ifWidget;
            var $text = View.textWidget;
            var asPrimitiveValue = View.asPrimitiveValue;
            var getTranslation = View.getTranslation;
            var _this = this;

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
name: model.variables.internal_ConfigsVar.uniqueIdAttr
},
style: "osui-tooltip",
visible: true,
_idProps: {
service: idService,
name: "TooltipWrapper"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.content,
style: "osui-tooltip__content",
_idProps: {
service: idService,
name: "Content"
},
_widgetRecordProvider: widgetsRecordProvider
}), $if(false, false, this, function () {
return [];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-uniqueid": model.variables.internal_ConfigsVar.uniqueIdAttr
},
style: "osui-tooltip__balloon-wrapper osui-balloon",
visible: true,
_idProps: {
service: idService,
name: "TooltipBallonWrapper"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.tooltip,
gridProperties: {
classes: "OSInline"
},
style: "osui-tooltip__balloon-wrapper__balloon",
_idProps: {
service: idService,
name: "Tooltip"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "osui-tooltip__balloon-arrow",
visible: true,
_idProps: {
service: idService,
name: "ArrowElement"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})));
        }
    }

    return View;
});
define("OutSystemsUI.Content.Tooltip.mvc$controller", ["@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.languageResources", "OutSystemsUI.Content.Tooltip.mvc$translationsResources", "OutSystemsUI.Content.Tooltip.mvc$controller.RegisterCallbacks.GetCallbackHandlersJS", "OutSystemsUI.model$ST_9cac82fc47e32e1503b2dbc00140aa98Structure", "OutSystemsUI.controller$TooltipRegisterCallback", "OutSystemsUI.controller$TooltipInitialize", "OutSystemsUI.controller$LogEvent", "OutSystemsUI.controller$TooltipChangeTextProperty", "OutSystemsUI.controller$TooltipChangeBooleanProperty", "OutSystemsUI.controller$IsPhone", "OutSystemsUI.controller$TooltipDestroy", "OutSystemsUI.controller$TooltipCreate", "OutSystemsUI.controller$GenerateUniqueId"], function (OSRuntimeCore, OutSystemsUIModel, OutSystemsUIController, OutSystemsUILanguageResources, OutSystemsUI_Content_Tooltip_mvc_TranslationsResources, OutSystemsUI_Content_Tooltip_mvc_controller_RegisterCallbacks_GetCallbackHandlersJS) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, OutSystemsUI_Content_Tooltip_mvc_TranslationsResources);
var controller = this.controller;
this.clientActionProxies = {
initializedHandler$Action: function (tooltipIdIn) {
tooltipIdIn = (tooltipIdIn === undefined) ? "" : tooltipIdIn;
return controller.executeActionInsideJSNode(controller._initializedHandler$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(tooltipIdIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "InitializedHandler");
},
onToggleHandler$Action: function (tooltipIdIn, isOpenedIn) {
tooltipIdIn = (tooltipIdIn === undefined) ? "" : tooltipIdIn;
isOpenedIn = (isOpenedIn === undefined) ? false : isOpenedIn;
return controller.executeActionInsideJSNode(controller._onToggleHandler$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(tooltipIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(isOpenedIn, OS.DataTypes.DataTypes.Boolean)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "OnToggleHandler");
}
};
this.dataFetchDependenciesOriginal = {};
this.dataFetchDependentsGraph = {};
this.shouldSendClientVarsToDataSources = false;
}

// Server Actions - Methods

// Aggregates and Data Actions

get dataFetchActionNames() {if(!(this.hasOwnProperty("_dataFetchActionNames"))) {
this._dataFetchActionNames = [];
}

return this._dataFetchActionNames;
}set dataFetchActionNames(value) {this._dataFetchActionNames = value;
}

// Client Actions - Methods
get _registerCallbacks$Action() {if(!(this.hasOwnProperty("__registerCallbacks$Action"))) {
this.__registerCallbacks$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("RegisterCallbacks", function (span) {
if(span) {
span.setAttribute("code.function", "RegisterCallbacks");
span.setAttribute("outsystems.function.key", "1868db6f-bce7-41b4-baaf-661dcfddbf3b");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("RegisterCallbacks");
callContext = controller.callContext(callContext);
var getCallbackHandlersJSResult = new OS.DataTypes.VariableHolder();
getCallbackHandlersJSResult.value = OS.Logger.startActiveSpan("GetCallbackHandlers", function (span) {
if(span) {
span.setAttribute("code.function", "GetCallbackHandlers");
span.setAttribute("outsystems.function.key", "64f94e43-11eb-4a7a-9b7b-b8ce6b9709f3");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsUI_Content_Tooltip_mvc_controller_RegisterCallbacks_GetCallbackHandlersJS, "GetCallbackHandlers", "RegisterCallbacks", {
OnToggle: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object),
Initialized: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI.Content.Tooltip.RegisterCallbacks$getCallbackHandlersJSResult"))();
jsNodeResult.onToggleOut = OS.DataConversion.JSNodeParamConverter.from($parameters.OnToggle, OS.DataTypes.DataTypes.Object);
jsNodeResult.initializedOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Initialized, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
InitializedHandler: controller.clientActionProxies.initializedHandler$Action,
OnToggleHandler: controller.clientActionProxies.onToggleHandler$Action
}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// Execute Action: RegisterOnInitialize
OutSystemsUIController.default.tooltipRegisterCallback$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, "Initialized", getCallbackHandlersJSResult.value.initializedOut, callContext);
// Execute Action: RegisterOnToggle
OutSystemsUIController.default.tooltipRegisterCallback$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, "OnToggle", getCallbackHandlersJSResult.value.onToggleOut, callContext);
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__registerCallbacks$Action;
}set _registerCallbacks$Action(value) {this.__registerCallbacks$Action = value;
}

get _initializedHandler$Action() {if(!(this.hasOwnProperty("__initializedHandler$Action"))) {
this.__initializedHandler$Action = function (tooltipIdIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("InitializedHandler", function (span) {
if(span) {
span.setAttribute("code.function", "InitializedHandler");
span.setAttribute("outsystems.function.key", "3499884e-ed06-42c1-a98d-3539c099867b");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("InitializedHandler");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.Content.Tooltip.InitializedHandler$vars"))());
vars.value.tooltipIdInLocal = tooltipIdIn;
return OS.Flow.executeAsyncFlow(function () {
// Trigger Event: Initialized
return controller.initialized$Action(vars.value.tooltipIdInLocal, callContext);
});
}, function () {
if(span) {
span.end();
}

});
}, 1);
};
}

return this.__initializedHandler$Action;
}set _initializedHandler$Action(value) {this.__initializedHandler$Action = value;
}

get _onReady$Action() {if(!(this.hasOwnProperty("__onReady$Action"))) {
this.__onReady$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnReady", function (span) {
if(span) {
span.setAttribute("code.function", "OnReady");
span.setAttribute("outsystems.function.key", "441e8fed-1d47-4502-8103-23eb63c0c441");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
// Execute Action: TooltipInitialize
OutSystemsUIController.default.tooltipInitialize$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, callContext);
// Execute Action: LogEnd
OutSystemsUIController.default.logEvent$Action(OutSystemsUIModel.staticEntities.logType.general, "Tooltip created", callContext);
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__onReady$Action;
}set _onReady$Action(value) {this.__onReady$Action = value;
}

get _onParametersChanged$Action() {if(!(this.hasOwnProperty("__onParametersChanged$Action"))) {
this.__onParametersChanged$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnParametersChanged", function (span) {
if(span) {
span.setAttribute("code.function", "OnParametersChanged");
span.setAttribute("outsystems.function.key", "51d2be48-0914-4188-abbe-aab087b2c58b");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnParametersChanged");
callContext = controller.callContext(callContext);
// Position?
if((((model.variables.positionIn) !== (model.variables.internal_ConfigsVar.positionAttr)))) {
// Set Position
// Internal_Configs.Position = Position
model.variables.internal_ConfigsVar.positionAttr = model.variables.positionIn;
// Execute Action: Update_Position
OutSystemsUIController.default.tooltipChangeTextProperty$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, "Position", model.variables.internal_ConfigsVar.positionAttr, callContext);
}

// StartVisible?
if((((model.variables.startsOpenIn) !== (model.variables.internal_ConfigsVar.startVisibleAttr)))) {
// Set StartVisible
// Internal_Configs.StartVisible = StartsOpen
model.variables.internal_ConfigsVar.startVisibleAttr = model.variables.startsOpenIn;
// Execute Action: Update_StartVisible
OutSystemsUIController.default.tooltipChangeBooleanProperty$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, "StartVisible", model.variables.internal_ConfigsVar.startVisibleAttr, callContext);
}

// IsHover?
if((((((model.variables.triggerIn === OutSystemsUIModel.staticEntities.trigger.onHover) || (model.variables.triggerIn === OS.BuiltinFunctions.nullTextIdentifier()))) !== (model.variables.internal_ConfigsVar.isHoverAttr)))) {
// Set IsHover
// Internal_Configs.IsHover = If
model.variables.internal_ConfigsVar.isHoverAttr = ((OutSystemsUIController.default.isPhone$Action(callContext).isPhoneOut) ? (false) : (((model.variables.triggerIn === OutSystemsUIModel.staticEntities.trigger.onHover) || (model.variables.triggerIn === OS.BuiltinFunctions.nullTextIdentifier()))));
// Execute Action: Update_IsHover
OutSystemsUIController.default.tooltipChangeBooleanProperty$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, "IsHover", model.variables.internal_ConfigsVar.isHoverAttr, callContext);
}

// ExtendedClass?
if((((model.variables.extendedClassIn) !== (model.variables.internal_ConfigsVar.extendedClassAttr)))) {
// Set ExtendedClass
// Internal_Configs.ExtendedClass = ExtendedClass
model.variables.internal_ConfigsVar.extendedClassAttr = model.variables.extendedClassIn;
// Execute Action: Update_ExtendedClass
OutSystemsUIController.default.tooltipChangeTextProperty$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, "ExtendedClass", model.variables.internal_ConfigsVar.extendedClassAttr, callContext);
}

} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__onParametersChanged$Action;
}set _onParametersChanged$Action(value) {this.__onParametersChanged$Action = value;
}

get _onToggleHandler$Action() {if(!(this.hasOwnProperty("__onToggleHandler$Action"))) {
this.__onToggleHandler$Action = function (tooltipIdIn, isOpenedIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnToggleHandler", function (span) {
if(span) {
span.setAttribute("code.function", "OnToggleHandler");
span.setAttribute("outsystems.function.key", "c523e5c1-f3f6-4989-9eb6-767bf1b8bf99");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("OnToggleHandler");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.Content.Tooltip.OnToggleHandler$vars"))());
vars.value.tooltipIdInLocal = tooltipIdIn;
vars.value.isOpenedInLocal = isOpenedIn;
return OS.Flow.executeAsyncFlow(function () {
// Trigger Event: OnToggle
return controller.onToggle$Action(vars.value.tooltipIdInLocal, vars.value.isOpenedInLocal, callContext);
});
}, function () {
if(span) {
span.end();
}

});
}, 1);
};
}

return this.__onToggleHandler$Action;
}set _onToggleHandler$Action(value) {this.__onToggleHandler$Action = value;
}

get _onDestroy$Action() {if(!(this.hasOwnProperty("__onDestroy$Action"))) {
this.__onDestroy$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnDestroy", function (span) {
if(span) {
span.setAttribute("code.function", "OnDestroy");
span.setAttribute("outsystems.function.key", "d90e4860-cd4d-4de7-b1c6-f643b72a147f");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnDestroy");
callContext = controller.callContext(callContext);
// Execute Action: TooltipDestroy
OutSystemsUIController.default.tooltipDestroy$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, callContext);
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__onDestroy$Action;
}set _onDestroy$Action(value) {this.__onDestroy$Action = value;
}

get _onInitialize$Action() {if(!(this.hasOwnProperty("__onInitialize$Action"))) {
this.__onInitialize$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnInitialize", function (span) {
if(span) {
span.setAttribute("code.function", "OnInitialize");
span.setAttribute("outsystems.function.key", "ec8c6a72-06d7-46e2-bc50-47c30b54042b");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
var generateUniqueIdVar = new OS.DataTypes.VariableHolder();
// Execute Action: LogStart
OutSystemsUIController.default.logEvent$Action(OutSystemsUIModel.staticEntities.logType.general, "Going to create Tooltip", callContext);
// Execute Action: GenerateUniqueId
generateUniqueIdVar.value = OutSystemsUIController.default.generateUniqueId$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, callContext);

// Set Internal Configs
// Internal_Configs.UniqueId = GenerateUniqueId.Unique_ID
model.variables.internal_ConfigsVar.uniqueIdAttr = generateUniqueIdVar.value.unique_IDOut;
// Internal_Configs.Position = Position
model.variables.internal_ConfigsVar.positionAttr = model.variables.positionIn;
// Internal_Configs.StartVisible = StartsOpen
model.variables.internal_ConfigsVar.startVisibleAttr = model.variables.startsOpenIn;
// Internal_Configs.IsHover = If
model.variables.internal_ConfigsVar.isHoverAttr = ((OutSystemsUIController.default.isPhone$Action(callContext).isPhoneOut) ? (false) : (((model.variables.triggerIn === OutSystemsUIModel.staticEntities.trigger.onHover) || (model.variables.triggerIn === OS.BuiltinFunctions.nullTextIdentifier()))));
// Internal_Configs.ExtendedClass = ExtendedClass
model.variables.internal_ConfigsVar.extendedClassAttr = model.variables.extendedClassIn;
// Execute Action: TooltipCreate
OutSystemsUIController.default.tooltipCreate$Action(model.variables.internal_ConfigsVar, callContext);
// Execute Action: RegisterCallbacks
controller._registerCallbacks$Action(callContext);
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__onInitialize$Action;
}set _onInitialize$Action(value) {this.__onInitialize$Action = value;
}


registerCallbacks$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("RegisterCallbacks__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "RegisterCallbacks");
span.setAttribute("outsystems.function.key", "1868db6f-bce7-41b4-baaf-661dcfddbf3b");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._registerCallbacks$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

initializedHandler$Action(tooltipIdIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("InitializedHandler__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "InitializedHandler");
span.setAttribute("outsystems.function.key", "3499884e-ed06-42c1-a98d-3539c099867b");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._initializedHandler$Action, callContext, tooltipIdIn);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

onReady$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnReady__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnReady");
span.setAttribute("outsystems.function.key", "441e8fed-1d47-4502-8103-23eb63c0c441");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._onReady$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

onParametersChanged$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnParametersChanged__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnParametersChanged");
span.setAttribute("outsystems.function.key", "51d2be48-0914-4188-abbe-aab087b2c58b");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

onToggleHandler$Action(tooltipIdIn, isOpenedIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnToggleHandler__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnToggleHandler");
span.setAttribute("outsystems.function.key", "c523e5c1-f3f6-4989-9eb6-767bf1b8bf99");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._onToggleHandler$Action, callContext, tooltipIdIn, isOpenedIn);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

onDestroy$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnDestroy__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnDestroy");
span.setAttribute("outsystems.function.key", "d90e4860-cd4d-4de7-b1c6-f643b72a147f");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

onInitialize$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnInitialize__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnInitialize");
span.setAttribute("outsystems.function.key", "ec8c6a72-06d7-46e2-bc50-47c30b54042b");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);
} finally {
if(span) {
span.end();
}

}

}, 0);

}

get onToggle$Action() {if(!(this.hasOwnProperty("_onToggle$Action"))) {
this._onToggle$Action = function () {
return Promise.resolve();
};
}

return this._onToggle$Action;
}set onToggle$Action(value) {this._onToggle$Action = value;
}

get initialized$Action() {if(!(this.hasOwnProperty("_initialized$Action"))) {
this._initialized$Action = function () {
return Promise.resolve();
};
}

return this._initialized$Action;
}set initialized$Action(value) {this._initialized$Action = value;
}


// Event Handler Actions
get onInitializeEventHandler() {if(!(this.hasOwnProperty("_onInitializeEventHandler"))) {
this._onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return controller.onInitialize$Action(callContext);

};
}

return this._onInitializeEventHandler;
}set onInitializeEventHandler(value) {this._onInitializeEventHandler = value;
}

get onReadyEventHandler() {if(!(this.hasOwnProperty("_onReadyEventHandler"))) {
this._onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return controller.onReady$Action(callContext);

};
}

return this._onReadyEventHandler;
}set onReadyEventHandler(value) {this._onReadyEventHandler = value;
}

get onRenderEventHandler() {if(!(this.hasOwnProperty("_onRenderEventHandler"))) {
this._onRenderEventHandler = null;
}

return this._onRenderEventHandler;
}set onRenderEventHandler(value) {this._onRenderEventHandler = value;
}

get onDestroyEventHandler() {if(!(this.hasOwnProperty("_onDestroyEventHandler"))) {
this._onDestroyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return controller.onDestroy$Action(callContext);

};
}

return this._onDestroyEventHandler;
}set onDestroyEventHandler(value) {this._onDestroyEventHandler = value;
}

get onParametersChangedEventHandler() {if(!(this.hasOwnProperty("_onParametersChangedEventHandler"))) {
this._onParametersChangedEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return controller.onParametersChanged$Action(callContext);

};
}

return this._onParametersChangedEventHandler;
}set onParametersChangedEventHandler(value) {this._onParametersChangedEventHandler = value;
}

get handleError() {if(!(this.hasOwnProperty("_handleError"))) {
this._handleError = function (ex) {
return controller.handleError(ex);
};
}

return this._handleError;
}set handleError(value) {this._handleError = value;
}

static checkPermissions() {
}

getDefaultTimeout() {
return OutSystemsUIController.default.defaultTimeout;
}

}

var Controller = ControllerInner;
// Server Actions - Variables

// Client Actions - Variables
Controller.registerVariableGroupType("OutSystemsUI.Content.Tooltip.RegisterCallbacks$getCallbackHandlersJSResult", [{
name: "OnToggle",
attrName: "onToggleOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}, {
name: "Initialized",
attrName: "initializedOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Controller.registerVariableGroupType("OutSystemsUI.Content.Tooltip.InitializedHandler$vars", [{
name: "TooltipId",
attrName: "tooltipIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("OutSystemsUI.Content.Tooltip.OnToggleHandler$vars", [{
name: "TooltipId",
attrName: "tooltipIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "IsOpened",
attrName: "isOpenedInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);

}
return new OS.Controller.ControllerFactory(Controller, OutSystemsUILanguageResources);
});

define("OutSystemsUI.Content.Tooltip.mvc$controller.RegisterCallbacks.GetCallbackHandlersJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Initialized = $actions.InitializedHandler;
$parameters.OnToggle = $actions.OnToggleHandler;
};
});


define("OutSystemsUI.Content.Tooltip.mvc$translationsResources", ["exports"], function (exports) {
return {};
});

