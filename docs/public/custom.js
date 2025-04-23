try {
    // 去除后缀 .html
    let pathname = location.pathname;
    if (pathname.endsWith(".html")) {
        location.pathname = pathname.substring(0, pathname.length - 5);
    }
} catch (_) {
}

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