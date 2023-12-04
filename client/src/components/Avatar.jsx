import { Skeleton } from '@mui/material';
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const isVisible = {
    height: '50px',
    borderRadius: '50%',
    border: '2px solid #818181',
    marginRight: '7px',
    transition: 'all 0.5s ease-in-out',
    opacity: '1'
}
const isLoading = {
    height: '50px',
    width: '50px',
    borderRadius: '50%',
    border: '2px solid #818181',
    marginRight: '7px',
    background: "black",
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    opacity: '0'
}

function Avatar() {
  const navigate = useNavigate();
  const {currentUser} = useSelector((state) => state.user);
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <>
      <img style={imageLoaded?isVisible:isLoading} onClick={()=>navigate(`/user/${currentUser._id}`)} onLoad={()=>setImageLoaded(true)} loading='lazy' src={currentUser.avatar} alt={currentUser.bio}/> 
    </>
  )
}

export default Avatar