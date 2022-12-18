import React from 'react';
import '../src/Assets/css/app.css';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';

const App = () => {
    return (
        <>
            <Header />
            <main>
                <About />
            </main>
            <Footer />
        </>
    )
}

export default App
