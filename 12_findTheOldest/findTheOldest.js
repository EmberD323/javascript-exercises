const findTheOldest = function(people) {
//sort by age
    let sortedArray =  people.sort(compare);
    const currentYear = 2024;
    function compare (a,b){
        if (a.hasOwnProperty('yearOfDeath') == false) {
            a.yearOfDeath = 2024;
        }
        else if(b.hasOwnProperty('yearOfDeath') == false) {
            b.yearOfDeath = 2024;
        }
        
        if ((a.yearOfDeath - a.yearOfBirth)<(b.yearOfDeath - b.yearOfBirth)) return -1;
        if ((a.yearOfDeath - a.yearOfBirth)==(b.yearOfDeath - b.yearOfBirth)) return 0;
        if ((a.yearOfDeath - a.yearOfBirth)>(b.yearOfDeath - b.yearOfBirth)) return 1;
    }
    // return the oldest person
    return sortedArray[sortedArray.length-1];
    

     /*inventors.sort(compare);
    function compare (a,b){
      if ((a.passed - a.year)<(b.passed - b.year)) return -1;
      if ((a.passed - a.year)==(b.passed - b.year)) return 0;
      if ((a.passed - a.year)>(b.passed - b.year)) return 1;
      
    }
    console.table(inventors);*/
//get array of age
//sort 
//take last
//or reduce only
// let oldestPerson = people.reduce(age(),)
};

// Do not edit below this line
module.exports = findTheOldest;
