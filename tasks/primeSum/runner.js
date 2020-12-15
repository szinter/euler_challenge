const { primeSum } = require("./primeSum");

module.exports = {
    primeSumRunner
}

function primeSumRunner() {
    const collection = [5, 10, 1000000];

    for (n of collection) {
        console.log(n,' : ', primeSum(n))
    }
}