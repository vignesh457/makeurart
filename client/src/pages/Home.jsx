import React from 'react'
import css from './Home.module.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';


const Home = React.memo(() => {
  return (
    <>
    <div className={css.main}>
        <Navbar/>
        <Outlet/>
    </div>
    <Footer/>
    </>
  )
})

export default Home;