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

const PostSwiper = React.memo((props) =>{
  const isMobile = useMediaQuery({maxWidth : 600});
  const [posts, setPosts] = useState([]);
  const [imageLoaded, setImageLoaded] = useState(false)
  const navigate = useNavigate();

  const fetchPosts = async()=>{
    try{
      const postData = await fetch(`https://makeurart-api.vercel.app/api/post/category/${props.type}`)
      const res = await postData.json();
      setPosts(res);
    }
    catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    fetchPosts()
  },[])

  return (
    <>
      <Swiper
        slidesPerView={isMobile?3:4}
        slidesPerGroup={1}
        spaceBetween={10}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2000,
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
