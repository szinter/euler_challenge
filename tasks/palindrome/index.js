const { palindrome } = require('./palindrome');
const { palindromeRunner } = require('./runner');

module.exports = {
  palindrome,
  run: palindromeRunner
}