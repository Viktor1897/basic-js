const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
 let transformedArr = [];
  if (!Array.isArray(arr)) throw Exception("The argument is not an array");

  for (let i = 0; i < arr.length; i++) {
//[1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]
    switch (arr[i]) {
      case '--discard-prev': if(i>0) transformedArr.pop();
        break;
      case '--discard-next': if(i+1<arr.length) {
        transformedArr.push('undefined');
        i++;
      }
        break;
      case '--double-next': if(i+1<arr.length) transformedArr.push(arr[i+1]);
        break;
      case '--double-prev': if(i>0 && transformedArr[transformedArr.length-1]!='undefined') transformedArr.push(arr[i-1]);
        break;
      default: transformedArr.push(arr[i]);
        break;
    }
  }

  return transformedArr.filter(elem=>elem!='undefined');
};
