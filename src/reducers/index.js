import { UPDATE_CALCULATION_AND_RESULT, CLEAR_ALL } from '../constants';
import { calculation, addValueToCalculation } from '../utils';

const initialState = {
  calculation: [],
  result: 0
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CALCULATION_AND_RESULT:
    
      let updateCalculationArray = addValueToCalculation(action.payload.calculation, state.calculation);
      let calculationResult = calculation(updateCalculationArray, action.payload.result);

      return {
        calculation: updateCalculationArray,
        result: calculationResult
      };
    case CLEAR_ALL:
      return action.payload;
    default:
      return state;
  }
};

export default calculatorReducer;
