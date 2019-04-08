module.exports = {
    evenFibo
}

function evenFibo(n) {
    return fibo(0n, 1n, BigInt(n), 0n);
}

function fibo(a1, a2, n, sum) {
    if (n === a2) {
        return sum + a2;
    } if (n < a2) {
        return sum;
    } else {
        sum += !(a2 % 2n) ? a2 : 0n ;
        return fibo(a2, a1 + a2, n, sum)
    }
}