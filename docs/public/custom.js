/**
 * 禁止日语浏览器
 */
const japaneseHandle = () => {
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
        gotoGoogle()
    }
}

/**
 * 转到Google
 */
let gotoGoogle = () => {
    window.location.replace('https://www.google.com')
}

/**
 * 黑名单
 */
const referrerHandle = () => {
    let referrer = document.referrer
    if (!referrer) {
        return
    }
    const referrerUrl = new URL(referrer);
    const referrerHost = referrerUrl.hostname

    const blacklist = ['bilibili.com', 'baidu.com', 'csdn.net']

    for (let host of blacklist) {
        if (referrerHost === host) {
            gotoGoogle()
        }

        if (referrerHost.endsWith('.' + host)) {
            gotoGoogle()
        }
    }
}

/**
 * Google Analytics
 */
const googleAnalyticsHandle = () => {
    window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }

    gtag('js', new Date());
    gtag('config', 'G-NDNNT54HQM');
}

/**
 * Clarity
 */
const clarityHandle = () => {
    ((c, l, a, r, i, t, y) => {
        c[a] = c[a] || function () {
            (c[a].q = c[a].q || []).push(arguments)
        };
        t = l.createElement(r);
        t.async = 1;
        t.src = "https://www.clarity.ms/tag/" + i;
        y = l.getElementsByTagName(r)[0];
        y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", "o07jsxp8so");
}

/**
 * init
 */
(() => {
    try {
        // 去除后缀 .html
        let pathname = location.pathname;
        if (pathname.endsWith(".html")) {
            location.pathname = pathname.substring(0, pathname.length - 5);
            return
        }
    } catch (_) {
    }
    japaneseHandle()
    referrerHandle()
    clarityHandle()
    googleAnalyticsHandle()
})()
