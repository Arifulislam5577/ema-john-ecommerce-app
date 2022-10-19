import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDf6_njnGE8mvl3rxzZUXsKcOLXbI9vofU",
  authDomain: "react-firebase-auth-7b26c.firebaseapp.com",
  projectId: "react-firebase-auth-7b26c",
  storageBucket: "react-firebase-auth-7b26c.appspot.com",
  messagingSenderId: "553836464767",
  appId: "1:553836464767:web:926e342698af7f87788d4a",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
