const PairButton = ({ onGeneratePairs, isListEmptyOrOne }) => (
  <button onClick={onGeneratePairs} disabled={isListEmptyOrOne}>
    Generate pair
  </button>
);

export default PairButton;
