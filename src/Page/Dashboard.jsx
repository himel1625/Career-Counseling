import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Dashboard = () => {
  const [progress, setProgress] = useState(75);
  const [profileProgress, setProfileProgress] = useState(90);
  const [showMore, setShowMore] = useState(false);

  const handleProgressChange = (e) => {
    setProgress(e.target.value);
  };

  const handleProfileProgressChange = (e) => {
    setProfileProgress(e.target.value);
  };

  return (
    <>
      <Helmet>
        <title>Career - Counseling | Dashboard</title>
      </Helmet>
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* User Profile Section */}
          <div className="col-span-1 bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">User Profile</h2>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-gray-300"></div>
              <div>
                <p className="font-medium">John Doe</p>
                <p className="text-sm text-gray-600">
                  Progress: {profileProgress}%
                </p>
              </div>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={profileProgress}
              onChange={handleProfileProgressChange}
              className="w-full mt-4 accent-indigo-600"
            />
          </div>

          <div className="col-span-1 bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Career Goal</h2>
            <p className="text-sm text-gray-600">
              {showMore
                ? 'As a web developer, my career goal is to enhance my skills by mastering modern tools and frameworks, ensuring I stay at the forefront of the industry. I aim to deliver creative and effective solutions by building high-quality web applications that meet client needs. Additionally, I aspire to stay updated with emerging technologies and market trends, enabling me to grow continuously and establish a successful long-term career in the field.'
                : 'As a web developer, my career goal is to enhance my skills by mastering modern tools...'}
            </p>
            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-2 text-blue-500 hover:text-blue-700"
            >
              {showMore ? 'Read Less' : 'Read More'}
            </button>
          </div>

          <div className="col-span-1 bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Career Goal Timeline</h2>
            <div className="space-y-4">
              <div className="relative bg-gray-200 rounded-full h-3">
                <div
                  className="bg-indigo-600 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
                <span
                  className="absolute top-[-20px] right-0 text-xs bg-gray-200 px-2 py-1 rounded"
                  style={{ left: `${progress}%` }}
                >
                  {progress}%
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={handleProgressChange}
                className="w-full accent-indigo-600"
              />
            </div>
          </div>

          <div className="col-span-1 lg:col-span-2 bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">
              Learning Recommendations
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li className="p-2 hover:bg-gray-100 rounded transition">
                HTML/CSS – Strong understanding of HTML5 and CSS3 for building
                and styling web pages.
              </li>
              <li className="p-2 hover:bg-gray-100 rounded transition">
                JavaScript – Proficiency in JavaScript, including ES6+ features,
                for front-end interactivity.
              </li>
              <li className="p-2 hover:bg-gray-100 rounded transition">
                Version Control (Git) – Basic knowledge of Git for tracking
                changes.
              </li>
              <li className="p-2 hover:bg-gray-100 rounded transition">
                React – Familiarity with React for building dynamic and
                responsive user interfaces.
              </li>
              <li className="p-2 hover:bg-gray-100 rounded transition">
                Node.js – Basic understanding of Node.js for backend
                development.
              </li>
              <li className="p-2 hover:bg-gray-100 rounded transition">
                Databases – Knowledge of databases like MongoDB, MySQL, or
                PostgreSQL.
              </li>
            </ul>
          </div>

          <div className="col-span-1 bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Job Recommendations</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="p-2 hover:bg-gray-100 rounded transition">
                Skills and Expertise – Your technical and soft skills.
              </li>
              <li className="p-2 hover:bg-gray-100 rounded transition">
                Experience – Work history and job roles.
              </li>
              <li className="p-2 hover:bg-gray-100 rounded transition">
                Portfolio – A collection of your past work or projects.
              </li>
              <li className="p-2 hover:bg-gray-100 rounded transition">
                Education – Academic qualifications and certifications.
              </li>
              <li className="p-2 hover:bg-gray-100 rounded transition">
                Job Preferences – Preferences for job location, work type, and
                salary.
              </li>
              <li className="p-2 hover:bg-gray-100 rounded transition">
                LinkedIn Profile/Resume – A well-structured resume showcasing
                achievements.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
