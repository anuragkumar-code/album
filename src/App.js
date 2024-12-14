import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import Dashboard from './pages/Dashboard';
import AlbumPage from './pages/AlbumPage';
import CreateAlbumPage from './pages/CreateAlbumPage';

import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/album/:id" element={<AlbumPage />} />
        <Route path="/create-album" element={<CreateAlbumPage />} />
      </Routes>
    </Router>
  );
}

export default App;
