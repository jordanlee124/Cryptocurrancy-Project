import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './pages/Home.jsx';
import CryptoDetails from './pages/CryptoDetails.jsx';

export default function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/crypto/:id" element={<CryptoDetails/>}/>
      </Routes>
    </Router>
  );
}
