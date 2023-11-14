// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBWkTsij8kT8aLvTzxnUeJlYYp02EJC8o",
  authDomain: "twitter-clone-c8bd4.firebaseapp.com",
  projectId: "twitter-clone-c8bd4",
  storageBucket: "twitter-clone-c8bd4.appspot.com",
  messagingSenderId: "168980722039",
  appId: "1:168980722039:web:ed98d5e0e2628a7ca43172"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage()