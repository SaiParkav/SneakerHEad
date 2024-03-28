import React from 'react';
import './index.css';
import Home from './components/Home';
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import { Login, Signup } from './Sections';
import Nav from './components/Nav';

import AddProducts from './components/AddProducts';
import ProductsList from './Sections/ProductsList';
import AboutUs from './components/AboutUs';

const App = () => (
  <>
  <Router>
    <Nav/>
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<Signup />} />
      <Route path="/about" element={<AboutUs />} />

    
      {/* <Route path="/contact" element={<ContactUs />} /> */}
      <Route path="/products" element={<ProductsList />} />
      <Route path="/addProduct" element={<AddProducts />} />
    </Routes>
  </Router>

  </>
);
export default App;
 