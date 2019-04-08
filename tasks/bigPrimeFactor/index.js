const { bigPrimeFactor } = require('./bigPrimeFactor');
const { bigPrimeFactorRunner } = require('./runner');

module.exports = {
  bigPrimeFactor,
  run: bigPrimeFactorRunner
}