import React,{useState} from 'react'
import css from './HomeGallery.module.css'

const Post = React.memo(({postPic, postDesc})  =>{
    const [imageLoaded, setImageLoaded] = useState(false)

    return (
        <img className={imageLoaded?css.isVisible:css.isLoading} onLoad={()=>setImageLoaded(true)} loading='lazy' src={postPic} alt={postDesc}/>
    )
})

export default Post