define("OutSystemsUI.Utilities.PasswordPolicy.mvc$model", ["@outsystems/runtime-core-js", "OutSystemsUI.model", "System_.model", "System_.model$PasswordComplexityPolicyRec", "OutSystemsUI.referencesHealth", "OutSystemsUI.referencesHealth$System_", "System_.model$PasswordValidationResultRec"], function (OSRuntimeCore, OutSystemsUIModel, System_Model) {
var OS = OSRuntimeCore;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("PasswordComplexityPolicy", "passwordComplexityPolicyVar", "PasswordComplexityPolicy", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.SystemStructures.PasswordComplexityPolicyRec());
}, false, OS.SystemStructures.PasswordComplexityPolicyRec), 
this.attr("PasswordValidationResult", "passwordValidationResultVar", "PasswordValidationResult", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.SystemStructures.PasswordValidationResultRec());
}, false, OS.SystemStructures.PasswordValidationResultRec), 
this.attr("IsValidPassword", "isValidPasswordVar", "IsValidPassword", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("Password", "passwordIn", "Password", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_passwordInDataFetchStatus", "_passwordInDataFetchStatus", "_passwordInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("Password" in inputs) {
this.variables.passwordIn = inputs.Password;
if("_passwordInDataFetchStatus" in inputs) {
this.variables._passwordInDataFetchStatus = inputs._passwordInDataFetchStatus;
}

}

}

}

Model._hasValidationWidgetsValue = undefined;
return new OS.Model.ModelFactory(Model);
});

