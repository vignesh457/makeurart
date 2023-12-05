import React from 'react'
import { useDispatch } from 'react-redux';
import { removeCurrentUser } from '../Reducers/UserSlice';
import { setAlert } from '../Reducers/UserSlice';

const buttonSytle = {
    padding: '8px 15px',
    fontSize: '16px',
    background:"#CC2533",
    border: "none",
    borderRadius: "5px",
    color: "white",
    cursor: "pointer"
  }

function LogoutMui() {
  const dispatch = useDispatch();

  const handleLogout = async() => {
    const userResponse = await fetch("/api/auth/logout")
    const res = await userResponse.json();
    if(res.success===false){
      console.log("Logout failed : ",userResponse);
      dispatch(setAlert({type: 'error', message: "Logout failed"}));
    }
    else{
      dispatch(setAlert({type: 'success', message: "Successfully Logged out"}))
      dispatch(removeCurrentUser());
    }
  }

  return (
    <button style={buttonSytle} onClick={handleLogout}>Logout</button>
  )
}

export default LogoutMui