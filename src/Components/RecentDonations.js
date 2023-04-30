export default function RecentDonations({donations}) {
  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>
        {/* the lab wants me to make a dynamic code for this section. I use the map method to iterate through the array and create a list item for each donation */}
        {donations.map((donation) => (
          <li>
            <span>{donation.name} donated ${donation.amount}</span>
            {donation.caption}
          </li>
        ))}
      </ul>
    </section>
  );
}
