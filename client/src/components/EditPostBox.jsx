import React,{useEffect, useState} from 'react'
import FileSelect from './FileSelect';
import css from './SignupBox.module.css'
import { useNavigate, useParams } from 'react-router-dom';
import TagSelectMui from '../muiComponents/TagSelectMui';
import CloseIcon from '@mui/icons-material/Close';
import {setAlert} from '../Reducers/UserSlice'
import { useSelector, useDispatch } from 'react-redux';

function EditPostBox() {
    const [postURL, setPostURL] = useState(null);
    const [tags, setTags] = useState([]);
    const {currentUser} = useSelector(state => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();

    const [postData, setPostData] = useState({
        postPic: null,
        description: "",
        artBy: currentUser.username,
        category: null
    });

    const resetForm = () => {
        setPostData({
            postPic: null,
            description: null,
            artBy: null,
            category: null
        });
    }

    const fetchPostData = async() => {
        try{
            const postData = await fetch(`/api/post/p/${params.id}`);
            const res = await postData.json();
            if(res.success===false){
                throw new Error(res.message);
            }
            setPostData(res)
            setTags(res.tags)
        }
        catch(err){
            dispatch(setAlert({type: 'warning', message: "Sorry, unable to load the Data"}))
            navigate(-1)
            console.error(err);
        }
    }

    useEffect(()=>{
        fetchPostData();
    },[])

    useEffect(() => {
        setPostData({ ...postData, postPic: postURL });
    }, [postURL]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPostData({...postData,
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        try{
            e.preventDefault();
            if(tags.length < 3){
                dispatch(setAlert({type: 'warning', message: "Please select more then 3 tags"}))
                return;
            }
            const registerData = await fetch(`/api/post/${params.id}`,{
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...postData,
                    tags
                }),
            });
            const res = await registerData.json();
            if(res.success===false){
                dispatch(setAlert({type: 'error', message: res.message}))
                return;
            }
            dispatch(setAlert({type: 'success', message: "Your post is Updated 😉"}))
            resetForm();
            navigate(-1);
        }
        catch(err){
            dispatch(setAlert({type: 'error', message: "Oops! Something went wrong. Please try again later or contact support."}))
            console.log(err);
        }
    }

  return (
    <form className={css.main} onSubmit={handleSubmit}>
        {/* address */}
        <h1>Create your Post</h1>
        <label htmlFor="profilePic">
            Add your artwork
            <FileSelect setImageURL={setPostURL}/>
            {postData.postPic && <img style={{height: '70px'}} src={postData.postPic} alt="" />}
        </label>
        <label htmlFor="description">
            Short description
            <textarea className={css.bioCtn} id="description" rows="3" maxLength={50} name="description" value={postData.description} onChange={handleInputChange} required></textarea>
        </label>
        <p>Character Count: {postData.description?.length} / 50</p> 
        <h3 className={css.creatorHeader}>Category</h3>
        <select className={css.categorySelect} name="category" value={postData?.category} onChange={handleInputChange} required>
            <option value="">---Select One---</option>
            <option value="Drawing" >Drawing (physical)</option>
            <option value="Digital Art" >Digital Art</option>
            <option value="Craft Work" >Craft Work</option>
        </select>
        <h3 className={css.creatorHeader}>Tags<span className={css.subHeading}>(minimum 3)</span></h3>
            <TagSelectMui setInterests={setTags} interests={tags} name="Tags"/>
        <div className={css.tagSelectCtn}>
            {
                tags?.map((tag) => {
                    return (
                        <span key={tag} >
                            # {tag}
                            <span className={css.closeBtn} onClick={() => setTags(tags.filter((t) => t!== tag))}>
                                <CloseIcon fontSize='small' />
                            </span>
                        </span>
                    )
                })
            }
        </div>
        
        <button className={css.authButton} type="submit">Submit</button>
    </form>
  )
}

export default EditPostBox;