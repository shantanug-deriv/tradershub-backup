// Function to create and append a link element
function addLinkElement(rel, href, crossorigin = null) {
    const link = document.createElement('link');
    link.rel = rel;
    link.href = href;

    if (crossorigin) {
        link.crossOrigin = crossorigin;
    }

    document.head.appendChild(link);
}

// Preconnect to Google Fonts domains
addLinkElement('preconnect', 'https://fonts.googleapis.com');
addLinkElement('preconnect', 'https://fonts.gstatic.com', 'anonymous');

// Load the Google Fonts stylesheet
addLinkElement('stylesheet', 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');