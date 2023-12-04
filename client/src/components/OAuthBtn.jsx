import React from 'react'
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth';
import {app} from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {setCurrentUser} from '../Reducers/UserSlice'

const mySytle = {
  width: '100%',
  backgroundColor: '#CC2533',
  color: '#D8D8D8',
  border: 'none',
  borderRadius: '5px',
  padding: '8px',
  fontWeight: '700',
  fontSize: '15px',
  cursor: 'pointer',
}

function OAuthBtn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleGoogleAuth = async() => {
    try{
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      const userResponse = await fetch("https://makeurart-api.vercel.app/api/auth/google",{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username: result.user.displayName, email: result.user.email, password: result.user.uid, avatar: result.user.photoURL})
      })
      const res = await userResponse.json();
      if(res.success===false){
        console.log("couldn't authenticate using google : ",res.message);
        return;
      }
      // // store the user data to redux
      dispatch(setCurrentUser({...res}));
      (res.usertype==='none') ? navigate('/user-type') : navigate('/');
    }
    catch(err){
      console.log("Oops! Something went wrong. Please try again later or contact support : " + err);
    }
  }

  return (
     <button type="button" style={mySytle} onClick={handleGoogleAuth}>Continue with Google</button>
  )
}

export default OAuthBtn