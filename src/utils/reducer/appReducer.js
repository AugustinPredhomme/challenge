const appReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_NUMBER':
        return {
          ...state,
          numbers: [...state.numbers, action.payload],
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
  