const specs = {
  multiples : require('./utils/multiples-spec'),
  fib: require('./utils/fibonacci-spec'),
  isPalindrome: require('./utils/is-palindrome-spec.js'),
};


specs[process.env.TEST]();
