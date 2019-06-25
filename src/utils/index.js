import { OPERATORS } from '../constants';

export const calculation = (calcArray, currentResult) => {

  if (isNaN(calcArray[calcArray.length-1])) {
    return currentResult;
  }

  const operatorFunctions = {
    '+': (a, b) => {
        return a + b;
    },
    '-': (a, b) => {
        return a - b;
    },
    '*': (a, b) => {
        return a * b;
    },
    '/': (a, b) => {
        return a / b;
    }
  };

  let calcString = calcArray.join('');

  // Split the calc string based on the operators
  // Example [4,5,'+',2,'/',6] -> '45+2/6' -> ['45','+','2','/','6']
  let calcArrayUpdated = calcString.split(/(\+|-|\*|\/)/g);

  // Set default result to 0
  let result = 0;

  // Set a default operator value
  let operator = '+';

  for (let i = 0; i < calcArrayUpdated.length; i++) {

    let item = calcArrayUpdated[i];
    // Test if the last value is an operator
    let isOperator = /(\+|-|\*|\/)/.test(item);

    if (isOperator) {
      operator = item;
    } else {
      result = operatorFunctions[operator](result, parseInt(item));
    }
  }

  return result;
}

export const addValueToCalculation = (value, currentState) => {
  currentState = [...currentState];

  let operatorValues = OPERATORS;

  if (typeof value !== 'number' && !operatorValues.includes(value)) {
    return currentState;
  }

  if (operatorValues.includes(value) && !currentState.length) {
    return currentState;
  }

  let lastVal = currentState[currentState.length-1];
  let lastValIsOperator = operatorValues.includes(lastVal);
  let currentValIsOperator = operatorValues.includes(value);

  if(lastValIsOperator && currentValIsOperator){
    currentState[currentState.length-1] = value;
    return currentState;
  }

  return [...currentState, value];
}
