define("ConsoleLogMessages.appDefinition", ["@outsystems/runtime-core-js"], function(OSRuntimeCore) {
    var OS = OSRuntimeCore;
    return {
        environmentKey: "DUMMY_KEY",
        environmentName: "DUMMY_NAME",
        applicationKey: "c9323f2b-8a7e-4637-a0c1-89fe796c535c",
        applicationName: "Console Log Messages",
        userProviderName: "Users",
        debugEnabled: false,
        debugUseWebSockets: true,
        homeModuleName: "ConsoleLogMessages",
        homeModuleKey: "c9323f2b-8a7e-4637-a0c1-89fe796c535c",
        homeModuleControllerName: "ConsoleLogMessages.controller",
        homeModuleLanguageResourcesName: "ConsoleLogMessages.languageResources",
        defaultScreenName: "",
        defaultTransition: "SlideFromRight",
        errorPageConfig: {
            showExceptionStack: false
        },
        isWeb: true,
        personalArea: null,
        showWatermark: false,
        buildServiceVersion: "v17.1581.3.0",
        clientRuntimeVersion: "6.9.4",
        useESM: false,
        appVersion: "1"
    };
});