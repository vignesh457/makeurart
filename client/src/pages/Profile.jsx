import React,{useEffect} from 'react'
import css from './Profile.module.css'
import ProfileHeader from '../components/ProfileHeader'
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Profile = React.memo(() => {
  return (
    <div className={css.main}>
      <div className={css.mainInner}>
        <ProfileHeader/>
        <Outlet/>
        <Footer/>
      </div>
    </div>
  )
})

export default Profile;