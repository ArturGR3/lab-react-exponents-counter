const Exponent = ({ num, exponent, count }) => {
  // Create an array of 'count' repeated 'exponent' times and join with '*'
  const multiplication = Array(exponent).fill(count).join("*");

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">
        n<sup>{num}</sup>
      </p>
      <p className="exponent-result">
        {multiplication} = <span className="total">{count ** exponent}</span>
      </p>
    </div>
  );
};

export default Exponent;
