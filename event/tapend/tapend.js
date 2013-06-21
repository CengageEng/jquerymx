define(['jquery/event/livehack/livehack', 'jquery/mindtap/browserDetection'], function($, browser){
    function handleTapEnd(ev) {
        var delegate = ev.delegateTarget || ev.currentTarget,
            selector = ev.handleObj.selector,
            entered = this;
        $.each($.event.find(delegate, ['tapend'], selector), function(){
            if( !(ev.isPropagationStopped() || ev.isImmediatePropagationStopped()) ) {
                this.call(entered, ev, {});
            }
        });
    }

    if ('ontouchend' in document) {
        $.event.setupHelper( ['tapend'], 'touchend', handleTapEnd);
    }

    if (!browser.isMobile(window.navigator)) {
        $.event.setupHelper( ['tapend'], 'mouseup', handleTapEnd);
    }
});