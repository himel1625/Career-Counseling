import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import { IoIosStarOutline } from 'react-icons/io';
const ReviewCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('../ReviewData.json')
      .then((res) => res.json())
      .then((data) => setData(data));

    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  if (data.length === 0) {
    return <div className="text-Color">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1
        className="text-3xl font-semibold text-center mb-8 flex items-center  justify-center text-Color  "
        data-aos="fade-down"
      >
        Customer Reviews <IoIosStarOutline size={40} />
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {data &&
          data.map((review, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <div className="flex items-center mb-4">
                <div
                  className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden flex items-center justify-center text-white"
                  data-aos="zoom-in"
                >
                  <IoIosStarOutline size={40}/>
      
                </div>
                <div className="ml-4" data-aos="fade-left">
                  <h3 className="text-xl font-medium">
                    {review.reviewer_name}
                  </h3>
                  <p className="text-gray-600">{review.reviewer_designation}</p>
                </div>
              </div>
              <h4
                className="text-lg font-semibold text-purple-600 mb-2"
                data-aos="zoom-in-up"
              >
                {review.review_title}
              </h4>
              <p className="text-gray-800 mb-2" data-aos="fade-right"></p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span data-aos="fade-left">Rating: {review.rating}</span>
                <span data-aos="fade-right">
                  {new Date(review.date_of_review).toLocaleDateString()}
                </span>
              </div>
              <p
                className="mt-2 text-sm text-gray-500 italic"
                data-aos="fade-up"
              >
                Suggestions: {review.improvement_suggestions}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ReviewCard;
