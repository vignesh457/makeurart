import React from 'react'
import { useNavigate } from 'react-router-dom';

const buttonSytle = {
  padding: '8px 15px',
  fontSize: '16px',
  background:"#1976D2",
  border: "none",
  borderRadius: "5px",
  color: "white",
  cursor: "pointer"
}
function LoginMui() {
  const navigate = useNavigate();
  const handleLogin = ()=>{
    navigate('/login');
  }
  return (
    <>
        <button style={buttonSytle} onClick={handleLogin}>Log in</button>
    </>
  )
}

export default LoginMui