define("OutSystemsUI.Utilities.PasswordPolicy.mvc$view", ["@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.controller", "System_.model", "react", "@outsystems/runtime-view-js", "OutSystemsUI.Utilities.PasswordPolicy.mvc$model", "OutSystemsUI.Utilities.PasswordPolicy.mvc$controller", "@outsystems/runtime-widgets-js", "System_.model$PasswordComplexityPolicyRec", "OutSystemsUI.referencesHealth", "OutSystemsUI.referencesHealth$System_", "System_.model$PasswordValidationResultRec"], function (OSRuntimeCore, OutSystemsUIModel, OutSystemsUIController, System_Model, React, OSView, OutSystemsUI_Utilities_PasswordPolicy_mvc_model, OutSystemsUI_Utilities_PasswordPolicy_mvc_controller, OSWidgets) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() { return "Utilities.PasswordPolicy"; }

        static getAttributes() { return {
codeFunction: "PasswordPolicy",
functionKey: "98f4a100-e907-494e-8fc0-7cc17fefb0e0",
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
            return OutSystemsUI_Utilities_PasswordPolicy_mvc_model;
        }

        get controllerFactory() {
            return OutSystemsUI_Utilities_PasswordPolicy_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), $if((((((model.variables.passwordComplexityPolicyVar.minimumLengthAttr > 0) || model.variables.passwordComplexityPolicyVar.upperCaseLetterRequiredAttr) || model.variables.passwordComplexityPolicyVar.lowerCaseLetterRequiredAttr) || model.variables.passwordComplexityPolicyVar.numberRequiredAttr) || model.variables.passwordComplexityPolicyVar.specialCharacterRequiredAttr), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "font-size-xs",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(!(model.variables.isValidPasswordVar), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("Dl7u+j4q+EGAnNmhoodUlw#Value", "Your password must contain:"))), $if(model.variables.passwordComplexityPolicyVar.numberRequiredAttr, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("_q87RRvrVECu3VaTIzJ6sQ.Style"), function () {
return ((model.variables.passwordValidationResultVar.missingMinimumLengthAttr) ? ("") : ("text-green-darker"));
}, function () {
return model.variables.passwordValidationResultVar.missingMinimumLengthAttr;
}),
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.passwordValidationResultVar.missingMinimumLengthAttr, false, this, function () {
return [React.createElement(OSWidgets.Icon, {
icon: "times-circle",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(OSWidgets.Icon, {
icon: "check-circle",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
style: "margin-left-s",
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("HCZhF4tDjEGF05LZK1PQKA#Value", "At least ")), React.createElement(OSWidgets.Expression, {
gridProperties: {
marginLeft: "0"
},
value: (model.variables.passwordComplexityPolicyVar.minimumLengthAttr).toString(),
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}), $text(getTranslation("rwEUCpoInUSEWvR8KGyJbg#Value", " characters"))))];
}, function () {
return [];
}), $if(model.variables.passwordComplexityPolicyVar.upperCaseLetterRequiredAttr, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("3fhhgmONGE+VgKcBnDfW3w.Style"), function () {
return ((model.variables.passwordValidationResultVar.missingUpperCaseLetterAttr) ? ("") : ("text-green-darker"));
}, function () {
return model.variables.passwordValidationResultVar.missingUpperCaseLetterAttr;
}),
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.passwordValidationResultVar.missingUpperCaseLetterAttr, false, this, function () {
return [React.createElement(OSWidgets.Icon, {
icon: "times-circle",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(OSWidgets.Icon, {
icon: "check-circle",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
style: "margin-left-s",
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("wYONzJay00aT+awaUkXOxA#Value", "1 uppercase letter"))))];
}, function () {
return [];
}), $if(model.variables.passwordComplexityPolicyVar.lowerCaseLetterRequiredAttr, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("YMZJeUWYikyuvTBV7uNuEw.Style"), function () {
return ((model.variables.passwordValidationResultVar.missingLowerCaseLetterAttr) ? ("") : ("text-green-darker"));
}, function () {
return model.variables.passwordValidationResultVar.missingLowerCaseLetterAttr;
}),
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.passwordValidationResultVar.missingLowerCaseLetterAttr, false, this, function () {
return [React.createElement(OSWidgets.Icon, {
icon: "times-circle",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(OSWidgets.Icon, {
icon: "check-circle",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
style: "margin-left-s",
visible: true,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("ql00Rx6EHE+VHZcio9Ld7w#Value", "1 lowercase letter"))))];
}, function () {
return [];
}), $if(model.variables.passwordComplexityPolicyVar.numberRequiredAttr, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("BnVnJwyZOEu3kAkpa+cA1g.Style"), function () {
return ((model.variables.passwordValidationResultVar.missingNumberAttr) ? ("") : ("text-green-darker"));
}, function () {
return model.variables.passwordValidationResultVar.missingNumberAttr;
}),
visible: true,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
visible: true,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.passwordValidationResultVar.missingNumberAttr, false, this, function () {
return [React.createElement(OSWidgets.Icon, {
icon: "times-circle",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(OSWidgets.Icon, {
icon: "check-circle",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
style: "margin-left-s",
visible: true,
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("OMYnQ_ERyUegrAFjGV6_og#Value", "1 number"))))];
}, function () {
return [];
}), $if(model.variables.passwordComplexityPolicyVar.specialCharacterRequiredAttr, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("0D56A2_eCk2_XxCpklQYGg.Style"), function () {
return ((model.variables.passwordValidationResultVar.missingSpecialCharacterAttr) ? ("") : ("text-green-darker"));
}, function () {
return model.variables.passwordValidationResultVar.missingSpecialCharacterAttr;
}),
visible: true,
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
visible: true,
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.passwordValidationResultVar.missingSpecialCharacterAttr, false, this, function () {
return [React.createElement(OSWidgets.Icon, {
icon: "times-circle",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(OSWidgets.Icon, {
icon: "check-circle",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
style: "margin-left-s",
visible: true,
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
}, $text(getTranslation("F8EtDaZYlkGfsihC3p1G+g#Value", "1 special character (ex: !, @, #, $, %)"))))];
}, function () {
return [];
}))];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-green-darker",
visible: true,
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
icon: "check-circle",
iconSize: /*FontSize*/ 0,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "30"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Text, {
style: "margin-left-s",
text: [$text(getTranslation("oiNfuD2HnkGAxmk6Ah5sqA#Value", "Great! Your password meets all the requirements."))],
_idProps: {
service: idService,
uuid: "31"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}))];
}, function () {
return [];
}));
        }
    }

    return View;
});
define("OutSystemsUI.Utilities.PasswordPolicy.mvc$controller", ["@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.controller", "System_.model", "OutSystemsUI.languageResources", "OutSystemsUI.Utilities.PasswordPolicy.mvc$translationsResources", "System_.model$PasswordComplexityPolicyRec", "OutSystemsUI.referencesHealth", "OutSystemsUI.referencesHealth$System_", "System_.model$PasswordValidationResultRec"], function (OSRuntimeCore, OutSystemsUIModel, OutSystemsUIController, System_Model, OutSystemsUILanguageResources, OutSystemsUI_Utilities_PasswordPolicy_mvc_TranslationsResources) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, OutSystemsUI_Utilities_PasswordPolicy_mvc_TranslationsResources);
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
get _onInitialize$Action() {if(!(this.hasOwnProperty("__onInitialize$Action"))) {
this.__onInitialize$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
return OS.Logger.startActiveSpan("OnInitialize", function (span) {
if(span) {
span.setAttribute("code.function", "OnInitialize");
span.setAttribute("outsystems.function.key", "0800c9f1-0d86-48cf-adb4-2a7ba6216122");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

try {controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
var getPasswordComplexityPolicyVar = new OS.DataTypes.VariableHolder();
// Execute Action: GetPasswordComplexityPolicy
getPasswordComplexityPolicyVar.value = OS.SystemActions.getPasswordComplexityPolicy(callContext);

// Set initial values
// PasswordComplexityPolicy = GetPasswordComplexityPolicy.PasswordComplexityPolicy
model.variables.passwordComplexityPolicyVar = getPasswordComplexityPolicyVar.value.passwordComplexityPolicyOut;
// PasswordValidationResult.IsValid = False
model.variables.passwordValidationResultVar.isValidAttr = false;
// PasswordValidationResult.MissingLowerCaseLetter = True
model.variables.passwordValidationResultVar.missingLowerCaseLetterAttr = true;
// PasswordValidationResult.MissingMinimumLength = True
model.variables.passwordValidationResultVar.missingMinimumLengthAttr = true;
// PasswordValidationResult.MissingUpperCaseLetter = True
model.variables.passwordValidationResultVar.missingUpperCaseLetterAttr = true;
// PasswordValidationResult.MissingNumber = True
model.variables.passwordValidationResultVar.missingNumberAttr = true;
// PasswordValidationResult.MissingSpecialCharacter = True
model.variables.passwordValidationResultVar.missingSpecialCharacterAttr = true;
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
span.setAttribute("outsystems.function.key", "7f9bf3e7-8c2a-4fe7-b221-5485b960ba25");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
controller.ensureControllerAlive("OnParametersChanged");
callContext = controller.callContext(callContext);
var validatePasswordComplexityVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: ValidatePasswordComplexity
validatePasswordComplexityVar.value = OS.SystemActions.validatePasswordComplexity(model.variables.passwordIn, callContext);

// PasswordValidationResult
// PasswordValidationResult.IsValid = ValidatePasswordComplexity.PasswordValidationResult.IsValid
model.variables.passwordValidationResultVar.isValidAttr = validatePasswordComplexityVar.value.passwordValidationResultOut.isValidAttr;
// PasswordValidationResult.MissingLowerCaseLetter = ValidatePasswordComplexity.PasswordValidationResult.MissingLowerCaseLetter
model.variables.passwordValidationResultVar.missingLowerCaseLetterAttr = validatePasswordComplexityVar.value.passwordValidationResultOut.missingLowerCaseLetterAttr;
// PasswordValidationResult.MissingMinimumLength = ValidatePasswordComplexity.PasswordValidationResult.MissingMinimumLength
model.variables.passwordValidationResultVar.missingMinimumLengthAttr = validatePasswordComplexityVar.value.passwordValidationResultOut.missingMinimumLengthAttr;
// PasswordValidationResult.MissingUpperCaseLetter = ValidatePasswordComplexity.PasswordValidationResult.MissingUpperCaseLetter
model.variables.passwordValidationResultVar.missingUpperCaseLetterAttr = validatePasswordComplexityVar.value.passwordValidationResultOut.missingUpperCaseLetterAttr;
// PasswordValidationResult.MissingNumber = ValidatePasswordComplexity.PasswordValidationResult.MissingNumber
model.variables.passwordValidationResultVar.missingNumberAttr = validatePasswordComplexityVar.value.passwordValidationResultOut.missingNumberAttr;
// PasswordValidationResult.MissingSpecialCharacter = ValidatePasswordComplexity.PasswordValidationResult.MissingSpecialCharacter
model.variables.passwordValidationResultVar.missingSpecialCharacterAttr = validatePasswordComplexityVar.value.passwordValidationResultOut.missingSpecialCharacterAttr;
// Is valid?
if((validatePasswordComplexityVar.value.passwordValidationResultOut.isValidAttr)) {
if((model.variables.isValidPasswordVar)) {
return OS.Flow.returnAsync();

} else {
// Set as valid
// IsValidPassword = True
model.variables.isValidPasswordVar = true;
}

} else {
if((model.variables.isValidPasswordVar)) {
// Set as invalid
// IsValidPassword = False
model.variables.isValidPasswordVar = false;
} else {
return OS.Flow.returnAsync();

}

}

// Trigger Event: Compliant
return controller.compliant$Action(validatePasswordComplexityVar.value.passwordValidationResultOut.isValidAttr, callContext);
});
}, function () {
if(span) {
span.end();
}

});
}, 1);
};
}

