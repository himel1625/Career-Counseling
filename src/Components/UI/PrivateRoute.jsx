import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Loader from '../Loader';

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const { pathname } = useLocation();

  if (loader) {
    return <Loader></Loader>;
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate state={pathname} to="/Login"></Navigate>;
};

export default PrivateRoute;
