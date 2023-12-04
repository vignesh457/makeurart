import React,{useState} from 'react'
import css from './Card.module.css'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Rating from '@mui/material/Rating';
import { useNavigate } from 'react-router-dom';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Card = React.memo((props) => {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleClick = ()=>{
    navigate(`/user/${props.id}`)
  }
  return (
    <div className={css.main} onClick={handleClick}>
        <div className={css.header}>
            <div className={css.dpCtn}>
              <img className={imageLoaded?css.isVisible:css.isLoading} onLoad={()=>setImageLoaded(true)} loading='lazy' src={props.avatar} alt=""/> 
            </div>
        </div>
        <div className={css.body}>
            <h3 className={css.name}>{props.name}</h3>
            <h5 className={css.location}> <LocationOnOutlinedIcon fontSize='small'/> {props.city}, {props.country}</h5>
            <div className={css.tagCtn}>
              <div className={css.tagCtnInner}>
                {props.interests.map((interest) =>(
                  <span key={interest}>{interest}</span>
                ))}
              </div>
            </div>
            <h5 className={css.bio}>{props.bio?.slice(0,60)+"..."}</h5>
            <div className={css.rating}><Rating style={{fontSize: '21px'}} name="read-only" value={props.rating} precision={0.5} readOnly className={css.ratingIcon} /> {props.review} reviews</div>
        </div>
    </div>
  )
})

export default Card