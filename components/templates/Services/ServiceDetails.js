import ServiceItems from "@/components/modules/ServiceItems/ServiceItems";
import { serviceItems } from "@/constants";

const ServiceDetails = () => {
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Our Services
          </h4>
          <h1 className="display-4">Fresh & Organic Beans</h1>
        </div>
        <div className="row">
          {serviceItems.map((item) => (
            <ServiceItems key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
