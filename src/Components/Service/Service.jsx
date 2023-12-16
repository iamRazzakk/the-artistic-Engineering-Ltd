import { useEffect, useState } from "react";
import data from '../../assets/Data.json';
import ServiceCard from "./ServiceCard";

const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        setServices(data);
    }, []);

    console.log(services);

    return (
        <div>
            <h1 className="text-3xl font-bold text-center text-black underline md:mt-10">Our Service</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-10">
                {
                    services?.map(service => <ServiceCard key={service.price} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Service;
