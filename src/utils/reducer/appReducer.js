const appReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_NUMBER':
        const updatedNumbers = [...state.numbers, action.payload];
        const isMaxReached = updatedNumbers.length === state.maxNumbers;

        return {
          ...state,
          numbers: updatedNumbers,
          isMaxReached,
        };
        
      case 'GENERATE_PAIRS':
        const pairs = [];
        let remainingNumbers = [...state.numbers];
  
        while (remainingNumbers.length >= 2) {
          const pair = [remainingNumbers.shift(), remainingNumbers.shift()];
          pairs.push(pair);
        }
  
        if (remainingNumbers.length === 1) {
          pairs.push([remainingNumbers[0]]);
        }
  
        return {
          ...state,
          pairs,
        };
      default:
        return state;
    }
  };
  
  export default appReducer;
  