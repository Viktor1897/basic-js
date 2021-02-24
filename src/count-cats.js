const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  cats = 0;
  for (let arr of matrix) {
    for (let element of arr) {
      if (element=='^^') cats++;
    }
  }
  return cats;
};
