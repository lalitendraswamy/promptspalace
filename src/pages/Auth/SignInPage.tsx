import React from 'react';
import LoginForm from '../../features/auth/LoginForm';

const SignInPage: React.FC = () => {
  return (
    <div className="auth-page sign-in-page">
      <LoginForm />
    </div>
  );
};

export default SignInPage;
