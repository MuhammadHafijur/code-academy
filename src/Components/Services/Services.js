import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
  useEffect(()=>{
    fetch('./serviceData.json')
    .then(res => res.json())
    .then(data => setServices(data))
  }, [])
    return (
        <div className="h-64 grid grid-cols-4  grid-flow-row gap-4 text-center">
            {
                services.slice(0, 4).map(service => <Service service={service}></Service>)
            }
        </div>
    );
};

export default Services;