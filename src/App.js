import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './component/Login';
import UserList from './component/UserList';
import ProductList from './component/ProductList';
import MainLayout from './component/MainLayout';

const ProtectedRoute = ({ children }) => {
  const isLogin = localStorage.getItem('isLoggedIn');
  return isLogin ? children : <Navigate replace to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route path="/" element={<ProtectedRoute><MainLayout /></ProtectedRoute>}>
          <Route path="users" element={<UserList />} />
          <Route path="products" element={<ProductList />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;