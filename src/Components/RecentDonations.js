export default function RecentDonations( {name, amount, caption} ) {
  return ( 
<section>
  <h2>Recent Donations</h2>
  <ul>
    <li><span>{name} donated ${amount}</span> {caption} </li>
    {/* <li><span>Rami donated $10</span>Here, take a break from work!</li> */}
  </ul>
</section> 
)
}
