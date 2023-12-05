import React,{useState} from 'react'
import css from './HomeGallery.module.css'
import { useNavigate } from 'react-router-dom'

const Post = React.memo(({postPic, postDesc, postId})  =>{
    const [imageLoaded, setImageLoaded] = useState(false)
    const navigate = useNavigate()

    return (
        <img className={imageLoaded?css.isVisible:css.isLoading} onClick={()=>navigate(`/post/${postId}`)} onLoad={()=>setImageLoaded(true)} loading='lazy' src={postPic} alt={postDesc}/>
    )
})

export default Post