import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { setAlert } from '../Reducers/UserSlice';

function PrivateRoute() {
    const {currentUser} = useSelector(state=>state.user)
    const dispatch = useDispatch();
    useEffect(()=>{
      if(!currentUser)
        dispatch(setAlert({type:"warning", message:"Please Login first to perform that Action"}))
    },[])
  return (
    <div>
        { currentUser?<Outlet/>:<Navigate to={"/login"} />}
    </div>
  )
}

export default PrivateRoute