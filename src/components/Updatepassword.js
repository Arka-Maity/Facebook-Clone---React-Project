import React, { useState } from 'react'
import "../styles/updatepassword.css"
import { useSelector } from 'react-redux';

function Updatepassword({onClose}) {

    const [username,setUserName]=useState("");
    const [userEmail,setUserEmail]=useState("");
    const [currPassword,setcurrPassword]=useState("");
    const [newPassword,setnewPassword]=useState("");
    const user = useSelector(store => store.user.userDetails);
    //console.log(user.token);
const handleUpdataPassword=()=>{
    onClose();
    Upadatepasswordpost();
}

async function Upadatepasswordpost(){
  
  var myHeaders = new Headers();
myHeaders.append("projectId", "x57qvgem43cn");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Bearer "+user?.token);

var raw = JSON.stringify({
  "name": username,
  "email": userEmail,
  "passwordCurrent": currPassword,
  "password": newPassword,
  "appType": "facebook"
});

var requestOptions = {
  method: 'PATCH',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://academics.newtonschool.co/api/v1/user/updateMyPassword", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}
  

  return (
    <div className="pass_popup">
      <h2>Update Password</h2>
      <span className="close" onClick={onClose}>&times;</span>
      <input
        type="text"
        required="required" 
        placeholder="User Name"
        
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      /><br></br>
      <input
        type="text"
        placeholder="User Email"
        required="required" 
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      /><br></br>
      <input
        type="password"
        placeholder="Cureent Password"
        required="required" 
        value={currPassword}
        onChange={(e) => setcurrPassword(e.target.value)}
      /><br></br>
      <input
        type="password"
        placeholder="New Password"
        required="required" 
        value={newPassword}
        onChange={(e) => setnewPassword(e.target.value)}
      /><br></br>
      
      <button  className='pass_popup_button' 
      
      onClick={()=>{handleUpdataPassword();
        alert("Password Upadate successfully");
    }} text="Create Post">Update-Password</button>
    </div>
  )
}

export default Updatepassword;