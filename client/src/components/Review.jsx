import React,{useMemo, useState} from 'react'
import css from './Review.module.css'
import { Button, Rating } from '@mui/material'
import ProgressBar from '../muiComponents/ProgressBar'
import Comment from './Comment'
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux'
import { setActivePage, setAlert } from '../Reducers/UserSlice'
import { useParams } from 'react-router-dom'


const Review = React.memo(() =>{
    const [reviewInput, setReviewInput] = useState({rating: 0, comment: ""})
    const [reviewToggle, setReviewToggle] = useState(false);
    const dispatch = useDispatch();
    const {currentUser, activePage} = useSelector(state=>state.user)
    const params = useParams();

    console.log("review ...");

    const handleSubmit = async(e) => {
        console.log("fetch in review ...");
        try{
            e.preventDefault();
            if(reviewInput.rating === 0) {
                dispatch(setAlert({type: 'warning', message: 'Rate by clicking the stars (1-5)'}))
                return;
            }
            const registerData = await fetch(`/api/register/${params.id}`,{
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    comments: [...activePage.comments,{name: currentUser.username, dp: currentUser.avatar, message: reviewInput.comment, rating: reviewInput.rating, createdAt: new Date().toISOString()}]
                }),
            });
            const res = await registerData.json();
            if(res.success===false){
                dispatch(setAlert({type: 'error', message: res.message}))
                return;
            }
            dispatch(setActivePage({...activePage, comments: [...activePage.comments, {name: currentUser.username, dp: currentUser.avatar, message: reviewInput.comment, rating: reviewInput.rating, createdAt: new Date().toISOString()}]}))
            dispatch(setAlert({type: 'success', message: "Your comment is live"}))
            handleClose()
        }
        catch(err){
            dispatch(setAlert({type: 'error', message: "Oops! Something went wrong. Please try again later or contact support."}))
            console.log(err);
        }
    }
    const handleChange = (e) => {
        const {name, value} = e.target;
        if(name==='rating'){
            setReviewInput({...reviewInput, rating: Number(value)})
        }
        else{
            setReviewInput({...reviewInput, comment: value})
        }
    }
    const handleClose = () => {
        setReviewToggle(false);
        setReviewInput({rating: 0, comment: ""});
    }

    const averageRating = useMemo(() => {
        const sum = activePage.comments.reduce((sum, comment) => sum + comment.rating||0,0);
        const average = sum/activePage.comments.length || 0;
        console.log(sum+" total ")
        return parseFloat(average.toFixed(1));
    },[activePage.comments])

    const percentageRating = (rating) => {
        const sum = activePage.comments.filter((comment) => comment.rating===rating).length;
        const average = sum/activePage.comments.length * 100 || 0;
        console.log(Math.round(average)+`-${rating}%`);
        return Math.round(average);
    }

    return (
        <div className={css.main}>
            { reviewToggle &&
                <form onSubmit={handleSubmit} className={css.reviewPopupBox}>
                    <CloseIcon onClick={handleClose} className={css.closeBtn}/>
                    <h3>Write Review</h3>
                    <textarea name="comment" value={reviewInput.comment} onChange={handleChange} className={css.commentText} cols="37" rows="5" required></textarea>
                    <Rating name='rating' value={reviewInput.rating} onChange={handleChange} size='large' className={css.ratingInput} required/>
                    <Button variant='contained' type='submit'>Submit</Button>
                </form>
            }
            <div className={css.ratingCtn}>
                <div className={css.ratingDisplay}>
                    <h1>{averageRating || "No Ratings"}</h1>
                    <Rating value={averageRating} precision={0.5} readOnly/>
                    <p>Based on {activePage.comments.length} reviews</p>
                    {currentUser && <button onClick={()=>setReviewToggle(true)}>Write Review</button>}
                </div>
                <div className={css.ratingProgressCtn}>
                    <ProgressBar key="5" type="Excellent" color="#00B050" value={useMemo(()=>percentageRating(5),[activePage.comments])}/>
                    <ProgressBar key="4" type="Good" color="#92D050" value={useMemo(()=>percentageRating(4),[activePage.comments])}/>
                    <ProgressBar key="3" type="Average" color="#FFFF00" value={useMemo(()=>percentageRating(3),[activePage.comments])}/>
                    <ProgressBar key="2" type="Below Average" color="#FFC000" value={useMemo(()=>percentageRating(2),[activePage.comments])}/>
                    <ProgressBar key="1" type="Poor" color="#FF0000" value={useMemo(()=>percentageRating(1),[activePage.comments])}/>
                </div>
            </div>
            <div className={css.commentCtn}>
                {
                    activePage.comments.map(comment => (
                        <Comment key={comment._id} name={comment.name} dp={comment.dp} message={comment.message} rating={comment.rating} date={comment.createdAt}/>
                    ))
                }
                {activePage.comments.length === 0 && <h1 style={{color: '#515151', textAlign: 'center'}}>Be the first to comment</h1>}
            </div>
        </div>
    )
})

export default Review