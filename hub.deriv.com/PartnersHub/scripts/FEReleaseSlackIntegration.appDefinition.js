define("FEReleaseSlackIntegration.appDefinition", ["@outsystems/runtime-core-js"], function(OSRuntimeCore) {
    var OS = OSRuntimeCore;
    return {
        environmentKey: "DUMMY_KEY",
        environmentName: "DUMMY_NAME",
        applicationKey: "a2d61d89-2946-438d-b8c1-955f6fecdf83",
        applicationName: "FEReleaseSlackIntegration",
        userProviderName: "Users",
        debugEnabled: false,
        debugUseWebSockets: true,
        homeModuleName: "FEReleaseSlackIntegration",
        homeModuleKey: "a2d61d89-2946-438d-b8c1-955f6fecdf83",
        homeModuleControllerName: "FEReleaseSlackIntegration.controller",
        homeModuleLanguageResourcesName: "FEReleaseSlackIntegration.languageResources",
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
        appVersion: "3"
    };
});