return this.__onParametersChanged$Action;
}set _onParametersChanged$Action(value) {this.__onParametersChanged$Action = value;
}


onInitialize$Action(callContext) {
var controller = this.controller;
return OS.Logger.startActiveSpan("OnInitialize__proxy", function (span) {
if(span) {
span.setAttribute("code.function", "OnInitialize");
span.setAttribute("outsystems.function.key", "0800c9f1-0d86-48cf-adb4-2a7ba6216122");
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
span.setAttribute("outsystems.function.key", "7f9bf3e7-8c2a-4fe7-b221-5485b960ba25");
span.setAttribute("outsystems.function.owner.name", "OutSystemsUI");
span.setAttribute("outsystems.function.owner.key", "8be17f2a-431c-4958-b894-c77b988a7271");
span.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION");
}

return OS.Flow.tryFinally(function () {
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);
}, function () {
if(span) {
span.end();
}

});
}, 0);

}

get compliant$Action() {if(!(this.hasOwnProperty("_compliant$Action"))) {
this._compliant$Action = function () {
return Promise.resolve();
};
}

return this._compliant$Action;
}set compliant$Action(value) {this._compliant$Action = value;
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
this._onReadyEventHandler = null;
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

}
return new OS.Controller.ControllerFactory(Controller, OutSystemsUILanguageResources);
});


