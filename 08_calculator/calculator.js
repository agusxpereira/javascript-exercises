const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	if(arr[0] != undefined){
    let result = arr.reduce((sum, current)=> sum + current);
    return result;
  }else{
    return 0;
  }
};

const multiply = function(arr) {
  if(arr[0] != undefined){
    let result = arr.reduce((sum, current)=> sum * current);
    return result;
  }else{
    return 0;
  }
};

const power = function(num, power) {
  let result = 1;
  for(let i = 0; i < power; i++){
    result *= num;
  } 
  return result;
};

const factorial = function(f) {
	let result = 1;
  if(f > 0){
    for(let i = f; i > 0; i--){
      result *= i;
    }
    return result;
  }else{
    return 1;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
