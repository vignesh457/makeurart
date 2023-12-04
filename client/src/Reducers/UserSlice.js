import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    currentUser: null,
    activePage: null,
    alert: null,
    loader: false
}

const userSlice = createSlice(
    {
        name: "user",
        initialState,
        reducers: {
            setCurrentUser: (state, action) => {
                state.currentUser = action.payload;
            },
            removeCurrentUser: (state) => {
                state.currentUser = null;
            },
            setActivePage: (state, action) => {
                state.activePage = action.payload;
            },
            setAlert: (state, action) => {
                state.alert = action.payload;
            },
            removeAlert: (state) => {
                state.alert = null;
            },
            setLoader: (state, action) =>{
                state.loader = action.payload;
            }
        }
    }
)

export const {setCurrentUser, removeCurrentUser, setAlert, removeAlert, setLoader, setActivePage} = userSlice.actions;
export default userSlice.reducer;