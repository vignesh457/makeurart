import React,{useState, useEffect} from 'react'
import Card from '../components/Card';
import { setLoader } from '../Reducers/UserSlice';
import { useDispatch } from 'react-redux';
import PostSwiper from '../components/PostSwiper';
import css from '../pages/Home.module.css';
import { useNavigate } from 'react-router-dom';


const HomeMain = React.memo(() => {
    const [creators, setCreators] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const fetchAllUsers = async()=>{
      try{
        dispatch(setLoader(true))
        const allUserResponse = await fetch('/api/register/');
        const allUsers = await allUserResponse.json();
        setCreators(allUsers);
        dispatch(setLoader(false))
      }
      catch(err){
        console.error(err);
        dispatch(setLoader(false))
      }
    }
  
    useEffect(() => {
      fetchAllUsers();
    },[]);
    
  
  return (
    <>
        <div className={css.bannerCtn}>
          <span className={css.bannerHeading}>Discover a World of Artistry</span>
          <span className={css.bannerSubHeading}>Discover captivating drawing, stunning digital art, and unique crafts from global artists. Your gateway to a vibrant canvas of creativity.  Elevate your space with original artworks that capture the spirit of individual expression. </span>
        </div>
        <h1 className={css.headerHome}><span onClick={()=>navigate('/posts/Drawing')}>Drawings</span></h1>
        <PostSwiper key='drawing' type="Drawing"/>
        <h1 className={css.headerHome}><span onClick={()=>navigate('/posts/DigitalArt')}>Digital Arts</span></h1>
        <PostSwiper key='digitalart' type="DigitalArt"/>
        <h1 className={css.headerHome}><span onClick={()=>navigate('/posts/Craft')}>Crafts</span></h1>
        <PostSwiper key='craft' type="Craft"/>
        <h1 className={css.headerHome}><div>Our Artists</div></h1>
        <div className={css.artistCtn}>
          {
            creators.map((creator)=>(
                <Card 
                  key={creator?.userRef} 
                  name={creator?.username} 
                  avatar={creator?.profile.profilePic}
                  city={creator?.address.city}
                  country={creator?.address.country}
                  bio={creator?.profile.bio}
                  interests={creator?.interests}
                  rating={parseFloat((creator?.comments?.reduce((sum, comment)=>sum+comment.rating||0,0)/creator.comments.length).toFixed(1))}
                  review={creator?.comments.length}
                  id={creator?.userRef}
                />
            ))
          }
        </div>
    </>
  )
})

export default HomeMain