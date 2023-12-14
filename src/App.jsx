import './App.css'
import { useReducer } from 'react';
import NumberList from './components/NumberList/index.jsx';
import PairList from './components/PairList/index.jsx';
import NumberInput from './components/NumberInput/index.jsx';
import PairButton from './components/PairButton/index.jsx';
import appReducer from './utils/reducer/appReducer.js';

const App = () => {
  const initialState = {
    numbers: [],
    pairs: [],
    maxNumbers: 10,
    isMaxReached: false,
  };

  const [state, dispatch] = useReducer(appReducer, initialState);

  const addNumber = (number) => {
    const updatedNumbers = [...state.numbers, number];

    if (updatedNumbers.length <= state.maxNumbers){
      dispatch({ type: 'ADD_NUMBER', payload: number, isMaxReached: updatedNumbers.length === state.maxNumbers});
    }
  };

  const generatePairs = () => {
    dispatch({ type: 'GENERATE_PAIRS' });
  };

  return (
    <div>
      <NumberInput onAddNumber={addNumber} />
      <NumberList numbers={state.numbers} isMaxReached={state.isMaxReached} />
      <PairButton onGeneratePairs={generatePairs} isMaxReached={state.isMaxReached} isListEmptyOrOne={state.numbers.length <= 1}/>
      <PairList pairs={state.pairs} />
    </div>
  );
};

export default App;
