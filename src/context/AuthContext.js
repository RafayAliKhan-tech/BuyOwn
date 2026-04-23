// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { userService } from '../services/userService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    bootstrapAsync();
  }, []);

  const bootstrapAsync = async () => {
    try {
      await userService.initializeUsersStorage();

      const currentSession = await userService.getCurrentSession();
      if (currentSession) {
        setUser(currentSession);
        setUserToken(currentSession.id);
      }
    } catch (e) {
      console.error('Bootstrap error:', e);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      const result = await userService.loginUser(email, password);

      if (result.success) {
        setUser(result.user);
        setUserToken(result.user.id);
      }

      return result;
    } catch (error) {
      return { success: false, message: 'Login failed' };
    }
  };

  const register = async (name, email, password, confirmPassword) => {
    try {
      const result = await userService.registerUser(name, email, password);
      return result;
    } catch (error) {
      return { success: false, message: 'Registration failed' };
    }
  };

  const logout = async () => {
    await userService.logoutUser();
    setUser(null);
    setUserToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        userToken,
        login,
        register,
        logout,
        isLoggedIn: user !== null && userToken !== null, // 🔥 BOOLEAN FIX
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};