// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMvBQZKP-aa7zgpuL8sGIGLdui5FL-qjY",
  authDomain: "brainbuilders-test-19737.firebaseapp.com",
  projectId: "brainbuilders-test-19737",
  storageBucket: "brainbuilders-test-19737.appspot.com",
  messagingSenderId: "941215730243",
  appId: "1:941215730243:web:df4e043ace2679a10ce2f6",
  measurementId: "G-DEF0ZC8DH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
