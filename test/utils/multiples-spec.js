module.exports = function () {
  'use strict';

  const expect = require('chai')
    .expect;
  const multiples = require('./utils')
    .multiples;


  describe('multiples()', function () {
    it('should return a function', function () {
      const result = multiples(3);

      expect(result)
        .to.be.a('function');
    });

    it('should return a generator object', function () {
      const result = multiples(3)(30)
        .next();

      expect(result)
        .to.include.keys('value', 'done');
    });

    it('should return proper yield values', function () {
      const multiplesOf3 = multiples(3)(30);

      let i = 3;
      for (const val of multiplesOf3) {
        expect(val)
          .to.equal(i);

        i += 3;
      }
    });

    it('should return proper yield values for multiple args', function () {
      const multiplesOf357 = multiples(3, 5, 7)(16);
      const mults = [3, 5, 6, 7, 9, 10, 12, 14, 15];

      mults.forEach(val => {
        const m = multiplesOf357
          .next()
          .value;

        expect(val)
          .to.equal(m);
      });
    });

    it('should not stop yielding values if no max is given', function () {
      const multsOf3 = multiples(3)();

      for (let i = 3; i < 1000000; i += 3) {
        expect(multsOf3.next()
            .value)
          .to.equal(i);
      }
    });
  });
};
