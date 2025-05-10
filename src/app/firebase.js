import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCcbrzkmFJAnX5PRHTGpDwdNmjoS_vpkLU",
  authDomain: "student-list-a69c5.firebaseapp.com",
  projectId: "student-list-a69c5",
  storageBucket: "student-list-a69c5.firebasestorage.app",
  messagingSenderId: "990013796015",
  appId: "1:990013796015:web:b6c4f9283ac7e942d6ee5a",
  measurementId: "G-Q2DVQJYMJ2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const login = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);
