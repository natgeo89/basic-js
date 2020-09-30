const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (arguments.length === 0) return 'Unable to determine the time of year!';

  if (!(date instanceof Date)) throw new Error();

  console.log(date, typeof date);
  
  const month = date.getMonth();  
  
  if (month <= 1 || month === 11) return 'winter';
  if (month <= 4) return 'spring';
  if (month <= 7) return 'summer';
  if (month <= 10) return 'autumn';
  
}






