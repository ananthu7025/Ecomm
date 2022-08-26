
import {auth,signInWithFacebook,signInWithGoogle} from '../Login/firebase'
import './LoginForm.css'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {createUserWithEmailAndPassword,onAuthStateChanged,signOut,signInWithEmailAndPassword} from 'firebase/auth'
function Signup() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [user,setUser]=useState({})
  onAuthStateChanged(auth,(currentUser)=>{setUser(currentUser)})
  const register = (e)=>{
    e.preventDefault()
    try{
      const user =createUserWithEmailAndPassword(auth,email,password)
      history.push("/login");
    }
    catch(err){
      alert(err)
      
    }
 
  }
  const signin = (e)=>{
    e.preventDefault()
    try{
      const user =signInWithEmailAndPassword(auth,email,password)
      console.log(user)
    }
    catch(err){
      alert(err.message)
    }
  }
  const logout=async(e)=>{
    e.preventDefault()
    await signOut(auth)
  }
  let history = useHistory();
  return (
    <div className='body'>
     <div class="image"></div>
<div class="sign-in">
  <h1>Sign Up</h1>
  <form>
    <input value={email} onChange={(e)=>{setEmail(e.target.value)}} className='input' type="email" placeholder="Username"/>
    <input value={password} onChange={(e)=>{setPassword(e.target.value)}} className='input' type="password" placeholder="Password"/>
    <input onClick={register} className='input' type="submit" value="Sign Up"/>
    <input onClick={signInWithGoogle} className='input' type="submit" value="Sign Up with Google"/>
    <input onClick={signInWithFacebook} className='input' type="submit" value="Sign Up with Facebook"/>
  
  </form>
</div>
    </div>
  );
}

export default Signup;
