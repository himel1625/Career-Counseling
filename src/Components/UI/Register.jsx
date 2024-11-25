import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { handleGoogleBUtton, setUser, handleRegister, ManageProfile, LogOut } =
    useContext(AuthContext);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const firstName = form.get('firstName');
    const lastName = form.get('lastName');
    const name = firstName + lastName;
    const photoUrl = form.get('photoUrl');
    const email = form.get('email');
    const password = form.get('password');
    // Password validation
    if (password.length < 6) {
      toast.error('❌Password must contain at least 6 character ', {
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
      toast.error('❌Password must in one lowercase letter ', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error('❌Password must in one uppercase letter ', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return;
    }
    handleRegister(email, password)
      .then((res) => {
        ManageProfile(name, photoUrl, email);
        const user = res.user;
        setUser(user);
        LogOut()
        e.target.reset();
        toast.success('🎉 Registration successful!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
        setTimeout(() => {
          toast.success('🎉 You have Create an account, so please login', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        }, 6000); 
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
        <title>Career - Counseling | Register</title>
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl p-8 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Create Account
          </h2>
          <form onSubmit={handleRegisterSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  placeholder="Enter your first name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter your last name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="photoUrl"
                className="block text-sm font-medium text-gray-700"
              >
                Photo URL
              </label>
              <input
                type="url"
                id="photoUrl"
                name="photoUrl"
                required
                placeholder="Enter your photo URL"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

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
                required
                placeholder="Enter your email address"
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
                placeholder="Enter a password"
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
                className="w-full py-2 bg-Color text-white rounded-md hover:bg-Color duration-200"
              >
                Create Account
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={handleGoogleBUtton}
              className="w-full py-2 bg-gradient-to-r from-red-500 to-[#9538e2] text-white rounded-md hover:from-red-600 hover:to-[#9538e2] transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
            >
              <div className="flex items-center justify-center gap-6">
                {' '}
                <FaGoogle></FaGoogle> Sign in with Google
              </div>
            </button>
          </div>

          <div className="mt-4 text-center text-sm text-gray-600">
            <p>
              Already have an account?{' '}
              <NavLink to="/login" className="text-red-700 font-bold">
                Login here
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
