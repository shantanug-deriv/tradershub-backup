if (typeof navigator !== "undefined" && "serviceWorker" in navigator && !(/OutSystemsApp/i).test(navigator.userAgent)) {
    navigator.serviceWorker.register("sw.js");
}