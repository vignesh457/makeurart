import React,{useState} from 'react'
import css from './SignupBox.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentUser } from '../Reducers/UserSlice'
import visitorImg from '../images/visitor.svg'
import creatorImg from '../images/creator.svg'
import { useNavigate } from 'react-router-dom'
import { setAlert } from '../Reducers/UserSlice'


function SelectUserType() {
    const [usertype, setUsertype] = useState("")
    const {currentUser} = useSelector(state=>state.user)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = (e) =>{
        setUsertype(e.target.alt);
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        if(!usertype){
            dispatch(setAlert({type: "warning", message: "Please select usertype"}))
            return;
        }
        try{
            const userResponse = await fetch(`https://makeurart-api.vercel.app/api/auth/${currentUser?._id}`,{
                method:"PUT",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    usertype:usertype
                })
            })
            const res = await userResponse.json();
            if(res.success===false){
                dispatch(setAlert({type: "error", message: res.message}))
                return;
            }
            dispatch(setCurrentUser({...res}));
            (usertype==='creator') ? navigate('/register') : navigate('/');
        }
        catch(err){
            dispatch(setAlert({type: 'error', message: "Oops! Something went wrong. Please try again later or contact support."}))
            console.error(err);
        }
    }

    return (  
        <form className={css.main} onSubmit={handleSubmit}>
            <h3 style={{color: "#d8d8d8"}}>I am a,</h3>
            <div className={css.usertypeRadioCtn}>
                <label className={css.usertypeRadio}>
                    <img className={css.usertypeImg} style={usertype==='visitor'?{'border' : '5px solid grey'}:{}} src={visitorImg} onClick={handleClick} alt="visitor"/>
                    Visitor
                    <p style={{color: '#595959'}}>Iam here to explore or buy artworks</p>
                </label>
                <label className={css.usertypeRadio}>
                    <img className={css.usertypeImg} src={creatorImg} style={usertype==='creator'?{'border' : '5px solid grey'}:{}} onClick={handleClick} alt="creator"/>
                    Creator
                    <p style={{color: '#595959'}}>Iam here to create or sell artworks</p>
                </label>
            </div>
            <button className={css.authButton} type="submit">Confirm</button>
        </form>
    )
}

export default SelectUserType