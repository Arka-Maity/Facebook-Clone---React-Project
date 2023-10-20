import { Avatar } from '@mui/material'
import React from 'react'
import "../styles/Story.css"

function Story({image,profileSrc,title}) {
  return (
    <div style={{backgroundImage:`url(${image})`}} className='story'>
       <Avatar src={profileSrc} className="story_avatar"/>
       <h4>{title}</h4>
    
    </div>
  )
}

export default Story