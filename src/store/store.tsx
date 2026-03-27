import { type ReactNode } from 'react';
import { AuthProvider } from './auth/authSlice.tsx';
import { UserProvider } from './user/userSlice.tsx';

/**
 * RootStoreProvider - Wraps the entire app with all store providers
 * Usage: wrap <App /> in <RootStoreProvider> in main.tsx
 */
const RootStoreProvider = ({ children }: { children: ReactNode }) => {
  return (
    <AuthProvider>
      <UserProvider>
        {children}
      </UserProvider>
    </AuthProvider>
  );
};

export default RootStoreProvider;
