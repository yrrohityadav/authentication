// Import the functions you need from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2vPIEqHCGUV6iIP56bv_ykOlCqi4d_l8",
  authDomain: "form-25185.firebaseapp.com",
  projectId: "form-25185",
  storageBucket: "form-25185.appspot.com", // Corrected `firebasestorage.app` to `appspot.com`
  messagingSenderId: "851322268832",
  appId: "1:851322268832:web:c0e9d21edb8c0b458eadc5",
  measurementId: "G-1FNL8CVLFG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);
