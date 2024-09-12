define("CustomComponents.appDefinition", ["@outsystems/runtime-core-js"], function(OSRuntimeCore) {
    var OS = OSRuntimeCore;
    return {
        environmentKey: "DUMMY_KEY",
        environmentName: "DUMMY_NAME",
        applicationKey: "4ba8c4d5-5fe2-407e-a6bd-5a0385565b69",
        applicationName: "Custom Components",
        userProviderName: "Users",
        debugEnabled: false,
        debugUseWebSockets: true,
        homeModuleName: "CustomComponents",
        homeModuleKey: "4ba8c4d5-5fe2-407e-a6bd-5a0385565b69",
        homeModuleControllerName: "CustomComponents.controller",
        homeModuleLanguageResourcesName: "CustomComponents.languageResources",
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
        appVersion: "135"
    };
});