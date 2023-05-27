describe('The Apple packet price planner factory function', function() {
    it('should be able to get the price of the apples per box', function() {
        const apple = appleApp();
        assert.equal(apple.getAppleBoxPrice(20), 20);
    });

    it('should be able to get the number of the apples per box', function() {
        const apple = appleApp();
        assert.equal(apple.getNumberForApples(10), 10);
    });

    it('should be able to get the price of the apples per box & get the number of the apples per box and returns the cost per apple', function() {
        const apple = appleApp();
        apple.getAppleBoxPrice(20);
        apple.getNumberForApples(10);
        assert.equal(apple.costOfApple(), 2);
    });
})