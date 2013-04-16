steal('thirdparty/jasmine/jasmine-jquery.js', 'jquery/event/tapstart', function() {
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
    });
});