define("OutSystemsUI.Utilities.PasswordPolicy.mvc$translationsResources.ar", [], function () {
return {
"oiNfuD2HnkGAxmk6Ah5sqA#Value": "رائع! كلمة المرور تفي بجميع المتطلبات.",
"F8EtDaZYlkGfsihC3p1G+g#Value": "1 حرف خاص (مثلاً: !، @، #، $، %)",
"OMYnQ_ERyUegrAFjGV6_og#Value": "1 رقم",
"ql00Rx6EHE+VHZcio9Ld7w#Value": "1 حرف صغير",
"wYONzJay00aT+awaUkXOxA#Value": "1 حرف كبير",
"rwEUCpoInUSEWvR8KGyJbg#Value": " عدد من الحروف",
"HCZhF4tDjEGF05LZK1PQKA#Value": "على الأقل ",
"Dl7u+j4q+EGAnNmhoodUlw#Value": "كلمة المرور الخاصة بك يجب أن تحتوي على:"
};
});

define("OutSystemsUI.Utilities.PasswordPolicy.mvc$translationsResources.de-DE", [], function () {
return {
"oiNfuD2HnkGAxmk6Ah5sqA#Value": "Großartig! Ihr Passwort erfüllt alle Anforderungen.",
"F8EtDaZYlkGfsihC3p1G+g#Value": "1 Sonderzeichen (z.B.: !, @, #, $, %)",
"OMYnQ_ERyUegrAFjGV6_og#Value": "1 Zahl",
"ql00Rx6EHE+VHZcio9Ld7w#Value": "1 Kleinbuchstabe",
"wYONzJay00aT+awaUkXOxA#Value": "1 Großbuchstabe",
"rwEUCpoInUSEWvR8KGyJbg#Value": " Zeichen",
"HCZhF4tDjEGF05LZK1PQKA#Value": "Mindestens ",
"Dl7u+j4q+EGAnNmhoodUlw#Value": "Ihr Passwort muss enthalten:"
};
});

define("OutSystemsUI.Utilities.PasswordPolicy.mvc$translationsResources.en", [], function () {
return {
"oiNfuD2HnkGAxmk6Ah5sqA#Value": "Great! Your password meets all the requirements.",
"F8EtDaZYlkGfsihC3p1G+g#Value": "1 special character (ex: !, @, #, $, %)",
"OMYnQ_ERyUegrAFjGV6_og#Value": "1 number",
"ql00Rx6EHE+VHZcio9Ld7w#Value": "1 lowercase letter",
"wYONzJay00aT+awaUkXOxA#Value": "1 uppercase letter",
"rwEUCpoInUSEWvR8KGyJbg#Value": " characters",
"HCZhF4tDjEGF05LZK1PQKA#Value": "At least ",
"Dl7u+j4q+EGAnNmhoodUlw#Value": "Your password must contain:"
};
});

