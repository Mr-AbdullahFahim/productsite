import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App';
import Users from './Components/Users';
import Products from './Components/Products';
import CreateProduct from './Components/CreateProduct';
import './axios';  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
        <Route path="/create-product" element={<CreateProduct />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
