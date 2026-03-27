/**
 * router.tsx
 * Central routing configuration using React Router v6.
 * Install: npm install react-router-dom
 */
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { appConfig } from './config/config';

// Lazy-loaded pages for code splitting
const HomePage = lazy(() => import('./pages/Home'));
const DashboardPage = lazy(() => import('./pages/Dashboard'));
const UsersPage = lazy(() => import('./pages/Users'));
const ProductsPage = lazy(() => import('./pages/Products'));
const ContactUsPage = lazy(() => import('./pages/ContactUs'));
const SignInPage = lazy(() => import('./pages/Auth/SignInPage'));
const SignUpPage = lazy(() => import('./pages/Auth/SignUpPage'));

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Routes>
          <Route path={appConfig.routes.home} element={<HomePage />} />
          <Route path={appConfig.routes.dashboard} element={<DashboardPage />} />
          <Route path={appConfig.routes.users} element={<UsersPage />} />
          <Route path={appConfig.routes.products} element={<ProductsPage />} />
          <Route path={appConfig.routes.contact} element={<ContactUsPage />} />
          <Route path={appConfig.routes.signIn} element={<SignInPage />} />
          <Route path={appConfig.routes.signUp} element={<SignUpPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
