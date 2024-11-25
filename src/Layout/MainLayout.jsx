import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';
import { Bounce, ToastContainer } from 'react-toastify';
import Footer from '../Components/UI/Footer';
import Navbar from '../Components/UI/Navbar';
const MainLayout = () => {
  return (
    <>
      <Helmet>
        <title>Career - Counseling | Home</title>
      </Helmet>

      <div className="mx-auto max-w-[1440px] lg:mx-auto scroll-smooth font-sora">
        <Navbar />
        <div className="min-h-[calc(100vh-232px)]">
          <Outlet />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
