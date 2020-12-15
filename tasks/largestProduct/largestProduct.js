module.exports = {
    largestProduct
}

function largestProduct(n, k) {
    return Math.max(...getProduct(getKparts(n, k)));
}

function getKparts(n, k) {
    const nString = n + '';
    const parts = [];
    if (k > ('' + n).length) {
        return n;
    }

    let start = 0;
    while (start + k <= nString.length) {
        parts.push(nString.substring(start, start + k));
        start++;
    }

    return parts;
}

function getProduct(collection) {
    return collection.map(_ => _.split('').reduce((res, m) => res * m, 1))
}