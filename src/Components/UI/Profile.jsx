import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Provider/AuthProvider';

const Profile = () => {
  const { ManageProfile, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const photoUrl = form.get('url');
    const name = form.get('name');
    const email = form.get('email');
    ManageProfile(name, photoUrl, email);
    e.target.reset();
    toast.success(' 🎉 Profile updated successfully!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <Helmet>
        <title>Career - Counseling | Profile</title>
      </Helmet>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 md:px-8">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-md sm:max-w-lg md:max-w-2xl">
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
            Update Profile
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-600 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-600 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user && user?.email}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="photoUrl"
                className="block text-sm font-semibold text-gray-600 mb-2"
              >
                Photo URL
              </label>
              <input
                type="text"
                name="url"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:gap-6 lg:gap-8">
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                Update Profile
              </button>

              <button
                onClick={() => navigate('/MyProfile')}
                className="w-full sm:w-auto px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                My Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
