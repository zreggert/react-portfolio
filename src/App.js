import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import './styles/style.css';

function App() {
    return (
        <div>
            <Hero />
            <Header />
            <Navbar />
        </div>
    );
}
export default App;