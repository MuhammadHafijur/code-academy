import React from 'react';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Service from '../Service/Service';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;