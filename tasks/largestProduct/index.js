const { largestProductRunner } = require('./runner');
const { largestProduct } = require('./largestProduct');

module.exports = {
    largestProduct,
    run: largestProductRunner
}