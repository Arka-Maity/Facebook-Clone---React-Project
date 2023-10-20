import React from 'react'
import "../styles/SidebarRow.css"
import { Avatar } from '@mui/material'
function SidebarRow({src,Icon,title}) {
  return (
    <div className=" sbr-sidebarRow">
        {src && <Avatar src={src}/>}
        {Icon && <Icon/>}
          
         <p>{title}</p>
    </div>
  )
}

export default SidebarRow