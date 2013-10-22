require([
    'jquery/jquery',
    'jquery/event/tapend/tapend'
], function() {
    describe('tapend.js', function() {
        var element,
            called;

        beforeEach(function(){
            called = false;
            element = affix('#test-element');
            $(element).bind('tapend', function(){
                called = true;
            });
        });

        function createEvent(eventName, immProp, prop) {
            var event = jQuery.Event(eventName);
            event.isImmediatePropagationStopped = function() {
                return immProp ? true : false;
            }
            event.isPropagationStopped = function() {
                return prop ? true : false;
            }
            return event;
        }

        it('should call the handler when mouseup', function() {
            $(element).trigger('mouseup');
            expect(called).toBeTruthy();
        });

        it('should not call the handler when stop propagation is called', function() {
            $(element).trigger(createEvent('mouseup', false, true));
            expect(called).toBeFalsy();
        });

        it('should call the handler when mouseup', function() {
            $(element).trigger(createEvent('mouseup', true, false));
            expect(called).toBeFalsy();
        });
    });
});
