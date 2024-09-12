define("BrowserConsoleLogging.appDefinition", ["@outsystems/runtime-core-js"], function(OSRuntimeCore) {
    var OS = OSRuntimeCore;
    return {
        environmentKey: "DUMMY_KEY",
        environmentName: "DUMMY_NAME",
        applicationKey: "7f7c3cd2-279d-4fb8-b978-c1ee91ff0d4f",
        applicationName: "Browser Console Logging",
        userProviderName: "Users",
        debugEnabled: false,
        debugUseWebSockets: true,
        homeModuleName: "BrowserConsoleLogging",
        homeModuleKey: "7f7c3cd2-279d-4fb8-b978-c1ee91ff0d4f",
        homeModuleControllerName: "BrowserConsoleLogging.controller",
        homeModuleLanguageResourcesName: "BrowserConsoleLogging.languageResources",
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