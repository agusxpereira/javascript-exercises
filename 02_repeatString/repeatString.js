const repeatString = function(string, num) {
    var repeatedString = "";
    if(num > 0){
        for(let i=1; i <=num; i++){
            repeatedString += string;
        }
    }else if(num === 0 || num == ""){
        repeatedString = "";
    }
    else{
        repeatedString = "ERROR";
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
