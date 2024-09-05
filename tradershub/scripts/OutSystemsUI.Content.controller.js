define("OutSystemsUI.Content.controller", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.Content.controller$translationsResources"], function (exports, OSRuntimeCore, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_Content_Controller_translationsResources) {
var OS = OSRuntimeCore;
var OutSystemsUI_ContentController = exports;
class Controller extends 
OS.Controller.BaseController {
getDefaultTimeout() {
return OutSystemsUIController.default.defaultTimeout;
}

get handleError() {if(!(this.hasOwnProperty("_handleError"))) {
this._handleError = function (ex, callContext) {
var controller = this.controller;
OS.Logger.debug("Content", OS.Exceptions.getMessage(ex));
var globalExceptionHandle = OS.Injector.resolve(OS.ServiceNames.GlobalExceptionHandler);
globalExceptionHandle(ex, callContext);
return OS.ErrorHandling.UNHANDLED_ERROR_RESULT;


};
}

return this._handleError;
}set handleError(value) {this._handleError = value;
}

}



OutSystemsUI_ContentController.default = new Controller(OutSystemsUI_Content_Controller_translationsResources);
});


define("OutSystemsUI.Content.controller$translationsResources", ["exports"], function (exports) {
return {};
});

