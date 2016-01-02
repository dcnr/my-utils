function multiples() {
  'use strict';

  const args = [];


  for (let i = 0; i < arguments.length; ++i) {
    args.push(arguments[i]);
  }
  args.sort((a, b) => a - b);

  function checkIfMultiple(i) {
    return args.some(v => {
      return i % v === 0;
    });
  }


  return function* (max) {
    max = max || +Infinity;

    for (let i = args[0]; i < max; ++i) {
      if (checkIfMultiple(i)) {
        yield i;
      }
    }
  };
}


module.exports = multiples;
