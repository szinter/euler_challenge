const { evenFibo } = require('./evenFibo');

module.exports = {
  evenFiboRunner
}

function evenFiboRunner() {
  const collection = [10, 100, 1000, 100000, 1000000, 100000000000];

  for (n of collection) {
      console.log(`${evenFibo(n)}`)
  }
}