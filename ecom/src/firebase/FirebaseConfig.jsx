import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth" 

const firebaseConfig = {
  apiKey: "AIzaSyDeEVWvTiYq8pI9mGC2Y2JbgcOYM1m5GSo",
  authDomain: "myecom-43814.firebaseapp.com",
  projectId: "myecom-43814",
  storageBucket: "myecom-43814.firebasestorage.app",
  messagingSenderId: "74270686803",
  appId: "1:74270686803:web:e544843cdb9bbc55d390a6"
};

const app = initializeApp(firebaseConfig);


const fireDb = getFirestore(app);
const auth = getAuth(app);

export {auth, fireDb}