import React from 'react'
import css from './Navbar.module.css'
import LoginMui from '../muiComponents/LoginMui';
import SearchMui from '../muiComponents/SearchMui';
import MenuMui from '../muiComponents/MenuMui';
import logo from '../images/v.png'
import SelectMui from '../muiComponents/SelectMui';
import { useMediaQuery } from 'react-responsive'
import { useSelector } from 'react-redux';
import Avatar from './Avatar';
import LogoutMui from '../muiComponents/LogoutMui';
import { useNavigate } from 'react-router-dom';


const Navbar = React.memo(() =>{
  const isMobile = useMediaQuery({maxWidth : 600});
  const {currentUser} = useSelector(state=>state.user);
  const navigate = useNavigate()

  return (
    <div className={css.main}>
      <div className={css.logoCtn} onClick={()=>navigate('/')}>
        <img loading='lazy' src={logo} alt="logo"/>
      </div>
      <div className={css.searchCtn}>
        <SearchMui/>
      </div>
      { !isMobile ?
        <>
          <div className={css.sortCtn}>
            <SelectMui/>
          </div>
          <div className={css.logCtn}>
            { currentUser ? (currentUser.usertype==='creator'?<Avatar/>:<LogoutMui/>) : <LoginMui/>}
          </div>
        </>
        : <div className={css.menuCtn}><MenuMui/></div> 
      } 
    </div>
  )
})

export default Navbar