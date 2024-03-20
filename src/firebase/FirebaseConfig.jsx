// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBsbSEM5oCAWcHfHO0oYg9SoNeSspaJ0XA",
    authDomain: "myecom-670c5.firebaseapp.com",
    projectId: "myecom-670c5",
    storageBucket: "myecom-670c5.appspot.com",
    messagingSenderId: "36092750705",
    appId: "1:36092750705:web:1fe67cc67c7bd5f81124d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app)
const auth = getAuth(app)

export { fireDB, auth }