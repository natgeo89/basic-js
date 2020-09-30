const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

  const minMoves = calcMinMovesHanoe(disksNumber);

  const turnsSpeedPerSec = turnsSpeed / 3600;

  const time = Math.floor(minMoves / turnsSpeedPerSec);

  return { turns: minMoves, seconds: time}


};


function calcMinMovesHanoe (n) {
    
  if (n === 1) return 1;
  return calcMinMovesHanoe(n-1)*2+1;

}