import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import About from './components/About/About';
import Delivery from './components/Delivery/Delivery';
import SpecialOffers from './components/SpecialOffers/SpecialOffers';
import Footer from './components/Footer/Footer';

import Menu from './pages/Menu';
import Login from './pages/Login'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <About />
              <Delivery />
              <SpecialOffers />
              <Footer />
            </>
          }
        />

        <Route path="/menu" element={<Menu />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
