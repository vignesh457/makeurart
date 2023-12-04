import {initializeApp} from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB8WzUiha2EFT3V9JZYyklt8cYExBMs62I",
    authDomain: "nooks-e5d79.firebaseapp.com",
    projectId: "nooks-e5d79",
    storageBucket: "nooks-e5d79.appspot.com",
    messagingSenderId: "785309040198",
    appId: "1:785309040198:web:e0653336ca7f7da075d447",
    measurementId: "G-2M505Y6ZBL"
};
    
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);


export default storage;
export {app};
