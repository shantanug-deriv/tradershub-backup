define("OutSystemsUI.appDefinition", ["@outsystems/runtime-core-js"], function(OSRuntimeCore) {
    var OS = OSRuntimeCore;
    return {
        environmentKey: "DUMMY_KEY",
        environmentName: "DUMMY_NAME",
        applicationKey: "8be17f2a-431c-4958-b894-c77b988a7271",
        applicationName: "OutSystems UI",
        userProviderName: "Users",
        debugEnabled: false,
        debugUseWebSockets: true,
        homeModuleName: "OutSystemsUI",
        homeModuleKey: "8be17f2a-431c-4958-b894-c77b988a7271",
        homeModuleControllerName: "OutSystemsUI.controller",
        homeModuleLanguageResourcesName: "OutSystemsUI.languageResources",
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
        appVersion: "5"
    };
});