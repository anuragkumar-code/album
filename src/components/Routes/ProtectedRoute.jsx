import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { validateToken } from '../../services/authService';
import Loader from '../Common/Loader';

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setIsValid(false);
        setLoading(false);
        return;
      }

      const result = await validateToken(token);
      setIsValid(result);
      setLoading(false);
    };

    checkToken();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return isValid ? children : <Navigate to="/auth" replace />;
};

export default ProtectedRoute;
