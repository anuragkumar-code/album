import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import Dashboard from './pages/Dashboard';
import AlbumPage from './pages/AlbumPage';
// import CreateAlbum from './components/Albums/CreateAlbum';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/albums/:id" element={<AlbumPage />} />
        {/* <Route path="/create-album" element={<CreateAlbum />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
