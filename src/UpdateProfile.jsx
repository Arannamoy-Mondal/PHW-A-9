import React, { useContext, useState } from 'react';
import { AuthContext } from './Authprovider';
import { useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const UpdateProfile = () => {
    const { user, loading, updateNamePhoto, updatemail, updatePass } = useContext(AuthContext)
    const emailRef = useRef()
    const userNameRef = useRef()
    const passRef = useRef()
    const photourlRef=useRef()
    console.log(user);
    const notify = (er, chk) => {
        if (chk) toast.success(er, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        else toast.error(er, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };
    const update = (e) => {
        e.preventDefault();
        let email = emailRef.current.value;
        let userName = userNameRef.current.value;
        let password = passRef.current.value;
        let photourl=photourlRef.current.value
        console.log(email, userName);
        if (userName || photourl) {
            if(!userName) userName=user.displayName
            if(!photourl) photourl=user.photoUrl
            updateNamePhoto(userName,photourl)
                .then(res => notify("Successfully Update Username.", true))
                .catch(er => notify(er.message, false))
        }
        if (email) {
            updatemail(email, null)
                .then(res => notify("Email update successfully", true))
                .catch(er => notify(er.message, false))
        }
        if (password) {
            updatePass(password).then(res => notify(res, true))
                .catch(er => notify(er.message, false))
        }
    }
    return (
        <div>
            <ToastContainer
            />  
            <h1 className='text-center  font-black text-4xl lg:mt-[25px]'>Update Profile</h1>
            <hr className='w-[70%] mx-auto border-[2px] border-solid border-black lg:my-[50px]' />
            <div className='flex flex-wrap justify-evenly'>
                <form className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
                    <label className="fieldset-label font-bold text-xl text-black">Curren Username:</label>
                    <input type="email" className="input" placeholder="Username" value={user.displayName} />
                    <label className="fieldset-label font-bold text-xl text-black">Curren Email:</label>
                    <input type="email" className="input" placeholder="Email" value={user.email} />
                </form>
                <form className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box" onSubmit={update}>
                    <label className="fieldset-label font-bold text-xl text-black">Photo Url:</label>
                    <input type="url" className="input" placeholder="photo url" name="photourl" ref={photourlRef} />
                    <label className="fieldset-label font-bold text-xl text-black">New Username:</label>
                    <input type="text" className="input" placeholder="Username" name="username" ref={userNameRef} />
                    <label className="fieldset-label font-bold text-xl text-black" >New Email:</label>
                    <input type="email" className="input" placeholder="Email" name='email' ref={emailRef} />
                    <label className="fieldset-label font-bold text-xl text-black" >New Password:</label>
                    <input type="password" className="input" placeholder="Password" name="password" ref={passRef} />
                    <button type='submit' className='btn btn-outline btn-primary'>Update</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;