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
    window.location.replace('https://www.google.com');
}


// 禁止贴吧与B站
(() => {
    const referrer = document.referrer
    if (!referrer) {
        return
    }
    const referrerUrl = new URL(referrer);
    const referrerHost = referrerUrl.hostname;

    const isBilibili = /^([a-z0-9-]+\.)?bilibili\.com$/.test(referrerHost);
    const isTieba = /^tieba\.baidu\.com$/.test(referrerHost);

    console.log(isBilibili)
    console.log(isTieba);

    if (isBilibili || isTieba) {
        window.location.replace('https://www.google.com');
    }
})()



