import userSlice from './Reducers/UserSlice';
import {configureStore, combineReducers, getDefaultMiddleware} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import {persistStore, persistReducer} from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage
};

const rootReducer = combineReducers({
    user: userSlice
});
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    })
});

export const persistor = persistStore(store);

export default store;