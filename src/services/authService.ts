import { apiService } from './apiService';

interface LoginPayload {
  email: string;
  password: string;
}

interface AuthResponse {
  token: string;
  user: { id: string; email: string; name: string };
}

/**
 * authService - Authentication API calls
 */
export const authService = {
  login: (payload: LoginPayload) =>
    apiService.post<AuthResponse>('/auth/login', payload),

  register: (payload: { name: string; email: string; password: string }) =>
    apiService.post<AuthResponse>('/auth/register', payload),

  logout: () =>
    apiService.post<void>('/auth/logout', {}),

  me: () =>
    apiService.get<{ id: string; email: string; name: string }>('/auth/me'),
};
