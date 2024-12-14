import React, { useState } from 'react';
import LoginForm from '../components/Auth/LoginForm';
import RegistrationForm from '../components/Auth/RegistrationForm';
import ForgotPasswordForm from '../components/Auth/ForgotPasswordForm';
import HeroImage from '../components/Auth/HeroImage';

const AuthPage = () => {
  const [authMode, setAuthMode] = useState('login');

  const toggleAuthMode = (mode) => {
    setAuthMode(mode);
  };

  return (
    <>
      <main className="h-screen flex">
        <div className="hidden lg:block lg:w-1/2 h-full relative">
          <HeroImage />
        </div>

        <div className="lg:w-1/2 w-full flex items-center justify-center px-8">
          {authMode === 'login' && <LoginForm toggleAuthMode={toggleAuthMode} />}
          {authMode === 'register' && <RegistrationForm toggleAuthMode={toggleAuthMode} />}
          {authMode === 'forgotPassword' && <ForgotPasswordForm  toggleAuthMode={toggleAuthMode} />}
        </div>
      </main>
    </>
  );
};

export default AuthPage;
