export default function RecentDonations({donations}) {
  console.log(donations)
  return (
    <section>
      <h3>Recent Donations</h3>
      <ul>
        {donations.map((donation) => {
          
          return (
            <li><span>{donation.name} donated ${donation.amount}</span>{donation.caption}</li>
          )
        })}
        {/* <li><span>Jo donated $25</span>You really need this. Really.</li>
        <li><span>Rami donated $10</span>Here, take a break from work!</li> */}
      </ul>
    </section>
  );
}
