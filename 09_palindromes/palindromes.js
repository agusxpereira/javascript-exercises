const palindromes = function (str) {
    //A car, a man, a maraca.
   let comparator = str.replaceAll(/[.,¡!¿? ]/g, "").split('').reverse().join('').toLowerCase(); 

   return comparator == str.replaceAll(/[.,¡!¿? ]/g, "").toLowerCase();
    
};

// Do not edit below this line
module.exports = palindromes;
