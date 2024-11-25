import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import ReviewCard from '../Components/ReviewCard';

const Home = () => {
  const data = useLoaderData();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Set up auto slideshow for the images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [data.length]);

  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Animation easing
      once: true, // Run animation only once
      mirror: false, // Disable the animation on scroll back
    });
  }, []);

  // Refresh AOS when data changes
  useEffect(() => {
    AOS.refresh();
  }, [data]);

  return (
    <div>
      {/* Hero Section */}
      <div className="hero min-h-screen bg-gray-100">
        <div className="hero-content flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16 w-full px-4 md:px-8 lg:px-16 py-12 lg:py-24">
          <div
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-lg shadow-2xl relative overflow-hidden"
            data-aos="fade-up"
          >
            <img
              src={data[currentImageIndex].image}
              alt={data[currentImageIndex].subject}
              className="w-full h-[430px] rounded-xl object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 text-white">
              <p className="text-xl font-semibold">
                {data[currentImageIndex].subject}
              </p>
              <p className="text-sm">{data[currentImageIndex].category}</p>
              <p className="mt-2 text-sm">{data[currentImageIndex].sender}</p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug text-gray-900"
              data-aos="fade-up"
            >
              <span className="text-Color">Shape</span> Your Future With Expert
              Career Counse<span className="text-Color">ling!</span>
            </h1>
            <p
              className="py-4 sm:py-6 text-base sm:text-lg text-gray-700"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              "Shape Your Future With Expert Career Counseling" provides
              personalized guidance to help you make informed career decisions.
              Our experts craft tailored career paths based on your strengths,
              interests, and goals. Gain clarity, explore opportunities, and
              confidently achieve your ambitions!
            </p>
            <NavLink to="/OurServices">
              <button
                className="btn bg-indigo-600 hover:bg-indigo-800 text-white px-6 py-3 rounded-lg transition-colors duration-300"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Our Services
              </button>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Review Section */}
      <div className="bg-gray-50 py-12" data-aos="fade-up" data-aos-delay="300">
        <div className="container mx-auto px-4">
          <ReviewCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
