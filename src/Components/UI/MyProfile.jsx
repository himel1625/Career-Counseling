import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const Navigate = useNavigate();

  const formatDateTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <img
            src={
              user?.photoURL ||
              'https://cdn-icons-png.flaticon.com/512/8847/8847419.png'
            }
            alt="User Profile"
            className="w-32 h-32 md:w-32 md:h-32 rounded-full border"
          />
          <div className="flex-1">
            <h2 className="text-xl md:text-2xl font-semibold text-center md:text-left">
              {user?.displayName || 'User'}
            </h2>
            <p className="text-gray-600 text-center md:text-left">
              {user?.email}
            </p>
            <div className="mt-4 text-gray-700 space-y-2">
              <p>
                <strong>UID:</strong> {user?.uid}
              </p>
              <p>
                <strong>Email Verified:</strong>{' '}
                {user?.emailVerified ? 'Yes' : 'No'}
              </p>
              <p>
                <strong>Account Created:</strong>{' '}
                {user?.metadata?.creationTime
                  ? formatDateTime(user.metadata.creationTime)
                  : 'N/A'}
              </p>
              <p>
                <strong>Last Login:</strong>{' '}
                {user?.metadata?.lastSignInTime
                  ? formatDateTime(user.metadata.lastSignInTime)
                  : 'N/A'}
              </p>
            </div>
          </div>
        </div>
        <button
          onClick={() => Navigate('/Profile')}
          className="mt-6 w-full py-3 bg-purple-600 text-white text-sm md:text-base rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
