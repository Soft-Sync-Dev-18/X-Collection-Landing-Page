import { faqData } from "../../data/data";
import SingleFaq from "./SingleFaq";
import { motion } from "framer-motion";
import "./styles/index.scss";
import { useScroll } from "../useScroll";

const FaqSection = () => {
  const [element, controls] = useScroll();

  return (
    <motion.div
      id="About"
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
      className="faq_section"
    >
      <h1>FAQs</h1>
      {faqData.map((data,i) => (
        <SingleFaq data={data} key={i} />
      ))}
    </motion.div>
  );
};

export default FaqSection;
