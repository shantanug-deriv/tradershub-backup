define("OutSystemsUI.Numbers.ProgressBar.mvc$model", ["@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.model$ST_b29bdecfa7956bb3d5bee97678e39fb0Structure", "OutSystemsUI.model$ST_8391f9d0c6b78f74493c47987669deecStructure", "OutSystemsUI.controller$LogEvent", "OutSystemsUI.controller$GenerateUniqueId", "OutSystemsUI.controller$ProgressBarCreate", "OutSystemsUI.controller$ProgressChangeIntegerProperty", "OutSystemsUI.controller$ProgressChangeTextProperty", "OutSystemsUI.controller$ProgressDestroy", "OutSystemsUI.controller$ProgressInitialize", "OutSystemsUI.controller$ProgressRegisterCallback"], function (OSRuntimeCore, OutSystemsUIModel, OutSystemsUIController) {
var OS = OSRuntimeCore;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Internal_Configs", "internal_ConfigsVar", "Internal_Configs", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_b29bdecfa7956bb3d5bee97678e39fb0Structure());
}, false, OutSystemsUIModel.ST_b29bdecfa7956bb3d5bee97678e39fb0Structure), 
this.attr("Progress", "progressIn", "Progress", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("_progressInDataFetchStatus", "_progressInDataFetchStatus", "_progressInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ProgressColor", "progressColorIn", "ProgressColor", true, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUIModel.staticEntities.color.primary;
}, false), 
this.attr("_progressColorInDataFetchStatus", "_progressColorInDataFetchStatus", "_progressColorInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("TrailColor", "trailColorIn", "TrailColor", true, false, OS.DataTypes.DataTypes.Text, function () {
return OutSystemsUIModel.staticEntities.color.neutral4;
}, false), 
this.attr("_trailColorInDataFetchStatus", "_trailColorInDataFetchStatus", "_trailColorInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Thickness", "thicknessIn", "Thickness", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 12;
}, false), 
this.attr("_thicknessInDataFetchStatus", "_thicknessInDataFetchStatus", "_thicknessInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("OptionalConfigs", "optionalConfigsIn", "OptionalConfigs", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_8391f9d0c6b78f74493c47987669deecStructure());
}, false, OutSystemsUIModel.ST_8391f9d0c6b78f74493c47987669deecStructure), 
this.attr("_optionalConfigsInDataFetchStatus", "_optionalConfigsInDataFetchStatus", "_optionalConfigsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("Progress" in inputs) {
this.variables.progressIn = inputs.Progress;
if("_progressInDataFetchStatus" in inputs) {
this.variables._progressInDataFetchStatus = inputs._progressInDataFetchStatus;
}

}

if("ProgressColor" in inputs) {
this.variables.progressColorIn = inputs.ProgressColor;
if("_progressColorInDataFetchStatus" in inputs) {
this.variables._progressColorInDataFetchStatus = inputs._progressColorInDataFetchStatus;
}

}

if("TrailColor" in inputs) {
this.variables.trailColorIn = inputs.TrailColor;
if("_trailColorInDataFetchStatus" in inputs) {
this.variables._trailColorInDataFetchStatus = inputs._trailColorInDataFetchStatus;
}

}

if("Thickness" in inputs) {
this.variables.thicknessIn = inputs.Thickness;
if("_thicknessInDataFetchStatus" in inputs) {
this.variables._thicknessInDataFetchStatus = inputs._thicknessInDataFetchStatus;
}

}

