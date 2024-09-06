define("OutSystemsUI.Interaction.controller", ["exports", "@outsystems/runtime-core-js", "OutSystemsUI.model", "OutSystemsUI.controller", "OutSystemsUI.Interaction.controller$translationsResources"], function(exports, OSRuntimeCore, OutSystemsUIModel, OutSystemsUIController, OutSystemsUI_Interaction_Controller_translationsResources) {
    var OS = OSRuntimeCore;
    var OutSystemsUI_InteractionController = exports;
    class Controller extends
    OS.Controller.BaseController {
        getDefaultTimeout() {
            return OutSystemsUIController.default.defaultTimeout;
        }

        get handleError() {
            if (!(this.hasOwnProperty("_handleError"))) {
                this._handleError = function(ex, callContext) {
                    var controller = this.controller;
                    OS.Logger.debug("Interaction", OS.Exceptions.getMessage(ex));
                    var globalExceptionHandle = OS.Injector.resolve(OS.ServiceNames.GlobalExceptionHandler);
                    globalExceptionHandle(ex, callContext);
                    return OS.ErrorHandling.UNHANDLED_ERROR_RESULT;


                };
            }

            return this._handleError;
        }
        set handleError(value) {
            this._handleError = value;
        }

    }



    OutSystemsUI_InteractionController.default = new Controller(OutSystemsUI_Interaction_Controller_translationsResources);
});


define("OutSystemsUI.Interaction.controller$translationsResources", ["exports"], function(exports) {
    return {};
});