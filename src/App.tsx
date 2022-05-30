import React from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <main role="main" className="container">
    <Routes>
      <Route path="/" element={<Home/>}/> 
    </Routes>       
    </main>  
    </BrowserRouter>
  );
}

export default App;
