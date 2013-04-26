steal('jquery/event/livehack').then(function($){
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

    if (!(navigator.platform === "iPad" || navigator.platform === "iPad Simulator")) {
        $.event.setupHelper( ['tapstart'], 'mousedown', handleTapStart);
    }
});