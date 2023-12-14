const NumberInput = ({ onAddNumber }) => {
  const addRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 30) + 1;
    onAddNumber(randomNum);
  };

  return (
    <div>
      <button onClick={addRandomNumber}>Add</button>
    </div>
  );
};

export default NumberInput;
