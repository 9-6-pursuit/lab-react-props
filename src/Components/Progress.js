export default function Progress({ donations }) {
  const totalDonated = donations.reduce((acc, donation) => acc + donation.amount, 0);
  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${totalDonated}</span> of <span className="secondary">$1000</span>
      </h2>
    </section>
  );
}
