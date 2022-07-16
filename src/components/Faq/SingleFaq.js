import React, { useState } from "react";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { motion, AnimatePresence } from "framer-motion";
import "./styles/index.scss";

const SingleFaq = ({ data }) => {
  const [open, setOpen] = useState(false);
  // useEffect(()=>{console.log(keyData)},[keyData])
  return (
    <motion.div className="single_fag">
      <motion.div className="question_wrapper"  onClick={() => setOpen(!open)}>
        <p>{data.question}</p>
        <span
          style={{ background: open ? "#552FB9" : "white" }}
         
        >
          {open ? (
            <ChevronDownIcon height={20} color="white" />
          ) : (
            <ChevronRightIcon height={20} />
          )}
        </span>
      </motion.div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: "-10%" }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
              },
            }}
            exit={{
              opacity: 0,
              y: "-10%",
              transition: {
                duration: 0.2,
              },
            }}
          >
            <motion.p className="answer">{data.answer}</motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SingleFaq;
