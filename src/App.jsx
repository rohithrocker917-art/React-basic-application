// // // // import { useState } from 'react'
// // // // import heroImg from './assets/hero.png'
// // // // import reactLogo from './assets/react.svg'
// // // // import viteLogo from './assets/vite.svg'
// // // // import './App.css'

// // // function App() {
// // //   const [count, setCount] = useState(0)

// // //   return (
// // //     <>
// // //       <section id="center">
// // //         <div className="hero">
// // //           <img src={heroImg} className="base" width="170" height="179" alt="" />
// // //           <img src={reactLogo} className="framework" alt="React logo" />
// // //           <img src={viteLogo} className="vite" alt="Vite logo" />
// // //         </div>
// // //         <div>
// // //           <h1>Get started</h1>
// // //           <p>
// // //             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
// // //           </p>
// // //         </div>
// // //         <button
// // //           type="button"
// // //           className="counter"
// // //           onClick={() => setCount((count) => count + 1)}
// // //         >
// // //           Count is {count}
// // //         </button>
// // //       </section>

// // //       <div className="ticks"></div>

// // //       <section id="next-steps">
// // //         <div id="docs">
// // //           <svg className="icon" role="presentation" aria-hidden="true">
// // //             <use href="/icons.svg#documentation-icon"></use>
// // //           </svg>
// // //           <h2>Documentation</h2>
// // //           <p>Your questions, answered</p>
// // //           <ul>
// // //             <li>
// // //               <a href="https://vite.dev/" target="_blank">
// // //                 <img className="logo" src={viteLogo} alt="" />
// // //                 Explore Vite
// // //               </a>
// // //             </li>
// // //             <li>
// // //               <a href="https://react.dev/" target="_blank">
// // //                 <img className="button-icon" src={reactLogo} alt="" />
// // //                 Learn more
// // //               </a>
// // //             </li>
// // //           </ul>
// // //         </div>
// // //         <div id="social">
// // //           <svg className="icon" role="presentation" aria-hidden="true">
// // //             <use href="/icons.svg#social-icon"></use>
// // //           </svg>
// // //           <h2>Connect with us</h2>
// // //           <p>Join the Vite community</p>
// // //           <ul>
// // //             <li>
// // //               <a href="https://github.com/vitejs/vite" target="_blank">
// // //                 <svg
// // //                   className="button-icon"
// // //                   role="presentation"
// // //                   aria-hidden="true"
// // //                 >
// // //                   <use href="/icons.svg#github-icon"></use>
// // //                 </svg>
// // //                 GitHub
// // //               </a>
// // //             </li>
// // //             <li>
// // //               <a href="https://chat.vite.dev/" target="_blank">
// // //                 <svg
// // //                   className="button-icon"
// // //                   role="presentation"
// // //                   aria-hidden="true"
// // //                 >
// // //                   <use href="/icons.svg#discord-icon"></use>
// // //                 </svg>
// // //                 Discord
// // //               </a>
// // //             </li>
// // //             <li>
// // //               <a href="https://x.com/vite_js" target="_blank">
// // //                 <svg
// // //                   className="button-icon"
// // //                   role="presentation"
// // //                   aria-hidden="true"
// // //                 >
// // //                   <use href="/icons.svg#x-icon"></use>
// // //                 </svg>
// // //                 X.com
// // //               </a>
// // //             </li>
// // //             <li>
// // //               <a href="https://bsky.app/profile/vite.dev" target="_blank">
// // //                 <svg
// // //                   className="button-icon"
// // //                   role="presentation"
// // //                   aria-hidden="true"
// // //                 >
// // //                   <use href="/icons.svg#bluesky-icon"></use>
// // //                 </svg>
// // //                 Bluesky
// // //               </a>
// // //             </li>
// // //           </ul>
// // //         </div>
// // //       </section>

// // //       <div className="ticks"></div>
// // //       <section id="spacer"></section>
// // //     </>
// // //   )
// // // }

