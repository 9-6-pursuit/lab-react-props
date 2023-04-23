export default function Progress({donations, targetAmount}) {
  const donationMade = donations => {
    let total = 0;
    donations.forEach(donation => total += donation.amount);
    return total;
  }

  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${donationMade(donations)}</span> of
        <span className="secondary"> ${targetAmount}</span>
      </h2>
    </section>
  );
}
