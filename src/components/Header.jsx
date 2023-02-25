import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import  {UserContext} from '../UserContext';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CreateIcon from '@mui/icons-material/Create';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';


function Header() {
  const {setUserInfo, userInfo} = useContext(UserContext)
  useEffect( ()=>{
    fetch('http://localhost:4000/profile', {
    credentials: 'include',
    }).then(response => {
     response.json().then(userInfo=>{
      setUserInfo(userInfo);
     })
    })
  },[])

  const username = userInfo?.username;
  function logout() {
    fetch('http://localhost:4000/logout',{
      method:"POST",
      credentials:'include',
    }) 
    setUserInfo(null);
  }

  return (
    <header>
        <Link to="/" className="logo">My Blogs</Link>
        <nav>
          {username && (
            <>
            <AccountCircleIcon />{username}
            <Link className='button' to="create"> <CreateIcon /> Create New Post </Link>
            <a className='button' onClick={logout}> <LogoutIcon />Logout</a>
            </>
          )}{!username &&(
            <>
            <Link className='button' to="/login"> <LoginIcon /> Login </Link>
            <Link className='button' to="/register"> <HowToRegIcon /> Register </Link>
            </>
          )}
          
        </nav>
      </header>
  )
}

export default Header