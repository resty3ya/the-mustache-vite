import ServiceCard from "../components/ServiceCard";
import { services } from "../utils/constant";

const Service = () => {
  return (
    <section className="flex justify-evenly pt-32 pb-10">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};
export default Service;
