function loadScript(url, callback) {
    var script = document.createElement('script')
    script.onload = function() {
        if (callback) callback()
    }
    script.src = url
    document.head.appendChild(script)
}

// Usage to load the data-dog script
loadScript("https://www.datadoghq-browser-agent.com/us1/v5/datadog-rum.js", function() {
    window.DD_RUM && window.DD_RUM.init({
        clientToken: 'pub08554ab30284600af157441bfb0fa923',
        applicationId: '5c8975a3-ec86-4a64-8a3a-e6888fdde082',
        site: 'datadoghq.com',
        service: 'tradershub-os',
        env: 'production',
        version: '1.0.0',
        sessionSampleRate: 10,
        trackUserInteractions: true,
        trackResources: true,
        trackLongTasks: true,
        defaultPrivacyLevel: 'mask-user-input',
    });
})