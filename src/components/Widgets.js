
import { Hidden } from '@mui/material'
import React from 'react'
import "../styles/Widgets.css"

function Widgets() {
  return (
    <div className='widgets'>
    <iframe title='advertisement'
     src="https://programiz.pro"
     width="340"
     height="100%"
     style={{border:"none",overflow:Hidden}}
     overflow="no"
     frameBorder="0"
     allowTransparency="ture" 
     allow="encrypted-media"
    >Advertisement</iframe>    
    </div>
  )
}

export default Widgets