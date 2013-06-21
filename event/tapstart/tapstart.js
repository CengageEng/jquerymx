define(['jquery/event/livehack/livehack', 'jquery/mindtap/browserDetection'], function($, browser){
    function handleTapStart(ev) {
        var delegate = ev.delegateTarget || ev.currentTarget,
            selector = ev.handleObj.selector,
            entered = this;
        $.each($.event.find(delegate, ['tapstart'], selector), function(){
            if( !(ev.isPropagationStopped() || ev.isImmediatePropagationStopped()) ) {
                this.call(entered, ev, {});
            }
        });
    }

    if ('ontouchstart' in document) {
        $.event.setupHelper( ['tapstart'], 'touchstart', handleTapStart);
    }

    if (!browser.isMobile(window.navigator)) {
        $.event.setupHelper( ['tapstart'], 'mousedown', handleTapStart);
    }
});