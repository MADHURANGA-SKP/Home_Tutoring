import React, { createContext, useState, useContext } from 'react';

// Create context
const AuthContext = createContext();

// Provider component to wrap the app
export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({
    username: '',
    password: '',
    isAuthenticated: false,
  });

  const login = (username, password) => {
    setAuthData({ username, password, isAuthenticated: true });
  };

  const logout = () => {
    setAuthData({ username: '', password: '', isAuthenticated: false });
  };

  return (
    <AuthContext.Provider value={{ authData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use authentication data
export const useAuth = () => useContext(AuthContext);
