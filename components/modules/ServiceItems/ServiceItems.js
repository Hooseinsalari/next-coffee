import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiceItems = ({ imageSrc, title, desc, itemIcon }) => {
  return (
    <div className="col-lg-6 mb-5">
      <div className="row align-items-center">
        <div className="col-sm-5">
          <img className="img-fluid mb-3 mb-sm-0" src={imageSrc} alt="" />
        </div>
        <div className="col-sm-7">
          <h4>
            <FontAwesomeIcon className="service-icon" icon={itemIcon} />
            {title}
          </h4>
          <p className="m-0">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceItems;
