export default function Progress(props){
  const{amount,targetAmount} = props
  return <section className="progress">
  <h2>
    Raised <span className="secondary">${amount}</span> of
    <span className="secondary">${targetAmount}</span>
  </h2>
</section>;
}
