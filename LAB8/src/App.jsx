import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header/Header";
import About from "./components/About/About";
import Delivery from "./components/Delivery/Delivery";
import SpecialOffers from "./components/SpecialOffers/SpecialOffers";
import Footer from "./components/Footer/Footer";

import Menu from "./pages/Menu";
import Login from "./pages/Login";

import { useAuth } from "./hooks/useAuth";

function PrivateRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;

  return user ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Головна */}
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

        {/* Меню — доступно тільки авторизованим */}
        <Route
          path="/menu"
          element={
            <PrivateRoute>
              <Menu />
            </PrivateRoute>
          }
        />

        {/* Логін */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
