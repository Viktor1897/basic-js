const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  
  calculateDepth(arr, maxDepth = 1) {
    for (let i = 0; i<arr.length; i++) {
      if (Array.isArray(arr[i])) {
        let depth = this.calculateDepth(arr[i]) + 1;
        if (maxDepth<depth) maxDepth = depth;
      } 
      }
      return maxDepth;
    }
  
  };
 
