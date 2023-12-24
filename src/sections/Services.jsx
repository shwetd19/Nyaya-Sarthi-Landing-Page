/** @format */
import Aos from 'aos';
import 'aos/dist/aos.css';
import ServiceCard from '../components/ServiceCard';
import { services } from '../constants';
const Services = () => {
  return (
    <section className="padding-x py-10">
      <div data-aos="zoom-in" className="max-container flex justify-center flex-wrap gap-9">
        {services.map((service) => (
          <ServiceCard key={service.label} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
