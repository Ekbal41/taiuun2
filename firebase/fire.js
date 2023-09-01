// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDOYgTEuY7drGRGlwUf3mfYDRlB7H_nhNM",
    authDomain: "taiuun.firebaseapp.com",
    projectId: "taiuun",
    storageBucket: "taiuun.appspot.com",
    messagingSenderId: "687249130241",
    appId: "1:687249130241:web:22abcebc10e861fdf1d100",
    measurementId: "G-28RDGQFRMN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

