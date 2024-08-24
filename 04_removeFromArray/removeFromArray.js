
const removeFromArray = function(array) {

    let arrayOfRemove = Array.prototype.slice.call(arguments);// this line makes an array of the arguments less the first one
    let newArray = array;
    //const duplicates = array.filter((item, index)=> array.indexOf(item) !== index);// prints which items are duplicates
    for (let i=0;i<arrayOfRemove.length;i++) {
        
        //if (array.includes(arrayOfRemove[i]) == true){
            //if(duplicates == arrayOfRemove[i]){ //if theres duplciates
           //     let argumenttoRemove = arguments[i];
           //     for (let j=0; j<array.length; j++){
           //         postionOfArgumentInArray = array.indexOf(argumenttoRemove);
            //        array = array.toSpliced(postionOfArgumentInArray,1);
                    //break if argument is no longer found in array
            //    }
            //    result = array ;
            //}
           // else{
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
                
                // does argument exist
                //if yes - 
                    
                //else break
            //}
            
            
        //}
    }
    

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
