/**
 * Ma fonction addition
 * @param {Number|String} a Le 1er nombre
 * @param {Number|String} b Le 2e nombre
 * @returns {Number} La somme
 */
const addition = function (a, b) {
    return Number(a) + Number(b);
};

console.log(addition(1, 2));

for (let i = 0; i < 10; i++) {
    console.log(addition(i, 1));
}
