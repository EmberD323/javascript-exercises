const sumAll = function(numA,numB) {
    let integersSummed = 0;
    if((numA>=0 && numB>=0) && Number.isInteger(numA)&& Number.isInteger(numB)) {
        // && typeof numB ==='number'
        if (numB>numA){ 
            for(i=numA;numB>=i;i++){
                integersSummed += i;
                
            }
        }
        else if (numA>numB){ 
            for(i=numB;numA>=i;i++){
                integersSummed += i;
                
            }
        }
        else if(numA==numB||numA == 0||numB ==0){
            if (numB ==0){integersSummed = numA;}
            else {integersSummed = numB;}

        }
        return integersSummed
    }
    else{
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
