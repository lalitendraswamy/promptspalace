import React from 'react';
import MainLayout from '../layouts/MainLayout';

const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <div className="page home-page">
        <h1>Welcome Home</h1>
        <p>This is the home page. Add your content here.</p>
      </div>
    </MainLayout>
  );
};

export default HomePage;
