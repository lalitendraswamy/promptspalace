/**
 * Application-wide configuration settings
 * Extend this file for feature flags, pagination defaults, etc.
 */
export const appConfig = {
  defaultPageSize: 10,
  maxUploadSizeMB: 5,
  supportEmail: 'support@myapp.com',
  dateLocale: 'en-US',
  routes: {
    home: '/',
    dashboard: '/dashboard',
    signIn: '/auth/sign-in',
    signUp: '/auth/sign-up',
    profile: '/profile',
    users: '/users',
    products: '/products',
    contact: '/contact',
  },
} as const;
