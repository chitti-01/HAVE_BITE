
import React, { createContext, useState, useContext, useEffect, useMemo } from 'react';
import { User, UserRole } from '../types';
import { DUMMY_USERS, addDummyUser, removeDummyUser } from '../data/dummyData';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password_not_used: string, role: UserRole) => Promise<User | null>;
  register: (email: string, name: string, password_not_used: string, role: UserRole) => Promise<User | null>;
  logout: () => void;
  createLookLooker: (email: string, name: string, password_not_used: string) => Promise<User | null>;
  deleteUser: (userId: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('nourishnet-user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Failed to parse user from localStorage", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const login = async (email: string, password_not_used: string, role: UserRole): Promise<User | null> => {
    setLoading(true);
    // In a real app, you'd validate the password. Here we just find user by email and role.
    const foundUser = DUMMY_USERS.find(u => u.email === email && u.role === role);
    if (foundUser) {
      localStorage.setItem('nourishnet-user', JSON.stringify(foundUser));
      setUser(foundUser);
      setLoading(false);
      return foundUser;
    }
    setLoading(false);
    return null;
  };

  const register = async (email: string, name: string, password_not_used: string, role: UserRole): Promise<User | null> => {
    setLoading(true);
    const existingUser = DUMMY_USERS.find(u => u.email === email && u.role === role);
    if (existingUser) {
        setLoading(false);
        return null; // User with this email and role already exists
    }

    const newUser: User = {
        id: `user-${Date.now()}`,
        email,
        name,
        role,
    };
    addDummyUser(newUser); // Add to our "database"
    localStorage.setItem('nourishnet-user', JSON.stringify(newUser));
    setUser(newUser);
    setLoading(false);
    return newUser;
  };

  const createLookLooker = async (email: string, name: string, password_not_used: string): Promise<User | null> => {
    const existingUser = DUMMY_USERS.find(u => u.email === email && u.role === UserRole.LOOKLOOKER);
    if(existingUser) {
        return null; // already exists
    }
    const newUser: User = {
        id: `user-${Date.now()}`,
        email,
        name,
        role: UserRole.LOOKLOOKER
    };
    addDummyUser(newUser);
    return newUser;
  }

  const deleteUser = async (userId: string): Promise<void> => {
    removeDummyUser(userId);
  }

  const logout = () => {
    localStorage.removeItem('nourishnet-user');
    setUser(null);
  };

  const value = useMemo(() => ({ user, loading, login, register, logout, createLookLooker, deleteUser }), [user, loading]);

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};