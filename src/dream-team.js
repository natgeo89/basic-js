const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  let arrWithStringsOnly = members.filter(item => typeof item === 'string');

  let teamName = '';

  arrWithStringsOnly.map(item => item.trim().toUpperCase()).sort().forEach(element => teamName += element[0]);
  
  return teamName;
};
