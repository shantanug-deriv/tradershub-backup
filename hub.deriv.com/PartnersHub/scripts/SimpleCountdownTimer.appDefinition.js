define("SimpleCountdownTimer.appDefinition", ["@outsystems/runtime-core-js"], function(OSRuntimeCore) {
    var OS = OSRuntimeCore;
    return {
        environmentKey: "DUMMY_KEY",
        environmentName: "DUMMY_NAME",
        applicationKey: "7c686586-be98-4be4-b619-24e0e0505e97",
        applicationName: "Simple Countdown Timer",
        userProviderName: "Users",
        debugEnabled: false,
        debugUseWebSockets: true,
        homeModuleName: "SimpleCountdownTimer",
        homeModuleKey: "7c686586-be98-4be4-b619-24e0e0505e97",
        homeModuleControllerName: "SimpleCountdownTimer.controller",
        homeModuleLanguageResourcesName: "SimpleCountdownTimer.languageResources",
        defaultScreenName: "",
        defaultTransition: "SlideFromRight",
        errorPageConfig: {
            showExceptionStack: false
        },
        isWeb: true,
        personalArea: null,
        showWatermark: false,
        buildServiceVersion: "v17.1581.6.0",
        clientRuntimeVersion: "6.9.4",
        useESM: false,
        appVersion: "1"
    };
});