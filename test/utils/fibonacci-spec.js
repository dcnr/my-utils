module.exports = function () {
  'use strict';

  const expect = require('chai')
    .expect;
  const fib = require('./utils')
    .fib;


  describe('fib()', function () {
    it('should yield each fibonacci number up to nth fib', function () {
      const sequence = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
      const fib_10 = fib(10);

      sequence.forEach(v => {
        const f = fib_10
          .next()
          .value;

        expect(v)
          .to.equal(f);
      });
    });

    it('should not stop yielding if not given an argument', function () {
      const expected = 2880067194370816120;
      let result = 0;
      const f = fib();

      for (let i = 0; i < 90; ++i) {
        result = f
          .next()
          .value;
      }

      expect(result)
        .to.equal(expected);
    });
  });
};
