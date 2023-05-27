describe('The Apple packet price planner factory function', function() {

    it('should be able to get the price of the apples per box & get the number of the apples per box and returns the cost per apple', function() {
        const apple = appleApp();
        assert.equal(apple.costOfApple(20, 10), 2);
    });
})