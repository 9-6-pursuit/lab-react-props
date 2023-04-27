/** @format */

import React from "react";
import TopBar from "./Components/TopBar";
import "./App.css";
import RecentDonations from "./Components/RecentDonations";
import DonationForm from "./Components/DonationForm";
import Progress from "./Components/Progress";
// import TopBar from "./Components/TopBar"



function App(props) {
	return (
		<>
			<TopBar />
			<main className="container">
				<section className="sidebar">
					<RecentDonations donations={props.donations} />
				</section>
				<section className="">
					<DonationForm next={props.donations.length + 1}  />
					<Progress
						targetAmount={props.targetAmount}
						amountRaised={props.donations.reduce(
							(accumulator, currentValue) => {
								return accumulator + currentValue.amount;
							},
							0
						)}
					/>
				</section>
			</main>
		</>
	);
}

export default App;
