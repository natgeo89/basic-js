const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isDirect = true){
    this.isDirect = isDirect;
    this.indexKey = 0;
  } 

  encrypt(str, options) {        
    return this.cryptAndDecrypt(str, options, 'encrypt');
  }   

  decrypt(str, options) { 
    return this.cryptAndDecrypt(str, options, 'decrypt');
  } 

  cryptAndDecrypt (str, options, cryptOrDecrypt){
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
        else  keyArray.push(nextChar.call(this, optionsArray));             
    });
    
    switch (cryptOrDecrypt) {

      case ('encrypt') :
        strArray.forEach((item, index) => {
            const indexSum = alphabetArray.indexOf(item) + alphabetArray.indexOf(keyArray[index]);
    
            if (!alphabetArray.includes(item)) resultArray.push(item); 
    
            else { 
                index = ( indexSum > (alphabetArray.length - 1) ) ? (indexSum - alphabetArray.length) : indexSum;
                resultArray.push(alphabetArray[index]);
            }           
        })
        break;

      case ('decrypt') :
        strArray.forEach((item, index) => {
            const indexCorrect = alphabetArray.indexOf(item) - alphabetArray.indexOf(keyArray[index]);
            
            if (!alphabetArray.includes(item)) resultArray.push(item); 
    
            else {
                index = ( indexCorrect < 0 ) ? ( alphabetArray.length + indexCorrect ) : indexCorrect;
                resultArray.push(alphabetArray[index]);
            }           
        })
        break;
    }       
    this.indexKey = 0;

    if (!this.isDirect) return resultArray.reverse().join('').toUpperCase();
    return resultArray.join('').toUpperCase();
  }
}

function nextChar(arr){  

  if (this.indexKey === arr.length) this.indexKey = 0;        

  const char = arr[this.indexKey];
  this.indexKey++;
  return char;
}

module.exports = VigenereCipheringMachine;
