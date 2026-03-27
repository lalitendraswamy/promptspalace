import { createContext, useContext, useReducer, ReactNode } from 'react';

// --- Types ---
interface UserState {
  profile: { id: string; name: string; email: string; avatarUrl?: string } | null;
  loading: boolean;
}

type UserAction =
  | { type: 'SET_PROFILE'; payload: UserState['profile'] }
  | { type: 'CLEAR_PROFILE' }
  | { type: 'SET_LOADING'; payload: boolean };

// --- Reducer ---
const userReducer = (state: UserState, action: UserAction): UserState => {
  switch (action.type) {
    case 'SET_PROFILE':
      return { ...state, profile: action.payload, loading: false };
    case 'CLEAR_PROFILE':
      return { ...state, profile: null };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

// --- Context ---
const UserContext = createContext<{
  state: UserState;
  dispatch: React.Dispatch<UserAction>;
} | null>(null);

// --- Provider ---
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(userReducer, { profile: null, loading: false });
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

// --- Hook ---
export const useUserStore = () => {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUserStore must be used within UserProvider');
  return ctx;
};
