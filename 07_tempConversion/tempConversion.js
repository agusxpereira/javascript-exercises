const convertToCelsius = function(f) {

  let celsius = (f - 32) * 5 / 9;
  if(celsius == 0){
    return celsius;
  }else{
    return Number(celsius.toFixed(1));
  }


};

const convertToFahrenheit = function(c) {
  let fahrenheit = (c * 9 / 5) + 32 
  if(fahrenheit == 0){
    return Number(fahrenheit);
  }else{
    return Number(fahrenheit.toFixed(1));
  }

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
