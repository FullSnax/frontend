/*========================================
        Import Dependencies
========================================*/
import './App.css';
import axios from 'axios';
import { useState, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom"
import { AuthContext, AuthProvider } from "./context/Authcontext"
import React, {Component} from "react";

/*========================================
        Import Pages
========================================*/
import NavBar from './components/NavBar';
import MyProfilePage from './pages/MyProfilePage/MyProfilePage';
import MyOrdersPage from './pages/MyOrdersPage/MyOrdersPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import AboutPage from './pages/AboutPage/AboutPage';
import LoginPage from './pages/LoginPage/LoginPage';
import Footer from './components/Footer';
import HomePage from './pages/HomePage/HomePage';
import SearchPage from './components/SearchBar';
import MenuItemDetail from './components/MenuItemDetail';


export default function App() {

  

  return (
    <main className='App'>
      <AuthProvider>
      <NavBar />
      <Routes>
        <Route path="/profile" element={<MyProfilePage  />} />
        <Route path="/menu" element={<SearchPage />} />
        <Route path="/menuitems/:id" element={<MenuItemDetail />} />
        <Route path="/orders" element={<MyOrdersPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/home" element={<HomePage/>} />
        </Routes>
      <Footer />
      </AuthProvider>
  </main>
  )
}

