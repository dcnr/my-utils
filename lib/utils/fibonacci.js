function* fib(nth) {
  'use strict';
  nth = nth || +Infinity;

  yield 1;
  for (let i = 1, p = 0, c = 1, r = 1; i < nth; r = p + c, i++) {
    p = c;
    c = r;
    yield r;
  }
}


module.exports = fib;
