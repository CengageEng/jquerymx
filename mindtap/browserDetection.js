define(function() {
    function isMobile(navigator) {
        //Really incomplete list of mobile devices
        var isIos = (/iP(ad|hone|od)/).test(navigator.platform);
        return isIos || (/Android|Opera Mini|IEMobile|BlackBerry/).test(navigator.userAgent);
    };

    return {
        isMobile: isMobile
    }
});