
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCdYYU-j_1QoEnqXaT2iP1Jcyl-8yZTQE8",
  authDomain: "login-e52ea.firebaseapp.com",
  projectId: "login-e52ea",
  storageBucket: "login-e52ea.appspot.com",
  messagingSenderId: "574998991608",
  appId: "1:574998991608:web:3690e3aebab457f4dfe10d",
  measurementId: "G-DQR4MG1M3F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en'
const provider = new GoogleAuthProvider;