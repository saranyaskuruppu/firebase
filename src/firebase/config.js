
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyAR4ts1DB47XLrCpeYOMzUOiYOqSURygGk",
    authDomain: "fir-44061.firebaseapp.com",
    projectId: "fir-44061",
    storageBucket: "fir-44061.appspot.com",
    messagingSenderId: "1045601707590",
    appId: "1:1045601707590:web:4dd7018b99fc2765e84c47",
    measurementId: "G-QMD6FG5BC9"
};

export const Firebase = initializeApp(firebaseConfig);
const db = getFirestore(Firebase);

export default db;