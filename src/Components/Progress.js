export default function Progress({ totalRaised, targetAmount }) {
  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${totalRaised}</span> of
        <span className="secondary"> ${targetAmount}</span>
      </h2>
    </section>
  );
}
