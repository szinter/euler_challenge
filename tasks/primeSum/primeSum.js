module.exports = {
    primeSum
}

const primes = [2, 3]

function primeSum(n) {
    let primesUnderN;

    if (n > primes[primes.length -1]) {
        primesUnderN = getNewPrimesUnderN(n);
    } else {
        primesUnderN = getPrimesUnderN(n);
    }

    return primesUnderN.reduce((sum, n) => n + sum, 0);
}

function isPrime(q) {
    let isSquer = true;

    for (let i = 0; isSquer && primes[i] <= Math.pow(q, 0.5); i++) {
        if (!(q % primes[i])) {
            isSquer = false;
        }
    }

    return isSquer;
}

function getNewPrimesUnderN(n) {
    let next = primes[primes.length -1];

    while (primes[primes.length -1] <= n) {
        next +=2;

        if (isPrime(next)) {
            primes.push(next);
        }
    }

    return primes.slice(0, primes.length -1)
}

function getPrimesUnderN(n) {
    let max = primes.length - 1;

    while (n < primes[max]) {
        max--;
    }

    return primes.slice(0, max + 1);
}