const { bigPrimeFactor } = require('./bigPrimeFactor');

module.exports = {
  bigPrimeFactorRunner
}

function bigPrimeFactorRunner() {
  const collection = [10, 17, 154, 184, 1000, 1000000000000];

  for (n of collection) {
      console.log(n,' : ', bigPrimeFactor(n))
  }
}