import React, { useContext } from 'react';
import { AuthContext } from './Authprovider';
import { useNavigate } from 'react-router-dom';
import Login from './Login';

const Privateroute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const Navigate=useNavigate()
    if (loading) {
      return (
          <div className='flex justify-center'>
            <div>
            <span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
            <span className="loading loading-bars loading-xl"></span>
            </div>
          </div>
        )
        
      }
    if(user)
        return children
    return (
        <Login></Login>
    );
};

export default Privateroute;