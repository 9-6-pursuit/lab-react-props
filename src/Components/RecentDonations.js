export default function RecentDonations({dono}) {
  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>
        {dono.map((donation, index) => (
          <li key={index}><span key={index}>{donation.name} donated ${donation.amount}</span>{donation.caption}.</li>
        ) )}
      </ul>
    </section>
  );
}
