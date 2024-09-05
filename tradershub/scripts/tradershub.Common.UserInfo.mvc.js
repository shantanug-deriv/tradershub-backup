define("tradershub.Common.UserInfo.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "System_.model", "OutSystemsUI.Content.UserAvatar.mvc$model", "System_.model$UserInfoRec", "tradershub.referencesHealth", "tradershub.referencesHealth$System_"], function (OSRuntimeCore, tradershubModel, System_Model, OutSystemsUI_Content_UserAvatar_mvcModel) {
var OS = OSRuntimeCore;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [].concat(OS.DataTypes.GenericRecord.attributesToDeclare.call(this));
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
OS.Model.VariablelessViewModel {
static getVariablesRecordConstructor() {
return VariablesRecord;
}

static getWidgetsRecordConstructor() {
return WidgetsRecord;
}

static get hasValidationWidgets() {if((Model._hasValidationWidgetsValue === undefined)) {
Model._hasValidationWidgetsValue = OutSystemsUI_Content_UserAvatar_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
setInputs(inputs) {
}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("tradershub.Common.UserInfo.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "System_.model", "react", "@outsystems/runtime-view-js", "tradershub.Common.UserInfo.mvc$model", "tradershub.Common.UserInfo.mvc$controller", "tradershub.clientVariables", "@outsystems/runtime-widgets-js", "OutSystemsUI.Content.UserAvatar.mvc$view", "System_.model$UserInfoRec", "tradershub.referencesHealth", "tradershub.referencesHealth$System_"], function (OSRuntimeCore, tradershubModel, tradershubController, System_Model, React, OSView, tradershub_Common_UserInfo_mvc_model, tradershub_Common_UserInfo_mvc_controller, tradershubClientVariables, OSWidgets, OutSystemsUI_Content_UserAvatar_mvc_view) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() { return "Common.UserInfo"; }

        static getAttributes() { return {
codeFunction: "UserInfo",
functionKey: "aff58ebe-2f28-4941-a4ac-832f90c8e43e",
functionOwnerName: "tradershub",
functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [OutSystemsUI_Content_UserAvatar_mvc_view];
        }

        get modelFactory() {
            return tradershub_Common_UserInfo_mvc_model;
        }

        get controllerFactory() {
            return tradershub_Common_UserInfo_mvc_controller;
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
style: "user-info",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if((((OS.BuiltinFunctions.getUserId()).toString()) !== (OS.BuiltinFunctions.nullTextIdentifier())), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(((tradershubClientVariables.getUserPhotoURL()) !== ("")), false, this, function () {
return [React.createElement(OSWidgets.Image, {
extendedProperties: {
title: tradershubClientVariables.getUserName(),
alt: "User photo"
},
style: "avatar avatar-small border-radius-rounded",
type: /*External*/ 1,
url: tradershubClientVariables.getUserPhotoURL(),
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(OutSystemsUI_Content_UserAvatar_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
Size: tradershubModel.staticEntities.size.small,
Name: tradershubClientVariables.getUserName()
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "3",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-left-s",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: true,
transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
url: OS.Navigation.generateScreenURL("tradershub", "UserProfile", {}),
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: tradershubClientVariables.getUserName(),
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-left-s",
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return controller.clientLogout$Action(controller.callContext(eventHandlerContext));
});
;
},
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "sign-out",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
name: "Icon3"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
style: "margin-left-s wcag-hide-text",
text: ["Log out"],
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
}, function () {
return [React.createElement(OSWidgets.Link, {
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Fade),
url: OS.Navigation.generateScreenURL("tradershub", "CommonLogin", {}),
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "sign-in",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
name: "Icon4"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
style: "margin-left-s",
text: ["Login"],
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})));
        }
    }

    return View;
});
define("tradershub.Common.UserInfo.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "System_.model", "tradershub.languageResources", "tradershub.clientVariables", "System_.model$UserInfoRec", "tradershub.referencesHealth", "tradershub.referencesHealth$System_"], function (OSRuntimeCore, tradershubModel, tradershubController, System_Model, tradershubLanguageResources, tradershubClientVariables) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService);
var controller = this.controller;
this.clientActionProxies = {};
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
get _clientLogout$Action() {if(!(this.hasOwnProperty("__clientLogout$Action"))) {
this.__clientLogout$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("ClientLogout", function (span) {
if(span) {
span.setAttribute("code.function", "ClientLogout");
span.setAttribute("outsystems.function.key", "16b8bb2e-2d06-444a-9efc-eb164c5727d8");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("ClientLogout");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Logout
model.flush();
return OS.SystemActions.logout(callContext).then(function () {
// Clear client variables
// UserName = ""
tradershubClientVariables.setUserName("");
// UserPhotoURL = ""
tradershubClientVariables.setUserPhotoURL("");
// LastURL = ""
tradershubClientVariables.setLastURL("");
// Destination: /tradershub/
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(OS.BuiltinFunctions.getOwnerURLPath(), {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
});
}, function () {
if(span) {
span.end();
}

});
}, 1);
};
}

return this.__clientLogout$Action;
}set _clientLogout$Action(value) {this.__clientLogout$Action = value;
}

get _onReady$Action() {if(!(this.hasOwnProperty("__onReady$Action"))) {
this.__onReady$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnReady", function (span) {
if(span) {
span.setAttribute("code.function", "OnReady");
span.setAttribute("outsystems.function.key", "178caa22-4a4c-4694-b37a-07d6fef86df8");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: GetUsernameAndPhoto
return controller._getUsernameAndPhoto$Action(callContext);
});
}, function () {
if(span) {
span.end();
}

});
}, 1);
};
}

return this.__onReady$Action;
}set _onReady$Action(value) {this.__onReady$Action = value;
}

