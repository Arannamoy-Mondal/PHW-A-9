import React, { useContext } from 'react';
import { AuthContext } from './Authprovider';
import { NavLink, useNavigate } from 'react-router-dom';
import Login from './Login';
import { FcOk } from "react-icons/fc";

const Profile = () => {
    const { user, loading } = useContext(AuthContext)
    const Navigate = useNavigate();
    // console.log(user);
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
    if (!user) {
        return <Login></Login>
    }
    return (
        <div>
            <h1 className='text-center font-black text-4xl lg:mt-[50px]'>Welcome, {user.displayName}</h1>
            <hr className='w-[70%] mx-auto border-[2px] border-solid border-black lg:my-[50px]' />
            <div className='flex justify-center mt-[50px]'>

                <div className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
                    <img src={user.photoURL || "./images/na.png"} alt="" className='mx-auto' />
                    <label className="fieldset-label font-bold text-xl text-black">Username:</label>
                    <input type="email" className="input" placeholder="Username" value={user.displayName || "Not Available"} />
                    
                    <label className="fieldset-label font-bold text-xl text-black">Email:</label>
                    <input type="email" className="input" placeholder="Email" value={user.email} />
                   
                    <div className='flex justify-between items-center'>
                        <label className="fieldset-label font-bold text-xl text-black">Is Email Verified:</label>
                        {
                            user.emailVerified ?
                                <div className='flex justify-center items-center'><FcOk className="h-[35px] w-[35px]" /> <span className='font-bold'>Verified</span> </div>
                                :
                                <div> <button className='btn btn-warning'>Are you want to verified ?</button> </div>
                        }
                    </div>
                    
                    <div className='flex flex-wrap justify-center'>
                        <h1 className="text-center mt-4 text-[1.25rem] font-bold">Are you want to update your profile information?
                        </h1>
                        <div className='flex flex-wrap gap-[15px]'>
                            <NavLink to="/update-profile" className='btn btn-success'>Yes</NavLink>
                            <button className='btn btn-error'>No</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;