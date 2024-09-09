const palindromes = function (string) {
//split into array of letters
let letterArray = string.split("");


for(i=0; i<letterArray.length; i++){
    
    let character = letterArray[i];
    //ignore punctuation (filter out if not letter) 
    if(character.toUpperCase() != character.toLowerCase()) {
        //convert to lowercase
        letterArray[i] = character.toLowerCase();
    }
    //get rid of everything except character and numbers
    else if(isNaN(letterArray[i])){
        letterArray.splice(i,1);
    }
    //ignore " "
    if(letterArray[i] == " "){
        letterArray.splice(i,1);
    }
}

//check if palindrome
while(letterArray.length>1){
    if (letterArray[0] == letterArray[letterArray.length-1]){
        letterArray.splice(0,1);
        letterArray.splice(letterArray.length-1,1);
    }
    else{
        return false;
    }
}
if (letterArray.length<=1){
    return true;
}
};

// Do not edit below this line
module.exports = palindromes;
