// export default function RecentDonations() {
//   return null;
// }


import React from 'react';

const RecentDonations = (props) => {
  const donationsList = props.donations.map(donation => (
    <li key={donation.name}>
      <span>{donation.name} donated ${donation.amount}</span>{donation.caption}
    </li>
  ));

  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>
        {donationsList}
      </ul>
    </section>
  );
};

export default RecentDonations;


