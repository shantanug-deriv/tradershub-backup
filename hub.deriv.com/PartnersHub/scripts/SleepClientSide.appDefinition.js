define("SleepClientSide.appDefinition", ["@outsystems/runtime-core-js"], function(OSRuntimeCore) {
    var OS = OSRuntimeCore;
    return {
        environmentKey: "DUMMY_KEY",
        environmentName: "DUMMY_NAME",
        applicationKey: "3d61746a-11af-4a48-8f6c-ad4a5143a923",
        applicationName: "Sleep Client Side",
        userProviderName: "Users",
        debugEnabled: false,
        debugUseWebSockets: true,
        homeModuleName: "SleepClientSide",
        homeModuleKey: "3d61746a-11af-4a48-8f6c-ad4a5143a923",
        homeModuleControllerName: "SleepClientSide.controller",
        homeModuleLanguageResourcesName: "SleepClientSide.languageResources",
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