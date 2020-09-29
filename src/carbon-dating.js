const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (arguments.length === 0 || typeof sampleActivity !== 'string') return false;

  const k = 0.693 / HALF_LIFE_PERIOD;

  const time = Math.ceil((MODERN_ACTIVITY / +sampleActivity) / k);
  
  if (!isFinite(time) || time < 22392) return false;

  return time;

};
