describe('the greet test', function () {
    it('should greet your neighbour', function () {
        assert.equal(greet('Janine'), 'Hello, Janine');
    });
    it('should ask to enter name if there is no name ', function () {
        assert.equal(greet(''), 'please enter name');
    });

});