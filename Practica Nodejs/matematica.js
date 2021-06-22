const Math = {};

function add(x1, x2) {
    return x1 + x2;

}

function substract(x1, x2) {
    return x1 - x2;
}


function multipy(x1, x2) {
    return x1 * x2;
}


function divide(x1, x2) {
    if (x2 == 0) {
        console.log("No se dividir por 0")
    } else {
        return x1 / x2
    }


}

//     IMPORTAR ENTRE JS. PART1

// exports.add = add;
// exports.substract = substract;
// exports.multipy = multipy;
// exports.divide = divide;

// Importar js PART2

Math.add = add;
Math.substract = substract;
Math.multipy = multipy;
Math.divide = divide;

module.exports = Math;