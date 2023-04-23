export default function Progress({donations, targetAmount}){
  const total = (donations) =>{
    let sum = 0;
    for (let donation of donations){
      sum+= donation.amount
    }
    return sum
  };


  return (
    <section className="progress">
  <h2>
    Raised <span className="secondary">${total(donations)}</span> of
    <span className="secondary"> ${targetAmount}</span>
  </h2>
</section>
  )
}