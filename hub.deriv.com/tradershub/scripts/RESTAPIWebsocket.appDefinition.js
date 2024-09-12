define("RESTAPIWebsocket.appDefinition", ["@outsystems/runtime-core-js"], function(OSRuntimeCore) {
    var OS = OSRuntimeCore;
    return {
        environmentKey: "DUMMY_KEY",
        environmentName: "DUMMY_NAME",
        applicationKey: "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017",
        applicationName: "REST API Websocket",
        userProviderName: "Users",
        debugEnabled: false,
        debugUseWebSockets: true,
        homeModuleName: "RESTAPIWebsocket",
        homeModuleKey: "7f8cebf7-cfdc-4d8e-b4dd-0ba14627b017",
        homeModuleControllerName: "RESTAPIWebsocket.controller",
        homeModuleLanguageResourcesName: "RESTAPIWebsocket.languageResources",
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
        appVersion: "90"
    };
});