import React, { useState } from 'react'
import errorImg from '../images/404.webp'
import { useNavigate } from 'react-router-dom'

const ctnStyle = {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3A3A3A'
}
const imgStyle = {
    width: '100%'
}

function Error() {
  const navigate = useNavigate();
  return (
    <div style={ctnStyle}>
        <img onClick={()=>navigate('/')} style={imgStyle} src={errorImg} alt="404 - Page Not Found"/>
    </div>
  )
}

export default Error