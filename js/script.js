'use strict';

const multiplay = function (firstNumber, secondNumber) {
  if( !isNaN(firstNumber) && !isNaN(secondNumber) && firstNumber != null && secondNumber != null){
    const result = firstNumber * secondNumber;
    return result;  
  } else (console.log('err, enter your number'))  
}

const division = function (firstNumber, secondNumber) {
  if( !isNaN(firstNumber) && !isNaN(secondNumber) && firstNumber != null && secondNumber != null){
    const result = firstNumber / secondNumber;
    return result;  
  } else (console.log('err, enter your number'))  
}

const modulo = function (firstNumber, secondNumber) {
  if( !isNaN(firstNumber) && !isNaN(secondNumber) && firstNumber != null && secondNumber != null){
    const result = firstNumber % secondNumber;
    return result;  
  } else (console.log('err, enter your number'))  
}

const exponentiation = function (firstNumber, secondNumber) {
  if( !isNaN(firstNumber) && !isNaN(secondNumber) && firstNumber != null && secondNumber != null){
    const result = firstNumber ** secondNumber;
    return result;  
  } else (console.log('err, enter your number'))  
}

const mainFunction = function (callbackFunc) {
    const firstUserNumber = prompt('your first number');
    const secondUserNumber = prompt('your second number?');
    const resultFunc = callbackFunc(firstUserNumber, secondUserNumber);
    return resultFunc;
}

alert('result of exponentiation is ' + mainFunction(exponentiation));
alert('result of multiply is ' + mainFunction(multiplay));
alert('result of division is ' + mainFunction(division)); 
alert('the result of the remainder of the division ' + mainFunction(modulo));
