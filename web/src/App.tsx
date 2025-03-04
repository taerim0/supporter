import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/main/MainPage';
import AuthPage from './pages/auth/AuthPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<MainPage />}/>
        <Route path={'/auth/'} element={<AuthPage />}/>
      </Routes>
    </div>
  );
}

export default App;
