import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2I2VA-grSYW3xvJGLJsm6-CudvPsYF9s",
  authDomain: "fir-auth-5d0cf.firebaseapp.com",
  projectId: "fir-auth-5d0cf",
  storageBucket: "fir-auth-5d0cf.appspot.com",
  messagingSenderId: "941661960818",
  appId: "1:941661960818:web:65c8b6cf77d01b4940e0eb",
  measurementId: "G-HVFCM245G2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
// const analytics = getAnalytics(app);

export { app, auth }