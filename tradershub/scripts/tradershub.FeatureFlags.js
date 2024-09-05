// define your feature flags here
// add them to the array
const FEATURE_FLAGS = [
    {
        name: "foo",
        enabled: true
    },
    {
        name: "bar",
        enabled: true
    }
]

const NEW_FEATURE_FLAGS = [
    {
        name: "foo",
        enabled: false
    },
    {
        name: "bar",
        enabled: true
    },
    {
        name: "newFeature", 
        enabled: false
    }
]

const _featureFlags = localStorage.featureFlags

// check if flags are available and the length is different then append the 
if (_featureFlags && JSON.parse(_featureFlags).length !== FEATURE_FLAGS.length) {
    localStorage.setItem("featureFlags", JSON.stringify(FEATURE_FLAGS))
}

if (!_featureFlags) {
    localStorage.setItem("featureFlags", JSON.stringify(FEATURE_FLAGS))
}
