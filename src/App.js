import React from "react";
import TopBar from "./Components/TopBar";
import "./App.css";
import RecentDonations from "./Components/RecentDonations";
import Progress from "./Components/Progress";
import DonationForm from "./Components/DonationForm";
import { ExpandLi } from "./Components/RecentDonations";

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

function addAmounts() {
  let sum = 0
  for (let i = 0; i < donations.length; i++) {
    sum += donations[i].amount
  }
  return sum
}

const listDonations = donations.map(donation => {
  return <ExpandLi
  name = {donation.name}
  amount = {donation.amount}
  message = {donation.caption}
  />
})

function App() {
  return (
    <>
      <TopBar />
      <main className="container">
        <section className="sidebar">{<RecentDonations list = {listDonations}/>}</section>
        <section className="">
          {<Progress amount = { addAmounts() } targetAmount = {targetAmount}/>}
          {<DonationForm place = {donations.length + 1}/>}
        </section>
      </main>
    </>
  );
}

export default App;
