(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@outsystems/runtime-core-js')) :
        typeof define === 'function' && define.amd ? define('@outsystems/runtime-core-js/debugger', ['exports', '@outsystems/runtime-core-js'], factory) :
        (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.NullDebugger = {}, global.OSRuntimeCore));
})(this, (function(exports, runtimeCoreJs) {
    'use strict';

    var BreakpointType;
    (function(BreakpointType) {
        BreakpointType[BreakpointType["Normal"] = 0] = "Normal";
        BreakpointType[BreakpointType["AtFunctionReturn"] = 1] = "AtFunctionReturn";
        BreakpointType[BreakpointType["BetweenAssignments"] = 2] = "BetweenAssignments";
    })(BreakpointType || (BreakpointType = {}));

    class NullDebugger {
        startSession() {}
        endSession() {}
        getThreadStack(callContextId) {
            return null;
        }
        addBreakpoint(breakpointId) {}
        addBreakpoints(breakpointIds) {}
        allowBreakpointsFromModule(key) {}
        removeBreakpoint(breakpointId) {}
        clearBreakpoints() {}
        continue (callContextId) {}
        continueToHere(breakpointId, callContextId) {}
        stepInto(callContextId) {}
        stepOver(callContextId) {}
        stepOut(callContextId) {}
        pauseOnAllExceptions(isEnabled) {}
        evaluateVariable(callContextId, stackLevel, actionKey, variableKey, path, depth) {
            return null;
        }
        get version() {
            return 0;
        }
        isSessionActive() {
            return false;
        }
        isPausedOnException() {
            return false;
        }
        getExceptionMessage(callContextId) {
            return null;
        }
        getThreadStartName(callContextId) {
            return null;
        }
        initialize(waitForClient) {
            return Promise.resolve();
        }
        registerMetaInfo(variablesMapping) {}
        getRequestHeaders(callContextId) {
            return null;
        }
        processResponseHeaders(callContextId, headers) {}
        setThreadStartName(callContextId, threadStartName) {}
        push(breakpointIdStr, moduleName, elementName, elementType, callContextId, varBag) {}
        pop(breakpointIdStr, callContextId) {}
        handleFunctionCall(functionCaller, resultType, callContextId) {
            return functionCaller();
        }
        handleBreakpoint(breakpointIdStr, callContextId, breakpointType, extraInfo) {
            BreakpointType.Normal;
            return true;
        }
        handleException(error, callContextId) {}
        parse(breakpointIdStr) {
            return null;
        }
        get BreakpointType() {
            return BreakpointType;
        }
    }
    const Version = "6.18.8";
    runtimeCoreJs.VersionDefinition.registerPackage("client-runtime-core", Version);
    const globalObj = typeof window !== "undefined" ? window : global;
    globalObj.OutSystemsDebugger = new NullDebugger();

    exports.NullDebugger = NullDebugger;
    exports.Version = Version;

    Object.defineProperty(exports, '__esModule', {
        value: true
    });

}));