import React from 'react';
import './App.css';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Content from './Components/Content';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <Banner />
        <Content />
        <Footer />
    </div>
  );
}

export default App;
