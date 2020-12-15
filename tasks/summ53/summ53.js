module.exports = {
    summ53
}

function summ53(n) {
    const bigN = BigInt(n);
    const a3 = (bigN - 1n) / 3n;
    const a5 = (bigN - 1n) / 5n;
    const a15 = (bigN - 1n) / 15n;
    const t3 = (a3 + 1n) * (a3 + 1n) / 2n - ((a3 + 1n) / 2n);
    const t5 = (a5 + 1n) * (a5 + 1n) / 2n - ((a5 + 1n) / 2n);
    const t15 = (a15 + 1n) * (a15 + 1n) / 2n - ((a15 + 1n) / 2n);

    const sum = t3 * 3n + t5 * 5n - t15 * 15n;
    
    return sum.toString();
}