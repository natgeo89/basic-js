const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (typeof str !=='string') str = String(str);
        
  let {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|'} = options;

  let additionResultString = '';

  if (typeof addition !== 'string') addition = String(addition);

  if ( additionRepeatTimes !== 1 ){    
    for ( let i = 1; i <= additionRepeatTimes; i++ ) {
      additionResultString += `${additionSeparator}${addition}`;
    }
    additionResultString = `${additionResultString.slice(additionSeparator.length)}`;            
  }

  else{
    additionResultString = addition;
  }   

  let resultString = '';

  if ( repeatTimes !==1 ) {
    for (let i = 1; i <= repeatTimes; i++){
      resultString += `${separator}${str}${additionResultString}`;        
    }
    resultString = `${resultString.slice(separator.length)}`;
  }

  else{
    resultString = `${str}${additionResultString}`;
  } 

  return resultString;  
};


  