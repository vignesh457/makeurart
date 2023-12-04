import './App.css';
import React, { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Alert } from '@mui/material';
import {removeAlert} from './Reducers/UserSlice'

const Home  = React.lazy(()=>import('./pages/Home'));
const HomeMain  = React.lazy(()=>import('./components/HomeMain'));
const HomeGallery  = React.lazy(()=>import('./components/HomeGallery'));
const Profile  = React.lazy(()=>import('./pages/Profile'));
const ProfileBody  = React.lazy(()=>import('../src/components/ProfileBody'));
const Gallery  = React.lazy(()=>import('../src/components/Gallery'));
const ContactDetails  = React.lazy(()=>import('../src/components/ContactDetails'));
const Auth  = React.lazy(()=>import('./pages/Auth'));
const LoginBox  = React.lazy(()=>import('./components/LoginBox'));
const SignupBox  = React.lazy(()=>import('./components/SignupBox'));
const PrivateRoute  = React.lazy(()=>import('./components/PrivateRoute'));
const SelectUserType  = React.lazy(()=>import('./components/SelectUserType'));
const RegisterBox  = React.lazy(()=>import('./components/RegisterBox'));
const Error  = React.lazy(()=>import('./pages/Error'));
const UpdateBox  = React.lazy(()=>import('./components/UpdateBox'));
const CreatePostBox  = React.lazy(()=>import('./components/CreatePostBox'));
const EditPostBox  = React.lazy(()=>import('./components/EditPostBox'));
const Loader  = React.lazy(()=>import('./components/Loader'));
const PostDetails  = React.lazy(()=>import('./components/PostDetails'));

const myStyle = {
  position: 'absolute',
  top: '10px',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: '4'
}

function App() {
  const {alert, loader} = useSelector(state => state.user);
  const dispatch = useDispatch();

  alert && setTimeout(()=>{
    dispatch(removeAlert())
  },5000)

  return (
    <>
      {alert && <Alert style={myStyle} severity={alert.type}>{alert.message}</Alert>}
      {loader && <Loader/>}
      <div className='app'>
        <Routes>
            <Route path="/" element={<Suspense fallback={<div><Loader/></div>}><Home/></Suspense>}>
              <Route index element={<Suspense fallback={<div><Loader/></div>}><HomeMain/></Suspense>}/> 
              <Route path='/posts/:id' element={<Suspense fallback={<div><Loader/></div>}><HomeGallery/></Suspense>}/>
            </Route>
            <Route path="/user/:id" element={<Suspense fallback={<div><Loader/></div>}><Profile/></Suspense>}>
              <Route element={<Suspense fallback={<div><Loader/></div>}><ProfileBody/></Suspense>}>
                <Route index  element={<Suspense fallback={<div><Loader/></div>}><Gallery/></Suspense>} />
                <Route path="contact" element={<Suspense fallback={<div><Loader/></div>}><ContactDetails/></Suspense>} />
              </Route>
            </Route>
            <Route element={<Suspense fallback={<div><Loader/></div>}><Auth/></Suspense>}>
              <Route path="login" element={<Suspense fallback={<div><Loader/></div>}><LoginBox/></Suspense>} />
              <Route path="signup" element={<Suspense fallback={<div><Loader/></div>}><SignupBox/></Suspense>} />
              <Route path="/post/:id" element={<Suspense fallback={<div><Loader/></div>}><PostDetails/></Suspense>} />
              <Route element={<Suspense fallback={<div><Loader/></div>}><PrivateRoute/></Suspense>}>
                <Route path="user-type" element={<Suspense fallback={<div><Loader/></div>}><SelectUserType/></Suspense>}/>
                <Route path="register" element={<Suspense fallback={<div><Loader/></div>}><RegisterBox/></Suspense>}/>
                <Route path="edit/:id" element={<Suspense fallback={<div><Loader/></div>}><UpdateBox/></Suspense>}/>
                <Route path="create-post" element={<Suspense fallback={<div><Loader/></div>}><CreatePostBox/></Suspense>}/>
                <Route path="edit-post/:id" element={<Suspense fallback={<div><Loader/></div>}><EditPostBox/></Suspense>}/>
              </Route>
            </Route>
            <Route path='*' element={<Suspense fallback={<div><Loader/></div>}><Error/></Suspense>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
