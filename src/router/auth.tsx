import { createContext, useState, useContext } from 'react'
import {
  useLocation,
  Navigate,
} from "react-router-dom";
import { User } from '../types/common';
import { CURRENT_USER } from '../utils/mutuals';

interface AuthContextType {
  user: User | null;
  signin: (user: User, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}


const AuthContext = createContext<AuthContextType>(null!);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const user = localStorage.getItem(CURRENT_USER)
    if (user) {
      return JSON.parse(user)
    } else {
      return null
    }
  });

  const signin = (newUser: User, callback: VoidFunction) => {
    setUser(newUser);
    localStorage.setItem(CURRENT_USER, JSON.stringify(newUser))
    callback();
  };

  const signout = (callback: VoidFunction) => {
    localStorage.removeItem(CURRENT_USER)
    setUser(null);
    callback();
  };

  const value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  return useContext(AuthContext);
}

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export { useAuth, AuthProvider, RequireAuth };
