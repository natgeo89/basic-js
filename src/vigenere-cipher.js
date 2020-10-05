const CustomError = require("../extensions/custom-error");


const obj = {
  indexKey : 0
}

let {indexKey} = obj;

class VigenereCipheringMachine {
  constructor(isDirect = true){
    this.isDirect = isDirect;
    
  } 
  
  encrypt(str, options) {    
    if (!str || !options) throw new Error();

    str = str.toLowerCase();
    options = options.toLowerCase();    

    const strArray = str.split('');
    const optionsArray = options.split('');
    const alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const keyArray = [];
    const resultArray = [];

    strArray.forEach(item => {
        if (!alphabetArray.includes(item)) keyArray.push(item); 
        else  keyArray.push(nextChar(optionsArray));             
    });

    strArray.forEach((item, index) => {
        const indexSum = alphabetArray.indexOf(item) + alphabetArray.indexOf(keyArray[index]);

        if (!alphabetArray.includes(item)) resultArray.push(item); 

        else { 
            index = ( indexSum > (alphabetArray.length - 1) ) ? (indexSum - alphabetArray.length) : indexSum;
            resultArray.push(alphabetArray[index]);
        }           
    })
     
    indexKey = 0;

    if (!this.isDirect) return resultArray.reverse().join('').toUpperCase();
    return resultArray.join('').toUpperCase();
  }   

  decrypt(str, options) {
    if (!str || !options) throw new Error();
    
    str = str.toLowerCase();
    options = options.toLowerCase();    

    const strArray = str.split('');
    const optionsArray = options.split('');
    const alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const keyArray = [];
    const resultArray = [];

    strArray.forEach(item => {
        if (!alphabetArray.includes(item)) keyArray.push(item); 
        else  keyArray.push(nextChar(optionsArray));             
    });

    strArray.forEach((item, index) => {
        const indexCorrect = alphabetArray.indexOf(item) - alphabetArray.indexOf(keyArray[index]);
        
        if (!alphabetArray.includes(item)) resultArray.push(item); 

        else {
            index = ( indexCorrect < 0 ) ? ( alphabetArray.length + indexCorrect ) : indexCorrect;
            resultArray.push(alphabetArray[index]);
        }           
    })
     
    indexKey = 0;

    if (!this.isDirect) return resultArray.reverse().join('').toUpperCase();

    return resultArray.join('').toUpperCase();
  }
  
}



function nextChar (arr){
  if (indexKey === arr.length) indexKey = 0;
      
  const char = arr[indexKey];
  indexKey++;
  return char;
}

module.exports = VigenereCipheringMachine;
