import React from 'react'
import css from './Auth.module.css'
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import { Tooltip, Zoom } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';


function Auth() {
  const navigate = useNavigate();

  return (
    <>
    <div className={css.main}>
        <button className={css.homeBtn} onClick={()=>navigate('/')}>
          <Tooltip title="Back to Home" TransitionComponent={Zoom} placement="top" arrow><HomeRoundedIcon fontSize='large'/></Tooltip>
        </button>
        <Outlet/>
    </div>
    <Footer/>
    </>
  )
}

export default Auth