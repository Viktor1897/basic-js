const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if ((typeof(sampleActivity)=='string') && (+sampleActivity>1) && (+sampleActivity<15)) {
    return Math.ceil((Math.log(MODERN_ACTIVITY/+sampleActivity))/(Math.LN2/HALF_LIFE_PERIOD));
  } else {
    return false;
  }
  
};
