// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQa9XkKTATAHVwyd9nVpX7IfSYpOmC5ck",
  authDomain: "netflixgpt-148a6.firebaseapp.com",
  projectId: "netflixgpt-148a6",
  storageBucket: "netflixgpt-148a6.appspot.com",
  messagingSenderId: "687227746328",
  appId: "1:687227746328:web:0526d26978818f8b6deb6d",
  measurementId: "G-JX14NBHTD8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
