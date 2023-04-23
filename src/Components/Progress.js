export default function Progress({donations, targetAmount}) {
  let totalDonation = 0;
  donations.forEach(donation => totalDonation += donation.amount);

  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${totalDonation}</span> of
        <span className="secondary"> ${targetAmount}</span>
      </h2>
    </section>
  );
}
