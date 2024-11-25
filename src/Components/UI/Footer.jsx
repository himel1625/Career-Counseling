const Footer = () => {
  return (
    <>
      <hr></hr>
      <footer className="bg-gray-100 text-gray-800 py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">CareerPath</h2>
            <p className="mt-4 text-sm leading-6">
              At CareerPath, we believe in unlocking your true potential. Our
              expert guidance helps individuals discover, plan, and achieve
              their dream careers.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Our Services</li>
              <li>Success Stories</li>
              <li>Resources</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Contact Us
            </h3>
            <p className="text-sm">
              <strong>Email:</strong> info@careerpath.com
            </p>
            <p className="text-sm">
              <strong>Phone:</strong> +880 987-654-3210
            </p>
            <p className="text-sm">
              <strong>Address:</strong> 9696 Career Ave, Bangladesh, BD A04F245
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Stay Updated
            </h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for the latest tips and career
              insights.
            </p>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-gray-200 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-purple-400 outline-none"
              />
              <button
                type="submit"
                className="mt-3 w-full bg-purple-600 hover:bg-purple-500 text-white font-semibold py-2 rounded-md transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-6 text-center">
          <p className="text-lg text-gray-600">
            &copy; {new Date().getFullYear()} CareerPath. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
