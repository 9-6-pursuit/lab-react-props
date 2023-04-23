import React from "react";


export default function RecentDonations(props ) {


  return (
    <section>
      <h2>Recent Donations</h2>

      {/* Create a list of all recent donations. Keep in mind that the list of recent donations we are using is an array variable called "donations" given in App.js.
        The props were passed down from App.js to RecentDonations (and Progress and DonationForm). Below, each element I changed was changed by saying that I was going to use props, then saying what prop I was using, then using dot notation to say which PART of the prop I was using.
        Because I used an array for the information, I created one <li> for every item in the array, so I indicated that by referencing the index number of the instance.
      */}
      <ul>
        <li><span>{props.donations[0].name} donated ${props.donations[0].amount}</span>{props.donations[0].caption}</li>
        <li><span>{props.donations[1].name} donated ${props.donations[1].amount}</span>{props.donations[1].caption}</li>
        <li><span>{props.donations[2].name} donated ${props.donations[2].amount}</span>{props.donations[2].caption}</li>
        <li><span>{props.donations[3].name} donated ${props.donations[3].amount}</span>{props.donations[3].caption}</li>
        <li><span>{props.donations[4].name} donated ${props.donations[4].amount}</span>{props.donations[4].caption}</li>
       
      </ul>
    </section>
    );

}