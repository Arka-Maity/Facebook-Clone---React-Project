import React, { useState, useEffect } from "react";

import { getuser } from "../store/userSlice";
import "./Popup.css";
import { useDispatch } from "react-redux";

const Popup = ({ handleClose }) => {

  const [uname, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [data, setData] = useState([]);
  const dispatch = useDispatch([]);



  // ... (same popup content as before)
  /* -------------------------- API Works code-------------------------------- */

  async function handleFromData() {
    let headersList = {
      "content-type": "application/json",
      "projectId": "x57qvgem43cn"
    }

    let bodyContent = JSON.stringify({
      name: uname,
      email: email,
      password: password,
      appType: 'facebook'
    })



    const data = await fetch("https://academics.newtonschool.co/api/v1/user/signup", {
      method: 'POST',
      body: bodyContent,
      headers: headersList
    }
    );
    const json = await data.json();
    console.log(json);
    dispatch(getuser(json));
    //console.log(email, password, uname)
    setEmail("");
    setPassword("");
    setUsername("");


  }

  return (
    <div className="popup">
      {/* ... (popup content) */}
      <span className="close" onClick={handleClose}>
        &times;
      </span>
      <div className="head">
        <h2>Sign Up</h2>
        <p>It's quick and easy.</p>
      </div>


      <div className="input-group">
        <input className="popup-sel" type="text" placeholder="First Name" value={uname} onChange={(e) => setUsername(e.target.value)} />
        <input className="popup-sel" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="popup-sel" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>

      {/*   <div className="gender-group">
          <h5>Gender</h5>
           <label>
            <input type="radio" name="gender" value="male" />
            Male
          </label>
          <label>
            <input type="radio" name="gender" value="female" />
            Female
          </label>
          <label>
            <input type="radio" name="gender" value="custom" />
            Custom
          </label>
        </div>
        
        <div className="date-group">
        <label>Date of Birth:</label>
        <select>
          <option value="">Day</option>
          {days.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
        <select>
          <option value="">Month</option>
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
        <select>
          <option value="">Year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
          </div>*/}

      <button onClick={handleFromData} className="sign-up-button">Sign Up</button>
    </div>
  );
};

export default Popup;