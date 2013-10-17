steal('thirdparty/jasmine-jquery/jasmine-jquery.js', 'jquery/event/tapstart', function() {
    describe('tapstart.js', function() {
        var element,
            called;
        beforeEach(function(){
            called = false;
            element = affix('#test-element');
            $(element).bind('tapstart', function(){
                called = true;
            });
        });

        xit('should call the handler when touchstart', function() {
            $(element).trigger('touchstart');
            expect(called).toBeTruthy();
        });

        it('should call the handler when mousedown', function() {
            $(element).trigger('mousedown');
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
    });
});
