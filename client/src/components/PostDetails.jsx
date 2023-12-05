import React,{useState, useEffect} from 'react'
import css from './PostDetails.module.css'
import { Rating } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAlert, setLoader } from '../Reducers/UserSlice';
import Comment from './Comment';


const PostDetails = React.memo(() => {
    const [postData, setPostData] = useState(null);
    const [imageLoaded, setImageLoaded] = useState(false);
    const navigate = useNavigate()
    const params = useParams();
    const dispatch = useDispatch();

    const fetchData = async() => {
        try{
            dispatch(setLoader(true))
            const postData = await fetch(`https://makeurart-api.vercel.app/api/post/p/${params.id}`)
            const res = await postData.json();
            if(res.success===false) {
                dispatch(setAlert({type: 'error', message: res.message}))
                return;
            }
            setPostData(res)
            console.log(res)
            dispatch(setLoader(false))
        }
        catch(err){
            console.log(err);
            dispatch(setLoader(false))
        }
    }

    useEffect(()=>{
        fetchData();
    },[])
  return (
    <div className={css.main}>
        <div className={css.mainInner}>
            <div className={css.leftBox}>
                <img className={imageLoaded?css.isVisible:css.isLoading} onLoad={()=>setImageLoaded(true)}  src={postData?.postPic} loading='lazy' />
            </div>
            <div className={css.rightBox}>
                <h1>{postData?.description}</h1>
                <h2># {postData?.category}</h2>
                <h4 onClick={()=>navigate(`/user/${postData?.userRef}`)}>By {postData?.artBy}</h4>
                <div className={css.ratingCtn}>
                    <Rating value={parseFloat((postData?.comments.reduce((sum, comment)=>sum+comment.rating||0,0)/postData?.comments.length).toFixed(1))} readOnly/>
                    <span> {postData?.comments.length} Reviews</span>
                </div>
                <button onClick={()=>navigate(`/user/${postData?.userRef}`)}>View Profile</button>
                <div className={css.tagCtn}>
                    {
                        postData?.tags.map((tag)=>(
                            <span key={tag}>{tag}</span>
                        ))
                    }
                </div>
            </div>
        </div>
        <div className={css.commentCtn}>
            <h1>Comments</h1>
            {
                postData?.comments.map(comment => (
                    <Comment key={comment._id} name={comment.name} dp={comment.dp} message={comment.message} rating={comment.rating} date={comment.createdAt}/>
                ))
            }
            {postData?.comments.length === 0 && <h1 style={{color: '#515151', textAlign: 'center'}}>Be the first to comment</h1>}
        </div>
    </div>
  )
})

export default PostDetails