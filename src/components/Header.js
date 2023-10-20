import React, { useState, useRef } from "react";
import "../styles/Header.css";
import flogo from "../img/flogo.jpg";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import { Avatar, IconButton,Menu, MenuItem, } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import AddIcon from "@mui/icons-material/Add";
import ForumIcon from "@mui/icons-material/Forum";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSelector } from "react-redux";
// import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

//import ExpandableButton from "./ExpandableButton";
//import { ExpandMore } from "@mui/icons-material";
import  Createpost from  "./Createpost"

function Header() {
  // const history=useHistory();
  // const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const [menuAnchor, setMenuAnchor] = useState(null);
  const menuRef = useRef(null);

  const [isCreatePostModalOpen, setIsCreatePostModalOpen] = useState(false);
  const user = useSelector((store) => store.user.userDetails);
  //console.log(user);
  const [searchText, setsearchText] = useState("");

  let headers = {
    projectID: "x57qvgem43cn",
  };

  const fetchSearchData = async () => {
    const url = `https://academics.newtonschool.co/api/v1/facebook/post?filter=title:${searchText}`;

    fetch(url, { method: "GET", headers })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  function handkeyup(e) {
    if (e.key === "Enter") {
      fetchSearchData();
    }
  }


  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    
      // localStorage.clear();
      // <Routes>
      //   navigate('/Login');
      // </Routes>
      

    // Redirect to the logout page or perform other logout actions
    handleMenuClose();
  };

  const handleCreatePost = () => {
    // Implement logic for creating a post here
    console.log("Creating a post...");
    // Redirect to the create post page or perform other create post actions
    handleMenuClose();
  };

  const openCreatePostModal = () => {
    setIsCreatePostModalOpen(true);
  };

  const closeCreatePostModal = () => {
    setIsCreatePostModalOpen(false);
  };
  return (
    <div className="header">
      <div className="header_left">
        <img src={flogo} alt="logo" />

        <div className="header_input">
          <SearchIcon />
          <input
            placeholder="Search Facebook"
            type="text"
            onChange={(e) => setsearchText(e.target.value)}
            onKeyUp={handkeyup}
            value={searchText}
          />
        </div>
      </div>

      <div className="header_center">
        <div
          className="header_option 
            header_option--active"
        >
          <HomeIcon fontSize="large" />
        </div>

        <div className="header_option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header_option">
          <SubscriptionsIcon fontSize="large" />
        </div>

        <div className="header_option">
          <StorefrontIcon fontSize="large" />
        </div>

        <div className="header_option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>

      <div className="header_right">
        <div className="header_info">
          <Avatar className="header_logicon" />
          <h4>{user?.data?.name || user?.data?.user?.name}</h4>
        </div>
        
        <IconButton>
          <ForumIcon />
        </IconButton>

        <IconButton>
          <CircleNotificationsIcon />
        </IconButton>

        <IconButton ref={menuRef} onClick={handleMenuOpen}>
        <ExpandMoreIcon />
      </IconButton>
      <Menu
      anchorEl={menuAnchor}
      open={Boolean(menuAnchor)}
      onClose={handleMenuClose}
      anchorReference="anchorEl"
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      {/* <MenuItem onClick={handleLogout}>
        <LogoutIcon sx={{ marginLeft: 1 }} />
        Logout
      </MenuItem> */}
      <MenuItem onClick={handleCreatePost}>
        <AddIcon sx={{ marginLeft: 1 }} />
        Create a Post
      </MenuItem>
    </Menu>
    
        
      </div>
    </div>
  );
}

export default Header;