get _getUsernameAndPhoto$Action() {if(!(this.hasOwnProperty("__getUsernameAndPhoto$Action"))) {
this.__getUsernameAndPhoto$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("GetUsernameAndPhoto", function (span) {
if(span) {
span.setAttribute("code.function", "GetUsernameAndPhoto");
span.setAttribute("outsystems.function.key", "c78050da-d0b4-41e0-b4a6-d2d77ea57b9f");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("GetUsernameAndPhoto");
callContext = controller.callContext(callContext);
var getUserProfileVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// No username?
return OS.Flow.executeSequence(function () {
if((((tradershubClientVariables.getUserName() === "") && (((OS.BuiltinFunctions.getUserId()).toString()) !== (OS.BuiltinFunctions.nullTextIdentifier()))))) {
// Execute Action: GetUserProfile
model.flush();
return OS.SystemActions.getUserProfile(callContext).then(function (value) {
getUserProfileVar.value = value;
}).then(function () {
// Set User Info
// UserName = GetUserProfile.UserInfo.Name
tradershubClientVariables.setUserName(getUserProfileVar.value.userInfoOut.nameAttr);
// UserPhotoURL = GetUserProfile.UserInfo.PhotoURL
tradershubClientVariables.setUserPhotoURL(getUserProfileVar.value.userInfoOut.photoURLAttr);
});
}

});
});
}, function () {
if(span) {
span.end();
}

});
}, 1);
};
}

return this.__getUsernameAndPhoto$Action;
}set _getUsernameAndPhoto$Action(value) {this.__getUsernameAndPhoto$Action = value;
}


clientLogout$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("ClientLogout__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "ClientLogout");
span.setAttribute("outsystems.function.key", "16b8bb2e-2d06-444a-9efc-eb164c5727d8");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._clientLogout$Action, callContext);
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
span.setAttribute("outsystems.function.key", "178caa22-4a4c-4694-b37a-07d6fef86df8");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

getUsernameAndPhoto$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("GetUsernameAndPhoto__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "GetUsernameAndPhoto");
span.setAttribute("outsystems.function.key", "c78050da-d0b4-41e0-b4a6-d2d77ea57b9f");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._getUsernameAndPhoto$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}


// Event Handler Actions
get onInitializeEventHandler() {if(!(this.hasOwnProperty("_onInitializeEventHandler"))) {
this._onInitializeEventHandler = null;
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
this._onDestroyEventHandler = null;
}

return this._onDestroyEventHandler;
}set onDestroyEventHandler(value) {this._onDestroyEventHandler = value;
}

get onParametersChangedEventHandler() {if(!(this.hasOwnProperty("_onParametersChangedEventHandler"))) {
this._onParametersChangedEventHandler = null;
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
return tradershubController.default.defaultTimeout;
}

}

var Controller = ControllerInner;
// Server Actions - Variables

// Client Actions - Variables

}
return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});


