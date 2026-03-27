import React from 'react';
import MainLayout from '../layouts/MainLayout';

const UsersPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="page users-page">
        <h1>Users</h1>
        <p>Manage your users here.</p>
      </div>
    </MainLayout>
  );
};

export default UsersPage;
