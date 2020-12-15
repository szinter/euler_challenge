module.exports = {
    pythagoreon
}

function pythagoreon(n) {
    let product = -1;

    for (let a = 1; a <= n / 3; a++) {
        let b = Math.floor((n * n - 2 * n * a) / (2 * n - 2 * a));
        let c = n - a - b; 
        
        if (c*c === (a * a + b * b)) {
            let temp = a * b * c; 
            if (temp > product) {
                product = temp; 
            }
        }
    }

    return product;
}