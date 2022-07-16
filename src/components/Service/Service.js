import { GIRL_INTO_PIECE } from "../../constant/imageAndIcons";
import { services } from "../../data/data";
import "./styles/index.scss";
const Service = () => {
  return (
    <div className="services_container" id="Job">
      <h1>Our Values</h1>
      <div className="service_wrapper">
        <div className="girl_into_piece" data-aos="zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="50">
          <img src={GIRL_INTO_PIECE} alt="GIRL_INTO_PIECE" />
        </div>
        <div className="services">
          {services.map((service, i) => (
            <div key={i} className="service_container" data-aos="zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay={((i + 1) * 200) + 200}
              data-aos-offset="0">
              <div className="service_iconContainer">
                <img src={service.image} alt={service.image} />
              </div>
              <div className="service">
                <h2>{service.heading}</h2>
                <p>{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;