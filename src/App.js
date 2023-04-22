// import React from "react";
// import TopBar from "./Components/TopBar";
// import "./App.css";

// const targetAmount = 1000;
// const donations = [
//   {
//     amount: 250,
//     caption: "You really need this. Really.",
//     id: 1,
//     name: "Jo",
//   },
//   {
//     amount: 30,
//     caption: "Here, take a break from work!",
//     id: 2,
//     name: "Rami",
//   },
//   {
//     amount: 20,
//     caption: "LOL! You are too funny. Happy to do this for you. :)",
//     id: 3,
//     name: "Michelle",
//   },
//   {
//     amount: 5,
//     caption: "Have fun!",
//     id: 4,
//     name: "Malinda",
//   },
//   {
//     amount: 30,
//     caption: "Come visit me in Miami!",
//     id: 5,
//     name: "Sam",
//   },
// ];

// function App() {
//   return (
//     <>
//       <TopBar />
//       <main className="container">
//         <section className="sidebar">{/* Recent Donations */}</section>
//         <section className="">
//           {/* Progress */}
//           {/* Donation Form */}
//         </section>
//       </main>
//     </>
//   );
// }

// export default App;




import React from 'react';
import TopBar from './Components/TopBar';
import DonationForm from './Components/DonationForm';
import Progress from './Components/Progress';
import RecentDonations from './Components/RecentDonations';
import './App.css';

// const targetAmount = 1000;
// const donations = [
//   { name: "Jo", amount: 250, caption: "You really need this. Really." },
//   { name: "Rami", amount: 30, caption: "Here, take a break from work!" },
//   { name: "Michelle", amount: 20, caption: "LOL! You are too funny. Happy to do this for you. :)" },
//   { name: "Malinda", amount: 5, caption: "Have fun!" },
//   { name: "Sam", amount: 30, caption: "Come visit me in Miami!" }
// ];


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


function App() {
  return (
    <div>
      <TopBar />
      <main className="container">
        <section className="sidebar">
          <RecentDonations donations={donations} />
        </section>
        <section>
          <Progress donations={donations} targetAmount={targetAmount} />
          <DonationForm donations={donations} />
        </section>
      </main>
    </div>
  );
}

export default App;












