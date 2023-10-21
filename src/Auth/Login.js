import React from 'react'
import "../styles/Login.css"
import login_logo1  from  "../img/login_logo1.png"
import login_text from "../img/logo_text.png"
import { Button } from '@mui/material';


function Login() {
  const signIn = () =>{
    
    auth.signInWithPopup(provider)
    .then(result=>{
        console.log(result)
    }).catch(error=> alert(error.message))
  };

  return (
    <div className='login'>
     
     <div className='login__logo' >
      <img src={login_logo1} />
       <img src={login_text} />
      </div>   
      
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>

    </div>
  )
}

export default Login