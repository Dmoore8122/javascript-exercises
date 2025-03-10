const add = function(a, b) {
	return a + b ;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let value = arr.reduce((sum, current) => sum + current, 0);
  return value;
};

const multiply = function(arr) {
  let value = arr.reduce((sum, current) => sum * current, 1);
  return value;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function() {
	
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