define("OutSystemsUI.Utilities.PasswordPolicy.mvc$translationsResources.es", [], function () {
return {
"oiNfuD2HnkGAxmk6Ah5sqA#Value": "¡Genial! Tu contraseña cumple con todos los requisitos.",
"F8EtDaZYlkGfsihC3p1G+g#Value": "1 carácter especial (por ejemplo: !, @, #, $, %)",
"OMYnQ_ERyUegrAFjGV6_og#Value": "1 número",
"ql00Rx6EHE+VHZcio9Ld7w#Value": "1 letra minúscula",
"wYONzJay00aT+awaUkXOxA#Value": "1 letra mayúscula",
"rwEUCpoInUSEWvR8KGyJbg#Value": " caracteres",
"HCZhF4tDjEGF05LZK1PQKA#Value": "Al menos ",
"Dl7u+j4q+EGAnNmhoodUlw#Value": "Tu contraseña debe contener:"
};
});

define("OutSystemsUI.Utilities.PasswordPolicy.mvc$translationsResources.fr-CA", [], function () {
return {
"oiNfuD2HnkGAxmk6Ah5sqA#Value": "Génial! Votre mot de passe remplit toutes les exigences.",
"F8EtDaZYlkGfsihC3p1G+g#Value": "1 caractère spécial (par ex: !, @, #, $, %)",
"OMYnQ_ERyUegrAFjGV6_og#Value": "1 chiffre",
"ql00Rx6EHE+VHZcio9Ld7w#Value": "1 lettre minuscule",
"wYONzJay00aT+awaUkXOxA#Value": "1 lettre majuscule",
"rwEUCpoInUSEWvR8KGyJbg#Value": " caractères",
"HCZhF4tDjEGF05LZK1PQKA#Value": "Au moins ",
"Dl7u+j4q+EGAnNmhoodUlw#Value": "Votre mot de passe doit contenir:"
};
});

define("OutSystemsUI.Utilities.PasswordPolicy.mvc$translationsResources.fr-FR", [], function () {
return {
"oiNfuD2HnkGAxmk6Ah5sqA#Value": "Génial! Votre mot de passe remplit toutes les exigences.",
"F8EtDaZYlkGfsihC3p1G+g#Value": "1 caractère spécial (par ex: !, @, #, $, %)",
"OMYnQ_ERyUegrAFjGV6_og#Value": "1 chiffre",
"ql00Rx6EHE+VHZcio9Ld7w#Value": "1 lettre minuscule",
"wYONzJay00aT+awaUkXOxA#Value": "1 lettre majuscule",
"rwEUCpoInUSEWvR8KGyJbg#Value": " caractères",
"HCZhF4tDjEGF05LZK1PQKA#Value": "Au moins ",
"Dl7u+j4q+EGAnNmhoodUlw#Value": "Votre mot de passe doit contenir:"
};
});

define("OutSystemsUI.Utilities.PasswordPolicy.mvc$translationsResources.hi-IN", [], function () {
return {
"oiNfuD2HnkGAxmk6Ah5sqA#Value": "बधाई हो ! आपका पासवर्ड सभी आवश्यकताओं को पूरा करता है.",
"F8EtDaZYlkGfsihC3p1G+g#Value": "1 विशेष वर्ण (जैसे : !, @, #, $, %)",
"OMYnQ_ERyUegrAFjGV6_og#Value": "एक संख्या",
"ql00Rx6EHE+VHZcio9Ld7w#Value": "एक छोटा अक्षर",
"wYONzJay00aT+awaUkXOxA#Value": "एक बड़ा अक्षर",
"rwEUCpoInUSEWvR8KGyJbg#Value": "अक्षर",
"HCZhF4tDjEGF05LZK1PQKA#Value": "न्यूनतम ",
"Dl7u+j4q+EGAnNmhoodUlw#Value": "आपके पासवर्ड के लिए न्यूनतम आवश्यकताएँ :"
};
});

define("OutSystemsUI.Utilities.PasswordPolicy.mvc$translationsResources.it-IT", [], function () {
return {
"oiNfuD2HnkGAxmk6Ah5sqA#Value": "Fantastico! La tua password soddisfa tutti i requisiti.",
"F8EtDaZYlkGfsihC3p1G+g#Value": "1 carattere speciale (ad esempio: !, @, #, $, %)",
"OMYnQ_ERyUegrAFjGV6_og#Value": "1 numero",
"ql00Rx6EHE+VHZcio9Ld7w#Value": "1 lettera minuscola",
"wYONzJay00aT+awaUkXOxA#Value": "1 lettera maiuscola",
"rwEUCpoInUSEWvR8KGyJbg#Value": " caratteri",
"HCZhF4tDjEGF05LZK1PQKA#Value": "Almeno ",
"Dl7u+j4q+EGAnNmhoodUlw#Value": "La tua password deve contenere:"
};
});

