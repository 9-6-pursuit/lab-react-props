import React from "react";
import TopBar from "./Components/TopBar";
import DonationForm from "./Components/DonationForm";
import RecentDonations from "./Components/RecentDonations";
import App from "./Components/Apps";
const targetAmount = 1000;
import "./App.css";


function App (){
const myArray = [ amount, caption, id, name];
return (
  <div className = "sidebar" ><h2>RecentDonations</h2>
  {myArray.map (name =>(
    <li>
      {name}
      {donations}
      {caption}
    </li>
  ))}
  
  </div>
);
  }
export default App;


//   data.forEach (donations => {
//     for (let [key, value] of Object.entries(donations))
//     if (result [key]){
//       result [key] +=value;
//     }else {
//       result [key] = value;
//     }
//     }
//   )}
// }
//   console.log(key, value) 
  
//   {
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
          <h2> Recent Donations </h2></section>
        <section className="main">
          <h2> Progress </h2>
          <h3> Donation Form </h3>
        </section>
      </main>
    </>
  );</div>
  </div>
}

export default App;