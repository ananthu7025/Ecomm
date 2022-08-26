
import {getAuth,GoogleAuthProvider,signInWithPopup,FacebookAuthProvider} from 'firebase/auth'
import {initializeApp} from 'firebase/app'
const firebaseConfig = {
    apiKey: "AIzaSyAUNw4cP2FsplDwdBWbkPqMh0PAEpH9Z6o",
    authDomain: "fir-7ee94.firebaseapp.com",
    projectId: "fir-7ee94",
    storageBucket: "fir-7ee94.appspot.com",
    messagingSenderId: "380802233289",
    appId: "1:380802233289:web:36acd80938753e941d2e18",
    measurementId: "G-HTLKLGM2Z5"
  };
const app=initializeApp(firebaseConfig)
export const auth =getAuth(app);
const provider = new GoogleAuthProvider();
export const signInWithGoogle = (e) => {
  e.preventDefault()

  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
      console.log(result.user)
    })
    .catch((error) => {
      console.log(error);
    });
};
export const signInWithFacebook =(e)=>{
const provider = new FacebookAuthProvider();
  e.preventDefault()
  signInWithPopup(auth, provider)
.then((result)=>{
 if(result.user.phoneNumber){
  alert("done")
 }
 else{
  alert("wrong")
 }
})
.catch((error) => {
  console.log(error);
});
}