define("OutSystemsUI.Utilities.PasswordPolicy.mvc$translationsResources.ja-JP", [], function () {
return {
"oiNfuD2HnkGAxmk6Ah5sqA#Value": "すごい！ パスワードはすべての要件を満たしています。",
"F8EtDaZYlkGfsihC3p1G+g#Value": "1つの特殊文字（例: !, @, #, $, %）",
"OMYnQ_ERyUegrAFjGV6_og#Value": "1つの数字",
"ql00Rx6EHE+VHZcio9Ld7w#Value": "1つの小文字",
"wYONzJay00aT+awaUkXOxA#Value": "1つの大文字",
"rwEUCpoInUSEWvR8KGyJbg#Value": " 文字",
"HCZhF4tDjEGF05LZK1PQKA#Value": "少なくとも ",
"Dl7u+j4q+EGAnNmhoodUlw#Value": "パスワードは以下を含む必要があります:"
};
});

define("OutSystemsUI.Utilities.PasswordPolicy.mvc$translationsResources.ko-KR", [], function () {
return {
"oiNfuD2HnkGAxmk6Ah5sqA#Value": "훌륭합니다! 비밀번호는 모든 요구 사항을 충족합니다.",
"F8EtDaZYlkGfsihC3p1G+g#Value": "1개의 특수 문자 (예: !, @, #, $, %)",
"OMYnQ_ERyUegrAFjGV6_og#Value": "1개의 숫자",
"ql00Rx6EHE+VHZcio9Ld7w#Value": "1개의 소문자",
"wYONzJay00aT+awaUkXOxA#Value": "1개의 대문자",
"rwEUCpoInUSEWvR8KGyJbg#Value": " 문자",
"HCZhF4tDjEGF05LZK1PQKA#Value": "최소한 ",
"Dl7u+j4q+EGAnNmhoodUlw#Value": "비밀번호에는 다음이 포함되어야 합니다:"
};
});

define("OutSystemsUI.Utilities.PasswordPolicy.mvc$translationsResources.nl", [], function () {
return {
"oiNfuD2HnkGAxmk6Ah5sqA#Value": "Geweldig! Je wachtwoord voldoet aan alle eisen.",
"F8EtDaZYlkGfsihC3p1G+g#Value": "1 speciaal teken (bijv.: !, @, #, $, %)",
"OMYnQ_ERyUegrAFjGV6_og#Value": "1 cijfer",
"ql00Rx6EHE+VHZcio9Ld7w#Value": "1 kleine letter",
"wYONzJay00aT+awaUkXOxA#Value": "1 hoofdletter",
"rwEUCpoInUSEWvR8KGyJbg#Value": " tekens",
"HCZhF4tDjEGF05LZK1PQKA#Value": "Minstens ",
"Dl7u+j4q+EGAnNmhoodUlw#Value": "Je wachtwoord moet bevatten:"
};
});

define("OutSystemsUI.Utilities.PasswordPolicy.mvc$translationsResources.pt", [], function () {
return {
"oiNfuD2HnkGAxmk6Ah5sqA#Value": "Ótimo! Sua senha atende a todos os requisitos.",
"F8EtDaZYlkGfsihC3p1G+g#Value": "1 caractere especial (ex: !, @, #, $, %)",
"OMYnQ_ERyUegrAFjGV6_og#Value": "1 número",
"ql00Rx6EHE+VHZcio9Ld7w#Value": "1 letra minúscula",
"wYONzJay00aT+awaUkXOxA#Value": "1 letra maiúscula",
"rwEUCpoInUSEWvR8KGyJbg#Value": " caracteres",
"HCZhF4tDjEGF05LZK1PQKA#Value": "Pelo menos ",
"Dl7u+j4q+EGAnNmhoodUlw#Value": "Sua senha deve conter:"
};
});

