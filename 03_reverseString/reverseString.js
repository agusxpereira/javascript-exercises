const reverseString = function(string) {
    let reversedString = []; 
    
    for(let i = 0; i < string.length; i++){
        reversedString[i] = string.charAt(i);
    }
    
    return reversedString.reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
