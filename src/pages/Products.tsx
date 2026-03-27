import React from 'react';
import MainLayout from '../layouts/MainLayout';

const ProductsPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="page products-page">
        <h1>Products</h1>
        <p>Browse and manage products here.</p>
      </div>
    </MainLayout>
  );
};

export default ProductsPage;
