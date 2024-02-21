import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
    return (
        <div>
            <Outlet /> {/* Ici, le contenu de votre route actuelle sera affiché */}
            <Footer />
        </div>
    );
};

export default App;
