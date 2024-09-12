define("QuillIcons.appDefinition", ["@outsystems/runtime-core-js"], function(OSRuntimeCore) {
    var OS = OSRuntimeCore;
    return {
        environmentKey: "DUMMY_KEY",
        environmentName: "DUMMY_NAME",
        applicationKey: "1bb28e51-8209-4c1b-a978-5f53cf4a47e8",
        applicationName: "Quill Icons",
        userProviderName: "Users",
        debugEnabled: false,
        debugUseWebSockets: true,
        homeModuleName: "QuillIcons",
        homeModuleKey: "1bb28e51-8209-4c1b-a978-5f53cf4a47e8",
        homeModuleControllerName: "QuillIcons.controller",
        homeModuleLanguageResourcesName: "QuillIcons.languageResources",
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
        appVersion: "8"
    };
});