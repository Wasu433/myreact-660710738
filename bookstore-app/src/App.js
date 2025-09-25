// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
//import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import BooksPage from './pages/BooksPage';
import CategoryPage from './pages/CategoryPage';
import About from './pages/About';
import ContectPage from './pages/ContectPage';
import NotFound from './components/NotFound'; // <-- fixed import

function App() {
  return (
    <div className="App">
      {/* Navigation Bar - แสดงในทุกหน้า */}
      <Navbar />
      <main className="main-content">
        <Routes>
          {/* หน้าแรก - แสดงหนังสือแนะนำ */}
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContectPage />} />

          {/* หน้า 404 - สำหรับ URL ที่ไม่มีอยู่ */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {/* Footer - แสดงในทุกหน้า */}
      {/*<Footer />*/}
    </div>
  );
}

export default App;