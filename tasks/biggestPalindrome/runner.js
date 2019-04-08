const { biggestPalindrome } = require('./biggestPalindrome');

module.exports = {
  biggestPalindromeRunner
}

function biggestPalindromeRunner() {
  const collection = [101101, 998001, 444444, 777778];

  for (n of collection) {
      console.log(n,' : ', biggestPalindrome(n))
  }
}