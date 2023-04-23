// export default function TopBar() {
//   return (
//     <header>
//       <h1>
//         GoFund<span>Me</span>
//       </h1>
//       <p>Help me go on a vacation to a beach somewhere!</p>
//     </header>
//   );
// }

const messageList = 
["Please help!, I adopted 2 kittens and need money for food, litter, toys and vet bills!"
]

let message = messageList[Math.floor(Math.random() * messageList.length)];

export default function TopBar() {
  return (
    <header>
      <h1>
        GoFund<span>Me</span>
      </h1>
      <p>{message}</p>
    </header>
  );
}   