// // // export default App

// // import React from "react";
// // import "./App.css";
// // import rohith from "./assets/hero.png";
// // import button from "./assets/index.jsx";
// // const App = () => {
// //   return (
// //     <div>
// //       <button className="btn">Click Me</button>
// //       <button
// //         name="Hello Welcome to React"
// //         onClick={() => console.log("Alert !!! button clicked")}
// //       />

// //       <h1 className="title">Hello, React!</h1>
// //       <img src={rohith} class="sample" />
// //       <p>Welcome to your basic React app.</p>
// //     </div>
// //   );
// // };

// // task 2

// import React, { useState, useEffect } from "react";
// import "./App.css";

// const App = () => {
//   const [counter, setCounter] = useState(0);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/users",
//         );
//         const users = await response.json();
//         setData(users);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="container">
//       <h1>User Details</h1>

//       <h3>Counter: {counter}</h3>

//       <div className="button-group">
//         <button
//           className="btn increment"
//           onClick={() => setCounter(counter + 1)}
//         >
//           Increment
//         </button>

//         <button
//           className="btn decrement"
//           onClick={() => setCounter(counter - 1)}
//         >
//           Decrement
//         </button>
//       </div>

//       <table className="user-table">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>```````````````````````````````````````````
//             <th>Username</th>
//             <th>Email</th>
//             <th>Phone</th>
//             <th>Website</th>
//             <th>Company</th>
//             <th>Street</th>
//             <th>Suite</th>
//             <th>City</th>
//           </tr>
//         </thead>

//         <tbody>
//           {data.map((user) => (
//             <tr key={user.id}>
//               <td>{user.id}</td>
//               <td>{user.name}</td>
//               <td>{user.username}</td>
//               <td>{user.email}</td>
//               <td>{user.phone}</td>
//               <td>{user.website}</td>
//               <td>{user.company.name}</td>
//               <td>{user.address.street}</td>
//               <td>{user.address.suite}</td>
//               <td>{user.address.city}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default App;

// import React, { useState, useEffect } from "react";

// const App = () => {
//   const [counter, setCounter] = useState(0);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/users",
//         );
//         const users = await response.json();
//         setData(users);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>User Details</h1>
//       <h3>Counter: {counter}</h3>
//       <button onClick={() => setCounter(counter + 1)}>Increment</button>
//       <button
//         onClick={() => setCounter(counter - 1)}
//         style={{ marginLeft: "10px" }}
//       >
//         Decrement
//       </button>
//       ``
//       <br />
//       <br />
//       <table
//         border="1"
//         style={{
//           textAlign: "left",
//         }}
//       >
//         <thead style={{ backgroundColor: "#f2f2f2" }}>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Username</th>
//             <th>Email</th>
//             <th>Phone</th>
//             <th>Website</th>
//             <th>Company</th>
//             <th>Street</th>
//             <th>Suite</th>
//             <th>City</th>
//           </tr>
//         </thead>

//         <tbody>
//           {data.map((user) => (
//             <tr key={user.id}>
//               <td>{user.id}</td>
//               <td>{user.name}</td>
//               <td>{user.username}</td>
//               <td>{user.email}</td>
//               <td>{user.phone}</td>
//               <td>{user.website}</td>
//               <td>{user.company.name}</td>
//               <td>{user.address.street}</td>
//               <td>{user.address.suite}</td>
//               <td>{user.address.city}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );

        const users = await response.json();
        setData(users);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>User Details</h1>

      <h3>Counter: {counter}</h3>

      <button onClick={() => setCounter(counter + 1)}>Increment</button>

      <button onClick={() => setCounter(counter - 1)}>Decrement</button>

      <br />
      <br />

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
            <th>Street</th>
            <th>Suite</th>
            <th>City</th>
          </tr>
        </thead>

        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>{user.company.name}</td>
              <td>{user.address.street}</td>
              <td>{user.address.suite}</td>
              <td>{user.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
