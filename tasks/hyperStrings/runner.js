const { hyperStrings } = require('./hyperStrings');

module.exports = {
    hyperStringsRunner
}

function hyperStringsRunner() {
    const m = 3;
    const H = [
        'a',
        'ab'
    ]
    const res = hyperStrings(m, H);
    
    console.log(res);
}

