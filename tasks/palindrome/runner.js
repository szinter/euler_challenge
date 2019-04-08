const { palindrome } = require('./palindrome');

module.exports = {
  palindromeRunner
}

function palindromeRunner() {
  const collection = ['race car', 'NOT a Palindrome', 'A man, a plan, a canal. Panama', '10001'];

  for (n of collection) {
      console.log(`${n} : ${palindrome(n)}`)
  }
}