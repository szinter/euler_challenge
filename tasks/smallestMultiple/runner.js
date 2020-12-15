const { smallestMultiple } = require("./smallestMultiple");

module.exports = {
    smallestMultipleRunner
}

function smallestMultipleRunner() {
    const collection = [1, 2, 3, 4, 5, 7, 8, 9, 10, 6, 20, 40];

    for (n of collection) {
        console.log(n,' : ', smallestMultiple(n))
    }
}