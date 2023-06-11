export default function Progress({donations}) {
  const donation = donations.map((donation) => donation.amount);
  const sum = donation.reduce((a, b) => a + b);

  return (
    <>
      <section className="progress">
        <h2>
          Raised <span className="secondary">${sum}</span> of
          <span className="secondary"> $1000</span>
        </h2>
      </section>
    </>
  )
}
