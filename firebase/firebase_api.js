// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOPOByyP-9Wk3fMLtzsjsqz3eMPjivK8k",
  authDomain: "todo-app-1ad81.firebaseapp.com",
  projectId: "todo-app-1ad81",
  storageBucket: "todo-app-1ad81.appspot.com",
  messagingSenderId: "574353147014",
  appId: "1:574353147014:web:47b460055d5d292c5bbd07",
  measurementId: "G-M0X5NVMPXD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
// const analytics = getAnalytics(app);