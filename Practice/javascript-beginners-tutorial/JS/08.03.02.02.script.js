//----------------------------------------------------------------
// external js file
// Write all JavaScript code here

// function declaration (Regular / normal function)
function getSum1(num1, num2) {
  var total = num1 + num2;
  return total;
}

// ------------------------------

// function expression - named
var getSum2 = function getTotal(num1, num2) {
  var total = num1 + num2;
  return total;
};

alert(getSum2(10, 20));

// ------------------------------

// assign function to another variable
var sum1 = getSum2;
alert(sum1(5, 10));
