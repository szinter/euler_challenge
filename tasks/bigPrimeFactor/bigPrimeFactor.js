module.exports = {
    bigPrimeFactor
}

const primes = [2, 3];

function bigPrimeFactor(n) {
    let biggestPrimeFactor = 0;

    if (isPrime(n)) {
        return n;
    }

    for (let i = 2; i <= Math.pow(n, 0.5); i++) {
        if (!(n % i)) {
            if (isPrime(n / i)) {
                biggestPrimeFactor = n / i;
            }
            else if (isPrime(i)) {
                biggestPrimeFactor = i;
            }
        }
    }

    primes.sort((a, b) => a-b);
    return biggestPrimeFactor;
}

function isPrime(n) {
    if (primes.indexOf(n) !== -1) 
        return true;

    if (Math.pow(n, 0.5) > primes[primes.length - 1]) {
        for (let i = primes[primes.length - 1]; i <= Math.pow(n, 0.5); i += 2) {
            if (!hasLowerPrimeFactor(i)) {
                primes.push(i);
            }
        };
    }

    if (!hasLowerPrimeFactor(n, Math.pow(n, 0.5))) {
        if (primes.indexOf(n) === -1) {
            primes.push(n);
        }

        return true;
    }

    return false;
}

function hasLowerPrimeFactor(n, limit) {
    let idx = 0;
    let res = false;

    while((idx < primes.length && !res) || (limit && limit <= primes[idx])) {
        res = res || !(n % primes[idx])
        idx++;
    }

    return res;
}