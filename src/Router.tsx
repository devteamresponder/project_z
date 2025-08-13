import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import PortfolioPage from './PortfolioPage';

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
    </Routes>
  );
};

export default Router;