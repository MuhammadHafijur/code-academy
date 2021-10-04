import React from 'react';
import useServices from '../../hooks/useServices';
import About from '../About/About';
import Admissions from '../Admissions/Admissions';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    const [services, setServices] = useServices();
    return (
        <div>
            <Header></Header>
            <Admissions></Admissions>
            <About></About>
            <Services></Services>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;