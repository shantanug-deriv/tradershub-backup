define("tradershub.MainFlow.AddMoreAccount.mvc$model", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.Layouts.MainLayout.mvc$model", "tradershub.controller$DerivApiSendMessage", "tradershub.model$EN_bf87ce2ee46f8f5bc73889fe14426739EntityRecord", "tradershub.model$RL_7f0ff0d0a70a4e41424efbf5ef899b8d"], function (OSRuntimeCore, tradershubModel, tradershubController, tradershub_Layouts_MainLayout_mvcModel) {
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
Model._hasValidationWidgetsValue = tradershub_Layouts_MainLayout_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
setInputs(inputs) {
}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("tradershub.MainFlow.AddMoreAccount.mvc$view", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "react", "@outsystems/runtime-view-js", "tradershub.MainFlow.AddMoreAccount.mvc$model", "tradershub.MainFlow.AddMoreAccount.mvc$controller", "tradershub.clientVariables", "tradershub.Layouts.MainLayout.mvc$view", "@outsystems/runtime-widgets-js", "tradershub.controller$DerivApiSendMessage", "tradershub.model$EN_bf87ce2ee46f8f5bc73889fe14426739EntityRecord", "tradershub.model$RL_7f0ff0d0a70a4e41424efbf5ef899b8d"], function (OSRuntimeCore, tradershubModel, tradershubController, React, OSView, tradershub_MainFlow_AddMoreAccount_mvc_model, tradershub_MainFlow_AddMoreAccount_mvc_controller, tradershubClientVariables, tradershub_Layouts_MainLayout_mvc_view, OSWidgets) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebScreen {
        static get displayName() { return "MainFlow.AddMoreAccount"; }

        static getAttributes() { return {
codeFunction: "AddMoreAccount",
functionKey: "de40aa49-71ae-4f57-98a5-28fc3207d7a0",
functionOwnerName: "tradershub",
functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.MainFlow.AddMoreAccount.css", "css/tradershub.AccountCreation.extra.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [tradershub_Layouts_MainLayout_mvc_view];
        }

        get modelFactory() {
            return tradershub_MainFlow_AddMoreAccount_mvc_model;
        }

        get controllerFactory() {
            return tradershub_MainFlow_AddMoreAccount_mvc_controller;
        }

        get title() {
            

            return "AddMoreAccount";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(tradershub_Layouts_MainLayout_mvc_view, {
getOwnerSpan: function () {
return _this.getChildSpan("render");
},
getOwnerDisposeSpan: function () {
return _this.getChildSpan("destroy");
},
inputs: {
ActiveTab: 2
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
uuid: "0",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "add-more-accounts",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: true,
onClick: function () {
try {OS.Navigation.navigateBack(null, null, true);
} catch (ex) {
if(((ex.name) !== ("RedirectOccurredException"))) {
throw ex;
}

}
;
},
style: "remove-hover",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "padding: 0px 16px;"
},
style: "display-flex align-items-center",
visible: true,
_idProps: {
service: idService,
name: "Header"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "margin-right: 16px;"
},
style: "display-flex align-items-center justify-content-center",
visible: true,
_idProps: {
service: idService,
name: "Arrow"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/tradershub.arrowleft.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Text, {
extendedProperties: {
style: "color: #272B30; font-size: 18px; font-weight: bold;"
},
text: ["Add more accounts"],
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}))))];
})
},
_dependencies: []
}));
        }
    }

    return View;
});
define("tradershub.MainFlow.AddMoreAccount.mvc$controller", ["@outsystems/runtime-core-js", "tradershub.model", "tradershub.controller", "tradershub.languageResources", "tradershub.clientVariables", "tradershub.MainFlow.controller", "tradershub.MainFlow.AddMoreAccount.mvc$controller.OnReady.ModifyLandingCompanyJS", "tradershub.MainFlow.AddMoreAccount.mvc$controller.OnReady.LandingCompanyPayloadJS", "tradershub.controller$DerivApiSendMessage", "tradershub.model$EN_bf87ce2ee46f8f5bc73889fe14426739EntityRecord", "tradershub.model$RL_7f0ff0d0a70a4e41424efbf5ef899b8d"], function (OSRuntimeCore, tradershubModel, tradershubController, tradershubLanguageResources, tradershubClientVariables, tradershub_MainFlowController, tradershub_MainFlow_AddMoreAccount_mvc_controller_OnReady_ModifyLandingCompanyJS, tradershub_MainFlow_AddMoreAccount_mvc_controller_OnReady_LandingCompanyPayloadJS) {
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
get currenciesList$ServerAction() {if(!(this.hasOwnProperty("_currenciesList$ServerAction"))) {
this._currenciesList$ServerAction = function (callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("CurrenciesList", function (span) {
if(span) {
span.setAttribute("code.function", "CurrenciesList");
span.setAttribute("outsystems.function.key", "f15c4591-9739-418f-bc8d-14d275e849d1");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL");
}

return OS.Flow.tryFinally(function () {
return controller.callServerAction("CurrenciesList", "screenservices/tradershub/MainFlow/AddMoreAccount/ActionCurrenciesList", "P9KvWybXyhlQu_4RCM97cg", {}, controller.callContext(callContext), undefined, undefined, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("tradershub.MainFlow.AddMoreAccount$ActionCurrenciesList"))();
executeServerActionResult.currenciesListOut = OS.DataConversion.ServerDataConverter.from(outputs.CurrenciesList, tradershubModel.RL_7f0ff0d0a70a4e41424efbf5ef899b8d);
return executeServerActionResult;
});
}, function () {
if(span) {
span.end();
}

});
}, 0);
};
}

return this._currenciesList$ServerAction;
}set currenciesList$ServerAction(value) {this._currenciesList$ServerAction = value;
}


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
span.setAttribute("outsystems.function.key", "d8eb43fc-bd20-44f4-8ba5-b6ccc2280069");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var currenciesListVar = new OS.DataTypes.VariableHolder();
var derivApiSendMessageVar = new OS.DataTypes.VariableHolder();
var landingCompanyPayloadJSResult = new OS.DataTypes.VariableHolder();
var jSONSerializeCurrencyListVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: CurrenciesList
model.flush();
return controller.currenciesList$ServerAction(callContext).then(function (value) {
currenciesListVar.value = value;
}).then(function () {
// JSON Serialize: JSONSerializeCurrencyList
jSONSerializeCurrencyListVar.value.jSONOut = OS.JSONUtils.serializeToJSON(currenciesListVar.value.currenciesListOut, false, false);
landingCompanyPayloadJSResult.value = OS.Logger.startActiveSpan("LandingCompanyPayload", function (span) {
if(span) {
span.setAttribute("code.function", "LandingCompanyPayload");
span.setAttribute("outsystems.function.key", "ed3c1ad0-c637-496d-b948-7db64241a34e");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_MainFlow_AddMoreAccount_mvc_controller_OnReady_LandingCompanyPayloadJS, "LandingCompanyPayload", "OnReady", {
CountryCode: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getClientCountry(), OS.DataTypes.DataTypes.Text),
Payload: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("tradershub.MainFlow.AddMoreAccount.OnReady$landingCompanyPayloadJSResult"))();
jsNodeResult.payloadOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Payload, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
// Execute Action: DerivApiSendMessage
model.flush();
return tradershubController.default.derivApiSendMessage$Action(landingCompanyPayloadJSResult.value.payloadOut, "", false, callContext).then(function (value) {
derivApiSendMessageVar.value = value;
});
}).then(function () {
if((!(derivApiSendMessageVar.value.isErrorOut))) {
OS.Logger.startActiveSpan("ModifyLandingCompany", function (span) {
if(span) {
span.setAttribute("code.function", "ModifyLandingCompany");
span.setAttribute("outsystems.function.key", "056c2fab-0c99-4db6-97fc-14920a2b5b9e");
span.setAttribute("outsystems.function.owner.name", "tradershub");
span.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc");
span.setAttribute("outsystems.function.type", "JAVASCRIPT");
}

try {return controller.safeExecuteJSNode(tradershub_MainFlow_AddMoreAccount_mvc_controller_OnReady_ModifyLandingCompanyJS, "ModifyLandingCompany", "OnReady", {
WebsiteStatus: OS.DataConversion.JSNodeParamConverter.to(tradershubClientVariables.getRawWebsiteStatusResponse(), OS.DataTypes.DataTypes.Text),
CurrenciesList: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeCurrencyListVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
LandingCompany: OS.DataConversion.JSNodeParamConverter.to(derivApiSendMessageVar.value.responseOut, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
} finally {
if(span) {
span.end();
}

}

}, 1);
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

return this.__onReady$Action;
}set _onReady$Action(value) {this.__onReady$Action = value;
}


onReady$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnReady__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnReady");
span.setAttribute("outsystems.function.key", "d8eb43fc-bd20-44f4-8ba5-b6ccc2280069");
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
return tradershub_MainFlowController.default.handleError(ex, this.callContext());
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
Controller.registerVariableGroupType("tradershub.MainFlow.AddMoreAccount$ActionCurrenciesList", [{
name: "CurrenciesList",
attrName: "currenciesListOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new tradershubModel.RL_7f0ff0d0a70a4e41424efbf5ef899b8d();
},
complexType: tradershubModel.RL_7f0ff0d0a70a4e41424efbf5ef899b8d
}]);

// Client Actions - Variables
Controller.registerVariableGroupType("tradershub.MainFlow.AddMoreAccount.OnReady$landingCompanyPayloadJSResult", [{
name: "Payload",
attrName: "payloadOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);

}
return new OS.Controller.ControllerFactory(Controller, tradershubLanguageResources);
});

define("tradershub.MainFlow.AddMoreAccount.mvc$controller.OnReady.ModifyLandingCompanyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
const currenciesList = JSON.parse($parameters.CurrenciesList);
const WebsiteStatus = JSON.parse($parameters.WebsiteStatus);
const LandingCompany = JSON.parse($parameters.LandingCompany);

const getCurrencyIcon = (code) => {
    const currencyArray = currenciesList.filter((currency) => currency.Code === code);
    return currencyArray[0]?.Icon ?? '';
}

if(LandingCompany & WebsiteStatus) {
    const legalAllowedCurrencies = LandingCompany.landing_company?.financial_company?.legal_allowed_currencies;
    const currenciesConfig = WebsiteStatus?.website_status?.currencies_config;
    console.log('legalAllowedCurrencies: ', legalAllowedCurrencies)
    console.log('WebsiteStatus: ', currenciesConfig)
}
};
});

define("tradershub.MainFlow.AddMoreAccount.mvc$controller.OnReady.LandingCompanyPayloadJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Payload = JSON.stringify({
    "landing_company": $parameters.CountryCode
})

};
});


