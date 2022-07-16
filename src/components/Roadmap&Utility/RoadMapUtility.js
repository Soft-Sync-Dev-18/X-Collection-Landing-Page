import "./styles/index.scss";

const RoadMapUtility = () => {

  return (
    <div className="roadmap_utility" id="roadmap">
      <div className="shade leftShade"></div>
      <div className="roadmap_utility_contaienr">
        <h1
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
        >
          Our Roadmap & Long Term Plans
        </h1>

        <div className="container">
          <div className="experience">
            <div className="item">
              <div>
                <ul className="fa-ul">
                  <li
                    data-aos="zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="400"
                    data-aos-offset="0"
                  >
                    Our goal is to make hiring in web3 more inclusive by
                    minimizing the gender network gap and the gender pay gap.
                    Here is where we will start
                  </li>
                </ul>
              </div>
            </div>

            <div className="item">
              <div>
                <ul className="fa-ul">
                  <li
                    data-aos="zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="500"
                    data-aos-offset="0"
                  >
                    Provide our community with tips for networking effectively
                    and ways to gain access to mentors and career coaches.
                    Enable our community to make more connections and
                    introductions for one another.
                  </li>
                </ul>
              </div>
            </div>
            <div className="item">
              <div>
                <ul className="fa-ul">
                  <li
                    data-aos="zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="700"
                    data-aos-offset="0"
                  >
                    Provide more transparency around compensation to help our
                    community (especially women and nonbinary individuals)
                    negotiate their compensation for new and existing jobs. We
                    are starting by launching the web3 compensation data survey{" "}
                    <a
                      href="https://buff.ly/3kg92Z9"
                      target="_blank"
                      rel="noreferrer"
                    >
                      link
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="item">
              <div>
                <ul className="fa-ul">
                  <li
                    data-aos="zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="900"
                    data-aos-offset="0"
                  >
                    Our long term vision is to turn our community into a
                    decentralized, crowdsourced recruiting platform - where we
                    can support people across the globe when it comes to
                    enhancing their professional opportunities and careers,
                    specifically in web3 roles.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shade rightShade"></div>
    </div>
  );
};

export default RoadMapUtility;
