define("OutSystemsUI.Interaction.InputWithIcon.mvc$model", ["@outsystems/runtime-core-js", "OutSystemsUI.model"], function (OSRuntimeCore, OutSystemsUIModel) {
var OS = OSRuntimeCore;


{class VariablesRecordInner extends 
OS.DataTypes.GenericRecord {
static attributesToDeclare() {
return [
this.attr("AlignIconRight", "alignIconRightIn", "AlignIconRight", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_alignIconRightInDataFetchStatus", "_alignIconRightInDataFetchStatus", "_alignIconRightInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
if("AlignIconRight" in inputs) {
this.variables.alignIconRightIn = inputs.AlignIconRight;
if("_alignIconRightInDataFetchStatus" in inputs) {
this.variables._alignIconRightInDataFetchStatus = inputs._alignIconRightInDataFetchStatus;
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

define("OutSystemsUI.Interaction.InputWithIcon.mvc$view", ["@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.controller", "react", "@outsystems/runtime-view-js", "OutSystemsUI.Interaction.InputWithIcon.mvc$model", "OutSystemsUI.Interaction.InputWithIcon.mvc$controller", "@outsystems/runtime-widgets-js"], function (OSRuntimeCore, OutSystemsUIModel, OutSystemsUIController, React, OSView, OutSystemsUI_Interaction_InputWithIcon_mvc_model, OutSystemsUI_Interaction_InputWithIcon_mvc_controller, OSWidgets) {
    var OS = OSRuntimeCore;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;



    class View extends OSView.BaseView.BaseWebBlock {
        static get displayName() { return "Interaction.InputWithIcon"; }

        static getAttributes() { return {
codeFunction: "InputWithIcon",
functionKey: "1190fddf-d5b0-4a2d-8d23-355f086907fd",
functionOwnerName: "OutSystemsUI",
functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
screen: ""
}; }

        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css"];
        }

        static getJsDependencies() {
            return [];
        }

        static getBlocks() {
            return [];
        }

        get modelFactory() {
            return OutSystemsUI_Interaction_InputWithIcon_mvc_model;
        }

        get controllerFactory() {
            return OutSystemsUI_Interaction_InputWithIcon_mvc_controller;
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
style: model.getCachedValue(idService.getId("InputWithIconWrapper.Style"), function () {
return ((("input-with-icon" + ((!(model.variables.alignIconRightIn)) ? ("") : (" input-with-icon-right"))) + " ") + model.variables.extendedClassIn);
}, function () {
return model.variables.alignIconRightIn;
}, function () {
return model.variables.extendedClassIn;
}),
visible: true,
_idProps: {
service: idService,
name: "InputWithIconWrapper"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._alignIconRightInDataFetchStatus, model.variables._extendedClassInDataFetchStatus)
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.icon,
style: "input-with-icon-content-icon center ph",
_idProps: {
service: idService,
name: "Icon"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.input,
style: "input-with-icon-input",
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
define("OutSystemsUI.Interaction.InputWithIcon.mvc$controller", ["@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.languageResources", "OutSystemsUI.Interaction.InputWithIcon.mvc$translationsResources"], function (OSRuntimeCore, OutSystemsUIModel, OutSystemsUIController, OutSystemsUILanguageResources, OutSystemsUI_Interaction_InputWithIcon_mvc_TranslationsResources) {
var OS = OSRuntimeCore;
{class ControllerInner extends 
OS.Controller.BaseViewController {
constructor(model, messagesProvider, idService) {
super(model, messagesProvider, idService, OutSystemsUI_Interaction_InputWithIcon_mvc_TranslationsResources);
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


// Event Handler Actions
get onInitializeEventHandler() {if(!(this.hasOwnProperty("_onInitializeEventHandler"))) {
this._onInitializeEventHandler = null;
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
return OutSystemsUIController.default.defaultTimeout;
}

}

var Controller = ControllerInner;
// Server Actions - Variables

// Client Actions - Variables

}
return new OS.Controller.ControllerFactory(Controller, OutSystemsUILanguageResources);
});


define("OutSystemsUI.Interaction.InputWithIcon.mvc$translationsResources", ["exports"], function (exports) {
return {};
});

