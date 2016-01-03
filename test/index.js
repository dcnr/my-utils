const specs = {
  multiples : require('./utils/multiples-spec'),
  fib: require('./utils/fibonacci-spec'),
  isPalindrome: require('./utils/is-palindrome-spec.js'),
  isPrime: require('./utils/is-prime-spec'),
};


specs[process.env.TEST]();
