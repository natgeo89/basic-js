const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw new Error();

    let copyArr = [...arr]; 

    copyArr.forEach((item, index) => {

        switch (item)  {
            case '--discard-next': 
                if (index === copyArr.length-1) copyArr.splice(index, 1, null);
                else copyArr.splice(index, 2, null, null);
                break;            

            case '--discard-prev':
                if (index === 0) copyArr.splice(index, 1, null);
                else copyArr.splice(index-1, 2, null, null);
                break;            

            case '--double-next':
                if (index === copyArr.length-1) copyArr.splice(index, 1, null);
                else copyArr[index] = copyArr[index+1];
                break;     
            
            case '--double-prev':                
                if (index === 0) copyArr.splice(index, 1 , null);
                else copyArr[index] = copyArr[index-1];
                break;      
        }
    }) 

    let resultArr = copyArr.filter( item => item !== null ) 

    return resultArr;

  };



