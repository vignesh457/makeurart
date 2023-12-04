import React,{useState} from 'react'
import css from './Frame.module.css'
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { useDispatch } from 'react-redux';
import { setAlert } from '../Reducers/UserSlice';
import { useNavigate } from 'react-router-dom';

const noFrameStyle = {
  overflow: 'hidden',
  backgroundColor: 'rgb(0 0 0 / 39%)',
  border: 'none',
  borderRadius: '10px'
}

const Frame = React.memo((props)=>{
  const [layer, setLayer] = useState(false);
  const { frames, setFrames, id, owner, type, postPic, postDesc} = props;
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleDelete = async() =>{
    try{
      const deletedPost = await fetch(`https://makeurart-api.vercel.app/api/post/${id}`,{
        method: "DELETE"
      })
      const res = await deletedPost.json();
      if(res.success==false){
        setAlert(res.message)
        return;
      }
      dispatch(setAlert({type: "success", message: "Post deleted successfully"}))
      setFrames(frames.filter(frame => frame._id !== id))
    }
    catch(err){
      dispatch(setAlert({type: "error", message: "Oops! Something went wrong. Please try again later or contact support."}))
      console.log(err)
    }
  }

  const handleEdit = async() =>{
    navigate(`/edit-post/${id}`);
  }

  return (
    <div className={css.ctn}>
      <div className={css.main} style={type!=='Drawing'?noFrameStyle:{}} onMouseOver={()=>setLayer(true)} onMouseLeave={()=>setLayer(false)}>
        {
          owner && layer && 
          <div className={css.frameLayer}>
            <EditRoundedIcon onClick={handleEdit} className={css.editLayer}/>
            <DeleteRoundedIcon onClick={handleDelete} className={css.deleteLayer}/>
          </div>
        }
        <div className={css.mainInner}>
          <img className={imageLoaded?css.isVisible:css.isLoading} onLoad={()=>setImageLoaded(true)} loading='lazy' src={postPic} alt={postDesc}/> 
        </div>
      </div>
    </div>
    
  )
})

export default Frame;