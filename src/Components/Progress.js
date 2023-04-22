export default function Progress({donations, target}){
  let total = 0
  donations.forEach(donation => total += donation.amount)
  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${total}</span> of <span className="secondary">${target}</span>
      </h2>
    </section>
  )
}
