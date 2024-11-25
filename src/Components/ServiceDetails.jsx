import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ServiceDetails = () => {
  const data = useLoaderData();
  const [comment, setComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      toast.success('🎉 Comment submitted successfully!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      setComment(''); 
    } 
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-5">
      <div className="bg-white shadow-xl rounded-lg max-w-lg w-full">
        <div className="flex justify-center -mt-16">
          <img
            src={data.image}
            alt={data.subject}
            className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg"
          />
        </div>

        <div className="p-5 text-center">
          <h1 className="text-2xl font-bold text-gray-800">{data.subject}</h1>
          <p className="text-sm text-gray-500 mt-1">By: {data.sender}</p>
          <p className="text-lg font-semibold text-purple-600 mt-3">
            {data.price}
          </p>
          <p className="mt-3 text-gray-700">{data.description}</p>
          <p className="mt-2 text-sm text-gray-600">{data.body}</p>
        </div>

        <div className="border-t p-5">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            Leave a Comment
          </h2>
          <form onSubmit={handleCommentSubmit} className="flex flex-col gap-3">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write your comment here..."
              className="w-full h-28 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
            >
              Submit Comment
            </button>
          </form>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ServiceDetails;
