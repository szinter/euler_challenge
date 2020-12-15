const { primeSumRunner } = require('./runner');
const { primeSum } = require('./primeSum');

module.exports = {
    primeSum,
    run: primeSumRunner
}