import React, { useEffect, useState } from "react";
import About from "../About/About";
import Admissions from "../Admissions/Admissions";
import Header from "../Header/Header";
import Service from "../Service/Service";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  // Set service data using useState method
  const [services, setServices] = useState([]);
  useEffect(() => {
    // fetching data
    fetch("./serviceData.json")
      .then((res) => res.json())
      .then((data) => setServices(data.slice(0, 4)));
  }, []);
  return (
    <div>
      <Header></Header>
      <Admissions></Admissions>
      <About></About>
      {/* Show service data */}
      <div>
      <h1 className="text-5xl font-medium pb-12">OUR SERVICES</h1>
      <div className="services">
        {services.map((service) => (
          <Service service={service} key={service.id}></Service>
        ))}
      </div>
      </div>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;


