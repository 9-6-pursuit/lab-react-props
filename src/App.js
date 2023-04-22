import React from "react";
import TopBar from "./Components/TopBar";
import DonationForm from "./Components/DonationForm";
import Progress from './Components/Progress'
import RecentDonations from "./Components/RecentDonations";
import "./App.css";

function App() {
  return (
    <>
      <TopBar />
      <main className="container">
        <section className="sidebar">{<RecentDonations/>}</section>
        <section className="">
          <Progress />
          <DonationForm/>
        </section>
      </main>
    </>
  );
}

export default App;
