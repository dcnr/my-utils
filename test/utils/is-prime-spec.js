module.exports = function () {
  'use strict';

  const expect = require('chai')
    .expect;
  const isPrime = require('./utils')
    .isPrime;


  describe('isPrime()', function () {
    it('should return a boolean value', function () {
      const result = isPrime(1);

      expect(result)
        .to.be.a('boolean');
    });

    // jshint -W030
    it('should check if a given number n is a prime number', function () {
      let result = isPrime(13);
      expect(result)
        .to.be.true;

      result = isPrime(100);
      expect(result)
        .to.be.false;
    });
  });
};