define("OutSystemsUI.Utilities.PasswordPolicy.mvc$translationsResources.pt-BR", [], function () {
return {
"oiNfuD2HnkGAxmk6Ah5sqA#Value": "Ótimo! A sua senha cumpre todos os requisitos.",
"F8EtDaZYlkGfsihC3p1G+g#Value": "1 carácter especial (ex: !, @, #, $, %)",
"OMYnQ_ERyUegrAFjGV6_og#Value": "1 número",
"ql00Rx6EHE+VHZcio9Ld7w#Value": "1 letra minúscula",
"wYONzJay00aT+awaUkXOxA#Value": "1 letra maiúscula",
"rwEUCpoInUSEWvR8KGyJbg#Value": " caracteres",
"HCZhF4tDjEGF05LZK1PQKA#Value": "Pelo menos ",
"Dl7u+j4q+EGAnNmhoodUlw#Value": "A sua senha deve conter:"
};
});

define("OutSystemsUI.Utilities.PasswordPolicy.mvc$translationsResources.zh-CN", [], function () {
return {
"oiNfuD2HnkGAxmk6Ah5sqA#Value": "太棒了！ 您的密码符合所有要求。",
"F8EtDaZYlkGfsihC3p1G+g#Value": "1个特殊字符（例如：！，@，＃，$，％）",
"OMYnQ_ERyUegrAFjGV6_og#Value": "1个数字",
"ql00Rx6EHE+VHZcio9Ld7w#Value": "1个小写字母",
"wYONzJay00aT+awaUkXOxA#Value": "1个大写字母",
"rwEUCpoInUSEWvR8KGyJbg#Value": " 个字符",
"HCZhF4tDjEGF05LZK1PQKA#Value": "至少 ",
"Dl7u+j4q+EGAnNmhoodUlw#Value": "您的密码必须包含："
};
});

define("OutSystemsUI.Utilities.PasswordPolicy.mvc$translationsResources.zh-Hans", [], function () {
return {
"oiNfuD2HnkGAxmk6Ah5sqA#Value": "太棒了！ 您的密码符合所有要求。",
"F8EtDaZYlkGfsihC3p1G+g#Value": "1个特殊字符（例如：！，@，＃，$，％）",
"OMYnQ_ERyUegrAFjGV6_og#Value": "1个数字",
"ql00Rx6EHE+VHZcio9Ld7w#Value": "1个小写字母",
"wYONzJay00aT+awaUkXOxA#Value": "1个大写字母",
"rwEUCpoInUSEWvR8KGyJbg#Value": " 个字符",
"HCZhF4tDjEGF05LZK1PQKA#Value": "至少 ",
"Dl7u+j4q+EGAnNmhoodUlw#Value": "您的密码必须包含："
};
});

define("OutSystemsUI.Utilities.PasswordPolicy.mvc$translationsResources.zh-Hant", [], function () {
return {
"oiNfuD2HnkGAxmk6Ah5sqA#Value": "太棒了！ 您的密碼符合所有要求。",
"F8EtDaZYlkGfsihC3p1G+g#Value": "1個特殊字符（例如：！，@，＃，$，％）",
"OMYnQ_ERyUegrAFjGV6_og#Value": "1個數字",
"ql00Rx6EHE+VHZcio9Ld7w#Value": "1個小寫字母",
"wYONzJay00aT+awaUkXOxA#Value": "1個大寫字母",
"rwEUCpoInUSEWvR8KGyJbg#Value": " 個字符",
"HCZhF4tDjEGF05LZK1PQKA#Value": "至少 ",
"Dl7u+j4q+EGAnNmhoodUlw#Value": "您的密碼必須包含："
};
});

