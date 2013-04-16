steal('thirdparty/jasmine/jasmine-jquery.js').then('jquery/event/tapend', function() {
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

        xit('should call the handler when touchend', function() {
            $(element).trigger('touchend');
            expect(called).toBeTruthy();
        });

        it('should call the handler when mouseup', function() {
            $(element).trigger('mouseup');
            expect(called).toBeTruthy();
        });
    });
});