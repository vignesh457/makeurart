import React, { useEffect, useState } from 'react'
import css from './HomeGallery.module.css'
import { useNavigate, useParams } from 'react-router-dom';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useDispatch } from 'react-redux';
import { setLoader } from '../Reducers/UserSlice';
import Post from './Post';

const HomeGallery = React.memo(() => {
  const [posts, setPosts] = useState([]);
  const [hover, setHover] = useState(null);
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchPosts = async()=>{
    try{
      dispatch(setLoader(true))
      const postData = await fetch(`/api/post/category/${params.id}`)
      const res = await postData.json();
      setPosts(res);
      dispatch(setLoader(false))
    }
    catch(err){
      console.log(err);
      dispatch(setLoader(false))
    }
  }

  useEffect(()=>{
    fetchPosts()
  },[params.id])

  return (
    <div className={css.main}>
        {
          posts.map((post)=>(
              <div key={post._id} onMouseOver={()=>setHover(post._id)} onMouseLeave={()=>setHover(null)} className={css.postImgCtn}>
                {
                  hover===post._id &&
                  <div className={css.postImgLayer} onClick={()=>navigate(`/post/${post._id}`)}>
                    <div className={css.postImgLayerTextCtn}>
                      <h3>{post.artBy}</h3>
                      <p>{post.description}</p>
                    </div>
                  </div>
                }
                <Post postPic={post.postPic} postDesc={post.description}/>
               </div>
          ))
        }
        {posts.length===0 &&<><h1 className={css.noPostHeading}><span className={css.loader}></span> No search results</h1></> }
    </div>
  )
})

export default HomeGallery