define("OutSystemsUI.Utilities.PasswordPolicy.mvc$translationsResources", ["exports", "OutSystemsUI.Utilities.PasswordPolicy.mvc$translationsResources.ar", "OutSystemsUI.Utilities.PasswordPolicy.mvc$translationsResources.de-DE", "OutSystemsUI.Utilities.PasswordPolicy.mvc$translationsResources.en", "OutSystemsUI.Utilities.PasswordPolicy.mvc$translationsResources.es", "OutSystemsUI.Utilities.PasswordPolicy.mvc$translationsResources.fr-CA", "OutSystemsUI.Utilities.PasswordPolicy.mvc$translationsResources.fr-FR", "OutSystemsUI.Utilities.PasswordPolicy.mvc$translationsResources.hi-IN", "OutSystemsUI.Utilities.PasswordPolicy.mvc$translationsResources.it-IT", "OutSystemsUI.Utilities.PasswordPolicy.mvc$translationsResources.ja-JP", "OutSystemsUI.Utilities.PasswordPolicy.mvc$translationsResources.ko-KR", "OutSystemsUI.Utilities.PasswordPolicy.mvc$translationsResources.nl", "OutSystemsUI.Utilities.PasswordPolicy.mvc$translationsResources.pt", "OutSystemsUI.Utilities.PasswordPolicy.mvc$translationsResources.pt-BR", "OutSystemsUI.Utilities.PasswordPolicy.mvc$translationsResources.zh-CN", "OutSystemsUI.Utilities.PasswordPolicy.mvc$translationsResources.zh-Hans", "OutSystemsUI.Utilities.PasswordPolicy.mvc$translationsResources.zh-Hant"], function (exports, OutSystemsUI_Utilities_PasswordPolicy_mvc_translationsResources_ar, OutSystemsUI_Utilities_PasswordPolicy_mvc_translationsResources_deDE, OutSystemsUI_Utilities_PasswordPolicy_mvc_translationsResources_en, OutSystemsUI_Utilities_PasswordPolicy_mvc_translationsResources_es, OutSystemsUI_Utilities_PasswordPolicy_mvc_translationsResources_frCA, OutSystemsUI_Utilities_PasswordPolicy_mvc_translationsResources_frFR, OutSystemsUI_Utilities_PasswordPolicy_mvc_translationsResources_hiIN, OutSystemsUI_Utilities_PasswordPolicy_mvc_translationsResources_itIT, OutSystemsUI_Utilities_PasswordPolicy_mvc_translationsResources_jaJP, OutSystemsUI_Utilities_PasswordPolicy_mvc_translationsResources_koKR, OutSystemsUI_Utilities_PasswordPolicy_mvc_translationsResources_nl, OutSystemsUI_Utilities_PasswordPolicy_mvc_translationsResources_pt, OutSystemsUI_Utilities_PasswordPolicy_mvc_translationsResources_ptBR, OutSystemsUI_Utilities_PasswordPolicy_mvc_translationsResources_zhCN, OutSystemsUI_Utilities_PasswordPolicy_mvc_translationsResources_zhHans, OutSystemsUI_Utilities_PasswordPolicy_mvc_translationsResources_zhHant) {
return {
"ar": {
"translations": OutSystemsUI_Utilities_PasswordPolicy_mvc_translationsResources_ar,
"isRTL": true
},
"de-DE": {
"translations": OutSystemsUI_Utilities_PasswordPolicy_mvc_translationsResources_deDE,
"isRTL": false
},
"en": {
"translations": OutSystemsUI_Utilities_PasswordPolicy_mvc_translationsResources_en,
"isRTL": false
},
"es": {
"translations": OutSystemsUI_Utilities_PasswordPolicy_mvc_translationsResources_es,
"isRTL": false
},
"fr-CA": {
"translations": OutSystemsUI_Utilities_PasswordPolicy_mvc_translationsResources_frCA,
"isRTL": false
},
"fr-FR": {
"translations": OutSystemsUI_Utilities_PasswordPolicy_mvc_translationsResources_frFR,
"isRTL": false
},
"hi-IN": {
"translations": OutSystemsUI_Utilities_PasswordPolicy_mvc_translationsResources_hiIN,
"isRTL": false
},
"it-IT": {
"translations": OutSystemsUI_Utilities_PasswordPolicy_mvc_translationsResources_itIT,
"isRTL": false
},
"ja-JP": {
"translations": OutSystemsUI_Utilities_PasswordPolicy_mvc_translationsResources_jaJP,
"isRTL": false
},
"ko-KR": {
"translations": OutSystemsUI_Utilities_PasswordPolicy_mvc_translationsResources_koKR,
"isRTL": false
},
"nl": {
"translations": OutSystemsUI_Utilities_PasswordPolicy_mvc_translationsResources_nl,
"isRTL": false
},
"pt": {
"translations": OutSystemsUI_Utilities_PasswordPolicy_mvc_translationsResources_pt,
"isRTL": false
},
"pt-BR": {
"translations": OutSystemsUI_Utilities_PasswordPolicy_mvc_translationsResources_ptBR,
"isRTL": false
},
"zh-CN": {
"translations": OutSystemsUI_Utilities_PasswordPolicy_mvc_translationsResources_zhCN,
"isRTL": false
},
"zh-Hans": {
"translations": OutSystemsUI_Utilities_PasswordPolicy_mvc_translationsResources_zhHans,
"isRTL": false
},
"zh-Hant": {
"translations": OutSystemsUI_Utilities_PasswordPolicy_mvc_translationsResources_zhHant,
"isRTL": false
}
};
});

