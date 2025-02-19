// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "shippingboxapp.firebaseapp.com",
  projectId: "shippingboxapp",
  storageBucket: "shippingboxapp.firebasestorage.app",
  messagingSenderId: "950239020074",
  appId: "1:950239020074:web:1f06f07e3946ffd0ff6f53",
  measurementId: "G-VTZW6H0CPY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
