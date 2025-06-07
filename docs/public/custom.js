try {
    // 去除后缀 .html
    let pathname = location.pathname;
    if (pathname.endsWith(".html")) {
        location.pathname = pathname.substring(0, pathname.length - 5);
    }
} catch (_) {
}

// Google Analytics
window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}

gtag('js', new Date());
gtag('config', 'G-NDNNT54HQM');

// Clarity
(function (c, l, a, r, i, t, y) {
    c[a] = c[a] || function () {
        (c[a].q = c[a].q || []).push(arguments)
    };
    t = l.createElement(r);
    t.async = 1;
    t.src = "https://www.clarity.ms/tag/" + i;
    y = l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t, y);
})(window, document, "clarity", "script", "o07jsxp8so");


const getBrowserLanguage = () => {
    if (navigator.language) {
        return navigator.language.toLowerCase();
    }

    if (navigator.userLanguage) {
        return navigator.userLanguage.toLowerCase();
    }

    if (navigator.languages && navigator.languages.length > 0) {
        return navigator.languages[0].toLowerCase();
    }

    return 'en-us';
}


const isJapanese = () => {
    const lang = getBrowserLanguage();

    return lang.startsWith('ja') ||
        lang.includes('jp') ||
        lang === 'jpn';
};


if (isJapanese()) {
    window.href = 'https://www.google.com'
}
