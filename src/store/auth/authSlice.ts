import { createContext, useContext, useReducer, ReactNode } from 'react';

// --- Types ---
interface AuthState {
  isAuthenticated: boolean;
  user: { id: string; email: string; name: string } | null;
  token: string | null;
}

type AuthAction =
  | { type: 'LOGIN'; payload: { user: AuthState['user']; token: string } }
  | { type: 'LOGOUT' };

// --- Reducer ---
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN':
      return { isAuthenticated: true, user: action.payload.user, token: action.payload.token };
    case 'LOGOUT':
      return { isAuthenticated: false, user: null, token: null };
    default:
      return state;
  }
};

// --- Context ---
const AuthContext = createContext<{
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
} | null>(null);

// --- Provider ---
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, {
    isAuthenticated: false,
    user: null,
    token: localStorage.getItem('token'),
  });

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

// --- Hook ---
export const useAuthStore = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuthStore must be used within AuthProvider');
  return ctx;
};
