import React,{useEffect, useState, useMemo} from 'react'
import css from './ProfileHeader.module.css'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import Rating from '@mui/material/Rating';
import LogoutMui from '../muiComponents/LogoutMui';
import EditIcon from '@mui/icons-material/Edit';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Zoom } from '@mui/material';
import { setActivePage, setLoader } from '../Reducers/UserSlice';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ProfileHeader = React.memo(() =>{
  const [userData, setUserData] = useState({});
  const [imageLoadedDp, setImageLoadedDp] = useState(false);
  const [imageLoadedBio, setImageLoadedBio] = useState(false);
  const [owner, setOwner] = useState(false);
  const {currentUser, activePage} = useSelector(state=>state.user)
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchUserData = async() =>{
    try{
      const data = await fetch(`https://makeurart-api.vercel.app/api/register/${params.id}`)
      const res = await data.json();
      setUserData(res);
      dispatch(setActivePage(res));
    }
    catch(err){
      console.error(err);
    }
  }

  const handleEdit = ()=>{
    navigate(`/edit/${params.id}`)
  }

  const averageRating = useMemo(() => {
      const sum = activePage.comments.reduce((sum, comment) => sum + comment.rating||0,0);
      const average = sum/activePage.comments.length || 0;
      return parseFloat(average.toFixed(1));
  },[activePage.comments])

  useEffect(() => {
    fetchUserData();
    setOwner(currentUser?._id===params.id);
  },[currentUser])

  return (
    <div className={css.main}>
        <div className={css.banner}>
            <img className={imageLoadedBio?css.isVisibleBio:css.isLoadingBio} onLoad={()=>setImageLoadedBio(true)} loading='lazy' src={userData?.profile?.bannerPic} alt='banner'/> 
            <button className={css.homeBtn} onClick={()=>navigate('/')}>
              <Tooltip title="Back to Home" TransitionComponent={Zoom} placement="top" arrow><HomeRoundedIcon fontSize='large'/></Tooltip>
            </button>
        </div>
        <div className={css.body}>
            <div className={css.dpCtn}>
              <img className={imageLoadedDp?css.isVisibleDp:css.isLoadingDp} onLoad={()=>setImageLoadedDp(true)} loading='lazy' src={userData?.profile?.profilePic} alt='avatar'/> 
            </div>
            { owner && <Tooltip title="Edit Profile"><div className={css.editCtn} onClick={handleEdit}><EditIcon/></div></Tooltip> }
            { owner && <div className={css.logoutCtn}><LogoutMui/></div> }
          <h3 className={css.name}>{userData?.username}</h3>
          <div className={css.rating}><Rating name="read-only" value={averageRating} precision={0.5} readOnly className={css?.ratingIcon} />  {activePage.comments.length} reviews</div>
          <div className={css.history}>
            <span><LocationOnOutlinedIcon className={css.historyIcon}/>{userData?.address?.city}, {userData?.address?.country}</span>
            <span><CalendarMonthOutlinedIcon className={css.historyIcon}/>Joined {userData?.joinDate}</span>
          </div>
          <hr/>
          <div className={css.bioCtn}>
            <h5>{userData.profile?.bio}</h5><br/>
          </div>
          <div className={css.tagCtn}>
              <div className={css.tagCtnInner}>
              {
                userData?.interests?.map((interest) =>(
                  <span key={interest}># {interest}</span>
                ))
              }
              </div>
            </div>
        </div>
    </div>
  )
})

export default ProfileHeader;