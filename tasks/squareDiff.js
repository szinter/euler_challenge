module.exports = {
    squareDiff
}

function squareDiff(n) {
    return Math.abs(getAddedSqueres(n) - getFsquers(n));
}

function getFsquers(n) {
    let res = 0;
    let i = n;

    while (i >= 0) {
        res += Math.pow(i, 2);
        i--;
    }

    return res;
}

function getAddedSqueres(n) {
    const sum = Object.keys((new Array(n).fill(0))).reduce((sum, r) => sum + Number(r) + 1, 0);

    return Math.pow(sum, 2);
}