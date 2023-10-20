import React from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Typography, Avatar } from '@material-ui/core';
import { makeStyles, fade } from '@material-ui/core/styles';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StoreIcon from '@mui/icons-material/Store';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "../styles/Header.css";
import flogo from "../img/flogo.jpg"



const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: 'white',
  },
  logo: {
    marginRight: theme.spacing(2),
    height:"5px",
    width: "5px"
  },
  search: {
    position: 'relative',
    borderRadius:'25px',
    backgroundColor:"#eff2f5",
    color:"black",
    '&:hover': {
      backgroundColor:"gray",
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionIcons: {
    display: 'flex',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(0, 2),
    },
  },
  avatar: {
    marginLeft: theme.spacing(2),
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <div className={classes.logo}>
        <img
        src={flogo}
      alt="logo"/>
        </div>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Facebook Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
        <div className={classes.sectionIcons}>
          <IconButton color="gray">
            <HomeIcon />
          </IconButton>
          <IconButton color="gray">
            <FlagIcon />
          </IconButton>
          <IconButton color="gray">
            <SubscriptionsIcon />
          </IconButton>
          <IconButton color="gray">
            <StoreIcon />
          </IconButton>
          <IconButton color="gray">
            <AccountCircleIcon />
          </IconButton>
        </div>
        <div style={{ flex: 1 }} />
        <div className={classes.sectionIcons}>
          <IconButton color="gray">
            <ForumIcon />
          </IconButton>
          <IconButton color="gray">
            <NotificationsIcon />
          </IconButton>
          <IconButton color="gray">
            <ExpandMoreIcon />
          </IconButton>
          <Avatar alt="User Avatar" src="/path/to/avatar.jpg" className={classes.avatar} />
          <Typography variant="45" style={{color:"black"}}>
           Username
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;