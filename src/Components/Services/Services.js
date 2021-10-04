import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  // Set service data using useState
  const [services, setServices] = useState([]);
  // fetching data
  useEffect(() => {
    fetch("./serviceData.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h1 className="text-5xl font-medium pb-12">OUR SERVICES</h1>
      <div className="services">
        {services.map((service) => (
          <Service service={service} key={service.id}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
