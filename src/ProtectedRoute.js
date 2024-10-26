// src/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import Header from './Header/Header';

const ProtectedRoute = ({ element }) => {
  const isLoggedin = localStorage.getItem('isLoggedin');

  return isLoggedin ? <div><Header />{element}</div> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
