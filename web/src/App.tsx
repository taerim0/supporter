import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/main/MainPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<MainPage />}/>
      </Routes>
    </div>
  );
}

export default App;
