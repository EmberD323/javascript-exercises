
const removeFromArray = function(array) {

    let arrayOfRemove = Array.prototype.slice.call(arguments);// this line makes an array of the arguments less the first one
    let newArray = array;
    for (let i=0;i<arrayOfRemove.length;i++) {
                let argumenttoRemove = arrayOfRemove[i];
                arrayChecker: for (let j=0; j<array.length; j++){
                    let checkIfArgumentInArray = newArray.includes(arrayOfRemove[i]);
                    if(checkIfArgumentInArray == true){
                        postionOfArgumentInArray = newArray.indexOf(argumenttoRemove);
                        newArray = newArray.toSpliced(postionOfArgumentInArray,1);
                        result = newArray ;
                    }
                    else{
                        result = newArray;
                        break arrayChecker;
                    }
                }
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
