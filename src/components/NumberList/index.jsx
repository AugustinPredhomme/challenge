const NumberList = ({ numbers, isMaxReached }) => (
  <div>
    {numbers.length > 0 && (
      <p>{numbers.join(', ')}</p>
    )}
    {isMaxReached && <p>La liste a atteint son maximum.</p>}
  </div>
);

export default NumberList;
