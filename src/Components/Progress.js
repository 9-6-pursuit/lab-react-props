export default function Progress({donation, target}) {
  let total = 0
  donation.forEach(el => {
    total += el.amount
  });
  return (
      <section className="progress">
        <h2>
          Raised <span className="secondary">${total}</span> of
          <span className="secondary"> {target}</span>
        </h2>
     </section>
  )
}
// const total = {donations}.forEach(el => {
//   let sum = 0
//   return sum +=el.amount 
// });