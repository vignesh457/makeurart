import React, { useEffect, useState } from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './PostSwiper.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAlert } from '../Reducers/UserSlice';

const PostSwiper = React.memo((props) =>{
  const isMobile = useMediaQuery({maxWidth : 650});
  const [posts, setPosts] = useState([]);
  const [imageLoaded, setImageLoaded] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchPosts = async()=>{
    try{
      const postData = await fetch(`/api/post/category/${props.type}`)
      const res = await postData.json();
      if(res.success===false){
        throw new Error(res.message);
      }
      setPosts(res);
    }
    catch(err){
      dispatch(setAlert({type: 'warning', message: "Sorry, unable to load swiper data"}))
      console.error(err);
    }
  }

  useEffect(()=>{
    fetchPosts()
  },[])

  return (
    <>
      <Swiper
        slidesPerView={isMobile?2:4}
        slidesPerGroup={1}
        spaceBetween={10}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        allowTouchMove={true}
        className="mySwiper"
      >
        {
          posts.map((post)=>(
            <SwiperSlide key={post._id} >
              <div className='swiper-slide-inner'>
                <img onClick={()=>navigate(`/post/${post._id}`)} className={imageLoaded?'isVisibleSwiper':'isLoadingSwiper'} onLoad={()=>setImageLoaded(true)} loading='lazy' src={post.postPic} alt={post.description}/> 
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
})

export default PostSwiper;
