/**
 * App configuration — reads from Vite environment variables.
 * Add variables to your .env file with the VITE_ prefix.
 *
 * Example .env:
 *   VITE_API_BASE_URL=https://api.example.com
 *   VITE_APP_NAME=MyApp
 */
export const config = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:3000/api',
  appName: import.meta.env.VITE_APP_NAME ?? 'MyApp',
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
  featureFlags: {
    enableDarkMode: true,
    enableAnalytics: false,
  },
} as const;
