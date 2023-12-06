import { Skeleton } from '@mui/material';
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const myStyle = {
  background: 'red',
  height: '50px',
  width: '50px',
  borderRadius: '50%',
  border: '2px solid #818181',
  marginRight: '7px',
  background: "black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
}
const isVisible = {
    maxHeight: '100%',
    maxWidth: '100%',
    transition: 'all 0.5s ease-in-out',
    opacity: '1'
}
const isLoading = {
    minHeight: '100%',
    minWidth: '100%',
    opacity: '0'
}

function Avatar() {
  const navigate = useNavigate();
  const {currentUser} = useSelector((state) => state.user);
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div style={myStyle}>
      <img style={imageLoaded?isVisible:isLoading} onClick={()=>navigate(`/user/${currentUser._id}`)} onLoad={()=>setImageLoaded(true)} loading='lazy' src={currentUser.avatar} alt={currentUser.bio}/> 
    </div>
  )
}

export default Avatar