export default function Progress( {progress, targetAmount} ) {
  return (
    <section className="progress">
    <h2>
      Raised <span className="secondary">${progress}</span> of
      <span className="secondary"> ${targetAmount}</span>
    </h2>
  </section>);
  }


