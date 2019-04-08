module.exports = {
    biggestPalindrome
}

function biggestPalindrome(n) {
    let isPalindromeFound = false;
    let res = 101101;

    if (isPalindrome(n)) {
        return n;
    }

    for (let j = n; j > 101100 && !isPalindromeFound; j--) {
        if (isPalindrome(j)) {
            for (let i = 999; i > 142 && !isPalindromeFound; i--) {
                if (!(j % i) && ((j / i) + '').split('').length === 3) {
                    isPalindromeFound = true;
                    res = j;
                    console.log(i, j / i)
                }
            }
        }
    }

    return res;
}

function isPalindrome(n) {
    const nString = n + '';
    const nReversedString = nString.split('').reverse().join('');

    return nString === nReversedString;
}