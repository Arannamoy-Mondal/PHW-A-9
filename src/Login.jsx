import React, { useContext, useRef, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from './Authprovider';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
const Login = () => {
  const { user, googleAuthentication, loading, er, ok, forgetPassword, setOk, setEr, login } = useContext(AuthContext)
  const Navigate = useNavigate()
  const [show, setShow] = useState(true)
  const emailRef = useRef()
  const [er1, setEr1] = useState(null)
  const forgetPass = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    if (email) {
      forgetPassword(email)
      setOk("Check your email.");
      Navigate("/")
      return
    }
    else setEr1("Enter correct email")

  }

  const signin = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    login(email, password)

  }
  const showPass = (e) => {
    e.preventDefault()
    if (show) {
      setShow(false)
    }
    else setShow(true)
  }
  if (loading) {
    return (
      <div className='flex justify-center'>
        <div>
          <span class="loading loading-bars loading-xs"></span>
          <span class="loading loading-bars loading-sm"></span>
          <span class="loading loading-bars loading-md"></span>
          <span class="loading loading-bars loading-lg"></span>
          <span class="loading loading-bars loading-xl"></span>
        </div>
      </div>
    )
  }
  if (user) {
    Navigate("/")
  }
  return (
    <div >
      <div className='flex justify-center'><h1 className='text-center text-wrap btn btn-warning text-[1rem]'>Don't press Enter or Keyboard Keys for login. Use Login button. Just click "Login" by mouse or touchpad.</h1></div>
      <div className='flex justify-center mt-[25px]'>
        <form class="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box" onSubmit={signin}>
          <label class="fieldset-label text-[1.25rem] text-black font-bold" >Email</label>
          <input type="email" class="input" placeholder="Email" ref={emailRef} name="email" required />

          <label class="fieldset-label text-[1.25rem] text-black font-bold">Password</label>
          <input type={show ? "password" : "text"} class="input" placeholder="Password" name="password" required />
          <div className='flex items-center gap-[5px] justify-between'>
            <div className='flex items-center gap-[5px]'><FaEye onClick={showPass}></FaEye>
              {show ? <h1>Show password</h1> : <h1>Hide password</h1>}</div>
            <button onClick={forgetPass}>Forget Password ?</button>
          </div>
          {er && <h1 className='alert alert-error'>{er}</h1>}
          {ok && <h1 className='alert alert-success'>{ok}</h1>}
          <button class="btn btn-neutral mt-4">Login</button>
          <NavLink to="/signup" className={`btn btn-soft btn-primary`}>Create an account?</NavLink>
        </form>
      </div>
      <div className="flex justify-center"><button className='rounded-full py-[10px] px-[12px] border-2 border-black border-solid font-bold'>Or</button></div>
      <div className="flex justify-center mt-[10px]">
        <button className='flex justify-center items-center gap-[10px] btn btn-outline' onClick={googleAuthentication}><FcGoogle /> Login with Google</button>
      </div>
    </div>
  );
};

export default Login;