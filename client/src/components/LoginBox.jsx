import React,{useState} from 'react'
import css from './LoginBox.module.css'
import {useNavigate} from "react-router-dom"
import OAuthBtn from './OAuthBtn'
import { useDispatch } from 'react-redux';
import {setCurrentUser} from '../Reducers/UserSlice'
import {setAlert} from '../Reducers/UserSlice'

function LoginBox() {
    const [userData, setUserData] = useState({username: "", password: ""})
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            const userResponse = await fetch("https://makeurart-api.vercel.app/api/auth/login",{
                method: 'POST',
                credentials: 'include',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });
            const res = await userResponse.json();
            if(res.success===false){
                dispatch(setAlert({type: 'error', message: res.message}))
                return;
            }
            dispatch(setAlert({type: 'success', message: "Successfully logged in"}));
            // store the user data to redux
            console.log(res)
            dispatch(setCurrentUser({...res}));
            navigate("/")
        }
        catch(err){
            dispatch(setAlert({type: 'error', message: "Oops! Something went wrong. Please try again later or contact support."}))
            console.log(err);
        }
        //reseting userData
        setUserData({username: "", password: ""})
    }
    const handleUserData = (e)=>{
        const {name, value} = e.target;
        setUserData({...userData, [name]: value})
    }

    return (
        <form onSubmit={handleSubmit} className={css.main}>
            <h2 className={css.authHeader}>Welcome to Nooks 😊</h2>
            <label htmlFor="email">
                Email *
                <input type="email" name="email" id="email" placeholder='youremail@example.com' autoComplete="email" onChange={handleUserData} required />
            </label>
            <label htmlFor="password">
                Password *
                <input type="password" name="password" id="password" placeholder='*****' autoComplete="current-password" onChange={handleUserData} required/>
            </label>
            <button className={css.authButton} type="submit">Log in</button>
            <OAuthBtn/>
            <p>Didn't have an account?  <span style={{color: "#1976D2",cursor:"pointer"}} onClick={()=>navigate('/signup')}>Sign up</span></p>
        </form>
  )
}

export default LoginBox