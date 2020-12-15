const { summ53 } = require("./summ53");

module.exports = {
    summ53Runner
}

function summ53Runner() {
    const collection = [10, 100, 9999999999];

    for (n of collection) {
        console.log(summ53(n))
    }
}