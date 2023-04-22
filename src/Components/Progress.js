// export default function Progress() {
//   return null;
// }


import React from 'react';

const Progress = (props) => {
  const raisedAmount = props.donations.reduce((total, donation) => total + donation.amount, 0);

  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${raisedAmount}</span> of <span className="secondary">${props.targetAmount}</span>
      </h2>
    </section>
  );
};

export default Progress;



