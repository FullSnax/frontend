/*========================================
        Import Dependencies
========================================*/
import './App.css';
import axios from 'axios';
import { useState, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom"
import { AuthContext, AuthProvider } from "./context/AuthContext";
import React, {Component} from "react";

/*========================================
        Import Pages
========================================*/
import NavBar from './components/NavBar';
import MenuItemsPage from './pages/MenuItemsPage/MenuItemsPage';
import MyProfilePage from './pages/MyProfilePage/MyProfilePage';
import MyOrdersPage from './pages/MyOrdersPage/MyOrdersPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import AboutPage from './pages/AboutPage/AboutPage';
import Footer from './components/Footer';

export default function App() {
  
  const [details, setDetails] = useState([])
  const [user, setUser] = useState([])
  
  return (
    <div className='App'>
    <AuthProvider>
      <NavBar />
      <Routes>
        <Route path="/profile" element={<MyProfilePage />} />
        <Route path="/menu" element={<MenuItemsPage />} />
        <Route path="/orders" element={<MyOrdersPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </AuthProvider>
      <Footer />
  </div>
  )
}

