const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = '';
  separator = String(options.separator || '+');
  repeatTimes = options.repeatTimes || 1;
  addition = ('addition' in options) ? String(options.addition) : '';
  additionRepeatTimes = options.additionRepeatTimes || 1;
  additionSeparator = String(options.additionSeparator || '|');

    for (let i=0;i<repeatTimes;i++) {
      result+=str;
      for (let j=0;j<additionRepeatTimes;j++) {
        result+=addition+additionSeparator;
      }
      if(additionSeparator!='') result = result.slice(0,'-'+additionSeparator.length);
      result += separator;
    }
    
    return result.slice(0,'-'+separator.length);
};
  