import React from 'react';
import useServices from '../../hooks/useServices';
import About from '../About/About';
import Admissions from '../Admissions/Admissions';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Service from '../Service/Service';
import Services from '../Services/Services';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    const [services, setServices] = useServices();
    return (
        <div>
            <Header></Header>
            <Admissions></Admissions>
            <About></About>
            <Subscribe></Subscribe>
            <Services></Services>
            
        </div>
    );
};

export default Home;