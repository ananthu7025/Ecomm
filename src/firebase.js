import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAUNw4cP2FsplDwdBWbkPqMh0PAEpH9Z6o",
  authDomain: "fir-7ee94.firebaseapp.com",
  projectId: "fir-7ee94",
  storageBucket: "fir-7ee94.appspot.com",
  messagingSenderId: "380802233289",
  appId: "1:380802233289:web:36acd80938753e941d2e18",
  measurementId: "G-HTLKLGM2Z5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
