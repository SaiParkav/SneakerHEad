import React from 'react';
import './index.css';
import Home from './components/Home';
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import { Login, Signup } from './Sections';
import Nav from './components/Nav';
import Contact from './components/Contact';
import About from './components/About';
import Products from './components/Products';
import AddProducts from './components/AddProducts';

const App = () => (
  <>
  <Router>
    <Nav/>
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<Signup />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product" element={<Products />} />
      <Route path="/addProduct" element={<AddProducts />} />
    </Routes>
  </Router>

  </>
);
export default App;
 