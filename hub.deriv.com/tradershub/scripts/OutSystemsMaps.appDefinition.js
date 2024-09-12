define("OutSystemsMaps.appDefinition", ["@outsystems/runtime-core-js"], function(OSRuntimeCore) {
    var OS = OSRuntimeCore;
    return {
        environmentKey: "DUMMY_KEY",
        environmentName: "DUMMY_NAME",
        applicationKey: "95bb31d1-f079-4fd6-ab2e-5c8326855aaa",
        applicationName: "OutSystems Maps",
        userProviderName: "Users",
        debugEnabled: false,
        debugUseWebSockets: true,
        homeModuleName: "OutSystemsMaps",
        homeModuleKey: "95bb31d1-f079-4fd6-ab2e-5c8326855aaa",
        homeModuleControllerName: "OutSystemsMaps.controller",
        homeModuleLanguageResourcesName: "OutSystemsMaps.languageResources",
        defaultScreenName: "",
        defaultTransition: "Fade",
        errorPageConfig: {
            showExceptionStack: false
        },
        isWeb: true,
        personalArea: null,
        showWatermark: false,
        buildServiceVersion: "v17.1581.6.0",
        clientRuntimeVersion: "6.9.4",
        useESM: false,
        appVersion: "2"
    };
});