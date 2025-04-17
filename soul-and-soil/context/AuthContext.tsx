// context/AuthContext.tsx

'use client';

import { fetchPicnics } from '@/utils/api';
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  email: string;
  token: string;
  currentAddress: string;
  age: string;
  name: string;
  currentReservations: [];
  pastReservations: [];
  _id: string;

}
interface Picnic {
  title: string;
  date: Date;
  _id: string;
  image: string;
  description: string;
  category: string;
  availableSpots: string;
  location: string;
}

interface AuthContextType {
  user: User | null;
  picnics: Picnic[];
  login: (userData: User) => void;
  signup: (userData: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [picnics, setPicnics] = useState<Picnic[]>([]);

  // Get user data from localStorage on app load
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    
    fetchPicnics().then((data) => {
      setPicnics(data);
    });
  }, []);

  // Function to login user (store data in context and localStorage)
  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };
  const signup = (userData: User) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  // Function to logout user (clear data from context and localStorage)
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

 

  return (
    <AuthContext.Provider value={{ user, login, logout ,signup, picnics}}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
