import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
  const { user, LogOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'text-white underline' : 'text-black'
          }
        >
          Home
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/Dashboard"
            className={({ isActive }) =>
              isActive ? 'text-white underline' : 'text-black'
            }
          >
            Dashboard
          </NavLink>
        </li>
      )}
      <li>
        <NavLink
          to="/OurServices"
          className={({ isActive }) =>
            isActive ? 'text-white underline' : 'text-black'
          }
        >
          Our Services
        </NavLink>
      </li>

      {user && (
        <li>
          <NavLink
            to="/MyProfile"
            className={({ isActive }) =>
              isActive ? 'text-white underline' : 'text-black'
            }
          >
            My Profile
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar h-24 bg-Color rounded-tr-xl rounded-tl-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-bold text-sm"
          >
            {links}
          </ul>
        </div>
        <NavLink to="/">
          <p className="font-extrabold text-2xl text-white">𝓒𝓪𝓻𝓮𝓮𝓻𝓟𝓪𝓽𝓱</p>
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold text-sm">{links}</ul>
      </div>

      <div className="navbar-end flex items-center">
        <div className="mx-2 hidden lg:block">
          {user && user?.email ? (
            <p className="text-white">{user.email}</p>
          ) : (
            <p className="text-white">User email</p>
          )}
          <div className="text-white">
            {user && user?.displayName ? (
              <p className="text-white">{user.displayName}</p>
            ) : (
              <p className="text-white">User Name</p>
            )}
          </div>
        </div>

        <div>
          {' '}
          <img
            className="w-12 h-12 rounded-full cursor-pointer"
            src={
              user?.photoURL ||
              'https://cdn-icons-png.flaticon.com/512/8847/8847419.png'
            }
            alt="User Avatar"
            onClick={() => setIsImageVisible(false)}
          />
        </div>

        <div className="font-bold text-left text-white mx-2">
          {user && user.email ? (
            <NavLink to="/">
              <button onClick={LogOut}>LogOut</button>
            </NavLink>
          ) : (
            <button onClick={() => navigate('/Login')}>Login</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
