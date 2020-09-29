const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return matrix.flat().reduce((accum, item) => {
    return accum = (item === '^^')? accum + 1 : accum; 
  },0)
};
