const convertToCelsius = function(degree) {
  convert = (degree - 32)/1.8;
  let result = Math.round(convert*10)/10;
  return result
};

const convertToFahrenheit = function(degree) {
  convert = (degree * 1.8) + 32;
  let result = Math.round(convert*10)/10;
  return result
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
