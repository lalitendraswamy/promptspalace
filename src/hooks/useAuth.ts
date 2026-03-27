import { useState, useEffect } from 'react';

/**
 * useAuth - Custom hook for authentication state
 * Integrate with your auth service/store here
 */
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{ id: string; email: string } | null>(null);

  useEffect(() => {
    // TODO: Check token from localStorage or auth store
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (userData: { id: string; email: string }, token: string) => {
    localStorage.setItem('token', token);
    setUser(userData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setIsAuthenticated(false);
  };

  return { isAuthenticated, user, login, logout };
};

export default useAuth;
