// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBceMhySX7dOIKhAfHA-S_u80Lr9pvdzAY",
  authDomain: "messenger-b20fd.firebaseapp.com",
  projectId: "messenger-b20fd",
  storageBucket: "messenger-b20fd.appspot.com",
  messagingSenderId: "95567942730",
  appId: "1:95567942730:web:3a8972eeac3faafb62c2b3",
  measurementId: "G-5THHYVH363",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
