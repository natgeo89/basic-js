const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

    constructor(){
        this.depth = 1;        
    }
    
    calculateDepth(arr) {

        if (arr.filter(item=> Array.isArray(item)).length === 0) return this.depth;

        const depthArray = [];
        arr.forEach(item => {
            if (Array.isArray(item)) {
                item.forEach(elem=>{
                    if (Array.isArray(elem)) depthArray.push(elem);                                   
                })
            }
        });

        if (depthArray.length === 0){
            this.depth++;
            const resultDepth = this.depth;
            this.depth = 1;            
            return resultDepth;  
        }        
        else {
            this.depth++;            
            return this.calculateDepth(depthArray); // не проходит тест на рекурсивность
        } 
    }
};

