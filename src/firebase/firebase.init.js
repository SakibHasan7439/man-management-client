// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDu4rQjIpt6Pt0AlWPjMKBgf_FVTl91zI",
  authDomain: "man-management-client-4b70e.firebaseapp.com",
  projectId: "man-management-client-4b70e",
  storageBucket: "man-management-client-4b70e.firebasestorage.app",
  messagingSenderId: "898111080888",
  appId: "1:898111080888:web:8f9aca0380b60e8915e74d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;