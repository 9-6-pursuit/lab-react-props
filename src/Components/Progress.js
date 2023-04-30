export default function Progress({donations, targetAmount}) {
  const totalDonation = donations.reduce((accumulator, currentDonation) => accumulator + currentDonation.amount, 0);
  
  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${totalDonation}</span> of
        <span className="secondary"> $1000</span>
      </h2>
</section>
  )
}
