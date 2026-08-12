// function App(){
//   const user= 'tohid'

//   const abc=()=>{
//        console.log("hello")

//   }

//     return <div>
//        <h1>Username is {user}</h1>

//        <button onClick={abc}>change User</button>
//     </div>

// }

// export default App

//changing the user name when clich on the change user button

// function App(){

//   let user = "tohid"
//   const changeUser = () => {
//     console.log(user)
//     user = 'talha'
//     console.log(user)
//   }
//   return (
//     <div>
//       <h1>username is {user}</h1>
//       <button onClick={changeUser}>click here to Change Username</button>

//     </div>

//   )
// }
// export default App
/**  creating on click user chanage using React usestate hook
 *
 */
// import React,{useState} from 'react'

// const App = () => {

//   const [A, setA] = useState('tohid')

//    function changeUser(){
//      console.log('user Changed')
//      setA('talha')
//    }
//   return (
//     <div>
//       <h1>Username is {A}</h1>
//       <button onClick={changeUser}>Change User</button>
//     </div>
//   )
// }

// export default App

/**  creating counter using React usestate hook
 */

// import { useState } from "react";

// const App = () => {
//   const [num, setNum] = useState(0);
//   const [likes, setLikes] = useState(0);

//   return (
//     <div>
//       <h1 className="text-4xl font-bold text-blue-600">Tailwind is Working!</h1>
//       <h2>Number is {num}</h2>
//       <button onClick={() => setNum(num + 10)}>Increment</button>
//       <button onClick={() => setNum(num - 10)}>Decrement</button>

//       <h1>Likes: {likes}</h1>

//       <button onClick={() => setLikes(likes + 1)}>❤️ Like</button>
//     </div>
//   );
// };

//Form handling using Reactjs
// import React from "react";

// const App = () => {

//   const submithandler=(e)=>{
//     e.preventDefault()
//     console.log("form submitted")

//   }
//   return (
//     <div>
//       <form onSubmit={(e)=>{
//         submithandler(e)
//       }}>
//         <input  className="px-4 py-3 text-xl m-5 rounded" type="text" placeholder="Enter your name" />
//         <button className="px-4 py-3 m-5   text-white text-xl font-semibold bg-emerald-600 rounded">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default App;

//Two way binding using Reactjs

// import React from "react";

// const App = () => {
//   const [name, setName] = useState("");

//   const submitHandler = (e) => {
//     e.preventDefault();//prevent the relaoding of the page when form is submitted
//     console.log("form submitted", name);
//     setName("")//cleas the setName after the form is submitted
//   };

//   return (
//     <div>
//       <form onSubmit={submitHandler}>
//         <input
//           value={name}
//           className="px-4 py-3 text-xl m-5 rounded"
//           type="text"
//           placeholder="Enter your name"
//           onChange={(e) => setName(e.target.value)}//sets the name from the value of the input field
//         />
//         <button className="px-4 py-3 m-5 text-white text-xl font-semibold bg-emerald-600 rounded">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default App;

//creating a simple react app with header, footer and navbar components
// import React from 'react'
// import Header from './components/Header'
// import Navbar from "./components/Navbar"
// import Footer from "./components/Footer";

// const App = () => {
//   return (
//     <>

//        <Navbar/>
//        <Navbar/>
//        <Footer/>

//     </>

//   )
// }

// export default App

//creating cards by passing the data using props and props drilling Using Reactjs
// import React from 'react'
// import Card from "./components/Card";

// const App = () => {
//   const users = [
//   {
//     name: "Rahul Sharma",
//     city: "Pune",
//     age: 24,
//     profession: "Software Developer",
//     profilePhoto: "https://i.pravatar.cc/150?img=1"
//   },
//   {
//     name: "Priya Patil",
//     city: "Mumbai",
//     age: 27,
//     profession: "UI/UX Designer",
//     profilePhoto: "https://i.pravatar.cc/150?img=2"
//   },
//   {
//     name: "Aman Khan",
//     city: "Bangalore",
//     age: 22,
//     profession: "Web Developer",
//     profilePhoto: "https://i.pravatar.cc/150?img=3"
//   },
//   {
//     name: "Sneha Joshi",
//     city: "Delhi",
//     age: 29,
//     profession: "Data Analyst",
//     profilePhoto: "https://i.pravatar.cc/150?img=4"
//   },
//   {
//     name: "Vikram Deshmukh",
//     city: "Hyderabad",
//     age: 31,
//     profession: "Project Manager",
//     profilePhoto: "https://i.pravatar.cc/150?img=5"
//   }
// ];

//    return (
//     <div className="min-h-screen bg-gray-100 p-10 flex flex-wrap justify-center gap-8">
//       {users.map((user, index) => {
//         return (
//           <Card
//             key={index}
//             name={user.name}
//             age={user.age}
//             city={user.city}
//             profession={user.profession}
//             profilePhoto={user.profilePhoto}
//           />
//         );
//       })}
//     </div>
//   );
// }

// export default App



  // day 2 Learning --> pg for the data fetching using axios and useEffect hook in reactjs


// import axios from "axios";
// import { useEffect, useState } from "react";

// const App = () => {
//   const [data, setdata] = useState([]);

//   async function getData() {
//     const response = await axios.get(
//       "https://picsum.photos/v2/list?page=2&limit=30",
//     );
//     //  console.log(response.data)//to use this data we use state and setstate to store
//     //  the data and display

//     setdata(response.data);
//     console.log(data);
//   }

//   useEffect(() => {
//     getData(); //useEffect is used to call the function when the component is mounted and also when the state changes
//   }, []);

//   return (
//     <div className="p-10">
//     {/*   <button
//         onClick={getData}
//         className="bg-teal-600 text white  font-semibold text-2xl px-6 py-3
//        rounded active:scale-90"
//       >
//         Getdata
//       </button>
//        */ }
//       <div className="p-5 mt-5 bg-blue-950">
//         {data.map((item, idx) => {
//           return (
//             <div
//               key={idx}
//               className=" bg-black-50 text-black flex item-center justify-between w-full px-7 py-6 rounded mb-3"
//             >
//               <img
//                 className=" h-40 w-full object-cover"
//                 src={item.download_url}
//                 alt=""
//               />
//               <h1 className="text-white"> {item.author}</h1>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default App;

// ---------------------React Router Dom----------------------------


import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About1'
import Home from './pages/Home1'
import Product from './pages/Product1'
import Contact from './pages/Contact1'
import Header from './components/Header'


const App = () => {
  return (
 
    <div>
        <Header/>
      {/* //creating Routes */}
      <Routes>//Routes is used to define the routes for the application
   
      <Route path='/' element={<Home/>} />
          <Route  path='/about'  element={<About/>}/>
      <Route path='/product' element={<Product/>} />
      <Route path='/contact' element={<Contact/>} />
     
      </Routes> 

    </div>
  )
}

export default App

