const PairButton = ({ onGeneratePairs, isMaxReached, isListEmptyOrOne }) => (
  <button onClick={onGeneratePairs} disabled={isMaxReached || isListEmptyOrOne}>
    Generate pair
  </button>
);

export default PairButton;
