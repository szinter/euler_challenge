module.exports = {
    max4Numbers
}
const MAX = 20
const MAXINDEX = MAX - 1;

function max4Numbers(matrix) {
    let max = 0;

    for (let i = 0; i <= MAXINDEX; i++) {
        for (let j = 0; j <= MAXINDEX; j++) {
            max = Math.max(max, getDiagonalRight(i, j, matrix), getDiagonalLeft(i, j, matrix), getHorizontal(i, j, matrix), getVertical(i, j, matrix));
        }
    }

    return max;
}

function getDiagonalRight(i, j, matrix) {
    if (i + 3 > MAXINDEX || j + 3 > MAXINDEX) {
        return 0;
    }

    return matrix[i][j] * matrix[i + 1][j + 1] * matrix[i + 2][j + 2] * matrix[i + 3][j + 3];
}

function getDiagonalLeft(i, j, matrix) {
    if (i + 3 > MAXINDEX || j - 3 < 0) {
        return 0;
    }

    return matrix[i][j] * matrix[i + 1][j - 1] * matrix[i + 2][j - 2] * matrix[i + 3][j - 3];
}

function getHorizontal(i, j, matrix) {
    if (j + 3 > MAXINDEX) {
        return 0;
    }

    return matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2] * matrix[i][j + 3];
}

function getVertical(i, j, matrix) {
    if (i + 3 > MAXINDEX) {
        return 0;
    }

    return matrix[i][j] * matrix[i + 1][j] * matrix[i + 2][j] * matrix[i + 3][j];
}