function isPalindrome(src) {
  'use strict';

  const reversed = String(src)
    .split('')
    .reverse()
    .join('');

  return String(src) === reversed;
}


module.exports = isPalindrome;
