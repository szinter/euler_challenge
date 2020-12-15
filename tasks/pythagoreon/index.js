const { pythagoreonRunner } = require('./runner');
const { pythagoreon } = require('./pythagoreon');

module.exports = {
    pythagoreon,
    run: pythagoreonRunner
}