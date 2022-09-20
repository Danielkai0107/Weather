import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/globals.scss';
import { AppProvider } from './func/context';
import Navbar from './components/Navbar';
import CityPage from './pages/CityPage';
import InfoPage from './pages/InfoPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter basename="/Weather">
        <Navbar />
        <Routes>
          <Route path="/" element={<CityPage />} />
          <Route path="/info" element={<InfoPage />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>,
);
