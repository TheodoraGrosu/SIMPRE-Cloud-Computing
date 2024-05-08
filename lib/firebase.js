// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-68nQgcqQa6HSMn_AxH83JUDpTtjBkpc",
  authDomain: "cloudcomputingproject-60cc8.firebaseapp.com",
  projectId: "cloudcomputingproject-60cc8",
  storageBucket: "cloudcomputingproject-60cc8.appspot.com",
  messagingSenderId: "983536860260",
  appId: "1:983536860260:web:a95431f36a5e64aa94b371",
  measurementId: "G-EW246HJ5ET"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default {app, db};

