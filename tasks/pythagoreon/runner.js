const { pythagoreon } = require("./pythagoreon");

module.exports = {
    pythagoreonRunner
}

function pythagoreonRunner() {
    const collection = [12, 4, 780];

    for (n of collection) {
        console.log(n,' : ', pythagoreon(n))
    }
}