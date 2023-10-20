import React, { useState } from "react";
import "./SignUp.css";

const SignUp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Sign">
      <button className="popup-button" onClick={togglePopup}>
        Sign Up
      </button>
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={togglePopup}>
              &times;
            </span>
            <h2>Sign Up</h2>
            <p>It's quick and easy.</p>
            <div className="input-group">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
            </div>
            <div className="input-group">
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
            <div className="input-group">
              <label>Date of Birth:</label>
              <select>
                {/* Options for day */}
              </select>
              <select>
                {/* Options for month */}
              </select>
              <select>
                {/* Options for year */}
              </select>
            </div>
            <button className="sign-up-button">Sign Up</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;