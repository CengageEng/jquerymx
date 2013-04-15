steal('jquery/event/livehack').then(function($){
    function handleTapEnd(ev) {
        var delegate = ev.delegateTarget || ev.currentTarget,
            selector = ev.handleObj.selector,
            entered = this;
        $.each($.event.find(delegate, ['tapend'], selector), function(){
            this.call(entered, ev, {})
        });
    }

    if ('ontouchend' in document) {
        $.event.setupHelper( ['tapend'], 'touchend', handleTapEnd);
    }

    if (!(navigator.platform === "iPad" || navigator.platform === "iPad Simulator")) {
        $.event.setupHelper( ['tapend'], 'mouseup', handleTapEnd);
    }
});