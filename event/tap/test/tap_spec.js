require([
    'thirdparty/jasmine-jquery/jasmine-jquery',
    'jquery/event/tap/tap'
], function() {
    describe('tap.js', function() {
        var element,
            called;
        beforeEach(function(){
            called = false;
            element = affix('#test-element');
            $(element).bind('tap', function(){
                called = true;
            });
        });

        function createEvent(eventName, x, y, immProp, prop) {
            var event = jQuery.Event(eventName);
            event.isImmediatePropagationStopped = function() {
                return immProp ? true : false;
            }
            event.isPropagationStopped = function() {
                return prop ? true : false;
            }
            event.originalEvent = {};
            event.pageX = x;
            event.pageY = y;
            return event;
        }

        xit('should call the handler when touch events', function() {
            $(element).trigger(createEvent("touchstart", 100, 100));
            $(element).trigger(createEvent("touchend", 100, 100));
            expect(called).toBeTruthy();
        });

        it('should call the handler when mouse events', function() {
            $(element).trigger(createEvent("mousedown", 100, 100));
            $(element).trigger(createEvent("mouseup", 100, 100));
            expect(called).toBeTruthy();
        });

        it('should not call the handler when propagation has been stopped', function() {
            $(element).trigger(createEvent("mousedown", 100, 100, false, true));
            $(element).trigger(createEvent("mouseup", 100, 100));
            expect(called).toBeFalsy();
        });

        it('should not call the handler when immediate propagation has been stopped', function() {
            $(element).trigger(createEvent("mousedown", 100, 100, true, false));
            $(element).trigger(createEvent("mouseup", 100, 100));
            expect(called).toBeFalsy();
        });

        it('should take 3 seconds to do something just to see if this helps with testswarm', function() {
          var done = false;
          runs(function() {
            setTimeout(function() {
              done = true;
            }, 3 * 1000);
          });

          waitsFor(function() {
            return done === true;
          });
        });

        it('should take another 3 seconds to do something just to see if this helps with testswarm', function() {
          var done = false;
          runs(function() {
            setTimeout(function() {
              done = true;
            }, 3 * 1000);
          });

          waitsFor(function() {
            return done === true;
          });
        });
    });
});
