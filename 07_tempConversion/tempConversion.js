const convertToCelsius = function(temp) {
  // Formula: (x - 32) * (5/9)
  let result = (temp - 32) * (5/9);
  return parseFloat(result.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  // Formula: (x * (9/5)) + 32
  let result = (temp * (9/5)) + 32;
  return parseFloat(result.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
