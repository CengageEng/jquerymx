/**
 * @add jQuery.event.special
 */

steal('jquery/event/livehack', function($){
    function registerTapEventHelper(touchStartEvent) {
        $.event.setupHelper( ['dbltap'], touchStartEvent, function(ev){

            var delegate = ev.delegateTarget || ev.currentTarget,
                selector = ev.handleObj.selector,
                entered = this;

            var now = new Date().getTime();
            var lastTouch = $(this).data('lastTouch') || now + 1 /** the first time this will make delta a negative number */;
            var delta = now - lastTouch;

            if(delta < 500 && delta > 0){
                ev.preventDefault();
                $.each($.event.find(delegate, ['dbltap'], selector), function(){
                    if( !(ev.isPropagationStopped() || ev.isImmediatePropagationStopped()) ) {
                        this.call(entered, ev, {start : lastTouch, end: now});
                    }
                });
            }
            $(this).data('lastTouch', now);
        });

    }

    if ('ontouchend' in document) {
        registerTapEventHelper('touchend');
    }
});
