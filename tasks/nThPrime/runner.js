const { nThPrime } = require("./nThPrime");

module.exports = {
    nThPrimeRunner
}

function nThPrimeRunner() {
    const collection = [1, 3, 10, 400, 10000];

    for (n of collection) {
        console.log(n,' : ', nThPrime(n))
    }
}