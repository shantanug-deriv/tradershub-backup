define("DerivLogger.appDefinition", ["@outsystems/runtime-core-js"], function(OSRuntimeCore) {
    var OS = OSRuntimeCore;
    return {
        environmentKey: "DUMMY_KEY",
        environmentName: "DUMMY_NAME",
        applicationKey: "f82f9453-1490-4d2f-af92-09c673f6ed5c",
        applicationName: "DerivLogger",
        userProviderName: "Users",
        debugEnabled: false,
        debugUseWebSockets: true,
        homeModuleName: "DerivLogger",
        homeModuleKey: "f82f9453-1490-4d2f-af92-09c673f6ed5c",
        homeModuleControllerName: "DerivLogger.controller",
        homeModuleLanguageResourcesName: "DerivLogger.languageResources",
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