// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp3CE75gOj9NO_aPISq2qqCARvZW9-kiw",
  authDomain: "prime-x-capital.firebaseapp.com",
  projectId: "prime-x-capital",
  storageBucket: "prime-x-capital.appspot.com",
  messagingSenderId: "794269515402",
  appId: "1:794269515402:web:3af4af3019467050643773"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);