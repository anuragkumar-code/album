import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import Dashboard from './pages/Dashboard';
import AlbumPage from './pages/AlbumPage';
import CreateAlbumPage from './pages/CreateAlbumPage';
import ProtectedRoute from './components/Routes/ProtectedRoute';

import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/album/:id" element={<ProtectedRoute><AlbumPage /></ProtectedRoute>} />
        <Route path="/create-album" element={<ProtectedRoute><CreateAlbumPage /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
