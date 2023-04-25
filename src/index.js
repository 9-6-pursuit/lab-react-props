/** @format */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const targetAmount = 1000;
const donations = [
	{
		amount: 250,
		caption: "You really need this. Really.",
		id: 1,
		name: "Jo",
	},
	{
		amount: 30,
		caption: "Here, take a break from work!",
		id: 2,
		name: "Rami",
	},
	{
		amount: 20,
		caption: "LOL! You are too funny. Happy to do this for you. :)",
		id: 3,
		name: "Michelle",
	},
	{
		amount: 5,
		caption: "Have fun!",
		id: 4,
		name: "Malinda",
	},
	{
		amount: 30,
		caption: "Come visit me in Miami!",
		id: 5,
		name: "Sam",
	},
];

function load(donations, targetAmount) {
	ReactDOM.render(
		<React.StrictMode>
			<App donations={donations} targetAmount={targetAmount} />
		</React.StrictMode>,
		document.getElementById("root")
	);
}

load(donations, targetAmount);

document.getElementById("donation-form").addEventListener("submit", (e) => {
	e.preventDefault();
	let amount = document.getElementById("amount");
	let caption = document.getElementById("caption");
	let name = document.getElementById("name");
	donations.push({
		amount: parseInt(amount.value),
		caption: caption.value,
		id: donations.length + 1,
		name: name.value,
	});
	amount.value = 0;
	caption.value = "";
	name.value = "";
	load(donations, targetAmount);
});
