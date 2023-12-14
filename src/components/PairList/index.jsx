const PairList = ({ pairs }) => (
  <div>
    {pairs.length > 0 && (
      <div>
        {pairs.map((pair, index) => (
          <p key={index}>{pair.join(', ')}</p>
        ))}
      </div>
    )}
  </div>
);

export default PairList;
