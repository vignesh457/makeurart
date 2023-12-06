import React,{useState, useEffect} from 'react'
import css from './Gallery.module.css'
import Frame from './Frame';
import Tooltip from '@mui/material/Tooltip';
import postBtnImg from '../images/postBtn.png'
import { Zoom } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAlert, setLoader } from '../Reducers/UserSlice';
const Review = React.lazy(()=>import('./Review'))

const Gallery = React.memo(() => {
  const navigate = useNavigate()
  const [frames, setFrames] = useState([])
  const [owner, setOwner] = useState(false)
  const {currentUser} = useSelector(state => state.user)
  const params = useParams();
  const dispatch = useDispatch()

  const fetchAllUsers = async()=>{
    try{
      dispatch(setLoader(true));
      const allPostResponse = await fetch(`/api/post/${params.id}`);
      const allPosts = await allPostResponse.json();
      if(allPosts.success===false){
        throw new Error(allPosts.message);
      }
      setFrames(allPosts);
      dispatch(setLoader(false));
    }
    catch(err){
      dispatch(setLoader(false));
      dispatch(setAlert({type: 'warning', message: "Sorry, unable to load the posts"}))
      navigate('/')
      console.error(err);
    }
  }

  const handleAddPost = ()=>{
    navigate('/create-post')
  }

  useEffect(() => {
    fetchAllUsers();
  },[]);

  useEffect(() => {
    setOwner(currentUser?._id === params.id)
  },[currentUser,params.id]);

  return (
    <>
    <div className={css.main}>
      { owner && <Tooltip title="Post Artwork" TransitionComponent={Zoom} arrow><img onClick={handleAddPost} className={css.postBtn} src={postBtnImg}/></Tooltip> } 
      {
        frames.map((frame,index)=>(
          <Frame key={frame._id} frames={frames} setFrames={setFrames} id={frame._id} owner={owner} type={frame.category} postPic={frame.postPic} postDesc={frame.description}/>
        ))
      }
      {frames.length===0 &&<><h1 className={css.noPostHeading}><span className={css.loader}></span> No posts yet</h1></> }
    </div>
    <Review key={params.id}/>
    </>
  )
})

export default Gallery;