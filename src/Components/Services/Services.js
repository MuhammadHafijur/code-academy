import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
  useEffect(()=>{
    fetch('./serviceData.json')
    .then(res => res.json())
    .then(data => setServices(data))
  }, [])
    return (
      <div>
        <h1 className="text-5xl font-medium pb-12">OUR SERVICES</h1>
        {/* <div className="h-64 grid grid-cols-4 grid-flow-row gap-4 text-center"> */}
        <div className="services">
            {
                services.slice(0, 4).map(service => <Service service={service}></Service>)
            }
        </div>
      </div>
    );
};

export default Services;