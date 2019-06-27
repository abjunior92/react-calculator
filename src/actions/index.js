import { UPDATE_CALCULATION_AND_RESULT, CLEAR_ALL } from '../constants';

export const updateCalculation = (inputValue, currentState, currentResult) => {

  return {
    type: UPDATE_CALCULATION_AND_RESULT,
    payload: {
      calculation: inputValue,
      result: currentResult
    }
  }
};

// TODO Make the calculation
export const clearCalculation = () => {
  return {
    type: CLEAR_ALL,
    payload: {
      calculation: [],
      result: 0
    }
  }
};
