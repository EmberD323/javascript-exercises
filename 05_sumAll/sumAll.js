const sumAll = function(numA,numB) {
    let integersSummed = 0;
    if (numB>numA){ //4>1 == true
        for(i=numA;numB>=i;i++){
            integersSummed += i;
            
        }
    }
    else if (numA>numB){ 

    }
    else if(numA==numB){

    }
    return integersSummed
};

// Do not edit below this line
module.exports = sumAll;
