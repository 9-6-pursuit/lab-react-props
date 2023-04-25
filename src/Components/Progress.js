export default function Progress({donations, targetAmount}) {

  let total = 0;
  donations.map((donation) => {
    return total = total + donation.amount;
  })

  return (
    <section className="progress">
  <h2>
    Raised <span className="secondary">${total}</span> of 
     <span className="secondary"> ${targetAmount}</span>
  </h2>
</section>
  );
}
