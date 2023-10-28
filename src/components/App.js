import React from "react";
import "../styles/App.css";
import Header from "./Header";
//import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
//import Login from "../Auth/Login";
import Loginpage from "../Auth/Loginpage";
import { useSelector } from "react-redux";
//import store from "../store/Store";

function App() {
  const lUser = localStorage.getItem("fblogin");

  const localUser = JSON.parse(lUser);

   const user = useSelector(store => store.user.userDetails || localUser);
  //  console.log(user);
  //  console.log(lUser);

  return <div className="app">
   {!user?.data && <Loginpage/> }

   {user?.data &&
    <>
    
  <Header />
  <div className="app_body">
    <Sidebar />
    <Feed />
    <Widgets />
    </div>
     
  </>
  }

</div>

}
export default App