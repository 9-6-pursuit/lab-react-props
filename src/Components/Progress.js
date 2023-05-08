export default function Progress({donations}) {
  const soFar = donations.reduce((addinUp, donation) => {
    return addinUp + donation.amount
  },0)
  return <section className="progress">
  <h2>
    Raised <span className="secondary">${soFar}</span> of
    <span className="secondary">$1000</span>
  </h2>
</section>;
}
