const removeFromArray = function(array, num, num2, num3, num4) {


    let arrayWithoutElement = array.flat();
    console.log(arrayWithoutElement);
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j <arrayWithoutElement.length; j++ ){
            if( num === arrayWithoutElement[j]
                || num2 === arrayWithoutElement[j]
                || num3 === arrayWithoutElement[j]
                || num4 === arrayWithoutElement[j]
                ){
                arrayWithoutElement.splice(j, 1);
            }
        }        
        
    }

    return arrayWithoutElement;


};
//the solution is write the function with map or filter
// Do not edit below this line
module.exports = removeFromArray;
