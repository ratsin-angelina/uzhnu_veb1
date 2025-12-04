import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; 
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import Header from './components/Header/Header';
import About from './components/About/About';
import Delivery from './components/Delivery/Delivery';
import SpecialOffers from './components/SpecialOffers/SpecialOffers';
import Footer from './components/Footer/Footer';

import Menu from './pages/Menu';
import Login from './pages/Login'; 

// Створюємо QueryClient тільки один раз (поза компонентом)
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 хвилин
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}> 
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
          
          {/* Маршрут для Login - все вже працює! */}
          <Route path="/login" element={<Login />} />
          
          {/* Можна додати інші маршрути, якщо потрібно */}
          <Route path="*" element={
            <>
              <Header />
              <div style={{ padding: '50px', textAlign: 'center' }}>
                <h1>404 - Сторінку не знайдено</h1>
              </div>
              <Footer />
            </>
          } />
        </Routes>
      </Router>
      
      {/* DevTools для React Query (тільки в розробці) */}
      {process.env.NODE_ENV === 'development' && (
        <ReactQueryDevtools 
          initialIsOpen={false}
          position="bottom-right" 
          buttonPosition="bottom-left"
        />
      )}
      
    </QueryClientProvider>
  );
}

export default App;