import React, { useEffect, useState } from "react";

import "./Loginpage.css";
import Popup from "./Popup"; // Import the Popup component
import { useDispatch } from "react-redux";
import { getuser } from "../store/userSlice";
import Updatepassword from "../components/Updatepassword";
//import { useNavigate } from "react-router-dom";
//import SignUp from './SignUp';

function Loginpage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  //const navigate = useNavigate();
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  const dispatch = useDispatch([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);

  const fetchloginData = async () => {
    try{
      var myHeaders = new Headers();
      myHeaders.append("projectId", "x57qvgem43cn");
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        email: email,
        password: password,
        appType: "facebook",
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(
        "https://academics.newtonschool.co/api/v1/user/login",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          //console.log(result);

          setData(result);
          dispatch(getuser(result));

          localStorage.setItem(
            "fblogin",
            JSON.stringify({
              data: {
                email: result.data.email,
                name: result.data.name,
              },
            })
          );
        })
        .catch((error) => console.log("error", error));
    } catch (error) {
      console.log(error);
    }
  };

  function handleLoginFrom() {
    fetchloginData();
    // console.log(data);
  }

  const [isPopupVisiblepassword, setPopupVisiblepassword] = useState(false);

  const togglePopuppassword = () => {
    setPopupVisiblepassword(!isPopupVisiblepassword);
  };

  return (
    <div className="login">
      <div className="facebook">
        <div className="facebooktext">Facebook</div>

        <div className="t-title">
          Facebook helps you connect and share
          <br />
          with the people in your life.
          <h6>
            Use this for Login email arka@gmail.com  and password - 12345678 or <br></br>if
            this email is not working then create your Account{" "}
          </h6>
        </div>
      </div>
      <div className="logincontainer">
        <div className="logindetail" onClick={(e) => e.preventDefault()}>
          <input
            type="email"
            value={email}
            className="input-email"
            placeholder="Email address or phone number"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />

          <input
            type="password"
            value={password}
            className="input-password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button className="btn" onClick={handleLoginFrom} type="submit">
            Login
          </button>
        </div>

        <div className="forget" onClick={togglePopuppassword}>
          <a onClick={togglePopuppassword}>Forgot Password ?</a>
        </div>
        {isPopupVisiblepassword && (
          <Updatepassword onClose={togglePopuppassword} />
        )}

        <div className="create">
          <br />
          <button className="btns" onClick={togglePopup}>
            Create a new Account
          </button>
        </div>
        {
          isPopupOpen && (
            <Popup handleClose={togglePopup} />
          ) /* Pass handleClose function to the Popup component */
        }
        <p></p>
        <br />
        <div className="page">
          <a href="createPage">Create a page</a> for a celebrity, brand or
          business.
        </div>
      </div>
    </div>
  );
}

export default Loginpage;