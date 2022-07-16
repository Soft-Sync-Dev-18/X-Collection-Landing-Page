import { Header } from "../index";
import {
  GREATER_THAN_SIGN,
  LADY_IMAGE,
  LINE_ONE,
  darkDepth,
  lightDepth,
  LINE_TWO,
  SPIRAL_LINES,
  DRAW_LINES,
} from "../../constant/imageAndIcons";
import { motion } from "framer-motion";
import "./styles/index.scss";

const HeroSection = () => {
  return (
    <div className="hero_section" id="home">
      <Header />
      <div className="hero_section_conatainer">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {
              y: 200,
              opacity: 0,
            },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 1, ease: "easeOut" },
            },
          }}
          className="hero_section_one"
        >
          <p>
            xCollective is a professional growth community, with a mission to
            open ~virtual~ doors and help people get paid jobs in web3 by
            providing career coaching, networking & negotiation tips. We are
            focused on empowering women & nonbinary individuals to make hiring
            in web3 more inclusive. Our genesis NFT collection will be minting
            in the coming weeks
          </p>
          <div className="explore_btn_container">
            <a href="#mission">
              <p>explore more</p>
              <div className="first_circle">
                <div className="second_circle">
                  <div className="third_circle">
                    <div className="mainIcon_circle">
                      <img src={GREATER_THAN_SIGN} alt="GREATER_THAN_SIGN" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </motion.div>
        <div className="hero_section_two">
          <motion.img
            initial="hidden"
            animate="show"
            variants={{
              hidden: {
                opacity: 0,
                scale: 2,
              },
              show: {
                opacity: 1,
                scale: 1,
                transition: { duration: 1, ease: "easeOut" },
              },
            }}
            src={LADY_IMAGE}
            alt="LADY_IMAGE"
          />
          <div className="depth_container">
            <img src={darkDepth} alt="darkDepth" />
            <img src={lightDepth} alt="lightDepth" />
          </div>
          <img src={SPIRAL_LINES} alt="SPIRAL_LINES" className="spiral_lines" />
        </div>
      </div>
      <img src={LINE_ONE} alt="LINE_ONE" className="line_one" />
      <img src={LINE_TWO} alt="LINE_TWO" className="line_two" />
      <img src={DRAW_LINES} alt="DRAW_LINES" className="draw_lines" />
    </div>
  );
};

export default HeroSection;
