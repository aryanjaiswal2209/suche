import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'
import{getAuth} from 'firebase/auth'
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASHduHGVMpFUoJJyNdBlTbESIQoNp1wBQ",
  authDomain: "suche-683ff.firebaseapp.com",
  databaseURL: "https://suche-683ff-default-rtdb.firebaseio.com",
  projectId: "suche-683ff",
  storageBucket: "suche-683ff.appspot.com",
  messagingSenderId: "931648969438",
  appId: "1:931648969438:web:85ee443d400628d8ce004f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const  storage = getStorage(app);

export const db = getFirestore(app);

export const auth = getAuth();

const provider = new GoogleAuthProvider()
