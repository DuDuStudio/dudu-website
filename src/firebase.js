// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbTJZwYVmpauQ_InT9LoOkOc0aHSxtwZ0",
  authDomain: "louis-460302.firebaseapp.com",
  projectId: "louis-460302",
  storageBucket: "louis-460302.firebasestorage.app",
  messagingSenderId: "396192999950",
  appId: "1:396192999950:web:40d84e7c79e36be7d0aa5f",
  measurementId: "G-2W659HH20L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export Firebase app and analytics for use in other parts of your application
export { app, analytics }; 