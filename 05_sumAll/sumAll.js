const sumAll = function(num1, num2) {
    let sum = 0;

    if(num1 === Number(num1) &&  num2 === Number(num2)){
        let menor = (num1<num2) ? num1 : num2;
        let mayor = (num2>num1)? num2 : num1;
        
        for(let i = menor; i <= mayor; i++ ){
                        sum += i;
        }
        if(sum >= 0){
            return sum;
        }else{
            return "ERROR";
        }
    }else{
        return "ERROR";
    }
    
};


// Do not edit below this line
module.exports = sumAll;
