try {
    require(["tslib"], function(tslib) {
        require(["@outsystems/runtime-core-js", "RESTAPIWebsocket.appDefinition"], function(OSRuntimeCore, RESTAPIWebsocketAppDefinition) {
            var OS = OSRuntimeCore;
            OS.ErrorScreen.initializeErrorPage(RESTAPIWebsocketAppDefinition, OS.Application.default);
        });
    });
} catch (ex) {
    console.error(ex);
}