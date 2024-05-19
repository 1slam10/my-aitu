// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDmjc5zEDciCQE4gTbKMRuqLlTy7bK1WGc",
    authDomain: "myaitu.firebaseapp.com",
    projectId: "myaitu",
    storageBucket: "myaitu.appspot.com",
    messagingSenderId: "587421039585",
    appId: "1:587421039585:web:91c0bd223cd71f2ba9f0a0"
};

// Init firebase and make it exportable
export const app = initializeApp(firebaseConfig);