const { largestProduct } = require("./largestProduct");

module.exports = {
    largestProductRunner
}

function largestProductRunner() {
    const k = [5, 5];
    const collection = [3675356291, 2709360626];

    for (let i = 0; i < collection.length; i++) {
        console.log(collection[i], ' ', k[i], ' : ', largestProduct(collection[i], k[i]))
    }
}