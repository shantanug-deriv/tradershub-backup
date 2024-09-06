require(["tslib"], function (tslib) {
require(["@outsystems/runtime-core-js", "PartnersHub.appDefinition", "@outsystems/runtime-core-js/debugger"], function (OSRuntimeCore, PartnersHubAppDefinition, NullDebugger) {
var OS = OSRuntimeCore;
if(OS.Navigation.ensureRequestSecurity()) {
return;
}

Promise.all([OS.Application.default.initialize(PartnersHubAppDefinition, OS.Interfaces.Application.InitializationType.Full, new OS.Format.DateTimeFormatInfo("yyyy-MM-dd", "HH:mm:ss"), new OS.Format.NumberFormatInfo(".", ""), function () {
return Promise.all(["scripts/PartnersHub.yupumd.js"].map(function (script) {
return OS.SystemActions.requireScript(script);
}));
}).then(function (success) {
if(success) {
function initGlobalExceptionHandler() {
return new Promise(function (resolve) {
require(["PartnersHub.Common.controller"], function (exceptionModule) {
OS.Application.default.registerDefaultErrorHandler(function () {
return function (error, callContext) {
return exceptionModule.default.handleError(error, callContext);
};
});
resolve();
});
});
}
function initView() {
return OS.Flow.promise(function (resolve, reject) {
require(["@outsystems/runtime-view-js"], function (OSView) {
try {OSView.Router.load(OS.Application.default);
resolve();
} catch (error) {
reject(error);
}

});
});
}
return initGlobalExceptionHandler().then(initView);
}

})]).catch(function (error) {
OS.ErrorHandling.handleError(error);
});
});
});
