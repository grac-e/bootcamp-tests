describe('the isFromBellville test', function () {
    it('should return true if a registration number is for Bellville, otherwise return false', function () {
        assert.equal(isFromBellville('CY 123'), true);
        assert.equal(isFromBellville('CJ 123'), false);
    });

});