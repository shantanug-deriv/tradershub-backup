define("OutSystemsUI.Interaction.AnimatedLabel.mvc$model", ["@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.model$ST_52888c3e6f33b11b7d6288dd268a26dcStructure", "OutSystemsUI.controller$AnimatedLabelInitialize", "OutSystemsUI.controller$LogEvent", "OutSystemsUI.controller$AnimatedLabelChangeTextProperty", "OutSystemsUI.controller$AnimatedLabelCreate", "OutSystemsUI.controller$GenerateUniqueId", "OutSystemsUI.controller$AnimatedLabelDestroy", "OutSystemsUI.controller$AnimatedLabelRegisterCallback", "OutSystemsUI.controller$AnimatedLabelUpdateOnRender"], function (OSRuntimeCore, OutSystemsUIModel, OutSystemsUIController) {
var OS = OSRuntimeCore;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("Internal_Configs", "internal_ConfigsVar", "Internal_Configs", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OutSystemsUIModel.ST_52888c3e6f33b11b7d6288dd268a26dcStructure());
}, false, OutSystemsUIModel.ST_52888c3e6f33b11b7d6288dd268a26dcStructure), 
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

define("OutSystemsUI.Interaction.AnimatedLabel.mvc$view", ["@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "@outsystems/runtime-view-js", "OutSystemsUI.Interaction.AnimatedLabel.mvc$model", "OutSystemsUI.Interaction.AnimatedLabel.mvc$controller", "@outsystems/runtime-widgets-js", "OutSystemsUI.model$ST_52888c3e6f33b11b7d6288dd268a26dcStructure", "OutSystemsUI.controller$AnimatedLabelInitialize", "OutSystemsUI.controller$LogEvent", "OutSystemsUI.controller$AnimatedLabelChangeTextProperty", "OutSystemsUI.controller$AnimatedLabelCreate", "OutSystemsUI.controller$GenerateUniqueId", "OutSystemsUI.controller$AnimatedLabelDestroy", "OutSystemsUI.controller$AnimatedLabelRegisterCallback", "OutSystemsUI.controller$AnimatedLabelUpdateOnRender"], function (OSRuntimeCore, OutSystemsUIModel, OutSystemsUIController, React, OSView, OutSystemsUI_Interaction_AnimatedLabel_mvc_model, OutSystemsUI_Interaction_AnimatedLabel_mvc_controller, OSWidgets) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() { return "Interaction.AnimatedLabel"; }

        static getAttributes() { return {
codeFunction: "AnimatedLabel",
functionKey: "24da8401-f5f4-46bb-b63a-32f0e5f522cd",
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
            return OutSystemsUI_Interaction_AnimatedLabel_mvc_model;
        }

        get controllerFactory() {
            return OutSystemsUI_Interaction_AnimatedLabel_mvc_controller;
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
style: "animated-label",
visible: true,
_idProps: {
service: idService,
name: "AnimatedLabel"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.label,
style: "animated-label-text",
_idProps: {
service: idService,
name: "Label"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.input,
style: "animated-label-input",
_idProps: {
service: idService,
name: "Input"
},
_widgetRecordProvider: widgetsRecordProvider
})));
        }
    }

    return View;
});
define("OutSystemsUI.Interaction.AnimatedLabel.mvc$controller", ["@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.languageResources", "OutSystemsUI.Interaction.AnimatedLabel.mvc$translationsResources", "OutSystemsUI.Interaction.AnimatedLabel.mvc$controller.RegisterCallbacks.GetCallbackHandlersJS", "OutSystemsUI.model$ST_52888c3e6f33b11b7d6288dd268a26dcStructure", "OutSystemsUI.controller$AnimatedLabelInitialize", "OutSystemsUI.controller$LogEvent", "OutSystemsUI.controller$AnimatedLabelChangeTextProperty", "OutSystemsUI.controller$AnimatedLabelCreate", "OutSystemsUI.controller$GenerateUniqueId", "OutSystemsUI.controller$AnimatedLabelDestroy", "OutSystemsUI.controller$AnimatedLabelRegisterCallback", "OutSystemsUI.controller$AnimatedLabelUpdateOnRender"], function (OSRuntimeCore, OutSystemsUIModel, OutSystemsUIController, OutSystemsUILanguageResources, OutSystemsUI_Interaction_AnimatedLabel_mvc_TranslationsResources, OutSystemsUI_Interaction_AnimatedLabel_mvc_controller_RegisterCallbacks_GetCallbackHandlersJS) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, OutSystemsUI_Interaction_AnimatedLabel_mvc_TranslationsResources);
var controller = this.controller;
this.clientActionProxies = {
initializedHandler$Action: function (animatedLabelIdIn) {
animatedLabelIdIn = (animatedLabelIdIn === undefined) ? "" : animatedLabelIdIn;
return controller.executeActionInsideJSNode(controller._initializedHandler$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(animatedLabelIdIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function (actionResults) {
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
get _onReady$Action() {if(!(this.hasOwnProperty("__onReady$Action"))) {
this.__onReady$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnReady", function (span) {
if(span) {
span.setAttribute("code.function", "OnReady");
span.setAttribute("outsystems.function.key", "35efb4d4-01ac-4d9e-b8ba-875deae1c220");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
// Execute Action: AnimatedLabelInitialize
OutSystemsUIController.default.animatedLabelInitialize$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, callContext);
// Execute Action: LogEnd
OutSystemsUIController.default.logEvent$Action(OutSystemsUIModel.staticEntities.logType.general, "AnimatedLabel created", callContext);
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

get _initializedHandler$Action() {if(!(this.hasOwnProperty("__initializedHandler$Action"))) {
this.__initializedHandler$Action = function (animatedLabelIdIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("InitializedHandler", function (span) {
if(span) {
span.setAttribute("code.function", "InitializedHandler");
span.setAttribute("outsystems.function.key", "a43dc40d-123f-445b-ab0c-7822b981e977");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("InitializedHandler");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("OutSystemsUI.Interaction.AnimatedLabel.InitializedHandler$vars"))());
vars.value.animatedLabelIdInLocal = animatedLabelIdIn;
return OS.Flow.executeAsyncFlow(function () {
// Trigger Event: Initialized
return controller.initialized$Action(vars.value.animatedLabelIdInLocal, callContext);
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

get _onParametersChanged$Action() {if(!(this.hasOwnProperty("__onParametersChanged$Action"))) {
this.__onParametersChanged$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnParametersChanged", function (span) {
if(span) {
span.setAttribute("code.function", "OnParametersChanged");
span.setAttribute("outsystems.function.key", "ac55a81a-4ce9-4fe1-9fb2-65e8ff3ee800");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnParametersChanged");
callContext = controller.callContext(callContext);
// ExtendedClass?
if((((model.variables.extendedClassIn) !== (model.variables.internal_ConfigsVar.extendedClassAttr)))) {
// Set ExtendedClass
// Internal_Configs.ExtendedClass = ExtendedClass
model.variables.internal_ConfigsVar.extendedClassAttr = model.variables.extendedClassIn;
// Execute Action: UpdateExtendedClass
OutSystemsUIController.default.animatedLabelChangeTextProperty$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, "ExtendedClass", model.variables.internal_ConfigsVar.extendedClassAttr, callContext);
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

get _onInitialize$Action() {if(!(this.hasOwnProperty("__onInitialize$Action"))) {
this.__onInitialize$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnInitialize", function (span) {
if(span) {
span.setAttribute("code.function", "OnInitialize");
span.setAttribute("outsystems.function.key", "b83a68f0-0a4b-48c6-8982-9f0b6dd99a34");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
var generateUniqueIdVar = new OS.DataTypes.VariableHolder();
// Execute Action: LogStart
OutSystemsUIController.default.logEvent$Action(OutSystemsUIModel.staticEntities.logType.general, "Going to create AnimatedLabel", callContext);
// Execute Action: GenerateUniqueId
generateUniqueIdVar.value = OutSystemsUIController.default.generateUniqueId$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, callContext);

// Set Internal Configs
// Internal_Configs.UniqueId = GenerateUniqueId.Unique_ID
model.variables.internal_ConfigsVar.uniqueIdAttr = generateUniqueIdVar.value.unique_IDOut;
// Internal_Configs.ExtendedClass = ExtendedClass
model.variables.internal_ConfigsVar.extendedClassAttr = model.variables.extendedClassIn;
// Execute Action: AnimatedLabelCreate
OutSystemsUIController.default.animatedLabelCreate$Action(model.variables.internal_ConfigsVar, callContext);
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

get _onDestroy$Action() {if(!(this.hasOwnProperty("__onDestroy$Action"))) {
this.__onDestroy$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnDestroy", function (span) {
if(span) {
span.setAttribute("code.function", "OnDestroy");
span.setAttribute("outsystems.function.key", "ba249c69-655b-4a98-b2f1-3b6a57f79e36");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnDestroy");
callContext = controller.callContext(callContext);
// Execute Action: AnimatedLabelDestroy
OutSystemsUIController.default.animatedLabelDestroy$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, callContext);
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

get _registerCallbacks$Action() {if(!(this.hasOwnProperty("__registerCallbacks$Action"))) {
this.__registerCallbacks$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("RegisterCallbacks", function (span) {
if(span) {
span.setAttribute("code.function", "RegisterCallbacks");
span.setAttribute("outsystems.function.key", "bbf7a664-bfa9-42f3-a68d-d5305c0db7a8");
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
span.setAttribute("outsystems.function.key", "10982705-6bff-49d4-9cca-04aafbcecd33");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(OutSystemsUI_Interaction_AnimatedLabel_mvc_controller_RegisterCallbacks_GetCallbackHandlersJS, "GetCallbackHandlers", "RegisterCallbacks", {
Initialized: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("OutSystemsUI.Interaction.AnimatedLabel.RegisterCallbacks$getCallbackHandlersJSResult"))();
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
OutSystemsUIController.default.animatedLabelRegisterCallback$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, OutSystemsUIModel.staticEntities.registeredCallbackEvents.initialized, getCallbackHandlersJSResult.value.initializedOut, callContext);
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

get _onRender$Action() {if(!(this.hasOwnProperty("__onRender$Action"))) {
this.__onRender$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnRender", function (span) {
if(span) {
span.setAttribute("code.function", "OnRender");
span.setAttribute("outsystems.function.key", "cf87313e-0ebf-43cb-a2b8-e0a844bec3c8");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnRender");
callContext = controller.callContext(callContext);
// Execute Action: AnimatedLabelUpdateOnRender
OutSystemsUIController.default.animatedLabelUpdateOnRender$Action(model.variables.internal_ConfigsVar.uniqueIdAttr, callContext);
} finally {
if(span) {
span.end();
}

}

}, 1);
};
}

return this.__onRender$Action;
}set _onRender$Action(value) {this.__onRender$Action = value;
}


onReady$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnReady__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnReady");
span.setAttribute("outsystems.function.key", "35efb4d4-01ac-4d9e-b8ba-875deae1c220");
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

initializedHandler$Action(animatedLabelIdIn, callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("InitializedHandler__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "InitializedHandler");
span.setAttribute("outsystems.function.key", "a43dc40d-123f-445b-ab0c-7822b981e977");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._initializedHandler$Action, callContext, animatedLabelIdIn);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

onParametersChanged$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnParametersChanged__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnParametersChanged");
span.setAttribute("outsystems.function.key", "ac55a81a-4ce9-4fe1-9fb2-65e8ff3ee800");
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

onInitialize$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnInitialize__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnInitialize");
span.setAttribute("outsystems.function.key", "b83a68f0-0a4b-48c6-8982-9f0b6dd99a34");
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

onDestroy$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnDestroy__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnDestroy");
span.setAttribute("outsystems.function.key", "ba249c69-655b-4a98-b2f1-3b6a57f79e36");
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

registerCallbacks$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("RegisterCallbacks__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "RegisterCallbacks");
span.setAttribute("outsystems.function.key", "bbf7a664-bfa9-42f3-a68d-d5305c0db7a8");
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

onRender$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnRender__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnRender");
span.setAttribute("outsystems.function.key", "cf87313e-0ebf-43cb-a2b8-e0a844bec3c8");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {return controller.safeExecuteClientAction(controller._onRender$Action, callContext);
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
this._onRenderEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return controller.onRender$Action(callContext);

};
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
Controller.registerVariableGroupType("OutSystemsUI.Interaction.AnimatedLabel.InitializedHandler$vars", [{
name: "AnimatedLabelId",
attrName: "animatedLabelIdInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("OutSystemsUI.Interaction.AnimatedLabel.RegisterCallbacks$getCallbackHandlersJSResult", [{
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

define("OutSystemsUI.Interaction.AnimatedLabel.mvc$controller.RegisterCallbacks.GetCallbackHandlersJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Initialized = $actions.InitializedHandler;
};
});


define("OutSystemsUI.Interaction.AnimatedLabel.mvc$translationsResources", ["exports"], function (exports) {
return {};
});

