'use strict';

const firstUserNumber = prompt();
const secondUserNumber = prompt();

const exponentiation = function (firstNumber, secondNumber) {
  if( !isNaN(firstNumber) && !isNaN(secondNumber) && firstNumber != null && secondNumber != null){
    const result = firstNumber ** secondNumber;
    return result;  
  } else (console.log('err, enter your number'))
    
}

const mainFunction = function (callbackFunc) {
    const resultFunc = exponentiation(firstUserNumber, secondUserNumber);
    return resultFunc;
}

alert(mainFunction(exponentiation));
