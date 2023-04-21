export default function RecentDonations({ donations }) {
  return (
    <>
      <h2>Recent Donations</h2>
      <ul>
        {donations.map((donated) => {
          return (
            <li key={donated.id}>
              <span>
                {donated.name} donated ${donated.amount}
              </span>
              {donated.caption}
            </li>
          );
        })}
      </ul>
    </>
  );
}
