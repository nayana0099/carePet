// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PetDetailsPage from './pages/PetDetailsPage';
import ErrorBoundary from './utils/ErrorBoundary';
import Header from './components/Header'; // Import the Header component

const App = () => (
  <Router>
    <ErrorBoundary>
      <Header /> {/* Add Header to the layout */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pets/:id" element={<PetDetailsPage />} />
      </Routes>
    </ErrorBoundary>
  </Router>
);

export default App;
