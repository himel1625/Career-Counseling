import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { handleGoogleBUtton, setUser, handleLogin, user } =
    useContext(AuthContext);
  const Location = useLocation();
  const Navigate = useNavigate();
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const from = new FormData(e.target);
    const email = from.get('email');
    const password = from.get('password');

    if (password.length < 6) {
      return toast.error('❌ Password must contain at least 6 characters', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
    if (!/[a-z]/.test(password)) {
      return toast.error(
        '❌ Password must contain at least one lowercase letter',
        {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        },
      );
    }
    if (!/[A-Z]/.test(password)) {
      return toast.error(
        '❌ Password must contain at least one uppercase letter',
        {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        },
      );
    }
    handleLogin(email, password)
      .then((res) => {
        const user = res.user;
        setUser(user);
        Navigate(Location?.state ? Location.state : '/');
        e.target.reset();
        toast.success(` 🎉 Login successful!`, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        toast.error(`❌ Error: ${errorCode}`, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      });
  };

  return (
    <>
      <Helmet>
        <title>Career - Counseling | Login</title>
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl p-8 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Login
          </h2>
          <form onSubmit={handleLoginSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                defaultValue={user && user?.email}
                required
                placeholder="Enter your email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                required
                placeholder="Enter your password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <div
                className="absolute inset-y-0 right-3 top-6 flex items-center cursor-pointer"
                onClick={togglePassword}
              >
                {showPassword ? <IoEyeSharp /> : <FaEyeSlash />}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-700 transition duration-200"
              >
                Login
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={handleGoogleBUtton}
              className="w-full py-2 bg-gradient-to-r from-red-500 to-[#9538e2] text-white rounded-md hover:from-red-600 hover:to-[#9538e2] transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
            >
              <div className="flex items-center justify-center gap-6">
                <FaGoogle /> Sign in with Google
              </div>
            </button>
          </div>

          <div className="mt-4 text-center">
            <div className="text-sm text-gray-600 flex items-center justify-center">
              Don't have an account?
              <NavLink to="/register" className="text-red-700 font-bold">
                Register here
              </NavLink>
              <NavLink to="/Forgot">
                <p className="text-red-700 font-bold mx-2 cursor-pointer">
                  Forgot password
                </p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
