import React from 'react';
import Navbar from './components/Navbar/Navbar.js';
import Hero from './components/Hero/Hero.js';
import MenuPage from './components/MenuPage/MenuPage.js';
import Footer from './components/Footer/Footer.js';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <MenuPage></MenuPage>
      <Footer></Footer>
    </div>
  );
};

export default App;
