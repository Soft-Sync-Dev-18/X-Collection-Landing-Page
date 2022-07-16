import {
  GREATER_THAN_SIGN,
  JOIN_TEAM_GIRL_ONE,
  JOIN_TEAM_GIRL_TWO,
  JOIN_TEAM_GIRL_THREE,
  JOIN_TEAM_GIRL_FOUR,
  JOIN_TEAM_GIRL_FIVE,
  JOIN_TEAM_GIRL_SIX,
} from "../../constant/imageAndIcons";
import { carosuelData } from "../../data/data";
import "./styles/index.scss";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TeamSection = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: 30,
    accessibility: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="team_section" id="TeamSection">
      <div className="join_teamSection" id="jobs">
        <div className="join_team">
          <div
            className="joinTeamDiv"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
          >
            <div className="join_teamInner">
              <h1 className="first_heading">
                What are you <span>waiting for?</span>
              </h1>
              <h1>
                Join <span> our community </span>now!
              </h1>

              <div className="explore_btn_container">
                <p>explore JOBS</p>
                <a
                  href="https://discord.com/invite/Xh2gbQpZD3"
                  rel="noreferrer"
                  target="_blank"
                >
                  <div
                    className="first_circle"
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="600"
                    data-aos-offset="0"
                  >
                    <div className="second_circle">
                      <div className="third_circle">
                        <div className="mainIcon_circle">
                          <img
                            src={GREATER_THAN_SIGN}
                            alt="JOIN_TEAM_GIRL_ONE"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="join_team_image_gallery">
            <img
              src={JOIN_TEAM_GIRL_ONE}
              alt="JOIN_TEAM_GIRL_ONE"
              data-aos="zoom-in-right"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-duration="800"
              data-aos-offset="0"
            />
            <div>
              <div className="gallery_section_one">
                <img
                  src={JOIN_TEAM_GIRL_TWO}
                  alt="JOIN_TEAM_GIRL_TWO"
                  data-aos="zoom-in-down"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="500"
                  data-aos-duration="1000"
                  data-aos-offset="0"
                />
                <img
                  src={JOIN_TEAM_GIRL_FIVE}
                  alt="JOIN_TEAM_GIRL_FIVE"
                  data-aos="zoom-in-left"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="700"
                  data-aos-duration="1000"
                  data-aos-offset="0"
                />
              </div>
              <div className="gallery_section_two">
                <img
                  src={JOIN_TEAM_GIRL_THREE}
                  alt="JOIN_TEAM_GIRL_THREE"
                  data-aos="zoom-in-up"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="400"
                  data-aos-duration="1000"
                  data-aos-offset="0"
                />
                <img
                  src={JOIN_TEAM_GIRL_FOUR}
                  alt="JOIN_TEAM_GIRL_FOUR"
                  data-aos="zoom-in-up"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="600"
                  data-aos-duration="1000"
                  data-aos-offset="0"
                  className="join_team_girl4"
                />
                <img
                  src={JOIN_TEAM_GIRL_SIX}
                  alt="JOIN_TEAM_GIRL_SIX"
                  data-aos="zoom-in-up"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="800"
                  data-aos-duration="1000"
                  data-aos-offset="0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="our_team_section" id="team">
        <h1>OUR TEAM</h1>
        <div className="carosuel_images_wrapper">
          <Slider {...settings}>
            {carosuelData.map((carosuel, i) => (
              <div
                key={i}
                className="carosuel_image"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay={(i + 1) * 100 + 200}
                data-aos-offset="100"
              >
                <div
                  className="innerCarosuel_image"
                  style={{ background: carosuel.background }}
                >
                  <img src={carosuel.image} alt={carosuel.name} />
                  <div className="carosuel_image_bottom">
                    <div style={{ background: "#552FB9", height: "8px" }} />
                    <p>{carosuel.name}</p>
                    <p>{carosuel.job}</p>
                    <p>{carosuel.location}</p>
                    <p className="hastag">
                      <a
                        target="_blank"
                        without
                        rel="noreferrer"
                        href={`https://mobile.twitter.com/${carosuel.hastag}`}
                      >
                        {" "}
                        {carosuel.hastag}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
