const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  teamName = '';
  if (!Array.isArray(members)) return false;
  for (let member of members) {
    if (typeof(member)=='string') {
      member = member.trim();
      teamName += (member[0]);
    }
  }
  return teamName.toUpperCase().split('').sort().join('');
};
