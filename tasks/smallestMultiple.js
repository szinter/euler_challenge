module.exports = {
    smallestMultiple
}

const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]

function smallestMultiple(n) {
    const parts = getPrimeFractals(n);
    const powParts = parts.map(_ => powerUp(_, n));
    return powParts.reduce((res, part) => part * res, 1);
}

function powerUp(base, limit) {
    let part = base;
    let pow = 1;

    while (Math.pow(base, pow) <= limit) {
        part = Math.pow(base, pow);
        pow++;
    }

    return part;
}

function getPrimeFractals(n) {
    let i = 0;
    while (i < primes.length && primes[i] <= n) {
        i++;
    }

    return primes.slice(0, i);
}