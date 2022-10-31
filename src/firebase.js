import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDarSUSuf4pD0xgxUFwqNqyR17TfC64JnA",
  authDomain: "car-rent-cada4.firebaseapp.com",
  projectId: "car-rent-cada4",
  storageBucket: "car-rent-cada4.appspot.com",
  messagingSenderId: "722278422015",
  appId: "1:722278422015:web:624cfe4c82dd4bfca503ca",
};

const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const storage=getStorage(app);