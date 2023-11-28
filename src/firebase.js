// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjU5rTq09smhnb7JZPIcfe6vToHhgiof8",
  authDomain: "dayify-75d30.firebaseapp.com",
  projectId: "dayify-75d30",
  storageBucket: "dayify-75d30.appspot.com",
  messagingSenderId: "864909543374",
  appId: "1:864909543374:web:153439690cf575c6ea4d9f",
  measurementId: "G-GNGHXB499D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { app, auth}