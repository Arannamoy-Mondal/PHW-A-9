import React, { useContext } from 'react';
import { FiAlignJustify } from "react-icons/fi";
import { AuthContext } from './Authprovider';
import { NavLink } from 'react-router-dom';
const Header = () => {
  const { user, logOut, loading } = useContext(AuthContext)
  if (loading) {
    return (
      <div className='flex justify-center mt-[250px]'>
        <div className='flex flex-wrap justify-center'>
          <span className="loading loading-spinner text-primary w-[450px]"></span>
        </div>
      </div>
    )
  }
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <NavLink to="/" className="btn btn-ghost text-[1rem] lg:text-[2rem] text-wrap">Winter Clothing Donation</NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLink to="/" className={"btn btn-primary btn-outline m-[5px]"}>Home</NavLink>
          <NavLink to="/donation-campaigns" className={"btn btn-primary btn-outline m-[5px]"}>Donation Campaigns</NavLink>
          <NavLink to="/how-to-help-us" className={"btn btn-primary btn-outline m-[5px]"}>How to help us?</NavLink>
        </ul>
      </div>
      <div className="navbar-end gap-[15px]">
        {
          user?<>
          <NavLink to="/profile"  className={"btn btn-primary hidden lg:flex"}>Dashboard</NavLink>
          <button className={"btn btn-primary hidden lg:flex"} onClick={logOut}>Logout</button>
          </>:
          <>
          <NavLink to="/signup"  className={"btn btn-primary hidden lg:flex"}>Signup</NavLink>
          <NavLink  to="/login" className={"btn btn-primary hidden lg:flex"}>Login</NavLink>
          </>

        }
        <div className="dropdown lg:hidden">
          {
            user ? <details>
              <summary className={"btn btn-error btn-outline m-[5px]"}>Menu</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li><NavLink to="/" className={"btn btn-primary btn-outline m-[5px]"}>Home</NavLink></li>
                <li><NavLink to="/donation-campaigns" className={"btn btn-primary btn-outline m-[5px]"}>Donation Campaigns</NavLink></li>
                <li><NavLink to="/profile " className={"btn btn-primary btn-outline m-[5px]"}>Dashboard</NavLink></li>
                <li> <NavLink to="/how-to-help-us" className={"btn btn-primary btn-outline m-[5px]"}>How to help us?</NavLink></li>
                <li><button className={"btn btn-primary btn-outline m-[5px]"} onClick={logOut}>Logout</button></li>
              </ul>
            </details> :
              <details>
                <summary className={"btn btn-error btn-outline m-[5px]"}>Menu</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li><NavLink to="/" className={"btn btn-primary btn-outline m-[5px]"}>Home</NavLink></li>
                  <li><NavLink to="/donation-campaigns" className={"btn btn-primary btn-outline m-[5px]"}>Donation Campaigns</NavLink></li>
                  <li><NavLink to="/signup" className={"btn btn-primary btn-outline m-[5px]"}>Signup</NavLink></li>
                  <li><NavLink to="/login" className={"btn btn-primary btn-outline m-[5px]"}>Login</NavLink></li>
                  <li> <NavLink to="/how-to-help-us" className={"btn btn-primary btn-outline m-[5px]"}>How to help us?</NavLink></li>
                </ul>
              </details>
          }


        </div>
      </div>
    </div>
  );
};

export default Header;