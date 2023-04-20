export default function RecentDonations({donation}) {
  //  const individual = donation.forEach(el => {
  //   return el
  //  });
  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>
        <li><span>{donation[0].name} donated ${donation[0].amount}</span>{donation[0].caption}</li>
        <li><span>{donation[1].name} donated ${donation[1].amount}</span>{donation[1].caption}</li>
        <li><span>{donation[2].name} donated ${donation[2].amount}</span>{donation[2].caption}</li>
        <li><span>{donation[3].name} donated ${donation[3].amount}</span>{donation[3].caption}</li>
       
      </ul>
    </section>
  );
}
