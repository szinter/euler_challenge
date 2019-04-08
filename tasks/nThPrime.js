module.exports = {
    nThPrime
}
const primes = [2, 3, 5, 7]
function nThPrime(n) {
    return primes.length >= n ? primes[n - 1] : getNprime(n);
}

function getNprime(n) {
    let start = primes[primes.length - 1];

    while (primes.length <= n) {
        if (isPrime(start) && primes.indexOf(start) === -1) {
            primes.push(start);
        }

        start += 2;
    }

    return primes[n - 1];
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
