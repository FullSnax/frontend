/*========================================
        Import Dependencies
========================================*/
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from "react-router-dom"

/*========================================
        Import Pages
========================================*/
import NavBar from './components/NavBar';
import MenuItemsPage from './pages/MenuItemsPage/MenuItemsPage';
import MyProfilePage from './pages/MyProfilePage/MyProfilePage';



export default function App() {
  
  const [details, setDetails] = useState([])
  const [user, setUser] = useState([])
  
  return (
    <div className='App'>
      <h1>TESTING</h1>
      <Routes>
        <Route path="/*" element={<NavBar />} />
        <Route path="/profile" element={<MyProfilePage />} />
        <Route path="/menuitems" element={<MenuItemsPage />} />
        </Routes>
  </div>
  )
}

//   function componentDidMount(){
//     console.log("it mounted")
//     let data;
//     axios.get(`${base_url}/wel/`)
//         .then(res => {
//             data = res.data;
//             setDetails(data)
//         })
//         .catch(err => {})
//   }

//   function handleUserInput(e){
//     setUser(e.target.value);
//   };
//   function handleDetailInput(e){
//     setQuote(e.target.value);
//   };

//   function handleSubmit(e){
//     e.preventDefault();
//     axios
//         .post("http://localhost:8000/wel/", {
//             name: user,
//             detail:quote,
//         })
//         .then((res) => {
//             setUser("")
//             setQuote("")
//         })
//         .catch((err) => {});
// };


// useEffect(()=>{
//   componentDidMount()
// },[])
  

//   return (
//     <>
//     <form onSubmit={handleSubmit}>
//         <div className="input-group mb-3">
//             <div className="input-group-prepend">
//                 <span className="input-group-text"
//                   id="basic-addon1">
//                   {" "}
//                   Author{" "}
//                 </span>
//             </div>
//             <input type="text" className="form-control" 
//               placeholder="Name of the Poet/Author"
//               aria-label="Username"
//               aria-describedby="basic-addon1"
//               value={user} name="user"
//               onChange={handleUserInput} />
//         </div>
  
//                     <div className="input-group mb-3">
//                         <div className="input-group-prepend">
//                             <span className="input-group-text">
//                                Your Quote 
//                             </span>
//                         </div>
//                         <textarea className="form-control " 
//                                   aria-label="With textarea"
//                                   placeholder="Tell us what you think of ....." 
//                                   value={quote} name="quote" 
//                                   onChange={handleDetailInput}>
//                         </textarea>
//                     </div>
  
//                     <button type="submit" className="btn btn-primary mb-5">
//                         Submit
//                     </button>
//         </form>
//     {details ? 
//     <div>
//       {details.map((detail, id) =>  (
//         <div key={id}>
//           <div >
//               <div >
//                 <h1>{detail.detail} </h1>
//                   <footer >--- by
//                   <cite title="Source Title">
//                   {detail.name}</cite>
//                     </footer>
//                   </div>
//             </div>
//             </div>
//             )
//         )}
//       </div>
//       :
//       <h1>No details</h1>
//       }
//     </>
//   )
// }