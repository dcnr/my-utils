function isPrime(n) {
  'use strict';


  //
  // IN THIS FUNCTION:
  // HORRIBLE TRIAL DIVISION
  //

  let max = Math.sqrt(n);

  for (let i = 2; i <= max; ++i) {
    if (i % 2 === 0) {
      continue;
    }

    let x = n / i;

    if (parseInt(x, 10) === x) {
      return false;
    }
  }

  return true;
}


module.exports = isPrime;
