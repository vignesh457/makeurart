import React,{useEffect, useState} from 'react'
import FileSelect from './FileSelect';
import css from './SignupBox.module.css'
import { useNavigate } from 'react-router-dom';
import TagSelectMui from '../muiComponents/TagSelectMui';
import CloseIcon from '@mui/icons-material/Close';
import {setAlert} from '../Reducers/UserSlice'
import { useSelector, useDispatch } from 'react-redux';

function RegisterBox() {
    const [profileURL, setProfileURL] = useState(null);
    const [bannerURL, setBannerURL] = useState(null);
    const [interests, setInterests] = useState([]);
    const {currentUser} = useSelector(state => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [userData, setUserData] = useState({
        address: { city: "", state: "", country: "" },
        communication: { phoneno: "" },
        socialmedia: { instagram: "", twitter: "", youtube: "", facebook: "" },
        profile: { profilePic: null, bannerPic: null, bio: "" },
    });

    const resetForm = () => {
        setUserData({
            address: { city: "", state: "", country: "" },
            communication: { phoneno: "" },
            socialmedia: { instagram: "", twitter: "", youtube: "", facebook: "" },
            profile: { profilePic: null, bannerPic: null, bio: "" },
        });
    }

    useEffect(() => {
        setUserData({ ...userData, profile: {...userData.profile, profilePic: profileURL, bannerPic: bannerURL } });
    }, [profileURL, bannerURL]);

    const toPascalCase = (str)=>{
        return str.slice(0,1).toUpperCase()+str.slice(1).toLowerCase();
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const [fieldName, subFieldName] = name.split('.');
        const remainingSubFields = userData[fieldName];
        setUserData({...userData,
            [fieldName]: {
                ...remainingSubFields,
                [subFieldName]: value,
            },
        });
    }

    const handleSubmit = async (e) => {
        try{
            e.preventDefault();
            if(interests.length < 3){
                dispatch(setAlert({type: 'warning', message: "Please select more then 3 Interests"}))
                return;
            }
            const registerData = await fetch("/api/register",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...userData,
                    interests,
                    userRef: currentUser?._id,
                    username: currentUser?.username,
                    email: currentUser?.email,
                    joinDate: currentUser?.timestamp,
                    profile:{...userData.profile, profilePic: profileURL?profileURL:currentUser?.avatar}
                }),
            });
            const res = await registerData.json();
            if(res.success===false){
                dispatch(setAlert({type: 'error', message: res.message}))
                return;
            }
            dispatch(setAlert({type: 'success', message: "Registration Success"}))
            resetForm();
            navigate('/')
        }
        catch(err){
            dispatch(setAlert({type: 'error', message: "Oops! Something went wrong. Please try again later or contact support."}))
            console.log(err);
        }
    }

  return (
    <form className={css.main} onSubmit={handleSubmit}>
        {/* address */}
        <h1>Create your Profile</h1>
        <h3 className={css.creatorHeader}>Address</h3>
        <label htmlFor="city">
            City *
            <input type="text" name="address.city" id="city" value={toPascalCase(userData.address.city)} onChange={handleInputChange} required/>
        </label>
        <label htmlFor="state">
            State *
            <input type="text" name="address.state" id="state" value={toPascalCase(userData.address.state)} onChange={handleInputChange} required/>
        </label>
        <label htmlFor="country">
            Country *
            <input type="text" name="address.country" id="country" value={toPascalCase(userData.address.country)} onChange={handleInputChange} required/>
        </label>
        {/* communication */}
        <h3 className={css.creatorHeader}>Communication</h3>
        <label htmlFor="phoneno">
            Phone number *
            <input type="tel" name="communication.phoneno" id="phoneno" minLength={10 } maxLength={10} value={userData.communication.phoneno} onChange={handleInputChange} required/>
        </label>
        {/* social media */}
        <h3 className={css.creatorHeader}>Social media</h3>
        <label htmlFor="instagram">
            Instagram *
            <input type="url" name="socialmedia.instagram" id="instagram" value={userData.socialmedia.instagram} onChange={handleInputChange} placeholder='https://www.example.com' required/>
        </label>
        <label htmlFor="twitter">
            Twitter *
            <input type="url" name="socialmedia.twitter" id="twitter" value={userData.socialmedia.twitter} onChange={handleInputChange} placeholder='https://www.example.com' required/>
        </label>
        <label htmlFor="youtube">
            Youtube (optional) 
            <input type="url" name="socialmedia.youtube" id="youtube" value={userData.socialmedia.youtube} onChange={handleInputChange} placeholder='https://www.example.com'/>
        </label>
        <label htmlFor="facebook">
            Facebook (optional) 
            <input type="url" name="socialmedia.facebook" id="facebook" value={userData.socialmedia.facebook} onChange={handleInputChange} placeholder='https://www.example.com'/>
        </label>
        {/* profile */}
        <h3 className={css.creatorHeader}>Profile</h3>
        <label htmlFor="profilePic">
            Profile photo (optional)
            <FileSelect setImageURL={setProfileURL}/>
            {userData.profile.profilePic && <img style={{height: '70px'}} src={userData.profile.profilePic} alt="" />}
        </label>
        <label htmlFor="profileBanner">
            Banner photo (optional)
            <FileSelect setImageURL={setBannerURL}/>
            {userData.profile.bannerPic && <img style={{height: '70px'}} src={userData.profile.bannerPic} alt="" />}
        </label>
        <label htmlFor="bio">
            Bio *
            <textarea className={css.bioCtn} id="bio" rows="5" maxLength={300} name="profile.bio" value={userData.profile.bio} onChange={handleInputChange} required></textarea>
        </label>
        <p>Character Count: {userData.profile.bio.length} / 300</p>
        <h3 className={css.creatorHeader}>Interests<span className={css.subHeading}>(minimum 3)</span></h3>
            <TagSelectMui setInterests={setInterests} interests={interests} name="Interests"/>
        <div className={css.tagSelectCtn}>
            {
                interests.map((tag) => {
                    return (
                        <span key={tag} >
                            {tag}
                            <span className={css.closeBtn} onClick={() => setInterests(interests.filter((t) => t!== tag))}>
                                <CloseIcon fontSize='small' />
                            </span>
                        </span>
                    )
                })
            }
        </div>
        <button className={css.authButton} type="submit">Submit</button>
    </form>
  )
}

export default RegisterBox;