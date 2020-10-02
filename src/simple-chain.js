const CustomError = require("../extensions/custom-error");

const chainMaker = {  

  resultArray : [],

  getLength() {
    return this.resultArray.length;
  },
  addLink(value) {
    if (value === undefined) this.resultArray.push(`( )~~`);
    else this.resultArray.push(`( ${value} )~~`);    
    return this;
  },
  removeLink(position) {
    if (!this.resultArray[position-1] || !position){
      this.resultArray.length = 0;
      throw new Error();
    }
    this.resultArray.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.resultArray.reverse();
    return this;    
  },
  finishChain() {
    const resultString = this.resultArray.join('').slice(0, -2);
    this.resultArray.length = 0;    
    return resultString;
  }
};

module.exports = chainMaker;
