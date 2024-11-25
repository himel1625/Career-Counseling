import { createBrowserRouter } from 'react-router-dom';
import ServiceDetails from '../Components/ServiceDetails';
import Forgot from '../Components/UI/Forgot';
import Login from '../Components/UI/Login';
import MyProfile from '../Components/UI/MyProfile';
import PrivateRoute from '../Components/UI/PrivateRoute';
import Profile from '../Components/UI/Profile';
import Register from '../Components/UI/Register';
import Home from '../Home/Home';
import MainLayout from '../Layout/MainLayout';
import Dashboard from '../Page/Dashboard';
import ErrorPages from '../Page/ErrorPages';
import OurServices from '../Page/OurServices';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPages></ErrorPages>,
    children: [
      
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('./Services.json'),
      },
      {
        path: '/Login',
        element: <Login></Login>,
      },
      {
        path: '/Profile',
        element: <Profile></Profile>,
      },
      {
        path: '/MyProfile',
        element: <MyProfile></MyProfile>,
      },
      {
        path: '/Register',
        element: <Register></Register>,
      },
      {
        path: '/Forgot',
        element: <Forgot></Forgot>,
      },
      {
        path: '/Dashboard',
        element: <Dashboard></Dashboard>,
      },
      {
        path: '/OurServices',
        element: <OurServices></OurServices>,
        loader: () => fetch('./Services.json'),
      },
      {
        path: '/:id',
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const response = await fetch('./Services.json');
          const services = await response.json();
          const service = services.find((service) => service.id == params.id);
          return service || {};
        },
      },
    ],
  },
]);
export default router;
