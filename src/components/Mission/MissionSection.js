import { useScroll } from "../useScroll";
import { motion } from "framer-motion";
import "./styles/index.scss";

const MissionSection = () => {
  const [element, controls] = useScroll();

  return (
    <motion.div
      className="mission_container"
      id="mission"
      ref={element}
      animate={controls}
      variants={{
        hidden: {
          opacity: 0,
        },
        show: {
          opacity: 1,
          transition: { duration: 1, ease: "easeOut" },
        },
      }}
      initial="hidden"
    >
      <div className="mission_wrapper">
          <h1>Our Mission</h1>
        <p>
         We are on a mission to help our community access
          great job opportunities and successfully negotiate paid jobs in web3.
          We are focused on empowering women and nonbinary people and making
          web3 hiring more inclusive. We help in every step of the job-finding
          process including mentoring, education, coaching, resume review,
          negotiation tactics, and compensation data to improve pay
          transparency. Stay tuned for our job board with Web3 opportunities,
          which we will be launching soon.
        </p>
      </div>
    </motion.div>
  );
};

export default MissionSection;