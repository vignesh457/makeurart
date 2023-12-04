import React from 'react'
import css from './ProfileBody.module.css'
import Navinner from './Navinner';
import { Outlet } from "react-router-dom";

const ProfileBody = React.memo(() => {
  return (
    <div className={css.main}>
      <Navinner/>
      <Outlet/>
    </div>
  )
})

export default ProfileBody