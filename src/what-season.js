const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date = '') {
  if (!date) return 'Unable to determine the time of year!';
  let month = date.getUTCMonth();
  if (month < 2 || month > 10) {
    return 'winter';
  } else if (month < 5) {
    return 'spring';
  } else if (month < 8) {
    return 'summer';
  } else {
    return 'fall';
  } 
};
