import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Main from './components/Main'
import './styles/style.css';
import './scripts/script.js';
// import $ from 'jquery';



function App() {
    return (
        <div>
            <Hero />
            <Header />
            <Navbar />
            <Main />
        </div>
    );
}
export default App;