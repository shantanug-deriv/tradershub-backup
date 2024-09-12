define("AppVersionCheck.appDefinition", ["@outsystems/runtime-core-js"], function(OSRuntimeCore) {
    var OS = OSRuntimeCore;
    return {
        environmentKey: "DUMMY_KEY",
        environmentName: "DUMMY_NAME",
        applicationKey: "36906aa4-e5d6-405a-90a9-2bfa6f35ea1b",
        applicationName: "AppVersionCheck",
        userProviderName: "Users",
        debugEnabled: false,
        debugUseWebSockets: true,
        homeModuleName: "AppVersionCheck",
        homeModuleKey: "36906aa4-e5d6-405a-90a9-2bfa6f35ea1b",
        homeModuleControllerName: "AppVersionCheck.controller",
        homeModuleLanguageResourcesName: "AppVersionCheck.languageResources",
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