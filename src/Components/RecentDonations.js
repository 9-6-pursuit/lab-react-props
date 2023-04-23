export default function RecentDonations({ donations }) {
  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>
        {donations.map(({ name, caption, amount }) => {
          return (
            <li key={name}>
              {name} donated ${amount} - {caption}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
