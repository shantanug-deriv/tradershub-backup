const iframe = document.createElement('iframe');

let url;

if (window.location.hostname === "hub.deriv.com") {
    url = `https://app.deriv.com/localstorage-sync.html`
} else {
    url = `https://staging-app.deriv.com/localstorage-sync.html`
}


iframe.id = 'localstorage-sync';
iframe.src = url;
iframe.style.visibility = 'hidden';
iframe.setAttribute('sandbox', 'allow-same-origin allow-scripts');

document.body.appendChild(iframe);