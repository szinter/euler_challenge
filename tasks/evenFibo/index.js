const { evenFibo } = require('./evenFibo');
const { evenFiboRunner } = require('./runner');

module.exports = {
  evenFibo,
  run: evenFiboRunner
}