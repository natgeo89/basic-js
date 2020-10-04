const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (!sampleActivity || typeof sampleActivity !== 'string' || +sampleActivity <= 0 || +sampleActivity >= 8) return false;

  const k = 0.693 / HALF_LIFE_PERIOD;

  const time = Math.ceil((MODERN_ACTIVITY / +sampleActivity) / k);
  
  if (!isFinite(time)) return false;

  return time;

};
