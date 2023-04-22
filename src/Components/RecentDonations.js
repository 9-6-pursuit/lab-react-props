export default function RecentDonations({donations}) {
  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>
        {donations.map(recentDonor => <li><span>{recentDonor.name} donated ${recentDonor.amount}</span>{recentDonor.caption}</li>)}
    </ul>
  </section>
  )
}
// Use the .map const donations = donations.map(amount => {name} donated {amount})