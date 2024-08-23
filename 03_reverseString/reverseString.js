const reverseString = function(string) {

    stringLength = string.length;
    let backwardString = "";
    
    for (i=0; i<stringLength;i++){
        newString = string.charAt(stringLength-1-i);
        backwardString += newString;
        
    }
    return backwardString;
    

};

// Do not edit below this line
module.exports = reverseString;
