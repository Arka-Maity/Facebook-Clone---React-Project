import React, { useState, useRef } from "react";
import "../styles/Header.css";
import flogo from "../img/flogo.jpg";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import AddIcon from "@mui/icons-material/Add";
import ForumIcon from "@mui/icons-material/Forum";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch, useSelector } from "react-redux";
//import ExpandableButton from "./ExpandableButton";
//import { ExpandMore } from "@mui/icons-material";
import Createpost from "./Createpost";
import Createpage from "./CreatePage";
import { logout } from "../store/userSlice";
import Updatepassword from "./Updatepassword";

function Header() {
  const [expanded, setExpanded] = useState(false);
  const [menuAnchor, setMenuAnchor] = useState(null);
  const menuRef = useRef(null);
  const dispatch = useDispatch([]);

  const lUser = localStorage.getItem("fblogin");
  const localUser = JSON.parse(lUser);
  const user = useSelector((store) => store.user.userDetails || localUser);


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

    localStorage.removeItem("fblogin");
    dispatch(logout());
    window.location.reload();
    // Redirect to the logout page or perform other logout actions
    handleMenuClose();
  };

  // const handleUpdataPassword = () => {};

  // const openCreatePostModal = () => {
  //   setIsCreatePostModalOpen(true);
  // };

  // const closeCreatePostModal = () => {
  //   setIsCreatePostModalOpen(false);
  // };

  const [isPopupVisiblepost, setPopupVisiblepost] = useState(false);
  const [isPopupVisiblePage, setPopupVisiblePage] = useState(false);

  const togglePopuppost = () => {
    setPopupVisiblepost(!isPopupVisiblepost);
  };
  const togglePopupPage = () => {
    setPopupVisiblePage(!isPopupVisiblePage);
  };

  const [isPopupVisiblepassword, setPopupVisiblepassword] = useState(false);

  const togglePopuppassword = () => {
    setPopupVisiblepassword(!isPopupVisiblepassword);
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
          <MenuItem onClick={handleLogout}>
            <LogoutIcon sx={{ marginRight: 1 }} />
            Logout
          </MenuItem>

          <MenuItem onClick={togglePopuppassword}>
            <LogoutIcon sx={{ marginRight: 1 }} />
            Upadate password
          </MenuItem>

          <MenuItem onClick={togglePopuppost}>
            <AddIcon sx={{ marginRight: 1 }} />
            Create a Post
          </MenuItem>

          <MenuItem onClick={togglePopupPage}>
            <AddIcon sx={{ marginRight: 1 }} />
            Create a page
          </MenuItem>
        </Menu>
        {isPopupVisiblepost && <Createpost onClose={togglePopuppost} />}

        {isPopupVisiblePage && <Createpage onClose={togglePopupPage} />}

        {isPopupVisiblepassword && (
          <Updatepassword onClose={togglePopuppassword} />
        )}
      </div>
    </div>
  );
}

export default Header;