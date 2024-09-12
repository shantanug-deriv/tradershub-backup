// Define your feature flags here and add them to the array
// example { name: "foo", enabled: true },
let FEATURE_FLAGS = [{
    name: "NewSignupUI",
    enabled: false
}]

if (location.hostname === "hub.deriv.com") {
    FEATURE_FLAGS = []
}

const _featureFlags = localStorage.getItem("featureFlags");

// Parse the stored feature flags if they exist
const savedFlags = _featureFlags ? JSON.parse(_featureFlags) : null;

// Condition to check if:
// 1. No flags are stored yet, OR
// 2. The number of flags have changed, OR
if (
    !savedFlags ||
    savedFlags.length !== FEATURE_FLAGS.length
) {
    // Filter the stored flags to remove any flags that no longer exist in FEATURE_FLAGS
    const filteredFeatureFlags = savedFlags ?
        savedFlags.filter(savedFlag =>
            FEATURE_FLAGS.some(flag => flag.name === savedFlag.name)
        ) : [];

    // Merge the feature flags, keeping values from saved flags when applicable
    const mergedFlags = FEATURE_FLAGS.map(newFlag => {
        const existingFlag = filteredFeatureFlags.find(flag => flag.name === newFlag.name);
        return {
            name: newFlag.name,
            enabled: existingFlag ? existingFlag.enabled : newFlag.enabled
        };
    });
    localStorage.setItem("featureFlags", JSON.stringify(mergedFlags));
}

globalThis.toggleFeatureFlag = function(flagName) {
    if (!flagName) return;

    const featureFlags = localStorage.getItem("featureFlags");

    if (!featureFlags) {
        location.reload();
        return;
    }
    const parsedFeatureFlags = JSON.parse(featureFlags);
    const updatedFlags = parsedFeatureFlags.map(flag =>
        flag.name === flagName ? {
            ...flag,
            enabled: !flag.enabled
        } : flag
    );

    localStorage.setItem("featureFlags", JSON.stringify(updatedFlags));
}