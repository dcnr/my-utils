module.exports = function () {
  'use strict';

  const expect = require('chai')
    .expect;
  const isPalindrome = require('./utils')
    .isPalindrome;


  describe('isPalindrome()', function () {
    it('should return a boolean value', function () {
      const result = isPalindrome();

      expect(result)
        .to.be.a('boolean');
    });

    // jshint -W030
    it('should check if a given value is a palindrome', function () {
      let result = isPalindrome(9009009);
      expect(result)
        .to.be.true;

      result = isPalindrome('eye');
      expect(result)
        .to.be.true;

      result = isPalindrome(12345);
      expect(result)
        .to.be.false;

      result = isPalindrome('hello');
      expect(result)
        .to.be.false;
    });
  });
};
