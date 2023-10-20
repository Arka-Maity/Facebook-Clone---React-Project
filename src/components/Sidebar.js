import React from 'react'
import "../styles/sidebar.css"
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from  "@mui/icons-material/EmojiFlags";
import PeopleIcon   from  "@mui/icons-material/People";
import ChatIcon from  "@mui/icons-material/Chat";
import StorefrontIcon from  "@mui/icons-material/Storefront";
import  VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSelector } from 'react-redux';


function Sidebar()  {
  const user=useSelector(store=>store.user.userDetails);
  return (
  <div className='sidebar'>
    <SidebarRow  src='' title={(user?.data?.name)|| (user?.data?.user?.name) } /> 

    <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center"/> 
   
    <SidebarRow Icon={EmojiFlagsIcon} title="page"/> 

    <SidebarRow Icon={PeopleIcon} title="Frieds" />

    <SidebarRow Icon={ChatIcon} title="Messaenger"/>

    <SidebarRow Icon={StorefrontIcon} title="Marketplace"/> 

    <SidebarRow Icon={VideoLibraryIcon} title="videos"/>
    
    <SidebarRow Icon={ExpandMoreIcon} title="See More"/>

   

    
  </div>
  )
}

export default Sidebar