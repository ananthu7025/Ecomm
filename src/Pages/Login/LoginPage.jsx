
import {auth,signInWithGoogle,signInWithFacebook} from '../Login/firebase'
import './LoginForm.css'
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import {createUserWithEmailAndPassword,onAuthStateChanged,signOut,signInWithEmailAndPassword} from 'firebase/auth'
function LoginPage() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [user,setUser]=useState({})
  let history = useHistory();
  onAuthStateChanged(auth,(currentUser)=>{setUser(currentUser)})
  const register = (e)=>{
    e.preventDefault()
    try{
      const user =createUserWithEmailAndPassword(auth,email,password)
      
      console.log(user)
    }
    catch(err){
      alert(err.message)
    }
  }
  const signin = (e)=>{
    e.preventDefault()
    try{
      const user =signInWithEmailAndPassword(auth,email,password)
      console.log(user)
      alert(email)
    
    }
    catch(err){
      alert(err.message)
    }
  }

  const logout=async(e)=>{
    e.preventDefault()
    await signOut(auth)
  }
  return (
    <div className='body'>
     <div class="image"></div>
<div class="sign-in">
  <h1>Sign In</h1>
  <form>
    <input value={email} onChange={(e)=>{setEmail(e.target.value)}} className='input' type="email" placeholder="Username"/>
    <input value={password} onChange={(e)=>{setPassword(e.target.value)}} className='input' type="password" placeholder="Password"/>
    <a className='a' href="#">Forgot password?</a>
   <input onClick={signin} className='input' type="submit" value="Sign In"/>
   <Link to='/signup'> <a className='a'>New User? Signup</a></Link> 
   <input onClick={signInWithGoogle} className='input' type="submit" value="Sign In With Google"/>
   <input onClick={signInWithFacebook} className='input' type="submit" value="Sign In with Facebook"/>
  </form>
</div>
    </div>
  );
}

export default LoginPage;
