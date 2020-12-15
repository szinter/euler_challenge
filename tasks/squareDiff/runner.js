const { squareDiff } = require("./squareDiff");

module.exports = {
    squareDiffRunner
}

function squareDiffRunner() {
    const collection = [1, 3, 10, 40];

    for (n of collection) {
        console.log(n,' : ', squareDiff(n))
    }
}