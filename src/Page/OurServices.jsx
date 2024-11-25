import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { NavLink, useLoaderData } from 'react-router-dom';

const OurServices = () => {
  const [data, setData] = useState([]);
  const item = useLoaderData();
  useEffect(() => {
    setData(item);
  }, [item]);

  if (data.length === 0) {
    return <div className="text-Color">Loading...</div>;
  }

  return (
    <>
      <Helmet>
        <title>Career - Counseling | Our Services</title>
      </Helmet>

      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((service, index) => (
            <div
              key={index}
              className="max-w-sm bg-white border rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.subject}
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-purple-700">
                  {service.subject}
                </h3>
                <p className="text-gray-600 mt-2">{service.body}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-medium text-green-500">
                    {service.price}
                  </span>
                  <NavLink
                    to={`/${service.id}`}
                    className="bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition cursor-pointer"
                  >
                    Learn More
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurServices;
