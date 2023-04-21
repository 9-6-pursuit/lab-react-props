export default function RecentDonations({donation}) {
  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>
        {donation.map(el => { 
          return (
            <li>
              <span>{el.name} donated ${el.amount}</span>{el.caption}
            </li>
          );
        })}        
      </ul>
    </section>
  );
}