if("OptionalConfigs" in inputs) {
this.variables.optionalConfigsIn = inputs.OptionalConfigs;
if("_optionalConfigsInDataFetchStatus" in inputs) {
this.variables._optionalConfigsInDataFetchStatus = inputs._optionalConfigsInDataFetchStatus;
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

define("OutSystemsUI.Numbers.ProgressBar.mvc$view", ["@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "@outsystems/runtime-view-js", "OutSystemsUI.Numbers.ProgressBar.mvc$model", "OutSystemsUI.Numbers.ProgressBar.mvc$controller", "@outsystems/runtime-widgets-js", "OutSystemsUI.model$ST_b29bdecfa7956bb3d5bee97678e39fb0Structure", "OutSystemsUI.model$ST_8391f9d0c6b78f74493c47987669deecStructure", "OutSystemsUI.controller$LogEvent", "OutSystemsUI.controller$GenerateUniqueId", "OutSystemsUI.controller$ProgressBarCreate", "OutSystemsUI.controller$ProgressChangeIntegerProperty", "OutSystemsUI.controller$ProgressChangeTextProperty", "OutSystemsUI.controller$ProgressDestroy", "OutSystemsUI.controller$ProgressInitialize", "OutSystemsUI.controller$ProgressRegisterCallback"], function (OSRuntimeCore, OutSystemsUIModel, OutSystemsUIController, React, OSView, OutSystemsUI_Numbers_ProgressBar_mvc_model, OutSystemsUI_Numbers_ProgressBar_mvc_controller, OSWidgets) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() { return "Numbers.ProgressBar"; }

        static getAttributes() { return {
codeFunction: "ProgressBar",
functionKey: "aa878163-7d92-4bc9-acce-392b67407218",
functionOwnerName: "OutSystemsUI",
functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css"];
        }

        static getJsDependencies() {
            return ["scripts/OutSystemsUI.OutSystemsUI.js"];
        }

        static getBlocks() {
            return [];
        }

        get modelFactory() {
            return OutSystemsUI_Numbers_ProgressBar_mvc_model;
        }

        get controllerFactory() {
            return OutSystemsUI_Numbers_ProgressBar_mvc_controller;
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
style: "osui-progress-bar",
visible: true,
_idProps: {
service: idService,
name: "ProgressBar"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "osui-progress-bar__container",
visible: true,
_idProps: {
service: idService,
name: "ProgressContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "osui-progress-bar__value",
visible: true,
_idProps: {
service: idService,
name: "ProgressValue"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.content,
style: "osui-progress-bar__content ph",
_idProps: {
service: idService,
name: "Content"
},
_widgetRecordProvider: widgetsRecordProvider
}))));
        }
    }

    return View;
});
define("OutSystemsUI.Numbers.ProgressBar.mvc$controller", ["@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.languageResources", "OutSystemsUI.Numbers.ProgressBar.mvc$translationsResources", "OutSystemsUI.Numbers.ProgressBar.mvc$controller.RegisterCallbacks.GetCallbackHandlersJS", "OutSystemsUI.model$ST_b29bdecfa7956bb3d5bee97678e39fb0Structure", "OutSystemsUI.model$ST_8391f9d0c6b78f74493c47987669deecStructure", "OutSystemsUI.controller$LogEvent", "OutSystemsUI.controller$GenerateUniqueId", "OutSystemsUI.controller$ProgressBarCreate", "OutSystemsUI.controller$ProgressChangeIntegerProperty", "OutSystemsUI.controller$ProgressChangeTextProperty", "OutSystemsUI.controller$ProgressDestroy", "OutSystemsUI.controller$ProgressInitialize", "OutSystemsUI.controller$ProgressRegisterCallback"], function (OSRuntimeCore, OutSystemsUIModel, OutSystemsUIController, OutSystemsUILanguageResources, OutSystemsUI_Numbers_ProgressBar_mvc_TranslationsResources, OutSystemsUI_Numbers_ProgressBar_mvc_controller_RegisterCallbacks_GetCallbackHandlersJS) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, OutSystemsUI_Numbers_ProgressBar_mvc_TranslationsResources);
var controller = this.controller;
this.clientActionProxies = {
initializedHandler$Action: function (progressBarIdIn) {
progressBarIdIn = (progressBarIdIn === undefined) ? "" : progressBarIdIn;
return controller.executeActionInsideJSNode(controller._initializedHandler$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(progressBarIdIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "InitializedHandler");
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
get _onInitialize$Action() {if(!(this.hasOwnProperty("__onInitialize$Action"))) {
this.__onInitialize$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnInitialize", function (span) {
if(span) {
span.setAttribute("code.function", "OnInitialize");
span.setAttribute("outsystems.function.key", "1de7cb36-6298-4f20-a2be-639e58d086c9");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
var generateUniqueIdVar = new OS.DataTypes.VariableHolder();
// Execute Action: LogStart
OutSystemsUIController.default.logEvent$Action(OutSystemsUIModel.staticEntities.logType.general, "Going to create ProgressBar", callContext);
// Execute Action: GenerateUniqueId
generateUniqueIdVar.value = OutSystemsUIController.default.generateUniqueId$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, callContext);

// Set Internal Configs
// Internal_Configs.UniqueId = GenerateUniqueId.Unique_ID
model.variables.internal_ConfigsVar.uniqueIdAttr = generateUniqueIdVar.value.unique_IDOut;
// Internal_Configs.Progress = Progress
model.variables.internal_ConfigsVar.progressAttr = model.variables.progressIn;
// Internal_Configs.ProgressColor = ProgressColor
model.variables.internal_ConfigsVar.progressColorAttr = model.variables.progressColorIn;
// Internal_Configs.TrailColor = TrailColor
model.variables.internal_ConfigsVar.trailColorAttr = model.variables.trailColorIn;
// Internal_Configs.Shape = OptionalConfigs.Shape
model.variables.internal_ConfigsVar.shapeAttr = model.variables.optionalConfigsIn.shapeAttr;
// Internal_Configs.Thickness = Thickness
model.variables.internal_ConfigsVar.thicknessAttr = model.variables.thicknessIn;
// Internal_Configs.AnimateInitialProgress = OptionalConfigs.AnimateInitialProgress
model.variables.internal_ConfigsVar.animateInitialProgressAttr = model.variables.optionalConfigsIn.animateInitialProgressAttr;
// Internal_Configs.Type = Bar
model.variables.internal_ConfigsVar.typeAttr = OutSystemsUIModel.staticEntities.progressType.bar;
// Internal_Configs.ExtendedClass = ExtendedClass
model.variables.internal_ConfigsVar.extendedClassAttr = model.variables.extendedClassIn;
// Internal_Configs.InitialProgress = Internal_Configs.Progress
model.variables.internal_ConfigsVar.initialProgressAttr = model.variables.internal_ConfigsVar.progressAttr;
// Execute Action: ProgressBarCreate
OutSystemsUIController.default.progressBarCreate$Action(model.variables.internal_ConfigsVar, callContext);
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

get _onParametersChanged$Action() {if(!(this.hasOwnProperty("__onParametersChanged$Action"))) {
this.__onParametersChanged$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnParametersChanged", function (span) {
if(span) {
span.setAttribute("code.function", "OnParametersChanged");
span.setAttribute("outsystems.function.key", "39dd2971-6630-4971-97e5-f83520dec49e");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnParametersChanged");
callContext = controller.callContext(callContext);
// Progress?
if((((model.variables.progressIn) !== (model.variables.internal_ConfigsVar.progressAttr)))) {
// Set Progress
// Internal_Configs.Progress = Progress
model.variables.internal_ConfigsVar.progressAttr = model.variables.progressIn;
// Execute Action: Update_Progress
OutSystemsUIController.default.progressChangeIntegerProperty$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, "Progress", OS.BuiltinFunctions.integerToLongInteger(model.variables.internal_ConfigsVar.progressAttr), callContext);
}

// ProgressColor?
if((((model.variables.progressColorIn) !== (model.variables.internal_ConfigsVar.progressColorAttr)))) {
// Set ProgressColor
// Internal_Configs.ProgressColor = ProgressColor
model.variables.internal_ConfigsVar.progressColorAttr = model.variables.progressColorIn;
// Execute Action: Update_ProgressColor
OutSystemsUIController.default.progressChangeTextProperty$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, "ProgressColor", model.variables.internal_ConfigsVar.progressColorAttr, callContext);
}

// TrailColor?
if((((model.variables.trailColorIn) !== (model.variables.internal_ConfigsVar.trailColorAttr)))) {
// Set TrailColor
// Internal_Configs.TrailColor = TrailColor
model.variables.internal_ConfigsVar.trailColorAttr = model.variables.trailColorIn;
// Execute Action: Update_TrailColor
OutSystemsUIController.default.progressChangeTextProperty$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, "TrailColor", model.variables.internal_ConfigsVar.trailColorAttr, callContext);
}

// Thickness?
if((((model.variables.thicknessIn) !== (model.variables.internal_ConfigsVar.thicknessAttr)))) {
// Set Thickness
// Internal_Configs.Thickness = Thickness
model.variables.internal_ConfigsVar.thicknessAttr = model.variables.thicknessIn;
// Execute Action: Update_Thickness
OutSystemsUIController.default.progressChangeIntegerProperty$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, "Thickness", OS.BuiltinFunctions.integerToLongInteger(model.variables.internal_ConfigsVar.thicknessAttr), callContext);
}

// Shape?
if((((model.variables.optionalConfigsIn.shapeAttr) !== (model.variables.internal_ConfigsVar.shapeAttr)))) {
// Set Shape
// Internal_Configs.Shape = OptionalConfigs.Shape
model.variables.internal_ConfigsVar.shapeAttr = model.variables.optionalConfigsIn.shapeAttr;
// Execute Action: Update_Shape
OutSystemsUIController.default.progressChangeTextProperty$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, "Shape", model.variables.internal_ConfigsVar.shapeAttr, callContext);
}

// ExtendedClass?
if((((model.variables.extendedClassIn) !== (model.variables.internal_ConfigsVar.extendedClassAttr)))) {
// Set ExtendedClass
// Internal_Configs.ExtendedClass = ExtendedClass
model.variables.internal_ConfigsVar.extendedClassAttr = model.variables.extendedClassIn;
// Execute Action: Update_ExtendedClass
OutSystemsUIController.default.progressChangeTextProperty$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, "ExtendedClass", model.variables.internal_ConfigsVar.extendedClassAttr, callContext);
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

get _initializedHandler$Action() {if(!(this.hasOwnProperty("__initializedHandler$Action"))) {
this.__initializedHandler$Action = function (progressBarIdIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("InitializedHandler", function (span) {
if(span) {
span.setAttribute("code.function", "InitializedHandler");
span.setAttribute("outsystems.function.key", "4e9a6be6-5cee-4691-b501-6be035f94ad7");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("InitializedHandler");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.Numbers.ProgressBar.InitializedHandler$vars"))());
vars.value.progressBarIdInLocal = progressBarIdIn;
return OS.Flow.executeAsyncFlow(function () {
// Trigger Event: Initialized
return controller.initialized$Action(vars.value.progressBarIdInLocal, callContext);
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

get _onDestroy$Action() {if(!(this.hasOwnProperty("__onDestroy$Action"))) {
this.__onDestroy$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnDestroy", function (span) {
if(span) {
span.setAttribute("code.function", "OnDestroy");
span.setAttribute("outsystems.function.key", "55939c57-61a6-493f-9c67-9f80c973aae9");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnDestroy");
callContext = controller.callContext(callContext);
// Execute Action: Destroy
OutSystemsUIController.default.progressDestroy$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, callContext);
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

get _onReady$Action() {if(!(this.hasOwnProperty("__onReady$Action"))) {
this.__onReady$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnReady", function (span) {
if(span) {
span.setAttribute("code.function", "OnReady");
span.setAttribute("outsystems.function.key", "7c507aba-5536-4c68-874e-506218489593");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
// Execute Action: ProgressInitialize
OutSystemsUIController.default.progressInitialize$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, callContext);
// Execute Action: LogEnd
OutSystemsUIController.default.logEvent$Action(OutSystemsUIModel.staticEntities.logType.general, "ProgressBar Created", callContext);
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

get _registerCallbacks$Action() {if(!(this.hasOwnProperty("__registerCallbacks$Action"))) {
this.__registerCallbacks$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("RegisterCallbacks", function (span) {
if(span) {
span.setAttribute("code.function", "RegisterCallbacks");
span.setAttribute("outsystems.function.key", "fca31c93-db44-4023-b3c7-494fd58f2155");
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
span.setAttribute("outsystems.function.key", "ea056eea-c384-450c-814b-380c830b6bdc");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsUI_Numbers_ProgressBar_mvc_controller_RegisterCallbacks_GetCallbackHandlersJS, "GetCallbackHandlers", "RegisterCallbacks", {
Initialized: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI.Numbers.ProgressBar.RegisterCallbacks$getCallbackHandlersJSResult"))();
jsNodeResult.initializedOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Initialized, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
InitializedHandler: controller.clientActionProxies.initializedHandler$Action
}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// Execute Action: RegisterOnInitialize
OutSystemsUIController.default.progressRegisterCallback$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, OutSystemsUIModel.staticEntities.registeredCallbackEvents.initialized, getCallbackHandlersJSResult.value.initializedOut, callContext);
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


onInitialize$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnInitialize__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnInitialize");
span.setAttribute("outsystems.function.key", "1de7cb36-6298-4f20-a2be-639e58d086c9");
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

onParametersChanged$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnParametersChanged__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnParametersChanged");
span.setAttribute("outsystems.function.key", "39dd2971-6630-4971-97e5-f83520dec49e");
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

initializedHandler$Action(progressBarIdIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("InitializedHandler__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "InitializedHandler");
span.setAttribute("outsystems.function.key", "4e9a6be6-5cee-4691-b501-6be035f94ad7");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._initializedHandler$Action, callContext, progressBarIdIn);
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
span.setAttribute("outsystems.function.key", "55939c57-61a6-493f-9c67-9f80c973aae9");
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

onReady$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnReady__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnReady");
span.setAttribute("outsystems.function.key", "7c507aba-5536-4c68-874e-506218489593");
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

registerCallbacks$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("RegisterCallbacks__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "RegisterCallbacks");
span.setAttribute("outsystems.function.key", "fca31c93-db44-4023-b3c7-494fd58f2155");
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
Controller.registerVariableGroupType("OutSystemsUI.Numbers.ProgressBar.InitializedHandler$vars", [{
name: "ProgressBarId",
attrName: "progressBarIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("OutSystemsUI.Numbers.ProgressBar.RegisterCallbacks$getCallbackHandlersJSResult", [{
name: "Initialized",
attrName: "initializedOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);

}
return new OS.Controller.ControllerFactory(Controller, OutSystemsUILanguageResources);
});

define("OutSystemsUI.Numbers.ProgressBar.mvc$controller.RegisterCallbacks.GetCallbackHandlersJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Initialized = $actions.InitializedHandler;
};
});


define("OutSystemsUI.Numbers.ProgressBar.mvc$translationsResources", ["exports"], function (exports) {
return {};
});

