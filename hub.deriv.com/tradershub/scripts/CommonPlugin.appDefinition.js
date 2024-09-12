define("CommonPlugin.appDefinition", ["@outsystems/runtime-core-js"], function(OSRuntimeCore) {
    var OS = OSRuntimeCore;
    return {
        environmentKey: "DUMMY_KEY",
        environmentName: "DUMMY_NAME",
        applicationKey: "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472",
        applicationName: "Common Plugin",
        userProviderName: "Users",
        debugEnabled: false,
        debugUseWebSockets: true,
        homeModuleName: "CommonPlugin",
        homeModuleKey: "8b0ceaeb-05b8-4921-bf46-e0d6c66e8472",
        homeModuleControllerName: "CommonPlugin.controller",
        homeModuleLanguageResourcesName: "CommonPlugin.languageResources",
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