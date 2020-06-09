/* eslint-disable react/prop-types */
import React from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './login';

const PrivateRoute = ({ component, ...options }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const finalComponent = isAuthenticated ? component : Login;

  return <Route exact={options.exact} path={options.exact} component={finalComponent} />;
};

export default PrivateRoute;
