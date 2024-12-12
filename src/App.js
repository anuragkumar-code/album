import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationPage from './pages/Authentication/RegistrationPage';
import Dashboard from './pages/Dashboard';
import AlbumPage from './pages/AlbumPage';
import CreateAlbumPage from './pages/CreateAlbumPage';
import LoginPage from './pages/Authentication/LoginPage';

import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth">
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegistrationPage />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/album/:id" element={<AlbumPage />} />
        <Route path="/create-album" element={<CreateAlbumPage />} />
      </Routes>
    </Router>
  );
}

export default App;
