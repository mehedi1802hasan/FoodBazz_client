import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../Firebase/AuthProvider';

const Navbar = () => {
  const {user,logOut}=useContext(AuthContex);
  const navOptions=<>
 
   <li> <Link to='/'>Home</Link></li>
   <li><Link to='/menu'>Menu</Link></li>
   <li><Link to='/order/salad'>Order</Link></li>     
  </>
  const handleLogout=()=>{
     logOut()
     .then(()=>{})
     .catch(error=>{
      console.log(error)
     })
  }
    return (
        <div>
            <div className="navbar bg-opacity-30 fixed z-10 text-white max-w-screen-xl bg-black">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {navOptions}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">FoodBazz</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
  {
          user ?
          <>
            <button onClick={handleLogout} className='btn btn-outline btn-md text-white mx-5 '>Logout</button>
            <Link className='mr-14' to='/registration'>Registration</Link>


          </> : <> <Link className='mr-14' to='/login'>Login</Link></>
    }
 
  </div>
</div>
        </div>
    );
};

export default Navbar;