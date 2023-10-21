import React, { useState } from "react";
import "../styles/MessageSender.css";
import { Avatar } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonOutlinedIcon from "@mui/icons-material/InsertEmoticonOutlined";
import  Createpost from  "./Createpost"
function MessageSender() {
   const [input,setInput]=useState("");
   const[imageUrl,setImageUrl]=useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //some clever db stuff

    setInput("");
    setImageUrl("");
  };

  const [isPopupVisiblepost, setPopupVisiblepost] = useState(false);

  const togglePopuppost = () => {
    setPopupVisiblepost(!isPopupVisiblepost);
  };
  

  return (
    <div className="messageSender">
      <div className="messageSender_top">
        <Avatar />
        <form>
          <input
            value={input}
            onClick={togglePopuppost}

            className="messageSender_input"
            placeholder="What's on Your Mind"
          />
          {isPopupVisiblepost && (
            <Createpost onClose={togglePopuppost} />
          )}
          <input
           value={input}
           onClick={togglePopuppost}
          placeholder="image URL {Optional}" />
          {isPopupVisiblepost && (
            <Createpost onClose={togglePopuppost} />
          )}

          <button onClick={togglePopuppost} type="submit">
            Hidden Submit
          </button>
          {isPopupVisiblepost && (
            <Createpost onClose={togglePopuppost} />
          )}
        </form>
      </div>

      <div className="messageSender_bottom">
         <div className="messageSender_option">
           <VideocamIcon style={{ color: "red" }} />
           <h3>Live Video</h3>
        </div>

        <div className="messageSender_option">
          <PhotoLibraryIcon style={{color:"green"}} />
          <h3>Photo/Video</h3>
        </div>

        <div className="messageSender_option">
          <InsertEmoticonOutlinedIcon style={{color:"orange"}} />
          <h3>Feeling/Activity</h3>
        </div>

      </div>
    </div>
  );
}

export default MessageSender;