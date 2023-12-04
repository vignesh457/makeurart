import React, {useState } from 'react'
import css from './SignupBox.module.css'
import { setAlert } from '../Reducers/UserSlice'
import { useNavigate } from 'react-router-dom'
import OAuthBtn from './OAuthBtn'
import { useDispatch } from 'react-redux';
import {setCurrentUser} from '../Reducers/UserSlice'

function SignupBox() {
    const [userData, setUserData] = useState({username: "", email: "", password: ""})
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const toPascalCase = (str)=>{
        return str.slice(0,1).toUpperCase()+str.slice(1).toLowerCase();
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            const userResponse = await fetch("https://makeurart-api.vercel.app/api/auth/signup",{
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });
            const res = await userResponse.json();
            if(res.success===false){
                dispatch(setAlert({type: 'error', message: res.message}))
            }
            dispatch(setAlert({type: 'success', message: "Signup was successful"}));
            // store the user data to redux
            dispatch(setCurrentUser({...res}));
            navigate("/user-type");
        }
        catch(err){
            dispatch(setAlert({type: 'error', message: "Oops! Something went wrong. Please try again later or contact support."}))
            console.log(err);
        }
        //reseting userData
        setUserData({username: "", email: "", password: ""})
    }

    const handleUserData = (e)=>{
        const {name, value} = e.target;
        setUserData({...userData, [name]: value})
    }

  return (
        <form className={css.main} onSubmit={handleSubmit}>
            <h2 className={css.authHeader}>Welcome to Nooks 😊</h2>
            <label htmlFor="username">
                Username *
                <input type="text" name="username" id="username" value={toPascalCase(userData.username)} onChange={handleUserData} autoComplete="username" placeholder='john' required/>
            </label>
            <label htmlFor="email">
                Email *
                <input type="email" name="email" id="email" value={userData.email} onChange={handleUserData} autoComplete="email" placeholder='youremail@example.com' required/>
            </label>
            <label htmlFor="password">
                Password *
                <input type="password" name="password" id="password" value={userData.password} onChange={handleUserData} autoComplete="current-password" placeholder='*****' required/>
            </label>
            <button className={css.authButton} type="submit">Sign up</button>
            <OAuthBtn/>
            <p>Already have an account?  <span style={{color: "#1976D2",cursor:"pointer"}} onClick={()=>navigate('/login')}>Log in</span></p>
        </form>
    )
}

export default SignupBox